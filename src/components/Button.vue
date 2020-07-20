<template>
  <div>
    <a
      href="#"
      :class="[colorBlue ? 'btn--blue' : 'btn--red']"
      class=" btn inline-block text-white rounded px-4 py-4 sm:text-2xl  font-bold text-center text-2xl font-textFont shadow-xl min-w-button"
    >
      {{ title }}
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['title', 'colorBlue']
};
</script>

<style lang="scss" scoped>
.btn {
  transition: all 0.2s;
  box-sizing: border-box;
//   box-shadow: rgba(0, 0, 0, 0.15) 5px 3px 10px;
  &:hover {
    transform: scale(1.05);
  }

  &--blue {
    // @apply bg-blue-700 text-white;
    background: $color-primary;
  }

  &--red {
    // border: 2px soild $color-blue;
    background: $color-secondary;
    margin-left: 1.5rem;
  }
}
</style>
