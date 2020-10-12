import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    verification: [
      {name:'',registeredAddress: '',companyAddress: '',bank: '',accountNumber: '',payTaxes: '', mobile: ''}
    ],
    data: [],
    home: []
  },
  mutations: {
    pull: (s, data) => s.data = data,
    all: (s,data) => s.home = data,
    add: (s, data) => s.verification = data
  },
  actions: {
  },
  getters: { 
    data: (s) => s.data,
    home: (s) => s.home,
    verification: (s) => s.verification
  },
  modules: {
  }
})
