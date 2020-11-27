<template>
  <div>
    <layout>
      <div class="anng-group-item">
        <div class="item-img">
          <img
            class="img-fluid"
            src="https://pc-index-skin.cdn.bcebos.com/hiphoto/66011955477.jpg"
          />
        </div>
        <div class="info">
          <div>哔哔！换个姿势在静态博客上发短博文（volantis适配版）</div>
          <div>本文教你如何用微信在Hexo上发表类似于说说的短博文。</div>
        </div>
        <a-divider />
        <div class="user">
          <span>
            <FieldTimeOutlined :style="{ fontSize: '20px' }" />2020-10-09
          </span>
          <span>-进阶玩法</span>
        </div>
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
} from "@ant-design/icons-vue";

@Options({
  components: defineComponent({
    Layout,
    TagsOutlined,
    UserOutlined,
    FieldTimeOutlined,
  }),
})
export default class Index extends Vue {}
</script>
<style lang="scss" scoped>
.anng-group-item {
  display: box;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .user {
    display: flex;
  }
}
</style>
