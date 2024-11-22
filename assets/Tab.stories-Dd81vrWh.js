import{j as H}from"./jsx-runtime-DEdD30eg.js";import{r as o}from"./index-RYns6xqu.js";import{P as q}from"./index-rNTiGNI1.js";import{C as ke,u as je,P as De,h as Re,e as Ae,U as Me,g as C,D as u,I as Le,O as Fe}from"./componentbase.esm-BUIfdjtz.js";import{R as Ke}from"./ripple.esm-DOIchPQY.js";import{c as Be}from"./classnames-JHuVH38I.js";function I(t){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},I(t)}function Ue(t,a){if(I(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var s=r.call(t,a||"default");if(I(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function $e(t){var a=Ue(t,"string");return I(a)==="symbol"?a:String(a)}function He(t,a,r){return a=$e(a),a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function qe(t){if(Array.isArray(t))return t}function ze(t,a){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var s,i,h,d,m=[],b=!0,x=!1;try{if(h=(r=r.call(t)).next,a!==0)for(;!(b=(s=h.call(r)).done)&&(m.push(s.value),m.length!==a);b=!0);}catch(P){x=!0,i=P}finally{try{if(!b&&r.return!=null&&(d=r.return(),Object(d)!==d))return}finally{if(x)throw i}}return m}}function z(t,a){(a==null||a>t.length)&&(a=t.length);for(var r=0,s=new Array(a);r<a;r++)s[r]=t[r];return s}function Je(t,a){if(t){if(typeof t=="string")return z(t,a);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(t,a)}}function We(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(t,a){return qe(t)||ze(t,a)||Je(t,a)||We()}var Xe={icon:function(a){var r=a._icon;return C("p-menuitem-icon",r)},label:"p-menuitem-text",action:"p-menuitem-link",menuitem:function(a){var r=a._className,s=a.active,i=a.disabled;return C("p-tabmenuitem",{"p-highlight":s,"p-disabled":i},r)},inkbar:"p-tabmenu-ink-bar",menu:"p-tabmenu-nav p-reset",root:"p-tabmenu p-component"},Ye=`
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
`,E=ke.extend({defaultProps:{__TYPE:"TabMenu",id:null,model:null,activeIndex:0,ariaLabel:null,ariaLabelledBy:null,style:null,className:null,onTabChange:null,children:void 0},css:{classes:Xe,styles:Ye}});function W(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,s)}return r}function X(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?W(Object(r),!0).forEach(function(s){He(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}var V=o.memo(o.forwardRef(function(t,a){var r=je(),s=o.useContext(De),i=E.getProps(t,s),h=o.useState(i.id),d=J(h,2),m=d[0],b=d[1],x=o.useState(i.activeIndex),P=J(x,2),Z=P[0],ee=P[1],L=o.useRef(null),v=o.useRef(null),p=o.useRef(null),te=o.useRef({}),F=i.onTabChange?i.activeIndex:Z,K={props:i,state:{id:m,activeIndex:F}},j=E.setMetaData(X({},K)),T=j.ptm,f=j.cx,ne=j.isUnstyled,S=function(e,n,c){return T(e,{parent:K,context:{item:n,index:c}})};Re(E.css.styles,ne,{name:"tabmenu"});var D=function(e,n,c){if(n.disabled){e.preventDefault();return}n.command&&n.command({originalEvent:e,item:n}),i.onTabChange?i.onTabChange({originalEvent:e,value:n,index:c}):ee(c),n.url||(e.preventDefault(),e.stopPropagation())},ae=function(e){return e===(F||0)},re=function(){if(i.model){for(var e=p.current.children,n=!1,c=0;c<e.length;c++){var y=e[c];u.getAttribute(y,"data-p-highlight")&&(v.current.style.width=u.getWidth(y)+"px",v.current.style.left=u.getOffset(y).left-u.getOffset(p.current).left+"px",n=!0)}n||(v.current.style.width="0px",v.current.style.left="0px")}};Ae(function(){m||b(Me())}),o.useImperativeHandle(a,function(){return{props:i,getElement:function(){return L.current}}}),o.useEffect(function(){re()});var ie=function(e,n,c){switch(e.code){case"ArrowRight":se(e.target),e.preventDefault();break;case"ArrowLeft":le(e.target),e.preventDefault();break;case"Home":oe(e.target),e.preventDefault();break;case"End":ce(e.target),e.preventDefault();break;case"Space":case"Enter":case"NumpadEnter":D(e,n,c),e.preventDefault();break;case"Tab":de();break}},se=function(e){var n=ue(e);n&&N(e,n)},le=function(e){var n=me(e);n&&N(e,n)},oe=function(e){var n=pe();n&&N(e,n)},ce=function(e){var n=fe();n&&N(e,n)},ue=function l(e){var n=e.parentElement.nextElementSibling;return n?u.getAttribute(n,"data-p-disabled")===!0?l(n.children[0]):n.children[0]:null},me=function l(e){var n=e.parentElement.previousElementSibling;return n?u.getAttribute(n,"data-p-disabled")===!0?l(n.children[0]):n.children[0]:null},pe=function(){var e=u.findSingle(p.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e.children[0]:null},fe=function(){var e=u.find(p.current,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},N=function(e,n){e.tabIndex="-1",n.tabIndex="0",n.focus()},de=function(){var e=u.findSingle(p.current,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]'),n=u.findSingle(p.current,'[data-pc-section="action"][tabindex="0"]');n!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),n.tabIndex="-1")},be=function(e,n){if(e.visible===!1)return null;var c=e.className,y=e.style,w=e.disabled,R=e.icon,A=e.label,B=e.template,xe=e.url,Pe=e.target,U=e.id||m+"_"+n,_=ae(n),Te=C("p-menuitem-icon",R),Se=r({className:f("icon",{_icon:R})},S("icon",e,n)),Ne=Le.getJSXIcon(R,X({},Se),{props:i}),we=r({className:f("label")},S("label",e,n)),_e=A&&o.createElement("span",we,A),Ee=r({href:xe||"#",role:"menuitem","aria-label":A,tabIndex:_?"0":"-1",className:f("action"),target:Pe,onClick:function(g){return D(g,e,n)}},S("action",e,n)),M=o.createElement("a",Ee,Ne,_e,o.createElement(Ke,null));if(B){var Oe={onClick:function(g){return D(g,e,n)},className:"p-menuitem-link",labelClassName:"p-menuitem-text",iconClassName:Te,element:M,props:i,active:_,index:n,disabled:w};M=Fe.getJSXElement(B,e,Oe)}var Ce=r({ref:te.current["tab_".concat(n)],id:U,key:U,onKeyDown:function(g){return ie(g,e,n)},className:f("menuitem",{_className:c,active:_,disabled:w}),style:y,role:"presentation","data-p-highlight":_,"data-p-disabled":w||!1,"aria-disabled":w},S("menuitem",e,n));return o.createElement("li",Ce,M)},ve=function(){return i.model.map(be)};if(i.model){var ye=ve(),ge=r({ref:v,role:"none",className:f("inkbar")},T("inkbar")),Ie=r({ref:p,"aria-label":i.ariaLabel,"aria-labelledby":i.ariaLabelledBy,className:f("menu"),role:"menubar"},T("menu")),he=r({id:i.id,ref:L,className:C(i.className,f("root")),style:i.style},E.getOtherProps(i),T("root"));return o.createElement("div",he,o.createElement("ul",Ie,ye,o.createElement("li",ge)))}return null}));V.displayName="TabMenu";const k=t=>{const{className:a,prefixCls:r="tab",...s}=t,i=Be(r);return H.jsx("div",{className:i(void 0,a),children:H.jsx(V,{...s})})};k.propTypes={className:q.string,prefixCls:q.string};o.memo(k);k.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},prefixCls:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}},composes:["TabMenuProps"]};const nt={title:"Components/Tab",component:k,argTypes:{className:{control:"text"},prefixCls:{control:"text"}},args:{prefixCls:"tab"},tags:["autodocs"]},O={args:{prefixCls:"tab",model:[{label:"Password"},{label:"2FA settings"},{label:"Limits"}]}};var Y,G,Q;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(G=O.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};const at=["Primary"];export{O as Primary,at as __namedExportsOrder,nt as default};
