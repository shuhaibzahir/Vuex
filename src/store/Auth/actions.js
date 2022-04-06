export default{
    login(context,payload){
        context.commit('setAuth',payload)
    },
    logout(context,payload){
        context.commit('setAuth',payload)
    }
}