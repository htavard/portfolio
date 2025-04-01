<template>
  <section class="nav-buttons">
    <ul class="nav-buttons__list">
      <li class="nav-buttons__list--item">
        <button class="nav-btn" @click="emit('scroll', 'projects')">
          {{ $t('projects') }}
        </button>
      </li>
      <li class="nav-buttons__list--item">
        <button class="nav-btn" @click="emit('scroll', 'skills')">
          {{ $t('skills') }}
        </button>
      </li>
      <li class="nav-buttons__list--item">
        <button class="nav-btn" @click="emit('scroll', 'contact')">
          {{ $t('contactMe') }}
        </button>
      </li>
    </ul>
    <div class="scroll-img-container" @click="emit('scroll', 'projects')">
      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="40 " height="40">
        <path fill="currentColor"
          d="M13,3V1a1,1,0,0,0-2,0V3a7.008,7.008,0,0,0-7,7v6a8,8,0,0,0,16,0V10A7.008,7.008,0,0,0,13,3Zm5,13A6,6,0,0,1,6,16V10a5.006,5.006,0,0,1,5-5h2a5.006,5.006,0,0,1,5,5Z" />
        <path fill="currentColor" d="M12,7a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V8A1,1,0,0,0,12,7Z" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="30" height="40"
        class="down-arrows">
        <g>
          <path fill="currentColor"
            d="M.305,12.293a1,1,0,0,1,1.414,0l8.172,8.171a3,3,0,0,0,4.242,0l8.172-8.171a1,1,0,0,1,1.414,1.414l-8.172,8.171a5,5,0,0,1-7.07,0L.305,13.707a1,1,0,0,1,0-1.414Z" />
          <path fill="currentColor"
            d="M.305,2.293a1,1,0,0,1,1.414,0l9.586,9.586a1,1,0,0,0,1.414,0l9.586-9.586a1,1,0,0,1,1.414,1.414l-9.586,9.586a3,3,0,0,1-4.242,0L.305,3.707a1,1,0,0,1,0-1.414Z" />
        </g>
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
  justify-content: space-around;
  gap: 2rem;
  height: 100%;

  &__list {
    display: flex;
    width: 100%;
    height: clamp(7vh, 5vw, 9vh);
    gap: 10%;
    padding-left: 0;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    isolation: isolate;
    overflow: visible;


    &--item {
      flex: 1;
      display: flex;

      .nav-btn {
        width: 100%;
        height: 100%;
        background-color: var(--background);
        border: 3px solid var(--stylized-text);
        border-radius: 30px;
        box-shadow: var(--stylized-text) 5px 5px 0 0;
        color: var(--stylized-text);
        cursor: pointer;
        display: inline-block;
        font-weight: 600;
        font-size: 18px;
        padding: 12px 18px;
        text-align: center;
        text-decoration: none;
      }

      .nav-btn:hover {
        box-shadow: var(--stylized-text) 2px 2px 0 0;
        transform: translate(2px, 2px);
      }
    }
  }
}

.scroll-img-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  justify-content: flex-end;
  color: var(--stylized-text);
  cursor: pointer;

  .down-arrows {
    animation: 2s ease-in-out 1s infinite movearrows;
  }

  @keyframes movearrows {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }
}

@media screen and (max-width: 1150px) {
  .nav-buttons {
    width: 60vw;
  }
}

@media screen and (max-width: 950px) {
  .nav-buttons {
    width: 74vw;
  }
}
</style>