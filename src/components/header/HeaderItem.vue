<template>
  <div class="current-menu-item" @click="itemClick">
    <div class="itemText" :class="{ active: !isActive }">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderItem",
  props: {
    path: String
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path != this.path;
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path != this.path) {
        this.$router.push(this.path);
      }
    }
  }
};
</script>

<style>
.current-menu-item {
  float: left;
  position: relative;
  cursor: pointer;
  margin-left: 12px
}
.itemText {
  padding: 12px 15px;
  display: inline-block;
  color: #fff;
  font-size: 1rem;
}
.itemText:hover{
  background: rgba(255,255,255,.2);
  border-radius: 10px;
}
.itemText.active{
  border-radius: 10px;
  background: rgba(255,255,255,.5);
}
</style>