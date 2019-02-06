parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({5:[function(require,module,exports) {
module.exports={PLAY_PERCENT:"p",WIN_PERCENT:"w",POWER:"r",NAME:"n"};
},{}],2:[function(require,module,exports) {
"use strict";var e=require("../../defaultKeyNames.json"),n=r(e);function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n.default=e,n}var o=function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?Number(e.replace("%","")):Number(e)},t=function(e){return Math.round(100*e)/100},a=function(e,n){return n*(e-50)*10},l=function(e){console.log("Rank | Name | Win% | Play% | Power");for(var r=0;r<e.length;r++)e[r][n.WIN_PERCENT]=t(e[r][n.WIN_PERCENT]).toString(),e[r][n.PLAY_PERCENT]=t(e[r][n.PLAY_PERCENT]).toString(),e[r][n.POWER]=t(e[r][n.POWER]).toString(),console.log(r+1+" | "+e[r][n.NAME]+" | "+e[r][n.WIN_PERCENT]+"% | "+e[r][n.PLAY_PERCENT]+"% | "+e[r][n.POWER]);console.log("Rank | Name | Win% | Play% | Power")},u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://power.benc.me";window.open(n+"/?data="+JSON.stringify(e.slice(0,9)),"_blank")};module.exports={defaultKeyNames:n,parsePercent:o,roundToDecimal:t,calculatePower:a,displayResults:l,openWebpage:u};
},{"../../defaultKeyNames.json":5}],5:[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],r=200,n="Expected a function",e="__lodash_hash_undefined__",o=1,u=2,i=1/0,a=9007199254740991,c="[object Arguments]",f="[object Array]",l="[object Boolean]",s="[object Date]",p="[object Error]",_="[object Function]",v="[object GeneratorFunction]",h="[object Map]",y="[object Number]",d="[object Object]",b="[object Promise]",g="[object RegExp]",j="[object Set]",w="[object String]",m="[object Symbol]",O="[object WeakMap]",A="[object ArrayBuffer]",k="[object DataView]",S="[object Float32Array]",x="[object Float64Array]",$="[object Int8Array]",E="[object Int16Array]",F="[object Int32Array]",I="[object Uint8Array]",P="[object Uint8ClampedArray]",T="[object Uint16Array]",U="[object Uint32Array]",z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/,L=/^\./,M=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,B=/[\\^$.*+?()[\]{}|]/g,D=/\\(\\)?/g,R=/^\[object .+?Constructor\]$/,V=/^(?:0|[1-9]\d*)$/,W={};W[S]=W[x]=W[$]=W[E]=W[F]=W[I]=W[P]=W[T]=W[U]=!0,W[c]=W[f]=W[A]=W[l]=W[k]=W[s]=W[p]=W[_]=W[h]=W[y]=W[d]=W[g]=W[j]=W[w]=W[O]=!1;var G="object"==typeof t&&t&&t.Object===Object&&t,N="object"==typeof self&&self&&self.Object===Object&&self,q=G||N||Function("return this")(),H="object"==typeof exports&&exports&&!exports.nodeType&&exports,J=H&&"object"==typeof module&&module&&!module.nodeType&&module,K=J&&J.exports===H,Q=K&&G.process,X=function(){try{return Q&&Q.binding("util")}catch(t){}}(),Y=X&&X.isTypedArray;function Z(t,r,n,e){var o=-1,u=t?t.length:0;for(e&&u&&(n=t[++o]);++o<u;)n=r(n,t[o],o,t);return n}function tt(t,r){for(var n=-1,e=t?t.length:0;++n<e;)if(r(t[n],n,t))return!0;return!1}function rt(t){return function(r){return null==r?void 0:r[t]}}function nt(t,r,n,e,o){return o(t,function(t,o,u){n=e?(e=!1,t):r(n,t,o,u)}),n}function et(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}function ot(t){return function(r){return t(r)}}function ut(t,r){return null==t?void 0:t[r]}function it(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function at(t){var r=-1,n=Array(t.size);return t.forEach(function(t,e){n[++r]=[e,t]}),n}function ct(t,r){return function(n){return t(r(n))}}function ft(t){var r=-1,n=Array(t.size);return t.forEach(function(t){n[++r]=t}),n}var lt=Array.prototype,st=Function.prototype,pt=Object.prototype,_t=q["__core-js_shared__"],vt=function(){var t=/[^.]+$/.exec(_t&&_t.keys&&_t.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ht=st.toString,yt=pt.hasOwnProperty,dt=pt.toString,bt=RegExp("^"+ht.call(yt).replace(B,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),gt=q.Symbol,jt=q.Uint8Array,wt=pt.propertyIsEnumerable,mt=lt.splice,Ot=ct(Object.keys,Object),At=Mr(q,"DataView"),kt=Mr(q,"Map"),St=Mr(q,"Promise"),xt=Mr(q,"Set"),$t=Mr(q,"WeakMap"),Et=Mr(Object,"create"),Ft=Qr(At),It=Qr(kt),Pt=Qr(St),Tt=Qr(xt),Ut=Qr($t),zt=gt?gt.prototype:void 0,Ct=zt?zt.valueOf:void 0,Lt=zt?zt.toString:void 0;function Mt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function Bt(){this.__data__=Et?Et(null):{}}function Dt(t){return this.has(t)&&delete this.__data__[t]}function Rt(t){var r=this.__data__;if(Et){var n=r[t];return n===e?void 0:n}return yt.call(r,t)?r[t]:void 0}function Vt(t){var r=this.__data__;return Et?void 0!==r[t]:yt.call(r,t)}function Wt(t,r){return this.__data__[t]=Et&&void 0===r?e:r,this}function Gt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function Nt(){this.__data__=[]}function qt(t){var r=this.__data__,n=pr(r,t);return!(n<0)&&(n==r.length-1?r.pop():mt.call(r,n,1),!0)}function Ht(t){var r=this.__data__,n=pr(r,t);return n<0?void 0:r[n][1]}function Jt(t){return pr(this.__data__,t)>-1}function Kt(t,r){var n=this.__data__,e=pr(n,t);return e<0?n.push([t,r]):n[e][1]=r,this}function Qt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function Xt(){this.__data__={hash:new Mt,map:new(kt||Gt),string:new Mt}}function Yt(t){return Cr(this,t).delete(t)}function Zt(t){return Cr(this,t).get(t)}function tr(t){return Cr(this,t).has(t)}function rr(t,r){return Cr(this,t).set(t,r),this}function nr(t){var r=-1,n=t?t.length:0;for(this.__data__=new Qt;++r<n;)this.add(t[r])}function er(t){return this.__data__.set(t,e),this}function or(t){return this.__data__.has(t)}function ur(t){this.__data__=new Gt(t)}function ir(){this.__data__=new Gt}function ar(t){return this.__data__.delete(t)}function cr(t){return this.__data__.get(t)}function fr(t){return this.__data__.has(t)}function lr(t,n){var e=this.__data__;if(e instanceof Gt){var o=e.__data__;if(!kt||o.length<r-1)return o.push([t,n]),this;e=this.__data__=new Qt(o)}return e.set(t,n),this}function sr(t,r){var n=rn(t)||tn(t)?et(t.length,String):[],e=n.length,o=!!e;for(var u in t)!r&&!yt.call(t,u)||o&&("length"==u||Rr(u,e))||n.push(u);return n}function pr(t,r){for(var n=t.length;n--;)if(Zr(t[n][0],r))return n;return-1}Mt.prototype.clear=Bt,Mt.prototype.delete=Dt,Mt.prototype.get=Rt,Mt.prototype.has=Vt,Mt.prototype.set=Wt,Gt.prototype.clear=Nt,Gt.prototype.delete=qt,Gt.prototype.get=Ht,Gt.prototype.has=Jt,Gt.prototype.set=Kt,Qt.prototype.clear=Xt,Qt.prototype.delete=Yt,Qt.prototype.get=Zt,Qt.prototype.has=tr,Qt.prototype.set=rr,nr.prototype.add=nr.prototype.push=er,nr.prototype.has=or,ur.prototype.clear=ir,ur.prototype.delete=ar,ur.prototype.get=cr,ur.prototype.has=fr,ur.prototype.set=lr;var _r=Ir(hr),vr=Pr();function hr(t,r){return t&&vr(t,r,vn)}function yr(t,r){for(var n=0,e=(r=Vr(r,t)?[r]:Fr(r)).length;null!=t&&n<e;)t=t[Kr(r[n++])];return n&&n==e?t:void 0}function dr(t){return dt.call(t)}function br(t,r){return null!=t&&r in Object(t)}function gr(t,r,n,e,o){return t===r||(null==t||null==r||!an(t)&&!cn(r)?t!=t&&r!=r:jr(t,r,gr,n,e,o))}function jr(t,r,n,e,o,i){var a=rn(t),l=rn(r),s=f,p=f;a||(s=(s=Br(t))==c?d:s),l||(p=(p=Br(r))==c?d:p);var _=s==d&&!it(t),v=p==d&&!it(r),h=s==p;if(h&&!_)return i||(i=new ur),a||ln(t)?Tr(t,r,n,e,o,i):Ur(t,r,s,n,e,o,i);if(!(o&u)){var y=_&&yt.call(t,"__wrapped__"),b=v&&yt.call(r,"__wrapped__");if(y||b){var g=y?t.value():t,j=b?r.value():r;return i||(i=new ur),n(g,j,e,o,i)}}return!!h&&(i||(i=new ur),zr(t,r,n,e,o,i))}function wr(t,r,n,e){var i=n.length,a=i,c=!e;if(null==t)return!a;for(t=Object(t);i--;){var f=n[i];if(c&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return!1}for(;++i<a;){var l=(f=n[i])[0],s=t[l],p=f[1];if(c&&f[2]){if(void 0===s&&!(l in t))return!1}else{var _=new ur;if(e)var v=e(s,p,l,t,r,_);if(!(void 0===v?gr(p,s,e,o|u,_):v))return!1}}return!0}function mr(t){return!(!an(t)||Gr(t))&&(on(t)||it(t)?bt:R).test(Qr(t))}function Or(t){return cn(t)&&un(t.length)&&!!W[dt.call(t)]}function Ar(t){return"function"==typeof t?t:null==t?hn:"object"==typeof t?rn(t)?xr(t[0],t[1]):Sr(t):yn(t)}function kr(t){if(!Nr(t))return Ot(t);var r=[];for(var n in Object(t))yt.call(t,n)&&"constructor"!=n&&r.push(n);return r}function Sr(t){var r=Lr(t);return 1==r.length&&r[0][2]?Hr(r[0][0],r[0][1]):function(n){return n===t||wr(n,t,r)}}function xr(t,r){return Vr(t)&&qr(r)?Hr(Kr(t),r):function(n){var e=pn(n,t);return void 0===e&&e===r?_n(n,t):gr(r,e,void 0,o|u)}}function $r(t){return function(r){return yr(r,t)}}function Er(t){if("string"==typeof t)return t;if(fn(t))return Lt?Lt.call(t):"";var r=t+"";return"0"==r&&1/t==-i?"-0":r}function Fr(t){return rn(t)?t:Jr(t)}function Ir(t,r){return function(n,e){if(null==n)return n;if(!nn(n))return t(n,e);for(var o=n.length,u=r?o:-1,i=Object(n);(r?u--:++u<o)&&!1!==e(i[u],u,i););return n}}function Pr(t){return function(r,n,e){for(var o=-1,u=Object(r),i=e(r),a=i.length;a--;){var c=i[t?a:++o];if(!1===n(u[c],c,u))break}return r}}function Tr(t,r,n,e,i,a){var c=i&u,f=t.length,l=r.length;if(f!=l&&!(c&&l>f))return!1;var s=a.get(t);if(s&&a.get(r))return s==r;var p=-1,_=!0,v=i&o?new nr:void 0;for(a.set(t,r),a.set(r,t);++p<f;){var h=t[p],y=r[p];if(e)var d=c?e(y,h,p,r,t,a):e(h,y,p,t,r,a);if(void 0!==d){if(d)continue;_=!1;break}if(v){if(!tt(r,function(t,r){if(!v.has(r)&&(h===t||n(h,t,e,i,a)))return v.add(r)})){_=!1;break}}else if(h!==y&&!n(h,y,e,i,a)){_=!1;break}}return a.delete(t),a.delete(r),_}function Ur(t,r,n,e,i,a,c){switch(n){case k:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case A:return!(t.byteLength!=r.byteLength||!e(new jt(t),new jt(r)));case l:case s:case y:return Zr(+t,+r);case p:return t.name==r.name&&t.message==r.message;case g:case w:return t==r+"";case h:var f=at;case j:var _=a&u;if(f||(f=ft),t.size!=r.size&&!_)return!1;var v=c.get(t);if(v)return v==r;a|=o,c.set(t,r);var d=Tr(f(t),f(r),e,i,a,c);return c.delete(t),d;case m:if(Ct)return Ct.call(t)==Ct.call(r)}return!1}function zr(t,r,n,e,o,i){var a=o&u,c=vn(t),f=c.length;if(f!=vn(r).length&&!a)return!1;for(var l=f;l--;){var s=c[l];if(!(a?s in r:yt.call(r,s)))return!1}var p=i.get(t);if(p&&i.get(r))return p==r;var _=!0;i.set(t,r),i.set(r,t);for(var v=a;++l<f;){var h=t[s=c[l]],y=r[s];if(e)var d=a?e(y,h,s,r,t,i):e(h,y,s,t,r,i);if(!(void 0===d?h===y||n(h,y,e,o,i):d)){_=!1;break}v||(v="constructor"==s)}if(_&&!v){var b=t.constructor,g=r.constructor;b!=g&&"constructor"in t&&"constructor"in r&&!("function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g)&&(_=!1)}return i.delete(t),i.delete(r),_}function Cr(t,r){var n=t.__data__;return Wr(r)?n["string"==typeof r?"string":"hash"]:n.map}function Lr(t){for(var r=vn(t),n=r.length;n--;){var e=r[n],o=t[e];r[n]=[e,o,qr(o)]}return r}function Mr(t,r){var n=ut(t,r);return mr(n)?n:void 0}var Br=dr;function Dr(t,r,n){for(var e,o=-1,u=(r=Vr(r,t)?[r]:Fr(r)).length;++o<u;){var i=Kr(r[o]);if(!(e=null!=t&&n(t,i)))break;t=t[i]}return e||!!(u=t?t.length:0)&&un(u)&&Rr(i,u)&&(rn(t)||tn(t))}function Rr(t,r){return!!(r=null==r?a:r)&&("number"==typeof t||V.test(t))&&t>-1&&t%1==0&&t<r}function Vr(t,r){if(rn(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!fn(t))||(C.test(t)||!z.test(t)||null!=r&&t in Object(r))}function Wr(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}function Gr(t){return!!vt&&vt in t}function Nr(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||pt)}function qr(t){return t==t&&!an(t)}function Hr(t,r){return function(n){return null!=n&&(n[t]===r&&(void 0!==r||t in Object(n)))}}(At&&Br(new At(new ArrayBuffer(1)))!=k||kt&&Br(new kt)!=h||St&&Br(St.resolve())!=b||xt&&Br(new xt)!=j||$t&&Br(new $t)!=O)&&(Br=function(t){var r=dt.call(t),n=r==d?t.constructor:void 0,e=n?Qr(n):void 0;if(e)switch(e){case Ft:return k;case It:return h;case Pt:return b;case Tt:return j;case Ut:return O}return r});var Jr=Yr(function(t){t=sn(t);var r=[];return L.test(t)&&r.push(""),t.replace(M,function(t,n,e,o){r.push(e?o.replace(D,"$1"):n||t)}),r});function Kr(t){if("string"==typeof t||fn(t))return t;var r=t+"";return"0"==r&&1/t==-i?"-0":r}function Qr(t){if(null!=t){try{return ht.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Xr(t,r,n){var e=rn(t)?Z:nt,o=arguments.length<3;return e(t,Ar(r,4),n,o,_r)}function Yr(t,r){if("function"!=typeof t||r&&"function"!=typeof r)throw new TypeError(n);var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],u=e.cache;if(u.has(o))return u.get(o);var i=t.apply(this,n);return e.cache=u.set(o,i),i};return e.cache=new(Yr.Cache||Qt),e}function Zr(t,r){return t===r||t!=t&&r!=r}function tn(t){return en(t)&&yt.call(t,"callee")&&(!wt.call(t,"callee")||dt.call(t)==c)}Yr.Cache=Qt;var rn=Array.isArray;function nn(t){return null!=t&&un(t.length)&&!on(t)}function en(t){return cn(t)&&nn(t)}function on(t){var r=an(t)?dt.call(t):"";return r==_||r==v}function un(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function an(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function cn(t){return!!t&&"object"==typeof t}function fn(t){return"symbol"==typeof t||cn(t)&&dt.call(t)==m}var ln=Y?ot(Y):Or;function sn(t){return null==t?"":Er(t)}function pn(t,r,n){var e=null==t?void 0:yr(t,r);return void 0===e?n:e}function _n(t,r){return null!=t&&Dr(t,r,br)}function vn(t){return nn(t)?sr(t):kr(t)}function hn(t){return t}function yn(t){return Vr(t)?rt(Kr(t)):$r(t)}module.exports=Xr;
},{}],1:[function(require,module,exports) {
"use strict";var e=require("./common.js");function a(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var t=require("lodash.reduce");!function(){for(var n={},r=Number(document.getElementsByClassName("-totalPages")[0].innerHTML),l=document.getElementsByClassName("-next")[0].childNodes[0],s=0;s<r;s++)Array.from(document.getElementsByClassName("rt-tbody")[0].childNodes).some(function(a){var t=a.childNodes[0],r=void 0;try{r=t.childNodes[2].getElementsByTagName("strong")[0].innerHTML}catch(e){return!0}var l=Number(t.childNodes[8].getElementsByTagName("span")[0].innerHTML.replace(",","").replace(",","")),s=(0,e.parsePercent)(t.childNodes[4].getElementsByTagName("b")[0].innerHTML,!0);null==n[r]?n[r]={played:l,won:l*s}:(n[r].played+=l,n[r].won+=l*s)}),l.click();var o=t(n,function(e,a,t){return a.played+e},0),d=[];Object.keys(n).forEach(function(t){var r,l=n[t];d.push((a(r={},e.defaultKeyNames.WIN_PERCENT,l.won/l.played),a(r,e.defaultKeyNames.PLAY_PERCENT,100*l.played/o),a(r,e.defaultKeyNames.POWER,(0,e.calculatePower)(l.won/l.played,100*l.played/o)),a(r,e.defaultKeyNames.NAME,t),r))}),d.sort(function(a,t){return t[e.defaultKeyNames.POWER]-a[e.defaultKeyNames.POWER]}),(0,e.displayResults)(d),(0,e.openWebpage)(d);for(var c=document.getElementsByClassName("-previous")[0].childNodes[0],u=0;u<r;u++)c.click()}();
},{"./common.js":2,"lodash.reduce":5}]},{},[1], null)