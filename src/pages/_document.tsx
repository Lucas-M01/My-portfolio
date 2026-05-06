import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon_io/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/favicon_io/safari-pinned-tab.svg"
          color="#3B82F6"
        />
        <meta name="msapplication-TileColor" content="#1F2937" />
        <meta name="theme-color" content="#1F2937" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
