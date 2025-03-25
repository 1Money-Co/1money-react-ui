import{f as F}from"./index-C-CZKJQo.js";import{j as Y}from"./jsx-runtime-BjG_zV1W.js";import{r as a}from"./index-DGOumNSj.js";import{u as z,P as A,C as G,a as L,g as R,O as P,I as Q}from"./componentbase.esm-BdcVyoov.js";import{C as V}from"./index.esm-B60wmaaB.js";import{E as Z,I as ee}from"./index.esm-DfpHoBKp.js";import{T as re}from"./index.esm-Dlfly0QC.js";import{c as se}from"./classnames-CPOy7I0U.js";import"./iconbase.esm-Dw9HLwNj.js";function v(){return v=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(r[t]=s[t])}return r},v.apply(this,arguments)}function c(r){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(r)}function te(r,e){if(c(r)!=="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var t=s.call(r,e);if(c(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function ne(r){var e=te(r,"string");return c(e)==="symbol"?e:String(e)}function U(r,e,s){return e=ne(e),e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}var l=G.extend({defaultProps:{__TYPE:"Message",id:null,className:null,style:null,text:null,icon:null,severity:"info",content:null,children:void 0},css:{classes:{root:function(e){var s=e.props.severity;return R("p-inline-message p-component",U({},"p-inline-message-".concat(s),s))},icon:"p-inline-message-icon",text:"p-inline-message-text"},styles:`
        @layer primereact {
            .p-inline-message {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                vertical-align: top;
            }

            .p-inline-message-icon {
                flex-shrink: 0;
            }
            
            .p-inline-message-icon-only .p-inline-message-text {
                visibility: hidden;
                width: 0;
            }
            
            .p-fluid .p-inline-message {
                display: flex;
            }        
        }
        `}});function O(r,e){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),s.push.apply(s,t)}return s}function ae(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?O(Object(s),!0).forEach(function(t){U(r,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):O(Object(s)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(s,t))})}return r}var W=a.memo(a.forwardRef(function(r,e){var s=z(),t=a.useContext(A),n=l.getProps(r,t),b=a.useRef(null),g=l.setMetaData({props:n}),y=g.ptm,d=g.cx,k=g.isUnstyled;L(l.css.styles,k,{name:"message"});var B=function(){if(n.content)return P.getJSXElement(n.content,n);var K=P.getJSXElement(n.text,n),i=s({className:d("icon")},y("icon")),o=n.icon;if(!o)switch(n.severity){case"info":o=a.createElement(ee,i);break;case"warn":o=a.createElement(Z,i);break;case"error":o=a.createElement(re,i);break;case"success":o=a.createElement(V,i);break}var $=Q.getJSXIcon(o,ae({},i),{props:n}),q=s({className:d("text")},y("text"));return a.createElement(a.Fragment,null,$,a.createElement("span",q,K))};a.useImperativeHandle(e,function(){return{props:n,getElement:function(){return b.current}}});var J=B(),X=s({className:R(n.className,d("root")),style:n.style,role:"alert","aria-live":"polite","aria-atomic":"true"},l.getOtherProps(n),y("root"));return a.createElement("div",v({id:n.id,ref:b},X),J)}));W.displayName="Message";const x=r=>{const{className:e,prefixCls:s="message",...t}=r,n=se(s);return Y.jsx(W,{...t,className:n(void 0,e)})};a.memo(x);x.__docgenInfo={description:"",methods:[],displayName:"Message",props:{prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["PrimeMessageProps"]};const ye={title:"Components/Message",component:x,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"message",onClick:F()},tags:["autodocs"]},m={args:{prefixCls:"message",severity:"success",text:"Success Message"},tags:["!autodocs"]},p={args:{prefixCls:"message",severity:"warn",text:"Warning Message"}},u={args:{prefixCls:"message",severity:"error",text:"Error Message"}},f={args:{prefixCls:"message",severity:"info",text:"Info Message"}};var C,E,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    prefixCls: 'message',
    severity: 'success',
    text: 'Success Message'
  },
  tags: ['!autodocs']
}`,...(S=(E=m.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var j,M,w;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    prefixCls: 'message',
    severity: 'warn',
    text: 'Warning Message'
  }
}`,...(w=(M=p.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var h,I,_;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    prefixCls: 'message',
    severity: 'error',
    text: 'Error Message'
  }
}`,...(_=(I=u.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var N,T,D;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    prefixCls: 'message',
    severity: 'info',
    text: 'Info Message'
  }
}`,...(D=(T=f.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const de=["Success","Warn","Error","Info"];export{u as Error,f as Info,m as Success,p as Warn,de as __namedExportsOrder,ye as default};
