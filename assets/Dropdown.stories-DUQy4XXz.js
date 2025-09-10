import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-CP2yOfOm.js";import{u as ye,P as ve,C as xe,a as Ce,n as he,h as ge,i as be,e as Le,g as je,D as b,c as Q,b as R,I as Ee,r as we,Z as B,E as Pe,U as He}from"./componentbase.esm-D-zJM1J_.js";import{C as Se}from"./csstransition.esm-DWeYoiJr.js";import{T as Oe}from"./index.esm-iUewYYmr.js";import{O as N}from"./overlayservice.esm-BZQ914Y6.js";import{P as Ie}from"./portal.esm-CCqTVpgZ.js";import{R as Re}from"./ripple.esm-BIqWt_ei.js";import{d as ke}from"./index-CfaLkjk1.js";import{c as Ve}from"./classnames-lRq3rz0l.js";import{B as Te}from"./Button-D-VeML5a.js";import{b as O}from"./Icons-CoyO219J.js";/* empty css              */import"./index-BOAxdYzW.js";import"./iconbase.esm-DhSHUaJo.js";import"./button.esm-HBeH8jE_.js";import"./index.esm-uggFAbkR.js";import"./tooltip.esm-BgHJPrum.js";import"./Spinner-BctWPXJz.js";function A(){return A=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},A.apply(null,arguments)}function k(e){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},k(e)}function De(e,n){if(k(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,n);if(k(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Ne(e){var n=De(e,"string");return k(n)=="symbol"?n:n+""}function _e(e,n,r){return(n=Ne(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Ae(e){if(Array.isArray(e))return e}function Me(e,n){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var o,a,w,C,u=[],h=!0,v=!1;try{if(w=(r=r.call(e)).next,n!==0)for(;!(h=(o=w.call(r)).done)&&(u.push(o.value),u.length!==n);h=!0);}catch(x){v=!0,a=x}finally{try{if(!h&&r.return!=null&&(C=r.return(),Object(C)!==C))return}finally{if(v)throw a}}return u}}function K(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,o=Array(n);r<n;r++)o[r]=e[r];return o}function Ze(e,n){if(e){if(typeof e=="string")return K(e,n);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?K(e,n):void 0}}function qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(e,n){return Ae(e)||Me(e,n)||Ze(e,n)||qe()}var Be={root:function(n){n.props;var r=n.context;return Q("p-overlaypanel p-component",{"p-input-filled":r&&r.inputStyle==="filled"||R.inputStyle==="filled","p-ripple-disabled":r&&r.ripple===!1||R.ripple===!1})},closeIcon:"p-overlaypanel-close-icon",closeButton:"p-overlaypanel-close p-link",content:"p-overlaypanel-content",transition:"p-overlaypanel"},Ue=`
@layer primereact {
    .p-overlaypanel {
        position: absolute;
        margin-top: 10px;
        /* Github #3122: Prevent animation flickering  */
        top: -9999px;
        left: -9999px;
    }
    
    .p-overlaypanel-flipped {
        margin-top: -10px;
        margin-bottom: 10px;
    }
    
    .p-overlaypanel-close {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }
    
    /* Animation */
    .p-overlaypanel-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }
    
    .p-overlaypanel-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-overlaypanel-enter-done {
        transform: none;
    }
    
    .p-overlaypanel-exit {
        opacity: 1;
    }
    
    .p-overlaypanel-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }
    
    .p-overlaypanel:after, .p-overlaypanel:before {
        bottom: 100%;
        left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }
    
    .p-overlaypanel:after {
        border-width: 8px;
        margin-left: -8px;
    }
    
    .p-overlaypanel:before {
        border-width: 10px;
        margin-left: -10px;
    }
    
    .p-overlaypanel-flipped:after, .p-overlaypanel-flipped:before {
        bottom: auto;
        top: 100%;
    }
    
    .p-overlaypanel.p-overlaypanel-flipped:after {
        border-bottom-color: transparent;
    }
    
    .p-overlaypanel.p-overlaypanel-flipped:before {
        border-bottom-color: transparent
    }
}
`,I=xe.extend({defaultProps:{__TYPE:"OverlayPanel",id:null,dismissable:!0,showCloseIcon:!1,closeIcon:null,style:null,className:null,appendTo:null,breakpoints:null,ariaCloseLabel:null,transitionOptions:null,onShow:null,onHide:null,children:void 0,closeOnEscape:!0},css:{classes:Be,styles:Ue}});function J(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,o)}return r}function Ye(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?J(Object(r),!0).forEach(function(o){_e(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}var ee=c.forwardRef(function(e,n){var r=ye(),o=c.useContext(ve),a=I.getProps(e,o),w=c.useState(!1),C=$(w,2),u=C[0],h=C[1],v=I.setMetaData({props:a,state:{visible:u}}),x=v.ptm,L=v.cx;v.sx;var j=v.isUnstyled;Ce(I.css.styles,j,{name:"overlaypanel"});var P=c.useRef(""),i=c.useRef(null),d=c.useRef(null),f=c.useRef(!1),E=c.useRef(null),m=c.useRef(null),V=he({target:d,overlay:i,listener:function(l,s){var y=s.type,S=s.valid;if(S)switch(y){case"outside":a.dismissable&&!f.current&&H();break;case"resize":case"scroll":case"orientationchange":T();break}f.current=!1},when:u}),g=$(V,2),Z=g[0],ne=g[1],U=u&&a.closeOnEscape,Y=ge("overlay-panel",U);be({callback:function(){H()},when:U&&Y,priority:[Pe.OVERLAY_PANEL,Y]});var re=function(l){return i&&i.current&&!(i.current.isSameNode(l)||i.current.contains(l))},te=function(l,s){return d.current!=null&&d.current!==(s||l.currentTarget||l.target)},oe=function(l){H(),l.preventDefault()},le=function(l){f.current=!0,N.emit("overlay-click",{originalEvent:l,target:d.current})},z=function(){f.current=!0},ae=function(l,s){u?(H(),te(l,s)&&(d.current=s||l.currentTarget||l.target,setTimeout(function(){q(l,d.current)},200))):q(l,s)},q=function(l,s){d.current=s||l.currentTarget||l.target,u?T():(h(!0),m.current=function(y){!re(y.target)&&(f.current=!0)},N.on("overlay-click",m.current))},H=function(){h(!1),N.off("overlay-click",m.current),m.current=null},ie=function(){i.current.setAttribute(P.current,""),B.set("overlay",i.current,o&&o.autoZIndex||R.autoZIndex,o&&o.zIndex.overlay||R.zIndex.overlay),b.addStyles(i.current,{position:"absolute",top:"0",left:"0"}),T()},se=function(){Z(),a.onShow&&a.onShow()},ce=function(){ne()},pe=function(){B.clear(i.current),a.onHide&&a.onHide()},T=function(){if(d.current&&i.current){b.absolutePosition(i.current,d.current);var l=b.getOffset(i.current),s=b.getOffset(d.current),y=0;l.left<s.left&&(y=s.left-l.left),i.current.style.setProperty("--overlayArrowLeft","".concat(y,"px")),l.top<s.top?(i.current.setAttribute("data-p-overlaypanel-flipped","true"),j&&b.addClass(i.current,"p-overlaypanel-flipped")):(i.current.setAttribute("data-p-overlaypanel-flipped","false"),j&&b.removeClass(i.current,"p-overlaypanel-flipped"))}},ue=function(){if(!E.current){E.current=b.createInlineStyle(o&&o.nonce||R.nonce,o&&o.styleContainer);var l="";for(var s in a.breakpoints)l=l+`
                    @media screen and (max-width: `.concat(s,`) {
                        .p-overlaypanel[`).concat(P.current,`] {
                            width: `).concat(a.breakpoints[s],`;
                        }
                    }
                `);E.current.innerHTML=l}};Le(function(){P.current=He(),a.breakpoints&&ue()}),je(function(){E.current=b.removeInlineStyle(E.current),m.current&&(N.off("overlay-click",m.current),m.current=null),B.clear(i.current)}),c.useImperativeHandle(n,function(){return{props:a,toggle:ae,show:q,hide:H,align:T,isVisible:function(){return u},getElement:function(){return i.current}}});var de=function(){var l=r({className:L("closeIcon"),"aria-hidden":!0},x("closeIcon")),s=a.closeIcon||c.createElement(Oe,l),y=Ee.getJSXIcon(s,Ye({},l),{props:a}),S=r({type:"button",className:L("closeButton"),onClick:function(D){return oe(D)},"aria-label":a.ariaCloseLabel||we("close")},x("closeButton"));return a.showCloseIcon?c.createElement("button",S,y,c.createElement(Re,null)):null},fe=function(){var l=de(),s=r({id:a.id,className:Q(a.className,L("root",{context:o})),style:a.style,onClick:function(D){return le(D)}},I.getOtherProps(a),x("root")),y=r({className:L("content"),onClick:function(D){return z()},onMouseDown:z},I.getOtherProps(a),x("content")),S=r({classNames:L("transition"),in:u,timeout:{enter:120,exit:100},options:a.transitionOptions,unmountOnExit:!0,onEnter:ie,onEntered:se,onExit:ce,onExited:pe},x("transition"));return c.createElement(Se,A({nodeRef:i},S),c.createElement("div",A({ref:i},s),c.createElement("div",y,a.children),l))},me=fe();return c.createElement(Ie,{element:me,appendTo:a.appendTo})});ee.displayName="OverlayPanel";const M=e=>{const{prefixEle:n,suffixEle:r,items:o=[],width:a,height:w,prefixCls:C="dropdown",className:u,wrapperCls:h,listCls:v,itemCls:x,itemActiveCls:L,onScroll:j,...P}=e,i=Ve(C),[d,f]=c.useState(!1),[E,m]=c.useState(!1),V=ke(()=>m(!1),500);return t.jsx(ee,{...P,className:i(void 0,[u,d&&i("hover"),E&&i("scrolling")].join(" ")),style:{"--dropdown-width":a||"auto","--dropdown-height":w||"auto"},onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),onTouchStart:()=>f(!0),onTouchEnd:()=>f(!1),onScroll:g=>{j==null||j(g),V.cancel(),m(!0),V()},children:t.jsxs("div",{className:i("wrapper",h),children:[n,t.jsx("ul",{className:i("list",v),children:o.map((g,Z)=>t.jsx("li",{className:i("list-item",[x,g.active?L:void 0].join(" ")),children:g.children},g.key??Z))}),r]})})};c.memo(M);M.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"OverlayPanel | null",elements:[{name:"OverlayPanel"},{name:"null"}]}],raw:"RefObject<OverlayPanel | null>"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},description:""},height:{required:!1,tsType:{name:"CSSProperties['height']",raw:"CSSProperties['height']"},description:""},width:{required:!1,tsType:{name:"CSSProperties['width']",raw:"CSSProperties['width']"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},wrapperCls:{required:!1,tsType:{name:"string"},description:""},listCls:{required:!1,tsType:{name:"string"},description:""},itemCls:{required:!1,tsType:{name:"string"},description:""},itemActiveCls:{required:!1,tsType:{name:"string"},description:""},prefixEle:{required:!1,tsType:{name:"ReactNode"},description:""},suffixEle:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["OverlayPanelProps"]};const dn={title:"Components/Dropdown",component:M,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"dropdown"},tags:["autodocs"]},ze=[{key:"1",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(O,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.975 7.9501C8.60809 7.9501 7.5 9.0582 7.5 10.4251C7.5 11.792 8.60809 12.9001 9.975 12.9001L11.1 12.9001L11.1 14.2501L7.95 14.2501L7.95 16.0501L11.1 16.0501L11.1 17.8501L12.9 17.8501L12.9 16.0501L14.025 16.0501C15.3919 16.0501 16.5 14.942 16.5 13.5751C16.5 12.2082 15.3919 11.1001 14.025 11.1001L12.9 11.1001L12.9 9.7501L16.05 9.7501L16.05 7.9501L12.9 7.9501L12.9 6.1501L11.1 6.1501L11.1 7.9501L9.975 7.9501ZM11.1 9.7501L9.975 9.7501C9.60221 9.7501 9.3 10.0523 9.3 10.4251C9.3 10.7979 9.60221 11.1001 9.975 11.1001L11.1 11.1001L11.1 9.7501ZM12.9 12.9001L12.9 14.2501L14.025 14.2501C14.3978 14.2501 14.7 13.9479 14.7 13.5751C14.7 13.2023 14.3978 12.9001 14.025 12.9001L12.9 12.9001Z",fill:"#131313"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"USD"}),t.jsx("span",{children:"US Dollar"})]})]})},{key:"2",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(O,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.8458 9.50512C13.4679 8.12727 11.234 8.12727 9.85614 9.50512C9.68997 9.67129 9.54384 9.84992 9.41775 10.038H13.2502V11.7043H8.83508C8.80809 12.0272 8.82541 12.3531 8.88702 12.6722H13.2502V14.3385H9.70893C9.75612 14.3917 9.80519 14.4438 9.85614 14.4948C11.234 15.8726 13.4679 15.8726 14.8458 14.4948L16.024 15.673C13.9955 17.7016 10.7065 17.7016 8.67788 15.673C8.27597 15.2711 7.95369 14.8197 7.71103 14.3385H6.47656V12.6722H7.19986C7.15821 12.3512 7.14652 12.0271 7.16481 11.7043H6.47656V10.038H7.53975C7.79331 9.4154 8.17269 8.83205 8.67788 8.32686C10.7065 6.29827 13.9955 6.29827 16.024 8.32686L14.8458 9.50512Z",fill:"#131313"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"EUR"}),t.jsx("span",{children:"Euro"})]})]})},{key:"3",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(O,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{d:"M15.9877 15.7783V17.0377H8.64116V15.7783H8.85106C9.18508 15.7783 9.50542 15.6456 9.7416 15.4094C9.97779 15.1732 10.1105 14.8529 10.1105 14.5189V12.8397H8.01141L8.01137 11.5803H10.1105V9.90105C10.1104 9.34376 10.2688 8.79794 10.5672 8.32726C10.8656 7.85658 11.2917 7.48046 11.7957 7.24276C12.2998 7.00506 12.861 6.9156 13.414 6.98479C13.967 7.05399 14.4889 7.279 14.9188 7.63358C14.8125 7.76238 14.117 8.6049 14.117 8.6049C13.817 8.35586 13.439 8.22026 13.0491 8.22183C12.6037 8.22183 12.1766 8.39875 11.8617 8.71366C11.5468 9.02857 11.3699 9.45569 11.3699 9.90105L11.5395 11.4107L13.414 11.5803V12.8397L11.5395 13.0092L11.3699 14.5189C11.3704 14.9612 11.2538 15.3957 11.0319 15.7783H15.9877Z",fill:"#131313"}),t.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.3929 7.15305C12.8719 7.08784 12.343 7.17215 11.868 7.39613C11.3931 7.62011 10.9916 7.97454 10.7104 8.41805C10.4292 8.86157 10.28 9.37589 10.28 9.90102V11.7498H8.18095L8.18098 12.6701H10.28V14.5189C10.28 14.8979 10.1295 15.2613 9.86151 15.5293C9.59352 15.7973 9.23005 15.9479 8.85106 15.9479H8.81073V16.8681H15.8182V15.9479H10.7376L10.8853 15.6932C11.0921 15.3365 11.2008 14.9314 11.2003 14.5191V12.6701H13.2444V11.7498H11.2003V9.90105C11.2003 9.41072 11.3951 8.94047 11.7418 8.59376C12.0884 8.24712 12.5586 8.05235 13.0488 8.05226C13.4213 8.05083 13.7841 8.16307 14.0894 8.37192L14.6767 7.66047C14.2992 7.38621 13.8577 7.21121 13.3929 7.15305ZM11.5395 13.0092L11.0777 7.6107L14.2478 8.71284L15.1576 7.6107L15.0267 7.50276C14.5719 7.12772 14.0199 6.88973 13.435 6.81654C12.8502 6.74335 12.2565 6.83798 11.7234 7.08939C11.1902 7.3408 10.7396 7.73863 10.424 8.23647C10.1084 8.7343 9.94084 9.31161 9.94091 9.90105V11.4107H7.8418L7.84185 13.0092H9.94091V14.5189C9.94091 14.8079 9.82608 15.0851 9.6217 15.2895C9.41731 15.4939 9.14011 15.6087 8.85106 15.6087H8.47159V17.2073H16.1573V15.6087H11.3086C11.4608 15.2666 11.5399 14.8953 11.5395 14.5187M11.5395 13.0092H13.5836V11.4107H11.5395V9.90105C11.5395 9.50066 11.6985 9.11668 11.9816 8.83356C12.2647 8.55045 12.6487 8.3914 13.0491 8.3914C13.3992 8.38999 13.7393 8.51175 14.0087 8.73537L14.1395 8.84398L14.2478 8.71284L11.0777 7.6107L11.5395 13.0092Z",fill:"black"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"GBP"}),t.jsx("span",{children:"British Pound"})]})]})},{key:"4",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(O,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.8524 7.5154L15.6667 6.54535L15.5354 6.43799L12.0004 10.7589L8.46551 6.4381L7.14648 7.51529L10.2054 11.2515H8.42563V12.9527H11.1498V13.9472H8.42563V15.6484H11.1498L11.1498 17.4929H12.8509L12.8509 15.6484H15.5751V13.9472H12.8509V12.9527H15.5751V11.2515H13.7936L16.8524 7.5154Z",fill:"black"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"JPY"}),t.jsx("span",{children:"Japanese Yen"})]})]})},{key:"5",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(O,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.8524 7.5154L15.6667 6.54535L15.5354 6.43799L12.0004 10.7589L8.46551 6.4381L7.14648 7.51529L10.2054 11.2515H8.42563V12.9527H11.1498V13.9472H8.42563V15.6484H11.1498L11.1498 17.4929H12.8509L12.8509 15.6484H15.5751V13.9472H12.8509V12.9527H15.5751V11.2515H13.7936L16.8524 7.5154Z",fill:"black"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"CNY"}),t.jsx("span",{children:"Chinese Yuan"})]})]})}],_={args:{prefixCls:"dropdown",width:"180px",height:"240px"},render:e=>{const n=c.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(Te,{onClick:r=>{var o;return(o=n.current)==null?void 0:o.toggle(r)},children:"Dropdown"}),t.jsx(M,{...e,items:ze,ref:n})]})}};var W,F,X;_.parameters={..._.parameters,docs:{...(W=_.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    prefixCls: 'dropdown',
    width: '180px',
    height: '240px'
  },
  render: props => {
    const dp = React.useRef<DropdownHandler>(null);
    return <>
        <Button onClick={e => dp.current?.toggle(e)}>Dropdown</Button>
        <Dropdown {...props} items={dropdownItems} ref={dp} />
      </>;
  }
}`,...(X=(F=_.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};const fn=["Primary"];export{_ as Primary,fn as __namedExportsOrder,dn as default};
