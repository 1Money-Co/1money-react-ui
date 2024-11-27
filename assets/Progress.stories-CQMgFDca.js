import{j as e}from"./jsx-runtime-DEdD30eg.js";import{f as N}from"./index-CERzeK2C.js";import{r as $}from"./index-RYns6xqu.js";import{P as g}from"./index-rNTiGNI1.js";import{P as h}from"./progressbar.esm-C_lQmAz6.js";import{c as v}from"./classnames-JHuVH38I.js";import"./index-DZLKizrv.js";import"./componentbase.esm-B7DzLYm2.js";const a=u=>{const{children:p,wrapperCls:y,className:t,prefixCls:b="progress",type:c="ring",value:l=0,trailColor:n,fillColor:m,...r}=u,i=v(b);return e.jsxs("div",{className:i(void 0,y),children:[c==="ring"&&e.jsx("div",{className:i("ring",t),style:{width:(r==null?void 0:r.size)??106,height:(r==null?void 0:r.size)??106,"--progress":`${l}%`,"--last":`calc(100% - ${l}%)`,"--size":`${(r==null?void 0:r.size)??106}px`,"--stroke":`${(r==null?void 0:r.stroke)??6}px`,"--bg-color":`${(r==null?void 0:r.bgColor)??"#FAFAFC"}`,"--trail-color":`${n??"#E0E2EE"}`,"--fill-color":`${m??"#3D73F2"}`},children:p}),c==="bar"&&e.jsx(h,{value:l,className:i("bar",t),style:{"--trail-color":`${n??"#E0E2EE"}`,"--fill-color":`${m??"#3D73F2"}`,"--label-color":`${(r==null?void 0:r.labelColor)??"#FFFFFF"}`},...r,children:p})]})};a.propTypes={className:g.string,prefixCls:g.string};$.memo(a);a.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{className:{description:"",type:{name:"string"},required:!1},prefixCls:{description:"",type:{name:"string"},required:!1}}};const B={title:"Components/Progress",component:a,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"progress",onClick:N()},tags:["autodocs"]},s={args:{prefixCls:"progress",value:"33.5",size:120,stroke:10,bgColor:"#FAFAFC",fillColor:"#3D73F2",trailColor:"#E0E2EE",children:e.jsx("i",{className:"pi pi-sign-in",style:{fontSize:"36px",color:"#3D73F2"}})}},o={args:{prefixCls:"progress",type:"bar",value:"12.6"}};var f,d,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    prefixCls: 'progress',
    value: '33.5',
    size: 120,
    stroke: 10,
    bgColor: '#FAFAFC',
    fillColor: '#3D73F2',
    trailColor: '#E0E2EE',
    children: <i className="pi pi-sign-in" style={{
      fontSize: '36px',
      color: '#3D73F2'
    }} />
  }
}`,...(C=(d=s.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};var x,F,E;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    prefixCls: 'progress',
    type: 'bar',
    value: '12.6'
  }
}`,...(E=(F=o.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const R=["Ring","Bar"];export{o as Bar,s as Ring,R as __namedExportsOrder,B as default};
