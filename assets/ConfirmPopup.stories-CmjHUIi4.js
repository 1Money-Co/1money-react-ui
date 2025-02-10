import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-DGOumNSj.js";import{c as l,p}from"./classnames-CuzQN-jt.js";import{C as d,c as g}from"./confirmpopup.esm-vETkgBnI.js";import{B as x}from"./Button-CgxpPndY.js";import"./componentbase.esm-CcTVhaot.js";import"./button.esm-Crft-G1Z.js";import"./index.esm-CB1fIbQ-.js";import"./iconbase.esm-B9JVR04N.js";import"./ripple.esm-D7U1XS2t.js";import"./tooltip.esm-B4idE_5U.js";import"./portal.esm-B5s9sLsr.js";import"./index-BmTs--ql.js";import"./csstransition.esm-CO4t0ang.js";import"./overlayservice.esm-CGvNle0C.js";import"./Loading-BwOIv5e6.js";const e=n=>{const{className:s,prefixCls:t="confirm-popup",...c}=n,u=l(t);return r.jsx(d,{...c,className:u(void 0,s)})};e.propTypes={className:p.string,prefixCls:p.string};f.memo(e);e.__docgenInfo={description:"",methods:[],displayName:"ConfirmPopup",props:{className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},prefixCls:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}},composes:["PrimeConfirmPopupProps"]};const D={title:"Components/ConfirmPopup",component:e,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"confirmpopup"},tags:["autodocs"]},o={args:{prefixCls:"confirm-popup"},render:function(s){return r.jsxs(r.Fragment,{children:[r.jsx(e,{...s}),r.jsx(x,{severity:"danger",onClick:t=>g({target:t.currentTarget,message:"Are you sure you want to delete this item?"}),children:"Delete"})]})}};var i,m,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const F=["Primary"];export{o as Primary,F as __namedExportsOrder,D as default};
