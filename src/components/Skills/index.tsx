import { Skill } from './components/Skill'
import { languages } from './components/languages'

export function Skills() {
  return (
    <section className="bg-gray-800 pb-20 pt-10">
      <div className="w-[85%] mx-auto">
        <h4 className="text-white font-semibold text-2xl mb-4 md:text-3xl lg:text-4xl text-center">
          Habilidades
        </h4>
        <div className="flex flex-wrap w-full justify-stretch gap-2 sm:gap-3 md:gap-5 lg:gap-8">
          {languages.map((language) => {
            return (
              <Skill
                key={language.src}
                src={language.src}
                text={language.text}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
