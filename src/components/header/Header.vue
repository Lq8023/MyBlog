<template>
  <div class="lower">
    <div id="nav_menu" class="menu">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.lower {
  position: relative;
  float: right;
  margin: 14px 0 11px;
}
#nav_menu {
  margin: 0;
  margin-right: 20px;
  padding: 0;
  list-style: none;
  display: inline-block;
}
</style>