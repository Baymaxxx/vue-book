<!-- 图书排行 -->
<template>
    <div>
        <Header :hasNav='true' title='图书排行'></Header>
        <div class="wrap">
           <BookList></BookList>
           <BookList></BookList>
           <BookList></BookList>
           <BookList></BookList>
           <BookList></BookList>
           <BookList></BookList>
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
    ...mapGetters(['playHistory'])
  },
  methods: {
    ...mapActions(['savePlayHistory', 'delPlayHistory'])
  },
  mounted() {
    getInternetNews().then(res => {
      this.openProjects = res
    })
  },
  components: {
    Header,
    BookList
  }
}
</script>
<style lang='scss' scoped>
.wrap{
  padding: 20px;
}
</style>