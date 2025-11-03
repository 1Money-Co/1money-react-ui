import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-CP2yOfOm.js";import{C as f,c as d}from"./confirmpopup.esm-CMOC4zUv.js";import{c as l}from"./classnames-lRq3rz0l.js";import{B as g}from"./Button-B4fUoQEl.js";import"./componentbase.esm-4JClMOy3.js";import"./button.esm-P8t-Ut6N.js";import"./index.esm-0rHaTxuV.js";import"./iconbase.esm-CgcK1F5D.js";import"./ripple.esm-B4ep2fnx.js";import"./tooltip.esm-DWjguKwN.js";import"./portal.esm-DsCazcPz.js";import"./index-BOAxdYzW.js";import"./csstransition.esm-B5iK3TG5.js";import"./overlayservice.esm-BSzR65vr.js";import"./Spinner-OXWNGFtm.js";const o=n=>{const{className:t,prefixCls:s="confirm-popup",...a}=n,c=l(s);return r.jsx(f,{...a,className:c(void 0,t)})};u.memo(o);o.__docgenInfo={description:"",methods:[],displayName:"ConfirmPopup",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["PrimeConfirmPopupProps"]};const A={title:"Components/ConfirmPopup",component:o,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"confirmpopup"},tags:["autodocs"]},e={args:{prefixCls:"confirm-popup"},render:function(t){return r.jsxs(r.Fragment,{children:[r.jsx(o,{...t}),r.jsx(g,{severity:"danger",onClick:s=>d({target:s.currentTarget,message:"Are you sure you want to delete this item?"}),children:"Delete"})]})}};var p,i,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
