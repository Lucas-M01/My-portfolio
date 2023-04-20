import Link from 'next/link'
import { SiGmail, SiMicrosoftoutlook } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { VscGithubInverted } from 'react-icons/vsc'
import { useState, useEffect } from 'react'
import Tilt from 'react-parallax-tilt'
import styles from './ul.module.css'

export function Contact() {
  const [bgColor, setBgColor] = useState<string>('')

  useEffect(() => {
    const list = document.querySelectorAll('.sci li')
    const bg = document.querySelector<HTMLDivElement>('.socialMedia')
    list.forEach((elements) => {
      elements.addEventListener('mouseenter', function (event: any) {
        const color = event.target.getAttribute('data-color')
        console.log(color)
        if (bg) {
          bg.style.backgroundColor = color
          setBgColor(color)
        }
      })

      elements.addEventListener('mouseleave', function () {
        if (bg) {
          bg.style.backgroundColor = '#fff'
          setBgColor('')
        }
      })
    })
  }, [])

  return (
    <section
      className={`flex justify-center items-center min-h-screen duration-500 socialMedia`}
      style={{ backgroundColor: bgColor }}
    >
      <div>
        <ul className={`flex relative ${styles.sci} sci`}>
          <li
            data-text="Github"
            data-color="#181717"
            className={`before:content-[attr(data-text)] before:absolute before:top-1/2 before:left-1/2 before:text-[14vw] before:-translate-y-[calc(5%+20px)] before:-translate-x-1/2 before:pointer-events-none before:font-bold before:duration-500 before:opacity-0 hover:before:opacity-[0.1] hover:before:-translate-x-1/2 hover:before:translate-y-[2%] ${styles.fa} `}
          >
            <Tilt
              transitionSpeed={500}
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="0.5rem"
              className={`${styles.tilt} w-28 h-28 m-5`}
            >
              <Link
                href="https://github.com/Lucas-M01"
                target="_blank"
                className={`relative w-full h-full rounded-lg perspective-5 bg-[#ccc] flex justify-center transform-preserve-3d  items-center text-[#333] shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)] transition-[background] duration-[0.25s] hover:text-white hover:bg-[#181717]`}
              >
                <VscGithubInverted className="transition duration-[0.25s] pointer-events-none w-12 h-auto" />
              </Link>
            </Tilt>
          </li>
          <li
            data-text="Linkedin"
            data-color="#0A66C2"
            className={`before:content-[attr(data-text)] before:absolute before:top-1/2 before:left-1/2 before:text-[14vw] before:-translate-y-[calc(5%+20px)] before:-translate-x-1/2   before:pointer-events-none before:font-bold before:duration-500 before:opacity-0 hover:before:opacity-[0.1] hover:before:translate-y-[2%] hover:before:-translate-x-1/2 ${styles.fa}`}
          >
            <Tilt
              transitionSpeed={500}
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="10px"
              className={`${styles.tilt} w-28 h-28 m-5 `}
            >
              <Link
                href="https://linkedin.com/in/lucas-m01"
                target="_blank"
                className="relative bg-[#ccc] w-full h-full flex justify-center rounded-lg items-center text-[#333]  shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)] transition-[background] duration-[0.25s] hover:text-white hover:bg-[#0A66C2]"
              >
                <BsLinkedin className="transition duration-[0.25s] pointer-events-none w-12 h-auto " />
              </Link>
            </Tilt>
          </li>
          <li
            data-text="Outlook"
            data-color="#0078D4"
            className={`before:content-[attr(data-text)] before:absolute before:top-1/2 before:left-1/2 before:text-[14vw] before:-translate-y-[calc(5%+20px)] before:-translate-x-1/2   before:pointer-events-none before:font-bold before:duration-500 before:opacity-0 hover:before:opacity-[0.1] hover:before:translate-y-[2%] hover:before:-translate-x-1/2 ${styles.fa}`}
          >
            <Tilt
              transitionSpeed={500}
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="0.5rem"
              className={`${styles.tilt} w-28 h-28 m-5 `}
            >
              <Link
                href="mailto:lucas.montenegro.n@outlook.com"
                target="_blank"
                className="relative w-full h-full bg-[#ccc] flex justify-center rounded-lg items-center text-[#333] shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)] transition-[background] duration-[0.25s] hover:text-white hover:bg-[#0078D4]"
              >
                <SiMicrosoftoutlook className="transition duration-[0.25s] pointer-events-none w-12 h-auto " />
              </Link>
            </Tilt>
          </li>
          <li
            data-text="Gmail"
            data-color="#EA4335"
            className={`before:content-[attr(data-text)] before:absolute before:top-1/2 before:left-1/2 before:text-[14vw] before:-translate-y-[calc(5%+20px)] before:-translate-x-1/2   before:pointer-events-none before:font-bold before:duration-500 before:opacity-0 hover:before:opacity-[0.1] hover:before:translate-y-[2%] hover:before:-translate-x-1/2 ${styles.fa}`}
          >
            <Tilt
              transitionSpeed={500}
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="0.5rem"
              className={`${styles.tilt} w-28 h-28 m-5`}
            >
              <Link
                href="mailto:lucas.montenegro.n@gmail.com"
                target="_blank"
                className="relative w-full h-full bg-[#ccc] flex justify-center rounded-lg items-center text-[#333] shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)] transition-[background] duration-[0.25s] hover:text-white hover:bg-[#EA4335]"
              >
                <SiGmail className="transition duration-[0.25s] pointer-events-none w-12 h-auto " />
              </Link>
            </Tilt>
          </li>
        </ul>
      </div>
    </section>
  )
}
