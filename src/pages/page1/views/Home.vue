<template>
  <div class="home">
    this is page1 home
    <img src="../../../assets/logo.png"/>
    <button @click="golist()">进入List页面</button>
    <button @click="godetial()">进入Detial页面</button>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
    item:1
    }
  },
     methods:{
     golist:function(){
      this.$router.push({name:'list'})
     },
     godetial:function(){
       this.$router.push({name:'detial'})      
     }
  }
}
</script>
