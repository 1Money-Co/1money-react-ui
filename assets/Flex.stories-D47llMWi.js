import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as oe}from"./index-CP2yOfOm.js";import{c as ce,j as pe}from"./classnames-LtG3MjBp.js";const a={start:"start",end:"end",center:"center",baseline:"baseline",stretch:"stretch"},l={start:"start",end:"end",center:"center",spaceAround:"space-around",spaceBetween:"space-between",spaceEvenly:"space-evenly"},o={nowrap:"nowrap",wrap:"wrap",wrapReverse:"wrap-reverse"},p={small:"small",middle:"middle",large:"large"},x="flex",h=0,Ee=8,ve=16,_e=24,ue={gap:"--om-flex-gap"},E={vertical:"vertical",wrap:"wrap",align:"align",justify:"justify"},ye={small:Ee,middle:ve,large:_e},Le=t=>t==null?h:typeof t=="number"?t:ye[t]??h,me=t=>t===!0?o.wrap:t===!1?o.nowrap:t,$=t=>{const{children:K,vertical:Q,wrap:Z,align:M,justify:j,gap:ee,className:ne,style:se,prefixCls:te=x,...re}=t,c=ce(te),ae=Le(ee),F=me(Z),ie=F?c(`${E.wrap}-${F}`):void 0,le={...se,[ue.gap]:`${ae}px`},de=c(void 0,pe(Q&&c(E.vertical),ie,M&&c(`${E.align}-${M}`),j&&c(`${E.justify}-${j}`),ne));return e.jsx("div",{...re,style:le,className:de,children:K})},n=oe.memo($);$.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{vertical:{required:!1,tsType:{name:"boolean"},description:""},wrap:{required:!1,tsType:{name:"union",raw:"boolean | FlexWrap",elements:[{name:"boolean"},{name:"union",raw:"'nowrap' | 'wrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap'"},{name:"literal",value:"'wrap-reverse'"}]}]},description:""},align:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'baseline' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"},{name:"literal",value:"'stretch'"}]},description:""},justify:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-evenly'"}]},description:""},gap:{required:!1,tsType:{name:"union",raw:"'small' | 'middle' | 'large' | number",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'large'"},{name:"number"}]},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const xe=Object.values(a),ge=Object.values(l),Te=Object.values(o),Ae=Object.values(p),q=16,H="1px dashed currentColor",r={padding:q,border:H},Se=16,z={display:"grid",gap:Se},A={...z,padding:q,border:H,borderRadius:8},Me={...r,minHeight:56,display:"flex",alignItems:"center",width:"100%"},T={...r,minHeight:220,display:"flex",alignItems:"flex-start",width:"100%"},s={...r,minWidth:120,textAlign:"center"},i={...r,padding:"4px 12px"},k=o.wrap,S=o.nowrap,d=p.small,g=p.middle,je=p.large,De={title:"Components/Flex",component:n,argTypes:{gap:{control:"select",options:Ae},align:{control:"select",options:xe},justify:{control:"select",options:ge},vertical:{control:"boolean"},wrap:{control:"select",options:Te},prefixCls:{control:"text"}},args:{gap:p.middle,align:a.center,justify:l.spaceBetween,vertical:!1,wrap:o.nowrap},tags:["autodocs"]},v={render:t=>e.jsxs(n,{...t,children:[e.jsx("div",{style:r,children:"One"}),e.jsx("div",{style:r,children:"Two"}),e.jsx("div",{style:r,children:"Three"})]})},_={render:()=>e.jsxs(n,{vertical:!0,gap:d,children:[e.jsx("div",{style:r,children:"Top"}),e.jsx("div",{style:r,children:"Bottom"})]})},u={render:()=>e.jsxs("div",{style:z,children:[e.jsxs(n,{gap:g,align:a.center,justify:l.spaceBetween,wrap:S,prefixCls:x,children:[e.jsx("div",{style:r,children:"Align"}),e.jsx("div",{style:r,children:"Justify"})]}),e.jsxs(n,{vertical:!0,gap:je,wrap:k,prefixCls:x,children:[e.jsx("div",{style:r,children:"Vertical"}),e.jsx("div",{style:r,children:"Wrap"})]})]})},y={parameters:{docs:{description:{story:"Common header layout with left brand area, center navigation, and right-side actions using justify/align."}}},render:()=>e.jsx("div",{style:A,children:e.jsxs(n,{gap:g,align:a.center,justify:l.spaceBetween,wrap:S,prefixCls:x,children:[e.jsx("div",{style:Me,children:"Brand / Logo"}),e.jsxs(n,{gap:d,align:a.center,children:[e.jsx("div",{style:s,children:"Overview"}),e.jsx("div",{style:s,children:"Accounts"}),e.jsx("div",{style:s,children:"Transactions"})]}),e.jsxs(n,{gap:d,align:a.center,children:[e.jsx("div",{style:s,children:"Search"}),e.jsx("div",{style:s,children:"Notification"}),e.jsx("div",{style:s,children:"Profile"})]})]})})},L={parameters:{docs:{description:{story:"Sidebar and content layout using horizontal Flex outside and vertical Flex inside for title, body, and footer actions."}}},render:()=>e.jsx("div",{style:A,children:e.jsxs(n,{gap:g,align:a.start,justify:l.start,wrap:S,children:[e.jsxs(n,{vertical:!0,gap:d,style:{...T,minWidth:220},children:[e.jsx("div",{style:s,children:"Menu Group A"}),e.jsx("div",{style:s,children:"Menu Group B"}),e.jsx("div",{style:s,children:"Menu Group C"})]}),e.jsxs(n,{vertical:!0,gap:g,style:{...T,flex:1},children:[e.jsxs(n,{align:a.center,justify:l.spaceBetween,children:[e.jsx("div",{style:s,children:"Page Title"}),e.jsxs(n,{gap:d,children:[e.jsx("div",{style:s,children:"Export"}),e.jsx("div",{style:s,children:"Create"})]})]}),e.jsx("div",{style:T,children:"Main Content"}),e.jsxs(n,{align:a.center,justify:l.end,gap:d,children:[e.jsx("div",{style:s,children:"Cancel"}),e.jsx("div",{style:s,children:"Save"})]})]})]})})},m={parameters:{docs:{description:{story:"Wrapping tag group layout using wrap + gap for dense filter/status tag scenarios."}}},render:()=>e.jsx("div",{style:A,children:e.jsxs(n,{wrap:k,gap:d,align:a.center,justify:l.start,children:[e.jsx("div",{style:i,children:"Pending"}),e.jsx("div",{style:i,children:"Approved"}),e.jsx("div",{style:i,children:"Rejected"}),e.jsx("div",{style:i,children:"In Review"}),e.jsx("div",{style:i,children:"Manual Check"}),e.jsx("div",{style:i,children:"Needs Update"}),e.jsx("div",{style:i,children:"Completed"}),e.jsx("div",{style:i,children:"Escalated"})]})})};var O,D,f;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Flex {...args}>
      <div style={DEMO_BOX_STYLE}>One</div>
      <div style={DEMO_BOX_STYLE}>Two</div>
      <div style={DEMO_BOX_STYLE}>Three</div>
    </Flex>
}`,...(f=(D=v.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var w,I,G;_.parameters={..._.parameters,docs:{...(w=_.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={GAP_SMALL}>
      <div style={DEMO_BOX_STYLE}>Top</div>
      <div style={DEMO_BOX_STYLE}>Bottom</div>
    </Flex>
}`,...(G=(I=_.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var P,Y,X;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={DEMO_SECTION_STYLE}>
      <Flex gap={GAP_MIDDLE} align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.spaceBetween} wrap={WRAP_DISABLED} prefixCls={FLEX_PREFIX}>
        <div style={DEMO_BOX_STYLE}>Align</div>
        <div style={DEMO_BOX_STYLE}>Justify</div>
      </Flex>

      <Flex vertical gap={GAP_LARGE} wrap={WRAP_ENABLED} prefixCls={FLEX_PREFIX}>
        <div style={DEMO_BOX_STYLE}>Vertical</div>
        <div style={DEMO_BOX_STYLE}>Wrap</div>
      </Flex>
    </div>
}`,...(X=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var B,C,N;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Common header layout with left brand area, center navigation, and right-side actions using justify/align.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Flex gap={GAP_MIDDLE} align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.spaceBetween} wrap={WRAP_DISABLED} prefixCls={FLEX_PREFIX}>
        <div style={DEMO_BAR_STYLE}>Brand / Logo</div>
        <Flex gap={GAP_SMALL} align={FLEX_ALIGN.center}>
          <div style={DEMO_ITEM_STYLE}>Overview</div>
          <div style={DEMO_ITEM_STYLE}>Accounts</div>
          <div style={DEMO_ITEM_STYLE}>Transactions</div>
        </Flex>
        <Flex gap={GAP_SMALL} align={FLEX_ALIGN.center}>
          <div style={DEMO_ITEM_STYLE}>Search</div>
          <div style={DEMO_ITEM_STYLE}>Notification</div>
          <div style={DEMO_ITEM_STYLE}>Profile</div>
        </Flex>
      </Flex>
    </div>
}`,...(N=(C=y.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var b,R,W;L.parameters={...L.parameters,docs:{...(b=L.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Sidebar and content layout using horizontal Flex outside and vertical Flex inside for title, body, and footer actions.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Flex gap={GAP_MIDDLE} align={FLEX_ALIGN.start} justify={FLEX_JUSTIFY.start} wrap={WRAP_DISABLED}>
        <Flex vertical gap={GAP_SMALL} style={{
        ...DEMO_PANEL_STYLE,
        minWidth: 220
      }}>
          <div style={DEMO_ITEM_STYLE}>Menu Group A</div>
          <div style={DEMO_ITEM_STYLE}>Menu Group B</div>
          <div style={DEMO_ITEM_STYLE}>Menu Group C</div>
        </Flex>

        <Flex vertical gap={GAP_MIDDLE} style={{
        ...DEMO_PANEL_STYLE,
        flex: 1
      }}>
          <Flex align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.spaceBetween}>
            <div style={DEMO_ITEM_STYLE}>Page Title</div>
            <Flex gap={GAP_SMALL}>
              <div style={DEMO_ITEM_STYLE}>Export</div>
              <div style={DEMO_ITEM_STYLE}>Create</div>
            </Flex>
          </Flex>
          <div style={DEMO_PANEL_STYLE}>Main Content</div>
          <Flex align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.end} gap={GAP_SMALL}>
            <div style={DEMO_ITEM_STYLE}>Cancel</div>
            <div style={DEMO_ITEM_STYLE}>Save</div>
          </Flex>
        </Flex>
      </Flex>
    </div>
}`,...(W=(R=L.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var U,J,V;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Wrapping tag group layout using wrap + gap for dense filter/status tag scenarios.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Flex wrap={WRAP_ENABLED} gap={GAP_SMALL} align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.start}>
        <div style={DEMO_TAG_STYLE}>Pending</div>
        <div style={DEMO_TAG_STYLE}>Approved</div>
        <div style={DEMO_TAG_STYLE}>Rejected</div>
        <div style={DEMO_TAG_STYLE}>In Review</div>
        <div style={DEMO_TAG_STYLE}>Manual Check</div>
        <div style={DEMO_TAG_STYLE}>Needs Update</div>
        <div style={DEMO_TAG_STYLE}>Completed</div>
        <div style={DEMO_TAG_STYLE}>Escalated</div>
      </Flex>
    </div>
}`,...(V=(J=m.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};const fe=["Primary","Vertical","ApiExamples","DashboardHeaderLayout","SidebarContentLayout","TagGroupWrapLayout"];export{u as ApiExamples,y as DashboardHeaderLayout,v as Primary,L as SidebarContentLayout,m as TagGroupWrapLayout,_ as Vertical,fe as __namedExportsOrder,De as default};
