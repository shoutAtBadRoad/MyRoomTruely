(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-frdList-frdList"],{"0f5c":function(t,e,n){"use strict";n.r(e);var i=n("f652"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},1608:function(t,e,n){"use strict";n("a9e3"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("7395"),r={name:"cl-icon",props:{name:String,size:[String,Number],color:String},computed:{name2:function(){return this.name.replace("cl-icon-","")}},methods:{parseRpx:i.parseRpx}};e.default=r},"2d58":function(t,e,n){"use strict";n.r(e);var i=n("aea3"),r=n("0f5c");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var s,c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=o.exports},4229:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("7395"),r={data:function(){return{Parent:null}},computed:{parent:function(){return this.getParent()||this.Parent||{}},hasParent:function(){return!(0,i.isEmpty)(this.parent)}},mounted:function(){this.Parent=this.getParent()},methods:{getParent:function(){return this.ComponentName?i.getParent.call(this,this.ComponentName,this.Keys):null}}};e.default=r},"4c60":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={clText:n("2d58").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cl-card"},[n("v-uni-view",{staticClass:"cl-card__header"},[n("cl-text",{attrs:{size:28,bold:!0,value:t.label}}),t.showMore?n("v-uni-view",{staticClass:"cl-card__more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toMore.apply(void 0,arguments)}}},[t._t("more",[n("cl-text",{attrs:{value:t.moreText,color:"#777"}}),n("v-uni-text",{staticClass:"cl-icon-arrow-right"})])],2):t._e()],1),n("v-uni-view",{staticClass:"cl-card__container"},[t._t("default")],2),t.$slots.footer?n("v-uni-view",{staticClass:"cl-card__footer"},[t._t("footer")],2):t._e()],1)},a=[]},"53b7":function(t,e,n){"use strict";n.r(e);var i=n("aa06"),r=n("dcc4");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var s,c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=o.exports},"54f2":function(t,e,n){"use strict";var i=n("4ea4");n("c975"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("4229")),a={name:"cl-list-item",componentName:"ClListItem",props:{label:String,disabled:Boolean,border:{type:Boolean,default:null},type:String,justify:{type:String,default:"end"},swipe:{type:String,default:"none",validator:function(t){return-1!==["none","left","right"].indexOf(t)}},customStyle:Object},mixins:[r.default],data:function(){return{touch:{start:0,end:0,x:0,maxX:0,direction:"left",lock:!0},menu:{width:0},Keys:["disabled","justify","border"],ComponentName:"ClList"}},computed:{isColor:function(){return this.type?"is-color-".concat(this.type):""},isBorder:function(){return null===this.border&&!0===this.parent.border||this.border?"is-border":""},isJustify:function(){return"start"!==(this.parent.justify||this.justify)?"is-justify-".concat(this.justify):""},isAppend:function(){return this.$slots.append?"cl-list-item--append":""},isDisabled:function(){return this.parent.disabled||this.disabled?"cl-list-item--disabled":""},translateX:function(){return"translateX(".concat(this.touch.x,"px)")}},watch:{swipe:function(){this.setMenu()}},mounted:function(){this.setMenu()},methods:{onTap:function(t){this.$emit("click",t),this.$emit("tap",t)},onTouchStart:function(t){"none"!=this.swipe&&(this.touch.start=t.touches[0].pageX,this.touch.lock=!1)},onTouchMove:function(t){var e=this.touch,n=e.start,i=e.end,r=e.lock,a=e.maxX;if(!r){var s=t.touches[0].pageX-n;this.touch.direction=s>0?"right":"left";var c=i+s;"left"==this.swipe&&(c>a&&(c=a),c<0&&(c=0)),"right"==this.swipe&&(c<a&&(c=a),c>0&&(c=0)),this.touch.x=c}},onTouchEnd:function(){var t=this.touch,e=t.direction,n=t.x,i=t.end,r=t.lock,a=t.maxX;r||(Math.abs(n-i)>50?(e===this.swipe?this.touch.x=0:this.touch.x=a,this.touch.end=this.touch.x):this.touch.x=0===i?0:a,this.touch.lock=!0)},setMenu:function(){var t=this;if("none"!=this.swipe){var e=uni.createSelectorQuery().in(this);e.select(".cl-list-item__menu-".concat(this.swipe)).boundingClientRect((function(e){e&&(t.menu.width=e.width,t.touch.maxX=t.menu.width*("right"===t.swipe?-1:1))})).exec()}},restore:function(t){this.touch.start=0,this.touch.end=0,this.touch.lock=!0,this.touch.x=0,t&&setTimeout((function(){t()}),300)}}};e.default=a},"56ec":function(t,e,n){"use strict";n.r(e);var i=n("54f2"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"56fa":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={clCard:n("f037").default,clIcon:n("53b7").default,clListItem:n("6700").default,clAvatar:n("e121").default,clDivider:n("fb64").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cl-card",{attrs:{label:"好友列表","show-more":!1}},[n("cl-icon",{attrs:{slot:"append",name:"cl-icon-friend"},slot:"append"}),t._l(t.frdList,(function(e,i){return n("v-uni-view",{key:i},[n("cl-list-item",{attrs:{type:"success"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.startChat(e)}}},[n("v-uni-view",{staticClass:"cs-block"},[n("cl-avatar",{attrs:{src:e.ava}}),n("v-uni-text",{staticStyle:{"margin-left":"20rpx"}},[t._v(t._s(e.frdName))])],1)],1),n("cl-divider")],1)}))],2)],1)},a=[]},6698:function(t,e,n){"use strict";var i=n("ddd1"),r=n.n(i);r.a},6700:function(t,e,n){"use strict";n.r(e);var i=n("bbdb"),r=n("56ec");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var s,c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=o.exports},"79ab":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"cl-card",props:{label:String,showMore:{type:Boolean,default:!0},moreText:{type:String,default:"查看更多"}},methods:{toMore:function(){this.$emit("more")}}};e.default=i},8024:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".cs-block[data-v-4d9d96c7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;padding:%?20?% %?10?%;\r\n\t\t/* background-color: #0066CC; *//deep/.cl-avatar{height:%?100?%;width:%?100?%;margin-right:%?30?%;border-radius:%?10?%}}",""]),t.exports=e},"8a66":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:["cl-avatar",t.isShape],style:{height:t.height,width:t.width,backgroundColor:t.backgroundColor}},[t.$slots.default||t.$slots.$default?t._t("default"):[t.src?t.isError?t._t("error",[n("v-uni-view",{staticClass:"cl-avatar__error"},[t._v("Error")])]):n("v-uni-image",{staticClass:"cl-avatar__target",attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.handleError.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLoad.apply(void 0,arguments)}}}):t._t("placeholder",[n("v-uni-view",{staticClass:"cl-avatar__placeholder"},[n("v-uni-text",{staticClass:"cl-icon-my",style:{fontSize:t.fontSize}})],1)])]],2)},a=[]},aa06:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",{class:["cl-icon","cl-icon-"+t.name2],style:{fontSize:t.parseRpx(t.size),color:t.color}})},a=[]},ac6b:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("1da1")),a={data:function(){return{frdList:[],ava:[],chatId:"1",frdId:"2"}},methods:{pageInit:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.frdList=[],e.next=3,t.$axios({url:"/frd/getFrd/"+uni.getStorageSync("user"),method:"GET"}).then((function(e){e=e.data;for(var n=0;n<e.length;n++){var i={frdName:e[n].friendName,frdId:e[n].friend,chatId:e[n].chatId,index:n,ava:""};t.frdList.push(i)}}));case 3:n=0;case 4:if(!(n<t.frdList.length)){e.next=10;break}return e.next=7,t.getAvatar(t.frdList[n].frdId,n);case 7:n++,e.next=4;break;case 10:case"end":return e.stop()}}),e)})))()},startChat:function(t){uni.navigateTo({url:"../room/room?chatId="+t.chatId+"&frdId="+t.frdId,animationType:"pop-in"})},getAvatar:function(t,e){var n=this;this.$axios({method:"GET",url:"/user/getAvatar/"+t}).then((function(i){n.frdList[e].ava="data:image/jpeg;base64,"+i.data,uni.setStorageSync("Ava"+t,n.frdList[e].ava)}))}},created:function(){t("log","created"," at pages/frdList/frdList.vue:78")},mounted:function(){t("log","mounted"," at pages/frdList/frdList.vue:81"),this.pageInit()}};e.default=a}).call(this,n("0de9")["log"])},aea3:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={clIcon:n("53b7").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cl-text",class:[t.classList],style:{margin:t.parseRpx(t.margin),color:t.color,"font-size":"26rpx","letter-spacing":t.parseRpx(t.letterSpacing),"-webkit-line-clamp":t.ellipsis},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},["price"==t.type?n("v-uni-text",{staticClass:"cl-text__symbol--price"},[t._v("￥")]):t._e(),t.prefixIcon?n("v-uni-text",{staticClass:"cl-text__prefix-icon"},[n("cl-icon",{attrs:{name:t.prefixIcon,size:t.fontSize}})],1):t._e(),n("v-uni-text",{staticClass:"cl-text__value",style:{fontSize:t.fontSize}},[t._v(t._s(t.d.value))]),"price"==t.type&&t.precision?n("v-uni-text",{staticClass:"cl-text__precision"},[t._v("."+t._s(t.d.precision))]):t._e(),t.suffixIcon?n("v-uni-text",{staticClass:"cl-text__suffix-icon"},[n("cl-icon",{attrs:{name:t.suffixIcon,size:t.fontSize}})],1):t._e()],1)},a=[]},b98d:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"cl-avatar",props:{src:String,lazyLoad:Boolean,size:{type:Number,default:80},shape:{type:String,default:"circle"},mode:{type:String,default:"scaleToFill"}},data:function(){return{isError:!1}},computed:{isShape:function(){return"cl-avatar--".concat(this.shape)},height:function(){return this.size+"rpx"},width:function(){return this.size+"rpx"},fontSize:function(){return this.size/1.7+"rpx"},backgroundColor:function(){return this.src?"":"#c0c4cc"}},methods:{handleLoad:function(t){this.isError=!1,this.$emit("error",t)},handleError:function(t){this.isError=!0,this.$emit("load",t)}}};e.default=i},bb14:function(t,e,n){"use strict";n.r(e);var i=n("56fa"),r=n("dd73");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("6698");var s,c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"4d9d96c7",null,!1,i["a"],s);e["default"]=o.exports},bbdb:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:["cl-list-item",t.isAppend,t.isDisabled,t.isBorder],style:[t.customStyle],on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchStart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchEnd.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cl-list-item__swiper",style:{transform:t.translateX}},[n("v-uni-view",{staticClass:"cl-list-item__container"},[t.$slots.icon?n("v-uni-view",{staticClass:"cl-list-item__icon"},[t._t("icon")],2):t._e(),t.label&&"true"!=t.label?n("v-uni-text",{staticClass:"cl-list-item__label"},[t._v(t._s(t.label))]):t._e(),n("v-uni-view",{class:["cl-list-item__content",t.isJustify,t.isColor]},[t._t("default")],2),n("v-uni-view",{staticClass:"cl-list-item__append"},[t._t("append")],2)],1),"none"!=t.swipe?[n("v-uni-view",{class:["cl-list-item__menu-"+t.swipe]},[t._t("menu")],2)]:t._e()],2)],1)},a=[]},db83:function(t,e,n){"use strict";n.r(e);var i=n("79ab"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},dcc4:function(t,e,n){"use strict";n.r(e);var i=n("1608"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},dd73:function(t,e,n){"use strict";n.r(e);var i=n("ac6b"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},ddd1:function(t,e,n){var i=n("8024");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("442c9754",i,!0,{sourceMap:!1,shadowMode:!1})},e121:function(t,e,n){"use strict";n.r(e);var i=n("8a66"),r=n("f2d9");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var s,c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=o.exports},f037:function(t,e,n){"use strict";n.r(e);var i=n("4c60"),r=n("db83");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var s,c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=o.exports},f2d9:function(t,e,n){"use strict";n.r(e);var i=n("b98d"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},f652:function(t,e,n){"use strict";var i=n("4ea4");n("a15b"),n("a9e3"),n("b680"),n("acd8"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("3835")),a=n("7395"),s={name:"cl-text",props:{value:[String,Number],type:{type:String,default:"text"},encrypt:{type:Boolean,default:!0},bold:Boolean,block:Boolean,ellipsis:Number,color:{type:String,default:"#444"},size:{type:[String,Number],default:24},precision:{type:Boolean,default:!0},lineThrough:Boolean,underline:Boolean,letterSpacing:{type:[String,Number],default:0},margin:[String,Number,Array],prefixIcon:String,suffixIcon:String,copy:Boolean},computed:{d:function(){if("price"==this.type){var t=parseFloat(this.value||0).toFixed(2).split("."),e=(0,r.default)(t,2),n=e[0],i=e[1],a=void 0===i?"00":i;return this.precision?{value:n,precision:a}:{value:n}}if("phone"==this.type){var s=String(this.value);return{value:this.encrypt?s.substr(0,3)+"****"+s.substr(7):s}}return{value:this.value}},fontSize:function(){return(0,a.parseRpx)(this.size)},classList:function(){var t=[];return this.bold&&t.push("is-bold"),this.block&&t.push("is-block"),this.lineThrough&&t.push("is-line-through"),this.underline&&t.push("is-underline"),this.ellipsis>0&&t.push("is-ellipsis"),this.type&&t.push("is-".concat(this.type)),this.color&&t.push("is-color-".concat(this.color)),this.copy&&t.push("is-copy"),t.join(" ")}},methods:{parseRpx:a.parseRpx,onTap:function(t){this.$emit("click",t),this.$emit("tap",t)}}};e.default=s}}]);