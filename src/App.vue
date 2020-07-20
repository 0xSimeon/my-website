<template>
  <div id="app" class="">
    <app-header></app-header>
    <app-hero></app-hero>
  </div>
</template>

<script>
import Header from './components/Header';
import Hero from './components/Hero.vue';
export default {
  name: 'App',
  components: {
    appHeader: Header,
    appHero: Hero
  }
};
</script>

<style lang="scss"></style>
