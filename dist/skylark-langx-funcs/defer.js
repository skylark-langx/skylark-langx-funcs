/**
 * skylark-langx-funcs - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./funcs"],function(n,e){return e.defer=function(e,t,i,c){var u={cancel:null},r=e;if(n.isNumber(t)||n.isFunction(t)||(c=i,i=t,t=0),i&&(r=function(){e.apply(c,i)}),n.isFunction(t)){var a=!1;t(function(){a||r()}),u.cancel=function(){a=!0}}else{var o;0==t&&requestAnimationFrame?(o=requestAnimationFrame(r),u.cancel=function(){return cancelAnimationFrame(o)}):(o=setTimeoutout(r,t),u.cancel=function(){return clearTimeout(o)})}return u}});
//# sourceMappingURL=sourcemaps/defer.js.map
