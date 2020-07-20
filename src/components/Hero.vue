<template>
  <div>
    <section
      class="hero py-16 px-10 sm:flex-wrap sm:flex-col  sm:py-4 sm:px-4 mx-6 flex justify-center"
    >
      <div class="p-3 sm:mb-10">
        <h2 class="p-3 font-bold text-4xl sm:font-light font-headingFont  mb-8">
          Hi 👋, I'm Simeon.
        </h2>
        <p class="p-4 sm:text-2xl text-5xl font-medium font-textFont  mb-8">
          I am a frontend developer based in Port harcourt, Nigeria.
        </p>

        <div class="flex p-3">
          <app-button title="My Work" colorBlue="true"></app-button>
          <app-button title="Let's talk"></app-button>
        </div>
      </div>

      <div class="p-3">
        <img
          src="../assets/img/simeon.png"
          class=" hero__image justify-end object-fit rounded-lg w-2/3 sm:transform translate-x-0 transform translate-x-20"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  data() {
    return {};
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
}

.font-headingFont {
  color: $color-heading;
}

.font-textFont {
  color: $color-text;
}
</style>
