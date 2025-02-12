import{j as J}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-DGOumNSj.js";import{c as ke,p as W}from"./classnames-CL-cd9Z_.js";import{u as De,P as Re,C as Ae,a as Me,o as Le,g as C,D as u,I as Fe,O as Ke,U as Be}from"./componentbase.esm-CcTVhaot.js";import{R as Ue}from"./ripple.esm-D7U1XS2t.js";function L(){return L=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},L.apply(this,arguments)}function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},h(t)}function $e(t,n){if(h(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,n);if(h(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function He(t){var n=$e(t,"string");return h(n)==="symbol"?n:String(n)}function qe(t,n,r){return n=He(n),n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function ze(t){if(Array.isArray(t))return t}function Je(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i,s,I,d,m=[],b=!0,x=!1;try{if(I=(r=r.call(t)).next,n!==0)for(;!(b=(i=I.call(r)).done)&&(m.push(i.value),m.length!==n);b=!0);}catch(T){x=!0,s=T}finally{try{if(!b&&r.return!=null&&(d=r.return(),Object(d)!==d))return}finally{if(x)throw s}}return m}}function X(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=t[r];return i}function We(t,n){if(t){if(typeof t=="string")return X(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return X(t,n)}}function Xe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(t,n){return ze(t)||Je(t,n)||We(t,n)||Xe()}var Ye={icon:function(n){var r=n._icon;return C("p-menuitem-icon",r)},label:"p-menuitem-text",action:"p-menuitem-link",menuitem:function(n){var r=n._className,i=n.active,s=n.disabled;return C("p-tabmenuitem",{"p-highlight":i,"p-disabled":s},r)},inkbar:"p-tabmenu-ink-bar",menu:"p-tabmenu-nav p-reset",root:"p-tabmenu p-component"},Ge=`
@layer primereact {
    .p-tabmenu {
        overflow-x: auto;
    }

    .p-tabmenu-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex-wrap: nowrap;
    }

    .p-tabmenu-nav a {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        text-decoration: none;
        overflow: hidden;
    }

    .p-tabmenu-nav a:focus {
        z-index: 1;
    }

    .p-tabmenu-nav .p-menuitem-text {
        line-height: 1;
    }

    .p-tabmenu-ink-bar {
        display: none;
        z-index: 1;
    }

    .p-tabmenu::-webkit-scrollbar {
        display: none;
    }
}
`,N=Ae.extend({defaultProps:{__TYPE:"TabMenu",id:null,model:null,activeIndex:0,ariaLabel:null,ariaLabelledBy:null,style:null,className:null,onTabChange:null,children:void 0},css:{classes:Ye,styles:Ge}});function G(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,i)}return r}function Q(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?G(Object(r),!0).forEach(function(i){qe(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}var te=l.memo(l.forwardRef(function(t,n){var r=De(),i=l.useContext(Re),s=N.getProps(t,i),I=l.useState(s.id),d=Y(I,2),m=d[0],b=d[1],x=l.useState(s.activeIndex),T=Y(x,2),ne=T[0],ae=T[1],F=l.useRef(null),v=l.useRef(null),p=l.useRef(null),re=l.useRef({}),K=s.onTabChange?s.activeIndex:ne,B={props:s,state:{id:m,activeIndex:K}},k=N.setMetaData(Q({},B)),P=k.ptm,f=k.cx,ie=k.isUnstyled,S=function(e,a,c){return P(e,{parent:B,context:{item:a,index:c}})};Me(N.css.styles,ie,{name:"tabmenu"});var D=function(e,a,c){if(a.disabled){e.preventDefault();return}a.command&&a.command({originalEvent:e,item:a}),s.onTabChange?s.onTabChange({originalEvent:e,value:a,index:c}):ae(c),a.url||(e.preventDefault(),e.stopPropagation())},se=function(e){return e===(K||0)},le=function(){if(s.model){for(var e=p.current.children,a=!1,c=0;c<e.length;c++){var y=e[c];u.getAttribute(y,"data-p-highlight")&&(v.current.style.width=u.getWidth(y)+"px",v.current.style.left=u.getOffset(y).left-u.getOffset(p.current).left+"px",a=!0)}a||(v.current.style.width="0px",v.current.style.left="0px")}};Le(function(){m||b(Be())}),l.useImperativeHandle(n,function(){return{props:s,getElement:function(){return F.current}}}),l.useEffect(function(){le()});var oe=function(e,a,c){switch(e.code){case"ArrowRight":ce(e.target),e.preventDefault();break;case"ArrowLeft":ue(e.target),e.preventDefault();break;case"Home":me(e.target),e.preventDefault();break;case"End":pe(e.target),e.preventDefault();break;case"Space":case"Enter":case"NumpadEnter":D(e,a,c),e.preventDefault();break;case"Tab":be();break}},ce=function(e){var a=U(e);a&&_(e,a)},ue=function(e){var a=$(e);a&&_(e,a)},me=function(e){var a=fe();a&&_(e,a)},pe=function(e){var a=de();a&&_(e,a)},U=function(e){var a=e.parentElement.nextElementSibling;return a?u.getAttribute(a,"data-p-disabled")===!0?U(a.children[0]):a.children[0]:null},$=function(e){var a=e.parentElement.previousElementSibling;return a?u.getAttribute(a,"data-p-disabled")===!0?$(a.children[0]):a.children[0]:null},fe=function(){var e=u.findSingle(p.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e.children[0]:null},de=function(){var e=u.find(p.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},_=function(e,a){e.tabIndex="-1",a.tabIndex="0",a.focus()},be=function(){var e=u.findSingle(p.current,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]'),a=u.findSingle(p.current,'[data-pc-section="action"][tabindex="0"]');a!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),a.tabIndex="-1")},ve=function(e,a){if(e.visible===!1)return null;var c=e.className,y=e.style,O=e.disabled,R=e.icon,A=e.label,H=e.template,Te=e.url,Pe=e.target,q=e.id||m+"_"+a,w=se(a),Se=C("p-menuitem-icon",R),_e=r({className:f("icon",{_icon:R})},S("icon",e,a)),Oe=Fe.getJSXIcon(R,Q({},_e),{props:s}),we=r({className:f("label")},S("label",e,a)),Ne=A&&l.createElement("span",we,A),Ee=r({href:Te||"#",role:"menuitem","aria-label":A,tabIndex:w?"0":"-1",className:f("action"),target:Pe,onClick:function(g){return D(g,e,a)}},S("action",e,a)),M=l.createElement("a",Ee,Oe,Ne,l.createElement(Ue,null));if(H){var Ce={onClick:function(g){return D(g,e,a)},className:"p-menuitem-link",labelClassName:"p-menuitem-text",iconClassName:Se,element:M,props:s,active:w,index:a,disabled:O};M=Ke.getJSXElement(H,e,Ce)}var je=r({ref:re.current["tab_".concat(a)],id:q,onKeyDown:function(g){return oe(g,e,a)},className:f("menuitem",{_className:c,active:w,disabled:O}),style:y,role:"presentation","data-p-highlight":w,"data-p-disabled":O||!1,"aria-disabled":O},S("menuitem",e,a));return l.createElement("li",L({},je,{key:q}),M)},ye=function(){return s.model.map(ve)};if(s.model){var ge=ye(),he=r({ref:v,role:"none",className:f("inkbar")},P("inkbar")),Ie=r({ref:p,"aria-label":s.ariaLabel,"aria-labelledby":s.ariaLabelledBy,className:f("menu"),role:"menubar"},P("menu")),xe=r({id:s.id,ref:F,className:C(s.className,f("root")),style:s.style},N.getOtherProps(s),P("root"));return l.createElement("div",xe,l.createElement("ul",Ie,ge,l.createElement("li",he)))}return null}));te.displayName="TabMenu";const j=t=>{const{className:n,prefixCls:r="tab",...i}=t,s=ke(r);return J.jsx("div",{className:s(void 0,n),children:J.jsx(te,{...i})})};j.propTypes={className:W.string,prefixCls:W.string};l.memo(j);j.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},prefixCls:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}},composes:["TabMenuProps"]};const nt={title:"Components/Tab",component:j,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"tab"},tags:["autodocs"]},E={args:{prefixCls:"tab",model:[{label:"Password"},{label:"2FA settings"},{label:"Limits"}]}};var V,Z,ee;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    prefixCls: 'tab',
    model: [{
      label: 'Password'
    }, {
      label: '2FA settings'
    }, {
      label: 'Limits'
    }]
  }
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const at=["Primary"];export{E as Primary,at as __namedExportsOrder,nt as default};
