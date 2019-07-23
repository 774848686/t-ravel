<template>
  <div class="tab-swiper">
    <div class="tabbar">
      <ul class="tab-wrapper">
        <li
          :class="currentIndex===index?'tab-slide active':'tab-slide'"
          v-for="(item,index) in context"
          :key="index"
          :style="tabWidth"
          @click="tabSwitch(index)"
        >{{item}}</li>
      </ul>
    </div>
    <div class="swiperbar">
      <ul class="swiperbar-wraper">
        <li class="swiperbar-slide">11</li>
        <li class="swiperbar-slide">22</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
  data() {
    return {
      context: ["打卡必游", "自然风光", "亲子畅玩", "历史画卷"],
      currentIndex: 0,
      swiperList: []
    };
  },
  computed: {
    tabWidth() {
      let tabStyle = `width:${100 / this.context.length}%`;
      return tabStyle;
    }
  },
  methods: {
    tabSwitch(index) {
      this.currentIndex = index;
    }
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.tabbar {
  .tab-slide {
    display: inline-block;
    height: 36px;
    line-height: 36px;
    text-align: center;
    &.active {
      color: red;
    }
  }
}

.swiperbar {
  overflow-x: hidden;
  width: 100%;
  .swiperbar-wraper {
    width: 200%;
    .swiperbar-slide {
      width: 50%;
      display: inline-block;
    }
  }
}
</style>