import{r as v}from"./index-RYns6xqu.js";import{P as xe,D as b,e as Pe,f as W,k as Ce,j as J,O as U,C as nt,u as rt,i as ot,l as it,m as at,c as ut,n as lt,Z as $,g as Ae}from"./classnames-CeBkXBtN.js";import{w as st}from"./index-D16Yfzz8.js";function ct(t){if(Array.isArray(t))return t}function ft(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var u,i,w,g,d=[],m=!0,T=!1;try{if(w=(r=r.call(t)).next,n!==0)for(;!(m=(u=w.call(r)).done)&&(d.push(u.value),d.length!==n);m=!0);}catch(x){T=!0,i=x}finally{try{if(!m&&r.return!=null&&(g=r.return(),Object(g)!==g))return}finally{if(T)throw i}}return d}}function Oe(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,u=new Array(n);r<n;r++)u[r]=t[r];return u}function pt(t,n){if(t){if(typeof t=="string")return Oe(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Oe(t,n)}}function dt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vt(t,n){return ct(t)||ft(t,n)||pt(t,n)||dt()}var Q={defaultProps:{__TYPE:"Portal",element:null,appendTo:null,visible:!1,onMounted:null,onUnmounted:null,children:void 0},getProps:function(n){return U.getMergedProps(n,Q.defaultProps)},getOtherProps:function(n){return U.getDiffProps(n,Q.defaultProps)}},Re=v.memo(function(t){var n=Q.getProps(t),r=v.useContext(xe),u=v.useState(n.visible&&b.isClient()),i=vt(u,2),w=i[0],g=i[1];Pe(function(){b.isClient()&&!w&&(g(!0),n.onMounted&&n.onMounted())}),W(function(){n.onMounted&&n.onMounted()},[w]),Ce(function(){n.onUnmounted&&n.onUnmounted()});var d=n.element||n.children;if(d&&w){var m=n.appendTo||r&&r.appendTo||J.appendTo;return U.isFunction(m)&&(m=m()),m||(m=document.body),m==="self"?d:st.createPortal(d,m)}return null});Re.displayName="Portal";function B(){return B=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},B.apply(this,arguments)}function C(t){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(t)}function mt(t,n){if(C(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var u=r.call(t,n||"default");if(C(u)!=="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function yt(t){var n=mt(t,"string");return C(n)==="symbol"?n:String(n)}function Ie(t,n,r){return n=yt(n),n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function ee(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,u=new Array(n);r<n;r++)u[r]=t[r];return u}function ht(t){if(Array.isArray(t))return ee(t)}function bt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _e(t,n){if(t){if(typeof t=="string")return ee(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(t,n)}}function gt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wt(t){return ht(t)||bt(t)||_e(t)||gt()}function Et(t){if(Array.isArray(t))return t}function St(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var u,i,w,g,d=[],m=!0,T=!1;try{if(w=(r=r.call(t)).next,n!==0)for(;!(m=(u=w.call(r)).done)&&(d.push(u.value),d.length!==n);m=!0);}catch(x){T=!0,i=x}finally{try{if(!m&&r.return!=null&&(g=r.return(),Object(g)!==g))return}finally{if(T)throw i}}return d}}function Ot(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(t,n){return Et(t)||St(t,n)||_e(t,n)||Ot()}var Tt={root:function(n){var r=n.positionState,u=n.classNameState;return Ae("p-tooltip p-component",Ie({},"p-tooltip-".concat(r),!0),u)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},xt={arrow:function(n){var r=n.context;return{top:r.bottom?"0":r.right||r.left||!r.right&&!r.left&&!r.top&&!r.bottom?"50%":null,bottom:r.top?"0":null,left:r.right||!r.right&&!r.left&&!r.top&&!r.bottom?"0":r.top||r.bottom?"50%":null,right:r.left?"0":null}}},Pt=`
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }

    .p-tooltip-target-wrapper {
        display: inline-flex;
    }
}
`,k=nt.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,closeOnEscape:!1,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:Tt,styles:Pt,inlineStyles:xt}});function Te(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);n&&(u=u.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,u)}return r}function Ct(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Te(Object(r),!0).forEach(function(u){Ie(t,u,r[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach(function(u){Object.defineProperty(t,u,Object.getOwnPropertyDescriptor(r,u))})}return t}var At=v.memo(v.forwardRef(function(t,n){var r=rt(),u=v.useContext(xe),i=k.getProps(t,u),w=v.useState(!1),g=P(w,2),d=g[0],m=g[1],T=v.useState(i.position||"right"),x=P(T,2),O=x[0],Z=x[1],Me=v.useState(""),te=P(Me,2),ne=te[0],re=te[1],oe={props:i,state:{visible:d,position:O,className:ne},context:{right:O==="right",left:O==="left",top:O==="top",bottom:O==="bottom"}},A=k.setMetaData(oe),F=A.ptm,Y=A.cx,je=A.sx,De=A.isUnstyled;ot(k.css.styles,De,{name:"tooltip"}),it({callback:function(){E()},when:i.closeOnEscape,priority:[at.TOOLTIP,0]});var f=v.useRef(null),R=v.useRef(null),p=v.useRef(null),I=v.useRef(null),_=v.useRef(!0),ie=v.useRef({}),ae=v.useRef(null),Le=ut({listener:function(e){!b.isTouchDevice()&&E(e)}}),ue=P(Le,2),Ne=ue[0],He=ue[1],$e=lt({target:p.current,listener:function(e){E(e)},when:d}),le=P($e,2),ke=le[0],We=le[1],Ue=function(e){return!(i.content||y(e,"tooltip"))},Be=function(e){return!(i.content||y(e,"tooltip")||i.children)},K=function(e){return y(e,"mousetrack")||i.mouseTrack},se=function(e){return y(e,"disabled")==="true"||fe(e,"disabled")||i.disabled},ce=function(e){return y(e,"showondisabled")||i.showOnDisabled},M=function(){return y(p.current,"autohide")||i.autoHide},y=function(e,o){return fe(e,"data-pr-".concat(o))?e.getAttribute("data-pr-".concat(o)):null},fe=function(e,o){return e&&e.hasAttribute(o)},pe=function(e){var o=[y(e,"showevent")||i.showEvent],c=[y(e,"hideevent")||i.hideEvent];if(K(e))o=["mousemove"],c=["mouseleave"];else{var l=y(e,"event")||i.event;l==="focus"&&(o=["focus"],c=["blur"]),l==="both"&&(o=["focus","mouseenter"],c=["blur","mouseleave"])}return{showEvents:o,hideEvents:c}},de=function(e){return y(e,"position")||O},Ze=function(e){var o=y(e,"mousetracktop")||i.mouseTrackTop,c=y(e,"mousetrackleft")||i.mouseTrackLeft;return{top:o,left:c}},ve=function(e,o){if(R.current){var c=y(e,"tooltip")||i.content;c?(R.current.innerHTML="",R.current.appendChild(document.createTextNode(c)),o()):i.children&&o()}},me=function(e){ve(p.current,function(){var o=ae.current,c=o.pageX,l=o.pageY;i.autoZIndex&&!$.get(f.current)&&$.set("tooltip",f.current,u&&u.autoZIndex||J.autoZIndex,i.baseZIndex||u&&u.zIndex.tooltip||J.zIndex.tooltip),f.current.style.left="",f.current.style.top="",M()&&(f.current.style.pointerEvents="none");var s=K(p.current)||e==="mouse";(s&&!I.current||s)&&(I.current={width:b.getOuterWidth(f.current),height:b.getOuterHeight(f.current)}),ye(p.current,{x:c,y:l},e)})},j=function(e){p.current=e.currentTarget;var o=se(p.current),c=Be(ce(p.current)&&o?p.current.firstChild:p.current);if(!(c||o))if(ae.current=e,d)D("updateDelay",me);else{var l=L(i.onBeforeShow,{originalEvent:e,target:p.current});l&&D("showDelay",function(){m(!0),L(i.onShow,{originalEvent:e,target:p.current})})}},E=function(e){if(he(),d){var o=L(i.onBeforeHide,{originalEvent:e,target:p.current});o&&D("hideDelay",function(){!M()&&_.current===!1||($.clear(f.current),b.removeClass(f.current,"p-tooltip-active"),m(!1),L(i.onHide,{originalEvent:e,target:p.current}))})}},ye=function(e,o,c){var l=0,s=0,h=c||O;if((K(e)||h=="mouse")&&o){var S={width:b.getOuterWidth(f.current),height:b.getOuterHeight(f.current)};l=o.x,s=o.y;var we=Ze(e),N=we.top,H=we.left;switch(h){case"left":l=l-(S.width+H),s=s-(S.height/2-N);break;case"right":case"mouse":l=l+H,s=s-(S.height/2-N);break;case"top":l=l-(S.width/2-H),s=s-(S.height+N);break;case"bottom":l=l-(S.width/2-H),s=s+N;break}l<=0||I.current.width>S.width?(f.current.style.left="0px",f.current.style.right=window.innerWidth-S.width-l+"px"):(f.current.style.right="",f.current.style.left=l+"px"),f.current.style.top=s+"px",b.addClass(f.current,"p-tooltip-active")}else{var z=b.findCollisionPosition(h),Je=y(e,"my")||i.my||z.my,Qe=y(e,"at")||i.at||z.at;f.current.style.padding="0px",b.flipfitCollision(f.current,e,Je,Qe,function(V){var Ee=V.at,q=Ee.x,et=Ee.y,tt=V.my.x,Se=i.at?q!=="center"&&q!==tt?q:et:V.at["".concat(z.axis)];f.current.style.padding="",Z(Se),Fe(Se),b.addClass(f.current,"p-tooltip-active")})}},Fe=function(e){if(f.current){var o=getComputedStyle(f.current);e==="left"?f.current.style.left=parseFloat(o.left)-parseFloat(o.paddingLeft)*2+"px":e==="top"&&(f.current.style.top=parseFloat(o.top)-parseFloat(o.paddingTop)*2+"px")}},Ye=function(){M()||(_.current=!1)},Ke=function(e){M()||(_.current=!0,E(e))},Xe=function(e){if(e){var o=pe(e),c=o.showEvents,l=o.hideEvents,s=be(e);c.forEach(function(h){return s==null?void 0:s.addEventListener(h,j)}),l.forEach(function(h){return s==null?void 0:s.addEventListener(h,E)})}},Ge=function(e){if(e){var o=pe(e),c=o.showEvents,l=o.hideEvents,s=be(e);c.forEach(function(h){return s==null?void 0:s.removeEventListener(h,j)}),l.forEach(function(h){return s==null?void 0:s.removeEventListener(h,E)})}},D=function(e,o){he();var c=y(p.current,e.toLowerCase())||i[e];c?ie.current["".concat(e)]=setTimeout(function(){return o()},c):o()},L=function(e){if(e){for(var o=arguments.length,c=new Array(o>1?o-1:0),l=1;l<o;l++)c[l-1]=arguments[l];var s=e.apply(void 0,c);return s===void 0&&(s=!0),s}return!0},he=function(){Object.values(ie.current).forEach(function(e){return clearTimeout(e)})},be=function(e){if(e){if(ce(e)){if(!e.hasWrapper){var o=document.createElement("div"),c=e.nodeName==="INPUT";return c?b.addMultipleClasses(o,"p-tooltip-target-wrapper p-inputwrapper"):b.addClass(o,"p-tooltip-target-wrapper"),e.parentNode.insertBefore(o,e),o.appendChild(e),e.hasWrapper=!0,o}return e.parentElement}else if(e.hasWrapper){var l;(l=e.parentElement).replaceWith.apply(l,wt(e.parentElement.childNodes)),delete e.hasWrapper}return e}return null},ze=function(e){G(e),X(e)},X=function(e){ge(e||i.target,Xe)},G=function(e){ge(e||i.target,Ge)},ge=function(e,o){if(e=U.getRefElement(e),e)if(b.isElement(e))o(e);else{var c=function(s){var h=b.find(document,s);h.forEach(function(S){o(S)})};e instanceof Array?e.forEach(function(l){c(l)}):c(e)}};Pe(function(){d&&p.current&&se(p.current)&&E()}),W(function(){return X(),function(){G()}},[j,E,i.target]),W(function(){if(d){var a=de(p.current),e=y(p.current,"classname");Z(a),re(e),me(a),Ne(),ke()}else Z(i.position||"right"),re(""),p.current=null,I.current=null,_.current=!0;return function(){He(),We()}},[d]),W(function(){var a=de(p.current);d&&a!=="mouse"&&D("updateDelay",function(){ve(p.current,function(){ye(p.current)})})},[i.content]),Ce(function(){E(),$.clear(f.current)}),v.useImperativeHandle(n,function(){return{props:i,updateTargetEvents:ze,loadTargetEvents:X,unloadTargetEvents:G,show:j,hide:E,getElement:function(){return f.current},getTarget:function(){return p.current}}});var Ve=function(){var e=Ue(p.current),o=r({id:i.id,className:Ae(i.className,Y("root",{positionState:O,classNameState:ne})),style:i.style,role:"tooltip","aria-hidden":d,onMouseEnter:function(h){return Ye()},onMouseLeave:function(h){return Ke(h)}},k.getOtherProps(i),F("root")),c=r({className:Y("arrow"),style:je("arrow",Ct({},oe))},F("arrow")),l=r({className:Y("text")},F("text"));return v.createElement("div",B({ref:f},o),v.createElement("div",c),v.createElement("div",B({ref:R},l),e&&i.children))};if(d){var qe=Ve();return v.createElement(Re,{element:qe,appendTo:i.appendTo,visible:!0})}return null}));At.displayName="Tooltip";export{Re as P,At as T};
