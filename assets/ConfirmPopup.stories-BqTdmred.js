import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-DGOumNSj.js";import{C as f,c as l}from"./confirmpopup.esm-D9-3GNj6.js";import{c as d}from"./classnames-CPOy7I0U.js";import{B as g}from"./Button-C8AEZiS1.js";import"./componentbase.esm-BdcVyoov.js";import"./button.esm-VjJyv5J4.js";import"./index.esm-hCcRpTLE.js";import"./iconbase.esm-Dw9HLwNj.js";import"./ripple.esm-D6Nhrw2g.js";import"./tooltip.esm-DhDZOP2a.js";import"./portal.esm-sGRjpPF9.js";import"./index-BmTs--ql.js";import"./csstransition.esm-DBYBBX3C.js";import"./overlayservice.esm-CWc7_5ds.js";import"./Spinner-vRPLJ-m1.js";const o=n=>{const{className:t,prefixCls:s="confirm-popup",...a}=n,c=d(s);return r.jsx(f,{...a,className:c(void 0,t)})};u.memo(o);o.__docgenInfo={description:"",methods:[],displayName:"ConfirmPopup",props:{className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["PrimeConfirmPopupProps"]};const A={title:"Components/ConfirmPopup",component:o,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"confirmpopup"},tags:["autodocs"]},e={args:{prefixCls:"confirm-popup"},render:function(t){return r.jsxs(r.Fragment,{children:[r.jsx(o,{...t}),r.jsx(g,{severity:"danger",onClick:s=>l({target:s.currentTarget,message:"Are you sure you want to delete this item?"}),children:"Delete"})]})}};var p,i,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
