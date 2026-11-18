import Image from 'next/image'
import ProfileImage from '../../../public/assets/imgs/profile/lucas-montenegro.webp'
import { VscChevronDown } from 'react-icons/vsc'
import { GraduationCap, MapPin, Globe } from 'phosphor-react'
import { ButtonLink } from './components/ButtonLink'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import styles from './home.module.css'
import { FadeIn } from '../FadeIn'
import { siteConfig } from '@/config/site'
import { socialLinks } from '@/data/social-links'
import { SocialIcon } from '../SocialIcon'

const INFO_CARDS = [
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
]

const ANIMATION_CONFIG = {
  duration: 0.5,
  easing: [0.21, 0.47, 0.32, 0.98] satisfies [number, number, number, number],
}

export function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const reduceMotion = useReducedMotion()
  const animateHero = heroInView && !reduceMotion
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
      })
    }
  }

  return (
    <>
      <section
        ref={heroRef}
        className={`relative bg-gray-800 w-full text-white flex flex-col items-center min-h-screen justify-center ${styles.heroSection}`}
        id="home"
      >
        <div
          className={`
            flex flex-col pt-22 sm:pt-28
            w-[88%] sm:w-5/6 xl:w-3/4 2xl:w-2/3
            mx-auto sm:pb-32
            md:flex-row md:items-center md:justify-between md:gap-14 lg:gap-16 xl:gap-24
            ${styles.heroContainer}
          `}
        >
          <motion.div
            className="flex justify-center pb-4 sm:pb-0 shrink-0"
            initial={false}
            animate={
              animateHero
                ? { opacity: [0, 1], x: [-40, 0] }
                : { opacity: 1, x: 0 }
            }
            transition={{
              duration: reduceMotion ? 0 : ANIMATION_CONFIG.duration,
              ease: ANIMATION_CONFIG.easing,
            }}
          >
            <Image
              src={ProfileImage}
              width={260}
              height={260}
              sizes="(max-width: 932px) and (max-height: 450px) and (orientation: landscape) 150px, (min-width: 1024px) 260px, (min-width: 768px) 208px, 176px"
              priority
              className={`
                rounded-full object-cover
                w-44 h-44 md:w-52 md:h-52 lg:w-[260px] lg:h-[260px]
                ring-2 ring-blue-500 ring-offset-4 ring-offset-gray-800
                ${styles.profileImage}
              `}
              alt={`Foto de perfil de ${siteConfig.name}`}
            />
          </motion.div>

          <div
            className={`
              flex flex-col items-center md:items-start
              text-center md:text-left
              gap-1 mt-4 pb-14 sm:pb-0
              ${styles.textContainer}
            `}
          >
            <motion.p
              className="text-base md:text-lg font-normal text-zinc-400 tracking-wide"
              initial={false}
              animate={
                animateHero
                  ? { opacity: [0, 1], y: [20, 0] }
                  : { opacity: 1, y: 0 }
              }
              transition={{
                duration: reduceMotion ? 0 : ANIMATION_CONFIG.duration,
                delay: reduceMotion ? 0 : 0.2,
              }}
            >
              Olá, me chamo
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
              initial={false}
              animate={
                animateHero
                  ? { opacity: [0, 1], y: [20, 0] }
                  : { opacity: 1, y: 0 }
              }
              transition={{
                duration: reduceMotion ? 0 : ANIMATION_CONFIG.duration,
                delay: reduceMotion ? 0 : 0.35,
              }}
            >
              {siteConfig.name}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl font-semibold text-zinc-300 flex gap-2 items-center flex-wrap justify-center lg:justify-start mt-1"
              initial={false}
              animate={
                animateHero
                  ? { opacity: [0, 1], y: [20, 0] }
                  : { opacity: 1, y: 0 }
              }
              transition={{
                duration: reduceMotion ? 0 : ANIMATION_CONFIG.duration,
                delay: reduceMotion ? 0 : 0.5,
              }}
            >
              Desenvolvedor <span className="text-blue-400">Full Stack</span>
            </motion.p>

            <motion.div
              className={`flex justify-center md:justify-start gap-3 flex-wrap mt-6 ${styles.buttonWrapper}`}
              initial={false}
              animate={
                animateHero
                  ? { opacity: [0, 1], y: [20, 0] }
                  : { opacity: 1, y: 0 }
              }
              transition={{
                duration: reduceMotion ? 0 : ANIMATION_CONFIG.duration,
                delay: reduceMotion ? 0 : 0.65,
              }}
            >
              {socialLinks.map((link) => (
                <ButtonLink
                  key={link.id}
                  href={link.href}
                  text={link.label}
                  icon={<SocialIcon id={link.id} className="text-lg" />}
                />
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className={`absolute bottom-10 sm:bottom-14 lg:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 pb-8 ${styles.scrollHint}`}
          initial={false}
          animate={animateHero ? { opacity: [0, 1] } : { opacity: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 1,
          }}
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
        </motion.div>
      </section>

      <section
        className={`bg-gray-900 w-full text-white py-20 overflow-hidden ${styles.aboutSection}`}
        id="about"
        aria-label="Sobre mim"
      >
        <div className="w-[88%] sm:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto">
          <FadeIn direction="up">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-8 text-white border-l-4 border-blue-500 pl-4">
              Sobre mim
            </h2>
          </FadeIn>

          <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch">
            <FadeIn
              direction="left"
              delay={0.15}
              className="lg:flex-1 lg:h-full"
            >
              <div className="bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 rounded-xl h-full">
                <p className="text-zinc-300 p-6 md:p-8 leading-relaxed text-base md:text-lg">
                  Sou desenvolvedor Full Stack, formado em Ciência da Computação
                  pela Cruzeiro do Sul Virtual. Meu foco é o desenvolvimento web
                  com TypeScript, React e Next.js no front-end, e Node.js e Java
                  com Spring Boot no back-end. Em projetos pessoais e
                  acadêmicos, desenvolvo interfaces responsivas, APIs REST e
                  integrações com bancos de dados relacionais para resolver
                  necessidades como gestão de produtos, carrinhos de compras e
                  organização de tarefas. Busco minha primeira oportunidade
                  profissional em desenvolvimento web para contribuir com uma
                  equipe, aprender com outras pessoas e evoluir na construção de
                  aplicações úteis.
                </p>
              </div>
            </FadeIn>

            <div className="flex flex-col gap-3 lg:w-64 xl:w-72">
              {INFO_CARDS.map((item, index) => (
                <FadeIn
                  key={item.label}
                  direction="right"
                  delay={0.2 + index * 0.1}
                >
                  <div className="bg-gray-800 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 rounded-xl px-5 py-4 flex items-center gap-4">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-zinc-400 text-xs uppercase tracking-widest">
                        {item.label}
                      </p>
                      <p className="text-zinc-200 text-sm font-semibold mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
