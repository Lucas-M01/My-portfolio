import * as Dialog from '@radix-ui/react-dialog'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import Image from 'next/image'
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
  images?: string[]
  figma?: string
  linkGithub?: string
}

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>,
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove(`${styles.activeThimbnail}`)
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add(`${styles.activeThimbnail}`)
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
      slides: {
        perView: 3,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)],
  )

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 opacity-50 z-10 inset-0 fixed" />
      <Dialog.Content
        className={`fixed bg-[#2A2634] w-[90%] lg:w-3/4 z-20 py-6 md:py-8 px-4 md:px-10 text-white top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg lg:max-h-[700px]  max-h-[90%] shadow-lg shadow-black/25 h-[calc(100vh-200px)] md:h-[calc(100vh-100px)] ${styles.div}`}
      >
        <div className={`${styles.project} h-full`}>
          <div className={`${styles.images} h-full w-[95%] mb-2 lg:mb-0`}>
            <div
              ref={sliderRef}
              className="keen-slider h-36 md:h-[200px] max-h-full"
            >
              {props.images?.map((image) => {
                return (
                  <Image
                    key={image}
                    src={image}
                    alt=""
                    width={500}
                    height={500}
                    className="keen-slider__slide w-full "
                  />
                )
              })}
            </div>
            <div ref={thumbnailRef} className="keen-slider thumbnail">
              {props.images?.length! > 1 &&
                props.images?.map((image) => {
                  return (
                    <Image
                      key={image}
                      src={image}
                      alt=""
                      width={500}
                      height={500}
                      className="keen-slider__slide lg:mt-4 mb-4"
                    />
                  )
                })}
            </div>
          </div>

          <div className={`${styles.links}`}>
            <div className="flex gap-4 w-full items-center ">
              <Link
                href={props.figma!}
                target="_blank"
                className="bg-blue-500 whitespace-nowrap hover:bg-blue-400 duration-300 py-2 px-4 rounded-full font-bold shadow-[0_0_1rem_rgba(0,0,0,0.3)] "
              >
                Projeto figma
              </Link>
              <Link
                href={props.linkGithub!}
                target="_blank"
                className="bg-blue-500 hover:bg-blue-400 duration-300 py-2 px-4 rounded-full font-bold shadow-[0_0_1rem_rgba(0,0,0,0.3)] "
              >
                Repositório
              </Link>
            </div>
          </div>

          <div className={`${styles.title}`}>
            <div className="flex justify-between items-center mb-2 ">
              <Dialog.Title className="text-xl lg:text-3xl font-black text-blue-500">
                {props.name}
              </Dialog.Title>
              <Dialog.Close>
                <X size={22} />
              </Dialog.Close>
            </div>
          </div>

          <ScrollArea.Root
            className={`overflow-hidden bg-transparent h-[95%] md:h-[85%] w-full ${styles.content}`}
          >
            <ScrollArea.Viewport className="h-full w-full">
              <div className="">
                <div className="">
                  {props.description}
                  <p className="mt-5">
                    Nele foi utilizado as seguintes ferramentas:
                  </p>
                  <ul className="list-disc ml-4">
                    {props.languages?.map((language) => (
                      <li key={language}>{language}</li>
                    ))}
                  </ul>
                </div>
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
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
