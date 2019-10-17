<template>
  <div>
    <div class="font amber lighten-1 display-4">y.sasaki</div>
    <div class="font grey lighten-4 display-4 mt-n9">portfolio</div>
  </div>
</template>

<script>
import { TweenMax, Expo, Elastic } from "gsap";
export default {
  name: "TitleWord",
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Codystar|Libre+Barcode+128+Text|Poiret+One|Poller+One|Vampiro+One&display=swap"
        }
      ]
    };
  }
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
.font {
  font-family: "Poiret One" !important;
  // font-size: 30rem;
  // font-family: "Codystar" !important;
  // font-weight: bold;
}
</style>
