import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{f as c}from"./index-CERzeK2C.js";import{B as u}from"./Button-COnQMRKY.js";import{T as m}from"./Toast-LjWpAdf_.js";import"./index-DZLKizrv.js";import"./button.esm-CLWiJ0Kb.js";import"./classnames-CeBkXBtN.js";import"./index.esm-BGWmLa9Y.js";import"./iconbase.esm-DflSAXuz.js";import"./ripple.esm-BkJrgXBI.js";import"./tooltip.esm-5kWvp9aW.js";import"./index-D16Yfzz8.js";import"./index-rNTiGNI1.js";import"./csstransition.esm-BO2EBfB4.js";import"./inheritsLoose-Co2FXOuK.js";import"./index.esm-CSiSsOA2.js";import"./index.esm-Bpv9HHcO.js";import"./index.esm-C6M4m_1g.js";import"./index.esm-BilGBjug.js";import"./assertThisInitialized-B9jnkVVz.js";const F={title:"Components/Toast",component:m,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"toast",onClick:c()},tags:["autodocs"]},r={args:{prefixCls:"toast"},render:function(i){const s=p.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.show({severity:"success",summary:"Success Message",detail:"Order submitted"})},children:"Show Toast"}),t.jsx(m,{...i,ref:s})]})}};var e,n,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const N=["Primary"];export{r as Primary,N as __namedExportsOrder,F as default};
