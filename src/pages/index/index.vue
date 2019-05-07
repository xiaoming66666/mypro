<template>
  <div>
    <!-- 搜索 -->
    <div class="search">
      <!-- 搜索框 -->
      <div class="input-box">
        <input type="text" placeholder="搜索">
      </div>
      <!-- 搜索结果 -->
      <div class="result"></div>

    </div>

    <!-- 焦点图 -->
    <swiper class="banner" indicator-dots indicator-color="rgba(255,255,255,0.6)" indicator-active-color="#fff" autoplay>
      <swiper-item :key="ke" v-for="(list,ke) in bannerList">
        <navigator :url="list.navigator_url">
          <image :src="list.image_src"></image>
        </navigator>
      </swiper-item>

    </swiper>

    <!-- 导航 -->
    <div class="navs">
     <navigator :key="k" :url="list.navigator_url" v-for="(list,k) in navList">
       <image :src="list.image_src"></image>
     </navigator>

    </div>

    <!-- 楼层-->
    <div class="floors">
      <div class="floor">
        <!-- 标题 -->
        <div class="title">
          <image src="/static/uploads/pic_floor01_title.png"></image>
        </div>
        <div class="pics">
          <image src="/static/uploads/pic_floor01_1@2x.png"></image>
          <image src="/static/uploads/pic_floor01_2@2x.png"></image>
          <image src="/static/uploads/pic_floor01_3@2x.png"></image>
          <image src="/static/uploads/pic_floor01_4@2x.png"></image>
          <image src="/static/uploads/pic_floor01_5@2x.png"></image>
        </div>
      </div>
    </div>

    <div class="floors">
      <div class="floor">
        <!-- 标题 -->
        <div class="title">
          <image src="/static/uploads/pic_floor01_title.png"></image>
        </div>
        <div class="pics">
          <image src="/static/uploads/pic_floor01_1@2x.png"></image>
          <image src="/static/uploads/pic_floor01_2@2x.png"></image>
          <image src="/static/uploads/pic_floor01_3@2x.png"></image>
          <image src="/static/uploads/pic_floor01_4@2x.png"></image>
          <image src="/static/uploads/pic_floor01_5@2x.png"></image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      bannerList: [],
      navList: []
    }
  },
  methods: {
    // 焦点图接口
    getBanner () {
      let _this = this;
    // wx.request 变为mpvue.resquest
     mpvue.request({
       url:'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata',
       methods: 'get',
        // data: {},
        success: function(info){
         console.log(info);
          // 更新数据
         _this.bannerList = info.data.message;
       }
      });
    },
    // 导航接口
    getNavs () {
      let _this = this;
      mpvue.request({
        url:'https://www.zhengzhicheng.cn/api/public/v1/home/catitems',
        methods: 'get',
        success: function (info) {
          console.log(info);
          _this.navList = info.data.message;
        }
      });
    }
  },

  mounted () {
    console.log('请求数据...');
    // 获取焦点图
    this.getBanner();

    // 获取导航数据
    this.getNavs();
  }
}
</script>

<style scoped lang="less">

.search .input-box {
  padding: 21rpx 30rpx;
  background-color: #ea4451;
}

.search .input-box input {
  height: 60rpx;
  background-color: #fff;
  border-radius: 25rpx;
  font-size: 24rpx;
  padding: 0 15rpx;
  text-align: center;
  color: #666;

}
/* 焦点图 */
.banner {
  width: 750rpx;
  height: 340rpx;
  navigator {
    width: 100%;
    height: 100%;
  }
}

/*  */
.navs {
  display: flex;
  /* 俩端对齐 */
  justify-content:space-between;
  padding: 30rpx 42rpx;
}
.navs navigator {
  width: 128rpx;
  height: 140rpx;
}
/*  */
.floor .title {
  width:750rpx ;
  height:60rpx;
  padding-top: 24 rpx;
  padding-left: 10rpx;
  background-color: #f4f4f4;
}

.floor .pics image {
  width:232rpx;
  height: 188rpx;
  margin-right: 10rpx;
  float: left;
  margin-bottom: 10rpx;
}
.floor .pics {
  padding: 20rpx;
  overflow: hidden;
}

.floor .pics image:nth-child(2n+1) {
  margin-right: 0;
}
.floor .pics image:first-child {
  height: 380rpx;
  margin-right: 10rpx;
}

</style>
