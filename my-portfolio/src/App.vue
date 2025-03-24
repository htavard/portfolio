<template>
  <!-- <div class="noise-background"></div> -->
  <!-- <particleEffect /> -->
  <navbar @scroll="scrollIntoView" />
  <div class="container" id="top-page" >
    <div class="container__header">
      <headerPresentation />
      <navButtons @scroll="scrollIntoView" />
    </div>


    <section class="container__project">
      <h2 id="projects">Main projects</h2>
      <Projects :projectList="projectData" />
    </section>

    <section class="container__skills">
      <h2 id="skills">Skills</h2>
      <div class="skill-list" id="skillsGroupList">
        <skills-view :category="ESkillCategory.TECHNOLOGY" :container-width="skillsWidth" :is-small-format="skillsWidth < 885 "/>
        <div class="skill-list__other">
          <skills-view class="skill-list__other--item" :category="ESkillCategory.DESIGN" :container-width="skillsWidth/2" :is-small-format="skillsWidth < 885 " />
          <skills-view class="skill-list__other--item" :category="ESkillCategory.TOOL" :container-width="skillsWidth/2"  :is-small-format="skillsWidth < 885 " />
        </div>
      </div>
    </section>

    <section class="container__contact">
      <h2 id="contact">Let's get in touch</h2>
      <contact ref="form" />
    </section>

    <button class="scroll-to-top" @click="scrollIntoView('top-page')" title="Scroll to top">
      <svg xmlns="http://www.w3.org/2000/svg" title="Scroll to top" viewBox="-5 -7.5 24 24" width="40"
        fill="currentColor">
        <path
          d="M7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z">
        </path>
      </svg>
    </button>

    <!-- <test /> -->
  </div>
</template>

<script setup lang="ts">
import navbar from './components/navbar.vue';
import headerPresentation from './components/headerPresentation.vue';
import navButtons from './components/navButtons.vue';
import Projects from './components/Projects.vue';
import skillsView from './components/skills-view.vue';
import contact from './components/contact.vue';
import { projectData } from './data/projects';
import { skillList } from './data/skills';
import { ESkillCategory } from './types/enums';

const form = ref(null)
const technologySKill = ref<SkillTag[]>([])
const designSKill = ref<SkillTag[]>([])
const toolSKill = ref<SkillTag[]>([])

const skillsWidth = ref<number>(0)

const resizeObserver = new ResizeObserver((entrySizes) => {
  entrySizes.forEach(() => {
    skillsWidth.value = document.getElementById('skillsGroupList').clientWidth
  })
})

onMounted(() => {
  const element = document.getElementById('skillsGroupList')
  resizeObserver.observe(element)
  skillsWidth.value = element.clientWidth
})

onUnmounted(() => {
  resizeObserver.disconnect()
})

function categorySkills() {
  skillList.forEach((s) => {
    if (s.category === ESkillCategory.TECHNOLOGY) technologySKill.value.push(s)
    else if (s.category === ESkillCategory.DESIGN) designSKill.value.push(s)
    else toolSKill.value.push(s)
  })
}

function scrollIntoView(section: TSection) {
  const element = document.getElementById(section)
  element.scrollIntoView({ behavior: "smooth" })

  setTimeout(() => {
    if (section === "contact") form.value.focusFirstInput()
  }, 300)
}

categorySkills()
</script>

<style scoped lang="scss">
@import url('https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-straight/css/uicons-bold-straight.css');

.container {
  display: flex;
  flex-direction: column;
  padding: 0 5vw;

  &__header {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    gap: 10%;
  }

  &__project {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    gap: 5%;
  }

  &__skills {
    margin: 15vh 0;

    h2 {
      margin-bottom: 5%;
    }

    .skill-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &__other {
        display: flex;
        gap: 1rem;
      }
    }
  }
}

.scroll-to-top {
  color: #F9E0BB;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4A2C2A;
  border-radius: 50%;
  border: none;
  position: fixed;
  top: 92dvh;
  left: 95dvw;
  width: 50px;
  height: 50px;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
}

.scroll-to-top:hover {
  transform: scale(1.2);
  transition: transform 0.3s ease-in-out;
}

// .noise-background {
//   animation: noise 1.2s steps(3) infinite both;
//   background-image: url("../src/assets/pictures/noise.png");
//   height: 200%;
//   left: -50%;
//   opacity: 0.1;
//   pointer-events: none;
//   position: fixed;
//   top: -50%;
//   width: 200%;
//   will-change: auto;
//   z-index: 100;
// }

h2 {
  padding-top: 110px; //navbar height
  margin-top: -110px;
}

.test-project {
  display: flex;
  gap: 5vw;
  width: 100%;
}

@media screen and (max-width: 1000px) {
  .skill-list {
    &__other {
      display: flex;
      justify-content: center;
      
      &--item {
        flex: 1;
      }
    }
  }
  
}
</style>
