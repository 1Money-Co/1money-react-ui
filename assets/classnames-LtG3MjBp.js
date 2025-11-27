import{g as f}from"./index-CP2yOfOm.js";var i={exports:{}};/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(e){(function(){var o={}.hasOwnProperty;function s(){for(var a=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if(r==="string"||r==="number")a.push(n);else if(Array.isArray(n)&&n.length){var c=s.apply(null,n);c&&a.push(c)}else if(r==="object")for(var l in n)o.call(n,l)&&n[l]&&a.push(l)}}return a.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s})()})(i);var m=i.exports;const u=f(m),p=e=>o=>(s,a)=>{let t=e;return o&&(t=e+"-"+o),u({[`${t}`]:!!t&&!s,[`${t}-${s}`]:!!t&&!!s},a)},h=(...e)=>e.filter(Boolean).join(" "),j=p("om-react-ui");export{j as c,h as j};
