<template>
  <!-- <div style="height: 100vh; width: 100wh; background: black; position: relative">
    <color-box
      style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; z-index: 1;"
      boxColor="#424242"
      boxHeight="500px"
      boxWidth="500px"
    />
    <title-word style="position: relative; top: 0; left: 0; right: 0; bottom: 0; z-index: 1;" />
    <img
      src="~/assets/images/sasaki.png"
      style="margin-left: -750px; z-index: 3; opacity: 0.08; height: 600px; width: 600px;"
    />
  </div>-->
  <div>
    <!-- 正常に動くソース -->
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <title-word style="margin-right: -700px; z-index: 2;" class="elevation-12" />
        <color-box
          style="margin-right: -460px; z-index: 0;"
          boxColor="#424242"
          boxHeight="700px"
          boxWidth="500px"
          class="elevation-5"
        />
        <color-box
          style="margin-left: 620px; z-index: 1;"
          boxColor="#37474F"
          boxHeight="680px"
          boxWidth="600px"
          class="elevation-5"
        />
        <img
          src="~/assets/images/sasaki.png"
          style="margin-left: -520px; z-index: 3; opacity: 0.8; height: 600px; width: 600px;"
        />
      </v-row>
      <v-row>
        <color-box boxColor="#546E7A" boxHeight="400px" boxWidth="400px" class="elevation-5" />
      </v-row>
    </v-container>
    <v-container fluid fill-height>
      <v-row>
        <color-box boxColor="#546E7A" boxHeight="1999px" boxWidth="400px" class="elevation-5" />
      </v-row>
    </v-container>

    <v-overlay opacity="0">
      <v-container style="position: relative; height: 100vh;" fluid fill-height>
        <v-row style="position: fixed; bottom: 30px; left: 0; right: 0; text-align: center;">
          <v-col>
            <v-btn class="ma-2" tile x-large color="amber lighten-1" light link to="profile" nuxt>
              <v-icon left>mdi-account</v-icon>profile
            </v-btn>
          </v-col>
          <v-col>
            <v-btn class="ma-2" tile x-large light link to="product" nuxt>
              <v-icon left>mdi-laptop-mac</v-icon>product
            </v-btn>
          </v-col>
          <v-col>
            <v-btn class="ma-2" tile x-large color="blue-grey darken-1" dark link to="contact" nuxt>
              <v-icon left>mdi-gmail</v-icon>contact
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-overlay>
    <!-- 正常に動くソース -->
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

<style lang='scss'>
// html {
//   overflow: hidden !important;
// }
</style>