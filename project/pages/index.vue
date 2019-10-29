<template>
  <div>
    <top />
    <profile />
    <product />
  </div>
</template>

<script>
import Top from "~/components/Top.vue";
import Profile from "~/components/Profile.vue";
import Product from "~/components/Product.vue";

export default {
  components: {
    Top,
    Profile,
    Product
  }
};
</script>

<style lang='scss' scoped>
</style>