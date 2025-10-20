import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-CP2yOfOm.js";import{f as l}from"./index-DCiaR2iG.js";import{B as p}from"./Button-DtFMi3qs.js";import{T as i}from"./Toast-D2tJyI0S.js";/* empty css              *//* empty css                   */import"./button.esm-GPQ685V8.js";import"./componentbase.esm-DE4kFom5.js";import"./index.esm-CNCRjPfE.js";import"./iconbase.esm-B9onzN8J.js";import"./ripple.esm-eZGA0mH3.js";import"./tooltip.esm-Dm3idiaE.js";import"./portal.esm-CC0DiCkA.js";import"./index-BOAxdYzW.js";import"./Spinner-DT05ttoS.js";import"./classnames-lRq3rz0l.js";import"./csstransition.esm-D26vAuiv.js";import"./index.esm-CNqz_WEE.js";import"./index.esm-LhSozbRb.js";import"./index.esm-BPBXvHGZ.js";import"./index.esm-CvKkPsgG.js";import"./TransitionGroup-CmtMLutU.js";import"./Icons-BWfxcvx2.js";import"./Typography-DoqwNCiN.js";const _={title:"Components/Toast",component:i,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"toast",onClick:l()},tags:["autodocs"]},e={args:{prefixCls:"toast"},render:function(m){const t=c.useRef(null);return r.jsxs("div",{style:{minHeight:"420px"},children:[r.jsx(p,{onClick:()=>{var s;return(s=t.current)==null?void 0:s.show([{severity:"success",summary:"Success Message",detail:"You successfully topped up 1000 USD1 on 2024-11-20 15:21:17 (UTC)",life:5500},{severity:"info",summary:"Info Message",detail:"You can now link multiple accounts to manage your finances all in one place.",life:6e3},{severity:"warn",summary:"Warn Message",detail:"Update your card details to avoid interruptions.",life:6500},{severity:"error",summary:"Error Message",detail:"Please check your account balance and try again.",life:7e3}])},children:"Show Toast"}),r.jsx(i,{...m,ref:t})]})}};var o,n,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        life: 5500
      }, {
        severity: 'info',
        summary: 'Info Message',
        detail: 'You can now link multiple accounts to manage your finances all in one place.',
        life: 6000
      }, {
        severity: 'warn',
        summary: 'Warn Message',
        detail: 'Update your card details to avoid interruptions.',
        life: 6500
      }, {
        severity: 'error',
        summary: 'Error Message',
        detail: 'Please check your account balance and try again.',
        life: 7000
      }])}>
        Show Toast
      </Button>
      <Toast {...args as any} ref={toast} />
    </div>;
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const N=["Primary"];export{e as Primary,N as __namedExportsOrder,_ as default};
