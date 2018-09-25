import Vue from 'vue'
import Vuex from 'vuex'

var state = {
    msg: 'wow vuex',
    mobile: '',
    password: '',
    isShowLogin: false,
    isLogin: false
};
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    mutations: {
       showLogin(state,flag){
            state.isShowLogin = flag;
       },
       loginSuccess(state,opt){
           state.mobile= opt.mobile;
           state.password= opt.password;
           state.isLogin = true;
       },
       logout(state){
        state.mobile= '';
        state.password= '';
        state.isLogin = false; 
       } 
    }
});