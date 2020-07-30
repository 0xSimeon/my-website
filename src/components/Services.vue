<template>
  <section id="Services" class="services">
    <div class="py-16 pb-32 px-8 sm:px-4 sm:py-4 w-full">
      <h2
        class="services__heading  mt-16 sm:ml-0 px-4 sm:px-1 py-6 sm:text-4xl text-5xl font-bold font-headingFont"
      >
        {{ title }}
      </h2>
      <div
        class="services__grid grid grid-cols-3 gap-6 grid-row-1 md:grid-col-1 sm:grid-cols-1 ml-10 my-5 sm:ml-0 px-4 sm:px-1 sm py-6 w-full"
      >
        <div v-for="(service, index) in services" :key="index" class="px-2">
          <h3 class="font-headingFont font-bold sm:text-lg text-3xl mb-4">
            {{ service.title }}
          </h3>
          <p class=" text-2xl sm:text-lg  font-light font-textFont">
            {{ service.description }}
          </p>
        </div>
      </div>
      <app-button
        title="Contact me now"
        :class="[margin]"
        color="blue"
      ></app-button>
    </div>
  </section>
</template>

<script>
import Button from './Button.vue';
export default {
  data() {
    return {
      title: 'What I do',
      margin: 'ml-5 sm:ml-0 sm:p-3',
      services: [
        {
          title: 'Web Development',
          description: `Need a fully custom website for yourself or your business? I build
            beautiful and unique websites to meet your goals and target audience.`
        },
        {
          title: 'Website Repair',
          description: `Aware of a problem on your website? Let me know what is broken.`
        },
        {
          title: 'Feature Addition',
          description: `Want to add custom features to your website? I can do that too! simply contact me below with specific details of your needs.`
        }
      ]
    };
  },
  components: {
    appButton: Button
  }
};
</script>

<style lang="scss" scoped>
.services {
  background: $color-tertiary;
  clip-path: polygon(0 14%, 100% 0%, 100% 99%, 0 91%);

  @include respond(tab-port) {
    clip-path: unset;
  }

  &__heading {

    @include dots;
  }

  &__grid {
    place-content: center;
    justify-items: center;
    margin: 1rem auto;
  }
}
</style>
