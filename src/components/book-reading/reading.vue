<!-- 小说阅读插件 -->
<template>
  <div class="reading">
    <div class="reading-content" @click='_showControl' :class=" colorModel  ? 'night-model' : 'day-model'">
      <div class="book-title">升迁有道</div>
      <div class="content-wrap">
        <div class="content">
          <div class="chapter-title">升迁有道 第八章芳菲来了</div>
          <div class="body">
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
          </div>
        </div>
        <div class="content">
          <div class="chapter-title">升迁有道 第八章芳菲来了</div>
          <div class="body">
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
          </div>
        </div>
        <div class="content">
          <div class="chapter-title">升迁有道 第八章芳菲来了</div>
          <div class="body">
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
            <p>想好了这个问题，季子强也就感到轻松了很多，到了下班的时候，他也不急，反正是住这的，就看了点东西，准备下去吃饭，还没出门，就见女副县长方菲走了进来。</p>
          </div>
        </div>
        <div class="load-btn">
          <button>加载下一章</button>
        </div>
      </div>
    </div>
    <header v-show="showControl">
      <i class="iconfont icon-houtui" @click="$router.go(-1)"></i>
    </header>
    <div class="add-shelf" v-show="showControl">加入书架</div>
    <ul class="control-bottom" v-show="showControl">
      <router-link to="/directories">
        <li>
          <i class="iconfont icon-mulu"></i>
          <p>目录</p>
        </li>
      </router-link>
      <li @click="_changeModel">
        <i class="iconfont icon-yejian"></i>
        <p>{{colorModel?'日间模式':'夜间模式'}}</p>
      </li>
      <li>
        <i class="iconfont icon-ziti"></i>
        <p>设置</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showControl: false,
      colorModel: false
    }
  },
  components: {},
  computed: {},
  methods: {
    _showControl() {
      this.showControl = !this.showControl
    },
    _changeModel() {
      this.colorModel = !this.colorModel
    }
  }
}
</script>
<style lang='scss' scoped>
$color-pagebg: #c4b395;
$color-night: #1a1a1a;

.reading {
  .reading-content {
    padding: 0 20px;
    color: rgba(0, 0, 0, 0.85);
    &.night-model {
      background: $color-night;
      color: rgb(209, 208, 208);
      .book-title {
        background: $color-night;
        color: rgb(218, 214, 214);
      }
    }
    background: $color-pagebg;
    .book-title {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      background: $color-pagebg;
    }
    .content-wrap {
      text-indent: 2em;
      margin: 0.5em 0;
      letter-spacing: 0;
      line-height: 1.8;
      font-size: 26px;
      p {
        margin-bottom: 10px;
      }
    }
  }
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #000000;
    opacity: 0.8;
    color: #fff;
    .iconfont {
      padding: 20px;
    }
  }
  .add-shelf {
    position: absolute;
    right: 0;
    top: 150px;
    padding: 15px 30px;
    opacity: 0.8;
    font-size: 24px;
    background: #000000;
    color: #fff;
    border-radius: 40px 0 0 40px;
  }
  .control-bottom {
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100px;
    background: #000000;
    color: #fff;
    opacity: 0.8;
    li {
      color: #fff;
      text-align: center;
      .iconfont {
        font-size: 36px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>