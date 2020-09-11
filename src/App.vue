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
:root {
  // --color-primary: #3da9fc;
  // --color-primary-1: #90b4ce;
  // --color-secondary: #ef4565;
  // --color-tertiary: #d8eefe;
  // --bg: #fffffe;
  // // FONT COLORS
  // --color-heading: #094067;
  // --color-text: #33272a;
}

:root.dark-mode {
  // --color-primary: #12334C;
  // --color-primary-1: #90b4ce;
  // --bg: #E6E6E5;
  // --color-secondary: #6C1F2D;
  // --color-tertiary: #828F98;

  // // FONT COLORS
  // --color-heading: #E6ECF0;
  // --color-text: #F7F8F8;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: blue;
  }
}
@media (prefers-color-scheme: light) {
  body {
    background-color: white;
    color: blue;
  }
}

body {
  background: var(--bg);
  color: var(--color-text);
  position: relative;
}
</style>
