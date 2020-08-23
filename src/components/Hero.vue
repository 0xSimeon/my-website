<template>
  <div>
    <section
      class="hero py-16 px-10 sm:flex-wrap sm:flex-col  sm:py-4 sm:px-3 mx-6 sm:mx-0 flex justify-center"
    >
      <div class="sm:mb-10">
        <h2
          class="sm:text-4xl text-5xl sm:font-bold font-headingFont  mb-8 sm:mb-4"
        >
          Hi, 👋 <br />
          <strong>I'm Simeon</strong>.
        </h2>
        <p
          class="sm:text-2xl text-4xl font-medium font-textFont  mb-8
        "
        >
          I am a frontend developer based in
          <strong>Port harcourt, Nigeria</strong>.
        </p>

        <div class="flex">
          <app-button title="My Work" link="#Projects"></app-button>
          <app-button title="Let's talk" color="red"></app-button>
        </div>
      </div>

      <div class="p-3 sm:p-0">
        <img
          src="../assets/img/simeon.png"
          class="sm:hidden hero__image justify-end object-fit rounded-lg w-1/2 sm:transform translate-x-0 transform translate-x-20"
        />

        <div class="flex px-4 sm:px-0 py-2 mt-4 sm:w-full w-3/5 mx-auto">
          <a
            href="https://twitter.com/TechviberNG"
            target="_blank"
            rel="noopener"
            ><svg class="hero__icon p-2 ml-2">
              <use href="../assets/img/icons/sprite.svg#icon-twitter"></use>
            </svg>
          </a>

          <a
            href="https://github.com/simeon4real"
            target="_blank"
            rel="noopener"
            ><svg class="hero__icon p-2 ml-2">
              <use href="../assets/img/icons/sprite.svg#icon-github"></use>
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/simeonudoh"
            target="_blank"
            rel="noopener"
            ><svg class="hero__icon p-2 ml-2">
              <use href="../assets/img/icons/sprite.svg#icon-linkedin"></use>
            </svg>
          </a>

          <a
            href="https://facebook.com/Simeon.udoh.71"
            target="_blank"
            rel="noopener"
            ><svg class="hero__icon p-2 ml-2">
              <use href="../assets/img/icons/sprite.svg#icon-facebook"></use>
            </svg>
          </a>


        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  data() {
    return {
      socials: [
        `../assets/img/icons/sprite.svg#icon-github`,
        `../assets/img/icons/sprite.svg#icon-twitter`,
        `../assets/img/icons/sprite.svg#icon-linkedin`,
        `../assets/img/icons/sprite.svg#icon-facebook`,
        `../assets/img/icons/sprite.svg#icon-instagram`
      ]
      // github: `../assets/img/icons/sprite.svg#icon-github`,
      // twitter: `../assets/img/icons/sprite.svg#icon-twitter`,
      // linkedin: `../assets/img/icons/sprite.svg#icon-linkedin`,
      // facebook: `../assets/img/icons/sprite.svg#icon-facebook`,
      // instagram: `../assets/img/icons/sprite.svg#icon-instagram`
    };
  },
  components: {
    appButton: Button
  }
};
</script>

<style lang="scss" scoped>
.hero {
  &__image {
    box-shadow: 50px -25px 0px 0px $color-primary;
    border-bottom: 10px solid $color-secondary;
  }
  &__icon {
    fill: $color-primary;
    width: 3rem;
    height: 3rem;
    transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);

    &:hover {
      transform: scale(1.3);
    }
  }
}

.font-headingFont {
  color: $color-heading;
}

.font-textFont {
  color: $color-text;
}
</style>
