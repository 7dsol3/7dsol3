<div align="center">
  <img src="assets/konaet-native-cover.svg" width="100%" alt="Adilson Oliveira — Konaet Soberana: tecnologia com identidade própria">

  <p><strong>Ecossistema Konaet · Contratos .ko · VLOCK7SIN · Money DNA</strong></p>

  <p>
    <a href="https://konaet-ko-runtime.alkalipixie.chatgpt.site">Conhecer a Konaet</a> ·
    <a href="https://konaet-ko-runtime.alkalipixie.chatgpt.site/console">Executar .ko online</a> ·
    <a href="https://wa.me/message/43CXZJ7NW2FPDO">Conversar sobre um projeto</a>
  </p>
  <p>
    <a href="https://github.com/7dsol3/konaet-sovereign-spec/blob/main/KO-QUICKSTART.md">Começar com .ko</a> ·
    <a href="https://github.com/7dsol3/konaet-sovereign-spec/blob/main/ECOSYSTEM.md">Guia do ecossistema</a> ·
    <a href="https://github.com/7dsol3/konaet-sovereign-spec/releases/latest">Aplicativo Windows</a>
  </p>
</div>

## Konaet Soberana

Crio software, experiências digitais e tecnologia com identidade própria.
A Konaet reúne regras nativas `.ko`, infraestrutura VLOCK7SIN e ativos do
ecossistema em uma mesma visão de produto.

O console público permite escrever uma política `.ko`, enviar um contexto
e conferir o resultado das regras executadas no servidor. No perfil v6 do
VLOCK, a política participa da validação do evento e do estado da instância.

![Arquitetura em alto nível: política .ko, validação, VLOCK7SIN e preservação do estado. Money DNA e os ativos possuem identidades próprias.](assets/konaet-architecture.svg)

## Ativos do ecossistema

| Identidade | Papel no sistema |
|---|---|
| <img src="assets/snd.svg" width="28" height="28" alt=""> **SINDRA · SND** | Unidade nativa da gênese VLOCK7SIN, com regras `.ko` e nove casas decimais |
| <img src="assets/naet.svg" width="28" height="28" alt=""> **Konaet NAET** | Unidade da aplicação, com saldos e operações no ledger Konaet |
| <img src="assets/kwrk.svg" width="28" height="28" alt=""> **Konaet Work · KWRK** | Unidade de trabalho registrada no ecossistema |
| <img src="assets/kact.svg" width="28" height="28" alt=""> **Konaet Actum · KACT** | Unidade ligada à execução contabilizada na aplicação |

## Money DNA

**8.888.888.888.888 unidades de referência da política.**

Esse número identifica a capacidade simbólica de referência do Money DNA,
que organiza observações e compromissos criptográficos. É uma referência
do modelo, distinta do saldo financeiro, da emissão e da cotação dos ativos.

```mermaid
flowchart LR
    P["Política .ko"] --> V["VLOCK7SIN"]
    S["SINDRA"] --> V
    V --> E["Estado e histórico"]
    A["NAET · KWRK · KACT"] --> L["Ledger Konaet"]
    D["Money DNA"] --> C["Observações e compromissos"]
    style P fill:#29223f,stroke:#a897ff,color:#eef2ff
    style V fill:#29223f,stroke:#a897ff,color:#eef2ff
    style S fill:#29223f,stroke:#a897ff,color:#eef2ff
    style E fill:#142837,stroke:#5bd9e3,color:#eef2ff
    style A fill:#142837,stroke:#5bd9e3,color:#eef2ff
    style L fill:#142837,stroke:#5bd9e3,color:#eef2ff
    style D fill:#29223f,stroke:#a897ff,color:#eef2ff
    style C fill:#142837,stroke:#5bd9e3,color:#eef2ff
```

## Projetos e parcerias

- **[Konaet Soberana](https://konaet-ko-runtime.alkalipixie.chatgpt.site)** — ecossistema, ativos e tecnologia nativa.
- **[Console .ko](https://konaet-ko-runtime.alkalipixie.chatgpt.site/console)** — compilação e execução de regras online.
- **[Konaet Sentinel](https://7dsol3.github.io/konaet-sentinel/)** — ferramentas de segurança para servidores de jogos.

## .ko para criar e executar

| Comece por aqui | O que você encontra |
|---|---|
| [Console no navegador](https://konaet-ko-runtime.alkalipixie.chatgpt.site/console) | Editor, contexto, importação e resultado de cada regra |
| [Seu primeiro projeto .ko](https://github.com/7dsol3/konaet-sovereign-spec/blob/main/KO-QUICKSTART.md) | Fonte e exemplos prontos, compilação e execução local ou online |
| [Referência da linguagem](https://github.com/7dsol3/konaet-sovereign-spec/blob/main/KO-RUNTIME.md) | Campos, operadores, fases, hashes e API |
| [Aplicativo Windows](https://github.com/7dsol3/konaet-sovereign-spec/releases/latest/download/Konaet-Console-Windows-x64.zip) | Console e quatro processos validadores de demonstração, com Node incluído |

O fluxo de trabalho permite criar um projeto, compilar a política, conferir
o artefato e executar os exemplos. O modo online confere se o programa
retornado pelo servidor corresponde ao hash compilado no pacote.

## Vamos construir

Integrações, aplicações sob medida e pesquisa orientada a produto começam
com um escopo claro: objetivo, dados, permissões, entregas e operação.

**[Falar com a Konaet sobre um projeto](https://wa.me/message/43CXZJ7NW2FPDO).**

Os diagramas apresentam recursos e fluxos de alto nível. Dados de contas,
chaves e configurações privadas pertencem à operação do sistema.


<details>
<summary>Konaet Sentinel — apresentação e informações do projeto</summary>

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

</details>
