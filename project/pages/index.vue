<template>
  <div>
    <div v-if="loading">loading</div>
    <div v-if="!loading">
      <top />
      <profile />
      <canal />
      <shogi />
      <portfolio2018 />
      <crowdsourcing />
      <groupware />
    </div>
  </div>
</template>

<script>
import Top from "~/components/Top.vue";
import Profile from "~/components/Profile.vue";
import Canal from "~/components/products/Canal.vue";
import Shogi from "~/components/products/Shogi.vue";
import Portfolio2018 from "~/components/products/Portfolio2018.vue";
import Crowdsourcing from "~/components/products/Crowdsourcing.vue";
import Groupware from "~/components/products/Groupware.vue";

export default {
  components: {
    Top,
    Profile,
    Canal,
    Shogi,
    Portfolio2018,
    Crowdsourcing,
    Groupware
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.loading = false;
  }
};
</script>

<style lang='scss' scoped>
</style>