import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-DGOumNSj.js";import{f as c}from"./index-C-CZKJQo.js";import{B as u}from"./Button-B363lqK4.js";import{T as m}from"./Toast-DonXTJsG.js";import"./button.esm-Crft-G1Z.js";import"./componentbase.esm-CcTVhaot.js";import"./index.esm-CB1fIbQ-.js";import"./iconbase.esm-B9JVR04N.js";import"./ripple.esm-D7U1XS2t.js";import"./tooltip.esm-B4idE_5U.js";import"./portal.esm-B5s9sLsr.js";import"./index-BmTs--ql.js";import"./classnames-CL-cd9Z_.js";import"./Loading-C8_sBVCj.js";import"./csstransition.esm-CO4t0ang.js";import"./index.esm-DH2A1hkI.js";import"./index.esm-BUJvaMl0.js";import"./index.esm-CEE_g2h2.js";import"./index.esm-CcmjrRHQ.js";import"./TransitionGroup-B_wexrQj.js";const F={title:"Components/Toast",component:m,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"toast",onClick:c()},tags:["autodocs"]},r={args:{prefixCls:"toast"},render:function(i){const s=p.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.show({severity:"success",summary:"Success Message",detail:"Order submitted"})},children:"Show Toast"}),t.jsx(m,{...i,ref:s})]})}};var e,n,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
      <Toast {...args as any} ref={toast} />
    </>;
  }
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const N=["Primary"];export{r as Primary,N as __namedExportsOrder,F as default};
