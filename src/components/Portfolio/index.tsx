import * as Dialog from '@radix-ui/react-dialog'
import { CardProject } from './components/CardProject'
import { projetos } from './components/projetos'
import { ProjectModal } from './components/ProjectModal'
import { useState } from 'react'
// import { VscChevronUp } from 'react-icons/vsc'

export function Portfolio() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  )

  return (
    <section className="bg-gray-700 w-full min-h-screen" id="portfolio">
      <div className="w-[85%] mx-auto pb-16">
        <h4 className="text-center text-zinc-200 pt-20 lg:pt-[6.5rem] font-semibold text-2xl md:text-3xl lg:text-4xl">
          Projetos
        </h4>
        <div className="w-full grid grid-cols-1 lg:grid-cols-[repeat(3,1fr)] sm:grid-cols-[repeat(2,1fr)] items-center gap-10 mt-10">
          <Dialog.Root>
            {projetos.map((projeto) => {
              return (
                <CardProject
                  key={projeto.id}
                  name={projeto.name}
                  images={projeto.images}
                  tagsIcons={projeto.tagsIcons}
                  handleClick={() => setSelectedProjectId(projeto.id)}
                />
              )
            })}
            <ProjectModal
              {...projetos.find((projeto) => projeto.id === selectedProjectId)}
            />
          </Dialog.Root>
        </div>
      </div>

      {/* <div className="relative">
        <button className="absolute right-12 bottom-14 z-10 p-3 hover:bg-blue-500/90 rounded-full bg-blue-500 ">
          <VscChevronUp className="text-gray-200" />
        </button>
      </div> */}
    </section>
  )
}
