'use client'

import { CardProject } from './components/CardProject'
import { projetos } from './components/projetos'
import { FadeIn } from '../FadeIn'

export function Portfolio() {
  return (
    <section className="bg-gray-900 w-full min-h-screen" id="portfolio">
      <div className="w-5/6 max-w-6xl mx-auto pt-20 lg:pt-[6.5rem] pb-16">
        <FadeIn direction="up">
          <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-10 border-l-4 border-blue-500 pl-4">
            Projetos
          </h2>
        </FadeIn>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10">
          {projetos.map((projeto, index) => (
            <FadeIn
              key={projeto.id}
              direction="up"
              delay={index * 0.1}
              duration={0.5}
            >
              <CardProject
                name={projeto.name}
                images={projeto.images}
                tagsIcons={projeto.tagsIcons}
                description={projeto.description}
                languages={projeto.languages}
                data={projeto.data}
                figma={projeto.figma}
                linkGithub={projeto.linkGithub}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
