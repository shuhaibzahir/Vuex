<template>
  <button @click="updateCount">Add</button>
</template>

<script>
export default {
    methods:{
        updateCount(){
            this.$store.commit({
                type:'increment'
            })
        }
    }
}
</script>

<style>

</style>