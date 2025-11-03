import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./index-CP2yOfOm.js";import{f as Ce}from"./index-DCiaR2iG.js";import{T as pe,C as ge}from"./tristatecheckbox.esm-CL4rYneK.js";import{c as ke}from"./classnames-lRq3rz0l.js";import"./componentbase.esm-4JClMOy3.js";import"./index.esm-DKy0vDUU.js";import"./iconbase.esm-CgcK1F5D.js";import"./tooltip.esm-DWjguKwN.js";import"./portal.esm-DsCazcPz.js";import"./index-BOAxdYzW.js";import"./index.esm-ByOqZbnP.js";const i=e=>{const{tristate:s,onChange:a,wrapperCls:o,innerCls:c,checkboxCls:te,labelCls:T,prefixCls:ne="checkbox",size:le="md",label:v,disabled:d,required:ie,...de}=e,S=ke(ne),me=`ckb-${le}`,he=t.useMemo(()=>s?pe:ge,[s]),xe=s?void 0:e.checked,be=s?e.value:void 0,y=t.useCallback(()=>{},[s,d]),ue=t.useCallback(({children:l})=>v?r.jsxs("label",{className:T,onClick:y,children:[l,v]}):l,[v,T,y]);return r.jsx("div",{className:S("wrapper",o),children:r.jsx("div",{className:[S("inner",c),me].join(" "),children:r.jsx(ue,{children:r.jsx(he,{...de,value:be,required:ie,disabled:d,checked:xe,className:S("inner-checkbox",te),...s?{uncheckIcon:r.jsx("i",{className:"pi pi-minus"})}:{},...s?{checkIcon:r.jsx("i",{className:"pi pi-check"})}:{icon:r.jsx("i",{className:"pi pi-check"})},onChange:l=>{d||(s?a==null||a(l.value):a==null||a(!!l.checked))}})})})})};t.memo(i);i.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const we={title:"Components/Checkbox",component:i,argTypes:{wrapperCls:{control:"text"},innerCls:{control:"text"},checkboxCls:{control:"text"},prefixCls:{control:"text"},size:{control:"radio",options:["sm","md","lg"]},tristate:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"},invalid:{control:"boolean"}},args:{prefixCls:"checkbox",onChange:Ce()},tags:["autodocs"]},n=e=>{const[s,a]=t.useState(e.checked||!1);return r.jsx(i,{...e,checked:s,onChange:o=>{var c;a(o),(c=e.onChange)==null||c.call(e,o)}})},z=e=>{const[s,a]=t.useState(e.value??null);return r.jsx(i,{...e,value:s,onChange:o=>{var c;a(o),(c=e.onChange)==null||c.call(e,o)}})},m={render:e=>r.jsx(n,{...e}),args:{label:r.jsxs(r.Fragment,{children:["I am over 18 years old and I have read, understand and agree to the",r.jsx("a",{href:"https://github.com/1Money-Co",children:" 1Money Terms of Use"}),", ",r.jsx("a",{href:"https://github.com/1Money-Co",children:"Privacy Policy"}),"."]}),prefixCls:"checkbox"},tags:["!autodocs","dev"]},h={render:e=>r.jsx(n,{...e}),args:{prefixCls:"checkbox"}},x={render:e=>r.jsx(n,{...e}),args:{label:"Checked",checked:!0,prefixCls:"checkbox"}},b={render:e=>r.jsx(z,{...e}),args:{tristate:!0,invalid:!0,label:"Invalid",prefixCls:"checkbox"}},u={render:e=>r.jsx(n,{...e}),args:{size:"sm",label:"Small size",prefixCls:"checkbox"}},C={render:e=>r.jsx(n,{...e}),args:{size:"md",label:"Medium size",prefixCls:"checkbox"}},p={render:e=>r.jsx(n,{...e}),args:{size:"lg",label:"Large size",prefixCls:"checkbox"}},g={args:{label:"Disabled",disabled:!0,checked:!1,prefixCls:"checkbox"}},k={args:{label:"Disabled & Checked",disabled:!0,checked:!0,prefixCls:"checkbox"}},f={render:e=>r.jsx(z,{...e}),args:{tristate:!0,label:"Change State",prefixCls:"checkbox"}},j={render:e=>r.jsx(z,{...e}),args:{tristate:!0,label:"Tristate with initial true",value:!0,prefixCls:"checkbox",onChange(e){console.info("state",e)}}};var I,M,N;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=(M=m.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var D,L,w;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    prefixCls: 'checkbox'
  }
}`,...(w=(L=h.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var P,_,B;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    label: 'Checked',
    checked: true,
    prefixCls: 'checkbox'
  }
}`,...(B=(_=x.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var E,q,U;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <ControlledTristateCheckbox {...args} />,
  args: {
    tristate: true,
    invalid: true,
    label: 'Invalid',
    prefixCls: 'checkbox'
  }
}`,...(U=(q=b.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var $,F,O;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    size: 'sm',
    label: 'Small size',
    prefixCls: 'checkbox'
  }
}`,...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var R,W,A;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    size: 'md',
    label: 'Medium size',
    prefixCls: 'checkbox'
  }
}`,...(A=(W=C.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    size: 'lg',
    label: 'Large size',
    prefixCls: 'checkbox'
  }
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,V;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true,
    checked: false,
    prefixCls: 'checkbox'
  }
}`,...(V=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & Checked',
    disabled: true,
    checked: true,
    prefixCls: 'checkbox'
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,se;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <ControlledTristateCheckbox {...args} />,
  args: {
    tristate: true,
    label: 'Change State',
    prefixCls: 'checkbox'
  }
}`,...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,oe,ce;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ce=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};const Pe=["Basic","NoLabel","Checked","Invalid","Small","Medium","Large","Disabled","DisabledChecked","Tristate","TristateChecked"];export{m as Basic,x as Checked,g as Disabled,k as DisabledChecked,b as Invalid,p as Large,C as Medium,h as NoLabel,u as Small,f as Tristate,j as TristateChecked,Pe as __namedExportsOrder,we as default};
