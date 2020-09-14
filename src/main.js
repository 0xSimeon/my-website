import Vue from 'vue';
import App from './App.vue';

// require('./assets/css/tailwind.css');
// Use if the above doesn't work.
import './assets/css/tailwind.css';

Vue.filter('capitalize', value => {
  return value
    .split(' ')
    .map(el => `${el.toUpperCase()}`)
    .join(' ');
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
