(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{215:function(t,n,e){"use strict";e.r(n);e(14);var r=e(2),c=e(115),o={layout:"page",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(c.a)(t.$content);case 2:return e=n.sent,n.abrupt("return",{categories:e.categories});case 4:case"end":return n.stop()}}),n)})))()},head:function(){return{title:"分类列表",meta:[{hid:"description",name:"description",content:"我的文章分类"}]}}},l=e(6),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"blog-main"},[e("h1",[t._v("\n    分类列表\n  ")]),t._v(" "),e("p",[e("span",{staticClass:"blog-tag"},[e("nuxt-link",{attrs:{to:"/post"}},[e("i",{staticClass:"fa fa-list"}),t._v("\n        文章列表\n      ")])],1)]),t._v(" "),e("p",t._l(t.categories,(function(n,r){return e("span",{key:r,staticClass:"blog-cat"},[e("nuxt-link",{attrs:{to:"/post/category/"+n.name}},[e("i",{staticClass:"fa fa-folder-open"}),t._v("\n         "+t._s(n.name)+": "+t._s(n.len)+"\n       ")])],1)})),0)])}),[],!1,null,null,null);n.default=component.exports}}]);