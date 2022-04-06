<template>
  <button @click="inc({value:10})">Add</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions('counter',{
            inc:'increase'
        })
    }
}
</script>

<style>

</style>