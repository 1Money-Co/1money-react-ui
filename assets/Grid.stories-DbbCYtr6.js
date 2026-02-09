import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as M}from"./index-CP2yOfOm.js";import{c as Ne,j as Xe}from"./classnames-LtG3MjBp.js";const ne={top:"top",middle:"middle",bottom:"bottom",stretch:"stretch"},y={start:"start",end:"end",center:"center",spaceAround:"space-around",spaceBetween:"space-between",spaceEvenly:"space-evenly"},c="grid-row",i="grid-col",We=!0,oe=0,Qe="auto",ze=["sm","md","lg"],_={sm:"sm",md:"md",lg:"lg"},H={start:"flex-start",end:"flex-end",center:"center","space-around":"space-around","space-between":"space-between","space-evenly":"space-evenly"},a={gutterX:"--om-grid-gutter-x",gutterY:"--om-grid-gutter-y",gutterXSm:"--om-grid-gutter-x-sm",gutterYSm:"--om-grid-gutter-y-sm",gutterXMd:"--om-grid-gutter-x-md",gutterYMd:"--om-grid-gutter-y-md",gutterXLg:"--om-grid-gutter-x-lg",gutterYLg:"--om-grid-gutter-y-lg",justify:"--om-grid-justify",justifySm:"--om-grid-justify-sm",justifyMd:"--om-grid-justify-md",justifyLg:"--om-grid-justify-lg",colFlex:"--om-grid-col-flex",colFlexPrefix:"--om-grid-col-flex-"},m={noWrap:"no-wrap",align:"align",justify:"justify",offset:"offset",order:"order",push:"push",pull:"pull"},le=r=>r==null?{}:typeof r=="object"?r:{},ie=r=>r==null?oe:typeof r=="number"||typeof r=="string"?r:oe,Ze=r=>{if(Array.isArray(r))return{baseX:ie(r[0]),baseY:ie(r[1]),x:le(r[0]),y:le(r[1])};const A=le(r);return{baseX:ie(r),baseY:oe,x:A,y:{}}},f=r=>{if(r!=null)return typeof r=="number"?`${r}px`:r},en=r=>r==null?{}:typeof r=="number"?{span:r}:r,ge=r=>{if(r!=null)return typeof r=="number"?`${r} ${r} ${Qe}`:r},re=r=>{const{children:A,gutter:L,align:x,justify:E,wrap:I=We,className:h,style:F,prefixCls:B=c,...Y}=r,T=Ne(B),{x:g,y:C,baseX:N,baseY:se}=Ze(L),X=typeof E=="object"&&E!==null,S=X?void 0:E,p=X?E:{},U=S??p[_.lg],v={...U?{[a.justify]:H[U]}:{},...p[_.sm]?{[a.justifySm]:H[p[_.sm]]}:{},...p[_.md]?{[a.justifyMd]:H[p[_.md]]}:{},...p[_.lg]?{[a.justifyLg]:H[p[_.lg]]}:{}},te={...F,[a.gutterX]:f(N),[a.gutterY]:f(se),...g.sm!==void 0?{[a.gutterXSm]:f(g.sm)}:{},...C.sm!==void 0?{[a.gutterYSm]:f(C.sm)}:{},...g.md!==void 0?{[a.gutterXMd]:f(g.md)}:{},...C.md!==void 0?{[a.gutterYMd]:f(C.md)}:{},...g.lg!==void 0?{[a.gutterXLg]:f(g.lg)}:{},...C.lg!==void 0?{[a.gutterYLg]:f(C.lg)}:{},...v},V=T(void 0,Xe(x&&T(`${m.align}-${x}`),S&&T(`${m.justify}-${S}`),I===!1&&T(m.noWrap),h));return e.jsx("div",{...Y,style:te,className:V,children:A})},s=M.memo(re);re.__docgenInfo={description:"",methods:[],displayName:"Row",props:{gutter:{required:!1,tsType:{name:"union",raw:"GridGutterValue | [GridGutterValue, GridGutterValue] | GridGutterResponsive | [GridGutterResponsive, GridGutterResponsive]",elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"tuple",raw:"[GridGutterValue, GridGutterValue]",elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]}],raw:"Record<GridGutterBreakpoint, GridGutterValue>"}],raw:"Partial<Record<GridGutterBreakpoint, GridGutterValue>>"},{name:"tuple",raw:"[GridGutterResponsive, GridGutterResponsive]",elements:[{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]}],raw:"Record<GridGutterBreakpoint, GridGutterValue>"}],raw:"Partial<Record<GridGutterBreakpoint, GridGutterValue>>"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]}],raw:"Record<GridGutterBreakpoint, GridGutterValue>"}],raw:"Partial<Record<GridGutterBreakpoint, GridGutterValue>>"}]}]},description:""},align:{required:!1,tsType:{name:"union",raw:"'top' | 'middle' | 'bottom' | 'stretch'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'stretch'"}]},description:""},justify:{required:!1,tsType:{name:"union",raw:"GridJustify | GridJustifyResponsive",elements:[{name:"union",raw:"'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-evenly'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"union",raw:"'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-evenly'"}]}],raw:"Record<GridJustifyBreakpoint, GridJustify>"}],raw:"Partial<Record<GridJustifyBreakpoint, GridJustify>>"}]},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const me=r=>{const{children:A,span:L,offset:x,order:E,pull:I,push:h,flex:F,sm:B,md:Y,lg:T,className:g,style:C,prefixCls:N=i,...se}=r,{classNameValue:X,flexValue:S,flexVars:p}=M.useMemo(()=>{const v=Ne(N),te={sm:B,md:Y,lg:T},V=[],Re={},P=(d,w)=>{d!=null&&V.push(v(w(d)))},$e=(d,w)=>{if(w==null)return;const o=en(w),Je=o.flex!==void 0&&o.flex!==null;if(o.span!==void 0&&o.span!==null&&!Je&&P(o.span,u=>`${d}-${u}`),P(o.offset,u=>`${d}-${m.offset}-${u}`),P(o.order,u=>`${d}-${m.order}-${u}`),P(o.pull,u=>`${d}-${m.pull}-${u}`),P(o.push,u=>`${d}-${m.push}-${u}`),o.flex!==void 0&&o.flex!==null){const u=ge(o.flex);u!==void 0&&(Re[`${a.colFlexPrefix}${d}`]=u)}};ze.forEach(d=>{$e(d,te[d])});const Ee=ge(F);return{classNameValue:v(void 0,Xe(L!=null&&!Ee&&v(`${L}`),x!=null&&v(`${m.offset}-${x}`),E!=null&&v(`${m.order}-${E}`),h!=null&&v(`${m.push}-${h}`),I!=null&&v(`${m.pull}-${I}`),...V,g)),flexValue:Ee,flexVars:Re}},[g,F,T,Y,x,E,N,I,h,B,L]),U=M.useMemo(()=>({...C,...S?{[a.colFlex]:S}:{},...p}),[C,S,p]);return e.jsx("div",{...se,style:U,className:X,children:A})},n=M.memo(me);me.__docgenInfo={description:"",methods:[],displayName:"Col",props:{span:{required:!1,tsType:{name:"number"},description:""},offset:{required:!1,tsType:{name:"number"},description:""},order:{required:!1,tsType:{name:"number"},description:""},pull:{required:!1,tsType:{name:"number"},description:""},push:{required:!1,tsType:{name:"number"},description:""},flex:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},sm:{required:!1,tsType:{name:"union",raw:"number | GridColSizeConfig",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  span?: number;
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  flex?: number | string;
}`,signature:{properties:[{key:"span",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}},{key:"order",value:{name:"number",required:!1}},{key:"pull",value:{name:"number",required:!1}},{key:"push",value:{name:"number",required:!1}},{key:"flex",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:""},md:{required:!1,tsType:{name:"union",raw:"number | GridColSizeConfig",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  span?: number;
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  flex?: number | string;
}`,signature:{properties:[{key:"span",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}},{key:"order",value:{name:"number",required:!1}},{key:"pull",value:{name:"number",required:!1}},{key:"push",value:{name:"number",required:!1}},{key:"flex",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:""},lg:{required:!1,tsType:{name:"union",raw:"number | GridColSizeConfig",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  span?: number;
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  flex?: number | string;
}`,signature:{properties:[{key:"span",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}},{key:"order",value:{name:"number",required:!1}},{key:"pull",value:{name:"number",required:!1}},{key:"push",value:{name:"number",required:!1}},{key:"flex",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const Ue=r=>e.jsx(re,{...r}),D=M.memo(Ue);D.Row=re;D.Col=me;Ue.__docgenInfo={description:"",methods:[],displayName:"GridComponent",props:{gutter:{required:!1,tsType:{name:"union",raw:"GridGutterValue | [GridGutterValue, GridGutterValue] | GridGutterResponsive | [GridGutterResponsive, GridGutterResponsive]",elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"tuple",raw:"[GridGutterValue, GridGutterValue]",elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]}],raw:"Record<GridGutterBreakpoint, GridGutterValue>"}],raw:"Partial<Record<GridGutterBreakpoint, GridGutterValue>>"},{name:"tuple",raw:"[GridGutterResponsive, GridGutterResponsive]",elements:[{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]}],raw:"Record<GridGutterBreakpoint, GridGutterValue>"}],raw:"Partial<Record<GridGutterBreakpoint, GridGutterValue>>"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]}],raw:"Record<GridGutterBreakpoint, GridGutterValue>"}],raw:"Partial<Record<GridGutterBreakpoint, GridGutterValue>>"}]}]},description:""},align:{required:!1,tsType:{name:"union",raw:"'top' | 'middle' | 'bottom' | 'stretch'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'stretch'"}]},description:""},justify:{required:!1,tsType:{name:"union",raw:"GridJustify | GridJustifyResponsive",elements:[{name:"union",raw:"'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-evenly'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"union",raw:"'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-evenly'"}]}],raw:"Record<GridJustifyBreakpoint, GridJustify>"}],raw:"Partial<Record<GridJustifyBreakpoint, GridJustify>>"}]},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const pe=16,ce="1px dashed currentColor",t={padding:pe,border:ce},Ve=16,nn={display:"grid",gap:Ve},_e={display:"grid",gap:Ve,padding:pe,border:ce,borderRadius:8},R={padding:pe,border:ce,borderRadius:8,minHeight:48,display:"flex",alignItems:"center",justifyContent:"center"},He={...R,minHeight:56},rn={...R,minHeight:300,alignItems:"flex-start"},Ce={...R,minHeight:200,alignItems:"flex-start"},Ke={...R,minHeight:56},O={...R,minHeight:96},ue={...R,minHeight:220},qe={...R,minHeight:180},ve={...R,minHeight:44},ae={...R,minHeight:44,justifyContent:"flex-start"},fe={...R,minHeight:44,justifyContent:"flex-end"},sn=Object.values(ne),tn=Object.values(y),ln=16,an=16,ke=[16,16],b=8,l=[ln,an],dn=8,on=16,un=24,mn={sm:dn,md:on,lg:un},pn="1rem",de=4,Q=12,z=6,Z=4,ee=3,G=6,j=3,Ge=1,cn=1,_n=1,Rn=1,En=2,gn=1,Cn=2,vn=!0,fn=!1,Gn={[_.sm]:y.start,[_.md]:y.spaceBetween,[_.lg]:y.end},Dn={title:"Components/Grid",component:D,argTypes:{gutter:{control:"object"},align:{control:"select",options:sn},justify:{control:"select",options:tn},wrap:{control:"boolean"},prefixCls:{control:"text"}},args:{gutter:ke,align:ne.top,justify:y.start,wrap:!0},tags:["autodocs"]},K={render:r=>e.jsxs(D,{...r,children:[e.jsx(D.Col,{span:de,children:e.jsx("div",{style:t,children:"4"})}),e.jsx(D.Col,{span:de,children:e.jsx("div",{style:t,children:"4"})}),e.jsx(D.Col,{span:de,children:e.jsx("div",{style:t,children:"4"})})]})},q={render:()=>e.jsxs(s,{gutter:ke,children:[e.jsx(n,{span:Q,sm:z,md:Z,lg:ee,children:e.jsx("div",{style:t,children:"A"})}),e.jsx(n,{span:Q,sm:z,md:Z,lg:ee,children:e.jsx("div",{style:t,children:"B"})}),e.jsx(n,{span:Q,sm:z,md:Z,lg:ee,children:e.jsx("div",{style:t,children:"C"})})]})},k={render:()=>e.jsxs("div",{style:nn,children:[e.jsxs(s,{gutter:l,align:ne.middle,justify:y.spaceBetween,wrap:fn,prefixCls:c,children:[e.jsx(n,{span:G,prefixCls:i,children:e.jsx("div",{style:t,children:"Span"})}),e.jsx(n,{span:G,prefixCls:i,children:e.jsx("div",{style:t,children:"Span"})})]}),e.jsxs(s,{gutter:b,prefixCls:c,children:[e.jsx(n,{span:j,offset:Ge,prefixCls:i,children:e.jsx("div",{style:t,children:"Offset"})}),e.jsx(n,{span:j,prefixCls:i,children:e.jsx("div",{style:t,children:"Offset"})})]}),e.jsxs(s,{gutter:b,prefixCls:c,children:[e.jsx(n,{span:j,push:cn,prefixCls:i,children:e.jsx("div",{style:t,children:"Push"})}),e.jsx(n,{span:j,pull:_n,prefixCls:i,children:e.jsx("div",{style:t,children:"Pull"})})]}),e.jsxs(s,{gutter:mn,prefixCls:c,children:[e.jsx(n,{span:G,prefixCls:i,children:e.jsx("div",{style:t,children:"Responsive Gutter"})}),e.jsx(n,{span:G,prefixCls:i,children:e.jsx("div",{style:t,children:"Responsive Gutter"})})]}),e.jsxs(s,{gutter:pn,prefixCls:c,children:[e.jsx(n,{span:G,prefixCls:i,children:e.jsx("div",{style:t,children:"String Gutter"})}),e.jsx(n,{span:G,prefixCls:i,children:e.jsx("div",{style:t,children:"String Gutter"})})]}),e.jsxs(s,{gutter:b,prefixCls:c,children:[e.jsx(n,{span:j,order:En,prefixCls:i,children:e.jsx("div",{style:t,children:"Order"})}),e.jsx(n,{span:j,order:Rn,prefixCls:i,children:e.jsx("div",{style:t,children:"Order"})})]}),e.jsxs(s,{gutter:b,prefixCls:c,children:[e.jsx(n,{flex:gn,prefixCls:i,children:e.jsx("div",{style:t,children:"Flex 1"})}),e.jsx(n,{flex:Cn,prefixCls:i,children:e.jsx("div",{style:t,children:"Flex 2"})})]}),e.jsx(s,{gutter:l,wrap:vn,prefixCls:c,children:e.jsx(n,{span:Q,sm:z,md:{span:Z,offset:Ge},lg:ee,prefixCls:i,children:e.jsx("div",{style:t,children:"Responsive"})})}),e.jsxs(s,{gutter:l,justify:Gn,prefixCls:c,children:[e.jsx(n,{span:G,prefixCls:i,children:e.jsx("div",{style:t,children:"Justify Responsive"})}),e.jsx(n,{span:G,prefixCls:i,children:e.jsx("div",{style:t,children:"Justify Responsive"})})]})]})},$={parameters:{docs:{description:{story:"Complete dashboard layout: top navigation, sidebar menu, KPI cards, chart area, and table area."}}},render:()=>e.jsxs("div",{style:_e,children:[e.jsx(s,{gutter:l,children:e.jsx(n,{span:12,children:e.jsx("div",{style:He,children:"Header (12/12)"})})}),e.jsxs(s,{gutter:l,children:[e.jsx(n,{span:12,md:3,lg:3,children:e.jsx("div",{style:rn,children:"Sidebar (12 → 3 → 3)"})}),e.jsxs(n,{span:12,md:9,lg:9,children:[e.jsxs(s,{gutter:l,children:[e.jsx(n,{span:6,lg:3,children:e.jsx("div",{style:O,children:"KPI 1"})}),e.jsx(n,{span:6,lg:3,children:e.jsx("div",{style:O,children:"KPI 2"})}),e.jsx(n,{span:6,lg:3,children:e.jsx("div",{style:O,children:"KPI 3"})}),e.jsx(n,{span:6,lg:3,children:e.jsx("div",{style:O,children:"KPI 4"})})]}),e.jsxs(s,{gutter:l,children:[e.jsx(n,{span:12,lg:8,children:e.jsx("div",{style:ue,children:"Main Chart (12 → 8)"})}),e.jsx(n,{span:12,lg:4,children:e.jsx("div",{style:ue,children:"Side Panel (12 → 4)"})})]}),e.jsx(s,{gutter:l,children:e.jsx(n,{span:12,children:e.jsx("div",{style:qe,children:"Table Section (12/12)"})})})]})]}),e.jsx(s,{gutter:l,children:e.jsx(n,{span:12,children:e.jsx("div",{style:Ke,children:"Footer (12/12)"})})})]})},J={parameters:{docs:{description:{story:"Marketing landing page layout: hero section, feature cards, split content blocks, FAQ area, and footer."}}},render:()=>e.jsxs("div",{style:_e,children:[e.jsx(s,{gutter:l,justify:y.center,children:e.jsx(n,{span:12,md:10,lg:8,children:e.jsx("div",{style:ue,children:"Hero Section"})})}),e.jsxs(s,{gutter:l,children:[e.jsx(n,{span:12,sm:6,lg:4,children:e.jsx("div",{style:O,children:"Feature Card A"})}),e.jsx(n,{span:12,sm:6,lg:4,children:e.jsx("div",{style:O,children:"Feature Card B"})}),e.jsx(n,{span:12,sm:6,lg:4,children:e.jsx("div",{style:O,children:"Feature Card C"})})]}),e.jsxs(s,{gutter:l,align:ne.middle,children:[e.jsx(n,{span:12,md:6,children:e.jsx("div",{style:Ce,children:"Image / Illustration"})}),e.jsx(n,{span:12,md:6,children:e.jsx("div",{style:Ce,children:"Value Description"})})]}),e.jsx(s,{gutter:l,children:e.jsx(n,{span:12,children:e.jsx("div",{style:qe,children:"FAQ / Timeline"})})}),e.jsx(s,{gutter:l,children:e.jsx(n,{span:12,children:e.jsx("div",{style:Ke,children:"Footer Links"})})})]})},W={parameters:{docs:{description:{story:"Form layout patterns: label/input columns, offset alignment, and action button alignment for admin pages."}}},render:()=>e.jsxs("div",{style:_e,children:[e.jsx(s,{gutter:l,children:e.jsx(n,{span:12,children:e.jsx("div",{style:He,children:"Form Header"})})}),e.jsxs(s,{gutter:l,children:[e.jsx(n,{span:12,md:3,children:e.jsx("div",{style:ve,children:"Label: Company Name"})}),e.jsx(n,{span:12,md:9,children:e.jsx("div",{style:ae,children:"Input Field (span 9)"})})]}),e.jsxs(s,{gutter:l,children:[e.jsx(n,{span:12,md:3,children:e.jsx("div",{style:ve,children:"Label: Email"})}),e.jsx(n,{span:12,md:9,children:e.jsx("div",{style:ae,children:"Input Field (span 9)"})})]}),e.jsx(s,{gutter:l,children:e.jsx(n,{span:12,md:{span:9,offset:3},children:e.jsx("div",{style:ae,children:"Inline Help / Validation Message (offset 3)"})})}),e.jsx(s,{gutter:l,children:e.jsx(n,{span:12,md:{span:9,offset:3},children:e.jsxs(s,{gutter:b,justify:y.end,children:[e.jsx(n,{span:6,md:4,lg:3,children:e.jsx("div",{style:fe,children:"Secondary Action"})}),e.jsx(n,{span:6,md:4,lg:3,children:e.jsx("div",{style:fe,children:"Primary Action"})})]})})})]})};var ye,xe,Te;K.parameters={...K.parameters,docs:{...(ye=K.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <Grid {...args}>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
    </Grid>
}`,...(Te=(xe=K.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Se,De,Oe;q.parameters={...q.parameters,docs:{...(Se=q.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <Row gutter={GRID_GUTTER}>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LG}><div style={DEMO_BOX_STYLE}>A</div></Col>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LG}><div style={DEMO_BOX_STYLE}>B</div></Col>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LG}><div style={DEMO_BOX_STYLE}>C</div></Col>
    </Row>
}`,...(Oe=(De=q.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var Le,Ie,he;k.parameters={...k.parameters,docs:{...(Le=k.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(he=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:he.source}}};var je,Ae,Pe;$.parameters={...$.parameters,docs:{...(je=$.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Pe=(Ae=$.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var we,be,Me;J.parameters={...J.parameters,docs:{...(we=J.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Me=(be=J.parameters)==null?void 0:be.docs)==null?void 0:Me.source}}};var Fe,Be,Ye;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ye=(Be=W.parameters)==null?void 0:Be.docs)==null?void 0:Ye.source}}};const On=["Primary","Responsive","ApiExamples","DashboardLayout","MarketingPageLayout","FormLayoutPatterns"];export{k as ApiExamples,$ as DashboardLayout,W as FormLayoutPatterns,J as MarketingPageLayout,K as Primary,q as Responsive,On as __namedExportsOrder,Dn as default};
