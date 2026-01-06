import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{R as c}from"./index-CP2yOfOm.js";import{C as n}from"./Copy-Cb_3Yoc1.js";import{T as m}from"./Toast-FxgH_-TB.js";/* empty css              */import"./classnames-LtG3MjBp.js";import"./Icons-zcy5A052.js";import"./clipboard-DZvO4X-U.js";import"./componentbase.esm-4JClMOy3.js";import"./csstransition.esm-B5iK3TG5.js";import"./index-BOAxdYzW.js";import"./portal.esm-DsCazcPz.js";import"./index.esm-DKy0vDUU.js";import"./iconbase.esm-CgcK1F5D.js";import"./index.esm-DB2qnA-K.js";import"./index.esm-ByOqZbnP.js";import"./index.esm-BUPvvfCY.js";import"./ripple.esm-B4ep2fnx.js";import"./TransitionGroup-BcWs-nSM.js";import"./Typography-BgvqIFCt.js";const P={title:"Components/Copy",component:n,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{value:"0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89",prefixCls:"copy"},tags:["autodocs"]},o={args:{value:"0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89",prefixCls:"copy"},render:p=>{const e=c.useRef(null);return t.jsxs("div",{style:{display:"flex",height:"30vh"},children:[t.jsx(n,{...p,color:"red",onSuccess:()=>{var r;return(r=e.current)==null?void 0:r.show({severity:"success",summary:"Success",detail:"Copied to clipboard",life:1500})},onError:()=>{var r;return(r=e.current)==null?void 0:r.show({severity:"error",summary:"Error",detail:"Failed to copy",life:1500})}}),t.jsx(m,{ref:e})]})}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    value: '0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89',
    prefixCls: 'copy'
  },
  render: props => {
    const toast = React.useRef<ToastClass>(null);
    return <div style={{
      display: 'flex',
      height: '30vh'
    }}>
      <Copy {...props} color='red' onSuccess={() => toast.current?.show({
        severity: 'success',
        summary: 'Success',
        detail: 'Copied to clipboard',
        life: 1500
      })} onError={() => toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to copy',
        life: 1500
      })} />
      <Toast ref={toast} />
    </div>;
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const _=["Primary"];export{o as Primary,_ as __namedExportsOrder,P as default};
