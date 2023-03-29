import Hamburger from 'hamburger-react'
import { useState } from 'react'

export function Header() {
  const [openNav, setOpenNav] = useState(false)

  return (
    <header className="w-full py-5 md:py-8 px-[9%] bg-gray-800 text-gray-200 relative">
      <nav className="text-xl md:text-2xl w-full md:ml-16">
        <div className="text-center px-[1em] py-0">
          <a
            className="cursor-default font-semibold text-2xl md:text-[2rem]"
            href="#"
          >
            Portfolio
          </a>
        </div>

        <ul
          className={`text-gray-200 bg-gray-700 text-center transition w-full h-screen flex flex-col justify-evenly fixed top-0 ${
            openNav === false ? 'left-full' : 'left-0'
          }`}
        >
          <li>
            <a className="hover:text-yellow-500 duration-300" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-500 duration-300" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-500 duration-300" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-500 duration-300" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="block cursor-pointer translate-y-[-50%] absolute top-1/2 right-4 z-[4]">
        <Hamburger
          size={25}
          toggled={openNav}
          toggle={setOpenNav}
          duration={0.5}
        />
      </div>
    </header>
  )
}
