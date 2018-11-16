<template>
    <div>
      <scroll ref="listenscroll">
        <place-header></place-header>
        <tab-bar></tab-bar>
        <list-show></list-show>
        </scroll>
    </div>
</template>
<script>
import Scroll from "common/scroll/scroll";
import PlaceHeader from "./components/Header";
import TabBar from "./components/Tabbar";
import ListShow from "./components/Listshow";
export default {
  name: "Cityplace",
  components: {
    PlaceHeader,
    TabBar,
    ListShow,
    Scroll
  },
  data() {
    return {
      sequenceList:[]
    };
  },
  computed: {
    
  },
  methods: {},
  mounted() {
    console.log(this.$refs.listenscroll)
  },
  activated() {}
};
</script>
<style lang="stylus" scoped>
</style>
