import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as I}from"./index-CP2yOfOm.js";import{c as he,j as Ie}from"./classnames-LtG3MjBp.js";const o={start:"start",end:"end",center:"center",baseline:"baseline"},l={horizontal:"horizontal",vertical:"vertical"},a={small:"small",middle:"middle",large:"large"},Te="space",se=8,xe=16,Oe=24,A=se,D={gapX:"--om-space-gap-x",gapY:"--om-space-gap-y"},p={vertical:"vertical",align:"align",wrap:"wrap",item:"item",split:"split"},Le={small:se,middle:xe,large:Oe},h=s=>s==null?A:typeof s=="number"?s:Le[s]??A,Me=s=>{if(Array.isArray(s))return[h(s[0]),h(s[1])];const d=h(s);return[d,d]},ne=s=>{const{children:d,align:x,direction:ae=l.horizontal,size:te,split:O,wrap:le=!1,className:de,style:ce,prefixCls:oe=Te,...pe}=s,c=he(oe),L=ae===l.vertical,[Ee,me]=Me(te),Se=le&&!L,_e=c(void 0,Ie(L&&c(p.vertical),x&&c(`${p.align}-${x}`),Se&&c(p.wrap),de)),ve={...ce,[D.gapX]:`${Ee}px`,[D.gapY]:`${me}px`},M=I.Children.toArray(d),ye=M.map((ue,C)=>{const ge=C===M.length-1;return e.jsxs(I.Fragment,{children:[e.jsx("div",{className:c(p.item),children:ue}),!ge&&O?e.jsx("span",{className:c(p.split),children:O}):null]},`space-item-${C}`)});return e.jsx("div",{...pe,style:ve,className:_e,children:ye})},n=I.memo(ne);ne.__docgenInfo={description:"",methods:[],displayName:"Space",props:{align:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'baseline'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"}]},description:""},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"SpaceSize | [SpaceSize, SpaceSize]",elements:[{name:"union",raw:"'small' | 'middle' | 'large' | number",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'large'"},{name:"number"}]},{name:"tuple",raw:"[SpaceSize, SpaceSize]",elements:[{name:"union",raw:"'small' | 'middle' | 'large' | number",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'large'"},{name:"number"}]},{name:"union",raw:"'small' | 'middle' | 'large' | number",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'large'"},{name:"number"}]}]}]},description:""},split:{required:!1,tsType:{name:"ReactNode"},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const Ce=Object.values(o),Ae=Object.values(l),De=Object.values(a),je=8,ie="1px dashed currentColor",i={padding:je,border:ie},Pe=16,re={display:"grid",gap:Pe},T={...re,padding:16,border:ie,borderRadius:8},r={...i,display:"inline-flex",alignItems:"center"},t={...i,padding:"4px 12px",display:"inline-flex"},Ne={...i,minHeight:44,width:"100%"},j={...i,minWidth:220},we={title:"Components/Space",component:n,argTypes:{size:{control:"select",options:De},align:{control:"select",options:Ce},direction:{control:"select",options:Ae},wrap:{control:"boolean"},split:{control:!1},prefixCls:{control:"text"}},args:{size:a.small,align:o.center,direction:l.horizontal,wrap:!1},tags:["autodocs"]},E={render:s=>e.jsxs(n,{...s,children:[e.jsx("div",{style:i,children:"One"}),e.jsx("div",{style:i,children:"Two"}),e.jsx("div",{style:i,children:"Three"})]})},m={render:()=>e.jsxs(n,{direction:l.vertical,size:a.middle,children:[e.jsx("div",{style:i,children:"Top"}),e.jsx("div",{style:i,children:"Bottom"})]})},S={render:()=>e.jsx(n,{size:[8,16],wrap:!0,style:{maxWidth:240},children:Array.from({length:10}).map((s,d)=>e.jsxs("div",{style:i,children:["Item ",d+1]},d))})},_={render:()=>e.jsxs(n,{split:e.jsx("span",{children:"|"}),size:a.large,children:[e.jsx("span",{children:"Alpha"}),e.jsx("span",{children:"Beta"}),e.jsx("span",{children:"Gamma"})]})},v={render:()=>e.jsxs("div",{style:re,children:[e.jsxs(n,{size:a.middle,align:o.center,children:[e.jsx("div",{style:i,children:"Align"}),e.jsx("div",{style:i,children:"Center"})]}),e.jsxs(n,{direction:l.vertical,size:a.large,children:[e.jsx("div",{style:i,children:"Vertical"}),e.jsx("div",{style:i,children:"Large"})]})]})},y={parameters:{docs:{description:{story:"Toolbar layout with left filter group and right action group, using Space to keep consistent in-group spacing."}}},render:()=>e.jsx("div",{style:T,children:e.jsxs("div",{style:{...Ne,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs(n,{size:a.small,align:o.center,children:[e.jsx("div",{style:r,children:"Date Range"}),e.jsx("div",{style:r,children:"Status"}),e.jsx("div",{style:r,children:"Currency"})]}),e.jsxs(n,{size:a.small,align:o.center,children:[e.jsx("div",{style:r,children:"Export"}),e.jsx("div",{style:r,children:"Refresh"}),e.jsx("div",{style:r,children:"Create"})]})]})})},u={parameters:{docs:{description:{story:"Filter wrapping layout: Space + wrap for tags and variable-length multi-filter items."}}},render:()=>e.jsx("div",{style:T,children:e.jsxs(n,{size:[8,12],wrap:!0,style:{maxWidth:640},children:[e.jsx("div",{style:t,children:"All"}),e.jsx("div",{style:t,children:"High Risk"}),e.jsx("div",{style:t,children:"KYC Pending"}),e.jsx("div",{style:t,children:"Manual Review"}),e.jsx("div",{style:t,children:"Today"}),e.jsx("div",{style:t,children:"This Week"}),e.jsx("div",{style:t,children:"Large Amount"}),e.jsx("div",{style:t,children:"USDT"}),e.jsx("div",{style:t,children:"USD"})]})})},g={parameters:{docs:{description:{story:"Detail panel composition: vertical field group on the left and vertical status group on the right with layered spacing."}}},render:()=>e.jsx("div",{style:T,children:e.jsxs(n,{size:a.large,align:o.start,style:{width:"100%"},children:[e.jsxs(n,{direction:l.vertical,size:a.middle,style:j,children:[e.jsx("div",{style:r,children:"Business Name"}),e.jsx("div",{style:r,children:"Registration Number"}),e.jsx("div",{style:r,children:"Country"}),e.jsx("div",{style:r,children:"Created At"})]}),e.jsxs(n,{direction:l.vertical,size:a.middle,style:j,children:[e.jsxs(n,{split:e.jsx("span",{children:"|"}),size:a.small,children:[e.jsx("span",{children:"Risk: Medium"}),e.jsx("span",{children:"KYB: Reviewing"}),e.jsx("span",{children:"AML: Passed"})]}),e.jsx("div",{style:r,children:"Operator: Derrick"}),e.jsx("div",{style:r,children:"Last Updated: 2026-02-09"})]})]})})};var P,N,Y;E.parameters={...E.parameters,docs:{...(P=E.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <Space {...args}>
      <div style={DEMO_BOX_STYLE}>One</div>
      <div style={DEMO_BOX_STYLE}>Two</div>
      <div style={DEMO_BOX_STYLE}>Three</div>
    </Space>
}`,...(Y=(N=E.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var f,z,w;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.middle}>
      <div style={DEMO_BOX_STYLE}>Top</div>
      <div style={DEMO_BOX_STYLE}>Bottom</div>
    </Space>
}`,...(w=(z=m.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var b,R,B;S.parameters={...S.parameters,docs:{...(b=S.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Space size={[8, 16]} wrap style={{
    maxWidth: 240
  }}>
      {Array.from({
      length: 10
    }).map((_, index) => <div style={DEMO_BOX_STYLE} key={index}>
          Item {index + 1}
        </div>)}
    </Space>
}`,...(B=(R=S.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var Z,G,X;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Space split={<span>|</span>} size={SPACE_SIZE.large}>
      <span>Alpha</span>
      <span>Beta</span>
      <span>Gamma</span>
    </Space>
}`,...(X=(G=_.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var H,W,k;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={DEMO_SECTION_STYLE}>
      <Space size={SPACE_SIZE.middle} align={SPACE_ALIGN.center}>
        <div style={DEMO_BOX_STYLE}>Align</div>
        <div style={DEMO_BOX_STYLE}>Center</div>
      </Space>
      <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.large}>
        <div style={DEMO_BOX_STYLE}>Vertical</div>
        <div style={DEMO_BOX_STYLE}>Large</div>
      </Space>
    </div>
}`,...(k=(W=v.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var U,F,V;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Toolbar layout with left filter group and right action group, using Space to keep consistent in-group spacing.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <div style={{
      ...DEMO_PANEL_STYLE,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
        <Space size={SPACE_SIZE.small} align={SPACE_ALIGN.center}>
          <div style={DEMO_INLINE_ITEM_STYLE}>Date Range</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Status</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Currency</div>
        </Space>
        <Space size={SPACE_SIZE.small} align={SPACE_ALIGN.center}>
          <div style={DEMO_INLINE_ITEM_STYLE}>Export</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Refresh</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Create</div>
        </Space>
      </div>
    </div>
}`,...(V=(F=y.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var q,$,K;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Filter wrapping layout: Space + wrap for tags and variable-length multi-filter items.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Space size={[8, 12]} wrap style={{
      maxWidth: 640
    }}>
        <div style={DEMO_CHIP_ITEM_STYLE}>All</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>High Risk</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>KYC Pending</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>Manual Review</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>Today</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>This Week</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>Large Amount</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>USDT</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>USD</div>
      </Space>
    </div>
}`,...(K=($=u.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var J,Q,ee;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Detail panel composition: vertical field group on the left and vertical status group on the right with layered spacing.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Space size={SPACE_SIZE.large} align={SPACE_ALIGN.start} style={{
      width: '100%'
    }}>
        <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.middle} style={DEMO_COLUMN_STYLE}>
          <div style={DEMO_INLINE_ITEM_STYLE}>Business Name</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Registration Number</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Country</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Created At</div>
        </Space>

        <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.middle} style={DEMO_COLUMN_STYLE}>
          <Space split={<span>|</span>} size={SPACE_SIZE.small}>
            <span>Risk: Medium</span>
            <span>KYB: Reviewing</span>
            <span>AML: Passed</span>
          </Space>
          <div style={DEMO_INLINE_ITEM_STYLE}>Operator: Derrick</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Last Updated: 2026-02-09</div>
        </Space>
      </Space>
    </div>
}`,...(ee=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};const be=["Primary","Vertical","CustomSizeAndWrap","Split","ApiExamples","ToolbarSpacing","FilterWrapSpacing","DetailPanelSpacing"];export{v as ApiExamples,S as CustomSizeAndWrap,g as DetailPanelSpacing,u as FilterWrapSpacing,E as Primary,_ as Split,y as ToolbarSpacing,m as Vertical,be as __namedExportsOrder,we as default};
