<template>
  <div id="container">
    <img id="sasaki-img" src="~/assets/images/sasaki.png" style="opacity: 0.7; height: 100%;" />
    <color-box boxColor="#37474F" id="center-box" class="elevation-5" />
    <color-box boxColor="#424242" id="right-box" class="elevation-5" />
    <div id="profile">
      <h2>プロフィール</h2>
      <table id="profile-table">
        <tbody>
          <tr>
            <th>名前</th>
            <td>佐々木 祐輔</td>
          </tr>
          <tr>
            <th>職種</th>
            <td>アプリケーションエンジニア</td>
          </tr>
          <tr>
            <th>生年月日</th>
            <td>1989年9月12日（30歳）</td>
          </tr>
          <tr>
            <th>住所</th>
            <td>東京都府中市</td>
          </tr>
          <tr>
            <th>連絡先</th>
            <td>y.sasaki.develop@gmail.com</td>
          </tr>
        </tbody>
      </table>
      <table id="account-table">
        <tr>
          <td>
            <a href="https://github.com/karmanord" target="_blank">
              <img src="~/assets/images/github.png" class="account-img" />
            </a>
            <p>GitHub</p>
          </td>
          <td>
            <a href="https://qiita.com/karmanord" target="_blank">
              <img src="~/assets/images/qiita.png" class="account-img" />
            </a>
            <p>Qiita</p>
          </td>
          <td>
            <a href="https://atcoder.jp/users/karmanord" target="_blank">
              <img src="~/assets/images/atcoder.png" class="account-img" />
            </a>
            <p>Atcoder</p>
          </td>
          <td>
            <a href="https://crowdworks.jp/public/employees/2041905" target="_blank">
              <img src="~/assets/images/crowd-works.jpg" class="account-img" />
            </a>
            <p>CrowdWorks</p>
          </td>
          <td>
            <a href="https://www.lancers.jp/profile/yuusuke_sasaki" target="_blank">
              <img src="~/assets/images/lancers.png" class="account-img" />
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
  grid-row: 3;
  grid-column: 5;
  z-index: 2;
  font-family: "Quicksand", "Kosugi" !important;
  color: white;
}
#profile-table {
  text-align: left;
  // font-weight: bolder;
  font-size: 20px;
}
#account-table {
  text-align: center;
  margin-top: 20px;
  // position: relative;
  // display: grid;
  // grid-template-rows: 1;
  // grid-template-columns: repeat(5, 90px);
}
.account-img {
  width: 60px;
  height: 60px;
  border-radius: 30%;
}
</style>