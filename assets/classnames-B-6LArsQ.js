import{g as m}from"./index-Ca8FO3x4.js";var i={exports:{}};/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(n){(function(){var o={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if(r==="string"||r==="number")e.push(a);else if(Array.isArray(a)&&a.length){var c=s.apply(null,a);c&&e.push(c)}else if(r==="object")for(var l in a)o.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}n.exports?(s.default=s,n.exports=s):window.classNames=s})()})(i);var u=i.exports;const f=m(u),p=n=>o=>(s,e)=>{let t=n;return o&&(t=n+"-"+o),f({[`${t}`]:!!t&&!s,[`${t}-${s}`]:!!t&&!!s},e)},h=p("om-react-ui");export{f as a,h as c};
