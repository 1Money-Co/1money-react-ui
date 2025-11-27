import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-CP2yOfOm.js";import{B as p}from"./button.esm-P8t-Ut6N.js";import{S as y}from"./Spinner-CEQHadij.js";import{c as v,j as l}from"./classnames-LtG3MjBp.js";const i=t=>{const{children:s,className:o="",prefixCls:m="button",active:u=!1,severity:a="primary",size:n="large",...d}=t,e=v(m);return r.jsx(p,{...d,severity:a,loadingIcon:r.jsx(y,{strokeWidth:"5",className:e("loading-icon",l(e(`loading-icon-${a}`),e(`loading-icon-${n}`)))}),className:e(void 0,l(e(a),e(n),u&&e(`${a}-active`),o)),children:s})};c.memo(i);i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"HTMLButtonElement | null",elements:[{name:"HTMLButtonElement"},{name:"null"}]}],raw:"RefObject<HTMLButtonElement | null>"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},severity:{required:!1,tsType:{name:"union",raw:`| PrimeButtonProps['severity']
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
| 'secondary-outline'`,elements:[{name:"PrimeButtonProps['severity']",raw:"PrimeButtonProps['severity']"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'grey'"},{name:"literal",value:"'black'"},{name:"literal",value:"'white'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'danger-light'"},{name:"literal",value:"'primary-landing'"},{name:"literal",value:"'secondary-landing'"},{name:"literal",value:"'primary-outline'"},{name:"literal",value:"'secondary-outline'"}]},description:""}},composes:["Omit"]};export{i as B};
