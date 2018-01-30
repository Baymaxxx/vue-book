<!-- 图书排行 -->
<template>
  <div class="book-rank">
    <Header :hasNav='true' title='图书排行'></Header>
    <div class="wrap" ref="wrapper">
      <div class="list-content">
        <BookList></BookList>
        <BookList></BookList>
        <BookList></BookList>
        <BookList></BookList>
        <BookList></BookList>
        <BookList></BookList>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '../layout/header'
import BookList from '../base/book-list'
// import BScroll from 'better-scroll'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['playHistory'])
  },
  methods: {
    ...mapActions(['savePlayHistory', 'delPlayHistory'])
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {})
    // })
  },
  components: {
    Header,
    BookList
  }
}
</script>
<style lang='scss' scoped>
.book-rank {
  .wrap {
    padding: 20px;
    // height: calc(100% - 90px);
  }
}
</style>