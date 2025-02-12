import{j as d}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-DGOumNSj.js";import{B as Ie}from"./Button-B363lqK4.js";import{c as ke,p as X}from"./classnames-CL-cd9Z_.js";import{u as Ce,P as Oe,C as je,a as Pe,b as De,c as Re,m as _e,o as Ne,e as _,f as Te,g as P,Z as N,D as T,h as D,O as B,r as Be,I as Ae,E as Le}from"./componentbase.esm-CcTVhaot.js";import{C as W}from"./csstransition.esm-CO4t0ang.js";import{T as Me}from"./index.esm-CEE_g2h2.js";import{P as He}from"./portal.esm-B5s9sLsr.js";import{R as Ve}from"./ripple.esm-D7U1XS2t.js";import{I as F}from"./Icons-DqlNTGK4.js";import"./button.esm-Crft-G1Z.js";import"./index.esm-CB1fIbQ-.js";import"./iconbase.esm-B9JVR04N.js";import"./tooltip.esm-B4idE_5U.js";import"./Loading-C8_sBVCj.js";import"./index-BmTs--ql.js";function g(){return g=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},g.apply(this,arguments)}function w(n){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(n)}function qe(n,t){if(w(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t);if(w(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Ue(n){var t=qe(n,"string");return w(t)==="symbol"?t:String(t)}function ze(n,t,e){return t=Ue(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Ze(n){if(Array.isArray(n))return n}function $e(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var i,r,c,u,l=[],v=!0,I=!1;try{if(c=(e=e.call(n)).next,t!==0)for(;!(v=(i=c.call(e)).done)&&(l.push(i.value),l.length!==t);v=!0);}catch(k){I=!0,r=k}finally{try{if(!v&&e.return!=null&&(u=e.return(),Object(u)!==u))return}finally{if(I)throw r}}return l}}function G(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function Je(n,t){if(n){if(typeof n=="string")return G(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return G(n,t)}}function Ke(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(n,t){return Ze(n)||$e(n,t)||Je(n,t)||Ke()}var Xe={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(t){var e=t.props,i=t.maskVisibleState,r=["left","right","top","bottom"],c=r.find(function(u){return u===e.position});return P("p-sidebar-mask",c&&!e.fullScreen?"p-sidebar-".concat(c):"",{"p-component-overlay p-component-overlay-enter":e.modal,"p-sidebar-mask-scrollblocker":e.blockScroll,"p-sidebar-visible":i,"p-sidebar-full":e.fullScreen},e.maskClassName)},header:function(t){var e=t.props;return P("p-sidebar-header",{"p-sidebar-custom-header":e.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(t){t.props;var e=t.context;return P("p-sidebar p-component",{"p-input-filled":e&&e.inputStyle==="filled"||D.inputStyle==="filled","p-ripple-disabled":e&&e.ripple===!1||D.ripple===!1})},transition:"p-sidebar"},We=`
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
`,Fe={mask:function(t){var e=t.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:e.position==="left"?"flex-start":e.position==="right"?"flex-end":"center",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"}}},O=je.extend({defaultProps:{__TYPE:"Sidebar",appendTo:null,ariaCloseLabel:null,baseZIndex:0,blockScroll:!1,children:void 0,className:null,closeIcon:null,closeOnEscape:!0,content:null,dismissable:!0,fullScreen:!1,header:null,icons:null,id:null,maskClassName:null,maskStyle:null,modal:!0,onHide:null,onShow:null,position:"left",showCloseIcon:!0,style:null,transitionOptions:null,visible:!1},css:{classes:Xe,styles:We,inlineStyles:Fe}});function Y(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,i)}return e}function Ge(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Y(Object(e),!0).forEach(function(i){ze(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Y(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}var te=s.forwardRef(function(n,t){var e=Ce(),i=s.useContext(Oe),r=O.getProps(n,i),c=s.useState(!1),u=A(c,2),l=u[0],v=u[1],I=s.useState(!1),k=A(I,2),y=k[0],L=k[1],C=O.setMetaData({props:r,state:{containerVisible:l}}),m=C.ptm,b=C.cx,re=C.sx,M=C.isUnstyled;Pe(O.css.styles,M,{name:"sidebar"});var p=s.useRef(null),f=s.useRef(null),x=s.useRef(null),H=y&&r.closeOnEscape,V=De("sidebar",H);Re({callback:function(a){S(a)},when:H&&V,priority:[Le.SIDEBAR,V]});var ie=_e({type:"click",listener:function(a){a.button===0&&ae(a)&&S(a)}}),q=A(ie,2),U=q[0],z=q[1],ae=function(a){return p&&p.current&&!p.current.contains(a.target)},se=function(){var a=document.activeElement,h=a&&p&&p.current.contains(a);!h&&r.showCloseIcon&&x.current&&x.current.focus()},oe=function(a){r.dismissable&&r.modal&&f.current===a.target&&S(a)},S=function(a){r.onHide(),a.preventDefault()},le=function(){r.onShow&&r.onShow(),se(),de()},ce=function(){r.modal&&!M()&&T.addClass(f.current,"p-component-overlay-leave")},pe=function(){N.clear(f.current),v(!1),Z()},de=function(){r.dismissable&&!r.modal&&U(),r.blockScroll&&T.blockBodyScroll()},Z=function(){z(),r.blockScroll&&T.unblockBodyScroll()};s.useImperativeHandle(t,function(){return{props:r,getElement:function(){return p.current},getMask:function(){return f.current},getCloseIcon:function(){return x.current}}}),Ne(function(){r.visible&&v(!0)}),_(function(){r.visible&&!l&&v(!0),r.visible!==y&&l&&L(r.visible)},[r.visible]),_(function(){l&&(N.set("modal",f.current,i&&i.autoZIndex||D.autoZIndex,r.baseZIndex||i&&i.zIndex.modal||D.zIndex.modal),L(!0))},[l]),_(function(){y&&(z(),r.dismissable&&!r.modal&&U())},[r.dismissable,r.modal,y]),Te(function(){Z(),f.current&&N.clear(f.current)});var ue=function(){var a=e({type:"button",ref:x,className:b("closeButton"),onClick:function(Ee){return S(Ee)},"aria-label":r.ariaCloseLabel||Be("close")},m("closeButton")),h=e({className:b("closeIcon")},m("closeIcon")),R=r.closeIcon||s.createElement(Me,h),we=Ae.getJSXIcon(R,Ge({},h),{props:r});return r.showCloseIcon?s.createElement("button",a,we,s.createElement(Ve,null)):null},me=function(){return r.header?B.getJSXElement(r.header,r):null},be=function(){return r.icons?B.getJSXElement(r.icons,r):null},$=e({ref:f,style:re("mask"),className:b("mask",{maskVisibleState:l}),onMouseDown:function(a){return oe(a)}},m("mask")),J=e({id:r.id,className:P(r.className,b("root",{context:i})),style:r.style,role:"complementary"},O.getOtherProps(r),m("root")),fe=e({className:b("header")},m("header")),ve=e({className:b("content")},m("content")),he=e({className:b("icons")},m("icons")),ge={enter:r.fullScreen?150:300,exit:r.fullScreen?150:300},K=e({classNames:b("transition"),in:y,timeout:ge,options:r.transitionOptions,unmountOnExit:!0,onEntered:le,onExiting:ce,onExited:pe},m("transition")),ye=function(){var a={closeIconRef:x,hide:S};return s.createElement("div",$,s.createElement(W,g({nodeRef:p},K),s.createElement("div",g({ref:p},J),B.getJSXElement(n.content,a))))},xe=function(){var a=ue(),h=be(),R=me();return s.createElement("div",$,s.createElement(W,g({nodeRef:p},K),s.createElement("div",g({ref:p},J),s.createElement("div",fe,R,s.createElement("div",he,h,a)),s.createElement("div",ve,r.children))))},Se=function(){var a=n!=null&&n.content?ye():xe();return s.createElement(He,{element:a,appendTo:r.appendTo,visible:!0})};return l&&Se()});te.displayName="Sidebar";const E=n=>{const{children:t,className:e,prefixCls:i="drawer",...r}=n,c=ke(i);return d.jsx(te,{className:c(void 0,e),icons:d.jsx(F,{name:"logoWithWords",logoColor:"#073387",width:157,height:30}),closeIcon:d.jsx("i",{className:c("close"),children:d.jsx(F,{name:"times",size:24})}),...r,children:t})};E.propTypes={className:X.string,prefixCls:X.string};s.memo(E);E.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},prefixCls:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}},composes:["SidebarProps"]};const vn={title:"Components/Drawer",component:E,argTypes:{className:{control:"text"},prefixCls:{control:"text"},position:{control:"select",options:["right","left","top","bottom"]}},args:{prefixCls:"drawer"},tags:["autodocs"]},j={args:{prefixCls:"drawer",fullScreen:!1},render:function(t){const[e,i]=s.useState(!1);return d.jsxs(d.Fragment,{children:[d.jsx(Ie,{onClick:()=>i(!0),children:"Show Drawer"}),d.jsxs(E,{visible:e,onHide:()=>i(!1),...t,children:[d.jsx("h2",{children:"Drawer"}),d.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})}};var Q,ee,ne;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ne=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const hn=["Primary"];export{j as Primary,hn as __namedExportsOrder,vn as default};
