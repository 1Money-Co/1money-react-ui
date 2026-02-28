import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as R}from"./index-CP2yOfOm.js";import{a as r}from"./Icons-DVar4d28.js";import{T as n}from"./Typography-BgvqIFCt.js";import{c as Q,j as U}from"./classnames-LtG3MjBp.js";import{B as m}from"./Button-BnJcnm8i.js";/* empty css               *//* empty css              *//* empty css                   */import"./button.esm-P8t-Ut6N.js";import"./componentbase.esm-4JClMOy3.js";import"./index.esm-0rHaTxuV.js";import"./iconbase.esm-CgcK1F5D.js";import"./ripple.esm-B4ep2fnx.js";import"./tooltip.esm-DWjguKwN.js";import"./portal.esm-DsCazcPz.js";import"./index-BOAxdYzW.js";import"./Spinner-CEQHadij.js";const V={success:{name:"check",color:"#1F5800"},info:{name:"info",color:"#073387"},warn:{name:"exclamation",color:"#DB8600"},error:{name:"cross",color:"#AE0000"}},u=_=>{const{children:P,className:W,severity:d="info",onClick:A,prefixCls:F="notification",title:y,description:O,link:i,action:f,closable:x=!1,onClose:G,showIcon:J=!0,...K}=_,s=Q(F),b=R.useMemo(()=>V[d],[d]),g=O??P;return e.jsxs("div",{...K,className:s(void 0,U(s(d),W)),onClick:A,children:[e.jsxs("div",{className:s("left"),children:[J&&e.jsx("span",{className:s("icon"),"aria-hidden":!0,children:e.jsx(r,{name:b.name,color:b.color,size:18})}),e.jsxs("div",{className:s("content"),children:[y&&e.jsx(n.Title,{bold:!0,size:"s",className:s("title"),children:y}),g&&e.jsx(n.Body,{size:"m",className:s("body"),children:g}),(i==null?void 0:i.label)&&e.jsx(n.Link,{size:"m",className:s("link"),href:i.href,target:i.target,rel:i.rel,onClick:i.onClick,role:i.href?void 0:"button",children:i.label})]})]}),(f||x)&&e.jsxs("div",{className:s("right"),children:[f&&e.jsx("div",{className:s("action"),children:f}),x&&e.jsx("button",{type:"button",className:s("close"),"aria-label":"Close notification",onClick:G,children:e.jsx(r,{name:"close",size:16,color:"#646465"})})]})]})};R.memo(u);u.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},severity:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warn' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warn'"},{name:"literal",value:"'error'"}]},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},link:{required:!1,tsType:{name:"NotificationLink"},description:""},action:{required:!1,tsType:{name:"ReactNode"},description:""},closable:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLDivElement"}],raw:"MouseEventHandler<HTMLDivElement>"},description:""}}};const ue={title:"Components/Notification",component:u,argTypes:{className:{control:"text"},prefixCls:{control:"text"},severity:{control:"radio",options:["success","info","warn","error"]}},args:{prefixCls:"notification"},tags:["autodocs"]},t={args:{prefixCls:"notification",severity:"warn",title:"Title",description:"Body text",link:{label:"Link"},action:e.jsxs(m,{severity:"warning",size:"small",children:[e.jsx(r,{name:"arrowLeft",size:16,color:"#131313"}),e.jsx(n.Label,{size:"s",children:"Label"})]})}},o={args:{prefixCls:"notification",severity:"success",title:"Title",description:"Body text",link:{label:"Link"},closable:!0}},a={args:{prefixCls:"notification",severity:"info",title:"Title",description:"Body text",link:{label:"Link"},closable:!0}},l={args:{prefixCls:"notification",severity:"warn",title:"Title",description:"Body text",link:{label:"Link"},action:e.jsxs(m,{severity:"warning",size:"small",children:[e.jsx(r,{name:"arrowLeft",size:16}),e.jsx(n.Label,{size:"s",children:"Label"})]})}},c={args:{prefixCls:"notification",severity:"error",title:"Title",description:"Body text",link:{label:"Link"},action:e.jsxs(m,{severity:"danger-light",size:"small",children:[e.jsx(r,{name:"arrowLeft",size:16}),e.jsx(n.Label,{size:"s",children:"Label"})]})}},p={args:{prefixCls:"notification",severity:"error",title:"Title",description:"Body text ",link:{label:"Link"},action:e.jsxs(m,{severity:"danger-light",size:"small",children:[e.jsx(r,{name:"arrowLeft",size:16}),e.jsx(n.Label,{size:"s",children:"Label"})]}),closable:!0}};var L,h,v;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    prefixCls: 'notification',
    severity: 'warn',
    title: 'Title',
    description: 'Body text',
    link: {
      label: 'Link'
    },
    action: <Button severity='warning' size='small'>
        <Icons name='arrowLeft' size={16} color='#131313' />
        <Typography.Label size='s'>Label</Typography.Label>
      </Button>
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var T,k,z;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    prefixCls: 'notification',
    severity: 'success',
    title: 'Title',
    description: 'Body text',
    link: {
      label: 'Link'
    },
    closable: true
  }
}`,...(z=(k=o.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var C,j,B;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    prefixCls: 'notification',
    severity: 'info',
    title: 'Title',
    description: 'Body text',
    link: {
      label: 'Link'
    },
    closable: true
  }
}`,...(B=(j=a.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var w,N,E;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    prefixCls: 'notification',
    severity: 'warn',
    title: 'Title',
    description: 'Body text',
    link: {
      label: 'Link'
    },
    action: <Button severity='warning' size='small'>
        <Icons name='arrowLeft' size={16} />
        <Typography.Label size='s'>Label</Typography.Label>
      </Button>
  }
}`,...(E=(N=l.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var q,I,M;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    prefixCls: 'notification',
    severity: 'error',
    title: 'Title',
    description: 'Body text',
    link: {
      label: 'Link'
    },
    action: <Button severity='danger-light' size='small'>
        <Icons name='arrowLeft' size={16} />
        <Typography.Label size='s'>Label</Typography.Label>
      </Button>
  }
}`,...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var S,H,D;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    prefixCls: 'notification',
    severity: 'error',
    title: 'Title',
    description: 'Body text ',
    link: {
      label: 'Link'
    },
    action: <Button severity='danger-light' size='small'>
        <Icons name='arrowLeft' size={16} />
        <Typography.Label size='s'>Label</Typography.Label>
      </Button>,
    closable: true
  }
}`,...(D=(H=p.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};const ye=["Primary","Success","Info","Warn","Error","Closable"];export{p as Closable,c as Error,a as Info,t as Primary,o as Success,l as Warn,ye as __namedExportsOrder,ue as default};
