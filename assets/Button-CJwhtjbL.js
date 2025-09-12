import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-CP2yOfOm.js";import{B as p}from"./button.esm-HBeH8jE_.js";import{S as d}from"./Spinner-BctWPXJz.js";import{c as y}from"./classnames-lRq3rz0l.js";const i=l=>{const{children:t,className:s="",prefixCls:o="button",active:m=!1,severity:a="primary",size:n="large",...u}=l,e=y(o);return r.jsx(p,{...u,severity:a,loadingIcon:r.jsx(d,{strokeWidth:"5",className:e("loading-icon",[e(`loading-icon-${a}`),e(`loading-icon-${n}`)].join(" "))}),className:e(void 0,[e(a),e(n),m?e(`${a}-active`):"",s].join(" ")),children:t})};c.memo(i);i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"HTMLButtonElement | null",elements:[{name:"HTMLButtonElement"},{name:"null"}]}],raw:"RefObject<HTMLButtonElement | null>"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},severity:{required:!1,tsType:{name:"union",raw:`| PrimeButtonProps['severity']
| 'primary'
| 'secondary'
| 'grey'
| 'black'
| 'white'
| 'danger'
| 'primary-landing'
| 'secondary-landing'
| 'primary-outline'
| 'secondary-outline'`,elements:[{name:"PrimeButtonProps['severity']",raw:"PrimeButtonProps['severity']"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'grey'"},{name:"literal",value:"'black'"},{name:"literal",value:"'white'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'primary-landing'"},{name:"literal",value:"'secondary-landing'"},{name:"literal",value:"'primary-outline'"},{name:"literal",value:"'secondary-outline'"}]},description:""}},composes:["Omit"]};export{i as B};
