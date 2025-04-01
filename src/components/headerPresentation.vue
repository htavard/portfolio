<template>
  <header class="header" id="header">
    <div class="header-wrapper">
      <div class="header__title">
        <h2>{{ $t('headerTitle1') }}|{{ $t('headerTitle2') }}</h2>
      </div>
      <div class="header__content">
        <div class="header__content--presentation">
          <p>
            {{ $t('headerPresentation') }}
          </p>
          <div class="header__content--presentation__contact">
            <img src="../assets/pictures/icons/linkedin.png" alt="logo Linkedin"
              @click="clickContact('https://www.linkedin.com/in/hugo-tavard-developper/')" title="Linkedin">
            <img src="../assets/pictures/icons/github.png" alt="logo Github"
              @click="clickContact('https://github.com/htavard')" title="Github">
            <a :href="`${baseUrl}files/${$t('resumeLang')}`" download style="display: flex;">
              <button class="dl-resume">
                <span class="dl-resume__left">
                  <img src="../assets/pictures/resume.png" alt="resume icon" width="25px" height="25px">
                </span>
                <span class="dl-resume__right">
                  <img src="../assets/pictures/download.png" alt="download icon" width="25px" height="25px">
                </span>
                <span class="dl-resume__text">
                  CV
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="header__content--profile-wrapper">
      <img src="../assets/pictures/fall/frameLeaf.png" alt="Décoration feuille automne"
        class="header__content--profile-wrapper__leaf bottom-left">
      <img src="../assets/pictures/fall/frameLeaf.png" alt="Décoration feuille automne"
        class="header__content--profile-wrapper__leaf upper-right">
      <div class="header__content--profile-wrapper__image">
        <img src="../assets/pictures/myself.jpeg" alt="Photo d'Hugo Tavard"
          class="header__content--profile-wrapper__image--img">
      </div>
    </div>


  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  containerWidth: { type: Number, default: 0 }
})

const baseUrl = process.env.NODE_ENV === 'production'
  ? '/portfolio/' 
  : '/'

const headerWidth = ref<number>(0)

function clickContact(link: string) {
  window.open(link)
}

watch(() => props.containerWidth,
  (newValue) => {
    headerWidth.value = newValue
  }, { immediate: true })
</script>

<style scoped lang="scss">
.header {
  display: flex;
  margin-top: 10vh;
  align-items: center;

  .header-wrapper {
    display: flex;
    flex-direction: column;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--presentation {
      max-width: 80%;
      font-size: 20px;


      &__contact {
        display: flex;
        align-items: center;
        gap: 10%;
        margin-top: 10%;
        justify-content: space-around;

        >img {
          width: 50px;
          height: 50px;
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

    &--profile-wrapper {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      height: 300px;

      &__leaf {
        position: absolute;
        width: 85px;
        height: auto;
        transform: rotateZ(100deg);

        &.bottom-left {
          bottom: -30px;
          left: -30px;
        }

        &.upper-right {
          right: -40px;
          top: -30px;
        }
      }

      &__image {
        width: 300px;
        height: 300px;
        border-radius: 20px;
        overflow: hidden;

        &--img {
          width: 100%;
          height: auto;
        }
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
  border: 2px solid var(--text);
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
    left: 20px;
    opacity: 1;
  }

  &__right {
    right: 20px;
    opacity: 0;
    transform: translateX(20px);
  }

  &__text {
    margin: 0 25px;
    color: var(--text);
    ;
    font-weight: bold;
    font-size: 1.25rem;
    transform: translateX(20px);
    transition: transform 0.3s ease
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

.dl-resume:hover .dl-resume__text {
  transform: translate(-20px);
}

@media screen and (max-width: 1100px) {
  .header {
    display: flex;

    &__title {
      font-size: 18px;
    }

    &__content {
      &--presentation {
        p {
          font-size: 17px;
        }
      }

      &--profile-wrapper {
        height: 250px;

        &__image {
          width: 250px;
          height: 250px;
        }
      }
    }
  }
}


@media screen and (max-width: 768px) {
  .header {
    display: flex;
    flex-direction: column-reverse;
    gap: 3rem;
    padding-top: 1rem;

    &__content {
      padding-right: 0;
      width: 100%;
      justify-content: center;

      &--presentation {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 80vw;
        gap: 2rem;

        p{
          font-size: 18px;
        }

        &__contact {
          display: flex;
          margin: 0;
          width: 60vw;
          justify-content: space-evenly;
        }
      }
    }

    .header-wrapper {
      align-items: center;
      margin-bottom: 20%;

    }
  }

  .dl-resume .dl-resume__left {
  opacity: 0;
  transform: translateX(-20px);
}

.dl-resume .dl-resume__right {
  opacity: 1;
  transform: translateX(0);
}

.dl-resume .dl-resume__text {
  transform: translate(-20px);
}
}
</style>