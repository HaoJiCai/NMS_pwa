(function(){"use strict";var e={9662:function(e,t,n){var r=n(614),o=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(o(e)+" is not a function")}},9670:function(e,t,n){var r=n(111),o=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(o(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),s=n(6244),i=function(e){return function(t,n,i){var a,c=r(t),u=s(c),l=o(i,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},3658:function(e,t,n){var r=n(9781),o=n(3157),s=TypeError,i=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(o(e)&&!i(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),s=r("".slice);e.exports=function(e){return s(o(e),8,-1)}},648:function(e,t,n){var r=n(1694),o=n(614),s=n(4326),i=n(5112),a=i("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"==(r=s(t))&&o(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),o=n(3887),s=n(1236),i=n(3070);e.exports=function(e,t,n){for(var a=o(t),c=i.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8880:function(e,t,n){var r=n(9781),o=n(3070),s=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){var r=n(6339),o=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},8052:function(e,t,n){var r=n(614),o=n(3070),s=n(6339),i=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:i(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),o=n(111),s=r.document,i=o(s)&&o(s.createElement);e.exports=function(e){return i?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,o,s=n(7854),i=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&i&&(r=i.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),o=n(1236).f,s=n(8880),i=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,f,p,d,g=e.target,y=e.global,v=e.stat;if(l=y?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in t){if(p=t[h],e.dontCallGetSet?(d=o(l,h),f=d&&d.value):f=l[h],n=u(y?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(e.sham||f&&f.sham)&&s(p,"sham",!0),i(l,h,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),s=Function.prototype,i=r&&Object.getOwnPropertyDescriptor,a=o(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&i(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,s=o.call,i=r&&o.bind.bind(s,s);e.exports=r?i:function(e){return function(){return s.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614),s=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),o=n(8554);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(o(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),o=n(7293),s=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),o=n(7293),s=n(4326),i=Object,a=r("".split);e.exports=o((function(){return!i("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):i(e)}:i},2788:function(e,t,n){var r=n(1702),o=n(614),s=n(5465),i=r(Function.toString);o(s.inspectSource)||(s.inspectSource=function(e){return i(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,o,s,i=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),f=n(6200),p=n(3501),d="Object already initialized",g=a.TypeError,y=a.WeakMap,v=function(e){return s(e)?o(e):r(e,{})},w=function(e){return function(t){var n;if(!c(t)||(n=o(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(i||h.state){var m=h.state||(h.state=new y);m.get=m.get,m.has=m.has,m.set=m.set,r=function(e,t){if(m.has(e))throw g(d);return t.facade=e,m.set(e,t),t},o=function(e){return m.get(e)||{}},s=function(e){return m.has(e)}}else{var b=f("state");p[b]=!0,r=function(e,t){if(l(e,b))throw g(d);return t.facade=e,u(e,b,t),t},o=function(e){return l(e,b)?e[b]:{}},s=function(e){return l(e,b)}}e.exports={set:r,get:o,has:s,enforce:v,getterFor:w}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),o=n(614),s=/#|\.prototype\./,i=function(e,t){var n=c[a(e)];return n==l||n!=u&&(o(t)?r(t):!!t)},a=i.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",l=i.POLYFILL="P";e.exports=i},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),o=n(4154),s=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),o=n(614),s=n(7976),i=n(3307),a=Object;e.exports=i?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),o=n(7293),s=n(614),i=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,f=l.get,p=String,d=Object.defineProperty,g=r("".slice),y=r("".replace),v=r([].join),w=a&&!o((function(){return 8!==d((function(){}),"length",{value:8}).length})),m=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===g(p(t),0,7)&&(t="["+y(p(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!i(e,"name")||c&&e.name!==t)&&(a?d(e,"name",{value:t,configurable:!0}):e.name=t),w&&n&&i(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?a&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=h(e);return i(r,"source")||(r.source=v(m,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return s(this)&&f(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},3070:function(e,t,n){var r=n(9781),o=n(4664),s=n(3353),i=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",p="writable";t.f=r?s?function(e,t,n){if(i(e),t=a(t),i(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=l(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(i(e),t=a(t),i(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),s=n(5296),i=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return i(!o(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748),s=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),s=n(5656),i=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&c(l,n);while(t.length>u)o(r,n=t[u++])&&(~i(l,n)||c(l,n));return l}},5296:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var r=n(6916),o=n(614),s=n(111),i=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&o(n=e.toString)&&!s(a=r(n,e)))return a;if(o(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&o(n=e.toString)&&!s(a=r(n,e)))return a;throw i("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),s=n(8006),i=n(5181),a=n(9670),c=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=i.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),o=TypeError;e.exports=function(e){if(r(e))throw o("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),o=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3072),s="__core-js_shared__",i=r[s]||o(s,{});e.exports=i},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),o=n(7293),s=n(7854),i=s.String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!i(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),o=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},7593:function(e,t,n){var r=n(6916),o=n(111),s=n(2190),i=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!o(e)||s(e))return e;var n,c=i(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!o(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),o=r("toStringTag"),s={};s[o]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(648),o=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,s=Math.random(),i=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+i(++o+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},4811:function(e,t,n){var r=n(7854),o=n(614),s=r.WeakMap;e.exports=o(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),o=n(2309),s=n(2597),i=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=o("wks"),h=c?u["for"]||u:u&&u.withoutSetter||i;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},7658:function(e,t,n){var r=n(2109),o=n(7908),s=n(6244),i=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=o(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return i(t,n),n}})},6229:function(e,t,n){var r=n(8052),o=n(1702),s=n(1340),i=n(8053),a=URLSearchParams,c=a.prototype,u=o(c.append),l=o(c["delete"]),h=o(c.forEach),f=o([].push),p=new a("a=1&a=2&b=3");p["delete"]("a",1),p["delete"]("b",void 0),p+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];h(this,(function(e,t){f(r,{key:t,value:e})})),i(t,1);var o,a=s(e),c=s(n),p=0,d=0,g=!1,y=r.length;while(p<y)o=r[p++],g||o.key===a?(g=!0,l(this,o.key)):d++;while(d<y)o=r[d++],o.key===a&&o.value===c||u(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},7330:function(e,t,n){var r=n(8052),o=n(1702),s=n(1340),i=n(8053),a=URLSearchParams,c=a.prototype,u=o(c.getAll),l=o(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);i(t,1);var o=s(n),a=0;while(a<r.length)if(r[a++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},2062:function(e,t,n){var r=n(9781),o=n(1702),s=n(7045),i=URLSearchParams.prototype,a=o(i.forEach);r&&!("size"in i)&&s(i,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},4764:function(){try{self["workbox:core:7.0.0"]&&_()}catch(e){}},4523:function(){try{self["workbox:precaching:7.0.0"]&&_()}catch(e){}},134:function(){try{self["workbox:routing:7.0.0"]&&_()}catch(e){}},294:function(){try{self["workbox:strategies:7.0.0"]&&_()}catch(e){}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}!function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}();!function(){n(7658),n(6229),n(7330),n(2062),n(4764);const e=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n},t=e;class r extends Error{constructor(e,n){const r=t(e,n);super(r),this.name=e,this.details=n}}const o={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},s=e=>[o.prefix,e,o.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>{for(const t of Object.keys(o))e(t)},a={updateDetails:e=>{i((t=>{"string"===typeof e[t]&&(o[t]=e[t])}))},getGoogleAnalyticsName:e=>e||s(o.googleAnalytics),getPrecacheName:e=>e||s(o.precache),getPrefix:()=>o.prefix,getRuntimeName:e=>e||s(o.runtime),getSuffix:()=>o.suffix};function c(e,t){const n=t();return e.waitUntil(n),n}n(4523);const u="__WB_REVISION__";function l(e){if(!e)throw new r("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new r("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const o=new URL(n,location.href),s=new URL(n,location.href);return o.searchParams.set(u,t),{cacheKey:o.href,url:s.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;n?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return n}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const n=(null===t||void 0===t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return n?new Request(n,{headers:e.headers}):e},this._precacheController=e}}let p;function d(){if(void 0===p){const t=new Response("");if("body"in t)try{new Response(t.body),p=!0}catch(e){p=!1}p=!1}return p}async function g(e,t){let n=null;if(e.url){const t=new URL(e.url);n=t.origin}if(n!==self.location.origin)throw new r("cross-origin-copy-response",{origin:n});const o=e.clone(),s={headers:new Headers(o.headers),status:o.status,statusText:o.statusText},i=t?t(s):s,a=d()?o.body:await o.blob();return new Response(a,i)}const y=e=>{const t=new URL(String(e),location.href);return t.href.replace(new RegExp(`^${location.origin}`),"")};function v(e,t){const n=new URL(e);for(const r of t)n.searchParams.delete(r);return n.href}async function w(e,t,n,r){const o=v(t.url,n);if(t.url===o)return e.match(t,r);const s=Object.assign(Object.assign({},r),{ignoreSearch:!0}),i=await e.keys(t,s);for(const a of i){const t=v(a.url,n);if(o===t)return e.match(a,r)}}class m{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const b=new Set;async function x(){for(const e of b)await e()}function _(e){return new Promise((t=>setTimeout(t,e)))}n(294);function R(e){return"string"===typeof e?new Request(e):e}class C{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new m,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=R(e);if("navigate"===n.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const o=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:t})}catch(i){if(i instanceof Error)throw new r("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const s=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const n of this.iterateCallbacks("fetchDidSucceed"))e=await n({event:t,request:s,response:e});return e}catch(a){throw o&&await this.runCallbacks("fetchDidFail",{error:a,event:t,originalRequest:o.clone(),request:s.clone()}),a}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=R(e);let n;const{cacheName:r,matchOptions:o}=this._strategy,s=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},o),{cacheName:r});n=await caches.match(s,i);for(const a of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await a({cacheName:r,matchOptions:o,cachedResponse:n,request:s,event:this.event})||void 0;return n}async cachePut(e,t){const n=R(e);await _(0);const o=await this.getCacheKey(n,"write");if(!t)throw new r("cache-put-with-no-response",{url:y(o.url)});const s=await this._ensureResponseSafeToCache(t);if(!s)return!1;const{cacheName:i,matchOptions:a}=this._strategy,c=await self.caches.open(i),u=this.hasCallback("cacheDidUpdate"),l=u?await w(c,o.clone(),["__WB_REVISION__"],a):null;try{await c.put(o,u?s.clone():s)}catch(h){if(h instanceof Error)throw"QuotaExceededError"===h.name&&await x(),h}for(const r of this.iterateCallbacks("cacheDidUpdate"))await r({cacheName:i,oldResponse:l,newResponse:s.clone(),request:o,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let r=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=R(await e({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[n]=r}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"===typeof t[e]){const n=this._pluginStateMap.get(t),r=r=>{const o=Object.assign(Object.assign({},r),{state:n});return t[e](o)};yield r}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;while(e=this._extendLifetimePromises.shift())await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const r of this.iterateCallbacks("cacheWillUpdate"))if(t=await r({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&200!==t.status&&(t=void 0),t}}class S{constructor(e={}){this.cacheName=a.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n="string"===typeof e.request?new Request(e.request):e.request,r="params"in e?e.params:void 0,o=new C(this,{event:t,request:n,params:r}),s=this._getResponse(o,n,t),i=this._awaitComplete(s,o,n,t);return[s,i]}async _getResponse(e,t,n){let o;await e.runCallbacks("handlerWillStart",{event:n,request:t});try{if(o=await this._handle(t,e),!o||"error"===o.type)throw new r("no-response",{url:t.url})}catch(s){if(s instanceof Error)for(const r of e.iterateCallbacks("handlerDidError"))if(o=await r({error:s,event:n,request:t}),o)break;if(!o)throw s}for(const r of e.iterateCallbacks("handlerWillRespond"))o=await r({event:n,request:t,response:o});return o}async _awaitComplete(e,t,n,r){let o,s;try{o=await e}catch(s){}try{await t.runCallbacks("handlerDidRespond",{event:r,request:n,response:o}),await t.doneWaiting()}catch(i){i instanceof Error&&(s=i)}if(await t.runCallbacks("handlerDidComplete",{event:r,request:n,response:o,error:s}),t.destroy(),s)throw s}}class O extends S{constructor(e={}){e.cacheName=a.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(O.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const n=await t.cacheMatch(e);return n||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;const o=t.params||{};if(!this._fallbackToNetwork)throw new r("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const r=o.integrity,s=e.integrity,i=!s||s===r;if(n=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?s||r:void 0})),r&&i&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,n.clone());0}}return n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e),o=await t.cachePut(e,n.clone());if(!o)throw new r("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,r]of this.plugins.entries())r!==O.copyRedirectedCacheableResponsesPlugin&&(r===O.defaultPrecacheCacheabilityPlugin&&(e=n),r.cacheWillUpdate&&t++);0===t?this.plugins.push(O.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}O.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:e}){return!e||e.status>=400?null:e}},O.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:e}){return e.redirected?await g(e):e}};class P{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new O({cacheName:a.getPrecacheName(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){"string"===typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:o}=l(n),s="string"!==typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(o)&&this._urlsToCacheKeys.get(o)!==e)throw new r("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(o),secondEntry:e});if("string"!==typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new r("add-to-cache-list-conflicting-integrities",{url:o});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(o,e),this._urlsToCacheModes.set(o,s),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[o,s]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(o),r=new Request(o,{integrity:t,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:n,notUpdatedURLs:r}=t;return{updatedURLs:n,notUpdatedURLs:r}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),r=[];for(const o of t)n.has(o.url)||(await e.delete(o),r.push(o.url));return{deletedURLs:r}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){const e=await self.caches.open(this.strategy.cacheName);return e.match(n)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new r("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params=Object.assign({cacheKey:t},n.params),this.strategy.handle(n))}}let T;const L=()=>(T||(T=new P),T);n(134);const k="GET",U=e=>e&&"object"===typeof e?e:{handle:e};class j{constructor(e,t,n=k){this.handler=U(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=U(e)}}class q extends j{constructor(e,t,n){const r=({url:t})=>{const n=e.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)};super(r,t,n)}}class E{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const n=Promise.all(t.urlsToCache.map((t=>{"string"===typeof t&&(t=[t]);const n=new Request(...t);return this.handleRequest({request:n,event:e})})));e.waitUntil(n),e.ports&&e.ports[0]&&n.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const r=n.origin===location.origin,{params:o,route:s}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:n});let i=s&&s.handler;const a=e.method;if(!i&&this._defaultHandlerMap.has(a)&&(i=this._defaultHandlerMap.get(a)),!i)return void 0;let c;try{c=i.handle({url:n,request:e,event:t,params:o})}catch(l){c=Promise.reject(l)}const u=s&&s.catchHandler;return c instanceof Promise&&(this._catchHandler||u)&&(c=c.catch((async r=>{if(u){0;try{return await u.handle({url:n,request:e,event:t,params:o})}catch(s){s instanceof Error&&(r=s)}}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw r}))),c}findMatchingRoute({url:e,sameOrigin:t,request:n,event:r}){const o=this._routes.get(n.method)||[];for(const s of o){let o;const i=s.match({url:e,sameOrigin:t,request:n,event:r});if(i)return o=i,(Array.isArray(o)&&0===o.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"===typeof i)&&(o=void 0),{route:s,params:o}}return{}}setDefaultHandler(e,t=k){this._defaultHandlerMap.set(t,U(e))}setCatchHandler(e){this._catchHandler=U(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new r("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new r("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let N;const K=()=>(N||(N=new E,N.addFetchListener(),N.addCacheListener()),N);function M(e,t,n){let o;if("string"===typeof e){const r=new URL(e,location.href);0;const s=({url:e})=>e.href===r.href;o=new j(s,t,n)}else if(e instanceof RegExp)o=new q(e,t,n);else if("function"===typeof e)o=new j(e,t,n);else{if(!(e instanceof j))throw new r("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});o=e}const s=K();return s.registerRoute(o),o}function A(e,t=[]){for(const n of[...e.searchParams.keys()])t.some((e=>e.test(n)))&&e.searchParams.delete(n);return e}function*I(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:n="index.html",cleanURLs:r=!0,urlManipulation:o}={}){const s=new URL(e,location.href);s.hash="",yield s.href;const i=A(s,t);if(yield i.href,n&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=n,yield e.href}if(r){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(o){const e=o({url:s});for(const t of e)yield t.href}}class D extends j{constructor(e,t){const n=({request:n})=>{const r=e.getURLsToCacheKeys();for(const o of I(n.url,t)){const t=r.get(o);if(t){const n=e.getIntegrityForCacheKey(t);return{cacheKey:t,integrity:n}}}};super(n,e.strategy)}}function W(e){const t=L(),n=new D(t,e);M(n)}function F(e){const t=L();t.precache(e)}function H(e,t){F(e),W(t)}function z(e){a.updateDetails(e)}const B={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class $ extends S{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(B),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const n=[];const o=[];let s;if(this._networkTimeoutSeconds){const{id:r,promise:i}=this._getTimeoutPromise({request:e,logs:n,handler:t});s=r,o.push(i)}const i=this._getNetworkPromise({timeoutId:s,request:e,logs:n,handler:t});o.push(i);const a=await t.waitUntil((async()=>await t.waitUntil(Promise.race(o))||await i)());if(!a)throw new r("no-response",{url:e.url});return a}_getTimeoutPromise({request:e,logs:t,handler:n}){let r;const o=new Promise((t=>{const o=async()=>{t(await n.cacheMatch(e))};r=setTimeout(o,1e3*this._networkTimeoutSeconds)}));return{promise:o,id:r}}async _getNetworkPromise({timeoutId:e,request:t,logs:n,handler:r}){let o,s;try{s=await r.fetchAndCachePut(t)}catch(i){i instanceof Error&&(o=i)}return e&&clearTimeout(e),!o&&s||(s=await r.cacheMatch(t)),s}}const G=[{'revision':null,'url':'/NMS_pwa/css/113.ff6897d7.css'},{'revision':null,'url':'/NMS_pwa/css/138.a5911aed.css'},{'revision':null,'url':'/NMS_pwa/css/18.257a9e69.css'},{'revision':null,'url':'/NMS_pwa/css/190.46359eaa.css'},{'revision':null,'url':'/NMS_pwa/css/227.aee135b4.css'},{'revision':null,'url':'/NMS_pwa/css/262.8e7cf238.css'},{'revision':null,'url':'/NMS_pwa/css/324.d51fd8ba.css'},{'revision':null,'url':'/NMS_pwa/css/421.19087e5d.css'},{'revision':null,'url':'/NMS_pwa/css/474.8af91905.css'},{'revision':null,'url':'/NMS_pwa/css/70.78b9dc1e.css'},{'revision':null,'url':'/NMS_pwa/css/792.04dc7a85.css'},{'revision':null,'url':'/NMS_pwa/css/987.60d97b64.css'},{'revision':null,'url':'/NMS_pwa/css/app.a71c4925.css'},{'revision':null,'url':'/NMS_pwa/css/chunk-vendors.bb80b243.css'},{'revision':null,'url':'/NMS_pwa/fonts/bootstrap-icons.02685dab.woff2'},{'revision':null,'url':'/NMS_pwa/fonts/bootstrap-icons.8463cb1e.woff'},{'revision':null,'url':'/NMS_pwa/img/login_background.03bbcca9.jpg'},{'revision':'2a3e70c946570b1103553296b0350a69','url':'/NMS_pwa/index.html'},{'revision':null,'url':'/NMS_pwa/js/113.10011eb4.js'},{'revision':null,'url':'/NMS_pwa/js/138.487e1ecb.js'},{'revision':null,'url':'/NMS_pwa/js/18.8dedd7bb.js'},{'revision':null,'url':'/NMS_pwa/js/190.c19934c3.js'},{'revision':null,'url':'/NMS_pwa/js/227.547f4ef4.js'},{'revision':null,'url':'/NMS_pwa/js/262.c9a1e36d.js'},{'revision':null,'url':'/NMS_pwa/js/324.d099fa02.js'},{'revision':null,'url':'/NMS_pwa/js/349.aa3b6c83.js'},{'revision':null,'url':'/NMS_pwa/js/421.4a92acf6.js'},{'revision':null,'url':'/NMS_pwa/js/456.c88f2e93.js'},{'revision':null,'url':'/NMS_pwa/js/474.9b586266.js'},{'revision':null,'url':'/NMS_pwa/js/70.78dd1d14.js'},{'revision':null,'url':'/NMS_pwa/js/792.fa0f269e.js'},{'revision':null,'url':'/NMS_pwa/js/987.a4ee4465.js'},{'revision':null,'url':'/NMS_pwa/js/app.0e6389ee.js'},{'revision':null,'url':'/NMS_pwa/js/chunk-vendors.a47a0e1e.js'},{'revision':'2f28cb575b65bfa022d4d7d180ba71e0','url':'/NMS_pwa/manifest.json'},{'revision':'735ab4f94fbcd57074377afca324c813','url':'/NMS_pwa/robots.txt'}],V=["/","/index.html","/css/app.[hash].css","/css/chunk-vendors.[hash].css","/js/app.[hash].js","/js/chunk-vendors.[hash].js"];z({prefix:"medical-pwa",suffix:"v1.0.0"}),self.addEventListener("install",(e=>{e.waitUntil(caches.open("my-cache").then((e=>e.addAll(V))),self.skipWaiting())})),self.addEventListener("activate",(e=>{e.waitUntil(self.clientsClaim())})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((t=>t||fetch(e.request))))})),M(/.*experiments\?.*/,new $),M(/.*experiments\/\d/,new $),M(/.*experiment_types.*/,new $),H(G)}()})();
//# sourceMappingURL=service-worker.js.map