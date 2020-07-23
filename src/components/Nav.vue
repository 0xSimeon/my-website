<template>
  <!-- <nav class="nav">
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
  </nav> -->
  <div class="navigation">
    <input
      type="checkbox"
      name="navigation menu"
      class="navigation__checkbox hidden"
      id="nav-toggle"
    />
    <label
      name="toggle__button"
      role="toggle button"
      class="navigation__button fixed z-50 rounded-full text-center cursor-pointer"
      for="nav-toggle"
    >
      <span class="navigation__icon relative">&nbsp;</span>
    </label>
    <div class="navigation__background z-30 fixed rounded-full">
      &nbsp;
    </div>
    <nav class="navigation__nav top-0 left-0 w-full fixed top-0 right-0 z-40">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a
            href="#About" class="navigation__link text-3xl font-light uppercase py-4 px-8 mb-4 block font-textFont rounded"
          >About
          </a>
        </li>

        <li class="navigation__item">
          <a
            href="#Services" class="navigation__link text-3xl font-light uppercase py-4 px-8 mb-4 block font-textFont rounded"
          >Services
          </a>
        </li>

        <li class="navigation__item">
          <a
            href="#Projects" class="navigation__link text-3xl font-light uppercase py-4 px-8 mb-4 block font-textFont rounded"
          > Projects
          </a>
        </li>

        <li class="navigation__item">
          <a
            href="#Contact" class="navigation__link text-3xl font-light uppercase py-4 px-8 mb-4 block font-textFont rounded"
          > Contact
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: ['About', 'Services', 'Projects', 'Contact'],
      num: 0
      // show: true
    };
  },
  methods: {
    // toggleMenu() {
    //   this.show = !this.show;
    // }
  }
  // beforeCreate() {
  //   window.onload = () => {
  //     window.innerWidth < 900 ? (this.show = false) : (this.show = true);
  //     // console.log(this.show);
  //   };
  // }
};
</script>

<style lang="scss" scoped>
.navigation {
  &__button {
    background: $color-light;
    height: 4.5rem;
    width: 4.5rem;
    top: 2.5rem;
    right: 3.5rem;
    box-shadow: 0 0.5rem 0.5rem rgba($color-text, 0.8);
  }

  &__background {
    height: 3.5rem;
    width: 3.5rem;
    top: 3rem;
    right: 4rem;
    background: radial-gradient($color-secondary, $color-primary);
    transition: transform 0.8s cubic-bezier(0.45, 0, 0.55, 1);
  }

  &__nav {
    height: 100vh;

    opacity: 0;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  &__list {
    @include center;
    list-style: none;
    text-align: center;
  }

  &__item {
  }

  &__link {
    &:link,
    &:visited {
      background: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        $color-light 50%
      );
      background-size: 220%;
      transition: all 0.5s;
      color: $color-light;
    }

    &:hover,
    &:active {
      background-position: 100%;
      transform: scale(1.05);
      color: $color-primary;
      transform: translateX(1rem);
    }
  }

  &__checkbox:checked ~ &__background {
    transform: scale(100);
  }

  &__checkbox:checked ~ &__nav {
    opacity: 1;
    width: 100%;
  }
  &__icon {
    margin-top: 2rem;
    &,
    &::before,
    &::after {
      width: 2.5rem;
      height: 2px;
      background: black;
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }

  &__button:hover &__icon::before {
    top: -1rem;
  }

  &__button:hover &__icon::after {
    top: 1rem;
  }

  &__checkbox:checked + &__button &__icon {
    background: transparent;
  }

  &__checkbox:checked + &__button &__icon::before {
    top: 0;
    transform: rotate(calc(180deg - 45deg));
  }

  &__checkbox:checked + &__button &__icon::after {
    top: 0;
    transform: rotate(calc(180deg + 45deg));
  }
}

@media only screen and (max-width: 500px) {
  .navigation {
    &__background {
      top: 2.5rem;
      right: 2rem;
    }

    &__button {
      width: 3.5rem;
      height: 3.5rem;
      right: 2rem;
    }

    &__icon {
      margin-top: 1.7rem;

      &::before {
        top: -0.7rem;
      }
      &::after {
        top: 0.7rem;
      }
    }
  }
}
// // .nav {
// //   &__link {
// //     color: $color-text;
// //     position: relative;

// //     &:hover {
// //       color: $color-heading;
// //     }

// //     &::before {
// //       content: '';
// //       position: absolute;
// //       left: 50%;
// //       bottom: 0;
// //       width: 100%;
// //       height: 2px;
// //       background-color: $color-secondary;
// //       transform-origin: center;
// //       transform: translate(-50%, 0) scaleX(0);
// //       transition: transform 0.3s ease-in-out;
// //     }

// //     &:hover::before {
// //       transform: translate(-50%, 0) scaleX(1);
// //     }
// //   }

// // .hamburger {
// //   top: 51px;
// //   right: 52px;
// //   width: 48px;
// //   height: 48px;
// //   &__top-bun,
// //   &__bottom-bun {
// //     content: '';
// //     position: absolute;
// //     width: 24px;
// //     height: 2px;
// //     background: #333;
// //   }

// //   &__top-bun {
// //     transform: translateY(-5px);
// //   }
// //   &__bottom-bun {
// //     transform: translateY(3px);
// // }
/*
  Open
   top
  {transform: rotate(45deg) translateY(0px);}
  bottom
  transform: rotate(-45deg) translateY(0px);
  
}

*/
</style>
