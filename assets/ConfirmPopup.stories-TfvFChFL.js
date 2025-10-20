import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-CP2yOfOm.js";import{C as f,c as d}from"./confirmpopup.esm-BVzvN6SU.js";import{c as l}from"./classnames-lRq3rz0l.js";import{B as g}from"./Button-DtFMi3qs.js";import"./componentbase.esm-DE4kFom5.js";import"./button.esm-GPQ685V8.js";import"./index.esm-CNCRjPfE.js";import"./iconbase.esm-B9onzN8J.js";import"./ripple.esm-eZGA0mH3.js";import"./tooltip.esm-Dm3idiaE.js";import"./portal.esm-CC0DiCkA.js";import"./index-BOAxdYzW.js";import"./csstransition.esm-D26vAuiv.js";import"./overlayservice.esm-CBCdhmV6.js";import"./Spinner-DT05ttoS.js";const o=n=>{const{className:t,prefixCls:s="confirm-popup",...a}=n,c=l(s);return r.jsx(f,{...a,className:c(void 0,t)})};u.memo(o);o.__docgenInfo={description:"",methods:[],displayName:"ConfirmPopup",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["PrimeConfirmPopupProps"]};const A={title:"Components/ConfirmPopup",component:o,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"confirmpopup"},tags:["autodocs"]},e={args:{prefixCls:"confirm-popup"},render:function(t){return r.jsxs(r.Fragment,{children:[r.jsx(o,{...t}),r.jsx(g,{severity:"danger",onClick:s=>d({target:s.currentTarget,message:"Are you sure you want to delete this item?"}),children:"Delete"})]})}};var p,i,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    prefixCls: 'confirm-popup'
  },
  render: function Render(args) {
    return <>
      <ConfirmPopup {...args} />
      <Button severity='danger' onClick={e => confirmPopup({
        target: e.currentTarget,
        message: 'Are you sure you want to delete this item?'
      })}>
        Delete
      </Button>
    </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const D=["Primary"];export{e as Primary,D as __namedExportsOrder,A as default};
