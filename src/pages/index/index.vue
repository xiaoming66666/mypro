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
      <swiper-item>
        <image src="/static/uploads/banner1.png"></image>
      </swiper-item>
      <swiper-item>
        <image src="/static/uploads/banner2.png"></image>
      </swiper-item>
      <swiper-item>
        <image src="/static/uploads/banner3.png"></image>
      </swiper-item>
    </swiper>

    <!-- 导航 -->
    <div class="navs">
     <navigator>
       <image src="/static/uploads/icon_index_nav_1@2x.png"></image>
     </navigator>
      <navigator>
       <image src="/static/uploads/icon_index_nav_2@2x.png"></image>
     </navigator>
      <navigator>
       <image src="/static/uploads/icon_index_nav_3@2x.png"></image>
     </navigator>
      <navigator>
       <image src="/static/uploads/icon_index_nav_4@2x.png"></image>
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

}
</script>

<style scoped lang="less">
.search {


}
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
