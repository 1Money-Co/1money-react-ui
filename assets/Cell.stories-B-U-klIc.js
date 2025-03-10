import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as y}from"./index-Ca8FO3x4.js";import{c as E}from"./classnames-B-6LArsQ.js";import{I as t}from"./Icons-DNs9i2Py.js";import{T as h}from"./Typography-CfdFmwPW.js";const c=r=>{const{prefixCls:m="cell",className:p="",active:v=!1,disabled:f=!1,prefixIcon:n="systemSecurity",title:x="Authenticator",suffixIcon:s="arrowRight",...g}=r,l=E(m);return e.jsxs("div",{className:l(void 0,[v?l("active"):"",f?l("disabled"):"",p].join(" ")),...g,children:[e.jsxs("div",{className:l("inner"),children:[typeof n=="string"?e.jsx(t,{name:n}):n,e.jsx(h.Title,{size:"l",children:x})]}),typeof s=="string"?e.jsx(t,{name:s}):s]})},a=y.memo(c);c.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{prefixCls:{required:!1,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixIcon:{required:!1,tsType:{name:"union",raw:"IconName | ReactNode",elements:[{name:"union",raw:`| 'illusChecked'
| 'illusEmailError'
| 'illusLinkExpired'
| 'illus2FA'
| 'illusLocked'
| 'illusError'
| 'illusRegoinNotSupported'
| 'illusIDCard'
| 'illusVerification'
| 'logo'
// 添加其他图标名称...
| 'copy'`,elements:[{name:"literal",value:"'illusChecked'"},{name:"literal",value:"'illusEmailError'"},{name:"literal",value:"'illusLinkExpired'"},{name:"literal",value:"'illus2FA'"},{name:"literal",value:"'illusLocked'"},{name:"literal",value:"'illusError'"},{name:"literal",value:"'illusRegoinNotSupported'"},{name:"literal",value:"'illusIDCard'"},{name:"literal",value:"'illusVerification'"},{name:"literal",value:"'logo'"},{name:"literal",value:"'copy'"}]},{name:"ReactNode"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},suffixIcon:{required:!1,tsType:{name:"union",raw:"IconName | ReactNode",elements:[{name:"union",raw:`| 'illusChecked'
| 'illusEmailError'
| 'illusLinkExpired'
| 'illus2FA'
| 'illusLocked'
| 'illusError'
| 'illusRegoinNotSupported'
| 'illusIDCard'
| 'illusVerification'
| 'logo'
// 添加其他图标名称...
| 'copy'`,elements:[{name:"literal",value:"'illusChecked'"},{name:"literal",value:"'illusEmailError'"},{name:"literal",value:"'illusLinkExpired'"},{name:"literal",value:"'illus2FA'"},{name:"literal",value:"'illusLocked'"},{name:"literal",value:"'illusError'"},{name:"literal",value:"'illusRegoinNotSupported'"},{name:"literal",value:"'illusIDCard'"},{name:"literal",value:"'illusVerification'"},{name:"literal",value:"'logo'"},{name:"literal",value:"'copy'"}]},{name:"ReactNode"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLDivElement"}],raw:"MouseEvent<HTMLDivElement>"},name:"e"}],return:{name:"void"}}},description:""}}};const b={title:"Components/Cell",component:a,argTypes:{active:{control:"boolean"},disabled:{control:"boolean"}},args:{active:!1,disabled:!1},tags:["autodocs"]},i={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:50,width:"340px"},children:[e.jsxs("div",{children:[e.jsx("span",{children:"Default"}),e.jsx(a,{})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Active"}),e.jsx(a,{active:!0})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Disabled"}),e.jsx(a,{disabled:!0})]})]})};var o,u,d;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 50,
      width: '340px'
    }}>
      <div>
        <span>Default</span>
        <Cell />
      </div>
      <div>
        <span>Active</span>
        <Cell active />
      </div>
      <div>
        <span>Disabled</span>
        <Cell disabled />
      </div>
    </div>;
  }
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const k=["Default"];export{i as Default,k as __namedExportsOrder,b as default};
