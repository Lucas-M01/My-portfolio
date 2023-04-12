import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

interface SkillProps {
  src: string
  text: string
}

export function Skill({ src, text }: SkillProps) {
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
      className="relative md:w-24 md:h-28 lg:w-28 lg:h-32 shadow-[20px_20px_50px_rgba(0,0,0,0.5)] rounded-[15px] bg-[rgba(255,255,255,0.1)] flex justify-center align-center overflow-hidden border-solid border-[rgba(255,255,255,0.5)] border-t-[1px] border-l-[1px] backdrop-filter backdrop-blur-[5px]"
    >
      <div className="text-center flex flex-col justify-between items-center pointer-events-none p-5">
        <Image src={src} width={20} height={20} alt={text} className="w-3/5" />
        <p className="z-[1] text-zinc-200 sm:text-sm md:text-md lg:text-lg">
          {text}
        </p>
      </div>
    </Tilt>
  )
}
