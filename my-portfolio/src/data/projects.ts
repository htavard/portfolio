export const projectData: Project[] = [
  {
    name: "Build and redesign car maintenance website",
    description: `The ValueMyCar team and I built a B2B & B2C website that is used to connect car professionals with clients in order to have a better and cheaper maintenance. `,
    tags: [{name: 'typescript', icon: 'src/assets/pictures/icons/typescript.png'},{name: 'vue', icon:'src/assets/pictures/icons/vue.png'},{name: 'nuxt', icon: 'src/assets/pictures/icons/nuxt.png'},{name: 'sass', icon: 'src/assets/pictures/icons/scss.png'},{name: 'seo'}, {name: "accessibility", icon:'src/assets/pictures/icons/accessibility.png'}],
    links: ['https://valuemycar.fr/'],
    img: 'src/assets/pictures/projects/valuemycar2.png',
    alt: 'valuemycar frontpage',
    orientation: 'left'
  },
  {
    name: "Professor Layton Stories",
    description: `Enter Professor Layton's universe with this project. You can find several NPCs from the original storyline as well as some enigmas which you can try solve !`,
    tags: [{name: 'C#', icon: 'src/assets/pictures/icons/csharp.png'}, {name: 'API REST'}, {name: 'ASP.NET', icon: 'src/assets/pictures/icons/netcore.png'}, {name: 'SQL'}, {name: 'css', icon: 'src/assets/pictures/icons/css.png'}],
    links: ['https://github.com/htavard/ProfessorLaytonStories'],
    img: 'src/assets/pictures/projects/professorLayton.jpg',
    alt: 'professor Layton poster',
    orientation: 'right'
  },
  {
    name: "Colony management game",
    description: "In a post-apocalyptic world, an alien army has destroyed civilization and abducted all men to experiment with their Y chromosomes. Years later, a colony of women has rebuilt a functional society through farming and craftsmanship. You get to be the main actor of that rebirth. ",
    tags: [{name: 'C#', icon: 'src/assets/pictures/icons/csharp.png'}, {name: "console"}, {name: "game"}],
    links: ['https://github.com/htavard/colony-game'],
    img: 'src/assets/pictures/projects/colony.png',
    alt: 'Screenshot from colony management game',
    orientation: 'left'
  },
  {
    name: "Treasure hunt game",
    description: "Just like in Minesweeper, you must uncover the tiles of a grid while avoiding mines. In addition to mines, there are also treasures! Discovering a treasure will activate a special power that varies depending on the difficulty level you choose. ",
    tags: [{name: 'C#', icon: 'src/assets/pictures/icons/csharp.png'}, {name: "console"}, {name: "game"}],
    links: ['https://github.com/htavard/TreasureHunt'],
    img: 'src/assets/pictures/projects/treasureHunt.png',
    alt: 'Screenshot from treasure hunt game',
    orientation: 'right'
  }
]