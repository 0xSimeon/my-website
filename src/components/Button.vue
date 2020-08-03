<template>
  <div>
    <a
      href="#"
      :class="[color === 'blue' ? 'btn--blue' : 'btn--red']"
      class=" btn inline-block text-white rounded px-4 py-4 sm:text-xl  font-bold text-center text-2xl font-textFont shadow-xl min-w-button sm:min-w-1/2"
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
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'blue'
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  transition: all 0.2s;
  box-sizing: border-box;
  &:hover {
    transform: scale(1.05);
  }

  &--blue {
    // @apply bg-blue-700 text-white;
    background: $color-primary;
  }

  &--red {
    background: $color-secondary;
    margin-left: 1.5rem;
  }
}
</style>
