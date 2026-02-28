import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-CP2yOfOm.js";import{I as _}from"./Input-5Pr8TvsG.js";import{a as Y}from"./Icons-DVar4d28.js";/* empty css              */import"./inputtext.esm-0bAv0U1B.js";import"./componentbase.esm-4JClMOy3.js";import"./tooltip.esm-DWjguKwN.js";import"./portal.esm-DsCazcPz.js";import"./index-BOAxdYzW.js";import"./inputnumber.esm-DO3QdTJj.js";import"./iconbase.esm-CgcK1F5D.js";import"./ripple.esm-B4ep2fnx.js";import"./csstransition.esm-B5iK3TG5.js";import"./overlayservice.esm-BSzR65vr.js";import"./button.esm-P8t-Ut6N.js";import"./index.esm-0rHaTxuV.js";import"./index.esm-BVDwUpqK.js";import"./index.esm-BUPvvfCY.js";import"./virtualscroller.esm-DmfrueHw.js";import"./skeleton.esm-DbdIoiO6.js";import"./classnames-LtG3MjBp.js";import"./Spinner-CEQHadij.js";import"./index-DDPZYAIC.js";import"./index-CERujqML.js";import"./index-BT0BDQbR.js";const Me={title:"Components/Input",component:_,argTypes:{size:{control:"radio",options:["large","small"]},type:{control:"select",options:["text","number","mask","textarea","otp","password","autocomplete"]},disabled:{control:"boolean"},loading:{control:"boolean"},success:{control:"boolean"},invalid:{control:"boolean"},required:{control:"boolean"},rounded:{control:"boolean"},showMessageIcon:{control:"boolean"},message:{control:"text"},label:{control:"text"}},args:{size:"large",disabled:!1,loading:!1,success:!1,invalid:!1,required:!1},tags:["autodocs"]},r={args:{type:"text",label:"Email",prefixEle:e.jsx("h4",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:600},children:"Title"}),placeholder:"Enter your email"},tags:["!autodocs"]},s={args:{type:"text",prefixCls:"input",wrapperCls:"input-story-wrapper",labelCls:"input-story-label",messageCls:"input-story-message",label:"Account",message:"This account is verified.",required:!0,rounded:!0,size:"small",success:!0,prefixEle:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",fontWeight:600},children:"USD"}),suffixEle:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",fontWeight:600},children:"Max"}),prefixEleCls:"input-story-prefix",suffixEleCls:"input-story-suffix",showMessageIcon:!0,placeholder:"Enter amount"}},t={args:{type:"text",label:"Loading state",loading:!0,placeholder:"Loading..."}},a={args:{type:"text",label:"Email",message:"Please enter a valid email address.",showMessageIcon:!0,invalid:!0,placeholder:"you@company.com"}},n={args:{type:"number",maxFractionDigits:8,prefixEle:e.jsx("i",{style:{backgroundColor:"#DDE6F4",borderRadius:"50%",padding:"8px",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:e.jsx(Y,{name:"logo",size:20,color:"#073387"})}),suffixEle:e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#073387",cursor:"pointer"},children:"Max"})}},o={args:{type:"password",label:"password",required:!0,toggleMask:!0,autoComplete:"new-password"}},l={args:{type:"autocomplete"},render:function(B){const[G,H]=m.useState(""),[J,K]=m.useState([]),Q=u=>{K([...Array(10).keys()].map(X=>u.query+"-"+X))};return e.jsx(_,{...B,type:"autocomplete",value:G,suggestions:J,completeMethod:Q,onChange:u=>H(u.value)})}},i={args:{type:"mask",mask:"(999) 999-9999"}},p={args:{type:"otp",integerOnly:!0}},c={args:{type:"textarea",maxLength:256,showCount:!0}};var d,g,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Email',
    prefixEle: <h4 style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600
    }}>
      Title
    </h4>,
    placeholder: 'Enter your email'
  },
  tags: ['!autodocs']
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,f,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'text',
    prefixCls: 'input',
    wrapperCls: 'input-story-wrapper',
    labelCls: 'input-story-label',
    messageCls: 'input-story-message',
    label: 'Account',
    message: 'This account is verified.',
    required: true,
    rounded: true,
    size: 'small',
    success: true,
    prefixEle: <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: 600
    }}>USD</span>,
    suffixEle: <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: 600
    }}>Max</span>,
    prefixEleCls: 'input-story-prefix',
    suffixEleCls: 'input-story-suffix',
    showMessageIcon: true,
    placeholder: 'Enter amount'
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,C,E;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Loading state',
    loading: true,
    placeholder: 'Loading...'
  }
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var v,w,I;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Email',
    message: 'Please enter a valid email address.',
    showMessageIcon: true,
    invalid: true,
    placeholder: 'you@company.com'
  }
}`,...(I=(w=a.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var M,S,j;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'number',
    maxFractionDigits: 8,
    prefixEle: <i style={{
      backgroundColor: '#DDE6F4',
      borderRadius: '50%',
      padding: '8px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Icons name='logo' size={20} color='#073387' />
    </i>,
    suffixEle: <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#073387',
      cursor: 'pointer'
    }}>Max</div>
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var k,A,q;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'password',
    label: 'password',
    required: true,
    toggleMask: true,
    autoComplete: 'new-password'
  }
}`,...(q=(A=o.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var D,L,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'autocomplete'
  },
  render: function Render(args) {
    const [value, setValue] = useState('');
    const [advices, setAdvices] = useState<string[]>([]);
    const search = (event: any) => {
      setAdvices([...Array(10).keys()].map(item => event.query + '-' + item));
    };
    return <Input {...args as any} type='autocomplete' value={value} suggestions={advices} completeMethod={search} onChange={e => setValue(e.value)} />;
  }
}`,...(T=(L=l.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var z,W,O;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'mask',
    mask: '(999) 999-9999'
  }
}`,...(O=(W=i.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var R,F,N;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'otp',
    integerOnly: true
  }
}`,...(N=(F=p.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var P,V,U;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'textarea',
    maxLength: 256,
    showCount: true
  }
}`,...(U=(V=c.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};const Se=["Normal","ApiCoverage","Loading","ErrorMessage","Number","Password","AutoComplete","Mask","OtpCode","TextArea"];export{s as ApiCoverage,l as AutoComplete,a as ErrorMessage,t as Loading,i as Mask,r as Normal,n as Number,p as OtpCode,o as Password,c as TextArea,Se as __namedExportsOrder,Me as default};
