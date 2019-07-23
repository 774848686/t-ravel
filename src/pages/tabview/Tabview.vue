<template>
  <div>
    <scroll ref="listenscroll">
      <tab-swiper></tab-swiper>
    </scroll>
  </div>
</template>
<script>
import Scroll from "common/scroll/scroll";
import TabSwiper from "./components/TabSwiper";
export default {
  name: "Tabview",
  components: {
    TabSwiper,
    Scroll
  },
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  mounted() {
  },
  activated() {}
};
</script>
<style lang="stylus" scoped></style>
