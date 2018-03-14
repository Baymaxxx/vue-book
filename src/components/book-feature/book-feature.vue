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
          <div v-for="module in modules" :key="module._id">
            <FeatureModule :moduleList="module"></FeatureModule>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getInternetNews } from '@/api/news'
import api from '@/api/api'
import { mapGetters, mapActions } from 'vuex'
import Header from '../layout/header'
import FeatureModule from '../base/feature-module'

export default {
  data() {
    return {
      openProjects: [],
      modules: [],
      loadModules: [],
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
    ...mapGetters(['playHistory', 'userSex'])
  },
  watch: {
    userSex: function() {
      this.fetchData()
    }
  },
  methods: {
    ...mapActions(['savePlayHistory', 'delPlayHistory']),
    fetchData() {
      api.getFeaturedData().then(data => {
        data = Array.from(data).sort((a, b) => {
          return a.order - b.order
        })
        let sexData = this.userSex === 'man' ? '男生' : '女生'
        data = data.filter(obj => {
          return obj.title.indexOf(sexData) > -1
        })
        this.modules = data
        this.loadModules = Array.from(data, value => value._id)
      })
    }
  },
  created() {
    getInternetNews().then(res => {
      this.openProjects = res
    })
    this.fetchData()
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