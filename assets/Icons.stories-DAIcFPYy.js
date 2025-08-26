import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{R as tn,r as nn}from"./index-CP2yOfOm.js";import{I as c}from"./Icons-BRITzbdd.js";/* empty css              */import{T as Tn}from"./Toast-D8nESaac.js";import{c as me}from"./clipboard-DZvO4X-U.js";import"./classnames-lRq3rz0l.js";import"./componentbase.esm-D-zJM1J_.js";import"./csstransition.esm-DWeYoiJr.js";import"./index-BOAxdYzW.js";import"./portal.esm-CCqTVpgZ.js";import"./index.esm-DcWnrv9o.js";import"./iconbase.esm-DhSHUaJo.js";import"./index.esm-wET7pp3q.js";import"./index.esm-iUewYYmr.js";import"./index.esm-BWj4hVqV.js";import"./ripple.esm-BIqWt_ei.js";import"./TransitionGroup-BGiLtNwA.js";import"./Typography-DoqwNCiN.js";var T=function(){return T=Object.assign||function(o){for(var a,s=1,i=arguments.length;s<i;s++){a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(o[t]=a[t])}return o},T.apply(this,arguments)};function bn(e,o,a){if(a||arguments.length===2)for(var s=0,i=o.length,t;s<i;s++)(t||!(s in o))&&(t||(t=Array.prototype.slice.call(o,0,s)),t[s]=o[s]);return e.concat(t||Array.prototype.slice.call(o))}var k="-ms-",rn="-moz-",u="-webkit-",Lo="comm",Dn="rule",Xn="decl",he="@import",No="@keyframes",Ce="@layer",_o=Math.abs,no=String.fromCharCode,Yn=Object.assign;function ue(e,o){return R(e,0)^45?(((o<<2^R(e,0))<<2^R(e,1))<<2^R(e,2))<<2^R(e,3):0}function Fo(e){return e.trim()}function O(e,o){return(e=o.exec(e))?e[0]:e}function m(e,o,a){return e.replace(o,a)}function gn(e,o,a){return e.indexOf(o,a)}function R(e,o){return e.charCodeAt(o)|0}function K(e,o,a){return e.slice(o,a)}function _(e){return e.length}function Oo(e){return e.length}function cn(e,o){return o.push(e),e}function xe(e,o){return e.map(o).join("")}function ro(e,o){return e.filter(function(a){return!O(a,o)})}var Pn=1,J=1,$o=0,L=0,A=0,on="";function Ln(e,o,a,s,i,t,l,d){return{value:e,root:o,parent:a,type:s,props:i,children:t,line:Pn,column:J,length:l,return:"",siblings:d}}function M(e,o){return Yn(Ln("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},o)}function V(e){for(;e.root;)e=M(e.root,{children:[e]});cn(e,e.siblings)}function Ie(){return A}function ye(){return A=L>0?R(on,--L):0,J--,A===10&&(J=1,Pn--),A}function N(){return A=L<$o?R(on,L++):0,J++,A===10&&(J=1,Pn++),A}function H(){return R(on,L)}function Bn(){return L}function Nn(e,o){return K(on,e,o)}function Vn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fe(e){return Pn=J=1,$o=_(on=e),L=0,[]}function je(e){return on="",e}function zn(e){return Fo(Nn(L-1,qn(e===91?e+2:e===40?e+1:e)))}function ke(e){for(;(A=H())&&A<33;)N();return Vn(e)>2||Vn(A)>3?"":" "}function ge(e,o){for(;--o&&N()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return Nn(e,Bn()+(o<6&&H()==32&&N()==32))}function qn(e){for(;N();)switch(A){case e:return L;case 34:case 39:e!==34&&e!==39&&qn(A);break;case 40:e===41&&qn(e);break;case 92:N();break}return L}function Be(e,o){for(;N()&&e+A!==57;)if(e+A===84&&H()===47)break;return"/*"+Nn(o,L-1)+"*"+no(e===47?e:N())}function we(e){for(;!Vn(H());)N();return Nn(e,L)}function ve(e){return je(wn("",null,null,null,[""],e=fe(e),0,[0],e))}function wn(e,o,a,s,i,t,l,d,p){for(var I=0,x=0,y=l,f=0,C=0,B=0,S=1,D=1,b=1,w=0,g="",v=i,E=t,j=s,h=g;D;)switch(B=w,w=N()){case 40:if(B!=108&&R(h,y-1)==58){gn(h+=m(zn(w),"&","&\f"),"&\f",_o(I?d[I-1]:0))!=-1&&(b=-1);break}case 34:case 39:case 91:h+=zn(w);break;case 9:case 10:case 13:case 32:h+=ke(B);break;case 92:h+=ge(Bn()-1,7);continue;case 47:switch(H()){case 42:case 47:cn(Se(Be(N(),Bn()),o,a,p),p);break;default:h+="/"}break;case 123*S:d[I++]=_(h)*b;case 125*S:case 59:case 0:switch(w){case 0:case 125:D=0;case 59+x:b==-1&&(h=m(h,/\f/g,"")),C>0&&_(h)-y&&cn(C>32?to(h+";",s,a,y-1,p):to(m(h," ","")+";",s,a,y-2,p),p);break;case 59:h+=";";default:if(cn(j=io(h,o,a,I,x,i,d,g,v=[],E=[],y,t),t),w===123)if(x===0)wn(h,o,j,j,v,t,y,d,E);else switch(f===99&&R(h,3)===110?100:f){case 100:case 108:case 109:case 115:wn(e,j,j,s&&cn(io(e,j,j,0,0,i,d,g,i,v=[],y,E),E),i,E,y,d,s?v:E);break;default:wn(h,j,j,j,[""],E,0,d,E)}}I=x=C=0,S=b=1,g=h="",y=l;break;case 58:y=1+_(h),C=B;default:if(S<1){if(w==123)--S;else if(w==125&&S++==0&&ye()==125)continue}switch(h+=no(w),w*S){case 38:b=x>0?1:(h+="\f",-1);break;case 44:d[I++]=(_(h)-1)*b,b=1;break;case 64:H()===45&&(h+=zn(N())),f=H(),x=y=_(g=h+=we(Bn())),w++;break;case 45:B===45&&_(h)==2&&(S=0)}}return t}function io(e,o,a,s,i,t,l,d,p,I,x,y){for(var f=i-1,C=i===0?t:[""],B=Oo(C),S=0,D=0,b=0;S<s;++S)for(var w=0,g=K(e,f+1,f=_o(D=l[S])),v=e;w<B;++w)(v=Fo(D>0?C[w]+" "+g:m(g,/&\f/g,C[w])))&&(p[b++]=v);return Ln(e,o,a,i===0?Dn:d,p,I,x,y)}function Se(e,o,a,s){return Ln(e,o,a,Lo,no(Ie()),K(e,2,-2),0,s)}function to(e,o,a,s,i){return Ln(e,o,a,Xn,K(e,0,s),K(e,s+1,-1),s,i)}function Wo(e,o,a){switch(ue(e,o)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 4789:return rn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+rn+e+k+e+e;case 5936:switch(R(e,o+11)){case 114:return u+e+k+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+k+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+k+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return u+e+k+e+e;case 6165:return u+e+k+"flex-"+e+e;case 5187:return u+e+m(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+k+"flex-$1$2")+e;case 5443:return u+e+k+"flex-item-"+m(e,/flex-|-self/g,"")+(O(e,/flex-|baseline/)?"":k+"grid-row-"+m(e,/flex-|-self/g,""))+e;case 4675:return u+e+k+"flex-line-pack"+m(e,/align-content|flex-|-self/g,"")+e;case 5548:return u+e+k+m(e,"shrink","negative")+e;case 5292:return u+e+k+m(e,"basis","preferred-size")+e;case 6060:return u+"box-"+m(e,"-grow","")+u+e+k+m(e,"grow","positive")+e;case 4554:return u+m(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4200:if(!O(e,/flex-|baseline/))return k+"grid-column-align"+K(e,o)+e;break;case 2592:case 3360:return k+m(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(s,i){return o=i,O(s.props,/grid-\w+-end/)})?~gn(e+(a=a[o].value),"span",0)?e:k+m(e,"-start","")+e+k+"grid-row-span:"+(~gn(a,"span",0)?O(a,/\d+/):+O(a,/\d+/)-+O(e,/\d+/))+";":k+m(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(s){return O(s.props,/grid-\w+-start/)})?e:k+m(m(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(e)-1-o>6)switch(R(e,o+1)){case 109:if(R(e,o+4)!==45)break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+rn+(R(e,o+3)==108?"$3":"$2-$3"))+e;case 115:return~gn(e,"stretch",0)?Wo(m(e,"stretch","fill-available"),o,a)+e:e}break;case 5152:case 5920:return m(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,i,t,l,d,p,I){return k+i+":"+t+I+(l?k+i+"-span:"+(d?p:+p-+t)+I:"")+e});case 4949:if(R(e,o+6)===121)return m(e,":",":"+u)+e;break;case 6444:switch(R(e,R(e,14)===45?18:11)){case 120:return m(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(R(e,14)===45?"inline-":"")+"box$3$1"+u+"$2$3$1"+k+"$2box$3")+e;case 100:return m(e,":",":"+k)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return m(e,"scroll-","scroll-snap-")+e}return e}function An(e,o){for(var a="",s=0;s<e.length;s++)a+=o(e[s],s,e,o)||"";return a}function be(e,o,a,s){switch(e.type){case Ce:if(e.children.length)break;case he:case Xn:return e.return=e.return||e.value;case Lo:return"";case No:return e.return=e.value+"{"+An(e.children,s)+"}";case Dn:if(!_(e.value=e.props.join(",")))return""}return _(a=An(e.children,s))?e.return=e.value+"{"+a+"}":""}function Ae(e){var o=Oo(e);return function(a,s,i,t){for(var l="",d=0;d<o;d++)l+=e[d](a,s,i,t)||"";return l}}function Ee(e){return function(o){o.root||(o=o.return)&&e(o)}}function Re(e,o,a,s){if(e.length>-1&&!e.return)switch(e.type){case Xn:e.return=Wo(e.value,e.length,a);return;case No:return An([M(e,{value:m(e.value,"@","@"+u)})],s);case Dn:if(e.length)return xe(a=e.props,function(i){switch(O(i,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":V(M(e,{props:[m(i,/:(read-\w+)/,":"+rn+"$1")]})),V(M(e,{props:[i]})),Yn(e,{props:ro(a,s)});break;case"::placeholder":V(M(e,{props:[m(i,/:(plac\w+)/,":"+u+"input-$1")]})),V(M(e,{props:[m(i,/:(plac\w+)/,":"+rn+"$1")]})),V(M(e,{props:[m(i,/:(plac\w+)/,k+"input-$1")]})),V(M(e,{props:[i]})),Yn(e,{props:ro(a,s)});break}return""})}}var Te={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P={},Z=typeof process<"u"&&P!==void 0&&(P.REACT_APP_SC_ATTR||P.SC_ATTR)||"data-styled",Mo="active",zo="data-styled-version",_n="6.1.17",oo=`/*!sc*/
`,En=typeof window<"u"&&"HTMLElement"in window,De=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==""?P.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&P.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.SC_DISABLE_SPEEDY!==void 0&&P.SC_DISABLE_SPEEDY!==""&&P.SC_DISABLE_SPEEDY!=="false"&&P.SC_DISABLE_SPEEDY),Fn=Object.freeze([]),Q=Object.freeze({});function Pe(e,o,a){return a===void 0&&(a=Q),e.theme!==a.theme&&e.theme||o||a.theme}var Go=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Le=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ne=/(^-|-$)/g;function lo(e){return e.replace(Le,"-").replace(Ne,"")}var _e=/(a)(d)/gi,xn=52,po=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kn(e){var o,a="";for(o=Math.abs(e);o>xn;o=o/xn|0)a=po(o%xn)+a;return(po(o%xn)+a).replace(_e,"$1-$2")}var Gn,Ho=5381,q=function(e,o){for(var a=o.length;a;)e=33*e^o.charCodeAt(--a);return e},Uo=function(e){return q(Ho,e)};function Fe(e){return Kn(Uo(e)>>>0)}function Oe(e){return e.displayName||e.name||"Component"}function Hn(e){return typeof e=="string"&&!0}var Yo=typeof Symbol=="function"&&Symbol.for,Vo=Yo?Symbol.for("react.memo"):60115,$e=Yo?Symbol.for("react.forward_ref"):60112,We={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Me={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ze=((Gn={})[$e]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gn[Vo]=qo,Gn);function mo(e){return("type"in(o=e)&&o.type.$$typeof)===Vo?qo:"$$typeof"in e?ze[e.$$typeof]:We;var o}var Ge=Object.defineProperty,He=Object.getOwnPropertyNames,ho=Object.getOwnPropertySymbols,Ue=Object.getOwnPropertyDescriptor,Ye=Object.getPrototypeOf,Co=Object.prototype;function Ko(e,o,a){if(typeof o!="string"){if(Co){var s=Ye(o);s&&s!==Co&&Ko(e,s,a)}var i=He(o);ho&&(i=i.concat(ho(o)));for(var t=mo(e),l=mo(o),d=0;d<i.length;++d){var p=i[d];if(!(p in Me||a&&a[p]||l&&p in l||t&&p in t)){var I=Ue(o,p);try{Ge(e,p,I)}catch{}}}}return e}function X(e){return typeof e=="function"}function eo(e){return typeof e=="object"&&"styledComponentId"in e}function G(e,o){return e&&o?"".concat(e," ").concat(o):e||o||""}function uo(e,o){if(e.length===0)return"";for(var a=e[0],s=1;s<e.length;s++)a+=e[s];return a}function ln(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Jn(e,o,a){if(a===void 0&&(a=!1),!a&&!ln(e)&&!Array.isArray(e))return o;if(Array.isArray(o))for(var s=0;s<o.length;s++)e[s]=Jn(e[s],o[s]);else if(ln(o))for(var s in o)e[s]=Jn(e[s],o[s]);return e}function so(e,o){Object.defineProperty(e,"toString",{value:o})}function pn(e){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Ve=function(){function e(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return e.prototype.indexOfGroup=function(o){for(var a=0,s=0;s<o;s++)a+=this.groupSizes[s];return a},e.prototype.insertRules=function(o,a){if(o>=this.groupSizes.length){for(var s=this.groupSizes,i=s.length,t=i;o>=t;)if((t<<=1)<0)throw pn(16,"".concat(o));this.groupSizes=new Uint32Array(t),this.groupSizes.set(s),this.length=t;for(var l=i;l<t;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(o+1),p=(l=0,a.length);l<p;l++)this.tag.insertRule(d,a[l])&&(this.groupSizes[o]++,d++)},e.prototype.clearGroup=function(o){if(o<this.length){var a=this.groupSizes[o],s=this.indexOfGroup(o),i=s+a;this.groupSizes[o]=0;for(var t=s;t<i;t++)this.tag.deleteRule(s)}},e.prototype.getGroup=function(o){var a="";if(o>=this.length||this.groupSizes[o]===0)return a;for(var s=this.groupSizes[o],i=this.indexOfGroup(o),t=i+s,l=i;l<t;l++)a+="".concat(this.tag.getRule(l)).concat(oo);return a},e}(),vn=new Map,Rn=new Map,Sn=1,In=function(e){if(vn.has(e))return vn.get(e);for(;Rn.has(Sn);)Sn++;var o=Sn++;return vn.set(e,o),Rn.set(o,e),o},qe=function(e,o){Sn=o+1,vn.set(e,o),Rn.set(o,e)},Ke="style[".concat(Z,"][").concat(zo,'="').concat(_n,'"]'),Je=new RegExp("^".concat(Z,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ze=function(e,o,a){for(var s,i=a.split(","),t=0,l=i.length;t<l;t++)(s=i[t])&&e.registerName(o,s)},Qe=function(e,o){for(var a,s=((a=o.textContent)!==null&&a!==void 0?a:"").split(oo),i=[],t=0,l=s.length;t<l;t++){var d=s[t].trim();if(d){var p=d.match(Je);if(p){var I=0|parseInt(p[1],10),x=p[2];I!==0&&(qe(x,I),Ze(e,x,p[3]),e.getTag().insertRules(I,i)),i.length=0}else i.push(d)}}},xo=function(e){for(var o=document.querySelectorAll(Ke),a=0,s=o.length;a<s;a++){var i=o[a];i&&i.getAttribute(Z)!==Mo&&(Qe(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Xe(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Jo=function(e){var o=document.head,a=e||o,s=document.createElement("style"),i=function(d){var p=Array.from(d.querySelectorAll("style[".concat(Z,"]")));return p[p.length-1]}(a),t=i!==void 0?i.nextSibling:null;s.setAttribute(Z,Mo),s.setAttribute(zo,_n);var l=Xe();return l&&s.setAttribute("nonce",l),a.insertBefore(s,t),s},ns=function(){function e(o){this.element=Jo(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var s=document.styleSheets,i=0,t=s.length;i<t;i++){var l=s[i];if(l.ownerNode===a)return l}throw pn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(o,a){try{return this.sheet.insertRule(a,o),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},e.prototype.getRule=function(o){var a=this.sheet.cssRules[o];return a&&a.cssText?a.cssText:""},e}(),os=function(){function e(o){this.element=Jo(o),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(o,a){if(o<=this.length&&o>=0){var s=document.createTextNode(a);return this.element.insertBefore(s,this.nodes[o]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},e.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},e}(),es=function(){function e(o){this.rules=[],this.length=0}return e.prototype.insertRule=function(o,a){return o<=this.length&&(this.rules.splice(o,0,a),this.length++,!0)},e.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},e.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},e}(),Io=En,ss={isServer:!En,useCSSOMInjection:!De},Zo=function(){function e(o,a,s){o===void 0&&(o=Q),a===void 0&&(a={});var i=this;this.options=T(T({},ss),o),this.gs=a,this.names=new Map(s),this.server=!!o.isServer,!this.server&&En&&Io&&(Io=!1,xo(this)),so(this,function(){return function(t){for(var l=t.getTag(),d=l.length,p="",I=function(y){var f=function(b){return Rn.get(b)}(y);if(f===void 0)return"continue";var C=t.names.get(f),B=l.getGroup(y);if(C===void 0||!C.size||B.length===0)return"continue";var S="".concat(Z,".g").concat(y,'[id="').concat(f,'"]'),D="";C!==void 0&&C.forEach(function(b){b.length>0&&(D+="".concat(b,","))}),p+="".concat(B).concat(S,'{content:"').concat(D,'"}').concat(oo)},x=0;x<d;x++)I(x);return p}(i)})}return e.registerId=function(o){return In(o)},e.prototype.rehydrate=function(){!this.server&&En&&xo(this)},e.prototype.reconstructWithOptions=function(o,a){return a===void 0&&(a=!0),new e(T(T({},this.options),o),this.gs,a&&this.names||void 0)},e.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(o=function(a){var s=a.useCSSOMInjection,i=a.target;return a.isServer?new es(i):s?new ns(i):new os(i)}(this.options),new Ve(o)));var o},e.prototype.hasNameForId=function(o,a){return this.names.has(o)&&this.names.get(o).has(a)},e.prototype.registerName=function(o,a){if(In(o),this.names.has(o))this.names.get(o).add(a);else{var s=new Set;s.add(a),this.names.set(o,s)}},e.prototype.insertRules=function(o,a,s){this.registerName(o,a),this.getTag().insertRules(In(o),s)},e.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},e.prototype.clearRules=function(o){this.getTag().clearGroup(In(o)),this.clearNames(o)},e.prototype.clearTag=function(){this.tag=void 0},e}(),as=/&/g,cs=/^\s*\/\/.*$/gm;function Qo(e,o){return e.map(function(a){return a.type==="rule"&&(a.value="".concat(o," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(o," ")),a.props=a.props.map(function(s){return"".concat(o," ").concat(s)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=Qo(a.children,o)),a})}function rs(e){var o,a,s,i=Q,t=i.options,l=t===void 0?Q:t,d=i.plugins,p=d===void 0?Fn:d,I=function(f,C,B){return B.startsWith(a)&&B.endsWith(a)&&B.replaceAll(a,"").length>0?".".concat(o):f},x=p.slice();x.push(function(f){f.type===Dn&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(as,a).replace(s,I))}),l.prefix&&x.push(Re),x.push(be);var y=function(f,C,B,S){C===void 0&&(C=""),B===void 0&&(B=""),S===void 0&&(S="&"),o=S,a=C,s=new RegExp("\\".concat(a,"\\b"),"g");var D=f.replace(cs,""),b=ve(B||C?"".concat(B," ").concat(C," { ").concat(D," }"):D);l.namespace&&(b=Qo(b,l.namespace));var w=[];return An(b,Ae(x.concat(Ee(function(g){return w.push(g)})))),w};return y.hash=p.length?p.reduce(function(f,C){return C.name||pn(15),q(f,C.name)},Ho).toString():"",y}var is=new Zo,Zn=rs(),Xo=tn.createContext({shouldForwardProp:void 0,styleSheet:is,stylis:Zn});Xo.Consumer;tn.createContext(void 0);function yo(){return nn.useContext(Xo)}var ts=function(){function e(o,a){var s=this;this.inject=function(i,t){t===void 0&&(t=Zn);var l=s.name+t.hash;i.hasNameForId(s.id,l)||i.insertRules(s.id,l,t(s.rules,l,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=a,so(this,function(){throw pn(12,String(s.name))})}return e.prototype.getName=function(o){return o===void 0&&(o=Zn),this.name+o.hash},e}(),ls=function(e){return e>="A"&&e<="Z"};function fo(e){for(var o="",a=0;a<e.length;a++){var s=e[a];if(a===1&&s==="-"&&e[0]==="-")return e;ls(s)?o+="-"+s.toLowerCase():o+=s}return o.startsWith("ms-")?"-"+o:o}var ne=function(e){return e==null||e===!1||e===""},oe=function(e){var o,a,s=[];for(var i in e){var t=e[i];e.hasOwnProperty(i)&&!ne(t)&&(Array.isArray(t)&&t.isCss||X(t)?s.push("".concat(fo(i),":"),t,";"):ln(t)?s.push.apply(s,bn(bn(["".concat(i," {")],oe(t),!1),["}"],!1)):s.push("".concat(fo(i),": ").concat((o=i,(a=t)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||o in Te||o.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return s};function U(e,o,a,s){if(ne(e))return[];if(eo(e))return[".".concat(e.styledComponentId)];if(X(e)){if(!X(t=e)||t.prototype&&t.prototype.isReactComponent||!o)return[e];var i=e(o);return U(i,o,a,s)}var t;return e instanceof ts?a?(e.inject(a,s),[e.getName(s)]):[e]:ln(e)?oe(e):Array.isArray(e)?Array.prototype.concat.apply(Fn,e.map(function(l){return U(l,o,a,s)})):[e.toString()]}function ps(e){for(var o=0;o<e.length;o+=1){var a=e[o];if(X(a)&&!eo(a))return!1}return!0}var ds=Uo(_n),ms=function(){function e(o,a,s){this.rules=o,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&ps(o),this.componentId=a,this.baseHash=q(ds,a),this.baseStyle=s,Zo.registerId(a)}return e.prototype.generateAndInjectStyles=function(o,a,s){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,a,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))i=G(i,this.staticRulesId);else{var t=uo(U(this.rules,o,a,s)),l=Kn(q(this.baseHash,t)>>>0);if(!a.hasNameForId(this.componentId,l)){var d=s(t,".".concat(l),void 0,this.componentId);a.insertRules(this.componentId,l,d)}i=G(i,l),this.staticRulesId=l}else{for(var p=q(this.baseHash,s.hash),I="",x=0;x<this.rules.length;x++){var y=this.rules[x];if(typeof y=="string")I+=y;else if(y){var f=uo(U(y,o,a,s));p=q(p,f+x),I+=f}}if(I){var C=Kn(p>>>0);a.hasNameForId(this.componentId,C)||a.insertRules(this.componentId,C,s(I,".".concat(C),void 0,this.componentId)),i=G(i,C)}}return i},e}(),ee=tn.createContext(void 0);ee.Consumer;var Un={};function hs(e,o,a){var s=eo(e),i=e,t=!Hn(e),l=o.attrs,d=l===void 0?Fn:l,p=o.componentId,I=p===void 0?function(v,E){var j=typeof v!="string"?"sc":lo(v);Un[j]=(Un[j]||0)+1;var h="".concat(j,"-").concat(Fe(_n+j+Un[j]));return E?"".concat(E,"-").concat(h):h}(o.displayName,o.parentComponentId):p,x=o.displayName,y=x===void 0?function(v){return Hn(v)?"styled.".concat(v):"Styled(".concat(Oe(v),")")}(e):x,f=o.displayName&&o.componentId?"".concat(lo(o.displayName),"-").concat(o.componentId):o.componentId||I,C=s&&i.attrs?i.attrs.concat(d).filter(Boolean):d,B=o.shouldForwardProp;if(s&&i.shouldForwardProp){var S=i.shouldForwardProp;if(o.shouldForwardProp){var D=o.shouldForwardProp;B=function(v,E){return S(v,E)&&D(v,E)}}else B=S}var b=new ms(a,f,s?i.componentStyle:void 0);function w(v,E){return function(j,h,Y){var dn=j.attrs,ce=j.componentStyle,re=j.defaultProps,ie=j.foldedComponentIds,te=j.styledComponentId,le=j.target,pe=tn.useContext(ee),de=yo(),$n=j.shouldForwardProp||de.shouldForwardProp,ao=Pe(h,pe,re)||Q,F=function(hn,sn,Cn){for(var an,z=T(T({},sn),{className:void 0,theme:Cn}),Mn=0;Mn<hn.length;Mn+=1){var un=X(an=hn[Mn])?an(z):an;for(var W in un)z[W]=W==="className"?G(z[W],un[W]):W==="style"?T(T({},z[W]),un[W]):un[W]}return sn.className&&(z.className=G(z.className,sn.className)),z}(dn,h,ao),mn=F.as||le,en={};for(var $ in F)F[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&F.theme===ao||($==="forwardedAs"?en.as=F.forwardedAs:$n&&!$n($,mn)||(en[$]=F[$]));var co=function(hn,sn){var Cn=yo(),an=hn.generateAndInjectStyles(sn,Cn.styleSheet,Cn.stylis);return an}(ce,F),Wn=G(ie,te);return co&&(Wn+=" "+co),F.className&&(Wn+=" "+F.className),en[Hn(mn)&&!Go.has(mn)?"class":"className"]=Wn,Y&&(en.ref=Y),nn.createElement(mn,en)}(g,v,E)}w.displayName=y;var g=tn.forwardRef(w);return g.attrs=C,g.componentStyle=b,g.displayName=y,g.shouldForwardProp=B,g.foldedComponentIds=s?G(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=f,g.target=s?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=s?function(E){for(var j=[],h=1;h<arguments.length;h++)j[h-1]=arguments[h];for(var Y=0,dn=j;Y<dn.length;Y++)Jn(E,dn[Y],!0);return E}({},i.defaultProps,v):v}}),so(g,function(){return".".concat(g.styledComponentId)}),t&&Ko(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function jo(e,o){for(var a=[e[0]],s=0,i=o.length;s<i;s+=1)a.push(o[s],e[s+1]);return a}var ko=function(e){return Object.assign(e,{isCss:!0})};function Cs(e){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];if(X(e)||ln(e))return ko(U(jo(Fn,bn([e],o,!0))));var s=e;return o.length===0&&s.length===1&&typeof s[0]=="string"?U(s):ko(U(jo(s,o)))}function Qn(e,o,a){if(a===void 0&&(a=Q),!o)throw pn(1,o);var s=function(i){for(var t=[],l=1;l<arguments.length;l++)t[l-1]=arguments[l];return e(o,a,Cs.apply(void 0,bn([i],t,!1)))};return s.attrs=function(i){return Qn(e,o,T(T({},a),{attrs:Array.prototype.concat(a.attrs,i).filter(Boolean)}))},s.withConfig=function(i){return Qn(e,o,T(T({},a),i))},s}var se=function(e){return Qn(hs,e)},ae=se;Go.forEach(function(e){ae[e]=se(e)});const Ls={title:"Components/Icons",component:c,argTypes:{className:{control:"text"},prefixCls:{control:"text"},size:{control:"number"},color:{control:"color"},borderColor:{control:"color"},gradientColor:{control:"object"}},args:{prefixCls:"icons"},tags:["autodocs"]},r=ae.div`
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
`,On=(e,o)=>{me(e,a=>{a?o==null||o():console.log("copied failed")})},yn={args:{prefixCls:"icons",color:"#073387",borderColor:"#03163A",size:24},parameters:{docs:{description:{story:"The primary icons are used to represent the 1Money icons."}}},render:function(o){const a=nn.useRef(null),s=i=>{On(i,()=>{var t;return(t=a.current)==null?void 0:t.show({severity:"success",summary:"copy successfully",detail:"already copied",life:1500})})};return n.jsxs("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fill, minmax(100px, 1fr))"},children:[n.jsx(Tn,{ref:a,appendTo:null}),n.jsxs(r,{onClick:()=>s("<Icons name='deposit' />"),children:[n.jsx(c,{...o,name:"deposit"}),n.jsx("span",{children:"Deposit"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='withdrawal' />"),children:[n.jsx(c,{...o,name:"withdrawal"}),n.jsx("span",{children:"Withdrawal"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='conversion' />"),children:[n.jsx(c,{...o,name:"conversion"}),n.jsx("span",{children:"Conversion"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='mintToken' />"),children:[n.jsx(c,{...o,name:"mintToken"}),n.jsx("span",{children:"MintToken"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='burnToken' />"),children:[n.jsx(c,{...o,name:"burnToken"}),n.jsx("span",{children:"BurnToken"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='accountLocked' />"),children:[n.jsx(c,{...o,name:"accountLocked"}),n.jsx("span",{children:"Account Locked"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='pending' />"),children:[n.jsx(c,{...o,name:"pending"}),n.jsx("span",{children:"Pending"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='success' />"),children:[n.jsx(c,{...o,name:"success"}),n.jsx("span",{children:"Success"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='fail' />"),children:[n.jsx(c,{...o,name:"fail"}),n.jsx("span",{children:"Fail"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='error' />"),children:[n.jsx(c,{...o,name:"error"}),n.jsx("span",{children:"Error"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='statusSuccess' />"),children:[n.jsx(c,{...o,name:"statusSuccess"}),n.jsx("span",{children:"Status Success"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='statusFail' />"),children:[n.jsx(c,{...o,name:"statusFail"}),n.jsx("span",{children:"Status Fail"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='dashboard' />"),children:[n.jsx(c,{...o,name:"dashboard"}),n.jsx("span",{children:"Dashboard"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='digitalAsset' />"),children:[n.jsx(c,{...o,name:"digitalAsset"}),n.jsx("span",{children:"Digital Asset"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='addressBook' />"),children:[n.jsx(c,{...o,name:"addressBook"}),n.jsx("span",{children:"Address Book"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='linkedBankAccounts' />"),children:[n.jsx(c,{...o,name:"linkedBankAccounts"}),n.jsx("span",{children:"Linked Bank Accounts"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='ach' />"),children:[n.jsx(c,{...o,name:"ach"}),n.jsx("span",{children:"ACH"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='wire' />"),children:[n.jsx(c,{...o,name:"wire"}),n.jsx("span",{children:"Wire"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='account' />"),children:[n.jsx(c,{...o,name:"account"}),n.jsx("span",{children:"Account"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='profile' />"),children:[n.jsx(c,{...o,name:"profile"}),n.jsx("span",{children:"Profile"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='security' />"),children:[n.jsx(c,{...o,name:"security"}),n.jsx("span",{children:"Security"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logout' />"),children:[n.jsx(c,{...o,name:"logout"}),n.jsx("span",{children:"Logout"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='portfolio' />"),children:[n.jsx(c,{...o,name:"portfolio"}),n.jsx("span",{children:"Portfolio"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='home' />"),children:[n.jsx(c,{...o,name:"home"}),n.jsx("span",{children:"Home"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='convert' />"),children:[n.jsx(c,{...o,name:"convert"}),n.jsx("span",{children:"Convert"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='withdraw' />"),children:[n.jsx(c,{...o,name:"withdraw"}),n.jsx("span",{children:"Withdraw"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='send' />"),children:[n.jsx(c,{...o,name:"send"}),n.jsx("span",{children:"Send"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='menuDeposit' />"),children:[n.jsx(c,{...o,name:"menuDeposit"}),n.jsx("span",{children:"Menu Deposit"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='company' />"),children:[n.jsx(c,{...o,name:"company"}),n.jsx("span",{children:"Company"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='parties' />"),children:[n.jsx(c,{...o,name:"parties"}),n.jsx("span",{children:"Parties"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='transactions' />"),children:[n.jsx(c,{...o,name:"transactions"}),n.jsx("span",{children:"Transactions"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='fiat' />"),children:[n.jsx(c,{...o,name:"fiat"}),n.jsx("span",{children:"Fiat"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='money' />"),children:[n.jsx(c,{...o,name:"money"}),n.jsx("span",{children:"Money"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='sendCrypto' />"),children:[n.jsx(c,{...o,name:"sendCrypto"}),n.jsx("span",{children:"Send Crypto"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='arrowUp' />"),children:[n.jsx(c,{...o,name:"arrowUp"}),n.jsx("span",{children:"Arrow Up"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='arrowDown' />"),children:[n.jsx(c,{...o,name:"arrowDown"}),n.jsx("span",{children:"Arrow Down"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='arrowLeft' />"),children:[n.jsx(c,{...o,name:"arrowLeft"}),n.jsx("span",{children:"Arrow Left"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='arrowRight' />"),children:[n.jsx(c,{...o,name:"arrowRight"}),n.jsx("span",{children:"Arrow Right"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='add' />"),children:[n.jsx(c,{...o,name:"add"}),n.jsx("span",{children:"Add"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='minus' />"),children:[n.jsx(c,{...o,name:"minus"}),n.jsx("span",{children:"Minus"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='cross' />"),children:[n.jsx(c,{...o,name:"cross"}),n.jsx("span",{children:"Cross"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='more' />"),children:[n.jsx(c,{...o,name:"more"}),n.jsx("span",{children:"More"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='chevronDown' />"),children:[n.jsx(c,{...o,name:"chevronDown"}),n.jsx("span",{children:"Chevron Down"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='chevronUp' />"),children:[n.jsx(c,{...o,name:"chevronUp"}),n.jsx("span",{children:"Chevron Up"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='chevronLeft' />"),children:[n.jsx(c,{...o,name:"chevronLeft"}),n.jsx("span",{children:"Chevron Left"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='chevronRight' />"),children:[n.jsx(c,{...o,name:"chevronRight"}),n.jsx("span",{children:"Chevron Right"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='collapse' />"),children:[n.jsx(c,{...o,name:"collapse"}),n.jsx("span",{children:"Collapse"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='extend' />"),children:[n.jsx(c,{...o,name:"extend"}),n.jsx("span",{children:"Extend"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='spinner' />"),children:[n.jsx(c,{...o,name:"spinner"}),n.jsx("span",{children:"Spinner"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='check' />"),children:[n.jsx(c,{...o,name:"check"}),n.jsx("span",{children:"Check"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='remove' />"),children:[n.jsx(c,{...o,name:"remove"}),n.jsx("span",{children:"Remove"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='info' />"),children:[n.jsx(c,{...o,name:"info"}),n.jsx("span",{children:"Info"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='notifications' />"),children:[n.jsx(c,{...o,name:"notifications"}),n.jsx("span",{children:"Notifications"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='favorite' />"),children:[n.jsx(c,{...o,name:"favorite"}),n.jsx("span",{children:"Favorite"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='transferHistory' />"),children:[n.jsx(c,{...o,name:"transferHistory"}),n.jsx("span",{children:"Transfer History"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='support' />"),children:[n.jsx(c,{...o,name:"support"}),n.jsx("span",{children:"Support"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='help' />"),children:[n.jsx(c,{...o,name:"help"}),n.jsx("span",{children:"Help"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='language' />"),children:[n.jsx(c,{...o,name:"language"}),n.jsx("span",{children:"Language"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='share' />"),children:[n.jsx(c,{...o,name:"share"}),n.jsx("span",{children:"Share"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='products' />"),children:[n.jsx(c,{...o,name:"products"}),n.jsx("span",{children:"Products"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='hub' />"),children:[n.jsx(c,{...o,name:"hub"}),n.jsx("span",{children:"Hub"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='systemSecurity' />"),children:[n.jsx(c,{...o,name:"systemSecurity"}),n.jsx("span",{children:"System Security"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='fees' />"),children:[n.jsx(c,{...o,name:"fees"}),n.jsx("span",{children:"Fees"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='settings' />"),children:[n.jsx(c,{...o,name:"settings"}),n.jsx("span",{children:"Settings"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='id' />"),children:[n.jsx(c,{...o,name:"id"}),n.jsx("span",{children:"ID"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='viewBalance' />"),children:[n.jsx(c,{...o,name:"viewBalance"}),n.jsx("span",{children:"View Balance"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='hideBalance' />"),children:[n.jsx(c,{...o,name:"hideBalance"}),n.jsx("span",{children:"Hide Balance"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='privacy' />"),children:[n.jsx(c,{...o,name:"privacy"}),n.jsx("span",{children:"Privacy"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='card' />"),children:[n.jsx(c,{...o,name:"card"}),n.jsx("span",{children:"Card"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='coin' />"),children:[n.jsx(c,{...o,name:"coin"}),n.jsx("span",{children:"Coin"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='wallet' />"),children:[n.jsx(c,{...o,name:"wallet"}),n.jsx("span",{children:"Wallet"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='email' />"),children:[n.jsx(c,{...o,name:"email"}),n.jsx("span",{children:"Email"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='rewards' />"),children:[n.jsx(c,{...o,name:"rewards"}),n.jsx("span",{children:"Rewards"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='time' />"),children:[n.jsx(c,{...o,name:"time"}),n.jsx("span",{children:"Time"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='location' />"),children:[n.jsx(c,{...o,name:"location"}),n.jsx("span",{children:"Location"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='calendar' />"),children:[n.jsx(c,{...o,name:"calendar"}),n.jsx("span",{children:"Calendar"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='securityCheck' />"),children:[n.jsx(c,{...o,name:"securityCheck"}),n.jsx("span",{children:"Security Check"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='devices' />"),children:[n.jsx(c,{...o,name:"devices"}),n.jsx("span",{children:"Devices"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='images' />"),children:[n.jsx(c,{...o,name:"images"}),n.jsx("span",{children:"Images"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='bank' />"),children:[n.jsx(c,{...o,name:"bank"}),n.jsx("span",{children:"Bank"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='coins' />"),children:[n.jsx(c,{...o,name:"coins"}),n.jsx("span",{children:"Coins"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='earn' />"),children:[n.jsx(c,{...o,name:"earn"}),n.jsx("span",{children:"Earn"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='scan' />"),children:[n.jsx(c,{...o,name:"scan"}),n.jsx("span",{children:"Scan"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='search' />"),children:[n.jsx(c,{...o,name:"search"}),n.jsx("span",{children:"Search"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='maintenance' />"),children:[n.jsx(c,{...o,name:"maintenance"}),n.jsx("span",{children:"Maintenance"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='editFile' />"),children:[n.jsx(c,{...o,name:"editFile"}),n.jsx("span",{children:"Edit File"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='document' />"),children:[n.jsx(c,{...o,name:"document"}),n.jsx("span",{children:"Document"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='upload' />"),children:[n.jsx(c,{...o,name:"upload"}),n.jsx("span",{children:"Upload"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='gift' />"),children:[n.jsx(c,{...o,name:"gift"}),n.jsx("span",{children:"Gift"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='filter' />"),children:[n.jsx(c,{...o,name:"filter"}),n.jsx("span",{children:"Filter"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='expand' />"),children:[n.jsx(c,{...o,name:"expand"}),n.jsx("span",{children:"Expand"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='systemCollapse' />"),children:[n.jsx(c,{...o,name:"systemCollapse"}),n.jsx("span",{children:"System Collapse"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='refresh' />"),children:[n.jsx(c,{...o,name:"refresh"}),n.jsx("span",{children:"Refresh"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='transfer' />"),children:[n.jsx(c,{...o,name:"transfer"}),n.jsx("span",{children:"Transfer"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='link' />"),children:[n.jsx(c,{...o,name:"link"}),n.jsx("span",{children:"Link"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='save' />"),children:[n.jsx(c,{...o,name:"save"}),n.jsx("span",{children:"Save"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='like' />"),children:[n.jsx(c,{...o,name:"like"}),n.jsx("span",{children:"Like"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='dislike' />"),children:[n.jsx(c,{...o,name:"dislike"}),n.jsx("span",{children:"Dislike"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='copy' />"),children:[n.jsx(c,{...o,name:"copy"}),n.jsx("span",{children:"Copy"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='mobile' />"),children:[n.jsx(c,{...o,name:"mobile"}),n.jsx("span",{children:"Mobile"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='chat' />"),children:[n.jsx(c,{...o,name:"chat"}),n.jsx("span",{children:"Chat"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='swap' />"),children:[n.jsx(c,{...o,name:"swap"}),n.jsx("span",{children:"Swap"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='clock' />"),children:[n.jsx(c,{...o,name:"clock"}),n.jsx("span",{children:"Clock"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='desktop' />"),children:[n.jsx(c,{...o,name:"desktop"}),n.jsx("span",{children:"Desktop"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='usd' />"),children:[n.jsx(c,{...o,name:"usd"}),n.jsx("span",{children:"USD"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='eur' />"),children:[n.jsx(c,{...o,name:"eur"}),n.jsx("span",{children:"EUR"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='gbp' />"),children:[n.jsx(c,{...o,name:"gbp"}),n.jsx("span",{children:"GBP"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='jpy' />"),children:[n.jsx(c,{...o,name:"jpy"}),n.jsx("span",{children:"JPY"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='cny' />"),children:[n.jsx(c,{...o,name:"cny"}),n.jsx("span",{children:"CNY"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='google' />"),children:[n.jsx(c,{...o,name:"google"}),n.jsx("span",{children:"Google"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='apple' />"),children:[n.jsx(c,{...o,name:"apple"}),n.jsx("span",{children:"Apple"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='passkey' />"),children:[n.jsx(c,{...o,name:"passkey"}),n.jsx("span",{children:"Passkey"})]})]})}},fn={args:{prefixCls:"icons",color:"#073387",logoColor:"#073387",wordColor:"#000000",networkColor:"#131313",size:32},parameters:{docs:{description:{story:"The logo icon is used to represent the 1Money logo."}}},render:function(o){const a=nn.useRef(null),s=i=>{On(i,()=>{var t;return(t=a.current)==null?void 0:t.show({severity:"success",summary:"copy successfully",detail:"already copied",life:1500})})};return n.jsxs("div",{style:{display:"grid",flexDirection:"row",gap:24,flexWrap:"wrap",gridTemplateColumns:"repeat(auto-fill, minmax(222px, 1fr))"},children:[n.jsx(Tn,{ref:a,appendTo:null}),n.jsxs(r,{onClick:()=>s("<Icons name='logo' />"),children:[n.jsx(c,{...o,name:"logo"}),n.jsx("span",{children:"logo"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logoWord' />"),children:[n.jsx(c,{...o,name:"logoWord",width:150,height:30}),n.jsx("span",{children:"logoWord"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logoNetwork' />"),children:[n.jsx(c,{...o,name:"logoNetwork",width:150,height:30}),n.jsx("span",{children:"logoNetwork"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logoWithWords' />"),children:[n.jsx(c,{...o,name:"logoWithWords",width:180,height:36}),n.jsx("span",{children:"logoWithWords"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logoWithWords' />"),children:[n.jsx(c,{...o,name:"logoWithWords",width:320,height:36,networkLogo:!0}),n.jsx("span",{children:"logoWithWords"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='logoBg' />"),children:[n.jsx(c,{...o,name:"logoBg",width:56,height:57}),n.jsx("span",{children:"logoBg"})]})]})}},jn={args:{prefixCls:"icons",color:"#B31010",borderColor:"#1D1D1F",size:50,illustrations:!0,gradientColor:["#F4C600","white"]},render:function(o){const a=nn.useRef(null),s=i=>{On(i,()=>{var t;return(t=a.current)==null?void 0:t.show({severity:"success",summary:"copy successfully",detail:"already copied",life:1500})})};return n.jsxs("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))"},children:[n.jsx(Tn,{ref:a,appendTo:null}),n.jsxs(r,{onClick:()=>s("<Icons name='illusChecked' />"),children:[n.jsx(c,{...o,name:"illusChecked"}),n.jsx("span",{children:"illusChecked"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusEmailError' />"),children:[n.jsx(c,{...o,name:"illusEmailError"}),n.jsx("span",{children:"illusEmailError"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusLinkExpired' />"),children:[n.jsx(c,{...o,name:"illusLinkExpired"}),n.jsx("span",{children:"Link Expired"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illus2FA' />"),children:[n.jsx(c,{...o,name:"illus2FA"}),n.jsx("span",{children:"illus2FA"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusLocked' />"),children:[n.jsx(c,{...o,name:"illusLocked"}),n.jsx("span",{children:"illusLocked"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusError' />"),children:[n.jsx(c,{...o,name:"illusError"}),n.jsx("span",{children:"illusError"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusRegionNotSupported' />"),children:[n.jsx(c,{...o,name:"illusRegionNotSupported"}),n.jsx("span",{children:"illusRegionNotSupported"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusIDCard' />"),children:[n.jsx(c,{...o,name:"illusIDCard"}),n.jsx("span",{children:"illusIDCard"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusVerification' />"),children:[n.jsx(c,{...o,name:"illusVerification"}),n.jsx("span",{children:"illusVerification"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusTransfer' />"),children:[n.jsx(c,{...o,name:"illusTransfer"}),n.jsx("span",{children:"illusTransfer"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusSend' />"),children:[n.jsx(c,{...o,name:"illusSend"}),n.jsx("span",{children:"illusSend"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='illusAccount' />"),children:[n.jsx(c,{...o,name:"illusAccount"}),n.jsx("span",{children:"illusAccount"})]})]})}},kn={name:"Old Icons (Deprecated)",args:{prefixCls:"icons",color:"#073387",borderColor:"#131313"},render:function(o){const a=nn.useRef(null),s=i=>{On(i,()=>{var t;return(t=a.current)==null?void 0:t.show({severity:"success",summary:"copy successfully",detail:"already copied",life:1500})})};return n.jsxs("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))"},children:[n.jsx(Tn,{ref:a,appendTo:null}),n.jsxs(r,{onClick:()=>s("<Icons name='burger' />"),children:[n.jsx(c,{...o,name:"burger"}),n.jsx("span",{children:"burger"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='return' />"),children:[n.jsx(c,{...o,name:"return"}),n.jsx("span",{children:"return"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='close' />"),children:[n.jsx(c,{...o,name:"close"}),n.jsx("span",{children:"close"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='arrow' />"),children:[n.jsx(c,{...o,name:"arrow"}),n.jsx("span",{children:"arrow"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='circle' />"),children:[n.jsx(c,{...o,name:"circle"}),n.jsx("span",{children:"circle"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='times' />"),children:[n.jsx(c,{...o,name:"times"}),n.jsx("span",{children:"times"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='doubleCheck' />"),children:[n.jsx(c,{...o,name:"doubleCheck"}),n.jsx("span",{children:"doubleCheck"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='checkCircle' />"),children:[n.jsx(c,{...o,name:"checkCircle"}),n.jsx("span",{children:"checkCircle"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='timesCircle' />"),children:[n.jsx(c,{...o,name:"timesCircle"}),n.jsx("span",{children:"timesCircle"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='content' />"),children:[n.jsx(c,{...o,name:"content"}),n.jsx("span",{children:"Content"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='locked' />"),children:[n.jsx(c,{...o,name:"locked"}),n.jsx("span",{children:"locked"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='exclamation' />"),children:[n.jsx(c,{...o,name:"exclamation"}),n.jsx("span",{children:"exclamation"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='arrowLink' />"),children:[n.jsx(c,{...o,name:"arrowLink"}),n.jsx("span",{children:"arrowLink"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='union' />"),children:[n.jsx(c,{...o,name:"union"}),n.jsx("span",{children:"union"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='eyeClose' />"),children:[n.jsx(c,{...o,name:"eyeClose"}),n.jsx("span",{children:"eyeClose"})]}),n.jsxs(r,{onClick:()=>s("<Icons name='eyeOn' />"),children:[n.jsx(c,{...o,name:"eyeOn"}),n.jsx("span",{children:"eyeOn"})]})]})}};var go,Bo,wo;yn.parameters={...yn.parameters,docs:{...(go=yn.parameters)==null?void 0:go.docs,source:{originalSource:`{
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
        <Icons {...args} name='deposit' />
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
      <CopyIconBox onClick={() => handleCopy("<Icons name='statusSuccess' />")}>
        <Icons {...args} name='statusSuccess' />
        <span>Status Success</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='statusFail' />")}>
        <Icons {...args} name='statusFail' />
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
      <CopyIconBox onClick={() => handleCopy("<Icons name='ach' />")}>
        <Icons {...args} name='ach' />
        <span>ACH</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='wire' />")}>
        <Icons {...args} name='wire' />
        <span>Wire</span>
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
    </div>;
  }
}`,...(bo=(So=fn.parameters)==null?void 0:So.docs)==null?void 0:bo.source}}};var Ao,Eo,Ro;jn.parameters={...jn.parameters,docs:{...(Ao=jn.parameters)==null?void 0:Ao.docs,source:{originalSource:`{
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
    </div>;
  }
}`,...(Ro=(Eo=jn.parameters)==null?void 0:Eo.docs)==null?void 0:Ro.source}}};var To,Do,Po;kn.parameters={...kn.parameters,docs:{...(To=kn.parameters)==null?void 0:To.docs,source:{originalSource:`{
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
}`,...(Po=(Do=kn.parameters)==null?void 0:Do.docs)==null?void 0:Po.source}}};const Ns=["PrimaryIcons","Logo","Illustrations","OldIcons"];export{jn as Illustrations,fn as Logo,kn as OldIcons,yn as PrimaryIcons,Ns as __namedExportsOrder,Ls as default};
