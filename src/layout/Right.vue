<template>
  <div class="an-content-right" ref="anngContent">
    <a-card class="shadow an-content-item-1">
      <img class="img-thumbnail" src="@/assets/avater/1.jpg" />
      <p>title</p>
      <div class="item-1-content">
        <GithubOutlined
          :style="{
            fontSize: '30px',
            width: '50px',
            height: '50px'
          }"
        />
        <QqOutlined
          :style="{
            fontSize: '30px',
            width: '50px',
            height: '50px'
          }"
        />
        <TwitterOutlined
          :style="{
            fontSize: '30px',
            width: '50px',
            height: '50px'
          }"
        />
      </div>
    </a-card>
    <a-card title="最新文章" class="shadow">
      <div class="new-article-group" v-for="index of 5" :key="index">
        <a href="javascritp:;">
          <div class="item-cover">
            <img
              class="rounded"
              src="https://pc-index-skin.cdn.bcebos.com/hiphoto/66011955477.jpg"
            />
          </div>
          <div class="item-info">
            <h6 class="item-title">
              文章名称文章名称文章名称文章名称文章名称文章名称
            </h6>
            <p class="item-text">2020-11-11</p>
          </div>
        </a>
      </div>
    </a-card>
    <a-card title="文章分类" class="shadow">
      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">PHP</div>
        <div class="p-2 bd-highlight">VUE</div>
        <div class="p-2 bd-highlight">Laravel</div>
      </div>
    </a-card>
    <a-card title="标签" class="shadow tag">
      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="anng-text p-2 bd-highlight">
          <a href="javascript:;">PHP</a>
        </div>
        <div class="anng-text p-2 bd-highlight">
          <a href="javascript:;">VUE</a>
        </div>
        <div class="anng-text p-2 bd-highlight">
          <a href="javascript:;">Laravel</a>
        </div>
      </div>
    </a-card>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { defineComponent, ref } from "vue";
import {
  GithubOutlined,
  QqOutlined,
  TwitterOutlined
} from "@ant-design/icons-vue";

@Options({
  components: Object.assign(
    defineComponent({
      GithubOutlined,
      QqOutlined,
      TwitterOutlined
    }),
    {}
  )
})
export default class Right extends Vue {
  mounted() {
    window.addEventListener("scroll", this.ku, true);
  }

  ku() {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    const anngContent: any = this.$refs.anngContent;
    if (scrollTop >= anngContent["offsetHeight"]) {
      //   anngContent.style.position = "sticky";
      //   anngContent.style.top = "0";
    }
  }
}
</script>
<style lang="scss" scoped>
$minHeight: 1000px;
$itemHide: 300px;
.an-content-right {
  min-height: $minHeight;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  > div {
    margin-bottom: 10px;
  }

  .an-content-item-1 {
    text-align: center;
    img {
      height: 100px;
      width: 100px;
      overflow: hidden;
      margin: 0 auto;
    }

    .item-1-content {
      width: 100%;
    }
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

.new-article-group {
  a {
    display: flex;
  }

  .item-cover {
    position: relative;
    width: 80px;
    height: 60px;
    display: block;

    img {
      position: absolute;
      width: 100%;
      height: auto;
    }
  }

  .item-info {
    padding: 5px 10px;
    display: block;
    width: calc(100% - 80px);
    height: 50px;

    .item-title {
      font-weight: 400px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .item-text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #666;
    }
  }
}

.tag {
  .d-flex {
    > .anng-text {
      a {
        padding: 10px;
        border: 2px solid #333;
        border-radius: 21px;
      }
    }
  }
}
</style>