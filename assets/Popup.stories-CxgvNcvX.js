import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./index-CP2yOfOm.js";import{c as g,C as x}from"./confirmpopup.esm-CSqC52mg.js";import{c as y}from"./classnames-lRq3rz0l.js";import{T as h}from"./Toast-CpT3G0Kk.js";import{B as w}from"./Button-CJwhtjbL.js";import"./componentbase.esm-D-zJM1J_.js";import"./button.esm-HBeH8jE_.js";import"./index.esm-uggFAbkR.js";import"./iconbase.esm-DhSHUaJo.js";import"./ripple.esm-BIqWt_ei.js";import"./tooltip.esm-BgHJPrum.js";import"./portal.esm-CCqTVpgZ.js";import"./index-BOAxdYzW.js";import"./csstransition.esm-DWeYoiJr.js";import"./overlayservice.esm-BZQ914Y6.js";import"./index.esm-DcWnrv9o.js";import"./index.esm-wET7pp3q.js";import"./index.esm-iUewYYmr.js";import"./index.esm-BWj4hVqV.js";import"./TransitionGroup-BGiLtNwA.js";import"./Icons-BWfxcvx2.js";import"./Typography-DoqwNCiN.js";import"./Spinner-BctWPXJz.js";const p=t.forwardRef((m,a)=>{const{className:n,prefixCls:o="popup",...i}=m,c=y(o);return t.useImperativeHandle(a,()=>({show:e=>g(e)}),[]),r.jsx(x,{...i,className:c(void 0,n)})});t.memo(p);p.__docgenInfo={description:"",methods:[{name:"show",docblock:null,modifiers:[],params:[{name:"params",optional:!1,type:null}],returns:null}],displayName:"Popup",props:{id:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""}},composes:["ConfirmPopupProps"]};const K={title:"Components/Popup",component:p,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"popup"},tags:["autodocs"]},s={args:{prefixCls:"popup",children:"Hello Popup"},render:function(a){const n=t.useRef(null),o=t.useRef(null),i=()=>{var e;(e=o.current)==null||e.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},c=()=>{var e;(e=o.current)==null||e.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})};return r.jsxs(r.Fragment,{children:[r.jsx(w,{onClick:e=>{var u;return(u=n.current)==null?void 0:u.show({target:e.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",defaultFocus:"accept",accept:i,reject:c})},children:"Show Popup"}),r.jsx(h,{ref:o}),r.jsx(p,{...a,ref:n})]})}};var l,d,f;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
