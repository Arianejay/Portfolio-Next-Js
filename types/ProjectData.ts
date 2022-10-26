import { StaticImageData } from 'next/image'
import { Url } from 'url'

export interface IProjectData {
  ProjectData: {
    id: number
    title: string
    description: string
    model: StaticImageData
    tech: Array<StaticImageData>
    demo: string
    github: string
  }
}
