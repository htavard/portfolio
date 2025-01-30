<template>
  <div class="projects" :class="project.orientation === 'right' ? 'right': ''">
    <img :src="project.img" :alt="project.alt" class="projects__img"/>
    <div class="projects__content">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <ul  class="projects__content--tags">
        <li class="projects__content--tags__item" v-for="tag, index in project.tags" :key="index"><span>{{ tag }}</span></li>
      </ul>

      <strong v-for="link in project.links" :key="link"><a :href="link">En savoir plus</a></strong>

    </div>
  </div>
</template>

<script setup lang='ts'>

defineProps({
  project: { type: Object as PropType<Project>, default: null }
})
</script>

<style lang='scss' scoped>
.projects {
  display: flex;
  gap: 10px;
  align-items: center;

  &.right {
    flex-direction: row-reverse;
  }

  &__content {
    &--tags {
      display: flex;
      gap: 20px;
      
      &__item {
        list-style: none;
        text-transform: uppercase;
      }
    }
  }
}
</style>