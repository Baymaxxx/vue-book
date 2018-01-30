<!-- 搜索列表 -->
<template>
  <div class="search-module">
       <div class="recommend-wrap list-wrap">
            <div class="title">
                <h4>热门搜索</h4>
            </div>
            <ul class="search-list">
                <li>系统</li>
                <li>重生</li>
                <li>斗罗大陆</li>
                <li>都市</li>
            </ul>
        </div>
        <div class="history-wrap list-wrap">
            <div class="title">
                <h4>搜索历史</h4>
                <span>清空</span>
            </div>
            <ul class="search-list">
                <li>系统</li>
                <li>重生</li>
                <li>斗罗大陆</li>
                <li>都市</li>
                <li>都市</li>
                <li>都市</li>
                <li>都市</li>
                <li>都市</li>
                <li>都市</li>
                <li>都市</li>
                <li>都市</li>
                <li>都市</li>
                <li>都市</li>
                <li>都市</li>
                <li>都市</li>
                <li>都市</li>
                <li>都市</li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {}
}
</script>
<style lang='scss' scoped>

.list-wrap {
  margin-top: 20px;
  padding: 0 20px;
  background: #fff;
  .title {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    width: 100%;
    border-bottom: 1px solid $color-border; /*no*/
    h4 {
      font-size: 28px;
    }
  }
  .search-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px 10px;
    li {
      margin-right: 20px;
      margin-bottom: 20px;
      padding: 5px 20px;
      min-width: 40px;
      border: 1px solid $color-border; /*no*/
      border-radius: 14px; /*no*/
    }
  }
}
</style>