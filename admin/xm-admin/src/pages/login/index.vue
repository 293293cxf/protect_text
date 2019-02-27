<template>
  <div class="page">
    <div class="page__bd_spacing">
      <div class="logo">乐乐 xx</div>
      <button class="weui-btn" type="primary" open-type='getUserInfo' show-message-card="true"
              @getuserinfo='onGotUserInfo'>点击进入
      </button>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import {LOGIN} from '../../store/user/types';

  export default {
    data () {
      return {
        canIUse: wx.canIUse('button.open-type.getUserInfo')
      }
    },
    computed: {
      ...mapState({
        user: state => state.user.authorize
      })
    },
    watch: {
      user () {
        if (this.user) {
          console.log('state修改，返回首页');
          wx.reLaunch({
            url: '/pages/index/index'
          })
        }
      }
    },
    methods: {
      onGotUserInfo (res) { // 点击允许
        wx.login({
          success: data => {
            if (data.code) {
              let code = data.code;
              if (res.mp.detail.rawData) {
                console.log('您已授权');
                this.$store.dispatch(LOGIN, {
                  code: code,
                  info: res.mp.detail.rawData,
                  encryptedData: res.mp.detail.encryptedData,
                  iv: res.mp.detail.iv,
                  signature: res.mp.detail.signature
                });
              } else {
                console.log('未授权')
              }
            }
          }
        })
      }
    }
  }
</script>

<style>
  page {
    display: flex;
    height: 100%;
    justify-content: center;
    align-content: center;
  }
  .page {
    display: flex;
    align-items: center;
  }
  .logo {
    height: 600rpx;
    text-align: center;
  }
</style>
