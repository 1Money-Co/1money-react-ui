import{j as k}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-CP2yOfOm.js";import{u as v,P as x,C as P,a as S,g as N}from"./componentbase.esm-CXBs-FDc.js";import{c as E}from"./classnames-lRq3rz0l.js";var b={root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},C=`
@layer primereact {
    .p-progress-spinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }
    
    .p-progress-spinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }
    
    .p-progress-spinner-svg {
        animation: p-progress-spinner-rotate 2s linear infinite;
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    
    .p-progress-spinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: #d62d20;
        animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }
}

@keyframes p-progress-spinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes p-progress-spinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}
`,R={spinner:function(r){var s=r.props;return{animationDuration:s.animationDuration}}},i=P.extend({defaultProps:{__TYPE:"ProgressSpinner",id:null,style:null,className:null,strokeWidth:"2",fill:"none",animationDuration:"2s",children:void 0},css:{classes:b,styles:C,inlineStyles:R}}),m=n.memo(n.forwardRef(function(t,r){var s=v(),a=n.useContext(x),e=i.getProps(t,a),c=n.useRef(null),o=i.setMetaData({props:e}),p=o.ptm,l=o.cx,f=o.sx,g=o.isUnstyled;S(i.css.styles,g,{name:"progressspinner"}),n.useImperativeHandle(r,function(){return{props:e,getElement:function(){return c.current}}});var u=s({id:e.id,ref:c,style:e.style,className:N(e.className,l("root")),role:"progressbar","aria-busy":!0},i.getOtherProps(e),p("root")),y=s({className:l("spinner"),viewBox:"25 25 50 50",style:f("spinner")},p("spinner")),h=s({className:l("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,strokeWidth:e.strokeWidth,strokeMiterlimit:"10"},p("circle"));return n.createElement("div",u,n.createElement("svg",y,n.createElement("circle",h)))}));m.displayName="ProgressSpinner";const d=t=>{const{className:r,prefixCls:s="spinner",...a}=t,e=E(s);return k.jsx(m,{...a,className:e(void 0,r)})},M=n.memo(d);d.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["ProgressSpinnerProps"]};export{M as S,d as a};
