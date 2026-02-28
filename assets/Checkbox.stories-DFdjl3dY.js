import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as $}from"./index-CP2yOfOm.js";import{f as ee}from"./index-DCiaR2iG.js";import{C as p}from"./Checkbox-4ivtXZga.js";import"./tristatecheckbox.esm-CL4rYneK.js";import"./componentbase.esm-4JClMOy3.js";import"./index.esm-DKy0vDUU.js";import"./iconbase.esm-CgcK1F5D.js";import"./tooltip.esm-DWjguKwN.js";import"./portal.esm-DsCazcPz.js";import"./index-BOAxdYzW.js";import"./index.esm-ByOqZbnP.js";import"./classnames-LtG3MjBp.js";const be={title:"Components/Checkbox",component:p,argTypes:{wrapperCls:{control:"text"},innerCls:{control:"text"},checkboxCls:{control:"text"},prefixCls:{control:"text"},size:{control:"radio",options:["sm","md","lg"]},tristate:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"},invalid:{control:"boolean"}},args:{prefixCls:"checkbox",onChange:ee()},tags:["autodocs"]},a=e=>{const[u,C]=$.useState(e.checked||!1);return r.jsx(p,{...e,checked:u,onChange:s=>{var o;C(s),(o=e.onChange)==null||o.call(e,s)}})},k=e=>{const[u,C]=$.useState(e.value??null);return r.jsx(p,{...e,value:u,onChange:s=>{var o;C(s),(o=e.onChange)==null||o.call(e,s)}})},t={render:e=>r.jsx(a,{...e}),args:{label:r.jsxs(r.Fragment,{children:["I am over 18 years old and I have read, understand and agree to the",r.jsx("a",{href:"https://github.com/1Money-Co",children:" 1Money Terms of Use"}),", ",r.jsx("a",{href:"https://github.com/1Money-Co",children:"Privacy Policy"}),"."]}),prefixCls:"checkbox"},tags:["!autodocs","dev"]},n={render:e=>r.jsx(a,{...e}),args:{prefixCls:"checkbox"}},c={render:e=>r.jsx(a,{...e}),args:{label:"Checked",checked:!0,prefixCls:"checkbox"}},l={render:e=>r.jsx(k,{...e}),args:{tristate:!0,invalid:!0,label:"Invalid",prefixCls:"checkbox"}},i={render:e=>r.jsx(a,{...e}),args:{size:"sm",label:"Small size",prefixCls:"checkbox"}},d={render:e=>r.jsx(a,{...e}),args:{size:"md",label:"Medium size",prefixCls:"checkbox"}},m={render:e=>r.jsx(a,{...e}),args:{size:"lg",label:"Large size",prefixCls:"checkbox"}},h={args:{label:"Disabled",disabled:!0,checked:!1,prefixCls:"checkbox"}},x={args:{label:"Disabled & Checked",disabled:!0,checked:!0,prefixCls:"checkbox"}},b={render:e=>r.jsx(k,{...e}),args:{tristate:!0,label:"Change State",prefixCls:"checkbox"}},g={render:e=>r.jsx(k,{...e}),args:{tristate:!0,label:"Tristate with initial true",value:!0,prefixCls:"checkbox",onChange(e){console.info("state",e)}}};var f,S,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    label: <>
      I am over 18 years old and I have read, understand and agree to the
      <a href='https://github.com/1Money-Co'> 1Money Terms of Use</a>
      , <a href='https://github.com/1Money-Co'>Privacy Policy</a>.
    </>,
    prefixCls: 'checkbox'
  },
  tags: ['!autodocs', 'dev']
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var j,y,z;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    prefixCls: 'checkbox'
  }
}`,...(z=(y=n.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var T,M,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    label: 'Checked',
    checked: true,
    prefixCls: 'checkbox'
  }
}`,...(D=(M=c.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var I,L,P;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <ControlledTristateCheckbox {...args} />,
  args: {
    tristate: true,
    invalid: true,
    label: 'Invalid',
    prefixCls: 'checkbox'
  }
}`,...(P=(L=l.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var E,w,B;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    size: 'sm',
    label: 'Small size',
    prefixCls: 'checkbox'
  }
}`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var N,U,_;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    size: 'md',
    label: 'Medium size',
    prefixCls: 'checkbox'
  }
}`,...(_=(U=d.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var q,F,O;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    size: 'lg',
    label: 'Large size',
    prefixCls: 'checkbox'
  }
}`,...(O=(F=m.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var R,A,G;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true,
    checked: false,
    prefixCls: 'checkbox'
  }
}`,...(G=(A=h.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var H,J,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & Checked',
    disabled: true,
    checked: true,
    prefixCls: 'checkbox'
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,V,W;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <ControlledTristateCheckbox {...args} />,
  args: {
    tristate: true,
    label: 'Change State',
    prefixCls: 'checkbox'
  }
}`,...(W=(V=b.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <ControlledTristateCheckbox {...args} />,
  args: {
    tristate: true,
    label: 'Tristate with initial true',
    value: true,
    prefixCls: 'checkbox',
    onChange(state) {
      console.info('state', state);
    }
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ge=["Basic","NoLabel","Checked","Invalid","Small","Medium","Large","Disabled","DisabledChecked","Tristate","TristateChecked"];export{t as Basic,c as Checked,h as Disabled,x as DisabledChecked,l as Invalid,m as Large,d as Medium,n as NoLabel,i as Small,b as Tristate,g as TristateChecked,ge as __namedExportsOrder,be as default};
