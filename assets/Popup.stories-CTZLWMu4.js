import{j as E}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";import{C as Ae,u as ke,P as Ve,h as He,n as pe,o as De,k as Fe,p as Ue,D as x,f as Ke,j as $e,g as O,i as K,O as N,Z as q,l as Ye,I as Je}from"./componentbase.esm-DzE_mzHH.js";import{B as le}from"./button.esm-TNoYFO_I.js";import{C as ue}from"./csstransition.esm-BGhA5XSg.js";import{O as g}from"./overlayservice.esm-b3OabbTg.js";import{P as Me}from"./tooltip.esm-D_1AQxnj.js";import{P as fe}from"./index-rNTiGNI1.js";import{c as Xe}from"./classnames-JHuVH38I.js";import{T as Ze}from"./Toast--VavL3en.js";import{B as Ge}from"./Button-BfLXMO1B.js";import"./index.esm-CSnetIaZ.js";import"./iconbase.esm-CxYhFw5H.js";import"./ripple.esm-C2v7PG3V.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-D16Yfzz8.js";import"./index.esm-D-WolGXM.js";import"./index.esm-DV9tHANN.js";import"./index.esm-j626ExZd.js";import"./index.esm-DKmlvVwL.js";import"./assertThisInitialized-B9jnkVVz.js";function $(){return $=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},$.apply(this,arguments)}function qe(t){if(Array.isArray(t))return t}function ze(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,a,d,l,m=[],j=!0,_=!1;try{if(d=(r=r.call(t)).next,e!==0)for(;!(j=(n=d.call(r)).done)&&(m.push(n.value),m.length!==e);j=!0);}catch(T){_=!0,a=T}finally{try{if(!j&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(_)throw a}}return m}}function me(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function We(t,e){if(t){if(typeof t=="string")return me(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return me(t,e)}}function Qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(t,e){return qe(t)||ze(t,e)||We(t,e)||Qe()}function R(t){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(t)}function et(t,e){if(R(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(R(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function tt(t){var e=et(t,"string");return R(e)==="symbol"?e:String(e)}function rt(t,e,r){return e=tt(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var nt=`
@layer primereact {
    .p-confirm-popup-flipped {
        margin-top: 0;
        margin-bottom: 10px;
    }
    
    .p-confirm-popup:after, .p-confirm-popup:before {
        bottom: 100%;
        left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }
    
    .p-confirm-popup:after {
        border-width: 8px;
        margin-left: -8px;
    }
    
    .p-confirm-popup:before {
        border-width: 10px;
        margin-left: -10px;
    }
    
    .p-confirm-popup-flipped:after, .p-confirm-popup-flipped:before {
        bottom: auto;
        top: 100%;
    }
    
    .p-confirm-popup.p-confirm-popup-flipped:after {
        border-bottom-color: transparent;
    }
    
    .p-confirm-popup.p-confirm-popup-flipped:before {
        border-bottom-color: transparent
    }
    
    .p-confirm-popup .p-confirm-popup-content {
        display: flex;
        align-items: center;
    }
}
`,ot={root:function(e){var r=e.context,n=e.getPropValue;return O("p-confirm-popup p-component",n("className"),{"p-input-filled":r&&r.inputStyle==="filled"||K.inputStyle==="filled","p-ripple-disabled":r&&r.ripple===!1||K.ripple===!1})},acceptButton:function(e){var r=e.getPropValue;return O("p-confirm-popup-accept p-button-sm",r("acceptClassName"))},rejectButton:function(e){var r=e.getPropValue;return O("p-confirm-popup-reject p-button-sm",{"p-button-text":!r("rejectClassName")},r("rejectClassName"))},content:"p-confirm-popup-content",icon:"p-confirm-popup-icon",message:"p-confirm-popup-message",footer:"p-confirm-popup-footer",transition:"p-connected-overlay"},F=Ae.extend({defaultProps:{__TYPE:"ConfirmPopup",accept:null,acceptClassName:null,acceptIcon:null,acceptLabel:null,appendTo:null,children:void 0,className:null,closeOnEscape:!0,content:null,defaultFocus:"accept",dismissable:!0,footer:null,icon:null,message:null,onHide:null,onShow:null,reject:null,rejectClassName:null,rejectIcon:null,rejectLabel:null,style:null,tagKey:void 0,target:null,transitionOptions:null,visible:!1},css:{classes:ot,styles:nt}});function de(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?de(Object(r),!0).forEach(function(n){rt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var at=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e=C(C({},e),{visible:e.visible===void 0?!0:e.visible}),e.visible&&g.emit("confirm-popup",e);var r=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};g.emit("confirm-popup",C(C(C({},e),d),{visible:!0}))},n=function(){g.emit("confirm-popup",{visible:!1})};return{show:r,hide:n}},be=c.memo(c.forwardRef(function(t,e){var r=ke(),n=c.useContext(Ve),a=F.getProps(t,n),d=c.useState(a.visible),l=z(d,2),m=l[0],j=l[1],_=c.useState(!1),T=z(_,2),Y=T[0],W=T[1],J={props:a,state:{visible:m,reshow:Y}},M=F.setMetaData(J),b=M.ptm,P=M.cx,Q=M.isUnstyled;He(F.css.styles,Q,{name:"confirmpopup"});var u=c.useRef(null),B=c.useRef(null),L=c.useRef(null),w=c.useRef(!1),h=c.useRef(null),A=c.useRef(null),X=c.useRef(null),S=c.useRef(!1),k=function(){return A.current||a},s=function(o){return(A.current||a)[o]},V=function(o){for(var i=arguments.length,f=new Array(i>1?i-1:0),v=1;v<i;v++)f[v-1]=arguments[v];return N.getPropValue(s(o),f)},ee=s("acceptLabel")||pe("accept"),te=s("rejectLabel")||pe("reject"),re=a.dismissable&&a.closeOnEscape&&m,ne=De("dialog",re);Fe({callback:function(){y("hide")},when:re&&ne,priority:[Ye.DIALOG,ne]});var Pe=Ue({target:s("target"),overlay:u,listener:function(o,i){var f=i.type,v=i.valid;v&&(f==="outside"?a.dismissable&&!w.current&&y("hide"):y("hide")),w.current=!1},when:m}),oe=z(Pe,2),he=oe[0],je=oe[1],xe=function(o){w.current=!0,g.emit("overlay-click",{originalEvent:o,target:s("target")})},ae=function(){S.current||(S.current=!0,V("accept"),y("accept"))},ce=function(){S.current||(S.current=!0,V("reject"),y("reject"))},Z=function(){var o=k();W(!1),o.group===a.group&&(j(!0),S.current=!1,h.current=function(i){!Ne(i.target)&&(w.current=!0)},g.on("overlay-click",h.current),X.current=document.activeElement)},y=function(o){j(!1),g.off("overlay-click",h.current),h.current=null,o&&V("onHide",o),x.focus(X.current),X.current=null},Ee=function(){q.set("overlay",u.current,n&&n.autoZIndex||K.autoZIndex,n&&n.zIndex.overlay||K.zIndex.overlay),x.addStyles(u.current,{position:"absolute",top:"50%",left:"50%",marginTop:"10px"}),Se()},Ce=function(){he();var o=s("defaultFocus");(o===void 0||o==="accept")&&B.current&&B.current.focus(),o==="reject"&&L.current&&L.current.focus(),V("onShow")},Oe=function(){je()},we=function(){q.clear(u.current),w.current=!1},Se=function(){if(s("target")){x.absolutePosition(u.current,s("target"));var o=x.getOffset(u.current),i=x.getOffset(s("target")),f=0;o.left<i.left&&(f=i.left-o.left),u.current.style.setProperty("--overlayArrowLeft","".concat(f,"px")),o.top<i.top&&!Q()&&x.addClass(u.current,"p-confirm-popup-flipped")}},Ne=function(o){return u&&u.current&&!(u.current.isSameNode(o)||u.current.contains(o))},H=function(o){if(o.tagKey===a.tagKey){var i=m!==o.visible,f=s("target")!==o.target;f&&!a.target?(y(),A.current=o,W(!0)):i&&(A.current=o,o.visible?Z():y())}};c.useEffect(function(){a.visible?Z():y()},[a.visible]),c.useEffect(function(){return!a.target&&!a.message&&g.on("confirm-popup",H),function(){g.off("confirm-popup",H)}},[a.target]),Ke(function(){Y&&Z()},[Y]),$e(function(){h.current&&(g.off("overlay-click",h.current),h.current=null),g.off("confirm-popup",H),q.clear(u.current)}),c.useImperativeHandle(e,function(){return{props:a,confirm:H}});var Re=function(){var o=k(),i=N.getJSXElement(s("message"),o),f=r({className:P("icon")},b("icon")),v=Je.getJSXIcon(s("icon"),C({},f),{props:o}),G=r({className:P("message")},b("message")),D=r({className:P("content")},b("content"));return c.createElement("div",D,v,c.createElement("span",G,i))},Ie=function(){var o=O("p-confirm-popup-accept p-button-sm",s("acceptClassName")),i=O("p-confirm-popup-reject p-button-sm",{"p-button-text":!s("rejectClassName")},s("rejectClassName")),f=r({className:P("footer")},b("footer")),v=r({ref:L,label:te,icon:s("rejectIcon"),className:P("rejectButton",{getPropValue:s}),onClick:ce,pt:b("rejectButton"),unstyled:a.unstyled,__parentMetadata:{parent:J}}),G=r({ref:B,label:ee,icon:s("acceptIcon"),className:P("acceptButton",{getPropValue:s}),onClick:ae,pt:b("acceptButton"),unstyled:a.unstyled,__parentMetadata:{parent:J}}),D=c.createElement("div",f,c.createElement(le,v),c.createElement(le,G));if(s("footer")){var Le={accept:ae,reject:ce,className:"p-confirm-popup-footer",acceptClassName:o,rejectClassName:i,acceptLabel:ee,rejectLabel:te,element:D,props:k()};return N.getJSXElement(s("footer"),Le)}return D},se=r({ref:u,id:s("id"),className:O(a.className,P("root",{context:n,getPropValue:s})),style:s("style"),onClick:xe},F.getOtherProps(a),b("root")),ie=r({classNames:P("transition"),in:m,timeout:{enter:120,exit:100},options:s("transitionOptions"),unmountOnExit:!0,onEnter:Ee,onEntered:Ce,onExit:Oe,onExited:we},b("transition")),_e=function(){var o=k(),i=N.getJSXElement(s("message"),o),f={message:i,acceptBtnRef:B,rejectBtnRef:L,hide:y};return c.createElement(ue,$({nodeRef:u},ie),c.createElement("div",se,N.getJSXElement(t.content,f)))},Te=function(){var o=Re(),i=Ie();return c.createElement(ue,$({nodeRef:u},ie),c.createElement("div",se,o,i))},Be=t!=null&&t.content?_e():Te();return c.createElement(Me,{element:Be,appendTo:s("appendTo"),visible:s("visible")})}));be.displayName="ConfirmPopup";const I=c.forwardRef((t,e)=>{const{className:r,prefixCls:n="popup",...a}=t,d=Xe(n);return c.useImperativeHandle(e,()=>({show:l=>at(l)}),[]),E.jsx(be,{...a,className:d(void 0,r)})});I.propTypes={className:fe.string,prefixCls:fe.string};c.memo(I);I.__docgenInfo={description:"",methods:[{name:"show",docblock:null,modifiers:[],params:[{name:"params",optional:!1,type:null}],returns:null}],displayName:"Popup",props:{className:{description:"",type:{name:"string"},required:!1},prefixCls:{description:"",type:{name:"string"},required:!1}}};const St={title:"Components/Popup",component:I,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"popup"},tags:["autodocs"]},U={args:{prefixCls:"popup",children:"Hello Popup"},render:function(e){const r=c.useRef(null),n=c.useRef(null),a=()=>{var l;(l=n.current)==null||l.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},d=()=>{var l;(l=n.current)==null||l.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})};return E.jsxs(E.Fragment,{children:[E.jsx(Ge,{onClick:l=>{var m;return(m=r.current)==null?void 0:m.show({target:l.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",defaultFocus:"accept",accept:a,reject:d})},children:"Show Popup"}),E.jsx(Ze,{ref:n}),E.jsx(I,{...e,ref:r})]})}};var ve,ge,ye;U.parameters={...U.parameters,docs:{...(ve=U.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ye=(ge=U.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};const Nt=["Primary"];export{U as Primary,Nt as __namedExportsOrder,St as default};
