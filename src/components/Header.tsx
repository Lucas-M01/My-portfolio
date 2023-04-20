import Hamburger from 'hamburger-react'
import { useState } from 'react'

export function Header() {
  const [openNav, setOpenNav] = useState(false)

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
            className={`text-gray-300 bg-gray-700 text-center transition lg:h-full w-full h-screen flex flex-col justify-evenly lg:static lg:flex-row lg:bg-transparent lg:justify-end fixed top-0 ${
              openNav === false ? 'left-[-5000px]' : 'left-0'
            }`}
          >
            <li className="lg:ml-[2em]">
              <a
                className="lg:relative before:content-[''] before:w-0 before:absolute before:h-[3px] before:bg-yellow-500 before:bottom-[-2px] before:duration-300 before:ease-linear hover:before:w-full"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="lg:ml-[2em]">
              <a
                className="lg:relative before:content-[''] before:w-0 before:absolute before:h-[3px] before:bg-yellow-500 before:bottom-[-2px] before:duration-300 before:ease-linear hover:before:w-full"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="lg:ml-[2em]">
              <a
                className="lg:relative before:content-[''] before:w-0 before:absolute before:h-[3px] before:bg-yellow-500 before:bottom-[-2px] before:duration-300 before:ease-linear hover:before:w-full"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="lg:ml-[2em]">
              <a
                className="lg:relative before:content-[''] before:w-0 before:absolute before:h-[3px] before:bg-yellow-500 before:bottom-[-2px] before:duration-300 before:ease-linear hover:before:w-full"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="lg:ml-[2em]">
              <a
                className="lg:relative before:content-[''] before:w-0 before:absolute before:h-[3px] before:bg-yellow-500 before:bottom-[-2px] before:duration-300 before:ease-linear hover:before:w-full"
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
