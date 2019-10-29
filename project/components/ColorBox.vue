<template>
  <div :style="{background: boxColor}"></div>
</template>

<script>
import { TweenMax, Expo, Elastic } from "gsap";
export default {
  name: "ColorBox",
  props: ["boxColor"]
  // data: function() {
  //   return {
  //     // boxColor: "#111111",
  //     // boxHeight: "100px",
  //     // boxWidth: "100px"
  //   };
  // }
  // mounted: function() {
  //   TweenMax.from("div", 1, {
  //     opacity: 0.7,
  //     delay: 1
  //   });
  //   // TweenMax.to("div", 1, {
  //   //   // x: -1000,
  //   //   //  "justify-content": "flex-start",
  //   //   //  "align-items": "flex-start",
  //   //   //  "font-size": "3vw",
  //   //   //  "line-height": "50px",
  //   //   //  margin: "30px",
  //   //   scale: 0.5,
  //   //   delay: 3
  //   // });
  // }
};
</script>

<style lang='scss' scoped>
.text {
  font-family: "Poiret One" !important;
  // font-size: 30rem;
  // font-family: "Codystar" !important;
  // font-weight: bold;
}
</style>
