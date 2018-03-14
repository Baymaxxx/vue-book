<!-- 图书分类列表 -->
<template>
    <div class="category-list">
        <header>{{category.title}}</header>
        <div class="content">
            <div class="list" v-for="catList, index in category.catList" :key="index">
                <div class="inner">
                    <h4>{{catList.name}}</h4>
                    <span>{{catList.bookCount}}本</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    category: Object
  },
  data() {
    return {}
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {
    console.log(this.category)
  }
}
</script>
<style lang='scss' scoped>
.category-list {
  header {
    font-size: 34px;
    padding: 20px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    border-top: 1px solid $color-border; /* no */
    .list {
      position: relative;
      width: 33.3%;
      height: 120px;
      border-bottom: 1px solid $color-border; /* no */
      text-align: center;
      &:nth-child(3n + 2) {
        border-left: 1px solid $color-border; /* no */
        border-right: 1px solid $color-border; /* no */
      }
      .inner {
        @include center();
      }
    }
  }
}
</style>