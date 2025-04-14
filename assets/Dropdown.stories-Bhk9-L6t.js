import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-DGOumNSj.js";import{u as ye,P as ve,C as xe,a as Ce,d as he,b as ge,c as be,j as Le,f as je,D as h,g as F,h as I,I as Ee,r as we,Z as M,E as Pe,U as Oe}from"./componentbase.esm-BdcVyoov.js";import{C as He}from"./csstransition.esm-DBYBBX3C.js";import{T as Se}from"./index.esm-CLSgKWBi.js";import{O as T}from"./overlayservice.esm-CWc7_5ds.js";import{P as Ie}from"./portal.esm-sGRjpPF9.js";import{R as Re}from"./ripple.esm-D6Nhrw2g.js";import{c as Ve}from"./classnames-CPOy7I0U.js";import{B as ke}from"./Button-C8AEZiS1.js";import{b as H}from"./Icons-BMfrHgSG.js";import"./index-BmTs--ql.js";import"./iconbase.esm-Dw9HLwNj.js";import"./button.esm-VjJyv5J4.js";import"./index.esm-hCcRpTLE.js";import"./tooltip.esm-DhDZOP2a.js";import"./Spinner-vRPLJ-m1.js";function N(){return N=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},N.apply(this,arguments)}function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},R(e)}function Te(e,n){if(R(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var l=r.call(e,n);if(R(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function De(e){var n=Te(e,"string");return R(n)==="symbol"?n:String(n)}function Ne(e,n,r){return n=De(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function _e(e){if(Array.isArray(e))return e}function Ae(e,n){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var l,a,L,v,u=[],x=!0,m=!1;try{if(L=(r=r.call(e)).next,n!==0)for(;!(x=(l=L.call(r)).done)&&(u.push(l.value),u.length!==n);x=!0);}catch(y){m=!0,a=y}finally{try{if(!x&&r.return!=null&&(v=r.return(),Object(v)!==v))return}finally{if(m)throw a}}return u}}function z(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,l=new Array(n);r<n;r++)l[r]=e[r];return l}function Me(e,n){if(e){if(typeof e=="string")return z(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(e,n)}}function Ze(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(e,n){return _e(e)||Ae(e,n)||Me(e,n)||Ze()}var qe={root:function(n){n.props;var r=n.context;return F("p-overlaypanel p-component",{"p-input-filled":r&&r.inputStyle==="filled"||I.inputStyle==="filled","p-ripple-disabled":r&&r.ripple===!1||I.ripple===!1})},closeIcon:"p-overlaypanel-close-icon",closeButton:"p-overlaypanel-close p-link",content:"p-overlaypanel-content",transition:"p-overlaypanel"},Be=`
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
`,S=xe.extend({defaultProps:{__TYPE:"OverlayPanel",id:null,dismissable:!0,showCloseIcon:!1,closeIcon:null,style:null,className:null,appendTo:null,breakpoints:null,ariaCloseLabel:null,transitionOptions:null,onShow:null,onHide:null,children:void 0,closeOnEscape:!0},css:{classes:qe,styles:Be}});function K(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,l)}return r}function Ue(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?K(Object(r),!0).forEach(function(l){Ne(e,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(r,l))})}return e}var X=p.forwardRef(function(e,n){var r=ye(),l=p.useContext(ve),a=S.getProps(e,l),L=p.useState(!1),v=G(L,2),u=v[0],x=v[1],m=S.setMetaData({props:a,state:{visible:u}}),y=m.ptm,g=m.cx;m.sx;var j=m.isUnstyled;Ce(S.css.styles,j,{name:"overlaypanel"});var C=p.useRef(""),i=p.useRef(null),d=p.useRef(null),E=p.useRef(!1),w=p.useRef(null),b=p.useRef(null),Q=he({target:d,overlay:i,listener:function(o,s){var f=s.type,O=s.valid;if(O)switch(f){case"outside":a.dismissable&&!E.current&&P();break;case"resize":case"scroll":case"orientationchange":V();break}E.current=!1},when:u}),Z=G(Q,2),ee=Z[0],ne=Z[1],q=u&&a.closeOnEscape,B=ge("overlay-panel",q);be({callback:function(){P()},when:q&&B,priority:[Pe.OVERLAY_PANEL,B]});var re=function(o){return i&&i.current&&!(i.current.isSameNode(o)||i.current.contains(o))},te=function(o,s){return d.current!=null&&d.current!==(s||o.currentTarget||o.target)},le=function(o){P(),o.preventDefault()},oe=function(o){E.current=!0,T.emit("overlay-click",{originalEvent:o,target:d.current})},U=function(){E.current=!0},ae=function(o,s){u?(P(),te(o,s)&&(d.current=s||o.currentTarget||o.target,setTimeout(function(){A(o,d.current)},200))):A(o,s)},A=function(o,s){d.current=s||o.currentTarget||o.target,u?V():(x(!0),b.current=function(f){!re(f.target)&&(E.current=!0)},T.on("overlay-click",b.current))},P=function(){x(!1),T.off("overlay-click",b.current),b.current=null},ie=function(){i.current.setAttribute(C.current,""),M.set("overlay",i.current,l&&l.autoZIndex||I.autoZIndex,l&&l.zIndex.overlay||I.zIndex.overlay),h.addStyles(i.current,{position:"absolute",top:"0",left:"0"}),V()},se=function(){ee(),a.onShow&&a.onShow()},ce=function(){ne()},pe=function(){M.clear(i.current),a.onHide&&a.onHide()},V=function(){if(d.current&&i.current){h.absolutePosition(i.current,d.current);var o=h.getOffset(i.current),s=h.getOffset(d.current),f=0;o.left<s.left&&(f=s.left-o.left),i.current.style.setProperty("--overlayArrowLeft","".concat(f,"px")),o.top<s.top?(i.current.setAttribute("data-p-overlaypanel-flipped","true"),j&&h.addClass(i.current,"p-overlaypanel-flipped")):(i.current.setAttribute("data-p-overlaypanel-flipped","false"),j&&h.removeClass(i.current,"p-overlaypanel-flipped"))}},ue=function(){if(!w.current){w.current=h.createInlineStyle(l&&l.nonce||I.nonce,l&&l.styleContainer);var o="";for(var s in a.breakpoints)o=o+`
                    @media screen and (max-width: `.concat(s,`) {
                        .p-overlaypanel[`).concat(C.current,`] {
                            width: `).concat(a.breakpoints[s],`;
                        }
                    }
                `);w.current.innerHTML=o}};Le(function(){C.current=Oe(),a.breakpoints&&ue()}),je(function(){w.current=h.removeInlineStyle(w.current),b.current&&(T.off("overlay-click",b.current),b.current=null),M.clear(i.current)}),p.useImperativeHandle(n,function(){return{props:a,toggle:ae,show:A,hide:P,align:V,isVisible:function(){return u},getElement:function(){return i.current}}});var de=function(){var o=r({className:g("closeIcon"),"aria-hidden":!0},y("closeIcon")),s=a.closeIcon||p.createElement(Se,o),f=Ee.getJSXIcon(s,Ue({},o),{props:a}),O=r({type:"button",className:g("closeButton"),onClick:function(k){return le(k)},"aria-label":a.ariaCloseLabel||we("close")},y("closeButton"));return a.showCloseIcon?p.createElement("button",O,f,p.createElement(Re,null)):null},fe=function(){var o=de(),s=r({id:a.id,className:F(a.className,g("root",{context:l})),style:a.style,onClick:function(k){return oe(k)}},S.getOtherProps(a),y("root")),f=r({className:g("content"),onClick:function(k){return U()},onMouseDown:U},S.getOtherProps(a),y("content")),O=r({classNames:g("transition"),in:u,timeout:{enter:120,exit:100},options:a.transitionOptions,unmountOnExit:!0,onEnter:ie,onEntered:se,onExit:ce,onExited:pe},y("transition"));return p.createElement(He,N({nodeRef:i},O),p.createElement("div",N({ref:i},s),p.createElement("div",f,a.children),o))},me=fe();return p.createElement(Ie,{element:me,appendTo:a.appendTo})});X.displayName="OverlayPanel";const _=e=>{const{prefixEle:n,suffixEle:r,items:l=[],width:a,height:L,prefixCls:v="dropdown",className:u,wrapperCls:x,listCls:m,itemCls:y,itemActiveCls:g,...j}=e,C=Ve(v);return t.jsx(X,{...j,className:C(void 0,u),style:{"--dropdown-width":a||"auto","--dropdown-height":L||"auto"},children:t.jsxs("div",{className:C("wrapper",x),children:[n,t.jsx("ul",{className:C("list",m),children:l.map((i,d)=>t.jsx("li",{className:C("list-item",[y,i.active?g:void 0].join(" ")),children:i.children},i.key??d))}),r]})})};p.memo(_);_.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"OverlayPanel | null",elements:[{name:"OverlayPanel"},{name:"null"}]}],raw:"RefObject<OverlayPanel | null>"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},description:""},height:{required:!0,tsType:{name:"CSSProperties['height']",raw:"CSSProperties['height']"},description:""},width:{required:!1,tsType:{name:"CSSProperties['width']",raw:"CSSProperties['width']"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},wrapperCls:{required:!1,tsType:{name:"string"},description:""},listCls:{required:!1,tsType:{name:"string"},description:""},itemCls:{required:!1,tsType:{name:"string"},description:""},itemActiveCls:{required:!1,tsType:{name:"string"},description:""},prefixEle:{required:!1,tsType:{name:"ReactNode"},description:""},suffixEle:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["OverlayPanelProps"]};const cn={title:"Components/Dropdown",component:_,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"dropdown"},tags:["autodocs"]},Ye=[{key:"1",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(H,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.975 7.9501C8.60809 7.9501 7.5 9.0582 7.5 10.4251C7.5 11.792 8.60809 12.9001 9.975 12.9001L11.1 12.9001L11.1 14.2501L7.95 14.2501L7.95 16.0501L11.1 16.0501L11.1 17.8501L12.9 17.8501L12.9 16.0501L14.025 16.0501C15.3919 16.0501 16.5 14.942 16.5 13.5751C16.5 12.2082 15.3919 11.1001 14.025 11.1001L12.9 11.1001L12.9 9.7501L16.05 9.7501L16.05 7.9501L12.9 7.9501L12.9 6.1501L11.1 6.1501L11.1 7.9501L9.975 7.9501ZM11.1 9.7501L9.975 9.7501C9.60221 9.7501 9.3 10.0523 9.3 10.4251C9.3 10.7979 9.60221 11.1001 9.975 11.1001L11.1 11.1001L11.1 9.7501ZM12.9 12.9001L12.9 14.2501L14.025 14.2501C14.3978 14.2501 14.7 13.9479 14.7 13.5751C14.7 13.2023 14.3978 12.9001 14.025 12.9001L12.9 12.9001Z",fill:"#131313"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"USD"}),t.jsx("span",{children:"US Dollar"})]})]})},{key:"2",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(H,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.8458 9.50512C13.4679 8.12727 11.234 8.12727 9.85614 9.50512C9.68997 9.67129 9.54384 9.84992 9.41775 10.038H13.2502V11.7043H8.83508C8.80809 12.0272 8.82541 12.3531 8.88702 12.6722H13.2502V14.3385H9.70893C9.75612 14.3917 9.80519 14.4438 9.85614 14.4948C11.234 15.8726 13.4679 15.8726 14.8458 14.4948L16.024 15.673C13.9955 17.7016 10.7065 17.7016 8.67788 15.673C8.27597 15.2711 7.95369 14.8197 7.71103 14.3385H6.47656V12.6722H7.19986C7.15821 12.3512 7.14652 12.0271 7.16481 11.7043H6.47656V10.038H7.53975C7.79331 9.4154 8.17269 8.83205 8.67788 8.32686C10.7065 6.29827 13.9955 6.29827 16.024 8.32686L14.8458 9.50512Z",fill:"#131313"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"EUR"}),t.jsx("span",{children:"Euro"})]})]})},{key:"3",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(H,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{d:"M15.9877 15.7783V17.0377H8.64116V15.7783H8.85106C9.18508 15.7783 9.50542 15.6456 9.7416 15.4094C9.97779 15.1732 10.1105 14.8529 10.1105 14.5189V12.8397H8.01141L8.01137 11.5803H10.1105V9.90105C10.1104 9.34376 10.2688 8.79794 10.5672 8.32726C10.8656 7.85658 11.2917 7.48046 11.7957 7.24276C12.2998 7.00506 12.861 6.9156 13.414 6.98479C13.967 7.05399 14.4889 7.279 14.9188 7.63358C14.8125 7.76238 14.117 8.6049 14.117 8.6049C13.817 8.35586 13.439 8.22026 13.0491 8.22183C12.6037 8.22183 12.1766 8.39875 11.8617 8.71366C11.5468 9.02857 11.3699 9.45569 11.3699 9.90105L11.5395 11.4107L13.414 11.5803V12.8397L11.5395 13.0092L11.3699 14.5189C11.3704 14.9612 11.2538 15.3957 11.0319 15.7783H15.9877Z",fill:"#131313"}),t.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.3929 7.15305C12.8719 7.08784 12.343 7.17215 11.868 7.39613C11.3931 7.62011 10.9916 7.97454 10.7104 8.41805C10.4292 8.86157 10.28 9.37589 10.28 9.90102V11.7498H8.18095L8.18098 12.6701H10.28V14.5189C10.28 14.8979 10.1295 15.2613 9.86151 15.5293C9.59352 15.7973 9.23005 15.9479 8.85106 15.9479H8.81073V16.8681H15.8182V15.9479H10.7376L10.8853 15.6932C11.0921 15.3365 11.2008 14.9314 11.2003 14.5191V12.6701H13.2444V11.7498H11.2003V9.90105C11.2003 9.41072 11.3951 8.94047 11.7418 8.59376C12.0884 8.24712 12.5586 8.05235 13.0488 8.05226C13.4213 8.05083 13.7841 8.16307 14.0894 8.37192L14.6767 7.66047C14.2992 7.38621 13.8577 7.21121 13.3929 7.15305ZM11.5395 13.0092L11.0777 7.6107L14.2478 8.71284L15.1576 7.6107L15.0267 7.50276C14.5719 7.12772 14.0199 6.88973 13.435 6.81654C12.8502 6.74335 12.2565 6.83798 11.7234 7.08939C11.1902 7.3408 10.7396 7.73863 10.424 8.23647C10.1084 8.7343 9.94084 9.31161 9.94091 9.90105V11.4107H7.8418L7.84185 13.0092H9.94091V14.5189C9.94091 14.8079 9.82608 15.0851 9.6217 15.2895C9.41731 15.4939 9.14011 15.6087 8.85106 15.6087H8.47159V17.2073H16.1573V15.6087H11.3086C11.4608 15.2666 11.5399 14.8953 11.5395 14.5187M11.5395 13.0092H13.5836V11.4107H11.5395V9.90105C11.5395 9.50066 11.6985 9.11668 11.9816 8.83356C12.2647 8.55045 12.6487 8.3914 13.0491 8.3914C13.3992 8.38999 13.7393 8.51175 14.0087 8.73537L14.1395 8.84398L14.2478 8.71284L11.0777 7.6107L11.5395 13.0092Z",fill:"black"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"GBP"}),t.jsx("span",{children:"British Pound"})]})]})},{key:"4",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(H,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.8524 7.5154L15.6667 6.54535L15.5354 6.43799L12.0004 10.7589L8.46551 6.4381L7.14648 7.51529L10.2054 11.2515H8.42563V12.9527H11.1498V13.9472H8.42563V15.6484H11.1498L11.1498 17.4929H12.8509L12.8509 15.6484H15.5751V13.9472H12.8509V12.9527H15.5751V11.2515H13.7936L16.8524 7.5154Z",fill:"black"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"JPY"}),t.jsx("span",{children:"Japanese Yen"})]})]})},{key:"5",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px 8px 8px",borderRadius:"8px",cursor:"pointer"},children:[t.jsxs(H,{children:[t.jsx("path",{d:"M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",fill:"#E3E4E4"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.8524 7.5154L15.6667 6.54535L15.5354 6.43799L12.0004 10.7589L8.46551 6.4381L7.14648 7.51529L10.2054 11.2515H8.42563V12.9527H11.1498V13.9472H8.42563V15.6484H11.1498L11.1498 17.4929H12.8509L12.8509 15.6484H15.5751V13.9472H12.8509V12.9527H15.5751V11.2515H13.7936L16.8524 7.5154Z",fill:"black"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("strong",{children:"CNY"}),t.jsx("span",{children:"Chinese Yuan"})]})]})}],D={args:{prefixCls:"dropdown",width:"180px",height:"240px"},render:e=>{const n=p.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(ke,{onClick:r=>{var l;return(l=n.current)==null?void 0:l.toggle(r)},children:"Dropdown"}),t.jsx(_,{...e,items:Ye,ref:n})]})}};var $,J,W;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(W=(J=D.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};const pn=["Primary"];export{D as Primary,pn as __namedExportsOrder,cn as default};
