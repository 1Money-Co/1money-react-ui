import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as C}from"./index-CP2yOfOm.js";import{f as N}from"./index-DCiaR2iG.js";import{R as a}from"./Radio-DyBNZQZN.js";import"./componentbase.esm-CXBs-FDc.js";import"./tooltip.esm-DyXttjBC.js";import"./portal.esm-D447dnBO.js";import"./index-BOAxdYzW.js";import"./classnames-lRq3rz0l.js";const T={title:"Components/Radio",component:a,argTypes:{prefixCls:{control:"text"},size:{control:"select",options:["sm","md","lg"]},label:{control:"text"}},args:{prefixCls:"radio",onChange:N()},tags:["autodocs"]},s={render:()=>{const[t,l]=C.useState("option1");return e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(a,{name:"default",label:"default",value:"option1",checked:t==="option1",onChange:()=>{l("option1")}}),e.jsx(a,{name:"default",label:"checked",value:"option2",checked:t==="option2",onChange:()=>{l("option2")}})]})}},d={render:()=>e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(a,{disabled:!0,label:"disabled"}),e.jsx(a,{disabled:!0,checked:!0,label:"disabled checked"})]})},n={render:()=>e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(a,{invalid:!0,label:"invalid"}),e.jsx(a,{invalid:!0,checked:!0,label:"invalid checked"})]})},i={render:()=>e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(a,{size:"sm",label:"small"}),e.jsx(a,{size:"md",label:"medium"}),e.jsx(a,{size:"lg",label:"large"})]})},r={render:()=>{const[t,l]=C.useState("option1");return e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(a,{id:"option1",value:"option1",checked:t==="option1",onChange:o=>l(o.value),label:"option1"}),e.jsx(a,{id:"option2",value:"option2",checked:t==="option2",onChange:o=>l(o.value),label:"option2"}),e.jsx(a,{id:"option3",value:"option3",checked:t==="option3",onChange:o=>l(o.value),label:"option3"}),e.jsxs("div",{className:"tw-mt-4",children:["selelcted: ",t]})]})}};var c,p,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('option1');
    return <div className="tw-flex tw-flex-col tw-gap-2">
        <Radio name="default" label="default" value="option1" checked={selected === 'option1'} onChange={() => {
        setSelected('option1');
      }} />
        <Radio name="default" label="checked" value="option2" checked={selected === 'option2'} onChange={() => {
        setSelected('option2');
      }} />
      </div>;
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,x,v;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <div className="tw-flex tw-flex-col tw-gap-2">
        <Radio disabled label="disabled" />
        <Radio disabled checked label="disabled checked" />
      </div>;
  }
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,f,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <div className="tw-flex tw-flex-col tw-gap-2">
        <Radio invalid label="invalid" />
        <Radio invalid checked label="invalid checked" />
      </div>;
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,w,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <div className="tw-flex tw-flex-col tw-gap-2">
        <Radio size="sm" label="small" />
        <Radio size="md" label="medium" />
        <Radio size="lg" label="large" />
      </div>;
  }
}`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var k,S,R;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('option1');
    return <div className="tw-flex tw-flex-col tw-gap-2">
        <Radio id="option1" value="option1" checked={selectedValue === 'option1'} onChange={e => setSelectedValue(e.value as string)} label="option1" />
        <Radio id="option2" value="option2" checked={selectedValue === 'option2'} onChange={e => setSelectedValue(e.value as string)} label="option2" />
        <Radio id="option3" value="option3" checked={selectedValue === 'option3'} onChange={e => setSelectedValue(e.value as string)} label="option3" />
        <div className="tw-mt-4">
          selelcted: {selectedValue}
        </div>
      </div>;
  }
}`,...(R=(S=r.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const q=["Default","Disabled","Invalid","Size","RadioGroup"];export{s as Default,d as Disabled,n as Invalid,r as RadioGroup,i as Size,q as __namedExportsOrder,T as default};
