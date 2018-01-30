<!-- 搜索结果 -->
<template>
  <div class="search-result">
      <BookList></BookList>
      <BookList></BookList>
      <BookList></BookList>
      <BookList></BookList>
      <BookList></BookList>
  </div>
</template>

<script>
import BookList from '../base/book-list'

export default {
  data() {
    return {
    }
  },
  components: {
      BookList
  },
  computed: {},
  methods: {}
}
</script>
<style lang='scss' scoped>
 .search-result{
     padding: 0 20px;
 }
</style>