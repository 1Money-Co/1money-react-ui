import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as t}from"./index-RYns6xqu.js";import{c as y,C as x}from"./confirmpopup.esm-Bi2dcG0G.js";import{P as l}from"./index-rNTiGNI1.js";import{c as h}from"./classnames-JHuVH38I.js";import{T as w}from"./Toast-C8tJn9WR.js";import{B as C}from"./Button-d9HgxqxB.js";import"./componentbase.esm-B7DzLYm2.js";import"./button.esm-CuMgQ_1Q.js";import"./index.esm-U-Gagxqn.js";import"./iconbase.esm-Blfjos1e.js";import"./ripple.esm-j0qNbFto.js";import"./tooltip.esm-0CL_VH-f.js";import"./portal.esm-Dlp_nAuE.js";import"./index-D16Yfzz8.js";import"./csstransition.esm-DUlXYj3O.js";import"./inheritsLoose-Co2FXOuK.js";import"./overlayservice.esm-Cz0Vn5vT.js";import"./index.esm-Czd12oFv.js";import"./index.esm-DJYXX8xX.js";import"./index.esm-Dxp83-c9.js";import"./index.esm-BT6lQ6zs.js";import"./TransitionGroup-CfY2OgUn.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Loading-BZ7CYQkq.js";const s=t.forwardRef((m,a)=>{const{className:n,prefixCls:o="popup",...i}=m,c=h(o);return t.useImperativeHandle(a,()=>({show:e=>y(e)}),[]),r.jsx(x,{...i,className:c(void 0,n)})});s.propTypes={className:l.string,prefixCls:l.string};t.memo(s);s.__docgenInfo={description:"",methods:[{name:"show",docblock:null,modifiers:[],params:[{name:"params",optional:!1,type:null}],returns:null}],displayName:"Popup",props:{className:{description:"",type:{name:"string"},required:!1},prefixCls:{description:"",type:{name:"string"},required:!1}}};const M={title:"Components/Popup",component:s,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"popup"},tags:["autodocs"]},p={args:{prefixCls:"popup",children:"Hello Popup"},render:function(a){const n=t.useRef(null),o=t.useRef(null),i=()=>{var e;(e=o.current)==null||e.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},c=()=>{var e;(e=o.current)==null||e.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})};return r.jsxs(r.Fragment,{children:[r.jsx(C,{onClick:e=>{var u;return(u=n.current)==null?void 0:u.show({target:e.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",defaultFocus:"accept",accept:i,reject:c})},children:"Show Popup"}),r.jsx(w,{ref:o}),r.jsx(s,{...a,ref:n})]})}};var d,f,g;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      <Popup {...(args as any)} ref={popup} />
    </>;
  }
}`,...(g=(f=p.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const Q=["Primary"];export{p as Primary,Q as __namedExportsOrder,M as default};
