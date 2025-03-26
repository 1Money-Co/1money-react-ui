import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{T as e}from"./Tooltip-Dqx3aHWY.js";import{T as l}from"./Typography-rC6RsJzc.js";import"./index-DGOumNSj.js";import"./classnames-CPOy7I0U.js";const x={title:"Components/Tooltip",component:e,argTypes:{className:{control:"text"},prefixCls:{control:"text"},openEvents:{control:"object"},closeEvents:{control:"object"}},args:{prefixCls:"tooltip"},tags:["autodocs"]},i=o=>{const{position:a}=o;return t.jsxs(t.Fragment,{children:[t.jsx(l.Body,{size:"s",className:"!tw-text-primary-white",children:"Please provide your US EIN/TIN, Foreign Tax ID, or SSN (for sole proprietorships if based in the U.S.)."}),t.jsxs("ul",{className:"!tw-list-disc tw-pl-4",children:[t.jsx("li",{children:t.jsx(l.Body,{size:"s",className:"!tw-text-primary-white",children:"If you are a U.S.-based business, this will be a nine-digit number (e.g., 9XX-XX-XXXX)."})}),t.jsx("li",{children:t.jsx(l.Body,{size:"s",className:"!tw-text-primary-white",children:"If you are a non-U.S. business, this will be a mix of characters and numbers specific to your jurisdiction."})}),t.jsx("li",{children:t.jsx(l.Body,{size:"s",className:"!tw-text-primary-white",children:'If you do not have a Tax ID, please indicate "NA."'})})]})]})},r={args:{prefixCls:"tooltip",openEvents:{mouseover:!1,click:!0,focus:!1,mouseenter:!1},closeEvents:{mouseleave:!1,blur:!1,mouseout:!1,click:!0}},render:o=>t.jsxs("div",{style:{display:"grid",gap:"128px",textAlign:"center",gridTemplateColumns:"repeat(4, 1fr)",width:"100%",maxWidth:"1000px",margin:"0 auto",padding:"120px"},children:[t.jsx("button",{id:"tooltip-right",children:"Right"}),t.jsx("button",{id:"tooltip-bottom-start",children:"Bottom Start"}),t.jsx("button",{id:"tooltip-bottom-end",children:"Bottom End"}),t.jsx("button",{id:"tooltip-left",children:"Left"}),t.jsx("button",{id:"tooltip-right-start",children:"Right Start"}),t.jsx("button",{id:"tooltip-top",children:"Top"}),t.jsx("button",{id:"tooltip-bottom",children:"Bottom"}),t.jsx("button",{id:"tooltip-left-start",children:"Left Start"}),t.jsx("button",{id:"tooltip-right-end",children:"Right End"}),t.jsx("button",{id:"tooltip-top-start",children:"Top Start"}),t.jsx("button",{id:"tooltip-top-end",children:"Top End"}),t.jsx("button",{id:"tooltip-left-end",children:"Left End"}),t.jsx(e,{...o,anchorSelect:"#tooltip-left",place:"left",children:t.jsx(i,{position:"left"})}),t.jsx(e,{...o,anchorSelect:"#tooltip-top",place:"top",children:t.jsx(i,{position:"top"})}),t.jsx(e,{...o,anchorSelect:"#tooltip-bottom",place:"bottom",children:t.jsx(i,{position:"bottom"})}),t.jsx(e,{...o,anchorSelect:"#tooltip-right",place:"right",children:t.jsx(i,{position:"right"})}),t.jsx(e,{...o,anchorSelect:"#tooltip-left-start",place:"left-start",children:t.jsx(i,{position:"left-start"})}),t.jsx(e,{...o,anchorSelect:"#tooltip-left-end",place:"left-end",children:t.jsx(i,{position:"left-end"})}),t.jsx(e,{...o,anchorSelect:"#tooltip-right-start",place:"right-start",children:t.jsx(i,{position:"right-start"})}),t.jsx(e,{...o,anchorSelect:"#tooltip-right-end",place:"right-end",children:t.jsx(i,{position:"right-end"})}),t.jsx(e,{...o,anchorSelect:"#tooltip-top-start",place:"top-start",children:t.jsx(i,{position:"top-start"})}),t.jsx(e,{...o,anchorSelect:"#tooltip-top-end",place:"top-end",children:t.jsx(i,{position:"top-end"})}),t.jsx(e,{...o,anchorSelect:"#tooltip-bottom-start",place:"bottom-start",children:t.jsx(i,{position:"bottom-start"})}),t.jsx(e,{...o,anchorSelect:"#tooltip-bottom-end",place:"bottom-end",children:t.jsx(i,{position:"bottom-end"})})]})};var s,n,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    prefixCls: 'tooltip',
    openEvents: {
      mouseover: false,
      click: true,
      focus: false,
      mouseenter: false
    },
    closeEvents: {
      mouseleave: false,
      blur: false,
      mouseout: false,
      click: true
    }
  },
  render: args => <div style={{
    display: 'grid',
    gap: '128px',
    textAlign: 'center',
    gridTemplateColumns: 'repeat(4, 1fr)',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '120px'
  }}>

    <button id='tooltip-right'>
      Right
    </button>
    <button id='tooltip-bottom-start'>
      Bottom Start
    </button>
    <button id='tooltip-bottom-end'>
      Bottom End
    </button>
    <button id='tooltip-left'>
      Left
    </button>
    <button id='tooltip-right-start'>
      Right Start
    </button>
    <button id='tooltip-top'>
      Top
    </button>
    <button id='tooltip-bottom'>
      Bottom
    </button>
    <button id='tooltip-left-start'>
      Left Start
    </button>
    <button id='tooltip-right-end'>
      Right End
    </button>
    <button id='tooltip-top-start'>
      Top Start
    </button>
    <button id='tooltip-top-end'>
      Top End
    </button>
    <button id='tooltip-left-end'>
      Left End
    </button>
    <Tooltip {...args} anchorSelect="#tooltip-left" place="left">
      <Overlay position="left" />
    </Tooltip>
    <Tooltip {...args} anchorSelect="#tooltip-top" place="top">
      <Overlay position="top" />
    </Tooltip>
    <Tooltip {...args} anchorSelect="#tooltip-bottom" place="bottom">
      <Overlay position="bottom" />
    </Tooltip>
    <Tooltip {...args} anchorSelect="#tooltip-right" place="right">
      <Overlay position="right" />
    </Tooltip>
    <Tooltip {...args} anchorSelect="#tooltip-left-start" place="left-start">
      <Overlay position="left-start" />
    </Tooltip>
    <Tooltip {...args} anchorSelect="#tooltip-left-end" place="left-end">
      <Overlay position="left-end" />
    </Tooltip>
    <Tooltip {...args} anchorSelect="#tooltip-right-start" place="right-start">
      <Overlay position="right-start" />
    </Tooltip>
    <Tooltip {...args} anchorSelect="#tooltip-right-end" place="right-end">
      <Overlay position="right-end" />
    </Tooltip>
    <Tooltip {...args} anchorSelect="#tooltip-top-start" place="top-start">
      <Overlay position="top-start" />
    </Tooltip>
    <Tooltip {...args} anchorSelect="#tooltip-top-end" place="top-end">
      <Overlay position="top-end" />
    </Tooltip>
    <Tooltip {...args} anchorSelect="#tooltip-bottom-start" place="bottom-start">
      <Overlay position="bottom-start" />
    </Tooltip>
    <Tooltip {...args} anchorSelect="#tooltip-bottom-end" place="bottom-end">
      <Overlay position="bottom-end" />
    </Tooltip>
  </div>
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const b=["Primary"];export{r as Primary,b as __namedExportsOrder,x as default};
