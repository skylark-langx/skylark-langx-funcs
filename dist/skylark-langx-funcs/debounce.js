/**
 * skylark-langx-funcs - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./funcs","./defer"],function(n,e){return n.debounce=function(n,t,u){var c,i,o=function(){var o=this,f=arguments;return r(),c=setTimeout(function(){c=null,u?i=e(n,f,o):n.apply(o,f)},t),{cancel:r}},r=o.cancel=function(){c&&clearTimeout(c),i&&i.stop(),c=void 0,i=void 0};return o}});
//# sourceMappingURL=sourcemaps/debounce.js.map
