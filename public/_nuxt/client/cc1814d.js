(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{499:function(t,e,o){var content=o(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("1a3e8931",content,!0,{sourceMap:!1})},503:function(t,e,o){"use strict";o(499)},504:function(t,e,o){var n=o(14)(!1);n.push([t.i,".QBoxContainer a{text-decoration:none}.QBoxContainer .q-box{box-shadow:0 0 15px var(--v-boxShadowColor-base);padding:1rem 2rem;border-radius:10px;color:var(--v-textColor-base)}.QBoxContainer .q-box .row1{display:flex;justify-content:space-between}.QBoxContainer .q-box .row1 .QBtitle{padding-bottom:1rem;font-weight:700;max-width:60rem}.QBoxContainer .q-box .row1 .QBvotes-num{box-shadow:0 0 5px var(--v-secondary-lighten5);border-radius:4px;padding:.5rem .8rem;align-self:center;word-break:keep-all}.QBoxContainer .q-box .row3{display:flex;justify-content:space-between;align-items:flex-end}.QBoxContainer .q-box .row3 p{margin:0}.QBoxContainer .q-box .row3 .QBcategory{box-shadow:0 0 5px var(--v-secondary-lighten5);border-radius:4px;padding:.5rem 1rem;text-align:center}@media(max-width:768px){.QBoxContainer .q-box{padding:.5rem 1rem}.QBoxContainer .q-box .QBtitle{font-size:1rem!important;padding-left:1rem}.QBoxContainer .q-box .QBvotes-num{text-align:center;min-width:3.7rem;font-size:.7rem;padding:.4rem!important}.QBoxContainer .q-box .QBbody{font-size:.7rem!important}.QBoxContainer .q-box .QBcategory{font-size:.7rem;padding:.5rem}.QBoxContainer .q-box .QBdate{font-size:.7rem!important}}",""]),t.exports=n},511:function(t,e,o){"use strict";o.r(e);var n={name:"QuestionBox",props:{data:{type:Object,default:function(){return{title:"ما هو الفرق بين Methods و Computed في Vue",votesCount:0,body:"ما هو الفرق الرئيسي بين methods and a computed value في Vue.js? انها تبدو متشابهة وقابلة للتبديل",groupID:"vue"}}}}},r=(o(503),o(39)),d=o(41),x=o.n(d),l=o(497),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"QBoxContainer"},[o("nuxt-link",{attrs:{to:"/q/"+t.data.qID}},[o("div",{staticClass:"q-box"},[o("div",{staticClass:"row1"},[o("h1",{staticClass:"QBtitle"},[t._v(t._s(t.data.title))]),t._v(" "),o("p",{staticClass:"QBvotes-num"},[t._v(t._s(t.data.votesCount+"   صوت"))])]),t._v(" "),o("p",{staticClass:"QBbody"},[t._v(t._s(t.data.description))]),t._v(" "),o("div",{staticClass:"row3"},[o("p",{staticClass:"QBcategory"},[t._v(t._s(t.data.groupID))]),t._v(" "),o("p",{staticClass:"QBdate"},[t._v("تم النشر في "+t._s(t.data.createdAt))])])])])],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VContainer:l.a})}}]);