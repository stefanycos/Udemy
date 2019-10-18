import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import router from './router'
import store from './store/store'

import './plugins/axios'

Vue.config.productionTip = false

Vue.filter('currency', value => {
	const formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
		maximumFractionDigits: 2
	})

	return formatter.format(value)
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
