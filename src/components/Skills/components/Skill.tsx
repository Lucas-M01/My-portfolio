import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

import Tilt from 'react-parallax-tilt'
import * as Tooltip from '@radix-ui/react-tooltip'

interface SkillProps {
  svg: ReactNode | string
  text: string
  link: string
}

export function Skill({ svg, text, link }: SkillProps) {
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
      className="relative w-[5.75rem] h-[6.5rem] md:w-24 md:h-28 lg:w-28 lg:h-32 shadow-[20px_20px_50px_rgba(0,0,0,0.5)] rounded-[15px] bg-[rgba(255,255,255,0.1)] overflow-hidden border-solid border-[rgba(255,255,255,0.5)] border-t-[1px] border-l-[1px] backdrop-filter backdrop-blur-[5px]"
    >
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Link
              href={link}
              className="w-full h-full flex justify-center align-center"
            >
              <div className="text-center flex flex-col gap-2 md:gap-5 justify-between items-center pointer-events-none p-6">
                {typeof svg === 'string' ? (
                  <Image
                    src={svg}
                    width={20}
                    height={20}
                    alt={text}
                    className=" md:w-3/5"
                  />
                ) : (
                  svg
                )}
                <p
                  className={`z-[1] text-zinc-300 sm:text-sm md:text-md font-semibold lg:text-lg ${
                    text.length > 11
                      ? 'whitespace-nowrap text-ellipsis overflow-hidden max-w-[65%]'
                      : ''
                  }`}
                >
                  {/* {text.length > 7 ? text.substring(0, 6).concat('...') : text} */}
                  {text}
                </p>
              </div>
            </Link>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              sideOffset={5}
              className="rounded p-[10px_15px] font-semibold bg-gray-700 text-sm text-zinc-300"
            >
              {text}
              <Tooltip.Arrow className="fill-gray-700" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </Tilt>
  )
}
