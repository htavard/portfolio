<template>
  <div class="skills">
    <div class="skills__item" v-for="skill in skills" :key="skill.name">
      <span class="skills__item--icon"><img :src="skill.icon" :alt="skill.name" class="skills__item--icon__img"></span>
      <span class="skills__item--name">{{ skill.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skills } from '../data/skills';

</script>

<style scoped lang="scss">
.skills {
  display: flex;
  gap: 50px;
  position: relative;
}

div div {
  position: relative;
  list-style: none;
  width: 60px;
  height: 60px;
  background: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}

div div::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 60px;
  background: linear-gradient(45deg, var(--i), var(--j));
  opacity: 0;
  transition: 0.5s;
}

div div::after {
  content: "";
  position: absolute;
  top: 10px;
  width: 100%;
  height: 100%;
  border-radius: 60px;
  background: linear-gradient(45deg, var(--i), var(--j));
  transition: 0.5s;
  filter: blur(15px);
  z-index: -1;
  opacity: 0;
}

div div:hover {
  width: 180px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0);
}

div div:hover::before {
  opacity: 1;
}

div div:hover::after {
  opacity: 0.5;
}

div div img {
  color: #777;
  font-size: 1.75em;
  transition: 0.5s;
  transition-delay: 0.25s;
  width: 50px;
  height: 50px;
}

div div:hover img {
  transform: scale(0);
  color: #fff;
  transition-delay: 0s;
}

div div span {
  position: absolute;
}

div div .skills__item--name {
  color: #fff;
  font-size: 1.1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transform: scale(0);
  transition: 0.5s;
  transition-delay: 0s;
}

div div:hover .skills__item--name {
  transform: scale(1);
  transition-delay: 0.25s;
}
</style>