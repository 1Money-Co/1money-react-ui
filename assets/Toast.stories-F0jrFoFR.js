import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-Ca8FO3x4.js";import{f as l}from"./index-C-CZKJQo.js";import{B as p}from"./Button-Bwvf9chr.js";import{T as i}from"./Toast-CGbfmtFF.js";import"./button.esm-CKaW3228.js";import"./componentbase.esm-CmqFOBMX.js";import"./index.esm-ZnzG-bZe.js";import"./iconbase.esm-BQbvzF6M.js";import"./ripple.esm-BKAtRWv4.js";import"./tooltip.esm-3SGCDnos.js";import"./portal.esm-C38zexph.js";import"./index-CA-MFgIQ.js";import"./Spinner-mwCuaLRH.js";import"./classnames-B-6LArsQ.js";import"./csstransition.esm-DSVPP7-p.js";import"./setPrototypeOf-SZTCiYDs.js";import"./index.esm-CZ0p2oYE.js";import"./index.esm-DGFjzfGD.js";import"./index.esm-tmG2Xedk.js";import"./index.esm-CZTfbK_d.js";import"./TransitionGroup-FBiY_WQ4.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Icons-alg6q5xe.js";import"./Typography-BOqbHqbW.js";const _={title:"Components/Toast",component:i,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"toast",onClick:l()},tags:["autodocs"]},e={args:{prefixCls:"toast"},render:function(m){const t=c.useRef(null);return r.jsxs("div",{style:{minHeight:"420px"},children:[r.jsx(p,{onClick:()=>{var s;return(s=t.current)==null?void 0:s.show([{severity:"success",summary:"Success Message",detail:"You successfully topped up 1000 USD1 on 2024-11-20 15:21:17 (UTC)",life:1500},{severity:"info",summary:"Info Message",detail:"You can now link multiple accounts to manage your finances all in one place.",life:2e3},{severity:"warn",summary:"Warn Message",detail:"Update your card details to avoid interruptions.",life:2500},{severity:"error",summary:"Error Message",detail:"Please check your account balance and try again.",life:3e3}])},children:"Show Toast"}),r.jsx(i,{...m,ref:t})]})}};var o,n,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        life: 1500
      }, {
        severity: 'info',
        summary: 'Info Message',
        detail: 'You can now link multiple accounts to manage your finances all in one place.',
        life: 2000
      }, {
        severity: 'warn',
        summary: 'Warn Message',
        detail: 'Update your card details to avoid interruptions.',
        life: 2500
      }, {
        severity: 'error',
        summary: 'Error Message',
        detail: 'Please check your account balance and try again.',
        life: 3000
      }])}>
        Show Toast
      </Button>
      <Toast {...args as any} ref={toast} />
    </div>;
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const N=["Primary"];export{e as Primary,N as __namedExportsOrder,_ as default};
