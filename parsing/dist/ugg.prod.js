(function () {function P(a){return a&&a.__esModule?{d:a.default}:{d:a}}var r=this;var f={KEYVAL:"NEjFQLMGv57omxxph5uoht",PLAY_PERCENT:0,WIN_PERCENT:1,POWER:2,NAME:3,ELO:"e",REGION:"g",PATCH:"h",TIME:"l",QUEUE:"q"};var Q,t=false;function R(){if(t)return;t=true;Q={};!function(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t={rotl:function(r,t){return r<<t|r>>>32-t},rotr:function(r,t){return r<<32-t|r>>>t},endian:function(r){if(r.constructor==Number)return 16711935&t.rotl(r,8)|4278255360&t.rotl(r,24);for(var n=0;n<r.length;n++)r[n]=t.endian(r[n]);return r},randomBytes:function(r){for(var t=[];r>0;r--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(r){for(var t=[],n=0,o=0;n<r.length;n++,o+=8)t[o>>>5]|=r[n]<<24-o%32;return t},wordsToBytes:function(r){for(var t=[],n=0;n<32*r.length;n+=8)t.push(r[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(r){for(var t=[],n=0;n<r.length;n++)t.push((r[n]>>>4).toString(16)),t.push((15&r[n]).toString(16));return t.join("")},hexToBytes:function(r){for(var t=[],n=0;n<r.length;n+=2)t.push(parseInt(r.substr(n,2),16));return t},bytesToBase64:function(t){for(var n=[],o=0;o<t.length;o+=3)for(var e=t[o]<<16|t[o+1]<<8|t[o+2],u=0;u<4;u++)8*o+6*u<=8*t.length?n.push(r.charAt(e>>>6*(3-u)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],o=0,e=0;o<t.length;e=++o%4)0!=e&&n.push((r.indexOf(t.charAt(o-1))&Math.pow(2,-2*e+8)-1)<<2*e|r.indexOf(t.charAt(o))>>>6-2*e);return n}};Q=t}()}var x,p,S=false;function y(){if(S)return;S=true;x={};p={utf8:{stringToBytes:function(e){return p.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(p.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var n=[],t=0;t<e.length;t++)n.push(255&e.charCodeAt(t));return n},bytesToString:function(e){for(var n=[],t=0;t<e.length;t++)n.push(String.fromCharCode(e[t]));return n.join("")}}};x=p}var T=Y;var z=$;for(var g=[],d=[],U="undefined"!=typeof Uint8Array?Uint8Array:Array,q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=0,V=q.length;e<V;++e)g[e]=q[e],d[q.charCodeAt(e)]=e;function W($){var r=$.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=$.indexOf("=");return-1===v&&(v=r),[v,v===r?0:4-v%4]}function X($,r,v){return 3*(r+v)/4-v}function Y($){var r,v,n=W($),o=n[0],e=n[1],a=new U(X($,o,e)),A=0,t=e>0?o-4:o;for(v=0;v<t;v+=4)r=d[$.charCodeAt(v)]<<18|d[$.charCodeAt(v+1)]<<12|d[$.charCodeAt(v+2)]<<6|d[$.charCodeAt(v+3)],a[A++]=r>>16&255,a[A++]=r>>8&255,a[A++]=255&r;return 2===e&&(r=d[$.charCodeAt(v)]<<2|d[$.charCodeAt(v+1)]>>4,a[A++]=255&r),1===e&&(r=d[$.charCodeAt(v)]<<10|d[$.charCodeAt(v+1)]<<4|d[$.charCodeAt(v+2)]>>2,a[A++]=r>>8&255,a[A++]=255&r),a}function Z($){return g[$>>18&63]+g[$>>12&63]+g[$>>6&63]+g[63&$]}function _($,r,v){for(var n,o=[],e=r;e<v;e+=3)n=($[e]<<16&16711680)+($[e+1]<<8&65280)+(255&$[e+2]),o.push(Z(n));return o.join("")}function $($){for(var r,v=$.length,n=v%3,o=[],e=0,a=v-n;e<a;e+=16383)o.push(_($,e,e+16383>a?a:e+16383));return 1===n?(r=$[v-1],o.push(g[r>>2]+g[r<<4&63]+"==")):2===n&&(r=($[v-2]<<8)+$[v-1],o.push(g[r>>10]+g[r>>4&63]+g[r<<2&63]+"=")),o.join("")}d["-".charCodeAt(0)]=62,d["_".charCodeAt(0)]=63;var j=function(a,t,r,o,$){var e,p,h=8*$-o-1,M=(1<<h)-1,w=M>>1,f=-7,i=r?$-1:0,s=r?-1:1,x=a[t+i];for(i+=s,e=x&(1<<-f)-1,x>>=-f,f+=h;f>0;e=256*e+a[t+i],i+=s,f-=8);for(p=e&(1<<-f)-1,e>>=-f,f+=o;f>0;p=256*p+a[t+i],i+=s,f-=8);if(0===e)e=1-w;else{if(e===M)return p?NaN:1/0*(x?-1:1);p+=Math.pow(2,o),e-=w}return(x?-1:1)*p*Math.pow(2,e-o)};var A=function(a,t,r,o,$,e){var p,h,M,w=8*e-$-1,f=(1<<w)-1,i=f>>1,s=23===$?Math.pow(2,-24)-Math.pow(2,-77):0,x=o?0:e-1,N=o?1:-1,O=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(h=isNaN(t)?1:0,p=f):(p=Math.floor(Math.log(t)/Math.LN2),t*(M=Math.pow(2,-p))<1&&(p--,M*=2),(t+=p+i>=1?s/M:s*Math.pow(2,1-i))*M>=2&&(p++,M/=2),p+i>=f?(h=0,p=f):p+i>=1?(h=(t*M-1)*Math.pow(2,$),p+=i):(h=t*Math.pow(2,i-1)*Math.pow(2,$),p=0));$>=8;a[r+x]=255&h,x+=N,h/=256,$-=8);for(p=p<<$|h,w+=$;w>0;a[r+x]=255&p,x+=N,p/=256,w-=8);a[r+x-N]|=128*O};var B={},aa={}.toString;B=Array.isArray||function(r){return"[object Array]"==aa.call(r)};var ba=b;var ca=50;b.TYPED_ARRAY_SUPPORT=void 0!==r.TYPED_ARRAY_SUPPORT?r.TYPED_ARRAY_SUPPORT:da();var Fa=k();function da(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(r){return!1}}function k(){return b.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function h(e,r){if(k()<r)throw new RangeError("Invalid typed array length");return b.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(r)).__proto__=b.prototype:(null===e&&(e=new b(r)),e.length=r),e}function b(e,r,t){if(!(b.TYPED_ARRAY_SUPPORT||this instanceof b))return new b(e,r,t);if("number"==typeof e){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return s(this,e)}return C(this,e,r,t)}function C(e,r,t,f){if("number"==typeof r)throw new TypeError("\"value\" argument must not be a number");return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?ga(e,r,t,f):"string"==typeof r?fa(e,r,t):ha(e,r)}function D(e){if("number"!=typeof e)throw new TypeError("\"size\" argument must be a number");if(e<0)throw new RangeError("\"size\" argument must not be negative")}function ea(e,r,t,f){return D(r),r<=0?h(e,r):void 0!==t?"string"==typeof f?h(e,r).fill(t,f):h(e,r).fill(t):h(e,r)}function s(e,r){if(D(r),e=h(e,r<0?0:0|v(r)),!b.TYPED_ARRAY_SUPPORT)for(var t=0;t<r;++t)e[t]=0;return e}function fa(e,r,t){if("string"==typeof t&&""!==t||(t="utf8"),!b.isEncoding(t))throw new TypeError("\"encoding\" must be a valid string encoding");var f=0|E(r,t),$=(e=h(e,f)).write(r,t);return $!==f&&(e=e.slice(0,$)),e}function u(e,r){var t=r.length<0?0:0|v(r.length);e=h(e,t);for(var f=0;f<t;f+=1)e[f]=255&r[f];return e}function ga(e,r,t,f){if(r.byteLength,t<0||r.byteLength<t)throw new RangeError("'offset' is out of bounds");if(r.byteLength<t+(f||0))throw new RangeError("'length' is out of bounds");return r=void 0===t&&void 0===f?new Uint8Array(r):void 0===f?new Uint8Array(r,t):new Uint8Array(r,t,f),b.TYPED_ARRAY_SUPPORT?(e=r).__proto__=b.prototype:e=u(e,r),e}function ha(e,r){if(b.isBuffer(r)){var t=0|v(r.length);return 0===(e=h(e,t)).length?e:(r.copy(e,0,0,t),e)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||Aa(r.length)?h(e,0):u(e,r);if("Buffer"===r.type&&B(r.data))return u(e,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function v(e){if(e>=k())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+k().toString(16)+" bytes");return 0|e}function E(e,r){if(b.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var t=e.length;if(0===t)return 0;for(var f=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":case void 0:return o(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*t;case"hex":return t>>>1;case"base64":return N(e).length;default:if(f)return o(e).length;r=(""+r).toLowerCase(),f=!0;}}function ia(e,r,t){var f=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===t||t>this.length)&&(t=this.length),t<=0)return"";if((t>>>=0)<=(r>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return sa(this,r,t);case"utf8":case"utf-8":return I(this,r,t);case"ascii":return qa(this,r,t);case"latin1":case"binary":return ra(this,r,t);case"base64":return oa(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ta(this,r,t);default:if(f)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),f=!0;}}function i(e,r,t){var f=e[r];e[r]=e[t],e[t]=f}function F(e,r,t,f,$){if(0===e.length)return-1;if("string"==typeof t?(f=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,isNaN(t)&&(t=$?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if($)return-1;t=e.length-1}else if(t<0){if(!$)return-1;t=0}if("string"==typeof r&&(r=b.from(r,f)),b.isBuffer(r))return 0===r.length?-1:G(e,r,t,f,$);if("number"==typeof r)return r&=255,b.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?$?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):G(e,[r],t,f,$);throw new TypeError("val must be string, number or Buffer")}function G(e,r,t,f,$){var n,a=1,i=e.length,o=r.length;if(void 0!==f&&("ucs2"===(f=String(f).toLowerCase())||"ucs-2"===f||"utf16le"===f||"utf-16le"===f)){if(e.length<2||r.length<2)return-1;a=2,i/=2,o/=2,t/=2}function u(e,r){return 1===a?e[r]:e.readUInt16BE(r*a)}if($){var s=-1;for(n=t;n<i;n++)if(u(e,n)===u(r,-1===s?0:n-s)){if(-1===s&&(s=n),n-s+1===o)return s*a}else-1!==s&&(n-=n-s),s=-1}else for(t+o>i&&(t=i-o),n=t;n>=0;n--){for(var h=!0,v=0;v<o;v++)if(u(e,n+v)!==u(r,v)){h=!1;break}if(h)return n}return-1}function ja(e,r,t,f){t=Number(t)||0;var $=e.length-t;f?(f=Number(f))>$&&(f=$):f=$;var n=r.length;if(n%2!=0)throw new TypeError("Invalid hex string");f>n/2&&(f=n/2);for(var a=0;a<f;++a){var i=parseInt(r.substr(2*a,2),16);if(isNaN(i))return a;e[t+a]=i}return a}function ka(e,r,t,f){return n(o(r,e.length-t),e,t,f)}function H(e,r,t,f){return n(ya(r),e,t,f)}function la(e,r,t,f){return H(e,r,t,f)}function ma(e,r,t,f){return n(N(r),e,t,f)}function na(e,r,t,f){return n(za(r,e.length-t),e,t,f)}function oa(e,r,t){return 0===r&&t===e.length?z(e):z(e.slice(r,t))}function I(e,r,t){t=Math.min(e.length,t);for(var f=[],$=r;$<t;){var n,a,i,o,u=e[$],s=null,h=u>239?4:u>223?3:u>191?2:1;if($+h<=t)switch(h){case 1:u<128&&(s=u);break;case 2:128==(192&(n=e[$+1]))&&(o=(31&u)<<6|63&n)>127&&(s=o);break;case 3:n=e[$+1],a=e[$+2],128==(192&n)&&128==(192&a)&&(o=(15&u)<<12|(63&n)<<6|63&a)>2047&&(o<55296||o>57343)&&(s=o);break;case 4:n=e[$+1],a=e[$+2],i=e[$+3],128==(192&n)&&128==(192&a)&&128==(192&i)&&(o=(15&u)<<18|(63&n)<<12|(63&a)<<6|63&i)>65535&&o<1114112&&(s=o);}null===s?(s=65533,h=1):s>65535&&(s-=65536,f.push(s>>>10&1023|55296),s=56320|1023&s),f.push(s),$+=h}return pa(f)}b.poolSize=8192,b._augment=function(e){return e.__proto__=b.prototype,e},b.from=function(e,r,t){return C(null,e,r,t)},b.TYPED_ARRAY_SUPPORT&&(b.prototype.__proto__=Uint8Array.prototype,b.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&b[Symbol.species]===b&&Object.defineProperty(b,Symbol.species,{value:null,configurable:!0})),b.alloc=function(e,r,t){return ea(null,e,r,t)},b.allocUnsafe=function(e){return s(null,e)},b.allocUnsafeSlow=function(e){return s(null,e)},b.isBuffer=function(e){return!(null==e||!e._isBuffer)},b.compare=function(e,r){if(!b.isBuffer(e)||!b.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(e===r)return 0;for(var t=e.length,f=r.length,$=0,n=Math.min(t,f);$<n;++$)if(e[$]!==r[$]){t=e[$],f=r[$];break}return t<f?-1:f<t?1:0},b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1;}},b.concat=function(e,r){if(!B(e))throw new TypeError("\"list\" argument must be an Array of Buffers");if(0===e.length)return b.alloc(0);var t;if(void 0===r)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var f=b.allocUnsafe(r),$=0;for(t=0;t<e.length;++t){var n=e[t];if(!b.isBuffer(n))throw new TypeError("\"list\" argument must be an Array of Buffers");n.copy(f,$),$+=n.length}return f},b.byteLength=E,b.prototype._isBuffer=!0,b.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)i(this,r,r+1);return this},b.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)i(this,r,r+3),i(this,r+1,r+2);return this},b.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)i(this,r,r+7),i(this,r+1,r+6),i(this,r+2,r+5),i(this,r+3,r+4);return this},b.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?I(this,0,e):ia.apply(this,arguments)},b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===b.compare(this,e)},b.prototype.inspect=function(){var e="",r=ca;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},b.prototype.compare=function(e,r,t,f,$){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===t&&(t=e?e.length:0),void 0===f&&(f=0),void 0===$&&($=this.length),r<0||t>e.length||f<0||$>this.length)throw new RangeError("out of range index");if(f>=$&&r>=t)return 0;if(f>=$)return-1;if(r>=t)return 1;if(this===e)return 0;for(var n=($>>>=0)-(f>>>=0),a=(t>>>=0)-(r>>>=0),i=Math.min(n,a),o=this.slice(f,$),u=e.slice(r,t),s=0;s<i;++s)if(o[s]!==u[s]){n=o[s],a=u[s];break}return n<a?-1:a<n?1:0},b.prototype.includes=function(e,r,t){return-1!==this.indexOf(e,r,t)},b.prototype.indexOf=function(e,r,t){return F(this,e,r,t,!0)},b.prototype.lastIndexOf=function(e,r,t){return F(this,e,r,t,!1)},b.prototype.write=function(e,r,t,f){if(void 0===r)f="utf8",t=this.length,r=0;else if(void 0===t&&"string"==typeof r)f=r,t=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(t)?(t|=0,void 0===f&&(f="utf8")):(f=t,t=void 0)}var $=this.length-r;if((void 0===t||t>$)&&(t=$),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");f||(f="utf8");for(var n=!1;;)switch(f){case"hex":return ja(this,e,r,t);case"utf8":case"utf-8":return ka(this,e,r,t);case"ascii":return H(this,e,r,t);case"latin1":case"binary":return la(this,e,r,t);case"base64":return ma(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return na(this,e,r,t);default:if(n)throw new TypeError("Unknown encoding: "+f);f=(""+f).toLowerCase(),n=!0;}},b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var J=4096;function pa(e){var r=e.length;if(r<=J)return String.fromCharCode.apply(String,e);for(var t="",f=0;f<r;)t+=String.fromCharCode.apply(String,e.slice(f,f+=J));return t}function qa(e,r,t){var f="";t=Math.min(e.length,t);for(var $=r;$<t;++$)f+=String.fromCharCode(127&e[$]);return f}function ra(e,r,t){var f="";t=Math.min(e.length,t);for(var $=r;$<t;++$)f+=String.fromCharCode(e[$]);return f}function sa(e,r,t){var f=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>f)&&(t=f);for(var $="",n=r;n<t;++n)$+=xa(e[n]);return $}function ta(e,r,t){for(var f=e.slice(r,t),$="",n=0;n<f.length;n+=2)$+=String.fromCharCode(f[n]+256*f[n+1]);return $}function a(e,r,t){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}function c(e,r,t,f,$,n){if(!b.isBuffer(e))throw new TypeError("\"buffer\" argument must be a Buffer instance");if(r>$||r<n)throw new RangeError("\"value\" argument is out of bounds");if(t+f>e.length)throw new RangeError("Index out of range")}function l(e,r,t,f){r<0&&(r=65535+r+1);for(var $=0,n=Math.min(e.length-t,2);$<n;++$)e[t+$]=(r&255<<8*(f?$:1-$))>>>8*(f?$:1-$)}function m(e,r,t,f){r<0&&(r=4294967295+r+1);for(var $=0,n=Math.min(e.length-t,4);$<n;++$)e[t+$]=r>>>8*(f?$:3-$)&255}function K(e,r,t,f,$,n){if(t+f>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function L(e,r,t,f,$){return $||K(e,r,t,4,3.4028234663852886e38,-3.4028234663852886e38),A(e,r,t,f,23,4),t+4}function M(e,r,t,f,$){return $||K(e,r,t,8,1.7976931348623157e308,-1.7976931348623157e308),A(e,r,t,f,52,8),t+8}b.prototype.slice=function(e,r){var t,f=this.length;if((e=~~e)<0?(e+=f)<0&&(e=0):e>f&&(e=f),(r=void 0===r?f:~~r)<0?(r+=f)<0&&(r=0):r>f&&(r=f),r<e&&(r=e),b.TYPED_ARRAY_SUPPORT)(t=this.subarray(e,r)).__proto__=b.prototype;else{var $=r-e;t=new b($,void 0);for(var n=0;n<$;++n)t[n]=this[n+e]}return t},b.prototype.readUIntLE=function(e,r,t){e|=0,r|=0,t||a(e,r,this.length);for(var f=this[e],$=1,n=0;++n<r&&($*=256);)f+=this[e+n]*$;return f},b.prototype.readUIntBE=function(e,r,t){e|=0,r|=0,t||a(e,r,this.length);for(var f=this[e+--r],$=1;r>0&&($*=256);)f+=this[e+--r]*$;return f},b.prototype.readUInt8=function(e,r){return r||a(e,1,this.length),this[e]},b.prototype.readUInt16LE=function(e,r){return r||a(e,2,this.length),this[e]|this[e+1]<<8},b.prototype.readUInt16BE=function(e,r){return r||a(e,2,this.length),this[e]<<8|this[e+1]},b.prototype.readUInt32LE=function(e,r){return r||a(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},b.prototype.readUInt32BE=function(e,r){return r||a(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},b.prototype.readIntLE=function(e,r,t){e|=0,r|=0,t||a(e,r,this.length);for(var f=this[e],$=1,n=0;++n<r&&($*=256);)f+=this[e+n]*$;return f>=($*=128)&&(f-=Math.pow(2,8*r)),f},b.prototype.readIntBE=function(e,r,t){e|=0,r|=0,t||a(e,r,this.length);for(var f=r,$=1,n=this[e+--f];f>0&&($*=256);)n+=this[e+--f]*$;return n>=($*=128)&&(n-=Math.pow(2,8*r)),n},b.prototype.readInt8=function(e,r){return r||a(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},b.prototype.readInt16LE=function(e,r){r||a(e,2,this.length);var t=this[e]|this[e+1]<<8;return 32768&t?4294901760|t:t},b.prototype.readInt16BE=function(e,r){r||a(e,2,this.length);var t=this[e+1]|this[e]<<8;return 32768&t?4294901760|t:t},b.prototype.readInt32LE=function(e,r){return r||a(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},b.prototype.readInt32BE=function(e,r){return r||a(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},b.prototype.readFloatLE=function(e,r){return r||a(e,4,this.length),j(this,e,!0,23,4)},b.prototype.readFloatBE=function(e,r){return r||a(e,4,this.length),j(this,e,!1,23,4)},b.prototype.readDoubleLE=function(e,r){return r||a(e,8,this.length),j(this,e,!0,52,8)},b.prototype.readDoubleBE=function(e,r){return r||a(e,8,this.length),j(this,e,!1,52,8)},b.prototype.writeUIntLE=function(e,r,t,f){(e=+e,r|=0,t|=0,f)||c(this,e,r,t,Math.pow(2,8*t)-1,0);var $=1,n=0;for(this[r]=255&e;++n<t&&($*=256);)this[r+n]=e/$&255;return r+t},b.prototype.writeUIntBE=function(e,r,t,f){(e=+e,r|=0,t|=0,f)||c(this,e,r,t,Math.pow(2,8*t)-1,0);var $=t-1,n=1;for(this[r+$]=255&e;--$>=0&&(n*=256);)this[r+$]=e/n&255;return r+t},b.prototype.writeUInt8=function(e,r,t){return e=+e,r|=0,t||c(this,e,r,1,255,0),b.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[r]=255&e,r+1},b.prototype.writeUInt16LE=function(e,r,t){return e=+e,r|=0,t||c(this,e,r,2,65535,0),b.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8):l(this,e,r,!0),r+2},b.prototype.writeUInt16BE=function(e,r,t){return e=+e,r|=0,t||c(this,e,r,2,65535,0),b.TYPED_ARRAY_SUPPORT?(this[r]=e>>>8,this[r+1]=255&e):l(this,e,r,!1),r+2},b.prototype.writeUInt32LE=function(e,r,t){return e=+e,r|=0,t||c(this,e,r,4,4294967295,0),b.TYPED_ARRAY_SUPPORT?(this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=255&e):m(this,e,r,!0),r+4},b.prototype.writeUInt32BE=function(e,r,t){return e=+e,r|=0,t||c(this,e,r,4,4294967295,0),b.TYPED_ARRAY_SUPPORT?(this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e):m(this,e,r,!1),r+4},b.prototype.writeIntLE=function(e,r,t,f){if(e=+e,r|=0,!f){var $=Math.pow(2,8*t-1);c(this,e,r,t,$-1,-$)}var n=0,a=1,i=0;for(this[r]=255&e;++n<t&&(a*=256);)e<0&&0===i&&0!==this[r+n-1]&&(i=1),this[r+n]=(e/a>>0)-i&255;return r+t},b.prototype.writeIntBE=function(e,r,t,f){if(e=+e,r|=0,!f){var $=Math.pow(2,8*t-1);c(this,e,r,t,$-1,-$)}var n=t-1,a=1,i=0;for(this[r+n]=255&e;--n>=0&&(a*=256);)e<0&&0===i&&0!==this[r+n+1]&&(i=1),this[r+n]=(e/a>>0)-i&255;return r+t},b.prototype.writeInt8=function(e,r,t){return e=+e,r|=0,t||c(this,e,r,1,127,-128),b.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[r]=255&e,r+1},b.prototype.writeInt16LE=function(e,r,t){return e=+e,r|=0,t||c(this,e,r,2,32767,-32768),b.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8):l(this,e,r,!0),r+2},b.prototype.writeInt16BE=function(e,r,t){return e=+e,r|=0,t||c(this,e,r,2,32767,-32768),b.TYPED_ARRAY_SUPPORT?(this[r]=e>>>8,this[r+1]=255&e):l(this,e,r,!1),r+2},b.prototype.writeInt32LE=function(e,r,t){return e=+e,r|=0,t||c(this,e,r,4,2147483647,-2147483648),b.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24):m(this,e,r,!0),r+4},b.prototype.writeInt32BE=function(e,r,t){return e=+e,r|=0,t||c(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),b.TYPED_ARRAY_SUPPORT?(this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e):m(this,e,r,!1),r+4},b.prototype.writeFloatLE=function(e,r,t){return L(this,e,r,!0,t)},b.prototype.writeFloatBE=function(e,r,t){return L(this,e,r,!1,t)},b.prototype.writeDoubleLE=function(e,r,t){return M(this,e,r,!0,t)},b.prototype.writeDoubleBE=function(e,r,t){return M(this,e,r,!1,t)},b.prototype.copy=function(e,r,t,f){if(t||(t=0),f||0===f||(f=this.length),r>=e.length&&(r=e.length),r||(r=0),f>0&&f<t&&(f=t),f===t)return 0;if(0===e.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("sourceStart out of bounds");if(f<0)throw new RangeError("sourceEnd out of bounds");f>this.length&&(f=this.length),e.length-r<f-t&&(f=e.length-r+t);var $,n=f-t;if(this===e&&t<r&&r<f)for($=n-1;$>=0;--$)e[$+r]=this[$+t];else if(n<1e3||!b.TYPED_ARRAY_SUPPORT)for($=0;$<n;++$)e[$+r]=this[$+t];else Uint8Array.prototype.set.call(e,this.subarray(t,t+n),r);return n},b.prototype.fill=function(e,r,t,f){if("string"==typeof e){if("string"==typeof r?(f=r,r=0,t=this.length):"string"==typeof t&&(f=t,t=this.length),1===e.length){var $=e.charCodeAt(0);$<256&&(e=$)}if(void 0!==f&&"string"!=typeof f)throw new TypeError("encoding must be a string");if("string"==typeof f&&!b.isEncoding(f))throw new TypeError("Unknown encoding: "+f)}else"number"==typeof e&&(e&=255);if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;var n;if(r>>>=0,t=void 0===t?this.length:t>>>0,e||(e=0),"number"==typeof e)for(n=r;n<t;++n)this[n]=e;else{var a=b.isBuffer(e)?e:o(new b(e,f).toString()),i=a.length;for(n=0;n<t-r;++n)this[n+r]=a[n%i]}return this};var ua=/[^+\/0-9A-Za-z-_]/g;function va(e){if((e=wa(e).replace(ua,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}function wa(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function xa(e){return e<16?"0"+e.toString(16):e.toString(16)}function o(e,r){var t;r=r||1/0;for(var f=e.length,$=null,n=[],a=0;a<f;++a){if((t=e.charCodeAt(a))>55295&&t<57344){if(!$){if(t>56319){(r-=3)>-1&&n.push(239,191,189);continue}if(a+1===f){(r-=3)>-1&&n.push(239,191,189);continue}$=t;continue}if(t<56320){(r-=3)>-1&&n.push(239,191,189),$=t;continue}t=65536+($-55296<<10|t-56320)}else $&&(r-=3)>-1&&n.push(239,191,189);if($=null,t<128){if((r-=1)<0)break;n.push(t)}else if(t<2048){if((r-=2)<0)break;n.push(t>>6|192,63&t|128)}else if(t<65536){if((r-=3)<0)break;n.push(t>>12|224,t>>6&63|128,63&t|128)}else{if(!(t<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;n.push(t>>18|240,t>>12&63|128,t>>6&63|128,63&t|128)}}return n}function ya(e){for(var r=[],t=0;t<e.length;++t)r.push(255&e.charCodeAt(t));return r}function za(e,r){for(var t,f,$,n=[],a=0;a<e.length&&!((r-=2)<0);++a)f=(t=e.charCodeAt(a))>>8,$=t%256,n.push($),n.push(f);return n}function N(e){return T(va(e))}function n(e,r,t,f){for(var $=0;$<f&&!($+t>=r.length||$>=e.length);++$)r[$+t]=e[$];return $}function Aa(e){return e!=e}var Ba={},w=ba;!function(){var r=(R(),Q),e=(y(),x).utf8,t=(y(),x).bin,f=function(f,a){var $=r.wordsToBytes(function(t){t.constructor==String?t=e.stringToBytes(t):void 0!==w&&"function"==typeof w.isBuffer&&w.isBuffer(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());var f=r.bytesToWords(t),a=8*t.length,$=[],i=1732584193,o=-271733879,s=-1732584194,l=271733878,n=-1009589776;f[a>>5]|=128<<24-a%32,f[15+(a+64>>>9<<4)]=a;for(var u=0;u<f.length;u+=16){for(var c=i,v=o,A=s,y=l,p=n,B=0;B<80;B++){if(B<16)$[B]=f[u+B];else{var I=$[B-3]^$[B-8]^$[B-14]^$[B-16];$[B]=I<<1|I>>>31}var Y=(i<<5|i>>>27)+n+($[B]>>>0)+(B<20?1518500249+(o&s|~o&l):B<40?1859775393+(o^s^l):B<60?(o&s|o&l|s&l)-1894007588:(o^s^l)-899497514);n=l,l=s,s=o<<30|o>>>2,o=i,i=Y}i+=c,o+=v,s+=A,l+=y,n+=p}return[i,o,s,l,n]}(f));return a&&a.asBytes?$:a&&a.asString?t.bytesToString($):r.bytesToHex($)};f._blocksize=16,f._digestsize=20,Ba=f}();const O=function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?Number(e.replace("%","")):Number(e)};const Ca=(e,o)=>o*(e-50)*10;const Da=e=>{const o=e.map(e=>({"Champ Name":e[f.NAME],"Win Percent":e[f.WIN_PERCENT],"Play Percent":e[f.PLAY_PERCENT],Power:e[f.POWER]}));console.table(o)};const Ea=async function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://power.benc.me";var $AIYl$$interop$default=P(Ba);const t="https://kvdb.io/".concat(f.KEYVAL),$=e.slice(0,30),r=JSON.stringify($),a=$AIYl$$interop$default.d(r);await fetch("".concat(t,"/").concat(a),{method:"POST",body:r}),window.open("".concat(o,"/?s=").concat(a),"_blank")};(async()=>{await new Promise(e=>{let t=document.getElementsByClassName("rt-tr-group").length,a=0,l=0;const r=setInterval(()=>{window.scrollTo(0,document.body.scrollHeight),t=a,a=document.getElementsByClassName("rt-tr-group").length;(t===a&&a>=183||l++>Math.ceil(7.32))&&(clearInterval(r),e())},35)}),document.body.scrollTop=document.documentElement.scrollTop=0;const e=Array.from(document.getElementsByClassName("rt-tbody")[0].childNodes),t={};for(let r=0;r<e.length;r++){const a=e[r].childNodes[0],l=a.childNodes[2].getElementsByClassName("champion-name")[0].innerHTML,o=Number(a.childNodes[8].getElementsByTagName("span")[0].innerHTML.replace(",","").replace(",","")),n=O(a.childNodes[4].getElementsByTagName("b")[0].innerHTML,!0);O(a.childNodes[6].getElementsByTagName("span")[0].innerHTML,!0);null==t[l]?t[l]={played:o,won:o*n}:(t[l].played+=o,t[l].won+=o*n)}const a=Object.values(t).reduce((e,t)=>{let{played:a}=t;return a+e},0),l=Object.keys(t).reduce((e,l)=>{const{won:r,played:o}=t[l];return e.concat([Array.from({[f.WIN_PERCENT]:r/o,[f.PLAY_PERCENT]:100*o/a,[f.POWER]:Ca(r/o,100*o/a),[f.NAME]:l,length:4})])},[]).sort((e,t)=>t[f.POWER]-e[f.POWER]);Da(l),await Ea(l)})();})();