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
  // let sections = document.querySelectorAll('section')
  // let navLinks = document.querySelectorAll('header nav a')

  // window.onscroll = () => {
  //   sections.forEach((sec) => {
  //     let top = window.scrollY
  //     let offset = sec.offsetTop - 150
  //     let height = sec.offsetHeight
  //     let id = sec.getAttribute('id')

  //     if (top >= offset && top < offset + height) {
  //       navLinks.forEach((links) => {
  //         links.classList.remove('active')
  //         document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
  //       })
  //     }
  //   })
  // }

  return (
    <header className="w-full py-5 lg:py-8 bg-clip-padding backdrop-filter fixed backdrop-blur-md bg-opacity-10 z-10 text-gray-300 shadow-xl">
      <div className="w-[85%] mx-auto">
        <nav className="text-xl lg:text-2xl w-full lg:flex lg:justify-between lg:items-center">
          <div className="text-center">
            <a
              className="cursor-default font-semibold text-2xl md:text-[2rem]"
              href="#"
            >
              Portfólio
            </a>
          </div>

          <ul
            className={`text-gray-300 bg-gray-700 text-center transition lg:h-full w-full h-[100vh] flex flex-col gap-28 pt-10 lg:pt-0 lg:gap-0 lg:static lg:flex-row lg:bg-transparent lg:justify-end fixed top-0 ${
              openNav === false ? 'left-[-5000px]' : 'left-0'
            }`}
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
                About
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
                Portfolio
              </a>
            </li>
            <li className="lg:ml-[2em]">
              <a
                className={`lg:relative lg:hover:text-blue-500 transition-[color] duration-200`}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="block lg:hidden cursor-pointer translate-y-[-50%] absolute top-1/2 right-4 z-[4]">
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
