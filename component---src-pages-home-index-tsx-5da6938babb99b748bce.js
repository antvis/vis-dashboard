(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+K+b":function(t,e,n){var a=n("JHRd");t.exports=function(t){var e=new t.constructor(t.byteLength);return new a(e).set(new a(t)),e}},"+iFO":function(t,e,n){var a=n("dTAl"),r=n("LcsW"),o=n("6sVZ");t.exports=function(t){return"function"!=typeof t.constructor||o(t)?{}:a(r(t))}},"0sn+":function(t){t.exports=JSON.parse('{"demos":[{"filename":"emoji-waffle.ts","pathname":"emoji-waffle","badge":"G2Plot","title":{"zh":"Emoji 华夫饼图","en":"Emoji waffle"},"screenshots":{"default":"https://gw.alipayobjects.com/zos/antfincdn/NtWKQKoKhL/1094*560_emoji.png","dark":"https://gw.alipayobjects.com/zos/antfincdn/5FtDDRwCUD/1094*560_emoji_dark.png"},"author":"visiky","contact":"https://github.com/visiky"},{"filename":"waffle.ts","pathname":"waffle","badge":"G2Plot","title":{"zh":"华夫饼图","en":"Waffle plot"},"screenshots":{"default":"https://gw.alipayobjects.com/zos/antfincdn/SjVzphtAzP/1094*560_waffle_light.png","dark":"https://gw.alipayobjects.com/zos/antfincdn/ZfXL7lMdjc/1094*560_waffle.png"},"author":"visiky","contact":"https://github.com/visiky"},{"filename":"html-tooltip.ts","pathname":"html-tooltip","badge":"G2Plot","tag":["tooltip"],"title":{"zh":"自定义 html Tooltip","en":"Customize html tooltip"},"screenshots":{"default":"https://gw.alipayobjects.com/zos/antfincdn/QyLwg8GGZl/36da41bf-f6b6-4521-803f-5aee9d0da3a9.png","dark":"https://gw.alipayobjects.com/zos/antfincdn/QyLwg8GGZl/36da41bf-f6b6-4521-803f-5aee9d0da3a9.png"},"author":"visiky","contact":"https://github.com/visiky"},{"filename":"pizza.ts","pathname":"pizza","badge":"G2","title":{"zh":"披萨图","en":"Pizza plot"},"screenshots":{"default":"https://gw.alipayobjects.com/zos/antfincdn/XkR%24pj1Uwm/pizza-image.png","dark":"https://gw.alipayobjects.com/zos/antfincdn/XkR%24pj1Uwm/pizza-image.png"},"author":"visiky","contact":"https://github.com/visiky"}],"third":[{"name":"Infographic for AntV * D2","image":"https://gw.alipayobjects.com/zos/antfincdn/7dd0yeVnOZ/d2.png","url":"https://visiky.github.io/d2-infographic","badge":"G2Plot","author":"visiky","contact":"https://github.com/visiky"},{"name":"Statistical Process Control Chart","image":"https://mds-1303228113.cos.ap-chongqing.myqcloud.com/imgs/20210515123655.png","url":"https://spc-dangojs.vercel.app","badge":"BizCharts","author":"Jared Wang","contact":"https://github.com/joriewong"}]}')},"1+5i":function(t,e,n){var a=n("w/wX"),r=n("sEf8"),o=n("mdPL"),c=o&&o.isSet,i=c?r(c):a;t.exports=i},"4Oe1":function(t,e,n){var a=n("YO3V");t.exports=function(t){return a(t)?void 0:t}},"5Tg0":function(t,e,n){(function(t){var a=n("Kz5y"),r=e&&!e.nodeType&&e,o=r&&"object"==typeof t&&t&&!t.nodeType&&t,c=o&&o.exports===r?a.Buffer:void 0,i=c?c.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,a=i?i(n):new t.constructor(n);return t.copy(a),a}}).call(this,n("YuTi")(t))},"7Ix3":function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},"Dw+G":function(t,e,n){var a=n("juv8"),r=n("mTTR");t.exports=function(t,e){return t&&a(e,r(e),t)}},EEGq:function(t,e,n){var a=n("juv8"),r=n("oCl/");t.exports=function(t,e){return a(t,r(t),e)}},FCkD:function(t,e,n){"use strict";n.r(e);var a=n("KQm4"),r=n("Puqe"),o=n.n(r),c=n("q1tI"),i=n.n(c),s=n("N5vR"),u=(n("cIOH"),n("PQMj"),n("KrTs")),l=n("1iNE"),f=n.n(l),p=n("Wbzz"),d=(n("IcWi"),"undefined"!=typeof document),m=function(t){var e=t.dashboards,n=t.charts,a=t.thirdPartyCharts,r=function(t){t&&Object(p.navigate)("../"+t)},o=Object(c.useState)(),s=o[0],l=o[1];Object(c.useEffect)((function(){l(d?document.body.dataset.theme:""),new MutationObserver((function(t){var e=t[0];"BODY"===e.target.nodeName&&"data-theme"===e.attributeName&&l(d?document.body.dataset.theme:"")})).observe(document.body,{attributes:!0})}),[]);var m=function(t,e){return t?i.a.createElement("span",{className:"dashboard-author",onClick:function(){return t=e,void("undefined"!=typeof window&&window.open(t,"blank"));var t}},"❤️ Made by ",i.a.createElement("span",null,t)):null};return i.a.createElement("div",{className:"home-page"},i.a.createElement("div",{className:"dashboard-container"},e.map((function(t,e){var n=t.image,a=t.name,o=t.path,c=t.darkImage;return i.a.createElement("div",{className:"dashboard-item "+(o?"":"disable"),style:{backgroundImage:"url("+("dark"===s&&c||n)+")"},key:""+e,onClick:function(){return r(o)}},i.a.createElement("span",{className:"dashboard-description"},i.a.createElement("span",null,a)))}))),f()(n)?i.a.createElement("div",null,i.a.createElement("h2",null,"Gallery"),i.a.createElement("div",{className:"dashboard-container"},n.map((function(t,e){var n=t.image,a=t.name,o=t.path,c=t.darkImage,l=t.badge,f=t.author,p=t.contact;return i.a.createElement(u.a.Ribbon,{text:l||"Other"},i.a.createElement("div",{className:"dashboard-item "+(o?"":"disable"),style:{backgroundImage:"url("+("dark"===s&&c||n)+")"},key:""+e,onClick:function(){return r(o)}},i.a.createElement("span",{className:"dashboard-description"},i.a.createElement("span",null,a))),i.a.createElement("div",null,m(f,p)))})))):null,f()(a)?i.a.createElement("div",null,i.a.createElement("h2",null,"Third party charts"),i.a.createElement("div",{className:"dashboard-container"},a.map((function(t,e){var n=t.image,a=t.name,r=t.url,o=t.badge,c=t.author,s=t.contact;return i.a.createElement(u.a.Ribbon,{text:o||"Other"},i.a.createElement("div",{className:"dashboard-item",style:{backgroundImage:"url("+n+")"},key:""+e,onClick:function(){return function(t){"undefined"!=typeof window&&window.open(t)}(r)}},i.a.createElement("span",{className:"dashboard-description"},i.a.createElement("span",null,a))),i.a.createElement("div",null,m(c,s)))})))):null)},b=n("0sn+");e.default=function(){var t=b.demos.map((function(t){return Object.assign({},o()(t,["screenshots","title","pathname"]),{image:t.screenshots.default,darkImage:t.screenshots.dark,name:t.title.zh,path:"gallery/"+t.pathname})})),e=Object(a.a)(b.third);return i.a.createElement(s.a,{siteTitle:"可视化精选集"},i.a.createElement(m,{dashboards:[{image:"https://gw.alipayobjects.com/zos/antfincdn/BPnCLgmtzC/1096*560_light.png",darkImage:"https://gw.alipayobjects.com/zos/antfincdn/0GDWIEjbkO/1094*560.png",name:"C 端场景",path:"dashboard-a"},{image:"https://gw.alipayobjects.com/zos/antfincdn/n%268Jqw3vKF/1096*560_light.png",darkImage:"https://gw.alipayobjects.com/zos/antfincdn/YI%241xJfKMf/2094*560.png",name:"监控场景",path:"monitor-template"},{image:"https://gw.alipayobjects.com/zos/antfincdn/wuk2prOsEL/placeholder.png",name:"建设中",path:null},{image:"https://gw.alipayobjects.com/zos/antfincdn/wuk2prOsEL/placeholder.png",name:"建设中",path:null}],charts:t,thirdPartyCharts:e}))}},G6z8:function(t,e,n){var a=n("fR/l"),r=n("oCl/"),o=n("mTTR");t.exports=function(t){return a(t,o,r)}},Gi0A:function(t,e,n){var a=n("QqLw"),r=n("ExA7");t.exports=function(t){return r(t)&&"[object Map]"==a(t)}},IcWi:function(t,e,n){},LcsW:function(t,e,n){var a=n("kekF")(Object.getPrototypeOf,Object);t.exports=a},OBhP:function(t,e,n){var a=n("fmRc"),r=n("gFfm"),o=n("MrPd"),c=n("WwFo"),i=n("Dw+G"),s=n("5Tg0"),u=n("Q1l4"),l=n("VOtZ"),f=n("EEGq"),p=n("qZTm"),d=n("G6z8"),m=n("QqLw"),b=n("yHx3"),h=n("wrZu"),g=n("+iFO"),v=n("Z0cm"),j=n("DSRE"),y=n("zEVN"),w=n("GoyQ"),x=n("1+5i"),k=n("7GkX"),E=n("mTTR"),O={};O["[object Arguments]"]=O["[object Array]"]=O["[object ArrayBuffer]"]=O["[object DataView]"]=O["[object Boolean]"]=O["[object Date]"]=O["[object Float32Array]"]=O["[object Float64Array]"]=O["[object Int8Array]"]=O["[object Int16Array]"]=O["[object Int32Array]"]=O["[object Map]"]=O["[object Number]"]=O["[object Object]"]=O["[object RegExp]"]=O["[object Set]"]=O["[object String]"]=O["[object Symbol]"]=O["[object Uint8Array]"]=O["[object Uint8ClampedArray]"]=O["[object Uint16Array]"]=O["[object Uint32Array]"]=!0,O["[object Error]"]=O["[object Function]"]=O["[object WeakMap]"]=!1,t.exports=function t(e,n,z,A,P,G){var I,N=1&n,T=2&n,C=4&n;if(z&&(I=P?z(e,A,P,G):z(e)),void 0!==I)return I;if(!w(e))return e;var F=v(e);if(F){if(I=b(e),!N)return u(e,I)}else{var S=m(e),L="[object Function]"==S||"[object GeneratorFunction]"==S;if(j(e))return s(e,N);if("[object Object]"==S||"[object Arguments]"==S||L&&!P){if(I=T||L?{}:g(e),!N)return T?f(e,i(I,e)):l(e,c(I,e))}else{if(!O[S])return P?e:{};I=h(e,S,N)}}G||(G=new a);var R=G.get(e);if(R)return R;G.set(e,I),x(e)?e.forEach((function(a){I.add(t(a,n,z,a,e,G))})):y(e)&&e.forEach((function(a,r){I.set(r,t(a,n,z,r,e,G))}));var M=F?void 0:(C?T?d:p:T?E:k)(e);return r(M||e,(function(a,r){M&&(a=e[r=a]),o(I,r,t(a,n,z,r,e,G))})),I}},PQMj:function(t,e,n){},Puqe:function(t,e,n){var a=n("eUgh"),r=n("OBhP"),o=n("S7Xf"),c=n("4uTw"),i=n("juv8"),s=n("4Oe1"),u=n("xs/l"),l=n("G6z8"),f=u((function(t,e){var n={};if(null==t)return n;var u=!1;e=a(e,(function(e){return e=c(e,t),u||(u=e.length>1),e})),i(t,l(t),n),u&&(n=r(n,7,s));for(var f=e.length;f--;)o(n,e[f]);return n}));t.exports=f},QcOe:function(t,e,n){var a=n("GoyQ"),r=n("6sVZ"),o=n("7Ix3"),c=Object.prototype.hasOwnProperty;t.exports=function(t){if(!a(t))return o(t);var e=r(t),n=[];for(var i in t)("constructor"!=i||!e&&c.call(t,i))&&n.push(i);return n}},RBan:function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},S7Xf:function(t,e,n){var a=n("4uTw"),r=n("RBan"),o=n("gpbi"),c=n("9Nap");t.exports=function(t,e){return e=a(e,t),null==(t=o(t,e))||delete t[c(r(e))]}},VOtZ:function(t,e,n){var a=n("juv8"),r=n("MvSz");t.exports=function(t,e){return a(t,r(t),e)}},WwFo:function(t,e,n){var a=n("juv8"),r=n("7GkX");t.exports=function(t,e){return t&&a(e,r(e),t)}},XYm9:function(t,e,n){var a=n("+K+b");t.exports=function(t,e){var n=e?a(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}},YO3V:function(t,e,n){var a=n("NykK"),r=n("LcsW"),o=n("ExA7"),c=Function.prototype,i=Object.prototype,s=c.toString,u=i.hasOwnProperty,l=s.call(Object);t.exports=function(t){if(!o(t)||"[object Object]"!=a(t))return!1;var e=r(t);if(null===e)return!0;var n=u.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==l}},b2z7:function(t,e){var n=/\w*$/;t.exports=function(t){var e=new t.constructor(t.source,n.exec(t));return e.lastIndex=t.lastIndex,e}},gFfm:function(t,e){t.exports=function(t,e){for(var n=-1,a=null==t?0:t.length;++n<a&&!1!==e(t[n],n,t););return t}},gpbi:function(t,e,n){var a=n("ZWtO"),r=n("KxBF");t.exports=function(t,e){return e.length<2?t:a(t,r(e,0,-1))}},mTTR:function(t,e,n){var a=n("b80T"),r=n("QcOe"),o=n("MMmD");t.exports=function(t){return o(t)?a(t,!0):r(t)}},"oCl/":function(t,e,n){var a=n("CH3K"),r=n("LcsW"),o=n("MvSz"),c=n("0ycA"),i=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)a(e,o(t)),t=r(t);return e}:c;t.exports=i},"otv/":function(t,e,n){var a=n("nmnc"),r=a?a.prototype:void 0,o=r?r.valueOf:void 0;t.exports=function(t){return o?Object(o.call(t)):{}}},"w/wX":function(t,e,n){var a=n("QqLw"),r=n("ExA7");t.exports=function(t){return r(t)&&"[object Set]"==a(t)}},wrZu:function(t,e,n){var a=n("+K+b"),r=n("XYm9"),o=n("b2z7"),c=n("otv/"),i=n("yP5f");t.exports=function(t,e,n){var s=t.constructor;switch(e){case"[object ArrayBuffer]":return a(t);case"[object Boolean]":case"[object Date]":return new s(+t);case"[object DataView]":return r(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return i(t,n);case"[object Map]":return new s;case"[object Number]":case"[object String]":return new s(t);case"[object RegExp]":return o(t);case"[object Set]":return new s;case"[object Symbol]":return c(t)}}},yHx3:function(t,e){var n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,a=new t.constructor(e);return e&&"string"==typeof t[0]&&n.call(t,"index")&&(a.index=t.index,a.input=t.input),a}},yP5f:function(t,e,n){var a=n("+K+b");t.exports=function(t,e){var n=e?a(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},zEVN:function(t,e,n){var a=n("Gi0A"),r=n("sEf8"),o=n("mdPL"),c=o&&o.isMap,i=c?r(c):a;t.exports=i}}]);
//# sourceMappingURL=component---src-pages-home-index-tsx-5da6938babb99b748bce.js.map