export default{
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