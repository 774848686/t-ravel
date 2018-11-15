<template>
  <div class="list">
    <div class="list-content">
      <div class="title">杭州享“人间天堂”美誉，西湖、烟雨…将温婉的江南展现在你面前。</div>
      <div class="cards">
        <card-list></card-list>
      </div> 
    </div>
    <div class="list-content">2</div>
    <div class="list-content">3</div>
    <div class="list-content">4</div>
  </div>
</template>
<script>
import CardList from './Card.vue'
export default {
  name: 'ListShow',
  components:{
    CardList
  },
  data() {
    return {
      PlacesInfo:{}
    }
  },
  methods: {
    handleGetPlacesInfoSucc(e){
      console.log(e)
      this.PlacesInfo = e;
    },
    getPlaceInfo() {
      axios.get('/api/places.json').then(this.handleGetCityInfoSucc)
    },
  },
  mounted() {
    this.getPlaceInfo();
  }
}
</script>
<style lang="stylus" scoped>
.list
  background: #0f0f0f
  .list-content 
    padding-top: 0.01rem;
    background: #0f0f0f url('//s.qunarzz.com/piao_topic/image/touch/custom/2018/2916bangdan/tab_desc.jpg') 0 top / 100% 2.32rem no-repeat; // s.qunarzz.com/piao_topic/image/touch/custom/2018/2916bangdan/tab_desc.jpg) 0 top / 100% 2.32rem no-repeat;
    .title 
      margin: 0.2rem;
      padding: 0.2rem 0.4rem 0.2rem 0.48rem;
      color: #fff;
      font-size: 0.28rem;
      line-height: 0.36rem;
      border-color: #7b6a3c;
      border-style: dashed;
    .cards
        margin: .34rem .2rem 0;
        padding-bottom: .02rem;
</style>