<template>
  <div class="content">
    <nav-layout></nav-layout>
    <article class="top">
      <div class="baranan-two"></div>
    </article>
    <article class="container an-content">
      <slot name="anng-content">
        <a-row :gutter="16">
          <a-col :span="18">
            <div class="an-content-left">
              <slot></slot>
            </div>
          </a-col>
          <a-col :span="6" style="position: relative">
            <right-layout></right-layout>
          </a-col>
        </a-row>
      </slot>
    </article>
    <footer class="bg-white shadow"></footer>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";
import NavLayout from "./Nav.vue";
import MinTopLayout from "./MinTop.vue";
import RightLayout from "./Right.vue";
import {
  GithubOutlined,
  QqOutlined,
  TwitterOutlined
} from "@ant-design/icons-vue";

@Options({
  components: defineComponent({
    RightLayout,
    NavLayout,
    MinTopLayout
  })
})
export default class Layout extends Vue {
  private bg = [
    "@/assets/images/bg1.jpg",
    "@/assets/images/bg2.jpg",
    "@/assets/images/bg3.jpg",
    "@/assets/images/bg4.jpg"
  ];
}
</script>
<style lang="scss" >
* {
  a {
    text-decoration: none;
  }
}
$minHeight: 1000px;
$itemHide: 300px;

.content {
  background-color: #f5f7f9 !important;
}

.an-content {
  padding: 10px;
  margin-top: 10px;

  .an-content-left {
    min-height: $minHeight;
    .an-content-left-group-item {
      position: relative;

      .title {
        height: 100px;
        position: absolute;
        width: 100%;
        bottom: 23px;
        color: #fff;
        font-size: 30;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}

.top {
  .baranan {
    width: 100%;
    height: 100vh;
    z-index: -1;
    background-image: url(https://pc-index-skin.cdn.bcebos.com/hiphoto/66011955477.jpg);
    background-size: cover;
  }

  .baranan-two {
    width: 100%;
    height: 500px;
    z-index: -1;
    background-image: url(https://pc-index-skin.cdn.bcebos.com/hiphoto/66011955477.jpg);
    background-size: cover;
  }
}

footer {
  height: 50px;
}
</style>
