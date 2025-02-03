<template>
  <section class="nav-buttons">
    <ul class="nav-buttons__list">
      <li class="nav-buttons__list--item">
        <button class="nav-btn" @click="emit('scroll', 'projects')">
          Projects
        </button>
      </li>
      <li class="nav-buttons__list--item">
        <button class="nav-btn" @click="emit('scroll', 'skills')">
          Skills
        </button>
      </li>
      <li class="nav-buttons__list--item">
        <button class="nav-btn" @click="emit('scroll', 'contact')">
          Contact me
        </button>
      </li>
    </ul>
    <div class="scroll-img-container" @click="emit('scroll', 'projects')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" width="28" fill="#4A2C2A">
        <path
          d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95zm0 6l4.95-4.95a1 1 0 1 1 1.414 1.414l-5.657 5.657a1 1 0 0 1-1.414 0L.707 7.778a1 1 0 1 1 1.414-1.414l4.95 4.95z">
        </path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits(
  ['scroll']
)
</script>

<style lang="scss" scoped>
.nav-buttons {
  width: 50vw;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__list {
    display: flex;
    width: 100%;
    height: clamp(7vh, 5vw, 9vh);
    gap: 10%;
    padding-left: 0;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin-bottom: 1.5rem;
    isolation: isolate;
    overflow: visible;


    &--item {
      flex: 1;
      display: flex;

      .nav-btn {
        width: 100%;
        height: 100%;
        background-color: #F9E0BB;
        border: 3px solid #4A2C2A;
        border-radius: 30px;
        box-shadow: #4A2C2A 5px 5px 0 0;
        color: #4A2C2A;
        cursor: pointer;
        display: inline-block;
        font-weight: 600;
        font-size: 18px;
        padding: 12px 18px;
        text-align: center;
        text-decoration: none;
      }

      .nav-btn:hover {
        box-shadow: #422800 2px 2px 0 0;
        transform: translate(2px, 2px);
      }
    }
  }
}

.scroll-img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.scroll-img-container::before {
  content: "";
  display: block;
  border-left: 2px solid #4A2C2A;
  height: 12vh;
}

.scroll-img-container::after {
  content: "";
  display: block;
  border-left: 2px solid #4A2C2A;
  height: 12dvh;
}
</style>