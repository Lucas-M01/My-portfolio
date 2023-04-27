import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { ReactNode } from 'react'

export interface ProjetoProps {
  name: string
  description: ReactNode
  languages: string[]
  data: string
  images: string[]
  figma: string
  linkGithub: string
}

export function ProjectModal({}: ProjetoProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 opacity-20 z-10 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] z-20 py-6 w-96 md:py-8 px-4 md:px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg md:w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-2xl font-black">{name}</Dialog.Title>
        <Dialog.Close>
          <X />
        </Dialog.Close>
        <div></div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
