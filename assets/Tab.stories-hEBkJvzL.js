import{j as J}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-DGOumNSj.js";import{u as je,P as ke,C as De,a as Re,j as Ae,g as C,D as u,I as Me,O as Le,U as Fe}from"./componentbase.esm-BdcVyoov.js";import{R as Ke}from"./ripple.esm-D6Nhrw2g.js";import{c as Be}from"./classnames-CPOy7I0U.js";function M(){return M=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},M.apply(this,arguments)}function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},h(t)}function Ue(t,n){if(h(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,n);if(h(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function $e(t){var n=Ue(t,"string");return h(n)==="symbol"?n:String(n)}function He(t,n,r){return n=$e(n),n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function qe(t){if(Array.isArray(t))return t}function ze(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i,l,I,d,m=[],b=!0,x=!1;try{if(I=(r=r.call(t)).next,n!==0)for(;!(b=(i=I.call(r)).done)&&(m.push(i.value),m.length!==n);b=!0);}catch(P){x=!0,l=P}finally{try{if(!b&&r.return!=null&&(d=r.return(),Object(d)!==d))return}finally{if(x)throw l}}return m}}function W(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=t[r];return i}function Je(t,n){if(t){if(typeof t=="string")return W(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(t,n)}}function We(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(t,n){return qe(t)||ze(t,n)||Je(t,n)||We()}var Xe={icon:function(n){var r=n._icon;return C("p-menuitem-icon",r)},label:"p-menuitem-text",action:"p-menuitem-link",menuitem:function(n){var r=n._className,i=n.active,l=n.disabled;return C("p-tabmenuitem",{"p-highlight":i,"p-disabled":l},r)},inkbar:"p-tabmenu-ink-bar",menu:"p-tabmenu-nav p-reset",root:"p-tabmenu p-component"},Ye=`
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
`,N=De.extend({defaultProps:{__TYPE:"TabMenu",id:null,model:null,activeIndex:0,ariaLabel:null,ariaLabelledBy:null,style:null,className:null,onTabChange:null,children:void 0},css:{classes:Xe,styles:Ye}});function Y(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),r.push.apply(r,i)}return r}function G(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Y(Object(r),!0).forEach(function(i){He(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}var ee=s.memo(s.forwardRef(function(t,n){var r=je(),i=s.useContext(ke),l=N.getProps(t,i),I=s.useState(l.id),d=X(I,2),m=d[0],b=d[1],x=s.useState(l.activeIndex),P=X(x,2),te=P[0],ne=P[1],F=s.useRef(null),v=s.useRef(null),f=s.useRef(null),ae=s.useRef({}),K=l.onTabChange?l.activeIndex:te,B={props:l,state:{id:m,activeIndex:K}},j=N.setMetaData(G({},B)),S=j.ptm,p=j.cx,re=j.isUnstyled,T=function(e,a,c){return S(e,{parent:B,context:{item:a,index:c}})};Re(N.css.styles,re,{name:"tabmenu"});var k=function(e,a,c){if(a.disabled){e.preventDefault();return}a.command&&a.command({originalEvent:e,item:a}),l.onTabChange?l.onTabChange({originalEvent:e,value:a,index:c}):ne(c),a.url||(e.preventDefault(),e.stopPropagation())},ie=function(e){return e===(K||0)},le=function(){if(l.model){for(var e=f.current.children,a=!1,c=0;c<e.length;c++){var y=e[c];u.getAttribute(y,"data-p-highlight")&&(v.current.style.width=u.getWidth(y)+"px",v.current.style.left=u.getOffset(y).left-u.getOffset(f.current).left+"px",a=!0)}a||(v.current.style.width="0px",v.current.style.left="0px")}};Ae(function(){m||b(Fe())}),s.useImperativeHandle(n,function(){return{props:l,getElement:function(){return F.current}}}),s.useEffect(function(){le()});var se=function(e,a,c){switch(e.code){case"ArrowRight":oe(e.target),e.preventDefault();break;case"ArrowLeft":ce(e.target),e.preventDefault();break;case"Home":ue(e.target),e.preventDefault();break;case"End":me(e.target),e.preventDefault();break;case"Space":case"Enter":case"NumpadEnter":k(e,a,c),e.preventDefault();break;case"Tab":de();break}},oe=function(e){var a=U(e);a&&_(e,a)},ce=function(e){var a=$(e);a&&_(e,a)},ue=function(e){var a=fe();a&&_(e,a)},me=function(e){var a=pe();a&&_(e,a)},U=function(e){var a=e.parentElement.nextElementSibling;return a?u.getAttribute(a,"data-p-disabled")===!0?U(a.children[0]):a.children[0]:null},$=function(e){var a=e.parentElement.previousElementSibling;return a?u.getAttribute(a,"data-p-disabled")===!0?$(a.children[0]):a.children[0]:null},fe=function(){var e=u.findSingle(f.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e.children[0]:null},pe=function(){var e=u.find(f.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},_=function(e,a){e.tabIndex="-1",a.tabIndex="0",a.focus()},de=function(){var e=u.findSingle(f.current,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]'),a=u.findSingle(f.current,'[data-pc-section="action"][tabindex="0"]');a!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),a.tabIndex="-1")},be=function(e,a){if(e.visible===!1)return null;var c=e.className,y=e.style,O=e.disabled,D=e.icon,R=e.label,H=e.template,xe=e.url,Pe=e.target,q=e.id||m+"_"+a,w=ie(a),Se=C("p-menuitem-icon",D),Te=r({className:p("icon",{_icon:D})},T("icon",e,a)),_e=Me.getJSXIcon(D,G({},Te),{props:l}),Oe=r({className:p("label")},T("label",e,a)),we=R&&s.createElement("span",Oe,R),Ne=r({href:xe||"#",role:"menuitem","aria-label":R,tabIndex:w?"0":"-1",className:p("action"),target:Pe,onClick:function(g){return k(g,e,a)}},T("action",e,a)),A=s.createElement("a",Ne,_e,we,s.createElement(Ke,null));if(H){var Ee={onClick:function(g){return k(g,e,a)},className:"p-menuitem-link",labelClassName:"p-menuitem-text",iconClassName:Se,element:A,props:l,active:w,index:a,disabled:O};A=Le.getJSXElement(H,e,Ee)}var Ce=r({ref:ae.current["tab_".concat(a)],id:q,onKeyDown:function(g){return se(g,e,a)},className:p("menuitem",{_className:c,active:w,disabled:O}),style:y,role:"presentation","data-p-highlight":w,"data-p-disabled":O||!1,"aria-disabled":O},T("menuitem",e,a));return s.createElement("li",M({},Ce,{key:q}),A)},ve=function(){return l.model.map(be)};if(l.model){var ye=ve(),ge=r({ref:v,role:"none",className:p("inkbar")},S("inkbar")),he=r({ref:f,"aria-label":l.ariaLabel,"aria-labelledby":l.ariaLabelledBy,className:p("menu"),role:"menubar"},S("menu")),Ie=r({id:l.id,ref:F,className:C(l.className,p("root")),style:l.style},N.getOtherProps(l),S("root"));return s.createElement("div",Ie,s.createElement("ul",he,ye,s.createElement("li",ge)))}return null}));ee.displayName="TabMenu";const L=t=>{const{className:n,prefixCls:r="tab",...i}=t,l=Be(r);return J.jsx("div",{className:l(void 0,n),children:J.jsx(ee,{...i})})};s.memo(L);L.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["TabMenuProps"]};const tt={title:"Components/Tab",component:L,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"tab"},tags:["autodocs"]},E={args:{prefixCls:"tab",model:[{label:"Password"},{label:"2FA settings"},{label:"Limits"}]}};var Q,V,Z;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    prefixCls: 'tab',
    model: [{
      label: 'Password'
    }, {
      label: '2FA settings'
    }, {
      label: 'Limits'
    }]
  }
}`,...(Z=(V=E.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};const nt=["Primary"];export{E as Primary,nt as __namedExportsOrder,tt as default};
