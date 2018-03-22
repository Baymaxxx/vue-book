<!-- 我的书架 -->
<template>
  <div class="shelf">
    <Header :hasNav='false' title='我的书架'></Header>
    <div class="content">
      <router-link to="/feature" v-if="!shelfBookList.length">
        <div class="inner clearfix">
          <i class="iconfont icon-tianjiaadd142"></i>
          <p>快去添加你喜欢的小说吧！</p>
        </div>
      </router-link>
      <div v-if="shelfBookList">
        <slip-del v-for="book, index in shelfBookList" :key="index" ref="slipDel" del-text="删除" @slip-open="slipOpen" @del-click="del(book)">
          <div slot="item" class="demo-item">
            <BookList :book="book"></BookList>
          </div>
        </slip-del>
      </div>
    </div>
  </div>
</template>

<script>
import { getInternetNews } from '@/api/news'
import { mapState, mapActions } from 'vuex'
import Header from '../layout/header'
import BookList from '../base/book-list'
import SlipDel from 'vue-slip-delete'

export default {
  data() {
    return {
      openProjects: []
    }
  },
  computed: {
    ...mapState(['playHistory', 'shelfBookList'])
  },
  methods: {
    ...mapActions(['savePlayHistory', 'delshelfBookList']),
    slipOpen(target) {
      // 滑开一个删除，其他删除都关闭
      if (this.shelfBookList.length) {
        this.$refs.slipDel.forEach(item => {
          if (item.$el !== target.parentNode) {
            item.setOpen(false)
          }
        })
      }
    },
    del(book) {
      // 删除回调
      // this.delshelfBookList(book)
      alert('删除')
    }
  },
  mounted() {
    getInternetNews().then(res => {
      this.openProjects = res
    })
  },
  created() {
    console.log(this.shelfBookList)
  },
  components: {
    Header,
    BookList,
    SlipDel
  }
}
</script>
<style lang='scss' scoped>
.shelf {
  .content {
    text-align: center;
    .inner {
      @include center();
      .iconfont {
        width: 400px;
        font-size: 260px;
        color: #999;
      }
      p {
        margin-top: 120px;
        font-size: 30px;
      }
    }
    .book-list {
      padding: 0 40px;
      border-bottom: 1px solid $color-border; /* px */
    }
  }
}
</style>