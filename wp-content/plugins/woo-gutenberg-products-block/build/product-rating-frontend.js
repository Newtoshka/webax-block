(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[72],{20:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s}));const r=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function s(t,e){return r(t)&&e in t}},211:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n(94);var r=n(42);const s=()=>r.m>1},212:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(28),s=n(20);const c=t=>Object(r.a)(t)?JSON.parse(t)||{}:Object(s.a)(t)?t:{}},288:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(104),s=n(211),c=n(20),o=n(212);const a=t=>{if(!Object(s.a)())return{className:"",style:{}};const e=Object(c.a)(t)?t:{},n=Object(o.a)(e.style);return Object(r.__experimentalUseColorProps)({...e,style:n})}},294:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(20),s=n(212);const c=t=>{const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style),c=Object(r.a)(n.typography)?n.typography:{};return{style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:c.fontSize,lineHeight:c.lineHeight,fontWeight:c.fontWeight,textTransform:c.textTransform,fontFamily:e.fontFamily}}}},323:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(104),s=n(211),c=n(20),o=n(212);const a=t=>{if(!Object(s.a)()||"function"!=typeof r.__experimentalGetSpacingClassesAndStyles)return{style:{}};const e=Object(c.a)(t)?t:{},n=Object(o.a)(e.style);return Object(r.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},339:function(t,e){},359:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return b}));var r=n(0),s=n(1),c=n(7),o=n.n(c),a=n(46),i=n(288),u=n(294),l=n(323),f=n(129),p=n(87);n(339);const b=t=>{const{parentClassName:e}=Object(a.useInnerBlockLayoutContext)(),{product:n}=Object(a.useProductDataContext)(),c=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(n),f=Object(i.a)(t),b=Object(u.a)(t),d=Object(l.a)(t);if(!c)return null;const j={width:c/5*100+"%"},O=Object(s.sprintf)(
/* translators: %f is referring to the average rating value */
Object(s.__)("Rated %f out of 5","woo-gutenberg-products-block"),c),g=(t=>{const e=Object(p.a)(t.review_count)?t.review_count:parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(n),y={__html:Object(s.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(s._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",g,"woo-gutenberg-products-block"),Object(s.sprintf)('<strong class="rating">%f</strong>',c),Object(s.sprintf)('<span class="rating">%d</span>',g))};return Object(r.createElement)("div",{className:o()(f.className,"wc-block-components-product-rating",{[e+"__product-rating"]:e}),style:{...f.style,...b.style,...d.style}},Object(r.createElement)("div",{className:o()("wc-block-components-product-rating__stars",e+"__product-rating__stars"),role:"img","aria-label":O},Object(r.createElement)("span",{style:j,dangerouslySetInnerHTML:y})))};e.default=Object(f.withProductDataContext)(b)},7:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var c=typeof r;if("string"===c||"number"===c)t.push(r);else if(Array.isArray(r)){if(r.length){var o=s.apply(null,r);o&&t.push(o)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&t.push(a);else t.push(r.toString())}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):void 0===(r=function(){return s}.apply(e,[]))||(t.exports=r)}()}}]);