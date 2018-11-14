<template>
    <div class="header">
        <router-link to="/" class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        <h3>杭州必备旅游单</h3>
    </div>
</template>
<script>
export default {
  name: 'PlaceHeader'
}
</script>
<style lang="stylus" scoped>
.header 
    display:flex;
    justify-content:center
    position: relative;
    text-align: center;
    height: 0.88rem;
    line-height: 0.88rem;
    .header-left
      width: .64rem
      position: absolute;
      left:0.3rem
      .back-icon
        text-align: center
        font-size: .4rem

</style>