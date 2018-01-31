<!-- 评论列表 -->
<template>
  <div class="comment-list">
      <div class="avatar">
          <img src="http://statics.zhuishushenqi.com/avatar/06/55/06558c54ec4ea9070497c46c8977a055" alt="avatar">
      </div>
      <div class="comment-wrap">
          <div class="name-wrap">
              <span class="name">焕然一新</span>
              <span class="time">2017-01-03</span>
          </div>
          <div class="comment-content">
              <p>书评里说好的一大堆，真不知道是不是什么鬼，文笔确实可以，但是作者写出的男主，为了表现正直无私，就反复写被陷害，书里写的好像所有女的都喜欢他，每次都是误会，被女友抛弃，要不要这么扯？一点常识都没有？误会就是一个电话的事情，你就那么忙，连解释的时间都没有？太高大尚了，你在幻想吧？男主给你的感觉就是人间正道是苍桑，喜欢看虐心文的可以读下去，看到一半，我已经没有看下去的兴趣了</p>
          </div>
          <div class="zan">
              <p><i class="iconfont icon-zan"></i><span class="num">2</span></p>
          </div>
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
 .comment-list {
     display: flex;
     padding: 10px 0;
     .avatar{
         margin-right: 20px;
         img{
             width: 80px;
             height: 80px;
         }
     }
     .comment-wrap{
         flex:1;
         .name-wrap{
             display: flex;
             justify-content: space-between;
             .name{
                 font-size: 24px;
                 color: #a58d5e;
             }
         }
         .comment-content{
             margin: 8px 0;
             p{
                  @include elln(2);
                  line-height: 30px;
             }
         }
     }
 }
</style>