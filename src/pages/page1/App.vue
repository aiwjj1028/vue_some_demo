<template>
  <div id="app">
    <router-view :key="key"></router-view>
  </div>
</template>
<script>
export default {
computed: {
 key() {
   console.log('进入的名称',this.$route.name)
   return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
   }
  },
  
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>