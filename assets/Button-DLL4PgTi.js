import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-Ca8FO3x4.js";import{B as u}from"./button.esm-CKaW3228.js";import{S as d}from"./Spinner-mwCuaLRH.js";import{c as y}from"./classnames-B-6LArsQ.js";const i=l=>{const{children:t,className:s="",prefixCls:o="button",active:m=!1,severity:a="primary",size:r="large",...p}=l,e=y(o);return n.jsx(u,{...p,severity:a,loadingIcon:n.jsx(d,{strokeWidth:"5",className:e("loading-icon",[e(`loading-icon-${a}`),e(`loading-icon-${r}`)].join(" "))}),className:e(void 0,[e(a),e(r),m?e(`${a}-active`):"",s].join(" ")),children:t})};c.memo(i);i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{prefixCls:{required:!1,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},severity:{required:!1,tsType:{name:"union",raw:`| PrimeButtonProps['severity']
| 'primary'
| 'secondary'
| 'grey'
| 'black'
| 'white'
| 'primary-landing'
| 'secondary-landing'
| 'primary-outline'
| 'secondary-outline'`,elements:[{name:"PrimeButtonProps['severity']",raw:"PrimeButtonProps['severity']"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'grey'"},{name:"literal",value:"'black'"},{name:"literal",value:"'white'"},{name:"literal",value:"'primary-landing'"},{name:"literal",value:"'secondary-landing'"},{name:"literal",value:"'primary-outline'"},{name:"literal",value:"'secondary-outline'"}]},description:""}},composes:["Omit"]};export{i as B};
