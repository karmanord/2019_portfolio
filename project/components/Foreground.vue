<template>
  <div id='container'></div>
</template>
<script>
// import {mapGetters} from 'vuex'
import {TweenMax, Expo, Elastic} from 'gsap'
import {mapGetters} from 'vuex'

export default {
  mounted: function() {
    TweenMax.to("#container", 0.6, {height: "60%", width: "60%", delay: 0.8});
    TweenMax.to("#container", 1, {opacity : 0, delay: 5});
  }
}
</script>
<style lang='scss' scoped>
#container {
  display: flex;
  // justify-content: center;
  // align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 0%;
  height: 0%;
  background-color: #ece5da;
  // background: #E72E3C;
  opacity: 0.3;
  box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.7);
  transform: rotate(-2deg);
}
</style>
