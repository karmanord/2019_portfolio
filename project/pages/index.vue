<template>
  <div class="index">
    <Word />
  </div>
</template>

<script>
import Word from '~/components/Word.vue'
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
.index {
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0 auto;
  min-height: 100vh;
  min-width: 100vh;
}
</style>