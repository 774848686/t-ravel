<template>
  <div class="card">
    <div class="mp-sub-item">
      <div class="clrfix">
        <div class="mp-sub-img">
            <img :src="parklandInfo.imgurl" :key="parklandInfo.name">
        </div>
        <div class="mp-sub-info">
            <p class="mp-sub-name">{{parklandInfo.name}}</p>
            <p class="mp-sub-text">{{parklandInfo.text}}条评论</p>
            <div class="class">
              <span class="stars">{{stars}}</span>
              <span class="score">{{parklandInfo.score}}分</span>
            </div>
            <div class="price"><span class="mp-sub-rmb">￥</span><em class="mp-sub-number">{{parklandInfo.price}}</em>起</div>                   
        </div> 
      </div>
      <div class="mp_sub_more">
        <span class="mp-sub-reason">必去理由</span>
        <div class="mp-sub-desc">
            {{parklandInfo.desc}}
        </div>
        <div class="mp-sub-note">{{parklandInfo.note}}</div>
        <div class="mp-sub-tolink">去看看</div>
      </div>
    </div> 
  </div>
</template>
<script>
export default {
  name: "CardList",
  props:{
    parklandInfo: Object,
    default: {}
  },
  data() {
    return {};
  },
  computed: {
    stars () {
      let stars = '',len = Math.floor(this.parklandInfo.score);
      for(let i=0;i<len;i++){
        stars+='★';
      }
      return stars
    }
  },
  methods: {
     
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.card
  margin-bottom: .2rem;
  .mp-sub-item
    position: relative;
    background: #fff;
    padding: .15rem .15rem .25rem;
    margin-bottom: .2rem;
    .clrfix 
      display: flex;
      justify-content: flex-start;
      .mp-sub-img
        overflow: hidden;
        width: 2.8rem;
        height: 2rem;
        background-color: #f0f0f0;
      .mp-sub-info
        overflow: hidden;
        padding-left: .25rem;
        .mp-sub-name
          margin-top: .1rem;
          color: #212121;
          font-weight: bold;
          font-size: .38rem;
          font-family: 'simhei';
          line-height: .38rem;
        .mp-sub-text
          margin-top: .22rem;
          color: #9e9e9e;
          font-size: .24rem;
          line-height: .24rem;
        .class
          margin-top: .12rem;
          height: .24rem;
          line-height: .24rem;
          color:#ffb436;
        .price
          margin-top: .26rem;
          color: #9e9e9e;
          font-size: .24rem;
          .mp-sub-rmb
            color: #ff9800;
            font-size: .24rem;
          .mp-sub-number
            margin-right: .02rem;
            color: #ff9800;
            font-size: .4rem;
            line-height: .4rem;
            vertical-align: -.02rem;
    .mp_sub_more
      margin: .2rem .08rem 0;
      .mp-sub-reason
        display: inline-block;
        margin-left: -.08rem;
        padding: 0 .08rem;
        height: .36rem;
        color: #e9bb58;
        font-size: .24rem;
        line-height: .36rem;
        text-align: center;
        border: 1px solid #d9a92b;
      .mp-sub-desc
        padding: .08rem 0 .2rem;
        color: #212121;
        font-size: .26rem;
        line-height: .36rem;
      .mp-sub-note
        color: #616161;
        font-size: .24rem;
        padding: .08rem 0 .34rem;
      .mp-sub-tolink
        display: block;
        margin: 0 .12rem;
        height: .6rem;
        color: #616161;
        font-size: .26rem;
        line-height: .6rem;
        text-align: center;
        border:1px solid #b5b5b5;
        border-radius: 1.2rem;
</style>