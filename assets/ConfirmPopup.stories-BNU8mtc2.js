import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-Ca8FO3x4.js";import{C as f,c as l}from"./confirmpopup.esm-Cg-nD62W.js";import{c as d}from"./classnames-B-6LArsQ.js";import{B as g}from"./Button-Bwvf9chr.js";import"./componentbase.esm-CmqFOBMX.js";import"./button.esm-CKaW3228.js";import"./index.esm-ZnzG-bZe.js";import"./iconbase.esm-BQbvzF6M.js";import"./ripple.esm-BKAtRWv4.js";import"./tooltip.esm-3SGCDnos.js";import"./portal.esm-C38zexph.js";import"./index-CA-MFgIQ.js";import"./csstransition.esm-DSVPP7-p.js";import"./setPrototypeOf-SZTCiYDs.js";import"./overlayservice.esm-Bs04rCCA.js";import"./Spinner-mwCuaLRH.js";const o=n=>{const{className:t,prefixCls:s="confirm-popup",...a}=n,c=d(s);return r.jsx(f,{...a,className:c(void 0,t)})};u.memo(o);o.__docgenInfo={description:"",methods:[],displayName:"ConfirmPopup",props:{className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["PrimeConfirmPopupProps"]};const D={title:"Components/ConfirmPopup",component:o,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"confirmpopup"},tags:["autodocs"]},e={args:{prefixCls:"confirm-popup"},render:function(t){return r.jsxs(r.Fragment,{children:[r.jsx(o,{...t}),r.jsx(g,{severity:"danger",onClick:s=>l({target:s.currentTarget,message:"Are you sure you want to delete this item?"}),children:"Delete"})]})}};var p,i,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const F=["Primary"];export{e as Primary,F as __namedExportsOrder,D as default};
