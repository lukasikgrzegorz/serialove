"use strict";(self.webpackChunkserialove=self.webpackChunkserialove||[]).push([[742],{4832:function(t,n,e){e.d(n,{Z:function(){return a}});e(2791);var r="DefaultButton_button__n94cH",i="DefaultButton_button-unselect__AyRMf DefaultButton_button__n94cH",u=e(184),a=function(t){var n=t.value,e=t.onClickHandler,a=t.unselect;t.isSmall;return(0,u.jsx)("button",{"data-testid":"button",className:a?i:r,onClick:e,children:n})}},742:function(t,n,e){e.r(n),e.d(n,{default:function(){return k}});var r=e(885),i=e(9434),u=e(2791),a=e(2915),c=e(4832),s="EmptyInfo_wrapper__FZBBh",o=e(184),l=function(){return(0,o.jsx)("div",{className:s,children:"Not added items!"})},d=e(6351),f="MyList_wrapper__RIdDR",m="MyList_button-holder__dFZCc",_="MyList_list__cONFv",h="MyList_item__sfcjL",g="ExtraButton_button__N283W",v=function(t){var n=t.value,e=t.onClickHandler,r=t.id;return(0,o.jsx)("button",{"data-testid":"button",id:r,className:g,onClick:e,children:n})},j="MyListItem_image-holder__tG5TV",x="MyListItem_image__R3aJ1",L="MyListItem_data__ULpjw",p="MyListItem_title__touB3",N=e(7087),y=function(t){var n=t.image,e=t.name,i=t.id,a=t.onClickHandler,c=t.toggle,s=(0,u.useState)(!0),l=(0,r.Z)(s,2),d=l[0],f=l[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:j,children:[(0,o.jsx)(N.LazyLoadImage,{alt:e,className:x,src:n?"https://image.tmdb.org/t/p/w200/".concat(n):"https://via.placeholder.com/200x300.png?text=SeriaLove",afterLoad:function(){f(!1)}}),!d&&(0,o.jsx)("div",{className:L,children:(0,o.jsx)("p",{className:p,children:e})})]}),!d&&(0,o.jsx)(v,{value:c?"Add to watched":"Remove",id:i,onClickHandler:a})]})},k=function(){var t=(0,i.v9)(d.ml),n=(0,i.v9)(d.s9),e=(0,i.I0)(),s=(0,u.useState)(!1),g=(0,r.Z)(s,2),v=g[0],j=g[1];(0,u.useEffect)((function(){localStorage.setItem("watched",JSON.stringify(t))}),[t]),(0,u.useEffect)((function(){localStorage.setItem("queque",JSON.stringify(n))}),[n]);var x=function(){j(!v)},L=function(t){var r=t.target.id;if(v){var i=n.filter((function(t){return t.id===r}))[0];e((0,a.Vc)(r)),e((0,a.FF)(i))}else e((0,a.tn)(r))};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("section",{className:f,children:[(0,o.jsxs)("div",{className:m,children:[(0,o.jsx)(c.Z,{value:"Watched",unselect:v,onClickHandler:x}),(0,o.jsx)(c.Z,{value:"Queque",unselect:!v,onClickHandler:x})]}),!v&&t&&t.length<1&&(0,o.jsx)(l,{}),v&&n&&n.length<1&&(0,o.jsx)(l,{}),(0,o.jsx)("ul",{className:_,children:(v?n:t).map((function(t){return(0,o.jsx)("li",{className:h,children:(0,o.jsx)(y,{image:t.cover,id:t.id,name:t.name,onClickHandler:L,toggle:v})},t.id)}))})]})})}},6351:function(t,n,e){e.d(n,{Aj:function(){return s},Hg:function(){return r},Hl:function(){return i},L:function(){return a},ZP:function(){return o},e:function(){return d},jr:function(){return m},km:function(){return f},ml:function(){return _},rj:function(){return c},s9:function(){return h},s_:function(){return l},uw:function(){return u}});var r=function(t){return t.trending.items},i=function(t){return t.trending.isLoading},u=function(t){return t.trending.error},a=function(t){return t.trending.actualItem},c=function(t){return t.search.hits},s=function(t){return t.search.isLoading},o=function(t){return t.search.error},l=function(t){return t.details.data},d=function(t){return t.details.cast},f=function(t){return t.details.isLoading},m=function(t){return t.details.error},_=function(t){return t.myList.watched},h=function(t){return t.myList.queque}}}]);
//# sourceMappingURL=742.3d2fad28.chunk.js.map