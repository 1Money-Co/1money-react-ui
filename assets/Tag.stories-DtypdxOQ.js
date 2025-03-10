import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as a}from"./index-Ca8FO3x4.js";import{u as N,P as E,C as _,a as C,I as D,g as P}from"./componentbase.esm-CmqFOBMX.js";import{c as I}from"./classnames-B-6LArsQ.js";function l(e){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},l(e)}function R(e,r){if(l(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r);if(l(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function B(e){var r=R(e,"string");return l(r)==="symbol"?r:String(r)}function m(e,r,t){return r=B(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var M={value:"p-tag-value",icon:"p-tag-icon",root:function(r){var t=r.props;return P("p-tag p-component",m(m({},"p-tag-".concat(t.severity),t.severity!==null),"p-tag-rounded",t.rounded))}},U=`
@layer primereact {
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-tag-icon,
    .p-tag-value,
    .p-tag-icon.pi {
        line-height: 1.5;
    }
    
    .p-tag.p-tag-rounded {
        border-radius: 10rem;
    }
}
`,p=_.extend({defaultProps:{__TYPE:"Tag",value:null,severity:null,rounded:!1,icon:null,style:null,className:null,children:void 0},css:{classes:M,styles:U}});function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,n)}return t}function q(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?y(Object(t),!0).forEach(function(n){m(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var x=a.forwardRef(function(e,r){var t=N(),n=a.useContext(E),s=p.getProps(e,n),c=p.setMetaData({props:s}),g=c.ptm,d=c.cx,j=c.isUnstyled;C(p.css.styles,j,{name:"tag"});var f=a.useRef(null),O=t({className:d("icon")},g("icon")),h=D.getJSXIcon(s.icon,q({},O),{props:s});a.useImperativeHandle(r,function(){return{props:s,getElement:function(){return f.current}}});var w=t({ref:f,className:P(s.className,d("root")),style:s.style},p.getOtherProps(s),g("root")),S=t({className:d("value")},g("value"));return a.createElement("span",w,h,a.createElement("span",S,s.value),a.createElement("span",null,s.children))});x.displayName="Tag";const o=e=>{const{children:r,className:t="",prefixCls:n="tag",...s}=e,c=I(n);return i.jsx(x,{...s,className:c(void 0,t),children:r})};a.memo(o);o.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["PrimeTagProps"]};const Y={title:"Components/Tag",component:o,argTypes:{className:{control:"text"},prefixCls:{control:"text"},rounded:{control:"boolean"}},args:{prefixCls:"",rounded:!1}},u={args:{prefixCls:"tag"},render:e=>i.jsxs("div",{style:{display:"flex",gap:10},children:[i.jsx(o,{...e,rounded:!0,severity:"success",children:" success Tag"}),i.jsx(o,{...e,rounded:!0,severity:"warning",children:" warning Tag"}),i.jsx(o,{...e,rounded:!0,severity:"danger",children:" danger Tag"}),i.jsx(o,{...e,rounded:!0,severity:"info",children:" info Tag"})]})};var v,b,T;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    prefixCls: 'tag'
  },
  render: args => {
    return <div style={{
      display: 'flex',
      gap: 10
    }}>
      <Tag {...args} rounded severity="success"> success Tag</Tag>
      <Tag {...args} rounded severity="warning"> warning Tag</Tag>
      <Tag {...args} rounded severity="danger"> danger Tag</Tag>
      <Tag {...args} rounded severity="info"> info Tag</Tag>
    </div>;
  }
}`,...(T=(b=u.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const z=["Primary"];export{u as Primary,z as __namedExportsOrder,Y as default};
