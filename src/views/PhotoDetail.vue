<template>
  <div>
    <layout>
      <div class="photo-group">
        <div class="photo-item" v-for="index of 10" :key="index">
          <router-link to="/" class="photo-body">
            <img
              src="https://pc-index-skin.cdn.bcebos.com/hiphoto/66011955477.jpg"
            />
            <div class="photo-body-bg">
              <h3>231456</h3>
            </div>
          </router-link>
        </div>
      </div>
    </layout>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";
import Layout from "@/layout/Layout.vue";

@Options({
  components: defineComponent({
    Layout,
  }),
})
export default class Detail extends Vue {
  protected routes = [
    {
      path: "Index",
      breadcrumbName: "首页",
    },
    {
      path: "Cate",
      breadcrumbName: "Second-level Menu",
    },
  ];
}
</script>
<style lang="scss" scoped>
.photo-group {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  box-sizing: border-box;
  .photo-item {
    height: 150px;
    width: calc((100%-60px) / 2);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    .photo-body {
      position: relative;
      margin: 0 10px;
      width: 100%;
      height: 100%;
      box-shadow: #333 0px 0px 12px;
      transition: margin 0.2s;
      &:hover {
        margin-bottom: 10px;
        box-shadow: red 0px 0px 10px;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .photo-body-bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        display: -webkit-box;
        -webkit-box-align: center;
        text-align: center;
        h3 {
          width: 100%;
          color: #fff;
          display: none;
        }
        &:hover {
          h3 {
            display: block;
          }
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
</style>
