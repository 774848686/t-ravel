<template>
  <div class="list">
    <div class="list-content" v-for="(item,index) in PlacesInfo" :key="index">
      <div class="clasify">
        <span class="clasify_text">{{item.title}}</span>
      </div>
      <div class="title">{{item.dec}}</div>
      <div class="cards">
        <card-list :parklandInfo='item.list'></card-list>
      </div> 
    </div>
    <div class="list-content">2</div>
    <div class="list-content">3</div>
    <div class="list-content">4</div>
  </div>
</template>
<script>
import axios from 'axios'
import CardList from './Card.vue'
export default {
  name: 'ListShow',
  components:{
    CardList,
  },
  data() {
    return {
      PlacesInfo:{}
    }
  },
  methods: {
    handleGetPlacesInfoSucc(res){
      res = res.data
      if (res.ret && res.data) {
        this.PlacesInfo = res.data.categoryList;
      }
    },
    getPlaceInfo() {
      axios.get('/api/places.json').then(this.handleGetPlacesInfoSucc)
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
    .clasify
      padding: .2rem 0 .1rem;
      text-align center
      .clasify_text
        position: relative;
        display: inline-block;
        color: #cdcdcd;
        font-size: .28rem;
        line-height: .36rem;
      .clasify_text:before,.clasify_text:after
        content: '';
        position: absolute;
        top: 50%;
        width: .24rem;
        height: .02rem;
        background: #cdcdcd;
      .clasify_text:before
         left: -.44rem;
      .clasify_text:after
        right: -.44rem;
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