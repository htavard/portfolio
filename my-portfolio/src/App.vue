<template>
  <div class="container">
    <headerPresentation />
    <navButtons />
  </div>
</template>

<script setup lang="ts">
import headerPresentation from './components/headerPresentation.vue';
import navButtons from './components/navButtons.vue';

</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  gap: 10dvh;
}
</style>
