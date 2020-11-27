<template>
  <article class="min-top bg-white shadow">
    <div>运行天数</div>
    <div>文章数量</div>
    <div>文章数量</div>
    <div>文章数量</div>
  </article>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class MinTop extends Vue {}
</script>
<style lang="scss" scoped>
.min-top {
  display: -webkit-flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: center;

  div {
    width: 200px;
    padding: 10px;
  }
}
</style>