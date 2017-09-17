<template>
  <div>
    <div>
      <mt-header title="我的优惠卷">
        <router-link to="/self" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">可使用</mt-tab-item>
        <mt-tab-item id="2">已使用</mt-tab-item>
        <mt-tab-item id="3">不可用</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="canuse in canuses" :key="canuse1">
            <span>
              <div>{{money}}</div>
              <div>{{date}}</div>
            </span>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="used in useds" :key="used1">
            <span>
              <div>{{money}}</div>
              <div>{{date}}</div>
            </span>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="notuse in notuses" :key="notuse1">
            <span>
              <div>{{money}}</div>
              <div>{{date}}</div>
            </span>
          </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div>
      <mt-palette-button content="+">
        <div class="my-icon-button"></div>
      </mt-palette-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ticket',
    data () {
      return {
        ticket: {
          canuses: [],
          useds: [],
          notuses: []
        }
      }
    },
    created: function () {
      this.$http.get('').then(response => {
        if (response.result === 'success') {
          let data = response.data
          this.canuses = data.a
        }
      })
    }
  }
</script>
