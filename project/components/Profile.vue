<template>
  <div id="container">
    <img
      id="sasaki-img"
      src="~/assets/images/sasaki.png"
      style="opacity: 0.7; height: 100%;"
      class="elevation-5"
    />
    <color-box boxColor="#37474F" id="center-box" class="elevation-5" />
    <color-box boxColor="#424242" id="right-box" class="elevation-5" />
    <div id="profile" class="elevation-5">
      <h2>Profile</h2>
      <table id="profile-table">
        <tbody>
          <tr>
            <td>Name</td>
            <td>佐々木 祐輔</td>
          </tr>
          <tr>
            <td>Job</td>
            <td>アプリケーションエンジニア</td>
          </tr>
          <tr>
            <td>Birth</td>
            <td>1989年9月12日（30歳）</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>東京都府中市</td>
          </tr>
          <tr>
            <td>Mail</td>
            <td>y.sasaki.develop@gmail.com</td>
          </tr>
        </tbody>
      </table>
      <table id="account-table">
        <tr>
          <td class="fly">
            <a href="https://github.com/karmanord" target="_blank">
              <img src="~/assets/images/github.png" class="account-img elevation-5" />
            </a>
            <p>GitHub</p>
          </td>
          <td class="fly">
            <a href="https://qiita.com/karmanord" target="_blank">
              <img src="~/assets/images/qiita.png" class="account-img elevation-5" />
            </a>
            <p>Qiita</p>
          </td>
          <td class="fly">
            <a href="https://atcoder.jp/users/karmanord" target="_blank">
              <img src="~/assets/images/atcoder.png" class="account-img elevation-5" />
            </a>
            <p>Atcoder</p>
          </td>
          <td class="fly">
            <a href="https://crowdworks.jp/public/employees/2041905" target="_blank">
              <img src="~/assets/images/crowd-works.png" class="account-img elevation-5" />
            </a>
            <p>CrowdWorks</p>
          </td>
          <td class="fly">
            <a href="https://www.lancers.jp/profile/yuusuke_sasaki" target="_blank">
              <img src="~/assets/images/lancers.png" class="account-img elevation-5" />
            </a>
            <p>Lancers</p>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import ColorBox from "~/components/ColorBox.vue";

export default {
  components: {
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
  background: white;
}
#sasaki-img {
  position: absolute;
  z-index: 1;
  grid-row: 2;
  grid-column: 1;
}
#center-box {
  position: relative;
  grid-row: 1 / 13;
  grid-column: 4 / 8;
  z-index: 0;
}
#right-box {
  position: relative;
  grid-row: 2 / 9;
  grid-column: 7 / 10;
  z-index: 0;
}
#profile {
  position: absolute;
  grid-row: 4;
  grid-column: 5;
  padding: 10px;
  background: #37474f;
  z-index: 2;
  font-family: "Noto Sans JP" !important;
  color: #fafafa;
}
#profile-table {
  text-align: left;
  font-weight: bolder;
  font-size: 16px;
}
#account-table {
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

.fly {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin: 10px 0 0 0;
}
.fly:hover {
  -webkit-transform: translateY(-6px);
  -ms-transform: translateY(-6px);
  transform: translateY(-6px);
}
</style>