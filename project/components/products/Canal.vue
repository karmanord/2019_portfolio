<template>
  <div id="container">
    <img id="canal-img" src="~/assets/images/canal.jpg" style="width: 60%;" class="elevation-5" />
    <color-box boxColor="#37474F" id="center-box" class="elevation-5" />

    <div id="canal" class="elevation-5">
      <h2>Canal</h2>
      <table class="description-table">
        <tbody>
          <tr>
            <td>2017年度社内アプリコンペ優勝作品</td>
          </tr>
          <tr>
            <td>対応OS:iOS・Android</td>
          </tr>
        </tbody>
      </table>
      <table class="description-table mt-4">
        <tbody>
          <tr>
            <td>ソーシャル名刺交換アプリです。</td>
          </tr>
          <tr>
            <td>名前・連絡先・Twitter・Instagramのアカウント情報を持った名刺を作成することができます。</td>
          </tr>
          <tr>
            <td>近くにいるユーザーとスワイプで簡単に名刺交換が可能です。人と繋がるスピードを促進します。</td>
          </tr>
        </tbody>
      </table>
      <table class="tool-table">
        <tr>
          <td>
            <img src="~/assets/images/native-script.png" class="account-img elevation-5" />
            <p>NativeScript</p>
          </td>
          <td>
            <img src="~/assets/images/angular.png" class="account-img elevation-5" />
            <p>Angular</p>
          </td>
          <td>
            <img src="~/assets/images/fuelphp.jpg" class="account-img elevation-5" />
            <p>FuelPHP</p>
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

#canal {
  position: absolute;
  grid-row: 5;
  grid-column: 6;
  padding: 10px;
  background: #ffca28;
  z-index: 2;
  font-family: "Noto Sans JP" !important;
  color: #263238;
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
}
.account-img {
  width: 60px;
  height: 60px;
  border-radius: 30%;
}
#canal-img {
  position: absolute;
  z-index: 1;
  grid-row: 2;
  grid-column: 2;
}
</style>