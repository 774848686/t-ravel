<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area" ref="citynow">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area" ref="cityhot">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  data() {
    return {
      listHeight: [],
      scrollY: -1,
      currentIndex: 0,
      scrollLine: 0,
      diff: -1
    }
  },
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    },
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    _calculateHeight() {
      let height = 0
      this.listHeight.push(height)
      Object.keys(this.cities).forEach((key, i) => {
        height += this.$refs[key][0].clientHeight
        this.listHeight.push(height)
      })
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    },
    cities() {
      if (this.cities) {
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      }
    },
    scrollY(newVal) {
      for (let i = 0; i < this.listHeight.length; i++) {
        if (-newVal >= this.listHeight[i] && -newVal < this.listHeight[i + 1]) {
          this.currentIndex = i
          return
        }
      }
      // 当滚动到底部，且-newY大于最后一个元素的上限
      this.currentIndex = this.listHeight.length - 2
    },
    diff() {}
  },
  mounted() {
    setTimeout(() => {
      const scrollY =
        this.$refs['citynow'].clientHeight + this.$refs['cityhot'].clientHeight
      this.scrollLine = scrollY
      let data = {}
      this.scroll = new Bscroll(this.$refs.wrapper, {
        probeType: 3
      })
      this.scroll.on('scroll', pos => {
        this.scrollY = pos.y
        data = {
          scrollY: pos.y,
          scrollLine: this.scrollLine,
          currentAlphabet: this.letters[this.currentIndex]
        }

        this.$emit('scrollE', data)
      })
    }, 20)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
