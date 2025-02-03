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
          <img src="../assets/pictures/icons/linkedin.png" alt="logo Linkedin"
            @click="clickContact('https://www.linkedin.com/in/hugo-tavard-developper/')" title="Linkedin">
          <img src="../assets/pictures/icons/github.png" alt="logo Github"
            @click="clickContact('https://github.com/htavard')" title="Github">
          <a href="../assets/files/ht_dev_resume_en.pdf" download style="display: flex;">
            <button class="dl-resume">
              <span class="dl-resume__left">
                <img src="../assets/pictures/resume.png" alt="resume icon" width="20px" height="20px">
              </span>
              <span class="dl-resume__right">
                <img src="../assets/pictures/download.png" alt="download icon" width="20px" height="20px">
              </span>
              <span class="dl-resume__text">
                CV
              </span>
            </button>
          </a>
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

.dl-resume {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: transparent;
  border: 2px solid #343131;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;

  &__left,
  &__right {
    position: absolute;
    transition: opacity 0.3s ease, transform 0.3s ease;
    display: flex;
  }

  &__left {
    left: 10px;
    opacity: 1;
  }

  &__right {
    right: 10px;
    opacity: 0;
    transform: translateX(20px);
  }

  &__text {
    margin: 0 25px;
    color: #343131;
    font-weight: bold;
    font-size: 1.25rem;
  }
}

.dl-resume:hover .dl-resume__left {
  opacity: 0;
  transform: translateX(-20px);
}

.dl-resume:hover .dl-resume__right {
  opacity: 1;
  transform: translateX(0);
}

// .falling {
//   width:90vw;
//   overflow-x: hidden;
// }</style>