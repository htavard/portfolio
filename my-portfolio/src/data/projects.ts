export const projectData: Project[] = [
  {
    name: "Build and redesign car maintenance website",
    description: `The ValueMyCar team and I built a B2B & B2C website that is used to connect car professionals with clients in order to have a better and cheaper maintenance. 
    Pages and components are scalable and UX friendly.
    My goal here was also to create an architecture suitable for great SEO results.`,
    tags: [{name: 'typescript', icon: 'src/assets/pictures/icons/typescript.png'},{name: 'vue', icon:'src/assets/pictures/icons/vue.png'},{name: 'nuxt', icon: 'src/assets/pictures/icons/nuxt.png'},{name: 'seo'}],
    links: ['https://valuemycar.fr/'],
    img: 'src/assets/pictures/projects/valuemycar2.png',
    alt: 'valuemycar frontpage',
    orientation: 'left'
  },
  {
    name: "Professor Layton Stories",
    description: `Enter Professor Layton's universe with this project. You can find several NPCs from the original storyline as well as some enigmas which you can try solve !
    The project is written in C# with ASP.NET Core. The website isn't available but you still can check the code on Github.`,
    tags: [{name: 'C#', icon: 'src/assets/pictures/icons/csharp.png'}, {name: 'API REST'}, {name: 'ASP.NET', icon: 'src/assets/pictures/icons/netcore.png'}],
    links: ['https://github.com/htavard/ProfessorLaytonStories'],
    img: 'src/assets/pictures/projects/professorLayton.jpg',
    alt: 'professor Layton poster',
    orientation: 'right'
  }
]