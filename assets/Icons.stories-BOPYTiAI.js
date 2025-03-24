import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as tn,r as nn}from"./index-Ca8FO3x4.js";import{I as c}from"./Icons-CDgJ3q0z.js";import{c as me}from"./clipboard-DZvO4X-U.js";import{T as Dn}from"./Toast-XmigNEOk.js";import"./classnames-B-6LArsQ.js";import"./componentbase.esm-CmqFOBMX.js";import"./csstransition.esm-DSVPP7-p.js";import"./setPrototypeOf-SZTCiYDs.js";import"./index-CA-MFgIQ.js";import"./portal.esm-C38zexph.js";import"./index.esm-CZ0p2oYE.js";import"./iconbase.esm-BQbvzF6M.js";import"./index.esm-DGFjzfGD.js";import"./index.esm-tmG2Xedk.js";import"./index.esm-CZTfbK_d.js";import"./ripple.esm-BKAtRWv4.js";import"./TransitionGroup-FBiY_WQ4.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Typography-BOqbHqbW.js";var D=function(){return D=Object.assign||function(o){for(var a,s=1,i=arguments.length;s<i;s++){a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(o[t]=a[t])}return o},D.apply(this,arguments)};function bn(n,o,a){if(a||arguments.length===2)for(var s=0,i=o.length,t;s<i;s++)(t||!(s in o))&&(t||(t=Array.prototype.slice.call(o,0,s)),t[s]=o[s]);return n.concat(t||Array.prototype.slice.call(o))}var k="-ms-",rn="-moz-",u="-webkit-",Po="comm",Tn="rule",Xn="decl",he="@import",No="@keyframes",Ce="@layer",_o=Math.abs,no=String.fromCharCode,Yn=Object.assign;function ue(n,o){return R(n,0)^45?(((o<<2^R(n,0))<<2^R(n,1))<<2^R(n,2))<<2^R(n,3):0}function Fo(n){return n.trim()}function O(n,o){return(n=o.exec(n))?n[0]:n}function m(n,o,a){return n.replace(o,a)}function gn(n,o,a){return n.indexOf(o,a)}function R(n,o){return n.charCodeAt(o)|0}function K(n,o,a){return n.slice(o,a)}function _(n){return n.length}function Oo(n){return n.length}function cn(n,o){return o.push(n),n}function xe(n,o){return n.map(o).join("")}function ro(n,o){return n.filter(function(a){return!O(a,o)})}var Ln=1,Z=1,$o=0,P=0,A=0,on="";function Pn(n,o,a,s,i,t,l,d){return{value:n,root:o,parent:a,type:s,props:i,children:t,line:Ln,column:Z,length:l,return:"",siblings:d}}function M(n,o){return Yn(Pn("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function V(n){for(;n.root;)n=M(n.root,{children:[n]});cn(n,n.siblings)}function Ie(){return A}function ye(){return A=P>0?R(on,--P):0,Z--,A===10&&(Z=1,Ln--),A}function N(){return A=P<$o?R(on,P++):0,Z++,A===10&&(Z=1,Ln++),A}function G(){return R(on,P)}function Bn(){return P}function Nn(n,o){return K(on,n,o)}function Vn(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fe(n){return Ln=Z=1,$o=_(on=n),P=0,[]}function je(n){return on="",n}function zn(n){return Fo(Nn(P-1,qn(n===91?n+2:n===40?n+1:n)))}function ke(n){for(;(A=G())&&A<33;)N();return Vn(n)>2||Vn(A)>3?"":" "}function ge(n,o){for(;--o&&N()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return Nn(n,Bn()+(o<6&&G()==32&&N()==32))}function qn(n){for(;N();)switch(A){case n:return P;case 34:case 39:n!==34&&n!==39&&qn(A);break;case 40:n===41&&qn(n);break;case 92:N();break}return P}function Be(n,o){for(;N()&&n+A!==57;)if(n+A===84&&G()===47)break;return"/*"+Nn(o,P-1)+"*"+no(n===47?n:N())}function we(n){for(;!Vn(G());)N();return Nn(n,P)}function ve(n){return je(wn("",null,null,null,[""],n=fe(n),0,[0],n))}function wn(n,o,a,s,i,t,l,d,p){for(var I=0,x=0,y=l,f=0,C=0,B=0,S=1,T=1,b=1,w=0,g="",v=i,E=t,j=s,h=g;T;)switch(B=w,w=N()){case 40:if(B!=108&&R(h,y-1)==58){gn(h+=m(zn(w),"&","&\f"),"&\f",_o(I?d[I-1]:0))!=-1&&(b=-1);break}case 34:case 39:case 91:h+=zn(w);break;case 9:case 10:case 13:case 32:h+=ke(B);break;case 92:h+=ge(Bn()-1,7);continue;case 47:switch(G()){case 42:case 47:cn(Se(Be(N(),Bn()),o,a,p),p);break;default:h+="/"}break;case 123*S:d[I++]=_(h)*b;case 125*S:case 59:case 0:switch(w){case 0:case 125:T=0;case 59+x:b==-1&&(h=m(h,/\f/g,"")),C>0&&_(h)-y&&cn(C>32?to(h+";",s,a,y-1,p):to(m(h," ","")+";",s,a,y-2,p),p);break;case 59:h+=";";default:if(cn(j=io(h,o,a,I,x,i,d,g,v=[],E=[],y,t),t),w===123)if(x===0)wn(h,o,j,j,v,t,y,d,E);else switch(f===99&&R(h,3)===110?100:f){case 100:case 108:case 109:case 115:wn(n,j,j,s&&cn(io(n,j,j,0,0,i,d,g,i,v=[],y,E),E),i,E,y,d,s?v:E);break;default:wn(h,j,j,j,[""],E,0,d,E)}}I=x=C=0,S=b=1,g=h="",y=l;break;case 58:y=1+_(h),C=B;default:if(S<1){if(w==123)--S;else if(w==125&&S++==0&&ye()==125)continue}switch(h+=no(w),w*S){case 38:b=x>0?1:(h+="\f",-1);break;case 44:d[I++]=(_(h)-1)*b,b=1;break;case 64:G()===45&&(h+=zn(N())),f=G(),x=y=_(g=h+=we(Bn())),w++;break;case 45:B===45&&_(h)==2&&(S=0)}}return t}function io(n,o,a,s,i,t,l,d,p,I,x,y){for(var f=i-1,C=i===0?t:[""],B=Oo(C),S=0,T=0,b=0;S<s;++S)for(var w=0,g=K(n,f+1,f=_o(T=l[S])),v=n;w<B;++w)(v=Fo(T>0?C[w]+" "+g:m(g,/&\f/g,C[w])))&&(p[b++]=v);return Pn(n,o,a,i===0?Tn:d,p,I,x,y)}function Se(n,o,a,s){return Pn(n,o,a,Po,no(Ie()),K(n,2,-2),0,s)}function to(n,o,a,s,i){return Pn(n,o,a,Xn,K(n,0,s),K(n,s+1,-1),s,i)}function Wo(n,o,a){switch(ue(n,o)){case 5103:return u+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+n+n;case 4789:return rn+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return u+n+rn+n+k+n+n;case 5936:switch(R(n,o+11)){case 114:return u+n+k+m(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return u+n+k+m(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return u+n+k+m(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return u+n+k+n+n;case 6165:return u+n+k+"flex-"+n+n;case 5187:return u+n+m(n,/(\w+).+(:[^]+)/,u+"box-$1$2"+k+"flex-$1$2")+n;case 5443:return u+n+k+"flex-item-"+m(n,/flex-|-self/g,"")+(O(n,/flex-|baseline/)?"":k+"grid-row-"+m(n,/flex-|-self/g,""))+n;case 4675:return u+n+k+"flex-line-pack"+m(n,/align-content|flex-|-self/g,"")+n;case 5548:return u+n+k+m(n,"shrink","negative")+n;case 5292:return u+n+k+m(n,"basis","preferred-size")+n;case 6060:return u+"box-"+m(n,"-grow","")+u+n+k+m(n,"grow","positive")+n;case 4554:return u+m(n,/([^-])(transform)/g,"$1"+u+"$2")+n;case 6187:return m(m(m(n,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),n,"")+n;case 5495:case 3959:return m(n,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return m(m(n,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+n+n;case 4200:if(!O(n,/flex-|baseline/))return k+"grid-column-align"+K(n,o)+n;break;case 2592:case 3360:return k+m(n,"template-","")+n;case 4384:case 3616:return a&&a.some(function(s,i){return o=i,O(s.props,/grid-\w+-end/)})?~gn(n+(a=a[o].value),"span",0)?n:k+m(n,"-start","")+n+k+"grid-row-span:"+(~gn(a,"span",0)?O(a,/\d+/):+O(a,/\d+/)-+O(n,/\d+/))+";":k+m(n,"-start","")+n;case 4896:case 4128:return a&&a.some(function(s){return O(s.props,/grid-\w+-start/)})?n:k+m(m(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return m(n,/(.+)-inline(.+)/,u+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(n)-1-o>6)switch(R(n,o+1)){case 109:if(R(n,o+4)!==45)break;case 102:return m(n,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+rn+(R(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~gn(n,"stretch",0)?Wo(m(n,"stretch","fill-available"),o,a)+n:n}break;case 5152:case 5920:return m(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,i,t,l,d,p,I){return k+i+":"+t+I+(l?k+i+"-span:"+(d?p:+p-+t)+I:"")+n});case 4949:if(R(n,o+6)===121)return m(n,":",":"+u)+n;break;case 6444:switch(R(n,R(n,14)===45?18:11)){case 120:return m(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(R(n,14)===45?"inline-":"")+"box$3$1"+u+"$2$3$1"+k+"$2box$3")+n;case 100:return m(n,":",":"+k)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return m(n,"scroll-","scroll-snap-")+n}return n}function An(n,o){for(var a="",s=0;s<n.length;s++)a+=o(n[s],s,n,o)||"";return a}function be(n,o,a,s){switch(n.type){case Ce:if(n.children.length)break;case he:case Xn:return n.return=n.return||n.value;case Po:return"";case No:return n.return=n.value+"{"+An(n.children,s)+"}";case Tn:if(!_(n.value=n.props.join(",")))return""}return _(a=An(n.children,s))?n.return=n.value+"{"+a+"}":""}function Ae(n){var o=Oo(n);return function(a,s,i,t){for(var l="",d=0;d<o;d++)l+=n[d](a,s,i,t)||"";return l}}function Ee(n){return function(o){o.root||(o=o.return)&&n(o)}}function Re(n,o,a,s){if(n.length>-1&&!n.return)switch(n.type){case Xn:n.return=Wo(n.value,n.length,a);return;case No:return An([M(n,{value:m(n.value,"@","@"+u)})],s);case Tn:if(n.length)return xe(a=n.props,function(i){switch(O(i,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":V(M(n,{props:[m(i,/:(read-\w+)/,":"+rn+"$1")]})),V(M(n,{props:[i]})),Yn(n,{props:ro(a,s)});break;case"::placeholder":V(M(n,{props:[m(i,/:(plac\w+)/,":"+u+"input-$1")]})),V(M(n,{props:[m(i,/:(plac\w+)/,":"+rn+"$1")]})),V(M(n,{props:[m(i,/:(plac\w+)/,k+"input-$1")]})),V(M(n,{props:[i]})),Yn(n,{props:ro(a,s)});break}return""})}}var De={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},L={},J=typeof process<"u"&&L!==void 0&&(L.REACT_APP_SC_ATTR||L.SC_ATTR)||"data-styled",Mo="active",zo="data-styled-version",_n="6.1.15",oo=`/*!sc*/
`,En=typeof window<"u"&&"HTMLElement"in window,Te=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&L!==void 0&&L.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&L.REACT_APP_SC_DISABLE_SPEEDY!==""?L.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&L.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&L!==void 0&&L.SC_DISABLE_SPEEDY!==void 0&&L.SC_DISABLE_SPEEDY!==""&&L.SC_DISABLE_SPEEDY!=="false"&&L.SC_DISABLE_SPEEDY),Fn=Object.freeze([]),Q=Object.freeze({});function Le(n,o,a){return a===void 0&&(a=Q),n.theme!==a.theme&&n.theme||o||a.theme}var Ho=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Pe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ne=/(^-|-$)/g;function lo(n){return n.replace(Pe,"-").replace(Ne,"")}var _e=/(a)(d)/gi,xn=52,po=function(n){return String.fromCharCode(n+(n>25?39:97))};function Kn(n){var o,a="";for(o=Math.abs(n);o>xn;o=o/xn|0)a=po(o%xn)+a;return(po(o%xn)+a).replace(_e,"$1-$2")}var Hn,Go=5381,q=function(n,o){for(var a=o.length;a;)n=33*n^o.charCodeAt(--a);return n},Uo=function(n){return q(Go,n)};function Fe(n){return Kn(Uo(n)>>>0)}function Oe(n){return n.displayName||n.name||"Component"}function Gn(n){return typeof n=="string"&&!0}var Yo=typeof Symbol=="function"&&Symbol.for,Vo=Yo?Symbol.for("react.memo"):60115,$e=Yo?Symbol.for("react.forward_ref"):60112,We={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Me={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ze=((Hn={})[$e]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hn[Vo]=qo,Hn);function mo(n){return("type"in(o=n)&&o.type.$$typeof)===Vo?qo:"$$typeof"in n?ze[n.$$typeof]:We;var o}var He=Object.defineProperty,Ge=Object.getOwnPropertyNames,ho=Object.getOwnPropertySymbols,Ue=Object.getOwnPropertyDescriptor,Ye=Object.getPrototypeOf,Co=Object.prototype;function Ko(n,o,a){if(typeof o!="string"){if(Co){var s=Ye(o);s&&s!==Co&&Ko(n,s,a)}var i=Ge(o);ho&&(i=i.concat(ho(o)));for(var t=mo(n),l=mo(o),d=0;d<i.length;++d){var p=i[d];if(!(p in Me||a&&a[p]||l&&p in l||t&&p in t)){var I=Ue(o,p);try{He(n,p,I)}catch{}}}}return n}function X(n){return typeof n=="function"}function eo(n){return typeof n=="object"&&"styledComponentId"in n}function H(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function uo(n,o){if(n.length===0)return"";for(var a=n[0],s=1;s<n.length;s++)a+=n[s];return a}function ln(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Zn(n,o,a){if(a===void 0&&(a=!1),!a&&!ln(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var s=0;s<o.length;s++)n[s]=Zn(n[s],o[s]);else if(ln(o))for(var s in o)n[s]=Zn(n[s],o[s]);return n}function so(n,o){Object.defineProperty(n,"toString",{value:o})}function pn(n){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Ve=function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var a=0,s=0;s<o;s++)a+=this.groupSizes[s];return a},n.prototype.insertRules=function(o,a){if(o>=this.groupSizes.length){for(var s=this.groupSizes,i=s.length,t=i;o>=t;)if((t<<=1)<0)throw pn(16,"".concat(o));this.groupSizes=new Uint32Array(t),this.groupSizes.set(s),this.length=t;for(var l=i;l<t;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(o+1),p=(l=0,a.length);l<p;l++)this.tag.insertRule(d,a[l])&&(this.groupSizes[o]++,d++)},n.prototype.clearGroup=function(o){if(o<this.length){var a=this.groupSizes[o],s=this.indexOfGroup(o),i=s+a;this.groupSizes[o]=0;for(var t=s;t<i;t++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(o){var a="";if(o>=this.length||this.groupSizes[o]===0)return a;for(var s=this.groupSizes[o],i=this.indexOfGroup(o),t=i+s,l=i;l<t;l++)a+="".concat(this.tag.getRule(l)).concat(oo);return a},n}(),vn=new Map,Rn=new Map,Sn=1,In=function(n){if(vn.has(n))return vn.get(n);for(;Rn.has(Sn);)Sn++;var o=Sn++;return vn.set(n,o),Rn.set(o,n),o},qe=function(n,o){Sn=o+1,vn.set(n,o),Rn.set(o,n)},Ke="style[".concat(J,"][").concat(zo,'="').concat(_n,'"]'),Ze=new RegExp("^".concat(J,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Je=function(n,o,a){for(var s,i=a.split(","),t=0,l=i.length;t<l;t++)(s=i[t])&&n.registerName(o,s)},Qe=function(n,o){for(var a,s=((a=o.textContent)!==null&&a!==void 0?a:"").split(oo),i=[],t=0,l=s.length;t<l;t++){var d=s[t].trim();if(d){var p=d.match(Ze);if(p){var I=0|parseInt(p[1],10),x=p[2];I!==0&&(qe(x,I),Je(n,x,p[3]),n.getTag().insertRules(I,i)),i.length=0}else i.push(d)}}},xo=function(n){for(var o=document.querySelectorAll(Ke),a=0,s=o.length;a<s;a++){var i=o[a];i&&i.getAttribute(J)!==Mo&&(Qe(n,i),i.parentNode&&i.parentNode.removeChild(i))}};function Xe(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Zo=function(n){var o=document.head,a=n||o,s=document.createElement("style"),i=function(d){var p=Array.from(d.querySelectorAll("style[".concat(J,"]")));return p[p.length-1]}(a),t=i!==void 0?i.nextSibling:null;s.setAttribute(J,Mo),s.setAttribute(zo,_n);var l=Xe();return l&&s.setAttribute("nonce",l),a.insertBefore(s,t),s},ns=function(){function n(o){this.element=Zo(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var s=document.styleSheets,i=0,t=s.length;i<t;i++){var l=s[i];if(l.ownerNode===a)return l}throw pn(17)}(this.element),this.length=0}return n.prototype.insertRule=function(o,a){try{return this.sheet.insertRule(a,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var a=this.sheet.cssRules[o];return a&&a.cssText?a.cssText:""},n}(),os=function(){function n(o){this.element=Zo(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,a){if(o<=this.length&&o>=0){var s=document.createTextNode(a);return this.element.insertBefore(s,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n}(),es=function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,a){return o<=this.length&&(this.rules.splice(o,0,a),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n}(),Io=En,ss={isServer:!En,useCSSOMInjection:!Te},Jo=function(){function n(o,a,s){o===void 0&&(o=Q),a===void 0&&(a={});var i=this;this.options=D(D({},ss),o),this.gs=a,this.names=new Map(s),this.server=!!o.isServer,!this.server&&En&&Io&&(Io=!1,xo(this)),so(this,function(){return function(t){for(var l=t.getTag(),d=l.length,p="",I=function(y){var f=function(b){return Rn.get(b)}(y);if(f===void 0)return"continue";var C=t.names.get(f),B=l.getGroup(y);if(C===void 0||!C.size||B.length===0)return"continue";var S="".concat(J,".g").concat(y,'[id="').concat(f,'"]'),T="";C!==void 0&&C.forEach(function(b){b.length>0&&(T+="".concat(b,","))}),p+="".concat(B).concat(S,'{content:"').concat(T,'"}').concat(oo)},x=0;x<d;x++)I(x);return p}(i)})}return n.registerId=function(o){return In(o)},n.prototype.rehydrate=function(){!this.server&&En&&xo(this)},n.prototype.reconstructWithOptions=function(o,a){return a===void 0&&(a=!0),new n(D(D({},this.options),o),this.gs,a&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=function(a){var s=a.useCSSOMInjection,i=a.target;return a.isServer?new es(i):s?new ns(i):new os(i)}(this.options),new Ve(o)));var o},n.prototype.hasNameForId=function(o,a){return this.names.has(o)&&this.names.get(o).has(a)},n.prototype.registerName=function(o,a){if(In(o),this.names.has(o))this.names.get(o).add(a);else{var s=new Set;s.add(a),this.names.set(o,s)}},n.prototype.insertRules=function(o,a,s){this.registerName(o,a),this.getTag().insertRules(In(o),s)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(In(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n}(),as=/&/g,cs=/^\s*\/\/.*$/gm;function Qo(n,o){return n.map(function(a){return a.type==="rule"&&(a.value="".concat(o," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(o," ")),a.props=a.props.map(function(s){return"".concat(o," ").concat(s)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=Qo(a.children,o)),a})}function rs(n){var o,a,s,i=Q,t=i.options,l=t===void 0?Q:t,d=i.plugins,p=d===void 0?Fn:d,I=function(f,C,B){return B.startsWith(a)&&B.endsWith(a)&&B.replaceAll(a,"").length>0?".".concat(o):f},x=p.slice();x.push(function(f){f.type===Tn&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(as,a).replace(s,I))}),l.prefix&&x.push(Re),x.push(be);var y=function(f,C,B,S){C===void 0&&(C=""),B===void 0&&(B=""),S===void 0&&(S="&"),o=S,a=C,s=new RegExp("\\".concat(a,"\\b"),"g");var T=f.replace(cs,""),b=ve(B||C?"".concat(B," ").concat(C," { ").concat(T," }"):T);l.namespace&&(b=Qo(b,l.namespace));var w=[];return An(b,Ae(x.concat(Ee(function(g){return w.push(g)})))),w};return y.hash=p.length?p.reduce(function(f,C){return C.name||pn(15),q(f,C.name)},Go).toString():"",y}var is=new Jo,Jn=rs(),Xo=tn.createContext({shouldForwardProp:void 0,styleSheet:is,stylis:Jn});Xo.Consumer;tn.createContext(void 0);function yo(){return nn.useContext(Xo)}var ts=function(){function n(o,a){var s=this;this.inject=function(i,t){t===void 0&&(t=Jn);var l=s.name+t.hash;i.hasNameForId(s.id,l)||i.insertRules(s.id,l,t(s.rules,l,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=a,so(this,function(){throw pn(12,String(s.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=Jn),this.name+o.hash},n}(),ls=function(n){return n>="A"&&n<="Z"};function fo(n){for(var o="",a=0;a<n.length;a++){var s=n[a];if(a===1&&s==="-"&&n[0]==="-")return n;ls(s)?o+="-"+s.toLowerCase():o+=s}return o.startsWith("ms-")?"-"+o:o}var ne=function(n){return n==null||n===!1||n===""},oe=function(n){var o,a,s=[];for(var i in n){var t=n[i];n.hasOwnProperty(i)&&!ne(t)&&(Array.isArray(t)&&t.isCss||X(t)?s.push("".concat(fo(i),":"),t,";"):ln(t)?s.push.apply(s,bn(bn(["".concat(i," {")],oe(t),!1),["}"],!1)):s.push("".concat(fo(i),": ").concat((o=i,(a=t)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||o in De||o.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return s};function U(n,o,a,s){if(ne(n))return[];if(eo(n))return[".".concat(n.styledComponentId)];if(X(n)){if(!X(t=n)||t.prototype&&t.prototype.isReactComponent||!o)return[n];var i=n(o);return U(i,o,a,s)}var t;return n instanceof ts?a?(n.inject(a,s),[n.getName(s)]):[n]:ln(n)?oe(n):Array.isArray(n)?Array.prototype.concat.apply(Fn,n.map(function(l){return U(l,o,a,s)})):[n.toString()]}function ps(n){for(var o=0;o<n.length;o+=1){var a=n[o];if(X(a)&&!eo(a))return!1}return!0}var ds=Uo(_n),ms=function(){function n(o,a,s){this.rules=o,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&ps(o),this.componentId=a,this.baseHash=q(ds,a),this.baseStyle=s,Jo.registerId(a)}return n.prototype.generateAndInjectStyles=function(o,a,s){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,a,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))i=H(i,this.staticRulesId);else{var t=uo(U(this.rules,o,a,s)),l=Kn(q(this.baseHash,t)>>>0);if(!a.hasNameForId(this.componentId,l)){var d=s(t,".".concat(l),void 0,this.componentId);a.insertRules(this.componentId,l,d)}i=H(i,l),this.staticRulesId=l}else{for(var p=q(this.baseHash,s.hash),I="",x=0;x<this.rules.length;x++){var y=this.rules[x];if(typeof y=="string")I+=y;else if(y){var f=uo(U(y,o,a,s));p=q(p,f+x),I+=f}}if(I){var C=Kn(p>>>0);a.hasNameForId(this.componentId,C)||a.insertRules(this.componentId,C,s(I,".".concat(C),void 0,this.componentId)),i=H(i,C)}}return i},n}(),ee=tn.createContext(void 0);ee.Consumer;var Un={};function hs(n,o,a){var s=eo(n),i=n,t=!Gn(n),l=o.attrs,d=l===void 0?Fn:l,p=o.componentId,I=p===void 0?function(v,E){var j=typeof v!="string"?"sc":lo(v);Un[j]=(Un[j]||0)+1;var h="".concat(j,"-").concat(Fe(_n+j+Un[j]));return E?"".concat(E,"-").concat(h):h}(o.displayName,o.parentComponentId):p,x=o.displayName,y=x===void 0?function(v){return Gn(v)?"styled.".concat(v):"Styled(".concat(Oe(v),")")}(n):x,f=o.displayName&&o.componentId?"".concat(lo(o.displayName),"-").concat(o.componentId):o.componentId||I,C=s&&i.attrs?i.attrs.concat(d).filter(Boolean):d,B=o.shouldForwardProp;if(s&&i.shouldForwardProp){var S=i.shouldForwardProp;if(o.shouldForwardProp){var T=o.shouldForwardProp;B=function(v,E){return S(v,E)&&T(v,E)}}else B=S}var b=new ms(a,f,s?i.componentStyle:void 0);function w(v,E){return function(j,h,Y){var dn=j.attrs,ce=j.componentStyle,re=j.defaultProps,ie=j.foldedComponentIds,te=j.styledComponentId,le=j.target,pe=tn.useContext(ee),de=yo(),$n=j.shouldForwardProp||de.shouldForwardProp,ao=Le(h,pe,re)||Q,F=function(hn,sn,Cn){for(var an,z=D(D({},sn),{className:void 0,theme:Cn}),Mn=0;Mn<hn.length;Mn+=1){var un=X(an=hn[Mn])?an(z):an;for(var W in un)z[W]=W==="className"?H(z[W],un[W]):W==="style"?D(D({},z[W]),un[W]):un[W]}return sn.className&&(z.className=H(z.className,sn.className)),z}(dn,h,ao),mn=F.as||le,en={};for(var $ in F)F[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&F.theme===ao||($==="forwardedAs"?en.as=F.forwardedAs:$n&&!$n($,mn)||(en[$]=F[$]));var co=function(hn,sn){var Cn=yo(),an=hn.generateAndInjectStyles(sn,Cn.styleSheet,Cn.stylis);return an}(ce,F),Wn=H(ie,te);return co&&(Wn+=" "+co),F.className&&(Wn+=" "+F.className),en[Gn(mn)&&!Ho.has(mn)?"class":"className"]=Wn,Y&&(en.ref=Y),nn.createElement(mn,en)}(g,v,E)}w.displayName=y;var g=tn.forwardRef(w);return g.attrs=C,g.componentStyle=b,g.displayName=y,g.shouldForwardProp=B,g.foldedComponentIds=s?H(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=f,g.target=s?i.target:n,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=s?function(E){for(var j=[],h=1;h<arguments.length;h++)j[h-1]=arguments[h];for(var Y=0,dn=j;Y<dn.length;Y++)Zn(E,dn[Y],!0);return E}({},i.defaultProps,v):v}}),so(g,function(){return".".concat(g.styledComponentId)}),t&&Ko(g,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function jo(n,o){for(var a=[n[0]],s=0,i=o.length;s<i;s+=1)a.push(o[s],n[s+1]);return a}var ko=function(n){return Object.assign(n,{isCss:!0})};function Cs(n){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];if(X(n)||ln(n))return ko(U(jo(Fn,bn([n],o,!0))));var s=n;return o.length===0&&s.length===1&&typeof s[0]=="string"?U(s):ko(U(jo(s,o)))}function Qn(n,o,a){if(a===void 0&&(a=Q),!o)throw pn(1,o);var s=function(i){for(var t=[],l=1;l<arguments.length;l++)t[l-1]=arguments[l];return n(o,a,Cs.apply(void 0,bn([i],t,!1)))};return s.attrs=function(i){return Qn(n,o,D(D({},a),{attrs:Array.prototype.concat(a.attrs,i).filter(Boolean)}))},s.withConfig=function(i){return Qn(n,o,D(D({},a),i))},s}var se=function(n){return Qn(hs,n)},ae=se;Ho.forEach(function(n){ae[n]=se(n)});const Ns={title:"Components/Icons",component:c,argTypes:{className:{control:"text"},prefixCls:{control:"text"},size:{control:"number"},color:{control:"color"},borderColor:{control:"color"},gradientColor:{control:"object"}},args:{prefixCls:"icons"},tags:["autodocs"]},r=ae.div`
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
`,On=(n,o)=>{me(n,a=>{a?o==null||o():console.log("copied failed")})},yn={args:{prefixCls:"icons",color:"#073387",borderColor:"#03163A",size:24},parameters:{docs:{description:{story:"The primary icons are used to represent the 1Money icons."}}},render:function(o){const a=nn.useRef(null),s=i=>{On(i,()=>{var t;return(t=a.current)==null?void 0:t.show({severity:"success",summary:"copy successfully",detail:"already copied"})})};return e.jsxs("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fill, minmax(100px, 1fr))"},children:[e.jsx(Dn,{ref:a}),e.jsxs(r,{onClick:()=>s("<Icons name='deposit' />"),children:[e.jsx(c,{...o,name:"deposit"}),e.jsx("span",{children:"Deposit"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='withdrawal' />"),children:[e.jsx(c,{...o,name:"withdrawal"}),e.jsx("span",{children:"Withdrawal"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='conversion' />"),children:[e.jsx(c,{...o,name:"conversion"}),e.jsx("span",{children:"Conversion"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='mintToken' />"),children:[e.jsx(c,{...o,name:"mintToken"}),e.jsx("span",{children:"MintToken"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='burnToken' />"),children:[e.jsx(c,{...o,name:"burnToken"}),e.jsx("span",{children:"BurnToken"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='accountLocked' />"),children:[e.jsx(c,{...o,name:"accountLocked"}),e.jsx("span",{children:"Account Locked"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='pending' />"),children:[e.jsx(c,{...o,name:"pending"}),e.jsx("span",{children:"Pending"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='success' />"),children:[e.jsx(c,{...o,name:"success"}),e.jsx("span",{children:"Success"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='fail' />"),children:[e.jsx(c,{...o,name:"fail"}),e.jsx("span",{children:"Fail"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='error' />"),children:[e.jsx(c,{...o,name:"error"}),e.jsx("span",{children:"Error"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='statusSuccess' />"),children:[e.jsx(c,{...o,name:"statusSuccess"}),e.jsx("span",{children:"Status Success"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='statusFail' />"),children:[e.jsx(c,{...o,name:"statusFail"}),e.jsx("span",{children:"Status Fail"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='dashboard' />"),children:[e.jsx(c,{...o,name:"dashboard"}),e.jsx("span",{children:"Dashboard"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='digitalAsset' />"),children:[e.jsx(c,{...o,name:"digitalAsset"}),e.jsx("span",{children:"Digital Asset"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='addressBook' />"),children:[e.jsx(c,{...o,name:"addressBook"}),e.jsx("span",{children:"Address Book"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='linkedBankAccounts' />"),children:[e.jsx(c,{...o,name:"linkedBankAccounts"}),e.jsx("span",{children:"Linked Bank Accounts"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='ach' />"),children:[e.jsx(c,{...o,name:"ach"}),e.jsx("span",{children:"ACH"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='wire' />"),children:[e.jsx(c,{...o,name:"wire"}),e.jsx("span",{children:"Wire"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='account' />"),children:[e.jsx(c,{...o,name:"account"}),e.jsx("span",{children:"Account"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='profile' />"),children:[e.jsx(c,{...o,name:"profile"}),e.jsx("span",{children:"Profile"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='security' />"),children:[e.jsx(c,{...o,name:"security"}),e.jsx("span",{children:"Security"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='logout' />"),children:[e.jsx(c,{...o,name:"logout"}),e.jsx("span",{children:"Logout"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='portfolio' />"),children:[e.jsx(c,{...o,name:"portfolio"}),e.jsx("span",{children:"Portfolio"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='home' />"),children:[e.jsx(c,{...o,name:"home"}),e.jsx("span",{children:"Home"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='convert' />"),children:[e.jsx(c,{...o,name:"convert"}),e.jsx("span",{children:"Convert"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='withdraw' />"),children:[e.jsx(c,{...o,name:"withdraw"}),e.jsx("span",{children:"Withdraw"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='send' />"),children:[e.jsx(c,{...o,name:"send"}),e.jsx("span",{children:"Send"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='menuDeposit' />"),children:[e.jsx(c,{...o,name:"menuDeposit"}),e.jsx("span",{children:"Menu Deposit"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='company' />"),children:[e.jsx(c,{...o,name:"company"}),e.jsx("span",{children:"Company"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='parties' />"),children:[e.jsx(c,{...o,name:"parties"}),e.jsx("span",{children:"Parties"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='transactions' />"),children:[e.jsx(c,{...o,name:"transactions"}),e.jsx("span",{children:"Transactions"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='fiat' />"),children:[e.jsx(c,{...o,name:"fiat"}),e.jsx("span",{children:"Fiat"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='sendCrypto' />"),children:[e.jsx(c,{...o,name:"sendCrypto"}),e.jsx("span",{children:"Send Crypto"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='arrowUp' />"),children:[e.jsx(c,{...o,name:"arrowUp"}),e.jsx("span",{children:"Arrow Up"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='arrowDown' />"),children:[e.jsx(c,{...o,name:"arrowDown"}),e.jsx("span",{children:"Arrow Down"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='arrowLeft' />"),children:[e.jsx(c,{...o,name:"arrowLeft"}),e.jsx("span",{children:"Arrow Left"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='arrowRight' />"),children:[e.jsx(c,{...o,name:"arrowRight"}),e.jsx("span",{children:"Arrow Right"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='add' />"),children:[e.jsx(c,{...o,name:"add"}),e.jsx("span",{children:"Add"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='minus' />"),children:[e.jsx(c,{...o,name:"minus"}),e.jsx("span",{children:"Minus"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='cross' />"),children:[e.jsx(c,{...o,name:"cross"}),e.jsx("span",{children:"Cross"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='more' />"),children:[e.jsx(c,{...o,name:"more"}),e.jsx("span",{children:"More"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='chevronDown' />"),children:[e.jsx(c,{...o,name:"chevronDown"}),e.jsx("span",{children:"Chevron Down"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='chevronUp' />"),children:[e.jsx(c,{...o,name:"chevronUp"}),e.jsx("span",{children:"Chevron Up"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='chevronLeft' />"),children:[e.jsx(c,{...o,name:"chevronLeft"}),e.jsx("span",{children:"Chevron Left"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='chevronRight' />"),children:[e.jsx(c,{...o,name:"chevronRight"}),e.jsx("span",{children:"Chevron Right"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='collapse' />"),children:[e.jsx(c,{...o,name:"collapse"}),e.jsx("span",{children:"Collapse"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='extend' />"),children:[e.jsx(c,{...o,name:"extend"}),e.jsx("span",{children:"Extend"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='spinner' />"),children:[e.jsx(c,{...o,name:"spinner"}),e.jsx("span",{children:"Spinner"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='check' />"),children:[e.jsx(c,{...o,name:"check"}),e.jsx("span",{children:"Check"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='remove' />"),children:[e.jsx(c,{...o,name:"remove"}),e.jsx("span",{children:"Remove"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='info' />"),children:[e.jsx(c,{...o,name:"info"}),e.jsx("span",{children:"Info"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='notifications' />"),children:[e.jsx(c,{...o,name:"notifications"}),e.jsx("span",{children:"Notifications"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='favorite' />"),children:[e.jsx(c,{...o,name:"favorite"}),e.jsx("span",{children:"Favorite"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='transferHistory' />"),children:[e.jsx(c,{...o,name:"transferHistory"}),e.jsx("span",{children:"Transfer History"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='support' />"),children:[e.jsx(c,{...o,name:"support"}),e.jsx("span",{children:"Support"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='help' />"),children:[e.jsx(c,{...o,name:"help"}),e.jsx("span",{children:"Help"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='language' />"),children:[e.jsx(c,{...o,name:"language"}),e.jsx("span",{children:"Language"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='share' />"),children:[e.jsx(c,{...o,name:"share"}),e.jsx("span",{children:"Share"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='products' />"),children:[e.jsx(c,{...o,name:"products"}),e.jsx("span",{children:"Products"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='hub' />"),children:[e.jsx(c,{...o,name:"hub"}),e.jsx("span",{children:"Hub"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='systemSecurity' />"),children:[e.jsx(c,{...o,name:"systemSecurity"}),e.jsx("span",{children:"System Security"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='fees' />"),children:[e.jsx(c,{...o,name:"fees"}),e.jsx("span",{children:"Fees"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='settings' />"),children:[e.jsx(c,{...o,name:"settings"}),e.jsx("span",{children:"Settings"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='id' />"),children:[e.jsx(c,{...o,name:"id"}),e.jsx("span",{children:"ID"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='viewBalance' />"),children:[e.jsx(c,{...o,name:"viewBalance"}),e.jsx("span",{children:"View Balance"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='hideBalance' />"),children:[e.jsx(c,{...o,name:"hideBalance"}),e.jsx("span",{children:"Hide Balance"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='privacy' />"),children:[e.jsx(c,{...o,name:"privacy"}),e.jsx("span",{children:"Privacy"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='card' />"),children:[e.jsx(c,{...o,name:"card"}),e.jsx("span",{children:"Card"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='coin' />"),children:[e.jsx(c,{...o,name:"coin"}),e.jsx("span",{children:"Coin"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='wallet' />"),children:[e.jsx(c,{...o,name:"wallet"}),e.jsx("span",{children:"Wallet"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='email' />"),children:[e.jsx(c,{...o,name:"email"}),e.jsx("span",{children:"Email"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='rewards' />"),children:[e.jsx(c,{...o,name:"rewards"}),e.jsx("span",{children:"Rewards"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='time' />"),children:[e.jsx(c,{...o,name:"time"}),e.jsx("span",{children:"Time"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='location' />"),children:[e.jsx(c,{...o,name:"location"}),e.jsx("span",{children:"Location"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='calendar' />"),children:[e.jsx(c,{...o,name:"calendar"}),e.jsx("span",{children:"Calendar"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='securityCheck' />"),children:[e.jsx(c,{...o,name:"securityCheck"}),e.jsx("span",{children:"Security Check"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='devices' />"),children:[e.jsx(c,{...o,name:"devices"}),e.jsx("span",{children:"Devices"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='images' />"),children:[e.jsx(c,{...o,name:"images"}),e.jsx("span",{children:"Images"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='bank' />"),children:[e.jsx(c,{...o,name:"bank"}),e.jsx("span",{children:"Bank"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='coins' />"),children:[e.jsx(c,{...o,name:"coins"}),e.jsx("span",{children:"Coins"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='earn' />"),children:[e.jsx(c,{...o,name:"earn"}),e.jsx("span",{children:"Earn"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='scan' />"),children:[e.jsx(c,{...o,name:"scan"}),e.jsx("span",{children:"Scan"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='search' />"),children:[e.jsx(c,{...o,name:"search"}),e.jsx("span",{children:"Search"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='maintenance' />"),children:[e.jsx(c,{...o,name:"maintenance"}),e.jsx("span",{children:"Maintenance"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='editFile' />"),children:[e.jsx(c,{...o,name:"editFile"}),e.jsx("span",{children:"Edit File"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='document' />"),children:[e.jsx(c,{...o,name:"document"}),e.jsx("span",{children:"Document"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='upload' />"),children:[e.jsx(c,{...o,name:"upload"}),e.jsx("span",{children:"Upload"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='gift' />"),children:[e.jsx(c,{...o,name:"gift"}),e.jsx("span",{children:"Gift"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='filter' />"),children:[e.jsx(c,{...o,name:"filter"}),e.jsx("span",{children:"Filter"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='expand' />"),children:[e.jsx(c,{...o,name:"expand"}),e.jsx("span",{children:"Expand"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='systemCollapse' />"),children:[e.jsx(c,{...o,name:"systemCollapse"}),e.jsx("span",{children:"System Collapse"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='refresh' />"),children:[e.jsx(c,{...o,name:"refresh"}),e.jsx("span",{children:"Refresh"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='transfer' />"),children:[e.jsx(c,{...o,name:"transfer"}),e.jsx("span",{children:"Transfer"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='link' />"),children:[e.jsx(c,{...o,name:"link"}),e.jsx("span",{children:"Link"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='save' />"),children:[e.jsx(c,{...o,name:"save"}),e.jsx("span",{children:"Save"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='like' />"),children:[e.jsx(c,{...o,name:"like"}),e.jsx("span",{children:"Like"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='dislike' />"),children:[e.jsx(c,{...o,name:"dislike"}),e.jsx("span",{children:"Dislike"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='copy' />"),children:[e.jsx(c,{...o,name:"copy"}),e.jsx("span",{children:"Copy"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='mobile' />"),children:[e.jsx(c,{...o,name:"mobile"}),e.jsx("span",{children:"Mobile"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='chat' />"),children:[e.jsx(c,{...o,name:"chat"}),e.jsx("span",{children:"Chat"})]})]})}},fn={args:{prefixCls:"icons",color:"#073387",logoColor:"#073387",wordColor:"#000000",networkColor:"#131313",size:32},parameters:{docs:{description:{story:"The logo icon is used to represent the 1Money logo."}}},render:function(o){const a=nn.useRef(null),s=i=>{On(i,()=>{var t;return(t=a.current)==null?void 0:t.show({severity:"success",summary:"copy successfully",detail:"already copied"})})};return e.jsxs("div",{style:{display:"grid",flexDirection:"row",gap:24,flexWrap:"wrap",gridTemplateColumns:"repeat(auto-fill, minmax(222px, 1fr))"},children:[e.jsx(Dn,{ref:a}),e.jsxs(r,{onClick:()=>s("<Icons name='logo' />"),children:[e.jsx(c,{...o,name:"logo"}),e.jsx("span",{children:"logo"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='logoWord' />"),children:[e.jsx(c,{...o,name:"logoWord",width:150,height:30}),e.jsx("span",{children:"logoWord"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='logoNetwork' />"),children:[e.jsx(c,{...o,name:"logoNetwork",width:150,height:30}),e.jsx("span",{children:"logoNetwork"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='logoWithWords' />"),children:[e.jsx(c,{...o,name:"logoWithWords",width:180,height:36}),e.jsx("span",{children:"logoWithWords"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='logoWithWords' />"),children:[e.jsx(c,{...o,name:"logoWithWords",width:320,height:36,networkLogo:!0}),e.jsx("span",{children:"logoWithWords"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='logoBg' />"),children:[e.jsx(c,{...o,name:"logoBg",width:56,height:57}),e.jsx("span",{children:"logoBg"})]})]})}},jn={args:{prefixCls:"icons",color:"#B31010",borderColor:"#1D1D1F",size:50,illustrations:!0,gradientColor:["#F4C600","white"]},render:function(o){const a=nn.useRef(null),s=i=>{On(i,()=>{var t;return(t=a.current)==null?void 0:t.show({severity:"success",summary:"copy successfully",detail:"already copied"})})};return e.jsxs("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))"},children:[e.jsx(Dn,{ref:a}),e.jsxs(r,{onClick:()=>s("<Icons name='illusChecked' />"),children:[e.jsx(c,{...o,name:"illusChecked"}),e.jsx("span",{children:"illusChecked"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='illusEmailError' />"),children:[e.jsx(c,{...o,name:"illusEmailError"}),e.jsx("span",{children:"illusEmailError"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='illusLinkExpired' />"),children:[e.jsx(c,{...o,name:"illusLinkExpired"}),e.jsx("span",{children:"Link Expired"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='illus2FA' />"),children:[e.jsx(c,{...o,name:"illus2FA"}),e.jsx("span",{children:"illus2FA"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='illusLocked' />"),children:[e.jsx(c,{...o,name:"illusLocked"}),e.jsx("span",{children:"illusLocked"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='illusError' />"),children:[e.jsx(c,{...o,name:"illusError"}),e.jsx("span",{children:"illusError"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='illusRegoinNotSupported' />"),children:[e.jsx(c,{...o,name:"illusRegoinNotSupported"}),e.jsx("span",{children:"illusRegoinNotSupported"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='illusIDCard' />"),children:[e.jsx(c,{...o,name:"illusIDCard"}),e.jsx("span",{children:"illusIDCard"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='illusVerification' />"),children:[e.jsx(c,{...o,name:"illusVerification"}),e.jsx("span",{children:"illusVerification"})]})]})}},kn={name:"Old Icons (Deprecated)",args:{prefixCls:"icons",color:"#073387",borderColor:"#131313"},render:function(o){const a=nn.useRef(null),s=i=>{On(i,()=>{var t;return(t=a.current)==null?void 0:t.show({severity:"success",summary:"copy successfully",detail:"already copied"})})};return e.jsxs("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))"},children:[e.jsx(Dn,{ref:a}),e.jsxs(r,{onClick:()=>s("<Icons name='burger' />"),children:[e.jsx(c,{...o,name:"burger"}),e.jsx("span",{children:"burger"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='return' />"),children:[e.jsx(c,{...o,name:"return"}),e.jsx("span",{children:"return"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='close' />"),children:[e.jsx(c,{...o,name:"close"}),e.jsx("span",{children:"close"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='arrow' />"),children:[e.jsx(c,{...o,name:"arrow"}),e.jsx("span",{children:"arrow"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='circle' />"),children:[e.jsx(c,{...o,name:"circle"}),e.jsx("span",{children:"circle"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='times' />"),children:[e.jsx(c,{...o,name:"times"}),e.jsx("span",{children:"times"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='doubleCheck' />"),children:[e.jsx(c,{...o,name:"doubleCheck"}),e.jsx("span",{children:"doubleCheck"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='checkCircle' />"),children:[e.jsx(c,{...o,name:"checkCircle"}),e.jsx("span",{children:"checkCircle"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='timesCircle' />"),children:[e.jsx(c,{...o,name:"timesCircle"}),e.jsx("span",{children:"timesCircle"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='content' />"),children:[e.jsx(c,{...o,name:"content"}),e.jsx("span",{children:"Content"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='locked' />"),children:[e.jsx(c,{...o,name:"locked"}),e.jsx("span",{children:"locked"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='exclamation' />"),children:[e.jsx(c,{...o,name:"exclamation"}),e.jsx("span",{children:"exclamation"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='arrowLink' />"),children:[e.jsx(c,{...o,name:"arrowLink"}),e.jsx("span",{children:"arrowLink"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='union' />"),children:[e.jsx(c,{...o,name:"union"}),e.jsx("span",{children:"union"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='eyeClose' />"),children:[e.jsx(c,{...o,name:"eyeClose"}),e.jsx("span",{children:"eyeClose"})]}),e.jsxs(r,{onClick:()=>s("<Icons name='eyeOn' />"),children:[e.jsx(c,{...o,name:"eyeOn"}),e.jsx("span",{children:"eyeOn"})]})]})}};var go,Bo,wo;yn.parameters={...yn.parameters,docs:{...(go=yn.parameters)==null?void 0:go.docs,source:{originalSource:`{
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
        detail: \`already copied\`
      }));
    };
    return <div style={{
      display: 'grid',
      gap: 24,
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))'
    }}>
      <Toast ref={toast} />
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
        detail: \`already copied\`
      }));
    };
    return <div style={{
      display: 'grid',
      flexDirection: 'row',
      gap: 24,
      flexWrap: 'wrap',
      gridTemplateColumns: 'repeat(auto-fill, minmax(222px, 1fr))'
    }}>
      <Toast ref={toast} />
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
    illustrations: true,
    gradientColor: ['#F4C600', 'white']
  },
  render: function Render(args) {
    const toast = useRef<ToastClass>(null);
    const handleCopy = (el: string) => {
      copy(el, () => toast.current?.show({
        severity: 'success',
        summary: \`copy successfully\`,
        detail: \`already copied\`
      }));
    };
    return <div style={{
      display: 'grid',
      gap: 24,
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
    }}>
      <Toast ref={toast} />
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
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusRegoinNotSupported' />")}>
        <Icons {...args} name='illusRegoinNotSupported' />
        <span>illusRegoinNotSupported</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusIDCard' />")}>
        <Icons {...args} name='illusIDCard' />
        <span>illusIDCard</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => handleCopy("<Icons name='illusVerification' />")}>
        <Icons {...args} name='illusVerification' />
        <span>illusVerification</span>
      </CopyIconBox>
    </div>;
  }
}`,...(Ro=(Eo=jn.parameters)==null?void 0:Eo.docs)==null?void 0:Ro.source}}};var Do,To,Lo;kn.parameters={...kn.parameters,docs:{...(Do=kn.parameters)==null?void 0:Do.docs,source:{originalSource:`{
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
        detail: \`already copied\`
      }));
    };
    return <div style={{
      display: 'grid',
      gap: 24,
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
    }}>
      <Toast ref={toast} />
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
}`,...(Lo=(To=kn.parameters)==null?void 0:To.docs)==null?void 0:Lo.source}}};const _s=["PrimaryIcons","Logo","Illustrations","OldIcons"];export{jn as Illustrations,fn as Logo,kn as OldIcons,yn as PrimaryIcons,_s as __namedExportsOrder,Ns as default};
