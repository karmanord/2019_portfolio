<template>
  <div id="container">
    <img
      id="portfolio2018-1-img"
      src="~/assets/images/portfolio2018-1.jpg"
      style="height: 60%;"
      class="elevation-5"
    />
    <img
      id="portfolio2018-2-img"
      src="~/assets/images/portfolio2018-2.jpg"
      style="height: 70%;"
      class="elevation-5"
    />
    <div id="portfolio2018" class="elevation-5">
      <h2>ポートフォリオ(2018年版)</h2>
      <table class="description-table mt-4">
        <tbody>
          <tr>
            <td>初めて作成したポートフォリオです。TOPページをゲームボーイ風にアレンジしました。</td>
          </tr>
        </tbody>
      </table>
      <table class="tool-table">
        <tr>
          <td>
            <img src="~/assets/images/angular.png" class="account-img elevation-5" />
            <p>Angular</p>
          </td>
          <td>
            <img src="~/assets/images/centos.jpg" class="account-img elevation-5" />
            <p>CentOS</p>
          </td>
        </tr>
      </table>
    </div>
    <color-box boxColor="#37474F" id="center-box" class="elevation-5" />
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
#container {
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 1fr repeat(7, 11%) 1fr;
  grid-template-columns: 1fr repeat(7, 11%) 1fr;
  background: #263238;
}

#portfolio2018 {
  position: absolute;
  grid-row: 4;
  grid-column: 6;
  padding: 10px;
  background: #eeeeee;
  z-index: 2;
  font-family: "Noto Sans JP" !important;
  color: #212121;
}

#center-box {
  position: relative;
  grid-row: 1 / 13;
  grid-column: 4 / 8;
  z-index: 0;
}
.description-table {
  text-align: left;
  font-weight: bolder;
  font-size: 12px;
}
.tool-table {
  text-align: center;
  margin-top: 20px;
  font-size: 11px;
  font-family: "Quicksand" !important;
}
td {
  min-width: 80px;
  vertical-align: top;
}
.account-img {
  width: 60px;
  height: 60px;
  border-radius: 30%;
}
#portfolio2018-1-img {
  position: absolute;
  z-index: 1;
  grid-row: 2;
  grid-column: 2;
}
#portfolio2018-2-img {
  position: absolute;
  z-index: 2;
  grid-row: 5;
  grid-column: 3;
}
</style>