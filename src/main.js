import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state(){
        return {
            counter:0
        }
    },
    mutations:{
        increment(state){
            state.counter++;
        },
        increase(state,payload){
            state.counter = state.counter + payload.value;
        }
    },
    actions:{
        increment(context){
            context.commit('increment')
        },
        increase(context,payload){
            console.log('middle')
            context.commit('increase',payload)
        }
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
        }
    }
});    

const app = createApp(App);
app.use(store);
app.mount('#app');
