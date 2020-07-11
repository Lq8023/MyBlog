<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="m-container">
      <el-container>
        <!--头像-->
        <el-header height="100px">
          <img class="header-tou" src="~assets/images/logo.png" />
        </el-header>
        <!--END-->
        <!--座右铭-->
        <el-container>
          <el-main class="motto">
            <div class="notice">
              <i class="el-icon-yezi yezi"></i>
              ：时间永是流逝，街市依旧太平
            </div>
          </el-main>
        </el-container>
        <!--END-->
      </el-container>
      <div class="article w100">
        <h1 class="a-title">文章</h1>
        <el-row>
          <el-col :span="8" class="feature">
            <div class="feature-title">
              <span class="foverlay">浅谈对 "用户体验" 的理解</span>
              <img src="../assets/images/carousel01.jpg" />
            </div>
          </el-col>
          <el-col :span="8" class="feature">
            <div class="feature-title">
              <img src="../assets/images/carousel01.jpg" />
            </div>
          </el-col>
          <el-col :span="8" class="feature">
            <div class="feature-title">
              <img src="../assets/images/carousel01.jpg" />
            </div>
          </el-col>
          <el-col :span="8" class="feature" v-for="item in banner" :key="item">
            <div class="feature-title">
              <img :src="item.imgUrl" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'
import { getBanner} from 'network/home'
export default {
  name: "Home",
  components: {
    //HelloWorld
  },
  data() {
    return {};
  },
  created(){
    getBanner().then(res =>{
      console.log(res)
      this.banner = res.data.data.list
    })
  },
  mounted(){
    
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
  border-radius: 5px;
  border-bottom: 2px solid #def4f0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  border-top: 2px solid #def4f0;
  border-radius: 5px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  border-radius: 5px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.header-tou {
  width: 80px;
  height: auto;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.3);
}
.motto {
  line-height: 160px;
  background: #fbfbfb;
}
.yezi {
  color: green;
  font-size: 20px;
}
h1.a-title {
  color: #757575;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 15px;
  border-bottom: 1px dashed #ececec;
}
.article {
  margin-top: 4em;
}
.feature-title img {
  height: 160px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.feature {
  width: 32.9%;
  float: left;
  margin: 0 auto;
  position: relative;
  display: block;
  cursor: pointer;
}
.feature:nth-child(2) {
  margin: 0 5px;
}
.feature-title span {
  position: absolute;
  width: 100%;
  height: 160px;
  text-align: center;
  line-height: 160px;
  background: #bbe2db;
  color: #fff;
  font-size: 16px;
  opacity: 0;
  border-radius: 5px;
}
.feature-title:hover span{
  opacity: 1
}
.foverlay {
  -webkit-transition: opacity 0.4s ease-out;
  transition: opacity 0.4s ease-out;
}
</style>
