import Image from 'next/image'
import TestImg from '../../../public/assets/testPer.jpg'
import { BsLinkedin } from 'react-icons/bs'
import { VscChevronDown, VscGithubInverted } from 'react-icons/vsc'
import { DownloadSimple, GraduationCap, MapPin, Globe } from 'phosphor-react'
import { ButtonLink } from './components/ButtonLink'
import { PiMicrosoftOutlookLogoFill } from 'react-icons/pi'

import styles from './home.module.css'

export function Home() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section
        className={`relative bg-gray-800 w-full text-white flex flex-col items-center min-h-screen justify-center ${styles.heroSection}`}
        id="home"
      >
        <div
          className={`
            flex flex-col pt-22 sm:pt-28
            w-[88%] sm:w-5/6 xl:w-3/4 2xl:w-2/3
            mx-auto sm:pb-32
            lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-24
            ${styles.heroContainer}
          `}
        >
          <div className="flex justify-center pb-4 sm:pb-0 shrink-0">
            <Image
              src={TestImg}
              width={260}
              height={260}
              sizes="(max-width: 932px) and (orientation: landscape) 75px, 260px"
              priority
              className={`
                rounded-full object-cover
                w-44 h-44 md:w-52 md:h-52 lg:w-[260px] lg:h-[260px]
                ring-2 ring-blue-500 ring-offset-4 ring-offset-gray-800
                ${styles.profileImage}
              `}
              alt="Foto de perfil de Lucas Montenegro"
            />
          </div>

          <div
            className={`
              flex flex-col items-center lg:items-start
              text-center lg:text-left
              gap-1 mt-4 pb-14 sm:pb-0
              ${styles.textContainer}
            `}
          >
            <p className="text-base md:text-lg font-normal text-zinc-400 tracking-wide">
              Olá, me chamo
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Lucas Montenegro
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-zinc-300 flex gap-2 items-center flex-wrap justify-center lg:justify-start mt-1">
              Desenvolvedor <span className="text-blue-500">Full Stack</span>
            </p>

            <div
              className={`
                flex justify-center lg:justify-start
                gap-3 flex-wrap mt-6
                ${styles.buttonWrapper}
              `}
            >
              <ButtonLink
                href="https://drive.google.com/uc?export=download&id=1eg0ZqSkr3RA0lnnn-FF-pWT-LU9_c-86"
                text="Download CV"
                icon={<DownloadSimple weight="bold" className="text-lg" />}
              />
              <ButtonLink
                href="https://github.com/Lucas-M01"
                text="GitHub"
                icon={<VscGithubInverted className="text-lg" />}
              />
              <ButtonLink
                href="https://www.linkedin.com/in/lucasmontenegrons/"
                text="LinkedIn"
                icon={<BsLinkedin className="text-lg" />}
              />
              <ButtonLink
                href="mailto:lucas.montenegro.n@outlook.com"
                text="Outlook"
                icon={<PiMicrosoftOutlookLogoFill className="text-lg" />}
              />
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-10 sm:bottom-14 lg:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center sm:pb-0 sm:mt-auto space-y-1 pb-8 ${styles.scrollHint}`}
        >
          <button
            onClick={scrollToNextSection}
            aria-label="Rolar para a seção Sobre mim"
            className="flex flex-col items-center gap-1 group"
          >
            <span className="text-xs text-zinc-400 tracking-widest uppercase group-hover:text-zinc-300 transition-colors duration-200">
              {'// veja mais abaixo'}
            </span>
            <VscChevronDown className="h-5 w-5 text-zinc-400 group-hover:text-white animate-bounce transition-colors duration-200" />
          </button>
        </div>
      </section>

      {/* ── Sobre mim ────────────────────────────────────── */}
      <section
        className={`bg-gray-900 w-full text-white py-20 ${styles.aboutSection}`}
        id="about"
        aria-label="Sobre mim"
      >
        <div className="w-[88%] sm:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-8 text-white border-l-4 border-blue-500 pl-4">
            Sobre mim
          </h2>

          {/* Layout: texto à esquerda + cards à direita */}
          <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch">
            {/* Texto */}
            <div className="bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 rounded-xl lg:flex-1 lg:h-full">
              <p className="text-zinc-300 p-6 md:p-8 leading-relaxed text-base md:text-lg">
                Desenvolvedor web formado em Ciência da Computação pela Cruzeiro
                do Sul Virtual, com foco em TypeScript, React e Next.js no
                front-end e Node.js e Java com Spring Boot no back-end. Tenho
                experiência prática através de projetos acadêmicos e pessoais,
                desenvolvendo aplicações completas com boas práticas de código,
                APIs REST e bancos de dados relacionais. Estou em busca da minha
                primeira oportunidade profissional para evoluir em equipe e
                contribuir com projetos de impacto.
              </p>
            </div>

            {/* Cards de destaques */}
            <div className="flex flex-col gap-3 lg:w-64 xl:w-72">
              {[
                {
                  icon: <GraduationCap size={20} className="text-blue-400" />,
                  label: 'Formação',
                  value: 'Ciência da Computação',
                },
                {
                  icon: <MapPin size={20} className="text-blue-400" />,
                  label: 'Localização',
                  value: 'João Pessoa, PB',
                },
                {
                  icon: <Globe size={20} className="text-blue-400" />,
                  label: 'Disponibilidade',
                  value: 'Remoto / Presencial',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-800 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 rounded-xl px-5 py-4 flex items-center gap-4"
                >
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-zinc-200 text-sm font-semibold mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
