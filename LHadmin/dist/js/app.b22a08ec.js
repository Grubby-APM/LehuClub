(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],l=0,f=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},s={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0a30d5fd":"bd0844d3","chunk-0a703328":"f20bfeb0","chunk-1600b2e4":"b29baf20","chunk-39232eff":"65544e7d","chunk-4ff2863b":"448054df","chunk-5e57b0e6":"2c218fdc","chunk-645ec748":"134cfefa","chunk-6f49c29a":"c12cf0fc","chunk-77177a6f":"6bfeee17","chunk-ae618950":"820ec429"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0a30d5fd":1,"chunk-0a703328":1,"chunk-1600b2e4":1,"chunk-39232eff":1,"chunk-4ff2863b":1,"chunk-5e57b0e6":1,"chunk-645ec748":1,"chunk-6f49c29a":1,"chunk-77177a6f":1,"chunk-ae618950":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0a30d5fd":"ac490b74","chunk-0a703328":"d3795f55","chunk-1600b2e4":"aace7f55","chunk-39232eff":"191be384","chunk-4ff2863b":"5cd20393","chunk-5e57b0e6":"ae621b3b","chunk-645ec748":"efba20d4","chunk-6f49c29a":"7348cf63","chunk-77177a6f":"b5450d47","chunk-ae618950":"c03f43df"}[t]+".css",s=c.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var u=r[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],l=u.getAttribute("data-href");if(l===a||l===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],d.parentNode.removeChild(d),n(r)},d.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){i[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",f.name="ChunkLoadError",f.type=a,f.request=i,n[1](f)}s[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0418":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{header:!0,posiFixed:t.$store.state.details.headfixed},style:{backgroundColor:t.bgc}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.headershow,expression:"$store.state.headershow"}],staticClass:"left iconfont icon-zuo",on:{click:t.back}}),a("span",{staticClass:"title"},[t._v(t._s(t.$store.state.headertitle))]),a("img",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.headershow,expression:"!$store.state.headershow"}],ref:"headimg",style:{top:t.headtop},attrs:{src:n("4ffd"),alt:""}})])},i=[],s={data:function(){return{headtop:"-80px",bgc:"#2a2a2a"}},methods:{back:function(){this.$router.go(-1)}},created:function(){"/appointment"==this.$route.path||"/details"==this.$route.path?("/appointment"==this.$route.path?this.bgc="#2a2a2a":this.bgc=this.$store.state.hcolor2,this.$store.state.details.headfixed=!0):(this.bgc="#2a2a2a",this.$store.state.details.headfixed=!1)},mounted:function(){var t=window.innerWidth;"/index"==this.$route.path&&(t>=375&&(this.headtop="-95px"),t>=414&&(this.headtop="-108px"))},props:["xqi"]},r=s,o=(n("5452"),n("2877")),c=Object(o["a"])(r,a,i,!1,null,null,null);e["a"]=c.exports},"13fc":function(t,e,n){},"21dc":function(t,e,n){},"28f6":function(t,e,n){t.exports=n.p+"img/banner05.b2ba8146.png"},"2e86":function(t,e,n){"use strict";var a=n("eede"),i=n.n(a);i.a},"392c":function(t,e,n){},"40c4":function(t,e,n){t.exports=n.p+"img/detective.2aa4ed59.png"},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.9e12db19.png"},5452:function(t,e,n){"use strict";var a=n("af35"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("76a0"),s=n.n(i),r=(n("aa35"),n("b970")),o=(n("157a"),n("dfa4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("FootTab",{directives:[{name:"show",rawName:"v-show",value:t.istrue,expression:"istrue"}]})],1)}),c=[],u=n("bc3a"),l=n.n(u),f=(n("a342"),n("21dc"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footertab"},[n("van-tabbar",{attrs:{"bind:change":"onChange"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{to:"/"}},[n("span",{staticClass:"ibtn iconfont icon-xianchangpancun"}),n("p",[t._v("案发现场")])]),n("van-tabbar-item",{attrs:{to:"my"}},[n("span",{staticClass:"ibtn iconfont icon-geren"}),n("p",[t._v("个人档案室")])])],1)],1)}),d=[],h={data:function(){return{active:0}}},p=h,b=(n("e988"),n("2877")),m=Object(b["a"])(p,f,d,!1,null,null,null),v=m.exports,g={data:function(){return{istrue:!0}},watch:{"$route.path":function(t){console.log(t),this.istrue="/login"!=t&&"/register"!=t&&"/file"!=t&&"/file/"!=t&&"/details"!=t&&"/appointment"!=t&&"/motorcade"!=t&&"/myappoint"!=t&&"/gift"!=t&&"/rank"!=t,"/index"==t?(this.$store.state.headershow=!1,this.$store.state.headertitle="乐狐剧本社"):(this.$store.state.headershow=!0,"/file"==t&&(this.$store.state.headertitle="案发卷宗"),"/appointment"==t&&(this.$store.state.headertitle="发起预约"),"/motorcade"==t&&(this.$store.state.headertitle="剧情推理小分队"),"/myappoint"==t&&(this.$store.state.headertitle="我的预约"),"/gift"==t&&(this.$store.state.headertitle="我的优惠券"))}},components:{FootTab:v},created:function(){var t=this;l.a.post("/").then((function(e){t.$store.state.jbdata=e.data,console.log(t.$store.state.jbdata)})).catch((function(){console.log("请求失败"),t.$store.state.file.noone=!0,console.log(t.$store.state.file.noone)}))}},k=g,w=(n("5c0b"),Object(b["a"])(k,o,c,!1,null,null,null)),x=w.exports,y=(n("d3b7"),n("8c4f")),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("Header"),n("Banner"),n("Case"),n("van-notice-bar",{attrs:{text:"欢迎来到乐狐剧本社!谢绝自带酒水,酒水客服:13018455671"}})],1)},$=[],_=n("0418"),j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Banner"},[a("div",{staticClass:"swiper-container indexbanner"},[a("div",{staticClass:"swiper-wrapper"},[a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:n("8b1e"),alt:""}})]),a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:n("f2b8"),alt:""}})]),a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:n("f872"),alt:""}})]),a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:n("bf1b"),alt:""}})]),a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:n("28f6"),alt:""}})])])])])}],E=n("41d6"),D={created:function(){},mounted:function(){new E["a"](".indexbanner",{loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1}})}},P=D,S=(n("2e86"),Object(b["a"])(P,j,O,!1,null,null,null)),T=S.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"case"},[a("div",{staticClass:"bgc"}),a("div",{staticClass:"content"},[a("router-link",{staticClass:"item t1",attrs:{to:"file"}},[a("p",[a("span",{staticClass:"go"},[t._v("去破案")]),a("span",{staticClass:"right iconfont icon-zuo"})]),a("span",{staticClass:"tip"},[t._v("点击立即开始一段奇妙征程")]),a("div",{staticClass:"detective"},[a("img",{attrs:{src:n("40c4"),alt:""}})])]),a("div",{staticClass:"item"},[a("router-link",{staticClass:"tap",attrs:{tag:"div",to:"motorcade"}},[a("p",[a("span",{staticClass:"go"},[t._v("发车啦")]),a("span",{staticClass:"right iconfont icon-zuo"})]),a("span",{staticClass:"tip"},[t._v("快来加入缺人的车队")]),a("span",{staticClass:"catteam iconfont icon-duoren"})]),a("router-link",{staticClass:"bottom",attrs:{tag:"div",to:"/rank"}},[a("p",[a("span",{staticClass:"go"},[t._v("排行榜单")]),a("span",{staticClass:"right iconfont icon-zuo"})]),a("span",{staticClass:"tip"},[t._v("快来看看你的排名吧")]),a("span",{staticClass:"cup iconfont icon-jiangbei"})])],1)],1)])},L=[],B={data:function(){return{}}},A=B,M=(n("811b"),Object(b["a"])(A,N,L,!1,null,"5c17642e",null)),F=M.exports,z={data:function(){return{a:20}},created:function(){this.$store.state.headershow=!1},beforeMount:function(){this.$store.state.winWid=window.innerWidth},mounted:function(){},watch:{},components:{Header:_["a"],Banner:T,Case:F}},W=z,q=(n("c072"),Object(b["a"])(W,C,$,!1,null,null,null)),H=q.exports;a["default"].use(y["a"]);var I=[{path:"/",redirect:"index"},{path:"/index",component:H},{path:"/my",component:function(){return n.e("chunk-4ff2863b").then(n.bind(null,"4c41"))}},{path:"/login",component:function(){return n.e("chunk-1600b2e4").then(n.bind(null,"71a8"))}},{path:"/register",component:function(){return n.e("chunk-ae618950").then(n.bind(null,"386e"))}},{path:"/file",component:function(){return n.e("chunk-6f49c29a").then(n.bind(null,"3759"))}},{path:"/details",component:function(){return n.e("chunk-0a30d5fd").then(n.bind(null,"58cc"))}},{path:"/appointment",component:function(){return n.e("chunk-5e57b0e6").then(n.bind(null,"69bf"))}},{path:"/motorcade",component:function(){return n.e("chunk-77177a6f").then(n.bind(null,"ffac"))}},{path:"/myappoint",component:function(){return n.e("chunk-39232eff").then(n.bind(null,"e74f"))}},{path:"/gift",component:function(){return n.e("chunk-0a703328").then(n.bind(null,"d96c"))}},{path:"/rank",component:function(){return n.e("chunk-645ec748").then(n.bind(null,"3a97"))}}],J=new y["a"]({scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:I}),U=J,K=n("2f62"),R={state:{colorChange:!1,headfixed:!1}},Y={state:{year:(new Date).getFullYear(),moon:(new Date).getMonth(),day:(new Date).getDate(),changeday:(new Date).getDate(),week:(new Date).getDay(),index:null,houri:null,numi:null,selectDay:{},roomid:1},mutations:{changeday:function(t){console.log(t.index)}}},G=(n("4de4"),n("ac1f"),n("1276"),{state:{List:["全部","4人","5人","6人","7人","8人","9人"],noone:!1},mutations:{numsel:function(t){if(0==this.state.fileindex)this.state.selectjb=this.state.jbdata;else{var e=t.List[this.state.fileindex];e=e.split("人"),this.state.selectjb=this.state.jbdata.filter((function(t){return t.num==e[0]})),6==this.state.fileindex&&this.state.selectjb}}}}),Q={state:{myappoint:[],fleet:[]}};a["default"].use(K["a"]);var V=new K["a"].Store({state:{pathName:null,isshow:!1,headershow:!0,headertitle:null,winWid:null,headertop:-95,jbdata:null,selectjb:[],fleet:[],hindex:null,hcolor2:null,fileindex:0,loginistrue:!0},mutations:{},actions:{},modules:{details:R,appoint:Y,file:G,myappoint:Q}});a["default"].use(s.a),a["default"].use(r["a"]),l.a.defaults.baseURL="http://127.0.0.1:4040",a["default"].config.productionTip=!1,a["default"].prototype.$axios=l.a,new a["default"]({router:U,store:V,render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"811b":function(t,e,n){"use strict";var a=n("13fc"),i=n.n(a);i.a},"8b1e":function(t,e,n){t.exports=n.p+"img/banner01.7a530e07.png"},"9b6c":function(t,e,n){},"9c0c":function(t,e,n){},a342:function(t,e,n){},af35:function(t,e,n){},bf1b:function(t,e,n){t.exports=n.p+"img/banner04.9117cf06.png"},c072:function(t,e,n){"use strict";var a=n("392c"),i=n.n(a);i.a},e988:function(t,e,n){"use strict";var a=n("9b6c"),i=n.n(a);i.a},eede:function(t,e,n){},f2b8:function(t,e,n){t.exports=n.p+"img/banner02.b53865f4.png"},f872:function(t,e,n){t.exports=n.p+"img/banner03.6e3d8e3e.png"}});
//# sourceMappingURL=app.b22a08ec.js.map