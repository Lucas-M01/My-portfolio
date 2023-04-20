import Link from 'next/link'
import { SiGmail, SiMicrosoftoutlook } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { VscGithubInverted } from 'react-icons/vsc'
import styles from './ul.module.css'

export function Contact() {
  return (
    <section
      className={`flex justify-center items-center min-h-screen duration-500`}
    >
      <div>
        <ul id="sci" className={`flex relative ${styles.sci} `}>
          <li
            data-text="Github"
            data-color="#181717"
            className={`before:content-[attr(data-text)] before:absolute before:top-1/2 before:left-1/2 before:text-[14vw] before:-translate-y-[calc(5%+20px)] before:-translate-x-1/2 before:pointer-events-none before:font-bold before:duration-500 before:opacity-0 hover:before:opacity-[0.1] hover:before:-translate-x-1/2 hover:before:translate-y-[2%] ${styles.fa}`}
          >
            <Link
              href=""
              className={`relative w-28 h-28 perspective-5 bg-[#ccc] flex justify-center transform-preserve-3d rounded-lg items-center text-[#333] m-5 shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)] transition-[background] duration-[0.25s] hover:text-white hover:bg-[#181717]`}
            >
              <VscGithubInverted className="transition duration-[0.25s] pointer-events-none" />
            </Link>
          </li>
          <li
            data-text="Linkedin"
            data-color="#0A66C2"
            className={`before:content-[attr(data-text)] before:absolute before:top-1/2 before:left-1/2 before:text-[14vw] before:-translate-y-[calc(5%+20px)] before:-translate-x-1/2   before:pointer-events-none before:font-bold before:duration-500 before:opacity-0 hover:before:opacity-[0.1] hover:before:translate-y-[2%] hover:before:-translate-x-1/2 ${styles.fa}`}
          >
            <Link
              href=""
              className="relative w-28 h-28 bg-[#ccc] flex justify-center rounded-lg items-center text-[#333] m-5 shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)] transition-[background] duration-[0.25s] hover:text-white hover:bg-[#0A66C2]"
            >
              <BsLinkedin className="transition duration-[0.25s] pointer-events-none " />
            </Link>
          </li>
          <li
            data-text="Outlook"
            data-color="#0078D4"
            className={`before:content-[attr(data-text)] before:absolute before:top-1/2 before:left-1/2 before:text-[14vw] before:-translate-y-[calc(5%+20px)] before:-translate-x-1/2   before:pointer-events-none before:font-bold before:duration-500 before:opacity-0 hover:before:opacity-[0.1] hover:before:translate-y-[2%] hover:before:-translate-x-1/2 ${styles.fa}`}
          >
            <Link
              href=""
              className="relative w-28 h-28 bg-[#ccc] flex justify-center rounded-lg items-center text-[#333] m-5 shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)] transition-[background] duration-[0.25s] hover:text-white hover:bg-[#0078D4]"
            >
              <SiMicrosoftoutlook className="transition duration-[0.25s] pointer-events-none " />
            </Link>
          </li>
          <li
            data-text="Gmail"
            data-color="#EA4335"
            className={`before:content-[attr(data-text)] before:absolute before:top-1/2 before:left-1/2 before:text-[14vw] before:-translate-y-[calc(5%+20px)] before:-translate-x-1/2   before:pointer-events-none before:font-bold before:duration-500 before:opacity-0 hover:before:opacity-[0.1] hover:before:translate-y-[2%] hover:before:-translate-x-1/2 ${styles.fa}`}
          >
            <Link
              href=""
              className="relative w-28 h-28 bg-[#ccc] flex justify-center rounded-lg items-center text-[#333] m-5 shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)] transition-[background] duration-[0.25s] hover:text-white hover:bg-[#EA4335]"
            >
              <SiGmail className="transition duration-[0.25s] pointer-events-none " />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
