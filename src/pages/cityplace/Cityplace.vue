<template>
    <div>
        <place-header></place-header>
        <tab-bar></tab-bar>
        <list-show></list-show>
    </div>
</template>
<script>
import PlaceHeader from './components/Header'
import TabBar from './components/Tabbar'
import ListShow from './components/Listshow'
export default {
  name: 'Cityplace',
  components: {
    PlaceHeader,
    TabBar,
    ListShow
  },
  data() {
    return {}
  },
  computed: {
    
  },
  methods: {},
  mounted() {},
  activated() {}
}
</script>
<style lang="stylus" scoped>
</style>
