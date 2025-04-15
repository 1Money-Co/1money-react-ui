import{j as h}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-CP2yOfOm.js";import{u as Ce,P as ke,C as De,a as Ae,j as Re,g as C,D as m,I as Me,O as Le,U as Fe}from"./componentbase.esm-BsReUg3j.js";import{R as Ke}from"./ripple.esm-CWnDe1CI.js";import{c as Be}from"./classnames-lRq3rz0l.js";function K(){return K=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var l in r)({}).hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},K.apply(null,arguments)}function T(t){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},T(t)}function Ue(t,n){if(T(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var l=r.call(t,n);if(T(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function $e(t){var n=Ue(t,"string");return T(n)=="symbol"?n:n+""}function qe(t,n,r){return(n=$e(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function He(t){if(Array.isArray(t))return t}function ze(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l,s,p,c,f=[],d=!0,y=!1;try{if(p=(r=r.call(t)).next,n!==0)for(;!(d=(l=p.call(r)).done)&&(f.push(l.value),f.length!==n);d=!0);}catch(g){y=!0,s=g}finally{try{if(!d&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(y)throw s}}return f}}function Y(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,l=Array(n);r<n;r++)l[r]=t[r];return l}function Je(t,n){if(t){if(typeof t=="string")return Y(t,n);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(t,n):void 0}}function We(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(t,n){return He(t)||ze(t,n)||Je(t,n)||We()}var Xe={icon:function(n){var r=n._icon;return C("p-menuitem-icon",r)},label:"p-menuitem-text",action:"p-menuitem-link",menuitem:function(n){var r=n._className,l=n.active,s=n.disabled;return C("p-tabmenuitem",{"p-highlight":l,"p-disabled":s},r)},inkbar:"p-tabmenu-ink-bar",menu:"p-tabmenu-nav p-reset",root:"p-tabmenu p-component"},Ye=`
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
`,j=De.extend({defaultProps:{__TYPE:"TabMenu",id:null,model:null,activeIndex:0,ariaLabel:null,ariaLabelledBy:null,style:null,className:null,onTabChange:null,children:void 0},css:{classes:Xe,styles:Ye}});function Q(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,l)}return r}function V(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Q(Object(r),!0).forEach(function(l){qe(t,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(r,l))})}return t}var ne=i.memo(i.forwardRef(function(t,n){var r=Ce(),l=i.useContext(ke),s=j.getProps(t,l),p=i.useState(s.id),c=G(p,2),f=c[0],d=c[1],y=i.useState(s.activeIndex),g=G(y,2),k=g[0],D=g[1],U=i.useRef(null),I=i.useRef(null),b=i.useRef(null),ae=i.useRef({}),$=s.onTabChange?s.activeIndex:k,q={props:s,state:{id:f,activeIndex:$}},A=j.setMetaData(V({},q)),P=A.ptm,v=A.cx,re=A.isUnstyled,S=function(e,a,u){return P(e,{parent:q,context:{item:a,index:u}})};Ae(j.css.styles,re,{name:"tabmenu"});var R=function(e,a,u){if(a.disabled){e.preventDefault();return}a.command&&a.command({originalEvent:e,item:a}),s.onTabChange?s.onTabChange({originalEvent:e,value:a,index:u}):D(u),a.url||(e.preventDefault(),e.stopPropagation())},le=function(e){return e===($||0)},se=function(){if(s.model){for(var e=b.current.children,a=!1,u=0;u<e.length;u++){var x=e[u];m.getAttribute(x,"data-p-highlight")&&(I.current.style.width=m.getWidth(x)+"px",I.current.style.left=m.getOffset(x).left-m.getOffset(b.current).left+"px",a=!0)}a||(I.current.style.width="0px",I.current.style.left="0px")}};Re(function(){f||d(Fe())}),i.useImperativeHandle(n,function(){return{props:s,getElement:function(){return U.current}}}),i.useEffect(function(){se()});var ie=function(e,a,u){switch(e.code){case"ArrowRight":oe(e.target),e.preventDefault();break;case"ArrowLeft":ce(e.target),e.preventDefault();break;case"Home":ue(e.target),e.preventDefault();break;case"End":me(e.target),e.preventDefault();break;case"Space":case"Enter":case"NumpadEnter":R(e,a,u),e.preventDefault();break;case"Tab":de();break}},oe=function(e){var a=H(e);a&&w(e,a)},ce=function(e){var a=z(e);a&&w(e,a)},ue=function(e){var a=pe();a&&w(e,a)},me=function(e){var a=fe();a&&w(e,a)},H=function(e){var a=e.parentElement.nextElementSibling;return a?m.getAttribute(a,"data-p-disabled")===!0?H(a.children[0]):a.children[0]:null},z=function(e){var a=e.parentElement.previousElementSibling;return a?m.getAttribute(a,"data-p-disabled")===!0?z(a.children[0]):a.children[0]:null},pe=function(){var e=m.findSingle(b.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e.children[0]:null},fe=function(){var e=m.find(b.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},w=function(e,a){e.tabIndex="-1",a.tabIndex="0",a.focus()},de=function(){var e=m.findSingle(b.current,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]'),a=m.findSingle(b.current,'[data-pc-section="action"][tabindex="0"]');a!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),a.tabIndex="-1")},be=function(e,a){if(e.visible===!1)return null;var u=e.className,x=e.style,_=e.disabled,M=e.icon,L=e.label,J=e.template,xe=e.url,Ne=e.target,W=e.id||f+"_"+a,O=le(a),Te=C("p-menuitem-icon",M),Pe=r({className:v("icon",{_icon:M})},S("icon",e,a)),Se=Me.getJSXIcon(M,V({},Pe),{props:s}),we=r({className:v("label")},S("label",e,a)),_e=L&&i.createElement("span",we,L),Oe=r({href:xe||"#",role:"menuitem","aria-label":L,tabIndex:O?"0":"-1",className:v("action"),target:Ne,onClick:function(N){return R(N,e,a)}},S("action",e,a)),F=i.createElement("a",Oe,Se,_e,i.createElement(Ke,null));if(J){var je={onClick:function(N){return R(N,e,a)},className:"p-menuitem-link",labelClassName:"p-menuitem-text",iconClassName:Te,element:F,props:s,active:O,index:a,disabled:_};F=Le.getJSXElement(J,e,je)}var Ee=r({ref:ae.current["tab_".concat(a)],id:W,onKeyDown:function(N){return ie(N,e,a)},className:v("menuitem",{_className:u,active:O,disabled:_}),style:x,role:"presentation","data-p-highlight":O,"data-p-disabled":_||!1,"aria-disabled":_},S("menuitem",e,a));return i.createElement("li",K({},Ee,{key:W}),F)},ve=function(){return s.model.map(be)};if(s.model){var ye=ve(),ge=r({ref:I,role:"none",className:v("inkbar")},P("inkbar")),he=r({ref:b,"aria-label":s.ariaLabel,"aria-labelledby":s.ariaLabelledBy,className:v("menu"),role:"menubar"},P("menu")),Ie=r({id:s.id,ref:U,className:C(s.className,v("root")),style:s.style},j.getOtherProps(s),P("root"));return i.createElement("div",Ie,i.createElement("ul",he,ye,i.createElement("li",ge)))}return null}));ne.displayName="TabMenu";const B=t=>{const{className:n,prefixCls:r="tab",model:l,...s}=t,p=Be(r);return h.jsx("div",{className:p(void 0,n),children:h.jsx(ne,{model:l==null?void 0:l.map(c=>({template:(f,d)=>{const{className:y,labelClassName:g,iconClassName:k,onClick:D}=d;return h.jsxs("div",{className:p("item",y),onClick:D,children:[c.icon!=null&&h.jsx("span",{className:k,children:c.icon}),c.label!=null&&h.jsx("strong",{className:p("item-label",g),children:c.label}),c.count!=null&&h.jsx("span",{className:p("item-count"),children:c.count})]})},...c})),...s})})};i.memo(B);B.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},model:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(TabMenuItem[number] & { count?: number })[]"},description:""}},composes:["Exclude"]};const tt={title:"Components/Tab",component:B,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"tab"},tags:["autodocs"]},E={args:{prefixCls:"tab",model:[{label:"Password"},{label:"2FA settings",count:10},{label:"Limits"}]}};var Z,ee,te;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    prefixCls: 'tab',
    model: [{
      label: 'Password'
    }, {
      label: '2FA settings',
      count: 10
    }, {
      label: 'Limits'
    }]
  }
}`,...(te=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const nt=["Primary"];export{E as Primary,nt as __namedExportsOrder,tt as default};
