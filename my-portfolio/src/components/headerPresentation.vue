<template>
  <header class="header">
    <div class="header__title">
      <h1>Hugo Tavard</h1>
      <h2>Full-Stack Developer | Vue Enthusiast</h2>
    </div>
    <div class="header__content">
      <div class="header__content--presentation">
        <p>
          Hello! I'm Hugo Tavard, a cognitive engineer specializing in web development based in France.
          Cognitive sciences are for me a mean to understand users and create user-friendly,
          visually appealing websites for them. I thrive on learning new skills while continuously improving the ones I
          already
          have.
        </p>
        <div class="header__content--presentation__contact">
          <img src="../assets/pictures/icons/linkedin.png" alt="logo Linkedin" @click="clickContact('https://www.linkedin.com/in/hugo-tavard-developper/')" title="Linkedin">
          <img src="../assets/pictures/icons/github.png" alt="logo Github" @click="clickContact('https://github.com/htavard')" title="Github">
        </div>
      </div>
      <div class="header__content--profile-image">
        <!-- <img src="../assets/pictures/myself.jpg" alt="Photo d'Hugo Tavard" class="header__content--profile-image--img"> -->
      </div>
    </div>
  </header>
  <!-- <div class="falling">
    <leavesFalling />
  </div> -->
</template>

<script setup lang="ts">
function clickContact(link: string) {
  window.open(link)
}
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


      &__contact {
        display: flex;
        gap: 10%;
        margin-top: 10%;
        margin-left: 10%;

        >img {
          width: 50px;
          cursor: pointer;
          transform: scale(1);
          transition: transform 0.3s ease;
        }

        >img:hover {
          transform: scale(1.2);
          transition: transform 0.3s ease;
        }
      }
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