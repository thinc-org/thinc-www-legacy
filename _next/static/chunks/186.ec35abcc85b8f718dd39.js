(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{73431:function(n){var r=.1,t="function"===typeof Float32Array;function e(n,r){return 1-3*r+3*n}function u(n,r){return 3*r-6*n}function a(n){return 3*n}function i(n,r,t){return((e(r,t)*n+u(r,t))*n+a(r))*n}function o(n,r,t){return 3*e(r,t)*n*n+2*u(r,t)*n+a(r)}function f(n){return n}n.exports=function(n,e,u,a){if(!(0<=n&&n<=1&&0<=u&&u<=1))throw new Error("bezier x values must be in [0, 1] range");if(n===e&&u===a)return f;for(var c=t?new Float32Array(11):new Array(11),l=0;l<11;++l)c[l]=i(l*r,n,u);function s(t){for(var e=0,a=1;10!==a&&c[a]<=t;++a)e+=r;--a;var f=e+(t-c[a])/(c[a+1]-c[a])*r,l=o(f,n,u);return l>=.001?function(n,r,t,e){for(var u=0;u<4;++u){var a=o(r,t,e);if(0===a)return r;r-=(i(r,t,e)-n)/a}return r}(t,f,n,u):0===l?f:function(n,r,t,e,u){var a,o,f=0;do{(a=i(o=r+(t-r)/2,e,u)-n)>0?t=o:r=o}while(Math.abs(a)>1e-7&&++f<10);return o}(t,e,e+r,n,u)}return function(n){return 0===n?0:1===n?1:i(s(n),e,a)}}},1686:function(n,r,t){"use strict";t.d(r,{Z:function(){return o}});var e=t(19013),u=t(13882);function a(n,r){(0,u.Z)(2,arguments);var t=(0,e.Z)(n),a=(0,e.Z)(r);return t.getFullYear()-a.getFullYear()}function i(n,r){(0,u.Z)(2,arguments);var t=(0,e.Z)(n),a=(0,e.Z)(r),i=t.getTime()-a.getTime();return i<0?-1:i>0?1:i}function o(n,r){(0,u.Z)(2,arguments);var t=(0,e.Z)(n),o=(0,e.Z)(r),f=i(t,o),c=Math.abs(a(t,o));t.setFullYear(1584),o.setFullYear(1584);var l=i(t,o)===-f,s=f*(c-Number(l));return 0===s?0:s}},43186:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var e=t(67294),u=t(1686),a=t(73431),i=t.n(a),o=e.createElement,f=i()(.16,1,.27,.89);var c=function(n){var r=n.start,t=n.end,u=(0,e.useRef)(null);return(0,e.useEffect)((function(){!function(n,r,t,e){var u=null;window.requestAnimationFrame((function a(i){u||(u=i);var o=Math.min((i-u)/e,1),c=f(o);n.current&&(n.current.innerHTML="".concat(Math.floor(c*(t-r)+r))),c<1&&window.requestAnimationFrame(a)}))}(u,r,t,3e3)}),[]),o("span",{ref:u},r)},l=e.createElement,s=function(){var n=(0,u.Z)(new Date,new Date(1916,6,1));return l(c,{start:1,end:n})}}}]);