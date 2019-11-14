<template>
  <div id="container">
    <img
      id="groupware-img"
      src="~/assets/images/groupware.jpg"
      style="width: 50%;"
      class="elevation-5"
    />
    <div id="groupware" class="elevation-5">
      <h2>グループウェア</h2>
      <table class="description-table">
        <tbody>
          <tr>
            <td>制作期間：2019年9月〜</td>
          </tr>
        </tbody>
      </table>
      <table class="description-table mt-4">
        <tbody>
          <tr>
            <td>スケジュール機能とファイル管理機能を備えたグループウェアです。</td>
          </tr>
          <tr>
            <td>現在、社内利用に向けて鋭意開発中です。</td>
          </tr>
        </tbody>
      </table>
      <table class="tool-table">
        <tr>
          <td>
            <img src="~/assets/images/vuejs.png" class="account-img elevation-5" />
            <p>Vue.js</p>
          </td>
          <td>
            <img src="~/assets/images/nuxtjs.jpg" class="account-img elevation-5" />
            <p>Nuxt.js</p>
          </td>
          <td>
            <img src="~/assets/images/vuetify.png" class="account-img elevation-5" />
            <p>Vuetify</p>
          </td>
          <td>
            <img src="~/assets/images/golang.png" class="account-img elevation-5" />
            <p>Go</p>
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

#groupware {
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
  vertical-align: top;
}
.account-img {
  width: 60px;
  height: 60px;
  border-radius: 30%;
}
#groupware-img {
  position: absolute;
  z-index: 1;
  grid-row: 3;
  grid-column: 2;
}
</style>