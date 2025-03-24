import{j as d}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-Ca8FO3x4.js";import{B as Ee}from"./Button-Bwvf9chr.js";import{u as Ie,P as ke,C as Ce,a as Oe,b as je,c as Pe,p as De,j as Re,e as _,f as _e,g as j,Z as N,D as T,h as P,O as B,r as Ne,I as Te,E as Be}from"./componentbase.esm-CmqFOBMX.js";import{C as X}from"./csstransition.esm-DSVPP7-p.js";import{T as Ae}from"./index.esm-tmG2Xedk.js";import{P as Le}from"./portal.esm-C38zexph.js";import{R as Me}from"./ripple.esm-BKAtRWv4.js";import{I as W}from"./Icons-CDgJ3q0z.js";import{c as He}from"./classnames-B-6LArsQ.js";import"./button.esm-CKaW3228.js";import"./index.esm-ZnzG-bZe.js";import"./iconbase.esm-BQbvzF6M.js";import"./tooltip.esm-3SGCDnos.js";import"./Spinner-mwCuaLRH.js";import"./setPrototypeOf-SZTCiYDs.js";import"./index-CA-MFgIQ.js";function g(){return g=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},g.apply(this,arguments)}function w(n){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(n)}function Ve(n,t){if(w(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t);if(w(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function qe(n){var t=Ve(n,"string");return w(t)==="symbol"?t:String(t)}function Ue(n,t,e){return t=qe(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function ze(n){if(Array.isArray(n))return n}function Ze(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var i,r,c,u,l=[],v=!0,E=!1;try{if(c=(e=e.call(n)).next,t!==0)for(;!(v=(i=c.call(e)).done)&&(l.push(i.value),l.length!==t);v=!0);}catch(I){E=!0,r=I}finally{try{if(!v&&e.return!=null&&(u=e.return(),Object(u)!==u))return}finally{if(E)throw r}}return l}}function F(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function $e(n,t){if(n){if(typeof n=="string")return F(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return F(n,t)}}function Je(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(n,t){return ze(n)||Ze(n,t)||$e(n,t)||Je()}var Ke={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(t){var e=t.props,i=t.maskVisibleState,r=["left","right","top","bottom"],c=r.find(function(u){return u===e.position});return j("p-sidebar-mask",c&&!e.fullScreen?"p-sidebar-".concat(c):"",{"p-component-overlay p-component-overlay-enter":e.modal,"p-sidebar-mask-scrollblocker":e.blockScroll,"p-sidebar-visible":i,"p-sidebar-full":e.fullScreen},e.maskClassName)},header:function(t){var e=t.props;return j("p-sidebar-header",{"p-sidebar-custom-header":e.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(t){t.props;var e=t.context;return j("p-sidebar p-component",{"p-input-filled":e&&e.inputStyle==="filled"||P.inputStyle==="filled","p-ripple-disabled":e&&e.ripple===!1||P.ripple===!1})},transition:"p-sidebar"},Xe=`
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
`,We={mask:function(t){var e=t.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:e.position==="left"?"flex-start":e.position==="right"?"flex-end":"center",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"}}},C=Ce.extend({defaultProps:{__TYPE:"Sidebar",appendTo:null,ariaCloseLabel:null,baseZIndex:0,blockScroll:!1,children:void 0,className:null,closeIcon:null,closeOnEscape:!0,content:null,dismissable:!0,fullScreen:!1,header:null,icons:null,id:null,maskClassName:null,maskStyle:null,modal:!0,onHide:null,onShow:null,position:"left",showCloseIcon:!0,style:null,transitionOptions:null,visible:!1},css:{classes:Ke,styles:Xe,inlineStyles:We}});function G(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,i)}return e}function Fe(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?G(Object(e),!0).forEach(function(i){Ue(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):G(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}var ne=s.forwardRef(function(n,t){var e=Ie(),i=s.useContext(ke),r=C.getProps(n,i),c=s.useState(!1),u=A(c,2),l=u[0],v=u[1],E=s.useState(!1),I=A(E,2),y=I[0],L=I[1],k=C.setMetaData({props:r,state:{containerVisible:l}}),m=k.ptm,b=k.cx,te=k.sx,M=k.isUnstyled;Oe(C.css.styles,M,{name:"sidebar"});var p=s.useRef(null),f=s.useRef(null),x=s.useRef(null),H=y&&r.closeOnEscape,V=je("sidebar",H);Pe({callback:function(a){S(a)},when:H&&V,priority:[Be.SIDEBAR,V]});var re=De({type:"click",listener:function(a){a.button===0&&ie(a)&&S(a)}}),q=A(re,2),U=q[0],z=q[1],ie=function(a){return p&&p.current&&!p.current.contains(a.target)},ae=function(){var a=document.activeElement,h=a&&p&&p.current.contains(a);!h&&r.showCloseIcon&&x.current&&x.current.focus()},se=function(a){r.dismissable&&r.modal&&f.current===a.target&&S(a)},S=function(a){r.onHide(),a.preventDefault()},oe=function(){r.onShow&&r.onShow(),ae(),pe()},le=function(){r.modal&&!M()&&T.addClass(f.current,"p-component-overlay-leave")},ce=function(){N.clear(f.current),v(!1),Z()},pe=function(){r.dismissable&&!r.modal&&U(),r.blockScroll&&T.blockBodyScroll()},Z=function(){z(),r.blockScroll&&T.unblockBodyScroll()};s.useImperativeHandle(t,function(){return{props:r,getElement:function(){return p.current},getMask:function(){return f.current},getCloseIcon:function(){return x.current}}}),Re(function(){r.visible&&v(!0)}),_(function(){r.visible&&!l&&v(!0),r.visible!==y&&l&&L(r.visible)},[r.visible]),_(function(){l&&(N.set("modal",f.current,i&&i.autoZIndex||P.autoZIndex,r.baseZIndex||i&&i.zIndex.modal||P.zIndex.modal),L(!0))},[l]),_(function(){y&&(z(),r.dismissable&&!r.modal&&U())},[r.dismissable,r.modal,y]),_e(function(){Z(),f.current&&N.clear(f.current)});var de=function(){var a=e({type:"button",ref:x,className:b("closeButton"),onClick:function(we){return S(we)},"aria-label":r.ariaCloseLabel||Ne("close")},m("closeButton")),h=e({className:b("closeIcon")},m("closeIcon")),R=r.closeIcon||s.createElement(Ae,h),Se=Te.getJSXIcon(R,Fe({},h),{props:r});return r.showCloseIcon?s.createElement("button",a,Se,s.createElement(Me,null)):null},ue=function(){return r.header?B.getJSXElement(r.header,r):null},me=function(){return r.icons?B.getJSXElement(r.icons,r):null},$=e({ref:f,style:te("mask"),className:b("mask",{maskVisibleState:l}),onMouseDown:function(a){return se(a)}},m("mask")),J=e({id:r.id,className:j(r.className,b("root",{context:i})),style:r.style,role:"complementary"},C.getOtherProps(r),m("root")),be=e({className:b("header")},m("header")),fe=e({className:b("content")},m("content")),ve=e({className:b("icons")},m("icons")),he={enter:r.fullScreen?150:300,exit:r.fullScreen?150:300},K=e({classNames:b("transition"),in:y,timeout:he,options:r.transitionOptions,unmountOnExit:!0,onEntered:oe,onExiting:le,onExited:ce},m("transition")),ge=function(){var a={closeIconRef:x,hide:S};return s.createElement("div",$,s.createElement(X,g({nodeRef:p},K),s.createElement("div",g({ref:p},J),B.getJSXElement(n.content,a))))},ye=function(){var a=de(),h=me(),R=ue();return s.createElement("div",$,s.createElement(X,g({nodeRef:p},K),s.createElement("div",g({ref:p},J),s.createElement("div",be,R,s.createElement("div",ve,h,a)),s.createElement("div",fe,r.children))))},xe=function(){var a=n!=null&&n.content?ge():ye();return s.createElement(Le,{element:a,appendTo:r.appendTo,visible:!0})};return l&&xe()});ne.displayName="Sidebar";const D=n=>{const{children:t,className:e,prefixCls:i="drawer",...r}=n,c=He(i);return d.jsx(ne,{className:c(void 0,e),icons:d.jsx(W,{name:"logoWithWords",logoColor:"#073387",width:157,height:30}),closeIcon:d.jsx(W,{name:"cross",size:24,wrapperCls:c("close")}),...r,children:t})};s.memo(D);D.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["SidebarProps"]};const vn={title:"Components/Drawer",component:D,argTypes:{className:{control:"text"},prefixCls:{control:"text"},position:{control:"select",options:["right","left","top","bottom"]}},args:{prefixCls:"drawer"},tags:["autodocs"]},O={args:{prefixCls:"drawer",fullScreen:!1},render:function(t){const[e,i]=s.useState(!1);return d.jsxs(d.Fragment,{children:[d.jsx(Ee,{onClick:()=>i(!0),children:"Show Drawer"}),d.jsxs(D,{visible:e,onHide:()=>i(!1),...t,children:[d.jsx("h2",{children:"Drawer"}),d.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})}};var Y,Q,ee;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};const hn=["Primary"];export{O as Primary,hn as __namedExportsOrder,vn as default};
