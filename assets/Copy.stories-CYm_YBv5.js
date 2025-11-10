import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as n,R as T}from"./index-CP2yOfOm.js";import{c as b}from"./classnames-lRq3rz0l.js";import{a as h}from"./Icons-BWfxcvx2.js";import{c as E}from"./clipboard-DZvO4X-U.js";import{T as B}from"./Toast-18m8iiub.js";/* empty css              */import"./componentbase.esm-4JClMOy3.js";import"./csstransition.esm-B5iK3TG5.js";import"./index-BOAxdYzW.js";import"./portal.esm-DsCazcPz.js";import"./index.esm-DKy0vDUU.js";import"./iconbase.esm-CgcK1F5D.js";import"./index.esm-DB2qnA-K.js";import"./index.esm-ByOqZbnP.js";import"./index.esm-BUPvvfCY.js";import"./ripple.esm-B4ep2fnx.js";import"./TransitionGroup-BcWs-nSM.js";import"./Typography-DoqwNCiN.js";const a=i=>{const{value:e,iconSize:r=32,className:g,prefixCls:C="copy",onSuccess:c,onError:p}=i,l=b(C),[m,u]=n.useState(!1),s=n.useRef(null);return n.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]),o.jsx(h,{name:m?"check":"copy",size:r,wrapperCls:l(void 0,[m&&l("success"),g].filter(Boolean).join(" ")),onClick:d=>{d.stopPropagation(),d.preventDefault(),!(!e||m)&&E(e,x=>{x?(u(!0),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>u(!1),1500),c==null||c(e)):p==null||p(e)})}})};n.memo(a);a.__docgenInfo={description:"",methods:[],displayName:"Copy",props:{value:{required:!0,tsType:{name:"string"},description:""},iconSize:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},onSuccess:{required:!1,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""}}};const L={title:"Components/Copy",component:a,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{value:"0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89",prefixCls:"copy"},tags:["autodocs"]},t={args:{value:"0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89",prefixCls:"copy"},render:i=>{const e=T.useRef(null);return o.jsxs("div",{style:{display:"flex",height:"30vh"},children:[o.jsx(a,{...i,onSuccess:()=>{var r;return(r=e.current)==null?void 0:r.show({severity:"success",summary:"Success",detail:"Copied to clipboard",life:1500})},onError:()=>{var r;return(r=e.current)==null?void 0:r.show({severity:"error",summary:"Error",detail:"Failed to copy",life:1500})}}),o.jsx(B,{ref:e})]})}};var f,y,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      <Copy {...props} onSuccess={() => toast.current?.show({
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
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const M=["Primary"];export{t as Primary,M as __namedExportsOrder,L as default};
