<template>
  <div class="list">
    this is page1 list
    <button @click="godetial()">进入Detial页面</button>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>

export default {
    data() {
      return {
        value1: '',
      };
    },
     methods:{
     godetial:function(){
       this.$router.push({name:'detial'})      
     }
  }
}
</script>
