import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as f}from"./index-RYns6xqu.js";import{P as p}from"./index-rNTiGNI1.js";import{C as l,c as d}from"./confirmpopup.esm-Bi2dcG0G.js";import{c as g}from"./classnames-JHuVH38I.js";import{B as x}from"./Button-d9HgxqxB.js";import"./componentbase.esm-B7DzLYm2.js";import"./button.esm-CuMgQ_1Q.js";import"./index.esm-U-Gagxqn.js";import"./iconbase.esm-Blfjos1e.js";import"./ripple.esm-j0qNbFto.js";import"./tooltip.esm-0CL_VH-f.js";import"./portal.esm-Dlp_nAuE.js";import"./index-D16Yfzz8.js";import"./csstransition.esm-DUlXYj3O.js";import"./inheritsLoose-Co2FXOuK.js";import"./overlayservice.esm-Cz0Vn5vT.js";import"./Loading-BZ7CYQkq.js";const e=n=>{const{className:t,prefixCls:s="confirm-popup",...c}=n,u=g(s);return r.jsx(l,{...c,className:u(void 0,t)})};e.propTypes={className:p.string,prefixCls:p.string};f.memo(e);e.__docgenInfo={description:"",methods:[],displayName:"ConfirmPopup",props:{className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},prefixCls:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}},composes:["PrimeConfirmPopupProps"]};const I={title:"Components/ConfirmPopup",component:e,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"confirmpopup"},tags:["autodocs"]},o={args:{prefixCls:"confirm-popup"},render:function(t){return r.jsxs(r.Fragment,{children:[r.jsx(e,{...t}),r.jsx(x,{severity:"danger",onClick:s=>d({target:s.currentTarget,message:"Are you sure you want to delete this item?"}),children:"Delete"})]})}};var i,m,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const O=["Primary"];export{o as Primary,O as __namedExportsOrder,I as default};
