'use-client'
import Head from 'next/head'

import { Home } from '@/components/Home'
import { Skills } from '@/components/Skills'
import { Portfolio } from '@/components/Portfolio'
import { Footer } from '@/components/Footer'

export default function PageHome() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Portfólio | Lucas Montenegro</title>
      </Head>

      <div className="">
        <Home />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </div>
  )
}
