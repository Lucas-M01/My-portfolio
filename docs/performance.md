# Performance — 18 de novembro de 2026

## Alterações

- Foto principal convertida de JPEG para WebP e redimensionada de 1200×1600 para
  780×1040. A proporção foi mantida, sem recorte; há resolução para até três vezes
  a largura máxima de 260 px usada no desktop.
- O original permanece preservado. `npm run images:optimize-profile` reproduz o
  arquivo servido usando o Sharp que já fazia parte do projeto.
- O modal dos projetos e suas dependências específicas passam a carregar sob
  demanda. Foco e aproximação do mouse antecipam o carregamento. A abertura,
  navegação por teclado, fechamento e retorno de foco continuam cobertos pelos
  testes de navegador.
- Export estático, hospedagem, enquadramento, cores e layout foram preservados.

| Arquivo servido no início da página |         Antes |       Depois |
| ----------------------------------- | ------------: | -----------: |
| Foto de perfil                      | 124.923 bytes | 44.612 bytes |

A redução da foto é de 64,3%. O arquivo gerado mantém qualidade WebP 85; a fonte
original não foi sobrescrita.

## Método de medição

Lighthouse 13.6.0, Chromium de teste do Playwright, emulação mobile e throttling
simulado. A ferramenta foi executada temporariamente com `npm exec`, sem adicioná-la
ao `package.json` ou ao CI.

As medições são do build estático em `http://127.0.0.1:4173`, não da Vercel. O
servidor de prévia não comprime respostas nem aplica a política de cache da CDN.
O Lighthouse avisou que a CPU deste ambiente é mais lenta que a esperada; suas
notas e tempos devem ser tratados como diagnóstico local, sem prometer o mesmo
resultado em produção. Não foram desativadas as animações para obter a nota.

Foram preservados o build anterior e os relatórios brutos durante a comparação.
Os tamanhos dos arquivos e do JavaScript referenciado no HTML são medidas diretas,
independentes da variação da pontuação.

## Lighthouse mobile — resultados locais

Foram executadas três medições de cada build, sequencialmente e sem compilação
concorrente. A tabela abaixo usa a mediana de cada indicador; a execução inicial
usada para diagnóstico não entra nesses cálculos.

| Indicador           |    Antes |   Depois |
| ------------------- | -------: | -------: |
| Nota de performance |       44 |       45 |
| LCP                 |   6,12 s |   5,63 s |
| TBT                 | 1.456 ms | 1.186 ms |
| CLS                 |        0 |        0 |

| Execução | Nota |    LCP |      TBT | CLS |
| -------- | ---: | -----: | -------: | --: |
| Antes 1  |   44 | 6,14 s | 4.313 ms |   0 |
| Antes 2  |   47 | 5,12 s | 1.456 ms |   0 |
| Antes 3  |   42 | 6,12 s | 1.412 ms |   0 |
| Depois 1 |   46 | 5,56 s | 1.186 ms |   0 |
| Depois 2 |   45 | 6,69 s | 1.003 ms |   0 |
| Depois 3 |   44 | 5,63 s | 1.329 ms |   0 |

As seis execuções receberam o aviso de CPU lenta. A diferença de um ponto na nota
não demonstra, isoladamente, um ganho relevante. As reduções dos arquivos são
comprovadas, mas a diferença dos tempos não deve ser atribuída integralmente ao
código devido à variação do ambiente. A medição deve ser repetida na Vercel após
uma publicação aprovada.

Os relatórios de rede confirmam que os chunks específicos do modal não foram
solicitados durante o carregamento inicial nas três execuções do build otimizado.

## Verificações

- Formatação, lint, typecheck e build passaram.
- Os cinco testes de navegador passaram, incluindo os seis projetos, abertura por
  teclado, troca de imagens, fechamento e retorno de foco.
- A foto manteve exatamente as mesmas posições, dimensões, `object-fit` e bordas
  nas conferências de 1280×900 e 390×844. As capturas foram inspecionadas.
- Ainda há espaço para investigar o custo de hidratação e das animações. Esta
  etapa não substitui uma medição de usuários reais nem uma revisão adicional de
  JavaScript. O visual e as animações existentes não foram redesenhados.

## Reproduzir a medição

Em um terminal, rode `npm run build` e `npm run preview`. Em outro terminal, com
Chrome/Chromium disponível (ou `CHROME_PATH` apontando para o executável de teste):

```sh
npm exec --yes --package=lighthouse@13.6.0 -- lighthouse http://127.0.0.1:4173/ \
  --only-categories=performance --form-factor=mobile \
  --throttling-method=simulate \
  --chrome-flags='--headless --no-sandbox --disable-dev-shm-usage' \
  --output=json --output-path=/tmp/portfolio-lighthouse.json
```

Os flags acima reproduzem o Chromium de teste isolado desta revisão. Repita três
vezes, preservando cada arquivo, e evite medir enquanto o build estiver rodando.

## Referências

- [Variação e cálculo da nota do Lighthouse](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)
- [Carregamento sob demanda no Next 15](https://nextjs.org/docs/15/pages/guides/lazy-loading)
