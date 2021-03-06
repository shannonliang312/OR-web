import Vue from 'vue'
import Vuex from 'vuex'

import RefreshSate from './refresh'
import LangState from './language'
import FwUpdateState from './fwUpdateState'
import RedfishState from './redfishURL'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 在非生产环境下，使用严格模式
  modules: {
    RefreshSate,
    LangState,
    FwUpdateState,
    RedfishState
  }
})
