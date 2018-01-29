<!-- 精选书目列表 -->
<template>
  <div class="feature-module">
    <div class="title clearfix">
        <div class="">
            <span class="line fl"></span>
            <span class="name fl">男生热门</span>
        </div>
        <div class='more'>
            <router-link to="/feature/hot" class="more-text">
              更多 >
            </router-link>
        </div>
    </div>
    <div class="list">
        <BookList></BookList>
        <BookList></BookList>
        <BookList></BookList>
    </div>
  </div>
</template>

<script>
import BookList from './book-list'

export default {
  data() {
    return {
    }
  },
  components: {
    BookList
  },
  computed: {},
  methods: {}
}
</script>
<style lang='scss' scoped>
 .feature-module{
   padding: 20px;
   .title{
     display: flex;
     justify-content: space-between;
     height:30px;
     font-size:28px;
     .line{
         display: inline-block;
         margin-right:15px;
         width: 3px;
         height: 30px;
         background: $color-default;
     }
     .name {
         line-height: 30px;
     }
     .more-text{
       color: $color-header;
     }
   }
 }
</style>