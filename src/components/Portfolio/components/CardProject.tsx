import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { ReactNode } from 'react'
import styles from './project.module.css'

interface CardProjectProps {
  name: string
  tagsIcons: ReactNode[]
  images: string[]
}

export function CardProject({ images, name, tagsIcons }: CardProjectProps) {
  return (
    <Dialog.Trigger
      className={`relative rounded-3xl shadow-[20px_20px_50px_rgba(0,0,0,0.5)] hover:translate-y-0 overflow-hidden flex ${styles.portfolioBox} `}
    >
      <Image src={images[0]} width={500} height={500} alt={name} />
      <div className="absolute bottom-0 p-[0_4rem] left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,.1)] to-blue-500 flex flex-col justify-center items-center gap-4 text-center duration-[.5s] ease-linear translate-y-full">
        <h4 className="text-4xl text-zinc-200 font-bold">{name}</h4>
        <ul className="flex gap-2">
          {tagsIcons.map((icon, index) => {
            return (
              <li key={index} className="">
                {icon}
              </li>
            )
          })}
        </ul>
      </div>
    </Dialog.Trigger>
  )
}
