import Image from 'next/image'
import TestImg from '../../public/testPer.jpg'
import { DownloadSimple } from 'phosphor-react'

export function Home() {
  return (
    <section className="text-center sm:text-left text-white sm:flex sm:flex-wrap  sm:items-center mt-[5rem]">
      <div className="flex  flex-col-reverse w-[90%] mx-auto sm:my-28 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-2 lg:w-1/2 lg:gap-1">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Olá, me chamo
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Lucas Montenegro
          </h1>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold lg:whitespace-nowrap">
            E eu sou um{' '}
            <span className="text-blue-500 ">
              Desenvolvedor <span className="">Web</span>
            </span>
          </h4>
          <div className="flex justify-center sm:justify-start mt-5 lg:w-full">
            <a
              href=""
              className="py-3 px-7 bg-pink-500 flex gap-2 justify-center items-center rounded-[4rem] hover:rounded-none duration-150 font-semibold text-lg md:text-xl hover:tracking-[.1rem] shadow-[0_0_1rem_rgba(0,0,0,0.3)] cursor-pointer hover:bg-pink-400"
            >
              Download CV
              <DownloadSimple weight="bold" className="text-xl md:text-2xl" />
            </a>
          </div>
        </div>

        <div className="flex justify-center mb-10 sm:mb-0">
          <Image
            src={TestImg}
            width={220}
            height={220}
            className="rounded-full "
            alt=""
          />
        </div>
      </div>

      <div className="bg-zinc-800 py-8 w-screen text-center">
        <h4 className="font-semibold text-2xl mb-4 md:text-3xl lg:text-4xl">
          Sobre min
        </h4>
        <p className="text-zinc-300 w-[90%] mx-auto">
          Sou um desenvolvedor apaixonado por tecnologia, com experiência em
          desenvolvimento web e conhecimentos em diversas linguagens, como HTML,
          CSS, JavaScript, React, PHP, MySQL, C#, Java, Next, Node, PostgreSQL,
          MongoDB, Python e Django. Comunicativo e pró-ativo, já trabalhei em
          projetos desafiadores que me permitiram aprimorar minhas habilidades
          técnicas e de trabalho em equipe. Atualmente estou cursando o 5º
          período de Ciência da Computação na Cruzeiro do Sul EAD, e estou mais
          focado em React, TypeScript e Next. Falo português e um pouco de
          inglês e estou sempre em busca de novas oportunidades para me
          desenvolver como profissional.
        </p>
      </div>
    </section>

    // <section className="flex justify-center text-center sm:text-left">
    //   <div className="flex flex-col-reverse justify-center gap-5 sm:w-full sm:flex-row sm:justify-between">
    //     <div className="">
    //       <h3 className="font-bold">Olá, me chamo</h3>
    //       <h1 className="font-bold">Lucas Montenegro</h1>
    //       <h4 className="font-bold">
    //         E eu sou um{' '}
    //         <span className="">
    //           Desenvolvedor <span className="">Web</span>
    //         </span>
    //       </h4>
    //       <div className="">
    //         <a href="" className="font-semibold flex items-center gap-2">
    //           Download CV
    //           <DownloadSimple weight="bold" className="" />
    //         </a>
    //       </div>
    //     </div>

    //     <div className="">
    //       <Image
    //         src={TestImg}
    //         width={220}
    //         height={220}
    //         className="rounded-full "
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </section>
  )
}
