import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import type { Project } from '@/types/project'
import { technologyIcons } from '@/data/technology-icons'
import styles from './project.module.css'

const ProjectModal = dynamic(() =>
  import('./ProjectModal').then((module) => module.ProjectModal),
)

function prefetchProjectModal() {
  void import('./ProjectModal').catch(() => undefined)
}

interface CardProjectProps {
  project: Project
}

export function CardProject({ project }: CardProjectProps) {
  const [open, setOpen] = useState(false)
  const { images, name, technologyIds } = project
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        onMouseEnter={prefetchProjectModal}
        onFocus={prefetchProjectModal}
        aria-label={`Ver detalhes de ${name}`}
        className={`relative h-60 w-full rounded-3xl shadow-[20px_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex ${styles.portfolioBox}`}
      >
        <div className="relative w-full h-full">
          <Image
            src={images[0]}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={name}
            className={
              typeof images[0] !== 'string' &&
              images[0].height > images[0].width
                ? 'object-contain'
                : 'object-cover'
            }
          />
        </div>

        <span className="absolute bottom-3 left-0 w-full text-center text-white font-bold drop-shadow-lg lg:hidden px-2 truncate">
          {name}
        </span>

        <div className="absolute bottom-0 p-[0_4rem] left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,.1)] to-blue-500 hidden lg:flex flex-col justify-center items-center gap-4 text-center duration-[.5s] ease-linear translate-y-full">
          <h3 className="text-2xl lg:text-3xl text-zinc-200 font-bold">
            {name}
          </h3>
          <ul className="flex gap-2 text-orange-400">
            {technologyIds.map((id) => {
              const Icon = technologyIcons[id]
              return (
                <li key={id}>
                  <Icon className="w-6 h-auto" />
                </li>
              )
            })}
          </ul>
        </div>
      </Dialog.Trigger>

      {open && <ProjectModal project={project} />}
    </Dialog.Root>
  )
}
