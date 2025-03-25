import{r as d}from"./index-DGOumNSj.js";import{u as tt,P as rt,C as nt,b as ot,a as at,c as it,k as st,m as lt,j as ut,e as V,f as ct,Z as W,g as xe,D as y,O as pt,h as Se,E as ft}from"./componentbase.esm-BdcVyoov.js";import{P as dt}from"./portal.esm-sGRjpPF9.js";function $(){return $=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c])}return t},$.apply(this,arguments)}function T(t){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},T(t)}function vt(t,o){if(T(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var c=r.call(t,o);if(T(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(t)}function mt(t){var o=vt(t,"string");return T(o)==="symbol"?o:String(o)}function Pe(t,o,r){return o=mt(o),o in t?Object.defineProperty(t,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[o]=r,t}function q(t,o){(o==null||o>t.length)&&(o=t.length);for(var r=0,c=new Array(o);r<o;r++)c[r]=t[r];return c}function ht(t){if(Array.isArray(t))return q(t)}function yt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ce(t,o){if(t){if(typeof t=="string")return q(t,o);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q(t,o)}}function bt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gt(t){return ht(t)||yt(t)||Ce(t)||bt()}function Et(t){if(Array.isArray(t))return t}function wt(t,o){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var c,a,x,w,h=[],O=!0,P=!1;try{if(x=(r=r.call(t)).next,o!==0)for(;!(O=(c=x.call(r)).done)&&(h.push(c.value),h.length!==o);O=!0);}catch(C){P=!0,a=C}finally{try{if(!O&&r.return!=null&&(w=r.return(),Object(w)!==w))return}finally{if(P)throw a}}return h}}function Ot(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(t,o){return Et(t)||wt(t,o)||Ce(t,o)||Ot()}var St={root:function(o){var r=o.positionState,c=o.classNameState;return xe("p-tooltip p-component",Pe({},"p-tooltip-".concat(r),!0),c)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Tt={arrow:function(o){var r=o.context;return{top:r.bottom?"0":r.right||r.left||!r.right&&!r.left&&!r.top&&!r.bottom?"50%":null,bottom:r.top?"0":null,left:r.right||!r.right&&!r.left&&!r.top&&!r.bottom?"0":r.top||r.bottom?"50%":null,right:r.left?"0":null}}},xt=`
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
`,k=nt.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,closeOnEscape:!1,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:St,styles:xt,inlineStyles:Tt}});function Te(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);o&&(c=c.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,c)}return r}function Pt(t){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{};o%2?Te(Object(r),!0).forEach(function(c){Pe(t,c,r[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach(function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(r,c))})}return t}var Ct=d.memo(d.forwardRef(function(t,o){var r=tt(),c=d.useContext(rt),a=k.getProps(t,c),x=d.useState(!1),w=S(x,2),h=w[0],O=w[1],P=d.useState(a.position||"right"),C=S(P,2),E=C[0],B=C[1],Re=d.useState(""),J=S(Re,2),Q=J[0],ee=J[1],De=d.useState(!1),te=S(De,2),Ie=te[0],re=te[1],ne=h&&a.closeOnEscape,je=ot("tooltip",ne),oe={props:a,state:{visible:h,position:E,className:Q},context:{right:E==="right",left:E==="left",top:E==="top",bottom:E==="bottom"}},R=k.setMetaData(oe),U=R.ptm,Z=R.cx,Le=R.sx,Ae=R.isUnstyled;at(k.css.styles,Ae,{name:"tooltip"}),it({callback:function(){b()},when:ne,priority:[ft.TOOLTIP,je]});var p=d.useRef(null),D=d.useRef(null),f=d.useRef(null),I=d.useRef(null),j=d.useRef(!0),ae=d.useRef({}),ie=d.useRef(null),Me=st({listener:function(e){!y.isTouchDevice()&&b(e)}}),se=S(Me,2),Ne=se[0],_e=se[1],He=lt({target:f.current,listener:function(e){b(e)},when:h}),le=S(He,2),We=le[0],ke=le[1],$e=function(e){return!(a.content||v(e,"tooltip"))},Be=function(e){return!(a.content||v(e,"tooltip")||a.children)},F=function(e){return v(e,"mousetrack")||a.mouseTrack},ue=function(e){return v(e,"disabled")==="true"||pe(e,"disabled")||a.disabled},ce=function(e){return v(e,"showondisabled")||a.showOnDisabled},L=function(){return v(f.current,"autohide")||a.autoHide},v=function(e,n){return pe(e,"data-pr-".concat(n))?e.getAttribute("data-pr-".concat(n)):null},pe=function(e,n){return e&&e.hasAttribute(n)},fe=function(e){var n=[v(e,"showevent")||a.showEvent],u=[v(e,"hideevent")||a.hideEvent];if(F(e))n=["mousemove"],u=["mouseleave"];else{var s=v(e,"event")||a.event;s==="focus"&&(n=["focus"],u=["blur"]),s==="both"&&(n=["focus","mouseenter"],u=Ie?["blur"]:["mouseleave","blur"])}return{showEvents:n,hideEvents:u}},de=function(e){return v(e,"position")||E},Ue=function(e){var n=v(e,"mousetracktop")||a.mouseTrackTop,u=v(e,"mousetrackleft")||a.mouseTrackLeft;return{top:n,left:u}},ve=function(e,n){if(D.current){var u=v(e,"tooltip")||a.content;u?(D.current.innerHTML="",D.current.appendChild(document.createTextNode(u)),n()):a.children&&n()}},me=function(e){ve(f.current,function(){var n=ie.current,u=n.pageX,s=n.pageY;a.autoZIndex&&!W.get(p.current)&&W.set("tooltip",p.current,c&&c.autoZIndex||Se.autoZIndex,a.baseZIndex||c&&c.zIndex.tooltip||Se.zIndex.tooltip),p.current.style.left="",p.current.style.top="",L()&&(p.current.style.pointerEvents="none");var l=F(f.current)||e==="mouse";(l&&!I.current||l)&&(I.current={width:y.getOuterWidth(p.current),height:y.getOuterHeight(p.current)}),he(f.current,{x:u,y:s},e)})},A=function(e){e.type&&e.type==="focus"&&re(!0),f.current=e.currentTarget;var n=ue(f.current),u=Be(ce(f.current)&&n?f.current.firstChild:f.current);if(!(u||n))if(ie.current=e,h)M("updateDelay",me);else{var s=N(a.onBeforeShow,{originalEvent:e,target:f.current});s&&M("showDelay",function(){O(!0),N(a.onShow,{originalEvent:e,target:f.current})})}},b=function(e){e&&e.type==="blur"&&re(!1),ye();var n=!0;h&&(n=N(a.onBeforeHide,{originalEvent:e,target:f.current}),n&&M("hideDelay",function(){!L()&&j.current===!1||(W.clear(p.current),y.removeClass(p.current,"p-tooltip-active"),N(a.onHide,{originalEvent:e,target:f.current}))})),n&&O(!1)},he=function(e,n,u){var s=0,l=0,m=u||E;if((F(e)||m=="mouse")&&n){var g={width:y.getOuterWidth(p.current),height:y.getOuterHeight(p.current)};s=n.x,l=n.y;var Ee=Ue(e),_=Ee.top,H=Ee.left;switch(m){case"left":s=s-(g.width+H),l=l-(g.height/2-_);break;case"right":case"mouse":s=s+H,l=l-(g.height/2-_);break;case"top":s=s-(g.width/2-H),l=l-(g.height+_);break;case"bottom":s=s-(g.width/2-H),l=l+_;break}s<=0||I.current.width>g.width?(p.current.style.left="0px",p.current.style.right=window.innerWidth-g.width-s+"px"):(p.current.style.right="",p.current.style.left=s+"px"),p.current.style.top=l+"px",y.addClass(p.current,"p-tooltip-active")}else{var X=y.findCollisionPosition(m),qe=v(e,"my")||a.my||X.my,Je=v(e,"at")||a.at||X.at;p.current.style.padding="0px",y.flipfitCollision(p.current,e,qe,Je,function(G){var we=G.at,z=we.x,Qe=we.y,et=G.my.x,Oe=a.at?z!=="center"&&z!==et?z:Qe:G.at["".concat(X.axis)];p.current.style.padding="",B(Oe),Ze(Oe),y.addClass(p.current,"p-tooltip-active")})}},Ze=function(e){if(p.current){var n=getComputedStyle(p.current);e==="left"?p.current.style.left=parseFloat(n.left)-parseFloat(n.paddingLeft)*2+"px":e==="top"&&(p.current.style.top=parseFloat(n.top)-parseFloat(n.paddingTop)*2+"px")}},Fe=function(){L()||(j.current=!1)},Ke=function(e){L()||(j.current=!0,b(e))},Ye=function(e){if(e){var n=fe(e),u=n.showEvents,s=n.hideEvents,l=be(e);u.forEach(function(m){return l==null?void 0:l.addEventListener(m,A)}),s.forEach(function(m){return l==null?void 0:l.addEventListener(m,b)})}},Xe=function(e){if(e){var n=fe(e),u=n.showEvents,s=n.hideEvents,l=be(e);u.forEach(function(m){return l==null?void 0:l.removeEventListener(m,A)}),s.forEach(function(m){return l==null?void 0:l.removeEventListener(m,b)})}},M=function(e,n){ye();var u=v(f.current,e.toLowerCase())||a[e];u?ae.current["".concat(e)]=setTimeout(function(){return n()},u):n()},N=function(e){if(e){for(var n=arguments.length,u=new Array(n>1?n-1:0),s=1;s<n;s++)u[s-1]=arguments[s];var l=e.apply(void 0,u);return l===void 0&&(l=!0),l}return!0},ye=function(){Object.values(ae.current).forEach(function(e){return clearTimeout(e)})},be=function(e){if(e){if(ce(e)){if(!e.hasWrapper){var n=document.createElement("div"),u=e.nodeName==="INPUT";return u?y.addMultipleClasses(n,"p-tooltip-target-wrapper p-inputwrapper"):y.addClass(n,"p-tooltip-target-wrapper"),e.parentNode.insertBefore(n,e),n.appendChild(e),e.hasWrapper=!0,n}return e.parentElement}else if(e.hasWrapper){var s;(s=e.parentElement).replaceWith.apply(s,gt(e.parentElement.childNodes)),delete e.hasWrapper}return e}return null},Ge=function(e){Y(e),K(e)},K=function(e){ge(e||a.target,Ye)},Y=function(e){ge(e||a.target,Xe)},ge=function(e,n){if(e=pt.getRefElement(e),e)if(y.isElement(e))n(e);else{var u=function(l){var m=y.find(document,l);m.forEach(function(g){n(g)})};e instanceof Array?e.forEach(function(s){u(s)}):u(e)}};ut(function(){h&&f.current&&ue(f.current)&&b()}),V(function(){return K(),function(){Y()}},[A,b,a.target]),V(function(){if(h){var i=de(f.current),e=v(f.current,"classname");B(i),ee(e),me(i),Ne(),We()}else B(a.position||"right"),ee(""),f.current=null,I.current=null,j.current=!0;return function(){_e(),ke()}},[h]),V(function(){var i=de(f.current);h&&i!=="mouse"&&M("updateDelay",function(){ve(f.current,function(){he(f.current)})})},[a.content]),ct(function(){b(),W.clear(p.current)}),d.useImperativeHandle(o,function(){return{props:a,updateTargetEvents:Ge,loadTargetEvents:K,unloadTargetEvents:Y,show:A,hide:b,getElement:function(){return p.current},getTarget:function(){return f.current}}});var ze=function(){var e=$e(f.current),n=r({id:a.id,className:xe(a.className,Z("root",{positionState:E,classNameState:Q})),style:a.style,role:"tooltip","aria-hidden":h,onMouseEnter:function(m){return Fe()},onMouseLeave:function(m){return Ke(m)}},k.getOtherProps(a),U("root")),u=r({className:Z("arrow"),style:Le("arrow",Pt({},oe))},U("arrow")),s=r({className:Z("text")},U("text"));return d.createElement("div",$({ref:p},n),d.createElement("div",u),d.createElement("div",$({ref:D},s),e&&a.children))};if(h){var Ve=ze();return d.createElement(dt,{element:Ve,appendTo:a.appendTo,visible:!0})}return null}));Ct.displayName="Tooltip";export{Ct as T};
