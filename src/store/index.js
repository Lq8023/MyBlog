import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //存放的键值对就是所要管理的状态
    isSearch: false //搜索组件
  }
})

export default store
