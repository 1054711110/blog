import{_ as s,c as a,o as n,a as e}from"./app.224cc387.js";const F=JSON.parse('{"title":"这一定是你见过最全的性能优化方法论","description":"","frontmatter":{},"headers":[{"level":2,"title":"Webpack","slug":"webpack","link":"#webpack","children":[]},{"level":2,"title":"Vue","slug":"vue","link":"#vue","children":[{"level":3,"title":"如何实现 vue 项目中的性能优化？","slug":"如何实现-vue-项目中的性能优化","link":"#如何实现-vue-项目中的性能优化","children":[]},{"level":3,"title":"vue 中的 spa 应用如何优化首屏加载速度?","slug":"vue-中的-spa-应用如何优化首屏加载速度","link":"#vue-中的-spa-应用如何优化首屏加载速度","children":[]}]},{"level":2,"title":"React","slug":"react","link":"#react","children":[]}],"relativePath":"front-end-engineering/performance.md","lastUpdated":null}'),l={name:"front-end-engineering/performance.md"},p=e(`<h1 id="这一定是你见过最全的性能优化方法论" tabindex="-1">这一定是你见过最全的性能优化方法论 <a class="header-anchor" href="#这一定是你见过最全的性能优化方法论" aria-hidden="true">#</a></h1><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>写作中</p></div><h2 id="webpack" tabindex="-1">Webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h2><h2 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-hidden="true">#</a></h2><h3 id="如何实现-vue-项目中的性能优化" tabindex="-1"><strong>如何实现 <em>vue</em> 项目中的性能优化？</strong> <a class="header-anchor" href="#如何实现-vue-项目中的性能优化" aria-hidden="true">#</a></h3><blockquote><p><strong>编码阶段</strong></p><ul><li>尽量减少 <em>data</em> 中的数据，<em>data</em> 中的数据都会增加 <em>getter</em> 和 <em>setter</em>，会收集对应的 <em>watcher</em></li><li><em>v-if</em> 和 <em>v-for</em> 不能连用</li><li>如果需要使用 <em>v-for</em> 给每项元素绑定事件时使用事件代理</li><li><em>SPA</em> 页面采用 <em>keep-alive</em> 缓存组件</li><li>在更多的情况下，使用 <em>v-if</em> 替代 <em>v-show</em></li><li><em>key</em> 保证唯一</li><li>使用路由懒加载、异步组件</li><li>防抖、节流</li><li>第三方模块按需导入</li><li>长列表滚动到可视区域动态加载</li><li>图片懒加载</li></ul></blockquote><blockquote><p><strong><em>SEO</em> 优化</strong></p><ul><li>预渲染</li><li>服务端渲染 <em>SSR</em></li></ul></blockquote><blockquote><p><strong>打包优化</strong></p><ul><li>压缩代码</li><li><em>Tree Shaking/Scope Hoisting</em></li><li>使用 <em>cdn</em> 加载第三方模块</li><li>多线程打包 <em>happypack</em></li><li><em>splitChunks</em> 抽离公共文件</li><li><em>sourceMap</em> 优化</li></ul></blockquote><blockquote><p><strong>用户体验</strong></p><ul><li>骨架屏</li><li><em>PWA</em></li></ul></blockquote><blockquote><p>还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启 <em>gzip</em> 压缩等。</p></blockquote><h3 id="vue-中的-spa-应用如何优化首屏加载速度" tabindex="-1"><strong><em>vue</em> 中的 <em>spa</em> 应用如何优化首屏加载速度?</strong> <a class="header-anchor" href="#vue-中的-spa-应用如何优化首屏加载速度" aria-hidden="true">#</a></h3><blockquote><p>优化首屏加载可以从这几个方面开始：</p><ul><li>请求优化：CDN 将第三方的类库放到 CDN 上，能够大幅度减少生产环境中的项目体积，另外 CDN 能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。</li><li>缓存：将长时间不会改变的第三方类库或者静态资源设置为强缓存，将 max-age 设置为一个非常长的时间，再将访问路径加上哈希达到哈希值变了以后保证获取到最新资源，好的缓存策略有助于减轻服务器的压力，并且显著的提升用户的体验</li><li>gzip：开启 gzip 压缩，通常开启 gzip 压缩能够有效的缩小传输资源的大小。</li><li>http2：如果系统首屏同一时间需要加载的静态资源非常多，但是浏览器对同域名的 tcp 连接数量是有限制的(chrome 为 6 个)超过规定数量的 tcp 连接，则必须要等到之前的请求收到响应后才能继续发送，而 http2 则可以在多个 tcp 连接中并发多个请求没有限制，在一些网络较差的环境开启 http2 性能提升尤为明显。</li><li>懒加载：当 url 匹配到相应的路径时，通过 import 动态加载页面组件，这样首屏的代码量会大幅减少，webpack 会把动态加载的页面组件分离成单独的一个 chunk.js 文件</li><li>预渲染：由于浏览器在渲染出页面之前，需要先加载和解析相应的 html、css 和 js 文件，为此会有一段白屏的时间，可以添加 loading，或者骨架屏幕尽可能的减少白屏对用户的影响体积优化</li><li>合理使用第三方库：对于一些第三方 ui 框架、类库，尽量使用按需加载，减少打包体积</li><li>使用可视化工具分析打包后的模块体积：webpack-bundle- analyzer 这个插件在每次打包后能够更加直观的分析打包后模块的体积，再对其中比较大的模块进行优化</li><li>提高代码使用率：利用代码分割，将脚本中无需立即调用的代码在代码构建时转变为异步加载的过程</li><li>封装：构建良好的项目架构，按照项目需求就行全局组件，插件，过滤器，指令，utils 等做一 些公共封装，可以有效减少我们的代码量，而且更容易维护资源优化</li><li>图片懒加载：使用图片懒加载可以优化同一时间减少 http 请求开销，避免显示图片导致的画面抖动，提高用户体验</li><li>使用 svg 图标：相对于用一张图片来表示图标，svg 拥有更好的图片质量，体积更小，并且不需要开启额外的 http 请求</li><li>压缩图片：可以使用 image-webpack-loader，在用户肉眼分辨不清的情况下一定程度上压缩图片</li></ul></blockquote><h2 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-hidden="true">#</a></h2><h1 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-hidden="true">#</a></h1><p>shouldComponentUpdate 提供了两个参数 nextProps 和 nextState，表示下一次 props 和一次 state 的值，当函数返回 false 时候，render()方法不执行，组件也就不会渲染，返回 true 时，组件照常重渲染。此方法就是拿当前 props 中值和下一次 props 中的值进行对比，数据相等时，返回 false，反之返回 true。</p><p>需要注意，在进行新旧对比的时候，是**浅对比，**也就是说如果比较的数据时引用数据类型，只要数据的引用的地址没变，即使内容变了，也会被判定为 true。</p><p>面对这个问题，可以使用如下方法进行解决： （1）使用 setState 改变数据之前，先采用 ES6 中 assgin 进行拷贝，但是 assgin 只深拷贝的数据的第一层，所以说不是最完美的解决办法：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">o2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">assign</span><span style="color:#ABB2BF;">({}, </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">state</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">o2</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">student</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;00000&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setState</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">o2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">o2</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">Object</span><span style="color:#B392F0;">.assign({}</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">state</span><span style="color:#B392F0;">.obj);</span></span>
<span class="line"><span style="color:#79B8FF;">o2</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">student</span><span style="color:#B392F0;">.count </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;00000&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">.setState({</span></span>
<span class="line"><span style="color:#B392F0;">  obj</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> o2</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>（2）使用 JSON.parse(JSON.stringfy())进行深拷贝，但是遇到数据为 undefined 和函数时就会错。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">o2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">parse</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stringify</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">state</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#E5C07B;">o2</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">student</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;00000&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setState</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">o2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">o2</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#B392F0;">.parse(</span><span style="color:#79B8FF;">JSON</span><span style="color:#B392F0;">.stringify(</span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">state</span><span style="color:#B392F0;">.obj));</span></span>
<span class="line"><span style="color:#79B8FF;">o2</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">student</span><span style="color:#B392F0;">.count </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;00000&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">.setState({</span></span>
<span class="line"><span style="color:#B392F0;">  obj</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> o2</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>React 如何判断什么时候重新渲染组件？</strong></p><p>组件状态的改变可以因为<code>props</code>的改变，或者直接通过<code>setState</code>方法改变。组件获得新的状态，然后 React 决定是否应该重新渲染组件。只要组件的 state 发生变化，React 就会对组件进行重新渲染。这是因为 React 中的<code>shouldComponentUpdate</code>方法默认返回<code>true</code>，这就是导致每次更新都重新渲染的原因。</p><p>当 React 将要渲染组件时会执行<code>shouldComponentUpdate</code>方法来看它是否返回<code>true</code>（组件应该更新，也就是重新渲染）。所以需要重写<code>shouldComponentUpdate</code>方法让它根据情况返回<code>true</code>或者<code>false</code>来告诉 React 什么时候重新渲染什么时候跳过重新渲染。</p><p><strong>避免不必要的 render</strong></p><p>React 基于虚拟 DOM 和高效 Diff 算法的完美配合，实现了对 DOM 最小粒度的更新。大多数情况下，React 对 DOM 的渲染效率足以业务日常。但在个别复杂业务场景下，性能问题依然会困扰我们。此时需要采取一些措施来提升运行性能，其很重要的一个方向，就是避免不必要的渲染（Render）。这里提下优化的点：</p><ul><li><strong>shouldComponentUpdate 和 PureComponent</strong></li></ul><p>在 React 类组件中，可以利用 shouldComponentUpdate 或者 PureComponent 来减少因父组件更新而触发子组件的 render，从而达到目的。shouldComponentUpdate 来决定是否组件是否重新渲染，如果不希望组件重新渲染，返回 false 即可。</p><ul><li><strong>利用高阶组件</strong></li></ul><p>在函数组件中，并没有 shouldComponentUpdate 这个生命周期，可以利用高阶组件，封装一个类似 PureComponet 的功能</p><ul><li><strong>使用 React.memo</strong></li></ul><p>React.memo 是 React 16.6 新的一个 API，用来缓存组件的渲染，避免不必要的更新，其实也是一个高阶组件，与 PureComponent 十分类似，但不同的是， React.memo 只能用于函数组件。</p>`,31),o=[p];function t(c,r,i,B,y,d){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{F as __pageData,m as default};
