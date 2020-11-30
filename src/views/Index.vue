<template>
  <div>
    <layout>
      <div
        class="anng-group-item bg-white shadow"
        v-for="index of 10"
        :key="index"
      >
        <router-link to="/10">
          <div class="item-img">
            <img
              class="img-fluid"
              src="https://pc-index-skin.cdn.bcebos.com/hiphoto/66011955477.jpg"
            />
          </div>
          <div class="info">
            <h2 class="info-title">
              哔哔！换个姿势在静态博客上发短博文（volantis适配版）
            </h2>
            <div class="info-small">
              本文教你如何用微信在Hexo上发表类似于说说的短博文。
            </div>
          </div>
          <a-divider />
          <div class="user">
            <div>
              <span class="user-avatar">
                <img
                  src="https://pc-index-skin.cdn.bcebos.com/hiphoto/66011955477.jpg"
                />
              </span>
              <span class="user-item-icon">
                <FieldTimeOutlined :style="{ fontSize: '20px' }" />
              </span>
              <span class="user-item-text"> 2020-11-11 </span>
              <span class="user-item-icon">
                <ContainerOutlined :style="{ fontSize: '20px' }" />
              </span>
              <span class="user-item-text">进阶玩法</span>
            </div>
            <div class="user-right">
              <span class="user-item-icon"><ArrowRightOutlined /></span>
            </div>
          </div>
        </router-link>
      </div>
    </layout>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";
import Layout from "@/layout/Layout.vue";
import {
  TagsOutlined,
  UserOutlined,
  FieldTimeOutlined,
  ContainerOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons-vue";

@Options({
  components: defineComponent({
    Layout,
    TagsOutlined,
    UserOutlined,
    FieldTimeOutlined,
    ContainerOutlined,
    ArrowRightOutlined,
  }),
})
export default class Index extends Vue {}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #333;
}
.anng-group-item {
  margin-bottom: 20px;
  border-radius: 10px 10px 0 0;
  // transition: ;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    transition: all 0.6s;
    z-index: 9999;
  }

  .user {
    height: 50px;

    display: flex;
    justify-content: space-between;
    .user-avatar {
      padding-left: 20px;
      margin-bottom: 10px;
      margin-right: 20px;
      img {
        width: 24px !important;
        height: 24px !important;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .user-item-icon {
      line-height: 21px !important;
      margin-right: 5px;
    }

    .user-item-text {
      line-height: 27px !important;
      margin-right: 10px;
    }

    .user-right {
      margin-right: 35px;
    }
  }

  .info {
    color: #000;
    .info-title {
      font-size: 25px;
      font-weight: 400;
      margin-top: 10px;
      padding-left: 10px;
      line-height: 50px;
    }

    .info-small {
      padding-left: 10px;
      margin-top: 5px;
    }
  }
}
</style>
