<!-- 图书分类 -->
<template>
    <div>
        <Header :hasNav='false' title='图书分类'></Header>
        <div>
           <CategoryList></CategoryList>
           <CategoryList></CategoryList>
           <CategoryList></CategoryList>
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
    CategoryList
  }
}
</script>
<style lang='scss' scoped>

</style>