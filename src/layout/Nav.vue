<template>
  <div>
    <nav class="shadow bg-white" v-show="isShow">
      <div class="nav container">
        <li class="nav-item" v-for="item in nav" :key="item">
          <a class="nav-link" href="#">{{ item.name }}</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >Disabled</a
          >
        </li> -->
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

  mounted() {
    window.addEventListener("scroll", this.te, true);
  }

  te() {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    this.isShow = scrollTop == 0 ? false : true;
  }

  protected nav = [
    {
      name: "Active"
    },
    {
      name: "Active"
    },
    {
      name: "Active"
    },
    {
      name: "Active"
    },
    {
      name: "Active"
    }
  ];
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