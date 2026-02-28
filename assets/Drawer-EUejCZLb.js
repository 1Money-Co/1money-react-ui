import{j}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-CP2yOfOm.js";import{u as ge,P as xe,C as Se,a as Ee,h as we,i as ke,p as Ie,e as Ce,f as D,g as Oe,c as C,Z as R,D as _,b as O,O as N,q as Pe,I as je,E as De}from"./componentbase.esm-4JClMOy3.js";import{C as J}from"./csstransition.esm-B5iK3TG5.js";import{T as Re}from"./index.esm-ByOqZbnP.js";import{P as _e}from"./portal.esm-DsCazcPz.js";import{R as Ne}from"./ripple.esm-B4ep2fnx.js";import{a as K}from"./Icons-DVar4d28.js";import{c as Te}from"./classnames-LtG3MjBp.js";function h(){return h=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)({}).hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},h.apply(null,arguments)}function S(n){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(n)}function Ae(n,t){if(S(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var a=e.call(n,t);if(S(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Le(n){var t=Ae(n,"string");return S(t)=="symbol"?t:t+""}function Be(n,t,e){return(t=Le(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Me(n){if(Array.isArray(n))return n}function He(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var a,r,d,c,l=[],f=!0,E=!1;try{if(d=(e=e.call(n)).next,t!==0)for(;!(f=(a=d.call(e)).done)&&(l.push(a.value),l.length!==t);f=!0);}catch(w){E=!0,r=w}finally{try{if(!f&&e.return!=null&&(c=e.return(),Object(c)!==c))return}finally{if(E)throw r}}return l}}function W(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,a=Array(t);e<t;e++)a[e]=n[e];return a}function Ue(n,t){if(n){if(typeof n=="string")return W(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?W(n,t):void 0}}function Ve(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(n,t){return Me(n)||He(n,t)||Ue(n,t)||Ve()}var ze={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(t){var e=t.props,a=t.maskVisibleState,r=["left","right","top","bottom"],d=r.find(function(c){return c===e.position});return C("p-sidebar-mask",d&&!e.fullScreen?"p-sidebar-".concat(d):"",{"p-component-overlay p-component-overlay-enter":e.modal,"p-sidebar-mask-scrollblocker":e.blockScroll,"p-sidebar-visible":a,"p-sidebar-full":e.fullScreen},e.maskClassName)},header:function(t){var e=t.props;return C("p-sidebar-header",{"p-sidebar-custom-header":e.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(t){t.props;var e=t.context;return C("p-sidebar p-component",{"p-input-filled":e&&e.inputStyle==="filled"||O.inputStyle==="filled","p-ripple-disabled":e&&e.ripple===!1||O.ripple===!1})},transition:"p-sidebar"},Ze=`
@layer primereact {
    .p-sidebar-mask {
        display: none;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }
    
    .p-sidebar-visible {
        display: flex;
    }
    
    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
    }
    
    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }
    
    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .p-sidebar-custom-header {
        justify-content: space-between;
    }
    
    .p-sidebar-icons {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw;
        height: 100vh;
        max-height: 100%;
        top: 0px;
        left: 0px;
    }
    
    /* Animation */
    /* Top, Bottom, Left and Right */
    .p-sidebar-top .p-sidebar-enter,
    .p-sidebar-top .p-sidebar-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }
    
    .p-sidebar-bottom .p-sidebar-enter,
    .p-sidebar-bottom .p-sidebar-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }
    
    .p-sidebar-left .p-sidebar-enter,
    .p-sidebar-left .p-sidebar-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }
    
    .p-sidebar-right .p-sidebar-enter,
    .p-sidebar-right .p-sidebar-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }
    
    .p-sidebar-top .p-sidebar-enter-active,
    .p-sidebar-bottom .p-sidebar-enter-active,
    .p-sidebar-left .p-sidebar-enter-active,
    .p-sidebar-right .p-sidebar-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s;
    }
    
    .p-sidebar-top .p-sidebar-enter-done,
    .p-sidebar-bottom .p-sidebar-enter-done,
    .p-sidebar-left .p-sidebar-enter-done,
    .p-sidebar-right .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-top .p-sidebar-exit-active,
    .p-sidebar-bottom .p-sidebar-exit-active,
    .p-sidebar-left .p-sidebar-exit-active,
    .p-sidebar-right .p-sidebar-exit-active {
        transition: all 0.3s;
    }
    
    /* Full */
    .p-sidebar-full .p-sidebar-enter {
        opacity: 0;
        transform: scale(0.5);
    }
    
    .p-sidebar-full .p-sidebar-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 0.15s cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-sidebar-full .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-full .p-sidebar-exit-active {
        opacity: 0;
        transform: scale(0.5);
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }
    
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }
    
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }
    
    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }
    
    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }
    
    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }
    
    .p-sidebar-left .p-sidebar-view,
    .p-sidebar-right .p-sidebar-view,
    .p-sidebar-top .p-sidebar-view,
    .p-sidebar-bottom .p-sidebar-view {
        width: 100%;
        height: 100%;
    }
    
    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }
    
    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }        
}
`,$e={mask:function(t){var e=t.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:e.position==="left"?"flex-start":e.position==="right"?"flex-end":"center",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"}}},I=Se.extend({defaultProps:{__TYPE:"Sidebar",appendTo:null,ariaCloseLabel:null,baseZIndex:0,blockScroll:!1,children:void 0,className:null,closeIcon:null,closeOnEscape:!0,content:null,dismissable:!0,fullScreen:!1,header:null,icons:null,id:null,maskClassName:null,maskStyle:null,modal:!0,onHide:null,onShow:null,position:"left",showCloseIcon:!0,style:null,transitionOptions:null,visible:!1},css:{classes:ze,styles:Ze,inlineStyles:$e}});function X(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,a)}return e}function qe(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?X(Object(e),!0).forEach(function(a){Be(n,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):X(Object(e)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))})}return n}var G=s.forwardRef(function(n,t){var e=ge(),a=s.useContext(xe),r=I.getProps(n,a),d=s.useState(!1),c=T(d,2),l=c[0],f=c[1],E=s.useState(!1),w=T(E,2),v=w[0],A=w[1],k=I.setMetaData({props:r,state:{containerVisible:l}}),u=k.ptm,b=k.cx,F=k.sx,L=k.isUnstyled;Ee(I.css.styles,L,{name:"sidebar"});var p=s.useRef(null),m=s.useRef(null),g=s.useRef(null),B=v&&r.closeOnEscape,M=we("sidebar",B);ke({callback:function(i){x(i)},when:B&&M,priority:[De.SIDEBAR,M]});var Q=Ie({type:"click",listener:function(i){i.button===0&&ee(i)&&x(i)}}),H=T(Q,2),U=H[0],V=H[1],ee=function(i){return p&&p.current&&!p.current.contains(i.target)},ne=function(){var i=document.activeElement,y=i&&p&&p.current.contains(i);!y&&r.showCloseIcon&&g.current&&g.current.focus()},te=function(i){r.dismissable&&r.modal&&m.current===i.target&&x(i)},x=function(i){r.onHide(),i.preventDefault()},re=function(){r.onShow&&r.onShow(),ne(),se()},ae=function(){r.modal&&!L()&&_.addClass(m.current,"p-component-overlay-leave")},ie=function(){R.clear(m.current),f(!1),z()},se=function(){r.dismissable&&!r.modal&&U(),r.blockScroll&&_.blockBodyScroll()},z=function(){V(),r.blockScroll&&_.unblockBodyScroll()};s.useImperativeHandle(t,function(){return{props:r,getElement:function(){return p.current},getMask:function(){return m.current},getCloseIcon:function(){return g.current}}}),Ce(function(){r.visible&&f(!0)}),D(function(){r.visible&&!l&&f(!0),r.visible!==v&&l&&A(r.visible)},[r.visible,l,v]),D(function(){l&&(R.set("modal",m.current,a&&a.autoZIndex||O.autoZIndex,r.baseZIndex||a&&a.zIndex.modal||O.zIndex.modal),A(!0))},[l]),D(function(){v&&(V(),r.dismissable&&!r.modal&&U())},[r.dismissable,r.modal,v]),Oe(function(){z(),m.current&&R.clear(m.current)});var oe=function(){var i=e({type:"button",ref:g,className:b("closeButton"),onClick:function(he){return x(he)},"aria-label":r.ariaCloseLabel||Pe("close")},u("closeButton")),y=e({className:b("closeIcon")},u("closeIcon")),P=r.closeIcon||s.createElement(Re,y),ye=je.getJSXIcon(P,qe({},y),{props:r});return r.showCloseIcon?s.createElement("button",i,ye,s.createElement(Ne,null)):null},le=function(){return r.header?N.getJSXElement(r.header,r):null},ce=function(){return r.icons?N.getJSXElement(r.icons,r):null},Z=e({ref:m,style:F("mask"),className:b("mask",{maskVisibleState:l}),onMouseDown:function(i){return te(i)}},u("mask")),$=e({id:r.id,className:C(r.className,b("root",{context:a})),style:r.style,role:"complementary"},I.getOtherProps(r),u("root")),pe=e({className:b("header")},u("header")),de=e({className:b("content")},u("content")),ue=e({className:b("icons")},u("icons")),be={enter:r.fullScreen?150:300,exit:r.fullScreen?150:300},q=e({classNames:b("transition"),in:v,timeout:be,options:r.transitionOptions,unmountOnExit:!0,onEntered:re,onExiting:ae,onExited:ie},u("transition")),me=function(){var i={closeIconRef:g,hide:x};return s.createElement("div",Z,s.createElement(J,h({nodeRef:p},q),s.createElement("div",h({ref:p},$),N.getJSXElement(n.content,i))))},fe=function(){var i=oe(),y=ce(),P=le();return s.createElement("div",Z,s.createElement(J,h({nodeRef:p},q),s.createElement("div",h({ref:p},$),s.createElement("div",pe,P,s.createElement("div",ue,y,i)),s.createElement("div",de,r.children))))},ve=function(){var i=n!=null&&n.content?me():fe();return s.createElement(_e,{element:i,appendTo:r.appendTo,visible:!0})};return l&&ve()});G.displayName="Sidebar";const Y=n=>{const{children:t,className:e,prefixCls:a="drawer",betaLogo:r,...d}=n,c=Te(a);return j.jsx(G,{className:c(void 0,e),icons:j.jsx(K,{name:r?"logoWithBeta":"logoWithWords",logoColor:"#073387",wordColor:"#131313",betaColor:"#073387",width:r?152:131,height:r?22:24}),closeIcon:j.jsx(K,{name:"cross",size:24,wrapperCls:c("close")}),...d,children:t})};s.memo(Y);Y.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},betaLogo:{required:!1,tsType:{name:"boolean"},description:""}},composes:["SidebarProps"]};export{Y as D};
