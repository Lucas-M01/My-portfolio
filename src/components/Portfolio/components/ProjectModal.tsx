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
        slide.classList.remove('active')
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active')
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
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on('animationStarted', (main) => {
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
      <Dialog.Content className="fixed bg-[#2A2634] grid grid-cols-2 w-[98%] md:w-3/4 z-20 py-6 md:py-8 px-4 md:px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg max-h-[700px] shadow-lg shadow-black/25">
        <div className="flex flex-col justify-between h-full w-[90%]">
          <div>
            <div ref={sliderRef} className="keen-slider h-[200px] max-h-full">
              {props.images?.map((image) => {
                return (
                  <Image
                    key={image}
                    src={image}
                    alt=""
                    width={500}
                    height={500}
                    className="keen-slider__slide"
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
                      className="keen-slider__slide mt-4"
                    />
                  )
                })}
            </div>
          </div>
          <div className="flex gap-4 w-full items-center">
            <Link
              href={props.figma!}
              className="bg-blue-500 hover:bg-blue-400 duration-300 py-2 px-4 rounded-full font-bold shadow-[0_0_1rem_rgba(0,0,0,0.3)] "
            >
              Projeto figma
            </Link>
            <Link
              href={props.linkGithub!}
              className="bg-blue-500 hover:bg-blue-400 duration-300 py-2 px-4 rounded-full font-bold shadow-[0_0_1rem_rgba(0,0,0,0.3)] "
            >
              Repositório
            </Link>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <Dialog.Title className="text-3xl font-black text-blue-500">
              {props.name}
            </Dialog.Title>
            <Dialog.Close>
              <X size={22} />
            </Dialog.Close>
          </div>
          <ScrollArea.Root className="overflow-hidden bg-transparent h-full w-full">
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
              className="flex select-none touch-none p-0.5 bg-black transition-colors duration-[160ms] ease-out hover:bg-gray-800 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="flex-1 bg-pink-500 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
              className="flex select-none touch-none p-0.5 bg-black transition-colors duration-[160ms] ease-out hover:bg-gray-800 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
              orientation="horizontal"
            >
              <ScrollArea.Thumb className="flex-1 bg-pink-500 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="bg-black" />
          </ScrollArea.Root>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
