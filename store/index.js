import Vue from 'vue'
import Vuex from 'vuex'
// 模块
import user from './models/user.js'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		// user:{}
	},
    mutations: {},
    actions: {},
	modules:{
		user
	}
})
export default store