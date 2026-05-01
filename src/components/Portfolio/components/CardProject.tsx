import * as Dialog from '@radix-ui/react-dialog'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import { ProjectModal, ProjectProps } from './ProjectModal'
import styles from './project.module.css'

interface CardProjectProps extends ProjectProps {
  name: string
  tagsIcons: ReactNode[]
  images: string[] | StaticImageData[]
}

export function CardProject({
  images,
  name,
  tagsIcons,
  ...modalProps
}: CardProjectProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={`relative h-60 rounded-3xl shadow-[20px_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex ${styles.portfolioBox}`}
      >
        <div className="relative w-full h-full">
          <Image
            src={images[0]}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={name}
            className="object-cover"
          />
        </div>

        <span className="absolute bottom-3 left-0 w-full text-center text-white font-bold drop-shadow-lg lg:hidden px-2 truncate">
          {name}
        </span>

        <div className="absolute bottom-0 p-[0_4rem] left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,.1)] to-blue-500 hidden lg:flex flex-col justify-center items-center gap-4 text-center duration-[.5s] ease-linear translate-y-full">
          <h4 className="text-2xl lg:text-3xl text-zinc-200 font-bold">
            {name}
          </h4>
          <ul className="flex gap-2 text-orange-400">
            {tagsIcons.map((icon, index) => (
              <li key={index}>{icon}</li>
            ))}
          </ul>
        </div>
      </Dialog.Trigger>

      <ProjectModal name={name} images={images} {...modalProps} />
    </Dialog.Root>
  )
}
