<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>

	<parent></parent>
  </div>

</template>

<script>
	import parent from './views/parent'
export default {
  name: 'App',
  components:{parent},
  // data(){
  //   return { todos:[]}
  // }
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
