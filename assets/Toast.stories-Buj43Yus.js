import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-CP2yOfOm.js";import{f as l}from"./index-DCiaR2iG.js";import{B as u}from"./Button-C_DssiCh.js";import{T as i}from"./Toast-DQPH_yRV.js";import"./button.esm-CBnlVAbR.js";import"./componentbase.esm-BsReUg3j.js";import"./index.esm-DLazVVqC.js";import"./iconbase.esm-DNxwn6_S.js";import"./ripple.esm-CWnDe1CI.js";import"./tooltip.esm-Doklybei.js";import"./portal.esm-DMoTtUt2.js";import"./index-BOAxdYzW.js";import"./Spinner-IyiZiwze.js";import"./classnames-lRq3rz0l.js";import"./csstransition.esm-CvEczEG1.js";import"./index.esm-DndRe1gW.js";import"./index.esm-BFiHYexY.js";import"./index.esm-C8IMpoSr.js";import"./index.esm-CiCt3KlJ.js";import"./TransitionGroup-BxIvQGuh.js";import"./Icons-DVnQWccZ.js";import"./Typography-DoqwNCiN.js";const I={title:"Components/Toast",component:i,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"toast",onClick:l()},tags:["autodocs"]},e={args:{prefixCls:"toast"},render:function(m){const t=c.useRef(null);return r.jsxs("div",{style:{minHeight:"420px"},children:[r.jsx(u,{onClick:()=>{var s;return(s=t.current)==null?void 0:s.show([{severity:"success",summary:"Success Message",detail:"You successfully topped up 1000 USD1 on 2024-11-20 15:21:17 (UTC)",life:3500},{severity:"info",summary:"Info Message",detail:"You can now link multiple accounts to manage your finances all in one place.",life:4e3},{severity:"warn",summary:"Warn Message",detail:"Update your card details to avoid interruptions.",life:4500},{severity:"error",summary:"Error Message",detail:"Please check your account balance and try again.",life:5e3}])},children:"Show Toast"}),r.jsx(i,{...m,ref:t})]})}};var o,n,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
