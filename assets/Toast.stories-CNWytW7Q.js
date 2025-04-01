import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-DGOumNSj.js";import{f as l}from"./index-C-CZKJQo.js";import{B as u}from"./Button-C8AEZiS1.js";import{T as i}from"./Toast-BSnj2d-E.js";import"./button.esm-VjJyv5J4.js";import"./componentbase.esm-BdcVyoov.js";import"./index.esm-hCcRpTLE.js";import"./iconbase.esm-Dw9HLwNj.js";import"./ripple.esm-D6Nhrw2g.js";import"./tooltip.esm-DhDZOP2a.js";import"./portal.esm-sGRjpPF9.js";import"./index-BmTs--ql.js";import"./Spinner-vRPLJ-m1.js";import"./classnames-CPOy7I0U.js";import"./csstransition.esm-DBYBBX3C.js";import"./index.esm-B60wmaaB.js";import"./index.esm-DfpHoBKp.js";import"./index.esm-CLSgKWBi.js";import"./index.esm-Dlfly0QC.js";import"./TransitionGroup-BadRJi_W.js";import"./Icons-F0VUxUKT.js";import"./Typography-rC6RsJzc.js";const I={title:"Components/Toast",component:i,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"toast",onClick:l()},tags:["autodocs"]},e={args:{prefixCls:"toast"},render:function(m){const t=c.useRef(null);return r.jsxs("div",{style:{minHeight:"420px"},children:[r.jsx(u,{onClick:()=>{var s;return(s=t.current)==null?void 0:s.show([{severity:"success",summary:"Success Message",detail:"You successfully topped up 1000 USD1 on 2024-11-20 15:21:17 (UTC)",life:3500},{severity:"info",summary:"Info Message",detail:"You can now link multiple accounts to manage your finances all in one place.",life:4e3},{severity:"warn",summary:"Warn Message",detail:"Update your card details to avoid interruptions.",life:4500},{severity:"error",summary:"Error Message",detail:"Please check your account balance and try again.",life:5e3}])},children:"Show Toast"}),r.jsx(i,{...m,ref:t})]})}};var o,n,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    prefixCls: 'toast'
  },
  render: function Render(args) {
    const toast = useRef<ToastClass>(null);
    return <div style={{
      minHeight: '420px'
    }}>
      <Button onClick={() => toast.current?.show([{
        severity: 'success',
        summary: 'Success Message',
        detail: 'You successfully topped up 1000 USD1 on 2024-11-20 15:21:17 (UTC)',
        life: 3500
      }, {
        severity: 'info',
        summary: 'Info Message',
        detail: 'You can now link multiple accounts to manage your finances all in one place.',
        life: 4000
      }, {
        severity: 'warn',
        summary: 'Warn Message',
        detail: 'Update your card details to avoid interruptions.',
        life: 4500
      }, {
        severity: 'error',
        summary: 'Error Message',
        detail: 'Please check your account balance and try again.',
        life: 5000
      }])}>
        Show Toast
      </Button>
      <Toast {...args as any} ref={toast} />
    </div>;
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const W=["Primary"];export{e as Primary,W as __namedExportsOrder,I as default};
