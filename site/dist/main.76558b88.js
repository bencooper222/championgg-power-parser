parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({10:[function(require,module,exports) {
module.exports={PLAY_PERCENT:"p",WIN_PERCENT:"w",POWER:"r",NAME:"n"};
},{}],6:[function(require,module,exports) {
"use strict";var e=require("../../defaultKeyNames.json"),r=n(e);function n(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r.default=e,r}var t=function(e,r){r||(r=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(r);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null};function a(e,r){return parseFloat(parseFloat(e).toFixed(r))}var l=JSON.parse(t("data")),o=document.getElementById("champs"),i=!0,u=!1,c=void 0;try{for(var s,f=l[Symbol.iterator]();!(i=(s=f.next()).done);i=!0){var d=s.value,p=o.insertRow(-1);p.insertCell(-1).innerHTML=d[r.NAME],p.insertCell(-1).innerHTML=a(d[r.WIN_PERCENT],2)+"%",p.insertCell(-1).innerHTML=a(d[r.PLAY_PERCENT],2)+"%",p.insertCell(-1).innerHTML=a(d[r.POWER],2)}}catch(e){u=!0,c=e}finally{try{!i&&f.return&&f.return()}finally{if(u)throw c}}
},{"../../defaultKeyNames.json":10}]},{},[6], null)
//# sourceMappingURL=/main.76558b88.map