(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+iL7":function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"0K2p":function(t,n,r){var e=r("nEaP"),o=r("gIo2"),i=r("EvI5"),u=r("tF07"),c=r("Ya6V"),f=r("ne/+"),a=r("SkE4"),s=a.get,p=a.enforce,l=String(f).split("toString");o("inspectSource",function(t){return f.call(t)}),(t.exports=function(t,n,r,o){var f=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||u(r,"name")||i(r,"name",n),p(r).source=l.join("string"==typeof n?n:"")),t!==e?(f?!s&&t[n]&&(a=!0):delete t[n],a?t[n]=r:i(t,n,r)):a?t[n]=r:c(n,r)})(Function.prototype,"toString",function(){return"function"==typeof this&&s(this).source||f.call(this)})},"3pC9":function(t,n,r){var e=r("gIo2"),o=r("nrda"),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},"41Zj":function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},"4SRy":function(t,n,r){var e=r("JRM0"),o=r("nEaP"),i=r("mB8Z"),u=[].slice,c=function(t){return function(n,r){var e=arguments.length>2,o=e?u.call(arguments,2):void 0;return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,r)}};e({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:c(o.setTimeout),setInterval:c(o.setInterval)})},"8OJN":function(t,n,r){var e=r("tF07"),o=r("M/tt"),i=r("kMPr").indexOf,u=r("s3NK");t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(u,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},"9nX2":function(t,n,r){var e=r("+iL7"),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},AvbG:function(t,n,r){"use strict";var e=r("jmUq"),o=r("fT8P"),i=[].slice,u={},c=function(t,n,r){if(!(n in u)){for(var e=[],o=0;o<n;o++)e[o]="a["+o+"]";u[n]=Function("C,a","return new C("+e.join(",")+")")}return u[n](t,r)};t.exports=Function.bind||function(t){var n=e(this),r=i.call(arguments,1),u=function(){var e=r.concat(i.call(arguments));return this instanceof u?c(n,e.length,e):n.apply(t,e)};return o(n.prototype)&&(u.prototype=n.prototype),u}},DJGK:function(t,n,r){var e=r("+iL7"),o=r("fSIz"),i="".split;t.exports=e(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},EvI5:function(t,n,r){var e=r("Hvpk"),o=r("nRc6"),i=r("VSW8");t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},Fup7:function(t,n,r){var e=r("Hvpk"),o=r("41Zj"),i=r("VSW8"),u=r("M/tt"),c=r("W9fh"),f=r("tF07"),a=r("xwiM"),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},GCui:function(t,n,r){r("JRM0")({target:"Function",proto:!0},{bind:r("AvbG")})},HRgQ:function(t,n,r){var e=r("nEaP"),o=r("fT8P"),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},Hvpk:function(t,n,r){var e=r("+iL7");t.exports=!e(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},JRM0:function(t,n,r){var e=r("nEaP"),o=r("Fup7").f,i=r("EvI5"),u=r("0K2p"),c=r("Ya6V"),f=r("v0JE"),a=r("9nX2");t.exports=function(t,n){var r,s,p,l,v,h=t.target,y=t.global,g=t.stat;if(r=y?e:g?e[h]||c(h,{}):(e[h]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(y?s:h+(g?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,s,l,t)}}},LMdw:function(t,n,r){var e=r("UVdV"),o=r("OVha"),i=r("rk7W"),u=r("gDYM");t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},"M/tt":function(t,n,r){var e=r("DJGK"),o=r("Qean");t.exports=function(t){return e(o(t))}},OVha:function(t,n,r){var e=r("8OJN"),o=r("ek/P").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},P2u4:function(t,n,r){var e=r("nEaP"),o=r("ne/+"),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},PCqT:function(t,n){t.exports=!1},Qean:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},QfWi:function(t,n,r){"use strict";r.r(n);r("GCui"),r("4SRy");var e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],o={startBtn:document.querySelector('button[data-action="start"'),stopBtn:document.querySelector('button[data-action="stop"'),bodyRef:document.querySelector("body")},i=[],u={isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.colorSwitch=setInterval(function(){var t;t=function(){var t=function(t,n){var r=Math.floor(Math.random()*(n-t+1)+t);return r},n=t(0,e.length-1);for(;n===i;)n=t(0,e.length-1);return n}(),o.bodyRef.style.backgroundColor=e[t],i=t},1e3))},stop:function(){clearInterval(this.colorSwitch),this.isActive=!1}};o.startBtn.addEventListener("click",u.start.bind(u)),o.stopBtn.addEventListener("click",u.stop.bind(u))},SkE4:function(t,n,r){var e,o,i,u=r("P2u4"),c=r("nEaP"),f=r("fT8P"),a=r("EvI5"),s=r("tF07"),p=r("3pC9"),l=r("s3NK"),v=c.WeakMap;if(u){var h=new v,y=h.get,g=h.has,d=h.set;e=function(t,n){return d.call(h,t,n),n},o=function(t){return y.call(h,t)||{}},i=function(t){return g.call(h,t)}}else{var b=p("state");l[b]=!0,e=function(t,n){return a(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},UVdV:function(t,n,r){var e=r("lUv3"),o=r("nEaP"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},VSW8:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},W9fh:function(t,n,r){var e=r("fT8P");t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},Ya6V:function(t,n,r){var e=r("nEaP"),o=r("EvI5");t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},"ek/P":function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},fSIz:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},fT8P:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},gDYM:function(t,n,r){var e=r("fT8P");t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},gIo2:function(t,n,r){var e=r("nEaP"),o=r("Ya6V"),i=r("PCqT"),u=e["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,n){return u[t]||(u[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},glsI:function(t,n,r){var e=r("wTAb"),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},jmUq:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},kMPr:function(t,n,r){var e=r("M/tt"),o=r("zrDt"),i=r("glsI"),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},lUv3:function(t,n,r){t.exports=r("nEaP")},mB8Z:function(t,n,r){var e=r("UVdV");t.exports=e("navigator","userAgent")||""},nEaP:function(t,n,r){(function(n){var r="object",e=function(t){return t&&t.Math==Math&&t};t.exports=e(typeof globalThis==r&&globalThis)||e(typeof window==r&&window)||e(typeof self==r&&self)||e(typeof n==r&&n)||Function("return this")()}).call(this,r("pCvA"))},nRc6:function(t,n,r){var e=r("Hvpk"),o=r("xwiM"),i=r("gDYM"),u=r("W9fh"),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},"ne/+":function(t,n,r){var e=r("gIo2");t.exports=e("native-function-to-string",Function.toString)},nrda:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},pCvA:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},rk7W:function(t,n){n.f=Object.getOwnPropertySymbols},s3NK:function(t,n){t.exports={}},tF07:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},v0JE:function(t,n,r){var e=r("tF07"),o=r("LMdw"),i=r("Fup7"),u=r("nRc6");t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},wTAb:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},xwiM:function(t,n,r){var e=r("Hvpk"),o=r("+iL7"),i=r("HRgQ");t.exports=!e&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},zrDt:function(t,n,r){var e=r("wTAb"),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}}},[["QfWi",1]]]);
//# sourceMappingURL=main.11b3c6fb827daca77004.js.map