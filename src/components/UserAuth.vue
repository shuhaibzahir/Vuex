<template>
  <button @click="login({isAuth:true})">Login</button>
  <button @click="logout({isAuth:false})">Logout</button>

</template>

<script>
import {mapActions} from 'vuex'
export default {

    methods:{
        ...mapActions({
            login:'login',
        }),
        logout(payload){
            this.$store.dispatch('logout',payload)
        }

    }   

}
</script>

<style>

</style>