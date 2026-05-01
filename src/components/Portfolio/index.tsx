import { CardProject } from './components/CardProject'
import { projetos } from './components/projetos'

export function Portfolio() {
  return (
    <section className="bg-gray-700 w-full min-h-screen" id="portfolio">
      <div className="w-[85%] mx-auto pb-16">
        <h4 className="text-center text-zinc-200 pt-20 lg:pt-[6.5rem] font-semibold text-2xl md:text-3xl lg:text-4xl">
          Projetos
        </h4>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10 mt-10">
          {projetos.map((projeto) => (
            <CardProject
              key={projeto.id}
              name={projeto.name}
              images={projeto.images}
              tagsIcons={projeto.tagsIcons}
              description={projeto.description}
              languages={projeto.languages}
              data={projeto.data}
              figma={projeto.figma}
              linkGithub={projeto.linkGithub}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
