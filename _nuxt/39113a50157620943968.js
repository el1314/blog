(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{193:function(t,n,e){var content=e(196);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(89).default)("a0628a7a",content,!0,{sourceMap:!1})},195:function(t,n,e){"use strict";e(193)},196:function(t,n,e){(n=e(88)(!1)).push([t.i,".blog-lang{margin-right:5px}",""]),t.exports=n},216:function(t,n,e){"use strict";e.r(n);e(17),e(10),e(41),e(14);var r=e(2),l={layout:"page",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,i,l,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$content("blog").sortBy("date","desc").only(["date","language","title","slug"]).fetch();case 2:for(e=n.sent,r={},i=0;i<e.length;i++)r[e[i].language]?r[e[i].language]++:r[e[i].language]=1;for(l=Object.keys(r),o=[],c=0;c<l.length;c++)o[c]={name:l[c],len:r[l[c]]};return n.abrupt("return",{languages:o,baseURL:t.app.router.options.base});case 9:case"end":return n.stop()}}),n)})))()},head:function(){return{title:"语言列表",meta:[{hid:"description",name:"description",content:"文章语言列表"}]}}},o=(e(195),e(6)),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"blog-main"},[e("h1",[t._v("\n    语言列表\n  ")]),t._v(" "),e("p",[e("span",{staticClass:"blog-tag"},[e("nuxt-link",{attrs:{to:"/post"}},[e("i",{staticClass:"fa fa-list",staticStyle:{color:"inherit"}}),t._v("\n        文章列表\n      ")])],1)]),t._v(" "),e("p",t._l(t.languages,(function(n,r){return e("span",{key:r,staticClass:"blog-lang"},[e("nuxt-link",{attrs:{to:"/post/language/"+n.name}},[e("i",{staticClass:"fa fa-language"}),t._v(t._s(n.name)+": "+t._s(n.len))])],1)})),0)])}),[],!1,null,null,null);n.default=component.exports}}]);