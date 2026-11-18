# Revisão de dependências — 18 de novembro de 2026

## Resultado

| Verificação | Resultado retornado pelo npm |
| --- | --- |
| Auditoria inicial | 25 ocorrências: 1 crítica, 23 altas e 1 moderada |
| `npm audit --omit=dev` após a atualização | 0 vulnerabilidades conhecidas |
| `npm audit` completo após a atualização | 18 ocorrências altas, todas derivadas de picomatch |

As 18 ocorrências restantes propagam o mesmo aviso,
[GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf),
pelas ferramentas de desenvolvimento. A página oficial marca o aviso como retirado
em 18 de novembro de 2026; o npm ainda o retornou nesta consulta. O resultado bruto
foi preservado nesta documentação, sem mascarar o alerta ou aplicar uma migração
automática para fazê-lo desaparecer.

Para repetir as consultas:

```sh
npm audit
npm audit --omit=dev
```

## Decisões

- Next atualizado para 15.5.29, mantendo Pages Router e export estático.
- PostCSS atualizado para 8.5.33 e Sharp para 0.35.5. O override restrito a
  `next > postcss` usa a mesma versão principal 8, pois o Next ainda declara uma
  cópia antiga com versão exata. Rever esse override quando atualizar o Next.
- Tailwind permanece na linha 3 para preservar a interface. Não foi aplicada a
  migração para Tailwind 4 sugerida pelo cálculo automático do npm.
- ESLint alinhado a `eslint-config-next` 15.5.29. O adaptador `@eslint/eslintrc`
  permite usar o formato de configuração atual do ESLint com a configuração do
  Next 15, conforme sua documentação.
- ESLint 9 é a versão principal mais recente aceita formalmente pelo
  `eslint-config-next` 15, mas já é marcado como fora de suporte pelo pacote.
  Uma atualização conjunta para Next 16 e ESLint 10 fica para outra etapa.
- TypeScript atualizado para 5.9.3; tipos e compilador ficam em `devDependencies`.
- Prettier e Playwright são dependências explícitas de desenvolvimento: um mantém
  a formatação reproduzível e o outro executa os testes de navegador.
- `react-icons` permanece fixado em 5.4.0 para preservar os ícones existentes:
  versões mais novas da linha 5 removeram `SiCss3` e quebraram o build.
- `hamburger-react`, `tailwind-scrollbar` e a configuração antiga da Rocketseat
  foram removidos. Não foi usado `npm audit fix --force`.

O lockfile foi resolvido novamente e instalado com `npm ci`, evitando manter a
cópia antiga do PostCSS que o npm preservava na árvore anterior.

## Fontes

- [ESLint no Next 15](https://nextjs.org/docs/15/app/api-reference/config/eslint)
- [Política de suporte do ESLint](https://eslint.org/version-support/)
- [Aviso do picomatch](https://github.com/advisories/GHSA-fc5q-39xc-vjpf)
