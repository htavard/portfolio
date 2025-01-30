<template>
  <header class="header">
    <div class="header__title">
      <h1>Hugo Tavard</h1>
      <h2>Full-Stack Developer | Vue Enthusiast</h2>
    </div>
    <div class="header__content">
      <p class="header__content--presentation">
        Hello! I'm Hugo Tavard, a cognitive engineer specializing in web development based in France.
        Cognitive sciences are for me a mean to understand users and create user-friendly,
        visually appealing websites for them. I thrive on learning new skills while continuously improving the ones I
        already
        have.
      </p>
      <div class="header__content--profile-image">
        <img src="../assets/pictures/myself.jpg" alt="Photo d'Hugo Tavard" class="header__content--profile-image--img">
      </div>
    </div>
  </header>
  <!-- <div class="falling">
    <leavesFalling />
  </div> -->
</template>

<script setup land="ts">

</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15dvw;

    &--presentation {
      max-width: 40vw;
      font-size: 20px;
    }

    &--profile-image {
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


}

// .falling {
//   width:90vw;
//   overflow-x: hidden;
// }</style>