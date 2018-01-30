<!-- 精选图书 -->
<template>
  <div>
    <Header :hasNav='true' title='精选图书'></Header>
    <div class="body" ref="wrapper">
      <div class="list-content">
        <div class='swiper-wrap'>
          <swiper :options="swiperOption">
            <swiper-slide v-for="slide, index in swiperSlides" :key="index">
              <img :src='["http://statics.zhuishushenqi.com/recommendPage/" + slide]' />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class='module-wrap'>
          <FeatureModule></FeatureModule>
          <FeatureModule></FeatureModule>
          <FeatureModule></FeatureModule>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getInternetNews } from '@/api/news'
import { mapGetters, mapActions } from 'vuex'
import Header from '../layout/header'
import FeatureModule from '../base/feature-module'

export default {
  data() {
    return {
      openProjects: [],
      swiperOption: {
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperSlides: ['151693233180329', '151693269575674', '151693274062240']
    }
  },
  computed: {
    ...mapGetters(['playHistory'])
  },
  methods: {
    ...mapActions(['savePlayHistory', 'delPlayHistory'])
  },
  mounted() {
    getInternetNews().then(res => {
      this.openProjects = res
    })
  },
  components: {
    Header,
    FeatureModule
  }
}
</script>
<style lang='scss' scoped>
.body {
  .swiper-container {
    height: 260px;
  }
}
</style>