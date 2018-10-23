import Vue from 'vue'
import Vuex from 'vuex'

var state = {
    msg: 'wow vuex',
    count: 1,
    mobile: '',
    password: '',
    isShowLogin: false,
    isLogin: false
};
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    getters: {
        countDouble(state){//getters里的方法，第一个参数是store中的state，第二个是getters本身
            return state.count*2;
        },
        countDoubleAndDouble(state,getters){
            return getters.countDouble*2;
        }
    },
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
    },
    actions: {
        logOut(context){
            context.commit('logout')
        }
    }
    
});