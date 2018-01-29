<!-- 图书分类列表 -->
<template>
    <div class="category-list">
        <header>男生</header>
        <div class="content">
            <div class="list">
                <div class="inner">
                    <h4>玄幻</h4>
                    <span>501151本</span>
                </div>
            </div>
            <div class="list">
                <div class="inner">
                    <h4>玄幻</h4>
                    <span>501151本</span>
                </div>
            </div>
            <div class="list">
                <div class="inner">
                    <h4>玄幻</h4>
                    <span>501151本</span>
                </div>
            </div>
            <div class="list">
                <div class="inner">
                    <h4>玄幻</h4>
                    <span>501151本</span>
                </div>
            </div>
            <div class="list">
                <div class="inner">
                    <h4>玄幻</h4>
                    <span>501151本</span>
                </div>
            </div>
            <div class="list">
                <div class="inner">
                    <h4>玄幻</h4>
                    <span>501151本</span>
                </div>
            </div>
            <div class="list">
                <div class="inner">
                    <h4>玄幻</h4>
                    <span>501151本</span>
                </div>
            </div>
            <div class="list">
                <div class="inner">
                    <h4>玄幻</h4>
                    <span>501151本</span>
                </div>
            </div>
            <div class="list">
                <div class="inner">
                    <h4>玄幻</h4>
                    <span>501151本</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  computed: {},
  methods: {}
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