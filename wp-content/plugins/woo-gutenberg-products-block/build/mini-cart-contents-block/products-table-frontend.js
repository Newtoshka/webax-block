(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[62],{458:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(36),o=c(7),s=c.n(o),a=c(381);t.default=e=>{let{className:t}=e;const{cartItems:c,cartIsLoading:o}=Object(r.a)();return Object(n.createElement)("div",{className:s()(t,"wc-block-mini-cart__products-table")},Object(n.createElement)(a.a,{lineItems:c,isLoading:o,className:"wc-block-mini-cart-items"}))}},56:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(6);function r(e,t){const c=Object(n.useRef)();return Object(n.useEffect)(()=>{c.current===e||t&&!t(e,c.current)||(c.current=e)},[e,t]),c.current}},64:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(45),r=c(0),o=c(36);const s=()=>{const e=Object(o.a)(),t=Object(r.useRef)(e);return Object(r.useEffect)(()=>{t.current=e},[e]),{dispatchStoreEvent:Object(r.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(n.doAction)("experimental__woocommerce_blocks-"+e,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:Object(r.useCallback)((function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(n.doAction)("experimental__woocommerce_blocks-checkout-"+e,{...c,storeCart:t.current})}catch(e){console.error(e)}}),[])}}}}]);