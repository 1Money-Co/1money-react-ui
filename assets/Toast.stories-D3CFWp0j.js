import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-CP2yOfOm.js";import{f as l}from"./index-DCiaR2iG.js";import{B as p}from"./Button-CUmo6Psp.js";import{T as i}from"./Toast-D2x17PfR.js";/* empty css              *//* empty css              *//* empty css                   */import"./button.esm-BLUlz6ZX.js";import"./componentbase.esm-CXBs-FDc.js";import"./index.esm-Bh1ZkPrL.js";import"./iconbase.esm-B5oz0zHK.js";import"./ripple.esm-Ckuixj0S.js";import"./tooltip.esm-DyXttjBC.js";import"./portal.esm-D447dnBO.js";import"./index-BOAxdYzW.js";import"./Spinner-CItpUyxh.js";import"./classnames-lRq3rz0l.js";import"./csstransition.esm-AzIikG66.js";import"./index.esm-CBlkpF_h.js";import"./index.esm-CdpdOmfx.js";import"./index.esm-BnTj3pgm.js";import"./index.esm-CXuHEcd3.js";import"./TransitionGroup-Cqdoemv4.js";import"./Icons-QZyVNEgg.js";import"./Typography-DoqwNCiN.js";const N={title:"Components/Toast",component:i,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"toast",onClick:l()},tags:["autodocs"]},e={args:{prefixCls:"toast"},render:function(m){const t=c.useRef(null);return r.jsxs("div",{style:{minHeight:"420px"},children:[r.jsx(p,{onClick:()=>{var s;return(s=t.current)==null?void 0:s.show([{severity:"success",summary:"Success Message",detail:"You successfully topped up 1000 USD1 on 2024-11-20 15:21:17 (UTC)",life:3500},{severity:"info",summary:"Info Message",detail:"You can now link multiple accounts to manage your finances all in one place.",life:4e3},{severity:"warn",summary:"Warn Message",detail:"Update your card details to avoid interruptions.",life:4500},{severity:"error",summary:"Error Message",detail:"Please check your account balance and try again.",life:5e3}])},children:"Show Toast"}),r.jsx(i,{...m,ref:t})]})}};var o,n,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const O=["Primary"];export{e as Primary,O as __namedExportsOrder,N as default};
