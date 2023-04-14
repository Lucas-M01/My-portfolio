import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Header } from '@/components/Header'
import { Home } from '@/components/Home'
import { Skills } from '@/components/Skills'

export default function PageHome() {
  return (
    <div className="bg-gray-800 h-screen ">
      <Head>
        <title>Portfólio</title>
      </Head>
      <Header />

      <Home />
      <Skills />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
