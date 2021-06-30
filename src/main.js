import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js'

import './index.css'
import store from './store'

// whoobe page from config.json
import config from '../project.json'
// whoobe shop
//import shop from '../shop.json'
//Vue.prototype.$shop = () => { return shop }

import Utils from './scripts/utils.js'
Vue.use(Utils)
import Animation from './scripts/gsap.js'
Vue.use(Animation)
import Whoobe from './scripts/whoobe.js'
Vue.use(Whoobe)
import VueMeta from 'vue-meta'
Vue.use(VueMeta)
import WhoobeStore from './components/plugins/store/whoobe/store.vue'
Vue.component ( 'whoobe-store' , WhoobeStore )
import WhoobeSnipcart from './components/plugins/snipcart/snipcart.vue'
Vue.component ( 'whoobe-snipcart' , WhoobeSnipcart )
import VueGtag from 'vue-gtag'
Vue.use(VueGtag, {
    config: { 
      id: config.analytics
    }
  });
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onOfflineReady() {
//     // show a ready to work offline to user
  },
})
//import './registerServiceWorker.js'

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
