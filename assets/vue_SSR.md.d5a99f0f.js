import{_ as e,c as r,o as l,a as t}from"./app.224cc387.js";const _=JSON.parse('{"title":"SSR","description":"","frontmatter":{},"headers":[{"level":2,"title":"SPA","slug":"spa","link":"#spa","children":[]},{"level":2,"title":"Vue SSR 的实现原理","slug":"vue-ssr-的实现原理","link":"#vue-ssr-的实现原理","children":[]}],"relativePath":"vue/SSR.md","lastUpdated":null}'),a={name:"vue/SSR.md"},i=t('<h1 id="ssr" tabindex="-1">SSR <a class="header-anchor" href="#ssr" aria-hidden="true">#</a></h1><h2 id="spa" tabindex="-1">SPA <a class="header-anchor" href="#spa" aria-hidden="true">#</a></h2><p>SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。</p><p><strong>优点：</strong></p><ul><li>用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；</li><li>基于上面一点，SPA 相对对服务器压力小；</li><li>前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；</li></ul><p><strong>缺点：</strong></p><ul><li>初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；</li><li>前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；</li><li>SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。</li></ul><h2 id="vue-ssr-的实现原理" tabindex="-1"><strong>Vue SSR 的实现原理</strong> <a class="header-anchor" href="#vue-ssr-的实现原理" aria-hidden="true">#</a></h2><blockquote><ul><li><em>app.js</em> 作为客户端与服务端的公用入口，导出 <em>Vue</em> 根实例，供客户端 <em>entry</em> 与服务端 <em>entry</em> 使用。客户端 <em>entry</em> 主要作用挂载到 <em>DOM</em> 上，服务端 <em>entry</em> 除了创建和返回实例，还需要进行路由匹配与数据预获取。</li><li><em>webpack</em> 为客服端打包一个 <em>ClientBundle</em>，为服务端打包一个 <em>ServerBundle</em>。</li><li>服务器接收请求时，会根据 <em>url</em>，加载相应组件，获取和解析异步数据，创建一个读取 <em>Server Bundle</em> 的 <em>BundleRenderer</em>，然后生成 <em>html</em> 发送给客户端。</li><li>客户端混合，客户端收到从服务端传来的 <em>DOM</em> 与自己的生成的 <em>DOM</em> 进行对比，把不相同的 <em>DOM</em> 激活，使其可以能够响应后续变化，这个过程称为客户端激活（也就是转换为单页应用）。为确保混合成功，客户 端与服务器端需要共享同一套数据。在服务端，可以在渲染之前获取数据，填充到 <em>store</em> 里，这样，在客户端挂载到 <em>DOM</em> 之前，可以直接从 <em>store</em> 里取数据。首屏的动态数据通过 <em>window.<strong>INITIAL_STATE</strong></em> 发送到客户端</li><li><em>VueSSR</em> 的原理，主要就是通过 <em>vue-server-renderer</em> 把 <em>Vue</em> 的组件输出成一个完整 <em>HTML</em>，输出到客户端，到达客户端后重新展开为一个单页应用。</li></ul></blockquote>',9),m=[i];function s(n,o,d,S,u,c){return l(),r("div",null,m)}const h=e(a,[["render",s]]);export{_ as __pageData,h as default};
