import { createStore } from "vuex";
import authModules from "./Auth"
import counterModule from "./counter"
const store = createStore({
    modules:{
        auth:authModules,
        counter:counterModule
    }
})

export default store;