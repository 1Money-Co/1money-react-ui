import{g as i}from"./index-RYns6xqu.js";var u={exports:{}};/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(n){(function(){var r={}.hasOwnProperty;function s(){for(var a=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var o=typeof e;if(o==="string"||o==="number")a.push(e);else if(Array.isArray(e)&&e.length){var c=s.apply(null,e);c&&a.push(c)}else if(o==="object")for(var l in e)r.call(e,l)&&e[l]&&a.push(l)}}return a.join(" ")}n.exports?(s.default=s,n.exports=s):window.classNames=s})()})(u);var f=u.exports;const m=i(f),p=n=>r=>(s,a)=>{let t=n;return r&&(t=n+"-"+r),m({[`${t}`]:!!t&&!s,[`${t}-${s}`]:!!t&&!!s},a)},h=p("usd1-react-ui");export{h as c};
