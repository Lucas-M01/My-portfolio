import { Skill } from './components/Skill'
import { skillGroups } from './components/languages'

export function Skills() {
  return (
    <section
      className="bg-gray-800 w-full relative overflow-hidden"
      id="skills"
    >
      <div className="w-5/6 max-w-6xl mx-auto pt-20 lg:pt-[6.5rem] pb-20">
        {/* Título com borda azul — consistente com "Sobre mim" */}
        <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-12 border-l-4 border-blue-500 pl-4">
          Habilidades
        </h2>

        {/* Grupos de habilidades */}
        <div className="flex flex-col gap-12">
          {skillGroups.map((group) => (
            <div key={group.category}>
              {/* Título da categoria */}
              <h3 className="text-zinc-400 text-sm font-semibold uppercase tracking-widest mb-4">
                {group.category}
              </h3>

              {/* Grid de skills */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-3 sm:gap-4">
                {group.items.map((language) => (
                  <Skill
                    key={language.text}
                    svg={language.svg}
                    text={language.text}
                    shortText={language.shortText}
                    link={language.link}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
