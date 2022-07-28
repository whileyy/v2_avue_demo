import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import "reset-css";
Vue.config.productionTip = false
Vue.use(Avue).use(ElementUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
