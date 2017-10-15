<template>
  <div id="all">
    <div style="display: flex; justify-content: center; align-items: center;"><h1>支付成功!</h1></div>
    <div id="star">
      <star-rating v-model="rating"></star-rating>
    </div>

    <div id="tags">
      <ul>
        <li><mt-button v-for="(tag, index) in tags" v-on:click="handleClick(index)" :key="tag.index">{{tag}}</mt-button></li>
      </ul>
    </div>
    <br>
    <div id="comments">
      <textarea id="message" placeholder="多行输入" v-model="textMessage"></textarea>
    </div>
    <div style="display: flex; justify-content: center; align-items: center; padding-top: 5%" v-on:click="backToHome">
      <mt-button>提交评论</mt-button>
    </div>
  </div>
</template>
<script>
  import router from './../../router/index.js'
  import StarRating from 'vue-star-rating'
  import Vue from 'vue'
  Vue.component('star-rating', StarRating)
  export default {
    data() {
      return {
        rating: 1,
        pileId: null,
        tags: ['充电快', '站点整洁', '等待时间短'],
        textMessage: ''
      }
    },
    methods: {
      backToHome: function () {
        this.pileId = this.$route.params.pileid
        this.$http.post('/siteinformation/addcomment', {star: this.rating, content: this.textMessage, pileid: this.pileId}).then(response => {
          router.push({path: '/payment/homepage'})
        }, response => {})
      },
      handleClick(index) {
        this.textMessage += this.tags[index]
      }
    }
  }
</script>
<style>
  li{
    padding-left: 10px;
    float: left;
    list-style-type: none;
  }
  #star{
    padding-left: 13%;
  }
  #tags{
    padding-top: 10px;
  }
  #comments{
    padding-top: 50px;
    padding-left: 18%;
  }
  #message{
    width: 250px;
    height: 100px;
    border: 2px solid;
  }
</style>
