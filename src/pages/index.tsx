import { Header } from '@/components/Header'
import { Home } from '@/components/Home'
import { Skills } from '@/components/Skills'
import Head from 'next/head'

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
