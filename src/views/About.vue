<template>
  <div class="m-container">
    <!--轮播图-->
    <el-carousel :interval="5000" arrow="never" height="500px">
      <el-carousel-item v-for="item in carousel" :key="item" >
        <div :style="{backgroundImage:'url('+item+')'}" class="carouselImg"></div>
      </el-carousel-item>
    </el-carousel>
    <header class="pattern-header">
      <h1 class="entry-title">About</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "aobut",
  data() {
    return {
      carousel: [
        require("../assets/images/carousel01.jpg"),
        require("../assets/images/carousel02.jpg"),
        require("../assets/images/carousel03.jpg")
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.carouselImg {
  height: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.pattern-header {
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  z-index: 2;
  font-size: 1.7em
}
@media (max-width: 860px){
  .carouselImg{
    height: 400px;
  }
}
</style>