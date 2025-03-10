import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./index-Ca8FO3x4.js";import{c as x,C as g}from"./confirmpopup.esm-Cg-nD62W.js";import{c as h}from"./classnames-B-6LArsQ.js";import{T as y}from"./Toast-CCuHAada.js";import{B as w}from"./Button-DLL4PgTi.js";import"./componentbase.esm-CmqFOBMX.js";import"./button.esm-CKaW3228.js";import"./index.esm-ZnzG-bZe.js";import"./iconbase.esm-BQbvzF6M.js";import"./ripple.esm-BKAtRWv4.js";import"./tooltip.esm-3SGCDnos.js";import"./portal.esm-C38zexph.js";import"./index-CA-MFgIQ.js";import"./csstransition.esm-DSVPP7-p.js";import"./setPrototypeOf-SZTCiYDs.js";import"./overlayservice.esm-Bs04rCCA.js";import"./index.esm-CZ0p2oYE.js";import"./index.esm-DGFjzfGD.js";import"./index.esm-tmG2Xedk.js";import"./index.esm-CZTfbK_d.js";import"./TransitionGroup-FBiY_WQ4.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Icons-DNs9i2Py.js";import"./Typography-CfdFmwPW.js";import"./Spinner-mwCuaLRH.js";const p=t.forwardRef((m,a)=>{const{className:n,prefixCls:r="popup",...i}=m,c=h(r);return t.useImperativeHandle(a,()=>({show:e=>x(e)}),[]),o.jsx(g,{...i,className:c(void 0,n)})});t.memo(p);p.__docgenInfo={description:"",methods:[{name:"show",docblock:null,modifiers:[],params:[{name:"params",optional:!1,type:null}],returns:null}],displayName:"Popup",props:{prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["ConfirmPopupProps"]};const M={title:"Components/Popup",component:p,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"popup"},tags:["autodocs"]},s={args:{prefixCls:"popup",children:"Hello Popup"},render:function(a){const n=t.useRef(null),r=t.useRef(null),i=()=>{var e;(e=r.current)==null||e.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},c=()=>{var e;(e=r.current)==null||e.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})};return o.jsxs(o.Fragment,{children:[o.jsx(w,{onClick:e=>{var u;return(u=n.current)==null?void 0:u.show({target:e.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",defaultFocus:"accept",accept:i,reject:c})},children:"Show Popup"}),o.jsx(y,{ref:r}),o.jsx(p,{...a,ref:n})]})}};var l,d,f;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(d=s.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const Q=["Primary"];export{s as Primary,Q as __namedExportsOrder,M as default};
