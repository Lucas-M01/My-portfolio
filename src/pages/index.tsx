import Head from 'next/head'

import { Home } from '@/components/Home'
import { Skills } from '@/components/Skills'
import { Portfolio } from '@/components/Portfolio'

export default function PageHome() {
  return (
    <div className="bg-gray-800 h-screen ">
      <Head>
        <title>Portfólio | Lucas Montenegro</title>
      </Head>

      <Home />
      <Skills />
      <Portfolio />
    </div>
  )
}
