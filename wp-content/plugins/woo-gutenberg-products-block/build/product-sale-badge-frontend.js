(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[73],{19:function(e,t,n){"use strict";var r=n(0),c=n(7),a=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:s,wrapperProps:o={}}=e;const l=null!=n,u=null!=c;return!l&&u?(t=s||"span",o={...o,className:a()(o.className,"screen-reader-text")},Object(r.createElement)(t,o,c)):(t=s||r.Fragment,l&&u&&n!==c?Object(r.createElement)(t,o,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(t,o,n))}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n(94);var r=n(42);const c=()=>r.m>1},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(28),c=n(20);const a=e=>Object(r.a)(e)?JSON.parse(e)||{}:Object(c.a)(e)?e:{}},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(104),c=n(211),a=n(20),s=n(212);const o=e=>{if(!Object(c.a)())return{className:"",style:{}};const t=Object(a.a)(e)?e:{},n=Object(s.a)(t.style);return Object(r.__experimentalUseBorderProps)({...t,style:n})}},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(104),c=n(211),a=n(20),s=n(212);const o=e=>{if(!Object(c.a)())return{className:"",style:{}};const t=Object(a.a)(e)?e:{},n=Object(s.a)(t.style);return Object(r.__experimentalUseColorProps)({...t,style:n})}},294:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(20),c=n(212);const a=e=>{const t=Object(r.a)(e)?e:{},n=Object(c.a)(t.style),a=Object(r.a)(n.typography)?n.typography:{};return{style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:a.fontSize,lineHeight:a.lineHeight,fontWeight:a.fontWeight,textTransform:a.textTransform,fontFamily:t.fontFamily}}}},313:function(e,t,n){"use strict";n.r(t),n.d(t,"Block",(function(){return j}));var r=n(0),c=n(1),a=n(7),s=n.n(a),o=n(19),l=n(46),u=n(271),i=n(288),f=n(294),p=n(323),b=n(129);n(314);const j=e=>{const{className:t,align:n}=e,{parentClassName:a}=Object(l.useInnerBlockLayoutContext)(),{product:b}=Object(l.useProductDataContext)(),j=Object(u.a)(e),O=Object(i.a)(e),d=Object(f.a)(e),y=Object(p.a)(e);if(!b.id||!b.on_sale)return null;const m="string"==typeof n?"wc-block-components-product-sale-badge--align-"+n:"";return Object(r.createElement)("div",{className:s()("wc-block-components-product-sale-badge",t,m,{[a+"__product-onsale"]:a},O.className,j.className),style:{...O.style,...j.style,...d.style,...y.style}},Object(r.createElement)(o.a,{label:Object(c.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(b.withProductDataContext)(j)},314:function(e,t){},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(104),c=n(211),a=n(20),s=n(212);const o=e=>{if(!Object(c.a)()||"function"!=typeof r.__experimentalGetSpacingClassesAndStyles)return{style:{}};const t=Object(a.a)(e)?e:{},n=Object(s.a)(t.style);return Object(r.__experimentalGetSpacingClassesAndStyles)({...t,style:n})}},7:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var s=c.apply(null,r);s&&e.push(s)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var o in r)n.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()}}]);