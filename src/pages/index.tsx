import Head from 'next/head'
import { Home } from '@/components/Home'
import { Skills } from '@/components/Skills'
import { Portfolio } from '@/components/Portfolio'
import { Footer } from '@/components/Footer'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lucasmontenegro-ns.vercel.app'

const ogImage =
  process.env.NEXT_PUBLIC_OG_IMAGE ?? `${siteUrl}/assets/og-image.png`

const META = {
  title: 'Lucas Montenegro | Desenvolvedor Full Stack Web',
  description:
    'Portfólio de Lucas Montenegro — Desenvolvedor Full Stack com foco em TypeScript, React, Next.js, Node.js, Java e Python. Veja meus projetos e entre em contato!',
  url: siteUrl,
  image: ogImage,
}

export default function PageHome() {
  return (
    <>
      <Head>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <meta name="author" content="Lucas Montenegro" />
        <meta
          name="keywords"
          content="desenvolvedor web, full stack, react, next.js, typescript, node.js, java, python, spring boot, portfólio, joão pessoa"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={META.url} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={META.url} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={META.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Lucas Montenegro" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={META.image} />
      </Head>

      <div className="min-h-screen">
        <Home />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </>
  )
}
