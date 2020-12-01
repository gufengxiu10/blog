<template>
  <div>
    <nav class="shadow bg-white" v-show="isShow">
      <div class="nav container">
        <li class="nav-item" v-for="item in nav" :key="item">
          <router-link :to="item.url">
            {{ item.name }}
          </router-link>
        </li>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent, PropType } from "vue";
@Options({
  props: Object.assign(defineComponent({}), {
    num: Boolean
  })
})
export default class Nav extends Vue {
  protected isShow = false;
  protected nav = [
    {
      name: "首页",
      url: ""
    },
    {
      name: "相册",
      url: "/photo"
    },
    {
      name: "音乐",
      url: ""
    },
    {
      name: "关于",
      url: ""
    }
  ];

  mounted() {
    window.addEventListener("scroll", this.te, true);
  }

  te() {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    this.isShow = scrollTop == 0 ? false : true;
  }
}
</script>
<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  margin: 0 auto;
}
</style>