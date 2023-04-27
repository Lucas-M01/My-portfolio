import { Skill } from './components/Skill'
import { languages } from './components/languages'

export function Skills() {
  return (
    <section
      className="bg-gray-800 h-[100vh] relative w-full overflow-hidden p-0 m-0 "
      id="skills"
    >
      <div className="w-[85%] mx-auto">
        <h4 className="text-white mt-[6.5rem] font-semibold text-2xl mb-8 md:mb-14 lg:mb-16 md:text-3xl lg:text-4xl text-center">
          Habilidades
        </h4>
        <div className="flex flex-wrap w-full h-full justify-stretch gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {languages.map((language) => {
            return (
              <Skill
                key={language.text}
                svg={language.svg}
                text={language.text}
                link={language.link}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
