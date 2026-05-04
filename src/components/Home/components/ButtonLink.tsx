import { ReactNode } from 'react'
import styles from './buttonLink.module.css'

interface ButtonLinkProps {
  text: string
  href: string
  icon: ReactNode
}

const isSafeHref = (href: string): boolean =>
  href.startsWith('https://') ||
  href.startsWith('http://') ||
  href.startsWith('mailto:')

export function ButtonLink({ text, href, icon }: ButtonLinkProps) {
  const safeHref = isSafeHref(href) ? href : '#'

  return (
    <a
      href={safeHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={text}
      className={`
        py-3 px-7 md:py-2 md:px-5
        border-2 border-solid border-blue-500
        flex gap-2 justify-center items-center
        rounded-[4rem] duration-300 transition-all
        text-blue-500 hover:text-white hover:bg-blue-500
        hover:drop-shadow-[0_0_0.85rem_rgb(59,130,246)]
        font-semibold text-base md:text-lg
        shadow-[0_0_1rem_rgba(0,0,0,0.3)]
        cursor-pointer whitespace-nowrap
        ${styles.btn}
      `}
    >
      {icon}
      {text}
    </a>
  )
}
