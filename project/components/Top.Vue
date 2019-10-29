<template>
  <div id="container">
    <color-box boxColor="#424242" id="left-box" class="elevation-5" />
    <color-box boxColor="#37474F" id="center-box" class="elevation-5" />
    <color-box boxColor="#FFCA28" id="yellow-box" class="elevation-5" />
    <color-box boxColor="#37474F" id="right-box" class="elevation-5" />
    <title-word id="title" class="elevation-12" />
    <img
      id="neon-img"
      class="elevation-12"
      src="~/assets/images/neon.jpg"
      style="opacity: 0.4; height: 100%;"
    />
    <img id="keyboard-img" src="~/assets/images/keyboard.jpg" style="opacity: 0.2; height: 100%" />
  </div>
</template>

<script>
import TitleWord from "~/components/TitleWord.vue";
import ColorBox from "~/components/ColorBox.vue";

export default {
  components: {
    TitleWord,
    ColorBox
  }
};
</script>

<style lang='scss' scoped>
.font {
  font-family: "Poiret One" !important;
}
#container {
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 1fr repeat(7, 11%) 1fr;
  grid-template-columns: 1fr repeat(7, 11%) 1fr;
}
#background-box {
  position: relative;
  grid-row: 1 / 10;
  grid-column: 1 / 10;
}
#left-box {
  position: relative;
  grid-row: 1 / 10;
  grid-column: 1 / 3;
  margin-top: 15px;
}
#center-box {
  position: relative;
  grid-row: 1 / 13;
  grid-column: 4 / 8;
  margin-top: 20px;
}
#yellow-box {
  position: relative;
  grid-row: 4 / 9;
  grid-column: 3 / 10;
  margin: 30px;
}
#right-box {
  position: relative;
  grid-row: 2 / 9;
  grid-column: 8 / 10;
  z-index: 0;
}
#title {
  position: absolute;
  z-index: 1;
  grid-row: 5;
  grid-column: 2 / 4;
}
#neon-img {
  position: absolute;
  z-index: 0;
  grid-row: 1;
  grid-column: 1;
}
#keyboard-img {
  position: absolute;
  z-index: 0;
  grid-row: 1;
  grid-column: 4;
}
</style>