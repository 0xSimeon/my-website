<template>
  <section class="py-10 pb-32 px-8 sm:px-4 sm:py-4 w-full about" id="About">
    <h2
      class="mt-16 sm:ml-0 px-4 sm:px-1 py-6 sm:text-4xl font-bold text-5xl font-headingFont about__heading"
    >
      A bit about me...
    </h2>
    <div class="about__container w-full mx-auto">
      <p class="text-2xl sm:text-lg  font-light font-textFont">
        I'm a second year computer science student who is passionate about making the
        web beautiful and accessible to everyone. I'm also passionate about participating and building inclusive communities which lead me to volunteer to hold weekly coding workshops in my school for Google Developer Student Clubs.
      </p>

      <p class="text-2xl sm:text-lg  font-light font-textFont mt-5">When I'm not coding / programming, I'm either trading the cryptocurrency market or I'm playing video games with my brothers. I also cook and read books as well. Movies? I'm a big fan of series. My all time favs are: <strong> Originals (\w Vampire Diaries), Teen wolf, Empire, Prison break and yes, Money heist! 😉 </strong></p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  background: var(--color-tertiary);
  clip-path: polygon(0 14%, 100% 0%, 100% 99%, 0 91%);
  @include respond(tab-port) {
    clip-path: unset;
  }
  &__heading {
    @include dots;
  }

  &__container {
    max-width: 60rem;
  }
}
</style>
