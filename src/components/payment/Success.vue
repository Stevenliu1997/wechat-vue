<template>
  <div id="all">
    <div id="text"><h1>支付成功!</h1></div>
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
    <div id="bt" v-on:click="backToHome">
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
  #text{
    padding-top: 30px;
    padding-left: 25%;
  }
  li{
    padding-left: 10px;
    float: left;
    list-style-type: none;
  }
  #star{
    padding-left: 15%;
  }
  #tags{
    padding-top: 10px;
  }
  #comments{
    padding-top: 50px;
    padding-left: 15%;
  }
  #message{
    width: 250px;
    height: 100px;
    border: 2px solid;
  }
  #bt{
    padding-top: 20px;
    padding-left: 35%;
  }
</style>
