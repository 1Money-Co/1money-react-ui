import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as $}from"./index-DCiaR2iG.js";import{r as y}from"./index-CP2yOfOm.js";import{P as h}from"./progressbar.esm-qSEkcxyU.js";import{c as v}from"./classnames-lRq3rz0l.js";import"./componentbase.esm-DE4kFom5.js";const i=E=>{const{children:t,wrapperCls:u,className:c,prefixCls:b="progress",type:p="ring",value:a=0,trailColor:n,fillColor:m,...r}=E,l=v(b);return e.jsxs("div",{className:l(void 0,u),children:[p==="ring"&&e.jsx("div",{className:l("ring",c),style:{width:(r==null?void 0:r.size)??106,height:(r==null?void 0:r.size)??106,"--progress":`${a}%`,"--last":`calc(100% - ${a}%)`,"--size":`${(r==null?void 0:r.size)??106}px`,"--stroke":`${(r==null?void 0:r.stroke)??6}px`,"--bg-color":`${(r==null?void 0:r.bgColor)??"#FAFAFC"}`,"--trail-color":`${n??"#E0E2EE"}`,"--fill-color":`${m??"#3D73F2"}`},children:t}),p==="bar"&&e.jsx(h,{value:a,className:l("bar",c),style:{"--trail-color":`${n??"#E0E2EE"}`,"--fill-color":`${m??"#3D73F2"}`,"--label-color":`${(r==null?void 0:r.labelColor)??"#FFFFFF"}`},...r,children:t})]})};y.memo(i);i.__docgenInfo={description:"",methods:[],displayName:"Progress"};const P={title:"Components/Progress",component:i,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"progress",onClick:$()},tags:["autodocs"]},s={args:{prefixCls:"progress",value:"33.5",size:120,stroke:10,bgColor:"#FAFAFC",fillColor:"#3D73F2",trailColor:"#E0E2EE",children:e.jsx("i",{className:"pi pi-sign-in",style:{fontSize:"36px",color:"#3D73F2"}})}},o={args:{prefixCls:"progress",type:"bar",value:"12.6"}};var g,f,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var d,x,F;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    prefixCls: 'progress',
    type: 'bar',
    value: '12.6'
  }
}`,...(F=(x=o.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const S=["Ring","Bar"];export{o as Bar,s as Ring,S as __namedExportsOrder,P as default};
