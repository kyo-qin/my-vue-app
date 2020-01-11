<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld v-bind:msg="msg"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import global from './components/Common'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
      msg : global.message
    }
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
