<!-- 图书分类 -->
<template>
    <div>
        <Header :hasNav='false' title='图书分类'></Header>
        <div>
           <CategoryList v-for="category in categories" :category="category"
            v-if="category !== null" :key="category.title"></CategoryList>
        </div>
    </div>
</template>

<script>
import { getInternetNews } from '@/api/news'
import { mapGetters, mapActions } from 'vuex'
import Header from '../layout/header'
import CategoryList from './category-list'

export default {
  data() {
    return {
      openProjects: [],
      categories: []
    }
  },
  computed: {
    ...mapGetters(['playHistory'])
  },
  methods: {
    ...mapActions(['savePlayHistory', 'delPlayHistory']),
    fetchData() {
      alert(1)
    }
  },
  mounted() {
    getInternetNews().then(res => {
      this.openProjects = res
    })
  },
  components: {
    Header,
    CategoryList
  }
}
</script>
<style lang='scss' scoped>

</style>