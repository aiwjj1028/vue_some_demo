<template>
  <div class="detial">
    生命周期
    <button @click="change">修改</button>
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: 1,
      msg: "耀萱"
    };
  },
  methods: {
    change: function() {
      this.msg = "狗屁";
    }
  },
  beforeCreate() {
    console.log("我是beforeCreate", this.$data);
  },
  created() {
    console.log("我是created", this.$data);
  },
  beforeMount() {
    console.log("我是beforeMount", this.$data);
  },
  mounted() {
    console.log("我是mounted", this.$data);
  },
  beforeUpdate() {
    console.log("我是beforeUpdate", this.$data);
  },
  updated() {
    console.log("我是updated", this.$data);
  }
};
</script>
