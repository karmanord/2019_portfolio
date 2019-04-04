<template>
  <div id='word'>
    Yusuke<br>Sasaki<br>Portfolio

    <!-- <div id="animated-number-demo"> -->
      <!-- <input v-model="number" type="number" step="20"> -->
      <!-- <p>{{ animatedNumber }}</p> -->
    <!-- </div> -->
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {TweenMax, Expo, Elastic} from 'gsap'

export default {
  mounted: function() {
    TweenMax.to("#word",
                 1,
                {
                 opacity: 1,
                 delay: 1.9
                 });
    TweenMax.to("#word",
                 1,
                {
                  // x: -1000,
                 "justify-content": "flex-start",
                 "align-items": "flex-start",
                 "font-size": "3vw", 
                 "line-height": "50px",
                 margin: "30px",
                 delay: 5
                 }
                );          
  }
}
</script>
<style lang='scss' scoped>
#word {
  font-family: 'Monoton';
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  font-size: 6vw;
  opacity: 0,
  // transform: scale(0);
  // font-weight: bold;
}
div {
  text-transform: uppercase;
  display: block;
  margin: 11px 0 17px 0;
  line-height: 90px;
  color: black;
  text-shadow: 0 13.36px 8.896px #c4b59d,0 -2px 1px #fff;
  letter-spacing: -3px;
}
</style>
