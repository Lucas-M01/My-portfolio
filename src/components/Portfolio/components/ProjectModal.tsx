import * as Dialog from '@radix-ui/react-dialog'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import Image, { StaticImageData } from 'next/image'
import { X } from 'phosphor-react'
import { KeyboardEvent, ReactNode, useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { useReducedMotion } from 'framer-motion'
import 'keen-slider/keen-slider.min.css'
import Link from 'next/link'
import styles from './project.module.css'

export interface ProjectProps {
  name?: string
  description?: ReactNode
  languages?: string[]
  data?: string
  images?: string[] | StaticImageData[]
  figma?: string
  linkGithub?: string
}

export function ProjectModal(props: ProjectProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const reduceMotion = useReducedMotion()
  const imageCount = props.images?.length ?? 0
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    defaultAnimation: { duration: reduceMotion ? 0 : 500 },
    created: () => setCurrentSlide(0),
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
  })
  const [thumbnailRef, thumbnailInstanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: { perView: 3, spacing: 10 },
    defaultAnimation: { duration: reduceMotion ? 0 : 500 },
  })

  useEffect(() => {
    const thumbnails = thumbnailInstanceRef.current
    if (!thumbnails?.track.details) return
    thumbnails.moveToIdx(
      Math.min(currentSlide, thumbnails.track.details.maxIdx),
    )
  }, [currentSlide, thumbnailInstanceRef])

  function handleImageNavigation(event: KeyboardEvent<HTMLDivElement>) {
    const nextIndex = {
      ArrowLeft: Math.max(0, currentSlide - 1),
      ArrowRight: Math.min(imageCount - 1, currentSlide + 1),
      Home: 0,
      End: imageCount - 1,
    }[event.key]

    if (nextIndex === undefined || imageCount < 2) return
    event.preventDefault()
    instanceRef.current?.moveToIdx(nextIndex)
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 opacity-50 z-10 inset-0 fixed" />

      <Dialog.Content
        aria-describedby={undefined}
        className={`
          fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
          bg-[#2A2634] text-white rounded-lg shadow-lg shadow-black/25
          p-5 md:p-8
          w-[92vw] sm:w-[90%] lg:w-3/4
          h-[90vh] lg:max-h-[700px]
          overflow-hidden
        `}
      >
        <div className={`${styles.project} h-full`}>
          <div className={styles.title}>
            <div className="flex justify-between items-center">
              <Dialog.Title className="text-xl lg:text-3xl font-black text-blue-500">
                {props.name}
              </Dialog.Title>
              <Dialog.Close aria-label="Fechar modal" className="ml-4 shrink-0">
                <X size={22} />
              </Dialog.Close>
            </div>
          </div>

          <div className={styles.images}>
            <div
              ref={sliderRef}
              className="keen-slider h-36 sm:h-44 md:h-[250px] landscape:h-28"
              role="group"
              aria-label={`Imagens de ${
                props.name ?? 'projeto'
              }. Use as setas para navegar.`}
              aria-roledescription="carrossel"
              tabIndex={imageCount > 1 ? 0 : undefined}
              onKeyDown={handleImageNavigation}
            >
              {props.images?.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Screenshot ${index + 1} de ${props.name ?? 'projeto'}`}
                  width={800}
                  height={500}
                  aria-hidden={index !== currentSlide}
                  className="keen-slider__slide object-cover overflow-hidden"
                />
              ))}
            </div>

            <p className="sr-only" aria-live="polite" aria-atomic="true">
              Imagem {currentSlide + 1} de {imageCount}
            </p>

            {(props.images?.length ?? 0) > 1 && (
              <div
                ref={thumbnailRef}
                className="keen-slider thumbnail"
                role="group"
                aria-label="Selecionar imagem do projeto"
              >
                {props.images?.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    data-keen-slider-clickable="true"
                    aria-label={`Ver imagem ${index + 1} de ${
                      props.name ?? 'projeto'
                    }`}
                    aria-pressed={index === currentSlide}
                    className={`keen-slider__slide ${
                      index === currentSlide ? styles.activeThumbnail : ''
                    }`}
                    onClick={() => instanceRef.current?.moveToIdx(index)}
                  >
                    <Image
                      src={image}
                      alt=""
                      width={500}
                      height={500}
                      className="w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <ScrollArea.Root className={`${styles.content} w-full h-full`}>
            <ScrollArea.Viewport className="h-full w-full">
              <div className="pr-2">
                {props.description}
                <p className="mt-4">
                  Nele foi utilizado as seguintes ferramentas:
                </p>
                <ul className="list-disc ml-4 mb-4">
                  {props.languages?.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
                <span className="text-blue-500 font-semibold">
                  {props.data}
                </span>
              </div>
            </ScrollArea.Viewport>

            <ScrollArea.Scrollbar
              className="flex select-none touch-none p-0.5 bg-zinc-700 transition-colors duration-[160ms] ease-out hover:bg-gray-800 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="flex-1 bg-blue-500 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>

            <ScrollArea.Scrollbar
              className="flex select-none touch-none p-0.5 bg-black transition-colors duration-[160ms] ease-out hover:bg-gray-800 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
              orientation="horizontal"
            >
              <ScrollArea.Thumb className="flex-1 bg-blue-500 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>

            <ScrollArea.Corner className="bg-black" />
          </ScrollArea.Root>

          <div className={styles.links}>
            <div className="flex gap-3 flex-wrap items-center">
              {props.figma && (
                <Link
                  href={props.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 whitespace-nowrap hover:bg-blue-400 duration-300 py-2 px-4 rounded-full font-bold shadow-[0_0_1rem_rgba(0,0,0,0.3)]"
                >
                  Projeto Figma
                </Link>
              )}
              {props.linkGithub && (
                <Link
                  href={props.linkGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-400 duration-300 py-2 px-4 rounded-full font-bold shadow-[0_0_1rem_rgba(0,0,0,0.3)]"
                >
                  Repositório
                </Link>
              )}
            </div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
