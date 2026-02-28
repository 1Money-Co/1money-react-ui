import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{F as n,a as E,b as r}from"./index-4lVIr_LA.js";import{I as l}from"./Input-5Pr8TvsG.js";import{B as g}from"./Button-BnJcnm8i.js";import{T as C}from"./Typography-BgvqIFCt.js";import{S as fe}from"./Select-C3ukMNKu.js";import{R as j}from"./Radio-Cl8JGqZo.js";import{C as je}from"./Checkbox-4ivtXZga.js";import"./index-CP2yOfOm.js";import"./classnames-LtG3MjBp.js";import"./index-BT0BDQbR.js";import"./index-C1tUctxz.js";import"./v4-CtRu48qb.js";import"./inputtext.esm-0bAv0U1B.js";import"./componentbase.esm-4JClMOy3.js";import"./tooltip.esm-DWjguKwN.js";import"./portal.esm-DsCazcPz.js";import"./index-BOAxdYzW.js";import"./inputnumber.esm-DO3QdTJj.js";import"./iconbase.esm-CgcK1F5D.js";import"./ripple.esm-B4ep2fnx.js";import"./csstransition.esm-B5iK3TG5.js";import"./overlayservice.esm-BSzR65vr.js";import"./button.esm-P8t-Ut6N.js";import"./index.esm-0rHaTxuV.js";import"./index.esm-BVDwUpqK.js";import"./index.esm-BUPvvfCY.js";import"./virtualscroller.esm-DmfrueHw.js";import"./skeleton.esm-DbdIoiO6.js";import"./Icons-DVar4d28.js";import"./Spinner-CEQHadij.js";import"./index-DDPZYAIC.js";import"./index-CERujqML.js";import"./index-CfaLkjk1.js";import"./dropdown.esm-BQwt4-hA.js";import"./index.esm-DfFybxTV.js";import"./index.esm-ByOqZbnP.js";import"./index.esm-DKy0vDUU.js";import"./tristatecheckbox.esm-CL4rYneK.js";const ia={title:"Components/Form",component:n,tags:["autodocs"]},Ie=[{label:"New York",value:"NY"},{label:"Rome",value:"RM"},{label:"London",value:"LDN"},{label:"Istanbul",value:"IST"},{label:"Paris",value:"PRS"}],o={render:()=>a.jsxs(n,{layout:"vertical",defaultValues:{email:"",password:""},onFinish:E("onFinish"),children:[a.jsx(r,{name:"email",label:"Email",rules:{required:"Email is required"},children:({field:e})=>a.jsx(l,{type:"text",...e,placeholder:"you@company.com"})}),a.jsx(r,{name:"password",label:"Password",rules:{required:"Password is required"},children:({field:e})=>a.jsx(l,{...e,type:"password"})}),a.jsx(r,{children:a.jsx(g,{type:"submit",children:"Submit"})})]})},s={render:()=>a.jsxs(n,{layout:"horizontal",labelCol:3,wrapperCol:9,children:[a.jsx(r,{label:"Company",children:a.jsx(l,{type:"text",placeholder:"1Money"})}),a.jsx(r,{label:"Website",children:a.jsx(l,{type:"text",placeholder:"https://1money.com"})})]})},i={render:()=>a.jsxs(n,{layout:"vertical",defaultValues:{email:"",confirmEmail:"",first:"",last:""},children:[a.jsx(r,{name:"email",label:"Email",rules:{required:"Email is required"},children:({field:e})=>a.jsx(l,{type:"text",...e,placeholder:"you@company.com"})}),a.jsx(r,{name:"confirmEmail",label:"Confirm Email",dependencies:["email"],rules:{validate:{match:(e,t)=>e===t.email||"Emails do not match",notEmpty:e=>!!e||"Confirm Email is required"}},validateFirst:"parallel",validateDebounce:300,validateTrigger:"onBlur",children:({field:e})=>a.jsx(l,{type:"text",...e,placeholder:"retype email"})}),a.jsx(r,{shouldUpdate:!0,watchNames:["first","last"],children:({values:e})=>a.jsxs(C.Body,{size:"m",children:["Preview: ",e.first," ",e.last]})}),a.jsx(r,{name:"first",label:"First Name",children:({field:e})=>a.jsx(l,{type:"text",...e})}),a.jsx(r,{name:"last",label:"Last Name",children:({field:e})=>a.jsx(l,{type:"text",...e})})]})},m={render:()=>a.jsxs(n,{layout:"vertical",defaultValues:{email:"",confirmEmail:"",first:"",last:""},scrollToFirstError:!0,onFinish:E("onFinish"),children:[a.jsx(r,{name:"email",label:"Email",rules:{required:"Email is required"},children:({field:e})=>a.jsx(l,{type:"text",...e,placeholder:"you@company.com"})}),a.jsx(r,{name:"confirmEmail",label:"Confirm Email",dependencies:["email"],rules:{validate:{match:(e,t)=>e===t.email||"Emails do not match",notEmpty:e=>!!e||"Confirm Email is required"}},validateFirst:!0,validateTrigger:"onBlur",children:({field:e})=>a.jsx(l,{type:"text",...e,placeholder:"retype email"})}),a.jsx(r,{shouldUpdate:!0,watchNames:["first","last"],children:({values:e})=>a.jsxs(C.Body,{size:"m",children:["Preview: ",e.first," ",e.last]})}),a.jsx(r,{name:"first",label:"First Name",children:({field:e})=>a.jsx(l,{type:"text",...e})}),a.jsx(r,{name:"last",label:"Last Name",children:({field:e})=>a.jsx(l,{type:"text",...e})}),a.jsx(r,{children:a.jsx(g,{type:"submit",children:"Submit"})})]})},d={render:()=>a.jsxs(n,{layout:"vertical",defaultValues:{city:"NY",plan:"basic"},onFinish:E("onFinish"),children:[a.jsx(r,{name:"city",label:"City",rules:{required:"City is required"},children:({field:e})=>a.jsx(fe,{options:Ie,placeholder:"Select City",value:e==null?void 0:e.value,onChange:t=>e==null?void 0:e.onChange(t.value)})}),a.jsx(r,{name:"plan",label:"Plan",rules:{required:"Plan is required"},children:({field:e})=>a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx(j,{name:"plan",value:"basic",label:"Basic",checked:(e==null?void 0:e.value)==="basic",onChange:()=>e==null?void 0:e.onChange("basic")}),a.jsx(j,{name:"plan",value:"pro",label:"Pro",checked:(e==null?void 0:e.value)==="pro",onChange:()=>e==null?void 0:e.onChange("pro")})]})}),a.jsx(r,{children:a.jsx(g,{type:"submit",children:"Submit"})})]})},c={render:()=>a.jsxs(n,{layout:"horizontal",labelAlign:"left",labelCol:3,wrapperCol:9,scrollToFirstError:{block:"start",offset:72},defaultValues:{email:"",confirmEmail:"",city:"NY",plan:"basic",newsletter:!1,first:"",last:""},onFinish:E("onFinish"),children:[a.jsx(r,{name:"email",label:"Email",rules:{required:"Email is required"},children:({field:e})=>a.jsx(l,{type:"text",...e,placeholder:"you@company.com"})}),a.jsx(r,{name:"confirmEmail",label:"Confirm Email",dependencies:["email"],validateTrigger:"onBlur",validateDebounce:300,validateFirst:"parallel",rules:{validate:{required:e=>!!e||"Confirm email is required",match:(e,t)=>e===t.email||"Emails do not match"}},children:({field:e})=>a.jsx(l,{type:"text",...e,placeholder:"retype email"})}),a.jsx(r,{name:"city",label:"City",rules:{required:"City is required"},children:({field:e})=>a.jsx(fe,{options:Ie,placeholder:"Select City",value:e==null?void 0:e.value,onChange:t=>e==null?void 0:e.onChange(t.value)})}),a.jsx(r,{name:"plan",label:"Plan",rules:{required:"Plan is required"},children:({field:e})=>a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx(j,{name:"plan",value:"basic",label:"Basic",checked:(e==null?void 0:e.value)==="basic",onChange:()=>e==null?void 0:e.onChange("basic")}),a.jsx(j,{name:"plan",value:"pro",label:"Pro",checked:(e==null?void 0:e.value)==="pro",onChange:()=>e==null?void 0:e.onChange("pro")})]})}),a.jsx(r,{shouldUpdate:!0,watchNames:["first","last","plan"],children:({values:e})=>a.jsxs(C.Body,{size:"m",children:["Summary: ",e.first," ",e.last," (",e.plan,")"]})}),a.jsx(r,{name:"first",label:"First Name",children:({field:e})=>a.jsx(l,{type:"text",...e})}),a.jsx(r,{name:"last",label:"Last Name",children:({field:e})=>a.jsx(l,{type:"text",...e})}),a.jsx(r,{children:a.jsx(g,{type:"submit",children:"Submit"})})]})},u={render:()=>a.jsxs(n,{layout:"inline",children:[a.jsx(r,{label:"First",children:a.jsx(l,{type:"text",placeholder:"Ada"})}),a.jsx(r,{label:"Last",children:a.jsx(l,{type:"text",placeholder:"Lovelace"})})]})},p={render:()=>a.jsx(n,{children:a.jsx(r,{label:"Email",required:!0,help:"We never share it.",extra:"Use a work address.",validateStatus:"warning",children:a.jsx(l,{type:"text",placeholder:"you@company.com"})})})},h={render:()=>a.jsx(n,{scrollToFirstError:{block:"start",offset:72},defaultValues:{email:""},children:a.jsx(r,{name:"email",label:"Email",rules:{required:"Email is required"},children:({field:e})=>a.jsx(l,{type:"text",...e})})})},y={render:()=>a.jsxs(n,{defaultValues:{email:"",confirmEmail:""},children:[a.jsx(r,{name:"email",label:"Email",children:({field:e})=>a.jsx(l,{type:"text",...e})}),a.jsx(r,{name:"confirmEmail",label:"Confirm Email",dependencies:["email"],rules:{validate:(e,t)=>e===t.email||"Emails do not match"},children:({field:e})=>a.jsx(l,{type:"text",...e})})]})},x={render:()=>a.jsxs(n,{defaultValues:{first:"",last:""},children:[a.jsx(r,{name:"first",label:"First",children:({field:e})=>a.jsx(l,{type:"text",...e})}),a.jsx(r,{name:"last",label:"Last",children:({field:e})=>a.jsx(l,{type:"text",...e})}),a.jsx(r,{shouldUpdate:!0,watchNames:["first","last"],children:({values:e})=>a.jsxs(C.Body,{size:"m",children:["Preview: ",e.first," ",e.last]})})]})},F={render:()=>a.jsx(n,{defaultValues:{email:""},children:a.jsx(r,{name:"email",label:"Email",validateTrigger:"onChange",validateDebounce:300,rules:{validate:e=>((e==null?void 0:e.length)??0)>=3||"Too short"},children:({field:e})=>a.jsx(l,{type:"text",...e})})})},b={render:()=>a.jsx(n,{defaultValues:{email:""},children:a.jsx(r,{name:"email",label:"Email",validateFirst:"parallel",rules:{validate:{notEmpty:e=>!!e||"Required",match:e=>e.includes("@")||"Must include @"}},children:({field:e})=>a.jsx(l,{type:"text",...e})})})},v={render:()=>a.jsx(n,{defaultValues:{newsletter:!1},children:a.jsx(r,{name:"newsletter",noStyle:!0,valuePropName:"checked",children:a.jsx(je,{label:"Subscribe to newsletter"})})})},f={render:()=>a.jsx(n,{layout:"horizontal",labelCol:3,wrapperCol:9,children:a.jsx(r,{label:"Full Width",labelCol:0,wrapperCol:12,children:a.jsx(l,{type:"text",placeholder:"Stretch"})})})},I={render:()=>a.jsx(n,{disabled:!0,colon:!1,requiredMark:!1,children:a.jsx(r,{label:"Read Only",children:a.jsx(l,{type:"text",value:"Locked",readOnly:!0})})})};var q,S,w;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Form layout='vertical' defaultValues={{
    email: '',
    password: ''
  }} onFinish={action('onFinish')}>
      <FormItem name='email' label='Email' rules={{
      required: 'Email is required'
    }}>
        {({
        field
      }) => <Input type='text' {...field} placeholder='you@company.com' />}
      </FormItem>
      <FormItem name='password' label='Password' rules={{
      required: 'Password is required'
    }}>
        {({
        field
      }) => <Input {...field} type='password' />}
      </FormItem>
      <FormItem>
        <Button type='submit'>Submit</Button>
      </FormItem>
    </Form>
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var B,N,T;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Form layout='horizontal' labelCol={3} wrapperCol={9}>
      <FormItem label='Company'>
        <Input type='text' placeholder='1Money' />
      </FormItem>
      <FormItem label='Website'>
        <Input type='text' placeholder='https://1money.com' />
      </FormItem>
    </Form>
}`,...(T=(N=s.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var P,V,k;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Form layout='vertical' defaultValues={{
    email: '',
    confirmEmail: '',
    first: '',
    last: ''
  }}>
      <FormItem name='email' label='Email' rules={{
      required: 'Email is required'
    }}>
        {({
        field
      }) => <Input type='text' {...field} placeholder='you@company.com' />}
      </FormItem>
      <FormItem name='confirmEmail' label='Confirm Email' dependencies={['email']} rules={{
      validate: {
        match: (value, values) => value === values.email || 'Emails do not match',
        notEmpty: value => !!value || 'Confirm Email is required'
      }
    }} validateFirst='parallel' validateDebounce={300} validateTrigger='onBlur'>
        {({
        field
      }) => <Input type='text' {...field} placeholder='retype email' />}
      </FormItem>
      <FormItem shouldUpdate watchNames={['first', 'last']}>
        {({
        values
      }) => <Typography.Body size='m'>Preview: {values.first} {values.last}</Typography.Body>}
      </FormItem>
      <FormItem name='first' label='First Name'>
        {({
        field
      }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem name='last' label='Last Name'>
        {({
        field
      }) => <Input type='text' {...field} />}
      </FormItem>
    </Form>
}`,...(k=(V=i.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var L,R,z;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Form layout='vertical' defaultValues={{
    email: '',
    confirmEmail: '',
    first: '',
    last: ''
  }} scrollToFirstError onFinish={action('onFinish')}>
      <FormItem name='email' label='Email' rules={{
      required: 'Email is required'
    }}>
        {({
        field
      }) => <Input type='text' {...field} placeholder='you@company.com' />}
      </FormItem>
      <FormItem name='confirmEmail' label='Confirm Email' dependencies={['email']} rules={{
      validate: {
        match: (value, values) => value === values.email || 'Emails do not match',
        notEmpty: value => !!value || 'Confirm Email is required'
      }
    }} validateFirst validateTrigger='onBlur'>
        {({
        field
      }) => <Input type='text' {...field} placeholder='retype email' />}
      </FormItem>
      <FormItem shouldUpdate watchNames={['first', 'last']}>
        {({
        values
      }) => <Typography.Body size='m'>Preview: {values.first} {values.last}</Typography.Body>}
      </FormItem>
      <FormItem name='first' label='First Name'>
        {({
        field
      }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem name='last' label='Last Name'>
        {({
        field
      }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem>
        <Button type='submit'>Submit</Button>
      </FormItem>
    </Form>
}`,...(z=(R=m.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var D,U,O;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Form layout='vertical' defaultValues={{
    city: 'NY',
    plan: 'basic'
  }} onFinish={action('onFinish')}>
      <FormItem name='city' label='City' rules={{
      required: 'City is required'
    }}>
        {({
        field
      }) => <Select options={cityOptions} placeholder='Select City' value={field?.value} onChange={e => field?.onChange(e.value)} />}
      </FormItem>
      <FormItem name='plan' label='Plan' rules={{
      required: 'Plan is required'
    }}>
        {({
        field
      }) => <div style={{
        display: 'flex',
        gap: 12
      }}>
            <Radio name='plan' value='basic' label='Basic' checked={field?.value === 'basic'} onChange={() => field?.onChange('basic')} />
            <Radio name='plan' value='pro' label='Pro' checked={field?.value === 'pro'} onChange={() => field?.onChange('pro')} />
          </div>}
      </FormItem>
      <FormItem>
        <Button type='submit'>Submit</Button>
      </FormItem>
    </Form>
}`,...(O=(U=d.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var M,A,W;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Form layout='horizontal' labelAlign='left' labelCol={3} wrapperCol={9} scrollToFirstError={{
    block: 'start',
    offset: 72
  }} defaultValues={{
    email: '',
    confirmEmail: '',
    city: 'NY',
    plan: 'basic',
    newsletter: false,
    first: '',
    last: ''
  }} onFinish={action('onFinish')}>
      <FormItem name='email' label='Email' rules={{
      required: 'Email is required'
    }}>
        {({
        field
      }) => <Input type='text' {...field} placeholder='you@company.com' />}
      </FormItem>
      <FormItem name='confirmEmail' label='Confirm Email' dependencies={['email']} validateTrigger='onBlur' validateDebounce={300} validateFirst='parallel' rules={{
      validate: {
        required: value => !!value || 'Confirm email is required',
        match: (value, values) => value === values.email || 'Emails do not match'
      }
    }}>
        {({
        field
      }) => <Input type='text' {...field} placeholder='retype email' />}
      </FormItem>
      <FormItem name='city' label='City' rules={{
      required: 'City is required'
    }}>
        {({
        field
      }) => <Select options={cityOptions} placeholder='Select City' value={field?.value} onChange={e => field?.onChange(e.value)} />}
      </FormItem>
      <FormItem name='plan' label='Plan' rules={{
      required: 'Plan is required'
    }}>
        {({
        field
      }) => <div style={{
        display: 'flex',
        gap: 12
      }}>
            <Radio name='plan' value='basic' label='Basic' checked={field?.value === 'basic'} onChange={() => field?.onChange('basic')} />
            <Radio name='plan' value='pro' label='Pro' checked={field?.value === 'pro'} onChange={() => field?.onChange('pro')} />
          </div>}
      </FormItem>
      <FormItem shouldUpdate watchNames={['first', 'last', 'plan']}>
        {({
        values
      }) => <Typography.Body size='m'>Summary: {values.first} {values.last} ({values.plan})</Typography.Body>}
      </FormItem>
      <FormItem name='first' label='First Name'>
        {({
        field
      }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem name='last' label='Last Name'>
        {({
        field
      }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem>
        <Button type='submit'>Submit</Button>
      </FormItem>
    </Form>
}`,...(W=(A=c.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var Y,H,_;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Form layout='inline'>
      <FormItem label='First'>
        <Input type='text' placeholder='Ada' />
      </FormItem>
      <FormItem label='Last'>
        <Input type='text' placeholder='Lovelace' />
      </FormItem>
    </Form>
}`,...(_=(H=u.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Form>
      <FormItem label='Email' required help='We never share it.' extra='Use a work address.' validateStatus='warning'>
        <Input type='text' placeholder='you@company.com' />
      </FormItem>
    </Form>
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Form scrollToFirstError={{
    block: 'start',
    offset: 72
  }} defaultValues={{
    email: ''
  }}>
      <FormItem name='email' label='Email' rules={{
      required: 'Email is required'
    }}>
        {({
        field
      }) => <Input type='text' {...field} />}
      </FormItem>
    </Form>
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ae;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Form defaultValues={{
    email: '',
    confirmEmail: ''
  }}>
      <FormItem name='email' label='Email'>
        {({
        field
      }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem name='confirmEmail' label='Confirm Email' dependencies={['email']} rules={{
      validate: (value, values) => value === values.email || 'Emails do not match'
    }}>
        {({
        field
      }) => <Input type='text' {...field} />}
      </FormItem>
    </Form>
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,le,ne;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <Form defaultValues={{
    first: '',
    last: ''
  }}>
      <FormItem name='first' label='First'>
        {({
        field
      }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem name='last' label='Last'>
        {({
        field
      }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem shouldUpdate watchNames={['first', 'last']}>
        {({
        values
      }) => <Typography.Body size='m'>Preview: {values.first} {values.last}</Typography.Body>}
      </FormItem>
    </Form>
}`,...(ne=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var te,oe,se;F.parameters={...F.parameters,docs:{...(te=F.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <Form defaultValues={{
    email: ''
  }}>
      <FormItem name='email' label='Email' validateTrigger='onChange' validateDebounce={300} rules={{
      validate: value => (value?.length ?? 0) >= 3 || 'Too short'
    }}>
        {({
        field
      }) => <Input type='text' {...field} />}
      </FormItem>
    </Form>
}`,...(se=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,me,de;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <Form defaultValues={{
    email: ''
  }}>
      <FormItem name='email' label='Email' validateFirst='parallel' rules={{
      validate: {
        notEmpty: value => !!value || 'Required',
        match: value => value.includes('@') || 'Must include @'
      }
    }}>
        {({
        field
      }) => <Input type='text' {...field} />}
      </FormItem>
    </Form>
}`,...(de=(me=b.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ce,ue,pe;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Form defaultValues={{
    newsletter: false
  }}>
      <FormItem name='newsletter' noStyle valuePropName='checked'>
        <Checkbox label='Subscribe to newsletter' />
      </FormItem>
    </Form>
}`,...(pe=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var he,ye,xe;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <Form layout='horizontal' labelCol={3} wrapperCol={9}>
      <FormItem label='Full Width' labelCol={0} wrapperCol={12}>
        <Input type='text' placeholder='Stretch' />
      </FormItem>
    </Form>
}`,...(xe=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Fe,be,ve;I.parameters={...I.parameters,docs:{...(Fe=I.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <Form disabled colon={false} requiredMark={false}>
      <FormItem label='Read Only'>
        <Input type='text' value='Locked' readOnly />
      </FormItem>
    </Form>
}`,...(ve=(be=I.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};const ma=["Basic","Horizontal","AdvancedBehaviors","Example","SelectAndRadio","Complex","InlineLayout","HelpExtraStatus","ScrollToFirstError","Dependencies","ShouldUpdate","ValidateTriggerDebounce","ValidateFirst","NoStyleValueProp","LabelWrapperOverride","DisabledColonRequiredMark"];export{i as AdvancedBehaviors,o as Basic,c as Complex,y as Dependencies,I as DisabledColonRequiredMark,m as Example,p as HelpExtraStatus,s as Horizontal,u as InlineLayout,f as LabelWrapperOverride,v as NoStyleValueProp,h as ScrollToFirstError,d as SelectAndRadio,x as ShouldUpdate,b as ValidateFirst,F as ValidateTriggerDebounce,ma as __namedExportsOrder,ia as default};
