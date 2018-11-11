<template>
  <div>
    <div class="area" v-if="ifFiexed">
      <div class="title border-topbottom">{{currentAlphabet}}</div>
    </div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter" @scrollE="scrollEvent"></city-list>
    <city-alphabet :cities="cities" :currentAlphabet="currentAlphabet" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      currentAlphabet: 'A',
      ifFiexed: false
    }
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange(letter) {
      this.letter = this.currentAlphabet = letter
    },
    scrollEvent(e) {
      if (e.scrollY && e.scrollY < 0) {
        if (e.scrollY > -e.scrollLine) {
          this.ifFiexed = false
        } else {
          this.currentAlphabet = e.currentAlphabet
          this.ifFiexed = true
        }
      }
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.title {
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}

.area {
  position: fixed;
  top: 1.52rem;
  width: 100%;
  z-index: 9;
}
</style>
