<template>
  <div>
    <form
      class="js-search search-form search-form--modal"
      method="post"
      action
      role="search" 
      :class="{isVisible : $store.state.isSearch }"
    >
      <div class="search-form__inner">
        <div>
          <p class="micro mb-">你想搜索什么 ? 按ESC即可退出 ...</p>
          <i class="el-icon-search"></i>
          <input class="submit" type="search" autocomplete="off" name="s" placeholder="Search..." />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style>
.search-form--modal.isVisible {
  visibility: visible;
  opacity: 1;
}
.search-form div {
  position: relative;
  top: -150px;
}
.search-form i {
  font-size: 32px;
  font-size: 1.5rem;
  line-height: 1;
  color: #ddd;
  position: absolute;
  bottom: 18px;
  margin-top: -16px;
  left: 16px;
}
.search-form--modal {
  transition: visibility 0.25s ease, opacity 0.25s ease;
  overflow: hidden;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.96);
  visibility: hidden;
  opacity: 0;
}
.search-form--modal .search-form__inner {
  max-width: 640px;
  padding: 0 20px;
  margin: auto;
  text-align: left;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  height: 85px;
  top: 0;
  bottom: 0;
}
.search-form input {
  font-size: 1.5rem;
  background: 0 0;
  padding: 12px 24px 12px 64px;
  width: 100%;
  outline: 0;
  border-radius: 50px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  color: #666;
}
</style>