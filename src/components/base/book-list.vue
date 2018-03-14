<!-- 书目列表 -->
<template>
  <div class="book-list">
    <router-link class="list-inner" :to="{name: 'BookDetail', params: {id: book._id}}">
      <div class='pic'>
        <img :src="book.cover" :alt="book.title" />
      </div>
      <div class="content">
        <div class="title">
          <h4>{{book.title}}</h4>
        </div>
        <div class="body">
          <p>
            {{ book.shortIntro }}
          </p>
        </div>
        <div class="bottom">
          <div class="author">
            <i class="iconfont icon-user"></i>
            <span>{{ book.author }}</span>
          </div>
          <ul class="tag">
            <li class="type">{{ book.majorCate }}</li>
            <li class="serialize">{{ book.isSerial ? '连载中' : '完结' }}</li>
          </ul>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    book: Object
  },
  data() {
    return {}
  },
  components: {},
  computed: {},
  methods: {},
  created() {}
}
</script>
<style lang='scss' scoped>
.list-inner {
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
        @include elln(2);
        color: #666;
        font-size: 24px;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      .iconfont {
        width: 30px;
      }
      .tag {
        display: flex;
        li {
          margin-left: 15px;
          padding: 2px 6px;
          height: 40px;
          line-height: 40px;
          border: 1px solid $color-border; /* no */
          &.type {
            border-color: #137137;
          }
          &.serialize {
            border-color: $color-header;
          }
        }
      }
    }
  }
}
</style>