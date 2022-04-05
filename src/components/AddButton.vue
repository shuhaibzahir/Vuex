<template>
  <button @click="increase({value:10})">Add</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['increase'])
    }
}
</script>

<style>

</style>