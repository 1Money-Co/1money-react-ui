import{j as v}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";import{B as ke}from"./Button-BOsJXWNs.js";import{P as X}from"./index-rNTiGNI1.js";import{C as Ie,u as Ce,P as Oe,a as Pe,b as je,c as De,E as Re,m as _e,n as Ne,e as _,Z as N,h as R,f as Te,g as D,D as T,O as B,l as Be,I as Ae}from"./componentbase.esm-B7DzLYm2.js";import{C as F}from"./csstransition.esm-DUlXYj3O.js";import{T as Le}from"./index.esm-Dxp83-c9.js";import{P as Me}from"./portal.esm-Dlp_nAuE.js";import{R as He}from"./ripple.esm-j0qNbFto.js";import{c as Ve}from"./classnames-JHuVH38I.js";import"./button.esm-CuMgQ_1Q.js";import"./index.esm-U-Gagxqn.js";import"./iconbase.esm-Blfjos1e.js";import"./tooltip.esm-0CL_VH-f.js";import"./Loading-BZ7CYQkq.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-D16Yfzz8.js";function g(){return g=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},g.apply(this,arguments)}function w(n){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(n)}function qe(n,t){if(w(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t||"default");if(w(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Ue(n){var t=qe(n,"string");return w(t)==="symbol"?t:String(t)}function Ze(n,t,e){return t=Ue(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function $e(n){if(Array.isArray(n))return n}function ze(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var i,r,p,d,l=[],f=!0,k=!1;try{if(p=(e=e.call(n)).next,t!==0)for(;!(f=(i=p.call(e)).done)&&(l.push(i.value),l.length!==t);f=!0);}catch(I){k=!0,r=I}finally{try{if(!f&&e.return!=null&&(d=e.return(),Object(d)!==d))return}finally{if(k)throw r}}return l}}function G(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function Je(n,t){if(n){if(typeof n=="string")return G(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return G(n,t)}}function Ke(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(n,t){return $e(n)||ze(n,t)||Je(n,t)||Ke()}var Xe={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(t){var e=t.props,i=t.maskVisibleState,r=["left","right","top","bottom"],p=r.find(function(d){return d===e.position});return D("p-sidebar-mask",p&&!e.fullScreen?"p-sidebar-".concat(p):"",{"p-component-overlay p-component-overlay-enter":e.modal,"p-sidebar-mask-scrollblocker":e.blockScroll,"p-sidebar-visible":i,"p-sidebar-full":e.fullScreen},e.maskClassName)},header:function(t){var e=t.props;return D("p-sidebar-header",{"p-sidebar-custom-header":e.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(t){t.props;var e=t.context;return D("p-sidebar p-component",{"p-input-filled":e&&e.inputStyle==="filled"||R.inputStyle==="filled","p-ripple-disabled":e&&e.ripple===!1||R.ripple===!1})},transition:"p-sidebar"},Fe=`
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
`,Ge={mask:function(t){var e=t.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:e.position==="left"?"flex-start":e.position==="right"?"flex-end":"center",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"}}},P=Ie.extend({defaultProps:{__TYPE:"Sidebar",appendTo:null,ariaCloseLabel:null,baseZIndex:0,blockScroll:!1,children:void 0,className:null,closeIcon:null,closeOnEscape:!0,content:null,dismissable:!0,fullScreen:!1,header:null,icons:null,id:null,maskClassName:null,maskStyle:null,modal:!0,onHide:null,onShow:null,position:"left",showCloseIcon:!0,style:null,transitionOptions:null,visible:!1},css:{classes:Xe,styles:Fe,inlineStyles:Ge}});function Y(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,i)}return e}function Ye(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Y(Object(e),!0).forEach(function(i){Ze(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Y(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}var ne=s.forwardRef(function(n,t){var e=Ce(),i=s.useContext(Oe),r=P.getProps(n,i),p=s.useState(!1),d=A(p,2),l=d[0],f=d[1],k=s.useState(!1),I=A(k,2),h=I[0],L=I[1],C=P.setMetaData({props:r,state:{containerVisible:l}}),u=C.ptm,m=C.cx,te=C.sx,M=C.isUnstyled;Pe(P.css.styles,M,{name:"sidebar"});var c=s.useRef(null),b=s.useRef(null),y=s.useRef(null),H=h&&r.closeOnEscape,V=je("sidebar",H);De({callback:function(a){x(a)},when:H&&V,priority:[Re.SIDEBAR,V]});var re=_e({type:"click",listener:function(a){a.button===0&&ie(a)&&x(a)}}),q=A(re,2),U=q[0],Z=q[1],ie=function(a){return c&&c.current&&!c.current.contains(a.target)},ae=function(){var a=document.activeElement,S=a&&c&&c.current.contains(a);!S&&r.showCloseIcon&&y.current&&y.current.focus()},se=function(a){r.dismissable&&r.modal&&b.current===a.target&&x(a)},x=function(a){r.onHide(),a.preventDefault()},oe=function(){r.onShow&&r.onShow(),ae(),pe()},le=function(){r.modal&&!M()&&T.addClass(b.current,"p-component-overlay-leave")},ce=function(){N.clear(b.current),f(!1),$()},pe=function(){r.dismissable&&!r.modal&&U(),r.blockScroll&&T.blockBodyScroll()},$=function(){Z(),r.blockScroll&&T.unblockBodyScroll()};s.useImperativeHandle(t,function(){return{props:r,getElement:function(){return c.current},gteMask:function(){return b.current},getCloseIcon:function(){return y.current}}}),Ne(function(){r.visible&&f(!0)}),_(function(){r.visible&&!l&&f(!0),r.visible!==h&&l&&L(r.visible)},[r.visible]),_(function(){l&&(N.set("modal",b.current,i&&i.autoZIndex||R.autoZIndex,r.baseZIndex||i&&i.zIndex.modal||R.zIndex.modal),L(!0))},[l]),_(function(){h&&(Z(),r.dismissable&&!r.modal&&U())},[r.dismissable,r.modal,h]),Te(function(){$(),b.current&&N.clear(b.current)});var de=function(){var a=r.ariaCloseLabel||Be("close"),S=e({type:"button",ref:y,className:m("closeButton"),onClick:function(Ee){return x(Ee)},"aria-label":a},u("closeButton")),O=e({className:m("closeIcon")},u("closeIcon")),Se=r.closeIcon||s.createElement(Le,O),we=Ae.getJSXIcon(Se,Ye({},O),{props:r});return r.showCloseIcon?s.createElement("button",S,we,s.createElement(He,null)):null},ue=function(){return r.header?B.getJSXElement(r.header,r):null},me=function(){return r.icons?B.getJSXElement(r.icons,r):null},z=e({ref:b,style:te("mask"),className:m("mask",{maskVisibleState:l}),onMouseDown:function(a){return se(a)}},u("mask")),J=e({id:r.id,className:D(r.className,m("root",{context:i})),style:r.style,role:"complementary"},P.getOtherProps(r),u("root")),be=e({className:m("header")},u("header")),fe=e({className:m("content")},u("content")),ve=e({className:m("icons")},u("icons")),ge={enter:r.fullScreen?150:300,exit:r.fullScreen?150:300},K=e({classNames:m("transition"),in:h,timeout:ge,options:r.transitionOptions,unmountOnExit:!0,onEntered:oe,onExiting:le,onExited:ce},u("transition")),he=function(){var a={closeIconRef:y,hide:x};return s.createElement("div",z,s.createElement(F,g({nodeRef:c},K),s.createElement("div",g({ref:c},J),B.getJSXElement(n.content,a))))},ye=function(){var a=de(),S=me(),O=ue();return s.createElement("div",z,s.createElement(F,g({nodeRef:c},K),s.createElement("div",g({ref:c},J),s.createElement("div",be,O,s.createElement("div",ve,S,a)),s.createElement("div",fe,r.children))))},xe=function(){var a=n!=null&&n.content?he():ye();return s.createElement(Me,{element:a,appendTo:r.appendTo,visible:!0})};return l&&xe()});ne.displayName="Sidebar";const E=n=>{const{children:t,className:e,prefixCls:i="drawer",...r}=n,p=Ve(i);return v.jsx(ne,{className:p(void 0,e),...r,children:t})};E.propTypes={className:X.string,prefixCls:X.string};s.memo(E);E.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},prefixCls:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}},composes:["SidebarProps"]};const gn={title:"Components/Drawer",component:E,argTypes:{className:{control:"text"},prefixCls:{control:"text"},position:{control:"select",options:["right","left","top","bottom"]}},args:{prefixCls:"drawer"},tags:["autodocs"]},j={args:{prefixCls:"drawer",fullScreen:!1},render:function(t){const[e,i]=s.useState(!1);return v.jsxs(v.Fragment,{children:[v.jsx(ke,{onClick:()=>i(!0),children:"Show Drawer"}),v.jsxs(E,{visible:e,onHide:()=>i(!1),...t,children:[v.jsx("h2",{children:"Drawer"}),v.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})}};var W,Q,ee;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    prefixCls: 'drawer',
    fullScreen: false
  },
  render: function Render(args: any) {
    const [visible, setVisible] = useState(false);
    return <>
      <Button onClick={() => setVisible(true)}>
        Show Drawer
      </Button>
      <Drawer visible={visible} onHide={() => setVisible(false)} {...args}>
        <h2>Drawer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Drawer>
    </>;
  }
}`,...(ee=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};const hn=["Primary"];export{j as Primary,hn as __namedExportsOrder,gn as default};
