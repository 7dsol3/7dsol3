"use strict";
(() => {
  const KEY = "konaet-prisma-profile-v1";
  const defaults = {mode:"follow", width:2, glow:45, signature:true};
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const limit = (value,min,max,fallback) => Number.isFinite(Number(value)) ? Math.max(min,Math.min(max,Math.round(Number(value)))) : fallback;
  function sanitize(value) {
    const input = value && typeof value === "object" ? value : {};
    return {mode:["follow","spin","fixed"].includes(input.mode) ? input.mode : defaults.mode,width:limit(input.width,1,4,2),glow:limit(input.glow,0,100,45),signature:input.signature !== false};
  }
  let settings;
  try { settings = sanitize(JSON.parse(localStorage.getItem(KEY) || "null")); }
  catch { settings = {...defaults}; }
  const root = document.documentElement;
  const edge = document.getElementById("edge-width");
  const glow = document.getElementById("light-glow");
  const signature = document.getElementById("signature-light");
  let pending = false;
  function apply(save = true) {
    const mode = reducedMotion && settings.mode === "spin" ? "fixed" : settings.mode;
    document.body.dataset.lightMode = mode;
    document.body.dataset.signatureLight = settings.signature ? "on" : "off";
    signature.setAttribute("aria-pressed", String(settings.signature));
    root.style.setProperty("--rw", settings.width + "px");
    root.style.setProperty("--gl", String(settings.glow / 100));
    if (mode === "fixed") root.style.setProperty("--ang", "40deg");
    document.querySelectorAll("[data-light-mode]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lightMode === mode)));
    edge.value = settings.width; glow.value = settings.glow;
    edge.style.setProperty("--v", ((settings.width - 1) / 3 * 100) + "%");
    glow.style.setProperty("--v", settings.glow + "%");
    document.getElementById("edge-width-value").value = settings.width + " px";
    document.getElementById("light-glow-value").value = settings.glow + "%";
    if (save) { try { localStorage.setItem(KEY,JSON.stringify(settings)); } catch { /* The controls still work for this tab. */ } }
  }
  document.querySelectorAll("[data-light-mode]").forEach(button => button.addEventListener("click", () => {
    settings.mode = button.dataset.lightMode; apply();
    document.getElementById("light-status").textContent = reducedMotion && settings.mode === "spin" ? "A preferência do navegador por menos movimento está ativa." : "Luz ajustada e salva neste navegador.";
  }));
  edge.addEventListener("input", () => { settings.width = limit(edge.value,1,4,2); apply(); });
  glow.addEventListener("input", () => { settings.glow = limit(glow.value,0,100,45); apply(); });
  signature.addEventListener("click", () => { settings.signature = !settings.signature; apply(); });
  document.getElementById("reset-light").addEventListener("click", () => {
    settings = {...defaults}; root.style.setProperty("--ang","40deg"); apply();
    document.getElementById("light-status").textContent = "Aparência original do Prisma restaurada.";
  });
  document.querySelector(".profile-cover").addEventListener("pointermove", event => {
    if (settings.mode !== "follow" || reducedMotion || pending || event.pointerType === "touch") return;
    pending = true;
    requestAnimationFrame(() => {
      const bounds = event.currentTarget?.getBoundingClientRect() || document.querySelector(".profile-cover").getBoundingClientRect();
      const angle = Math.atan2(event.clientY - bounds.top - bounds.height / 2,event.clientX - bounds.left - bounds.width / 2) * 180 / Math.PI + 90;
      root.style.setProperty("--ang", angle + "deg"); pending = false;
    });
  });
  apply(false);
})();
