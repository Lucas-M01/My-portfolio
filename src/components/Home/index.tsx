import Image from 'next/image'
import TestImg from '../../../public/testPer.jpg'
import { DownloadSimple } from 'phosphor-react'
import { useEffect, useRef } from 'react'
import styles from './section.module.css'

export function Home() {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const text = textRef.current

    const textLoad = () => {
      setTimeout(() => {
        if (text) {
          text.textContent = 'Web'
        }
      }, 0)
      setTimeout(() => {
        if (text) {
          text.textContent = 'Front-end'
        }
      }, 4000)
    }

    textLoad()
    setInterval(textLoad, 8000)
  }, [])

  return (
    <section
      className={`text-center bg-gray-800 sm:text-left text-white sm:flex sm:flex-wrap sm:items-center pt-20 ${styles.section}`}
      id="home"
    >
      <div className="flex bg-gray-800 flex-col-reverse w-[85%] mx-auto sm:pt-28 sm:pb-32 sm:flex-row sm:justify-between">
        <div
          className={`flex flex-col bg-gray-800 gap-2 pb-14 sm:pb-0 lg:w-1/2 lg:gap-1 ${styles.home}`}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Olá, me chamo
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Lucas Montenegro
          </h1>
          <h4 className="text-xl sm:text-2xl flex gap-2 bg-gray-800 md:text-3xl lg:text-4xl font-bold items-center w-full whitespace-nowrap tracking-tight md:tracking-normal">
            E eu sou um
            <span className="text-blue-500">Desenvolvedor</span>
            <div className="relative text-blue-500 overflow-hidden">
              <span
                className="before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gray-800 before:border-l-2 before:border-solid before:border-blue-500 before:animate-typing"
                ref={textRef}
              ></span>
            </div>
          </h4>
          <div className="flex justify-center sm:justify-start bg-gray-800 mt-5 lg:w-full">
            <a
              href="https://drive.google.com/u/0/uc?id=1xxCMlUmAmbJPAXh89SZCwn2T-0_xZp6l&export=download"
              className={`relative py-3 px-7 border-solid border-2 border-blue-500 flex gap-2 justify-center items-center rounded-[4rem] duration-200 text-blue-500 hover:drop-shadow-[0_0_1rem_rgb(59,130,246)] hover:text-white hover:bg-blue-500 font-semibold text-lg md:text-xl shadow-[0_0_1rem_rgba(0,0,0,0.3)] cursor-pointer `}
            >
              Download CV
              <DownloadSimple weight="bold" className="text-xl md:text-2xl" />
            </a>
          </div>
        </div>

        <div className="flex justify-center pb-10 bg-gray-800 sm:pb-0">
          <Image
            src={TestImg}
            width={220}
            height={220}
            className={`rounded-full ${styles.perfil} `}
            alt=""
          />
        </div>
      </div>

      <section
        className="bg-gray-800 py-16 w-screen min-h-[35vh] text-center flex items-center"
        id="about"
      >
        <div className="bg-zinc-800 h-full flex flex-col ">
          <h4 className="font-semibold text-2xl mb-4 md:text-3xl pt-10 lg:text-4xl">
            Sobre mim
          </h4>
          <p className="text-zinc-300 w-[85%] mx-auto pb-5">
            Sou um desenvolvedor apaixonado por tecnologia, com experiência em
            desenvolvimento web e conhecimentos em diversas linguagens, como
            HTML, CSS, JavaScript, React, PHP, MySQL, C#, Java, Next, Node,
            PostgreSQL, MongoDB, Python e Django. Comunicativo e pró-ativo, já
            trabalhei em projetos desafiadores que me permitiram aprimorar
            minhas habilidades técnicas e de trabalho em equipe. Atualmente
            estou cursando o 5º período de Ciência da Computação na Cruzeiro do
            Sul EAD, e estou mais focado em React, TypeScript e Next. Falo
            português e um pouco de inglês e estou sempre em busca de novas
            oportunidades para me desenvolver como profissional.
          </p>
        </div>
      </section>
    </section>
  )
}
