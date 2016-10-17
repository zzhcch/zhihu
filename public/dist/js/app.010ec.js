webpackJsonp([0,2],[,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),a=r(s),o=n(29),i=r(o),u=n(22),c=r(u),f=n(21),d=r(f);a["default"].use(i["default"]),e["default"]=new i["default"]({scrollBehavior:function(){return{y:0}},routes:[{name:"home",path:"/",component:c["default"]},{name:"detail",path:"/detail",component:d["default"]},{path:"*",redirect:"/"}]})},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),o=s(a),i=n(30),u=s(i),c=n(12),f=r(c);o["default"].use(u["default"]);var d=new u["default"].Store({state:{latest:[],article:{}},scrollBehavior:function(t,e,n){if(n)return n;var r={x:0,y:0};return"/"===t.path&&(r.y=+sessionStorage.getItem("scrollTop")||0),r},actions:{FETCH_LATEST:function(t){var e=t.commit;t.state;return f.fetchLatest().then(function(t){var n=t.data;e("SET_LIST",[n])})},FETCH_ARTICLE:function(t,e){var n=t.commit;t.state;return f.fetchArticle(e).then(function(t){var e=t.data;n("SET_ARTICLE",e)})}},mutations:{SET_LIST:function(t,e){t.latest=e},SET_ARTICLE:function(t,e){t.article=e}}});e["default"]=d},function(t,e,n){var r,s;n(16);var a=n(27);s=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(s=r=r["default"]),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=r},,function(t,e){"use strict";function n(t,e,n){if(t)this.date=[t.substr(0,4),"-",t.substr(4,2),"-",t.substr(-2)].join("");else{var r=new Date;this.date=[r.getFullYear(),"-",r.getMonth()+1,"-",r.getDate()].join("")}this.bef=e||0,this.aft=n||0,this.monthArr=["00","01","02","03","04","05","06","07","08","09","10","11","12"],this.monthENArr=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}n.prototype={constructor:n,now:function(){var t=this.date?new Date(this.date):new Date;return[t.getFullYear(),this._cover(t.getMonth()+1),this._cover(t.getDate())].join("")},before:function(t){return this._calc(t||1,"before")},after:function(t){return this._calc(t||1,"after")},month:function(){var t=this.date?new Date(this.date):new Date;return[t.getFullYear(),this._cover(t.getMonth()+1)].join("")},monthEN:function(){this.date?new Date(this.date):new Date;return this.monthENArr[parseInt(this.month().substr(4,2))]},beforeMonth:function(){var t=parseInt(this.month().substr(0,4),10),e=this.month().substr(4,2),n=this.monthArr.indexOf(e);return 1==n?(e="12",t--):(console.log(this.monthArr[1].num,this.monthArr[n-1]),e=this.monthArr[n-1].num),t+""+e},afterMonth:function(){var t=parseInt(this.month().substr(0,4),10),e=this.month().substr(4,2),n=this.monthArr.indexOf(e);return 12==n?(e="01",t++):e=this.monthArr[n+1].num,t+""+e},CHN:function(t){t=t?t:this.now();var e=t.substr(0,4)+"年",n=t.substr(4,2)+"月",r=t.substr(6,2)+"日";return e+n+r},_calc:function(t,e){var n=new Date(this.date),r=0;"before"===e?(r=0-this.bef,t=0-t):r=this.aft;var s=t||r||0,a=new Date(n.getTime()+864e5*s);return[a.getFullYear(),this._cover(a.getMonth()+1),this._cover(a.getDate())].join("")},_cover:function(t){var e=parseInt(t,10);return e<10?"0"+e:e}},t.exports=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"article-item",props:["article"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"history-item",props:["day"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"latest-item",props:["top","latest"]}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),a=r(s),o=n(1),i=r(o),u=n(18),c=r(u);a["default"].use(i["default"]);var f=function(t){return t.dispatch("FETCH_ARTICLE",t.state.route.query.aid)};e["default"]={name:"detail",components:{Articles:c["default"]},computed:{article:function(){return this.$store.state.article}},preFetch:f,beforeMount:function(){f(this.$store)}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),a=r(s),o=n(1),i=r(o),u=n(20),c=r(u),f=n(19),d=r(f),l=n(6),h=r(l);a["default"].use(i["default"]),e["default"]={name:"home",data:function(){return{top:[],latest:[],history:[],date:"20161002"}},components:{Latest:c["default"],History:d["default"]},created:function(){this.$http.get("/latest",{},{headers:{vary:"pjax"}}).then(function(t){for(var e=t.body,n=[],r=0,s=e.length;r<s;r++)e[r].title?e[r].top?this.top.push(e[r]):this.latest.push(e[r]):n.push(e[r]);for(var a=0,o=n.length;a<o;a++)for(var i=0,u=this.latest.length;i<u;i++)n[a].id==this.latest[i].id&&(this.latest[i].comments=n[a].comments,this.latest[i].popularity=n[a].popularity)},function(){this.latest=[]}),this.nextDay()},beforeRouteLeave:function(t,e,n){sessionStorage.setItem("scrollTop",document.body.scrollTop),n()},methods:{nextDay:function(){this.date=new h["default"](this.date).before();var t="/day/"+this.date;this.$http.get(t,{},{headers:{vary:"pjax"}}).then(function(t){var e={month:(new h["default"]).monthEN(this.date)+this.date.substr(4,2),date:(new h["default"]).CHN(this.date),data:t.body};this.history.push(e)},function(){this.latest=[]})}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.fetchArticle=e.fetchLatest=void 0;var s=n(0),a=r(s);e.fetchLatest=function(){return a["default"].http.get("/latest")},e.fetchArticle=function(t){return a["default"].http.get("/article/"+t)}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var r,s;n(13),r=n(7);var a=n(23);s=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(s=r=r["default"]),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,s;n(15),r=n(8);var a=n(25);s=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(s=r=r["default"]),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,s._scopeId="data-v-56b61aea",t.exports=r},function(t,e,n){var r,s;n(17),r=n(9);var a=n(28);s=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(s=r=r["default"]),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,s._scopeId="data-v-7ebe8921",t.exports=r},function(t,e,n){var r,s;r=n(10);var a=n(26);s=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(s=r=r["default"]),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,s;n(14),r=n(11);var a=n(24);s=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(s=r=r["default"]),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=r},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"article"},[_h("div",{staticClass:"img-wrap",style:{"background-image":"url("+article.image+")"}},[_h("h1",[_s(article.title)])," ",_h("span",[_s(article.imageSource)])," ",_m(0)])," ",_h("article",{domProps:{innerHTML:_s(article.body)}})])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"img-mask"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"home"},[_h("Latest",{attrs:{latest:latest,top:top}})," ",_l(history,function(t){return[_h("History",{attrs:{day:t}})]})," ",_h("button",{on:{click:nextDay}},["Next Day"])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("section",{staticClass:"history"},[_h("div",{staticClass:"date"},[_h("span",[_h("i",{staticClass:"m"},[_s(day.month.substr(0,3))]),_h("i",{staticClass:"d"},[_s(day.month.substr(3,2))])])," ",_h("small",[_s(day.date)])])," ",_h("ul",[_l(day.data,function(t){return _h("li",[_h("router-link",{staticClass:"title",attrs:{to:{path:"detail",query:{aid:t.id}}}},[" "+_s(t.title)+" "])," ",_h("img",{attrs:{src:t.image}})," ",_h("p",{staticClass:"sns"},[_h("i",{"class":t.popularity>500&&"hot"},[_s(t.popularity)+" stars"])," | \n          ",_h("i",[_s(t.comments)+" comments"])])])})])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"detail"},[_h("Articles",{attrs:{article:article}})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_m(0)," ",_h("transition",{attrs:{name:"fade",mode:"out-in"}},[_h("router-view",{staticClass:"view"})])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"global-header"},[_h("a",{attrs:{target:"_blank",href:"https://github.com/ccforward/zhihu",id:"forkme_banner"}},["View on GitHub"])," ",_h("div",{staticClass:"wrap"},[_h("a",{attrs:{href:"/"}},[_h("img",{attrs:{src:"data:image/png;base64,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",alt:"logo"}})])," ",_h("p",{staticClass:"power"},["Powered By Node.js & Vue.js"])])])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("ul",[_l(top,function(t){return _h("li",["\n      top: ",_h("router-link",{staticClass:"title",attrs:{to:{path:"detail",query:{aid:t.id}}}},[" "+_s(t.title)+" "])," ",_h("img",{attrs:{src:t.image}})])})," ",_l(latest,function(t){return _h("li",[_h("router-link",{staticClass:"title",attrs:{to:{path:"detail",query:{aid:t.id}}}},[" "+_s(t.title)+" "])," ",_h("img",{attrs:{src:t.image}})," ",_h("p",{staticClass:"sns"},[_h("i",{"class":t.popularity>500&&"hot"},[_s(t.popularity)+" stars"])," | \n        ",_h("i",[_s(t.comments)+" comments"])])])})])},staticRenderFns:[]}},,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.store=e.router=e.app=void 0;var s=n(0),a=r(s),o=n(4),i=r(o),u=n(3),c=r(u),f=n(2),d=r(f),l=n(5),h=n(1),p=r(h);a["default"].use(p["default"]),(0,l.sync)(c["default"],d["default"]),a["default"].config.debug=!0;var m=new a["default"]({name:"app",router:d["default"],store:c["default"],render:function(t){return t(i["default"])}}).$mount("#entry");e.app=m,e.router=d["default"],e.store=c["default"]}],[31]);