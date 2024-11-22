import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{f as c}from"./index-CERzeK2C.js";import{B as u}from"./Button-BvhyZ5AO.js";import{T as m}from"./Toast-CV4sje5i.js";import"./index-DZLKizrv.js";import"./button.esm-BRvvi54J.js";import"./componentbase.esm-BUIfdjtz.js";import"./index.esm-CN18zA7u.js";import"./iconbase.esm-DgTbIFU1.js";import"./ripple.esm-DOIchPQY.js";import"./tooltip.esm-WYjjNqgI.js";import"./portal.esm-CFaNzpyT.js";import"./index-D16Yfzz8.js";import"./index-rNTiGNI1.js";import"./Loading-BZ7CYQkq.js";import"./classnames-JHuVH38I.js";import"./csstransition.esm-CXEh4A2O.js";import"./inheritsLoose-Co2FXOuK.js";import"./index.esm-BSQl-4b4.js";import"./index.esm-DcJgLfEa.js";import"./index.esm-D4y59WS5.js";import"./index.esm-Cdgvmx5e.js";import"./TransitionGroup-CNMQ9nj4.js";import"./assertThisInitialized-B9jnkVVz.js";const A={title:"Components/Toast",component:m,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"toast",onClick:c()},tags:["autodocs"]},r={args:{prefixCls:"toast"},render:function(i){const s=p.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.show({severity:"success",summary:"Success Message",detail:"Order submitted"})},children:"Show Toast"}),t.jsx(m,{...i,ref:s})]})}};var e,n,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
