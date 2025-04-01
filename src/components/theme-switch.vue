<template>
  <button @click="toggleTheme">
    Switch to {{ currentTheme === 'light' ? 'Dark' : 'Light' }} Theme
  </button>
</template>

<script setup lang="ts">
const currentTheme = ref('light')

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  applyTheme(currentTheme.value)
}

const applyTheme = (theme: string) => {
  document.body.classList.remove('theme-light', 'theme-dark', 'theme-custom')
  document.body.classList.add(`theme-${theme}`)
  localStorage.setItem('user-theme', theme)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('user-theme') || 'light'
  currentTheme.value = savedTheme
  applyTheme(savedTheme)
})
</script>