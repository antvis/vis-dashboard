(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"B+Cb":function(e,t,n){e.exports={tryItPage:"try-it-page-module--try-it-page--AED_Y",playgroundResultWrapper:"try-it-page-module--playground-result-wrapper--37t7V"}},CXN3:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return V}));var r=n("zLVn"),a=n("q1tI"),o=n.n(a),c=n("N5vR"),i=(n("cIOH"),n("hgVy"),n("MoRW")),s=n("sEfC"),l=n.n(s),u=n("Wbzz"),d=n("wx14"),f=n("JX7q"),h=n("dI71"),m=n("TOwV"),p=n("2mql"),v=n.n(p);function g(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var y=o.a.createContext();var b={initialChunks:{}};var E=function(e){return e};function w(e){var t=e.defaultResolveComponent,n=void 0===t?E:t,a=e.render,c=e.onLoad;function i(e,t){void 0===t&&(t={});var i=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),s={};function l(e){return t.cacheKey?t.cacheKey(e):i.resolve?i.resolve(e):"static"}function u(e,r,a){var o=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!Object(m.isValidElementType)(o))throw new Error("resolveComponent returned something that is not a React component!");return v()(a,o,{preload:!0}),o}var p,E=function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:l(n)},g(!n.__chunkExtractor||i.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(i.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(i.chunkName(n))),Object(f.a)(r)):(!1!==t.ssr&&(i.isReady&&i.isReady(n)||i.chunkName&&b.initialChunks[i.chunkName(n)])&&r.loadSync(),r)}Object(h.a)(n,e),n.getDerivedStateFromProps=function(e,t){var n=l(e);return Object(d.a)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var o=n.prototype;return o.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.getCacheKey=function(){return l(this.props)},o.getCache=function(){return s[this.getCacheKey()]},o.setCache=function(e){void 0===e&&(e=void 0),s[this.getCacheKey()]=e},o.triggerOnLoad=function(){var e=this;c&&setTimeout((function(){c(e.state.result,e.props)}))},o.loadSync=function(){if(this.state.loading)try{var e=u(i.requireSync(this.props),this.props,C);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:i.resolve(this.props),chunkName:i.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},o.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=u(t,e.props,{Loadable:C});e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},o.resolveAsync=function(){var e=this,t=this.props,n=(t.__chunkExtractor,t.forwardedRef,Object(r.a)(t,["__chunkExtractor","forwardedRef"])),a=this.getCache();return a||((a=i.requireAsync(n)).status="PENDING",this.setCache(a),a.then((function(){a.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:i.resolve(e.props),chunkName:i.chunkName(e.props),error:t?t.message:t}),a.status="REJECTED"}))),a},o.render=function(){var e=this.props,n=e.forwardedRef,o=e.fallback,c=(e.__chunkExtractor,Object(r.a)(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,s=i.error,l=i.loading,u=i.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(s)throw s;var f=o||t.fallback||null;return l?f:a({fallback:f,result:u,options:t,props:Object(d.a)({},c,{ref:n})})},n}(o.a.Component),w=(p=E,function(e){return o.a.createElement(y.Consumer,null,(function(t){return o.a.createElement(p,Object.assign({__chunkExtractor:t},e))}))}),C=o.a.forwardRef((function(e,t){return o.a.createElement(w,Object.assign({forwardedRef:t},e))}));return C.preload=function(e){i.requireAsync(e)},C.load=function(e){return i.requireAsync(e)},C}return{loadable:i,lazy:function(e,t){return i(e,Object(d.a)({},t,{suspense:!0}))}}}var C=w({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return o.a.createElement(t,n)}}),N=C.loadable,O=C.lazy,k=w({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),R=k.loadable,x=k.lazy;var S=N;S.lib=R,O.lib=x;var j=S,_=n("PlLG"),L=n("u3os"),T=n("B+Cb"),A=n.n(T),z=j((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"gL5p"))})),D=function(e){var t=e.source,n=Object(u.useStaticQuery)("2870822922").site.siteMetadata.extraLib,r=void 0===n?"":n,c=Object(a.useRef)(),s=Object(a.useRef)(),d=Object(a.useState)(),f=d[0],h=d[1],m=Object(a.useState)(""),p=m[0],v=m[1],g=Object(a.useState)(),y=g[0],b=g[1],E=Object(a.useState)(null),w=E[0],C=E[1];"undefined"!=typeof window&&(window.__reportErrorInPlayGround=function(e){console.error("report error:",e),C(e)}),Object(a.useEffect)((function(){var e,t=c.current;return t&&(e=Object(L.bind)(t,(function(){var e;h(null==c||null===(e=c.current)||void 0===e?void 0:e.getBoundingClientRect().height)}))),function(){e&&e()}}),[c]),Object(a.useEffect)((function(){v(t)}),[t]),Object(a.useEffect)((function(){try{var e=Object(_.transform)(p,{filename:"",presets:["react","typescript","es2015","stage-3"],plugins:["transform-modules-umd"]}).code;b(e)}catch(t){return console.error("e",t),void C(t)}C(null)}),[p]);var N=l()((function(e,t){t.innerHTML="";var n=document.createElement("div");n.setAttribute("id","container"),n.setAttribute("style","width:100%;height:100%;"),t.appendChild(n);var r=document.createElement("script");r.innerHTML="\n        try {\n          "+e+"\n        } catch(e) {\n          if (window.__reportErrorInPlayGround) {\n            window.__reportErrorInPlayGround(e);\n          }\n        }\n      ",t.appendChild(r)}),500);Object(a.useEffect)((function(){y&&s&&s.current&&N(y,s.current)}),[y,w]);return o.a.createElement("div",{className:A.a.tryItPage,ref:c},w?o.a.createElement(i.a,{status:"error",title:"There are some errors of code."}):o.a.createElement("div",{ref:s,className:A.a.playgroundResultWrapper,style:{height:f+"px"}}),o.a.createElement(z,{language:"javascript",theme:"vs",value:p,options:{selectOnLineNumbers:!0,scrollBeyondLastLine:!1,fixedOverflowWidgets:!0,lineNumbersMinChars:4,tabSize:2,showFoldingControls:"always",foldingHighlight:!0},onChange:function(e){return v(e)},height:f,editorWillMount:function(e){e.languages.typescript.javascriptDefaults.addExtraLib(r,"")}}))},I=n("OX8s"),M=n.n(I);function V(e){var t=e.pageContext,n=(Object(r.a)(e,["pageContext"]),t.source);return o.a.createElement(c.a,{siteTitle:"Gallery",footerClassName:M.a.footer,themeModeSwitcher:!1},o.a.createElement(D,{source:n}))}},HiXI:function(e,t,n){"use strict";var r=n("I+eb"),a=n("WKiH").end,o=n("yNLB")("trimEnd"),c=o?function(){return a(this)}:"".trimEnd;r({target:"String",proto:!0,forced:o},{trimEnd:c,trimRight:c})},N5vR:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),c=n("TSYQ"),i=n.n(c),s=(n("cIOH"),n("UADf"),n("diRs")),l=(n("czTT"),n("Sdc0")),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},d=n("6VBw"),f=function(e,t){return r.createElement(d.a,Object.assign({},e,{ref:t,icon:u}))};f.displayName="HomeOutlined";var h=r.forwardRef(f),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"filled"},p=function(e,t){return r.createElement(d.a,Object.assign({},e,{ref:t,icon:m}))};p.displayName="GithubFilled";var v=r.forwardRef(p),g="undefined"!=typeof document,y=function(e){var t=e.siteTitle,n=e.githubUrl,r=e.className,c=e.themeModeSwitcher,u=!!g&&"dark"===document.body.dataset.theme;return a.a.createElement("header",{className:i()("site-header",r)},a.a.createElement("div",{className:"site-title"},a.a.createElement("div",{className:"header-actions"},a.a.createElement(h,{onClick:function(){return Object(o.navigate)("/home")},style:{margin:"0 8px 0 4px",fontSize:"16px"}}),a.a.createElement("h1",{style:{margin:0}},t)),a.a.createElement("div",{className:"header-actions"},!1!==c&&a.a.createElement(l.a,{className:"theme-switcher header-action",unCheckedChildren:"日间",checkedChildren:"夜间",defaultChecked:u,onChange:function(e){!g||(document.body.dataset.theme=e?"dark":"light")}}),a.a.createElement(s.a,{content:"客人，来个 star 呗 😉",placement:"topRight",arrowPointAtCenter:!0},a.a.createElement("a",{href:n,className:"header-action",style:{textDecoration:"none"},target:"_blank"},a.a.createElement(v,{className:"github-icon action-link"}))))))},b=function(e){var t=e.contact,n=e.author,r=e.className;return a.a.createElement("footer",{className:r},a.a.createElement("div",{className:""},"Made with ❤️"),a.a.createElement("div",{className:"author"},"by",a.a.createElement("a",{href:t,style:{marginLeft:"4px"},target:"_blank"},n)))},E=n("qhky"),w=function(e){var t=e.description,n=e.lang,r=void 0===n?"":n,o=e.meta,c=void 0===o?[]:o,i=e.title,s=t;return a.a.createElement(E.a,{htmlAttributes:{lang:r},title:i,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:image",content:"https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:i},{name:"twitter:description",content:s},{property:"twitter:image",content:"https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png"}].concat(c)})};w.defaultProps={lang:"zh_CN",meta:[],description:""};var C=w;n("mIGZ"),t.a=function(e){var t=e.children,n=e.siteTitle,r=e.hideSiteTitle,c=e.headerClassName,s=e.mainClassName,l=e.footerClassName,u=e.themeModeSwitcher,d=Object(o.useStaticQuery)("3272957548").site.siteMetadata,f=d.title,h=d.githubUrl,m=d.contact,p=d.author;return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{title:"Vis Dashboard | AntV"}),!r&&a.a.createElement(y,{siteTitle:n||f,githubUrl:h,className:c,themeModeSwitcher:u}),a.a.createElement("main",{className:i()(s)},t),a.a.createElement(b,{author:p,contact:m,className:l}))}},OX8s:function(e,t,n){e.exports={footer:"example-module--footer--B2ohu"}},UADf:function(e,t,n){},UmGo:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="UmGo"},WJkJ:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},WKiH:function(e,t,n){var r=n("HYAF"),a="["+n("WJkJ")+"]",o=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),i=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:i(1),end:i(2),trim:i(3)}},cIOH:function(e,t,n){},czTT:function(e,t,n){},hgVy:function(e,t,n){},mIGZ:function(e,t,n){},yNLB:function(e,t,n){var r=n("0Dky"),a=n("WJkJ");e.exports=function(e){return r((function(){return!!a[e]()||"​᠎"!="​᠎"[e]()||a[e].name!==e}))}}}]);
//# sourceMappingURL=component---src-templates-example-tsx-023ebd495239c7fc3c31.js.map