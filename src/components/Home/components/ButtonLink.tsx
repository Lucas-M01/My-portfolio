import { ReactNode } from 'react'

interface ButtonLinkProps {
  text: string
  href: string
  icon: ReactNode
}

export function ButtonLink({ text, href, icon }: ButtonLinkProps) {
  return (
    <div>
      <a
        href={href}
        className={`relative py-1 px-5 md:py-3 md:px-7 border-solid border-2 border-blue-500 flex gap-2 justify-center items-center rounded-[4rem] duration-200 text-blue-500 hover:drop-shadow-[0_0_1rem_rgb(59,130,246)] hover:text-white hover:bg-blue-500 font-semibold text-lg md:text-xl shadow-[0_0_1rem_rgba(0,0,0,0.3)] cursor-pointer `}
      >
        {icon}
        {text}
      </a>
    </div>
  )
}
