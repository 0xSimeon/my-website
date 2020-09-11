<template>
  <div class="mode">
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
    <!-- <svg>
      <use :href="require(`../assets/img/icons/${icons.dark}#sun`)"></use>
    </svg> -->

    <!-- <p>jfhfgsfggf</p> -->
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
      //   const toggle = document.querySelector('.icon');
      //   if (!document.documentElement.getAttribute('data-theme')) {
      //     this.darkMode === true
      //   document.documentElement.setAttribute('data-theme', 'dark');

      //   } else {
      //     document.documentElement.setAttribute('data-theme', 'light');

      //   }

      //   toggle.addEventListener('change', this.changeTheme);

      // }
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
}
</style>
