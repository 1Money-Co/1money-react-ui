import{r as h}from"./index-RYns6xqu.js";import{useMDXComponents as p}from"./index-CcnH5Kt0.js";import{ai as u}from"./index-BFExb6tV.js";import"./iframe-CwnC5WPr.js";import"../sb-preview/runtime.js";import"./index-D16Yfzz8.js";import"./index-D-8MO0q_.js";import"./index-B23dhaOI.js";import"./index-DrFu-skq.js";var d={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=h,j=Symbol.for("react.element"),f=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,_=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function m(n,e,a){var t,o={},s=null,c=null;a!==void 0&&(s=""+a),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(c=e.ref);for(t in e)y.call(e,t)&&!g.hasOwnProperty(t)&&(o[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:j,type:n,key:s,ref:c,props:o,_owner:_.current}}i.Fragment=f;i.jsx=m;i.jsxs=m;d.exports=i;var r=d.exports;function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(u,{title:"Get Started"}),`
`,r.jsx(e.h1,{id:"1moneyreact-ui",children:"@1money/react-ui"}),`
`,r.jsx(e.h2,{id:"quick-start",children:"Quick start"}),`
`,r.jsx(e.h3,{id:"install",children:"Install"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-shell",children:`npm i -S @1money/react-ui
# or
yarn add @1money/react-ui
# or
pnpm i -S @1money/react-ui
`})}),`
`,r.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-js",children:`import UI from '@1money/react-ui';
`})}),`
`,r.jsx(e.h2,{id:"dev",children:"Dev"}),`
`,r.jsx(e.p,{children:"For debugging or maintenance, you can clone the whole git repository and run the project:"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-shell",children:`git clone --depth 1

pnpm i && pnpm dev
`})}),`
`,r.jsx(e.p,{children:r.jsx(e.a,{href:"./DEV.md",children:"More Detials"})})]})}function N(n={}){const{wrapper:e}={...p(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(l,{...n})}):l(n)}export{N as default};
