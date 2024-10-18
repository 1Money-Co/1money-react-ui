import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{f as c}from"./index-CERzeK2C.js";import{B as u}from"./Button-ANKwUbQc.js";import{T as m}from"./Toast-iUUEUuEB.js";import"./index-DZLKizrv.js";import"./button.esm-BQ_Ey-Py.js";import"./componentbase.esm-TQ_VTtCT.js";import"./index.esm-BcXCIisZ.js";import"./iconbase.esm-ChFl_WGF.js";import"./ripple.esm-Czr1ual0.js";import"./tooltip.esm-BoxKf1qR.js";import"./portal.esm-CQJ0RbZ5.js";import"./index-D16Yfzz8.js";import"./index-rNTiGNI1.js";import"./Loading-BZ7CYQkq.js";import"./classnames-JHuVH38I.js";import"./csstransition.esm-keYt0-Da.js";import"./inheritsLoose-Co2FXOuK.js";import"./index.esm-CLl7UX4k.js";import"./index.esm-CaxzI23i.js";import"./index.esm-BFfC8j7q.js";import"./index.esm-DUvMXMZQ.js";import"./assertThisInitialized-B9jnkVVz.js";const z={title:"Components/Toast",component:m,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"toast",onClick:c()},tags:["autodocs"]},r={args:{prefixCls:"toast"},render:function(i){const s=p.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.show({severity:"success",summary:"Success Message",detail:"Order submitted"})},children:"Show Toast"}),t.jsx(m,{...i,ref:s})]})}};var e,n,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
