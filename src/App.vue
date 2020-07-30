<template>
  <div id="app">
    <app-nav></app-nav>
    <app-header></app-header>
    <app-hero></app-hero>
    <app-services></app-services>
    <app-projects></app-projects>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Hero from '@/components/Hero.vue';
import Nav from '@/components/Nav.vue';
import Services from '@/components/Services.vue';
import Projects from '@/components/Projects.vue';
export default {
  name: 'App',
  components: {
    appHeader: Header,
    appHero: Hero,
    appNav: Nav,
    appServices: Services,
    appProjects: Projects
  }
};
</script>

<style lang="scss">
</style>
