<template>
  <h3>{{counter}}</h3>
  <p>we need more</p>
</template>

<script>
export default {
 name:'FavCounter',
    computed:{
        counter(){
            return this.$store.state.counter
        }
    }
}
</script>

<style>

</style>