<template>
  <div class="site-top"> 
    <span class="blog-name">Lq's blog</span>
    <div class="searchbox"> 
      <i class="el-icon-search" @click="searchClick"></i>
    </div> 
    <Header>
      <HeaderItem path="/">
        <a slot="item-text"><i class="el-icon-shouye"></i>首页</a>
      </HeaderItem>
      <HeaderItem path="/resource">
        <div slot="item-text"><i class="el-icon-menu"></i>分类</div>
      </HeaderItem>
      <HeaderItem path="/about">
        <div slot="item-text"><i class="el-icon-info"></i>关于</div>
      </HeaderItem>
    </Header>
  </div>
</template>

<script>
import HeaderItem from '../header/HeaderItem'
import Header from '../header/Header'
export default {
  name: 'MainHeader',
  components:{
    HeaderItem,Header
  },
  methods:{
    searchClick(){
      this.$store.state.isSearch = !this.$store.state.isSearch
    }
  }
}
</script>

<style>
.site-top {
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 0 60px;
  font-family: miranafont,"Hiragino Sans GB",STXihei,"Microsoft YaHei",SimSun,sans-serif;
  float: left;
  box-sizing: border-box;
  background-color: #63b7af;
  position:absolute;
  top: 0;
  z-index: 9999;
}
.searchbox {
  float: right;
  height: 80px;
  line-height: 80px;
  margin-left: 20px;
}
.el-icon-search{
  font-size: 20px;
  cursor: pointer;
  color: #ffffff
}
.blog-name{
  margin: 14px 0 11px;
  float: left;
  color: #fff;
  font-size: 2rem
}
</style>