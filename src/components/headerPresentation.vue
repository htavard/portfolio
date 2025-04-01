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
            <!-- <img src="../assets/pictures/icons/linkedin.png" alt="logo Linkedin"
              @click="clickContact('https://www.linkedin.com/in/hugo-tavard-developper/')" title="Linkedin">
            <img src="../assets/pictures/icons/github.png" alt="logo Github"
              @click="clickContact('https://github.com/htavard')" title="Github"> -->

            <svg @click="clickContact('https://www.linkedin.com/in/hugo-tavard-developper/')" title="Linkedin"
              width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z">
                </path>
                <path
                  d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z">
                </path>
                <path
                  d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z">
                </path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z">
                </path>
              </g>
            </svg>
            <svg @click="clickContact('https://github.com/htavard')" title="Github" width="50px" height="50px"
              viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path class="cls-1"
                  d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5">
                </path>
              </g>
            </svg>
            <a :href="`${baseUrl}files/${$t('resumeLang')}`" download style="display: flex;">
              <button class="dl-resume">
                <span class="dl-resume__left">
                  <svg fill="#000000" width="64px" height="64px" viewBox="0 0 846.66 846.66"
                    style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                    version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#000000" stroke-width="0.008466600000000001">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g id="Layer_x0020_1">
                        <path class="fil0"
                          d="M305.08 127c-27.16,0 -27.16,-41.29 0,-41.29l60.83 0 0 -54.93c0,-11.4 9.25,-20.64 20.65,-20.64l190.32 0c11.4,0 20.65,9.24 20.65,20.64l0 54.93 106.1 0c11.4,0 20.65,9.25 20.65,20.65l0 709.52c0,11.4 -9.25,20.64 -20.65,20.64l-560.6 0c-11.4,0 -20.65,-9.24 -20.65,-20.64l0 -709.52c0,-11.4 9.25,-20.65 20.65,-20.65l67.88 0c27.15,0 27.15,41.29 0,41.29l-47.24 0 0 668.23 519.32 0 0 -668.23c-125.97,0 -251.94,0 -377.91,0zm102.12 -41.29l149.04 0 0 -34.28 -149.04 0 0 34.28zm-191.92 480.71c-27.15,0 -27.15,-41.29 0,-41.29l188.46 0c27.16,0 27.16,41.29 0,41.29l-188.46 0zm0 156.73c-27.15,0 -27.15,-41.29 0,-41.29l188.46 0c27.16,0 27.16,41.29 0,41.29l-188.46 0zm0 -78.36c-27.15,0 -27.15,-41.29 0,-41.29l188.46 0c27.16,0 27.16,41.29 0,41.29l-188.46 0zm294.81 -101.94l121.29 0c11.4,0 20.64,9.25 20.64,20.65l0 121.28c0,11.4 -9.24,20.65 -20.64,20.65l-121.29 0c-11.4,0 -20.64,-9.25 -20.64,-20.65l0 -121.28c0,-11.4 9.24,-20.65 20.64,-20.65zm100.64 41.29l-79.99 0 0 80 79.99 0 0 -80zm-243.28 -252.09c13.62,0.23 24.62,-11.16 24.62,-24.62 0,-13.72 -10.9,-24.63 -24.62,-24.63 -13.69,0 -24.62,10.94 -24.62,24.63 0,13.48 10.98,24.85 24.62,24.62zm20.65 37.98l0 59.74c47.81,-9.73 82.31,-51.95 82.31,-100.88 0,-56.87 -46.09,-102.96 -102.96,-102.96 -56.86,0 -102.95,46.09 -102.95,102.96 0,48.93 34.49,91.15 82.31,100.88l0 -59.75c-26.78,-8.89 -45.28,-34.08 -45.28,-62.59 0,-36.3 29.62,-65.92 65.92,-65.92 36.29,0 65.92,29.63 65.92,65.92 0,28.49 -18.49,53.73 -45.27,62.6zm-20.65 -185.39c79.67,0 144.25,64.58 144.25,144.25 0,79.66 -64.58,144.24 -144.25,144.24 -79.66,0 -144.24,-64.58 -144.24,-144.24 0,-79.67 64.58,-144.25 144.24,-144.25z">
                        </path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span class="dl-resume__right">
                  <svg width="50px" height="50px" viewBox="0 0 24.00 24.00" fill="none"
                    xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.048">
                    </g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12"
                        :stroke="'var(--stylized-text)'" fill="none" stroke-width="1.056" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    </g>
                  </svg>
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

        >svg {
          width: 50px;
          height: 50px;
          cursor: pointer;
          transform: scale(1);
          transition: transform 0.3s ease;
          fill: var(--stylized-text);
        }

        >svg:hover {
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

  svg {
    width: 30px;
    height: 30px;
    // stroke: var(--stylized-text);
    fill: var(--stylized-text);
  }

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
    color: var(--stylized-text);
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

        p {
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