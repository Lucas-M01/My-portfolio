import { Skill } from './components/Skill'
import { languages } from './components/languages'

export function Skills() {
  return (
    <section className="bg-gradient-to-r from-[#141E30] to-[#243B55] h-[100vh] relative w-full overflow-hidden p-0 m-0 animate-Gradient bg-[length:400%_400%] ">
      <div className="w-[85%] mx-auto">
        <h4 className="text-white mt-10 font-semibold text-2xl mb-4 md:mb-8 lg:mb-12 md:text-3xl lg:text-4xl text-center">
          Habilidades
        </h4>
        <div className="flex flex-wrap w-full justify-stretch gap-2 sm:gap-3 md:gap-5 lg:gap-8">
          {languages.map((language) => {
            return (
              <Skill
                key={language.text}
                svg={language.svg}
                text={language.text}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
