import { getAssetPath } from "@/utils/paths";

export const projectData: Project[] = [
  {
    id: "ValueMyCar",
    name: "ValueMyCar.fr",
    description: `Connect professionals and automobilists for car maintenance`,
    tags: [{name: 'typescript', icon: getAssetPath('src/assets/pictures/icons/typescript.png')},{name: 'vue', icon:getAssetPath('src/assets/pictures/icons/vue.png')},{name: 'nuxt', icon: getAssetPath('src/assets/pictures/icons/nuxt.png')}, {name: "accessibility", icon:getAssetPath('src/assets/pictures/icons/accessibility.png')}],
    links: ['https://valuemycar.fr/'],
    img: getAssetPath('src/assets/pictures/projects/valuemycar.png'),
    alt: 'valuemycar frontpage',
    orientation: 'left'
  },
  {
    id: "LaytonStories",
    name: "Professor Layton Stories",
    description: `Enter Professor Layton's universe !`,
    tags: [{name: 'C#', icon: getAssetPath('src/assets/pictures/icons/csharp.png')}, {name: 'API REST'}, {name: 'ASP.NET', icon: getAssetPath('src/assets/pictures/icons/netcore.png')}, {name: 'SQL'}, {name: 'css', icon: getAssetPath('src/assets/pictures/icons/css.png')}],
    links: ['https://github.com/htavard/ProfessorLaytonStories'],
    img: getAssetPath('src/assets/pictures/projects/professorLayton.jpg'),
    alt: 'professor Layton poster',
    orientation: 'right'
  },
  {
    id: "ColonyGame",
    name: "Colony management game",
    description: "Rebuild a civilization from scratch",
    tags: [{name: 'C#', icon: getAssetPath('src/assets/pictures/icons/csharp.png')}, {name: "console"}, {name: "game"}],
    links: ['https://github.com/htavard/colony-game'],
    img: getAssetPath('src/assets/pictures/projects/colony.png'),
    alt: 'Screenshot from colony management game',
    orientation: 'left'
  },
  {
    id: "TreasureHunt",
    name: "Treasure hunt game",
    description: "Mines and treasures. Which will you encounter first ?",
    tags: [{name: 'C#', icon: getAssetPath('src/assets/pictures/icons/csharp.png')}, {name: "console"}, {name: "game"}],
    links: ['https://github.com/htavard/TreasureHunt'],
    img: getAssetPath('src/assets/pictures/projects/treasureHunt.png'),
    alt: 'Screenshot from treasure hunt game',
    orientation: 'right'
  }
]