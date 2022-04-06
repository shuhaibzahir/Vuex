<template>
  <h3>{{normalizeCounter}}</h3>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'Counter',

    computed:{
        ...mapGetters('counter',['normalizeCounter'])
    }
}
</script>

<style>

</style>