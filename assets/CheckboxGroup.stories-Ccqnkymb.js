import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{f as pe}from"./index-DCiaR2iG.js";import{r as t}from"./index-CP2yOfOm.js";import{T as ke,C as he}from"./tristatecheckbox.esm-CL4rYneK.js";import{c as be}from"./classnames-lRq3rz0l.js";import"./componentbase.esm-4JClMOy3.js";import"./index.esm-DKy0vDUU.js";import"./iconbase.esm-CgcK1F5D.js";import"./tooltip.esm-DWjguKwN.js";import"./portal.esm-DsCazcPz.js";import"./index-BOAxdYzW.js";import"./index.esm-ByOqZbnP.js";const v=g=>{const{tristate:n,items:l=[],onChange:o,wrapperCls:X,innerCls:Y,checkboxGroupCls:Z,labelCls:S,prefixCls:ee="checkboxgroup",size:ae="md"}=g,x=be(ee),ne=`ckbg-${ae}`,se=t.useMemo(()=>n?ke:he,[n]),re=t.useMemo(()=>l.filter(e=>!!e.autoFocus).map(e=>e.key),[l]),[C,te]=t.useState(re),[M,le]=t.useState(Object.assign({},...l.map(e=>({[e.key]:e.defaultValue??null})))),oe=t.useCallback(e=>{let a;n?(a={...M},a[e.target.id]=e.value,le(a)):(a=[...C],e.checked?a.push(e.value):a.splice(a.indexOf(e.value),1),te(a)),o==null||o(a)},[o,n,M,C]);return s.jsx("div",{className:x("wrapper",X),children:l.map(e=>{const{key:a,required:ce,disabled:c,defaultValue:ie=null,label:f,onChange:y,...ue}=e,[me,N]=t.useState(ie),B=t.useCallback(()=>{!n||c||N(r=>r===null?!0:r===!0?!1:null)},[n,c]),de=t.useCallback(({children:r})=>f?s.jsxs("label",{className:S,onClick:B,children:[r,f]}):r,[f,S,B]);return s.jsx("div",{className:[x("inner",Y),ne].join(" "),children:s.jsx(de,{children:s.jsx(se,{...ue,id:n?a:void 0,value:n?me:a,required:ce,disabled:c,checked:n?void 0:C.includes(a),className:x("inner-checkbox",Z),...n?{uncheckIcon:s.jsx("i",{className:"pi pi-minus"})}:{},...n?{checkIcon:s.jsx("i",{className:"pi pi-check"})}:{icon:s.jsx("i",{className:"pi pi-check"})},onChange:r=>{c||(n&&N(r.value),y==null||y(n?r.value:!!r.checked),oe(r))}})})},a)})})};t.memo(v);v.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup"};const Le={title:"Components/CheckboxGroup",component:v,argTypes:{wrapperCls:{control:"text"},innerCls:{control:"text"},checkboxGroupCls:{control:"text"},prefixCls:{control:"text"},size:{control:"radio",options:["sm","md","lg"]}},args:{prefixCls:"checkbox",onChange:pe()},tags:["autodocs"]},i={args:{items:[{name:"Agree",key:"Agree",label:s.jsxs(s.Fragment,{children:["I am over 18 years old and I have read, understand and agree to the",s.jsx("a",{href:"https://github.com/1Money-Co",children:"1Money Terms of Use"}),", ",s.jsx("a",{href:"https://github.com/1Money-Co",children:"Privacy Policy"}),"."]})}],prefixCls:"checkboxgroup"},tags:["!autodocs","dev"]},u={args:{items:[{name:"NoLabel",key:"NoLabel"}],prefixCls:"checkboxgroup"}},m={args:{tristate:!0,items:[{name:"invalid",key:"invalid",invalid:!0,label:"invalid"},{name:"checked",key:"checked",invalid:!0,label:"checked ",defaultValue:!0},{name:"notChecked",key:"notChecked",invalid:!0,label:"Not checked",defaultValue:!1}],prefixCls:"checkboxgroup"}},d={args:{size:"sm",items:[{name:"small",key:"small",label:"small"}],prefixCls:"checkboxgroup"}},p={args:{tristate:!0,items:[{name:"disabled",key:"disabled",label:"Empty value",disabled:!0},{name:"Achecked",key:"Achecked",label:"Checked ",disabled:!0,defaultValue:!0},{name:"BnotChecked",key:"BnotChecked",label:"Not checked ",disabled:!0,defaultValue:!1}],prefixCls:"checkboxgroup"}},k={args:{tristate:!0,items:[{name:"State",key:"Status",label:"Change State"}],prefixCls:"checkboxgroup"}},h={args:{items:[{name:"C",key:"Cheese",label:"Cheese"},{name:"M",key:"Mushroom",label:"Mushroom",autoFocus:!0},{name:"P",key:"Pepper",label:"Pepper"},{name:"O",key:"Onion",label:"Onion"}],prefixCls:"checkboxgroup"}},b={args:{tristate:!0,size:"lg",items:[{name:"A",key:"Audi",label:"Audi"},{name:"B",key:"BWM",label:"BWM"},{name:"B",key:"Benz",label:"Mercedes-Benz",defaultValue:!0},{name:"L",key:"Lexus",label:"Lexus"}],onChange(g){console.info("itemsState",g)},prefixCls:"checkboxgroup"}};var j,A,L;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(L=(A=i.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var z,I,V;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: [{
      name: 'NoLabel',
      key: 'NoLabel'
    }],
    prefixCls: 'checkboxgroup'
  }
}`,...(V=(I=u.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var O,P,T;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(T=(P=m.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var E,G,W;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    items: [{
      name: 'small',
      key: 'small',
      label: 'small'
    }],
    prefixCls: 'checkboxgroup'
  }
}`,...(W=(G=d.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var _,F,w;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(w=(F=p.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var D,U,q;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    tristate: true,
    items: [{
      name: 'State',
      key: 'Status',
      label: 'Change State'
    }],
    prefixCls: 'checkboxgroup'
  }
}`,...(q=(U=k.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var R,$,H;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: [{
      name: 'C',
      key: 'Cheese',
      label: 'Cheese'
    }, {
      name: 'M',
      key: 'Mushroom',
      label: 'Mushroom',
      autoFocus: true
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
}`,...(H=($=h.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ze=["Single","NoLabel","Invalid","Size","Disabled","SingleTristate","Multiple","MultipleTristate"];export{p as Disabled,m as Invalid,h as Multiple,b as MultipleTristate,u as NoLabel,i as Single,k as SingleTristate,d as Size,ze as __namedExportsOrder,Le as default};
