import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{f as ae}from"./index-DCiaR2iG.js";import{r as o}from"./index-CP2yOfOm.js";import{I as re}from"./inputnumber.esm-B7KoxLwn.js";import{c as ne}from"./classnames-lRq3rz0l.js";import{a as G}from"./Icons-CB1OnB3C.js";import{T as se}from"./Typography-DoqwNCiN.js";/* empty css              *//* empty css                   */import"./componentbase.esm-6-7qnxwj.js";import"./iconbase.esm-Bq-k6IZZ.js";import"./inputtext.esm-W5sjBh-V.js";import"./tooltip.esm-BHPK83vk.js";import"./portal.esm-D51I7lTo.js";import"./index-BOAxdYzW.js";import"./ripple.esm-BY0fkE-M.js";var P;(function(e){e.event="event",e.props="prop"})(P||(P={}));function te(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function ie(e,a,s){var i=te(s),r=e.search(/[1-9]/);return r=r===-1?e.length:r,e.substring(0,r)+e.substring(r,e.length).replace(i,"$1"+a)}function oe(e,a){a===void 0&&(a=!0);var s=e[0]==="-",i=s&&a;e=e.replace("-","");var r=e.split("."),l=r[0],y=r[1]||"";return{beforeDecimal:l,afterDecimal:y,hasNegation:s,addNegation:i}}function le(e,a,s){for(var i="",r=s?"0":"",l=0;l<=a-1;l++)i+=e[l]||r;return i}function ce(e,a){var s=a.decimalScale,i=a.fixedDecimalScale,r=a.prefix;r===void 0&&(r="");var l=a.suffix;l===void 0&&(l="");var y=a.allowNegative,N=a.thousandsGroupStyle;if(N===void 0&&(N="thousand"),e===""||e==="-")return e;var S=de(a),T=S.thousandSeparator,R=S.decimalSeparator,D=s!==0&&e.indexOf(".")!==-1||s&&i,h=oe(e,y),d=h.beforeDecimal,u=h.afterDecimal,g=h.addNegation;return s!==void 0&&(u=le(u,s,!!i)),T&&(d=ie(d,T,N)),r&&(d=r+d),l&&(u=u+l),g&&(d="-"+d),e=d+(D&&R||"")+u,e}function de(e){var a=e.decimalSeparator;a===void 0&&(a=".");var s=e.thousandSeparator,i=e.allowedDecimalSeparators;return s===!0&&(s=","),i||(i=[a,"."]),{decimalSeparator:a,thousandSeparator:s,allowedDecimalSeparators:i}}const W=33,k=e=>{const{value:a,children:s,className:i,wrapperCls:r,prefixCls:l="input-amount",messageCls:y,footnoteCls:N,invalid:S,placeholder:T="0",prefix:R,currency:D,suffix:h,message:d,footnote:u,onChange:g,onClick:w,...V}=e,c=ne(l),b=o.useRef(null),q=o.useRef(null),$=o.useRef(null),z=o.useRef(null),M=o.useRef(null),_=o.useRef(null),[v,I]=o.useState(null),[J,Q]=o.useState(W),[X,Y]=o.useState(!1),Z=o.useCallback(n=>{I(n.value),g==null||g(n)},[g]),ee=o.useCallback(n=>{switch(n.key){case".":I(f=>`${f}.`);break;case"Backspace":if(v==null)return;const p=v.toString();p[p.length-2]==="."&&setTimeout(()=>{I(`${p.slice(0,-1)}`)},0);break}},[v]);return o.useEffect(()=>{var U,F,A,O,B;const n=((U=_.current)==null?void 0:U.offsetWidth)??W,p=((F=$.current)==null?void 0:F.offsetWidth)??0,f=((A=z.current)==null?void 0:A.offsetWidth)??0,x=((O=M.current)==null?void 0:O.offsetWidth)??0,m=((B=q.current)==null?void 0:B.offsetWidth)??0,j=p&&f&&x?24:p&&f||p&&x||f&&x?16:p||f||x?8:0,E=n-p-f-x-j;Q(Math.min(E,Math.max(m,W))),Y(m>=E)},[v]),o.useEffect(()=>I(a??null),[a]),t.jsxs("div",{className:c("wrapper",[r,S?c("invalid"):void 0].join(" ").trim()),children:[t.jsxs("div",{ref:_,className:c(void 0,i),children:[R&&t.jsx("span",{ref:$,className:c("prefix"),onClick:()=>{var n;return(n=b.current)==null?void 0:n.focus()},children:R}),t.jsx(re,{...V,mode:"decimal",ref:b,value:a,placeholder:T,className:c("element",X?c("element-max"):""),onChange:Z,onKeyDown:ee,style:{"--input-width":`${J}px`},onClick:n=>{var f,x;if(!(n.target instanceof HTMLInputElement)){const m=(f=b.current)==null?void 0:f.getInput();if(!m)return;const j=(x=m.value)==null?void 0:x.length;m.setSelectionRange(j,j),m.scrollLeft=m.scrollWidth,m.focus()}w==null||w(n)}}),D&&t.jsx("span",{ref:M,className:c("currency"),onClick:()=>{var n;return(n=b.current)==null?void 0:n.focus()},children:D}),h&&t.jsx("span",{ref:z,className:c("suffix"),children:h}),t.jsx("span",{ref:q,className:c("fake"),onClick:n=>n.stopPropagation(),children:ce(""+(v??""),{thousandSeparator:!0})})]}),(d||u)&&t.jsxs("div",{className:c("extra"),children:[d&&t.jsx("div",{className:c("message",y),children:d}),u&&t.jsx("div",{className:c("footnote",N),children:u})]})]})};o.memo(k);k.__docgenInfo={description:"",methods:[],displayName:"InputAmount",props:{ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"InputNumber | null",elements:[{name:"InputNumber"},{name:"null"}]}],raw:"RefObject<InputNumber | null>"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},wrapperCls:{required:!1,tsType:{name:"string"},description:""},messageCls:{required:!1,tsType:{name:"string"},description:""},footnoteCls:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},prefix:{required:!1,tsType:{name:"ReactNode"},description:""},currency:{required:!1,tsType:{name:"ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactNode"},description:""},message:{required:!1,tsType:{name:"ReactNode"},description:""},footnote:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const je={title:"Components/InputAmount",component:k,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{onClick:ae()},tags:["autodocs"]},C={args:{prefix:"$",currency:"USD",invalid:!1,suffix:t.jsx("span",{style:{padding:"12px",borderRadius:"12px",backgroundColor:"#F0F0F0",color:"#131313",fontSize:"12px",cursor:"pointer"},children:"Max"}),message:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[t.jsx(G,{name:"error",color:"inherit",size:16}),"Amount exceeds maximum. The maximum purchase amount is $10,000 USD"]}),footnote:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer",color:"#073387"},children:[t.jsx(G,{name:"swap",color:"#073387",size:24}),t.jsx(se.Body,{size:"m",bold:!0,style:{color:"#073387"},children:"0 USDT"})]})}};var H,K,L;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
      <Typography.Body size='m' bold style={{
        color: '#073387'
      }}>
        0 USDT
      </Typography.Body>
    </span>
  }
}`,...(L=(K=C.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const Ce=["Primary"];export{C as Primary,Ce as __namedExportsOrder,je as default};
