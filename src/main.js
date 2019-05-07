// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
import mock from './mock/mock'
Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
          {
             path: 'analysis',
				     name: 'analysis',
				     component: DetailAnaPage
           },
           {
              path: 'count',
				    	name: 'count',
				    	component: DetailCouPage
           },
            {
               path: 'forecast',
				    	 name: 'forecast',
					     component: DetailForPage
            },
            {
               path: 'publish',
					     name: 'publish',
					     component: DetailPubPage
            }
      ]
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
