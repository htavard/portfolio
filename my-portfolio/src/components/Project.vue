<template>
  <div class="project-container">
    <div class="project-couple" v-for="couple, index in projectsArray" :key="`couple-${index}`">
      <div v-for="project in couple" :key="project.name" class="projects" @click="openLink(project)">
        <div class="projects__img">
          <img :src="project.img" :alt="project.alt" />
        </div>
        <div class="projects__content">
          <h3>{{ project.name }}</h3>
          <!-- <p>{{ project.description }}</p> -->
          <ul class="projects__content--tags">
            <li class="projects__content--tags__item" v-for="tag, index in project.tags" :key="index">
              <img v-if="tag.icon" :src="tag.icon" class="tag-icon">
              <span>{{ tag.name }}</span>
            </li>
          </ul>

          <strong v-for="link in project.links" :key="link"><a :href="link">En savoir plus</a></strong>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>


const props = defineProps({
  projectList: { type: Object as PropType<Project[]>, default: null }
})
const projectsArray = ref<Array<Project[]>>([[]])

function ProjectsTwoByTwo() {
  for (let i = 0; i < props.projectList.length; i += 2) {
    projectsArray.value.push(props.projectList.slice(i, i + 2))
  }
}

onMounted(() => {
  ProjectsTwoByTwo()
})

function openLink(project: Project) {

  window.open(project.links[0])

}
</script>

<style lang='scss' scoped>
.project-container {
  display: flex;
  flex-direction: column;
  gap: 5vh;

  .project-couple {
    display: flex;
    gap: 5%;
    width: 100%;
    justify-content: center;

    .projects {
      display: flex;
      gap: 10%;
      align-items: center;
      background-color: #f7b267;
      padding-right: 5%;
      max-height: 50dvh;
      max-width: 40%;
      border-radius: 30px;
      overflow: hidden;
      transition: all 0.5s ease;
      cursor: pointer;
      position: relative;

      &.right {
        flex-direction: row-reverse;
      }

      &__img {
        display: flex;
        flex: 1;
        height: 100%;
        overflow: hidden;
        transition: all 1s ease-in-out;

        img {
          object-fit: contain;
        }
      }

      &__content {
        flex: 2;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;


        &--tags {
          display: flex;
          gap: 20px;
          padding-left: 0;
          margin-bottom: 30px;
          flex-wrap: wrap;

          &__item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            border-radius: 10px;
            list-style: none;
            text-transform: uppercase;
            background-color: #ff7f51;
            color: #720026;


            .tag-icon {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
}


.projects::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(0deg,
      transparent,
      transparent 30%,
      rgba(163, 67, 67, 0.3));
  transform: rotate(-45deg);
  transition: all 0.43s ease;
  opacity: 0;
}

.projects:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(163, 67, 67, 0.5);
  z-index: 900;

  .projects__content {
    p {
      animation: slide-out 1s linear 0.6s forwards;
    }

    @keyframes slide-out {
      from {
        transform: translateX(0%);
        opacity: 1;
      }

      to {
        transform: translateX(100%);
        opacity: 0;
        height: 0;
      }
      
    }
  }

  .projects__img {
    flex: 5;
    transition: all 1s ease-in-out;
  }
}

.projects:hover::before {
  opacity: 1;
  transform: rotate(-45deg) translateY(100%);
}
</style>