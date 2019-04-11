<template>
  <div id="container">
    <Word />
  </div>
</template>

<script>
import Word from '~/components/word.vue'
import {mapGetters, mapMutations} from 'vuex'

export default {
  components: {
    Word
  },
  computed: {
    ...mapGetters({
      entered: 'entered'
    })
  }
}
</script>

<style lang='scss' scoped>
#container {
  justify-content: center;
  display: flex;
  align-items: center;
  text-align:center;

  min-height: 100vh;
}
</style>