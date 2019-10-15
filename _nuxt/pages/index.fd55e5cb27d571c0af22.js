/*! For license information please see LICENSES */
webpackJsonp([0],{"+ptz":function(t,e,a){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"page"}},[e("welcome-header"),e("features"),e("stats"),e("more-features"),e("extras"),e("page-footer")],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};e.a=n},"/AEk":function(t,e,a){"use strict";e.a={name:"features"}},"/TYz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Ci+z"),n=a("+ptz"),s=a("VU/8")(r.a,n.a,!1,null,null,null);s.options.__file="pages/index.vue",e.default=s.exports},"0fRg":function(t,e,a){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"section welcome"},[e("div",{staticClass:"container"},[e("nav",[e("nuxt-link",{attrs:{to:"/about"}},[this._v("About")]),e("nuxt-link",{attrs:{to:"/publications"}},[this._v("Publications")]),e("a",{attrs:{href:"https://docs.greenhubproject.org"}},[this._v("Docs")]),e("a",{attrs:{href:"https://medium.com/greenhub-blog"}},[this._v("Blog")])],1),this._m(0)])])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half is-offset-half"},[e("div",{staticClass:"welcome__content"},[e("h1",{staticClass:"title"},[this._v("GreenHub")]),e("p",{staticClass:"welcome__lead"},[this._v("A collaborative approach to power consumption analysis of Android devices.")]),e("div",{staticClass:"welcome__hint"},[e("p",[this._v("Download our mobile app!")]),e("h3",[this._v("BatteryHub")])]),e("p",{staticClass:"welcome__info"},[e("a",{staticClass:"welcome__info-google-play",attrs:{href:"https://play.google.com/store/apps/details?id=com.hmatalonga.greenhub"}},[e("img",{staticClass:"img-responsive center-block",attrs:{src:a("T4tk"),alt:"GreenHub Google Play"}})])])]),e("div",{staticClass:"welcome__navigate",attrs:{id:"welcome__scroll-down"}},[e("span",{staticClass:"fa-stack fa-lg"},[e("i",{staticClass:"fa fa-square-o fa-stack-2x"}),e("i",{staticClass:"fa fa-arrow-down fa-stack-1x"})])])])])}];r._withStripped=!0;var s={render:r,staticRenderFns:n};e.a=s},"0lik":function(t,e,a){"use strict";var r=a("G42a"),n=a("0fRg"),s=!1;var o=function(t){s||a("jkql")},i=a("VU/8")(r.a,n.a,!1,o,"data-v-5f3d1552",null);i.options.__file="components/welcome/WelcomeHeader.vue",e.a=i.exports},"1HGy":function(t,e,a){"use strict";var r=a("PLV8"),n=a("k0sJ"),s=!1;var o=function(t){s||a("UYxN")},i=a("VU/8")(r.a,n.a,!1,o,null,null);i.options.__file="components/Logo.vue",e.a=i.exports},"1Yoh":function(t,e){t.exports=function(t){return null!=t&&null!=t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},"21It":function(t,e,a){"use strict";var r=a("FtD3");t.exports=function(t,e,a){var n=a.config.validateStatus;!n||n(a.status)?t(a):e(r("Request failed with status code "+a.status,a.config,null,a.request,a))}},"3ReZ":function(t,e,a){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var n={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section",attrs:{id:"extras"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("h2",{staticClass:"title is-1 is-spaced"},[this._v("Start saving energy today.")]),e("p",[this._v("\n        Discover how can you save energy of your battery's device. Track the data history of your device.\n        GreenHub collects generic data of the device's usage, later it uploads the data to the cloud.\n        Don't worry no private information is collected.\n      ")]),e("p",[this._v("\n        The data is used to make research aiming to improve energy consumption on Android devices.\n        It is available for everybody via API.\n      ")]),e("p",[this._v("\n        Why we make the data open? Very much like the app, a collaborative approach seems the most benefitial and transparent method for the community.\n      ")])])])])}]};e.a=n},"4Ve7":function(t,e,a){t.exports=a.p+"img/extra-screenshot-cropped.9b12c22.png"},"5VQ+":function(t,e,a){"use strict";var r=a("cGG2");t.exports=function(t,e){r.forEach(t,function(a,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=a,delete t[r])})}},"7GwW":function(t,e,a){"use strict";var r=a("cGG2"),n=a("21It"),s=a("DQCr"),o=a("oJlt"),i=a("GHBc"),c=a("FtD3");t.exports=function(t){return new Promise(function(e,u){var l=t.data,f=t.headers;r.isFormData(l)&&delete f["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var p=t.auth.username||"",h=t.auth.password||"";f.Authorization="Basic "+btoa(p+":"+h)}if(d.open(t.method.toUpperCase(),s(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var a="getAllResponseHeaders"in d?o(d.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:a,config:t,request:d};n(e,u,r),d=null}},d.onabort=function(){d&&(u(c("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){u(c("Network Error",t,null,d)),d=null},d.ontimeout=function(){u(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var m=a("p1b6"),v=(t.withCredentials||i(t.url))&&t.xsrfCookieName?m.read(t.xsrfCookieName):void 0;v&&(f[t.xsrfHeaderName]=v)}if("setRequestHeader"in d&&r.forEach(f,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete f[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),u(t),d=null)}),void 0===l&&(l=null),d.send(l)})}},BUuu:function(t,e,a){var r,n;!function(s,o){"use strict";void 0===(n="function"==typeof(r=o)?r.call(e,a,e,t):r)||(t.exports=n)}(0,function(){"use strict";if("object"==typeof window&&void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var t=function(t,e,a,r){return a>r?e:t+(e-t)*function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1}(a/r)},e=function(e,a,r,n){a=a||500;var s=(n=n||window).scrollTop||window.pageYOffset;if("number"==typeof e)var o=parseInt(e);else o=function(t,e){return"HTML"===t.nodeName?-e:t.getBoundingClientRect().top+e}(e,s);var i=Date.now(),c=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,15)},u=function(){var l=Date.now()-i;n!==window?n.scrollTop=t(s,o,l,a):window.scroll(0,t(s,o,l,a)),l>a?"function"==typeof r&&r(e):c(u)};u()},a=function(t){t.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var a=document.getElementById(this.hash.substring(1));a&&e(a,500,function(t){location.replace("#"+t.id)})};return document.addEventListener("DOMContentLoaded",function(){for(var t,e=document.querySelectorAll('a[href^="#"]:not([href="#"])'),r=e.length;t=e[--r];)t.addEventListener("click",a,!1)}),e}})},CUBH:function(t,e,a){"use strict";var r=a("gdRM"),n=a("3ReZ"),s=!1;var o=function(t){s||a("NjRc")},i=a("VU/8")(r.a,n.a,!1,o,"data-v-3ee473cb",null);i.options.__file="components/welcome/Extras.vue",e.a=i.exports},"Ci+z":function(t,e,a){"use strict";var r=a("0lik"),n=a("dLZ2"),s=a("To8+"),o=a("ozR/"),i=a("CUBH"),c=a("WdLo");e.a={components:{WelcomeHeader:r.a,Stats:n.a,Features:s.a,MoreFeatures:o.a,Extras:i.a,PageFooter:c.a}}},D8Xn:function(t,e,a){"use strict";var r=a("mtWM"),n=a.n(r),s=a("ViqS"),o=a.n(s);e.a={name:"stats",data:function(){return{url:this.sanitizeUrl("api/v1/public/count/"),devices:"0",uploads:"0"}},mounted:function(){1},methods:{sanitizeUrl:function(t){var e="https://farmer.greenhubproject.org";return"/"===e.substring(-1)?e+t:e+"/"+t},getData:function(){var t=this;n.a.get(this.url+"devices",{timeout:8e3}).then(function(e){t.devices=o()(e.data).format("0.0a")}).catch(function(t){return console.log(t)}),n.a.get(this.url+"samples",{timeout:2e4}).then(function(e){t.uploads=o()(e.data).format("0.0a")}).catch(function(t){return console.log(t)})}}}},DQCr:function(t,e,a){"use strict";var r=a("cGG2");function n(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,a){if(!e)return t;var s;if(a)s=a(e);else if(r.isURLSearchParams(e))s=e.toString();else{var o=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),o.push(n(e)+"="+n(t))}))}),s=o.join("&")}if(s){var i=t.indexOf("#");-1!==i&&(t=t.slice(0,i)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}},DUeU:function(t,e,a){"use strict";var r=a("cGG2");t.exports=function(t,e){e=e||{};var a={};return r.forEach(["url","method","params","data"],function(t){void 0!==e[t]&&(a[t]=e[t])}),r.forEach(["headers","auth","proxy"],function(n){r.isObject(e[n])?a[n]=r.deepMerge(t[n],e[n]):void 0!==e[n]?a[n]=e[n]:r.isObject(t[n])?a[n]=r.deepMerge(t[n]):void 0!==t[n]&&(a[n]=t[n])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){void 0!==e[r]?a[r]=e[r]:void 0!==t[r]&&(a[r]=t[r])}),a}},FtD3:function(t,e,a){"use strict";var r=a("t8qj");t.exports=function(t,e,a,n,s){var o=new Error(t);return r(o,e,a,n,s)}},G42a:function(t,e,a){"use strict";var r=a("BUuu"),n=a.n(r);e.a={mounted:function(){this.$el.querySelector("#welcome__scroll-down").addEventListener("click",function(t){t.preventDefault(),n()(document.querySelector("#features"),800)})}}},GHBc:function(t,e,a){"use strict";var r=a("cGG2");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");function n(t){var r=t;return e&&(a.setAttribute("href",r),r=a.href),a.setAttribute("href",r),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}return t=n(window.location.href),function(e){var a=r.isString(e)?n(e):e;return a.protocol===t.protocol&&a.host===t.host}}():function(){return!0}},"HZ/J":function(t,e,a){var r=a("kxFB");(t.exports=a("FZ+f")(!1)).push([t.i,"body[data-v-3ee473cb],p[data-v-3ee473cb]{font-family:Muli,sans-serif}h1[data-v-3ee473cb],h2[data-v-3ee473cb],h3[data-v-3ee473cb]{font-family:Lato,sans-serif}#extras[data-v-3ee473cb]{padding:250px 0;background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.45)),to(rgba(0,0,0,.45))),url("+r(a("UQnr"))+") no-repeat scroll 50%/cover transparent;background:linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url("+r(a("UQnr"))+") no-repeat scroll 50%/cover transparent;color:#fff}#extras .title[data-v-3ee473cb]{color:#fff}#extras p[data-v-3ee473cb]{font-size:19.2px;font-size:1.2rem;color:#fff}",""])},"JP+z":function(t,e,a){"use strict";t.exports=function(t,e){return function(){for(var a=new Array(arguments.length),r=0;r<a.length;r++)a[r]=arguments[r];return t.apply(e,a)}}},KCLY:function(t,e,a){"use strict";(function(e){var r=a("cGG2"),n=a("5VQ+"),s={"Content-Type":"application/x-www-form-urlencoded"};function o(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var i={adapter:function(){var t;return void 0!==e&&"[object process]"===Object.prototype.toString.call(e)?t=a("7GwW"):"undefined"!=typeof XMLHttpRequest&&(t=a("7GwW")),t}(),transformRequest:[function(t,e){return n(e,"Accept"),n(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(o(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(o(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(t){i.headers[t]={}}),r.forEach(["post","put","patch"],function(t){i.headers[t]=r.merge(s)}),t.exports=i}).call(e,a("W2nU"))},N0kA:function(t,e,a){"use strict";var r=a("1HGy");e.a={name:"page-footer",components:{Logo:r.a}}},NjRc:function(t,e,a){var r=a("HZ/J");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("560e0d38",r,!1,{sourceMap:!1})},PLV8:function(t,e,a){"use strict";e.a={name:"logo",props:["margin"]}},RhNW:function(t,e,a){var r=a("Vie1");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("cb932050",r,!1,{sourceMap:!1})},T4tk:function(t,e,a){t.exports=a.p+"img/en_badge_web_generic.db9b21a.png"},TNV1:function(t,e,a){"use strict";var r=a("cGG2");t.exports=function(t,e,a){return r.forEach(a,function(a){t=a(t,e)}),t}},"To8+":function(t,e,a){"use strict";var r=a("/AEk"),n=a("sd+i"),s=!1;var o=function(t){s||a("aDTF")},i=a("VU/8")(r.a,n.a,!1,o,"data-v-5fa618a5",null);i.options.__file="components/welcome/Features.vue",e.a=i.exports},UQnr:function(t,e,a){t.exports=a.p+"img/backdrop-about.8391685.jpg"},UYxN:function(t,e,a){var r=a("dHWB");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("41793fdc",r,!1,{sourceMap:!1})},Vie1:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"body[data-v-524eaecc],p[data-v-524eaecc]{font-family:Muli,sans-serif}h1[data-v-524eaecc],h2[data-v-524eaecc],h3[data-v-524eaecc]{font-family:Lato,sans-serif}#more-features[data-v-524eaecc]{padding-bottom:0;background:-webkit-gradient(linear,left top,left bottom,from(#a300aa),to(#5a005d));background:linear-gradient(180deg,#a300aa,#5a005d)}#more-features .image[data-v-524eaecc]{max-width:500px;margin-left:auto;margin-right:auto}#more-features .title[data-v-524eaecc]{margin-top:100px;color:#fff}#more-features p[data-v-524eaecc]{font-size:19.2px;font-size:1.2rem;color:#fff}",""])},WdLo:function(t,e,a){"use strict";var r=a("N0kA"),n=a("Ydjt"),s=!1;var o=function(t){s||a("yseR")},i=a("VU/8")(r.a,n.a,!1,o,"data-v-90a428b6",null);i.options.__file="components/PageFooter.vue",e.a=i.exports},XmWM:function(t,e,a){"use strict";var r=a("cGG2"),n=a("DQCr"),s=a("fuGk"),o=a("xLtR"),i=a("DUeU");function c(t){this.defaults=t,this.interceptors={request:new s,response:new s}}c.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=i(this.defaults,t)).method=t.method?t.method.toLowerCase():"get";var e=[o,void 0],a=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)a=a.then(e.shift(),e.shift());return a},c.prototype.getUri=function(t){return t=i(this.defaults,t),n(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(t){c.prototype[t]=function(e,a){return this.request(r.merge(a||{},{method:t,url:e}))}}),r.forEach(["post","put","patch"],function(t){c.prototype[t]=function(e,a,n){return this.request(r.merge(n||{},{method:t,url:e,data:a}))}}),t.exports=c},Ydjt:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[t._m(0),t._m(1),a("div",{staticClass:"column is-3"},[a("aside",{staticClass:"menu"},[a("p",{staticClass:"menu-label"},[t._v("\n            More\n          ")]),a("ul",{staticClass:"menu-list"},[t._m(2),a("li",[a("nuxt-link",{attrs:{to:"/privacy"}},[t._v("Privacy Policy")])],1),t._m(3)])])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("logo",{attrs:{margin:"true"}},[a("p",{staticClass:"love",attrs:{slot:"love"},slot:"love"},[t._v("Made with ♥ in Portugal")]),a("p",{staticClass:"copyright",attrs:{slot:"copyright"},slot:"copyright"},[t._v("2018 GreenHub")])])],1)])])])};r._withStripped=!0;var n={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-3 is-offset-2"},[e("aside",{staticClass:"menu"},[e("p",{staticClass:"menu-label"},[this._v("\n            Docs\n          ")]),e("ul",{staticClass:"menu-list"},[e("li",[e("a",{attrs:{href:"https://docs.greenhubproject.org"}},[this._v("Introduction")])]),e("li",[e("a",{attrs:{href:"https://docs.greenhubproject.org/api-reference/"}},[this._v("API")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-3"},[e("aside",{staticClass:"menu"},[e("p",{staticClass:"menu-label"},[this._v("\n            Ecosystem\n          ")]),e("ul",{staticClass:"menu-list"},[e("li",[e("a",{attrs:{href:"https://github.com/greenhub-project/batteryhub"}},[this._v("GreenHub BatteryHub")])]),e("li",[e("a",{attrs:{href:"https://github.com/greenhub-project/farmer"}},[this._v("GreenHub Farmer")])]),e("li",[e("a",{attrs:{href:"https://github.com/greenhub-project/lumberjack"}},[this._v("GreenHub Lumberjack")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://greenhub-group.slack.com/"}},[this._v("Slack")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"http://greenlab.di.uminho.pt/"}},[this._v("Green Software Lab")])])}]};e.a=n},aDTF:function(t,e,a){var r=a("xKF5");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("72112cbd",r,!1,{sourceMap:!1})},aio0:function(t,e,a){"use strict";e.a={name:"more-features"}},cGG2:function(t,e,a){"use strict";var r=a("JP+z"),n=a("1Yoh"),s=Object.prototype.toString;function o(t){return"[object Array]"===s.call(t)}function i(t){return null!==t&&"object"==typeof t}function c(t){return"[object Function]"===s.call(t)}function u(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),o(t))for(var a=0,r=t.length;a<r;a++)e.call(null,t[a],a,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}t.exports={isArray:o,isArrayBuffer:function(t){return"[object ArrayBuffer]"===s.call(t)},isBuffer:n,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:i,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===s.call(t)},isFile:function(t){return"[object File]"===s.call(t)},isBlob:function(t){return"[object Blob]"===s.call(t)},isFunction:c,isStream:function(t){return i(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function t(){var e={};function a(a,r){"object"==typeof e[r]&&"object"==typeof a?e[r]=t(e[r],a):e[r]=a}for(var r=0,n=arguments.length;r<n;r++)u(arguments[r],a);return e},deepMerge:function t(){var e={};function a(a,r){"object"==typeof e[r]&&"object"==typeof a?e[r]=t(e[r],a):e[r]="object"==typeof a?t({},a):a}for(var r=0,n=arguments.length;r<n;r++)u(arguments[r],a);return e},extend:function(t,e,a){return u(e,function(e,n){t[n]=a&&"function"==typeof e?r(e,a):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},cWxy:function(t,e,a){"use strict";var r=a("dVOP");function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var a=this;t(function(t){a.reason||(a.reason=new r(t),e(a.reason))})}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t;return{token:new n(function(e){t=e}),cancel:t}},t.exports=n},dHWB:function(t,e,a){(e=t.exports=a("FZ+f")(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat);",""]),e.push([t.i,".title--logo{font-size:28.8px;font-size:1.8rem;font-family:Montserrat,sans-serif;color:#222}.title--logo span{color:#4a0}.has-margin{margin-top:32px;margin-top:2rem}.title{margin-bottom:16px;margin-bottom:1rem}.love{margin-bottom:32px;margin-bottom:2rem;font-size:12px;font-size:.75rem;color:#999}.copyright{font-size:12.8px;font-size:.8rem;color:#666}",""])},dIwP:function(t,e,a){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dLZ2:function(t,e,a){"use strict";var r=a("D8Xn"),n=a("k4UN"),s=a("VU/8")(r.a,n.a,!1,null,null,null);s.options.__file="components/welcome/Stats.vue",e.a=s.exports},dVOP:function(t,e,a){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},fuGk:function(t,e,a){"use strict";var r=a("cGG2");function n(){this.handlers=[]}n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},gG9S:function(t,e,a){var r=a("kxFB");(t.exports=a("FZ+f")(!1)).push([t.i,"body[data-v-5f3d1552],p[data-v-5f3d1552]{font-family:Muli,sans-serif}h1[data-v-5f3d1552],h2[data-v-5f3d1552],h3[data-v-5f3d1552]{font-family:Lato,sans-serif}.welcome[data-v-5f3d1552]{min-height:100vh;text-align:center;background:url("+r(a("xh//"))+") no-repeat scroll 50%/cover transparent}.welcome nav a[data-v-5f3d1552]{font-size:19.2px;font-size:1.2rem;font-weight:700;color:#fff}.welcome nav a[data-v-5f3d1552]:hover{text-decoration:underline}.welcome nav a[data-v-5f3d1552]:nth-child(2n){margin:0 2vw}.welcome .welcome__content[data-v-5f3d1552]{margin-top:160px;color:#fff}.welcome .welcome__content .title[data-v-5f3d1552]{font-family:Montserrat,sans-serif;font-size:64px;font-size:4rem;font-weight:300;color:#fff}.welcome .welcome__content .welcome__lead[data-v-5f3d1552]{margin-top:20px;font-size:25.6px;font-size:1.6rem;color:#fff}.welcome .welcome__content .welcome__hint[data-v-5f3d1552]{margin-top:40px}.welcome .welcome__content .welcome__hint p[data-v-5f3d1552]{font-size:22.4px;font-size:1.4rem;text-decoration:underline}.welcome .welcome__content .welcome__hint h3[data-v-5f3d1552]{margin-top:15px;font-family:Montserrat,sans-serif;font-size:32px;font-size:2rem;color:#fff}.welcome .welcome__content .welcome__info[data-v-5f3d1552]{margin:20px auto 70px}.welcome .welcome__content .welcome__info .welcome__info-google-play>img[data-v-5f3d1552]{width:auto;height:100px}.welcome .welcome__content .welcome__version[data-v-5f3d1552]{padding:15px 45px;letter-spacing:2px;text-transform:uppercase;border:1px solid #fff;border-radius:300px;font-size:11px;font-weight:700;color:#fff}.welcome .welcome__navigate[data-v-5f3d1552]{position:relative;top:25vh;margin-left:auto;margin-right:auto;color:#fff}.welcome .welcome__navigate[data-v-5f3d1552]:hover{cursor:pointer}",""])},gdRM:function(t,e,a){"use strict";e.a={name:"extras"}},jkql:function(t,e,a){var r=a("gG9S");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("86c4ffa6",r,!1,{sourceMap:!1})},k0sJ:function(t,e,a){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"has-text-centered",class:{"has-margin":this.margin}},[this._m(0),this._t("love"),this._t("copyright")],2)};r._withStripped=!0;var n={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"title--logo"},[e("span",[this._v("Green")]),this._v("Hub")])}]};e.a=n},k4UN:function(t,e,a){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var n={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-dark",attrs:{id:"stats"}},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"level is-mobile"},[e("div",{staticClass:"level-item has-text-centered"},[e("div",[e("p",{staticClass:"heading"},[this._v("Devices installs")]),e("p",{staticClass:"title"},[this._v("~109k")])])]),e("div",{staticClass:"level-item has-text-centered"},[e("div",[e("p",{staticClass:"heading"},[this._v("Uploads received")]),e("p",{staticClass:"title"},[this._v("~28M")])])])])])])])}]};e.a=n},lpHQ:function(t,e,a){t.exports=a.p+"img/home-screenshot.b4bf434.png"},mhpt:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".content p[data-v-90a428b6]{padding:25px 0;font-size:small}",""])},mtWM:function(t,e,a){t.exports=a("tIFN")},oJlt:function(t,e,a){"use strict";var r=a("cGG2"),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,a,s,o={};return t?(r.forEach(t.split("\n"),function(t){if(s=t.indexOf(":"),e=r.trim(t.substr(0,s)).toLowerCase(),a=r.trim(t.substr(s+1)),e){if(o[e]&&n.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([a]):o[e]?o[e]+", "+a:a}}),o):o}},"ozR/":function(t,e,a){"use strict";var r=a("aio0"),n=a("zXqc"),s=!1;var o=function(t){s||a("RhNW")},i=a("VU/8")(r.a,n.a,!1,o,"data-v-524eaecc",null);i.options.__file="components/welcome/MoreFeatures.vue",e.a=i.exports},p1b6:function(t,e,a){"use strict";var r=a("cGG2");t.exports=r.isStandardBrowserEnv()?{write:function(t,e,a,n,s,o){var i=[];i.push(t+"="+encodeURIComponent(e)),r.isNumber(a)&&i.push("expires="+new Date(a).toGMTString()),r.isString(n)&&i.push("path="+n),r.isString(s)&&i.push("domain="+s),!0===o&&i.push("secure"),document.cookie=i.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},pBtG:function(t,e,a){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},pxG4:function(t,e,a){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},qRfI:function(t,e,a){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},"sd+i":function(t,e,a){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section",attrs:{id:"features"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("div",{staticClass:"features__title has-text-centered"},[r("h2",{staticClass:"title is-1 is-spaced"},[t._v("Battery monitor and much more")]),r("p",{staticClass:"subtitle is-6"},[t._v("Discover all the details about your device's power consumption")]),r("hr")])])]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-4"},[r("div",{staticClass:"features__device",attrs:{id:"features-device"}},[r("img",{staticClass:"image",attrs:{src:a("lpHQ"),alt:"GreenHub"}})])]),r("div",{staticClass:"column is-8"},[r("div",{staticClass:"container is-fluid"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-6"},[r("div",{staticClass:"features__item"},[r("i",{staticClass:"fa fa-battery-three-quarters",attrs:{"aria-hidden":"true"}}),r("h3",{staticClass:"title is-3"},[t._v("Power consumption")]),r("p",{staticClass:"subtitle is-6"},[t._v("Find out how your battery's device is behaving")])])]),r("div",{staticClass:"column is-6"},[r("div",{staticClass:"features__item"},[r("i",{staticClass:"fa fa-bell-o",attrs:{"aria-hidden":"true"}}),r("h3",{staticClass:"title is-3"},[t._v("Battery alerts")]),r("p",{staticClass:"subtitle is-6"},[t._v("Get real-time notifications about the battery level, temperature and charging")])])])]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-6"},[r("div",{staticClass:"features__item"},[r("i",{staticClass:"fa fa-cube",attrs:{"aria-hidden":"true"}}),r("h3",{staticClass:"title is-3"},[t._v("API")]),r("p",{staticClass:"subtitle is-6"},[t._v("\n                  Get more information from the community and compare the data"),r("br"),r("span",{staticClass:"tag is-success"},[t._v("Available now")])])])]),r("div",{staticClass:"column is-6"},[r("div",{staticClass:"features__item"},[r("i",{staticClass:"fa fa-unlock-alt",attrs:{"aria-hidden":"true"}}),r("h3",{staticClass:"title is-3"},[t._v("Open source")]),r("p",{staticClass:"subtitle is-6"},[t._v("The source code is available on GitHub")])])])])])])])])])}];r._withStripped=!0;var s={render:r,staticRenderFns:n};e.a=s},t8qj:function(t,e,a){"use strict";t.exports=function(t,e,a,r,n){return t.config=e,a&&(t.code=a),t.request=r,t.response=n,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},tIFN:function(t,e,a){"use strict";var r=a("cGG2"),n=a("JP+z"),s=a("XmWM"),o=a("DUeU");function i(t){var e=new s(t),a=n(s.prototype.request,e);return r.extend(a,s.prototype,e),r.extend(a,e),a}var c=i(a("KCLY"));c.Axios=s,c.create=function(t){return i(o(c.defaults,t))},c.Cancel=a("dVOP"),c.CancelToken=a("cWxy"),c.isCancel=a("pBtG"),c.all=function(t){return Promise.all(t)},c.spread=a("pxG4"),t.exports=c,t.exports.default=c},xKF5:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"body[data-v-5fa618a5],p[data-v-5fa618a5]{font-family:Muli,sans-serif}h1[data-v-5fa618a5],h2[data-v-5fa618a5],h3[data-v-5fa618a5]{font-family:Lato,sans-serif}.section[data-v-5fa618a5]{padding:100px 0}#features .subtitle[data-v-5fa618a5]{color:#666}#features .features__title[data-v-5fa618a5]{margin-bottom:100px}#features .features__title hr[data-v-5fa618a5]{max-width:100px;margin:25px auto 0;border-width:1px;border-color:rgba(34,34,34,.1)}#features .image[data-v-5fa618a5]{display:block;max-width:85%;margin-left:auto;margin-right:auto}#features .features__item[data-v-5fa618a5]{margin-bottom:70px;text-align:center}#features .features__item .title[data-v-5fa618a5]{margin-bottom:35px}#features .features__item .fa[data-v-5fa618a5]{margin:10px 0;font-size:80px;background:-webkit-gradient(linear,right top,left top,from(#4a0),to(#255d00));background:linear-gradient(270deg,#4a0,#255d00);-webkit-background-clip:text;-webkit-text-fill-color:transparent}#features .features__item .tag[data-v-5fa618a5]{margin-top:10px}",""])},xLtR:function(t,e,a){"use strict";var r=a("cGG2"),n=a("TNV1"),s=a("pBtG"),o=a("KCLY"),i=a("dIwP"),c=a("qRfI");function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return u(t),t.baseURL&&!i(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=n(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||o.adapter)(t).then(function(e){return u(t),e.data=n(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(u(t),e&&e.response&&(e.response.data=n(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},"xh//":function(t,e,a){t.exports=a.p+"img/backdrop.1fe7fdf.jpg"},yseR:function(t,e,a){var r=a("mhpt");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("7bafd3f9",r,!1,{sourceMap:!1})},zXqc:function(t,e,a){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section",attrs:{id:"more-features"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("img",{staticClass:"image block",attrs:{src:a("4Ve7"),alt:"GreenHub"}})]),e("div",{staticClass:"column"},[e("div",{staticClass:"content"},[e("h2",{staticClass:"title is-1 is-spaced"},[this._v("More features")]),e("p",[this._v("BatteryHub helps you keep track of your device info, providing details on the wifi, bluetooth, memory, storage, etc.")]),e("p",[this._v("Easily visualize the data history of your battery levels, with interactive charts!")])])])])])])}];r._withStripped=!0;var s={render:r,staticRenderFns:n};e.a=s}});