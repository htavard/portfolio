<template>
  <header class="header">
    <p class="header__presentation">
      Hello! I'm Hugo Tavard, a cognitive engineer specializing in front-end development based in France.
      Cognitive sciences are for me a mean to understand users and create user-friendly,
      visually appealing websites. I thrive on learning new skills while continuously improving the ones I already
      have.
    </p>
    <div class="header__profile-image">
      <img src="../assets/pictures/myself.jpg" alt="Photo d'Hugo Tavard" class="header__profile-image--img">
    </div>
  </header>
  <leavesFalling />
</template>

<script setup land="ts">
import leavesFalling from './leavesFalling.vue'
</script>

<style scoped lang="scss">
.header {
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
  padding-right: 20rem;

  &__presentation {
    max-width: 40vw;
    font-size: 20px;
  }

  &__profile-image {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    overflow: hidden;

    &--img {
      width: 100%;
      height: auto;
    }
  }
}
</style>