<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <ul class="mp-activity">
      <li class="mp-activity-item">{{nowcity}}</li>
      <router-link tag="li" to="/cityplace" class="mp-activity-item">必游榜单</router-link>
    </ul>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState,mapMutations } from 'vuex';
import AMap from 'AMap'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      nowcity:'附近',
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    },
    getPos() {
      let self = this;
      AMap.plugin('AMap.Geolocation', ()=> {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })

        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)
        AMap.event.addListener(geolocation, 'error', onError)

        function onComplete(data) {
          // data是具体的定位信息
          self.nowcity = data.addressComponent.city
          self.changeCity(self.nowcity)
        }

        function onError(data) {
          this.nowcity = '定位失败'
          // 定位出错
        }
      })
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.lastCity = this.city
    this.getPos();
    this.getHomeInfo()
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.mp-activity {
  position: relative;
  width: 100%;
  height: $headerHeight;
  display: flex;
  margin-top: 0.2rem;

  .mp-activity-item {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.mp-activity::after {
  position: absolute;
  top: 0;
  content: '';
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
  background: #f5f5f5;
}
</style>
