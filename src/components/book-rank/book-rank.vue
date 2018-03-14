<!-- 图书排行 -->
<template>
  <div class="book-rank">
    <Header :hasNav='true' title='图书排行'></Header>
    <div class="wrap" ref="wrapper">
      <div class="list-content">
        <div v-for="book in bookList" :key="book._id">
          <BookList :book="book"></BookList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '../layout/header'
import BookList from '../base/book-list'
import api from '@/api/api'

export default {
  data() {
    return {
      bookList: [],
      rankId: ''
    }
  },
  computed: {
    ...mapGetters(['playHistory', 'userSex'])
  },
  methods: {
    ...mapActions(['savePlayHistory', 'delPlayHistory']),
    fetchData: function() {
      api.getRanks().then(data => {
        this.maleRankList = data.male
        this.femaleRankList = data.female
        this.rankId = this.maleRankList[0]._id
        console.log(this.rankId)
      })
    }
  },
  watch: {
    rankId: function() {
      this.bookList = []
      api.getRankBooks(this.rankId).then(data => {
        this.bookList = data.ranking.books
        // console.log(this.bookList)
      })
    }
  },
  mounted() {
    this.fetchData()
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