export function Header() {
  return (
    <header className="flex justify-between fixed top-0 left-0 w-full py-8 px-[9%] bg-gray-800 text-gray-200 items-center z-[100]">
      <a className="cursor-default font-semibold text-[2rem]" href="#">
        Portfolio
      </a>
      <nav className="text-[1.7rem] ml-16 flex gap-8 transition ">
        <a className="hover:text-yellow-500 duration-300" href="#home">
          Home
        </a>
        <a className="hover:text-yellow-500 duration-300" href="#about">
          About
        </a>
        <a className="hover:text-yellow-500 duration-300" href="#portfolio">
          Portfolio
        </a>
        <a className="hover:text-yellow-500 duration-300" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  )
}
