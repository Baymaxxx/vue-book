<!-- 评论模块 -->
<template>
    <div class="comment-module">
        <h4>热门书评</h4>
        <CommentList class="comment-list"></CommentList>
        <CommentList class="comment-list"></CommentList>
        <CommentList class="comment-list"></CommentList>
        <CommentList class="comment-list"></CommentList>
    </div>
</template>

<script>
import CommentList from './comment-list'

export default {
  data() {
    return {}
  },
  components: {
    CommentList
  },
  computed: {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.comment-module {
  padding: 20px;
  h4 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .comment-list {
    margin-bottom: 20px;
    border-bottom: 1px solid $color-border; /* no */
  }
}
</style>