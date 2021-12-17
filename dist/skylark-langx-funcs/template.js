/**
 * skylark-langx-funcs - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-objects","./funcs","./proxy"],function(t,e,n){Array.prototype.slice;var r={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},a=/(.)^/,u={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},o=/\\|'|\r|\n|\t|\u2028|\u2029/g;function c(e,c){var l;c=t.defaults({},c,r);var _=RegExp([(c.escape||a).source,(c.interpolate||a).source,(c.evaluate||a).source].join("|")+"|$","g"),i=0,s="__p+='";e.replace(_,function(t,n,r,a,c){return s+=e.slice(i,c).replace(o,function(t){return"\\"+u[t]}),n&&(s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(s+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),a&&(s+="';\n"+a+"\n__p+='"),i=c+t.length,t}),s+="';\n",c.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{l=new Function(c.variable||"obj","_",s)}catch(t){throw t.source=s,t}var p=n(function(t){return l.call(this,t,this)},this),g=c.variable||"obj";return p.source="function("+g+"){\n"+s+"}",p}return c.templateSettings=e.templateSettings=r,e.template=c});
//# sourceMappingURL=sourcemaps/template.js.map
