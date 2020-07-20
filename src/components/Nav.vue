<template>
  <nav class="nav">
    <button
      id="menuBtn"
      class="hamburger hidden md:block focus:outline-none absolute cursor-pointer"
      type="button"
      @click="toggleMenu"
    >
      <span class="hamburger__top-bun"></span>
      <span class="hamburger__bottom-bun"></span>
    </button>
    <div v-if="show">
      <ul class="nav__list flex sm:p-2 sm:p-2 p-5 mt-3 sm:block">
        <li
          v-for="link in navLinks"
          :key="link.id"
          class="nav__item ml-4 sm:ml-auto"
        >
          <a
            href="#"
            class="nav__link font-textFont text-2xl p-4 sm:p-2 no-underline"
            >{{ link }}</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navLinks: ['About', 'Services', 'Projects', 'Contact'],
      show: true
    };
  },
  methods: {
    toggleMenu() {
      this.show = !this.show;
    }
  },
  beforeCreate() {
    window.onload = () => {
      window.innerWidth < 900 ? (this.show = false) : (this.show = true);
      // console.log(this.show);
    };
  }
};
</script>

<style lang="scss" scoped>
.nav {
  &__link {
    color: $color-text;
    position: relative;

    &:hover {
      color: $color-heading;
    }

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: $color-secondary;
      transform-origin: center;
      transform: translate(-50%, 0) scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover::before {
      transform: translate(-50%, 0) scaleX(1);
    }
  }
}

.hamburger {
  top: 51px;
  right: 52px;
  width: 48px;
  height: 48px;
  &__top-bun,
  &__bottom-bun {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: #333;
  }

  &__top-bun {
    transform: translateY(-5px);
  }
  &__bottom-bun {
    transform: translateY(3px);
  }
  /* Open
   top
  {transform: rotate(45deg) translateY(0px);}
  bottom
  transform: rotate(-45deg) translateY(0px);
  */
}
</style>
