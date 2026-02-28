import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-CP2yOfOm.js";import{B as p}from"./Button-BnJcnm8i.js";import{D as n}from"./Drawer-EUejCZLb.js";/* empty css               *//* empty css              */import"./button.esm-P8t-Ut6N.js";import"./componentbase.esm-4JClMOy3.js";import"./index.esm-0rHaTxuV.js";import"./iconbase.esm-CgcK1F5D.js";import"./ripple.esm-B4ep2fnx.js";import"./tooltip.esm-DWjguKwN.js";import"./portal.esm-DsCazcPz.js";import"./index-BOAxdYzW.js";import"./Spinner-CEQHadij.js";import"./classnames-LtG3MjBp.js";import"./csstransition.esm-B5iK3TG5.js";import"./index.esm-ByOqZbnP.js";import"./Icons-DVar4d28.js";const k={title:"Components/Drawer",component:n,argTypes:{className:{control:"text"},prefixCls:{control:"text"},position:{control:"select",options:["right","left","top","bottom"]}},args:{prefixCls:"drawer"},tags:["autodocs"]},r={args:{prefixCls:"drawer",fullScreen:!1},render:function(a){const[m,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>t(!0),children:"Show Drawer"}),e.jsxs(n,{visible:m,onHide:()=>t(!1),...a,children:[e.jsx("h2",{children:"Drawer"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})}};var i,o,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    prefixCls: 'drawer',
    fullScreen: false
  },
  render: function Render(args: any) {
    const [visible, setVisible] = useState(false);
    return <>
      <Button onClick={() => setVisible(true)}>
        Show Drawer
      </Button>
      <Drawer visible={visible} onHide={() => setVisible(false)} {...args}>
        <h2>Drawer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Drawer>
    </>;
  }
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const H=["Primary"];export{r as Primary,H as __namedExportsOrder,k as default};
