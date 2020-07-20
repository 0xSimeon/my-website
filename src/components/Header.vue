<template>
  <div>
    <header
      class="flex md:block sm:py-4 sm:px-4 py-16  px-16 sm:justify-center justify-between sm:mx-auto  shadow-md"
    >
      <h1 class="text-5xl font-black font-headingFont relative p-3 mt-3">
        Simi.Codes
      </h1>
      <app-nav></app-nav>
      
    </header>
  </div>
</template>

<script>
import Nav from './Nav.vue';
export default {
  data() {
    return {
    };
  },
  components: {
    appNav: Nav
  }
};
</script>

<style lang="scss" scoped>

</style>
