<!-- header -->
<template>
  <div class="header">
    <i class="iconfont icon-houtui" :class="[hasNav ? 'displayNone' : hasBack ? 'left':'displayNone']" @click="goBack"></i>
    <h3 class="title" :class="[hasNav ? 'left' : 'center']">{{title}}</h3>
    <nav v-if="hasNav" class="nav">
      <ul>
        <li :class="{'active': userSex === 'man'}" @click="changeUserSex('man')">男生</li>
        <li :class="{'active': userSex !== 'man'}" @click="changeUserSex('femen')">女生</li>
      </ul>
    </nav>
    <div v-show="hasSeach" class="search" :class="[hasSeach ? '' : 'displayNone']">
      <a>
        <i class="iconfont icon-search"></i>
      </a>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    hasNav: {
      type: Boolean,
      default: false
    },
    hasSeach: {
      type: Boolean,
      default: true
    },
    hasBack: {
      type: Boolean,
      default: false
    },
    title: String
  },
  data() {
    return {}
  },
  components: {},
  computed: {
    ...mapGetters(['userSex'])
  },
  methods: {
    ...mapActions(['changeUserSex']),
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang='scss' scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  width: 100%;
  height: $h-header;
  color: #fff;
  background-color: $color-header;
  text-align: center;
  .left {
      position: absolute;
      top: 20px;
      left: 15px;
      font-size: 36px;
    }
  .center {
      font-size: 36px;
      line-height: $h-header;
    }
  .nav {
    ul {
      display: flex;
      margin: 17px auto;
      width: 200px;
      border: 1px solid #fff; /*px*/
      border-radius: 6px; /*no*/
      li {
        padding: 8px 10px;
        &:first-child {
          border-radius: 6px 0 0 6px; /*no*/
        }
        &:last-child {
          border-radius: 0 6px 6px 0; /*no*/
        }
        width: 50%;
        &.active {
          background-color: #fff;
          color: $color-header;
        }
      }
    }
  }
  .search {
    position: absolute;
    top: 24px;
    right: 0;
    a {
      padding: 20px;
      .iconfont {
        color: #fff;
      }
    }
  }
}
</style>