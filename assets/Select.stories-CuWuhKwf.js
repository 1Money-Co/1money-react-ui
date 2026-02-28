import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as s}from"./Select-C3ukMNKu.js";import{a as y}from"./Icons-DVar4d28.js";/* empty css              */import"./index-CP2yOfOm.js";import"./index-CfaLkjk1.js";import"./dropdown.esm-BQwt4-hA.js";import"./componentbase.esm-4JClMOy3.js";import"./index.esm-BVDwUpqK.js";import"./iconbase.esm-CgcK1F5D.js";import"./index.esm-DfFybxTV.js";import"./index.esm-0rHaTxuV.js";import"./index.esm-ByOqZbnP.js";import"./overlayservice.esm-BSzR65vr.js";import"./tooltip.esm-DWjguKwN.js";import"./portal.esm-DsCazcPz.js";import"./index-BOAxdYzW.js";import"./csstransition.esm-B5iK3TG5.js";import"./virtualscroller.esm-DmfrueHw.js";import"./ripple.esm-B4ep2fnx.js";import"./index.esm-DKy0vDUU.js";import"./index.esm-BUPvvfCY.js";import"./inputtext.esm-0bAv0U1B.js";import"./skeleton.esm-DbdIoiO6.js";import"./classnames-LtG3MjBp.js";import"./index-DDPZYAIC.js";import"./index-CERujqML.js";import"./index-BT0BDQbR.js";import"./Spinner-CEQHadij.js";const oe={title:"Components/Select",component:s,argTypes:{appendTo:{control:"radio",options:[null,"self"]},size:{control:"radio",options:["large","small"]},disabled:{control:"boolean"},loading:{control:"boolean"},success:{control:"boolean"},invalid:{control:"boolean"},filter:{control:"boolean"},message:{control:"text"},unselectable:{control:"radio",options:["on","off"]}},args:{size:"large",filter:!0,disabled:!1,loading:!1,success:!1,invalid:!1,required:!1},tags:["autodocs"]},t=[{label:"New York",value:"NY"},{label:"Rome",value:"RM"},{label:"Administrative and Support and waste Management and remediation services",value:"TT"},{label:"London",value:"LDN"},{label:"Istanbul",value:"IST"},{label:"Paris",value:"PRS"},{label:"Beijing",value:"BJ"},{label:"Shanghai",value:"SH"},{label:"Tokyo",value:"TK"},{label:"Seoul",value:"SE"}],r={render:o=>e.jsxs("div",{style:{width:320},children:[e.jsx(s,{...o,options:t,appendTo:"self"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(s,{...o,options:t})]}),args:{placeholder:"Select City",label:"Cities"},tags:["!autodocs","dev"]},l={render:o=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{...o})}),args:{placeholder:"Select City",defaultValue:"IST",label:"Cities",message:"Please select a city",options:t,required:!0,showClear:!1,unselectable:"on"},tags:["!autodocs","dev"]},a={render:o=>e.jsx("div",{style:{width:"360px"},children:e.jsx(s,{...o})}),args:{placeholder:"Select Cities",multiple:!0,filter:!0,options:t,display:"chip",label:"Multiple Cities",defaultValue:[]}},n={args:{placeholder:"Custom Selected"},render:o=>e.jsxs(e.Fragment,{children:[e.jsx(s.CustomDropdown,{label:"Custom Dropdown",...o}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(s.CustomDropdown,{dataId:"custom-dropdown-id",label:"Custom Dropdown with Tail",...o,tailTemplate:d=>e.jsx(y,{name:"addressBook",size:20}),onFocus:()=>console.info("Custom Dropdown with Tail - focus"),onBlur:()=>console.info("Custom Dropdown with Tail - blur")}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{"data-select-custom-dropdown-id":"custom-dropdown-id",style:{cursor:"pointer",padding:"8px",color:"#1F5800",border:"1px solid #1F5800",borderRadius:"8px"},children:"Click me with dataId will not blur the dropdown(second)"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(s.CustomDropdown,{label:"Editable",editable:!0,...o})]})},i={args:{placeholder:"Select Cities",options:t,label:"CustomItemTemplate",defaultValue:[]},tags:["!autodocs","dev"],render:o=>e.jsx("div",{style:{width:"360px"},children:e.jsx(s,{...o,itemTemplate:d=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{children:"xxx  "}),e.jsx("span",{children:d.label})]})})})};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <div style={{
    width: 320
  }}>
    <Select {...props} options={cities} appendTo="self" />
    <br />
    <br />
    <br />
    <Select {...props} options={cities} />
  </div>,
  args: {
    placeholder: 'Select City',
    label: 'Cities'
  },
  tags: ['!autodocs', 'dev']
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,b,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <div style={{
    width: '320px'
  }}>
    <Select {...props} />
  </div>,
  args: {
    placeholder: 'Select City',
    defaultValue: 'IST',
    label: 'Cities',
    message: 'Please select a city',
    options: cities,
    required: true,
    showClear: false,
    unselectable: 'on'
  },
  tags: ['!autodocs', 'dev']
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,h,C;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <div style={{
    width: '360px'
  }}>
    <Select {...props} />
  </div>,
  args: {
    placeholder: 'Select Cities',
    multiple: true,
    filter: true,
    options: cities,
    display: 'chip',
    label: 'Multiple Cities',
    defaultValue: []
  }
}`,...(C=(h=a.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var g,S,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Custom Selected'
  },
  render: props => <>
    <Select.CustomDropdown label='Custom Dropdown' {...props as CustomDropdownProps} />
    <br />
    <br />
    <Select.CustomDropdown dataId='custom-dropdown-id' label='Custom Dropdown with Tail' {...props as CustomDropdownProps} tailTemplate={isFocus => <Icons name='addressBook' size={20} />} onFocus={() => console.info('Custom Dropdown with Tail - focus')} onBlur={() => console.info('Custom Dropdown with Tail - blur')} />
    <br />
    <br />
    <h3 data-select-custom-dropdown-id='custom-dropdown-id' style={{
      cursor: 'pointer',
      padding: '8px',
      color: '#1F5800',
      border: '1px solid #1F5800',
      borderRadius: '8px'
    }}>
      Click me with dataId will not blur the dropdown(second)
    </h3>
    <br />
    <br />
    <Select.CustomDropdown label='Editable' editable {...props as CustomDropdownProps} />
  </>
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var f,j,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select Cities',
    options: cities,
    label: 'CustomItemTemplate',
    defaultValue: []
  },
  tags: ['!autodocs', 'dev'],
  render: props => <div style={{
    width: '360px'
  }}>
    <Select {...props} itemTemplate={option => <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
      <span>xxx  </span>
      <span>{option.label}</span>
    </div>} />
  </div>
}`,...(T=(j=i.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const se=["Test","Single","Multiple","CustomDropdown","CustomItemTemplate"];export{n as CustomDropdown,i as CustomItemTemplate,a as Multiple,l as Single,r as Test,se as __namedExportsOrder,oe as default};
