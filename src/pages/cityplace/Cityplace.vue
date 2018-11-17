<template>
  <div>
    <place-header></place-header>
    <tab-bar ref="tabbar" @tabCahnge='scrollToElement' :currentIndex="currentIndex" :style="fixed_style"></tab-bar>
    <list-show ref="list"></list-show>
  </div>
</template>
<script>
import PlaceHeader from "./components/Header";
import TabBar from "./components/Tabbar";
import ListShow from "./components/Listshow";
export default {
  name: "Cityplace",
  components: {
    PlaceHeader,
    TabBar,
    ListShow,
  },
  data() {
    return {
      sequenceList:[],
      listHeight:[],
      currentIndex:0,
      fixed_style:''
    };
  },
  computed: {
    
  },
  methods: {
    scrollToElement(index){
      const FXIED_VALUE = 14;
      window.scrollTo(0,this.listHeight[index]-FXIED_VALUE);
    },
    listenScroll(){
      const FXIED_VALUE = 44;
      window.addEventListener('scroll',()=>{
        let scrollTop = window.scrollY;
       for(let i=0;i<this.listHeight.length;i++){
          if(scrollTop<this.listHeight[0]){
            this.currentIndex = i;
          }
          if(scrollTop>=this.listHeight[i] && scrollTop<=this.listHeight[i+1]){
            this.currentIndex = i;
          }
        }
        if(scrollTop>FXIED_VALUE){
            this.tabbarFixed();
        }
        else{
            this.tabbarUnfixed();
        }
        
      })
    },
    tabbarFixed(){
      this.fixed_style = 'position:fixed;top:0;width:100%;z-index:999'; 
    },
    tabbarUnfixed(){
      this.fixed_style = ''; 
    }
  },
  mounted() {
    setTimeout(()=>{
      let lists = this.$refs.list.$el.children,tempHeight=0;
      for(let i=0;i < lists.length;i++){
          if(i===0){
            this.listHeight.push(tempHeight);
          }
          tempHeight+=lists[i].clientHeight;
          this.listHeight.push(tempHeight);
      }
      this.listenScroll();
    },20);
  },
}
</script>
<style lang="stylus" scoped>
</style>
