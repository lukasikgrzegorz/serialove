"use strict";(self.webpackChunkserialove=self.webpackChunkserialove||[]).push([[212],{5700:function(e,t,n){n.d(t,{Z:function(){return i}});var r="Container_container__-GbUA",o=n(184),i=function(e){var t=e.children;return(0,o.jsx)("div",{className:r,children:t})}},2819:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(885),o=n(2791),i="DecorativeContainer_container__aCsby",s="DecorativeContainer_container-small__Th462 DecorativeContainer_container__aCsby",a="DecorativeContainer_image-wrapper__Q15z0",c="DecorativeContainer_image__lgUwd",l="DecorativeContainer_text-backdrop__Y1VXR",u=n(2447),p=n(184),d=function(e){var t=e.children,n=e.image,d=e.isSmall,h=e.alt,f=(0,o.useState)(!1),v=(0,r.Z)(f,2),m=v[0],g=v[1];(0,o.useEffect)((function(){g(!1)}),[n]);return(0,p.jsxs)(p.Fragment,{children:[!m&&n&&(0,p.jsx)(u.Z,{}),(0,p.jsxs)("div",{className:d?s:i,children:[(0,p.jsx)("div",{className:l,children:t}),(0,p.jsx)("div",{className:a,children:n&&(0,p.jsx)("img",{onLoad:function(){g(!0)},className:c,src:"https://image.tmdb.org/t/p/w1280/".concat(n),loading:"lazy",alt:h})})]})]})}},4832:function(e,t,n){n.d(t,{Z:function(){return s}});n(2791);var r="DefaultButton_button__n94cH",o="DefaultButton_button-unselect__AyRMf DefaultButton_button__n94cH",i=n(184),s=function(e){var t=e.value,n=e.onClickHandler,s=e.unselect;e.isSmall;return(0,i.jsx)("button",{className:s?o:r,onClick:n,children:t})}},9212:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r,o,i=n(2791),s=n(9434),a=n(7689),c=n(6905),l=n(6731),u=n(2915),p=n(6351),d=n(2447),h=n(5700),f=n(2819),v="Seasons_image__+07ed",m="Seasons_list__4REbB",g="Seasons_item__tlXfN",_="Seasons_title__V7Acw",x=function(e,t){return(x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},b=(o=r={path:void 0,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=typeof o;if("string"===i||"number"===i)n.push(o);else if(Array.isArray(o)&&o.length){var s=t.apply(null,o);s&&n.push(s)}else if("object"===i)for(var a in o)e.call(o,a)&&o[a]&&n.push(a)}}return n.join(" ")}o.exports?(t.default=t,o.exports=t):window.classNames=t}(),r.exports);function j(e,t,n){var r,o,i,s,a;function c(){var l=Date.now()-s;l<t&&l>=0?r=setTimeout(c,t-l):(r=null,n||(a=e.apply(i,o),i=o=null))}null==t&&(t=100);var l=function(){i=this,o=arguments,s=Date.now();var l=n&&!r;return r||(r=setTimeout(c,t)),l&&(a=e.apply(i,o),i=o=null),a};return l.clear=function(){r&&(clearTimeout(r),r=null)},l.flush=function(){r&&(a=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},l}j.debounce=j;var w=j;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n");var y,S=(y="indiana-scroll-container",function(e,t){if(!e)return y;var n;"string"==typeof e?n=e:t=e;var r=y;return n&&(r+="__"+n),r+(t?Object.keys(t).reduce((function(e,n){var o=t[n];return o&&(e+=" "+("boolean"==typeof o?r+"--"+n:r+"--"+n+"_"+o)),e}),""):"")}),E=function(e){function t(t){var n=e.call(this,t)||this;return n.onEndScroll=function(){n.scrolling=!1,!n.pressed&&n.started&&n.processEnd()},n.onScroll=function(e){var t=n.container.current;t.scrollLeft===n.scrollLeft&&t.scrollTop===n.scrollTop||(n.scrolling=!0,n.processScroll(e),n.onEndScroll())},n.onTouchStart=function(e){var t=n.props.nativeMobileScroll;if(n.isDraggable(e.target))if(n.internal=!0,t&&n.scrolling)n.pressed=!0;else{var r=e.touches[0];n.processClick(e,r.clientX,r.clientY),!t&&n.props.stopPropagation&&e.stopPropagation()}},n.onTouchEnd=function(e){var t=n.props.nativeMobileScroll;n.pressed&&(!n.started||n.scrolling&&t?n.pressed=!1:n.processEnd(),n.forceUpdate())},n.onTouchMove=function(e){var t=n.props.nativeMobileScroll;if(n.pressed&&(!t||!n.isMobile)){var r=e.touches[0];r&&n.processMove(e,r.clientX,r.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation()}},n.onMouseDown=function(e){n.isDraggable(e.target)&&n.isScrollable()&&(n.internal=!0,-1!==n.props.buttons.indexOf(e.button)&&(n.processClick(e,e.clientX,e.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation()))},n.onMouseMove=function(e){n.pressed&&(n.processMove(e,e.clientX,e.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.onMouseUp=function(e){n.pressed&&(n.started?n.processEnd():(n.internal=!1,n.pressed=!1,n.forceUpdate(),n.props.onClick&&n.props.onClick(e)),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.container=i.createRef(),n.onEndScroll=w(n.onEndScroll,300),n.scrolling=!1,n.started=!1,n.pressed=!1,n.internal=!1,n.getRef=n.getRef.bind(n),n}return function(e,t){function n(){this.constructor=e}x(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){var e=this.props.nativeMobileScroll,t=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),t.addEventListener("touchstart",this.onTouchStart,{passive:!1}),t.addEventListener("mousedown",this.onMouseDown,{passive:!1}),e&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())},t.prototype.componentWillUnmount=function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},t.prototype.getElement=function(){return this.container.current},t.prototype.isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},t.prototype.isDraggable=function(e){var t=this.props.ignoreElements;if(t){var n=e.closest(t);return null===n||n.contains(this.getElement())}return!0},t.prototype.isScrollable=function(){var e=this.container.current;return e&&(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight)},t.prototype.processClick=function(e,t,n){var r=this.container.current;this.scrollLeft=r.scrollLeft,this.scrollTop=r.scrollTop,this.clientX=t,this.clientY=n,this.pressed=!0},t.prototype.processStart=function(e){void 0===e&&(e=!0);var t=this.props.onStartScroll;this.started=!0,e&&document.body.classList.add("indiana-dragging"),t&&t({external:!this.internal}),this.forceUpdate()},t.prototype.processScroll=function(e){if(this.started){var t=this.props.onScroll;t&&t({external:!this.internal})}else this.processStart(!1)},t.prototype.processMove=function(e,t,n){var r=this.props,o=r.horizontal,i=r.vertical,s=r.activationDistance,a=r.onScroll,c=this.container.current;this.started?(o&&(c.scrollLeft-=t-this.clientX),i&&(c.scrollTop-=n-this.clientY),a&&a({external:!this.internal}),this.clientX=t,this.clientY=n,this.scrollLeft=c.scrollLeft,this.scrollTop=c.scrollTop):(o&&Math.abs(t-this.clientX)>s||i&&Math.abs(n-this.clientY)>s)&&(this.clientX=t,this.clientY=n,this.processStart())},t.prototype.processEnd=function(){var e=this.props.onEndScroll;this.container.current&&e&&e({external:!this.internal}),this.pressed=!1,this.started=!1,this.scrolling=!1,this.internal=!1,document.body.classList.remove("indiana-dragging"),this.forceUpdate()},t.prototype.getRef=function(e){[this.container,this.props.innerRef].forEach((function(t){t&&("function"==typeof t?t(e):t.current=e)}))},t.prototype.render=function(){var e=this.props,t=e.children,n=e.draggingClassName,r=e.className,o=e.style,s=e.hideScrollbars,a=e.component;return i.createElement(a,{className:b(r,this.pressed&&n,S({dragging:this.pressed,"hide-scrollbars":s,"native-scroll":this.isMobile})),style:o,ref:this.getRef,onScroll:this.onScroll},t)},t.defaultProps={nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{},component:"div",buttons:[0]},t}(i.PureComponent),D=E,L=n(7087),M=n(184),N=function(e){var t=e.data;return(0,M.jsx)(D,{className:m,children:t.map((function(e){return(0,M.jsxs)("div",{className:g,children:[(0,M.jsx)(L.LazyLoadImage,{className:v,src:e.poster_path?"https://image.tmdb.org/t/p/w200/".concat(e.poster_path):"https://via.placeholder.com/200x300.png?text=SeriaLove"}),(0,M.jsx)("div",{children:(0,M.jsxs)("ul",{children:[(0,M.jsx)("li",{className:_,children:e.name}),(0,M.jsxs)("li",{children:["Air date: ",e.air_date]}),(0,M.jsxs)("li",{children:["Episodes: ",e.episode_count]})]})})]},e.id)}))})},C="Cast_image__cP187",k="Cast_list__I70tX",T="Cast_item__GFc37",P="Cast_title__ElAqq",U=function(e){var t=e.data;return(0,M.jsx)(D,{className:k,children:t.map((function(e){return(0,M.jsxs)("div",{className:T,children:[(0,M.jsx)(L.LazyLoadImage,{className:C,src:e.profile_path?"https://www.themoviedb.org/t/p/w200/".concat(e.profile_path):"https://via.placeholder.com/200x300?text=SeriaLove",alt:e.name}),(0,M.jsxs)("div",{children:[(0,M.jsx)("p",{className:P,children:e.name}),(0,M.jsx)("p",{children:e.character})]})]},e.id)}))})},H=n(4832),O="SeriesDetails_wrapper__f5+MD",X="SeriesDetails_image__Kp9vl",Y="SeriesDetails_info__nYREY",A="SeriesDetails_title__vHSxj",R="SeriesDetails_accent__+MSmV",Z="SeriesDetails_season-title__vhuQF",F="SeriesDetails_back-btn__p+irU",I=function(){var e,t,n=(0,a.UO)().seriesID,r=(0,s.I0)(),o=(0,s.v9)(p.s_),v=(0,s.v9)(p.e),m=(0,s.v9)(p.km),g=(0,s.v9)(p.jr),_=(0,s.v9)(p.ml),x=(0,s.v9)(p.s9),b=_.some((function(e){return e.id===n})),j=x.some((function(e){return e.id===n})),w=null!==(e=null===(t=(0,a.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";(0,i.useEffect)((function(){r((0,c.Hj)(n)),window.scrollTo({top:0,behavior:"smooth"})}),[]),(0,i.useEffect)((function(){localStorage.setItem("watched",JSON.stringify(_))}),[_]),(0,i.useEffect)((function(){localStorage.setItem("queque",JSON.stringify(x))}),[x]);return(0,M.jsxs)(M.Fragment,{children:[m&&!g&&(0,M.jsx)(d.Z,{}),(0,M.jsx)(f.Z,{image:o.backdrop_path,alt:o.name,isSmall:!0,children:(0,M.jsxs)("div",{className:O,children:[(0,M.jsx)(l.rU,{to:w,children:(0,M.jsx)("button",{className:F,type:"button",children:"Go back"})}),(0,M.jsx)(L.LazyLoadImage,{className:X,src:o.poster_path?"https://image.tmdb.org/t/p/w500/".concat(o.poster_path):"https://via.placeholder.com/500x750.png?text=SeriaLove"}),(0,M.jsxs)("div",{className:Y,children:[(0,M.jsx)("h2",{className:A,children:o.name}),(0,M.jsxs)("ul",{children:[(0,M.jsx)("li",{children:o.genres&&o.genres.map((function(e){return e.name})).join(", ")}),(0,M.jsxs)("li",{children:["Rating:"," ",(0,M.jsx)("span",{className:R,children:o.vote_average&&o.vote_average.toFixed(1)})]}),(0,M.jsxs)("li",{children:["Votes: ",(0,M.jsx)("span",{className:R,children:o.vote_count})]}),(0,M.jsxs)("li",{children:["Pupularity: ",(0,M.jsx)("span",{className:R,children:o.popularity})]})]}),(0,M.jsxs)("div",{children:[(0,M.jsx)(H.Z,{value:"Watched",onClickHandler:function(e){j&&r((0,u.Vc)(n)),r(b?(0,u.tn)(n):(0,u.FF)({id:n,name:o.name,cover:o.poster_path}))},unselect:!b}),(0,M.jsx)(H.Z,{value:"Queque",onClickHandler:function(e){b&&r((0,u.tn)(n)),r(j?(0,u.Vc)(n):(0,u.pQ)({id:n,name:o.name,cover:o.poster_path}))},unselect:!j})]})]})]})}),(0,M.jsxs)(h.Z,{children:[o.overview&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("h2",{className:Z,children:"Overview"}),(0,M.jsx)("p",{children:o.overview})]}),v&&v.length>0&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("h2",{className:Z,children:"Cast"}),(0,M.jsx)(U,{data:v})]}),o.seasons&&o.seasons.length>0&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("h2",{className:Z,children:"Seasons"}),(0,M.jsx)(N,{data:o.seasons})]})]})]})}},6351:function(e,t,n){n.d(t,{Aj:function(){return c},Hg:function(){return r},Hl:function(){return o},L:function(){return s},ZP:function(){return l},e:function(){return p},jr:function(){return h},km:function(){return d},ml:function(){return f},rj:function(){return a},s9:function(){return v},s_:function(){return u},uw:function(){return i}});var r=function(e){return e.trending.items},o=function(e){return e.trending.isLoading},i=function(e){return e.trending.error},s=function(e){return e.trending.actualItem},a=function(e){return e.search.hits},c=function(e){return e.search.isLoading},l=function(e){return e.search.error},u=function(e){return e.details.data},p=function(e){return e.details.cast},d=function(e){return e.details.isLoading},h=function(e){return e.details.error},f=function(e){return e.myList.watched},v=function(e){return e.myList.queque}}}]);
//# sourceMappingURL=212.ff43205b.chunk.js.map