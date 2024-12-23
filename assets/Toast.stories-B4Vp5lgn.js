import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{f as c}from"./index-CERzeK2C.js";import{B as u}from"./Button-BOsJXWNs.js";import{T as m}from"./Toast-C8tJn9WR.js";import"./index-DZLKizrv.js";import"./button.esm-CuMgQ_1Q.js";import"./componentbase.esm-B7DzLYm2.js";import"./index.esm-U-Gagxqn.js";import"./iconbase.esm-Blfjos1e.js";import"./ripple.esm-j0qNbFto.js";import"./tooltip.esm-0CL_VH-f.js";import"./portal.esm-Dlp_nAuE.js";import"./index-D16Yfzz8.js";import"./index-rNTiGNI1.js";import"./Loading-BZ7CYQkq.js";import"./classnames-JHuVH38I.js";import"./csstransition.esm-DUlXYj3O.js";import"./inheritsLoose-Co2FXOuK.js";import"./index.esm-Czd12oFv.js";import"./index.esm-DJYXX8xX.js";import"./index.esm-Dxp83-c9.js";import"./index.esm-BT6lQ6zs.js";import"./TransitionGroup-CfY2OgUn.js";import"./assertThisInitialized-B9jnkVVz.js";const A={title:"Components/Toast",component:m,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"toast",onClick:c()},tags:["autodocs"]},r={args:{prefixCls:"toast"},render:function(i){const s=p.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.show({severity:"success",summary:"Success Message",detail:"Order submitted"})},children:"Show Toast"}),t.jsx(m,{...i,ref:s})]})}};var e,n,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const D=["Primary"];export{r as Primary,D as __namedExportsOrder,A as default};
