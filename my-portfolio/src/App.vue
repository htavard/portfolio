<template>
  <div class="container" id="top-page">
    <div class="container__header">
      <headerPresentation />
      <navButtons @scroll="scrollIntoView" />
    </div>
    <section class="container__project">
      <h2 id="projects">Main projects</h2>
      <project v-for="project in projectData" :key="project.name" :project="project"
        class="container__projects--item" />
    </section>

    <section class="container__skills">
      <h2 id="skills">Skills</h2>
      <skills />
    </section>

    <section class="container__contact">
      <h2 id="contact">Contact me</h2>
      <contact ref="form"/>
    </section>

    <button class="scroll-to-top" @click="scrollIntoView('top-page')" title="Scroll to top">
      <svg xmlns="http://www.w3.org/2000/svg" title="Scroll to top" viewBox="-5 -7.5 24 24" width="40" fill="currentColor"><path d="M7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z"></path></svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import headerPresentation from './components/headerPresentation.vue';
import navButtons from './components/navButtons.vue';
import project from './components/project.vue';
import skills from './components/skills.vue';
import contact from './components/contact.vue';
// import test from './components/test.vue';
import { projectData } from './data/projects';

const form = ref(null)

function scrollIntoView(section: TSection) {
  const element = document.getElementById(section)
  element.scrollIntoView({behavior: "smooth" })

  if(section === "contact") form.value.focusFirstInput()
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  padding: 0 5rem;

  &__header {
    height: 100dvh;
    display: flex;
    flex-direction: column;
    gap: 10%;
  }

  &__project {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    gap: 5%;
    &--item {
      margin-bottom: 20px;
    }
  }

  &__skills {
    margin: 10vh 0;
  }
}

.scroll-to-top {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #A34343;
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
  box-shadow: 5px 3px 5px #f7b267;
}
</style>
