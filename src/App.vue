<template>
  <base-container title="Vuex">
  <counter-view/>
  <button @click="increment">Add 1</button>
  <fav-component></fav-component>
  <addb-button></addb-button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import CounterView from "./components/TheCounter.vue"
import FavComponent from './components/FavriotValue.vue'
import AddbButton from './components/AddButton.vue'
export default {
  components: {
    BaseContainer,
    CounterView,
    FavComponent,
    AddbButton
  },
  data(){
    return {
      count:0
    }
  },


  methods:{
    increment(){
      this.$store.commit('increase',{value:33})
    }
  },

};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>