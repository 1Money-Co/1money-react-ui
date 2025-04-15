import{g as m}from"./index-CP2yOfOm.js";var i={exports:{}};/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(n){(function(){var o={}.hasOwnProperty;function s(){for(var a=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var r=typeof e;if(r==="string"||r==="number")a.push(e);else if(Array.isArray(e)&&e.length){var c=s.apply(null,e);c&&a.push(c)}else if(r==="object")for(var l in e)o.call(e,l)&&e[l]&&a.push(l)}}return a.join(" ")}n.exports?(s.default=s,n.exports=s):window.classNames=s})()})(i);var u=i.exports;const f=m(u),p=n=>o=>(s,a)=>{let t=n;return o&&(t=n+"-"+o),f({[`${t}`]:!!t&&!s,[`${t}-${s}`]:!!t&&!!s},a)},h=p("om-react-ui");export{h as c};
