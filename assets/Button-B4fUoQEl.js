import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-CP2yOfOm.js";import{B as c}from"./button.esm-P8t-Ut6N.js";import{S as p}from"./Spinner-OXWNGFtm.js";import{c as y}from"./classnames-lRq3rz0l.js";const l=i=>{const{children:t,className:s="",prefixCls:o="button",active:m=!1,severity:a="primary",size:n="large",...u}=i,e=y(o);return r.jsx(c,{...u,severity:a,loadingIcon:r.jsx(p,{strokeWidth:"5",className:e("loading-icon",[e(`loading-icon-${a}`),e(`loading-icon-${n}`)].join(" "))}),className:e(void 0,[e(a),e(n),m?e(`${a}-active`):"",s].join(" ")),children:t})};d.memo(l);l.__docgenInfo={description:"",methods:[],displayName:"Button",props:{ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"HTMLButtonElement | null",elements:[{name:"HTMLButtonElement"},{name:"null"}]}],raw:"RefObject<HTMLButtonElement | null>"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},severity:{required:!1,tsType:{name:"union",raw:`| PrimeButtonProps['severity']
| 'primary'
| 'secondary'
| 'grey'
| 'black'
| 'white'
| 'danger'
| 'danger-light'
| 'primary-landing'
| 'secondary-landing'
| 'primary-outline'
| 'secondary-outline'`,elements:[{name:"PrimeButtonProps['severity']",raw:"PrimeButtonProps['severity']"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'grey'"},{name:"literal",value:"'black'"},{name:"literal",value:"'white'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'danger-light'"},{name:"literal",value:"'primary-landing'"},{name:"literal",value:"'secondary-landing'"},{name:"literal",value:"'primary-outline'"},{name:"literal",value:"'secondary-outline'"}]},description:""}},composes:["Omit"]};export{l as B};
