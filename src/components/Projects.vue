<template>
  <div class="project">
    <div v-for="project, index in projectList" :key="project.name" class="project__item" :class="project.orientation">
      <img class="project__item--img" :src="project.img" :alt="project.alt" :id="`project-${index}`"
        @click="openLink(project)" @mouseenter="handleMouseEnter(index)" @mouseleave="handleMouseLeave(index)">
      <i class="fi fi-bs-arrow-up-right-from-square goto-icon" width="60px" :id="`goto-${index}`"
        @mouseenter="handleMouseEnter(index)" @mouseleave="handleMouseLeave(index)" @click="openLink(project)"></i>
      <div class="project__item--img__titlebox" id="titleBox"
        :style="project.orientation === 'left' ? { left: '65%' } : { right: '65%' }" @click="openLink(project)"
        @mouseenter="handleMouseEnter(index)" @mouseleave="handleMouseLeave(index)">
        <strong>{{ $t(`projectNameList.${project.id}`) }}</strong>
        <p>{{ $t(`projectDescList.${project.id}`) }}</p>
      </div>
      <div class="tag-container">
        <ul class="project-tags"
          :class="{ 'animation-right': project.orientation === 'right', 'animation-left': project.orientation === 'left' }">
          <li class="project-tags__item" v-for="tag in project.tags" :key="tag.name">
            <img v-if="tag.icon" :src="tag.icon" lazy="true">
            <span>{{ tag.name }}</span>
          </li>
          <li class="project-tags__item" v-for="tag in project.tags" :key="tag.name" aria-hidden="true">
            <img v-if="tag.icon" :src="tag.icon" lazy="true">
            <span>{{ tag.name }}</span>
          </li>
          <li class="project-tags__item" v-for="tag in project.tags" :key="tag.name" aria-hidden="true">
            <img v-if="tag.icon" :src="tag.icon" lazy="true">
            <span>{{ tag.name }}</span>
          </li>
          <li class="project-tags__item" v-for="tag in project.tags" :key="tag.name" aria-hidden="true">
            <img v-if="tag.icon" :src="tag.icon" lazy="true">
            <span>{{ tag.name }}</span>
          </li>
          <li class="project-tags__item" v-for="tag in project.tags" :key="tag.name" aria-hidden="true">
            <img v-if="tag.icon" :src="tag.icon" lazy="true">
            <span>{{ tag.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
defineProps({
  projectList: { type: Object as PropType<Project[]>, default: null }
})

function openLink(project: Project) {

  window.open(project.links[0])

}

function handleMouseEnter(index: number) {
  document.getElementById(`goto-${index}`).style.opacity = '1'
  document.getElementById(`project-${index}`).style.filter = 'blur(5px) grayscale(50%)'
}

function handleMouseLeave(index: number) {
  document.getElementById(`goto-${index}`).style.opacity = '0'
  document.getElementById(`project-${index}`).style.filter = 'none'
}

</script>

<style lang='scss' scoped>
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15vh;

  &__item {
    width: 55vw;
    height: 45vh;
    overflow: visible;
    position: relative;
    cursor: pointer;

    &--img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 30px;
      transition: filter 0.5s ease-out;

      &__titlebox {
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color: #f7b267;
        border-radius: 15px;
        top: 85%;
        height: 30%;
        width: 50%;
        z-index: 100;
        padding: 10px 20px;
        box-sizing: border-box;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: clamp(0.8rem, 1.5vw, 1rem);


        strong {
          text-wrap: wrap;
          font-size: clamp(0.8rem, 1.5vw, 1rem);
        }
      }
    }
  }
}

.left {
  transform: translateX(-5vw);

}

.right {
  transform: translateX(5vw);
}

.goto-icon {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  transition: opacity 0.3s ease-in;
  color: #f7b267;
}

.tag-container {
  position: absolute;
  display: flex;
  overflow: hidden;
  cursor: default;
  bottom: calc(-15% - 0.95rem);
  width: 100%;

  .project-tags {
    display: flex;
    flex-direction: row;
    min-width: 100%;
    flex-shrink: 0;
    gap: 1rem;
    height: 50px;
    padding-left: 0;

    &.animation-right {
      animation: slide-skill-left 5s linear infinite reverse
    }

    &.animation-left {
      animation: slide-skill-left 5s linear infinite
    }

    &__item {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      background-color: #ff7f51;
      width: fit-content;
      padding: 10px 20px;
      border-radius: 60px;
      text-transform: uppercase;

      img {
        width: 30px;
        height: 30px;
      }
    }
  }


}

.tag-container:hover .project-tags {
  animation-play-state: paused;
}


@keyframes slide-skill-left {
  to {
    transform: translateX(calc(-20% - 0.2rem));
  }

}

@media screen and (max-width: 1000px) {
  .project {
    &__item {

      &.left,
      &.right {
        transform: none !important;
      }

      &--img {
        filter: brightness(0.6);

        &__titlebox {
          top: 85%;
          left: 5% !important;
          width: 90%;
          height: 25%;
        }
      }
    }
  }

  .tag-container {
    bottom: calc(-20% - 1.95rem);

    .project-tags {
      height: 40px;
    }
  }
}

@media screen and (max-width: 768px) {
  .project {

    &__item {
      width: 70vw;
    }

    .tag-container {
      bottom: calc(-20% - 1rem);

      .project-tags {
        height: 30px;

        &__item {
          font-size: 12px;

          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .project {
    &__item {
      width: 85vw;
    }
  }

}

@media screen and (max-height: 1000px) and (min-width:1001px) {
  .project {
    &__item {
      &--img {
        &__titlebox {
          height: 40%;
        }
      }
    }
  }

}
</style>