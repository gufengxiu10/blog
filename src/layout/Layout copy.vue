<template>
  <div class="content">
    <nav class="shadow bg-white" v-show="isShow">
      <div class="nav container">
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
      <!-- <div class="baranan" v-show="!isShow"></div> -->
      <div class="baranan-two"></div>
    </article>
    <article class="min-top bg-white shadow"></article>
    <article class="container an-content">
      <a-row :gutter="16">
        <a-col :span="18">
          <div class="bg-white shadow an-content-left">
            <div class="an-content-left-group-item">
              <img
                class="img-fluid"
                src="https://pc-index-skin.cdn.bcebos.com/hiphoto/66011955477.jpg"
              />
              <div class="title">曾经用易语言写过的一些东西</div>
              <div>
                <div>
                  标签：<a-tag color="pink"> pink </a-tag>
                  <a-tag color="pink"> pink </a-tag>
                  <a-tag color="pink"> pink </a-tag>
                  <a-tag color="pink"> pink </a-tag>
                  <a-tag color="pink"> pink </a-tag>
                  <a-tag color="pink"> pink </a-tag>
                  <a-tag color="pink"> pink </a-tag>
                  <a-tag color="pink"> pink </a-tag>
                  <a-tag color="pink"> pink </a-tag>
                </div>
                <div>
                  <LoadingOutlined />
                </div>
              </div>
            </div>
          </div>
        </a-col>
        <a-col :span="6">
          <div class="an-content-right">
            <a-card class="shadow an-content-item-1">
              <img class="img-thumbnail" src="@/assets/avater/1.jpg" />
              <p>title</p>
              <div class="item-1-content">
                <GithubOutlined
                  :style="{
                    fontSize: '30px',
                    width: '50px',
                    height: '50px',
                  }"
                />
                <QqOutlined
                  :style="{
                    fontSize: '30px',
                    width: '50px',
                    height: '50px',
                  }"
                />
                <TwitterOutlined
                  :style="{
                    fontSize: '30px',
                    width: '50px',
                    height: '50px',
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
        </a-col>
      </a-row>
    </article>
    <footer class="bg-white shadow"></footer>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";
import {
  GithubOutlined,
  QqOutlined,
  TwitterOutlined,
} from "@ant-design/icons-vue";

@Options({
  components: defineComponent({
    GithubOutlined,
    QqOutlined,
    TwitterOutlined,
  }),
})
export default class Layout extends Vue {
  protected isShow = false;

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
* {
  a {
    text-decoration: none;
  }
}
$minHeight: 1000px;
$itemHide: 300px;

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

    > div {
      margin-bottom: 10px;
    }

    .an-content-item-1 {
      height: $itemHide;
      text-align: center;
      padding-top: 10px;
      img {
        height: 100px;
        width: 100px;
        // border-radius: 50%;
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

  .an-content-left {
    min-height: $minHeight;
    padding: 10px;

    .an-content-left-group-item {
      position: relative;

      .title {
        height: 100px;
        position: absolute;
        width: 100%;
        bottom: 23px;
        color: #fff;
        font-size: 30;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
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
      display: block;
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
