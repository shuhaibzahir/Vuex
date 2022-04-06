
import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"
export default{
    state(){
        return {
            isLoggined:false
        }
    },
    getters,
    mutations,
    actions
}