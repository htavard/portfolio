<template>
  <nav class="navbar" id="navbar">
    <h1 class="navbar__title" @click="emit('scroll', 'top-page')">Hugo Tavard</h1>

    <div class="navbar-links-container">
      <ul class="lang">
        <li>
          <button @click="switchLang('fr')">🇫🇷</button>
        </li>
        <li>
          <button @click="switchLang('en')">🇬🇧</button>
        </li>
      </ul>
      <ul class="navbar-links" v-if="!isMobile">
        <li @click="emit('scroll', 'top-page')"><strong>{{ $t('about') }}</strong></li>
        <li @click="emit('scroll', 'projects')"><strong>{{ $t('projects') }}</strong></li>
        <li @click="emit('scroll', 'skills')"><strong>{{ $t('skills') }}</strong></li>
        <li @click="emit('scroll', 'contact')"><strong>{{ $t('contact') }}</strong></li>
      </ul>
    </div>


    <ul class="navbar-side-links" v-if="isMobile" :class="{ visible: isActive }">
      <li @click="handleSideClick('top-page')"><strong>{{ $t('about') }}</strong></li>
      <li @click="handleSideClick('projects')"><strong>{{ $t('projects') }}</strong></li>
      <li @click="handleSideClick('skills')"><strong>{{ $t('skills') }}</strong></li>
      <li @click="handleSideClick('contact')"><strong>{{ $t('contact') }}</strong></li>
      <li class="navbar-side-links__contact">

        <div class="navbar-side-links__contact--socials">
          <svg @click="clickContact('https://www.linkedin.com/in/hugo-tavard-developper/')" title="Linkedin"
            width="50px" height="50px" viewBox="0 0 24 24" fill="#F9E0BB" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                fill="#F9E0BB"></path>
              <path
                d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                fill="#F9E0BB"></path>
              <path
                d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                fill="#F9E0BB"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                fill="#F9E0BB"></path>
            </g>
          </svg>
          <svg @click="clickContact('https://github.com/htavard')" title="Github" width="50px" height="50px"
            viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path class="cls-1"
                d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5">
              </path>
            </g>
          </svg>
        </div>

      </li>
      <li>
        <a :href="`../assets/files/${$t('resumeLang')}`" download class="navbar-side-links__download"><svg width="50px"
            height="50px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#F9E0BB"
            transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
              stroke-width="0.048"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12"
                stroke="#F9E0BB" stroke-width="1.056" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
          <strong>{{ $t('resume') }}</strong>
        </a>
      </li>
    </ul>
    <div style="height: 50px;">
      <svg v-if="isMobile" class="hamb hamb-rotate hamb1" :class="{ active: isActive }" width="50px" height="50px"
        viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" @click="isActive = !isActive">
        <path class="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          stroke="#000000" stroke-width="2" stroke-linecap="round" />
        <path class="line middle" d="m 30,50 h 40" stroke="#000000" stroke-width="2" stroke-linecap="round" />
        <path class="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          stroke="#000000" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()


const emit = defineEmits(
  ['scroll', 'blur']
)

defineProps({
  isMobile: { type: Boolean, default: false }
})

const isActive = ref<boolean>(false)

onMounted(() => {
  document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar')
    const scrollY = window.scrollY
    const maxScroll = 400
    const progress = Math.min(scrollY / maxScroll, 0.7)

    const startColor = [74, 44, 42]


    const border = `3px solid rgba(${startColor[0]}, ${startColor[1]}, ${startColor[2]}, ${progress})`
    if (navbar) navbar.style.borderBottom = border
  })
})

function switchLang(lang: string) {
  locale.value = lang
  localStorage.setItem('user-lang', lang)
}

function handleSideClick(location: string) {
  isActive.value = false
  emit('scroll', location)
}

function clickContact(link: string) {
  window.open(link)
}

watch(() => isActive.value,
  () => {
    emit('blur', isActive.value)
  }
)

</script>

<style scoped lang="scss">
.navbar {
  box-sizing: border-box;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  --navbar-height: 5rem;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
  background-color: #4A2C2A;
  color: #F9E0BB;
  z-index: 1000;
  top: 0;
  padding: 0 5vw;
  overflow-x: visible;

  &__title {
    cursor: pointer;
    font-size: 2rem;
    flex: 1;
  }

  .navbar-links-container {
    display: flex;
    gap: 2vw;
    justify-content: flex-end;
    list-style: none;
    flex: 3;
    align-items: center;

    .navbar-links {
      list-style: none;
      display: flex;
      gap: 5vw;
      padding-left: 0;
    }

    li {
      cursor: pointer;
    }
  }
}

.navbar-side-links {
  --mask:
    radial-gradient(34.8px at 49.2px 50%, #000 99%, #0000 101%) 0 calc(50% - 48px)/100% 96px,
    radial-gradient(34.8px at -25.2px 50%, #0000 99%, #000 101%) 24px 50%/100% 96px repeat-y;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #4A2C2A;
  color: #F9E0BB;
  height: calc(102vh - var(--navbar-height));
  gap: 10vh;
  top: var(--navbar-height);
  width: 30%;
  right: -40%;
  list-style: none;
  padding: 0;
  padding-top: 1rem;
  transition: right 0.5s ease-in-out;
  z-index: 1001;
  padding-left: 4rem;
  margin-top: 0;
  transform: translateY(-3px);
  border-left: 3px solid rgba(74, 44, 42, 0.7);

  &__contact {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &--socials {
      display: flex;
      gap: 2rem;

      svg {
        width: 50px;
        height: 50px;

        path {
          stroke-width: 0.1;
          stroke: #F9E0BB;
          fill: #F9E0BB;
        }
      }
    }




    img {
      width: 40px;
      height: 40px;
    }
  }

  &__download {
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 2px solid #F9E0BB;
    border-radius: 10px;
    padding: 0 1rem;
    width: fit-content;
    font-size: 16px;
  }

  li {
    cursor: pointer;
  }
}

.navbar-side-links li a {
  color: #F9E0BB;

  &:visited {
    color: #F9E0BB !important;
  }
}

.navbar-side-links.visible {
  right: 0;
}

.lang {
  list-style: none;
  padding-left: 0;
  display: flex;
}

@media screen and (max-width: 1000px) {
  .navbar {
    &__title {
      font-size: 1.5rem;
    }
  }

}


@media screen and (max-width: 768px) {
  .navbar {
    padding-right: 5rem;

    .navbar-links-container {
      flex: 1;

      .lang {
        padding-right: 2vw;
      }
    }

    &__title {
      font-size: 1.5rem;
    }
  }
}

@media screen and (max-width: 650px) {
  .navbar {
    &__title {
      flex: 2;
    }
  }

  .navbar-side-links {
    padding-left: 4rem;
    width: calc(30% + 5rem);
    right: -65%;
  }
}

@media screen and (max-width: 400px) {
  .navbar {
    &__title {
      font-size: 1.25rem;
    }
  }

  .navbar-side-links {
    right: -75%;
  }

}

.hamb {
  cursor: pointer;
  transition: transform 400ms;
  user-select: none;
  z-index: 1002;
  color: #F9E0BB;
}

.hamb-rotate.active {
  transform: rotate(45deg);
}

.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #F9E0BB;
  stroke-width: 5;
  stroke-linecap: round;
}

.hamb1 .top {
  stroke-dasharray: 40 160;
}

.hamb1 .middle {
  stroke-dasharray: 40 142;
  transform-origin: 50%;
  transition: transform 400ms;
}

.hamb1 .bottom {
  stroke-dasharray: 40 85;
  transform-origin: 50%;
  transition: transform 400ms, stroke-dashoffset 400ms;
}

.hamb1.active .top {
  stroke-dashoffset: -64px;
}

.hamb1.active .middle {
  transform: rotate(90deg);
}

.hamb1.active .bottom {
  stroke-dashoffset: -64px;
}
</style>