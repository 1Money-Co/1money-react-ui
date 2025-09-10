import{j as C}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-CP2yOfOm.js";import{u as re,P as Ce,C as Ie,a as Ne,f as Me,Z as L,b as $,g as Se,O as H,c as z,s as ke,I as V,r as _e,D as ee}from"./componentbase.esm-D-zJM1J_.js";import{C as je}from"./csstransition.esm-DWeYoiJr.js";import{P as Pe}from"./portal.esm-CCqTVpgZ.js";import{C as Oe}from"./index.esm-DcWnrv9o.js";import{E as Ae,I as Re}from"./index.esm-wET7pp3q.js";import{T as De}from"./index.esm-iUewYYmr.js";import{T as Le}from"./index.esm-BWj4hVqV.js";import{R as Be}from"./ripple.esm-BIqWt_ei.js";import{T as He}from"./TransitionGroup-BGiLtNwA.js";import{I as te}from"./Icons-CoyO219J.js";import{T as ne}from"./Typography-DoqwNCiN.js";import{c as $e}from"./classnames-lRq3rz0l.js";function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Y.apply(null,arguments)}function K(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}function ze(e){if(Array.isArray(e))return K(e)}function Fe(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function se(e,n){if(e){if(typeof e=="string")return K(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?K(e,n):void 0}}function Ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(e){return ze(e)||Fe(e)||se(e)||Ue()}function Ze(e){if(Array.isArray(e))return e}function Xe(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,s,d,y,c=[],o=!0,l=!1;try{if(d=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;o=!1}else for(;!(o=(a=d.call(t)).done)&&(c.push(a.value),c.length!==n);o=!0);}catch(i){l=!0,s=i}finally{try{if(!o&&t.return!=null&&(y=t.return(),Object(y)!==y))return}finally{if(l)throw s}}return c}}function Je(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(e,n){return Ze(e)||Xe(e,n)||se(e,n)||Je()}function O(e){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},O(e)}function qe(e,n){if(O(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,n);if(O(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Ye(e){var n=qe(e,"string");return O(n)=="symbol"?n:n+""}function le(e,n,t){return(n=Ye(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Ke=`
@layer primereact {
    .p-toast {
        width: calc(100% - var(--toast-indent, 0px));
        max-width: 25rem;
    }
    
    .p-toast-message-icon {
        flex-shrink: 0;
    }
    
    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
    }
    
    .p-toast-message-text {
        flex: 1 1 auto;
    }
    
    .p-toast-summary {
        overflow-wrap: anywhere;
    }
    
    .p-toast-detail {
        overflow-wrap: anywhere;
    }
    
    .p-toast-top-center {
        transform: translateX(-50%);
    }
    
    .p-toast-bottom-center {
        transform: translateX(-50%);
    }
    
    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }
    
    .p-toast-icon-close {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-toast-icon-close.p-link {
        cursor: pointer;
    }
    
    /* Animations */
    .p-toast-message-enter {
        opacity: 0;
        transform: translateY(50%);
    }
    
    .p-toast-message-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: transform 0.3s, opacity 0.3s;
    }
    
    .p-toast-message-enter-done {
        transform: none;
    }
    
    .p-toast-message-exit {
        opacity: 1;
        max-height: 1000px;
    }
    
    .p-toast .p-toast-message.p-toast-message-exit-active {
        opacity: 0;
        max-height: 0;
        margin-bottom: 0;
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
    }
}
`,We={root:function(n){var t=n.props,a=n.context;return z("p-toast p-component p-toast-"+t.position,t.className,{"p-input-filled":a&&a.inputStyle==="filled"||$.inputStyle==="filled","p-ripple-disabled":a&&a.ripple===!1||$.ripple===!1})},message:{message:function(n){var t=n.severity;return z("p-toast-message",le({},"p-toast-message-".concat(t),t))},content:"p-toast-message-content",buttonicon:"p-toast-icon-close-icon",closeButton:"p-toast-icon-close p-link",icon:"p-toast-message-icon",text:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail"},transition:"p-toast-message"},Ge={root:function(n){var t=n.props;return{position:"fixed",top:t.position==="top-right"||t.position==="top-left"||t.position==="top-center"?"20px":t.position==="center"?"50%":null,right:(t.position==="top-right"||t.position==="bottom-right")&&"20px",bottom:(t.position==="bottom-left"||t.position==="bottom-right"||t.position==="bottom-center")&&"20px",left:t.position==="top-left"||t.position==="bottom-left"?"20px":t.position==="center"||t.position==="top-center"||t.position==="bottom-center"?"50%":null}}},B=Ie.extend({defaultProps:{__TYPE:"Toast",id:null,className:null,content:null,style:null,baseZIndex:0,position:"top-right",transitionOptions:null,appendTo:"self",onClick:null,onRemove:null,onShow:null,onHide:null,onMouseEnter:null,onMouseLeave:null,children:void 0},css:{classes:We,styles:Ke,inlineStyles:Ge}});function ae(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ae(Object(t),!0).forEach(function(a){le(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ae(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var ie=r.memo(r.forwardRef(function(e,n){var t=re(),a=e.messageInfo,s=e.metaData,d=e.ptCallbacks,y=d.ptm,c=d.ptmo,o=d.cx,l=e.index,i=a.message,g=i.severity,j=i.content,N=i.summary,M=i.detail,P=i.closable,S=i.life,x=i.sticky,A=i.className,F=i.style,U=i.contentClassName,Z=i.contentStyle,h=i.icon,m=i.closeIcon,u=i.pt,v={index:l},f=p(p({},s),v),T=r.useState(!1),k=W(T,2),R=k[0],D=k[1],ue=ke(function(){X()},S||3e3,!x&&!R),pe=W(ue,1),G=pe[0],w=function(b,E){return y(b,p({hostName:e.hostName},E))},X=function(){G(),e.onClose&&e.onClose(a)},Q=function(b){e.onClick&&!(ee.hasClass(b.target,"p-toast-icon-close")||ee.hasClass(b.target,"p-toast-icon-close-icon"))&&e.onClick(a.message)},fe=function(b){e.onMouseEnter&&e.onMouseEnter(b),!b.defaultPrevented&&(x||(G(),D(!0)))},de=function(b){e.onMouseLeave&&e.onMouseLeave(b),!b.defaultPrevented&&(x||D(!1))},ve=function(){var b=t({className:o("message.buttonicon")},w("buttonicon",f),c(u,"buttonicon",p(p({},v),{},{hostName:e.hostName}))),E=m||r.createElement(De,b),I=V.getJSXIcon(E,p({},b),{props:e}),J=t({type:"button",className:o("message.closeButton"),onClick:X,"aria-label":e.ariaCloseLabel||_e("close")},w("closeButton",f),c(u,"closeButton",p(p({},v),{},{hostName:e.hostName})));return P!==!1?r.createElement("div",null,r.createElement("button",J,I,r.createElement(Be,null))):null},ge=function(){if(a){var b=H.getJSXElement(j,{message:a.message,onClick:Q,onClose:X}),E=t({className:o("message.icon")},w("icon",f),c(u,"icon",p(p({},v),{},{hostName:e.hostName}))),I=h;if(!h)switch(g){case"info":I=r.createElement(Re,E);break;case"warn":I=r.createElement(Ae,E);break;case"error":I=r.createElement(Le,E);break;case"success":I=r.createElement(Oe,E);break}var J=V.getJSXIcon(I,p({},E),{props:e}),Ee=t({className:o("message.text")},w("text",f),c(u,"text",p(p({},v),{},{hostName:e.hostName}))),Te=t({className:o("message.summary")},w("summary",f),c(u,"summary",p(p({},v),{},{hostName:e.hostName}))),we=t({className:o("message.detail")},w("detail",f),c(u,"detail",p(p({},v),{},{hostName:e.hostName})));return b||r.createElement(r.Fragment,null,J,r.createElement("div",Ee,r.createElement("span",Te,N),M&&r.createElement("div",we,M)))}return null},ye=ge(),be=ve(),he=t({ref:n,className:z(A,o("message.message",{severity:g})),style:F,role:"alert","aria-live":"assertive","aria-atomic":"true",onClick:Q,onMouseEnter:fe,onMouseLeave:de},w("message",f),c(u,"root",p(p({},v),{},{hostName:e.hostName}))),xe=t({className:z(U,o("message.content")),style:Z},w("content",f),c(u,"content",p(p({},v),{},{hostName:e.hostName})));return r.createElement("div",he,r.createElement("div",xe,ye,be))}));ie.displayName="ToastMessage";var oe=0,ce=r.memo(r.forwardRef(function(e,n){var t=re(),a=r.useContext(Ce),s=B.getProps(e,a),d=r.useState([]),y=W(d,2),c=y[0],o=y[1],l=r.useRef(null),i={props:s,state:{messages:c}},g=B.setMetaData(i);Ne(B.css.styles,g.isUnstyled,{name:"toast"});var j=function(m){m&&o(function(u){return N(u,m,!0)})},N=function(m,u,v){var f;if(Array.isArray(u)){var T=u.reduce(function(R,D){return R.push({_pId:oe++,message:D}),R},[]);v?f=m?[].concat(q(m),q(T)):T:f=T}else{var k={_pId:oe++,message:u};v?f=m?[].concat(q(m),[k]):[k]:f=[k]}return f},M=function(){L.clear(l.current),o([])},P=function(m){o(function(u){return N(u,m,!1)})},S=function(m){var u=H.isNotEmpty(m._pId)?m._pId:m.message||m;o(function(v){return v.filter(function(f){return f._pId!==m._pId&&!H.deepEquals(f.message,u)})}),s.onRemove&&s.onRemove(m.message||u)},x=function(m){S(m)},A=function(){s.onShow&&s.onShow()},F=function(){c.length===1&&L.clear(l.current),s.onHide&&s.onHide()};Me(function(){L.set("toast",l.current,a&&a.autoZIndex||$.autoZIndex,s.baseZIndex||a&&a.zIndex.toast||$.zIndex.toast)},[c,s.baseZIndex]),Se(function(){L.clear(l.current)}),r.useImperativeHandle(n,function(){return{props:s,show:j,replace:P,remove:S,clear:M,getElement:function(){return l.current}}});var U=function(){var m=t({ref:l,id:s.id,className:g.cx("root",{context:a}),style:g.sx("root")},B.getOtherProps(s),g.ptm("root")),u=t({classNames:g.cx("transition"),timeout:{enter:300,exit:300},options:s.transitionOptions,unmountOnExit:!0,onEntered:A,onExited:F},g.ptm("transition"));return r.createElement("div",m,r.createElement(He,null,c&&c.map(function(v,f){var T=r.createRef();return r.createElement(je,Y({nodeRef:T,key:v._pId},u),e.content?H.getJSXElement(e.content,{message:v.message}):r.createElement(ie,{hostName:"Toast",ref:T,messageInfo:v,index:f,onClick:s.onClick,onClose:x,onMouseEnter:s.onMouseEnter,onMouseLeave:s.onMouseLeave,closeIcon:s.closeIcon,ptCallbacks:g,metaData:i}))})))},Z=U();return r.createElement(Pe,{element:Z,appendTo:s.appendTo})}));ce.displayName="Toast";const Qe={success:{name:"check",color:"#1F5800",bgColor:"#1F580033"},info:{name:"fail",color:"#073387",bgColor:"#EDF2F9"},warn:{name:"error",color:"#DB8600",bgColor:"#F4C60033"},error:{name:"cross",color:"#AE0000",bgColor:"#AE00001A"}},me=e=>{const{className:n,prefixCls:t="toast",ref:a,...s}=e,d=$e(t),y=r.useRef(null),c=r.useCallback(o=>{const l=Array.isArray(o)?o:[o];for(let i=0;i<l.length;i++){const{severity:g,content:j,summary:N,detail:M,closeIcon:P,life:S}=l[i];if(!j&&(g==="success"||g==="info"||g==="warn"||g==="error")){const x=Qe[g];l[i].content=A=>C.jsxs("div",{className:d("inner",d(g)),children:[C.jsx("i",{className:d("inner-left"),style:{backgroundColor:x.bgColor},children:C.jsx(te,{name:x.name,color:x.color,size:16})}),C.jsxs("div",{className:d("inner-right"),children:[C.jsx(ne.Title,{bold:!0,size:"s",className:d("inner-right-summary"),children:N}),C.jsx(ne.Body,{size:"m",className:d("inner-right-detail"),children:M})]})]})}P||(l[i].closeIcon=C.jsx(te,{name:"close",color:"#646465",size:20,wrapperCls:d("close-icon")})),S||(l[i].life=5e3)}return l},[d]);return r.useImperativeHandle(a,()=>({clear:()=>{var o;return(o=y.current)==null?void 0:o.clear()},getElement:()=>{var o;return(o=y.current)==null?void 0:o.getElement()},remove:o=>{var l;(l=y.current)==null||l.remove(c(o))},replace:o=>{var l;(l=y.current)==null||l.replace(c(o))},show:o=>{var l;(l=y.current)==null||l.show(c(o))}}),[c]),C.jsx(ce,{...s,ref:y,className:d(void 0,n)})};r.memo(me);me.__docgenInfo={description:"",methods:[{name:"clear",docblock:null,modifiers:[],params:[],returns:null},{name:"getElement",docblock:null,modifiers:[],params:[],returns:null},{name:"remove",docblock:null,modifiers:[],params:[{name:"message",optional:!1,type:{name:"union",raw:"ToastMessage | ToastMessage[]",elements:[{name:"ToastMessage"},{name:"Array",elements:[{name:"ToastMessage"}],raw:"ToastMessage[]"}]}}],returns:null},{name:"replace",docblock:null,modifiers:[],params:[{name:"message",optional:!1,type:{name:"union",raw:"ToastMessage | ToastMessage[]",elements:[{name:"ToastMessage"},{name:"Array",elements:[{name:"ToastMessage"}],raw:"ToastMessage[]"}]}}],returns:null},{name:"show",docblock:null,modifiers:[],params:[{name:"message",optional:!1,type:{name:"union",raw:"ToastMessage | ToastMessage[]",elements:[{name:"ToastMessage"},{name:"Array",elements:[{name:"ToastMessage"}],raw:"ToastMessage[]"}]}}],returns:null}],displayName:"Toast",props:{ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"ToastClass | null",elements:[{name:"Pick",elements:[{name:"Toast"},{name:"union",raw:"'clear' | 'getElement' | 'remove' | 'replace' | 'show'",elements:[{name:"literal",value:"'clear'"},{name:"literal",value:"'getElement'"},{name:"literal",value:"'remove'"},{name:"literal",value:"'replace'"},{name:"literal",value:"'show'"}]}],raw:"Pick<Toast, 'clear' | 'getElement' | 'remove' | 'replace' | 'show'>"},{name:"null"}]}],raw:"RefObject<ToastClass | null>"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["PrimeToastProps"]};export{me as T};
