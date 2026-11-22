import type { StaticImageData } from 'next/image'
import type { ReactElement } from 'react'
import type { TechnologyId } from '@/data/technology-icons'

export type NonEmptyArray<T> = readonly [T, ...T[]]

export interface Project {
  readonly id: number
  readonly name: string
  readonly technologyIds: readonly TechnologyId[]
  readonly stack: NonEmptyArray<string>
  readonly description: ReactElement
  readonly dateLabel: string
  readonly images: NonEmptyArray<string | StaticImageData>
  readonly figmaUrl?: string
  readonly demoUrl?: string
  readonly repositoryUrl: string
}
