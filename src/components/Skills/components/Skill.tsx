import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

import Tilt from 'react-parallax-tilt'
import * as Tooltip from '@radix-ui/react-tooltip'

interface SkillProps {
  svg: ReactNode | string
  text: string
  /** Versão abreviada exibida no card quando o nome completo é muito longo */
  shortText?: string
  link: string
}

const isSafeLink = (href: string): boolean =>
  href.startsWith('https://') || href.startsWith('http://')

export function Skill({ svg, text, shortText, link }: SkillProps) {
  const safeLink = isSafeLink(link) ? link : '#'
  const displayText = shortText ?? text

  return (
    <Tilt
      scale={1.1}
      transitionSpeed={500}
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.15}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
      className="w-full h-full hover:shadow-[20px_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 rounded-[15px] bg-[rgba(255,255,255,0.1)] overflow-hidden border-solid border-[rgba(255,255,255,0.5)] border-t-[1px] border-l-[1px] backdrop-filter backdrop-blur-[5px]"
    >
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Link
              href={safeLink}
              className="w-full h-full flex justify-center items-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver documentação de ${text}`}
            >
              <div className="text-center flex flex-col gap-2 md:gap-3 lg:gap-4 justify-between items-center p-3 sm:p-4 lg:px-8 lg:py-5">
                {typeof svg === 'string' ? (
                  <Image src={svg} width={40} height={40} alt={text} />
                ) : (
                  <div className="[&>svg]:w-8 [&>svg]:h-auto sm:[&>svg]:w-10 lg:[&>svg]:w-12">
                    {svg}
                  </div>
                )}
                <p className="z-[1] text-zinc-300 text-xs sm:text-sm lg:text-base font-semibold w-full truncate text-center">
                  {displayText}
                </p>
              </div>
            </Link>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              sideOffset={5}
              className="rounded p-[10px_15px] font-semibold bg-gray-700 text-sm text-zinc-300 z-50"
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
