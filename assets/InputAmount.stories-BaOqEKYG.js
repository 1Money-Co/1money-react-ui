import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{R as s}from"./index-CP2yOfOm.js";import{I as l}from"./InputAmount-DsAGh4d-.js";import{I as i}from"./Icons-DVar4d28.js";import{T as C}from"./Typography-BgvqIFCt.js";/* empty css              *//* empty css                   */import"./skeleton.esm-DbdIoiO6.js";import"./componentbase.esm-4JClMOy3.js";import"./Spinner-CEQHadij.js";import"./classnames-LtG3MjBp.js";import"./index-BT0BDQbR.js";import"./index-CERujqML.js";const V={title:"Components/InputAmount",component:l,argTypes:{className:{control:"text"},prefixCls:{control:"text"},label:{control:"text"},type:{control:"radio",options:["primary","normal"]},size:{control:"radio",options:["small","large"]},disabled:{control:"boolean"},loading:{control:"boolean"},success:{control:"boolean"},invalid:{control:"boolean"},negative:{control:"boolean"},maxFractionDigits:{control:"number"}},args:{type:"primary",min:-1/0,max:1/0,disabled:!1,loading:!1,success:!1,invalid:!1,negative:!0},tags:["autodocs"]},r={args:{prefix:"$",currency:"USD",invalid:!1,maxFractionDigits:2,suffix:n.jsx("span",{style:{padding:"12px",borderRadius:"12px",backgroundColor:"#F0F0F0",color:"#131313",fontSize:"12px",cursor:"pointer"},children:"Max"}),message:n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[n.jsx(i,{name:"error",color:"inherit",size:16}),"Amount exceeds maximum. The maximum purchase amount is $10,000 USD"]}),footnote:n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer",color:"#073387"},children:[n.jsx(i,{name:"swap",color:"#073387",size:24}),n.jsx(C.Body,{size:"m",bold:!0,style:{color:"#073387"},children:"0 USDT"})]})},render:e=>{const[p,m]=s.useState(null);return n.jsx(l,{value:p,onChange:(u,c)=>{m(c)},...e})}},t={args:{prefix:n.jsx("i",{style:{backgroundColor:"#DDE6F4",borderRadius:"50%",padding:"8px",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:n.jsx(i,{name:"logo",size:20,color:"#073387"})}),type:"normal",maxFractionDigits:2,label:"Send amount",placeholder:"Enter amount",suffix:n.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#073387",cursor:"pointer"},children:"Max"}),message:n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[n.jsx(i,{name:"error",color:"inherit",size:16}),"Amount exceeds maximum. The maximum purchase amount is $10,000 USD"]})},render:e=>n.jsx(l,{...e})},a={args:{prefix:"$",currency:"USD",maxFractionDigits:2},render:e=>{const[p,m]=s.useState(null),[u,c]=s.useState("No form events yet"),[j,D]=s.useState("No input events yet");return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[n.jsx("form",{onChange:d=>{const o=d.target;c(`Form onChange triggered - target value: ${o.value}`)},children:n.jsx(l,{value:p,onChange:(d,o)=>{D(`Input onChange triggered - value: ${o}`),m(o)},...e})}),n.jsxs("div",{style:{padding:"16px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[n.jsx("div",{style:{marginBottom:"8px",fontWeight:"bold"},children:"Event Log:"}),n.jsxs("div",{style:{fontSize:"14px",marginBottom:"4px"},children:["📝 ",j]}),n.jsxs("div",{style:{fontSize:"14px"},children:["📋 ",u]})]})]})}};var g,x,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    prefix: '$',
    currency: 'USD',
    invalid: false,
    maxFractionDigits: 2,
    suffix: <span style={{
      padding: '12px',
      borderRadius: '12px',
      backgroundColor: '#F0F0F0',
      color: '#131313',
      fontSize: '12px',
      cursor: 'pointer'
    }}>Max</span>,
    message: <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px'
    }}>
      <Icons name='error' color='inherit' size={16} />
      Amount exceeds maximum. The maximum purchase amount is $10,000 USD
    </span>,
    footnote: <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      cursor: 'pointer',
      color: '#073387'
    }}>
      <Icons name='swap' color='#073387' size={24} />
      <Typography.Body size='m' bold style={{
        color: '#073387'
      }}>
        0 USDT
      </Typography.Body>
    </span>
  },
  render: props => {
    const [value, setValue] = React.useState<null | string>(null);
    return <InputAmount value={value} onChange={(_, _val) => {
      setValue(_val);
    }} {...props} />;
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,v,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    prefix: <i style={{
      backgroundColor: '#DDE6F4',
      borderRadius: '50%',
      padding: '8px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Icons name='logo' size={20} color='#073387' />
    </i>,
    type: 'normal',
    maxFractionDigits: 2,
    label: 'Send amount',
    placeholder: 'Enter amount',
    suffix: <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#073387',
      cursor: 'pointer'
    }}>Max</div>,
    message: <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px'
    }}>
      <Icons name='error' color='inherit' size={16} />
      Amount exceeds maximum. The maximum purchase amount is $10,000 USD
    </span>
  },
  render: props => {
    return <InputAmount {...props} />;
  }
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var I,S,b;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    prefix: '$',
    currency: 'USD',
    maxFractionDigits: 2
  },
  render: props => {
    const [value, setValue] = React.useState<null | string>(null);
    const [formLog, setFormLog] = React.useState<string>('No form events yet');
    const [inputLog, setInputLog] = React.useState<string>('No input events yet');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <form onChange={e => {
        const target = e.target as HTMLInputElement;
        setFormLog(\`Form onChange triggered - target value: \${target.value}\`);
      }}>
        <InputAmount value={value} onChange={(e, _val) => {
          setInputLog(\`Input onChange triggered - value: \${_val}\`);
          setValue(_val);
        }} {...props} />
      </form>
      <div style={{
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <div style={{
          marginBottom: '8px',
          fontWeight: 'bold'
        }}>Event Log:</div>
        <div style={{
          fontSize: '14px',
          marginBottom: '4px'
        }}>📝 {inputLog}</div>
        <div style={{
          fontSize: '14px'
        }}>📋 {formLog}</div>
      </div>
    </div>;
  }
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const M=["Primary","Normal","WithFormOnChange"];export{t as Normal,r as Primary,a as WithFormOnChange,M as __namedExportsOrder,V as default};
