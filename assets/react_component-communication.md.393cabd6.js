import{_ as e,c as t,o as a,a as n}from"./app.e6aa6e3c.js";const m=JSON.parse('{"title":"React 组件通信","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 父子组件的通信方式？","slug":"_1-父子组件的通信方式","link":"#_1-父子组件的通信方式","children":[]},{"level":2,"title":"2. 跨级组件的通信方式？","slug":"_2-跨级组件的通信方式","link":"#_2-跨级组件的通信方式","children":[]},{"level":2,"title":"3. 非嵌套关系组件的通信方式？","slug":"_3-非嵌套关系组件的通信方式","link":"#_3-非嵌套关系组件的通信方式","children":[]}],"relativePath":"react/component-communication.md","lastUpdated":null}'),r={name:"react/component-communication.md"},o=n('<h1 id="react-组件通信" tabindex="-1">React 组件通信 <a class="header-anchor" href="#react-组件通信" aria-hidden="true">#</a></h1><h2 id="_1-父子组件的通信方式" tabindex="-1"><strong>1. 父子组件的通信方式？</strong> <a class="header-anchor" href="#_1-父子组件的通信方式" aria-hidden="true">#</a></h2><p><strong>父组件向子组件通信</strong>：父组件通过 props 向子组件传递需要的信息。</p><p><strong>子组件向父组件通信</strong>：: props+回调的方式。</p><h2 id="_2-跨级组件的通信方式" tabindex="-1"><strong>2. 跨级组件的通信方式？</strong> <a class="header-anchor" href="#_2-跨级组件的通信方式" aria-hidden="true">#</a></h2><p>父组件向子组件的子组件通信，向更深层子组件通信：</p><ul><li>使用 props，利用中间组件层层传递,但是如果父组件结构较深，那么中间每一层组件都要去传递 props，增加了复杂度，并且这些 props 并不是中间组件自己需要的。</li><li>使用 context，context 相当于一个大容器，可以把要通信的内容放在这个容器中，这样不管嵌套多深，都可以随意取用，对于跨越多层的全局数据可以使用 context 实现。</li></ul><h2 id="_3-非嵌套关系组件的通信方式" tabindex="-1"><strong>3. 非嵌套关系组件的通信方式？</strong> <a class="header-anchor" href="#_3-非嵌套关系组件的通信方式" aria-hidden="true">#</a></h2><p>即没有任何包含关系的组件，包括兄弟组件以及不在同一个父级中的非兄弟组件。</p><ul><li>可以使用自定义事件通信（发布订阅模式）</li><li>可以通过 redux 等进行全局状态管理</li><li>如果是兄弟组件通信，可以找到这两个兄弟节点共同的父节点, 结合父子间通信方式进行通信。</li></ul>',10),i=[o];function s(c,l,_,d,p,h){return a(),t("div",null,i)}const g=e(r,[["render",s]]);export{m as __pageData,g as default};