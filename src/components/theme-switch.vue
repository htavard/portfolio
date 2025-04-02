<template>
  <div class="theme-switch-container" ref="switchContainer">
    <svg @click="toggleTheme" class="color-switch" viewBox="0 0 16 16" xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg6190" fill="#000000">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <rect
          style="opacity:1;vector-effect:none;fill-opacity:1;stroke:none;stroke-width:3.20000005;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:1"
          id="rect1290" width="16" height="16" x="0" y="0"></rect>
        <rect y="1" x="1" height="4.0000005" width="4.0000005" id="rect6829-4"
          style="display:inline;fill:#5da1f3;fill-opacity:1;stroke:none;stroke-width:1.15467715"></rect>
        <rect style="display:inline;fill:#5dd3f3;fill-opacity:1;stroke:none;stroke-width:1.15467715" id="rect6831-7"
          width="4.0000005" height="4.0000005" x="6" y="1"></rect>
        <rect y="1" x="11" height="4.0000005" width="4.0000005" id="rect6833-1"
          style="display:inline;fill:#5df3e3;fill-opacity:1;stroke:none;stroke-width:1.15467715"></rect>
        <rect style="display:inline;fill:#f35d5d;fill-opacity:1;stroke:none;stroke-width:1.15466905" id="rect6835-3"
          width="4.0000005" height="3.999944" x="1" y="6"></rect>
        <rect y="11" x="1" height="4.0000005" width="4.0000005" id="rect6837-2"
          style="display:inline;fill:#f3c05d;fill-opacity:1;stroke:none;stroke-width:1.15467715"></rect>
        <rect y="6" x="6" height="3.999944" width="4.0000005" id="rect6839-1"
          style="display:inline;fill:#f35d99;fill-opacity:1;stroke:none;stroke-width:1.15466905"></rect>
        <rect style="display:inline;fill:#d55df3;fill-opacity:1;stroke:none;stroke-width:1.15466905" id="rect6841-6"
          width="4.0000005" height="3.999944" x="11" y="6"></rect>
        <rect style="display:inline;fill:#d5f35d;fill-opacity:1;stroke:none;stroke-width:1.15467715" id="rect6843-3"
          width="4.0000005" height="4.0000005" x="6" y="11"></rect>
        <rect y="11" x="11" height="4.0000005" width="4.0000005" id="rect6845-8"
          style="display:inline;fill:#8bf35d;fill-opacity:1;stroke:none;stroke-width:1.15467715"></rect>
      </g>
    </svg>
    <div v-if="isVisible" class="dropdown">
      <div v-for="theme in availableThemes" :key="theme.name" class="theme-option" @click="selectTheme(theme.id)"
        :style="currentTheme === theme.id ? { backgroundColor: theme.backgroundSelected } : {}">
        <div class="color-circle" :style="{ backgroundColor: theme.color }"></div>
        <span class="theme-name"
          :style="currentTheme === theme.id ? { color: theme.color } : {}">{{
            $t(`theme.${theme.name}`) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { themes } from '@/data/themes'
import { onClickOutside } from '@vueuse/core'
import { useThemeStore } from '@/utils/themeStore'

const themeStore = useThemeStore()

const isVisible = shallowRef<boolean>(false)
const availableThemes: Theme[] = themes

const switchContainer = useTemplateRef('switchContainer')

const currentTheme = computed(() => themeStore.currentTheme)

onMounted(() => {
  const savedTheme = localStorage.getItem('selected-theme')
  if (savedTheme) {
    const theme = availableThemes.find(t => t.id === savedTheme)
    if (theme) themeStore.setTheme(theme.id)
  }
})

function selectTheme(themeId: string) {
  themeStore.setTheme(themeId)
  isVisible.value = false
}

const toggleTheme = () => {
  isVisible.value = !isVisible.value
}

onClickOutside(switchContainer, () => {

  isVisible.value = false
})
</script>

<style scoped lang="scss">
.theme-switch-container {
  width: 25px;
  height: 25px;
  cursor: pointer;
  position: relative;


  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--background);
    border: 1px solid var(--stylized-text);
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 125px;
    z-index: 1000;
    margin-top: 5px;

    .theme-option {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }

      .color-circle {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 10px;
        border: 1px solid rgba(0, 0, 0, 0.2);
      }

      .theme-name {
        color: var(--text, #333333);
        font-size: 14px;
        text-transform: capitalize;
      }

    }
  }


}
</style>