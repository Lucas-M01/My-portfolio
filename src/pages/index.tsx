import { Header } from '@/components/Header'
import { Home } from '@/components/Home'
import { Head } from 'next/document'

export default function PageHome() {
  return (
    <>
      <Head>
        <title>Portfólio</title>
      </Head>

      <div className="bg-gray-800 h-screen">
        <Header />
        <div className="w-[90%] mx-auto">
          <Home />
        </div>
      </div>
    </>
  )
}
