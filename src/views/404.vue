<template>
  <div>
    404
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
export default class NoFund extends Vue {}
</script>
<style lang="scss" scoped></style>
