'use client'

import { Skill } from './components/Skill'
import { skillGroups } from './components/languages'
import { FadeIn } from '../FadeIn'

export function Skills() {
  return (
    <section
      className="bg-gray-800 w-full relative overflow-hidden"
      id="skills"
    >
      <div className="w-5/6 max-w-6xl mx-auto pt-20 lg:pt-[6.5rem] pb-20">
        <FadeIn direction="up">
          <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-12 border-l-4 border-blue-500 pl-4">
            Habilidades
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-12">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.category}>
              <FadeIn direction="up" delay={groupIndex * 0.1}>
                <h3 className="text-zinc-400 text-sm font-semibold uppercase tracking-widest mb-4">
                  {group.category}
                </h3>
              </FadeIn>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-3 sm:gap-4">
                {group.items.map((language, itemIndex) => (
                  <FadeIn
                    key={language.text}
                    direction="up"
                    delay={groupIndex * 0.1 + itemIndex * 0.05}
                    duration={0.4}
                  >
                    <Skill
                      svg={language.svg}
                      text={language.text}
                      shortText={language.shortText}
                      link={language.link}
                    />
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
