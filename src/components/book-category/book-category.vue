<!-- 图书分类 -->
<template>
  <div>
    <Header :hasNav='false' title='图书分类'></Header>
    <div>
      <CategoryList v-for="category in categories" :category="category" v-if="category !== null" :key="category.title"></CategoryList>
    </div>
  </div>
</template>

<script>
import api from '@/api/api'
import { mapGetters, mapActions } from 'vuex'
import Header from '../layout/header'
import CategoryList from './category-list'

export default {
  data() {
    return {
      categories: []
    }
  },
  computed: {
    ...mapGetters(['playHistory'])
  },
  methods: {
    ...mapActions(['savePlayHistory', 'delPlayHistory']),
    fetchData() {
      api.getCategory().then(data => {
        for (let [key, value] of Object.entries(data)) {
          let obj = null
          switch (key) {
            case 'male':
              obj = {
                title: '男生',
                gender: 'male',
                catList: value
              }
              break
            case 'female':
              obj = {
                title: '女生',
                gender: 'female',
                catList: value
              }
              break
            case 'press':
              obj = {
                title: '出版',
                gender: 'press',
                catList: value
              }
              break
            default:
              break
          }
          if (obj !== null) {
            this.categories.push(obj)
          }
        }
      })
    }
  },
  mounted() {
    this.fetchData()
  },
  components: {
    Header,
    CategoryList
  }
}
</script>
<style lang='scss' scoped>

</style>