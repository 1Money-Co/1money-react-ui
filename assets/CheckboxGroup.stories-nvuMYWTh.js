import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as I}from"./index-DCiaR2iG.js";import{C as j}from"./CheckboxGroup-DA6g4Co0.js";import"./index-CP2yOfOm.js";import"./tristatecheckbox.esm-CL4rYneK.js";import"./componentbase.esm-4JClMOy3.js";import"./index.esm-DKy0vDUU.js";import"./iconbase.esm-CgcK1F5D.js";import"./tooltip.esm-DWjguKwN.js";import"./portal.esm-DsCazcPz.js";import"./index-BOAxdYzW.js";import"./index.esm-ByOqZbnP.js";import"./classnames-LtG3MjBp.js";import"./index-DDPZYAIC.js";import"./index-C1tUctxz.js";const Y={title:"Components/CheckboxGroup",component:j,argTypes:{wrapperCls:{control:"text"},innerCls:{control:"text"},checkboxGroupCls:{control:"text"},prefixCls:{control:"text"},size:{control:"radio",options:["sm","md","lg"]}},args:{prefixCls:"checkbox",onChange:I()},tags:["autodocs"]},a={args:{items:[{name:"Agree",key:"Agree",label:e.jsxs(e.Fragment,{children:["I am over 18 years old and I have read, understand and agree to the",e.jsx("a",{href:"https://github.com/1Money-Co",children:"1Money Terms of Use"}),", ",e.jsx("a",{href:"https://github.com/1Money-Co",children:"Privacy Policy"}),"."]})}],prefixCls:"checkboxgroup"},tags:["!autodocs","dev"]},n={args:{items:[{name:"NoLabel",key:"NoLabel"}],prefixCls:"checkboxgroup"}},r={args:{tristate:!0,items:[{name:"invalid",key:"invalid",invalid:!0,label:"invalid"},{name:"checked",key:"checked",invalid:!0,label:"checked ",defaultValue:!0},{name:"notChecked",key:"notChecked",invalid:!0,label:"Not checked",defaultValue:!1}],prefixCls:"checkboxgroup"}},t={args:{size:"sm",items:[{name:"small",key:"small",label:"small"}],prefixCls:"checkboxgroup"}},s={args:{tristate:!0,items:[{name:"disabled",key:"disabled",label:"Empty value",disabled:!0},{name:"Achecked",key:"Achecked",label:"Checked ",disabled:!0,defaultValue:!0},{name:"BnotChecked",key:"BnotChecked",label:"Not checked ",disabled:!0,defaultValue:!1}],prefixCls:"checkboxgroup"}},o={args:{tristate:!0,items:[{name:"State",key:"Status",label:"Change State"}],prefixCls:"checkboxgroup"}},l={args:{items:[{name:"C",key:"Cheese",label:"Cheese"},{name:"M",key:"Mushroom",label:"Mushroom",defaultChecked:!0},{name:"P",key:"Pepper",label:"Pepper"},{name:"O",key:"Onion",label:"Onion"}],prefixCls:"checkboxgroup"}},c={args:{tristate:!0,size:"lg",items:[{name:"A",key:"Audi",label:"Audi"},{name:"B",key:"BWM",label:"BWM"},{name:"B",key:"Benz",label:"Mercedes-Benz",defaultValue:!0},{name:"L",key:"Lexus",label:"Lexus"}],onChange(T){console.info("itemsState",T)},prefixCls:"checkboxgroup"}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: [{
      name: 'Agree',
      key: 'Agree',
      label: <>
      I am over 18 years old and I have read, understand and agree to the
      <a href='https://github.com/1Money-Co'>1Money Terms of Use</a>
      , <a href='https://github.com/1Money-Co'>Privacy Policy</a>.
      </>
    }],
    prefixCls: 'checkboxgroup'
  },
  tags: ['!autodocs', 'dev']
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,k;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: [{
      name: 'NoLabel',
      key: 'NoLabel'
    }],
    prefixCls: 'checkboxgroup'
  }
}`,...(k=(p=n.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var h,b,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tristate: true,
    items: [{
      name: 'invalid',
      key: 'invalid',
      invalid: true,
      label: 'invalid'
    }, {
      name: 'checked',
      key: 'checked',
      invalid: true,
      label: 'checked ',
      defaultValue: true
    }, {
      name: 'notChecked',
      key: 'notChecked',
      invalid: true,
      label: 'Not checked',
      defaultValue: false
    }],
    prefixCls: 'checkboxgroup'
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,C,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    items: [{
      name: 'small',
      key: 'small',
      label: 'small'
    }],
    prefixCls: 'checkboxgroup'
  }
}`,...(y=(C=t.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var f,v,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tristate: true,
    items: [{
      name: 'disabled',
      key: 'disabled',
      label: 'Empty value',
      disabled: true
    }, {
      name: 'Achecked',
      key: 'Achecked',
      label: 'Checked ',
      disabled: true,
      defaultValue: true
    }, {
      name: 'BnotChecked',
      key: 'BnotChecked',
      label: 'Not checked ',
      disabled: true,
      defaultValue: false
    }],
    prefixCls: 'checkboxgroup'
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var M,B,A;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    tristate: true,
    items: [{
      name: 'State',
      key: 'Status',
      label: 'Change State'
    }],
    prefixCls: 'checkboxgroup'
  }
}`,...(A=(B=o.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var L,z,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: [{
      name: 'C',
      key: 'Cheese',
      label: 'Cheese'
    }, {
      name: 'M',
      key: 'Mushroom',
      label: 'Mushroom',
      defaultChecked: true
    }, {
      name: 'P',
      key: 'Pepper',
      label: 'Pepper'
    }, {
      name: 'O',
      key: 'Onion',
      label: 'Onion'
    }],
    prefixCls: 'checkboxgroup'
  }
}`,...(N=(z=l.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var P,V,O;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    tristate: true,
    size: 'lg',
    items: [{
      name: 'A',
      key: 'Audi',
      label: 'Audi'
    }, {
      name: 'B',
      key: 'BWM',
      label: 'BWM'
    }, {
      name: 'B',
      key: 'Benz',
      label: 'Mercedes-Benz',
      defaultValue: true
    }, {
      name: 'L',
      key: 'Lexus',
      label: 'Lexus'
    }],
    onChange(itemsState) {
      console.info('itemsState', itemsState);
    },
    prefixCls: 'checkboxgroup'
  }
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const Z=["Single","NoLabel","Invalid","Size","Disabled","SingleTristate","Multiple","MultipleTristate"];export{s as Disabled,r as Invalid,l as Multiple,c as MultipleTristate,n as NoLabel,a as Single,o as SingleTristate,t as Size,Z as __namedExportsOrder,Y as default};
