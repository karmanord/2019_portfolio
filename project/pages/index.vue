<template>
  <div>
    <Background />
    <Button />
    <div v-if='entered'>
      <Foreground />
      <div>
        <Word />
      </div>
    </div>
  </div>
</template>

<script>
import Background from '~/components/Background.vue'
import Foreground from '~/components/Foreground.vue'
import Word from '~/components/Word.vue'
import Button from '~/components/Button.vue'
import {mapGetters, mapMutations} from 'vuex'

export default {
  components: {
    Background,
    Foreground,
    Word,
    Button
  },
  computed: {
    ...mapGetters({
      entered: 'entered'
    })
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