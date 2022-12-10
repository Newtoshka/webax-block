(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[2],{144:function(e,t,o){"use strict";var n=o(10),s=o(0),i=o(7),r=o.n(i);class l extends s.Component{constructor(){super(...arguments),this.onChange=this.onChange.bind(this),this.bindInput=this.bindInput.bind(this)}focus(){this.input.focus()}hasFocus(){return this.input===this.input.ownerDocument.activeElement}bindInput(e){this.input=e}onChange(e){this.props.onChange({value:e.target.value})}render(){const{value:e,isExpanded:t,instanceId:o,selectedSuggestionIndex:i,className:l,...c}=this.props,a=e?e.length+1:0;return Object(s.createElement)("input",Object(n.a)({ref:this.bindInput,id:"components-form-token-input-"+o,type:"text"},c,{value:e||"",onChange:this.onChange,size:a,className:r()(l,"components-form-token-field__input"),autoComplete:"off",role:"combobox","aria-expanded":t,"aria-autocomplete":"list","aria-owns":t?"components-form-token-suggestions-"+o:void 0,"aria-activedescendant":-1!==i?`components-form-token-suggestions-${o}-${i}`:void 0,"aria-describedby":"components-form-token-suggestions-howto-"+o}))}}t.a=l},145:function(e,t,o){"use strict";var n=o(0),s=o(8),i=o(146),r=o.n(i),l=o(7),c=o.n(l),a=o(15);class u extends n.Component{constructor(){super(...arguments),this.handleMouseDown=this.handleMouseDown.bind(this),this.bindList=this.bindList.bind(this)}componentDidUpdate(){this.props.selectedIndex>-1&&this.props.scrollIntoView&&this.list.children[this.props.selectedIndex]&&(this.scrollingIntoView=!0,r()(this.list.children[this.props.selectedIndex],this.list,{onlyScrollIfNeeded:!0}),this.props.setTimeout(()=>{this.scrollingIntoView=!1},100))}bindList(e){this.list=e}handleHover(e){return()=>{this.scrollingIntoView||this.props.onHover(e)}}handleClick(e){return()=>{this.props.onSelect(e)}}handleMouseDown(e){e.preventDefault()}computeSuggestionMatch(e){const t=this.props.displayTransform(this.props.match||"").toLocaleLowerCase();if(0===t.length)return null;const o=(e=this.props.displayTransform(e)).toLocaleLowerCase().indexOf(t);return{suggestionBeforeMatch:e.substring(0,o),suggestionMatch:e.substring(o,o+t.length),suggestionAfterMatch:e.substring(o+t.length)}}render(){return Object(n.createElement)("ul",{ref:this.bindList,className:"components-form-token-field__suggestions-list",id:"components-form-token-suggestions-"+this.props.instanceId,role:"listbox"},Object(s.map)(this.props.suggestions,(e,t)=>{const o=this.computeSuggestionMatch(e),s=c()("components-form-token-field__suggestion",{"is-selected":t===this.props.selectedIndex});return Object(n.createElement)("li",{id:`components-form-token-suggestions-${this.props.instanceId}-${t}`,role:"option",className:s,key:null!=e&&e.value?e.value:this.props.displayTransform(e),onMouseDown:this.handleMouseDown,onClick:this.handleClick(e),onMouseEnter:this.handleHover(e),"aria-selected":t===this.props.selectedIndex},o?Object(n.createElement)("span",{"aria-label":this.props.displayTransform(e)},o.suggestionBeforeMatch,Object(n.createElement)("strong",{className:"components-form-token-field__suggestion-match"},o.suggestionMatch),o.suggestionAfterMatch):this.props.displayTransform(e))}))}}u.defaultProps={match:"",onHover:()=>{},onSelect:()=>{},suggestions:Object.freeze([])},t.a=Object(a.withSafeTimeout)(u)},146:function(e,t,o){"use strict";e.exports=o(215)},215:function(e,t,o){"use strict";var n=o(216);e.exports=function(e,t,o){o=o||{},9===t.nodeType&&(t=n.getWindow(t));var s=o.allowHorizontalScroll,i=o.onlyScrollIfNeeded,r=o.alignWithTop,l=o.alignWithLeft,c=o.offsetTop||0,a=o.offsetLeft||0,u=o.offsetBottom||0,d=o.offsetRight||0;s=void 0===s||s;var p=n.isWindow(t),f=n.offset(e),h=n.outerHeight(e),m=n.outerWidth(e),b=void 0,v=void 0,g=void 0,w=void 0,O=void 0,y=void 0,j=void 0,x=void 0,L=void 0,k=void 0;p?(j=t,k=n.height(j),L=n.width(j),x={left:n.scrollLeft(j),top:n.scrollTop(j)},O={left:f.left-x.left-a,top:f.top-x.top-c},y={left:f.left+m-(x.left+L)+d,top:f.top+h-(x.top+k)+u},w=x):(b=n.offset(t),v=t.clientHeight,g=t.clientWidth,w={left:t.scrollLeft,top:t.scrollTop},O={left:f.left-(b.left+(parseFloat(n.css(t,"borderLeftWidth"))||0))-a,top:f.top-(b.top+(parseFloat(n.css(t,"borderTopWidth"))||0))-c},y={left:f.left+m-(b.left+g+(parseFloat(n.css(t,"borderRightWidth"))||0))+d,top:f.top+h-(b.top+v+(parseFloat(n.css(t,"borderBottomWidth"))||0))+u}),O.top<0||y.top>0?!0===r?n.scrollTop(t,w.top+O.top):!1===r?n.scrollTop(t,w.top+y.top):O.top<0?n.scrollTop(t,w.top+O.top):n.scrollTop(t,w.top+y.top):i||((r=void 0===r||!!r)?n.scrollTop(t,w.top+O.top):n.scrollTop(t,w.top+y.top)),s&&(O.left<0||y.left>0?!0===l?n.scrollLeft(t,w.left+O.left):!1===l?n.scrollLeft(t,w.left+y.left):O.left<0?n.scrollLeft(t,w.left+O.left):n.scrollLeft(t,w.left+y.left):i||((l=void 0===l||!!l)?n.scrollLeft(t,w.left+O.left):n.scrollLeft(t,w.left+y.left)))}},216:function(e,t,o){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function i(e,t){var o=e["page"+(t?"Y":"X")+"Offset"],n="scroll"+(t?"Top":"Left");if("number"!=typeof o){var s=e.document;"number"!=typeof(o=s.documentElement[n])&&(o=s.body[n])}return o}function r(e){return i(e)}function l(e){return i(e,!0)}function c(e){var t=function(e){var t,o=void 0,n=void 0,s=e.ownerDocument,i=s.body,r=s&&s.documentElement;return o=(t=e.getBoundingClientRect()).left,n=t.top,{left:o-=r.clientLeft||i.clientLeft||0,top:n-=r.clientTop||i.clientTop||0}}(e),o=e.ownerDocument,n=o.defaultView||o.parentWindow;return t.left+=r(n),t.top+=l(n),t}var a=new RegExp("^("+/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source+")(?!px)[a-z%]+$","i"),u=/^(top|right|bottom|left)$/,d="left",p=void 0;function f(e,t){for(var o=0;o<e.length;o++)t(e[o])}function h(e){return"border-box"===p(e,"boxSizing")}"undefined"!=typeof window&&(p=window.getComputedStyle?function(e,t,o){var n="",s=e.ownerDocument,i=o||s.defaultView.getComputedStyle(e,null);return i&&(n=i.getPropertyValue(t)||i[t]),n}:function(e,t){var o=e.currentStyle&&e.currentStyle[t];if(a.test(o)&&!u.test(t)){var n=e.style,s=n[d],i=e.runtimeStyle[d];e.runtimeStyle[d]=e.currentStyle[d],n[d]="fontSize"===t?"1em":o||0,o=n.pixelLeft+"px",n[d]=s,e.runtimeStyle[d]=i}return""===o?"auto":o});var m=["margin","border","padding"];function b(e,t,o){var n={},s=e.style,i=void 0;for(i in t)t.hasOwnProperty(i)&&(n[i]=s[i],s[i]=t[i]);for(i in o.call(e),t)t.hasOwnProperty(i)&&(s[i]=n[i])}function v(e,t,o){var n=0,s=void 0,i=void 0,r=void 0;for(i=0;i<t.length;i++)if(s=t[i])for(r=0;r<o.length;r++){var l;l="border"===s?s+o[r]+"Width":s+o[r],n+=parseFloat(p(e,l))||0}return n}function g(e){return null!=e&&e==e.window}var w={};function O(e,t,o){if(g(e))return"width"===t?w.viewportWidth(e):w.viewportHeight(e);if(9===e.nodeType)return"width"===t?w.docWidth(e):w.docHeight(e);var n="width"===t?["Left","Right"]:["Top","Bottom"],s="width"===t?e.offsetWidth:e.offsetHeight,i=(p(e),h(e)),r=0;(null==s||s<=0)&&(s=void 0,(null==(r=p(e,t))||Number(r)<0)&&(r=e.style[t]||0),r=parseFloat(r)||0),void 0===o&&(o=i?1:-1);var l=void 0!==s||i,c=s||r;if(-1===o)return l?c-v(e,["border","padding"],n):r;if(l){var a=2===o?-v(e,["border"],n):v(e,["margin"],n);return c+(1===o?0:a)}return r+v(e,m.slice(o),n)}f(["Width","Height"],(function(e){w["doc"+e]=function(t){var o=t.document;return Math.max(o.documentElement["scroll"+e],o.body["scroll"+e],w["viewport"+e](o))},w["viewport"+e]=function(t){var o="client"+e,n=t.document,s=n.body,i=n.documentElement[o];return"CSS1Compat"===n.compatMode&&i||s&&s[o]||i}}));var y={position:"absolute",visibility:"hidden",display:"block"};function j(e){var t=void 0,o=arguments;return 0!==e.offsetWidth?t=O.apply(void 0,o):b(e,y,(function(){t=O.apply(void 0,o)})),t}function x(e,t,o){var n=o;if("object"!==(void 0===t?"undefined":s(t)))return void 0!==n?("number"==typeof n&&(n+="px"),void(e.style[t]=n)):p(e,t);for(var i in t)t.hasOwnProperty(i)&&x(e,i,t[i])}f(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);w["outer"+t]=function(t,o){return t&&j(t,e,o?0:1)};var o="width"===e?["Left","Right"]:["Top","Bottom"];w[e]=function(t,n){return void 0===n?t&&j(t,e,-1):t?(p(t),h(t)&&(n+=v(t,["padding","border"],o)),x(t,e,n)):void 0}})),e.exports=n({getWindow:function(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},offset:function(e,t){if(void 0===t)return c(e);!function(e,t){"static"===x(e,"position")&&(e.style.position="relative");var o=c(e),n={},s=void 0,i=void 0;for(i in t)t.hasOwnProperty(i)&&(s=parseFloat(x(e,i))||0,n[i]=s+t[i]-o[i]);x(e,n)}(e,t)},isWindow:g,each:f,css:x,clone:function(e){var t={};for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);if(e.overflow)for(var o in e)e.hasOwnProperty(o)&&(t.overflow[o]=e.overflow[o]);return t},scrollLeft:function(e,t){if(g(e)){if(void 0===t)return r(e);window.scrollTo(t,l(e))}else{if(void 0===t)return e.scrollLeft;e.scrollLeft=t}},scrollTop:function(e,t){if(g(e)){if(void 0===t)return l(e);window.scrollTo(r(e),t)}else{if(void 0===t)return e.scrollTop;e.scrollTop=t}},viewportWidth:0,viewportHeight:0},w)},279:function(e,t,o){"use strict";var n=o(0),s=o(18);const i=Object(n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)(s.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));t.a=i},468:function(e,t,o){"use strict";var n=o(0),s=o(7),i=o.n(s),r=o(8),l=o(1),c=o(15),a=o(54),u=o(29),d=o(279),p=o(144),f=o(145),h=o(382),m=o(92),b=o(477),v=o(439),g=o(436),w=o(400),O=Object(v.a)({as:"div",useHook:function(e){const t=Object(g.a)(e,"FlexBlock");return Object(w.a)({isBlock:!0,...t})},name:"FlexBlock"}),y=o(440),j=o(10);const x=Object(c.createHigherOrderComponent)(e=>t=>{const[o,s]=Object(n.useState)(),i=Object(n.useCallback)(e=>s(()=>null!=e&&e.handleFocusOutside?e.handleFocusOutside.bind(e):void 0),[]);return Object(n.createElement)("div",Object(c.__experimentalUseFocusOutside)(o),Object(n.createElement)(e,Object(j.a)({ref:i},t)))},"withFocusOutside")(class extends n.Component{handleFocusOutside(e){this.props.onFocusOutside(e)}render(){return this.props.children}});t.a=function e({value:t,label:o,options:s,onChange:v,onFilterValueChange:g=r.noop,hideLabelFromVision:w,help:j,allowReset:L=!0,className:k,messages:E={selected:Object(l.__)("Item selected.")}}){var S;const T=Object(c.useInstanceId)(e),[C,I]=Object(n.useState)(null),[W,_]=Object(n.useState)(!1),[F,M]=Object(n.useState)(!1),[N,D]=Object(n.useState)(""),H=Object(n.useRef)(),B=s.find(e=>e.value===t),P=null!==(S=null==B?void 0:B.label)&&void 0!==S?S:"",V=Object(n.useMemo)(()=>{const e=[],t=[],o=Object(r.deburr)(N.toLocaleLowerCase());return s.forEach(n=>{const s=Object(r.deburr)(n.label).toLocaleLowerCase().indexOf(o);0===s?e.push(n):s>0&&t.push(n)}),e.concat(t)},[N,s,t]),R=e=>{v(e.value),Object(u.speak)(E.selected,"assertive"),I(e),D(""),_(!1)},$=(e=1)=>{let t=V.indexOf(C)+e;t<0?t=V.length-1:t>=V.length&&(t=0),I(V[t]),_(!0)};return Object(n.useEffect)(()=>{const e=V.length>0;if(W){const t=e?Object(l.sprintf)(
/* translators: %d: number of results. */
Object(l._n)("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",V.length),V.length):Object(l.__)("No results.");Object(u.speak)(t,"polite")}},[V,W]),Object(n.createElement)(x,{onFocusOutside:()=>{_(!1)}},Object(n.createElement)(h.a,{className:i()(k,"components-combobox-control"),tabIndex:"-1",label:o,id:"components-form-token-input-"+T,hideLabelFromVision:w,help:j},Object(n.createElement)("div",{className:"components-combobox-control__suggestions-container",tabIndex:"-1",onKeyDown:e=>{let t=!1;switch(e.keyCode){case a.ENTER:C&&(R(C),t=!0);break;case a.UP:$(-1),t=!0;break;case a.DOWN:$(1),t=!0;break;case a.ESCAPE:_(!1),I(null),t=!0,e.stopPropagation()}t&&e.preventDefault()}},Object(n.createElement)(b.a,null,Object(n.createElement)(O,null,Object(n.createElement)(p.a,{className:"components-combobox-control__input",instanceId:T,ref:H,value:W?N:P,"aria-label":P?`${P}, ${o}`:null,onFocus:()=>{M(!0),_(!0),g(""),D("")},onBlur:()=>{M(!1)},isExpanded:W,selectedSuggestionIndex:V.indexOf(C),onChange:e=>{const t=e.value;D(t),g(t),F&&_(!0)}})),L&&Object(n.createElement)(y.a,null,Object(n.createElement)(m.a,{className:"components-combobox-control__reset",icon:d.a,disabled:!t,onClick:()=>{v(null),H.current.input.focus()},label:Object(l.__)("Reset")}))),W&&Object(n.createElement)(f.a,{instanceId:T,match:{label:N},displayTransform:e=>e.label,suggestions:V,selectedIndex:V.indexOf(C),onHover:I,onSelect:R,scrollIntoView:!0}))))}}}]);