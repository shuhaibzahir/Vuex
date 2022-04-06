<template>
  <base-container v-if="user" title="Vuex">
  <counter-view/>
  <button @click="increment">Add 1</button>
  <fav-component></fav-component>
  <addb-button></addb-button>
  </base-container>
  <base-container :title="user?'Hi, bro':'Auth'">
  <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import CounterView from "./components/TheCounter.vue"
import FavComponent from './components/FavriotValue.vue'
import AddbButton from './components/AddButton.vue'
import UserAuth from './components/UserAuth.vue';
import { mapGetters,mapActions} from 'vuex'
export default {
  components: {
    BaseContainer,
    CounterView,
    FavComponent,
    AddbButton,
    UserAuth
  },
  data(){
    return {
      count:0
    }
  },

  computed:{
    ...mapGetters({
      user:'user'
    })
  },
  methods:{
    ...mapActions('counter',{
        increment:'increment'
      })
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