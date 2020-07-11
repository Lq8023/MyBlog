<template>
  <div id="app">
    <main-header></main-header>
    <Search></Search>
    <div class="container">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import MainHeader from "components/MainHeader/MainHeader";
import Search from "components/header/search";
import Footer from "components/Footer/Footer";
export default {
  name: "app",
  components: {
    MainHeader,Search,Footer
  },
  mounted() {
    //监听键盘按键事件
    let self = this;
    this.$nextTick(function() {
      document.addEventListener("keyup", function(e) {
        if (e.keyCode == 27) {
          self.searchClick();
        }
      })
    })
  },
  methods:{
    searchClick(){
      this.$store.state.isSearch = !this.$store.state.isSearch
    }
  }
};
</script>
<style>
@import "./assets/css/base.css";
.container {
  margin-top: 130px;
  width: 100%;
  padding-bottom: 50px
}
</style>
