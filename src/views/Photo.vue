<template>
  <div>
    <layout>
      <div class="photo-group">
        <div class="photo-item" v-for="index of 20" :key="index"></div>
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
  ArrowRightOutlined
} from "@ant-design/icons-vue";

@Options({
  components: defineComponent({
    Layout,
    TagsOutlined,
    UserOutlined,
    FieldTimeOutlined,
    ContainerOutlined,
    ArrowRightOutlined
  })
})
export default class Detail extends Vue {
  protected routes = [
    {
      path: "Index",
      breadcrumbName: "首页"
    },
    {
      path: "Cate",
      breadcrumbName: "Second-level Menu"
    }
  ];
}
</script>
<style lang="scss" scoped>
.photo-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  div {
    width: 20%;
    height: 250px;
    border: 1px solid #333;
  }
}
</style>
