const productionUrl = 'https://lucasmontenegro-ns.vercel.app/'

function absoluteHttpUrl(value: string, base?: string): string {
  const url = new URL(value.trim(), base)

  if (url.protocol !== 'https:' && url.protocol !== 'http:') {
    throw new Error('As URLs públicas do site devem usar HTTP ou HTTPS.')
  }

  return url.href
}

const siteUrl = absoluteHttpUrl(
  '/',
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || productionUrl,
)

export const siteConfig = {
  name: 'Lucas Montenegro',
  title: 'Lucas Montenegro | Desenvolvedor Full Stack Web',
  description:
    'Portfólio de Lucas Montenegro — Desenvolvedor Full Stack com foco em TypeScript, React, Next.js, Node.js, Java e Python. Veja meus projetos e entre em contato!',
  url: siteUrl,
  image: absoluteHttpUrl(
    process.env.NEXT_PUBLIC_OG_IMAGE?.trim() || '/og-image.png',
    siteUrl,
  ),
  github: 'https://github.com/Lucas-M01',
  linkedin: 'https://www.linkedin.com/in/lucasmontenegrons/',
}
