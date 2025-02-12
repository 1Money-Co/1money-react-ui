import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./index-DGOumNSj.js";import{c as y,C as x}from"./confirmpopup.esm-vETkgBnI.js";import{c as h,p as l}from"./classnames-CL-cd9Z_.js";import{T as C}from"./Toast-DonXTJsG.js";import{B as w}from"./Button-B363lqK4.js";import"./componentbase.esm-CcTVhaot.js";import"./button.esm-Crft-G1Z.js";import"./index.esm-CB1fIbQ-.js";import"./iconbase.esm-B9JVR04N.js";import"./ripple.esm-D7U1XS2t.js";import"./tooltip.esm-B4idE_5U.js";import"./portal.esm-B5s9sLsr.js";import"./index-BmTs--ql.js";import"./csstransition.esm-CO4t0ang.js";import"./overlayservice.esm-CGvNle0C.js";import"./index.esm-DH2A1hkI.js";import"./index.esm-BUJvaMl0.js";import"./index.esm-CEE_g2h2.js";import"./index.esm-CcmjrRHQ.js";import"./TransitionGroup-B_wexrQj.js";import"./Loading-C8_sBVCj.js";const s=t.forwardRef((m,a)=>{const{className:n,prefixCls:o="popup",...i}=m,c=h(o);return t.useImperativeHandle(a,()=>({show:e=>y(e)}),[]),r.jsx(x,{...i,className:c(void 0,n)})});s.propTypes={className:l.string,prefixCls:l.string};t.memo(s);s.__docgenInfo={description:"",methods:[{name:"show",docblock:null,modifiers:[],params:[{name:"params",optional:!1,type:null}],returns:null}],displayName:"Popup",props:{prefixCls:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},className:{description:"",type:{name:"string"},required:!1}},composes:["ConfirmPopupProps"]};const J={title:"Components/Popup",component:s,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"popup"},tags:["autodocs"]},p={args:{prefixCls:"popup",children:"Hello Popup"},render:function(a){const n=t.useRef(null),o=t.useRef(null),i=()=>{var e;(e=o.current)==null||e.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},c=()=>{var e;(e=o.current)==null||e.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})};return r.jsxs(r.Fragment,{children:[r.jsx(w,{onClick:e=>{var u;return(u=n.current)==null?void 0:u.show({target:e.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",defaultFocus:"accept",accept:i,reject:c})},children:"Show Popup"}),r.jsx(C,{ref:o}),r.jsx(s,{...a,ref:n})]})}};var d,f,g;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    prefixCls: 'popup',
    children: 'Hello Popup'
  },
  render: function Render(args) {
    const popup = useRef<PopupHandlers>(null);
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
      <Button onClick={e => popup.current?.show({
        target: e.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        defaultFocus: 'accept',
        accept,
        reject
      })}>
        Show Popup
      </Button>
      <Toast ref={toast} />
      <Popup {...args as any} ref={popup} />
    </>;
  }
}`,...(g=(f=p.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const K=["Primary"];export{p as Primary,K as __namedExportsOrder,J as default};
