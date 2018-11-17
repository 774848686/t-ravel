<template>
    <div class="tabbar">
        <ul>
            <li v-for="(item,index) of context"
             :key="index" 
             :class="currentNum===index?'active':''"
             @click="tabCahnge(index)">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'Tabbar',
  props:{
      currentIndex: {
        type: Number,
        default:0
      },
  },
  data() {
    return {
      context: ['打卡必游', '自然风光', '亲子畅玩', '历史画卷'],
      currentNum:0
    }
  },
  methods:{
      tabCahnge(index){
          this.currentNum = index;
          this.$emit('tabCahnge', index)
      }
  },
  mounted(){

  },
  watch:{
      currentIndex(){
          this.currentNum = this.currentIndex;
      }
  }
}
</script>
<style lang="stylus" scoped>
.tabbar {
    height: 1rem;
    ul {
        width: 100%;
        height: 100%;
        overflow-x: scroll;
        background: #eecf78 url('//s.qunarzz.com/piao_topic/image/touch/custom/2018/2916bangdan/tab_bgd.jpg') 0 0 / 100% 100% no-repeat; // s.qunarzz.com/piao_topic/image/touch/custom/2018/2916bangdan/tab_bgd.jpg) 0 0 / 100% 100% no-repeat;
        white-space: nowrap;
    }

    li {
        display: inline-block;
        width: 28.6%;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
    }

    .active {
        color: #ffffff;
        background: #e86947;
        font-weight: bold;
    }
}
</style>