(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1433)}])},8199:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return u},ACTION_NAVIGATE:function(){return l},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return o},ACTION_RESTORE:function(){return s},ACTION_SERVER_ACTION:function(){return c},ACTION_SERVER_PATCH:function(){return i},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r}});let o="refresh",l="navigate",s="restore",i="server-patch",a="prefetch",u="hmr-refresh",c="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7195:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8337),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8342:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let n=r(8754),o=r(5893),l=n._(r(7294)),s=r(6075),i=r(3955),a=r(8041),u=r(9903),c=r(5490),d=r(1928),f=r(257),h=r(4229),p=r(7195),m=r(9470),x=r(8199),g=r(2145),b=new Set;function v(e,t,r,n,o,l){if(l||(0,i.isLocalURL)(t)){if(!n.bypassPrefetchedCheck&&!l){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}(async()=>l?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let j=l.default.forwardRef(function(e,t){let r,n;let{href:a,as:b,children:j,prefetch:_=null,passHref:N,replace:k,shallow:M,scroll:O,locale:C,onClick:P,onMouseEnter:w,onTouchStart:E,legacyBehavior:R=!1,...q}=e;r=j,R&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let T=l.default.useContext(d.RouterContext),A=l.default.useContext(f.AppRouterContext),L=null!=T?T:A,S=!T,I=!1!==_,Q=null===_?x.PrefetchKind.AUTO:x.PrefetchKind.FULL,{href:U,as:H}=l.default.useMemo(()=>{if(!T){let e=y(a);return{href:e,as:b?y(b):e}}let[e,t]=(0,s.resolveHref)(T,a,!0);return{href:e,as:b?(0,s.resolveHref)(T,b):t||e}},[T,a,b]),F=l.default.useRef(U),K=l.default.useRef(H);R&&(n=l.default.Children.only(r));let B=R?n&&"object"==typeof n&&n.ref:t,[D,G,V]=(0,h.useIntersection)({rootMargin:"200px"}),Y=l.default.useCallback(e=>{(K.current!==H||F.current!==U)&&(V(),K.current=H,F.current=U),D(e)},[H,U,V,D]),z=(0,g.useMergedRef)(Y,B);l.default.useEffect(()=>{L&&G&&I&&v(L,U,H,{locale:C},{kind:Q},S)},[H,U,G,C,I,null==T?void 0:T.locale,L,S,Q]);let W={ref:z,onClick(e){R||"function"!=typeof P||P(e),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,o,s,a,u,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:s,locale:u,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?l.default.startTransition(f):f()}(e,L,U,H,k,M,O,C,S)},onMouseEnter(e){R||"function"!=typeof w||w(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(I||!S)&&v(L,U,H,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:Q},S)},onTouchStart:function(e){R||"function"!=typeof E||E(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(I||!S)&&v(L,U,H,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:Q},S)}};if((0,u.isAbsoluteUrl)(H))W.href=H;else if(!R||N||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,p.getDomainLocale)(H,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);W.href=t||(0,m.addBasePath)((0,c.addLocale)(H,e,null==T?void 0:T.defaultLocale))}return R?l.default.cloneElement(n,W):(0,o.jsx)("a",{...q,...W,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),o=r(4474),l="function"==typeof IntersectionObserver,s=new Map,i=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,u=a||!l,[c,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),h=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(l){if(u||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=s.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),s.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),s.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,r,t,c,f.current]),[h,c,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2145:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(7294);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=l(e,n),o.current=l(t,n))}:e||t,[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1433:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(5893),o=r(1664),l=r.n(o),s=r(7294);let i=[{name:"Motivation",url:"motivation-quotes-hindi",subcategories:[{name:"Success Quotes",url:"success-quotes-hindi"}]},{name:"Occasion",url:"occasion-quotes-hindi",subcategories:[{name:"New Year Quotes",url:"new-year-quotes-hindi"}]},{name:"Emotions",url:"emotions-quotes-hindi",subcategories:[{name:"Sad Life Quotes",url:"sad-life-quotes-hindi"}]},{name:"Love & Friendship",url:"love-quotes-hindi",subcategories:[{name:"Romantic Love Quotes",url:"romantic-love-quotes-hindi"}]},{name:"Spiritual",url:"spiritual-quotes-hindi",subcategories:[{name:"Bhagavad Gita Quotes",url:"bhagavad-gita-quotes-hindi"}]},{name:"Morning",url:"morning-quotes-hindi",subcategories:[{name:"Good Morning Quotes",url:"good-morning-quotes-hindi"}]},{name:"Night",url:"night-quotes-hindi",subcategories:[{name:"Good Night Quotes",url:"good-night-quotes-hindi"}]},{name:"Famous People",url:"famous-people-quotes-hindi",subcategories:[{name:"A.P.J. Abdul Kalam Quotes",url:"apj-abdul-kalam-quotes-hindi"}]},{name:"Attitude",url:"attitude-quotes-hindi",subcategories:[{name:"Bold Attitude Quotes",url:"bold-attitude-quotes-hindi"}]},{name:"Best",url:"best-quotes-hindi",subcategories:[{name:"Popular Quotes",url:"popular-quotes-hindi"}]}];function a(){let[e,t]=(0,s.useState)(!1);return(0,n.jsx)("header",{className:"sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200/80",children:(0,n.jsx)("div",{className:"container mx-auto px-4",children:(0,n.jsxs)("nav",{className:"py-4",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)(l(),{href:"/qsite",className:"text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600    text-transparent bg-clip-text hover:opacity-80 transition-opacity",children:"Hindi Quotes"}),(0,n.jsx)("button",{onClick:()=>t(!e),className:"md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors",children:(0,n.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e?(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),(0,n.jsx)("div",{className:"hidden md:flex space-x-1",children:i.map(e=>(0,n.jsxs)(l(),{href:"/qsite/".concat(e.url),className:"px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100    transition-all relative group",children:[(0,n.jsx)("span",{children:e.name}),(0,n.jsx)("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500    to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"})]},e.url))})]}),e&&(0,n.jsx)("div",{className:"md:hidden mt-4 py-4 border-t border-gray-200 space-y-2",children:i.map(e=>(0,n.jsx)(l(),{href:"/qsite/".concat(e.url),className:"block px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900    hover:bg-gray-100 transition-all",onClick:()=>t(!1),children:e.name},e.url))})]})})})}function u(){return(0,n.jsx)("footer",{className:"bg-gray-900 text-white py-12",children:(0,n.jsxs)("div",{className:"container mx-auto px-4",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Hindi Quotes"}),(0,n.jsx)("p",{className:"text-gray-400",children:"Best collection of Hindi quotes for motivation, love, spirituality, and more. Share inspiring quotes with your friends and family."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Categories"}),(0,n.jsx)("ul",{className:"space-y-2",children:i.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/".concat(e.url),className:"text-gray-400 hover:text-white transition-colors",children:e.name})},e.url))})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Quick Links"}),(0,n.jsxs)("ul",{className:"space-y-2",children:[(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/about",className:"text-gray-400 hover:text-white transition-colors",children:"About Us"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/privacy-policy",className:"text-gray-400 hover:text-white transition-colors",children:"Privacy Policy"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/terms",className:"text-gray-400 hover:text-white transition-colors",children:"Terms of Service"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/contact",className:"text-gray-400 hover:text-white transition-colors",children:"Contact Us"})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Follow Us"}),(0,n.jsxs)("div",{className:"flex space-x-4",children:[(0,n.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition-colors",children:"Facebook"}),(0,n.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition-colors",children:"Twitter"}),(0,n.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition-colors",children:"Instagram"})]})]})]}),(0,n.jsx)("div",{className:"mt-8 pt-8 border-t border-gray-800 text-center text-gray-400",children:(0,n.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Hindi Quotes. All rights reserved."]})})]})})}function c(e){let{children:t}=e;return(0,n.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,n.jsx)(a,{}),(0,n.jsx)("main",{className:"flex-grow",children:t}),(0,n.jsx)(u,{})]})}function d(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(c,{children:(0,n.jsx)(t,{...r})})}r(9543)},9543:()=>{},1664:(e,t,r)=>{e.exports=r(8342)}},e=>{var t=t=>e(e.s=t);e.O(0,[774,179],()=>(t(6840),t(3079))),_N_E=e.O()}]);