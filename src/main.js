import Vue from 'vue';
import App from './App.vue';

// require('~/assets/css/main.css');
// Use if the above doesn't work.
import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
