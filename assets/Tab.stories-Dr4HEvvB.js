import{j as h}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-CP2yOfOm.js";import{u as Ce,P as ke,C as De,a as Ae,j as Re,g as k,D as p,I as Me,O as Le,U as Fe}from"./componentbase.esm-CXBs-FDc.js";import{R as Ke}from"./ripple.esm-Ckuixj0S.js";import{c as Be}from"./classnames-lRq3rz0l.js";function B(){return B=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var l in r)({}).hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},B.apply(null,arguments)}function T(t){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},T(t)}function Ue(t,n){if(T(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var l=r.call(t,n);if(T(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function $e(t){var n=Ue(t,"string");return T(n)=="symbol"?n:n+""}function qe(t,n,r){return(n=$e(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function He(t){if(Array.isArray(t))return t}function ze(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l,i,b,u,c=[],v=!0,y=!1;try{if(b=(r=r.call(t)).next,n!==0)for(;!(v=(l=b.call(r)).done)&&(c.push(l.value),c.length!==n);v=!0);}catch(g){y=!0,i=g}finally{try{if(!v&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(y)throw i}}return c}}function Y(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=Array(n);r<n;r++)l[r]=t[r];return l}function Je(t,n){if(t){if(typeof t=="string")return Y(t,n);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(t,n):void 0}}function We(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(t,n){return He(t)||ze(t,n)||Je(t,n)||We()}var Xe={icon:function(n){var r=n._icon;return k("p-menuitem-icon",r)},label:"p-menuitem-text",action:"p-menuitem-link",menuitem:function(n){var r=n._className,l=n.active,i=n.disabled;return k("p-tabmenuitem",{"p-highlight":l,"p-disabled":i},r)},inkbar:"p-tabmenu-ink-bar",menu:"p-tabmenu-nav p-reset",root:"p-tabmenu p-component"},Ye=`
@layer primereact {
    .p-tabmenu {
        overflow-x: auto;
    }

    .p-tabmenu-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex-wrap: nowrap;
    }

    .p-tabmenu-nav a {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        text-decoration: none;
        overflow: hidden;
    }

    .p-tabmenu-nav a:focus {
        z-index: 1;
    }

    .p-tabmenu-nav .p-menuitem-text {
        line-height: 1;
    }

    .p-tabmenu-ink-bar {
        display: none;
        z-index: 1;
    }

    .p-tabmenu::-webkit-scrollbar {
        display: none;
    }
}
`,E=De.extend({defaultProps:{__TYPE:"TabMenu",id:null,model:null,activeIndex:0,ariaLabel:null,ariaLabelledBy:null,style:null,className:null,onTabChange:null,children:void 0},css:{classes:Xe,styles:Ye}});function Q(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,l)}return r}function V(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Q(Object(r),!0).forEach(function(l){qe(t,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(r,l))})}return t}var ne=s.memo(s.forwardRef(function(t,n){var r=Ce(),l=s.useContext(ke),i=E.getProps(t,l),b=s.useState(i.id),u=G(b,2),c=u[0],v=u[1],y=s.useState(i.activeIndex),g=G(y,2),D=g[0],A=g[1],P=s.useRef(null),I=s.useRef(null),d=s.useRef(null),ae=s.useRef({}),$=i.onTabChange?i.activeIndex:D,q={props:i,state:{id:c,activeIndex:$}},R=E.setMetaData(V({},q)),S=R.ptm,f=R.cx,re=R.isUnstyled,w=function(e,a,m){return S(e,{parent:q,context:{item:a,index:m}})};Ae(E.css.styles,re,{name:"tabmenu"});var M=function(e,a,m){if(a.disabled){e.preventDefault();return}a.command&&a.command({originalEvent:e,item:a}),i.onTabChange?i.onTabChange({originalEvent:e,value:a,index:m}):A(m),a.url||(e.preventDefault(),e.stopPropagation())},le=function(e){return e===($||0)},ie=function(){if(i.model){for(var e=d.current.children,a=!1,m=0;m<e.length;m++){var x=e[m];p.getAttribute(x,"data-p-highlight")&&(I.current.style.width=p.getWidth(x)+"px",I.current.style.left=p.getOffset(x).left-p.getOffset(d.current).left+"px",a=!0)}a||(I.current.style.width="0px",I.current.style.left="0px")}};Re(function(){c||v(Fe())}),s.useImperativeHandle(n,function(){return{props:i,getElement:function(){return P.current}}}),s.useEffect(function(){ie()});var se=function(e,a,m){switch(e.code){case"ArrowRight":oe(e.target),e.preventDefault();break;case"ArrowLeft":ce(e.target),e.preventDefault();break;case"Home":ue(e.target),e.preventDefault();break;case"End":me(e.target),e.preventDefault();break;case"Space":case"Enter":case"NumpadEnter":M(e,a,m),e.preventDefault();break;case"Tab":fe();break}},oe=function(e){var a=H(e);a&&_(e,a)},ce=function(e){var a=z(e);a&&_(e,a)},ue=function(e){var a=pe();a&&_(e,a)},me=function(e){var a=de();a&&_(e,a)},H=function(e){var a=e.parentElement.nextElementSibling;return a?p.getAttribute(a,"data-p-disabled")===!0?H(a.children[0]):a.children[0]:null},z=function(e){var a=e.parentElement.previousElementSibling;return a?p.getAttribute(a,"data-p-disabled")===!0?z(a.children[0]):a.children[0]:null},pe=function(){var e=p.findSingle(d.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e.children[0]:null},de=function(){var e=p.find(d.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},_=function(e,a){e.tabIndex="-1",a.tabIndex="0",a.focus()},fe=function(){var e=p.findSingle(d.current,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]'),a=p.findSingle(d.current,'[data-pc-section="action"][tabindex="0"]');a!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),a.tabIndex="-1")},be=function(e,a){if(e.visible===!1)return null;var m=e.className,x=e.style,j=e.disabled,L=e.icon,F=e.label,J=e.template,xe=e.url,Ne=e.target,W=e.id||c+"_"+a,O=le(a),Te=k("p-menuitem-icon",L),Pe=r({className:f("icon",{_icon:L})},w("icon",e,a)),Se=Me.getJSXIcon(L,V({},Pe),{props:i}),we=r({className:f("label")},w("label",e,a)),_e=F&&s.createElement("span",we,F),je=r({href:xe||"#",role:"menuitem","aria-label":F,tabIndex:O?"0":"-1",className:f("action"),target:Ne,onClick:function(N){return M(N,e,a)}},w("action",e,a)),K=s.createElement("a",je,Se,_e,s.createElement(Ke,null));if(J){var Oe={onClick:function(N){return M(N,e,a)},className:"p-menuitem-link",labelClassName:"p-menuitem-text",iconClassName:Te,element:K,props:i,active:O,index:a,disabled:j};K=Le.getJSXElement(J,e,Oe)}var Ee=r({ref:ae.current["tab_".concat(a)],id:W,onKeyDown:function(N){return se(N,e,a)},className:f("menuitem",{_className:m,active:O,disabled:j}),style:x,role:"presentation","data-p-highlight":O,"data-p-disabled":j||!1,"aria-disabled":j},w("menuitem",e,a));return s.createElement("li",B({},Ee,{key:W}),K)},ve=function(){return i.model.map(be)};if(i.model){var ye=ve(),ge=r({ref:I,role:"none",className:f("inkbar")},S("inkbar")),he=r({ref:d,"aria-label":i.ariaLabel,"aria-labelledby":i.ariaLabelledBy,className:f("menu"),role:"menubar"},S("menu")),Ie=r({id:i.id,ref:P,className:k(i.className,f("root")),style:i.style},E.getOtherProps(i),S("root"));return s.createElement("div",Ie,s.createElement("ul",he,ye,s.createElement("li",ge)))}return null}));ne.displayName="TabMenu";const U=t=>{const{className:n,prefixCls:r="tab",model:l,type:i="default",...b}=t,u=Be(r);return h.jsx("div",{className:u(void 0,[n,u(i)].join(" ").trim()),children:h.jsx(ne,{model:l==null?void 0:l.map(c=>({template:(v,y)=>{const{className:g,labelClassName:D,iconClassName:A,onClick:P}=y;return h.jsxs("div",{className:u("item",g),onClick:P,children:[c.icon!=null&&h.jsx("span",{className:A,children:c.icon}),c.label!=null&&h.jsx("strong",{className:u("item-label",D),children:c.label}),c.count!=null&&h.jsx("span",{className:u("item-count"),children:c.count})]})},...c})),...b})})};s.memo(U);U.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},model:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(TabMenuItem[number] & { count?: number })[]"},description:""},type:{required:!1,tsType:{name:"union",raw:"'default' | 'segment'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'segment'"}]},description:""}},composes:["Exclude"]};const tt={title:"Components/Tab",component:U,argTypes:{type:{control:"radio",options:["default","segment"]},className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"tab"},tags:["autodocs"]},C={args:{prefixCls:"tab",type:"default",model:[{label:"Password"},{label:"2FA settings",count:10},{label:"Limits",disabled:!0},{label:"Notifications"}]}};var Z,ee,te;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    prefixCls: 'tab',
    type: 'default',
    model: [{
      label: 'Password'
    }, {
      label: '2FA settings',
      count: 10
    }, {
      label: 'Limits',
      disabled: true
    }, {
      label: 'Notifications'
    }]
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const nt=["Primary"];export{C as Primary,nt as __namedExportsOrder,tt as default};
