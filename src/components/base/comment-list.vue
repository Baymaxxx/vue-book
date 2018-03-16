<!-- 评论列表 -->
<template>
    <div class="comment-list" v-if="review">
        <div class="avatar">
            <img :src="review.author.avatar | setAvatar" alt="avatar">
        </div>
        <div class="comment-wrap">
            <div class="name-wrap">
                <span class="name">{{review.author.nickname}}</span>
                <span class="time">{{review.created | time}}</span>
            </div>
            <div class="comment-content">
                <p>{{review.content}}</p>
            </div>
            <div class="zan">
                <p>
                    <i class="iconfont icon-zan"></i>
                    <span class="num">{{review.rating}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import { staticPath } from '~/js/util'

export default {
  data() {
    return {}
  },
  props: {
    review: Object
  },
  filters: {
    time(update) {
      return moment(update).format('YYYY-MM-DD mm:ss')
    },
    setAvatar(avatar) {
      return staticPath + avatar
    }
  },
  components: {},
  computed: {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.comment-list {
  display: flex;
  padding: 10px 0;
  overflow: hidden;
  .avatar {
    margin-right: 20px;
    img {
      width: 80px;
      height: 80px;
    }
  }
  .comment-wrap {
    flex: 1;
    .name-wrap {
      display: flex;
      justify-content: space-between;
      .name {
        font-size: 24px;
        color: #a58d5e;
      }
    }
    .comment-content {
      margin: 8px 0;
      p {
        @include elln(2);
        line-height: 30px;
      }
    }
  }
}
</style>