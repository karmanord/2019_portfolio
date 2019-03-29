<template>
  <div>
    <Background />
    <div>
      <Foreground />
    </div>
  </div>
</template>

<script>
import Background from '~/components/Background.vue'
import Foreground from '~/components/Foreground.vue'
export default {
  components: {
    Background,
    Foreground
  }
}
</script>

<style lang='scss' scoped>
.index {
  display: flex;
  // flex-wrap: wrap;
  // align-items: center;
  // align-content: center;
  // margin: 0 auto;
  // width: 100%;
  // height: 100%;
}
</style>