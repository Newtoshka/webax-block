(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[84],{111:function(e,t){},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(28),c=n(66),o=n(151);const u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"filter_stock_status";const n=Object(c.d)(t);if(!n)return[];const o=Object(r.a)(n)?n.split(","):n;return Object.keys(e).filter(e=>o.includes(e))},s=e=>({heading:Object(r.a)(null==e?void 0:e.heading)?e.heading:"",headingLevel:Object(r.a)(null==e?void 0:e.headingLevel)&&parseInt(e.headingLevel,10)||o.attributes.headingLevel.default,showFilterButton:"true"===(null==e?void 0:e.showFilterButton),showCounts:"false"!==(null==e?void 0:e.showCounts),isPreview:!1})},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),c=n(91),o=n(8),u=n(26),s=n(20),a=n(30),l=n(55),i=n(23);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryRating:f,queryState:d,productIds:O}=e,j=Object(i.a)();j+="-collection-data";const[m]=Object(a.a)(j),[p,g]=Object(a.b)("calculate_attribute_counts",[],j),[h,w]=Object(a.b)("calculate_price_range",null,j),[k,v]=Object(a.b)("calculate_stock_status_counts",null,j),[_,y]=Object(a.b)("calculate_rating_counts",null,j),E=Object(u.a)(t||{}),S=Object(u.a)(n),C=Object(u.a)(b),R=Object(u.a)(f);Object(r.useEffect)(()=>{"object"==typeof E&&Object.keys(E).length&&(p.find(e=>Object(s.b)(E,"taxonomy")&&e.taxonomy===E.taxonomy)||g([...p,E]))},[E,p,g]),Object(r.useEffect)(()=>{h!==S&&void 0!==S&&w(S)},[S,w,h]),Object(r.useEffect)(()=>{k!==C&&void 0!==C&&v(C)},[C,v,k]),Object(r.useEffect)(()=>{_!==R&&void 0!==R&&y(R)},[R,y,_]);const[x,N]=Object(r.useState)(!1),[A]=Object(c.a)(x,200);x||N(!0);const L=Object(r.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(m),[m]);return Object(l.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...d,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(o.isEmpty)(O)&&{include:O},...L},shouldSelect:A})}},131:function(e,t){},151:function(e){e.exports=JSON.parse('{"name":"woocommerce/stock-filter","version":"1.0.0","title":"Filter by Stock Controls","description":"Enable customers to filter the product grid by stock status.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"link":true,"__experimentalDefaultControls":{"text":true}},"inserter":false,"lock":false},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"headingLevel":{"type":"number","default":3},"showCounts":{"type":"boolean","default":true},"showFilterButton":{"type":"boolean","default":false},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},157:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(29),u=n(26),s=n(56),a=n(30),l=n(130),i=n(2),b=n(90),f=n(63),d=n(62),O=n(61),j=n(57),m=n(12),p=n.n(m),g=n(22),h=n(68),w=n(20),k=n(11),v=n(66),_=n(7),y=n.n(_);const E=[{value:"preview-1",name:"In Stock",label:Object(r.createElement)(j.a,{name:"In Stock",count:3})},{value:"preview-2",name:"Out of sotck",label:Object(r.createElement)(j.a,{name:"Out of stock",count:3})},{value:"preview-3",name:"On backorder",label:Object(r.createElement)(j.a,{name:"On backorder",count:2})}];n(222);var S=n(125),C=n(41);const R=v.a+"stock_status";t.a=e=>{let{attributes:t,isEditor:n=!1}=e;const m=Object(C.b)(),_=Object(i.getSettingWithCoercion)("is_rendering_php_template",!1,h.a),[x,N]=Object(r.useState)(!1),{outofstock:A,...L}=Object(i.getSetting)("stockStatusOptions",{}),F=n?[]:Object(i.getSettingWithCoercion)("product_ids",[],Array.isArray),T=Object(r.useRef)(Object(i.getSetting)("hideOutOfStockItems",!1)?L:{outofstock:A,...L}),q=Object(r.useMemo)(()=>Object(S.a)(T.current,R),[]),[P,M]=Object(r.useState)(q),[Q,B]=Object(r.useState)(t.isPreview?E:[]),[W]=Object(r.useState)(Object.entries(T.current).map(e=>{let[t,n]=e;return{slug:t,name:n}}).filter(e=>!!e.name).sort((e,t)=>e.slug.localeCompare(t.slug))),[Y]=Object(a.a)(),[D,I]=Object(a.b)("stock_status",q),{results:K,isLoading:V}=Object(l.a)({queryStock:!0,queryState:Y,productIds:F}),U=Object(r.useCallback)(e=>Object(w.b)(K,"stock_status_counts")&&Array.isArray(K.stock_status_counts)?K.stock_status_counts.find(t=>{let{status:n,count:r}=t;return n===e&&0!==Number(r)}):null,[K]);Object(r.useEffect)(()=>{if(V||t.isPreview)return;const e=W.map(e=>{const n=U(e.slug);if(!(n||P.includes(e.slug)||(c=e.slug,null!=Y&&Y.stock_status&&Y.stock_status.some(e=>{let{status:t=[]}=e;return t.includes(c)}))))return null;var c;const o=n?Number(n.count):0;return{value:e.slug,name:Object(g.decodeEntities)(e.name),label:Object(r.createElement)(j.a,{name:Object(g.decodeEntities)(e.name),count:t.showCounts?o:null})}}).filter(e=>!!e);B(e)},[t.showCounts,t.isPreview,V,U,P,Y.stock_status,W]);const J=Object(r.useCallback)(e=>{n||(e&&!_&&I(e),(e=>{if(!window)return;if(0===e.length){const e=Object(k.removeQueryArgs)(window.location.href,R);return void(e!==window.location.href&&Object(v.c)(e))}const t=Object(k.addQueryArgs)(window.location.href,{[R]:e.join(",")});t!==window.location.href&&Object(v.c)(t)})(e))},[n,I,_]);Object(r.useEffect)(()=>{t.showFilterButton||J(P)},[t.showFilterButton,P,J]);const $=Object(r.useMemo)(()=>D,[D]),z=Object(u.a)($),G=Object(s.a)(z);Object(r.useEffect)(()=>{p()(G,z)||p()(P,z)||M(z)},[P,z,G]),Object(r.useEffect)(()=>{x||(I(q),N(!0))},[I,x,N,q]);const H=Object(r.useCallback)(e=>{const t=e=>{const t=Q.find(t=>t.value===e);return t?t.name:null},n=e=>{let{filterAdded:n,filterRemoved:r}=e;const u=n?t(n):null,s=r?t(r):null;u?Object(o.speak)(Object(c.sprintf)(
/* translators: %s stock statuses (for example: 'instock'...) */
Object(c.__)("%s filter added.","woo-gutenberg-products-block"),u)):s&&Object(o.speak)(Object(c.sprintf)(
/* translators: %s stock statuses (for example:'instock'...) */
Object(c.__)("%s filter removed.","woo-gutenberg-products-block"),s))},r=P.includes(e),u=P.filter(t=>t!==e);r?n({filterRemoved:e}):(u.push(e),u.sort(),n({filterAdded:e})),M(u)},[P,Q]);if(!V&&0===Q.length)return m(!1),null;const X="h"+t.headingLevel,Z=!t.isPreview&&!T.current||0===Q.length,ee=!t.isPreview&&V;if(!Object(i.getSettingWithCoercion)("has_filterable_products",!1,h.a))return m(!1),null;const te=Object(r.createElement)(X,{className:"wc-block-stock-filter__title"},t.heading),ne=Z?Object(r.createElement)(O.a,null,te):te;return m(!0),Object(r.createElement)(r.Fragment,null,!n&&t.heading&&ne,Object(r.createElement)("div",{className:y()("wc-block-stock-filter",{"is-loading":Z})},Object(r.createElement)(b.a,{className:"wc-block-stock-filter-list",options:Q,checked:P,onChange:H,isLoading:Z,isDisabled:ee})),Object(r.createElement)("div",{className:"wc-block-stock-filter__actions"},P.length>0&&!Z&&Object(r.createElement)(d.a,{onClick:()=>{M([]),J([])},screenReaderLabel:Object(c.__)("Reset stock filter","woo-gutenberg-products-block")}),t.showFilterButton&&Object(r.createElement)(f.a,{className:"wc-block-stock-filter__button",isLoading:Z,disabled:Z||ee,onClick:()=>J(P)})))}},19:function(e,t,n){"use strict";var r=n(0),c=n(7),o=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:u,wrapperProps:s={}}=e;const a=null!=n,l=null!=c;return!a&&l?(t=u||"span",s={...s,className:o()(s.className,"screen-reader-text")},Object(r.createElement)(t,s,c)):(t=u||r.Fragment,a&&l&&n!==c?Object(r.createElement)(t,s,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(t,s,n))}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n(94);var r=n(42);const c=()=>r.m>1},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(28),c=n(20);const o=e=>Object(r.a)(e)?JSON.parse(e)||{}:Object(c.a)(e)?e:{}},222:function(e,t){},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)("page"),o=()=>Object(r.useContext)(c);c.Provider},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),c=n(12),o=n.n(c);function u(e){const t=Object(r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"string"==typeof e},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(104),c=n(211),o=n(20),u=n(212);const s=e=>{if(!Object(c.a)())return{className:"",style:{}};const t=Object(o.a)(e)?e:{},n=Object(u.a)(t.style);return Object(r.__experimentalUseColorProps)({...t,style:n})}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d}));var r=n(3),c=n(5),o=n(0),u=n(12),s=n.n(u),a=n(26),l=n(56),i=n(23);const b=e=>{const t=Object(i.a)();e=e||t;const n=Object(c.useSelect)(t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:u}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)(t=>{u(e,t)},[e,u])]},f=(e,t,n)=>{const u=Object(i.a)();n=n||u;const s=Object(c.useSelect)(c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:a}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[s,Object(o.useCallback)(t=>{a(n,e,t)},[n,e,a])]},d=(e,t)=>{const n=Object(i.a)();t=t||n;const[r,c]=b(t),u=Object(a.a)(r),f=Object(a.a)(e),d=Object(l.a)(f),O=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{s()(d,f)||(c(Object.assign({},u,f)),O.current=!0)},[u,f,d,c]),O.current?[r,c]:[e,c]}},451:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(288),o=n(28),u=n(157),s=n(125);t.default=e=>{const t=Object(c.a)(e);return Object(r.createElement)("div",{className:Object(o.a)(e.className)?e.className:"",style:{...t.style}},Object(r.createElement)(u.a,{isEditor:!1,attributes:Object(s.b)(e)}))}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(6);function c(e,t,n){var c=this,o=Object(r.useRef)(null),u=Object(r.useRef)(0),s=Object(r.useRef)(null),a=Object(r.useRef)([]),l=Object(r.useRef)(),i=Object(r.useRef)(),b=Object(r.useRef)(e),f=Object(r.useRef)(!0);b.current=e;var d=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var O=!!(n=n||{}).leading,j=!("trailing"in n)||!!n.trailing,m="maxWait"in n,p=m?Math.max(+n.maxWait||0,t):null;return Object(r.useEffect)((function(){return f.current=!0,function(){f.current=!1}}),[]),Object(r.useMemo)((function(){var e=function(e){var t=a.current,n=l.current;return a.current=l.current=null,u.current=e,i.current=b.current.apply(n,t)},n=function(e,t){d&&cancelAnimationFrame(s.current),s.current=d?requestAnimationFrame(e):setTimeout(e,t)},r=function(e){if(!f.current)return!1;var n=e-o.current,r=e-u.current;return!o.current||n>=t||n<0||m&&r>=p},g=function(t){return s.current=null,j&&a.current?e(t):(a.current=l.current=null,i.current)},h=function(){var e=Date.now();if(r(e))return g(e);if(f.current){var c=e-o.current,s=e-u.current,a=t-c,l=m?Math.min(a,p-s):a;n(h,l)}},w=function(){for(var b=[],d=0;d<arguments.length;d++)b[d]=arguments[d];var j=Date.now(),p=r(j);if(a.current=b,l.current=c,o.current=j,p){if(!s.current&&f.current)return u.current=o.current,n(h,t),O?e(o.current):i.current;if(m)return n(h,t),e(o.current)}return s.current||n(h,t),i.current};return w.cancel=function(){s.current&&(d?cancelAnimationFrame(s.current):clearTimeout(s.current)),u.current=0,a.current=o.current=l.current=s.current=null},w.isPending=function(){return!!s.current},w.flush=function(){return s.current?g(Date.now()):i.current},w}),[O,m,t,p,j,d])}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3),c=n(5),o=n(0),u=n(26),s=n(70);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:l={},shouldSelect:i=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),f=Object(u.a)(l),d=Object(u.a)(a),O=Object(s.a)(),j=Object(c.useSelect)(e=>{if(!i)return null;const c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,f,d],u=c.getCollectionError(...o);if(u){if(!(u instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");O(u)}return{results:c.getCollection(...o),isLoading:!c.hasFinishedResolution("getCollection",o)}},[t,n,d,f,i]);return null!==j&&(b.current=j),b.current}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(6);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},57:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(19);n(131),t.a=e=>{let{name:t,count:n}=e;return Object(r.createElement)(r.Fragment,null,t,null!==n&&Number.isFinite(n)&&Object(r.createElement)(o.a,{label:n.toString(),screenReaderLabel:Object(c.sprintf)(
/* translators: %s number of products. */
Object(c._n)("%s product","%s products",n,"woo-gutenberg-products-block"),n),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}))}},61:function(e,t,n){"use strict";var r=n(0);n(95),t.a=e=>{let{children:t}=e;return Object(r.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},62:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(7),u=n.n(o),s=n(19);n(96),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(c.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:a=Object(c.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{className:u()("wc-block-components-filter-reset-button",t),onClick:o},Object(r.createElement)(s.a,{label:n,screenReaderLabel:a}))}},63:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(7),u=n.n(o),s=n(19);n(97),t.a=e=>{let{className:t,isLoading:n,disabled:o,label:
/* translators: Submit button text for filters. */
a=Object(c.__)("Apply","woo-gutenberg-products-block"),onClick:l,screenReaderLabel:i=Object(c.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{type:"submit",className:u()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:o,onClick:l},Object(r.createElement)(s.a,{label:a,screenReaderLabel:i}))}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return i}));var r=n(11),c=n(2),o=n(68);const u=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),s="query_type_",a="filter_";function l(e){return window?Object(r.getQueryArg)(window.location.href,e):null}function i(e){u?window.location.href=e:window.history.replaceState({},"",e)}},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"boolean"==typeof e},7:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var u=c.apply(null,r);u&&e.push(u)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);const c=()=>{const[,e]=Object(r.useState)();return Object(r.useCallback)(t=>{e(()=>{throw t})},[])}},90:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(7),u=n.n(o),s=n(9);n(111),t.a=e=>{let{className:t,onChange:n,options:o=[],checked:a=[],isLoading:l=!1,isDisabled:i=!1,limit:b=10}=e;const[f,d]=Object(r.useState)(!1),O=Object(r.useMemo)(()=>[...Array(5)].map((e,t)=>Object(r.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),j=Object(r.useMemo)(()=>{const e=o.length-b;return!f&&Object(r.createElement)("li",{key:"show-more",className:"show-more"},Object(r.createElement)("button",{onClick:()=>{d(!0)},"aria-expanded":!1,"aria-label":Object(c.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(c._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(c.sprintf)(
/* translators: %s number of options to reveal. */
Object(c._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[o,b,f]),m=Object(r.useMemo)(()=>f&&Object(r.createElement)("li",{key:"show-less",className:"show-less"},Object(r.createElement)("button",{onClick:()=>{d(!1)},"aria-expanded":!0,"aria-label":Object(c.__)("Show less options","woo-gutenberg-products-block")},Object(c.__)("Show less","woo-gutenberg-products-block"))),[f]),p=Object(r.useMemo)(()=>{const e=o.length>b+5;return Object(r.createElement)(r.Fragment,null,o.map((t,c)=>Object(r.createElement)(r.Fragment,{key:t.value},Object(r.createElement)("li",e&&!f&&c>=b&&{hidden:!0},Object(r.createElement)(s.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:a.includes(t.value),onChange:()=>{n(t.value)},disabled:i})),e&&c===b-1&&j)),e&&m)},[o,n,a,f,b,m,j,i]),g=u()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":l},t);return Object(r.createElement)("ul",{className:g},l?O:p)}},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(6),c=n(48);function o(e,t){return e===t}function u(e){return"function"==typeof e?function(){return e}:e}function s(e,t,n){var s=n&&n.equalityFn||o,a=function(e){var t=Object(r.useState)(u(e)),n=t[0],c=t[1];return[n,Object(r.useCallback)((function(e){return c(u(e))}),[])]}(e),l=a[0],i=a[1],b=Object(c.a)(Object(r.useCallback)((function(e){return i(e)}),[i]),t,n),f=Object(r.useRef)(e);return s(f.current,e)||(b(e),f.current=e),[l,b]}},95:function(e,t){},96:function(e,t){},97:function(e,t){}}]);