<template>
  <div id="app">
    <app-nav></app-nav>
    <app-darkmode></app-darkmode>
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
import DarkMode from '@/components/DarkMode.vue';
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
    appDarkmode: DarkMode
  }
};
</script>

<style lang="scss">


// @media (prefers-color-scheme: dark) {
//   body {
//     background-color: black;
//     color: blue;
//   }
// }
// @media (prefers-color-scheme: light) {
//   body {
//     background-color: white;
//     color: blue;
//   }
// }

body {
  background: var(--bg);
  color: var(--color-text);
  position: relative;
}
</style>
