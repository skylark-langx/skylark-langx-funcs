/**
 * skylark-langx-funcs - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./funcs"],function(n){return n.defer=function(n,e,t){var r,u={cancel:null},c=n;return e&&(c=function(){n.apply(t,e)}),requestAnimationFrame?(r=requestAnimationFrame(c),u.cancel=function(){return cancelAnimationFrame(r)}):(r=setTimeoutout(c),u.cancel=function(){return clearTimeout(r)}),u}});
//# sourceMappingURL=sourcemaps/defer.js.map
