import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{f as F}from"./index-DCiaR2iG.js";import{r as p}from"./index-CP2yOfOm.js";import{I as A}from"./inputnumber.esm-B7KoxLwn.js";import{c as O}from"./classnames-lRq3rz0l.js";import{a as I}from"./Icons-CB1OnB3C.js";/* empty css              */import"./componentbase.esm-6-7qnxwj.js";import"./iconbase.esm-Bq-k6IZZ.js";import"./inputtext.esm-W5sjBh-V.js";import"./tooltip.esm-BHPK83vk.js";import"./portal.esm-D51I7lTo.js";import"./index-BOAxdYzW.js";import"./ripple.esm-BY0fkE-M.js";var w;(function(e){e.event="event",e.props="prop"})(w||(w={}));function G(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function P(e,a,n){var s=G(n),r=e.search(/[1-9]/);return r=r===-1?e.length:r,e.substring(0,r)+e.substring(r,e.length).replace(s,"$1"+a)}function M(e,a){a===void 0&&(a=!0);var n=e[0]==="-",s=n&&a;e=e.replace("-","");var r=e.split("."),l=r[0],f=r[1]||"";return{beforeDecimal:l,afterDecimal:f,hasNegation:n,addNegation:s}}function W(e,a,n){for(var s="",r=n?"0":"",l=0;l<=a-1;l++)s+=e[l]||r;return s}function K(e,a){var n=a.decimalScale,s=a.fixedDecimalScale,r=a.prefix;r===void 0&&(r="");var l=a.suffix;l===void 0&&(l="");var f=a.allowNegative,x=a.thousandsGroupStyle;if(x===void 0&&(x="thousand"),e===""||e==="-")return e;var h=B(a),g=h.thousandSeparator,y=h.decimalSeparator,v=n!==0&&e.indexOf(".")!==-1||n&&s,d=M(e,f),c=d.beforeDecimal,u=d.afterDecimal,o=d.addNegation;return n!==void 0&&(u=W(u,n,!!s)),g&&(c=P(c,g,x)),r&&(c=r+c),l&&(u=u+l),o&&(c="-"+c),e=c+(v&&y||"")+u,e}function B(e){var a=e.decimalSeparator;a===void 0&&(a=".");var n=e.thousandSeparator,s=e.allowedDecimalSeparators;return n===!0&&(n=","),s||(s=[a,"."]),{decimalSeparator:a,thousandSeparator:n,allowedDecimalSeparators:s}}const R=33,T=e=>{const{value:a,children:n,className:s,wrapperCls:r,prefixCls:l="input-amount",invalid:f,placeholder:x="0",prefix:h,currency:g,suffix:y,message:v,footnote:d,onChange:c,...u}=e,o=O(l),D=p.useRef(null),j=p.useRef(null),[m,N]=p.useState(null),[$,_]=p.useState(R),U=p.useCallback(t=>{N(t.value),c==null||c(t)},[c]),z=p.useCallback(t=>{switch(t.key){case".":N(E=>`${E}.`);break;case"Backspace":if(m==null)return;const b=m.toString();b[b.length-2]==="."&&setTimeout(()=>{N(`${b.slice(0,-1)}`)},0);break}},[m]);return p.useEffect(()=>{var t;_(((t=j.current)==null?void 0:t.offsetWidth)||R)},[m]),p.useEffect(()=>N(a??null),[a]),i.jsxs("div",{className:o("wrapper",[r,f?o("invalid"):void 0].join(" ").trim()),children:[i.jsxs("div",{className:o(void 0,s),children:[h&&i.jsx("span",{className:o("prefix"),onClick:()=>{var t;return(t=D.current)==null?void 0:t.focus()},children:h}),i.jsx(A,{...u,mode:"decimal",ref:D,value:a,placeholder:x,className:o("element"),onChange:U,onKeyDown:z,style:{"--input-width":`${$}px`}}),g&&i.jsx("span",{className:o("currency"),onClick:()=>{var t;return(t=D.current)==null?void 0:t.focus()},children:g}),y&&i.jsx("span",{className:o("suffix"),children:y}),i.jsx("span",{ref:j,className:o("fake"),onClick:t=>t.stopPropagation(),children:K(""+(m??""),{thousandSeparator:!0})})]}),(v||d)&&i.jsxs("div",{className:o("extra"),children:[v&&i.jsx("span",{className:o("message"),children:v}),d&&i.jsx("span",{className:o("footnote"),children:d})]})]})};p.memo(T);T.__docgenInfo={description:"",methods:[],displayName:"InputAmount",props:{ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"InputNumber | null",elements:[{name:"InputNumber"},{name:"null"}]}],raw:"RefObject<InputNumber | null>"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},wrapperCls:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},prefix:{required:!1,tsType:{name:"ReactNode"},description:""},currency:{required:!1,tsType:{name:"ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactNode"},description:""},message:{required:!1,tsType:{name:"ReactNode"},description:""},footnote:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const ie={title:"Components/InputAmount",component:T,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{onClick:F()},tags:["autodocs"]},S={args:{prefix:"$",currency:"USD",invalid:!1,suffix:i.jsx("span",{style:{padding:"12px",borderRadius:"12px",backgroundColor:"#F0F0F0",color:"#131313",fontSize:"12px",cursor:"pointer"},children:"Max"}),message:i.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[i.jsx(I,{name:"error",color:"inherit",size:16}),"Amount exceeds maximum. The maximum purchase amount is $10,000 USD"]}),footnote:i.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer",color:"#073387"},children:[i.jsx(I,{name:"swap",color:"#073387",size:24}),"0 USDT"]})}};var k,C,q;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    prefix: '$',
    currency: 'USD',
    invalid: false,
    suffix: <span style={{
      padding: '12px',
      borderRadius: '12px',
      backgroundColor: '#F0F0F0',
      color: '#131313',
      fontSize: '12px',
      cursor: 'pointer'
    }}>Max</span>,
    message: <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px'
    }}>
      <Icons name='error' color='inherit' size={16} />
      Amount exceeds maximum. The maximum purchase amount is $10,000 USD
    </span>,
    footnote: <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      cursor: 'pointer',
      color: '#073387'
    }}>
      <Icons name='swap' color='#073387' size={24} />
      0 USDT
    </span>
  }
}`,...(q=(C=S.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const oe=["Primary"];export{S as Primary,oe as __namedExportsOrder,ie as default};
