import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./index-DGOumNSj.js";import{c as x,C as g}from"./confirmpopup.esm-D9-3GNj6.js";import{c as h}from"./classnames-CPOy7I0U.js";import{T as y}from"./Toast-BSnj2d-E.js";import{B as w}from"./Button-C8AEZiS1.js";import"./componentbase.esm-BdcVyoov.js";import"./button.esm-VjJyv5J4.js";import"./index.esm-hCcRpTLE.js";import"./iconbase.esm-Dw9HLwNj.js";import"./ripple.esm-D6Nhrw2g.js";import"./tooltip.esm-DhDZOP2a.js";import"./portal.esm-sGRjpPF9.js";import"./index-BmTs--ql.js";import"./csstransition.esm-DBYBBX3C.js";import"./overlayservice.esm-CWc7_5ds.js";import"./index.esm-B60wmaaB.js";import"./index.esm-DfpHoBKp.js";import"./index.esm-CLSgKWBi.js";import"./index.esm-Dlfly0QC.js";import"./TransitionGroup-BadRJi_W.js";import"./Icons-F0VUxUKT.js";import"./Typography-rC6RsJzc.js";import"./Spinner-vRPLJ-m1.js";const p=t.forwardRef((m,a)=>{const{className:n,prefixCls:r="popup",...i}=m,c=h(r);return t.useImperativeHandle(a,()=>({show:e=>x(e)}),[]),o.jsx(g,{...i,className:c(void 0,n)})});t.memo(p);p.__docgenInfo={description:"",methods:[{name:"show",docblock:null,modifiers:[],params:[{name:"params",optional:!1,type:null}],returns:null}],displayName:"Popup",props:{prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["ConfirmPopupProps"]};const K={title:"Components/Popup",component:p,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"popup"},tags:["autodocs"]},s={args:{prefixCls:"popup",children:"Hello Popup"},render:function(a){const n=t.useRef(null),r=t.useRef(null),i=()=>{var e;(e=r.current)==null||e.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},c=()=>{var e;(e=r.current)==null||e.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})};return o.jsxs(o.Fragment,{children:[o.jsx(w,{onClick:e=>{var u;return(u=n.current)==null?void 0:u.show({target:e.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",defaultFocus:"accept",accept:i,reject:c})},children:"Show Popup"}),o.jsx(y,{ref:r}),o.jsx(p,{...a,ref:n})]})}};var l,d,f;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(d=s.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const L=["Primary"];export{s as Primary,L as __namedExportsOrder,K as default};
