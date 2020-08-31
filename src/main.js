import Vue from 'vue'
import App from './App.vue'

// import bootstrap-vue
import BootstrapVue from "bootstrap-vue";

// import css files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// import Beufy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(BootstrapVue);
// use bootstrap-vue as Vue middleware


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
