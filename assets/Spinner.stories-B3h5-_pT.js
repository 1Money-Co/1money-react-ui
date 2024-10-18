import{j as S}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";import{C,u as E,P as b,h as _,g as R}from"./componentbase.esm-TQ_VTtCT.js";import{P as g}from"./index-rNTiGNI1.js";import{c as T}from"./classnames-JHuVH38I.js";var w={root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},B=`
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
`,D={spinner:function(n){var r=n.props;return{animationDuration:r.animationDuration}}},a=C.extend({defaultProps:{__TYPE:"ProgressSpinner",id:null,style:null,className:null,strokeWidth:"2",fill:"none",animationDuration:"2s",children:void 0},css:{classes:w,styles:B,inlineStyles:D}}),x=s.memo(s.forwardRef(function(t,n){var r=E(),l=s.useContext(b),e=a.getProps(t,l),d=s.useRef(null),o=a.setMetaData({props:e}),c=o.ptm,m=o.cx,h=o.sx,k=o.isUnstyled;_(a.css.styles,k,{name:"progressspinner"}),s.useImperativeHandle(n,function(){return{props:e,getElement:function(){return d.current}}});var v=r({id:e.id,ref:d,style:e.style,className:R(e.className,m("root")),role:"progressbar","aria-busy":!0},a.getOtherProps(e),c("root")),P=r({className:m("spinner"),viewBox:"25 25 50 50",style:h("spinner")},c("spinner")),N=r({className:m("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,strokeWidth:e.strokeWidth,strokeMiterlimit:"10"},c("circle"));return s.createElement("div",v,s.createElement("svg",P,s.createElement("circle",N)))}));x.displayName="ProgressSpinner";const p=t=>{const{className:n,prefixCls:r="spinner",...l}=t,e=T(r);return S.jsx(x,{...l,className:e(void 0,n)})};p.propTypes={className:g.string,prefixCls:g.string};s.memo(p);p.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{prefixCls:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},className:{description:"",type:{name:"string"},required:!1}},composes:["ProgressSpinnerProps"]};const O={title:"Components/Spinner",component:p,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"spinner"},tags:["autodocs"]},i={args:{prefixCls:"spinner"}};var f,u,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    prefixCls: 'spinner'
  }
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const U=["Primary"];export{i as Primary,U as __namedExportsOrder,O as default};
