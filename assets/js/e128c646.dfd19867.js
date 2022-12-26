"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>j,contentTitle:()=>w,default:()=>x,frontMatter:()=>O,metadata:()=>k,toc:()=>D});var n=r(7462),a=r(7294),o=r(3905),i=r(6010),c=r(2802),l=r(9960),s=r(3919),u=r(5999);const m="cardContainer_fWXF",p="cardTitle_rnsV",d="cardDescription_PWke";function f(e){let{href:t,children:r}=e;return a.createElement(l.Z,{href:t,className:(0,i.Z)("card padding--lg",m)},r)}function y(e){let{href:t,icon:r,title:n,description:o}=e;return a.createElement(f,{href:t},a.createElement("h2",{className:(0,i.Z)("text--truncate",p),title:n},r," ",n),o&&a.createElement("p",{className:(0,i.Z)("text--truncate",d),title:o},o))}function b(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?a.createElement(y,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.xz)(t.docId??void 0);return a.createElement(y,{href:t.href,icon:r,title:t.label,description:n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function E(e){let{className:t}=e;const r=(0,c.jA)();return a.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return a.createElement(E,e);const n=(0,c.MN)(t);return a.createElement("section",{className:(0,i.Z)("row",r)},n.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(h,{item:e})))))}const O={description:"\u5404\u4e2a\u6e38\u620f\u7684\u8054\u673a\u7aef\u53e3\u83b7\u53d6\u65b9\u5f0f\u4e0d\u540c,\u8fd9\u91cc\u5c06\u6559\u5982\u679c\u4f7f\u7528"},w="\u5b98\u65b9\u6559\u7a0b",k={unversionedId:"tutorial/README",id:"tutorial/README",title:"\u5b98\u65b9\u6559\u7a0b",description:"\u5404\u4e2a\u6e38\u620f\u7684\u8054\u673a\u7aef\u53e3\u83b7\u53d6\u65b9\u5f0f\u4e0d\u540c,\u8fd9\u91cc\u5c06\u6559\u5982\u679c\u4f7f\u7528",source:"@site/docs/tutorial/README.md",sourceDirName:"tutorial",slug:"/tutorial/",permalink:"/tutorial/",draft:!1,editUrl:"https://github.com/vlssu/docs-natgo/tree/master/docs/tutorial/README.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1672029792,formattedLastUpdatedAt:"2022\u5e7412\u670826\u65e5",frontMatter:{description:"\u5404\u4e2a\u6e38\u620f\u7684\u8054\u673a\u7aef\u53e3\u83b7\u53d6\u65b9\u5f0f\u4e0d\u540c,\u8fd9\u91cc\u5c06\u6559\u5982\u679c\u4f7f\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u6b22\u8fce\u6d4f\u89c8 NetPlus \u7528\u6237\u4f7f\u7528\u624b\u518c\uff01",permalink:"/"},next:{title:"Minecraft\u7c7b\u578b",permalink:"/tutorial/minecraft"}},j={},D=[],N={toc:D};function x(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},N,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5b98\u65b9\u6559\u7a0b"},"\u5b98\u65b9\u6559\u7a0b"),(0,o.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u4f60\u9700\u8981\u7684\u670d\u52a1\u5668,\u8bf7\u63d0\u4ea4 issue ,\u5f53\u7136\u5982\u679c\u53ef\u4ee5,\u4f60\u53ef\u4ee5\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e9b\u6559\u7a0b. \u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vlssu/docs-natgo/new/master/docs/tutorial"},"GitHub \u62c9\u53d6\u8bf7\u6c42")," \u8d21\u732e\u66f4\u591a\u6559\u7a0b.(\u8bf7\u4f7f\u7528 markdown \u6765\u8fdb\u884c\u7f16\u5199)"),(0,o.kt)(v,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}x.isMDXComponent=!0}}]);