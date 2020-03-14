/**
 * skylark-langx-funcs - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects"],function(n,t,e){var r=e.mixin,u=Array.prototype.slice,a=t.isFunction,o=t.isString;var i=function(){function n(){}return function(t,e){n.prototype=t;var u=new n;return n.prototype=null,e&&r(u,e),u}}(),c={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};return n.attach("langx.funcs",{debounce:function(n,t){var e;return function(){var r=this,u=arguments;e&&clearTimeout(e),e=setTimeout(function(){e=null,n.apply(r,u)},t)}},delegate:i,defer:function(n){return requestAnimationFrame?requestAnimationFrame(n):setTimeoutout(n),this},negate:function(n){if("function"!=typeof n)throw new TypeError("Expected a function");return function(...t){return!n.apply(this,t)}},noop:function(){},proxy:function n(t,e){var r=2 in arguments&&u.call(arguments,2);if(a(t))return function(){return t.apply(e,r?r.concat(u.call(arguments)):arguments)};if(o(e))return r?(r.unshift(t[e],t),n.apply(null,r)):n(t[e],t);throw new TypeError("expected function")},returnTrue:function(){return!0},returnFalse:function(){return!1},templateSettings:c,template:function(n,t,r){!t&&r&&(t=r),t=e.defaults({},t,c);var u,a=RegExp([(t.escape||noMatch).source,(t.interpolate||noMatch).source,(t.evaluate||noMatch).source].join("|")+"|$","g"),o=0,i="__p+='";n.replace(a,function(t,e,r,u,a){return i+=n.slice(o,a).replace(escapeRegExp,escapeChar),o=a+t.length,e?i+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":r?i+="'+\n((__t=("+r+"))==null?'':__t)+\n'":u&&(i+="';\n"+u+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{u=new Function(t.variable||"obj","_",i)}catch(n){throw n.source=i,n}var l=function(n){return u.call(this,n,_)},p=t.variable||"obj";return l.source="function("+p+"){\n"+i+"}",l}})});
//# sourceMappingURL=sourcemaps/funcs.js.map