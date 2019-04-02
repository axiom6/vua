// Polyfills
import 'es6-promise/auto'
import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue           from 'vue'; //'vest/libs/vue/vue.esm.js'
import VeeValidate   from 'vest/libs/vue/vee-validate.esm.js'
import App           from 'vest/apps/vest/App.vue'
//port { Store }     from 'vest/vuex/store/Store.js'
import store         from 'vest/store/index.js'
import router        from 'vest/apps/vest/Router.js';
import VuesticPlugin from 'vest/vesc/plugin/vuestic-plugin.js'; Vue.use(VuesticPlugin);
import                    'vest/vuex/i18n/I18n.js'; // Just for side effects

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })

router.beforeEach((to, from, next) => {
  if( from===false && to===false ) {}
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  if( from===false && to===false ) {}
  store.commit('setLoading', false)
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
