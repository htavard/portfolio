<template>
  <div class="container">
    <navbar />
    <headerPresentation />
  </div>
</template>

<script setup lang="ts">
import navbar from './components/navbar.vue';
import headerPresentation from './components/headerPresentation.vue';

</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
}
</style>
