import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import GithubCounter from './GithubCounter.vue'


const routes = [
  {
    path : '/github/',
    component : GithubCounter
  }
];

const router = new Router ({
  routes
});


Vue.use(router);

new Vue({
  el: '#app',
  render: h => h(App)
});
