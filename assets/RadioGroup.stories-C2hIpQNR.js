import{f as te}from"./index-C-CZKJQo.js";import{j as U}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-DGOumNSj.js";import{u as oe,P as ie,C as se,a as le,D as v,O as B,j as ue,g as Q}from"./componentbase.esm-BdcVyoov.js";import{T as ce}from"./tooltip.esm-DhDZOP2a.js";import{c as de}from"./classnames-CPOy7I0U.js";import"./portal.esm-sGRjpPF9.js";import"./index-BmTs--ql.js";function S(){return S=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},S.apply(this,arguments)}function x(a){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},x(a)}function pe(a,n){if(x(a)!=="object"||a===null)return a;var r=a[Symbol.toPrimitive];if(r!==void 0){var t=r.call(a,n);if(x(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function me(a){var n=pe(a,"string");return x(n)==="symbol"?n:String(n)}function fe(a,n,r){return n=me(n),n in a?Object.defineProperty(a,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[n]=r,a}var be={root:function(n){var r=n.props,t=n.context;return Q("p-radiobutton p-component",{"p-highlight":r.checked,"p-disabled":r.disabled,"p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":t&&t.inputStyle==="filled"})},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},P=se.extend({defaultProps:{__TYPE:"RadioButton",autoFocus:!1,checked:!1,className:null,disabled:!1,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onClick:null,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,value:null,children:void 0},css:{classes:be}});function I(a,n){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})),r.push.apply(r,t)}return r}function ye(a){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?I(Object(r),!0).forEach(function(t){fe(a,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(r,t))})}return a}var V=i.memo(i.forwardRef(function(a,n){var r=oe(),t=i.useContext(ie),e=P.getProps(a,t),p=i.useRef(null),l=i.useRef(e.inputRef),y=P.setMetaData({props:e}),u=y.ptm,m=y.cx,E=y.isUnstyled;le(P.css.styles,E,{name:"radiobutton"});var g=function(o){C(o)},C=function(o){if(!(e.disabled||e.readonly)&&e.onChange){var s=e.checked,Z=o.target instanceof HTMLDivElement,ee=o.target===l.current,ne=ee&&o.target.checked!==s,G=Z&&(v.hasClass(p.current,"p-radiobutton-checked")===s?!s:!1),w=!s,ae={originalEvent:o,value:e.value,checked:w,stopPropagation:function(){o==null||o.stopPropagation()},preventDefault:function(){o==null||o.preventDefault()},target:{type:"radio",name:e.name,id:e.id,value:e.value,checked:w}};if(ne||G){var F;if(e==null||(F=e.onChange)===null||F===void 0||F.call(e,ae),o.defaultPrevented)return;G&&(l.current.checked=w)}v.focus(l.current)}},c=function(o){var s;e==null||(s=e.onFocus)===null||s===void 0||s.call(e,o)},f=function(o){var s;e==null||(s=e.onBlur)===null||s===void 0||s.call(e,o)};i.useImperativeHandle(n,function(){return{props:e,select:g,focus:function(){return v.focus(l.current)},getElement:function(){return p.current},getInput:function(){return l.current}}}),i.useEffect(function(){l.current&&(l.current.checked=e.checked)},[e.checked]),i.useEffect(function(){B.combinedRefs(l,e.inputRef)},[l,e.inputRef]),ue(function(){e.autoFocus&&v.focus(l.current,e.autoFocus)});var R=B.isNotEmpty(e.tooltip),k=P.getOtherProps(e),b=r({id:e.id,className:Q(e.className,m("root",{context:t})),style:e.style,"data-p-checked":e.checked},k,u("root"));delete b.input,delete b.box,delete b.icon;var h=function(){var o=B.reduceKeys(k,v.ARIA_PROPS),s=r(ye({id:e.inputId,type:"radio",name:e.name,defaultChecked:e.checked,onFocus:c,onBlur:f,onChange:C,disabled:e.disabled,readOnly:e.readonly,required:e.required,tabIndex:e.tabIndex,className:m("input")},o),a.input,u("input"));return i.createElement("input",S({ref:l},s))},W=function(){var o=r({className:m("box")},a.box,u("box")),s=r({className:m("icon")},a.icon,u("icon"));return i.createElement("div",o,i.createElement("div",s))};return i.createElement(i.Fragment,null,i.createElement("div",S({ref:p},b),h(),W()),R&&i.createElement(ce,S({target:p,content:e.tooltip,pt:u("tooltip")},e.tooltipOptions)))}));V.displayName="RadioButton";const N=a=>{const{items:n=[],onChange:r,wrapperCls:t,innerCls:e,radioCls:p,prefixCls:l="radiogroup",size:y="md"}=a,u=de(l),m=`rd-${y}`,E=i.useMemo(()=>n.find(c=>!!c.autoFocus),[n]),[g,C]=i.useState(E);return U.jsx("div",{className:u("wrapper",[t,"tw-flex"].join("")),children:n.map(c=>{const{key:f,label:R,required:k,...b}=c;return U.jsxs("div",{className:[u("inner",e),m].join(" "),children:[U.jsx(V,{...b,required:k,inputId:f,value:c,className:u("inner-radio",p),onChange:h=>{r==null||r(h.value),C(h.value)},checked:(g==null?void 0:g.key)===f}),(c==null?void 0:c.label)&&U.jsx("label",{htmlFor:f,children:R})]},f)})})};i.memo(N);N.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{wrapperCls:{required:!1,tsType:{name:"string"},description:""},innerCls:{required:!1,tsType:{name:"string"},description:""},radioCls:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected:  RadioGroupProps['items'][number]) => any",signature:{arguments:[{type:{name:"RadioGroupProps['items'][number]",raw:"RadioGroupProps['items'][number]"},name:"selected"}],return:{name:"any"}}},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:`({
  key: string;
  label?: string;
} & Omit<RadioButtonProps, 'inputId' | 'value' | 'onChange' | 'checked' | 'className'>)[]`},description:""}}};const Pe={title:"Components/RadioGroup",component:N,argTypes:{wrapperCls:{control:"text"},innerCls:{control:"text"},radioCls:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"radiogroup",onChange:te()},tags:["autodocs"]},A={args:{size:"sm",items:[{name:"US1",key:"USA-1",label:"USA-1"},{name:"US2",key:"USA-2",label:"USA-2",autoFocus:!0},{name:"CA1",key:"Canada-1",label:"Canada (invalid)",invalid:!0},{name:"MX",key:"Mexico",label:"Mexico (disabled)",disabled:!0}],prefixCls:"radiogroup"}},O={args:{items:[{name:"Janpan",key:"Japan",label:"Japan",disabled:!0},{name:"Janpan1",key:"Janpan-1",label:"Janpan (checked)",autoFocus:!0,disabled:!0}],prefixCls:"radiogroup"}},M={args:{items:[{name:"US1",key:"USA-1",label:"USA-1"},{name:"US2",key:"USA-2",label:"USA-2",autoFocus:!0},{name:"CA1",key:"Canada-1",label:"Canada (invalid)",invalid:!0},{name:"MX",key:"Mexico",label:"Mexico (disabled)",disabled:!0}],prefixCls:"radiogroup"}},j={args:{size:"lg",items:[{name:"US1",key:"USA-1",label:"USA-1"},{name:"US2",key:"USA-2",label:"USA-2",autoFocus:!0},{name:"CA1",key:"Canada-1",label:"Canada (invalid)",invalid:!0},{name:"MX",key:"Mexico",label:"Mexico (disabled)",disabled:!0}],prefixCls:"radiogroup"}};var z,D,T;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    items: [{
      name: 'US1',
      key: 'USA-1',
      label: 'USA-1'
    }, {
      name: 'US2',
      key: 'USA-2',
      label: 'USA-2',
      autoFocus: true
    }, {
      name: 'CA1',
      key: 'Canada-1',
      label: 'Canada (invalid)',
      invalid: true
    }, {
      name: 'MX',
      key: 'Mexico',
      label: 'Mexico (disabled)',
      disabled: true
    }],
    prefixCls: 'radiogroup'
  }
}`,...(T=(D=A.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var _,J,q;O.parameters={...O.parameters,docs:{...(_=O.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: [{
      name: 'Janpan',
      key: 'Japan',
      label: 'Japan',
      disabled: true
    }, {
      name: 'Janpan1',
      key: 'Janpan-1',
      label: 'Janpan (checked)',
      autoFocus: true,
      disabled: true
    }],
    prefixCls: 'radiogroup'
  }
}`,...(q=(J=O.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var X,H,K;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: [{
      name: 'US1',
      key: 'USA-1',
      label: 'USA-1'
    }, {
      name: 'US2',
      key: 'USA-2',
      label: 'USA-2',
      autoFocus: true
    }, {
      name: 'CA1',
      key: 'Canada-1',
      label: 'Canada (invalid)',
      invalid: true
    }, {
      name: 'MX',
      key: 'Mexico',
      label: 'Mexico (disabled)',
      disabled: true
    }],
    prefixCls: 'radiogroup'
  }
}`,...(K=(H=M.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var L,$,Y;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    items: [{
      name: 'US1',
      key: 'USA-1',
      label: 'USA-1'
    }, {
      name: 'US2',
      key: 'USA-2',
      label: 'USA-2',
      autoFocus: true
    }, {
      name: 'CA1',
      key: 'Canada-1',
      label: 'Canada (invalid)',
      invalid: true
    }, {
      name: 'MX',
      key: 'Mexico',
      label: 'Mexico (disabled)',
      disabled: true
    }],
    prefixCls: 'radiogroup'
  }
}`,...(Y=($=j.parameters)==null?void 0:$.docs)==null?void 0:Y.source}}};const Ae=["GroupSizeSmall","GroupDisabled","GroupSizeMedium","GroupSizeLarge"];export{O as GroupDisabled,j as GroupSizeLarge,M as GroupSizeMedium,A as GroupSizeSmall,Ae as __namedExportsOrder,Pe as default};
