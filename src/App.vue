<template>
  <div id="app" class="">
    <app-nav></app-nav>
    <app-header></app-header>
    <app-hero></app-hero>
    <app-services></app-services>
  </div>
</template>

<script>
import Header from './components/Header';
import Hero from './components/Hero.vue';
import Nav from './components/Nav.vue';
import Services from './components/Services.vue';
export default {
  name: 'App',
  components: {
    appHeader: Header,
    appHero: Hero,
    appNav: Nav,
    appServices: Services
  }
};
</script>

<style lang="scss">
#app {
  background: rgba($color-light, 0.5);
}
</style>
