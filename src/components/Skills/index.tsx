import { Skill } from './components/Skill'
import { languages } from './components/languages'

export function Skills() {
  return (
    <section
      className="bg-gray-800/90 min-h-screen w-full relative overflow-hidden"
      id="skills"
    >
      <div className=" w-5/6 mx-auto pt-20 lg:pt-[6.5rem] pb-20">
        <h4 className="text-white  font-semibold text-2xl mb-8 md:mb-14 lg:mb-16 md:text-3xl lg:text-4xl text-center">
          Habilidades
        </h4>
        {/* <div className="flex flex-wrap w-full h-full  gap-3 sm:gap-4 lg:gap-6"> */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-3 sm:gap-4 lg:gap-6">
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
