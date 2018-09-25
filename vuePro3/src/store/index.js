import Vue from 'vue'
import Vuex from 'vuex'

var state = {
    msg: 'wow vuex'
};
Vue.use(Vuex)
export default new Vuex.Store({
    state
});