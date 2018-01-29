<!-- 书目列表 -->
<template>
  <div class="book-list">
    <div class='pic'>
      <img src="http://statics.zhuishushenqi.com/agent/http://wfqqreader.3g.qq.com/cover/218/622218/t7_622218.jpg" alt="图书" />
    </div>
    <div class="content">
      <div class="title">
        <h4>我的极品人生</h4>
      </div>
      <div class="body">
        <p>
          我从出生前就给人算计了，五阴俱全，天生招厉鬼，懂行的先生说我活不过七岁，死后是要给人养成血衣小鬼害人的。外婆为了救我，给我娶了童养媳，让我过起了安生日子，虽然后...
        </p>
      </div>
      <div class="bottom">
        <div class="author">
          <i class="iconfont icon-user"></i>
          <span>浮梦六年</span>
        </div>
        <ul class="tag">
          <li class="type">灵异</li>
          <li class="serialize">连载</li>
        </ul>
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
.book-list {
  display: flex;
  padding: 20px 0;
  max-height: 200px;
  .pic {
    width: 120px;
  }
  .content {
    flex: 1;
    padding-left: 20px;
    .title {
      h4 {
        font-weight: bold;
        font-size: 24px;
      }
    }
    .body {
      margin: 10px 0;
      p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #666;
        font-size: 24px;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      .iconfont{
        width: 30px;
      }
      .tag{
        display: flex;
        li{
          margin-left: 15px;
          padding: 2px 6px;
          height: 40px;
          line-height: 40px;
          border: 1px solid $color-border;/* no */
          &.type{
            border-color: #137137;
          }
          &.serialize{
            border-color: $color-header;
          }
        }
      }
    }
  }
}
</style>