import Image from 'next/image'
import { ReactNode } from 'react'

import Tilt from 'react-parallax-tilt'

interface SkillProps {
  svg: ReactNode | string
  text: string
}

export function Skill({ svg, text }: SkillProps) {
  return (
    <Tilt
      scale={1.1}
      transitionSpeed={500}
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
      className="relative w-[5.75rem] h-[6.5rem] md:w-24 md:h-28 lg:w-28 lg:h-32 shadow-[20px_20px_50px_rgba(0,0,0,0.5)] rounded-[15px] bg-[rgba(255,255,255,0.1)] flex justify-center align-center overflow-hidden border-solid border-[rgba(255,255,255,0.5)] border-t-[1px] border-l-[1px] backdrop-filter backdrop-blur-[5px]"
    >
      <div className="text-center flex flex-col justify-between items-center pointer-events-none p-6">
        {typeof svg === 'string' ? (
          <Image
            src={svg}
            width={20}
            height={20}
            alt={text}
            className="w-3/5"
          />
        ) : (
          svg
        )}
        <p className="z-[1] text-zinc-300 sm:text-sm md:text-md font-semibold lg:text-lg">
          {text}
        </p>
      </div>
    </Tilt>
  )
}
