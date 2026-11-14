"""Render the Prisma profile, exercise its controls, and refresh the README cover.

Serve docs/ on localhost first. Requires Playwright and an installed Chrome on
Windows (or Playwright Chromium on other systems).
"""
from __future__ import annotations

import argparse
import json
import platform
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]


def main(url: str):
    output = ROOT / "artifacts" / "profile"
    output.mkdir(parents=True, exist_ok=True)
    rows = []
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True, **({"channel": "chrome"} if platform.system() == "Windows" else {}))
        for width in (320, 390, 768, 1024, 1280, 1920):
            context = browser.new_context(viewport={"width": width, "height": 950})
            page = context.new_page()
            errors = []
            page.on("pageerror", lambda error: errors.append(str(error)))
            page.goto(url)
            page.evaluate("document.fonts.ready")
            assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), width
            assert page.locator(".project-card").count() == 3
            for anchor in page.locator('a[href^="#"]').all():
                target = anchor.get_attribute("href")
                assert page.locator(target).count(), target
            page.screenshot(path=str(output / f"profile-{width}.png"), full_page=True)
            if width == 1280:
                # Same component as the live portfolio, captured without motion.
                page.locator(".profile-cover").screenshot(path=str(ROOT / "assets" / "prisma-profile.png"))
            page.locator(".light-controls summary").click()
            page.locator('[data-light-mode="fixed"]').click()
            page.locator("#edge-width").evaluate("e => {e.value='4';e.dispatchEvent(new Event('input',{bubbles:true}));}")
            assert page.locator("#edge-width-value").inner_text() == "4 px"
            page.reload()
            page.locator(".light-controls summary").click()
            assert page.locator("#edge-width").input_value() == "4"
            assert page.locator("body").get_attribute("data-light-mode") == "fixed"
            page.locator("#signature-light").click()
            assert page.locator("#signature-light").get_attribute("aria-pressed") == "false"
            page.locator("#reset-light").click()
            assert page.locator("#edge-width").input_value() == "2"
            assert page.locator("#signature-light").get_attribute("aria-pressed") == "true"
            assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), (width, "controls")
            page.mouse.move(width // 2, 250)
            page.wait_for_timeout(50)
            assert not errors, (width, errors)
            rows.append({"width": width, "overflow": 0, "controls": "PASS", "status": "PASS"})
            context.close()
        context = browser.new_context(viewport={"width": 390, "height": 950}, reduced_motion="reduce")
        page = context.new_page()
        page.goto(url)
        page.locator(".light-controls summary").click()
        page.locator('[data-light-mode="spin"]').click()
        assert page.locator("body").get_attribute("data-light-mode") == "fixed"
        browser.close()
    report = {"status": "PASS", "viewports": rows, "reduced_motion": "PASS", "flows": ["light_mode", "edge_width", "persistence", "signature_toggle", "reset", "anchor_targets"]}
    (output / "report.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report))


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--url", default="http://127.0.0.1:8766/")
    main(parser.parse_args().url)
