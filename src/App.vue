<template>
  <div id="app">
    <app-nav></app-nav>
    <app-darkmode></app-darkmode>
    <app-header></app-header>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-services></app-services>
    <app-projects></app-projects>
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
html {
  scroll-behavior: smooth;
}
// Scrollbar for Chrome, Edge and Safari
::-webkit-scrollbar {
  width: 12px; /* width of the entire scrollbar */
}
::-webkit-scrollbar-track {
  background: var(--color-primary); /* color of the tracking area */
}
::-webkit-scrollbar-thumb {
  background: var(--color-secondary); /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid var(--color-primary-1); /* creates padding around scroll thumb */
}

// for Firefox
body {
  scrollbar-width: thin; /* "auto" or "thin"  */
  scrollbar-color: var(--color-secondary) var(--color-primary);
  background: var(--bg);
  color: var(--color-text);
  position: relative; /* scroll thumb & track */
}

</style>
