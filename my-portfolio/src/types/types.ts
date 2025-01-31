export {}

declare global {
  interface Project {
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
  }

  type TOrientation = 'left'|'right'

  type TSection = 'projects' | 'skills' | 'contact' | 'top-page'
}