//我们组装模块并导出 store 的地方
import Vue from 'vue'
import Vuex from 'vuex'
import state from'./state'
import mutations from "./mutations"
import getters from './getters'
import actions from './actions'


// 
// 
// export default new Vuex.store({
//   state,
//   mutations,
//   actions,
//   getters
//   
// })
// 