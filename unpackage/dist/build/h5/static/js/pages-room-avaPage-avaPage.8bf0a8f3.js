(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-room-avaPage-avaPage"],{1971:function(t,e,r){"use strict";r.r(e);var n=r("dbcb"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"1a29":function(t,e,r){"use strict";r.r(e);var n=r("8b82"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,i,o,a){try{var u=t[o](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function u(t){n(a,i,o,u,c,"next",t)}function c(t){n(a,i,o,u,c,"throw",t)}u(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"35cf":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,".myAvatar[data-v-93ccc172]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%;height:50%\r\n\t/* background-color: #0066CC; */}",""]),t.exports=e},"38df":function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var n={clDivider:r("fb64").default,clUpload:r("d316").default},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("v-uni-view",{staticClass:"myAvatar"},[r("cl-divider",[t._v("当前头像")]),r("v-uni-image",{staticStyle:{"margin-top":"5%","margin-bottom":"5%",width:"200px",height:"200px"},attrs:{src:t.src+"?key="+t.time,mode:"aspectFill"}}),r("cl-divider",[t._v("上传新头像")]),r("cl-upload",{attrs:{action:"http://localhost:8082/user/uploadAvatar/2"},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.imgOnSuccess()}},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1)],1)},o=[]},"3fa2":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"cl-loading",class:["cl-loading--"+t.theme],style:{height:t.size+"px",width:t.size+"px"}},["spin"==t.theme?t._l(2,(function(e){return r("v-uni-view",{key:e,staticClass:"cl-loading__spin"},[r("v-uni-text",{staticClass:"cl-loading__spin-item",style:[t.spinStyle,{top:0,left:"calc(50% - "+t.rw+"px)"}]}),r("v-uni-text",{staticClass:"cl-loading__spin-item",style:[t.spinStyle,{top:"calc(50% - "+t.rh+"px)",right:t.rh-t.rw+"px",transform:"rotate(90deg)"}]}),r("v-uni-text",{staticClass:"cl-loading__spin-item",style:[t.spinStyle,{left:"calc(50% - "+t.rw+"px)",bottom:0}]}),r("v-uni-text",{staticClass:"cl-loading__spin-item",style:[t.spinStyle,{left:t.rh-t.rw+"px",top:"calc(50% - "+t.rh+"px)",transform:"rotate(90deg)"}]})],1)})):r("v-uni-view",{staticClass:"cl-loading__inner",style:{color:t.color,borderColor:t.borderColor,borderWidth:t.borderWidth,"border-bottom":t.borderWidth+" solid currentColor"}})],2)},o=[]},5227:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{myId:"1",src:"http://localhost:8082/avatar/ava2.jpeg",url:"",refresh:"true",time:""}},methods:{imgOnSuccess:function(){this.time=Math.round(100*Math.random())}},onLoad:function(t){}};e.default=n},"66b9":function(t,e,r){"use strict";var n=r("a06a"),i=r.n(n);i.a},"773a":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r("7395"),i={computed:{$form:function(){return n.getParent.call(this,"ClForm",["labelWidth","labelPosition","showMessage","model","validateOnValueChange","disabled"])},isDisabled:function(){return this.$form&&this.$form.disabled||this.disabled}}};e.default=i},"871f":function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var n={clLoadingMask:r("97e0").default},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"cl-upload-list",class:[t.classList]},[r("cl-loading-mask",{attrs:{loading:t.loading,text:"上传图片中"}}),t._l(t.urls,(function(e,n){return r("v-uni-view",{key:n,staticClass:"cl-upload",style:{height:t.size[0],width:t.size[1]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choose(n)}}},[r("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:e,expression:"url"}],staticClass:"cl-upload__target",attrs:{src:t._f("format")(e),mode:t.imageMode}}),r("v-uni-text",{staticClass:"cl-upload__remove cl-icon-delete-fill",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.remove(n)}}})],1)})),t.isAppend?r("v-uni-view",{staticClass:"cl-upload",style:{height:t.size[0],width:t.size[1]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choose()}}},[r("v-uni-text",{staticClass:"cl-upload__add cl-icon-plus"})],1):t._e()],2)},o=[]},"8a78":function(t,e,r){"use strict";r("a15b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"cl-loading-mask",props:{text:String,loading:Boolean,loadingTheme:String,fullscreen:Boolean,color:String,background:{type:String,default:"rgba(255, 255, 255, 0.7)"}},computed:{classList:function(){var t=[];return this.fullscreen&&t.push("cl-loading-mask--fixed"),this.loading&&t.push("is-show"),t.join(" ")}}};e.default=n},"8b82":function(t,e,r){"use strict";var n=r("4ea4");r("4de4"),r("4160"),r("a15b"),r("a434"),r("a9e3"),r("ac1f"),r("5319"),r("1276"),r("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var i=n(r("1da1")),o=r("7395"),a=n(r("773a")),u={name:"cl-upload",props:{value:[String,Array],sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},size:{type:Array,default:function(){return["200rpx","200rpx"]}},imageMode:{type:String,default:"aspectFill"},multiple:Boolean,limit:{type:Number,default:9},action:String,headers:Object,data:Object,name:{type:String,default:"file"},beforeUpload:{type:Function},disabled:Boolean,test:{type:Boolean,default:!1},autoUpload:{type:Boolean,default:!0}},mixins:[a.default],data:function(){return{loading:!1,urls:[],index:void 0}},filters:{format:function(t){return t.replace(/\\/g,"")}},watch:{value:{immediate:!0,handler:function(t){this.urls=(0,o.isArray)(t)?t:(0,o.isString)(t)?t.split(",").filter(Boolean):[]}},urls:function(t){var e=this.multiple?t:t[0];this.$emit("input",e),this.$emit("change",e)}},computed:{isAppend:function(){return this.urls.length<(this.multiple?this.limit:1)},classList:function(){var t=[];return this.isDisabled&&t.push("is-disabled"),t.join(" ")}},methods:{choose:function(t){var e=this;if(this.isDisabled)return!1;this.index=t;var r=void 0===this.index?this.limit-this.urls.length:1;if(r<=0)return this.$emit("exceed",this.urls),!1;uni.chooseImage({count:r,sizeType:this.sizeType,sourceType:this.sourceType,success:function(r){r.tempFiles.forEach(function(){var r=(0,i.default)(regeneratorRuntime.mark((function r(n){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.loading=!0,!e.beforeUpload){r.next=8;break}return r.next=4,e.beforeUpload(n,t);case 4:if(i=r.sent,!1!==i){r.next=8;break}return e.done(),r.abrupt("return");case 8:if(!e.test){r.next=12;break}return e.update(n.path),e.done(),r.abrupt("return");case 12:e.autoUpload?uni.uploadFile({url:e.action,filePath:n.path,name:e.name,header:e.headers,formData:e.data,success:function(t){var r=JSON.parse(t.data),n=r.data;e.update(n),e.$emit("success",n)},fail:function(t){e.$emit("error",t)},complete:function(){e.done()}}):e.$emit("custom-upload",n);case 13:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())}})},update:function(t){void 0!==this.index?this.urls[this.index]=t:this.urls.push(t),this.done()},remove:function(t){if(this.disabled)return!1;this.urls.splice(t,1),this.$emit("remove",t)},done:function(){this.loading=!1}}};e.default=u},"8c0c":function(t,e,r){"use strict";r.r(e);var n=r("38df"),i=r("c75b");for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);r("66b9");var a,u=r("f0c5"),c=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"93ccc172",null,!1,n["a"],a);e["default"]=c.exports},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",l="object"===typeof t,s=e.regeneratorRuntime;if(s)l&&(t.exports=s);else{s=e.regeneratorRuntime=l?t.exports:{},s.wrap=w;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={},m={};m[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(M([])));y&&y!==n&&i.call(y,a)&&(m=y);var b=L.prototype=_.prototype=Object.create(m);k.prototype=b.constructor=L,L.constructor=k,L[c]=k.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},s.awrap=function(t){return{__await:t}},C(E.prototype),E.prototype[u]=function(){return this},s.AsyncIterator=E,s.async=function(t,e,r,n){var i=new E(w(t,e,r,n));return s.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},C(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},s.values=M,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return u.type="throw",u.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(t,e,r,n){var i=e&&e.prototype instanceof _?e:_,o=Object.create(i.prototype),a=new $(n||[]);return o._invoke=S(t,r,a),o}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function _(){}function k(){}function L(){}function C(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(r,n,o,a){var u=x(t[r],t,n);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"===typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(l).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,a)}))}a(u.arg)}var r;function n(t,n){function i(){return new Promise((function(r,i){e(t,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=n}function S(t,e,r){var n=f;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return A()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var u=j(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function M(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"97e0":function(t,e,r){"use strict";r.r(e);var n=r("c916"),i=r("980e");for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);var a,u=r("f0c5"),c=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=c.exports},"980e":function(t,e,r){"use strict";r.r(e);var n=r("8a78"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},a06a:function(t,e,r){var n=r("35cf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f06").default;i("56627237",n,!0,{sourceMap:!1,shadowMode:!1})},c75b:function(t,e,r){"use strict";r.r(e);var n=r("5227"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},c916:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var n={clLoading:r("e082").default},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"cl-loading-mask__wrap"},[r("v-uni-view",{staticClass:"cl-loading-mask",class:[t.classList],style:{background:t.background,color:t.color}},[t.loading?r("v-uni-view",{staticClass:"cl-loading-mask__content"},[r("cl-loading",{attrs:{color:t.color,"loading-theme":t.loadingTheme}}),t.text?r("v-uni-text",{staticClass:"cl-loading-mask__text"},[t._v(t._s(t.text))]):t._e()],1):t._e()],1),t._t("default")],2)},o=[]},d316:function(t,e,r){"use strict";r.r(e);var n=r("871f"),i=r("1a29");for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);var a,u=r("f0c5"),c=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=c.exports},dbcb:function(t,e,r){"use strict";r("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"cl-loading",props:{color:String,borderColor:{type:String,default:"rgba(0, 0, 0, 0.1)"},borderWidth:{type:String,default:"4rpx"},theme:{type:String,default:"default"},size:{type:Number,default:25}},computed:{rh:function(){return this.size/8},rw:function(){return this.size/20},spinStyle:function(){return{height:2*this.rh+"px",width:2*this.rw+"px",color:this.color}}}};e.default=n},ddee:function(t,e,r){"use strict";r.r(e);var n=r("e3c1"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},e082:function(t,e,r){"use strict";r.r(e);var n=r("3fa2"),i=r("1971");for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);var a,u=r("f0c5"),c=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=c.exports},e3c1:function(t,e,r){"use strict";var n=r("4ea4");r("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(r("3835")),o=r("7395"),a={name:"cl-divider",props:{backgroundColor:{type:String,default:"#fff"},color:{type:[String,Array],default:"#dcdfe6"},width:{type:String,default:"100%"}},computed:{lineColor:function(){if((0,o.isArray)(this.color)){var t=this.color||[],e=(0,i.default)(t,2),r=e[0],n=e[1];return"linear-gradient(to right, ".concat(r,", ").concat(n,", ").concat(n,", ").concat(r,")")}return this.color}}};e.default=a},fb64:function(t,e,r){"use strict";r.r(e);var n=r("fede"),i=r("ddee");for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);var a,u=r("f0c5"),c=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=c.exports},fede:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"cl-divider"},[r("v-uni-view",{staticClass:"cl-divider__line",style:{background:t.lineColor,width:t.width}}),r("v-uni-view",{staticClass:"cl-divider__text",style:{backgroundColor:t.backgroundColor}},[t._t("default")],2)],1)},o=[]}}]);