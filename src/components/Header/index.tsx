import Hamburger from 'hamburger-react'
import { useState, useEffect } from 'react'
import styles from './header.module.css'

export function Header() {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section')
    const navLinks = document.querySelectorAll('header nav ul li  a')

    const handleScroll = () => {
      sections.forEach((sec) => {
        const top: number = window.scrollY
        const offset: number = sec.offsetTop - 150
        const height: number = sec.offsetHeight
        const id: string | null = sec.getAttribute('id')
        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove(`${styles.active}`)
            document
              .querySelector(`header div nav ul li a[href*=${id}]`)
              ?.classList.add(`${styles.active}`)
          })
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleCloseHamburger() {
    setOpenNav(false)
  }

  return (
    <header className="w-full py-5 lg:py-8 lg:bg-clip-padding lg:backdrop-filter fixed lg:backdrop-blur-md lg:bg-opacity-10 z-10 text-gray-300 lg:shadow-xl">
      <div
        className={`${openNav === true && styles.glassActive} ${styles.glass}`}
      ></div>
      <div className="w-[85%] mx-auto">
        <nav className="text-xl lg:text-2xl w-full lg:flex lg:justify-between lg:items-center">
          <div className="text-center relative z-10">
            <a
              className="cursor-default font-semibold text-2xl md:text-[2rem]"
              href="#"
            >
              Portfólio
            </a>
          </div>

          <ul
            className={`text-gray-300  lg:h-full w-full lg:flex gap-28 lg:pt-0 lg:gap-0 lg:static lg:flex-row lg:bg-transparent lg:justify-end fixed top-0 ${
              styles.navigation
            } ${openNav === true && styles.navigationNav}`}
            onClick={handleCloseHamburger}
          >
            <li className="lg:ml-[2em]">
              <a
                className={`lg:relative lg: hover:text-blue-500 transition-[color] duration-200`}
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="lg:ml-[2em]">
              <a
                className={`lg:relative lg:hover:text-blue-500 transition-[color] duration-200`}
                href="#about"
              >
                Sobre
              </a>
            </li>
            <li className="lg:ml-[2em]">
              <a
                className={`lg:relative lg:hover:text-blue-500 transition-[color] duration-200`}
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="lg:ml-[2em]">
              <a
                className={`lg:relative lg:hover:text-blue-500 transition-[color] duration-200`}
                href="#portfolio"
              >
                Projetos
              </a>
            </li>
            <li className="lg:ml-[2em]">
              <a
                className={`lg:relative lg:hover:text-blue-500 transition-[color] duration-200`}
                href="#contact"
              >
                Contatos
              </a>
            </li>
          </ul>
        </nav>
        <div className="block lg:hidden cursor-pointer translate-y-[-50%] absolute top-1/2 right-4 z-20">
          <Hamburger
            size={25}
            toggled={openNav}
            toggle={setOpenNav}
            duration={0.5}
          />
        </div>
      </div>
    </header>
  )
}
