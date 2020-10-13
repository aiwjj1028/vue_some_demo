<template>
  <div class="detial">
    this is page1 detial
    <img src="../../../assets/logo.png"/>
    <button @click="golist()">进入List页面</button>
  </div>
</template>

<script>

export default {
  name: 'detial',
  data () {
    return {
    item:1
    }
  },
     methods:{
     golist:function(){
      this.$router.push({name:'list'})
     }
  }
}
</script>
