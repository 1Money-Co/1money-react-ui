import{j as h}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-CP2yOfOm.js";import{u as Ee,P as ke,C as De,a as Ae,e as Re,c as k,D as p,I as Me,O as Le,U as Fe}from"./componentbase.esm-DE4kFom5.js";import{R as Ke}from"./ripple.esm-eZGA0mH3.js";import{c as Be}from"./classnames-lRq3rz0l.js";function B(){return B=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)({}).hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},B.apply(null,arguments)}function T(t){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},T(t)}function Ue(t,n){if(T(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var s=r.call(t,n);if(T(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function qe(t){var n=Ue(t,"string");return T(n)=="symbol"?n:n+""}function $e(t,n,r){return(n=qe(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function He(t){if(Array.isArray(t))return t}function ze(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var s,l,y,d,c=[],u=!0,I=!1;try{if(y=(r=r.call(t)).next,n!==0)for(;!(u=(s=y.call(r)).done)&&(c.push(s.value),c.length!==n);u=!0);}catch(g){I=!0,l=g}finally{try{if(!u&&r.return!=null&&(d=r.return(),Object(d)!==d))return}finally{if(I)throw l}}return c}}function Y(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,s=Array(n);r<n;r++)s[r]=t[r];return s}function Je(t,n){if(t){if(typeof t=="string")return Y(t,n);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(t,n):void 0}}function We(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(t,n){return He(t)||ze(t,n)||Je(t,n)||We()}var Xe={icon:function(n){var r=n._icon;return k("p-menuitem-icon",r)},label:"p-menuitem-text",action:"p-menuitem-link",menuitem:function(n){var r=n._className,s=n.active,l=n.disabled;return k("p-tabmenuitem",{"p-highlight":s,"p-disabled":l},r)},inkbar:"p-tabmenu-ink-bar",menu:"p-tabmenu-nav p-reset",root:"p-tabmenu p-component"},Ye=`
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
`,O=De.extend({defaultProps:{__TYPE:"TabMenu",id:null,model:null,activeIndex:0,ariaLabel:null,ariaLabelledBy:null,style:null,className:null,onTabChange:null,children:void 0},css:{classes:Xe,styles:Ye}});function Q(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),r.push.apply(r,s)}return r}function V(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Q(Object(r),!0).forEach(function(s){$e(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}var ne=i.memo(i.forwardRef(function(t,n){var r=Ee(),s=i.useContext(ke),l=O.getProps(t,s),y=i.useState(l.id),d=G(y,2),c=d[0],u=d[1],I=i.useState(l.activeIndex),g=G(I,2),D=g[0],A=g[1],P=i.useRef(null),f=i.useRef(null),b=i.useRef(null),ae=i.useRef({}),q=l.onTabChange?l.activeIndex:D,$={props:l,state:{id:c,activeIndex:q}},R=O.setMetaData(V({},$)),S=R.ptm,v=R.cx,re=R.isUnstyled,w=function(e,a,m){return S(e,{parent:$,context:{item:a,index:m}})};Ae(O.css.styles,re,{name:"tabmenu"});var M=function(e,a,m){if(a.disabled){e.preventDefault();return}a.command&&a.command({originalEvent:e,item:a}),l.onTabChange?l.onTabChange({originalEvent:e,value:a,index:m}):A(m),a.url||(e.preventDefault(),e.stopPropagation())},le=function(e){return e===(q||0)},se=function(){if(l.model){for(var e=b.current.children,a=!1,m=0;m<e.length;m++){var x=e[m];p.getAttribute(x,"data-p-highlight")&&(f.current.style.width=p.getWidth(x)+"px",f.current.style.left=p.getOffset(x).left-p.getOffset(b.current).left+"px",a=!0)}a||(f.current.style.width="0px",f.current.style.left="0px")}};Re(function(){c||u(Fe())}),i.useImperativeHandle(n,function(){return{props:l,getElement:function(){return P.current}}}),i.useEffect(function(){se()});var ie=function(e,a,m){switch(e.code){case"ArrowRight":oe(e.target),e.preventDefault();break;case"ArrowLeft":ce(e.target),e.preventDefault();break;case"Home":ue(e.target),e.preventDefault();break;case"End":me(e.target),e.preventDefault();break;case"Space":case"Enter":case"NumpadEnter":M(e,a,m),e.preventDefault();break;case"Tab":fe();break}},oe=function(e){var a=H(e);a&&C(e,a)},ce=function(e){var a=z(e);a&&C(e,a)},ue=function(e){var a=pe();a&&C(e,a)},me=function(e){var a=de();a&&C(e,a)},H=function(e){var a=e.parentElement.nextElementSibling;return a?p.getAttribute(a,"data-p-disabled")===!0?H(a.children[0]):a.children[0]:null},z=function(e){var a=e.parentElement.previousElementSibling;return a?p.getAttribute(a,"data-p-disabled")===!0?z(a.children[0]):a.children[0]:null},pe=function(){var e=p.findSingle(b.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e.children[0]:null},de=function(){var e=p.find(b.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},C=function(e,a){e.tabIndex="-1",a.tabIndex="0",a.focus()},fe=function(){var e=p.findSingle(b.current,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]'),a=p.findSingle(b.current,'[data-pc-section="action"][tabindex="0"]');a!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),a.tabIndex="-1")},be=function(e,a){if(e.visible===!1)return null;var m=e.className,x=e.style,_=e.disabled,L=e.icon,F=e.label,J=e.template,xe=e.url,Ne=e.target,W=e.id||c+"_"+a,j=le(a),Te=k("p-menuitem-icon",L),Pe=r({className:v("icon",{_icon:L})},w("icon",e,a)),Se=Me.getJSXIcon(L,V({},Pe),{props:l}),we=r({className:v("label")},w("label",e,a)),Ce=F&&i.createElement("span",we,F),_e=r({href:xe||"#",role:"menuitem","aria-label":F,tabIndex:j?"0":"-1",className:v("action"),target:Ne,onClick:function(N){return M(N,e,a)}},w("action",e,a)),K=i.createElement("a",_e,Se,Ce,i.createElement(Ke,null));if(J){var je={onClick:function(N){return M(N,e,a)},className:"p-menuitem-link",labelClassName:"p-menuitem-text",iconClassName:Te,element:K,props:l,active:j,index:a,disabled:_};K=Le.getJSXElement(J,e,je)}var Oe=r({ref:ae.current["tab_".concat(a)],id:W,onKeyDown:function(N){return ie(N,e,a)},className:v("menuitem",{_className:m,active:j,disabled:_}),style:x,role:"presentation","data-p-highlight":j,"data-p-disabled":_||!1,"aria-disabled":_},w("menuitem",e,a));return i.createElement("li",B({},Oe,{key:W}),K)},ve=function(){return l.model.map(be)};if(l.model){var ye=ve(),ge=r({ref:f,role:"none",className:v("inkbar")},S("inkbar")),he=r({ref:b,"aria-label":l.ariaLabel,"aria-labelledby":l.ariaLabelledBy,className:v("menu"),role:"menubar"},S("menu")),Ie=r({id:l.id,ref:P,className:k(l.className,v("root")),style:l.style},O.getOtherProps(l),S("root"));return i.createElement("div",Ie,i.createElement("ul",he,ye,i.createElement("li",ge)))}return null}));ne.displayName="TabMenu";const U=t=>{const{className:n,lableClassName:r,prefixCls:s="tab",model:l,type:y="default",...d}=t,c=Be(s);return h.jsx("div",{className:c(void 0,[n,c(y)].join(" ").trim()),children:h.jsx(ne,{model:l==null?void 0:l.map(u=>({template:(I,g)=>{const{className:D,labelClassName:A,iconClassName:P,onClick:f}=g;return h.jsxs("div",{className:[c("item",D),r].join(" ").trim(),onClick:f,children:[u.icon!=null&&h.jsx("span",{className:P,children:u.icon}),u.label!=null&&h.jsx("strong",{className:c("item-label",A),children:u.label}),u.count!=null&&h.jsx("span",{className:c("item-count"),children:u.count})]})},...u})),...d})})};i.memo(U);U.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},lableClassName:{required:!1,tsType:{name:"string"},description:""},model:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(TabMenuItem[number] & { count?: number })[]"},description:""},type:{required:!1,tsType:{name:"union",raw:"'default' | 'segment'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'segment'"}]},description:""}},composes:["Exclude"]};const tt={title:"Components/Tab",component:U,argTypes:{type:{control:"radio",options:["default","segment"]},className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"tab"},tags:["autodocs"]},E={args:{prefixCls:"tab",lableClassName:"yyyy",model:[{label:"Password"},{label:"2FA settings",count:10},{label:"Limits",disabled:!0},{label:"Notifications"}]}};var Z,ee,te;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    prefixCls: 'tab',
    // type: 'segment',
    lableClassName: 'yyyy',
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
}`,...(te=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const nt=["Primary"];export{E as Primary,nt as __namedExportsOrder,tt as default};
