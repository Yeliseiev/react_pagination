(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),r=c(4),i=c(1);c(10);var l=c(2),s=c.n(l),o=c(0),j=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,r=Array.from({length:Math.ceil(a/c)},(function(e,a){return a+1}));return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:1===t}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){return t>1&&n(t-1)},children:"\xab"})}),r.map((function(e){return Object(o.jsx)("li",{className:s()("page-item",{active:t===e}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(o.jsx)("li",{className:s()("page-item",{disabled:t===r.length}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===r.length,onClick:function(){return t<r.length&&n(t+1)},children:"\xbb"})})]})},d=function(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(i.useState)(5),a=Object(r.a)(e,2),c=a[0],t=a[1],n=Object(i.useState)(1),l=Object(r.a)(n,2),s=l[0],u=l[1],h=s*c,b=h-c;h>42&&(h=42);var p=d.slice(b,h);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(b+1," - ").concat(h," of ").concat(42,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){t(+e.target.value),u(1)},children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:42,perPage:c,currentPage:s,onPageChange:u}),Object(o.jsx)("ul",{children:p.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.08931a2a.chunk.js.map