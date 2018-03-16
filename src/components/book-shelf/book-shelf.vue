<!-- 我的书架 -->
<template>
  <div class="shelf">
    <Header :hasNav='false' title='我的书架'></Header>
    <div class="content">
      <router-link to="/feature" v-if="!shelfBookList">
        <div class="inner clearfix">
          <i class="iconfont icon-tianjiaadd142"></i>
          <p>快去添加你喜欢的小说吧！</p>
        </div>
      </router-link>
      <div class="list" v-for="book, index in shelfBookList" :key="index">
        <BookList :book="book"></BookList>
      </div>
    </div>
  </div>
</template>

<script>
import { getInternetNews } from '@/api/news'
import { mapGetters, mapActions } from 'vuex'
import Header from '../layout/header'
import BookList from '../base/book-list'

export default {
  data() {
    return {
      openProjects: []
    }
  },
  computed: {
    ...mapGetters(['playHistory', 'shelfBookList'])
  },
  methods: {
    ...mapActions(['savePlayHistory', 'delPlayHistory'])
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
    BookList
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
    }
  }
}
</style>