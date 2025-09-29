import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-CP2yOfOm.js";import{u as ye,P as ve,C as xe,a as Ce,n as he,h as ge,i as be,e as Le,g as we,D as g,c as ee,b as k,I as je,r as Ee,Z as U,E as Pe,U as He}from"./componentbase.esm-D-zJM1J_.js";import{C as Se}from"./csstransition.esm-DWeYoiJr.js";import{T as Oe}from"./index.esm-iUewYYmr.js";import{O as A}from"./overlayservice.esm-BZQ914Y6.js";import{P as Ie}from"./portal.esm-CCqTVpgZ.js";import{R as Re}from"./ripple.esm-BIqWt_ei.js";import{d as ke}from"./index-CfaLkjk1.js";import{c as Ve}from"./classnames-lRq3rz0l.js";import{B as Te}from"./Button-CJwhtjbL.js";import{b as I}from"./Icons-CmAiDKhd.js";/* empty css              */import"./index-BOAxdYzW.js";import"./iconbase.esm-DhSHUaJo.js";import"./button.esm-HBeH8jE_.js";import"./index.esm-uggFAbkR.js";import"./tooltip.esm-BgHJPrum.js";import"./Spinner-BctWPXJz.js";function M(){return M=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},M.apply(null,arguments)}function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},V(e)}function De(e,n){if(V(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,n);if(V(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Ne(e){var n=De(e,"string");return V(n)=="symbol"?n:n+""}function Ae(e,n,r){return(n=Ne(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function _e(e){if(Array.isArray(e))return e}function Me(e,n){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var o,l,E,C,d=[],h=!0,y=!1;try{if(E=(r=r.call(e)).next,n!==0)for(;!(h=(o=E.call(r)).done)&&(d.push(o.value),d.length!==n);h=!0);}catch(v){y=!0,l=v}finally{try{if(!h&&r.return!=null&&(C=r.return(),Object(C)!==C))return}finally{if(y)throw l}}return d}}function $(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,o=Array(n);r<n;r++)o[r]=e[r];return o}function Ze(e,n){if(e){if(typeof e=="string")return $(e,n);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,n):void 0}}function qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(e,n){return _e(e)||Me(e,n)||Ze(e,n)||qe()}var Be={root:function(n){n.props;var r=n.context;return ee("p-overlaypanel p-component",{"p-input-filled":r&&r.inputStyle==="filled"||k.inputStyle==="filled","p-ripple-disabled":r&&r.ripple===!1||k.ripple===!1})},closeIcon:"p-overlaypanel-close-icon",closeButton:"p-overlaypanel-close p-link",content:"p-overlaypanel-content",transition:"p-overlaypanel"},Ue=`
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
`,R=xe.extend({defaultProps:{__TYPE:"OverlayPanel",id:null,dismissable:!0,showCloseIcon:!1,closeIcon:null,style:null,className:null,appendTo:null,breakpoints:null,ariaCloseLabel:null,transitionOptions:null,onShow:null,onHide:null,children:void 0,closeOnEscape:!0},css:{classes:Be,styles:Ue}});function W(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,o)}return r}function Ye(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?W(Object(r),!0).forEach(function(o){Ae(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}var ne=c.forwardRef(function(e,n){var r=ye(),o=c.useContext(ve),l=R.getProps(e,o),E=c.useState(!1),C=J(E,2),d=C[0],h=C[1],y=R.setMetaData({props:l,state:{visible:d}}),v=y.ptm,b=y.cx;y.sx;var P=y.isUnstyled;Ce(R.css.styles,P,{name:"overlaypanel"});var L=c.useRef(""),i=c.useRef(null),u=c.useRef(null),w=c.useRef(!1),f=c.useRef(null),x=c.useRef(null),T=he({target:u,overlay:i,listener:function(a,s){var m=s.type,O=s.valid;if(O)switch(m){case"outside":l.dismissable&&!w.current&&S();break;case"resize":case"scroll":case"orientationchange":D();break}w.current=!1},when:d}),H=J(T,2),j=H[0],q=H[1],Y=d&&l.closeOnEscape,z=ge("overlay-panel",Y);be({callback:function(){S()},when:Y&&z,priority:[Pe.OVERLAY_PANEL,z]});var re=function(a){return i&&i.current&&!(i.current.isSameNode(a)||i.current.contains(a))},te=function(a,s){return u.current!=null&&u.current!==(s||a.currentTarget||a.target)},oe=function(a){S(),a.preventDefault()},le=function(a){w.current=!0,A.emit("overlay-click",{originalEvent:a,target:u.current})},G=function(){w.current=!0},ae=function(a,s){d?(S(),te(a,s)&&(u.current=s||a.currentTarget||a.target,setTimeout(function(){B(a,u.current)},200))):B(a,s)},B=function(a,s){u.current=s||a.currentTarget||a.target,d?D():(h(!0),x.current=function(m){!re(m.target)&&(w.current=!0)},A.on("overlay-click",x.current))},S=function(){h(!1),A.off("overlay-click",x.current),x.current=null},ie=function(){i.current.setAttribute(L.current,""),U.set("overlay",i.current,o&&o.autoZIndex||k.autoZIndex,o&&o.zIndex.overlay||k.zIndex.overlay),g.addStyles(i.current,{position:"absolute",top:"0",left:"0"}),D()},se=function(){j(),l.onShow&&l.onShow()},ce=function(){q()},pe=function(){U.clear(i.current),l.onHide&&l.onHide()},D=function(){if(u.current&&i.current){g.absolutePosition(i.current,u.current);var a=g.getOffset(i.current),s=g.getOffset(u.current),m=0;a.left<s.left&&(m=s.left-a.left),i.current.style.setProperty("--overlayArrowLeft","".concat(m,"px")),a.top<s.top?(i.current.setAttribute("data-p-overlaypanel-flipped","true"),P&&g.addClass(i.current,"p-overlaypanel-flipped")):(i.current.setAttribute("data-p-overlaypanel-flipped","false"),P&&g.removeClass(i.current,"p-overlaypanel-flipped"))}},ue=function(){if(!f.current){f.current=g.createInlineStyle(o&&o.nonce||k.nonce,o&&o.styleContainer);var a="";for(var s in l.breakpoints)a=a+`
                    @media screen and (max-width: `.concat(s,`) {
                        .p-overlaypanel[`).concat(L.current,`] {
                            width: `).concat(l.breakpoints[s],`;
                        }
                    }
                `);f.current.innerHTML=a}};Le(function(){L.current=He(),l.breakpoints&&ue()}),we(function(){f.current=g.removeInlineStyle(f.current),x.current&&(A.off("overlay-click",x.current),x.current=null),U.clear(i.current)}),c.useImperativeHandle(n,function(){return{props:l,toggle:ae,show:B,hide:S,align:D,isVisible:function(){return d},getElement:function(){return i.current}}});var de=function(){var a=r({className:b("closeIcon"),"aria-hidden":!0},v("closeIcon")),s=l.closeIcon||c.createElement(Oe,a),m=je.getJSXIcon(s,Ye({},a),{props:l}),O=r({type:"button",className:b("closeButton"),onClick:function(N){return oe(N)},"aria-label":l.ariaCloseLabel||Ee("close")},v("closeButton"));return l.showCloseIcon?c.createElement("button",O,m,c.createElement(Re,null)):null},fe=function(){var a=de(),s=r({id:l.id,className:ee(l.className,b("root",{context:o})),style:l.style,onClick:function(N){return le(N)}},R.getOtherProps(l),v("root")),m=r({className:b("content"),onClick:function(N){return G()},onMouseDown:G},R.getOtherProps(l),v("content")),O=r({classNames:b("transition"),in:d,timeout:{enter:120,exit:100},options:l.transitionOptions,unmountOnExit:!0,onEnter:ie,onEntered:se,onExit:ce,onExited:pe},v("transition"));return c.createElement(Se,M({nodeRef:i},O),c.createElement("div",M({ref:i},s),c.createElement("div",m,l.children),a))},me=fe();return c.createElement(Ie,{element:me,appendTo:l.appendTo})});ne.displayName="OverlayPanel";const Z=e=>{const{prefixEle:n,suffixEle:r,items:o=[],renderList:l,width:E,height:C,prefixCls:d="dropdown",className:h,wrapperCls:y,listCls:v,itemCls:b,itemActiveCls:P,onScroll:L,...i}=e,u=Ve(d),[w,f]=c.useState(!1),[x,T]=c.useState(!1),H=ke(()=>T(!1),500);return t.jsx(ne,{...i,className:u(void 0,[h,w&&u("hover"),x&&u("scrolling")].join(" ")),style:{"--dropdown-width":E||"auto","--dropdown-height":C||"auto"},onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),onTouchStart:()=>f(!0),onTouchEnd:()=>f(!1),onScroll:j=>{L==null||L(j),H.cancel(),T(!0),H()},children:t.jsxs("div",{className:u("wrapper",y),children:[n,(l==null?void 0:l(o))??t.jsx("ul",{className:u("list",v),children:o.map((j,q)=>t.jsx("li",{className:u("list-item",[b,j.active?P:void 0].join(" ")),children:j.children},j.key??q))}),r]})})};c.memo(Z);Z.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"OverlayPanel | null",elements:[{name:"OverlayPanel"},{name:"null"}]}],raw:"RefObject<OverlayPanel | null>"},description:""},items:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},description:""},renderList:{required:!1,tsType:{name:"signature",type:"function",raw:"(items: DropdownItem[]) => ReactNode",signature:{arguments:[{type:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},name:"items"}],return:{name:"ReactNode"}}},description:""},height:{required:!1,tsType:{name:"CSSProperties['height']",raw:"CSSProperties['height']"},description:""},width:{required:!1,tsType:{name:"CSSProperties['width']",raw:"CSSProperties['width']"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},wrapperCls:{required:!1,tsType:{name:"string"},description:""},listCls:{required:!1,tsType:{name:"string"},description:""},itemCls:{required:!1,tsType:{name:"string"},description:""},itemActiveCls:{required:!1,tsType:{name:"string"},description:""},prefixEle:{required:!1,tsType:{name:"ReactNode"},description:""},suffixEle:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["OverlayPanelProps"]};const dn={title:"Components/Dropdown",component:Z,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"dropdown"},tags:["autodocs"]},ze=[{key:"1",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(I,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.975 7.9501C8.60809 7.9501 7.5 9.0582 7.5 10.4251C7.5 11.792 8.60809 12.9001 9.975 12.9001L11.1 12.9001L11.1 14.2501L7.95 14.2501L7.95 16.0501L11.1 16.0501L11.1 17.8501L12.9 17.8501L12.9 16.0501L14.025 16.0501C15.3919 16.0501 16.5 14.942 16.5 13.5751C16.5 12.2082 15.3919 11.1001 14.025 11.1001L12.9 11.1001L12.9 9.7501L16.05 9.7501L16.05 7.9501L12.9 7.9501L12.9 6.1501L11.1 6.1501L11.1 7.9501L9.975 7.9501ZM11.1 9.7501L9.975 9.7501C9.60221 9.7501 9.3 10.0523 9.3 10.4251C9.3 10.7979 9.60221 11.1001 9.975 11.1001L11.1 11.1001L11.1 9.7501ZM12.9 12.9001L12.9 14.2501L14.025 14.2501C14.3978 14.2501 14.7 13.9479 14.7 13.5751C14.7 13.2023 14.3978 12.9001 14.025 12.9001L12.9 12.9001Z",fill:"#131313"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"USD"}),t.jsx("span",{children:"US Dollar"})]})]})},{key:"2",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(I,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.8458 9.50512C13.4679 8.12727 11.234 8.12727 9.85614 9.50512C9.68997 9.67129 9.54384 9.84992 9.41775 10.038H13.2502V11.7043H8.83508C8.80809 12.0272 8.82541 12.3531 8.88702 12.6722H13.2502V14.3385H9.70893C9.75612 14.3917 9.80519 14.4438 9.85614 14.4948C11.234 15.8726 13.4679 15.8726 14.8458 14.4948L16.024 15.673C13.9955 17.7016 10.7065 17.7016 8.67788 15.673C8.27597 15.2711 7.95369 14.8197 7.71103 14.3385H6.47656V12.6722H7.19986C7.15821 12.3512 7.14652 12.0271 7.16481 11.7043H6.47656V10.038H7.53975C7.79331 9.4154 8.17269 8.83205 8.67788 8.32686C10.7065 6.29827 13.9955 6.29827 16.024 8.32686L14.8458 9.50512Z",fill:"#131313"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"EUR"}),t.jsx("span",{children:"Euro"})]})]})},{key:"3",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(I,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{d:"M15.9877 15.7783V17.0377H8.64116V15.7783H8.85106C9.18508 15.7783 9.50542 15.6456 9.7416 15.4094C9.97779 15.1732 10.1105 14.8529 10.1105 14.5189V12.8397H8.01141L8.01137 11.5803H10.1105V9.90105C10.1104 9.34376 10.2688 8.79794 10.5672 8.32726C10.8656 7.85658 11.2917 7.48046 11.7957 7.24276C12.2998 7.00506 12.861 6.9156 13.414 6.98479C13.967 7.05399 14.4889 7.279 14.9188 7.63358C14.8125 7.76238 14.117 8.6049 14.117 8.6049C13.817 8.35586 13.439 8.22026 13.0491 8.22183C12.6037 8.22183 12.1766 8.39875 11.8617 8.71366C11.5468 9.02857 11.3699 9.45569 11.3699 9.90105L11.5395 11.4107L13.414 11.5803V12.8397L11.5395 13.0092L11.3699 14.5189C11.3704 14.9612 11.2538 15.3957 11.0319 15.7783H15.9877Z",fill:"#131313"}),t.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.3929 7.15305C12.8719 7.08784 12.343 7.17215 11.868 7.39613C11.3931 7.62011 10.9916 7.97454 10.7104 8.41805C10.4292 8.86157 10.28 9.37589 10.28 9.90102V11.7498H8.18095L8.18098 12.6701H10.28V14.5189C10.28 14.8979 10.1295 15.2613 9.86151 15.5293C9.59352 15.7973 9.23005 15.9479 8.85106 15.9479H8.81073V16.8681H15.8182V15.9479H10.7376L10.8853 15.6932C11.0921 15.3365 11.2008 14.9314 11.2003 14.5191V12.6701H13.2444V11.7498H11.2003V9.90105C11.2003 9.41072 11.3951 8.94047 11.7418 8.59376C12.0884 8.24712 12.5586 8.05235 13.0488 8.05226C13.4213 8.05083 13.7841 8.16307 14.0894 8.37192L14.6767 7.66047C14.2992 7.38621 13.8577 7.21121 13.3929 7.15305ZM11.5395 13.0092L11.0777 7.6107L14.2478 8.71284L15.1576 7.6107L15.0267 7.50276C14.5719 7.12772 14.0199 6.88973 13.435 6.81654C12.8502 6.74335 12.2565 6.83798 11.7234 7.08939C11.1902 7.3408 10.7396 7.73863 10.424 8.23647C10.1084 8.7343 9.94084 9.31161 9.94091 9.90105V11.4107H7.8418L7.84185 13.0092H9.94091V14.5189C9.94091 14.8079 9.82608 15.0851 9.6217 15.2895C9.41731 15.4939 9.14011 15.6087 8.85106 15.6087H8.47159V17.2073H16.1573V15.6087H11.3086C11.4608 15.2666 11.5399 14.8953 11.5395 14.5187M11.5395 13.0092H13.5836V11.4107H11.5395V9.90105C11.5395 9.50066 11.6985 9.11668 11.9816 8.83356C12.2647 8.55045 12.6487 8.3914 13.0491 8.3914C13.3992 8.38999 13.7393 8.51175 14.0087 8.73537L14.1395 8.84398L14.2478 8.71284L11.0777 7.6107L11.5395 13.0092Z",fill:"black"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"GBP"}),t.jsx("span",{children:"British Pound"})]})]})},{key:"4",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(I,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.8524 7.5154L15.6667 6.54535L15.5354 6.43799L12.0004 10.7589L8.46551 6.4381L7.14648 7.51529L10.2054 11.2515H8.42563V12.9527H11.1498V13.9472H8.42563V15.6484H11.1498L11.1498 17.4929H12.8509L12.8509 15.6484H15.5751V13.9472H12.8509V12.9527H15.5751V11.2515H13.7936L16.8524 7.5154Z",fill:"black"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"JPY"}),t.jsx("span",{children:"Japanese Yen"})]})]})},{key:"5",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(I,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.8524 7.5154L15.6667 6.54535L15.5354 6.43799L12.0004 10.7589L8.46551 6.4381L7.14648 7.51529L10.2054 11.2515H8.42563V12.9527H11.1498V13.9472H8.42563V15.6484H11.1498L11.1498 17.4929H12.8509L12.8509 15.6484H15.5751V13.9472H12.8509V12.9527H15.5751V11.2515H13.7936L16.8524 7.5154Z",fill:"black"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"CNY"}),t.jsx("span",{children:"Chinese Yuan"})]})]})}],_={args:{prefixCls:"dropdown",width:"180px",height:"240px"},render:e=>{const n=c.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(Te,{onClick:r=>{var o;return(o=n.current)==null?void 0:o.toggle(r)},children:"Dropdown"}),t.jsx(Z,{...e,items:ze,ref:n})]})}};var F,X,Q;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Q=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};const fn=["Primary"];export{_ as Primary,fn as __namedExportsOrder,dn as default};
