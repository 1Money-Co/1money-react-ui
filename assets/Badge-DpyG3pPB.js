import{j as O}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-CP2yOfOm.js";import{u as j,P as w,C as x,a as h,c as d,O as c}from"./componentbase.esm-6-7qnxwj.js";import{c as B}from"./classnames-lRq3rz0l.js";function i(r){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(r)}function S(r,e){if(i(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e);if(i(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function _(r){var e=S(r,"string");return i(e)=="symbol"?e:e+""}function g(r,e,t){return(e=_(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var E={root:function(e){var t=e.props;return d("p-badge p-component",g({"p-badge-no-gutter":c.isNotEmpty(t.value)&&String(t.value).length===1,"p-badge-dot":c.isEmpty(t.value),"p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge"},"p-badge-".concat(t.severity),t.severity!==null))}},N=`
@layer primereact {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }
    
    .p-overlay-badge {
        position: relative;
    }
    
    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }
    
    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }
    
    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,p=x.extend({defaultProps:{__TYPE:"Badge",__parentMetadata:null,value:null,severity:null,size:null,style:null,className:null,children:void 0},css:{classes:E,styles:N}});function m(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),t.push.apply(t,n)}return t}function C(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?m(Object(t),!0).forEach(function(n){g(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}var y=s.memo(s.forwardRef(function(r,e){var t=j(),n=s.useContext(w),a=p.getProps(r,n),o=p.setMetaData(C({props:a},a.__parentMetadata)),l=o.ptm,b=o.cx,v=o.isUnstyled;h(p.css.styles,v,{name:"badge"});var u=s.useRef(null);s.useImperativeHandle(e,function(){return{props:a,getElement:function(){return u.current}}});var P=t({ref:u,style:a.style,className:d(a.className,b("root"))},p.getOtherProps(a),l("root"));return s.createElement("span",P,a.value)}));y.displayName="Badge";const f=r=>{const{children:e,className:t,severity:n,prefixCls:a="badge",...o}=r,l=B(a);return O.jsx(y,{...o,className:l(void 0,[l(n||"neutral"),t].join(" "))})};s.memo(f);f.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},severity:{required:!1,tsType:{name:"union",raw:"PrimeBadgeProps['severity'] | 'neutral' | 'recommend' | 'warning' | 'negative' | 'black' | 'success'",elements:[{name:"PrimeBadgeProps['severity']",raw:"PrimeBadgeProps['severity']"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'recommend'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'black'"},{name:"literal",value:"'success'"}]},description:""}},composes:["Omit"]};export{f as B};
