import Vue from 'vue';
import 'normalize.css';
import './assets/main.css';
import App from './App.vue';
import store from './store/index';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
