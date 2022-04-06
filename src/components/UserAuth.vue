<template>
  <button @click="login({isAuth:true})">Login</button>
  <button @click="logout({isAuth:false})">Logout</button>

</template>

<script>
import {mapActions} from 'vuex'
export default {

    methods:{
        ...mapActions('auth',['login']),
        logout(payload){
            this.$store.dispatch('auth/logout',payload)
        }

    }   

}
</script>

<style>

</style>