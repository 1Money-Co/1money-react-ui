import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{f as c}from"./index-CERzeK2C.js";import{B as u}from"./Button-BfLXMO1B.js";import{T as m}from"./Toast--VavL3en.js";import"./index-DZLKizrv.js";import"./button.esm-TNoYFO_I.js";import"./componentbase.esm-DzE_mzHH.js";import"./index.esm-CSnetIaZ.js";import"./iconbase.esm-CxYhFw5H.js";import"./ripple.esm-C2v7PG3V.js";import"./tooltip.esm-D_1AQxnj.js";import"./index-D16Yfzz8.js";import"./index-rNTiGNI1.js";import"./classnames-JHuVH38I.js";import"./csstransition.esm-BGhA5XSg.js";import"./inheritsLoose-Co2FXOuK.js";import"./index.esm-D-WolGXM.js";import"./index.esm-DV9tHANN.js";import"./index.esm-j626ExZd.js";import"./index.esm-DKmlvVwL.js";import"./assertThisInitialized-B9jnkVVz.js";const N={title:"Components/Toast",component:m,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"toast",onClick:c()},tags:["autodocs"]},r={args:{prefixCls:"toast"},render:function(i){const s=p.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.show({severity:"success",summary:"Success Message",detail:"Order submitted"})},children:"Show Toast"}),t.jsx(m,{...i,ref:s})]})}};var e,n,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const q=["Primary"];export{r as Primary,q as __namedExportsOrder,N as default};
