import Image from 'next/image'
import TestImg from '../../../public/testPer.jpg'
import { BsLinkedin } from 'react-icons/bs'
import { VscChevronDown, VscGithubInverted } from 'react-icons/vsc'
import { DownloadSimple } from 'phosphor-react'
import { ButtonLink } from './components/ButtonLink'
import { PiMicrosoftOutlookLogoFill } from 'react-icons/pi'

export function Home() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className={`text-center sm:text-left bg-gray-800 w-full text-white sm:flex sm:flex-col sm:items-center `}
      id="home"
    >
      <div className="flex flex-col pt-28 sm:mx-auto  sm:w-5/6 sm:pb-32 lg:flex-row lg:items-center  lg:justify-between">
        <div className="flex justify-center pb-10 sm:pb-0">
          <Image
            src={TestImg}
            width={220}
            height={220}
            className={`rounded-full  `}
            alt=""
          />
        </div>
        <div
          className={`flex flex-col items-center lg:items-start gap-2 mt-8 pb-14 sm:pb-0 lg:w-1/2 lg:gap-1 `}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Olá, me chamo
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Lucas Montenegro
          </p>
          <p className="text-xl sm:text-2xl flex gap-2 md:text-3xl lg:text-4xl font-bold items-center whitespace-nowrap tracking-tight md:tracking-normal mx-auto sm:mx-0">
            E eu sou um
            <span className="text-blue-500">Desenvolvedor Web</span>
          </p>
          <div className="flex justify-center gap-2 flex-wrap md:justify-start mt-5 lg:w-full">
            <ButtonLink
              href="https://drive.google.com/uc?export=download&id=1Skw3F6fojSGo9pfjMKUNeONu9iHrE9Ct"
              text="Download CV"
              icon={
                <DownloadSimple weight="bold" className="text-xl md:text-2xl" />
              }
            />
            <ButtonLink
              href="https://github.com/Lucas-M01"
              text="GitHub"
              icon={<VscGithubInverted className="text-xl md:text-2xl" />}
            />
            <ButtonLink
              href="https://www.linkedin.com/in/lucas-m01/"
              text="Linkedin"
              icon={<BsLinkedin className="text-xl md:text-2xl" />}
            />
            <ButtonLink
              href="mailto:lucas.montenegro.n@outlook.com"
              text="Outlook"
              icon={
                <PiMicrosoftOutlookLogoFill className="text-xl md:text-2xl" />
              }
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center sm:hidden -mt-4 space-y-2">
        <p className="text-sm text-gray-200">Role para saber mais</p>
        <button onClick={scrollToNextSection}>
          <VscChevronDown className="h-6 w-6 text-gray-300 hover:text-white animate-bounce" />
        </button>
      </div>

      <section
        className="py-16 mx-auto  w-5/6 min-h-[35vh] text-left flex items-center"
        id="about"
      >
        <div className="h-full flex flex-col ">
          <h4 className="font-semibold text-2xl mb-4 md:text-3xl pt-10 lg:text-4xl">
            Sobre mim
          </h4>
          <div className="bg-gray-700/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
            <p className="text-zinc-300 px-8 pb-8 leading-relaxed p-4  w-full">
              Sou formado em Ciência da Computação pela Cruzeiro do Sul Virtual,
              com sólida experiência em desenvolvimento web e participação em
              projetos que fortaleceram minhas habilidades técnicas e minha
              capacidade de trabalho em equipe. No front-end, meu foco principal
              está em TypeScript, React e Next.js, enquanto no back-end destaco
              meu domínio em Node.js e Java, com experiência em Hibernate, JPA e
              Spring Boot. Também possuo amplo conhecimento em bancos de dados
              relacionais, além de experiência no desenvolvimento de APIs REST
              eficientes e escaláveis. Atualmente, estou aprimorando meu inglês
              para ampliar minhas oportunidades no mercado global. Estou em
              busca de novos desafios que me permitam evoluir profissionalmente
              e contribuir com projetos de grande impacto e inovação.
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}
