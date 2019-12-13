import Vue from 'vue'
import App from './App.vue'
import config from './utils/config';
Vue.config.productionTip = false;
Vue.prototype.$config=config;
new Vue({
  render: h => h(App),
}).$mount('#app')
