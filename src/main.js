import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
    state(){
        return {
            counter:0,
            
        }
    },
    mutations:{
        increment(state){
            state.counter++;
        },
        increase(state,payload){
            state.counter = state.counter + payload.value;
        },
    },
    actions:{
        increment(context){
            context.commit('increment')
        },
        increase(context,payload){
            console.log('middle')
            context.commit('increase',payload)
        },
    },
    getters:{
        finalCounter(state){
            return state.counter * 2;
        },
        normalizeCounter(_,getter){
            const finalCounter =getter.finalCounter;
            if(finalCounter>100){
                return 100
            }else if (finalCounter<0){
                return 0;
            }else{
                return finalCounter
            }
        },
    }

}

// if we need to access another module state we can use rootState, rootGetters, 
// namespaced module then you need to access like this this.$store.getter['counter/finalcounter'] counter is module name and inside of that finalcounter
const authModule = {
    namespaced:true,
    state(){
        return {
            userLogin:false
        }
    },
    mutations:{
        setAuth(state,payload){
            state.userLogin=payload.isAuth
        } 
    },
    actions:{
        
        login(context,payload){
            context.commit('setAuth',payload)
        },
        logout(context,payload){
            context.commit('setAuth',payload)
        },
    },
    getters:{
       
        user(state){
            return state.userLogin
        }
    }
}

const store = createStore({
    modules:{
        auth:authModule,
        counter:counterModule
    }
});    

const app = createApp(App);
app.use(store);
app.mount('#app');
