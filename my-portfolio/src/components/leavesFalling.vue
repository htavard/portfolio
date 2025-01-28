<template>
  <div class="falling-leaf" v-for="index in 100" :key="index" :style="[getRandomDelay(), getRandomDuration()]">
    <img src="../assets/pictures/fall/leaf1.png" alt="Falling Leaf" class="img" :style="getLeafStyle()" />
  </div>
  <!-- <img src="../assets/pictures/fall/leaf-blower.png" alt="leaf blower" class="leaf-blower" /> -->
</template>

<script setup lang="ts">

const getRandomRotation = () => {
  const rotationX = Math.random() * 90 - 45;
  const rotationY = Math.random() * 90 - 45;
  const rotationZ = Math.random() * 90 - 45;
  return `rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg)`;
};

const getRandomTranslateX = () => {
  const width = document.documentElement.scrollWidth
  const translateX = Math.random() * width
  return `translateX(${translateX}px)`
}

const getRandomDelay = () => {
  return `animation-delay: ${Math.random() * 90}s`; // Délai entre 0 et 90 secondes
}

const getRandomDuration = () => {
  return `animation-duration: ${Math.random() * 5 + 4}s`
}

const getLeafStyle = () => {
  return {
    transform: `${getRandomTranslateX()} ${getRandomRotation()}`,
  }
}


</script>

<style scoped lang=scss>

.falling-leaf {
  position: absolute;
  display: flex;
  top: 50%;
  left: -8vw;
  width: 100px;
  animation: fall 5s ease-in-out forwards;
  transform-style: preserve-3d;
  border-radius: 50%;
  visibility: hidden;
  padding: 0;

  .img {
    width: 8rem;
    height: 8rem;
  }

}

.leaf-blower {
  position: absolute;
  top: 50%;
  left: 80%;
  transform: rotate(-40deg);
  width: 20%;
}

@keyframes fall {
  0% {
    visibility: visible;
    transform: rotate(-150deg) translate(-165px, 0) rotate(150deg);
    margin-top: 0%;
  }

  25% {
    transform: rotate(0deg) translate(-165px, 50px) rotate(0deg);
  }

  50% {
    transform: rotate(-150deg) translate(-165px, 0) rotate(150deg);
  }

  75% {
    transform: rotate(-30deg) translate(-165px, 50px) rotate(30deg)
  }

  100% {
    visibility: visible;
    transform: rotate(-90deg) translate(-165px, 0) rotate(90deg);
    margin-top: 10%;
  }
}
</style>