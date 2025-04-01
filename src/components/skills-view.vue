<template>
  <div class="list-container" id="containerList">
    <h3 class="category">{{ getLocalizedCategory(category) }}</h3>
    <div :class="isSmallFormat ? `skills-small` : `skills`" id="skillList" v-if="skills">
      <div :class="isSmallFormat ? `skills-small__item` : `skills__item`" v-for="(skill, index) in skills" :key="skill.name"
        :id="`skillItem-${index}-${category}`" @mouseenter="removeMarginOnHover(index)"
        @mouseleave="applyMarginOnLeave(index)">
        <span class="skills__item--icon"><img :src="skill.icon" :alt="skill.name"
            class="skills__item--icon__img"></span>
        <span class="skills__item--name">{{ skill.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skillList } from '../data/skills';
import { ESkillCategory } from '../types/enums';
import { useI18n } from 'vue-i18n'

const props = defineProps({
  category: { type: String as PropType<ESkillCategory>, default: null },
  containerWidth: { type: Number, default: 0 },
  isSmallFormat: { type: Boolean, default: false }
})
const skillsWidth = ref<number>(props.containerWidth)
const itemWidth = ref<number[]>([])
const problematicElements = ref<HTMLElement[]>([])
const problematicIndexes = ref<number[]>([])
const isLastLineOneElement = ref<boolean>(false)
const skills = ref<SkillTag[]>([])

onMounted(() => {
  skills.value = skillList.filter((skill) => skill.category === props.category
  )
})

function useLocalizedCategories() {
  const { t } = useI18n()
  
  const getLocalizedCategory = (category: ESkillCategory) => {
    return t(`categories.${category}`)
  }
  
  return {
    getLocalizedCategory
  }
}
const {getLocalizedCategory} = useLocalizedCategories()

function initializeWidth() {
  itemWidth.value = []
  if (!skillsWidth.value) return
  for (let i = 0; i < skills.value.length; i++) {
    itemWidth.value.push(60) //largeur d'une icône
  }
}

function resetMargins() {
  for (let i = 0; i < skills.value.length; i++) {
    const element = document.getElementById(`skillItem-${i}-${props.category}`)
    if(element) element.style.marginRight = "0px"
  }
}

function checkLinesAndLastIcons() {
  if (!skillsWidth.value) return
  problematicElements.value = []
  problematicIndexes.value = []
  isLastLineOneElement.value = false
  let itemInPreviousLines = 0
  let numberOfItemLastLine = 0

  const container = document.getElementById("containerList")
  if (!container) return // Ensure containerList exists before proceeding

  const boxStyle = window.getComputedStyle(container)
  const boxPadding =
    parseFloat(boxStyle.paddingLeft) + parseFloat(boxStyle.paddingRight)

  for (let j = 0; j < skills.value.length; j++) {
    if (
      (j - itemInPreviousLines + 1) * 60 +
        (j - itemInPreviousLines) * 50 +
        120 >=
      skillsWidth.value - boxPadding
    ) {
      itemInPreviousLines = j

      const skillItem = document.getElementById(
        `skillItem-${j - 1}-${props.category}`
      )
      if (skillItem) {
        problematicElements.value.push(skillItem)
        problematicIndexes.value.push(j - 1)
        skillItem.style.marginRight = "120px"
      }

      numberOfItemLastLine = itemInPreviousLines / problematicElements.value.length
    }
  }

  if (
    numberOfItemLastLine &&
    skills.value.length % numberOfItemLastLine === 1 &&
    skills.value.length > 3
  ) {
    isLastLineOneElement.value = true
    problematicElements.value.pop()

    const skillItemPrev = document.getElementById(
      `skillItem-${skills.value.length - 3}-${props.category}`
    )
    if (skillItemPrev) {
      problematicElements.value.push(skillItemPrev)
      skillItemPrev.style.marginRight = "240px"
    }

    const skillItemLast = document.getElementById(
      `skillItem-${skills.value.length - 2}-${props.category}`
    )
    if (skillItemLast) {
      skillItemLast.style.marginRight = "0px"
    }
  }
}


function removeMarginOnHover(index: number) {
  if(props.isSmallFormat) return
  let flag = false

  for (let i = 0; i < problematicIndexes.value.length; i++) {
    if (index <= problematicIndexes.value[i] && !flag) {
      problematicElements.value[i].style.marginRight = i === problematicElements.value.length - 1 && isLastLineOneElement.value ? "120px" : "0px"
      flag = true
    }
  }
}

function applyMarginOnLeave(index: number) {
  if(props.isSmallFormat) return
  let flag = false

  for (let i = 0; i < problematicIndexes.value.length; i++) {
    if (index <= problematicIndexes.value[i] && !flag) {
      problematicElements.value[i].style.marginRight = i === problematicElements.value.length - 1 && isLastLineOneElement.value ? "240px" : "120px"

      flag = true
    }
  }
}

watch(() => props.containerWidth,
  (newValue) => {
    skillsWidth.value = newValue
    nextTick(() => resetMargins())
    if (!props.isSmallFormat) {
      nextTick(() => {
        initializeWidth()
        checkLinesAndLastIcons()
      })
    }

  }, { immediate: true })
</script>

<style scoped lang="scss">
.list-container {
  border: var(--stylized-text) 3px solid;
  border-radius: 50px;
  padding: 1rem;
  width: fit-content;
}

.category {
  text-transform: capitalize;
  padding-left: 2%;
  text-align: center;
}

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
    margin-bottom: 40px;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 60px;
      background: var(--tag-color);
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
      background: var(--tag-color);
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
      color: var(--tag-text);
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

.skills-small {
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: center;

  &__item {
    position: relative;
    list-style: none;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
}

@media screen and (max-width: 1000px) {
  .category {
    margin-top: -5px;
  }
}

@media screen and  (max-width: 550px) {
  .skills-small {
    gap: 30px;
  }
}

@media screen and (max-width: 450px) {
  .list-container {
    padding: 1rem 0.5rem;
  }
  .skills-small {
    gap: 5px;
  }
  .skills__item--icon__img{
    width: 40px;
    height: 40px;
  }
}
</style>