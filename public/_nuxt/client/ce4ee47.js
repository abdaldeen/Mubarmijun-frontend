(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,5,6],{499:function(t,e,n){var content=n(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("1a3e8931",content,!0,{sourceMap:!1})},503:function(t,e,n){"use strict";n(499)},504:function(t,e,n){var o=n(14)(!1);o.push([t.i,".QBoxContainer a{text-decoration:none}.QBoxContainer .q-box{box-shadow:0 0 15px var(--v-boxShadowColor-base);padding:1rem 2rem;border-radius:10px;color:var(--v-textColor-base)}.QBoxContainer .q-box .row1{display:flex;justify-content:space-between}.QBoxContainer .q-box .row1 .QBtitle{padding-bottom:1rem;font-weight:700;max-width:60rem}.QBoxContainer .q-box .row1 .QBvotes-num{box-shadow:0 0 5px var(--v-secondary-lighten5);border-radius:4px;padding:.5rem .8rem;align-self:center;word-break:keep-all}.QBoxContainer .q-box .row3{display:flex;justify-content:space-between;align-items:flex-end}.QBoxContainer .q-box .row3 p{margin:0}.QBoxContainer .q-box .row3 .QBcategory{box-shadow:0 0 5px var(--v-secondary-lighten5);border-radius:4px;padding:.5rem 1rem;text-align:center}@media(max-width:768px){.QBoxContainer .q-box{padding:.5rem 1rem}.QBoxContainer .q-box .QBtitle{font-size:1rem!important;padding-left:1rem}.QBoxContainer .q-box .QBvotes-num{text-align:center;min-width:3.7rem;font-size:.7rem;padding:.4rem!important}.QBoxContainer .q-box .QBbody{font-size:.7rem!important}.QBoxContainer .q-box .QBcategory{font-size:.7rem;padding:.5rem}.QBoxContainer .q-box .QBdate{font-size:.7rem!important}}",""]),t.exports=o},511:function(t,e,n){"use strict";n.r(e);var o={name:"QuestionBox",props:{data:{type:Object,default:function(){return{title:"ما هو الفرق بين Methods و Computed في Vue",votesCount:0,body:"ما هو الفرق الرئيسي بين methods and a computed value في Vue.js? انها تبدو متشابهة وقابلة للتبديل",groupID:"vue"}}}}},r=(n(503),n(39)),l=n(41),d=n.n(l),c=n(497),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"QBoxContainer"},[n("nuxt-link",{attrs:{to:"/q/"+t.data.qID}},[n("div",{staticClass:"q-box"},[n("div",{staticClass:"row1"},[n("h1",{staticClass:"QBtitle"},[t._v(t._s(t.data.title))]),t._v(" "),n("p",{staticClass:"QBvotes-num"},[t._v(t._s(t.data.votesCount+"   صوت"))])]),t._v(" "),n("p",{staticClass:"QBbody"},[t._v(t._s(t.data.description))]),t._v(" "),n("div",{staticClass:"row3"},[n("p",{staticClass:"QBcategory"},[t._v(t._s(t.data.groupID))]),t._v(" "),n("p",{staticClass:"QBdate"},[t._v("تم النشر في "+t._s(t.data.createdAt))])])])])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VContainer:c.a})},516:function(t,e,n){var content=n(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("4eb3e549",content,!0,{sourceMap:!1})},518:function(t,e,n){"use strict";n.r(e);var o=n(27),r=(n(80),{data:function(){return{element:null,firstLoadLength:6,loading:!1,stop:!1}},computed:{data:function(){return this.$store.state.questions.data}},mounted:function(){this.data.questions.length==this.firstLoadLength&&window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.loading&&!e.stop){t.next=2;break}return t.abrupt("return");case 2:if(e.element){t.next=10;break}if(!((n=document.getElementById("QuestionList").children).length>=e.firstLoadLength)){t.next=8;break}e.element=n[n.length-3],t.next=10;break;case 8:return e.stop=!0,t.abrupt("return");case 10:if(!e.isInViewport(e.element)){t.next=14;break}return e.element=null,t.next=14,e.loadMore();case 14:case"end":return t.stop()}}),t)})))()},isInViewport:function(element){var rect=element.getBoundingClientRect();return rect.top>=0&&rect.left>=0&&rect.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&rect.right<=(window.innerWidth||document.documentElement.clientWidth)},loadMore:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n=t.$route.params.id,o="questions/".concat(n?"getMore":"getAllMore"),e.next=5,t.$axios.post(o,{groupID:n,key:t.data.lastKey}).then((function(e){var n=e.data.questions,o=e.data.lastKey;t.$store.commit("questions/loadMore",{questions:n,lastKey:o}),t.loading=!1,(!n||n.length<t.firstLoadLength)&&(t.stop=!0)}));case 5:case"end":return e.stop()}}),e)})))()}}}),l=n(39),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"QuestionList"}},t._l(t.data.questions,(function(t){return n("QuestionBox",{key:t.qID,attrs:{data:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{QuestionBox:n(511).default})},523:function(t,e,n){"use strict";n(516)},524:function(t,e,n){var o=n(14)(!1);o.push([t.i,".askQ-box a{text-decoration:none;color:var(--v-textColor-base)}.askQ-box .ask{margin-top:1rem;box-shadow:0 0 15px var(--v-boxShadowColor-base);max-width:100%;border-radius:10px;height:4rem;padding:1rem;font-size:1rem!important}@media(max-width:768px){.askQ-box .ask{font-size:.7rem;padding:.5rem;height:3rem}}",""]),t.exports=o},535:function(t,e,n){"use strict";n.r(e);var o={computed:{user:function(){return this.$store.state.user}},methods:{popupToggle:function(){this.$store.commit("user/popupToggle")}}},r=(n(523),n(39)),l=n(41),d=n.n(l),c=n(497),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{staticClass:"askQ-box"},[t.user.token?n("nuxt-link",{attrs:{to:"/AskQuestionPage"}},[n("div",{staticClass:"ask"},[t._v("اطرح سؤال")])]):n("div",{staticClass:"ask",on:{click:t.popupToggle}},[t._v("اطرح سؤال")])],1)])}),[],!1,null,null,null);e.default=component.exports;d()(component,{VContainer:c.a})},576:function(t,e,n){"use strict";n.r(e);var o=n(27),r=(n(80),{components:{QuestionList:n(518).default},name:"IndexPage",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.store,t.error,t.redirect,e.next=3,n.$get("questions/get").then((function(t){var e=t.questions,n=t.lastKey;o.commit("questions/add",{questions:e,lastKey:n})})).catch((function(t){console.error(t)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()}}),l=n(39),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AskQuestionBox"),t._v(" "),n("QuestionList")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AskQuestionBox:n(535).default})}}]);