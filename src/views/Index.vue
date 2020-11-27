<template>
  <div>
    <layout>
      <div class="an-content-left-group-item">
        <img
          class="img-fluid"
          src="https://pc-index-skin.cdn.bcebos.com/hiphoto/66011955477.jpg"
        />
        <div class="title">曾经用易语言写过的一些东西</div>
        <div>
          <div>
            <TagsOutlined />
            &nbsp;&nbsp;
            <span>
              <a-tag color="pink"> pink </a-tag>
              <a-tag color="pink"> pink </a-tag>
              <a-tag color="pink"> pink </a-tag>
              <a-tag color="pink"> pink </a-tag>
              <a-tag color="pink"> pink </a-tag>
              <a-tag color="pink"> pink </a-tag>
              <a-tag color="pink"> pink </a-tag>
              <a-tag color="pink"> pink </a-tag>
              <a-tag color="pink"> pink </a-tag>
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </layout>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";
import Layout from "@/layout/Layout.vue";
import { TagsOutlined } from "@ant-design/icons-vue";

@Options({
  components: defineComponent({
    Layout,
    TagsOutlined,
  }),
})
export default class Index extends Vue {}
</script>