<template>
  <div class="mode" @click="changeTheme">
    <img
      v-if="darkTheme"
      class="icon"
      :src="require(`../assets/img/icons/${icons.dark}`)"
    />
    <img
      v-else
      class="icon"
      :src="require(`../assets/img/icons/${icons.light}`)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: {
        dark: 'moon.svg',
        light: 'sun.svg'
      },
      darkTheme: false
    };
  },
  methods: {
    changeTheme() {
      this.darkTheme = !this.darkTheme;
      document.body.classList.toggle('dark');

    }
  }
};
</script>

<style lang="scss" scoped>
.mode {
  position: fixed;
  top: 8rem;
  z-index: 20;
  right: 3.6rem;

  &__text {
    color: var(--color-secondary);
  }

  @include respond(phone) {
    right: 2rem;
    width: 3rem;
    height: 3rem;
  }
}
.icon {
  width: 4rem;
  height: 4rem;

  cursor: pointer;
  transition: all .2s;

  &:hover {
    opacity: .9;
  }
}
</style>
