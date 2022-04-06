export default{
    increment(context){
        context.commit('increment')
    },
    increase(context,payload){
        context.commit('increase',payload)
    },
}