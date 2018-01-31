<!-- 书籍详情页 -->
<template>
    <div class="book-detail hasheader hasbottomnav">
        <Header title="书籍详情" :hasBack='true' :hasSeach='false'></Header>
        <div class="detail-inner">
            <div class="title-module">
                <div class="img-wrap">
                    <img src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F856367%2F_856367_897655.jpg%2F" alt="">
                </div>
                <div class="title-wrap">
                    <h4>权谋：升迁有道</h4>
                    <p class="author">苍白的黑夜</p>
                    <p class="type">职场/官场沉浮</p>
                    <p class="num-wrap">
                        <span>690万字</span>
                        <span> | </span>
                        <span>连载中</span>
                    </p>
                </div>
            </div>
            <ul class="data-module">
                <li>
                    <p>追人气</p>
                    <p>3758</p>
                </li>
                <li>
                    <p>读者留存率</p>
                    <p>38.8%</p>
                </li>
                <li>
                    <p>日更新字数/天</p>
                    <p>3758</p>
                </li>
            </ul>
            <div class="intro-module">
                <div class="intro">
                    <p>走一步走两步走三步走一步走两步走三步，走一步走两步走三步，走一步走两步走三步，走一步走两步走三步</p>
                </div>
                <div class="directories">
                    <div class="title">
                        <h3>目录</h3>
                    </div>
                    <div class="content">
                        <span>2018-01-30 </span>·
                        <span>正文 权谋第2077章 ></span>
                    </div>
                </div>
            </div>
            <div class="comment-module">
                <CommentModule></CommentModule>
            </div>
            <div class="remmend-module">
                <RemmendModule></RemmendModule>
            </div>
        </div>
        <ul class="page-bottom">
            <li class="add-shelf">
                <i class="iconfont icon-tianjiaadd142"></i>
                <p>加入书架</p>
            </li>
            <li class="read">
                <router-link to="/book-reading">
                    <span>立即阅读</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Header from '../layout/header'
import CommentModule from '../base/comment-module'
import RemmendModule from '../base/remmend-module'

export default {
  data() {
    return {}
  },
  components: {
    Header,
    CommentModule,
    RemmendModule
  },
  computed: {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.hasbottomnav{
    margin-bottom: $h-bottom + 20px;
}
.detail-inner {
  .title-module {
    display: flex;
    padding: 30px;
    .img-wrap {
      width: 120px;
    }
    .title-wrap {
      flex: 1;
      margin-left: 30px;
      h4 {
        font-size: 34px;
      }
      .author {
        color: $color-header;
        font-size: 26px;
        line-height: 46px;
      }
      .type {
        font-size: 26px;
      }
      .num-wrap {
        margin-top: 10px;
        font-size: 24px;
      }
    }
  }
  .data-module {
    display: flex;
    align-items: center;
    height: 130px;
    text-align: center;
    border-top: 1px solid $color-border; /*no*/
    border-bottom: 1px solid $color-border; /*no*/
    li {
      flex: 1;
      font-size: 30px;
      p {
        &:first-child {
          color: #777;
          font-size: 28px;
          margin-bottom: 5px;
        }
      }
    }
  }
  .intro-module {
    .intro {
      padding: 20px;
      font-size: 26px;
    }
    .directories {
      display: flex;
      justify-content: space-between;
      padding: 0 30px;
      height: 100px;
      line-height: 100px;
      font-size: 30px;
      border-top: 1px solid $color-border; /*no*/
      border-bottom: 1px solid $color-border; /*no*/
      .content {
        color: #777;
        font-size: 26px;
      }
    }
  }
}
.page-bottom {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: $h-bottom + 20px;
  text-align: center;
  border-top: 1px solid $color-border; /* no */
  background: #fff;
  li {
    width: 50%;
    &.add-shelf {
      padding: 20px 0;
      font-size: 26px;
      border-right: 1px solid $color-border; /* no */
    }
    &.read {
      font-size: 30px;
      line-height: $h-bottom + 20;
      background: $color-header;
      span {
        color: #fff;
      }
    }
  }
}
</style>