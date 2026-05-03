import { Skill } from './components/Skill'
import { languages } from './components/languages'

export function Skills() {
  return (
    <section
      className="bg-gray-800/90 min-h-screen w-full relative overflow-hidden"
      id="skills"
    >
      <div className="w-5/6 max-w-6xl mx-auto pt-20 lg:pt-[6.5rem] pb-20">
        <h2 className="text-white font-semibold text-2xl mb-8 md:mb-14 lg:mb-16 md:text-3xl lg:text-4xl text-center">
          Habilidades
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-3 sm:gap-4 lg:gap-6 items-stretch">
          {languages.map((language) => (
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
    </section>
  )
}
