import { CardProject } from './components/CardProject'
import { projetos } from './components/projetos'

export function Portfolio() {
  return (
    <section className="bg-gray-900 w-full min-h-screen" id="portfolio">
      <div className="w-5/6 max-w-6xl mx-auto pt-20 lg:pt-[6.5rem] pb-16">
        {/* Título consistente com as outras seções */}
        <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-10 border-l-4 border-blue-500 pl-4">
          Projetos
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10">
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
