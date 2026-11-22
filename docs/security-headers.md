# Headers e links externos

O site usa `output: 'export'`. Os headers de produção ficam no `vercel.json`,
aplicados a todos os caminhos, conforme a
[documentação da Vercel](https://vercel.com/docs/project-configuration/vercel-json#headers).

| Header                                             | Objetivo                                                                     |
| -------------------------------------------------- | ---------------------------------------------------------------------------- |
| `X-Content-Type-Options: nosniff`                  | Respeitar o tipo de conteúdo informado pelo servidor.                        |
| `X-Frame-Options: DENY`                            | Impedir a incorporação do portfólio em frames de outros sites.               |
| `Referrer-Policy: strict-origin-when-cross-origin` | Evitar enviar o caminho completo da página para outra origem.                |
| `Permissions-Policy`                               | Desabilitar câmera, microfone e geolocalização, que o portfólio não utiliza. |

Links HTTP(S) que abrem outra aba incluem `rel="noopener noreferrer"`.
O contato por `mailto:` abre diretamente no cliente de email.
Os testes verificam os links da página e de todos os modais.

## Validação no próximo deploy autorizado

O preview local serve apenas a pasta `out/`: ele **não reproduz os headers da
Vercel**. Lint, typecheck, build e testes locais não comprovam a aplicação dos
headers na CDN. Não houve push nem deploy nesta etapa.

Depois de publicar, conferir os quatro headers nas respostas de `/`,
`/og-image.png` e de um arquivo `/_next/static/` pelo painel Network do navegador
ou com `curl -I`. Conferir também a abertura dos projetos e os contatos.

Uma CSP restritiva exige uma etapa própria de inventário e validação dos scripts
do Next.js, estilos e integrações de Analytics/Speed Insights. Ela não foi
adicionada nesta etapa.
