import Head from 'next/head'
import { Home } from '@/components/Home'
import { Skills } from '@/components/Skills'
import { Portfolio } from '@/components/Portfolio'
import { Footer } from '@/components/Footer'
import { siteConfig as META } from '@/config/site'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: META.name,
  url: META.url,
  jobTitle: 'Desenvolvedor Full Stack Web',
  sameAs: [META.github, META.linkedin],
}

export default function PageHome() {
  return (
    <>
      <Head>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <meta name="author" content={META.name} />
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
        <meta property="og:image:alt" content={META.title} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content={META.name} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={META.image} />
        <meta name="twitter:image:alt" content={META.title} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
          }}
        />
      </Head>

      <main className="min-h-screen" id="main-content">
        <Home />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}
