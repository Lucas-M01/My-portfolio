import { CardProject } from './components/CardProject'
import { projects } from '@/data/projects'
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
          {projects.map((project, index) => (
            <FadeIn
              key={project.id}
              direction="up"
              delay={Math.min(index * 0.1, 0.3)}
              duration={0.5}
            >
              <CardProject project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
