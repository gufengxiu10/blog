<template>
  <div>
    <layout>
      <!-- 顶部 START -->
      <template v-slot:braan>
        <div class="detail-banner">
          <div class="banner-bg"></div>
          <div class="banner-content">
            <div>
              <div class="banner-title">
                <h2>手残党的免死金牌：为Typecho增加逻辑删除功能</h2>
              </div>
              <div class="mt-3">
                <span class="post-meta mr-2">
                  <i class="iconfont icon-author" aria-hidden="true"></i>
                  张凯强
                </span>

                <span class="post-meta">
                  <i class="iconfont icon-date-fill" aria-hidden="true"></i>
                  <time datetime="2020-10-17 20:00" pubdate="">
                    2020年10月17日 晚上
                  </time>
                </span>
              </div>
              <div class="mt-1">
                <span class="post-meta mr-2">
                  <i class="iconfont icon-chart"></i>
                  823 字
                </span>
                <span class="post-meta mr-2">
                  <i class="iconfont icon-clock-fill"></i>

                  12 分钟
                </span>
                <!-- LeanCloud 统计文章PV -->
                <span
                  id="leancloud-page-views-container"
                  class="post-meta"
                  style="display: inline;"
                >
                  <i class="iconfont icon-eye" aria-hidden="true"></i>
                  <span id="leancloud-page-views">601</span> 次
                </span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- 顶部 END -->
      <div class="anng-detail bg-white shadow">
        <!-- 内容 Start -->
        <div class="detail-body">
          <div class="detail-content">
            <div class="article-entry" itemprop="articleBody">
              <p>
                某天晚上在上班时间偷偷摸鱼的时候，公司的同事的和我探讨一个问题。
              </p>
              <a id="more"></a>
              <h2 id="问题">
                <a href="#问题" class="headerlink" title="问题"></a>问题
              </h2>
              <p>同事大概描述了这样一个需求：</p>
              <p>
                现在有一个需求，前端有一个按钮，点击以后会调用后端一个接口，这个接口会根据用户的筛选条件去<code>hadoop</code>上跑任务，将图片的<code>base64</code>转为<code>img</code>然后打包成<code>zip</code>，生成一个下载连接返回给前端，弹出下载框。
              </p>
              <p>
                <code>hadoop</code
                >上的这个任务耗时比较久，一般都是<code>10s</code>以上，也就是说如果一直让前端等待，会出现请求超时的问题。
              </p>
              <h2 id="需求现阶段实现">
                <a
                  href="#需求现阶段实现"
                  class="headerlink"
                  title="需求现阶段实现"
                ></a
                >需求现阶段实现
              </h2>
              <p>以下是现阶段的实现状况:</p>
              <p>
                用户点击下载按钮后，会把以下筛选条件传到后端，如图:<br /><a
                  href="https://blog.shanamaid.top/2017/06/07/%E8%BD%AE%E8%AF%A2%E6%9C%BA%E5%88%B6%E8%A7%A3%E5%86%B3%E5%90%8E%E7%AB%AF%E4%BB%BB%E5%8A%A1%E5%9B%9E%E8%B0%83%E9%97%AE%E9%A2%98/1.png"
                  title="筛选条件"
                  class="fancybox"
                  rel="article0"
                  ><img
                    src="/2017/06/07/轮询机制解决后端任务回调问题/1.png"
                    alt="筛选条件"
                    title="筛选条件"/></a
                ><span class="caption">筛选条件</span>
              </p>
              <p>
                后端在收到请求后，在去<code>hadoop</code>上跑任务前会向数据库插入这么一条数据:
              </p>
              <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>status</th>
                    <th>url</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1496980062652</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <code>name</code> - 以生成任务时的时间戳命名<br /><code
                  >status</code
                >
                - 任务状态，
                <code>0</code
                >代表任务正常执行，<code>1</code>代表任务执行完成<br /><code
                  >url</code
                >
                - 打包后<code>zip</code>的下载地址，
                <code>status</code
                >为<code>0</code>时，<code>url</code>为空，<code>status</code>为<code>1</code>时，<code>url</code>有对应下载地址
              </p>
              <p>同事做到这里就卡住了。</p>
              <h2 id="解决方案">
                <a href="#解决方案" class="headerlink" title="解决方案"></a
                >解决方案
              </h2>
              <h3 id="以生成任务时的时间戳命名真的好吗？">
                <a
                  href="#以生成任务时的时间戳命名真的好吗？"
                  class="headerlink"
                  title="以生成任务时的时间戳命名真的好吗？"
                ></a
                >以生成任务时的时间戳命名真的好吗？
              </h3>
              <p>
                以生成任务时的时间戳命名使得生成的任务和任务的内容没有任何联系，举个例子：同样的筛选条件，用户每次去下载的时候都会在<code>hadoop</code>上重新跑一个任务，生成一条新数据。实际上，同样的筛选条件打包出来的数据应该是一样的，没必要每次下载都去重跑一次任务，造成不必要的时间损耗。更直观来讲，也就是说2个用户使用相同的筛选条件，但是他们创建下载任务的时间不同，导致了他们都在<code>hadoop</code>创建了一个任务和数据库插入了一条数据，实际上他们各自插入的数据除了虽然<code>name</code>和<code>url</code>不同，但是<code>url</code>下载下来的文件中的内容是一样的。
              </p>
              <p>
                我的解决方案是将所有筛选条件拼接在一起，然后<code>encodeURIComponent</code>后作为唯一标志。<br />
              </p>
              <figure class="highlight plain">
                <table>
                  <tbody>
                    <tr>
                      <td class="gutter">
                        <pre><div class="line">1</div><div class="line">2</div></pre>
                      </td>
                      <td class="code">
                        <pre><div class="line">let name = [startTime, endTime, sid, client, sign, cuid, number, result];</div><div class="line">name = encodeURIComponent(name.join(''));</div></pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </figure>
              <p></p>
              <p>
                这样做也就是说同样筛选条件下，<code>name</code>的标志具有唯一性，避免任务重跑。<br />如果用户在下载<code>zip</code>的时候之前有人创建过相同条件的任务，那么则无许等待，直接就可以进行下载。
              </p>
              <h3 id="后端接口部分设计">
                <a
                  href="#后端接口部分设计"
                  class="headerlink"
                  title="后端接口部分设计"
                ></a
                >后端接口部分设计
              </h3>
              <p>
                再来设计后端接口，根据分析任务一共有三种状态，对应<code>status</code>值如下
              </p>
              <ul>
                <li>未建立任务————- -1</li>
                <li>任务运行中————- 0</li>
                <li>任务结束，生成<code>url</code>—- 1</li>
              </ul>
              <p>接口伪代码如下<br /></p>
              <figure class="highlight plain">
                <table>
                  <tbody>
                    <tr>
                      <td class="gutter">
                        <pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div><div class="line">9</div><div class="line">10</div><div class="line">11</div><div class="line">12</div><div class="line">13</div><div class="line">14</div><div class="line">15</div><div class="line">16</div><div class="line">17</div><div class="line">18</div><div class="line">19</div><div class="line">20</div><div class="line">21</div><div class="line">22</div><div class="line">23</div><div class="line">24</div><div class="line">25</div><div class="line">26</div><div class="line">27</div><div class="line">28</div><div class="line">29</div><div class="line">30</div></pre>
                      </td>
                      <td class="code">
                        <pre><div class="line">public function download () {</div><div class="line">  $startTime = $this-&gt;input-&gt;post('startTime');</div><div class="line">  $endeTime = $this-&gt;input-&gt;post('endeTime');</div><div class="line">  $sid = $this-&gt;input-&gt;post('sid');</div><div class="line">  $client = $this-&gt;input-&gt;post('client');</div><div class="line">  $sign = $this-&gt;input-&gt;post('sign');</div><div class="line">  $cuid = $this-&gt;input-&gt;post('cuid');</div><div class="line">  $number = $this-&gt;input-&gt;post('number');</div><div class="line">  $result = $this-&gt;input-&gt;post('result');</div><div class="line">  $name = $this-&gt;input-&gt;post('name');</div><div class="line"></div><div class="line"></div><div class="line">  $status = getTaskStatus($name); </div><div class="line">  $data = array(</div><div class="line">    'status' =&gt; $status,</div><div class="line">    'url'    =&gt; ''</div><div class="line">  );</div><div class="line">  </div><div class="line">  </div><div class="line">  if ($status == -1) {</div><div class="line">    establishTask($startTime, $endTime, $sid, $cuid, $number, $result); // 去hadoop上跑任务</div><div class="line">    insertSQL($name, 0); </div><div class="line">  } else if ($status === 0) {</div><div class="line"></div><div class="line">  } else if ($status === 1) {</div><div class="line">    $data['url'] = getTaskUrl($name);</div><div class="line">  }</div><div class="line"></div><div class="line">  echo json_encode($data);</div><div class="line">}</div></pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </figure>
              <p></p>
              <p>
                <code>getTaskStatus</code
                >用于从数据库中获取任务状态，当数据库中没有与<code>$name</code>相匹配的数据时则返回<code>-1</code>，有则返回对应的<code>status</code>。
              </p>
              <p>接下来进行判断:</p>
              <p>
                若<code>$status</code>为<code>-1</code>，表明该筛选条件的请求是第一次出现，<code>establishTask</code>创建<code>hadoop</code>任务的同时<code>insertSQL</code>在数据库中插入一条<code>name</code>为<code>$name</code>,<code>status</code>为<code>0</code>的数据。(<code>establishTask</code>在任务结束时会自动修改数据库中的<code>status</code>为<code>1</code>，同时插入<code>url</code>)
              </p>
              <p>
                若<code>$status</code>为<code>0</code>，表明该筛选条件对应的任务正在<code>hapdoop</code>上运行。
              </p>
              <p>
                若<code>$status</code>为<code>1</code>，表明该筛选条件对应的任务已经完成，通过<code>getTaskUrl</code>从数据库中取得<code>url</code>。
              </p>
              <p>最后将<code>data</code>返回给前端。</p>
              <h3 id="前端轮询机制">
                <a
                  href="#前端轮询机制"
                  class="headerlink"
                  title="前端轮询机制"
                ></a
                >前端轮询机制
              </h3>
              <p>
                前端需要做的就是根据后端返回的结果来判定是否需要继续请求，也就是所谓的<code>轮询</code>，根据<code>setInterval</code>来进行实现。
              </p>
              <p>伪代码如下<br /></p>
              <figure class="highlight plain">
                <table>
                  <tbody>
                    <tr>
                      <td class="gutter">
                        <pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div><div class="line">9</div><div class="line">10</div><div class="line">11</div><div class="line">12</div><div class="line">13</div><div class="line">14</div><div class="line">15</div><div class="line">16</div><div class="line">17</div><div class="line">18</div><div class="line">19</div><div class="line">20</div><div class="line">21</div><div class="line">22</div><div class="line">23</div><div class="line">24</div><div class="line">25</div><div class="line">26</div><div class="line">27</div><div class="line">28</div><div class="line">29</div><div class="line">30</div><div class="line">31</div><div class="line">32</div><div class="line">33</div><div class="line">34</div><div class="line">35</div><div class="line">36</div><div class="line">37</div><div class="line">38</div><div class="line">39</div><div class="line">40</div><div class="line">41</div><div class="line">42</div><div class="line">43</div><div class="line">44</div></pre>
                      </td>
                      <td class="code">
                        <pre><div class="line">const download = ()</div></pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </figure>
              <p></p>
              <p>
                时间设置为<code>2s</code>一次轮询，当<code>response</code>中的<code>status</code>为<code>1</code>即获得下载地址，此时通过<code>clearInterval</code>取消<code>interval</code>，关闭轮询。
              </p>
              <h3 id="页面刷新带来的影响">
                <a
                  href="#页面刷新带来的影响"
                  class="headerlink"
                  title="页面刷新带来的影响"
                ></a
                >页面刷新带来的影响
              </h3>
              <p>
                如果<code>hadoop</code>
                速度极慢，长时间没反应，用户可能会以为页面卡顿了，从而进行页面的刷新。
              </p>
              <p>
                由于采取了上面同筛选条件下任务标识唯一的方法，即使刷新页面后，用户再点击下载相同条件的任务后也不会再去handoop上重新跑任务以及插入新的数据，如果任务还在<code>running</code>则等待，任务已经结束则直接下载。
              </p>
              <p>
                如果以最初的时间戳为<code>name</code>，则会导致任务重跑，用户得重新开始等待。
              </p>
              <h3 id="关于为什么不引入socket-io？">
                <a
                  href="#关于为什么不引入socket-io？"
                  class="headerlink"
                  title="关于为什么不引入socket.io？"
                ></a
                >关于为什么不引入socket.io？
              </h3>
              <p>
                交流中我曾询问过目前项目中是否还有其余与此相似的功能，但据了解暂时只有这一个需求，所以虽然<code>socket.io</code>相比轮询来说更节约性能，但是没有必要为了一个功能而引入一个库，这样做的感觉是得不尝试。这样做的行为类似于你为了使用<code>underscore</code>中的某个方法而引入整个<code>underscore</code>。
              </p>
              <h2 id="关于轮询机制和websocket的形象对比">
                <a
                  href="#关于轮询机制和websocket的形象对比"
                  class="headerlink"
                  title="关于轮询机制和websocket的形象对比"
                ></a
                >关于轮询机制和<code>websocket</code>的形象对比
              </h2>
              <p>轮询机制<br /></p>
              <figure class="highlight plain">
                <table>
                  <tbody>
                    <tr>
                      <td class="gutter">
                        <pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div><div class="line">9</div></pre>
                      </td>
                      <td class="code">
                        <pre><div class="line">客户端:服务器，你有没有消息要给我啊？</div><div class="line">服务器：有。</div><div class="line">客户端:服务器，你有没有消息要给我啊？</div><div class="line">服务器：没有。</div><div class="line">——————————无限重复————————————</div><div class="line">客户端:服务器，你有没有消息要给我啊？</div><div class="line">服务器：没有。</div><div class="line">客户端:服务器，你有没有消息要给我啊？</div><div class="line">服务器：有</div></pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </figure>
              <p></p>
              <p>websocket<br /></p>
              <figure class="highlight plain">
                <table>
                  <tbody>
                    <tr>
                      <td class="gutter">
                        <pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div></pre>
                      </td>
                      <td class="code">
                        <pre><div class="line">客户端:服务器，你有我的消息了记得call我。</div><div class="line">服务器：OK！</div><div class="line">——————————当有消息的时候————————</div><div class="line">服务器：有你的消息了，客户端。</div><div class="line">客户端：收到。</div></pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </figure>
              <p></p>
            </div>
          </div>
        </div>
        <!-- 内容 END -->
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
export default class Detail extends Vue {
  protected routes = [
    {
      path: "Index",
      breadcrumbName: "首页",
    },
    {
      path: "Cate",
      breadcrumbName: "Second-level Menu",
    },
  ];
}
</script>
<style lang="scss" scoped>
.detail-header {
  display: flex;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
}

.detail-img {
  img {
    width: 100%;
  }
}

.detail-banner {
  height: 60vh;
  z-index: 0;
  background-image: url(https://pc-index-skin.cdn.bcebos.com/hiphoto/66011955477.jpg);
  transform: translate3d(0px, 0px, 0px);
  position: relative;

  .banner-bg {
    position: absolute;
    top: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .banner-content {
    height: 100%;
    width: 100%;
    z-index: 2;
    position: absolute;
    display: -webkit-box;
    -webkit-box-align: center;
    justify-content: center;
    color: #fff !important;
    text-align: center;
    -webkit-box-pack: center;
    h2 {
      color: #fff;
    }
  }
}

.detail-body {
  padding: 10px;

  .detail-meta {
    display: flex;
    margin: 10px 0;
  }

  .detail-title {
    display: flex;
    margin-bottom: 10px;
  }
}
</style>
