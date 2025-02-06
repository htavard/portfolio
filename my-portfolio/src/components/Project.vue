<template>
  <div class="projects" :class="project.orientation === 'right' ? 'right' : ''" @click="openLink()">
    <img :src="project.img" :alt="project.alt" class="projects__img" />
    <div class="projects__content">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <ul class="projects__content--tags">
        <li class="projects__content--tags__item" v-for="tag, index in project.tags" :key="index">
          <img v-if="tag.icon" :src="tag.icon" class="tag-icon">
          <span>{{ tag.name }}</span>
        </li>
      </ul>

      <strong v-for="link in project.links" :key="link"><a :href="link">En savoir plus</a></strong>

    </div>
  </div>
</template>

<script setup lang='ts'>


const props = defineProps({
  project: { type: Object as PropType<Project>, default: null }
})

function openLink() {

  window.open(props.project.links[0])

}
</script>

<style lang='scss' scoped>
.projects {
  display: flex;
  gap: 10%;
  align-items: center;
  background-color: #f7b267;
  padding: 0 5%;
  min-height: 50dvh;
  // border-radius: 25% 10%;
  border-radius: 30px;
  overflow: hidden;
  transition: all 0.5s ease;
  cursor: pointer;
  position: relative;

  &.right {
    flex-direction: row-reverse;
    // border-radius: 10% 25%;
  }

  &__img {
    flex: 1;
    object-fit: cover;
    max-width: 40%;
    max-height: 100%;
  }

  &__content {
    flex: 2;
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
}

.projects:hover::before {
  opacity: 1;
  transform: rotate(-45deg) translateY(100%);
}</style>