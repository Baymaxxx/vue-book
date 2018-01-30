<!-- 图书搜索 -->
<template>
    <div class="book-search">
        <div class="search-wrap">
            <div class="goback">
                <i class="iconfont icon-houtui" @click="goBack"></i>
            </div>
            <div class="text-wrap">
                <input type="text" placeholder="请输入您要搜索的关键字" @enter="search">
                <i class="iconfont icon-search" @click="search"></i>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    search() {
        this.$router.push({path: '/search/result', query: {search: '111'}})
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang='scss' scoped>
.book-search {
  height: 100%;
  min-height: 100vh;
  background: #f5f5f5;
  .search-wrap {
    display: flex;
    padding: 20px 15px;
    width: 100%;
    height: $h-header;
    background-color: $color-header;
    color: #fff;
    .icon-houtui {
      width: 60px;
      font-size: 40px;
    }
    .text-wrap {
      display: flex;
      flex: 1;
      padding-bottom: 10px;
      border-bottom: 1px solid #fff; /* no */
      input {
        flex: 1;
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
        &::-webkit-input-placeholder {
          color: #cecece;
        }
      }
      .icon-search {
        padding-bottom: 10px;
        width: 30px;
      }
    }
  }
}
</style>