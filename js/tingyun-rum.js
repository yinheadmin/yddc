var TINGYUN=function(e,t,n){function r(e){var t=!!e&&"length"in e&&e.length,n=typeof e;return"function"!==n&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function i(e,t){var n,i=0;if(e)if(r(e))for(n=e.length;i<n&&!1!==t.call(e[i],e[i],i);i++);else for(i in e)if(!1===t.call(e[i],e[i],i))break;return e}function o(e){return function(t){return"Array"===e&&Array.isArray?Array.isArray(t):Object.prototype.toString.call(t)==="[object "+e+"]"}}function a(e){switch(typeof e){case"object":if(!e)return null;if(e instanceof Array)return i(e,function(t,n){e[n]=a(t)}),"["+e.join(",")+"]";if(e instanceof Date)return e.getTime().toString();var t="";return i(e,function(e,n){Pe(e)||(t+=a(n)+":"+a(e)+",")}),t&&(t=t.substr(0,t.length-1)),"{"+t+"}";case"string":return Xe+e.replace(Ge,"\\$1").replace(We,"\\n")+Xe;case"number":return isNaN(e)?null:e;case"boolean":return e;case"function":return a(e.toString());case"undefined":default:return'"undefined"'}}function c(e){return e&&Me(e)?He(e):e}function u(e,t,n,r){var i=function(){return Ke(e,t,i),n.apply(this,arguments)};return $e(e,t,i,r)}function s(e,t){return Function.prototype.apply.apply(e,t)}function f(e,t){return function(){e.apply(t,arguments)}}function l(e){return Qe?Qe(e):e}function d(e){return arguments.length<2||!e?e:(i(Ve.call(arguments,1),function(t){i(t,function(t,n){e[n]=t})}),e)}function h(e,t){for(var n=-1,r=0,i=null==e?0:e.length,o=[];++n<i;){var a=e[n];t(a,n,e)&&(o[r++]=a)}return o}function v(e,t){return e?t?e.replace(/\{(\w+.?\w+)\}/g,function(e,n){return t[n]||""}).replace(/\{(\d+)\}/g,function(e,n){return t[n]||""}):e:""}function p(e){return setTimeout(e,0)}function m(){}function g(){return+new Date}function y(e){return function(){if(null!==e){var t=e;e=null,t.apply(this,arguments)}}}function b(e){return e?Me(e)?e.length:t.ArrayBuffer&&e instanceof ArrayBuffer?e.byteLength:t.Blob&&e instanceof Blob?e.size:e.length?e.length:0:0}function _(e,t,n){return!!e&&(n=n||0,e.indexOf(t)==n)}function x(e){return et!==tt&&/^https/i.test(e&&e.protocol||et)?"https:":tt}function w(e,t,n,r){var o=null;return e&&t&&(o=x(r)+"//"+e+t,n&&(o+="?",i(n,function(e,t){var n=[l(t),"=",l(e),"&"];o+=n.join("")}),o+="__r="+g())),o}function S(){this.events={}}function k(e){return!(e in ct)||ct[e]}function E(e){var t=it.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?t[3]:null}function T(e,t,n){var r=e+"="+t;if(n){var i=new Date;i.setTime(i.getTime()+1e3*n),r+=";expires="+i.toGMTString()}it.cookie=r}function C(e,t,n){var r=it.createElement(e);try{for(var i in t)r[i]=t[i]}catch(a){var o="<"+e;for(var i in t)o+=" "+i+'="'+t[i]+'"';o+=">",n||(o+="</"+e+">"),r=it.createElement(o)}return r}function I(e,t,n,r){Pe(n)&&(r=n);var i=C("div",{style:zt}),o=C("iframe",{name:"ty_form",width:0,height:0,style:zt}),a=C("form",{style:zt,action:e,enctype:"application/x-www-form-urlencoded",method:"post",target:"ty_form"}),c=C("input",{name:"data",type:"hidden"},!0);c.value=Be(t),a.appendChild(c),i.appendChild(o),i.appendChild(a),it.body.appendChild(i),a.submit(),o.onreadystatechange=function(){o.readyState!==kt&&4!==o.readyState||(r(null,o.innerHTML),it.body.removeChild(i))}}function R(e,t,n){if(e&&n&&Pe(n)){var r=e[t];if(!r||!r._wrapped){var i=n(r);return i&&(i._wrapped=!0),e[t]=i,i}}}function q(e){At&&e()}function N(e){return function(){At&&e.apply(this,arguments)}}function z(){At=!1}function j(){Bt.on(bt,y(function(){e();var t=g();q(function(){Lt.load=t}),Ut.loadEventEnd=t})),i([bt,_t,xt,wt],function(e){$e(t,e,function(t){q(function(){(Lt.e[e]||(Lt.e[e]=[])).push(g())}),Bt.emit(e,t)})});var e=y(function(){var e=g();q(function(){Lt.end=e}),Ut.domContentLoadedEventStart=e,it.querySelectorAll&&(Ht.resources=Ht.resources||[],i(it.querySelectorAll("head>link,head>script"),function(e){var t;"LINK"==e.tagName?t=e.href:"SCRIPT"!=e.tagName||e.defer||e.async||(t=e.src),t&&Ht.resources.push(t)}))});$e(it,"DOMContentLoaded",e),$e(it,St,function(t){it.readyState===kt&&e()});var n=y(function(){Ut.touch=g()});i(["scroll","click","keypress"],function(e){u(it,e,n)});var r=t.requestAnimationFrame;!r||r.toString().indexOf("[native code]")<0||R(t,"requestAnimationFrame",function(e){return function(){if(!Ut.firstPaint){var n=g();q(function(){Lt.an.count++,Lt.an.t=n}),Ut.firstPaint=n,t.requestAnimationFrame=e}return e.apply(this,arguments)}})}function O(e){L(e,Mt)}function A(e){L(e,Ft)}function L(e,t){var n="ok";if(!e)return n=t.length?t.join("\n"):n;t.push(e)}function D(){var e=this;e.xhrs={},e.errs=[],S.call(e)}function H(e,t){this.flags=0,Pe(e.create)&&(this.create=e.create,this.flags|=Qt),Pe(e.before)&&(this.before=e.before,this.flags|=Vt),Pe(e.after)&&(this.after=e.after,this.flags|=Zt),Pe(e.error)&&(this.error=e.error,this.flags|=en),this.data=t}function B(e,t){if(!nn){if(!Ue(e)||!e)throw new TypeError("callbacks arguments must be an object");return nn=new H(e,t)}}function M(e){var t=nn.data;if(0!=(nn.flags&Qt)){var n=nn.create(nn.data);n!==undefined&&(t=n)}return function __ty_aysncWrap__(){0!=(nn.flags&Vt)&&nn.before(this,t);var n=__ty_aysncWrap__;n._&&(n._=1);try{var r=e.apply(this,arguments)}catch(i){throw 0!=(nn.flags&en)&&nn.error(t,i),i}return 0!=(nn.flags&Zt)&&nn.after(this,t),r}}function F(e){return!nn||nn.flags<=0?e:M(e)}function P(){function e(e){return function(t){var n=Ve.call(arguments,0);Pe(t)&&(n[0]=F(t));var r=this;try{return e.apply(r,n)}catch(i){}return s(e,[r,n])}}R(t,"setTimeout",e),R(t,"setInterval",e)}function U(){this.id=null,this.active=null,this._set=[]}function Y(){P();var e=new U;return e.id=B({create:function(){return e.active},before:function(t,n){n&&e.enter(n)},after:function(t,n){n&&e.exit(n)},error:function(t,n){if(t){try{n.moduleId=t.moduleId}catch(r){}e.exit(t)}}}),e}function X(e){Kt&&console.warn(e||"Event key required!")}function G(e){e=e||{},this.key=e.key;var t=e.timeout||6e5;this.i=t?setTimeout(f(this.fail,this),t):null,this.status=1,this.remain=0,this.xhrs=[],this.s=g(),this.e=null,this.called=this.sent=!1}function W(e){var t=e[dn];t?(t=parseInt(t),new Date(t).toDateString()===(new Date).toDateString()?e[hn]=!0:e[hn]=!1,e[vn]=!1):(e[dn]=g(),e[hn]=!0,e[vn]=!0)}function J(e){var t=it.referrer;t&&!function(e,t){var n=e.indexOf("?");if(n>-1&&(e=e.substr(0,n)),e=e.replace(/^http(s)?:\/\//,""),_(e,t))return!0;var r=gn.exec(e),i=gn.exec(t);return r&&i?r[2]==i[2]:_(e,t)}(t,ft.host)&&(e[pn]=t)}function $(e){var t={};if(!(e=e||ft.href))return t;var n=e.indexOf("?");return n>=0&&(e=e.substring(n+1)),e?(i(e.split("&"),function(e){var n=e.split("="),r=K(n[0]),i=K(n[1]);r&&i&&(t[r]=i)}),t):t}function K(e){try{return decodeURIComponent(e)}catch(t){}return null}function Q(){return c(pt(ln))||{}}function V(e,t){var n;if(Ue(e))n=e;else{if(!Me(e)||t===undefined)throw new rt(Wt);(n={})[e]=t}return i(n,function(e,t){t in bn?Dt[bn[t]]=e:Dt[t]=e}),this}function Z(){if(Object.defineProperty){var e=t[It];Object.defineProperty(t,It,{get:function(){return xn++>0&&t.console&&console.warn("window.%s is deprecated, use window.%s instead.",It,Rt),e}})}}function ee(e){try{return c(e)}catch(t){O(t&&t.message)}return null}function te(){return Ut[Tn]||Ut._end}function ne(){return Ut.loadEventEnd||Ut._end}function re(e){function r(t){return e[t]>0?e[t]-a:0}var o={},a=n;if(e){q(function(){var t=Lt.t={};i(e,function(e,n){Pe(e)||(t[n]=e)})}),a=e.navigationStart,o={f:r(wn),qs:r(Sn),rs:r(kn),re:r(En),os:r(Tn),oe:r(Cn),oi:r(In),oc:r(Rn),ls:r(qn),le:r(Nn),tus:r(zn),tue:r(jn)};var c=r(On),u=r(An),s=r(Ln),f=r(Dn),l=r(Hn),d=r(Bn);if(d-l>0&&(o.cs=l,o.ce=d),u-c>0&&(o.ds=c,o.de=u),(f-s>0||f>0)&&(o.es=s,o.ee=f),0==o.le){var h=ne();o.ue=h-a,me()&&(o.ue=h-n)}Ut._le=o.ue||o.le;var v,p;if(e.msFirstPaint)v=e.msFirstPaint,q(function(){Lt.fp="m_"+v});else if((p=t.chrome)&&p.loadTimes){var m=p.loadTimes();m&&m.firstPaintTime&&(v=1e3*m.firstPaintTime),q(function(){Lt.fp="c_"+m.firstPaintTime})}else Ut.firstPaint&&(v=Ut.firstPaint,q(function(){Lt.fp=v}));v&&(o.fp=Math.round(v-a),Ut.fp=o.fp),e[Mn]&&(o.sl=r(Mn))}else o={t:a,os:te()-a,ls:ne()-a};return o.je=Ut.errs&&Ut.errs.length||0,Ut.ct&&(o.ct=Ut.ct-a),Ut.touch&&(o.fi=Ut.touch-a),o}function ie(e,t){var r={tr:!1,tt:l(it.title),charset:it.characterSet};Dt.resources&&d(r,Dt.resources),q(function(){r.debug=Lt}),z();var o=Ut.errs;i(o,function(e,r){var i=e.toObject();i.o=i.o-t&&t.navigationStart||n,me()&&(i.o=i.o-n),o[r]=i}),r.err=o;var a="getEntriesByType";return e[a]?(r.tr=!0,r.res=[],i(e[a]("resource"),function(e){function t(t){var n=e[t];return n>0?n:0}var n=e.initiatorType,i=e.name,o={o:t("startTime"),rt:n,n:i,f:t(wn),ds:t(On),de:t(An),cs:t(Hn),ce:t(Bn),sl:t(Mn),qs:t(Sn),rs:t(kn),re:t(En),ts:e.transferSize||0,es:e.encodedBodySize||0};if(me()&&(o.ec=e.errorCode||0),"xmlhttprequest"===n){var a=oe(i);a&&(o.aid=a.id,o.atd=a.trId,o.an=a.action,o.aq=a.time&&a.time.qu,o.as=a.time&&a.time.duration)}r.res.push(o)})):A(v(Gt,[a])),r}function oe(e){var t;return i(Ut.xhrs,function(n,r){if(r&&r.indexOf(e)>-1)return t=n,!1}),t}function ae(e){var t={};return e&&(t.id=e.id,t.a=e.a,t.q=e.q,t.tid=e.tid,t.n=e.n),t}function ce(e){var t=0,n=e.timing;return n?e.getEntriesByName&&(t=n.domLoading,i(Ht.resources,function(r){var i=e.getEntriesByName(r);if(1==i.length){var o=i[0].responseEnd+n.navigationStart;o>t&&(t=o)}}),t-=n.navigationStart):A("fp=0"),q(function(){Lt._fp=t}),Math.round(t)}function ue(e,n,r,o){var a=r||0,c=Dt.firstScreenResources;if(c&&c.length&&e.getEntriesByName)return i(c,function(t){var n=e.getEntriesByName(t);if(n.length){var r=n[0].responseEnd;r>a&&(a=r)}}),o.fs_s=1,Math.round(a);if(!it.createElement("img").getBoundingClientRect)return q(function(){Lt.fs=a}),a;if(e.getEntriesByName){var u=t.innerHeight,s=t.innerWidth,f=[];i(it.querySelectorAll("img"),function(e){e.src&&se(fe(e),u,s)&&!le(e)&&f.push(e.src)});var l=(n.loadEventEnd||Ut.loadEventEnd)-n.navigationStart;i(f,function(t){var n=e.getEntriesByName(t);if(n.length){var r=n[0],i=r.responseEnd;r.fetchStart<=l&&i>a&&(a=i)}})}return Math.round(a)}function se(e,n,r){if(e){var i=t.pageYOffset;if(e.top+(0===i?0:i||it.scrollTop||0)-(it.clientTop||0)>=n)return!1;var o=e.left;return o>=0&&o<r}return!1}function fe(e){return Pe(e.getBoundingClientRect)?e.getBoundingClientRect():undefined}function le(e){return vt.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:de(e)}function de(e){for(;e&&1===e.nodeType;){if("none"===he(e)||"hidden"===e.type)return!0;e=e.parentNode}return!1}function he(e){return e.style&&e.style.display}function ve(e){var t=n,r=0;return e&&(t=e.navigationStart||t,r=e[Tn]||e.domInteractive||e.domLoading||r,me())?r-t:(r=Ut[Tn]||r||Ut._end)-t}function pe(e){if(e){var t=e.fetchStart;if(t)return t-e.navigationStart}return undefined}function me(){return t.nbperf&&t.nbperf.data}function ge(e){var t;return e&&(t=!0,i(e,function(){return t=!1})),!!t}function ye(e){return function __ty_aysncWrap__(t,n){var r=this,i=__ty_aysncWrap__;if(i._&&(i._=1),!r[Nt]){var o=r[It]={};o.method=t,o.url=n,o.id=Wn++;var a=on.get("event");a&&(o.key=a.key,a.remain++)}try{return e.apply(r,arguments)}catch(c){}return s(e,[r,arguments])}}function be(e){return function __ty_aysncWrap__(t){var n=this,r=__ty_aysncWrap__;if(r._&&(r._=1),!n[Nt]){var i=n[It];i&&(i.start=g(),i.reqSize=b(t)),_e(n),n.setRequestHeader&&ct.id&&i&&Kn(i.url)&&(i.r=g()%1e9,n.setRequestHeader("X-Tingyun-Id",ct.id+";r="+i.r))}try{return e.apply(n,arguments)}catch(o){}return s(e,[n,arguments])}}function _e(e){function t(t){return F(function __ty_aysncWrap__(){var n=__ty_aysncWrap__;n._&&(n._=1),xe(e);var r;if(Pe(t)){var i=e[It];if(i&&4==e.readyState)var o=g();r=t.apply(this,arguments),i&&4==e.readyState&&(i.cbTime=g()-o,e[It]=null)}return r})}function n(t){e[It]&&(e[It].errorCode=t)}if(e[$n])R(e,$n,t);else try{$e(e,St,F(function __ty_aysncWrap__(){var t=__ty_aysncWrap__;t._&&(t._=1),xe(e)})),i(Jn,function(t,r){$e(e,r,function(){n(t)})})}catch(r){return void p(function(){i(Jn,function(t,r){var i="on"+r;e[i]?R(e,i,function(e){if(n(t),Pe(e))return e.apply(this,arguments)}):e[i]=function(){n(t)}}),R(e,$n,t)})}p(function(){R(e,$n,t)})}function xe(e){var t=e[It];if(t&&(t.end=g(),t.readyState=e.readyState,4==e.readyState)){t.status=e.status,t.resSize=we(e);var n=on.get("event");p(function(){var r=!1;if(i(Gn,function(e){if(e.id===t.id)return r=!0,!1}),!r){var o=Se(t,e);n&&n.key==t.key&&(n.xhrs.push(o),0==--n.remain&&n._end()),Ut.xhrs&&(Xn(t),Ut.xhrs[t.url]=o),Gn.push(o)}})}}function we(e){var t=0;if(""==e.responseType||"text"==e.responseType)t=b(e.responseText);else if(e.response)t=b(e.response);else try{t=b(e.responseText)}catch(n){}return t}function Se(e,t){if(e){var n=e.status,r={id:e.id,req:e.method+" "+e.url,start:e.start,du:n>0?e.end-e.start:0,cb:e.cbTime||0,status:n,err:e.errorCode?e.errorCode:0,rec:e.resSize,send:e.reqSize};if(e.r){var i=Ee(t,e);i&&(r.s_id=i.id,r.s_name=i.action,i.time&&(r.s_du=i.time.duration,r.s_qu=i.time.qu),r.t_id=i.trId)}return r}}function ke(e,t){if(e&&e.getResponseHeader)return e.getResponseHeader(t)}function Ee(e,t){var n=ee(ke(e,"X-Tingyun-Tx-Data"));return n&&n.r&&Te(n.r)===Te(t.r)?n:null}function Te(e){return e+""}function Ce(){return setInterval(function(){if(Gn&&Gn.length){var e=[];i(Gn,function(t){e.push(t)});var n=null;Dt.ulabel&&(n={ulabel:Dt.ulabel}),Ut.emit("send","/xhr1",n,{xhr:e},function(){Gn=h(Gn,function(t){return e.indexOf(t)<0})}),Ze()&&!t.XDomainRequest&&(Gn=[])}},Un)}function Ie(){var e=ot&&ot.prototype;return e?(R(e,"open",ye),R(e,"send",be)):ot&&(t.XMLHttpRequest=function(){var e=new ot;return R(e,"open",ye),R(e,"send",be),e}),Ce()}function Re(e){this.limit=e,this.reset()}function qe(e,t,n,r){return String(e)+String(t)+String(n)+String(r)}function Ne(e,t,n,r,i,o,a){var c=this;c.id=e,c.time=g(),c.msg=t,c.lineno=r,c.colno=i,c.filename=n,c.count=1,c.stack=o&&o.stack||"",c.module=a,c.fix();var u=er[e];c.ep=u?0:1,er[e]=!0}function ze(e){var t=function(e){var t=[];return i(e,function(e){t.push(e.toObject())}),t}(Zn.c);if(!t||!t.length)return null;var r={fu:Vn||Vn++,os:parseInt((g()-(Ht.pfStart||n))/1e3)};Dt.ulabel&&(r.ulabel=Dt.ulabel),Ut.emit("send","/err1",r,{datas:t},f(Zn.reset,Zn))}function je(e,t,n,r,o){if(t||!ut){var a=!1;if(i(at.domains,function(e){if(a=e.test(t))return!1}),!a){var c=o&&o.moduleId,u=qe(e,n,r,c),s=Zn.get(u);s?s.increase():(s=new Ne(u,e,t,n,r,o,c),Zn.add(u,s),Ut.errs&&Ut.errs.push(s))}}}function Oe(){var e=t.onerror;t.onerror=function(t,n,r,i,o){if(je(t,n,r,i,o),Pe(e))return e.apply(this,arguments)},t.onerror._ty=!0}function Ae(){var e=t.onerror;e&&e._ty||Oe()}function Le(){var e=Ze();return e?Oe():$e(t,yt,function(e){var n,r,i,o,a;(e instanceof t.Event||t.ErrorEvent&&e instanceof t.ErrorEvent)&&(n=e.message||e.error&&(e.error.message||e.error.constructor.name)||"",r=e.lineno||0,i=e.colno||0,(o=e.filename||e.error&&e.error.filename||e.target&&e.target.baseURI||"")==it.URL&&(o="#"),a=e.error),je(n,o,r,i,a)}),Bt.on([bt,_t,xt,wt],function(e){ze()}).on(bt,function(){e&&p(Ae)}),setInterval(ze,Qn)}function De(){var e=Array.prototype;e.indexOf||(e.indexOf=function(e,t){var n=this.length>>>0;if((t|=0)<0)t=Math.max(n-t,0);else if(t>=n)return-1;if(e===undefined){do{if(t in this&&this[t]===undefined)return t}while(++t!==n)}else do{if(this[t]===e)return t}while(++t!==n);return-1})}var He,Be,Me=o("String"),Fe=o("Array"),Pe=o("Function"),Ue=o("Object"),Ye=o("Undefined"),Xe='"',Ge=/([\"\\])/g,We=/\n/g,Je=t.JSON;Je&&Je.parse&&Je.stringify?(He=function(e){return JSON.parse(e)},Be=function(e){return JSON.stringify(e)}):(He=function(e){return new Function("return "+e)()},Be=a);var $e,Ke;t.addEventListener?($e=function(e,t,n,r){return e.addEventListener(t,n,r)},Ke=function(e,t,n){return e.removeEventListener(t,n)}):($e=function(e,t,n){return e.attachEvent("on"+t,n)},Ke=function(e,t,n){return e.detachEvent("on"+t,n)});var Qe=t.encodeURIComponent,Ve=[].slice,Ze=new Function("return!+[1,]"),et=t.location.protocol,tt="http:",nt=function(){function e(e){return e<0?NaN:e<=30?0|Math.random()*(1<<e):e<=53?(0|Math.random()*(1<<30))+(0|Math.random()*(1<<e-30))*(1<<30):NaN}function t(e,t){for(var n=e.toString(16),r=t-n.length,i="0";r>0;r>>>=1,i+=i)1&r&&(n=i+n);return n}return function(){return t(e(32),8)+"-"+t(e(16),4)+"-"+t(16384|e(12),4)+"-"+t(32768|e(14),4)+"-"+t(e(48),12)}}();S.prototype={on:function(e,t){var n=this;return Me(e)?(n.events[e]||(n.events[e]=[])).push(t):Fe(e)&&i(e,function(e){n.on(e,t)}),n},off:function(e,t){var n=arguments.length,r=this;if(0===n)return r.events={},r;var i=r.events[e];if(!i)return r;if(1===n)return r.events[e]=null,r;for(var o=i.length;o--;)if(i[o]===t){i.splice(o,1);break}return r},emit:function(e){var t=[].slice.call(arguments,1),n=this.events[e];return n&&i(n,function(e){return e.apply(this,t)}),this},unshift:function(e,t){var n=this;return(n.events[e]||(n.events[e]=[])).unshift(t),n}};var rt=t.Error,it=t.document,ot=t.XMLHttpRequest,at={};e(at);var ct=at.server||{};ct=d({fp_threshold:2e3,fs_threshold:4e3,dr_threshold:4e3},ct);var ut=k("ignore_err"),st=k("debug"),ft=t.location,lt=t.navigator,dt=t.HTMLElement,ht=function(){try{var e=nt();return t.localStorage.setItem(e,e),t.localStorage.removeItem(e),!0}catch(n){return!1}}(),vt={};vt.localStorage=ht,function(){function e(){var e,f,l=it.documentElement;l.appendChild(u),s.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",n=i=c=!1,r=a=!0,t.getComputedStyle&&(f=t.getComputedStyle(s),n="1%"!==(f||{}).top,c="2px"===(f||{}).marginLeft,i="4px"===(f||{width:"4px"}).width,s.style.marginRight="50%",r="4px"===(f||{marginRight:"4px"}).marginRight,(e=s.appendChild(it.createElement("div"))).style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",e.style.marginRight=e.style.width="0",s.style.width="1px",a=!parseFloat((t.getComputedStyle(e)||{}).marginRight),s.removeChild(e)),s.style.display="none",(o=0===s.getClientRects().length)&&(s.style.display="",s.innerHTML="<table><tr><td></td><td>t</td></tr></table>",(e=s.getElementsByTagName("td"))[0].style.cssText="margin:0;border:0;padding:0;display:none",(o=0===e[0].offsetHeight)&&(e[0].style.display="",e[1].style.display="none",o=0===e[0].offsetHeight)),l.removeChild(u)}it.documentElement;var n,r,i,o,a,c,u=it.createElement("div"),s=it.createElement("div");s.style&&(s.style.cssText="float:left;opacity:.5",vt.opacity="0.5"===s.style.opacity,vt.cssFloat=!!s.style.cssFloat,s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",vt.clearCloneStyle="content-box"===s.style.backgroundClip,(u=it.createElement("div")).style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.innerHTML="",u.appendChild(s),vt.boxSizing=""===s.style.boxSizing||""===s.style.MozBoxSizing||""===s.style.WebkitBoxSizing,vt.reliableHiddenOffsets=function(){return null==n&&e(),o})}();var pt,mt;vt.localStorage?(pt=function(e){return t.localStorage.getItem(e)},mt=function(e,n){return t.localStorage.setItem(e,n),n}):(pt=E,mt=T);var gt,yt="error",bt="load",_t="unload",xt="beforeunload",wt="pagehide",St="readystatechange",kt="complete",Et="TY_DISTINCT_ID",Tt="TY_SESSION_ID",Ct=86400,It="_ty_rum",Rt="TINGYUN",qt=2,Nt="__ign",zt="display:none",jt="POST",Ot=function(e,t){t=t||m;var n=new Image;$e(n,St,function(){"loaded"!=n.readyState&&4!=n.readyState||t(null)},!1),$e(n,bt,function(){t(null)},!1),$e(n,yt,function(){t(yt)},!1),n.src=e};t.XDomainRequest?gt=function(e,t,n,r){Pe(n)&&(r=n);var i=new XDomainRequest;i.open(jt,e),i.onload=function(){r(null,i.responseText)},i.onerror=function(e){r(e)},i.send(Be(t))}:Ze()?gt=I:lt.sendBeacon?Ot=gt=function(e,t,n,r){Pe(n)&&(r=n,n=null),lt.sendBeacon(e,Be(t))&&r&&r()}:gt=function(e,t,n,r){Pe(n)&&(r=n,n=null);var i=y(r),o=new ot;o[Nt]=!0,o.overrideMimeType&&o.overrideMimeType("text/html"),o.onreadystatechange=function(){4==o.readyState&&200==o.status&&i(null,o.responseText)},o.onerror=i,t=Be(t);try{o.open(jt,e,!0)}catch(c){return I(e,t,i)}for(var a in n)o.setRequestHeader(a,n[a]);o.send(t)};var At=st,Lt={start:n,e:{},an:{count:0},visible:[]},Dt={},Ht={};!function(){if(st){var e,t,n="visibilitychange";Ye(it.hidden)?Ye(it.msHidden)?Ye(it.webkitHidden)||(e="webkitHidden",t="webkit"+n):(e="msHidden",t="ms"+n):(e="hidden",t=n),Ye(it.addEventListener)||Ye(it[e])||$e(it,t,N(function(){Lt.visible.push([it[e],g()])}))}}();var Bt=new S,Mt=[],Ft=[],Pt=D.prototype;Pt.start=function(){if(!ct.key)return O("missing config, agent disabled!"),!1;var e=t[It]||t[Rt];return e&&e.server?(O("already loaded!"),!1):(j(),this)},d(Pt,S.prototype);var Ut=new D;Ut.on("send",function(e,t,n,r){var i=w(ct.beacon,e,d({},Yt,t||{}));switch(r=r||m,e){case"/pf":n?gt(i,n,function(){Ut.xhrs=Ut.errs=null,r()}):Ot(i,r);break;default:gt(i,n,r)}});var Yt={pvid:nt(),ref:it.URL,referrer:it.referrer,key:ct.key,v:"1.7.5.0108",av:"1.7.5.0108",did:function(){var e=pt(Et);return e||mt(Et,nt(),Ct)}(),sid:function(){var e=E(Tt);return e||(e=nt(),T(Tt,e)),e}()},Xt=dt?function(e){return e instanceof dt}:function(e){e&&"object"==typeof e&&1===e.nodeType&&Me(e.nodeName)},Gt="{0} not support",Wt="illegal argument",Jt="{0} is invalid",$t={},Kt="undefined"!=typeof t.console,Qt=1,Vt=2,Zt=4,en=8,tn=H.prototype;tn.create=tn.before=tn.after=tn.error=null;var nn;U.prototype={createContext:function(){return Object.create?Object.create(this.active):Y(this.active)},get:function(e){if(this.active)return this.active[e]},set:function(e,t){if(this.active)return this.active[e]=t},enter:function(e){if(!e)throw new rt("context required!");this._set.push(this.active),this.active=e},exit:function(e){if(!e)throw new rt("context required!");if(e!==this.active){var t=this._set.lastIndexOf(e);if(t<0)throw new rt("context not currently entered!");this._set.splice(t,1)}else this.active=this._set.pop()},bind:function(e,t){t||(t=this.active?this.active:this.createContext());var n=this;return function(){n.enter(t);try{return e.apply(this,arguments)}catch(r){try{r.moduleId=t.moduleId}catch(i){}throw r}finally{n.exit(t)}}}};var rn=!1,on=(rn||(on=Y(),rn=!0),on),an=X.prototype;an.fail=an.end=m;var cn=G.prototype;cn.end=cn.finish=cn.fail=null,cn.send=function(e){var t=this;t.sent=!0;var n=e.event&&e.event.xhrs||[];i(n,function(e){e.start=e.start-t.s});var r={key:t.key,duration:t.e-t.s,status:t.status,xhrs:n};Ut.emit("send","/spe",null,r,m)};var un={},sn={},fn=t.screen;fn&&(sn.sh=fn.height,sn.sw=fn.width);var ln="_ty_uf_data",dn="_ty_first_day",hn="is_first_day",vn="is_first_time",pn="latest_referrer",mn=2592e3,gn=new RegExp(/(.*?)\.?([^\.]*?)\.?(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/);!function(){var e=Q();W(e),J(e);var t=$(ft.search);i(["source","medium","term","content","campaign"],function(n){var r="utm_"+n;t[r]&&(e["latest_"+r]=t[r])}),e.pageref=it.referrer||"",e.first_browser_language=lt.language||lt.browserLanguage,e[pn]=e[pn]||"",e.screen_height=sn.sh,e.screen_width=sn.sw,mt(ln,Be(e),mn);var n=d({},e);delete n[dn],Dt.resources={uf:n}}();var yn=function(){var e=Q();return delete e[dn],e},bn={host:"cshst",url:"csurl"},_n={version:"1.7.5.0108",config:V,DIAGNOSE_HREF:qt,diagnose:function(e){function t(e,t,r){var i=r||"log",o=n[e]||(n[e]={});o[i]=o[i]||"",o[i]+=t}var n={},r=O();if(t("Status",r,"ok"!==r),t("Debug",A()),i($t,function(e,n){t("Timeline",n+": "+e.toString())}),!e&&Kt)console.log("[TingYun Agent Diagnosis]\n"),i(n,function(e,t){i(console[t],function(e,t){console[t](e)})});else{if(e!==qt)return Be(n);ft.href=ft.href+"#"+Be(n)}},createEvent:function(e){var t=(e=e||{}).key;if(!t)return new X;if(un[t])return new X("event "+t+" is executing");un[t]=!0;var n=on.createContext();on.enter(n);var r=new G(e);return on.set("event",r),r._end=function(){var e=this;!e.sent&&0===e.remain&&e.called&&e.finish().send(n)},r.end=function(e){var t=this;t.called?Kt&&console.warn("Event "+this.key+"has ended or failed!"):(t.called=!0,on.exit(n),t.status=arguments.length?e:1,t._end())},r.finish=function(e){var t=this;return t.e=g(),t.i&&clearTimeout(t.i),delete un[t.key],t},r.fail=function(){this.end(0)},r},logFirstScreen:function(e){if(e){var t=Dt.firstScreenResources=Dt.firstScreenResources||[];Fe(e)||(e=[e]),i(e,function(e){if(Me(e))t.push(e);else if(Xt(e)){var n=e.src||e.href;n&&t.push(n)}})}},addExcludedDomain:function(e){Fe(e)||(e=[e]),i(e,function(e){if(e){if(!(e instanceof RegExp))throw new rt("parameter's type requires RegExp");(at.domains||(at.domains=[])).push(e)}})}};_n.ty_set_userprofile=_n.setUserProfile=function(e,t){if(!e||!e.id)throw new rt(v(Jt,["User or userId"]));Ut.emit("send","/userprofile",null,{user:e,properties:t||{}})},_n.ty_track_event=_n.trackEvent=function(e,t,n){if(!Me(e))throw new rt(v(Jt,["EventId"]));Ut.emit("send","/event",null,{event_id:e,tag:t||"",properties:n||{},uf:yn()})},_n.setUserLabel=function(e){if(Me(e))return V("ulabel",e);throw new rt(Wt)},t[It]=t[Rt]=_n;var xn=0,wn="fetchStart",Sn="requestStart",kn="responseStart",En="responseEnd",Tn="domContentLoadedEventStart",Cn="domContentLoadedEventEnd",In="domInteractive",Rn="domComplete",qn="loadEventStart",Nn="loadEventEnd",zn="unloadEventStart",jn="unloadEventEnd",On="domainLookupStart",An="domainLookupEnd",Ln="redirectStart",Dn="redirectEnd",Hn="connectStart",Bn="connectEnd",Mn="secureConnectionStart",Fn=function(e){if(!e.agent){var n=t._ty_rum;if(n&&n.agent)e.agent=n.agent;else{var r=E("TINGYUN_DATA");if(r){try{e.agent=ee(decodeURIComponent(r))}catch(i){O(i&&i.message)}T("TINGYUN_DATA","",-1e3)}}}return e.agent}(at);Fn&&Fn.ulabel&&(Dt.ulabel=Fn.ulabel);var Pn=function(){var e=y(function(){function e(e){return e?"1":"0"}var r=t.performance;r||(r=ee(me()||""));var o=!!r;o&&ge(r)&&(o=!1),o||A(v(Gt,["pf"]));var a=ae(Fn),c=r&&r.timing,u=d(re(c),a,Dt),s=d({},sn);Ut.fp?(s.fp=Ut.fp,o&&Ut.fp>Ut._le&&(A("fp>le"),s.fp=ce(r),s.__fp=2)):o?(s.fp=ce(r),s.__fp=1):s.fp=s.__fp=0,s.dr=ve(c),o?s.fs=ue(r,c,s.fp,s):s.__fs=0;var f,l="";if(o){var h=Math.max(u.ls,0);h||(h=ne()-c.navigationStart||n),s.trace=h;var p=pe(c);i(["fp","fs","dr","trace"],function(t){l+=e((p?s[t]-p:s[t])>=ct[t+"_threshold"])}),delete s.trace,l.indexOf("1")>-1&&(f=ie(r,c))}s.trflag=l||"0000",Ht.pfStart=g(),delete u.firstScreenResources,delete u.resources,Ut.emit("send","/pf",d(u,s),f,function(){A("pf sent!"),Ut.xhrs=Ut.errs=null})});return Bt.on(bt,function(){p(e)}).on([_t,xt,wt],e)},Un=2e3,Yn=function(e){var t=[];return i(ct.custom_urls,function(e){try{t.push(new RegExp(e))}catch(n){O(n&&n.message)}}),t}(),Xn=Yn.length?function(e){var t=e.url;!Ut.ct&&t&&i(Yn,function(n){if(t.match(n))return Ut.ct=e.end+e.cbTime,!1})}:m,Gn=[],Wn=0,Jn={error:990,abort:905,timeout:903},$n="on"+St,Kn=function(){function e(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}var t=/(msie|trident)/i.test(lt.userAgent),n=it.createElement("a"),r=e(ft.href);return function(t){var n=e(t);return n.protocol===r.protocol&&n.host===r.host}}(),Qn=1e4,Vn=0;Re.prototype={add:function(e,t){this.len>this.limit||this.get(e)||(this.c[e]=t,this.len++)},get:function(e){return this.c[e]},reset:function(){this.c={},this.len=0}};var Zn=new Re(100),er={};return Ne.prototype={increase:function(){this.count++},fix:function(){var e=this,t=e.stack;if(t&&Me(t)){var n=[];i(t=t.split(/\n/),function(e,t){-1==e.indexOf("__ty_aysncWrap__")&&n.push(e)}),e.stack=n.join("\n")}},toObject:function(){var e=this;return{o:e.time,e:e.msg,l:e.lineno,c:e.colno,r:e.filename,ec:e.count,s:e.stack,m:e.module,ep:e.ep}}},De(),Ut.start()&&(Pn(),Ie(),Le()),Ut._end=g(),q(function(){Lt._end=Ut._end}),Z(),_n}(function(ty_rum){ty_rum.server = {id:'p35OnrDoP8k',beacon:'ty.tingyunfenxi.com',beacon_err:'ty.tingyunfenxi.com',key:'GPtaVfCDcy0',trace_threshold:7000,custom_urls:[],sr:1.0};},window,+new Date);