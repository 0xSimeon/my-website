<template>
  <div id="app">
    <app-nav></app-nav>
    <app-header></app-header>
    <app-hero></app-hero>
    <app-services></app-services>
    <app-projects></app-projects>
    <app-about></app-about>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Hero from '@/components/Hero.vue';
import Nav from '@/components/Nav.vue';
import Services from '@/components/Services.vue';
import Projects from '@/components/Projects.vue';
import About from '@/components/About.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',
  components: {
    appHeader: Header,
    appHero: Hero,
    appNav: Nav,
    appServices: Services,
    appProjects: Projects,
    appAbout: About,
    appFooter: Footer,
  }
};
</script>

<style lang="scss">
</style>
