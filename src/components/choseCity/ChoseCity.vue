<template>
  <div>
    <div>
      <mt-search cancel-text="取消" placeholder="请输入城市名称"></mt-search>
    </div>
    <div style="color:#586de0;padding-left:2vw;line-height:6vh;border-bottom:1px solid #d9d9d9">
      <span slot="title">当前城市：{{ currentCity }}</span>
    </div>
    <mt-index-list>
      <mt-index-section v-for="(value, key) in cityList" :key="key" :index="key">
        <mt-cell v-for="city in value" :title="city" :key="city"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
export default {
  name: 'choseCity',
  data() {
    return {
      currentCity: '北京',
      cityList: {}
    }
  },
  methods: {
  },
  created() {
    this.$http.get('/mock/city.json').then(response => {
      this.cityList = response.body
    }, response => {
      // error callback
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-search {
  height: 100%;
}
</style>