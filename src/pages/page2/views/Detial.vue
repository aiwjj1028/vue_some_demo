<template>
  <div class="dital">
    this is page2 dital
    <img src="../../../assets/logo.png"/>
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
    }
}
</script>
