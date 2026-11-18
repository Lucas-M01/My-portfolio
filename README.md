# Lucas Montenegro — Portfólio

Portfólio pessoal de desenvolvimento Full Stack, com apresentação, habilidades,
projetos e links de contato.

[Visitar o site](https://lucasmontenegro-ns.vercel.app/)

## Executar localmente

Use Node.js 24, indicado em `.nvmrc`, e npm.

```sh
nvm use
npm ci
npm run dev
```

O modo de desenvolvimento fica disponível em [localhost:3000](http://localhost:3000).

## Comandos

| Comando                          | Uso                                                     |
| -------------------------------- | ------------------------------------------------------- |
| `npm run dev`                    | Desenvolvimento com recarga automática                  |
| `npm run lint`                   | Regras de Next.js, React, TypeScript e acessibilidade   |
| `npm run typecheck`              | Verificação de tipos sem emitir arquivos                |
| `npm run format`                 | Formatação com Prettier                                 |
| `npm run format:check`           | Conferência de formatação sem alterar arquivos          |
| `npm run build`                  | Geração do site estático em `out/`                      |
| `npm run preview` ou `npm start` | Prévia local do último build em `http://127.0.0.1:4173` |
| `npm test`                       | Testes de navegador sobre o último build                |
| `npm run audit:production`       | Auditoria das dependências de produção                  |
| `npm run check`                  | Formatação, lint, tipos, build e testes, em sequência   |

`preview` serve somente o export estático, em loopback, para revisão local e testes.
Ele não é um servidor de produção. Na Vercel, publique os arquivos gerados pelo build.

## Testes

Instale o Chromium de teste uma vez e gere o build antes de executar a suíte:

```sh
npx playwright install chromium
npm run build
npm test
```

Os testes verificam o modal e o carrossel por teclado, o retorno de foco, o layout no
celular, o conteúdo sem JavaScript e os metadados de compartilhamento. O servidor
local é iniciado e encerrado pelo Playwright; deixe a porta 4173 livre.

O workflow em `.github/workflows/ci.yml` executa essas validações e a auditoria de
produção em pushes e pull requests. Ele não publica o site.

## Stack e organização

- Next.js 15 com Pages Router e export estático, React 18 e TypeScript estrito.
- Tailwind CSS 3, CSS Modules, Radix UI, Framer Motion e Keen Slider.
- `src/pages/`: página inicial, documento HTML e configuração global.
- `src/components/`: apresentação, habilidades, projetos e rodapé.
- `src/config/site.ts`: identidade e URLs usadas nos metadados.
- `public/`: imagens, ícones, robots e sitemap.
- `tests/`: testes de navegador.
- `scripts/serve-export.mjs`: servidor da prévia local e dos testes.

## Metadados e ambiente

O projeto funciona sem arquivo de ambiente. Os valores padrão apontam para o site
publicado. Para outro domínio, configure antes do build:

| Variável               | Uso                                                 |
| ---------------------- | --------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Origem pública do site, com HTTP ou HTTPS           |
| `NEXT_PUBLIC_OG_IMAGE` | URL da imagem social; relativa à origem ou absoluta |

A imagem padrão fica em `public/og-image.png`, com 1200×630 px. Se mudar o domínio,
atualize também `public/robots.txt` e `public/sitemap.xml`. Nenhum segredo deve usar
o prefixo `NEXT_PUBLIC_`.

O build usa `next/font/google` para obter e hospedar a Roboto. A primeira compilação
pode precisar de acesso ao Google Fonts. Os endpoints de Vercel Analytics e Speed
Insights pertencem à hospedagem e não estão disponíveis no servidor de prévia.

## Dependências

```sh
npm audit
npm audit --omit=dev
```

Consulte `docs/dependency-audit.md` para o resultado da revisão, o motivo do override
do PostCSS e as pendências das ferramentas de desenvolvimento. As versões exatas
estão no lockfile; use `npm ci` para reproduzi-las.
