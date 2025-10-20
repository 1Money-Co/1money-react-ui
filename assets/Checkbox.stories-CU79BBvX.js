import{j as C}from"./jsx-runtime-BjG_zV1W.js";import{f as ze}from"./index-DCiaR2iG.js";import{r as o}from"./index-CP2yOfOm.js";import{u as Ne,P as _e,C as Be,a as Me,D as _,O as L,f as Ue,e as Te,c as Q,I as De,r as Z}from"./componentbase.esm-DE4kFom5.js";import{C as Fe}from"./index.esm-CNqz_WEE.js";import{T as Le}from"./tooltip.esm-Dm3idiaE.js";import{T as Ke}from"./index.esm-BPBXvHGZ.js";import{c as We}from"./classnames-lRq3rz0l.js";import"./iconbase.esm-B9onzN8J.js";import"./portal.esm-CC0DiCkA.js";import"./index-BOAxdYzW.js";function R(){return R=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)({}).hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},R.apply(null,arguments)}function V(t){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(t)}function He(t,e){if(V(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var a=r.call(t,e);if(V(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function qe(t){var e=He(t,"string");return V(e)=="symbol"?e:e+""}function Je(t,e,r){return(e=qe(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Xe(t){if(Array.isArray(t))return t}function Ye(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var a,n,S,b,s=[],h=!0,p=!1;try{if(S=(r=r.call(t)).next,e!==0)for(;!(h=(a=S.call(r)).done)&&(s.push(a.value),s.length!==e);h=!0);}catch(m){p=!0,n=m}finally{try{if(!h&&r.return!=null&&(b=r.return(),Object(b)!==b))return}finally{if(p)throw n}}return s}}function te(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}function Ge(t,e){if(t){if(typeof t=="string")return te(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?te(t,e):void 0}}function Qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ze(t,e){return Xe(t)||Ye(t,e)||Ge(t,e)||Qe()}var et={box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon",root:function(e){var r=e.props,a=e.checked,n=e.context;return Q("p-checkbox p-component",{"p-highlight":a,"p-disabled":r.disabled,"p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":n&&n.inputStyle==="filled"})}},z=Be.extend({defaultProps:{__TYPE:"Checkbox",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,icon:null,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onContextMenu:null,onMouseDown:null,readOnly:!1,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,value:null,children:void 0},css:{classes:et}});function ne(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,a)}return r}function re(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?ne(Object(r),!0).forEach(function(a){Je(t,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(r,a))})}return t}var Re=o.memo(o.forwardRef(function(t,e){var r=Ne(),a=o.useContext(_e),n=z.getProps(t,a),S=o.useState(!1),b=Ze(S,2),s=b[0],h=b[1],p=z.setMetaData({props:n,state:{focused:s},context:{checked:n.checked===n.trueValue,disabled:n.disabled}}),m=p.ptm,k=p.cx,O=p.isUnstyled;Me(z.css.styles,O,{name:"checkbox"});var j=o.useRef(null),y=o.useRef(n.inputRef),E=function(){return n.checked===n.trueValue},B=function(c){if(!(n.disabled||n.readOnly)&&n.onChange){var i,P=E(),v=P?n.falseValue:n.trueValue,D={originalEvent:c,value:n.value,checked:v,stopPropagation:function(){c==null||c.stopPropagation()},preventDefault:function(){c==null||c.preventDefault()},target:{type:"checkbox",name:n.name,id:n.id,value:n.value,checked:v}};if(n==null||(i=n.onChange)===null||i===void 0||i.call(n,D),c.defaultPrevented)return;_.focus(y.current)}},M=function(c){var i;h(!0),n==null||(i=n.onFocus)===null||i===void 0||i.call(n,c)},T=function(c){var i;h(!1),n==null||(i=n.onBlur)===null||i===void 0||i.call(n,c)};o.useImperativeHandle(e,function(){return{props:n,focus:function(){return _.focus(y.current)},getElement:function(){return j.current},getInput:function(){return y.current}}}),o.useEffect(function(){L.combinedRefs(y,n.inputRef)},[y,n.inputRef]),Ue(function(){y.current.checked=E()},[n.checked,n.trueValue]),Te(function(){n.autoFocus&&_.focus(y.current,n.autoFocus)});var l=E(),u=L.isNotEmpty(n.tooltip),w=z.getOtherProps(n),I=r({id:n.id,className:Q(n.className,k("root",{checked:l,context:a})),style:n.style,"data-p-highlight":l,"data-p-disabled":n.disabled,onContextMenu:n.onContextMenu,onMouseDown:n.onMouseDown},w,m("root")),A=function(){var c=L.reduceKeys(w,_.ARIA_PROPS),i=r(re({id:n.inputId,type:"checkbox",className:k("input"),name:n.name,tabIndex:n.tabIndex,onFocus:function(v){return M(v)},onBlur:function(v){return T(v)},onChange:function(v){return B(v)},disabled:n.disabled,readOnly:n.readOnly,required:n.required,"aria-invalid":n.invalid,checked:l},c),m("input"));return o.createElement("input",R({ref:y},i))},N=function(){var c=r({className:k("icon")},m("icon")),i=r({className:k("box",{checked:l}),"data-p-highlight":l,"data-p-disabled":n.disabled},m("box")),P=l?n.icon||o.createElement(Fe,c):null,v=De.getJSXIcon(P,re({},c),{props:n,checked:l});return o.createElement("div",i,v)};return o.createElement(o.Fragment,null,o.createElement("div",R({ref:j},I),A(),N()),u&&o.createElement(Le,R({target:j,content:n.tooltip,pt:m("tooltip")},n.tooltipOptions)))}));Re.displayName="Checkbox";function G(){return G=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)({}).hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},G.apply(null,arguments)}function $(t){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(t)}function tt(t,e){if($(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var a=r.call(t,e);if($(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function nt(t){var e=tt(t,"string");return $(e)=="symbol"?e:e+""}function rt(t,e,r){return(e=nt(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function at(t){if(Array.isArray(t))return t}function ot(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var a,n,S,b,s=[],h=!0,p=!1;try{if(S=(r=r.call(t)).next,e!==0)for(;!(h=(a=S.call(r)).done)&&(s.push(a.value),s.length!==e);h=!0);}catch(m){p=!0,n=m}finally{try{if(!h&&r.return!=null&&(b=r.return(),Object(b)!==b))return}finally{if(p)throw n}}return s}}function ae(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}function lt(t,e){if(t){if(typeof t=="string")return ae(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ae(t,e):void 0}}function st(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ct(t,e){return at(t)||ot(t,e)||lt(t,e)||st()}var it={root:function(e){var r=e.props,a=e.context;return Q("p-tristatecheckbox p-checkbox p-component",{"p-highlight":r.value!==""&&r.value!==null,"p-disabled":r.disabled,"p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":a&&a.inputStyle==="filled"})},checkIcon:"p-checkbox-icon p-c",box:"p-checkbox-box",input:"p-checkbox-input"},F=Be.extend({defaultProps:{__TYPE:"TriStateCheckbox",autoFocus:!1,checkIcon:null,className:null,disabled:!1,id:null,invalid:!1,variant:null,onChange:null,readOnly:!1,style:null,tabIndex:"0",tooltip:null,tooltipOptions:null,uncheckIcon:null,value:null,children:void 0},css:{classes:it}});function oe(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,a)}return r}function le(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?oe(Object(r),!0).forEach(function(a){rt(t,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(r,a))})}return t}var Ve=o.memo(o.forwardRef(function(t,e){var r=Ne(),a=o.useContext(_e),n=F.getProps(t,a),S=o.useState(null),b=ct(S,2),s=b[0],h=b[1],p=o.useRef(null),m=F.setMetaData({props:n}),k=m.ptm,O=m.cx,j=m.isUnstyled;Me(F.css.styles,j,{name:"tristatecheckbox"}),o.useEffect(function(){[!0,!1,null].includes(n.value)?h(n.value):h(null)},[n.value]);var y=function(f){if(!(n.disabled||n.readOnly)){var x;s===null?x=!0:s===!0?x=!1:s===!1&&(x=null),n.onChange&&n.onChange({originalEvent:f,value:x,stopPropagation:function(){f==null||f.stopPropagation()},preventDefault:function(){f==null||f.preventDefault()},target:{name:n.name,id:n.id,value:x}})}},E=function(f){var x;n==null||(x=n.onFocus)===null||x===void 0||x.call(n,f)},B=function(f){var x;n==null||(x=n.onBlur)===null||x===void 0||x.call(n,f)},M=function(f){(f.code==="Enter"||f.code==="NumpadEnter"||f.code==="Space")&&(y(f),f.preventDefault())};o.useImperativeHandle(e,function(){return{props:n,focus:function(){return _.focusFirstElement(p.current)},getElement:function(){return p.current}}}),Te(function(){n.autoFocus&&_.focusFirstElement(p.current)});var T=L.isNotEmpty(n.tooltip),l=F.getOtherProps(n),u=L.reduceKeys(l,_.ARIA_PROPS),w=r({className:O("checkIcon")},k("checkIcon")),I=r({className:O("checkIcon")},k("uncheckIcon")),A;s===!1?A=n.uncheckIcon||o.createElement(Ke,I):s===!0&&(A=n.checkIcon||o.createElement(Fe,w));var N=De.getJSXIcon(A,le({},w),{props:n}),g=s?Z("trueLabel"):s===!1?Z("falseLabel"):Z("nullLabel"),c=s?"true":"false",i=r(le({id:n.id+"_box",className:O("box"),tabIndex:n.disabled?"-1":n.tabIndex,onFocus:E,onBlur:B,onKeyDown:M,role:"checkbox","aria-checked":c},u),k("box")),P=r({className:"p-hidden-accessible","aria-live":"polite"},k("srOnlyAria")),v=r({className:Q(n.className,O("root",{context:a})),style:n.style,"data-p-disabled":n.disabled},F.getOtherProps(n),k("root")),D=r({id:n.inputId,className:O("input"),type:"checkbox","aria-invalid":n.invalid,disabled:n.disabled,readOnly:n.readOnly,value:s,checked:s,onChange:y},k("input"));return o.createElement(o.Fragment,null,o.createElement("div",G({id:n.id,ref:p},v),o.createElement("input",D),o.createElement("span",P,g),o.createElement("div",i,N)),T&&o.createElement(Le,G({target:p,content:n.tooltip,pt:k("tooltip")},n.tooltipOptions)))}));Ve.displayName="TriStateCheckbox";const ee=t=>{const{tristate:e,items:r=[],onChange:a,wrapperCls:n,innerCls:S,checkboxCls:b,labelCls:s,prefixCls:h="checkbox",size:p="md"}=t,m=We(h),k=`ckb-${p}`,O=o.useMemo(()=>e?Ve:Re,[e]),j=o.useMemo(()=>r.filter(l=>!!l.autoFocus).map(l=>l.key),[r]),[y,E]=o.useState(j),[B,M]=o.useState(Object.assign({},...r.map(l=>({[l.key]:l.defaultValue??null})))),T=o.useCallback(l=>{let u;e?(u={...B},u[l.target.id]=l.value,M(u)):(u=[...y],l.checked?u.push(l.value):u.splice(u.indexOf(l.value),1),E(u)),a==null||a(u)},[e,B,y]);return C.jsx("div",{className:m("wrapper",n),children:r.map(l=>{const{key:u,required:w,disabled:I,defaultValue:A=null,label:N,onChange:g,...c}=l,[i,P]=o.useState(A),v=o.useCallback(()=>{!e||I||P(d=>d===null?!0:d===!0?!1:null)},[e,I]),D=o.useCallback(({children:d})=>N?C.jsxs("label",{className:s,onClick:v,children:[d,N]}):d,[N,v]);return C.jsx("div",{className:[m("inner",S),k].join(" "),children:C.jsx(D,{children:C.jsx(O,{...c,id:e?u:void 0,value:e?i:u,required:w,disabled:I,checked:e?void 0:y.includes(u),className:m("inner-checkbox",b),...e?{uncheckIcon:C.jsx("i",{className:"pi pi-minus"})}:{},...e?{checkIcon:C.jsx("i",{className:"pi pi-check"})}:{icon:C.jsx("i",{className:"pi pi-check"})},onChange:d=>{I||(e&&P(d.value),g==null||g(e?d.value:!!d.checked),T(d))}})})},u)})})};o.memo(ee);ee.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const xt={title:"Components/Checkbox",component:ee,argTypes:{wrapperCls:{control:"text"},innerCls:{control:"text"},checkboxCls:{control:"text"},prefixCls:{control:"text"},size:{control:"radio",options:["sm","md","lg"]}},args:{prefixCls:"checkbox",onChange:ze()},tags:["autodocs"]},U={args:{items:[{name:"Agree",key:"Agree",label:C.jsxs(C.Fragment,{children:["I am over 18 years old and I have read, understand and agree to the",C.jsx("a",{href:"https://github.com/1Money-Co",children:"1Money Terms of Use"}),", ",C.jsx("a",{href:"https://github.com/1Money-Co",children:"Privacy Policy"}),"."]})}],prefixCls:"checkbox"},tags:["!autodocs","dev"]},K={args:{items:[{name:"NoLabel",key:"NoLabel"}],prefixCls:"checkbox"}},W={args:{tristate:!0,items:[{name:"invalid",key:"invalid",invalid:!0,label:"invalid"},{name:"checked",key:"checked",invalid:!0,label:"checked ",defaultValue:!0},{name:"notChecked",key:"notChecked",invalid:!0,label:"Not checked",defaultValue:!1}],prefixCls:"checkbox"}},H={args:{size:"sm",items:[{name:"small",key:"small",label:"small"}],prefixCls:"checkbox"}},q={args:{tristate:!0,items:[{name:"disabled",key:"disabled",label:"Empty value",disabled:!0},{name:"Achecked",key:"Achecked",label:"Checked ",disabled:!0,defaultValue:!0},{name:"BnotChecked",key:"BnotChecked",label:"Not checked ",disabled:!0,defaultValue:!1}],prefixCls:"checkbox"}},J={args:{tristate:!0,items:[{name:"State",key:"Status",label:"Change State"}],prefixCls:"checkbox"}},X={args:{items:[{name:"C",key:"Cheese",label:"Cheese"},{name:"M",key:"Mushroom",label:"Mushroom",autoFocus:!0},{name:"P",key:"Pepper",label:"Pepper"},{name:"O",key:"Onion",label:"Onion"}],prefixCls:"checkbox"}},Y={args:{tristate:!0,size:"lg",items:[{name:"A",key:"Audi",label:"Audi"},{name:"B",key:"BWM",label:"BWM"},{name:"B",key:"Benz",label:"Mercedes-Benz",defaultValue:!0},{name:"L",key:"Lexus",label:"Lexus"}],onChange(t){console.info("itemsState",t)},prefixCls:"checkbox"}};var se,ce,ie;U.parameters={...U.parameters,docs:{...(se=U.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    items: [{
      name: 'Agree',
      key: 'Agree',
      label: <>
      I am over 18 years old and I have read, understand and agree to the
      <a href='https://github.com/1Money-Co'>1Money Terms of Use</a>
      , <a href='https://github.com/1Money-Co'>Privacy Policy</a>.
      </>
    }],
    prefixCls: 'checkbox'
  },
  tags: ['!autodocs', 'dev']
}`,...(ie=(ce=U.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var ue,de,pe;K.parameters={...K.parameters,docs:{...(ue=K.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    items: [{
      name: 'NoLabel',
      key: 'NoLabel'
    }],
    prefixCls: 'checkbox'
  }
}`,...(pe=(de=K.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,fe,be;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    tristate: true,
    items: [{
      name: 'invalid',
      key: 'invalid',
      invalid: true,
      label: 'invalid'
    }, {
      name: 'checked',
      key: 'checked',
      invalid: true,
      label: 'checked ',
      defaultValue: true
    }, {
      name: 'notChecked',
      key: 'notChecked',
      invalid: true,
      label: 'Not checked',
      defaultValue: false
    }],
    prefixCls: 'checkbox'
  }
}`,...(be=(fe=W.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var he,ye,ve;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    items: [{
      name: 'small',
      key: 'small',
      label: 'small'
    }],
    prefixCls: 'checkbox'
  }
}`,...(ve=(ye=H.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var ke,ge,xe;q.parameters={...q.parameters,docs:{...(ke=q.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    tristate: true,
    items: [{
      name: 'disabled',
      key: 'disabled',
      label: 'Empty value',
      disabled: true
    }, {
      name: 'Achecked',
      key: 'Achecked',
      label: 'Checked ',
      disabled: true,
      defaultValue: true
    }, {
      name: 'BnotChecked',
      key: 'BnotChecked',
      label: 'Not checked ',
      disabled: true,
      defaultValue: false
    }],
    prefixCls: 'checkbox'
  }
}`,...(xe=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var Ce,Se,Pe;J.parameters={...J.parameters,docs:{...(Ce=J.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    tristate: true,
    items: [{
      name: 'State',
      key: 'Status',
      label: 'Change State'
    }],
    prefixCls: 'checkbox'
  }
}`,...(Pe=(Se=J.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};var Oe,Ie,je;X.parameters={...X.parameters,docs:{...(Oe=X.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    items: [{
      name: 'C',
      key: 'Cheese',
      label: 'Cheese'
    }, {
      name: 'M',
      key: 'Mushroom',
      label: 'Mushroom',
      autoFocus: true
    }, {
      name: 'P',
      key: 'Pepper',
      label: 'Pepper'
    }, {
      name: 'O',
      key: 'Onion',
      label: 'Onion'
    }],
    prefixCls: 'checkbox'
  }
}`,...(je=(Ie=X.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Ee,we,Ae;Y.parameters={...Y.parameters,docs:{...(Ee=Y.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    tristate: true,
    size: 'lg',
    items: [{
      name: 'A',
      key: 'Audi',
      label: 'Audi'
    }, {
      name: 'B',
      key: 'BWM',
      label: 'BWM'
    }, {
      name: 'B',
      key: 'Benz',
      label: 'Mercedes-Benz',
      defaultValue: true
    }, {
      name: 'L',
      key: 'Lexus',
      label: 'Lexus'
    }],
    onChange(itemsState) {
      console.info('itemsState', itemsState);
    },
    prefixCls: 'checkbox'
  }
}`,...(Ae=(we=Y.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};const Ct=["Single","NoLabel","Invalid","Size","Disabled","SingleTristate","Multiple","MultipleTristate"];export{q as Disabled,W as Invalid,X as Multiple,Y as MultipleTristate,K as NoLabel,U as Single,J as SingleTristate,H as Size,Ct as __namedExportsOrder,xt as default};
