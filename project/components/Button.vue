<template>
  <div id='button' @click='click'>Push Me!</div>
</template>
<script>
import {TweenMax, Expo, Elastic} from 'gsap'
import {mapMutations, mapGetters} from 'vuex'

export default {
  methods: {
    ...mapMutations({
      click: 'click'
    })
  },
  computed: {
    ...mapGetters({
      entered: 'entered'
    })
  },
  watch: {
    entered: function(){
      TweenMax.to("#button", 0.7, { alpha: 0});    
    }
  }
}
</script>
<style lang='scss' scoped>
#button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100px;
  height: 30px;
  // background-color: #ece5da;
  opacity: 0.3;
  // box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.7);
}
</style>
