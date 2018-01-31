<!-- 推荐图书模块 -->
<template>
    <div class="remmend-module">
        <header>
            <div class="title">
                <h4>同类推荐</h4>
            </div>
            <div class="more">
                <span>更多 ></span>
            </div>
        </header>
        <ul class="remmend-wrap">
            <li>
                <img src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F675475%2F_675475_699895.jpg%2F" alt="book">
                <p>权路迷局</p>
            </li>
            <li>
                <img src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F675475%2F_675475_699895.jpg%2F" alt="book">
                <p>权路迷局</p>
            </li>
            <li>
                <img src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F675475%2F_675475_699895.jpg%2F" alt="book">
                <p>权路迷局</p>
            </li>
            <li>
                <img src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F675475%2F_675475_699895.jpg%2F" alt="book">
                <p>权路迷局</p>
            </li>
        </ul>
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
.remmend-module {
  height: 350px;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .title {
      padding-left: 10px;
      font-size: 30px;
      border-left: 3px solid $color-default;
    }
    .more {
      padding-right: 10px;
    }
  }
  .remmend-wrap {
    display: flex;
    justify-content: space-between;
    li {
      width: 25%;
      text-align: center;
      img {
        width: 80%;
      }
    }
  }
}
</style>