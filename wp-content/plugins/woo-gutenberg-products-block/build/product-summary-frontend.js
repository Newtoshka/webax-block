(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[76],{20:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r}));const c=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function r(t,e){return c(t)&&e in t}},211:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n(94);var c=n(42);const r=()=>c.m>1},212:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(28),r=n(20);const o=t=>Object(c.a)(t)?JSON.parse(t)||{}:Object(r.a)(t)?t:{}},288:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(104),r=n(211),o=n(20),s=n(212);const a=t=>{if(!Object(r.a)())return{className:"",style:{}};const e=Object(o.a)(t)?t:{},n=Object(s.a)(e.style);return Object(c.__experimentalUseColorProps)({...e,style:n})}},294:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(20),r=n(212);const o=t=>{const e=Object(c.a)(t)?t:{},n=Object(r.a)(e.style),o=Object(c.a)(n.typography)?n.typography:{};return{style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:o.fontSize,lineHeight:o.lineHeight,fontWeight:o.fontWeight,textTransform:o.textTransform,fontFamily:e.fontFamily}}}},324:function(t,e,n){"use strict";var c=n(0),r=n(123),o=n(124);const s=t=>{const e=t.indexOf("</p>");return-1===e?t:t.substr(0,e+4)},a=t=>t.replace(/<\/?[a-z][^>]*?>/gi,""),i=(t,e)=>t.replace(/[\s|\.\,]+$/i,"")+e,u=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"&hellip;";const c=a(t),r=c.split(" ").splice(0,e).join(" ");return Object(o.autop)(i(r,n))},l=function(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&hellip;";const r=a(t),s=r.slice(0,e);if(n)return Object(o.autop)(i(s,c));const u=s.match(/([\s]+)/g),l=u?u.length:0,p=r.slice(0,e+l);return Object(o.autop)(i(p,c))};e.a=t=>{let{source:e,maxLength:n=15,countType:a="words",className:i="",style:p={}}=t;const f=Object(c.useMemo)(()=>function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"words";const c=Object(o.autop)(t),a=Object(r.count)(c,n);if(a<=e)return c;const i=s(c),p=Object(r.count)(i,n);return p<=e?i:"words"===n?u(i,e):l(i,e,"characters_including_spaces"===n)}(e,n,a),[e,n,a]);return Object(c.createElement)(c.RawHTML,{style:p,className:i},f)}},387:function(t,e){},431:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(7),o=n.n(r),s=n(324),a=n(42),i=n(46),u=n(288),l=n(294),p=n(129);n(387),e.default=Object(p.withProductDataContext)(t=>{const{className:e}=t,{parentClassName:n}=Object(i.useInnerBlockLayoutContext)(),{product:r}=Object(i.useProductDataContext)(),p=Object(u.a)(t),f=Object(l.a)(t);if(!r)return Object(c.createElement)("div",{className:o()(e,"wc-block-components-product-summary",{[n+"__product-summary"]:n})});const b=r.short_description?r.short_description:r.description;return b?Object(c.createElement)(s.a,{className:o()(e,p.className,"wc-block-components-product-summary",{[n+"__product-summary"]:n}),source:b,maxLength:150,countType:a.n.wordCountType||"words",style:{...p.style,...f.style}}):null})},7:function(t,e,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var c=arguments[e];if(c){var o=typeof c;if("string"===o||"number"===o)t.push(c);else if(Array.isArray(c)){if(c.length){var s=r.apply(null,c);s&&t.push(s)}}else if("object"===o)if(c.toString===Object.prototype.toString)for(var a in c)n.call(c,a)&&c[a]&&t.push(a);else t.push(c.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(c=function(){return r}.apply(e,[]))||(t.exports=c)}()}}]);