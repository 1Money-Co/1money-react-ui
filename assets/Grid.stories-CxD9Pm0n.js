import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{G as _,a as g,b as R,R as s,C as e,c as d,d as r,e as h}from"./Grid-CyRwUfpr.js";import"./index-CP2yOfOm.js";import"./classnames-LtG3MjBp.js";const A=16,j="1px dashed currentColor",l={padding:A,border:j},nn=16,dn={display:"grid",gap:nn},m={display:"grid",gap:nn,padding:A,border:j,borderRadius:8},t={padding:A,border:j,borderRadius:8,minHeight:48,display:"flex",alignItems:"center",justifyContent:"center"},en={...t,minHeight:56},on={...t,minHeight:300,alignItems:"flex-start"},P={...t,minHeight:200,alignItems:"flex-start"},sn={...t,minHeight:56},a={...t,minHeight:96},y={...t,minHeight:220},ln={...t,minHeight:180},f={...t,minHeight:44},G={...t,minHeight:44,justifyContent:"flex-start"},M={...t,minHeight:44,justifyContent:"flex-end"},_n=Object.values(g),an=Object.values(_),En=16,Rn=16,rn=[16,16],c=8,i=[En,Rn],cn=8,pn=16,Cn=24,On={sm:cn,md:pn,lg:Cn},Dn="1rem",u=4,S=12,L=6,I=4,v=3,o=6,E=3,F=1,Tn=1,xn=1,Sn=1,Ln=2,In=1,vn=2,gn=!0,hn=!1,Gn={[h.sm]:_.start,[h.md]:_.spaceBetween,[h.lg]:_.end},mn={title:"Components/Grid",component:R,argTypes:{gutter:{control:"object"},align:{control:"select",options:_n},justify:{control:"select",options:an},wrap:{control:"boolean"},prefixCls:{control:"text"}},args:{gutter:rn,align:g.top,justify:_.start,wrap:!0},tags:["autodocs"]},p={render:tn=>n.jsxs(R,{...tn,children:[n.jsx(R.Col,{span:u,children:n.jsx("div",{style:l,children:"4"})}),n.jsx(R.Col,{span:u,children:n.jsx("div",{style:l,children:"4"})}),n.jsx(R.Col,{span:u,children:n.jsx("div",{style:l,children:"4"})})]})},C={render:()=>n.jsxs(s,{gutter:rn,children:[n.jsx(e,{span:S,sm:L,md:I,lg:v,children:n.jsx("div",{style:l,children:"A"})}),n.jsx(e,{span:S,sm:L,md:I,lg:v,children:n.jsx("div",{style:l,children:"B"})}),n.jsx(e,{span:S,sm:L,md:I,lg:v,children:n.jsx("div",{style:l,children:"C"})})]})},O={render:()=>n.jsxs("div",{style:dn,children:[n.jsxs(s,{gutter:i,align:g.middle,justify:_.spaceBetween,wrap:hn,prefixCls:d,children:[n.jsx(e,{span:o,prefixCls:r,children:n.jsx("div",{style:l,children:"Span"})}),n.jsx(e,{span:o,prefixCls:r,children:n.jsx("div",{style:l,children:"Span"})})]}),n.jsxs(s,{gutter:c,prefixCls:d,children:[n.jsx(e,{span:E,offset:F,prefixCls:r,children:n.jsx("div",{style:l,children:"Offset"})}),n.jsx(e,{span:E,prefixCls:r,children:n.jsx("div",{style:l,children:"Offset"})})]}),n.jsxs(s,{gutter:c,prefixCls:d,children:[n.jsx(e,{span:E,push:Tn,prefixCls:r,children:n.jsx("div",{style:l,children:"Push"})}),n.jsx(e,{span:E,pull:xn,prefixCls:r,children:n.jsx("div",{style:l,children:"Pull"})})]}),n.jsxs(s,{gutter:On,prefixCls:d,children:[n.jsx(e,{span:o,prefixCls:r,children:n.jsx("div",{style:l,children:"Responsive Gutter"})}),n.jsx(e,{span:o,prefixCls:r,children:n.jsx("div",{style:l,children:"Responsive Gutter"})})]}),n.jsxs(s,{gutter:Dn,prefixCls:d,children:[n.jsx(e,{span:o,prefixCls:r,children:n.jsx("div",{style:l,children:"String Gutter"})}),n.jsx(e,{span:o,prefixCls:r,children:n.jsx("div",{style:l,children:"String Gutter"})})]}),n.jsxs(s,{gutter:c,prefixCls:d,children:[n.jsx(e,{span:E,order:Ln,prefixCls:r,children:n.jsx("div",{style:l,children:"Order"})}),n.jsx(e,{span:E,order:Sn,prefixCls:r,children:n.jsx("div",{style:l,children:"Order"})})]}),n.jsxs(s,{gutter:c,prefixCls:d,children:[n.jsx(e,{flex:In,prefixCls:r,children:n.jsx("div",{style:l,children:"Flex 1"})}),n.jsx(e,{flex:vn,prefixCls:r,children:n.jsx("div",{style:l,children:"Flex 2"})})]}),n.jsx(s,{gutter:i,wrap:gn,prefixCls:d,children:n.jsx(e,{span:S,sm:L,md:{span:I,offset:F},lg:v,prefixCls:r,children:n.jsx("div",{style:l,children:"Responsive"})})}),n.jsxs(s,{gutter:i,justify:Gn,prefixCls:d,children:[n.jsx(e,{span:o,prefixCls:r,children:n.jsx("div",{style:l,children:"Justify Responsive"})}),n.jsx(e,{span:o,prefixCls:r,children:n.jsx("div",{style:l,children:"Justify Responsive"})})]})]})},D={parameters:{docs:{description:{story:"Complete dashboard layout: top navigation, sidebar menu, KPI cards, chart area, and table area."}}},render:()=>n.jsxs("div",{style:m,children:[n.jsx(s,{gutter:i,children:n.jsx(e,{span:12,children:n.jsx("div",{style:en,children:"Header (12/12)"})})}),n.jsxs(s,{gutter:i,children:[n.jsx(e,{span:12,md:3,lg:3,children:n.jsx("div",{style:on,children:"Sidebar (12 → 3 → 3)"})}),n.jsxs(e,{span:12,md:9,lg:9,children:[n.jsxs(s,{gutter:i,children:[n.jsx(e,{span:6,lg:3,children:n.jsx("div",{style:a,children:"KPI 1"})}),n.jsx(e,{span:6,lg:3,children:n.jsx("div",{style:a,children:"KPI 2"})}),n.jsx(e,{span:6,lg:3,children:n.jsx("div",{style:a,children:"KPI 3"})}),n.jsx(e,{span:6,lg:3,children:n.jsx("div",{style:a,children:"KPI 4"})})]}),n.jsxs(s,{gutter:i,children:[n.jsx(e,{span:12,lg:8,children:n.jsx("div",{style:y,children:"Main Chart (12 → 8)"})}),n.jsx(e,{span:12,lg:4,children:n.jsx("div",{style:y,children:"Side Panel (12 → 4)"})})]}),n.jsx(s,{gutter:i,children:n.jsx(e,{span:12,children:n.jsx("div",{style:ln,children:"Table Section (12/12)"})})})]})]}),n.jsx(s,{gutter:i,children:n.jsx(e,{span:12,children:n.jsx("div",{style:sn,children:"Footer (12/12)"})})})]})},T={parameters:{docs:{description:{story:"Marketing landing page layout: hero section, feature cards, split content blocks, FAQ area, and footer."}}},render:()=>n.jsxs("div",{style:m,children:[n.jsx(s,{gutter:i,justify:_.center,children:n.jsx(e,{span:12,md:10,lg:8,children:n.jsx("div",{style:y,children:"Hero Section"})})}),n.jsxs(s,{gutter:i,children:[n.jsx(e,{span:12,sm:6,lg:4,children:n.jsx("div",{style:a,children:"Feature Card A"})}),n.jsx(e,{span:12,sm:6,lg:4,children:n.jsx("div",{style:a,children:"Feature Card B"})}),n.jsx(e,{span:12,sm:6,lg:4,children:n.jsx("div",{style:a,children:"Feature Card C"})})]}),n.jsxs(s,{gutter:i,align:g.middle,children:[n.jsx(e,{span:12,md:6,children:n.jsx("div",{style:P,children:"Image / Illustration"})}),n.jsx(e,{span:12,md:6,children:n.jsx("div",{style:P,children:"Value Description"})})]}),n.jsx(s,{gutter:i,children:n.jsx(e,{span:12,children:n.jsx("div",{style:ln,children:"FAQ / Timeline"})})}),n.jsx(s,{gutter:i,children:n.jsx(e,{span:12,children:n.jsx("div",{style:sn,children:"Footer Links"})})})]})},x={parameters:{docs:{description:{story:"Form layout patterns: label/input columns, offset alignment, and action button alignment for admin pages."}}},render:()=>n.jsxs("div",{style:m,children:[n.jsx(s,{gutter:i,children:n.jsx(e,{span:12,children:n.jsx("div",{style:en,children:"Form Header"})})}),n.jsxs(s,{gutter:i,children:[n.jsx(e,{span:12,md:3,children:n.jsx("div",{style:f,children:"Label: Company Name"})}),n.jsx(e,{span:12,md:9,children:n.jsx("div",{style:G,children:"Input Field (span 9)"})})]}),n.jsxs(s,{gutter:i,children:[n.jsx(e,{span:12,md:3,children:n.jsx("div",{style:f,children:"Label: Email"})}),n.jsx(e,{span:12,md:9,children:n.jsx("div",{style:G,children:"Input Field (span 9)"})})]}),n.jsx(s,{gutter:i,children:n.jsx(e,{span:12,md:{span:9,offset:3},children:n.jsx("div",{style:G,children:"Inline Help / Validation Message (offset 3)"})})}),n.jsx(s,{gutter:i,children:n.jsx(e,{span:12,md:{span:9,offset:3},children:n.jsxs(s,{gutter:c,justify:_.end,children:[n.jsx(e,{span:6,md:4,lg:3,children:n.jsx("div",{style:M,children:"Secondary Action"})}),n.jsx(e,{span:6,md:4,lg:3,children:n.jsx("div",{style:M,children:"Primary Action"})})]})})})]})};var B,Y,N;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Grid {...args}>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
    </Grid>
}`,...(N=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:N.source}}};var w,U,X;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Row gutter={GRID_GUTTER}>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LG}><div style={DEMO_BOX_STYLE}>A</div></Col>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LG}><div style={DEMO_BOX_STYLE}>B</div></Col>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LG}><div style={DEMO_BOX_STYLE}>C</div></Col>
    </Row>
}`,...(X=(U=C.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var H,K,b;O.parameters={...O.parameters,docs:{...(H=O.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={DEMO_SECTION_STYLE}>
      <Row gutter={GRID_GUTTER_SPACED} align={GRID_ALIGN.middle} justify={GRID_JUSTIFY.spaceBetween} wrap={WRAP_DISABLED} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}><div style={DEMO_BOX_STYLE}>Span</div></Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}><div style={DEMO_BOX_STYLE}>Span</div></Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_QUARTER} offset={OFFSET_SMALL} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Offset</div>
        </Col>
        <Col span={SPAN_QUARTER} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Offset</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_QUARTER} push={PUSH_SMALL} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Push</div>
        </Col>
        <Col span={SPAN_QUARTER} pull={PULL_SMALL} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Pull</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_RESPONSIVE} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Responsive Gutter</div>
        </Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Responsive Gutter</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_REM} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>String Gutter</div>
        </Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>String Gutter</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_QUARTER} order={ORDER_LAST} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Order</div>
        </Col>
        <Col span={SPAN_QUARTER} order={ORDER_FIRST} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Order</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col flex={FLEX_ONE} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Flex 1</div>
        </Col>
        <Col flex={FLEX_TWO} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Flex 2</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED} wrap={WRAP_ENABLED} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_BASE} sm={SPAN_SM} md={{
        span: SPAN_MD,
        offset: OFFSET_SMALL
      }} lg={SPAN_LG} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Responsive</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED} justify={JUSTIFY_RESPONSIVE} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Justify Responsive</div>
        </Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Justify Responsive</div>
        </Col>
      </Row>

    </div>
}`,...(b=(K=O.parameters)==null?void 0:K.docs)==null?void 0:b.source}}};var W,J,Q;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Complete dashboard layout: top navigation, sidebar menu, KPI cards, chart area, and table area.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_HEADER_BLOCK_STYLE}>Header (12/12)</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={3} lg={3}>
          <div style={DEMO_SIDEBAR_BLOCK_STYLE}>Sidebar (12 → 3 → 3)</div>
        </Col>
        <Col span={12} md={9} lg={9}>
          <Row gutter={GRID_GUTTER_SPACED}>
            <Col span={6} lg={3}>
              <div style={DEMO_WIDGET_BLOCK_STYLE}>KPI 1</div>
            </Col>
            <Col span={6} lg={3}>
              <div style={DEMO_WIDGET_BLOCK_STYLE}>KPI 2</div>
            </Col>
            <Col span={6} lg={3}>
              <div style={DEMO_WIDGET_BLOCK_STYLE}>KPI 3</div>
            </Col>
            <Col span={6} lg={3}>
              <div style={DEMO_WIDGET_BLOCK_STYLE}>KPI 4</div>
            </Col>
          </Row>

          <Row gutter={GRID_GUTTER_SPACED}>
            <Col span={12} lg={8}>
              <div style={DEMO_CHART_BLOCK_STYLE}>Main Chart (12 → 8)</div>
            </Col>
            <Col span={12} lg={4}>
              <div style={DEMO_CHART_BLOCK_STYLE}>Side Panel (12 → 4)</div>
            </Col>
          </Row>

          <Row gutter={GRID_GUTTER_SPACED}>
            <Col span={12}>
              <div style={DEMO_TABLE_BLOCK_STYLE}>Table Section (12/12)</div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_FOOTER_BLOCK_STYLE}>Footer (12/12)</div>
        </Col>
      </Row>
    </div>
}`,...(Q=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,k,Z;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Marketing landing page layout: hero section, feature cards, split content blocks, FAQ area, and footer.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Row gutter={GRID_GUTTER_SPACED} justify={GRID_JUSTIFY.center}>
        <Col span={12} md={10} lg={8}>
          <div style={DEMO_CHART_BLOCK_STYLE}>Hero Section</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} sm={6} lg={4}>
          <div style={DEMO_WIDGET_BLOCK_STYLE}>Feature Card A</div>
        </Col>
        <Col span={12} sm={6} lg={4}>
          <div style={DEMO_WIDGET_BLOCK_STYLE}>Feature Card B</div>
        </Col>
        <Col span={12} sm={6} lg={4}>
          <div style={DEMO_WIDGET_BLOCK_STYLE}>Feature Card C</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED} align={GRID_ALIGN.middle}>
        <Col span={12} md={6}>
          <div style={DEMO_MAIN_BLOCK_STYLE}>Image / Illustration</div>
        </Col>
        <Col span={12} md={6}>
          <div style={DEMO_MAIN_BLOCK_STYLE}>Value Description</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_TABLE_BLOCK_STYLE}>FAQ / Timeline</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_FOOTER_BLOCK_STYLE}>Footer Links</div>
        </Col>
      </Row>
    </div>
}`,...(Z=(k=T.parameters)==null?void 0:k.docs)==null?void 0:Z.source}}};var q,z,$;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Form layout patterns: label/input columns, offset alignment, and action button alignment for admin pages.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_HEADER_BLOCK_STYLE}>Form Header</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={3}>
          <div style={DEMO_FORM_LABEL_STYLE}>Label: Company Name</div>
        </Col>
        <Col span={12} md={9}>
          <div style={DEMO_FORM_FIELD_STYLE}>Input Field (span 9)</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={3}>
          <div style={DEMO_FORM_LABEL_STYLE}>Label: Email</div>
        </Col>
        <Col span={12} md={9}>
          <div style={DEMO_FORM_FIELD_STYLE}>Input Field (span 9)</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={{
        span: 9,
        offset: 3
      }}>
          <div style={DEMO_FORM_FIELD_STYLE}>Inline Help / Validation Message (offset 3)</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={{
        span: 9,
        offset: 3
      }}>
          <Row gutter={GRID_GUTTER_COMPACT} justify={GRID_JUSTIFY.end}>
            <Col span={6} md={4} lg={3}>
              <div style={DEMO_FORM_ACTION_STYLE}>Secondary Action</div>
            </Col>
            <Col span={6} md={4} lg={3}>
              <div style={DEMO_FORM_ACTION_STYLE}>Primary Action</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
}`,...($=(z=x.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const Pn=["Primary","Responsive","ApiExamples","DashboardLayout","MarketingPageLayout","FormLayoutPatterns"];export{O as ApiExamples,D as DashboardLayout,x as FormLayoutPatterns,T as MarketingPageLayout,p as Primary,C as Responsive,Pn as __namedExportsOrder,mn as default};
