import type { ESkillCategory } from "@/types/enums"

export {}

declare global {
  interface Project {
    id: string
    name: string
    description: string
    tags: SkillTag[]
    links: string[]
    img: string
    alt: string
    orientation: TOrientation
  }

  interface SkillTag {
    name: string
    icon?: string
    category?: ESkillCategory
  }

  interface Theme {
    id: string
    name: string
    color: string
    framePicture?: string
    backgroundSelected: string
  }

  type TOrientation = 'left'|'right'

  type TSection = 'projects' | 'skills' | 'contact' | 'top-page'

}