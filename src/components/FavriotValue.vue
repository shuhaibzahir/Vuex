<template>
  <h3>{{counter}}</h3>
  <p>we need more</p>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
 name:'FavCounter',
    computed:{
        ...mapGetters('counter',{
            counter:'finalCounter'
        })
    }
}
</script>

<style>

</style>