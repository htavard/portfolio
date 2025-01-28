<template>
  <section class="nav-buttons">
    <ul class="nav-buttons__list">
      <li class="nav-buttons__list--item">
        <button class="nav-btn">
          Projects
        </button>
      </li>
      <li class="nav-buttons__list--item">
        <button class="nav-btn">
          Skills & Technologies
        </button>
      </li>
      <li class="nav-buttons__list--item">
        <button class="nav-btn">
          Contact me
        </button>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.nav-buttons {
  &__list {
    display: flex;
    gap: 10px;
    justify-content: center;
    list-style-type: none;
  }
}
</style>