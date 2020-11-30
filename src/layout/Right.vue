<template>
  <div class="an-content-right" ref="anngContent">
    <a-card class="shadow anng-info">
      <div class="info-bg"></div>
      <div class="info-avatar">
        <img class="img-thumbnail" src="@/assets/avater/1.jpg" />
        <h3>ANNG</h3>
      </div>
      <!-- <div class="item-1-content">
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
      </div> -->
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
    <a-card title="文章分类" class="shadow anng-cate">
      <div class="cate-item" v-for="index of 5" :key="index">
        <div class="name">PHP</div>
        <div class="num">(10)</div>
      </div>
    </a-card>
    <a-card title="标签" class="shadow anng-tag">
      <div class="tag-item">
        <a>Php</a>
        <a>Java</a>
        <a>Python</a>
        <a>GoLang</a>
        <a>Php</a>
        <a>Java</a>
        <a>Python</a>
        <a>GoLang</a>
        <a>Php</a>
        <a>Java</a>
        <a>Python</a>
        <a>GoLang</a>
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
export default class Right extends Vue {}
</script>
<style lang="scss" scoped>
$minHeight: 1000px;
$itemHide: 300px;
.an-content-right {
  min-height: $minHeight;
  position: -webkit-sticky;
  position: sticky;
  top: 45px;
  border-radius: 10px;
  z-index: 0;
  > div {
    margin-bottom: 10px;
  }

  .anng-info {
    text-align: center;
    position: relative;
    z-index: 2;
    border-radius: 10px 10px 0 0;

    .info-bg {
      position: absolute;
      border-radius: 10px 10px 0 0;
      width: 100%;
      top: 0;
      left: 0;
      height: 100px;
      z-index: -1;
      padding: 0px;
      background-image: url(~@/assets/images/bg4.jpg);
      background-size: cover;
    }

    .info-avatar {
      margin-top: 20px;
      display: flex;
      img {
        height: 100px;
        width: 100px;
        overflow: hidden;
        margin: 0 auto;
        z-index: 2;
      }

      h3 {
        padding-top: 60px;
      }
    }

    .info-article {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
  }

  .anng-cate {
    .cate-item {
      display: flex;
      justify-content: space-between;
    }
  }

  .anng-tag {
    .tag-item {
      display: flex;
      margin: 5px;
      flex-wrap: wrap;
      justify-content: space-around;
      a {
        padding: 3px;
        text-align: center;
        margin-bottom: 10px;
        height: 30px;
        &:hover {
          border-bottom: 2px solid #333;
        }
      }
    }
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

.info-article-cate {
  // display: flex;
  columns: 3;
  div {
    padding: 5px;
    border: 1px solid #333;
    text-align: center;
    margin-bottom: 10px;
    border-radius: 20px;
  }
}
</style>