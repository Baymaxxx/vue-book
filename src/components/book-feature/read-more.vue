<!-- readmore组件 -->
<template>
    <div class="read-more">
        <Header :hasBack='true' :hasNav='false' :hasSearch='false' title='更多热门'></Header>
        <div class='module-wrap'>
            <BookList></BookList>
            <BookList></BookList>
            <BookList></BookList>
            <BookList></BookList>
            <BookList></BookList>
        </div>
    </div>
</template>

<script>
import Header from '../layout/header'
import BookList from '../base/book-list'
export default {
  data() {
    return {}
  },
  components: {
    Header,
    BookList
  },
  computed: {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.module-wrap {
    padding: 0 20px;
    margin-top: $h-header;
}
</style>