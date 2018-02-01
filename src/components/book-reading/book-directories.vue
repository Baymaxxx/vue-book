<!-- 目录 -->
<template>
<transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
    <div class="book-directories hasheader">
        <Header title="权谋：升迁有道" :hasBack="true" :hasSearch="false"></Header>
        <div class="title-wrap">
            <div class="total-num">
                <div class="num">共545章</div>
                <div class="control">
                    <i class="iconfont icon-paixu"></i>
                    <span>倒序</span>
                </div>
            </div>
            <div class="title">正文卷</div>
        </div>
        <ul class="directories-box">
            <li>
                <p>第100章 谁在兴风作浪</p>
            </li>
            <li>
                <p>第100章 谁在兴风作浪</p>
            </li>
            <li>
                <p>第100章 谁在兴风作浪</p>
            </li>
            <li>
                <p>第100章 谁在兴风作浪</p>
            </li>
            <li>
                <p>第100章 谁在兴风作浪</p>
            </li>
            <li>
                <p>第100章 谁在兴风作浪</p>
            </li>
        </ul>
    </div>
    </transition>
</template>

<script>
import Header from '../layout/header'

export default {
  data() {
    return {}
  },
  components: {
    Header
  },
  computed: {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.animated {
  animation-duration: 0.2s;
}
.title-wrap {
  position: fixed;
  top: $h-header;
  width: 100%;
  background: #fff;
  .total-num {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    font-size: 24px;
    .control {
    }
  }
  .title {
    padding: 20px 30px;
    font-size: 24px;
    color: #777;
    background: #f5f5f5;
  }
}
.directories-box {
  margin-top: 140px;
  li {
    padding: 20px 40px;
    font-size: 24px;
    border-bottom: 1px solid $color-border; /* no */
  }
}
</style>