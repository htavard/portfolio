<template>
  <nav class="navbar" id="navbar">
    <h1 class="navbar__title" @click="emit('scroll', 'top-page')">Hugo Tavard</h1>
    <ul class="navbar-links">
      <li @click="emit('scroll', 'top-page')"><strong>About</strong></li>
      <li @click="emit('scroll', 'projects')"><strong>Projects</strong></li>
      <li @click="emit('scroll', 'skills')"><strong>Skills</strong></li>
      <li @click="emit('scroll', 'contact')"><strong>Contact</strong></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const emit = defineEmits(
  ['scroll']
)

onMounted(() => {
  document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar')
    const scrollY = window.scrollY
    const maxScroll = 400
    const progress = Math.min(scrollY / maxScroll, 0.7)

    const startColor = [74, 44, 42]


    const border = `3px solid rgba(${startColor[0]}, ${startColor[1]}, ${startColor[2]}, ${progress})`

    navbar.style.borderBottom = border
  })
})

</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  display: flex;
  align-items: center;
  width: 94vw;
  justify-content: space-between;
  transition: background-color 0.2s ease;
  background-color: #F9E0BB;
  z-index: 1000;
  margin: -3vh -1vw 0 -1vw;
  padding: 0 6vw;
  overflow-x: visible;

  &__title {
    cursor: pointer;
    font-size: 2rem;
  }

  .navbar-links {
    display: flex;
    gap: 5vw;
    justify-content: flex-end;
    padding: 10px 20px;
    list-style: none;

    li {
      cursor: pointer;
    }
  }
}
</style>