<!-- 书籍详情页 -->
<template>
  <div class="book-detail hasheader hasbottomnav">
    <Header title="书籍详情" :hasBack='true' :hasSearch='false'></Header>
    <div class="detail-inner" v-if="book">
      <div class="title-module">
        <div class="img-wrap">
          <img :src="book.cover" alt="book.title">
        </div>
        <div class="title-wrap">
          <h4>{{book.title}}</h4>
          <p class="author">{{book.author}}</p>
          <p class="type">{{ book.majorCate }}/{{ book.minorCate }}</p>
          <p class="num-wrap">
            <span>{{ wordCount }}字</span>
            <span> | </span>
            <span> {{ book.isSerial ? '连载中' : '完结'}}</span>
          </p>
        </div>
      </div>
      <ul class="data-module">
        <li>
          <p>追人气</p>
          <p>{{ book.latelyFollower }}</p>
        </li>
        <li>
          <p>读者留存率</p>
          <p>{{ book.retentionRatio }}%</p>
        </li>
        <li>
          <p>日更新字数/天</p>
          <p>{{ book.serializeWordCount }}</p>
        </li>
      </ul>
      <div class="intro-module">
        <div class="intro">
          <p>{{ book.longIntro }}</p>
        </div>
        <router-link to="/directories">
          <div class="directories">
            <div class="title fl">
              <h3>目录</h3>
            </div>
            <div class="content fl">
              <span class="time fl">{{ book.updated | time }}·</span>
              <span class="chapter fr">{{ book.lastChapter }} ></span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="comment-module">
        <CommentModule :reviewList="reviewList"></CommentModule>
      </div>
    </div>
    <ul class="page-bottom">
      <li class="add-shelf" @click="addShelf">
        <i class="iconfont icon-tianjiaadd142"></i>
        <p>加入书架</p>
      </li>
      <li class="read">
        <router-link to="/book-reading">
          <span>立即阅读</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from '../layout/header'
import CommentModule from '../base/comment-module'
import RemmendModule from '../base/remmend-module'
import api from '@/api/api'
import { staticPath } from '~/js/util'
import { mapState, mapActions } from 'vuex'
import moment from 'moment'

export default {
  data() {
    return {
      book: null,
      reviewList: []
    }
  },
  components: {
    Header,
    CommentModule,
    RemmendModule
  },
  filters: {
    time(update) {
      return moment(update).format('YYYY-MM-DD')
    }
  },
  computed: {
    ...mapState(['curBook', 'shelfBookList']),
    wordCount() {
      return this.book.wordCount > 10000
        ? parseInt(this.book.wordCount / 10000) + '万'
        : this.book.wordCount
    },
    serializeWordCount() {
      return this.book.serializeWordCount < 0 ? 0 : this.book.serializeWordCount
    }
  },
  created() {
    console.log(this.$route.params.id)
    api.getBook(this.$route.params.id).then(data => {
      this.book = data
      console.log(this.book)
      let tmpBook = this.book
      tmpBook.title = data.title
      tmpBook.cover = staticPath + data.cover
      tmpBook.author = data.author
      tmpBook.lastChapter = data.lastChapter
      tmpBook.updated = data.updated
      this.setCurBook(tmpBook)
    })
    api.getReview(this.$route.params.id).then(data => {
      this.reviewList = data
    })
  },
  methods: {
    ...mapActions(['setCurBook', 'addshelfBookList']),
    addShelf() {
      this.addshelfBookList(this.curBook)
    }
  }
}
</script>
<style lang='scss' scoped>
.hasbottomnav {
  margin-bottom: $h-bottom + 20px;
}
.detail-inner {
  .title-module {
    display: flex;
    padding: 30px;
    .img-wrap {
      width: 120px;
    }
    .title-wrap {
      flex: 1;
      margin-left: 30px;
      h4 {
        font-size: 34px;
      }
      .author {
        color: $color-header;
        font-size: 26px;
        line-height: 46px;
      }
      .type {
        font-size: 26px;
      }
      .num-wrap {
        margin-top: 10px;
        font-size: 24px;
      }
    }
  }
  .data-module {
    display: flex;
    align-items: center;
    height: 130px;
    text-align: center;
    border-top: 1px solid $color-border; /*no*/
    border-bottom: 1px solid $color-border; /*no*/
    li {
      flex: 1;
      font-size: 30px;
      p {
        &:first-child {
          color: #777;
          font-size: 28px;
          margin-bottom: 5px;
        }
      }
    }
  }
  .intro-module {
    .intro {
      padding: 20px;
      font-size: 26px;
    }
    .directories {
      display: flex;
      justify-content: space-between;
      padding: 0 30px;
      height: 100px;
      line-height: 100px;
      font-size: 30px;
      border-top: 1px solid $color-border; /*no*/
      border-bottom: 1px solid $color-border; /*no*/
      .title {
        width: 20%;
      }
      .content {
        width: 80%;
        color: #777;
        font-size: 26px;
        .time {
          width: 40%;
        }
        .chapter {
          display: inline-block;
          text-align: right;
          width: 60%;
          @include ell();
        }
      }
    }
  }
}
.page-bottom {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: $h-bottom + 20px;
  text-align: center;
  border-top: 1px solid $color-border; /* no */
  background: #fff;
  li {
    width: 50%;
    &.add-shelf {
      padding: 20px 0;
      font-size: 26px;
      border-right: 1px solid $color-border; /* no */
    }
    &.read {
      font-size: 30px;
      line-height: $h-bottom + 20;
      background: $color-header;
      span {
        color: #fff;
      }
    }
  }
}
</style>