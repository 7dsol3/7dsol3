<div align="center">
  <img src="assets/cover.jpg" alt="Konaet — jogo limpo, por engenharia" width="100%">
</div>

### Software independente

Construo anti-cheat, ferramentas de jogo e sistemas que mostram a evidência
antes de pedir confiança. A estética é calma; a engenharia é verificável.

## Em destaque

**[Konaet Sentinel](https://7dsol3.github.io/konaet-sentinel/)** — anti-cheat
comportamental para servidores que você opera. Regras físicas, 17 sinais
explicáveis, escudo que reduz o efeito da trapaça em quem joga limpo e
banimento manual por máquina. Sem ban automático.

- **Memória sob confirmação:** um caso revisado por humano entra no motor em
  211 ms (mediana), com gates de falso positivo e rollback. O sistema não
  aprende sozinho; o limite fora de distribuição está publicado.
- [Site e teste de 30 dias](https://7dsol3.github.io/konaet-sentinel/)
- [Central de provas](https://7dsol3.github.io/konaet-sentinel/provas.html) —
  benchmark, robustez, aprendizado confirmado, comparativo de arquitetura e
  `audit` verificável.
- [Release 1.3.0](https://github.com/7dsol3/konaet-sentinel/releases/tag/v1.3.0)
  — pacote trial com `HASHES.txt`; o `audit` recalcula modelo, gates, memória e
  binário.
- [Documentos, limites e licença](https://7dsol3.github.io/konaet-sentinel/legal.html)
- [Benchmark](https://7dsol3.github.io/konaet-sentinel/assets/benchmark.json),
  [robustez de rede](https://7dsol3.github.io/konaet-sentinel/assets/robustness.json)
  e [prova de aprendizado](https://7dsol3.github.io/konaet-sentinel/assets/adaptation.json)
  publicados, com o aviso sintético dentro dos arquivos.
- Código-fonte privado; o pacote público contém apenas executável e documentos.

## Como trabalho

**Evidência antes da claim.** Um resultado só existe quando um teste
reproduzível o sustenta. Dataset sintético é rotulado como sintético.

**Limites declarados.** Nenhum anti-cheat pega todos os cheats. O trial não é
um DRM inquebrável. O ban por máquina é um hash com decisão humana, não
atestação de GPU.

**Design sem ruído.** Liquid glass, tipografia editorial e movimento discreto.
A interface existe para deixar a decisão clara, não para parecer tecnologia.

## Stack

`Python` · `Ed25519` · `SHA-256` · `HTML/CSS` · `Playwright` · `PyInstaller`

## Contato

- Site: <https://7dsol3.github.io/konaet-sentinel/>
- WhatsApp: [Konaet](https://wa.me/message/43CXZJ7NW2FPDO)
- Brasil
