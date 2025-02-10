import{j as Ne}from"./jsx-runtime-BjG_zV1W.js";import{r as a}from"./index-DGOumNSj.js";import{u as ae,P as Ce,C as Ie,a as Se,e as we,Z as k,h as D,f as Te,O as A,g as L,q as _e,I as V,r as Oe,D as ee}from"./componentbase.esm-CcTVhaot.js";import{C as Pe}from"./csstransition.esm-CO4t0ang.js";import{P as je}from"./portal.esm-B5s9sLsr.js";import{C as Me}from"./index.esm-DH2A1hkI.js";import{E as ke,I as Re}from"./index.esm-BUJvaMl0.js";import{T as Ae}from"./index.esm-CEE_g2h2.js";import{T as De}from"./index.esm-CcmjrRHQ.js";import{R as Le}from"./ripple.esm-D7U1XS2t.js";import{T as He}from"./TransitionGroup-B_wexrQj.js";import{c as $e,p as te}from"./classnames-CuzQN-jt.js";function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Y.apply(this,arguments)}function F(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function Be(e){if(Array.isArray(e))return F(e)}function Ue(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function re(e,n){if(e){if(typeof e=="string")return F(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return F(e,n)}}function Ze(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(e){return Be(e)||Ue(e)||re(e)||Ze()}function Xe(e){if(Array.isArray(e))return e}function qe(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o,r,g,x,u=[],p=!0,y=!1;try{if(g=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;p=!1}else for(;!(p=(o=g.call(t)).done)&&(u.push(o.value),u.length!==n);p=!0);}catch(c){y=!0,r=c}finally{try{if(!p&&t.return!=null&&(x=t.return(),Object(x)!==x))return}finally{if(y)throw r}}return u}}function Je(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(e,n){return Xe(e)||qe(e,n)||re(e,n)||Je()}function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},T(e)}function ze(e,n){if(T(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n);if(T(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Ye(e){var n=ze(e,"string");return T(n)==="symbol"?n:String(n)}function se(e,n,t){return n=Ye(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Fe=`
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
`,Ke={root:function(n){var t=n.props,o=n.context;return L("p-toast p-component p-toast-"+t.position,t.className,{"p-input-filled":o&&o.inputStyle==="filled"||D.inputStyle==="filled","p-ripple-disabled":o&&o.ripple===!1||D.ripple===!1})},message:{message:function(n){var t=n.severity;return L("p-toast-message",se({},"p-toast-message-".concat(t),t))},content:"p-toast-message-content",buttonicon:"p-toast-icon-close-icon",closeButton:"p-toast-icon-close p-link",icon:"p-toast-message-icon",text:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail"},transition:"p-toast-message"},We={root:function(n){var t=n.props;return{position:"fixed",top:t.position==="top-right"||t.position==="top-left"||t.position==="top-center"?"20px":t.position==="center"?"50%":null,right:(t.position==="top-right"||t.position==="bottom-right")&&"20px",bottom:(t.position==="bottom-left"||t.position==="bottom-right"||t.position==="bottom-center")&&"20px",left:t.position==="top-left"||t.position==="bottom-left"?"20px":t.position==="center"||t.position==="top-center"||t.position==="bottom-center"?"50%":null}}},R=Ie.extend({defaultProps:{__TYPE:"Toast",id:null,className:null,content:null,style:null,baseZIndex:0,position:"top-right",transitionOptions:null,appendTo:"self",onClick:null,onRemove:null,onShow:null,onHide:null,onMouseEnter:null,onMouseLeave:null,children:void 0},css:{classes:Ke,styles:Fe,inlineStyles:We}});function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ne(Object(t),!0).forEach(function(o){se(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}var ie=a.memo(a.forwardRef(function(e,n){var t=ae(),o=e.messageInfo,r=e.metaData,g=e.ptCallbacks,x=g.ptm,u=g.ptmo,p=g.cx,y=e.index,c=o.message,b=c.severity,H=c.content,_=c.summary,O=c.detail,$=c.closable,P=c.life,w=c.sticky,B=c.className,U=c.style,Z=c.contentClassName,X=c.contentStyle,v=c.icon,s=c.closeIcon,i=c.pt,f={index:y},m=l(l({},r),f),E=a.useState(!1),I=K(E,2),j=I[0],M=I[1],ce=_e(function(){q()},P||3e3,!w&&!j),me=K(ce,1),G=me[0],N=function(d,h){return x(d,l({hostName:e.hostName},h))},q=function(){G(),e.onClose&&e.onClose(o)},Q=function(d){e.onClick&&!(ee.hasClass(d.target,"p-toast-icon-close")||ee.hasClass(d.target,"p-toast-icon-close-icon"))&&e.onClick(o.message)},ue=function(d){e.onMouseEnter&&e.onMouseEnter(d),!d.defaultPrevented&&(w||(G(),M(!0)))},pe=function(d){e.onMouseLeave&&e.onMouseLeave(d),!d.defaultPrevented&&(w||M(!1))},fe=function(){var d=t({className:p("message.buttonicon")},N("buttonicon",m),u(i,"buttonicon",l(l({},f),{},{hostName:e.hostName}))),h=s||a.createElement(Ae,d),C=V.getJSXIcon(h,l({},d),{props:e}),J=t({type:"button",className:p("message.closeButton"),onClick:q,"aria-label":e.ariaCloseLabel||Oe("close")},N("closeButton",m),u(i,"closeButton",l(l({},f),{},{hostName:e.hostName})));return $!==!1?a.createElement("div",null,a.createElement("button",J,C,a.createElement(Le,null))):null},de=function(){if(o){var d=A.getJSXElement(H,{message:o.message,onClick:Q,onClose:q}),h=t({className:p("message.icon")},N("icon",m),u(i,"icon",l(l({},f),{},{hostName:e.hostName}))),C=v;if(!v)switch(b){case"info":C=a.createElement(Re,h);break;case"warn":C=a.createElement(ke,h);break;case"error":C=a.createElement(De,h);break;case"success":C=a.createElement(Me,h);break}var J=V.getJSXIcon(C,l({},h),{props:e}),he=t({className:p("message.text")},N("text",m),u(i,"text",l(l({},f),{},{hostName:e.hostName}))),xe=t({className:p("message.summary")},N("summary",m),u(i,"summary",l(l({},f),{},{hostName:e.hostName}))),Ee=t({className:p("message.detail")},N("detail",m),u(i,"detail",l(l({},f),{},{hostName:e.hostName})));return d||a.createElement(a.Fragment,null,J,a.createElement("div",he,a.createElement("span",xe,_),O&&a.createElement("div",Ee,O)))}return null},ve=de(),ye=fe(),ge=t({ref:n,className:L(B,p("message.message",{severity:b})),style:U,role:"alert","aria-live":"assertive","aria-atomic":"true",onClick:Q,onMouseEnter:ue,onMouseLeave:pe},N("message",m),u(i,"root",l(l({},f),{},{hostName:e.hostName}))),be=t({className:L(Z,p("message.content")),style:X},N("content",m),u(i,"content",l(l({},f),{},{hostName:e.hostName})));return a.createElement("div",ge,a.createElement("div",be,ve,ye))}));ie.displayName="ToastMessage";var oe=0,le=a.memo(a.forwardRef(function(e,n){var t=ae(),o=a.useContext(Ce),r=R.getProps(e,o),g=a.useState([]),x=K(g,2),u=x[0],p=x[1],y=a.useRef(null),c={props:r,state:{messages:u}},b=R.setMetaData(c);Se(R.css.styles,b.isUnstyled,{name:"toast"});var H=function(s){s&&p(function(i){return _(i,s,!0)})},_=function(s,i,f){var m;if(Array.isArray(i)){var E=i.reduce(function(j,M){return j.push({_pId:oe++,message:M}),j},[]);f?m=s?[].concat(z(s),z(E)):E:m=E}else{var I={_pId:oe++,message:i};f?m=s?[].concat(z(s),[I]):[I]:m=[I]}return m},O=function(){k.clear(y.current),p([])},$=function(s){p(function(i){return _(i,s,!1)})},P=function(s){var i=A.isNotEmpty(s._pId)?s._pId:s.message||s;p(function(f){return f.filter(function(m){return m._pId!==s._pId&&!A.deepEquals(m.message,i)})}),r.onRemove&&r.onRemove(s.message||i)},w=function(s){P(s)},B=function(){r.onShow&&r.onShow()},U=function(){u.length===1&&k.clear(y.current),r.onHide&&r.onHide()};we(function(){k.set("toast",y.current,o&&o.autoZIndex||D.autoZIndex,r.baseZIndex||o&&o.zIndex.toast||D.zIndex.toast)},[u,r.baseZIndex]),Te(function(){k.clear(y.current)}),a.useImperativeHandle(n,function(){return{props:r,show:H,replace:$,remove:P,clear:O,getElement:function(){return y.current}}});var Z=function(){var s=t({ref:y,id:r.id,className:b.cx("root",{context:o}),style:b.sx("root")},R.getOtherProps(r),b.ptm("root")),i=t({classNames:b.cx("transition"),timeout:{enter:300,exit:300},options:r.transitionOptions,unmountOnExit:!0,onEntered:B,onExited:U},b.ptm("transition"));return a.createElement("div",s,a.createElement(He,null,u&&u.map(function(f,m){var E=a.createRef();return a.createElement(Pe,Y({nodeRef:E,key:f._pId},i),e.content?A.getJSXElement(e.content,{message:f.message}):a.createElement(ie,{hostName:"Toast",ref:E,messageInfo:f,index:m,onClick:r.onClick,onClose:w,onMouseEnter:r.onMouseEnter,onMouseLeave:r.onMouseLeave,closeIcon:r.closeIcon,ptCallbacks:b,metaData:c}))})))},X=Z();return a.createElement(je,{element:X,appendTo:r.appendTo})}));le.displayName="Toast";const W=a.forwardRef((e,n)=>{const{className:t,prefixCls:o="toast",...r}=e,g=$e(o);return Ne.jsx(le,{...r,ref:n,className:g(void 0,t)})});W.propTypes={className:te.string,prefixCls:te.string};a.memo(W);W.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{prefixCls:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},className:{description:"",type:{name:"string"},required:!1}},composes:["PrimeToastProps"]};export{W as T};
