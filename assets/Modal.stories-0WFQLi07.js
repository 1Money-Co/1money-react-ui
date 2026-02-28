import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-CP2yOfOm.js";import{f as y}from"./index-DCiaR2iG.js";import{M as m}from"./Modal-Ci0SGV8h.js";import{T as j}from"./Toast-BMjYv_F5.js";import{B as x}from"./Button-BnJcnm8i.js";/* empty css               */import"./componentbase.esm-4JClMOy3.js";import"./button.esm-P8t-Ut6N.js";import"./index.esm-0rHaTxuV.js";import"./iconbase.esm-CgcK1F5D.js";import"./ripple.esm-B4ep2fnx.js";import"./tooltip.esm-DWjguKwN.js";import"./portal.esm-DsCazcPz.js";import"./index-BOAxdYzW.js";import"./csstransition.esm-B5iK3TG5.js";import"./index.esm-ByOqZbnP.js";import"./overlayservice.esm-BSzR65vr.js";import"./classnames-LtG3MjBp.js";import"./index.esm-DKy0vDUU.js";import"./index.esm-DB2qnA-K.js";import"./index.esm-BUPvvfCY.js";import"./TransitionGroup-BcWs-nSM.js";import"./Icons-DVar4d28.js";import"./Typography-BgvqIFCt.js";import"./Spinner-CEQHadij.js";const Q={title:"Components/Modal",component:m,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"modal",onClick:y()},tags:["autodocs"]},n={args:{prefixCls:"modal"},tags:["!autodocs"],render:function(s){const r=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:t=>{var a;return(a=r.current)==null?void 0:a.show()},children:"Show Normal Modal"}),e.jsx(m,{...s,header:"Show Message Title",ref:r,children:e.jsx("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})}},i={args:{prefixCls:"modal",type:"confirm"},render:function(s){const r=l.useRef(null),t=l.useRef(null),a=()=>{var o;(o=t.current)==null||o.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},w=()=>{var o;(o=t.current)==null||o.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})};return e.jsxs(e.Fragment,{children:[e.jsx(x,{security:"help",rounded:!0,onClick:o=>{var c;return(c=r.current)==null?void 0:c.show({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",defaultFocus:"accept",accept:a,reject:w})},children:"Show Confirm Modal"}),e.jsx(j,{ref:t}),e.jsx(m,{...s,header:"Show Message Title",ref:r})]})}};var u,d,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    prefixCls: 'modal'
  },
  tags: ['!autodocs'],
  render: function Render(args) {
    const modal = useRef<ModalHandlers>(null);
    return <>
      <Button onClick={e => modal.current?.show()}>
        Show Normal Modal
      </Button>
      <Modal {...args as any} header='Show Message Title' ref={modal}>
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Modal>
    </>;
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var f,h,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    prefixCls: 'modal',
    type: 'confirm'
  },
  render: function Render(args) {
    const modal = useRef<ModalHandlers>(null);
    const toast = useRef<ToastClass>(null);
    const accept = () => {
      toast.current?.show({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'You have accepted',
        life: 3000
      });
    };
    const reject = () => {
      toast.current?.show({
        severity: 'warn',
        summary: 'Rejected',
        detail: 'You have rejected',
        life: 3000
      });
    };
    return <>
      <Button security='help' rounded onClick={e => modal.current?.show({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        defaultFocus: 'accept',
        accept,
        reject
      })}>
        Show Confirm Modal
      </Button>
      <Toast ref={toast} />
      <Modal {...args as any} header='Show Message Title' ref={modal} />
    </>;
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const V=["Normal","Confirm"];export{i as Confirm,n as Normal,V as __namedExportsOrder,Q as default};
