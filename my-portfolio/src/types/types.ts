export {}

declare global {
  interface Project {
    name: string
    description: string
    tags: string[]
    links: string[]
    img: string
    alt: string
    orientation: TOrientation
  }

  type TOrientation = 'left'|'right'

  type TSection = 'projects' | 'skills' | 'contact' | 'top-page'
}