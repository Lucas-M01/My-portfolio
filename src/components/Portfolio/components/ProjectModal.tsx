import * as Dialog from '@radix-ui/react-dialog'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import Image, { StaticImageData } from 'next/image'
import { X } from 'phosphor-react'
import { MutableRefObject, ReactNode } from 'react'
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from 'keen-slider/react'
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

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>,
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove(`${styles.activeThumbnail}`)
      })
    }

    function addActive(idx: number) {
      slider.slides[idx].classList.add(`${styles.activeThumbnail}`)
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on('created', () => {
      if (!mainRef.current) return
      if (!slider.track.details) return

      addActive(slider.track.details.rel ?? 0)
      addClickEvents()

      mainRef.current.on('animationStarted', (main) => {
        if (!slider.track.details) return
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export function ProjectModal(props: ProjectProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: { perView: 3, spacing: 10 },
    },
    [ThumbnailPlugin(instanceRef)],
  )

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 opacity-50 z-10 inset-0 fixed" />

      <Dialog.Content
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
            >
              {props.images?.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Screenshot ${index + 1} de ${props.name ?? 'projeto'}`}
                  width={800}
                  height={500}
                  className="keen-slider__slide object-cover overflow-hidden"
                />
              ))}
            </div>

            {(props.images?.length ?? 0) > 1 && (
              <div
                ref={thumbnailRef}
                className={`keen-slider thumbnail ${styles.thumbnailSlides}`}
              >
                {props.images?.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Miniatura ${index + 1} de ${props.name ?? 'projeto'}`}
                    width={500}
                    height={500}
                    className="keen-slider__slide object-cover"
                  />
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
