webpackJsonp([7],{"6IwO":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".container[data-v-a965048c]{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left}.title[data-v-a965048c]{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:60px;color:#35495e;letter-spacing:1px;padding-bottom:5px}.subtitle[data-v-a965048c]{font-weight:300;font-size:15px;color:#526488;word-spacing:5px;text-align:right}.content[data-v-a965048c]{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:15px;color:#b70447;letter-spacing:1px;padding-top:5px}.content-title[data-v-a965048c]{color:#35495e;padding-top:15px}.button[data-v-a965048c],.content-title[data-v-a965048c]{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:12px;letter-spacing:1px}.button[data-v-a965048c]{color:#0799ad;margin-top:55px}a[data-v-a965048c]{text-decoration:none}.links[data-v-a965048c]{padding-top:15px}",""])},E6pz:function(t,e,a){"use strict";var n=a("Xxa5"),i=a.n(n),o=a("exGp"),s=a.n(o),c=a("mtWM"),r=a.n(c);e.a={asyncData:function(){var t=s()(i.a.mark(function t(e){var a,n,o=e.params;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("https://api.coinmarketcap.com/v1/ticker/"+o.coin+"/");case 2:return a=t.sent,n=a.data,t.abrupt("return",{coin:n[0],name:o.coin});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},Rony:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[a("div",[a("h2",{staticClass:"subtitle"},[t._v(" "+t._s(t.coin.symbol)+" ")]),a("h1",{staticClass:"title"},[t._v(" "+t._s(t.coin.name)+" ")]),a("hr"),a("h5",{staticClass:"content-title"},[t._v(" PRICE ")]),a("h5",{staticClass:"content"},[t._v(" "+t._s(t.coin.price_usd)+" USD for 1 coin ")]),a("h5",{staticClass:"content-title"},[t._v(" TREND ")]),a("h5",{staticClass:"content"},[t._v("in 1 hour "+t._s(t.coin.percent_change_1h)+"% ")]),a("h5",{staticClass:"content"},[t._v("in 24 hours "+t._s(t.coin.percent_change_24h)+"% ")]),a("h5",{staticClass:"content"},[t._v("in 7 days"+t._s(t.coin.percent_change_7d)+"%")]),a("nuxt-link",{staticClass:"button",attrs:{to:"/coin-list"}},[t._v("BACK")])],1)])};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i},WYu8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("E6pz"),i=a("Rony"),o=!1;var s=function(t){o||a("fbo0")},c=a("VU/8")(n.a,i.a,!1,s,"data-v-a965048c",null);c.options.__file="pages/coins/_coin.vue",e.default=c.exports},fbo0:function(t,e,a){var n=a("6IwO");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("1ae11f43",n,!1,{sourceMap:!1})}});