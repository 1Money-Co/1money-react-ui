import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-CP2yOfOm.js";import{u as h,P as N,C as S,a as _,g as x,O as g}from"./componentbase.esm-BsReUg3j.js";import{c as E}from"./classnames-lRq3rz0l.js";function c(e){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},c(e)}function C(e,r){if(c(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r);if(c(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function k(e){var r=C(e,"string");return c(r)=="symbol"?r:r+""}function j(e,r,t){return(r=k(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var R={root:function(r){var t=r.props;return x("p-badge p-component",j({"p-badge-no-gutter":g.isNotEmpty(t.value)&&String(t.value).length===1,"p-badge-dot":g.isEmpty(t.value),"p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge"},"p-badge-".concat(t.severity),t.severity!==null))}},D=`
@layer primereact {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }
    
    .p-overlay-badge {
        position: relative;
    }
    
    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }
    
    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }
    
    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,p=S.extend({defaultProps:{__TYPE:"Badge",__parentMetadata:null,value:null,severity:null,size:null,style:null,className:null,children:void 0},css:{classes:R,styles:D}});function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,n)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?b(Object(t),!0).forEach(function(n){j(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var P=i.memo(i.forwardRef(function(e,r){var t=h(),n=i.useContext(N),s=p.getProps(e,n),l=p.setMetaData(T({props:s},s.__parentMetadata)),u=l.ptm,O=l.cx,B=l.isUnstyled;_(p.css.styles,B,{name:"badge"});var d=i.useRef(null);i.useImperativeHandle(r,function(){return{props:s,getElement:function(){return d.current}}});var w=t({ref:d,style:s.style,className:x(s.className,O("root"))},p.getOtherProps(s),u("root"));return i.createElement("span",w,s.value)}));P.displayName="Badge";const o=e=>{const{children:r,className:t,severity:n,prefixCls:s="badge",...l}=e,u=E(s);return a.jsx(P,{...l,className:u(void 0,[u(n||"neutral"),t].join(" "))})};i.memo(o);o.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},severity:{required:!1,tsType:{name:"union",raw:"PrimeBadgeProps['severity'] | 'neutral' | 'recommend' | 'warning' | 'negative' | 'black' | 'success'",elements:[{name:"PrimeBadgeProps['severity']",raw:"PrimeBadgeProps['severity']"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'recommend'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'black'"},{name:"literal",value:"'success'"}]},description:""}},composes:["Omit"]};const I={title:"Components/Badge",component:o,argTypes:{className:{control:"text"},prefixCls:{control:"text"},severity:{control:"select",options:["neutral","warning","negative","success","black","recommend"]}},args:{prefixCls:"badge"},tags:["autodocs"]},m={render:e=>a.jsxs(a.Fragment,{children:[a.jsx(o,{severity:"neutral",value:"Neutral",...e}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(o,{severity:"warning",value:"Warning",...e}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(o,{severity:"negative",value:"Negative",...e}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(o,{severity:"success",value:"Success",...e}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(o,{severity:"black",value:"Black",...e}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(o,{severity:"recommend",value:"Recommend",...e})]}),args:{prefixCls:"badge"}};var v,y,f;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <>
        <Badge severity="neutral" value="Neutral" {...args} />
        <br />
        <br />
        <Badge severity="warning" value="Warning" {...args} />
        <br />
        <br />
        <Badge severity="negative" value="Negative" {...args} />
        <br />
        <br />
        <Badge severity="success" value="Success" {...args} />
        <br />
        <br />
        <Badge severity="black" value="Black" {...args} />
        <br />
        <br />
        <Badge severity="recommend" value="Recommend" {...args} />
      </>;
  },
  args: {
    prefixCls: 'badge'
  }
}`,...(f=(y=m.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const K=["Primary"];export{m as Primary,K as __namedExportsOrder,I as default};
