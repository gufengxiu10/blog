<template>
  <div class="content">
    <nav class="shadow bg-white" v-show="isShow">
      <div class="nav container ">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
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
        </li>
      </div>
    </nav>
    <article class="top">
      <div class="baranan" v-show="!isShow"></div>
      <div class="baranan-two" v-show="isShow"></div>
    </article>
    <article class="min-top bg-white shadow"></article>
    <article class="container an-content">
      <a-row :gutter="16">
        <a-col :span="18">
          <div class="bg-white shadow an-content-left">123</div>
        </a-col>
        <a-col :span="6">
          <div class=" an-content-right">
            <div class="an-content-item-1 bg-white shadow "></div>
            <div class="an-content-item-2 bg-white shadow "></div>
            <div class="an-content-item-3 bg-white shadow "></div>
            <div class="an-content-item-4 bg-white shadow "></div>
          </div>
        </a-col>
      </a-row>
    </article>
    <footer class="bg-white shadow"></footer>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Index extends Vue {
  protected msg = "456";
  protected isShow = false;
  protected data1 = [
    {
      key: "10",
    },
  ];

  mounted() {
    window.addEventListener("scroll", this.te, true);
  }

  te() {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    this.isShow = scrollTop == 0 ? false : true;
    console.log(this.isShow);
  }
}
</script>
<style lang="scss" scoped>
$minHeight: 1000px;
$itemHide: 200px;

.content {
  background-color: #f5f7f9 !important;
}

nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  margin: 0 auto;
}

.an-content {
  padding: 10px;
  margin-top: 10px;

  .an-content-right {
    min-height: $minHeight;

    .an-content-item-1 {
      margin-bottom: 10px;
      height: $itemHide;
    }

    .an-content-item-2 {
      margin-bottom: 10px;
      height: $itemHide;
    }

    .an-content-item-3 {
      margin-bottom: 10px;
      height: $itemHide;
    }

    .an-content-item-4 {
      margin-bottom: 10px;
      height: $itemHide;
    }
  }

  .an-content-left {
    min-height: $minHeight;
  }
}

.min-top {
  height: 100px;
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
