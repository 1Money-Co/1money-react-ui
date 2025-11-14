import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{R as tn,r as nn}from"./index-CP2yOfOm.js";import{a,c as me}from"./Icons-DkzvHvr6.js";/* empty css              */import{T as Tn}from"./Toast-CabW3nfe.js";import{c as he}from"./clipboard-DZvO4X-U.js";import"./classnames-lRq3rz0l.js";import"./componentbase.esm-4JClMOy3.js";import"./csstransition.esm-B5iK3TG5.js";import"./index-BOAxdYzW.js";import"./portal.esm-DsCazcPz.js";import"./index.esm-DKy0vDUU.js";import"./iconbase.esm-CgcK1F5D.js";import"./index.esm-DB2qnA-K.js";import"./index.esm-ByOqZbnP.js";import"./index.esm-BUPvvfCY.js";import"./ripple.esm-B4ep2fnx.js";import"./TransitionGroup-BcWs-nSM.js";import"./Typography-DoqwNCiN.js";var T=function(){return T=Object.assign||function(o){for(var c,s=1,i=arguments.length;s<i;s++){c=arguments[s];for(var t in c)Object.prototype.hasOwnProperty.call(c,t)&&(o[t]=c[t])}return o},T.apply(this,arguments)};function bn(e,o,c){if(c||arguments.length===2)for(var s=0,i=o.length,t;s<i;s++)(t||!(s in o))&&(t||(t=Array.prototype.slice.call(o,0,s)),t[s]=o[s]);return e.concat(t||Array.prototype.slice.call(o))}var j="-ms-",rn="-moz-",x="-webkit-",Lo="comm",Pn="rule",Xn="decl",Ce="@import",No="@keyframes",xe="@layer",Fo=Math.abs,no=String.fromCharCode,Yn=Object.assign;function ue(e,o){return R(e,0)^45?(((o<<2^R(e,0))<<2^R(e,1))<<2^R(e,2))<<2^R(e,3):0}function _o(e){return e.trim()}function W(e,o){return(e=o.exec(e))?e[0]:e}function m(e,o,c){return e.replace(o,c)}function gn(e,o,c){return e.indexOf(o,c)}function R(e,o){return e.charCodeAt(o)|0}function q(e,o,c){return e.slice(o,c)}function F(e){return e.length}function Wo(e){return e.length}function an(e,o){return o.push(e),e}function Ie(e,o){return e.map(o).join("")}function ro(e,o){return e.filter(function(c){return!W(c,o)})}var Dn=1,J=1,Oo=0,L=0,A=0,on="";function Ln(e,o,c,s,i,t,l,d){return{value:e,root:o,parent:c,type:s,props:i,children:t,line:Dn,column:J,length:l,return:"",siblings:d}}function M(e,o){return Yn(Ln("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},o)}function K(e){for(;e.root;)e=M(e.root,{children:[e]});an(e,e.siblings)}function ye(){return A}function fe(){return A=L>0?R(on,--L):0,J--,A===10&&(J=1,Dn--),A}function N(){return A=L<Oo?R(on,L++):0,J++,A===10&&(J=1,Dn++),A}function H(){return R(on,L)}function Bn(){return L}function Nn(e,o){return q(on,e,o)}function Kn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ke(e){return Dn=J=1,Oo=F(on=e),L=0,[]}function je(e){return on="",e}function zn(e){return _o(Nn(L-1,Vn(e===91?e+2:e===40?e+1:e)))}function ge(e){for(;(A=H())&&A<33;)N();return Kn(e)>2||Kn(A)>3?"":" "}function Be(e,o){for(;--o&&N()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return Nn(e,Bn()+(o<6&&H()==32&&N()==32))}function Vn(e){for(;N();)switch(A){case e:return L;case 34:case 39:e!==34&&e!==39&&Vn(A);break;case 40:e===41&&Vn(e);break;case 92:N();break}return L}function we(e,o){for(;N()&&e+A!==57;)if(e+A===84&&H()===47)break;return"/*"+Nn(o,L-1)+"*"+no(e===47?e:N())}function ve(e){for(;!Kn(H());)N();return Nn(e,L)}function Se(e){return je(wn("",null,null,null,[""],e=ke(e),0,[0],e))}function wn(e,o,c,s,i,t,l,d,p){for(var I=0,u=0,y=l,f=0,C=0,B=0,S=1,P=1,b=1,w=0,g="",v=i,E=t,k=s,h=g;P;)switch(B=w,w=N()){case 40:if(B!=108&&R(h,y-1)==58){gn(h+=m(zn(w),"&","&\f"),"&\f",Fo(I?d[I-1]:0))!=-1&&(b=-1);break}case 34:case 39:case 91:h+=zn(w);break;case 9:case 10:case 13:case 32:h+=ge(B);break;case 92:h+=Be(Bn()-1,7);continue;case 47:switch(H()){case 42:case 47:an(be(we(N(),Bn()),o,c,p),p);break;default:h+="/"}break;case 123*S:d[I++]=F(h)*b;case 125*S:case 59:case 0:switch(w){case 0:case 125:P=0;case 59+u:b==-1&&(h=m(h,/\f/g,"")),C>0&&F(h)-y&&an(C>32?to(h+";",s,c,y-1,p):to(m(h," ","")+";",s,c,y-2,p),p);break;case 59:h+=";";default:if(an(k=io(h,o,c,I,u,i,d,g,v=[],E=[],y,t),t),w===123)if(u===0)wn(h,o,k,k,v,t,y,d,E);else switch(f===99&&R(h,3)===110?100:f){case 100:case 108:case 109:case 115:wn(e,k,k,s&&an(io(e,k,k,0,0,i,d,g,i,v=[],y,E),E),i,E,y,d,s?v:E);break;default:wn(h,k,k,k,[""],E,0,d,E)}}I=u=C=0,S=b=1,g=h="",y=l;break;case 58:y=1+F(h),C=B;default:if(S<1){if(w==123)--S;else if(w==125&&S++==0&&fe()==125)continue}switch(h+=no(w),w*S){case 38:b=u>0?1:(h+="\f",-1);break;case 44:d[I++]=(F(h)-1)*b,b=1;break;case 64:H()===45&&(h+=zn(N())),f=H(),u=y=F(g=h+=ve(Bn())),w++;break;case 45:B===45&&F(h)==2&&(S=0)}}return t}function io(e,o,c,s,i,t,l,d,p,I,u,y){for(var f=i-1,C=i===0?t:[""],B=Wo(C),S=0,P=0,b=0;S<s;++S)for(var w=0,g=q(e,f+1,f=Fo(P=l[S])),v=e;w<B;++w)(v=_o(P>0?C[w]+" "+g:m(g,/&\f/g,C[w])))&&(p[b++]=v);return Ln(e,o,c,i===0?Pn:d,p,I,u,y)}function be(e,o,c,s){return Ln(e,o,c,Lo,no(ye()),q(e,2,-2),0,s)}function to(e,o,c,s,i){return Ln(e,o,c,Xn,q(e,0,s),q(e,s+1,-1),s,i)}function $o(e,o,c){switch(ue(e,o)){case 5103:return x+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return x+e+e;case 4789:return rn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+rn+e+j+e+e;case 5936:switch(R(e,o+11)){case 114:return x+e+j+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return x+e+j+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return x+e+j+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return x+e+j+e+e;case 6165:return x+e+j+"flex-"+e+e;case 5187:return x+e+m(e,/(\w+).+(:[^]+)/,x+"box-$1$2"+j+"flex-$1$2")+e;case 5443:return x+e+j+"flex-item-"+m(e,/flex-|-self/g,"")+(W(e,/flex-|baseline/)?"":j+"grid-row-"+m(e,/flex-|-self/g,""))+e;case 4675:return x+e+j+"flex-line-pack"+m(e,/align-content|flex-|-self/g,"")+e;case 5548:return x+e+j+m(e,"shrink","negative")+e;case 5292:return x+e+j+m(e,"basis","preferred-size")+e;case 6060:return x+"box-"+m(e,"-grow","")+x+e+j+m(e,"grow","positive")+e;case 4554:return x+m(e,/([^-])(transform)/g,"$1"+x+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,x+"$1"),/(image-set)/,x+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,x+"box-pack:$3"+j+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+x+e+e;case 4200:if(!W(e,/flex-|baseline/))return j+"grid-column-align"+q(e,o)+e;break;case 2592:case 3360:return j+m(e,"template-","")+e;case 4384:case 3616:return c&&c.some(function(s,i){return o=i,W(s.props,/grid-\w+-end/)})?~gn(e+(c=c[o].value),"span",0)?e:j+m(e,"-start","")+e+j+"grid-row-span:"+(~gn(c,"span",0)?W(c,/\d+/):+W(c,/\d+/)-+W(e,/\d+/))+";":j+m(e,"-start","")+e;case 4896:case 4128:return c&&c.some(function(s){return W(s.props,/grid-\w+-start/)})?e:j+m(m(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,x+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(F(e)-1-o>6)switch(R(e,o+1)){case 109:if(R(e,o+4)!==45)break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+x+"$2-$3$1"+rn+(R(e,o+3)==108?"$3":"$2-$3"))+e;case 115:return~gn(e,"stretch",0)?$o(m(e,"stretch","fill-available"),o,c)+e:e}break;case 5152:case 5920:return m(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,i,t,l,d,p,I){return j+i+":"+t+I+(l?j+i+"-span:"+(d?p:+p-+t)+I:"")+e});case 4949:if(R(e,o+6)===121)return m(e,":",":"+x)+e;break;case 6444:switch(R(e,R(e,14)===45?18:11)){case 120:return m(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+x+(R(e,14)===45?"inline-":"")+"box$3$1"+x+"$2$3$1"+j+"$2box$3")+e;case 100:return m(e,":",":"+j)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return m(e,"scroll-","scroll-snap-")+e}return e}function An(e,o){for(var c="",s=0;s<e.length;s++)c+=o(e[s],s,e,o)||"";return c}function Ae(e,o,c,s){switch(e.type){case xe:if(e.children.length)break;case Ce:case Xn:return e.return=e.return||e.value;case Lo:return"";case No:return e.return=e.value+"{"+An(e.children,s)+"}";case Pn:if(!F(e.value=e.props.join(",")))return""}return F(c=An(e.children,s))?e.return=e.value+"{"+c+"}":""}function Ee(e){var o=Wo(e);return function(c,s,i,t){for(var l="",d=0;d<o;d++)l+=e[d](c,s,i,t)||"";return l}}function Re(e){return function(o){o.root||(o=o.return)&&e(o)}}function Te(e,o,c,s){if(e.length>-1&&!e.return)switch(e.type){case Xn:e.return=$o(e.value,e.length,c);return;case No:return An([M(e,{value:m(e.value,"@","@"+x)})],s);case Pn:if(e.length)return Ie(c=e.props,function(i){switch(W(i,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":K(M(e,{props:[m(i,/:(read-\w+)/,":"+rn+"$1")]})),K(M(e,{props:[i]})),Yn(e,{props:ro(c,s)});break;case"::placeholder":K(M(e,{props:[m(i,/:(plac\w+)/,":"+x+"input-$1")]})),K(M(e,{props:[m(i,/:(plac\w+)/,":"+rn+"$1")]})),K(M(e,{props:[m(i,/:(plac\w+)/,j+"input-$1")]})),K(M(e,{props:[i]})),Yn(e,{props:ro(c,s)});break}return""})}}var Pe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},D={},Z=typeof process<"u"&&D!==void 0&&(D.REACT_APP_SC_ATTR||D.SC_ATTR)||"data-styled",Mo="active",zo="data-styled-version",Fn="6.1.17",oo=`/*!sc*/
`,En=typeof window<"u"&&"HTMLElement"in window,De=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&D!==void 0&&D.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&D.REACT_APP_SC_DISABLE_SPEEDY!==""?D.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&D.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&D!==void 0&&D.SC_DISABLE_SPEEDY!==void 0&&D.SC_DISABLE_SPEEDY!==""&&D.SC_DISABLE_SPEEDY!=="false"&&D.SC_DISABLE_SPEEDY),_n=Object.freeze([]),Q=Object.freeze({});function Le(e,o,c){return c===void 0&&(c=Q),e.theme!==c.theme&&e.theme||o||c.theme}var Go=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ne=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Fe=/(^-|-$)/g;function lo(e){return e.replace(Ne,"-").replace(Fe,"")}var _e=/(a)(d)/gi,un=52,po=function(e){return String.fromCharCode(e+(e>25?39:97))};function qn(e){var o,c="";for(o=Math.abs(e);o>un;o=o/un|0)c=po(o%un)+c;return(po(o%un)+c).replace(_e,"$1-$2")}var Gn,Ho=5381,V=function(e,o){for(var c=o.length;c;)e=33*e^o.charCodeAt(--c);return e},Uo=function(e){return V(Ho,e)};function We(e){return qn(Uo(e)>>>0)}function Oe(e){return e.displayName||e.name||"Component"}function Hn(e){return typeof e=="string"&&!0}var Yo=typeof Symbol=="function"&&Symbol.for,Ko=Yo?Symbol.for("react.memo"):60115,$e=Yo?Symbol.for("react.forward_ref"):60112,Me={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ze={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ge=((Gn={})[$e]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gn[Ko]=Vo,Gn);function mo(e){return("type"in(o=e)&&o.type.$$typeof)===Ko?Vo:"$$typeof"in e?Ge[e.$$typeof]:Me;var o}var He=Object.defineProperty,Ue=Object.getOwnPropertyNames,ho=Object.getOwnPropertySymbols,Ye=Object.getOwnPropertyDescriptor,Ke=Object.getPrototypeOf,Co=Object.prototype;function qo(e,o,c){if(typeof o!="string"){if(Co){var s=Ke(o);s&&s!==Co&&qo(e,s,c)}var i=Ue(o);ho&&(i=i.concat(ho(o)));for(var t=mo(e),l=mo(o),d=0;d<i.length;++d){var p=i[d];if(!(p in ze||c&&c[p]||l&&p in l||t&&p in t)){var I=Ye(o,p);try{He(e,p,I)}catch{}}}}return e}function X(e){return typeof e=="function"}function eo(e){return typeof e=="object"&&"styledComponentId"in e}function G(e,o){return e&&o?"".concat(e," ").concat(o):e||o||""}function xo(e,o){if(e.length===0)return"";for(var c=e[0],s=1;s<e.length;s++)c+=e[s];return c}function ln(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Jn(e,o,c){if(c===void 0&&(c=!1),!c&&!ln(e)&&!Array.isArray(e))return o;if(Array.isArray(o))for(var s=0;s<o.length;s++)e[s]=Jn(e[s],o[s]);else if(ln(o))for(var s in o)e[s]=Jn(e[s],o[s]);return e}function so(e,o){Object.defineProperty(e,"toString",{value:o})}function pn(e){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Ve=function(){function e(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return e.prototype.indexOfGroup=function(o){for(var c=0,s=0;s<o;s++)c+=this.groupSizes[s];return c},e.prototype.insertRules=function(o,c){if(o>=this.groupSizes.length){for(var s=this.groupSizes,i=s.length,t=i;o>=t;)if((t<<=1)<0)throw pn(16,"".concat(o));this.groupSizes=new Uint32Array(t),this.groupSizes.set(s),this.length=t;for(var l=i;l<t;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(o+1),p=(l=0,c.length);l<p;l++)this.tag.insertRule(d,c[l])&&(this.groupSizes[o]++,d++)},e.prototype.clearGroup=function(o){if(o<this.length){var c=this.groupSizes[o],s=this.indexOfGroup(o),i=s+c;this.groupSizes[o]=0;for(var t=s;t<i;t++)this.tag.deleteRule(s)}},e.prototype.getGroup=function(o){var c="";if(o>=this.length||this.groupSizes[o]===0)return c;for(var s=this.groupSizes[o],i=this.indexOfGroup(o),t=i+s,l=i;l<t;l++)c+="".concat(this.tag.getRule(l)).concat(oo);return c},e}(),vn=new Map,Rn=new Map,Sn=1,In=function(e){if(vn.has(e))return vn.get(e);for(;Rn.has(Sn);)Sn++;var o=Sn++;return vn.set(e,o),Rn.set(o,e),o},qe=function(e,o){Sn=o+1,vn.set(e,o),Rn.set(o,e)},Je="style[".concat(Z,"][").concat(zo,'="').concat(Fn,'"]'),Ze=new RegExp("^".concat(Z,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qe=function(e,o,c){for(var s,i=c.split(","),t=0,l=i.length;t<l;t++)(s=i[t])&&e.registerName(o,s)},Xe=function(e,o){for(var c,s=((c=o.textContent)!==null&&c!==void 0?c:"").split(oo),i=[],t=0,l=s.length;t<l;t++){var d=s[t].trim();if(d){var p=d.match(Ze);if(p){var I=0|parseInt(p[1],10),u=p[2];I!==0&&(qe(u,I),Qe(e,u,p[3]),e.getTag().insertRules(I,i)),i.length=0}else i.push(d)}}},uo=function(e){for(var o=document.querySelectorAll(Je),c=0,s=o.length;c<s;c++){var i=o[c];i&&i.getAttribute(Z)!==Mo&&(Xe(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function ns(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Jo=function(e){var o=document.head,c=e||o,s=document.createElement("style"),i=function(d){var p=Array.from(d.querySelectorAll("style[".concat(Z,"]")));return p[p.length-1]}(c),t=i!==void 0?i.nextSibling:null;s.setAttribute(Z,Mo),s.setAttribute(zo,Fn);var l=ns();return l&&s.setAttribute("nonce",l),c.insertBefore(s,t),s},os=function(){function e(o){this.element=Jo(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var s=document.styleSheets,i=0,t=s.length;i<t;i++){var l=s[i];if(l.ownerNode===c)return l}throw pn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(o,c){try{return this.sheet.insertRule(c,o),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},e.prototype.getRule=function(o){var c=this.sheet.cssRules[o];return c&&c.cssText?c.cssText:""},e}(),es=function(){function e(o){this.element=Jo(o),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(o,c){if(o<=this.length&&o>=0){var s=document.createTextNode(c);return this.element.insertBefore(s,this.nodes[o]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},e.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},e}(),ss=function(){function e(o){this.rules=[],this.length=0}return e.prototype.insertRule=function(o,c){return o<=this.length&&(this.rules.splice(o,0,c),this.length++,!0)},e.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},e.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},e}(),Io=En,cs={isServer:!En,useCSSOMInjection:!De},Zo=function(){function e(o,c,s){o===void 0&&(o=Q),c===void 0&&(c={});var i=this;this.options=T(T({},cs),o),this.gs=c,this.names=new Map(s),this.server=!!o.isServer,!this.server&&En&&Io&&(Io=!1,uo(this)),so(this,function(){return function(t){for(var l=t.getTag(),d=l.length,p="",I=function(y){var f=function(b){return Rn.get(b)}(y);if(f===void 0)return"continue";var C=t.names.get(f),B=l.getGroup(y);if(C===void 0||!C.size||B.length===0)return"continue";var S="".concat(Z,".g").concat(y,'[id="').concat(f,'"]'),P="";C!==void 0&&C.forEach(function(b){b.length>0&&(P+="".concat(b,","))}),p+="".concat(B).concat(S,'{content:"').concat(P,'"}').concat(oo)},u=0;u<d;u++)I(u);return p}(i)})}return e.registerId=function(o){return In(o)},e.prototype.rehydrate=function(){!this.server&&En&&uo(this)},e.prototype.reconstructWithOptions=function(o,c){return c===void 0&&(c=!0),new e(T(T({},this.options),o),this.gs,c&&this.names||void 0)},e.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(o=function(c){var s=c.useCSSOMInjection,i=c.target;return c.isServer?new ss(i):s?new os(i):new es(i)}(this.options),new Ve(o)));var o},e.prototype.hasNameForId=function(o,c){return this.names.has(o)&&this.names.get(o).has(c)},e.prototype.registerName=function(o,c){if(In(o),this.names.has(o))this.names.get(o).add(c);else{var s=new Set;s.add(c),this.names.set(o,s)}},e.prototype.insertRules=function(o,c,s){this.registerName(o,c),this.getTag().insertRules(In(o),s)},e.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},e.prototype.clearRules=function(o){this.getTag().clearGroup(In(o)),this.clearNames(o)},e.prototype.clearTag=function(){this.tag=void 0},e}(),as=/&/g,rs=/^\s*\/\/.*$/gm;function Qo(e,o){return e.map(function(c){return c.type==="rule"&&(c.value="".concat(o," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(o," ")),c.props=c.props.map(function(s){return"".concat(o," ").concat(s)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Qo(c.children,o)),c})}function is(e){var o,c,s,i=Q,t=i.options,l=t===void 0?Q:t,d=i.plugins,p=d===void 0?_n:d,I=function(f,C,B){return B.startsWith(c)&&B.endsWith(c)&&B.replaceAll(c,"").length>0?".".concat(o):f},u=p.slice();u.push(function(f){f.type===Pn&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(as,c).replace(s,I))}),l.prefix&&u.push(Te),u.push(Ae);var y=function(f,C,B,S){C===void 0&&(C=""),B===void 0&&(B=""),S===void 0&&(S="&"),o=S,c=C,s=new RegExp("\\".concat(c,"\\b"),"g");var P=f.replace(rs,""),b=Se(B||C?"".concat(B," ").concat(C," { ").concat(P," }"):P);l.namespace&&(b=Qo(b,l.namespace));var w=[];return An(b,Ee(u.concat(Re(function(g){return w.push(g)})))),w};return y.hash=p.length?p.reduce(function(f,C){return C.name||pn(15),V(f,C.name)},Ho).toString():"",y}var ts=new Zo,Zn=is(),Xo=tn.createContext({shouldForwardProp:void 0,styleSheet:ts,stylis:Zn});Xo.Consumer;tn.createContext(void 0);function yo(){return nn.useContext(Xo)}var ls=function(){function e(o,c){var s=this;this.inject=function(i,t){t===void 0&&(t=Zn);var l=s.name+t.hash;i.hasNameForId(s.id,l)||i.insertRules(s.id,l,t(s.rules,l,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=c,so(this,function(){throw pn(12,String(s.name))})}return e.prototype.getName=function(o){return o===void 0&&(o=Zn),this.name+o.hash},e}(),ps=function(e){return e>="A"&&e<="Z"};function fo(e){for(var o="",c=0;c<e.length;c++){var s=e[c];if(c===1&&s==="-"&&e[0]==="-")return e;ps(s)?o+="-"+s.toLowerCase():o+=s}return o.startsWith("ms-")?"-"+o:o}var ne=function(e){return e==null||e===!1||e===""},oe=function(e){var o,c,s=[];for(var i in e){var t=e[i];e.hasOwnProperty(i)&&!ne(t)&&(Array.isArray(t)&&t.isCss||X(t)?s.push("".concat(fo(i),":"),t,";"):ln(t)?s.push.apply(s,bn(bn(["".concat(i," {")],oe(t),!1),["}"],!1)):s.push("".concat(fo(i),": ").concat((o=i,(c=t)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||o in Pe||o.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return s};function U(e,o,c,s){if(ne(e))return[];if(eo(e))return[".".concat(e.styledComponentId)];if(X(e)){if(!X(t=e)||t.prototype&&t.prototype.isReactComponent||!o)return[e];var i=e(o);return U(i,o,c,s)}var t;return e instanceof ls?c?(e.inject(c,s),[e.getName(s)]):[e]:ln(e)?oe(e):Array.isArray(e)?Array.prototype.concat.apply(_n,e.map(function(l){return U(l,o,c,s)})):[e.toString()]}function ds(e){for(var o=0;o<e.length;o+=1){var c=e[o];if(X(c)&&!eo(c))return!1}return!0}var ms=Uo(Fn),hs=function(){function e(o,c,s){this.rules=o,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&ds(o),this.componentId=c,this.baseHash=V(ms,c),this.baseStyle=s,Zo.registerId(c)}return e.prototype.generateAndInjectStyles=function(o,c,s){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,c,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))i=G(i,this.staticRulesId);else{var t=xo(U(this.rules,o,c,s)),l=qn(V(this.baseHash,t)>>>0);if(!c.hasNameForId(this.componentId,l)){var d=s(t,".".concat(l),void 0,this.componentId);c.insertRules(this.componentId,l,d)}i=G(i,l),this.staticRulesId=l}else{for(var p=V(this.baseHash,s.hash),I="",u=0;u<this.rules.length;u++){var y=this.rules[u];if(typeof y=="string")I+=y;else if(y){var f=xo(U(y,o,c,s));p=V(p,f+u),I+=f}}if(I){var C=qn(p>>>0);c.hasNameForId(this.componentId,C)||c.insertRules(this.componentId,C,s(I,".".concat(C),void 0,this.componentId)),i=G(i,C)}}return i},e}(),ee=tn.createContext(void 0);ee.Consumer;var Un={};function Cs(e,o,c){var s=eo(e),i=e,t=!Hn(e),l=o.attrs,d=l===void 0?_n:l,p=o.componentId,I=p===void 0?function(v,E){var k=typeof v!="string"?"sc":lo(v);Un[k]=(Un[k]||0)+1;var h="".concat(k,"-").concat(We(Fn+k+Un[k]));return E?"".concat(E,"-").concat(h):h}(o.displayName,o.parentComponentId):p,u=o.displayName,y=u===void 0?function(v){return Hn(v)?"styled.".concat(v):"Styled(".concat(Oe(v),")")}(e):u,f=o.displayName&&o.componentId?"".concat(lo(o.displayName),"-").concat(o.componentId):o.componentId||I,C=s&&i.attrs?i.attrs.concat(d).filter(Boolean):d,B=o.shouldForwardProp;if(s&&i.shouldForwardProp){var S=i.shouldForwardProp;if(o.shouldForwardProp){var P=o.shouldForwardProp;B=function(v,E){return S(v,E)&&P(v,E)}}else B=S}var b=new hs(c,f,s?i.componentStyle:void 0);function w(v,E){return function(k,h,Y){var dn=k.attrs,ae=k.componentStyle,re=k.defaultProps,ie=k.foldedComponentIds,te=k.styledComponentId,le=k.target,pe=tn.useContext(ee),de=yo(),On=k.shouldForwardProp||de.shouldForwardProp,co=Le(h,pe,re)||Q,_=function(hn,sn,Cn){for(var cn,z=T(T({},sn),{className:void 0,theme:Cn}),Mn=0;Mn<hn.length;Mn+=1){var xn=X(cn=hn[Mn])?cn(z):cn;for(var $ in xn)z[$]=$==="className"?G(z[$],xn[$]):$==="style"?T(T({},z[$]),xn[$]):xn[$]}return sn.className&&(z.className=G(z.className,sn.className)),z}(dn,h,co),mn=_.as||le,en={};for(var O in _)_[O]===void 0||O[0]==="$"||O==="as"||O==="theme"&&_.theme===co||(O==="forwardedAs"?en.as=_.forwardedAs:On&&!On(O,mn)||(en[O]=_[O]));var ao=function(hn,sn){var Cn=yo(),cn=hn.generateAndInjectStyles(sn,Cn.styleSheet,Cn.stylis);return cn}(ae,_),$n=G(ie,te);return ao&&($n+=" "+ao),_.className&&($n+=" "+_.className),en[Hn(mn)&&!Go.has(mn)?"class":"className"]=$n,Y&&(en.ref=Y),nn.createElement(mn,en)}(g,v,E)}w.displayName=y;var g=tn.forwardRef(w);return g.attrs=C,g.componentStyle=b,g.displayName=y,g.shouldForwardProp=B,g.foldedComponentIds=s?G(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=f,g.target=s?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=s?function(E){for(var k=[],h=1;h<arguments.length;h++)k[h-1]=arguments[h];for(var Y=0,dn=k;Y<dn.length;Y++)Jn(E,dn[Y],!0);return E}({},i.defaultProps,v):v}}),so(g,function(){return".".concat(g.styledComponentId)}),t&&qo(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function ko(e,o){for(var c=[e[0]],s=0,i=o.length;s<i;s+=1)c.push(o[s],e[s+1]);return c}var jo=function(e){return Object.assign(e,{isCss:!0})};function xs(e){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];if(X(e)||ln(e))return jo(U(ko(_n,bn([e],o,!0))));var s=e;return o.length===0&&s.length===1&&typeof s[0]=="string"?U(s):jo(U(ko(s,o)))}function Qn(e,o,c){if(c===void 0&&(c=Q),!o)throw pn(1,o);var s=function(i){for(var t=[],l=1;l<arguments.length;l++)t[l-1]=arguments[l];return e(o,c,xs.apply(void 0,bn([i],t,!1)))};return s.attrs=function(i){return Qn(e,o,T(T({},c),{attrs:Array.prototype.concat(c.attrs,i).filter(Boolean)}))},s.withConfig=function(i){return Qn(e,o,T(T({},c),i))},s}var se=function(e){return Qn(Cs,e)},ce=se;Go.forEach(function(e){ce[e]=se(e)});const Ns={title:"Components/Icons",component:a,argTypes:{className:{control:"text"},prefixCls:{control:"text"},size:{control:"number"},color:{control:"color"},borderColor:{control:"color"},gradientColor:{control:"object"}},args:{prefixCls:"icons"},tags:["autodocs"]},r=ce.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  &:hover{
    cursor: pointer;
    background-color: #029cfd;
    border-radius: 8px;
    svg{
      fill: transparent;
    }
    span{
      color: #fff;
    }
  }
`,Wn=(e,o)=>{he(e,c=>{c?o==null||o():console.log("copied failed")})},yn={args:{prefixCls:"icons",color:"#073387",borderColor:"#03163A",size:24},parameters:{docs:{description:{story:"The primary icons are used to represent the 1Money icons."}}},render:function(o){const c=nn.useRef(null),s=i=>{Wn(i,()=>{var t;return(t=c.current)==null?void 0:t.show({severity:"success",summary:"copy successfully",detail:"already copied",life:1500})})};return n.jsxs("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fill, minmax(100px, 1fr))"},children:[n.jsx(Tn,{ref:c,appendTo:null}),n.jsxs(r,{onClick:()=>s("<Icons name='deposit' />"),children:[n.jsx(me,{children:n.jsx(a,{...o,name:"deposit"})}),n.jsx("span",{children:"Deposit"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='withdrawal' />"),children:[n.jsx(a,{...o,name:"withdrawal"}),n.jsx("span",{children:"Withdrawal"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='conversion' />"),children:[n.jsx(a,{...o,name:"conversion"}),n.jsx("span",{children:"Conversion"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='mintToken' />"),children:[n.jsx(a,{...o,name:"mintToken"}),n.jsx("span",{children:"MintToken"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='burnToken' />"),children:[n.jsx(a,{...o,name:"burnToken"}),n.jsx("span",{children:"BurnToken"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='accountLocked' />"),children:[n.jsx(a,{...o,name:"accountLocked"}),n.jsx("span",{children:"Account Locked"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='pending' />"),children:[n.jsx(a,{...o,name:"pending"}),n.jsx("span",{children:"Pending"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='success' />"),children:[n.jsx(a,{...o,name:"success"}),n.jsx("span",{children:"Success"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='fail' />"),children:[n.jsx(a,{...o,name:"fail"}),n.jsx("span",{children:"Fail"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='error' />"),children:[n.jsx(a,{...o,name:"error"}),n.jsx("span",{children:"Error"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='statusSuccess' color='#1F580033' />"),children:[n.jsx(a,{...o,name:"statusSuccess",color:"#1F580033"}),n.jsx("span",{children:"Status Success"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='statusFail' color='#AE00001A' />"),children:[n.jsx(a,{...o,name:"statusFail",color:"#AE00001A"}),n.jsx("span",{children:"Status Fail"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='dashboard' />"),children:[n.jsx(a,{...o,name:"dashboard"}),n.jsx("span",{children:"Dashboard"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='digitalAsset' />"),children:[n.jsx(a,{...o,name:"digitalAsset"}),n.jsx("span",{children:"Digital Asset"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='addressBook' />"),children:[n.jsx(a,{...o,name:"addressBook"}),n.jsx("span",{children:"Address Book"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='linkedBankAccounts' />"),children:[n.jsx(a,{...o,name:"linkedBankAccounts"}),n.jsx("span",{children:"Linked Bank Accounts"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='wire' />"),children:[n.jsx(a,{...o,name:"wire"}),n.jsx("span",{children:"Wire"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='swift' />"),children:[n.jsx(a,{...o,name:"swift"}),n.jsx("span",{children:"Swift"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='account' />"),children:[n.jsx(a,{...o,name:"account"}),n.jsx("span",{children:"Account"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='profile' />"),children:[n.jsx(a,{...o,name:"profile"}),n.jsx("span",{children:"Profile"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='security' />"),children:[n.jsx(a,{...o,name:"security"}),n.jsx("span",{children:"Security"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logout' />"),children:[n.jsx(a,{...o,name:"logout"}),n.jsx("span",{children:"Logout"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='portfolio' />"),children:[n.jsx(a,{...o,name:"portfolio"}),n.jsx("span",{children:"Portfolio"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='home' />"),children:[n.jsx(a,{...o,name:"home"}),n.jsx("span",{children:"Home"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='convert' />"),children:[n.jsx(a,{...o,name:"convert"}),n.jsx("span",{children:"Convert"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='withdraw' />"),children:[n.jsx(a,{...o,name:"withdraw"}),n.jsx("span",{children:"Withdraw"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='send' />"),children:[n.jsx(a,{...o,name:"send"}),n.jsx("span",{children:"Send"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='menuDeposit' />"),children:[n.jsx(a,{...o,name:"menuDeposit"}),n.jsx("span",{children:"Menu Deposit"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='company' />"),children:[n.jsx(a,{...o,name:"company"}),n.jsx("span",{children:"Company"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='parties' />"),children:[n.jsx(a,{...o,name:"parties"}),n.jsx("span",{children:"Parties"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='transactions' />"),children:[n.jsx(a,{...o,name:"transactions"}),n.jsx("span",{children:"Transactions"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='fiat' />"),children:[n.jsx(a,{...o,name:"fiat"}),n.jsx("span",{children:"Fiat"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='money' />"),children:[n.jsx(a,{...o,name:"money"}),n.jsx("span",{children:"Money"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='sendCrypto' />"),children:[n.jsx(a,{...o,name:"sendCrypto"}),n.jsx("span",{children:"Send Crypto"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='businessAccount' />"),children:[n.jsx(a,{...o,name:"businessAccount"}),n.jsx("span",{children:"Business Portfolio"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='individualAccount' />"),children:[n.jsx(a,{...o,name:"individualAccount"}),n.jsx("span",{children:"Identity"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='arrowUp' />"),children:[n.jsx(a,{...o,name:"arrowUp"}),n.jsx("span",{children:"Arrow Up"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='arrowDown' />"),children:[n.jsx(a,{...o,name:"arrowDown"}),n.jsx("span",{children:"Arrow Down"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='arrowLeft' />"),children:[n.jsx(a,{...o,name:"arrowLeft"}),n.jsx("span",{children:"Arrow Left"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='arrowRight' />"),children:[n.jsx(a,{...o,name:"arrowRight"}),n.jsx("span",{children:"Arrow Right"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='add' />"),children:[n.jsx(a,{...o,name:"add"}),n.jsx("span",{children:"Add"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='minus' />"),children:[n.jsx(a,{...o,name:"minus"}),n.jsx("span",{children:"Minus"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='cross' />"),children:[n.jsx(a,{...o,name:"cross"}),n.jsx("span",{children:"Cross"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='more' />"),children:[n.jsx(a,{...o,name:"more"}),n.jsx("span",{children:"More"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='chevronDown' />"),children:[n.jsx(a,{...o,name:"chevronDown"}),n.jsx("span",{children:"Chevron Down"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='chevronUp' />"),children:[n.jsx(a,{...o,name:"chevronUp"}),n.jsx("span",{children:"Chevron Up"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='chevronLeft' />"),children:[n.jsx(a,{...o,name:"chevronLeft"}),n.jsx("span",{children:"Chevron Left"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='chevronRight' />"),children:[n.jsx(a,{...o,name:"chevronRight"}),n.jsx("span",{children:"Chevron Right"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='collapse' />"),children:[n.jsx(a,{...o,name:"collapse"}),n.jsx("span",{children:"Collapse"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='extend' />"),children:[n.jsx(a,{...o,name:"extend"}),n.jsx("span",{children:"Extend"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='spinner' />"),children:[n.jsx(a,{...o,name:"spinner"}),n.jsx("span",{children:"Spinner"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='check' />"),children:[n.jsx(a,{...o,name:"check"}),n.jsx("span",{children:"Check"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='remove' />"),children:[n.jsx(a,{...o,name:"remove"}),n.jsx("span",{children:"Remove"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='info' />"),children:[n.jsx(a,{...o,name:"info"}),n.jsx("span",{children:"Info"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='notifications' />"),children:[n.jsx(a,{...o,name:"notifications"}),n.jsx("span",{children:"Notifications"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='favorite' />"),children:[n.jsx(a,{...o,name:"favorite"}),n.jsx("span",{children:"Favorite"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='transferHistory' />"),children:[n.jsx(a,{...o,name:"transferHistory"}),n.jsx("span",{children:"Transfer History"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='support' />"),children:[n.jsx(a,{...o,name:"support"}),n.jsx("span",{children:"Support"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='help' />"),children:[n.jsx(a,{...o,name:"help"}),n.jsx("span",{children:"Help"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='language' />"),children:[n.jsx(a,{...o,name:"language"}),n.jsx("span",{children:"Language"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='share' />"),children:[n.jsx(a,{...o,name:"share"}),n.jsx("span",{children:"Share"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='products' />"),children:[n.jsx(a,{...o,name:"products"}),n.jsx("span",{children:"Products"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='hub' />"),children:[n.jsx(a,{...o,name:"hub"}),n.jsx("span",{children:"Hub"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='systemSecurity' />"),children:[n.jsx(a,{...o,name:"systemSecurity"}),n.jsx("span",{children:"System Security"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='fees' />"),children:[n.jsx(a,{...o,name:"fees"}),n.jsx("span",{children:"Fees"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='settings' />"),children:[n.jsx(a,{...o,name:"settings"}),n.jsx("span",{children:"Settings"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='id' />"),children:[n.jsx(a,{...o,name:"id"}),n.jsx("span",{children:"ID"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='viewBalance' />"),children:[n.jsx(a,{...o,name:"viewBalance"}),n.jsx("span",{children:"View Balance"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='hideBalance' />"),children:[n.jsx(a,{...o,name:"hideBalance"}),n.jsx("span",{children:"Hide Balance"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='privacy' />"),children:[n.jsx(a,{...o,name:"privacy"}),n.jsx("span",{children:"Privacy"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='card' />"),children:[n.jsx(a,{...o,name:"card"}),n.jsx("span",{children:"Card"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='coin' />"),children:[n.jsx(a,{...o,name:"coin"}),n.jsx("span",{children:"Coin"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='wallet' />"),children:[n.jsx(a,{...o,name:"wallet"}),n.jsx("span",{children:"Wallet"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='email' />"),children:[n.jsx(a,{...o,name:"email"}),n.jsx("span",{children:"Email"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='rewards' />"),children:[n.jsx(a,{...o,name:"rewards"}),n.jsx("span",{children:"Rewards"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='time' />"),children:[n.jsx(a,{...o,name:"time"}),n.jsx("span",{children:"Time"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='location' />"),children:[n.jsx(a,{...o,name:"location"}),n.jsx("span",{children:"Location"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='calendar' />"),children:[n.jsx(a,{...o,name:"calendar"}),n.jsx("span",{children:"Calendar"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='securityCheck' />"),children:[n.jsx(a,{...o,name:"securityCheck"}),n.jsx("span",{children:"Security Check"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='devices' />"),children:[n.jsx(a,{...o,name:"devices"}),n.jsx("span",{children:"Devices"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='images' />"),children:[n.jsx(a,{...o,name:"images"}),n.jsx("span",{children:"Images"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='bank' />"),children:[n.jsx(a,{...o,name:"bank"}),n.jsx("span",{children:"Bank"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='coins' />"),children:[n.jsx(a,{...o,name:"coins"}),n.jsx("span",{children:"Coins"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='earn' />"),children:[n.jsx(a,{...o,name:"earn"}),n.jsx("span",{children:"Earn"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='scan' />"),children:[n.jsx(a,{...o,name:"scan"}),n.jsx("span",{children:"Scan"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='search' />"),children:[n.jsx(a,{...o,name:"search"}),n.jsx("span",{children:"Search"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='maintenance' />"),children:[n.jsx(a,{...o,name:"maintenance"}),n.jsx("span",{children:"Maintenance"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='editFile' />"),children:[n.jsx(a,{...o,name:"editFile"}),n.jsx("span",{children:"Edit File"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='document' />"),children:[n.jsx(a,{...o,name:"document"}),n.jsx("span",{children:"Document"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='upload' />"),children:[n.jsx(a,{...o,name:"upload"}),n.jsx("span",{children:"Upload"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='gift' />"),children:[n.jsx(a,{...o,name:"gift"}),n.jsx("span",{children:"Gift"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='filter' />"),children:[n.jsx(a,{...o,name:"filter"}),n.jsx("span",{children:"Filter"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='expand' />"),children:[n.jsx(a,{...o,name:"expand"}),n.jsx("span",{children:"Expand"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='systemCollapse' />"),children:[n.jsx(a,{...o,name:"systemCollapse"}),n.jsx("span",{children:"System Collapse"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='refresh' />"),children:[n.jsx(a,{...o,name:"refresh"}),n.jsx("span",{children:"Refresh"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='transfer' />"),children:[n.jsx(a,{...o,name:"transfer"}),n.jsx("span",{children:"Transfer"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='link' />"),children:[n.jsx(a,{...o,name:"link"}),n.jsx("span",{children:"Link"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='save' />"),children:[n.jsx(a,{...o,name:"save"}),n.jsx("span",{children:"Save"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='like' />"),children:[n.jsx(a,{...o,name:"like"}),n.jsx("span",{children:"Like"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='dislike' />"),children:[n.jsx(a,{...o,name:"dislike"}),n.jsx("span",{children:"Dislike"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='copy' />"),children:[n.jsx(a,{...o,name:"copy"}),n.jsx("span",{children:"Copy"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='mobile' />"),children:[n.jsx(a,{...o,name:"mobile"}),n.jsx("span",{children:"Mobile"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='chat' />"),children:[n.jsx(a,{...o,name:"chat"}),n.jsx("span",{children:"Chat"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='swap' />"),children:[n.jsx(a,{...o,name:"swap"}),n.jsx("span",{children:"Swap"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='clock' />"),children:[n.jsx(a,{...o,name:"clock"}),n.jsx("span",{children:"Clock"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='desktop' />"),children:[n.jsx(a,{...o,name:"desktop"}),n.jsx("span",{children:"Desktop"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='usd' />"),children:[n.jsx(a,{...o,name:"usd"}),n.jsx("span",{children:"USD"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='eur' />"),children:[n.jsx(a,{...o,name:"eur"}),n.jsx("span",{children:"EUR"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='gbp' />"),children:[n.jsx(a,{...o,name:"gbp"}),n.jsx("span",{children:"GBP"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='jpy' />"),children:[n.jsx(a,{...o,name:"jpy"}),n.jsx("span",{children:"JPY"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='cny' />"),children:[n.jsx(a,{...o,name:"cny"}),n.jsx("span",{children:"CNY"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='google' />"),children:[n.jsx(a,{...o,name:"google"}),n.jsx("span",{children:"Google"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='apple' />"),children:[n.jsx(a,{...o,name:"apple"}),n.jsx("span",{children:"Apple"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='passkey' />"),children:[n.jsx(a,{...o,name:"passkey"}),n.jsx("span",{children:"Passkey"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='ach' />"),children:[n.jsx(a,{...o,name:"ach"}),n.jsx("span",{children:"ACH"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='apiKey' />"),children:[n.jsx(a,{...o,name:"apiKey"}),n.jsx("span",{children:"APIKey"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='brokenLink' />"),children:[n.jsx(a,{...o,name:"brokenLink"}),n.jsx("span",{children:"Broken Link"})]})]})}},fn={args:{prefixCls:"icons",color:"#073387",logoColor:"#073387",wordColor:"#000000",networkColor:"#131313",size:32},parameters:{docs:{description:{story:"The logo icon is used to represent the 1Money logo."}}},render:function(o){const c=nn.useRef(null),s=i=>{Wn(i,()=>{var t;return(t=c.current)==null?void 0:t.show({severity:"success",summary:"copy successfully",detail:"already copied",life:1500})})};return n.jsxs("div",{style:{display:"grid",flexDirection:"row",gap:24,flexWrap:"wrap",gridTemplateColumns:"repeat(auto-fill, minmax(222px, 1fr))"},children:[n.jsx(Tn,{ref:c,appendTo:null}),n.jsxs(r,{onClick:()=>s("<Icons name='logo' />"),children:[n.jsx(a,{...o,name:"logo"}),n.jsx("span",{children:"logo"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logoWord' />"),children:[n.jsx(a,{...o,name:"logoWord",width:150,height:30}),n.jsx("span",{children:"logoWord"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logoNetwork' />"),children:[n.jsx(a,{...o,name:"logoNetwork",width:150,height:30}),n.jsx("span",{children:"logoNetwork"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logoWithWords' />"),children:[n.jsx(a,{...o,name:"logoWithWords",width:180,height:36}),n.jsx("span",{children:"logoWithWords"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logoWithWords' />"),children:[n.jsx(a,{...o,name:"logoWithWords",width:320,height:36,networkLogo:!0}),n.jsx("span",{children:"logoWithWords"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logoBg' />"),children:[n.jsx(a,{...o,name:"logoBg",width:56,height:57}),n.jsx("span",{children:"logoBg"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logoBeta' />"),children:[n.jsx(a,{...o,name:"logoBeta",width:30,height:9}),n.jsx("span",{children:"logoBeta"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logoWithBeta' />"),children:[n.jsx(a,{...o,name:"logoWithBeta",width:152,height:22}),n.jsx("span",{children:"logoWithBeta"})]})]})}},kn={args:{prefixCls:"icons",color:"#B31010",borderColor:"#1D1D1F",size:50,illustrations:!0,gradientColor:["#F4C600","white"]},render:function(o){const c=nn.useRef(null),s=i=>{Wn(i,()=>{var t;return(t=c.current)==null?void 0:t.show({severity:"success",summary:"copy successfully",detail:"already copied",life:1500})})};return n.jsxs("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))"},children:[n.jsx(Tn,{ref:c,appendTo:null}),n.jsxs(r,{onClick:()=>s("<Icons name='illusChecked' />"),children:[n.jsx(a,{...o,name:"illusChecked"}),n.jsx("span",{children:"illusChecked"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusEmailError' />"),children:[n.jsx(a,{...o,name:"illusEmailError"}),n.jsx("span",{children:"illusEmailError"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusLinkExpired' />"),children:[n.jsx(a,{...o,name:"illusLinkExpired"}),n.jsx("span",{children:"Link Expired"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illus2FA' />"),children:[n.jsx(a,{...o,name:"illus2FA"}),n.jsx("span",{children:"illus2FA"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusLocked' />"),children:[n.jsx(a,{...o,name:"illusLocked"}),n.jsx("span",{children:"illusLocked"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusError' />"),children:[n.jsx(a,{...o,name:"illusError"}),n.jsx("span",{children:"illusError"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusRegionNotSupported' />"),children:[n.jsx(a,{...o,name:"illusRegionNotSupported"}),n.jsx("span",{children:"illusRegionNotSupported"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusIDCard' />"),children:[n.jsx(a,{...o,name:"illusIDCard"}),n.jsx("span",{children:"illusIDCard"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusVerification' />"),children:[n.jsx(a,{...o,name:"illusVerification"}),n.jsx("span",{children:"illusVerification"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusTransfer' />"),children:[n.jsx(a,{...o,name:"illusTransfer"}),n.jsx("span",{children:"illusTransfer"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusSend' />"),children:[n.jsx(a,{...o,name:"illusSend"}),n.jsx("span",{children:"illusSend"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusAccount' />"),children:[n.jsx(a,{...o,name:"illusAccount"}),n.jsx("span",{children:"illusAccount"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusPending' />"),children:[n.jsx(a,{...o,name:"illusPending"}),n.jsx("span",{children:"illusPending"})]})]})}},jn={name:"Old Icons (Deprecated)",args:{prefixCls:"icons",color:"#073387",borderColor:"#131313"},render:function(o){const c=nn.useRef(null),s=i=>{Wn(i,()=>{var t;return(t=c.current)==null?void 0:t.show({severity:"success",summary:"copy successfully",detail:"already copied",life:1500})})};return n.jsxs("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))"},children:[n.jsx(Tn,{ref:c,appendTo:null}),n.jsxs(r,{onClick:()=>s("<Icons name='burger' />"),children:[n.jsx(a,{...o,name:"burger"}),n.jsx("span",{children:"burger"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='return' />"),children:[n.jsx(a,{...o,name:"return"}),n.jsx("span",{children:"return"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='close' />"),children:[n.jsx(a,{...o,name:"close"}),n.jsx("span",{children:"close"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='arrow' />"),children:[n.jsx(a,{...o,name:"arrow"}),n.jsx("span",{children:"arrow"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='circle' />"),children:[n.jsx(a,{...o,name:"circle"}),n.jsx("span",{children:"circle"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='times' />"),children:[n.jsx(a,{...o,name:"times"}),n.jsx("span",{children:"times"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='doubleCheck' />"),children:[n.jsx(a,{...o,name:"doubleCheck"}),n.jsx("span",{children:"doubleCheck"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='checkCircle' />"),children:[n.jsx(a,{...o,name:"checkCircle"}),n.jsx("span",{children:"checkCircle"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='timesCircle' />"),children:[n.jsx(a,{...o,name:"timesCircle"}),n.jsx("span",{children:"timesCircle"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='content' />"),children:[n.jsx(a,{...o,name:"content"}),n.jsx("span",{children:"Content"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='locked' />"),children:[n.jsx(a,{...o,name:"locked"}),n.jsx("span",{children:"locked"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='exclamation' />"),children:[n.jsx(a,{...o,name:"exclamation"}),n.jsx("span",{children:"exclamation"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='arrowLink' />"),children:[n.jsx(a,{...o,name:"arrowLink"}),n.jsx("span",{children:"arrowLink"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='union' />"),children:[n.jsx(a,{...o,name:"union"}),n.jsx("span",{children:"union"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='eyeClose' />"),children:[n.jsx(a,{...o,name:"eyeClose"}),n.jsx("span",{children:"eyeClose"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='eyeOn' />"),children:[n.jsx(a,{...o,name:"eyeOn"}),n.jsx("span",{children:"eyeOn"})]})]})}};var go,Bo,wo;yn.parameters={...yn.parameters,docs:{...(go=yn.parameters)==null?void 0:go.docs,source:{originalSource:`{
  args: {
    prefixCls: 'icons',
    color: '#073387',
    borderColor: '#03163A',
    size: 24
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary icons are used to represent the 1Money icons.'
      }
    }
  },
  render: function Render(args) {
    const toast = useRef<ToastClass>(null);
    const handleCopy = (el: string) => {
      copy(el, () => toast.current?.show({
        severity: 'success',
        summary: \`copy successfully\`,
        detail: \`already copied\`,
        life: 1500
      }));
    };
    return <div style={{
      display: 'grid',
      gap: 24,
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))'
    }}>
      <Toast ref={toast} appendTo={null} />
      {/* Primary Icons */}
      <CopyIconBox onClick={() => handleCopy("<Icons name='deposit' />")}>
        <IconHover>
          <Icons {...args} name='deposit' />
        </IconHover>
        <span>Deposit</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='withdrawal' />")}>
        <Icons {...args} name='withdrawal' />
        <span>Withdrawal</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='conversion' />")}>
        <Icons {...args} name='conversion' />
        <span>Conversion</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='mintToken' />")}>
        <Icons {...args} name='mintToken' />
        <span>MintToken</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='burnToken' />")}>
        <Icons {...args} name='burnToken' />
        <span>BurnToken</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='accountLocked' />")}>
        <Icons {...args} name='accountLocked' />
        <span>Account Locked</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='pending' />")}>
        <Icons {...args} name='pending' />
        <span>Pending</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='success' />")}>
        <Icons {...args} name='success' />
        <span>Success</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='fail' />")}>
        <Icons {...args} name='fail' />
        <span>Fail</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='error' />")}>
        <Icons {...args} name='error' />
        <span>Error</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='statusSuccess' color='#1F580033' />")}>
        <Icons {...args} name='statusSuccess' color='#1F580033' />
        <span>Status Success</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='statusFail' color='#AE00001A' />")}>
        <Icons {...args} name='statusFail' color='#AE00001A' />
        <span>Status Fail</span>
      </CopyIconBox>
      {/* Menu Icons */}
      <CopyIconBox onClick={() => handleCopy("<Icons name='dashboard' />")}>
        <Icons {...args} name='dashboard' />
        <span>Dashboard</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='digitalAsset' />")}>
        <Icons {...args} name='digitalAsset' />
        <span>Digital Asset</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='addressBook' />")}>
        <Icons {...args} name='addressBook' />
        <span>Address Book</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='linkedBankAccounts' />")}>
        <Icons {...args} name='linkedBankAccounts' />
        <span>Linked Bank Accounts</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='wire' />")}>
        <Icons {...args} name='wire' />
        <span>Wire</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='swift' />")}>
        <Icons {...args} name='swift' />
        <span>Swift</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='account' />")}>
        <Icons {...args} name='account' />
        <span>Account</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='profile' />")}>
        <Icons {...args} name='profile' />
        <span>Profile</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='security' />")}>
        <Icons {...args} name='security' />
        <span>Security</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='logout' />")}>
        <Icons {...args} name='logout' />
        <span>Logout</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='portfolio' />")}>
        <Icons {...args} name='portfolio' />
        <span>Portfolio</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='home' />")}>
        <Icons {...args} name='home' />
        <span>Home</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='convert' />")}>
        <Icons {...args} name='convert' />
        <span>Convert</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='withdraw' />")}>
        <Icons {...args} name='withdraw' />
        <span>Withdraw</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='send' />")}>
        <Icons {...args} name='send' />
        <span>Send</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='menuDeposit' />")}>
        <Icons {...args} name='menuDeposit' />
        <span>Menu Deposit</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='company' />")}>
        <Icons {...args} name='company' />
        <span>Company</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='parties' />")}>
        <Icons {...args} name='parties' />
        <span>Parties</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='transactions' />")}>
        <Icons {...args} name='transactions' />
        <span>Transactions</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='fiat' />")}>
        <Icons {...args} name='fiat' />
        <span>Fiat</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='money' />")}>
        <Icons {...args} name='money' />
        <span>Money</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='sendCrypto' />")}>
        <Icons {...args} name='sendCrypto' />
        <span>Send Crypto</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='businessAccount' />")}>
        <Icons {...args} name='businessAccount' />
        <span>Business Portfolio</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='individualAccount' />")}>
        <Icons {...args} name='individualAccount' />
        <span>Identity</span>
      </CopyIconBox>

      {/* Functional Icons */}
      <CopyIconBox onClick={() => handleCopy("<Icons name='arrowUp' />")}>
        <Icons {...args} name='arrowUp' />
        <span>Arrow Up</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='arrowDown' />")}>
        <Icons {...args} name='arrowDown' />
        <span>Arrow Down</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='arrowLeft' />")}>
        <Icons {...args} name='arrowLeft' />
        <span>Arrow Left</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='arrowRight' />")}>
        <Icons {...args} name='arrowRight' />
        <span>Arrow Right</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='add' />")}>
        <Icons {...args} name='add' />
        <span>Add</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='minus' />")}>
        <Icons {...args} name='minus' />
        <span>Minus</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='cross' />")}>
        <Icons {...args} name='cross' />
        <span>Cross</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='more' />")}>
        <Icons {...args} name='more' />
        <span>More</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='chevronDown' />")}>
        <Icons {...args} name='chevronDown' />
        <span>Chevron Down</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='chevronUp' />")}>
        <Icons {...args} name='chevronUp' />
        <span>Chevron Up</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='chevronLeft' />")}>
        <Icons {...args} name='chevronLeft' />
        <span>Chevron Left</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='chevronRight' />")}>
        <Icons {...args} name='chevronRight' />
        <span>Chevron Right</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='collapse' />")}>
        <Icons {...args} name='collapse' />
        <span>Collapse</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='extend' />")}>
        <Icons {...args} name='extend' />
        <span>Extend</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='spinner' />")}>
        <Icons {...args} name='spinner' />
        <span>Spinner</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='check' />")}>
        <Icons {...args} name='check' />
        <span>Check</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='remove' />")}>
        <Icons {...args} name='remove' />
        <span>Remove</span>
      </CopyIconBox>
      {/* System Icons */}
      <CopyIconBox onClick={() => handleCopy("<Icons name='info' />")}>
        <Icons {...args} name='info' />
        <span>Info</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='notifications' />")}>
        <Icons {...args} name='notifications' />
        <span>Notifications</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='favorite' />")}>
        <Icons {...args} name='favorite' />
        <span>Favorite</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='transferHistory' />")}>
        <Icons {...args} name='transferHistory' />
        <span>Transfer History</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='support' />")}>
        <Icons {...args} name='support' />
        <span>Support</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='help' />")}>
        <Icons {...args} name='help' />
        <span>Help</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='language' />")}>
        <Icons {...args} name='language' />
        <span>Language</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='share' />")}>
        <Icons {...args} name='share' />
        <span>Share</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='products' />")}>
        <Icons {...args} name='products' />
        <span>Products</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='hub' />")}>
        <Icons {...args} name='hub' />
        <span>Hub</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='systemSecurity' />")}>
        <Icons {...args} name='systemSecurity' />
        <span>System Security</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='fees' />")}>
        <Icons {...args} name='fees' />
        <span>Fees</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='settings' />")}>
        <Icons {...args} name='settings' />
        <span>Settings</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='id' />")}>
        <Icons {...args} name='id' />
        <span>ID</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='viewBalance' />")}>
        <Icons {...args} name='viewBalance' />
        <span>View Balance</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='hideBalance' />")}>
        <Icons {...args} name='hideBalance' />
        <span>Hide Balance</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='privacy' />")}>
        <Icons {...args} name='privacy' />
        <span>Privacy</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='card' />")}>
        <Icons {...args} name='card' />
        <span>Card</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='coin' />")}>
        <Icons {...args} name='coin' />
        <span>Coin</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='wallet' />")}>
        <Icons {...args} name='wallet' />
        <span>Wallet</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='email' />")}>
        <Icons {...args} name='email' />
        <span>Email</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='rewards' />")}>
        <Icons {...args} name='rewards' />
        <span>Rewards</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='time' />")}>
        <Icons {...args} name='time' />
        <span>Time</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='location' />")}>
        <Icons {...args} name='location' />
        <span>Location</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='calendar' />")}>
        <Icons {...args} name='calendar' />
        <span>Calendar</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='securityCheck' />")}>
        <Icons {...args} name='securityCheck' />
        <span>Security Check</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='devices' />")}>
        <Icons {...args} name='devices' />
        <span>Devices</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='images' />")}>
        <Icons {...args} name='images' />
        <span>Images</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='bank' />")}>
        <Icons {...args} name='bank' />
        <span>Bank</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='coins' />")}>
        <Icons {...args} name='coins' />
        <span>Coins</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='earn' />")}>
        <Icons {...args} name='earn' />
        <span>Earn</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='scan' />")}>
        <Icons {...args} name='scan' />
        <span>Scan</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='search' />")}>
        <Icons {...args} name='search' />
        <span>Search</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='maintenance' />")}>
        <Icons {...args} name='maintenance' />
        <span>Maintenance</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='editFile' />")}>
        <Icons {...args} name='editFile' />
        <span>Edit File</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='document' />")}>
        <Icons {...args} name='document' />
        <span>Document</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='upload' />")}>
        <Icons {...args} name='upload' />
        <span>Upload</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='gift' />")}>
        <Icons {...args} name='gift' />
        <span>Gift</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='filter' />")}>
        <Icons {...args} name='filter' />
        <span>Filter</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='expand' />")}>
        <Icons {...args} name='expand' />
        <span>Expand</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='systemCollapse' />")}>
        <Icons {...args} name='systemCollapse' />
        <span>System Collapse</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='refresh' />")}>
        <Icons {...args} name='refresh' />
        <span>Refresh</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='transfer' />")}>
        <Icons {...args} name='transfer' />
        <span>Transfer</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='link' />")}>
        <Icons {...args} name='link' />
        <span>Link</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='save' />")}>
        <Icons {...args} name='save' />
        <span>Save</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='like' />")}>
        <Icons {...args} name='like' />
        <span>Like</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='dislike' />")}>
        <Icons {...args} name='dislike' />
        <span>Dislike</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='copy' />")}>
        <Icons {...args} name='copy' />
        <span>Copy</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='mobile' />")}>
        <Icons {...args} name='mobile' />
        <span>Mobile</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='chat' />")}>
        <Icons {...args} name='chat' />
        <span>Chat</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='swap' />")}>
        <Icons {...args} name='swap' />
        <span>Swap</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='clock' />")}>
        <Icons {...args} name='clock' />
        <span>Clock</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='desktop' />")}>
        <Icons {...args} name='desktop' />
        <span>Desktop</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='usd' />")}>
        <Icons {...args} name='usd' />
        <span>USD</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='eur' />")}>
        <Icons {...args} name='eur' />
        <span>EUR</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='gbp' />")}>
        <Icons {...args} name='gbp' />
        <span>GBP</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='jpy' />")}>
        <Icons {...args} name='jpy' />
        <span>JPY</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='cny' />")}>
        <Icons {...args} name='cny' />
        <span>CNY</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='google' />")}>
        <Icons {...args} name='google' />
        <span>Google</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='apple' />")}>
        <Icons {...args} name='apple' />
        <span>Apple</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='passkey' />")}>
        <Icons {...args} name='passkey' />
        <span>Passkey</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='ach' />")}>
        <Icons {...args} name='ach' />
        <span>ACH</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='apiKey' />")}>
        <Icons {...args} name='apiKey' />
        <span>APIKey</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='brokenLink' />")}>
        <Icons {...args} name='brokenLink' />
        <span>Broken Link</span>
      </CopyIconBox>
    </div>;
  }
}`,...(wo=(Bo=yn.parameters)==null?void 0:Bo.docs)==null?void 0:wo.source}}};var vo,So,bo;fn.parameters={...fn.parameters,docs:{...(vo=fn.parameters)==null?void 0:vo.docs,source:{originalSource:`{
  args: {
    prefixCls: 'icons',
    color: '#073387',
    logoColor: '#073387',
    wordColor: '#000000',
    networkColor: '#131313',
    size: 32
  },
  parameters: {
    docs: {
      description: {
        story: 'The logo icon is used to represent the 1Money logo.'
      }
    }
  },
  render: function Render(args) {
    const toast = useRef<ToastClass>(null);
    const handleCopy = (el: string) => {
      copy(el, () => toast.current?.show({
        severity: 'success',
        summary: \`copy successfully\`,
        detail: \`already copied\`,
        life: 1500
      }));
    };
    return <div style={{
      display: 'grid',
      flexDirection: 'row',
      gap: 24,
      flexWrap: 'wrap',
      gridTemplateColumns: 'repeat(auto-fill, minmax(222px, 1fr))'
    }}>
      <Toast ref={toast} appendTo={null} />
      <CopyIconBox onClick={() => handleCopy("<Icons name='logo' />")}>
        <Icons {...args} name='logo' />
        <span>logo</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='logoWord' />")}>
        <Icons {...args} name='logoWord' width={150} height={30} />
        <span>logoWord</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='logoNetwork' />")}>
        <Icons {...args} name='logoNetwork' width={150} height={30} />
        <span>logoNetwork</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='logoWithWords' />")}>
        <Icons {...args} name='logoWithWords' width={180} height={36} />
        <span>logoWithWords</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='logoWithWords' />")}>
        <Icons {...args} name='logoWithWords' width={320} height={36} networkLogo />
        <span>logoWithWords</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='logoBg' />")}>
        <Icons {...args} name='logoBg' width={56} height={57} />
        <span>logoBg</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='logoBeta' />")}>
        <Icons {...args} name='logoBeta' width={30} height={9} />
        <span>logoBeta</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='logoWithBeta' />")}>
        <Icons {...args} name='logoWithBeta' width={152} height={22} />
        <span>logoWithBeta</span>
      </CopyIconBox>
    </div>;
  }
}`,...(bo=(So=fn.parameters)==null?void 0:So.docs)==null?void 0:bo.source}}};var Ao,Eo,Ro;kn.parameters={...kn.parameters,docs:{...(Ao=kn.parameters)==null?void 0:Ao.docs,source:{originalSource:`{
  args: {
    prefixCls: 'icons',
    color: '#B31010',
    borderColor: '#1D1D1F',
    size: 50,
    // @ts-expect-error
    illustrations: true,
    gradientColor: ['#F4C600', 'white']
  },
  render: function Render(args) {
    const toast = useRef<ToastClass>(null);
    const handleCopy = (el: string) => {
      copy(el, () => toast.current?.show({
        severity: 'success',
        summary: \`copy successfully\`,
        detail: \`already copied\`,
        life: 1500
      }));
    };
    return <div style={{
      display: 'grid',
      gap: 24,
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
    }}>
      <Toast ref={toast} appendTo={null} />
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusChecked' />")}>
        <Icons {...args} name='illusChecked' />
        <span>illusChecked</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusEmailError' />")}>
        <Icons {...args} name='illusEmailError' />
        <span>illusEmailError</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusLinkExpired' />")}>
        <Icons {...args} name='illusLinkExpired' />
        <span>Link Expired</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illus2FA' />")}>
        <Icons {...args} name='illus2FA' />
        <span>illus2FA</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusLocked' />")}>
        <Icons {...args} name='illusLocked' />
        <span>illusLocked</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusError' />")}>
        <Icons {...args} name='illusError' />
        <span>illusError</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusRegionNotSupported' />")}>
        <Icons {...args} name='illusRegionNotSupported' />
        <span>illusRegionNotSupported</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusIDCard' />")}>
        <Icons {...args} name='illusIDCard' />
        <span>illusIDCard</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusVerification' />")}>
        <Icons {...args} name='illusVerification' />
        <span>illusVerification</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusTransfer' />")}>
        <Icons {...args} name='illusTransfer' />
        <span>illusTransfer</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusSend' />")}>
        <Icons {...args} name='illusSend' />
        <span>illusSend</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusAccount' />")}>
        <Icons {...args} name='illusAccount' />
        <span>illusAccount</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusPending' />")}>
        <Icons {...args} name='illusPending' />
        <span>illusPending</span>
      </CopyIconBox>
    </div>;
  }
}`,...(Ro=(Eo=kn.parameters)==null?void 0:Eo.docs)==null?void 0:Ro.source}}};var To,Po,Do;jn.parameters={...jn.parameters,docs:{...(To=jn.parameters)==null?void 0:To.docs,source:{originalSource:`{
  name: 'Old Icons (Deprecated)',
  args: {
    prefixCls: 'icons',
    color: '#073387',
    borderColor: '#131313'
  },
  render: function Render(args) {
    const toast = useRef<ToastClass>(null);
    const handleCopy = (el: string) => {
      copy(el, () => toast.current?.show({
        severity: 'success',
        summary: \`copy successfully\`,
        detail: \`already copied\`,
        life: 1500
      }));
    };
    return <div style={{
      display: 'grid',
      gap: 24,
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
    }}>
      <Toast ref={toast} appendTo={null} />
      <CopyIconBox onClick={() => handleCopy("<Icons name='burger' />")}>
        <Icons {...args} name='burger' />
        <span>burger</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='return' />")}>
        <Icons {...args} name='return' />
        <span>return</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='close' />")}>
        <Icons {...args} name='close' />
        <span>close</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='arrow' />")}>
        <Icons {...args} name='arrow' />
        <span>arrow</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='circle' />")}>
        <Icons {...args} name='circle' />
        <span>circle</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='times' />")}>
        <Icons {...args} name='times' />
        <span>times</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='doubleCheck' />")}>
        <Icons {...args} name='doubleCheck' />
        <span>doubleCheck</span>
      </CopyIconBox>

      <CopyIconBox onClick={() => handleCopy("<Icons name='checkCircle' />")}>
        <Icons {...args} name='checkCircle' />
        <span>checkCircle</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='timesCircle' />")}>
        <Icons {...args} name='timesCircle' />
        <span>timesCircle</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='content' />")}>
        <Icons {...args} name='content' />
        <span>Content</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='locked' />")}>
        <Icons {...args} name='locked' />
        <span>locked</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='exclamation' />")}>
        <Icons {...args} name='exclamation' />
        <span>exclamation</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='arrowLink' />")}>
        <Icons {...args} name='arrowLink' />
        <span>arrowLink</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='union' />")}>
        <Icons {...args} name='union' />
        <span>union</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='eyeClose' />")}>
        <Icons {...args} name='eyeClose' />
        <span>eyeClose</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='eyeOn' />")}>
        <Icons {...args} name='eyeOn' />
        <span>eyeOn</span>
      </CopyIconBox>
    </div>;
  }
}`,...(Do=(Po=jn.parameters)==null?void 0:Po.docs)==null?void 0:Do.source}}};const Fs=["PrimaryIcons","Logo","Illustrations","OldIcons"];export{kn as Illustrations,fn as Logo,jn as OldIcons,yn as PrimaryIcons,Fs as __namedExportsOrder,Ns as default};
