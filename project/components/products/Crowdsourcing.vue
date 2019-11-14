<template>
  <div id="container">
    <img
      id="crowdsourcing-img"
      src="~/assets/images/crowdsourcing.jpg"
      style="width: 50%;"
      class="elevation-5"
    />
    <!-- <img id="portfolio2018-2-img" src="~/assets/images/portfolio2018-2.jpg" style="height: 90%;" /> -->
    <div id="crowdsourcing" class="elevation-5">
      <h2>クラウドソーシング新着案件BOT</h2>
      <table class="description-table">
        <tbody>
          <tr>
            <td>制作期間：2日</td>
          </tr>
        </tbody>
      </table>
      <table class="description-table mt-4">
        <tbody>
          <tr>
            <td>副業を始める際に開発しました。</td>
          </tr>
          <tr>
            <td>クラウドソーシングサイトから1分毎に新着案件を自動抽出します。</td>
          </tr>
          <tr>
            <td>お客様との迅速なコミュニケーションの助けとなりました。</td>
          </tr>
        </tbody>
      </table>
      <table class="tool-table">
        <tr>
          <td>
            <img src="~/assets/images/python.png" class="account-img elevation-5" />
            <p>Python</p>
          </td>
          <td>
            <img src="~/assets/images/centos.jpg" class="account-img elevation-5" />
            <p>CentOS</p>
          </td>
          <td>
            <img src="~/assets/images/cron.png" class="account-img elevation-5" />
            <p>Cron</p>
          </td>
          <td>
            <img src="~/assets/images/slack.png" class="account-img elevation-5" />
            <p>Slack</p>
          </td>
          <td>
            <img src="~/assets/images/incoming-webhooks.png" class="account-img elevation-5" />
            <p>
              Incoming
              <br />Webhooks
            </p>
          </td>
        </tr>
      </table>
    </div>
    <color-box boxColor="#263238" id="center-box" class="elevation-5" />
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
  background: #37474f;
}

#crowdsourcing {
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
#crowdsourcing-img {
  position: absolute;
  z-index: 1;
  grid-row: 3;
  grid-column: 2;
}
</style>