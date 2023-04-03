import Image from 'next/image'
import TestImg from '../../public/testPer.jpg'
import { DownloadSimple } from 'phosphor-react'

export function Home() {
  return (
    <section className="text-center text-white lg:flex mt-[5rem]">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl font-bold">Olá, me chamo</h3>
          <h1 className="text-4xl">Lucas Montenegro</h1>
          <h4 className="text-4xl font-bold">
            E eu sou um <span>Desenvolvedor Web</span>
          </h4>
          <div className="flex justify-center">
            <a
              href=""
              className="py-4 px-6 lg:w-[50%] bg-pink-500 flex gap-2 justify-center items-center rounded-full cursor-pointer hover:bg-pink-400"
            >
              Download CV
              <DownloadSimple weight="bold" size={20} />
            </a>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <Image
            src={TestImg}
            width={120}
            height={120}
            className="rounded-full"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
