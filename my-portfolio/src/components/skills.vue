<template>
  <div class="skills" id="skillList">
    <div class="skills__item" v-for="(skill, index) in skills" :key="skill.name" :id="`skillItem-${index}`"
      @mouseenter="removeMarginOnHover(index)" @mouseleave="applyMarginOnLeave(index)">
      <span class="skills__item--icon"><img :src="skill.icon" :alt="skill.name" class="skills__item--icon__img"></span>
      <span class="skills__item--name">{{ skill.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skills } from '../data/skills';
const containerWidth = ref<number>(0)
const itemWidth = ref<number[]>([])
const problematicElements = ref<HTMLElement[]>([])
const problematicIndexes = ref<number[]>([])
const isLastLineOneElement = ref<boolean>(false)



const resizeObserver = new ResizeObserver((entrySizes) => {
  entrySizes.forEach(() => {
    resetMargins()
    initializeWidth()
    checkLinesAndLastIcons()
  })
})

onMounted(() => {
  resizeObserver.observe(document.getElementById('skillList'))
})

onUnmounted(() => {
  resizeObserver.disconnect()
})

function initializeWidth() {
  itemWidth.value = []
  const containerElement = document.getElementById("skillList")
  if (containerElement) containerWidth.value = containerElement.clientWidth
  for (let i = 0; i < skills.length; i++) {
    itemWidth.value.push(60) //largeur d'une icône
  }
}

function resetMargins() {
  for (let i = 0; i < skills.length; i++) {
    document.getElementById(`skillItem-${i}`).style.marginRight = "0px"
  }
}

function checkLinesAndLastIcons() {
  problematicElements.value = []
  problematicIndexes.value = []
  isLastLineOneElement.value = false
  let itemInPreviousLines = 0
  let numberOfItemLastLine = 0
  for (let j = 0; j < skills.length; j++) {
    if ((j - itemInPreviousLines + 1) * 60 + (j - itemInPreviousLines) * 50 + 120 >= containerWidth.value) {
      itemInPreviousLines = j
      problematicElements.value.push(document.getElementById(`skillItem-${j - 1}`))
      problematicIndexes.value.push(j - 1)
      document.getElementById(`skillItem-${j - 1}`).style.marginRight = "120px"
      numberOfItemLastLine = itemInPreviousLines / problematicElements.value.length
    }
  }
  if (numberOfItemLastLine && skills.length % numberOfItemLastLine === 1) {
    isLastLineOneElement.value = true
    problematicElements.value.pop()
    problematicElements.value.push(document.getElementById(`skillItem-${skills.length - 3}`))
    document.getElementById(`skillItem-${skills.length - 3}`).style.marginRight = "240px"
    document.getElementById(`skillItem-${skills.length - 2}`).style.marginRight = "0px"
  }
}

function removeMarginOnHover(index: number) {
  let flag = false

  for (let i = 0; i < problematicIndexes.value.length; i++) {
    if (index <= problematicIndexes.value[i] && !flag) {
      problematicElements.value[i].style.marginRight = i === problematicElements.value.length - 1 && isLastLineOneElement.value ? "120px" : "0px"
      flag = true
    }
  }
}

function applyMarginOnLeave(index: number) {
  let flag = false

  for (let i = 0; i < problematicIndexes.value.length; i++) {
    if (index <= problematicIndexes.value[i] && !flag) {
      problematicElements.value[i].style.marginRight = i === problematicElements.value.length - 1 && isLastLineOneElement.value ? "240px" : "120px"

      flag = true
    }
  }
}

nextTick(() => {
  initializeWidth()
  checkLinesAndLastIcons()
})



</script>

<style scoped lang="scss">
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  position: relative;
  margin-top: 8vh;

  &__item {
    position: relative;
    list-style: none;
    width: 60px;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    overflow: hidden;
    margin-bottom: 8vh;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 60px;
      background: #ff7f51;
      opacity: 0;
      transition: 0.3s;
    }

    &::after {
      content: "";
      position: absolute;
      top: 10px;
      width: 100%;
      height: 100%;
      border-radius: 60px;
      background: #ff7f51;
      transition: 0.3s;
      filter: blur(15px);
      z-index: -1;
      opacity: 0;
    }

    &:hover {
      width: 180px;

      .skills__item--icon__img {
        transform: scale(0);
        transition-delay: 0s;
      }

      .skills__item--name {
        transform: scale(1);
        transition-delay: 0.1s;
      }
    }

    &:hover::before {
      opacity: 1;
    }


    &--icon {
      position: absolute;
      transition: 0.3s;

      &__img {
        width: 50px;
        height: 50px;
        object-fit: contain;
        transition: 0.3s;
        transition-delay: 0.1s;
      }
    }

    &--name {
      position: absolute;
      color: #720026;
      font-size: 1.1em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      transform: scale(0);
      transition: 0.3s;
      transition-delay: 0s;
      white-space: nowrap;
    }
  }
}


// .skills:hover {
//   flex-wrap: nowrap;
// }</style>