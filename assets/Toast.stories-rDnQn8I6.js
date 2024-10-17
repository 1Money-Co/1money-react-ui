import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{f as c}from"./index-CERzeK2C.js";import{B as u}from"./Button-DvEAE006.js";import{T as m}from"./Toast-3HYzrs7P.js";import"./index-DZLKizrv.js";import"./button.esm-84BltnYa.js";import"./componentbase.esm-pRUup1-p.js";import"./index.esm-CZ7ZaNrq.js";import"./iconbase.esm-_TJjg1e8.js";import"./ripple.esm-CUAJUv82.js";import"./tooltip.esm-DqwXj_rF.js";import"./portal.esm-bpn_fa5y.js";import"./index-D16Yfzz8.js";import"./index-rNTiGNI1.js";import"./Loading-BZ7CYQkq.js";import"./classnames-JHuVH38I.js";import"./csstransition.esm-B9I10wMO.js";import"./inheritsLoose-Co2FXOuK.js";import"./index.esm-DPn1CJcT.js";import"./index.esm-zskBQMrM.js";import"./index.esm-DG3Ei2N2.js";import"./index.esm-B7F8P_tb.js";import"./assertThisInitialized-B9jnkVVz.js";const z={title:"Components/Toast",component:m,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"toast",onClick:c()},tags:["autodocs"]},r={args:{prefixCls:"toast"},render:function(i){const s=p.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.show({severity:"success",summary:"Success Message",detail:"Order submitted"})},children:"Show Toast"}),t.jsx(m,{...i,ref:s})]})}};var e,n,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    prefixCls: 'toast'
  },
  render: function Render(args) {
    const toast = useRef<ToastClass>(null);
    return <>
      <Button onClick={() => toast.current?.show({
        severity: 'success',
        summary: 'Success Message',
        detail: 'Order submitted'
      })}>
        Show Toast
      </Button>
      <Toast {...(args as any)} ref={toast} />
    </>;
  }
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const A=["Primary"];export{r as Primary,A as __namedExportsOrder,z as default};
