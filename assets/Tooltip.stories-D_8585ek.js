import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{T as r}from"./Tooltip-rGQktoWx.js";import"./index-Ca8FO3x4.js";import"./setPrototypeOf-SZTCiYDs.js";import"./index-CA-MFgIQ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./classnames-B-6LArsQ.js";import"./Icons-alg6q5xe.js";const b={title:"Components/Tooltip",component:r,argTypes:{className:{control:"text"},prefixCls:{control:"text"},trigger:{control:"check",options:["click","hover","focus"]}},args:{prefixCls:"tooltip"},tags:["autodocs"]},t=e=>{const{position:n}=e;return o.jsxs("div",{style:{width:"80px",textAlign:"center"},children:[o.jsx("span",{children:"Overlay Data"}),o.jsx("br",{}),o.jsxs("span",{children:["Tooltip ",n]})]})},p={args:{prefixCls:"tooltip",trigger:["hover"]},render:e=>o.jsxs("div",{style:{display:"grid",gap:"128px",textAlign:"center",gridTemplateColumns:"repeat(4, 1fr)",width:"100%",maxWidth:"1000px",margin:"0 auto",padding:"20px 60px"},children:[o.jsx(r,{...e,placement:"left",overlay:o.jsx(t,{position:"left"}),children:o.jsx("span",{style:{border:"1px solid green",borderRadius:"8px",cursor:"pointer"},children:"Left"})}),o.jsx(r,{...e,placement:"top",overlay:o.jsx(t,{position:"top"}),children:o.jsx("span",{style:{border:"1px solid green",borderRadius:"8px",cursor:"pointer"},children:"Top"})}),o.jsx(r,{...e,placement:"bottom",overlay:o.jsx(t,{position:"bottom"}),children:o.jsx("span",{style:{border:"1px solid green",borderRadius:"8px",cursor:"pointer"},children:"Bottom"})}),o.jsx(r,{...e,placement:"right",overlay:o.jsx(t,{position:"right"}),children:o.jsx("span",{style:{border:"1px solid green",borderRadius:"8px",cursor:"pointer"},children:"Right"})}),o.jsx(r,{...e,placement:"leftTop",overlay:o.jsx(t,{position:"leftTop"}),children:o.jsx("span",{style:{border:"1px solid green",borderRadius:"8px",cursor:"pointer"},children:"Left Top"})}),o.jsx(r,{...e,placement:"leftBottom",overlay:o.jsx(t,{position:"leftBottom"}),children:o.jsx("span",{style:{border:"1px solid green",borderRadius:"8px",cursor:"pointer"},children:"Left Bottom"})}),o.jsx(r,{...e,placement:"rightTop",overlay:o.jsx(t,{position:"rightTop"}),children:o.jsx("span",{style:{border:"1px solid green",borderRadius:"8px",cursor:"pointer"},children:"Right Top"})}),o.jsx(r,{...e,placement:"rightBottom",overlay:o.jsx(t,{position:"rightBottom"}),children:o.jsx("span",{style:{border:"1px solid green",borderRadius:"8px",cursor:"pointer"},children:"Right Bottom"})}),o.jsx(r,{...e,placement:"topLeft",overlay:o.jsx(t,{position:"topLeft"}),children:o.jsx("span",{style:{border:"1px solid green",borderRadius:"8px",cursor:"pointer"},children:"Top Left"})}),o.jsx(r,{...e,placement:"topRight",overlay:o.jsx(t,{position:"topRight"}),children:o.jsx("span",{style:{border:"1px solid green",borderRadius:"8px",cursor:"pointer"},children:"Top Right"})}),o.jsx(r,{...e,placement:"bottomLeft",overlay:o.jsx(t,{position:"bottomLeft"}),children:o.jsx("span",{style:{border:"1px solid green",borderRadius:"8px",cursor:"pointer"},children:"Bottom Left"})}),o.jsx(r,{...e,placement:"bottomRight",overlay:o.jsx(t,{position:"bottomRight"}),children:o.jsx("span",{style:{border:"1px solid green",borderRadius:"8px",cursor:"pointer"},children:"Bottom Right"})})]})};var i,s,l;p.parameters={...p.parameters,docs:{...(i=p.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    prefixCls: 'tooltip',
    trigger: ['hover']
  },
  render: args => <div style={{
    display: 'grid',
    gap: '128px',
    textAlign: 'center',
    gridTemplateColumns: 'repeat(4, 1fr)',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px 60px'
  }}>
    <Tooltip {...args} placement="left" overlay={<Overlay position="left" />}>
      <span style={{
        border: '1px solid green',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>Left</span>
    </Tooltip>
    <Tooltip {...args} placement="top" overlay={<Overlay position="top" />}>
      <span style={{
        border: '1px solid green',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>Top</span>
    </Tooltip>
    <Tooltip {...args} placement="bottom" overlay={<Overlay position="bottom" />}>
      <span style={{
        border: '1px solid green',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>Bottom</span>
    </Tooltip>
    <Tooltip {...args} placement="right" overlay={<Overlay position="right" />}>
      <span style={{
        border: '1px solid green',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>Right</span>
    </Tooltip>
    <Tooltip {...args} placement="leftTop" overlay={<Overlay position="leftTop" />}>
      <span style={{
        border: '1px solid green',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>Left Top</span>
    </Tooltip>
    <Tooltip {...args} placement="leftBottom" overlay={<Overlay position="leftBottom" />}>
      <span style={{
        border: '1px solid green',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>Left Bottom</span>
    </Tooltip>
    <Tooltip {...args} placement="rightTop" overlay={<Overlay position="rightTop" />}>
      <span style={{
        border: '1px solid green',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>Right Top</span>
    </Tooltip>
    <Tooltip {...args} placement="rightBottom" overlay={<Overlay position="rightBottom" />}>
      <span style={{
        border: '1px solid green',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>Right Bottom</span>
    </Tooltip>
    <Tooltip {...args} placement="topLeft" overlay={<Overlay position="topLeft" />}>
      <span style={{
        border: '1px solid green',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>Top Left</span>
    </Tooltip>
    <Tooltip {...args} placement="topRight" overlay={<Overlay position="topRight" />}>
      <span style={{
        border: '1px solid green',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>Top Right</span>
    </Tooltip>
    <Tooltip {...args} placement="bottomLeft" overlay={<Overlay position="bottomLeft" />}>
      <span style={{
        border: '1px solid green',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>Bottom Left</span>
    </Tooltip>
    <Tooltip {...args} placement="bottomRight" overlay={<Overlay position="bottomRight" />}>
      <span style={{
        border: '1px solid green',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>Bottom Right</span>
    </Tooltip>
  </div>
}`,...(l=(s=p.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const u=["Primary"];export{p as Primary,u as __namedExportsOrder,b as default};
