<template>
  <div id="container">
    <img id="shogi-img" src="~/assets/images/shogi1.jpg" style="height: 80%;" class="elevation-5" />
    <div id="shogi" class="elevation-5">
      <h2>将棋対局予定通知BOT</h2>
      <table class="description-table">
        <tbody>
          <tr>
            <td>制作期間：1週間</td>
          </tr>
        </tbody>
      </table>
      <table class="description-table mt-4">
        <tbody>
          <tr>
            <td>明日の対局予定を通知するSlackのBOTです。</td>
          </tr>
          <tr>
            <td>毎日夜22時に、明日の対局内容に合わせて画像とリンクボタンを自動生成します。</td>
          </tr>
          <tr>
            <td>
              誰でもメールアドレスの登録のみで
              <a
                href="https://qiita.com/karmanord/items/4e537abd35bc1010ad03"
                target="_blank"
              >チャンネル</a>に参加可能です。
            </td>
          </tr>
          <tr>
            <td>
              本ツールの詳細は
              <a
                href="https://qiita.com/karmanord/items/4e537abd35bc1010ad03"
                target="_blank"
              >Qiitaの記事</a>をご覧ください。
            </td>
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
            <img src="~/assets/images/lambda.png" class="account-img elevation-5" />
            <p>
              AWS
              <br />Lambda
            </p>
          </td>
          <td>
            <img src="~/assets/images/cloudwatch.jpg" class="account-img elevation-5" />
            <p>
              Amazon
              <br />CloudWatch
            </p>
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

#shogi {
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
#shogi-img {
  position: absolute;
  z-index: 1;
  grid-row: 3;
  grid-column: 2;
}
</style>