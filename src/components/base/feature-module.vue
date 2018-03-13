<!-- 精选书目列表 -->
<template>
  <div class="feature-module">
    <div class="title clearfix">
      <div class="">
        <span class="line fl"></span>
        <span class="name fl">{{moduleList.title}}</span>
      </div>
      <div class='more'>
        <router-link :to="{name: 'book', params:{id: moduleList._id}}" class="more-text">
          更多 >
        </router-link>
      </div>
    </div>
    <div class="list">
      <BookList v-for="book in bookList" :key="book"></BookList>
    </div>
  </div>
</template>

<script>
import BookList from './book-list'
import api from '@/api/api'

export default {
  props: {
    moduleList: Object
  },
  data() {
    return {
      bookList: []
    }
  },
  components: {
    BookList
  },
  computed: {},
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      api
        .getBooks(this.moduleList._id)
        .then(data => {
          data = data.map(value => {
            return value.book
          })
          return data
        })
        .then(data => {
          this.bookList = data
          console.log(this.bookList)
          this.$nextTick(() => {
            this.$emit('load-result', this.bookInfo.id)
          })
        })
    }
  },
  mounted() {
    console.log(this.moduleList)
  }
}
</script>
<style lang='scss' scoped>
.feature-module {
  padding: 20px;
  .title {
    display: flex;
    justify-content: space-between;
    height: 30px;
    font-size: 28px;
    .line {
      display: inline-block;
      margin-right: 15px;
      width: 3px;
      height: 30px;
      background: $color-default;
    }
    .name {
      line-height: 30px;
    }
    .more-text {
      color: $color-header;
    }
  }
}
</style>