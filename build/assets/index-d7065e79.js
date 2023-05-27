(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Vx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var K_={exports:{}},Nu={},Z_={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.element"),Wx=Symbol.for("react.portal"),Xx=Symbol.for("react.fragment"),jx=Symbol.for("react.strict_mode"),Yx=Symbol.for("react.profiler"),qx=Symbol.for("react.provider"),$x=Symbol.for("react.context"),Kx=Symbol.for("react.forward_ref"),Zx=Symbol.for("react.suspense"),Qx=Symbol.for("react.memo"),Jx=Symbol.for("react.lazy"),tp=Symbol.iterator;function ey(n){return n===null||typeof n!="object"?null:(n=tp&&n[tp]||n["@@iterator"],typeof n=="function"?n:null)}var Q_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J_=Object.assign,eg={};function Do(n,e,t){this.props=n,this.context=e,this.refs=eg,this.updater=t||Q_}Do.prototype.isReactComponent={};Do.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Do.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function tg(){}tg.prototype=Do.prototype;function Od(n,e,t){this.props=n,this.context=e,this.refs=eg,this.updater=t||Q_}var Fd=Od.prototype=new tg;Fd.constructor=Od;J_(Fd,Do.prototype);Fd.isPureReactComponent=!0;var np=Array.isArray,ng=Object.prototype.hasOwnProperty,kd={current:null},ig={key:!0,ref:!0,__self:!0,__source:!0};function rg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ng.call(e,i)&&!ig.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ga,type:n,key:s,ref:o,props:r,_owner:kd.current}}function ty(n,e){return{$$typeof:Ga,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function zd(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ga}function ny(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var ip=/\/+/g;function ac(n,e){return typeof n=="object"&&n!==null&&n.key!=null?ny(""+n.key):e.toString(36)}function zl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ga:case Wx:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+ac(o,0):i,np(r)?(t="",n!=null&&(t=n.replace(ip,"$&/")+"/"),zl(r,e,t,"",function(u){return u})):r!=null&&(zd(r)&&(r=ty(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ip,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",np(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+ac(s,a);o+=zl(s,e,t,l,r)}else if(l=ey(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+ac(s,a++),o+=zl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ja(n,e,t){if(n==null)return n;var i=[],r=0;return zl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function iy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var tn={current:null},Bl={transition:null},ry={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:Bl,ReactCurrentOwner:kd};Oe.Children={map:Ja,forEach:function(n,e,t){Ja(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ja(n,function(){e++}),e},toArray:function(n){return Ja(n,function(e){return e})||[]},only:function(n){if(!zd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Oe.Component=Do;Oe.Fragment=Xx;Oe.Profiler=Yx;Oe.PureComponent=Od;Oe.StrictMode=jx;Oe.Suspense=Zx;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ry;Oe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=J_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)ng.call(e,l)&&!ig.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ga,type:n.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(n){return n={$$typeof:$x,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:qx,_context:n},n.Consumer=n};Oe.createElement=rg;Oe.createFactory=function(n){var e=rg.bind(null,n);return e.type=n,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(n){return{$$typeof:Kx,render:n}};Oe.isValidElement=zd;Oe.lazy=function(n){return{$$typeof:Jx,_payload:{_status:-1,_result:n},_init:iy}};Oe.memo=function(n,e){return{$$typeof:Qx,type:n,compare:e===void 0?null:e}};Oe.startTransition=function(n){var e=Bl.transition;Bl.transition={};try{n()}finally{Bl.transition=e}};Oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Oe.useCallback=function(n,e){return tn.current.useCallback(n,e)};Oe.useContext=function(n){return tn.current.useContext(n)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(n){return tn.current.useDeferredValue(n)};Oe.useEffect=function(n,e){return tn.current.useEffect(n,e)};Oe.useId=function(){return tn.current.useId()};Oe.useImperativeHandle=function(n,e,t){return tn.current.useImperativeHandle(n,e,t)};Oe.useInsertionEffect=function(n,e){return tn.current.useInsertionEffect(n,e)};Oe.useLayoutEffect=function(n,e){return tn.current.useLayoutEffect(n,e)};Oe.useMemo=function(n,e){return tn.current.useMemo(n,e)};Oe.useReducer=function(n,e,t){return tn.current.useReducer(n,e,t)};Oe.useRef=function(n){return tn.current.useRef(n)};Oe.useState=function(n){return tn.current.useState(n)};Oe.useSyncExternalStore=function(n,e,t){return tn.current.useSyncExternalStore(n,e,t)};Oe.useTransition=function(){return tn.current.useTransition()};Oe.version="18.2.0";Z_.exports=Oe;var eo=Z_.exports;const sy=Vx(eo);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy=eo,ay=Symbol.for("react.element"),ly=Symbol.for("react.fragment"),uy=Object.prototype.hasOwnProperty,cy=oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fy={key:!0,ref:!0,__self:!0,__source:!0};function sg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)uy.call(e,i)&&!fy.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ay,type:n,key:s,ref:o,props:r,_owner:cy.current}}Nu.Fragment=ly;Nu.jsx=sg;Nu.jsxs=sg;K_.exports=Nu;var Ni=K_.exports,Sf={},og={exports:{}},Cn={},ag={exports:{}},lg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,G){var z=L.length;L.push(G);e:for(;0<z;){var oe=z-1>>>1,ee=L[oe];if(0<r(ee,G))L[oe]=G,L[z]=ee,z=oe;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var G=L[0],z=L.pop();if(z!==G){L[0]=z;e:for(var oe=0,ee=L.length,j=ee>>>1;oe<j;){var q=2*(oe+1)-1,se=L[q],ae=q+1,D=L[ae];if(0>r(se,z))ae<ee&&0>r(D,se)?(L[oe]=D,L[ae]=z,oe=ae):(L[oe]=se,L[q]=z,oe=q);else if(ae<ee&&0>r(D,z))L[oe]=D,L[ae]=z,oe=ae;else break e}}return G}function r(L,G){var z=L.sortIndex-G.sortIndex;return z!==0?z:L.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,v=!1,m=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var G=t(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=L)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=t(u)}}function M(L){if(m=!1,x(L),!v)if(t(l)!==null)v=!0,Z(S);else{var G=t(u);G!==null&&X(M,G.startTime-L)}}function S(L,G){v=!1,m&&(m=!1,f(P),P=-1),p=!0;var z=h;try{for(x(G),d=t(l);d!==null&&(!(d.expirationTime>G)||L&&!H());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,h=d.priorityLevel;var ee=oe(d.expirationTime<=G);G=n.unstable_now(),typeof ee=="function"?d.callback=ee:d===t(l)&&i(l),x(G)}else i(l);d=t(l)}if(d!==null)var j=!0;else{var q=t(u);q!==null&&X(M,q.startTime-G),j=!1}return j}finally{d=null,h=z,p=!1}}var E=!1,A=null,P=-1,y=5,w=-1;function H(){return!(n.unstable_now()-w<y)}function W(){if(A!==null){var L=n.unstable_now();w=L;var G=!0;try{G=A(!0,L)}finally{G?I():(E=!1,A=null)}}else E=!1}var I;if(typeof g=="function")I=function(){g(W)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,B=F.port2;F.port1.onmessage=W,I=function(){B.postMessage(null)}}else I=function(){_(W,0)};function Z(L){A=L,E||(E=!0,I())}function X(L,G){P=_(function(){L(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,Z(S))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var z=h;h=G;try{return L()}finally{h=z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,G){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=h;h=L;try{return G()}finally{h=z}},n.unstable_scheduleCallback=function(L,G,z){var oe=n.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?oe+z:oe):z=oe,L){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=z+ee,L={id:c++,callback:G,priorityLevel:L,startTime:z,expirationTime:ee,sortIndex:-1},z>oe?(L.sortIndex=z,e(u,L),t(l)===null&&L===t(u)&&(m?(f(P),P=-1):m=!0,X(M,z-oe))):(L.sortIndex=ee,e(l,L),v||p||(v=!0,Z(S))),L},n.unstable_shouldYield=H,n.unstable_wrapCallback=function(L){var G=h;return function(){var z=h;h=G;try{return L.apply(this,arguments)}finally{h=z}}}})(lg);ag.exports=lg;var dy=ag.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug=eo,An=dy;function ie(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cg=new Set,_a={};function ps(n,e){po(n,e),po(n+"Capture",e)}function po(n,e){for(_a[n]=e,n=0;n<e.length;n++)cg.add(e[n])}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=Object.prototype.hasOwnProperty,hy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rp={},sp={};function py(n){return Mf.call(sp,n)?!0:Mf.call(rp,n)?!1:hy.test(n)?sp[n]=!0:(rp[n]=!0,!1)}function my(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function _y(n,e,t,i){if(e===null||typeof e>"u"||my(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Nt[n]=new nn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Nt[e]=new nn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Nt[n]=new nn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Nt[n]=new nn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Nt[n]=new nn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Nt[n]=new nn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Nt[n]=new nn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Nt[n]=new nn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Nt[n]=new nn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Bd=/[\-:]([a-z])/g;function Hd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Bd,Hd);Nt[e]=new nn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Bd,Hd);Nt[e]=new nn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Bd,Hd);Nt[e]=new nn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Nt[n]=new nn(n,1,!1,n.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Nt[n]=new nn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Gd(n,e,t,i){var r=Nt.hasOwnProperty(e)?Nt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_y(e,t,r,i)&&(t=null),i||r===null?py(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Yi=ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),zs=Symbol.for("react.portal"),Bs=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),Ef=Symbol.for("react.profiler"),fg=Symbol.for("react.provider"),dg=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),hg=Symbol.for("react.offscreen"),op=Symbol.iterator;function Fo(n){return n===null||typeof n!="object"?null:(n=op&&n[op]||n["@@iterator"],typeof n=="function"?n:null)}var ot=Object.assign,lc;function Ko(n){if(lc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);lc=e&&e[1]||""}return`
`+lc+n}var uc=!1;function cc(n,e){if(!n||uc)return"";uc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{uc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ko(n):""}function gy(n){switch(n.tag){case 5:return Ko(n.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return n=cc(n.type,!1),n;case 11:return n=cc(n.type.render,!1),n;case 1:return n=cc(n.type,!0),n;default:return""}}function Af(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Bs:return"Fragment";case zs:return"Portal";case Ef:return"Profiler";case Vd:return"StrictMode";case Tf:return"Suspense";case wf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case dg:return(n.displayName||"Context")+".Consumer";case fg:return(n._context.displayName||"Context")+".Provider";case Wd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Xd:return e=n.displayName||null,e!==null?e:Af(n.type)||"Memo";case er:e=n._payload,n=n._init;try{return Af(n(e))}catch{}}return null}function vy(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Af(e);case 8:return e===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xy(n){var e=pg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function tl(n){n._valueTracker||(n._valueTracker=xy(n))}function mg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=pg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function tu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Rf(n,e){var t=e.checked;return ot({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function ap(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=yr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _g(n,e){e=e.checked,e!=null&&Gd(n,"checked",e,!1)}function Cf(n,e){_g(n,e);var t=yr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Pf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Pf(n,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function lp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Pf(n,e,t){(e!=="number"||tu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Zo=Array.isArray;function to(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+yr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function bf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ot({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function up(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ie(92));if(Zo(t)){if(1<t.length)throw Error(ie(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:yr(t)}}function gg(n,e){var t=yr(e.value),i=yr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function cp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function vg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?vg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var nl,xg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ga(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yy=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(n){yy.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ia[e]=ia[n]})});function yg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ia.hasOwnProperty(n)&&ia[n]?(""+e).trim():e+"px"}function Sg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=yg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Sy=ot({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Df(n,e){if(e){if(Sy[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Uf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var If=null;function jd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Nf=null,no=null,io=null;function fp(n){if(n=Xa(n)){if(typeof Nf!="function")throw Error(ie(280));var e=n.stateNode;e&&(e=Bu(e),Nf(n.stateNode,n.type,e))}}function Mg(n){no?io?io.push(n):io=[n]:no=n}function Eg(){if(no){var n=no,e=io;if(io=no=null,fp(n),e)for(n=0;n<e.length;n++)fp(e[n])}}function Tg(n,e){return n(e)}function wg(){}var fc=!1;function Ag(n,e,t){if(fc)return n(e,t);fc=!0;try{return Tg(n,e,t)}finally{fc=!1,(no!==null||io!==null)&&(wg(),Eg())}}function va(n,e){var t=n.stateNode;if(t===null)return null;var i=Bu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ie(231,e,typeof t));return t}var Of=!1;if(Hi)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){Of=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{Of=!1}function My(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ra=!1,nu=null,iu=!1,Ff=null,Ey={onError:function(n){ra=!0,nu=n}};function Ty(n,e,t,i,r,s,o,a,l){ra=!1,nu=null,My.apply(Ey,arguments)}function wy(n,e,t,i,r,s,o,a,l){if(Ty.apply(this,arguments),ra){if(ra){var u=nu;ra=!1,nu=null}else throw Error(ie(198));iu||(iu=!0,Ff=u)}}function ms(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Rg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function dp(n){if(ms(n)!==n)throw Error(ie(188))}function Ay(n){var e=n.alternate;if(!e){if(e=ms(n),e===null)throw Error(ie(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return dp(r),n;if(s===i)return dp(r),e;s=s.sibling}throw Error(ie(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(t.alternate!==i)throw Error(ie(190))}if(t.tag!==3)throw Error(ie(188));return t.stateNode.current===t?n:e}function Cg(n){return n=Ay(n),n!==null?Pg(n):null}function Pg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Pg(n);if(e!==null)return e;n=n.sibling}return null}var bg=An.unstable_scheduleCallback,hp=An.unstable_cancelCallback,Ry=An.unstable_shouldYield,Cy=An.unstable_requestPaint,pt=An.unstable_now,Py=An.unstable_getCurrentPriorityLevel,Yd=An.unstable_ImmediatePriority,Lg=An.unstable_UserBlockingPriority,ru=An.unstable_NormalPriority,by=An.unstable_LowPriority,Dg=An.unstable_IdlePriority,Ou=null,gi=null;function Ly(n){if(gi&&typeof gi.onCommitFiberRoot=="function")try{gi.onCommitFiberRoot(Ou,n,void 0,(n.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:Iy,Dy=Math.log,Uy=Math.LN2;function Iy(n){return n>>>=0,n===0?32:31-(Dy(n)/Uy|0)|0}var il=64,rl=4194304;function Qo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function su(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Qo(a):(s&=o,s!==0&&(i=Qo(s)))}else o=t&~r,o!==0?i=Qo(o):s!==0&&(i=Qo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ri(e),r=1<<t,i|=n[t],e&=~r;return i}function Ny(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ri(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Ny(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function kf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ug(){var n=il;return il<<=1,!(il&4194240)&&(il=64),n}function dc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Va(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ri(e),n[e]=t}function Fy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ri(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function qd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ri(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ve=0;function Ig(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ng,$d,Og,Fg,kg,zf=!1,sl=[],ur=null,cr=null,fr=null,xa=new Map,ya=new Map,nr=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pp(n,e){switch(n){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function zo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&$d(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function zy(n,e,t,i,r){switch(e){case"focusin":return ur=zo(ur,n,e,t,i,r),!0;case"dragenter":return cr=zo(cr,n,e,t,i,r),!0;case"mouseover":return fr=zo(fr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return xa.set(s,zo(xa.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,zo(ya.get(s)||null,n,e,t,i,r)),!0}return!1}function zg(n){var e=Wr(n.target);if(e!==null){var t=ms(e);if(t!==null){if(e=t.tag,e===13){if(e=Rg(t),e!==null){n.blockedOn=e,kg(n.priority,function(){Og(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Hl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Bf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);If=i,t.target.dispatchEvent(i),If=null}else return e=Xa(t),e!==null&&$d(e),n.blockedOn=t,!1;e.shift()}return!0}function mp(n,e,t){Hl(n)&&t.delete(e)}function By(){zf=!1,ur!==null&&Hl(ur)&&(ur=null),cr!==null&&Hl(cr)&&(cr=null),fr!==null&&Hl(fr)&&(fr=null),xa.forEach(mp),ya.forEach(mp)}function Bo(n,e){n.blockedOn===e&&(n.blockedOn=null,zf||(zf=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,By)))}function Sa(n){function e(r){return Bo(r,n)}if(0<sl.length){Bo(sl[0],n);for(var t=1;t<sl.length;t++){var i=sl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ur!==null&&Bo(ur,n),cr!==null&&Bo(cr,n),fr!==null&&Bo(fr,n),xa.forEach(e),ya.forEach(e),t=0;t<nr.length;t++)i=nr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<nr.length&&(t=nr[0],t.blockedOn===null);)zg(t),t.blockedOn===null&&nr.shift()}var ro=Yi.ReactCurrentBatchConfig,ou=!0;function Hy(n,e,t,i){var r=Ve,s=ro.transition;ro.transition=null;try{Ve=1,Kd(n,e,t,i)}finally{Ve=r,ro.transition=s}}function Gy(n,e,t,i){var r=Ve,s=ro.transition;ro.transition=null;try{Ve=4,Kd(n,e,t,i)}finally{Ve=r,ro.transition=s}}function Kd(n,e,t,i){if(ou){var r=Bf(n,e,t,i);if(r===null)Mc(n,e,i,au,t),pp(n,i);else if(zy(r,n,e,t,i))i.stopPropagation();else if(pp(n,i),e&4&&-1<ky.indexOf(n)){for(;r!==null;){var s=Xa(r);if(s!==null&&Ng(s),s=Bf(n,e,t,i),s===null&&Mc(n,e,i,au,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Mc(n,e,i,null,t)}}var au=null;function Bf(n,e,t,i){if(au=null,n=jd(i),n=Wr(n),n!==null)if(e=ms(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Rg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return au=n,null}function Bg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Py()){case Yd:return 1;case Lg:return 4;case ru:case by:return 16;case Dg:return 536870912;default:return 16}default:return 16}}var rr=null,Zd=null,Gl=null;function Hg(){if(Gl)return Gl;var n,e=Zd,t=e.length,i,r="value"in rr?rr.value:rr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Gl=r.slice(n,1<i?1-i:void 0)}function Vl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ol(){return!0}function _p(){return!1}function Pn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ol:_p,this.isPropagationStopped=_p,this}return ot(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),e}var Uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qd=Pn(Uo),Wa=ot({},Uo,{view:0,detail:0}),Vy=Pn(Wa),hc,pc,Ho,Fu=ot({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ho&&(Ho&&n.type==="mousemove"?(hc=n.screenX-Ho.screenX,pc=n.screenY-Ho.screenY):pc=hc=0,Ho=n),hc)},movementY:function(n){return"movementY"in n?n.movementY:pc}}),gp=Pn(Fu),Wy=ot({},Fu,{dataTransfer:0}),Xy=Pn(Wy),jy=ot({},Wa,{relatedTarget:0}),mc=Pn(jy),Yy=ot({},Uo,{animationName:0,elapsedTime:0,pseudoElement:0}),qy=Pn(Yy),$y=ot({},Uo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ky=Pn($y),Zy=ot({},Uo,{data:0}),vp=Pn(Zy),Qy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=eS[n])?!!e[n]:!1}function Jd(){return tS}var nS=ot({},Wa,{key:function(n){if(n.key){var e=Qy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Vl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Jy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jd,charCode:function(n){return n.type==="keypress"?Vl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),iS=Pn(nS),rS=ot({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=Pn(rS),sS=ot({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jd}),oS=Pn(sS),aS=ot({},Uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),lS=Pn(aS),uS=ot({},Fu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),cS=Pn(uS),fS=[9,13,27,32],eh=Hi&&"CompositionEvent"in window,sa=null;Hi&&"documentMode"in document&&(sa=document.documentMode);var dS=Hi&&"TextEvent"in window&&!sa,Gg=Hi&&(!eh||sa&&8<sa&&11>=sa),yp=String.fromCharCode(32),Sp=!1;function Vg(n,e){switch(n){case"keyup":return fS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hs=!1;function hS(n,e){switch(n){case"compositionend":return Wg(e);case"keypress":return e.which!==32?null:(Sp=!0,yp);case"textInput":return n=e.data,n===yp&&Sp?null:n;default:return null}}function pS(n,e){if(Hs)return n==="compositionend"||!eh&&Vg(n,e)?(n=Hg(),Gl=Zd=rr=null,Hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gg&&e.locale!=="ko"?null:e.data;default:return null}}var mS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!mS[n.type]:e==="textarea"}function Xg(n,e,t,i){Mg(i),e=lu(e,"onChange"),0<e.length&&(t=new Qd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var oa=null,Ma=null;function _S(n){n0(n,0)}function ku(n){var e=Ws(n);if(mg(e))return n}function gS(n,e){if(n==="change")return e}var jg=!1;if(Hi){var _c;if(Hi){var gc="oninput"in document;if(!gc){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),gc=typeof Ep.oninput=="function"}_c=gc}else _c=!1;jg=_c&&(!document.documentMode||9<document.documentMode)}function Tp(){oa&&(oa.detachEvent("onpropertychange",Yg),Ma=oa=null)}function Yg(n){if(n.propertyName==="value"&&ku(Ma)){var e=[];Xg(e,Ma,n,jd(n)),Ag(_S,e)}}function vS(n,e,t){n==="focusin"?(Tp(),oa=e,Ma=t,oa.attachEvent("onpropertychange",Yg)):n==="focusout"&&Tp()}function xS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ku(Ma)}function yS(n,e){if(n==="click")return ku(e)}function SS(n,e){if(n==="input"||n==="change")return ku(e)}function MS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ai=typeof Object.is=="function"?Object.is:MS;function Ea(n,e){if(ai(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Mf.call(e,r)||!ai(n[r],e[r]))return!1}return!0}function wp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ap(n,e){var t=wp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=wp(t)}}function qg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?qg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function $g(){for(var n=window,e=tu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=tu(n.document)}return e}function th(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function ES(n){var e=$g(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&qg(t.ownerDocument.documentElement,t)){if(i!==null&&th(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Ap(t,s);var o=Ap(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var TS=Hi&&"documentMode"in document&&11>=document.documentMode,Gs=null,Hf=null,aa=null,Gf=!1;function Rp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Gf||Gs==null||Gs!==tu(i)||(i=Gs,"selectionStart"in i&&th(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),aa&&Ea(aa,i)||(aa=i,i=lu(Hf,"onSelect"),0<i.length&&(e=new Qd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Gs)))}function al(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Vs={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},vc={},Kg={};Hi&&(Kg=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function zu(n){if(vc[n])return vc[n];if(!Vs[n])return n;var e=Vs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Kg)return vc[n]=e[t];return n}var Zg=zu("animationend"),Qg=zu("animationiteration"),Jg=zu("animationstart"),e0=zu("transitionend"),t0=new Map,Cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(n,e){t0.set(n,e),ps(e,[n])}for(var xc=0;xc<Cp.length;xc++){var yc=Cp[xc],wS=yc.toLowerCase(),AS=yc[0].toUpperCase()+yc.slice(1);wr(wS,"on"+AS)}wr(Zg,"onAnimationEnd");wr(Qg,"onAnimationIteration");wr(Jg,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(e0,"onTransitionEnd");po("onMouseEnter",["mouseout","mouseover"]);po("onMouseLeave",["mouseout","mouseover"]);po("onPointerEnter",["pointerout","pointerover"]);po("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function Pp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,wy(i,e,void 0,n),n.currentTarget=null}function n0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Pp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Pp(r,a,u),s=l}}}if(iu)throw n=Ff,iu=!1,Ff=null,n}function Qe(n,e){var t=e[Yf];t===void 0&&(t=e[Yf]=new Set);var i=n+"__bubble";t.has(i)||(i0(e,n,2,!1),t.add(i))}function Sc(n,e,t){var i=0;e&&(i|=4),i0(t,n,i,e)}var ll="_reactListening"+Math.random().toString(36).slice(2);function Ta(n){if(!n[ll]){n[ll]=!0,cg.forEach(function(t){t!=="selectionchange"&&(RS.has(t)||Sc(t,!1,n),Sc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ll]||(e[ll]=!0,Sc("selectionchange",!1,e))}}function i0(n,e,t,i){switch(Bg(e)){case 1:var r=Hy;break;case 4:r=Gy;break;default:r=Kd}t=r.bind(null,e,t,n),r=void 0,!Of||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Mc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ag(function(){var u=s,c=jd(t),d=[];e:{var h=t0.get(n);if(h!==void 0){var p=Qd,v=n;switch(n){case"keypress":if(Vl(t)===0)break e;case"keydown":case"keyup":p=iS;break;case"focusin":v="focus",p=mc;break;case"focusout":v="blur",p=mc;break;case"beforeblur":case"afterblur":p=mc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Xy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=oS;break;case Zg:case Qg:case Jg:p=qy;break;case e0:p=lS;break;case"scroll":p=Vy;break;case"wheel":p=cS;break;case"copy":case"cut":case"paste":p=Ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=xp}var m=(e&4)!==0,_=!m&&n==="scroll",f=m?h!==null?h+"Capture":null:h;m=[];for(var g=u,x;g!==null;){x=g;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,f!==null&&(M=va(g,f),M!=null&&m.push(wa(g,M,x)))),_)break;g=g.return}0<m.length&&(h=new p(h,v,null,t,c),d.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==If&&(v=t.relatedTarget||t.fromElement)&&(Wr(v)||v[Gi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=u,v=v?Wr(v):null,v!==null&&(_=ms(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(m=gp,M="onMouseLeave",f="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(m=xp,M="onPointerLeave",f="onPointerEnter",g="pointer"),_=p==null?h:Ws(p),x=v==null?h:Ws(v),h=new m(M,g+"leave",p,t,c),h.target=_,h.relatedTarget=x,M=null,Wr(c)===u&&(m=new m(f,g+"enter",v,t,c),m.target=x,m.relatedTarget=_,M=m),_=M,p&&v)t:{for(m=p,f=v,g=0,x=m;x;x=vs(x))g++;for(x=0,M=f;M;M=vs(M))x++;for(;0<g-x;)m=vs(m),g--;for(;0<x-g;)f=vs(f),x--;for(;g--;){if(m===f||f!==null&&m===f.alternate)break t;m=vs(m),f=vs(f)}m=null}else m=null;p!==null&&bp(d,h,p,m,!1),v!==null&&_!==null&&bp(d,_,v,m,!0)}}e:{if(h=u?Ws(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=gS;else if(Mp(h))if(jg)S=SS;else{S=xS;var E=vS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=yS);if(S&&(S=S(n,u))){Xg(d,S,t,c);break e}E&&E(n,h,u),n==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Pf(h,"number",h.value)}switch(E=u?Ws(u):window,n){case"focusin":(Mp(E)||E.contentEditable==="true")&&(Gs=E,Hf=u,aa=null);break;case"focusout":aa=Hf=Gs=null;break;case"mousedown":Gf=!0;break;case"contextmenu":case"mouseup":case"dragend":Gf=!1,Rp(d,t,c);break;case"selectionchange":if(TS)break;case"keydown":case"keyup":Rp(d,t,c)}var A;if(eh)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Hs?Vg(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Gg&&t.locale!=="ko"&&(Hs||P!=="onCompositionStart"?P==="onCompositionEnd"&&Hs&&(A=Hg()):(rr=c,Zd="value"in rr?rr.value:rr.textContent,Hs=!0)),E=lu(u,P),0<E.length&&(P=new vp(P,n,null,t,c),d.push({event:P,listeners:E}),A?P.data=A:(A=Wg(t),A!==null&&(P.data=A)))),(A=dS?hS(n,t):pS(n,t))&&(u=lu(u,"onBeforeInput"),0<u.length&&(c=new vp("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=A))}n0(d,e)})}function wa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function lu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=va(n,t),s!=null&&i.unshift(wa(n,s,r)),s=va(n,e),s!=null&&i.push(wa(n,s,r))),n=n.return}return i}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function bp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=va(t,s),l!=null&&o.unshift(wa(t,l,a))):r||(l=va(t,s),l!=null&&o.push(wa(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var CS=/\r\n?/g,PS=/\u0000|\uFFFD/g;function Lp(n){return(typeof n=="string"?n:""+n).replace(CS,`
`).replace(PS,"")}function ul(n,e,t){if(e=Lp(e),Lp(n)!==e&&t)throw Error(ie(425))}function uu(){}var Vf=null,Wf=null;function Xf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jf=typeof setTimeout=="function"?setTimeout:void 0,bS=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(n){return Dp.resolve(null).then(n).catch(DS)}:jf;function DS(n){setTimeout(function(){throw n})}function Ec(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Sa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Sa(e)}function dr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Up(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Io=Math.random().toString(36).slice(2),hi="__reactFiber$"+Io,Aa="__reactProps$"+Io,Gi="__reactContainer$"+Io,Yf="__reactEvents$"+Io,US="__reactListeners$"+Io,IS="__reactHandles$"+Io;function Wr(n){var e=n[hi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Gi]||t[hi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Up(n);n!==null;){if(t=n[hi])return t;n=Up(n)}return e}n=t,t=n.parentNode}return null}function Xa(n){return n=n[hi]||n[Gi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function Bu(n){return n[Aa]||null}var qf=[],Xs=-1;function Ar(n){return{current:n}}function Je(n){0>Xs||(n.current=qf[Xs],qf[Xs]=null,Xs--)}function Ze(n,e){Xs++,qf[Xs]=n.current,n.current=e}var Sr={},qt=Ar(Sr),an=Ar(!1),rs=Sr;function mo(n,e){var t=n.type.contextTypes;if(!t)return Sr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ln(n){return n=n.childContextTypes,n!=null}function cu(){Je(an),Je(qt)}function Ip(n,e,t){if(qt.current!==Sr)throw Error(ie(168));Ze(qt,e),Ze(an,t)}function r0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,vy(n)||"Unknown",r));return ot({},t,i)}function fu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Sr,rs=qt.current,Ze(qt,n),Ze(an,an.current),!0}function Np(n,e,t){var i=n.stateNode;if(!i)throw Error(ie(169));t?(n=r0(n,e,rs),i.__reactInternalMemoizedMergedChildContext=n,Je(an),Je(qt),Ze(qt,n)):Je(an),Ze(an,t)}var Ui=null,Hu=!1,Tc=!1;function s0(n){Ui===null?Ui=[n]:Ui.push(n)}function NS(n){Hu=!0,s0(n)}function Rr(){if(!Tc&&Ui!==null){Tc=!0;var n=0,e=Ve;try{var t=Ui;for(Ve=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ui=null,Hu=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(n+1)),bg(Yd,Rr),r}finally{Ve=e,Tc=!1}}return null}var js=[],Ys=0,du=null,hu=0,In=[],Nn=0,ss=null,Fi=1,ki="";function kr(n,e){js[Ys++]=hu,js[Ys++]=du,du=n,hu=e}function o0(n,e,t){In[Nn++]=Fi,In[Nn++]=ki,In[Nn++]=ss,ss=n;var i=Fi;n=ki;var r=32-ri(i)-1;i&=~(1<<r),t+=1;var s=32-ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fi=1<<32-ri(e)+r|t<<r|i,ki=s+n}else Fi=1<<s|t<<r|i,ki=n}function nh(n){n.return!==null&&(kr(n,1),o0(n,1,0))}function ih(n){for(;n===du;)du=js[--Ys],js[Ys]=null,hu=js[--Ys],js[Ys]=null;for(;n===ss;)ss=In[--Nn],In[Nn]=null,ki=In[--Nn],In[Nn]=null,Fi=In[--Nn],In[Nn]=null}var Tn=null,En=null,et=!1,ei=null;function a0(n,e){var t=kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Op(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Tn=n,En=dr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Tn=n,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ss!==null?{id:Fi,overflow:ki}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Tn=n,En=null,!0):!1;default:return!1}}function $f(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Kf(n){if(et){var e=En;if(e){var t=e;if(!Op(n,e)){if($f(n))throw Error(ie(418));e=dr(t.nextSibling);var i=Tn;e&&Op(n,e)?a0(i,t):(n.flags=n.flags&-4097|2,et=!1,Tn=n)}}else{if($f(n))throw Error(ie(418));n.flags=n.flags&-4097|2,et=!1,Tn=n}}}function Fp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Tn=n}function cl(n){if(n!==Tn)return!1;if(!et)return Fp(n),et=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Xf(n.type,n.memoizedProps)),e&&(e=En)){if($f(n))throw l0(),Error(ie(418));for(;e;)a0(n,e),e=dr(e.nextSibling)}if(Fp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){En=dr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}En=null}}else En=Tn?dr(n.stateNode.nextSibling):null;return!0}function l0(){for(var n=En;n;)n=dr(n.nextSibling)}function _o(){En=Tn=null,et=!1}function rh(n){ei===null?ei=[n]:ei.push(n)}var OS=Yi.ReactCurrentBatchConfig;function Qn(n,e){if(n&&n.defaultProps){e=ot({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var pu=Ar(null),mu=null,qs=null,sh=null;function oh(){sh=qs=mu=null}function ah(n){var e=pu.current;Je(pu),n._currentValue=e}function Zf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function so(n,e){mu=n,sh=qs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(on=!0),n.firstContext=null)}function Vn(n){var e=n._currentValue;if(sh!==n)if(n={context:n,memoizedValue:e,next:null},qs===null){if(mu===null)throw Error(ie(308));qs=n,mu.dependencies={lanes:0,firstContext:n}}else qs=qs.next=n;return e}var Xr=null;function lh(n){Xr===null?Xr=[n]:Xr.push(n)}function u0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,lh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Vi(n,i)}function Vi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var tr=!1;function uh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Be&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vi(n,t)}return r=i.interleaved,r===null?(e.next=e,lh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vi(n,t)}function Wl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,qd(n,t)}}function kp(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function _u(n,e,t,i){var r=n.updateQueue;tr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,m=a;switch(h=e,p=t,m.tag){case 1:if(v=m.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=m.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=ot({},d,h);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);as|=o,n.lanes=o,n.memoizedState=d}}function zp(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var f0=new ug.Component().refs;function Qf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:ot({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Gu={isMounted:function(n){return(n=n._reactInternals)?ms(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=en(),r=mr(n),s=zi(i,r);s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(si(e,n,r,i),Wl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=en(),r=mr(n),s=zi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(si(e,n,r,i),Wl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=en(),i=mr(n),r=zi(t,i);r.tag=2,e!=null&&(r.callback=e),e=hr(n,r,i),e!==null&&(si(e,n,i,t),Wl(e,n,i))}};function Bp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ea(t,i)||!Ea(r,s):!0}function d0(n,e,t){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=ln(e)?rs:qt.current,i=e.contextTypes,s=(i=i!=null)?mo(n,r):Sr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Hp(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Gu.enqueueReplaceState(e,e.state,null)}function Jf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=f0,uh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=ln(e)?rs:qt.current,r.context=mo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gu.enqueueReplaceState(r,r.state,null),_u(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Go(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ie(309));var i=t.stateNode}if(!i)throw Error(ie(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===f0&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ie(284));if(!t._owner)throw Error(ie(290,n))}return n}function fl(n,e){throw n=Object.prototype.toString.call(e),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Gp(n){var e=n._init;return e(n._payload)}function h0(n){function e(f,g){if(n){var x=f.deletions;x===null?(f.deletions=[g],f.flags|=16):x.push(g)}}function t(f,g){if(!n)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=_r(f,g),f.index=0,f.sibling=null,f}function s(f,g,x){return f.index=x,n?(x=f.alternate,x!==null?(x=x.index,x<g?(f.flags|=2,g):x):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,g,x,M){return g===null||g.tag!==6?(g=Lc(x,f.mode,M),g.return=f,g):(g=r(g,x),g.return=f,g)}function l(f,g,x,M){var S=x.type;return S===Bs?c(f,g,x.props.children,M,x.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===er&&Gp(S)===g.type)?(M=r(g,x.props),M.ref=Go(f,g,x),M.return=f,M):(M=Kl(x.type,x.key,x.props,null,f.mode,M),M.ref=Go(f,g,x),M.return=f,M)}function u(f,g,x,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Dc(x,f.mode,M),g.return=f,g):(g=r(g,x.children||[]),g.return=f,g)}function c(f,g,x,M,S){return g===null||g.tag!==7?(g=Zr(x,f.mode,M,S),g.return=f,g):(g=r(g,x),g.return=f,g)}function d(f,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Lc(""+g,f.mode,x),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case el:return x=Kl(g.type,g.key,g.props,null,f.mode,x),x.ref=Go(f,null,g),x.return=f,x;case zs:return g=Dc(g,f.mode,x),g.return=f,g;case er:var M=g._init;return d(f,M(g._payload),x)}if(Zo(g)||Fo(g))return g=Zr(g,f.mode,x,null),g.return=f,g;fl(f,g)}return null}function h(f,g,x,M){var S=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(f,g,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case el:return x.key===S?l(f,g,x,M):null;case zs:return x.key===S?u(f,g,x,M):null;case er:return S=x._init,h(f,g,S(x._payload),M)}if(Zo(x)||Fo(x))return S!==null?null:c(f,g,x,M,null);fl(f,x)}return null}function p(f,g,x,M,S){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(x)||null,a(g,f,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case el:return f=f.get(M.key===null?x:M.key)||null,l(g,f,M,S);case zs:return f=f.get(M.key===null?x:M.key)||null,u(g,f,M,S);case er:var E=M._init;return p(f,g,x,E(M._payload),S)}if(Zo(M)||Fo(M))return f=f.get(x)||null,c(g,f,M,S,null);fl(g,M)}return null}function v(f,g,x,M){for(var S=null,E=null,A=g,P=g=0,y=null;A!==null&&P<x.length;P++){A.index>P?(y=A,A=null):y=A.sibling;var w=h(f,A,x[P],M);if(w===null){A===null&&(A=y);break}n&&A&&w.alternate===null&&e(f,A),g=s(w,g,P),E===null?S=w:E.sibling=w,E=w,A=y}if(P===x.length)return t(f,A),et&&kr(f,P),S;if(A===null){for(;P<x.length;P++)A=d(f,x[P],M),A!==null&&(g=s(A,g,P),E===null?S=A:E.sibling=A,E=A);return et&&kr(f,P),S}for(A=i(f,A);P<x.length;P++)y=p(A,f,P,x[P],M),y!==null&&(n&&y.alternate!==null&&A.delete(y.key===null?P:y.key),g=s(y,g,P),E===null?S=y:E.sibling=y,E=y);return n&&A.forEach(function(H){return e(f,H)}),et&&kr(f,P),S}function m(f,g,x,M){var S=Fo(x);if(typeof S!="function")throw Error(ie(150));if(x=S.call(x),x==null)throw Error(ie(151));for(var E=S=null,A=g,P=g=0,y=null,w=x.next();A!==null&&!w.done;P++,w=x.next()){A.index>P?(y=A,A=null):y=A.sibling;var H=h(f,A,w.value,M);if(H===null){A===null&&(A=y);break}n&&A&&H.alternate===null&&e(f,A),g=s(H,g,P),E===null?S=H:E.sibling=H,E=H,A=y}if(w.done)return t(f,A),et&&kr(f,P),S;if(A===null){for(;!w.done;P++,w=x.next())w=d(f,w.value,M),w!==null&&(g=s(w,g,P),E===null?S=w:E.sibling=w,E=w);return et&&kr(f,P),S}for(A=i(f,A);!w.done;P++,w=x.next())w=p(A,f,P,w.value,M),w!==null&&(n&&w.alternate!==null&&A.delete(w.key===null?P:w.key),g=s(w,g,P),E===null?S=w:E.sibling=w,E=w);return n&&A.forEach(function(W){return e(f,W)}),et&&kr(f,P),S}function _(f,g,x,M){if(typeof x=="object"&&x!==null&&x.type===Bs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case el:e:{for(var S=x.key,E=g;E!==null;){if(E.key===S){if(S=x.type,S===Bs){if(E.tag===7){t(f,E.sibling),g=r(E,x.props.children),g.return=f,f=g;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===er&&Gp(S)===E.type){t(f,E.sibling),g=r(E,x.props),g.ref=Go(f,E,x),g.return=f,f=g;break e}t(f,E);break}else e(f,E);E=E.sibling}x.type===Bs?(g=Zr(x.props.children,f.mode,M,x.key),g.return=f,f=g):(M=Kl(x.type,x.key,x.props,null,f.mode,M),M.ref=Go(f,g,x),M.return=f,f=M)}return o(f);case zs:e:{for(E=x.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){t(f,g.sibling),g=r(g,x.children||[]),g.return=f,f=g;break e}else{t(f,g);break}else e(f,g);g=g.sibling}g=Dc(x,f.mode,M),g.return=f,f=g}return o(f);case er:return E=x._init,_(f,g,E(x._payload),M)}if(Zo(x))return v(f,g,x,M);if(Fo(x))return m(f,g,x,M);fl(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(t(f,g.sibling),g=r(g,x),g.return=f,f=g):(t(f,g),g=Lc(x,f.mode,M),g.return=f,f=g),o(f)):t(f,g)}return _}var go=h0(!0),p0=h0(!1),ja={},vi=Ar(ja),Ra=Ar(ja),Ca=Ar(ja);function jr(n){if(n===ja)throw Error(ie(174));return n}function ch(n,e){switch(Ze(Ca,e),Ze(Ra,n),Ze(vi,ja),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Lf(e,n)}Je(vi),Ze(vi,e)}function vo(){Je(vi),Je(Ra),Je(Ca)}function m0(n){jr(Ca.current);var e=jr(vi.current),t=Lf(e,n.type);e!==t&&(Ze(Ra,n),Ze(vi,t))}function fh(n){Ra.current===n&&(Je(vi),Je(Ra))}var nt=Ar(0);function gu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wc=[];function dh(){for(var n=0;n<wc.length;n++)wc[n]._workInProgressVersionPrimary=null;wc.length=0}var Xl=Yi.ReactCurrentDispatcher,Ac=Yi.ReactCurrentBatchConfig,os=0,st=null,yt=null,Ct=null,vu=!1,la=!1,Pa=0,FS=0;function kt(){throw Error(ie(321))}function hh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ai(n[t],e[t]))return!1;return!0}function ph(n,e,t,i,r,s){if(os=s,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=n===null||n.memoizedState===null?HS:GS,n=t(i,r),la){s=0;do{if(la=!1,Pa=0,25<=s)throw Error(ie(301));s+=1,Ct=yt=null,e.updateQueue=null,Xl.current=VS,n=t(i,r)}while(la)}if(Xl.current=xu,e=yt!==null&&yt.next!==null,os=0,Ct=yt=st=null,vu=!1,e)throw Error(ie(300));return n}function mh(){var n=Pa!==0;return Pa=0,n}function fi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?st.memoizedState=Ct=n:Ct=Ct.next=n,Ct}function Wn(){if(yt===null){var n=st.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var e=Ct===null?st.memoizedState:Ct.next;if(e!==null)Ct=e,yt=n;else{if(n===null)throw Error(ie(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Ct===null?st.memoizedState=Ct=n:Ct=Ct.next=n}return Ct}function ba(n,e){return typeof e=="function"?e(n):e}function Rc(n){var e=Wn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=yt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((os&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,st.lanes|=c,as|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ai(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,st.lanes|=s,as|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Cc(n){var e=Wn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ai(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function _0(){}function g0(n,e){var t=st,i=Wn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,_h(y0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(t.flags|=2048,La(9,x0.bind(null,t,i,r,e),void 0,null),bt===null)throw Error(ie(349));os&30||v0(t,e,r)}return r}function v0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function x0(n,e,t,i){e.value=t,e.getSnapshot=i,S0(e)&&M0(n)}function y0(n,e,t){return t(function(){S0(e)&&M0(n)})}function S0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ai(n,t)}catch{return!0}}function M0(n){var e=Vi(n,1);e!==null&&si(e,n,1,-1)}function Vp(n){var e=fi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:n},e.queue=n,n=n.dispatch=BS.bind(null,st,n),[e.memoizedState,n]}function La(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function E0(){return Wn().memoizedState}function jl(n,e,t,i){var r=fi();st.flags|=n,r.memoizedState=La(1|e,t,void 0,i===void 0?null:i)}function Vu(n,e,t,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(yt!==null){var o=yt.memoizedState;if(s=o.destroy,i!==null&&hh(i,o.deps)){r.memoizedState=La(e,t,s,i);return}}st.flags|=n,r.memoizedState=La(1|e,t,s,i)}function Wp(n,e){return jl(8390656,8,n,e)}function _h(n,e){return Vu(2048,8,n,e)}function T0(n,e){return Vu(4,2,n,e)}function w0(n,e){return Vu(4,4,n,e)}function A0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function R0(n,e,t){return t=t!=null?t.concat([n]):null,Vu(4,4,A0.bind(null,e,n),t)}function gh(){}function C0(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&hh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function P0(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&hh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function b0(n,e,t){return os&21?(ai(t,e)||(t=Ug(),st.lanes|=t,as|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,on=!0),n.memoizedState=t)}function kS(n,e){var t=Ve;Ve=t!==0&&4>t?t:4,n(!0);var i=Ac.transition;Ac.transition={};try{n(!1),e()}finally{Ve=t,Ac.transition=i}}function L0(){return Wn().memoizedState}function zS(n,e,t){var i=mr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},D0(n))U0(e,t);else if(t=u0(n,e,t,i),t!==null){var r=en();si(t,n,i,r),I0(t,e,i)}}function BS(n,e,t){var i=mr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(D0(n))U0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ai(a,o)){var l=e.interleaved;l===null?(r.next=r,lh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=u0(n,e,r,i),t!==null&&(r=en(),si(t,n,i,r),I0(t,e,i))}}function D0(n){var e=n.alternate;return n===st||e!==null&&e===st}function U0(n,e){la=vu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function I0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,qd(n,t)}}var xu={readContext:Vn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},HS={readContext:Vn,useCallback:function(n,e){return fi().memoizedState=[n,e===void 0?null:e],n},useContext:Vn,useEffect:Wp,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,jl(4194308,4,A0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return jl(4194308,4,n,e)},useInsertionEffect:function(n,e){return jl(4,2,n,e)},useMemo:function(n,e){var t=fi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=fi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=zS.bind(null,st,n),[i.memoizedState,n]},useRef:function(n){var e=fi();return n={current:n},e.memoizedState=n},useState:Vp,useDebugValue:gh,useDeferredValue:function(n){return fi().memoizedState=n},useTransition:function(){var n=Vp(!1),e=n[0];return n=kS.bind(null,n[1]),fi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=st,r=fi();if(et){if(t===void 0)throw Error(ie(407));t=t()}else{if(t=e(),bt===null)throw Error(ie(349));os&30||v0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Wp(y0.bind(null,i,s,n),[n]),i.flags|=2048,La(9,x0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=fi(),e=bt.identifierPrefix;if(et){var t=ki,i=Fi;t=(i&~(1<<32-ri(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Pa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=FS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},GS={readContext:Vn,useCallback:C0,useContext:Vn,useEffect:_h,useImperativeHandle:R0,useInsertionEffect:T0,useLayoutEffect:w0,useMemo:P0,useReducer:Rc,useRef:E0,useState:function(){return Rc(ba)},useDebugValue:gh,useDeferredValue:function(n){var e=Wn();return b0(e,yt.memoizedState,n)},useTransition:function(){var n=Rc(ba)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:_0,useSyncExternalStore:g0,useId:L0,unstable_isNewReconciler:!1},VS={readContext:Vn,useCallback:C0,useContext:Vn,useEffect:_h,useImperativeHandle:R0,useInsertionEffect:T0,useLayoutEffect:w0,useMemo:P0,useReducer:Cc,useRef:E0,useState:function(){return Cc(ba)},useDebugValue:gh,useDeferredValue:function(n){var e=Wn();return yt===null?e.memoizedState=n:b0(e,yt.memoizedState,n)},useTransition:function(){var n=Cc(ba)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:_0,useSyncExternalStore:g0,useId:L0,unstable_isNewReconciler:!1};function xo(n,e){try{var t="",i=e;do t+=gy(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Pc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function ed(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var WS=typeof WeakMap=="function"?WeakMap:Map;function N0(n,e,t){t=zi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Su||(Su=!0,cd=i),ed(n,e)},t}function O0(n,e,t){t=zi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){ed(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ed(n,e),typeof i!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Xp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new WS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=rM.bind(null,n,e,t),e.then(n,n))}function jp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Yp(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=zi(-1,1),e.tag=2,hr(t,e,1))),t.lanes|=1),n)}var XS=Yi.ReactCurrentOwner,on=!1;function Qt(n,e,t,i){e.child=n===null?p0(e,null,t,i):go(e,n.child,t,i)}function qp(n,e,t,i,r){t=t.render;var s=e.ref;return so(e,r),i=ph(n,e,t,i,s,r),t=mh(),n!==null&&!on?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Wi(n,e,r)):(et&&t&&nh(e),e.flags|=1,Qt(n,e,i,r),e.child)}function $p(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!wh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,F0(n,e,s,i,r)):(n=Kl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ea,t(o,i)&&n.ref===e.ref)return Wi(n,e,r)}return e.flags|=1,n=_r(s,i),n.ref=e.ref,n.return=e,e.child=n}function F0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ea(s,i)&&n.ref===e.ref)if(on=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(on=!0);else return e.lanes=n.lanes,Wi(n,e,r)}return td(n,e,t,i,r)}function k0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(Ks,yn),yn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ze(Ks,yn),yn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ze(Ks,yn),yn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ze(Ks,yn),yn|=i;return Qt(n,e,r,t),e.child}function z0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function td(n,e,t,i,r){var s=ln(t)?rs:qt.current;return s=mo(e,s),so(e,r),t=ph(n,e,t,i,s,r),i=mh(),n!==null&&!on?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Wi(n,e,r)):(et&&i&&nh(e),e.flags|=1,Qt(n,e,t,r),e.child)}function Kp(n,e,t,i,r){if(ln(t)){var s=!0;fu(e)}else s=!1;if(so(e,r),e.stateNode===null)Yl(n,e),d0(e,t,i),Jf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Vn(u):(u=ln(t)?rs:qt.current,u=mo(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Hp(e,o,i,u),tr=!1;var h=e.memoizedState;o.state=h,_u(e,i,o,r),l=e.memoizedState,a!==i||h!==l||an.current||tr?(typeof c=="function"&&(Qf(e,t,c,i),l=e.memoizedState),(a=tr||Bp(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,c0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=ln(t)?rs:qt.current,l=mo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Hp(e,o,i,l),tr=!1,h=e.memoizedState,o.state=h,_u(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||an.current||tr?(typeof p=="function"&&(Qf(e,t,p,i),v=e.memoizedState),(u=tr||Bp(e,t,u,i,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return nd(n,e,t,i,s,r)}function nd(n,e,t,i,r,s){z0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Np(e,t,!1),Wi(n,e,s);i=e.stateNode,XS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=go(e,n.child,null,s),e.child=go(e,null,a,s)):Qt(n,e,a,s),e.memoizedState=i.state,r&&Np(e,t,!0),e.child}function B0(n){var e=n.stateNode;e.pendingContext?Ip(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ip(n,e.context,!1),ch(n,e.containerInfo)}function Zp(n,e,t,i,r){return _o(),rh(r),e.flags|=256,Qt(n,e,t,i),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function rd(n){return{baseLanes:n,cachePool:null,transitions:null}}function H0(n,e,t){var i=e.pendingProps,r=nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ze(nt,r&1),n===null)return Kf(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ju(o,i,0,null),n=Zr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=rd(t),e.memoizedState=id,n):vh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return jS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=_r(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=_r(a,s):(s=Zr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?rd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=id,i}return s=n.child,n=s.sibling,i=_r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function vh(n,e){return e=ju({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function dl(n,e,t,i){return i!==null&&rh(i),go(e,n.child,null,t),n=vh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function jS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Pc(Error(ie(422))),dl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ju({mode:"visible",children:i.children},r,0,null),s=Zr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&go(e,n.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=id,s);if(!(e.mode&1))return dl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Pc(s,i,void 0),dl(n,e,o,i)}if(a=(o&n.childLanes)!==0,on||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Vi(n,r),si(i,n,r,-1))}return Th(),i=Pc(Error(ie(421))),dl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=sM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,En=dr(r.nextSibling),Tn=e,et=!0,ei=null,n!==null&&(In[Nn++]=Fi,In[Nn++]=ki,In[Nn++]=ss,Fi=n.id,ki=n.overflow,ss=e),e=vh(e,i.children),e.flags|=4096,e)}function Qp(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Zf(n.return,e,t)}function bc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function G0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(n,e,i.children,t),i=nt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qp(n,t,e);else if(n.tag===19)Qp(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ze(nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&gu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),bc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&gu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}bc(e,!0,t,null,s);break;case"together":bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Wi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),as|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ie(153));if(e.child!==null){for(n=e.child,t=_r(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=_r(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function YS(n,e,t){switch(e.tag){case 3:B0(e),_o();break;case 5:m0(e);break;case 1:ln(e.type)&&fu(e);break;case 4:ch(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ze(pu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ze(nt,nt.current&1),e.flags|=128,null):t&e.child.childLanes?H0(n,e,t):(Ze(nt,nt.current&1),n=Wi(n,e,t),n!==null?n.sibling:null);Ze(nt,nt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return G0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ze(nt,nt.current),i)break;return null;case 22:case 23:return e.lanes=0,k0(n,e,t)}return Wi(n,e,t)}var V0,sd,W0,X0;V0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};sd=function(){};W0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,jr(vi.current);var s=null;switch(t){case"input":r=Rf(n,r),i=Rf(n,i),s=[];break;case"select":r=ot({},r,{value:void 0}),i=ot({},i,{value:void 0}),s=[];break;case"textarea":r=bf(n,r),i=bf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=uu)}Df(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_a.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_a.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Qe("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};X0=function(n,e,t,i){t!==i&&(e.flags|=4)};function Vo(n,e){if(!et)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function zt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function qS(n,e,t){var i=e.pendingProps;switch(ih(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return ln(e.type)&&cu(),zt(e),null;case 3:return i=e.stateNode,vo(),Je(an),Je(qt),dh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(cl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(hd(ei),ei=null))),sd(n,e),zt(e),null;case 5:fh(e);var r=jr(Ca.current);if(t=e.type,n!==null&&e.stateNode!=null)W0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return zt(e),null}if(n=jr(vi.current),cl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[Aa]=s,n=(e.mode&1)!==0,t){case"dialog":Qe("cancel",i),Qe("close",i);break;case"iframe":case"object":case"embed":Qe("load",i);break;case"video":case"audio":for(r=0;r<Jo.length;r++)Qe(Jo[r],i);break;case"source":Qe("error",i);break;case"img":case"image":case"link":Qe("error",i),Qe("load",i);break;case"details":Qe("toggle",i);break;case"input":ap(i,s),Qe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Qe("invalid",i);break;case"textarea":up(i,s),Qe("invalid",i)}Df(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ul(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ul(i.textContent,a,n),r=["children",""+a]):_a.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Qe("scroll",i)}switch(t){case"input":tl(i),lp(i,s,!0);break;case"textarea":tl(i),cp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=uu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=vg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[hi]=e,n[Aa]=i,V0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Uf(t,i),t){case"dialog":Qe("cancel",n),Qe("close",n),r=i;break;case"iframe":case"object":case"embed":Qe("load",n),r=i;break;case"video":case"audio":for(r=0;r<Jo.length;r++)Qe(Jo[r],n);r=i;break;case"source":Qe("error",n),r=i;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),r=i;break;case"details":Qe("toggle",n),r=i;break;case"input":ap(n,i),r=Rf(n,i),Qe("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=ot({},i,{value:void 0}),Qe("invalid",n);break;case"textarea":up(n,i),r=bf(n,i),Qe("invalid",n);break;default:r=i}Df(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ga(n,l):typeof l=="number"&&ga(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_a.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Qe("scroll",n):l!=null&&Gd(n,s,l,o))}switch(t){case"input":tl(n),lp(n,i,!1);break;case"textarea":tl(n),cp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+yr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?to(n,!!i.multiple,s,!1):i.defaultValue!=null&&to(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=uu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(n&&e.stateNode!=null)X0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=jr(Ca.current),jr(vi.current),cl(e)){if(i=e.stateNode,t=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==t)&&(n=Tn,n!==null))switch(n.tag){case 3:ul(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ul(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return zt(e),null;case 13:if(Je(nt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(et&&En!==null&&e.mode&1&&!(e.flags&128))l0(),_o(),e.flags|=98560,s=!1;else if(s=cl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[hi]=e}else _o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else ei!==null&&(hd(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||nt.current&1?Mt===0&&(Mt=3):Th())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return vo(),sd(n,e),n===null&&Ta(e.stateNode.containerInfo),zt(e),null;case 10:return ah(e.type._context),zt(e),null;case 17:return ln(e.type)&&cu(),zt(e),null;case 19:if(Je(nt),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Vo(s,!1);else{if(Mt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=gu(n),o!==null){for(e.flags|=128,Vo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ze(nt,nt.current&1|2),e.child}n=n.sibling}s.tail!==null&&pt()>yo&&(e.flags|=128,i=!0,Vo(s,!1),e.lanes=4194304)}else{if(!i)if(n=gu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!et)return zt(e),null}else 2*pt()-s.renderingStartTime>yo&&t!==1073741824&&(e.flags|=128,i=!0,Vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,t=nt.current,Ze(nt,i?t&1|2:t&1),e):(zt(e),null);case 22:case 23:return Eh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function $S(n,e){switch(ih(e),e.tag){case 1:return ln(e.type)&&cu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return vo(),Je(an),Je(qt),dh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return fh(e),null;case 13:if(Je(nt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));_o()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Je(nt),null;case 4:return vo(),null;case 10:return ah(e.type._context),null;case 22:case 23:return Eh(),null;case 24:return null;default:return null}}var hl=!1,Vt=!1,KS=typeof WeakSet=="function"?WeakSet:Set,pe=null;function $s(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){lt(n,e,i)}else t.current=null}function od(n,e,t){try{t()}catch(i){lt(n,e,i)}}var Jp=!1;function ZS(n,e){if(Vf=ou,n=$g(),th(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wf={focusedElem:n,selectionRange:t},ou=!1,pe=e;pe!==null;)if(e=pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,pe=n;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var m=v.memoizedProps,_=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?m:Qn(e.type,m),_);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){lt(e,e.return,M)}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}return v=Jp,Jp=!1,v}function ua(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&od(e,t,s)}r=r.next}while(r!==i)}}function Wu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function ad(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function j0(n){var e=n.alternate;e!==null&&(n.alternate=null,j0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[hi],delete e[Aa],delete e[Yf],delete e[US],delete e[IS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Y0(n){return n.tag===5||n.tag===3||n.tag===4}function em(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Y0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ld(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=uu));else if(i!==4&&(n=n.child,n!==null))for(ld(n,e,t),n=n.sibling;n!==null;)ld(n,e,t),n=n.sibling}function ud(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(ud(n,e,t),n=n.sibling;n!==null;)ud(n,e,t),n=n.sibling}var Dt=null,Jn=!1;function $i(n,e,t){for(t=t.child;t!==null;)q0(n,e,t),t=t.sibling}function q0(n,e,t){if(gi&&typeof gi.onCommitFiberUnmount=="function")try{gi.onCommitFiberUnmount(Ou,t)}catch{}switch(t.tag){case 5:Vt||$s(t,e);case 6:var i=Dt,r=Jn;Dt=null,$i(n,e,t),Dt=i,Jn=r,Dt!==null&&(Jn?(n=Dt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Dt.removeChild(t.stateNode));break;case 18:Dt!==null&&(Jn?(n=Dt,t=t.stateNode,n.nodeType===8?Ec(n.parentNode,t):n.nodeType===1&&Ec(n,t),Sa(n)):Ec(Dt,t.stateNode));break;case 4:i=Dt,r=Jn,Dt=t.stateNode.containerInfo,Jn=!0,$i(n,e,t),Dt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&od(t,e,o),r=r.next}while(r!==i)}$i(n,e,t);break;case 1:if(!Vt&&($s(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){lt(t,e,a)}$i(n,e,t);break;case 21:$i(n,e,t);break;case 22:t.mode&1?(Vt=(i=Vt)||t.memoizedState!==null,$i(n,e,t),Vt=i):$i(n,e,t);break;default:$i(n,e,t)}}function tm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new KS),e.forEach(function(i){var r=oM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Yn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,Jn=!1;break e;case 3:Dt=a.stateNode.containerInfo,Jn=!0;break e;case 4:Dt=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(Dt===null)throw Error(ie(160));q0(s,o,r),Dt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){lt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$0(e,n),e=e.sibling}function $0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Yn(e,n),ui(n),i&4){try{ua(3,n,n.return),Wu(3,n)}catch(m){lt(n,n.return,m)}try{ua(5,n,n.return)}catch(m){lt(n,n.return,m)}}break;case 1:Yn(e,n),ui(n),i&512&&t!==null&&$s(t,t.return);break;case 5:if(Yn(e,n),ui(n),i&512&&t!==null&&$s(t,t.return),n.flags&32){var r=n.stateNode;try{ga(r,"")}catch(m){lt(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_g(r,s),Uf(a,o);var u=Uf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Sg(r,d):c==="dangerouslySetInnerHTML"?xg(r,d):c==="children"?ga(r,d):Gd(r,c,d,u)}switch(a){case"input":Cf(r,s);break;case"textarea":gg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?to(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?to(r,!!s.multiple,s.defaultValue,!0):to(r,!!s.multiple,s.multiple?[]:"",!1))}r[Aa]=s}catch(m){lt(n,n.return,m)}}break;case 6:if(Yn(e,n),ui(n),i&4){if(n.stateNode===null)throw Error(ie(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){lt(n,n.return,m)}}break;case 3:if(Yn(e,n),ui(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Sa(e.containerInfo)}catch(m){lt(n,n.return,m)}break;case 4:Yn(e,n),ui(n);break;case 13:Yn(e,n),ui(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Sh=pt())),i&4&&tm(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Vt=(u=Vt)||c,Yn(e,n),Vt=u):Yn(e,n),ui(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(pe=n,c=n.child;c!==null;){for(d=pe=c;pe!==null;){switch(h=pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:ua(4,h,h.return);break;case 1:$s(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(m){lt(i,t,m)}}break;case 5:$s(h,h.return);break;case 22:if(h.memoizedState!==null){im(d);continue}}p!==null?(p.return=h,pe=p):im(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yg("display",o))}catch(m){lt(n,n.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){lt(n,n.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yn(e,n),ui(n),i&4&&tm(n);break;case 21:break;default:Yn(e,n),ui(n)}}function ui(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Y0(t)){var i=t;break e}t=t.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ga(r,""),i.flags&=-33);var s=em(n);ud(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=em(n);ld(n,a,o);break;default:throw Error(ie(161))}}catch(l){lt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function QS(n,e,t){pe=n,K0(n)}function K0(n,e,t){for(var i=(n.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||hl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=hl;var u=Vt;if(hl=o,(Vt=l)&&!u)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?rm(r):l!==null?(l.return=o,pe=l):rm(r);for(;s!==null;)pe=s,K0(s),s=s.sibling;pe=r,hl=a,Vt=u}nm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):nm(n)}}function nm(n){for(;pe!==null;){var e=pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Wu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Qn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}zp(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Sa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Vt||e.flags&512&&ad(e)}catch(h){lt(e,e.return,h)}}if(e===n){pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}}function im(n){for(;pe!==null;){var e=pe;if(e===n){pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,pe=t;break}pe=e.return}}function rm(n){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Wu(4,e)}catch(l){lt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){lt(e,r,l)}}var s=e.return;try{ad(e)}catch(l){lt(e,s,l)}break;case 5:var o=e.return;try{ad(e)}catch(l){lt(e,o,l)}}}catch(l){lt(e,e.return,l)}if(e===n){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var JS=Math.ceil,yu=Yi.ReactCurrentDispatcher,xh=Yi.ReactCurrentOwner,Gn=Yi.ReactCurrentBatchConfig,Be=0,bt=null,xt=null,It=0,yn=0,Ks=Ar(0),Mt=0,Da=null,as=0,Xu=0,yh=0,ca=null,rn=null,Sh=0,yo=1/0,Li=null,Su=!1,cd=null,pr=null,pl=!1,sr=null,Mu=0,fa=0,fd=null,ql=-1,$l=0;function en(){return Be&6?pt():ql!==-1?ql:ql=pt()}function mr(n){return n.mode&1?Be&2&&It!==0?It&-It:OS.transition!==null?($l===0&&($l=Ug()),$l):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:Bg(n.type)),n):1}function si(n,e,t,i){if(50<fa)throw fa=0,fd=null,Error(ie(185));Va(n,t,i),(!(Be&2)||n!==bt)&&(n===bt&&(!(Be&2)&&(Xu|=t),Mt===4&&ir(n,It)),un(n,i),t===1&&Be===0&&!(e.mode&1)&&(yo=pt()+500,Hu&&Rr()))}function un(n,e){var t=n.callbackNode;Oy(n,e);var i=su(n,n===bt?It:0);if(i===0)t!==null&&hp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&hp(t),e===1)n.tag===0?NS(sm.bind(null,n)):s0(sm.bind(null,n)),LS(function(){!(Be&6)&&Rr()}),t=null;else{switch(Ig(i)){case 1:t=Yd;break;case 4:t=Lg;break;case 16:t=ru;break;case 536870912:t=Dg;break;default:t=ru}t=rv(t,Z0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Z0(n,e){if(ql=-1,$l=0,Be&6)throw Error(ie(327));var t=n.callbackNode;if(oo()&&n.callbackNode!==t)return null;var i=su(n,n===bt?It:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Eu(n,i);else{e=i;var r=Be;Be|=2;var s=J0();(bt!==n||It!==e)&&(Li=null,yo=pt()+500,Kr(n,e));do try{nM();break}catch(a){Q0(n,a)}while(1);oh(),yu.current=s,Be=r,xt!==null?e=0:(bt=null,It=0,e=Mt)}if(e!==0){if(e===2&&(r=kf(n),r!==0&&(i=r,e=dd(n,r))),e===1)throw t=Da,Kr(n,0),ir(n,i),un(n,pt()),t;if(e===6)ir(n,i);else{if(r=n.current.alternate,!(i&30)&&!eM(r)&&(e=Eu(n,i),e===2&&(s=kf(n),s!==0&&(i=s,e=dd(n,s))),e===1))throw t=Da,Kr(n,0),ir(n,i),un(n,pt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:zr(n,rn,Li);break;case 3:if(ir(n,i),(i&130023424)===i&&(e=Sh+500-pt(),10<e)){if(su(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){en(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=jf(zr.bind(null,n,rn,Li),e);break}zr(n,rn,Li);break;case 4:if(ir(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*JS(i/1960))-i,10<i){n.timeoutHandle=jf(zr.bind(null,n,rn,Li),i);break}zr(n,rn,Li);break;case 5:zr(n,rn,Li);break;default:throw Error(ie(329))}}}return un(n,pt()),n.callbackNode===t?Z0.bind(null,n):null}function dd(n,e){var t=ca;return n.current.memoizedState.isDehydrated&&(Kr(n,e).flags|=256),n=Eu(n,e),n!==2&&(e=rn,rn=t,e!==null&&hd(e)),n}function hd(n){rn===null?rn=n:rn.push.apply(rn,n)}function eM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(n,e){for(e&=~yh,e&=~Xu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ri(e),i=1<<t;n[t]=-1,e&=~i}}function sm(n){if(Be&6)throw Error(ie(327));oo();var e=su(n,0);if(!(e&1))return un(n,pt()),null;var t=Eu(n,e);if(n.tag!==0&&t===2){var i=kf(n);i!==0&&(e=i,t=dd(n,i))}if(t===1)throw t=Da,Kr(n,0),ir(n,e),un(n,pt()),t;if(t===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,zr(n,rn,Li),un(n,pt()),null}function Mh(n,e){var t=Be;Be|=1;try{return n(e)}finally{Be=t,Be===0&&(yo=pt()+500,Hu&&Rr())}}function ls(n){sr!==null&&sr.tag===0&&!(Be&6)&&oo();var e=Be;Be|=1;var t=Gn.transition,i=Ve;try{if(Gn.transition=null,Ve=1,n)return n()}finally{Ve=i,Gn.transition=t,Be=e,!(Be&6)&&Rr()}}function Eh(){yn=Ks.current,Je(Ks)}function Kr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,bS(t)),xt!==null)for(t=xt.return;t!==null;){var i=t;switch(ih(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cu();break;case 3:vo(),Je(an),Je(qt),dh();break;case 5:fh(i);break;case 4:vo();break;case 13:Je(nt);break;case 19:Je(nt);break;case 10:ah(i.type._context);break;case 22:case 23:Eh()}t=t.return}if(bt=n,xt=n=_r(n.current,null),It=yn=e,Mt=0,Da=null,yh=Xu=as=0,rn=ca=null,Xr!==null){for(e=0;e<Xr.length;e++)if(t=Xr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Xr=null}return n}function Q0(n,e){do{var t=xt;try{if(oh(),Xl.current=xu,vu){for(var i=st.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}vu=!1}if(os=0,Ct=yt=st=null,la=!1,Pa=0,xh.current=null,t===null||t.return===null){Mt=1,Da=e,xt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=jp(o);if(p!==null){p.flags&=-257,Yp(p,o,a,s,e),p.mode&1&&Xp(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var m=new Set;m.add(l),e.updateQueue=m}else v.add(l);break e}else{if(!(e&1)){Xp(s,u,e),Th();break e}l=Error(ie(426))}}else if(et&&a.mode&1){var _=jp(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Yp(_,o,a,s,e),rh(xo(l,a));break e}}s=l=xo(l,a),Mt!==4&&(Mt=2),ca===null?ca=[s]:ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=N0(s,l,e);kp(s,f);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(pr===null||!pr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=O0(s,a,e);kp(s,M);break e}}s=s.return}while(s!==null)}tv(t)}catch(S){e=S,xt===t&&t!==null&&(xt=t=t.return);continue}break}while(1)}function J0(){var n=yu.current;return yu.current=xu,n===null?xu:n}function Th(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),bt===null||!(as&268435455)&&!(Xu&268435455)||ir(bt,It)}function Eu(n,e){var t=Be;Be|=2;var i=J0();(bt!==n||It!==e)&&(Li=null,Kr(n,e));do try{tM();break}catch(r){Q0(n,r)}while(1);if(oh(),Be=t,yu.current=i,xt!==null)throw Error(ie(261));return bt=null,It=0,Mt}function tM(){for(;xt!==null;)ev(xt)}function nM(){for(;xt!==null&&!Ry();)ev(xt)}function ev(n){var e=iv(n.alternate,n,yn);n.memoizedProps=n.pendingProps,e===null?tv(n):xt=e,xh.current=null}function tv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=$S(t,e),t!==null){t.flags&=32767,xt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Mt=6,xt=null;return}}else if(t=qS(t,e,yn),t!==null){xt=t;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=n}while(e!==null);Mt===0&&(Mt=5)}function zr(n,e,t){var i=Ve,r=Gn.transition;try{Gn.transition=null,Ve=1,iM(n,e,t,i)}finally{Gn.transition=r,Ve=i}return null}function iM(n,e,t,i){do oo();while(sr!==null);if(Be&6)throw Error(ie(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Fy(n,s),n===bt&&(xt=bt=null,It=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||pl||(pl=!0,rv(ru,function(){return oo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var o=Ve;Ve=1;var a=Be;Be|=4,xh.current=null,ZS(n,t),$0(t,n),ES(Wf),ou=!!Vf,Wf=Vf=null,n.current=t,QS(t),Cy(),Be=a,Ve=o,Gn.transition=s}else n.current=t;if(pl&&(pl=!1,sr=n,Mu=r),s=n.pendingLanes,s===0&&(pr=null),Ly(t.stateNode),un(n,pt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Su)throw Su=!1,n=cd,cd=null,n;return Mu&1&&n.tag!==0&&oo(),s=n.pendingLanes,s&1?n===fd?fa++:(fa=0,fd=n):fa=0,Rr(),null}function oo(){if(sr!==null){var n=Ig(Mu),e=Gn.transition,t=Ve;try{if(Gn.transition=null,Ve=16>n?16:n,sr===null)var i=!1;else{if(n=sr,sr=null,Mu=0,Be&6)throw Error(ie(331));var r=Be;for(Be|=4,pe=n.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var c=pe;switch(c.tag){case 0:case 11:case 15:ua(8,c,s)}var d=c.child;if(d!==null)d.return=c,pe=d;else for(;pe!==null;){c=pe;var h=c.sibling,p=c.return;if(j0(c),c===u){pe=null;break}if(h!==null){h.return=p,pe=h;break}pe=p}}}var v=s.alternate;if(v!==null){var m=v.child;if(m!==null){v.child=null;do{var _=m.sibling;m.sibling=null,m=_}while(m!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,pe=f;break e}pe=s.return}}var g=n.current;for(pe=g;pe!==null;){o=pe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,pe=x;else e:for(o=g;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wu(9,a)}}catch(S){lt(a,a.return,S)}if(a===o){pe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,pe=M;break e}pe=a.return}}if(Be=r,Rr(),gi&&typeof gi.onPostCommitFiberRoot=="function")try{gi.onPostCommitFiberRoot(Ou,n)}catch{}i=!0}return i}finally{Ve=t,Gn.transition=e}}return!1}function om(n,e,t){e=xo(t,e),e=N0(n,e,1),n=hr(n,e,1),e=en(),n!==null&&(Va(n,1,e),un(n,e))}function lt(n,e,t){if(n.tag===3)om(n,n,t);else for(;e!==null;){if(e.tag===3){om(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pr===null||!pr.has(i))){n=xo(t,n),n=O0(e,n,1),e=hr(e,n,1),n=en(),e!==null&&(Va(e,1,n),un(e,n));break}}e=e.return}}function rM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=en(),n.pingedLanes|=n.suspendedLanes&t,bt===n&&(It&t)===t&&(Mt===4||Mt===3&&(It&130023424)===It&&500>pt()-Sh?Kr(n,0):yh|=t),un(n,e)}function nv(n,e){e===0&&(n.mode&1?(e=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):e=1);var t=en();n=Vi(n,e),n!==null&&(Va(n,e,t),un(n,t))}function sM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),nv(n,t)}function oM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),nv(n,t)}var iv;iv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||an.current)on=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return on=!1,YS(n,e,t);on=!!(n.flags&131072)}else on=!1,et&&e.flags&1048576&&o0(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Yl(n,e),n=e.pendingProps;var r=mo(e,qt.current);so(e,t),r=ph(null,e,i,n,r,t);var s=mh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,fu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,uh(e),r.updater=Gu,e.stateNode=r,r._reactInternals=e,Jf(e,i,n,t),e=nd(null,e,i,!0,s,t)):(e.tag=0,et&&s&&nh(e),Qt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Yl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=lM(i),n=Qn(i,n),r){case 0:e=td(null,e,i,n,t);break e;case 1:e=Kp(null,e,i,n,t);break e;case 11:e=qp(null,e,i,n,t);break e;case 14:e=$p(null,e,i,Qn(i.type,n),t);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),td(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Kp(n,e,i,r,t);case 3:e:{if(B0(e),n===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,c0(n,e),_u(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xo(Error(ie(423)),e),e=Zp(n,e,i,t,r);break e}else if(i!==r){r=xo(Error(ie(424)),e),e=Zp(n,e,i,t,r);break e}else for(En=dr(e.stateNode.containerInfo.firstChild),Tn=e,et=!0,ei=null,t=p0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(_o(),i===r){e=Wi(n,e,t);break e}Qt(n,e,i,t)}e=e.child}return e;case 5:return m0(e),n===null&&Kf(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Xf(i,r)?o=null:s!==null&&Xf(i,s)&&(e.flags|=32),z0(n,e),Qt(n,e,o,t),e.child;case 6:return n===null&&Kf(e),null;case 13:return H0(n,e,t);case 4:return ch(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=go(e,null,i,t):Qt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),qp(n,e,i,r,t);case 7:return Qt(n,e,e.pendingProps,t),e.child;case 8:return Qt(n,e,e.pendingProps.children,t),e.child;case 12:return Qt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ze(pu,i._currentValue),i._currentValue=o,s!==null)if(ai(s.value,o)){if(s.children===r.children&&!an.current){e=Wi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Zf(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Zf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,so(e,t),r=Vn(r),i=i(r),e.flags|=1,Qt(n,e,i,t),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),$p(n,e,i,r,t);case 15:return F0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Yl(n,e),e.tag=1,ln(i)?(n=!0,fu(e)):n=!1,so(e,t),d0(e,i,r),Jf(e,i,r,t),nd(null,e,i,!0,n,t);case 19:return G0(n,e,t);case 22:return k0(n,e,t)}throw Error(ie(156,e.tag))};function rv(n,e){return bg(n,e)}function aM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(n,e,t,i){return new aM(n,e,t,i)}function wh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function lM(n){if(typeof n=="function")return wh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Wd)return 11;if(n===Xd)return 14}return 2}function _r(n,e){var t=n.alternate;return t===null?(t=kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Kl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")wh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Bs:return Zr(t.children,r,s,e);case Vd:o=8,r|=8;break;case Ef:return n=kn(12,t,e,r|2),n.elementType=Ef,n.lanes=s,n;case Tf:return n=kn(13,t,e,r),n.elementType=Tf,n.lanes=s,n;case wf:return n=kn(19,t,e,r),n.elementType=wf,n.lanes=s,n;case hg:return ju(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case fg:o=10;break e;case dg:o=9;break e;case Wd:o=11;break e;case Xd:o=14;break e;case er:o=16,i=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return e=kn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Zr(n,e,t,i){return n=kn(7,n,i,e),n.lanes=t,n}function ju(n,e,t,i){return n=kn(22,n,i,e),n.elementType=hg,n.lanes=t,n.stateNode={isHidden:!1},n}function Lc(n,e,t){return n=kn(6,n,null,e),n.lanes=t,n}function Dc(n,e,t){return e=kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function uM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dc(0),this.expirationTimes=dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ah(n,e,t,i,r,s,o,a,l){return n=new uM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},uh(s),n}function cM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function sv(n){if(!n)return Sr;n=n._reactInternals;e:{if(ms(n)!==n||n.tag!==1)throw Error(ie(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(n.tag===1){var t=n.type;if(ln(t))return r0(n,t,e)}return e}function ov(n,e,t,i,r,s,o,a,l){return n=Ah(t,i,!0,n,r,s,o,a,l),n.context=sv(null),t=n.current,i=en(),r=mr(t),s=zi(i,r),s.callback=e??null,hr(t,s,r),n.current.lanes=r,Va(n,r,i),un(n,i),n}function Yu(n,e,t,i){var r=e.current,s=en(),o=mr(r);return t=sv(t),e.context===null?e.context=t:e.pendingContext=t,e=zi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=hr(r,e,o),n!==null&&(si(n,r,o,s),Wl(n,r,o)),o}function Tu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Rh(n,e){am(n,e),(n=n.alternate)&&am(n,e)}function fM(){return null}var av=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ch(n){this._internalRoot=n}qu.prototype.render=Ch.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ie(409));Yu(n,e,null,null)};qu.prototype.unmount=Ch.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ls(function(){Yu(null,n,null,null)}),e[Gi]=null}};function qu(n){this._internalRoot=n}qu.prototype.unstable_scheduleHydration=function(n){if(n){var e=Fg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<nr.length&&e!==0&&e<nr[t].priority;t++);nr.splice(t,0,n),t===0&&zg(n)}};function Ph(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function $u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lm(){}function dM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Tu(o);s.call(u)}}var o=ov(e,i,n,0,null,!1,!1,"",lm);return n._reactRootContainer=o,n[Gi]=o.current,Ta(n.nodeType===8?n.parentNode:n),ls(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Tu(l);a.call(u)}}var l=Ah(n,0,!1,null,null,!1,!1,"",lm);return n._reactRootContainer=l,n[Gi]=l.current,Ta(n.nodeType===8?n.parentNode:n),ls(function(){Yu(e,l,t,i)}),l}function Ku(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Tu(o);a.call(l)}}Yu(e,o,n,r)}else o=dM(t,e,n,r,i);return Tu(o)}Ng=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Qo(e.pendingLanes);t!==0&&(qd(e,t|1),un(e,pt()),!(Be&6)&&(yo=pt()+500,Rr()))}break;case 13:ls(function(){var i=Vi(n,1);if(i!==null){var r=en();si(i,n,1,r)}}),Rh(n,1)}};$d=function(n){if(n.tag===13){var e=Vi(n,134217728);if(e!==null){var t=en();si(e,n,134217728,t)}Rh(n,134217728)}};Og=function(n){if(n.tag===13){var e=mr(n),t=Vi(n,e);if(t!==null){var i=en();si(t,n,e,i)}Rh(n,e)}};Fg=function(){return Ve};kg=function(n,e){var t=Ve;try{return Ve=n,e()}finally{Ve=t}};Nf=function(n,e,t){switch(e){case"input":if(Cf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Bu(i);if(!r)throw Error(ie(90));mg(i),Cf(i,r)}}}break;case"textarea":gg(n,t);break;case"select":e=t.value,e!=null&&to(n,!!t.multiple,e,!1)}};Tg=Mh;wg=ls;var hM={usingClientEntryPoint:!1,Events:[Xa,Ws,Bu,Mg,Eg,Mh]},Wo={findFiberByHostInstance:Wr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pM={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Cg(n),n===null?null:n.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||fM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{Ou=ml.inject(pM),gi=ml}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hM;Cn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ph(e))throw Error(ie(200));return cM(n,e,null,t)};Cn.createRoot=function(n,e){if(!Ph(n))throw Error(ie(299));var t=!1,i="",r=av;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ah(n,1,!1,null,null,t,!1,i,r),n[Gi]=e.current,Ta(n.nodeType===8?n.parentNode:n),new Ch(e)};Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=Cg(e),n=n===null?null:n.stateNode,n};Cn.flushSync=function(n){return ls(n)};Cn.hydrate=function(n,e,t){if(!$u(e))throw Error(ie(200));return Ku(null,n,e,!0,t)};Cn.hydrateRoot=function(n,e,t){if(!Ph(n))throw Error(ie(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=av;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=ov(e,null,n,1,t??null,r,!1,s,o),n[Gi]=e.current,Ta(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new qu(e)};Cn.render=function(n,e,t){if(!$u(e))throw Error(ie(200));return Ku(null,n,e,!1,t)};Cn.unmountComponentAtNode=function(n){if(!$u(n))throw Error(ie(40));return n._reactRootContainer?(ls(function(){Ku(null,null,n,!1,function(){n._reactRootContainer=null,n[Gi]=null})}),!0):!1};Cn.unstable_batchedUpdates=Mh;Cn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!$u(t))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return Ku(n,e,t,!1,i)};Cn.version="18.2.0-next-9e3b772b8-20220608";function lv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lv)}catch(n){console.error(n)}}lv(),og.exports=Cn;var mM=og.exports,um=mM;Sf.createRoot=um.createRoot,Sf.hydrateRoot=um.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bh="152",xs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_M=0,cm=1,gM=2,uv=1,vM=2,bi=3,Mr=0,cn=1,Oi=2,gr=0,ao=1,fm=2,dm=3,hm=4,xM=5,ks=100,yM=101,SM=102,pm=103,mm=104,MM=200,EM=201,TM=202,wM=203,cv=204,fv=205,AM=206,RM=207,CM=208,PM=209,bM=210,LM=0,DM=1,UM=2,pd=3,IM=4,NM=5,OM=6,FM=7,dv=0,kM=1,zM=2,Bi=0,BM=1,HM=2,GM=3,VM=4,WM=5,hv=300,So=301,Mo=302,wu=303,md=304,Zu=306,_d=1e3,ni=1001,gd=1002,Gt=1003,_m=1004,Uc=1005,On=1006,XM=1007,Ua=1008,us=1009,jM=1010,YM=1011,pv=1012,qM=1013,Yr=1014,qr=1015,Ia=1016,$M=1017,KM=1018,lo=1020,ZM=1021,ii=1023,QM=1024,JM=1025,Qr=1026,Eo=1027,eE=1028,tE=1029,nE=1030,iE=1031,rE=1033,Ic=33776,Nc=33777,Oc=33778,Fc=33779,gm=35840,vm=35841,xm=35842,ym=35843,sE=36196,Sm=37492,Mm=37496,Em=37808,Tm=37809,wm=37810,Am=37811,Rm=37812,Cm=37813,Pm=37814,bm=37815,Lm=37816,Dm=37817,Um=37818,Im=37819,Nm=37820,Om=37821,kc=36492,oE=36283,Fm=36284,km=36285,zm=36286,mv=3e3,Jr=3001,aE=3200,lE=3201,_v=0,uE=1,es="",Re="srgb",Mi="srgb-linear",gv="display-p3",zc=7680,cE=519,Bm=35044,Hm="300 es",vd=1035;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=Math.PI/180,xd=180/Math.PI;function Ya(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Jt(n,e,t){return Math.max(e,Math.min(t,n))}function fE(n,e){return(n%e+e)%e}function Hc(n,e,t){return(1-t)*n+t*e}function Gm(n){return(n&n-1)===0&&n!==0}function dE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _l(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],v=i[8],m=r[0],_=r[3],f=r[6],g=r[1],x=r[4],M=r[7],S=r[2],E=r[5],A=r[8];return s[0]=o*m+a*g+l*S,s[3]=o*_+a*x+l*E,s[6]=o*f+a*M+l*A,s[1]=u*m+c*g+d*S,s[4]=u*_+c*x+d*E,s[7]=u*f+c*M+d*A,s[2]=h*m+p*g+v*S,s[5]=h*_+p*x+v*E,s[8]=h*f+p*M+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,v=t*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=d*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gc.makeScale(e,t)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new Fe;function vv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Vm={};function da(n){n in Vm||(Vm[n]=!0,console.warn(n))}function uo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const hE=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),pE=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function mE(n){return n.convertSRGBToLinear().applyMatrix3(pE)}function _E(n){return n.applyMatrix3(hE).convertLinearToSRGB()}const gE={[Mi]:n=>n,[Re]:n=>n.convertSRGBToLinear(),[gv]:mE},vE={[Mi]:n=>n,[Re]:n=>n.convertLinearToSRGB(),[gv]:_E},qn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Mi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=gE[e],r=vE[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ss;class xv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=Na("canvas")),Ss.width=e.width,Ss.height=e.height;const i=Ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=uo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(uo(t[i]/255)*255):t[i]=uo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class yv{constructor(e=null){this.isSource=!0,this.uuid=Ya(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wc(r[o].image)):s.push(Wc(r[o]))}else s=Wc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Wc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xE=0;class fn extends _s{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=ni,r=ni,s=On,o=Ua,a=ii,l=us,u=fn.DEFAULT_ANISOTROPY,c=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Ya(),this.name="",this.source=new yv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Jr?Re:es),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Re?Jr:mv}set encoding(e){da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jr?Re:es}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=hv;fn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],v=l[9],m=l[2],_=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-m)<.01&&Math.abs(v-_)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+m)<.1&&Math.abs(v+_)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,M=(p+1)/2,S=(f+1)/2,E=(c+h)/4,A=(d+m)/4,P=(v+_)/4;return x>M&&x>S?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=A/i):M>S?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=P/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=A/s,r=P/s),this.set(i,r,s,t),this}let g=Math.sqrt((_-v)*(_-v)+(d-m)*(d-m)+(h-c)*(h-c));return Math.abs(g)<.001&&(g=1),this.x=(_-v)/g,this.y=(d-m)/g,this.z=(h-c)/g,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cs extends _s{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(da("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Jr?Re:es),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:On,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sv extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yE extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=m;return}if(d!==m||l!==h||u!==p||c!==v){let _=1-a;const f=l*h+u*p+c*v+d*m,g=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const S=Math.sqrt(x),E=Math.atan2(S,f*g);_=Math.sin(_*E)/S,a=Math.sin(a*E)/S}const M=a*g;if(l=l*_+h*M,u=u*_+p*M,c=c*_+v*M,d=d*_+m*M,_===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+c*d+l*p-u*h,e[t+1]=l*v+c*h+u*d-a*p,e[t+2]=u*v+c*p+a*h-l*d,e[t+3]=c*v-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"YXZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"ZXY":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"ZYX":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"YZX":this._x=h*c*d+u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d-h*p*v;break;case"XZY":this._x=h*c*d-u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=u*l+h*-s+c*-a-d*-o,this.y=c*l+h*-o+d*-s-u*-a,this.z=d*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new O,Wm=new fs;class qa{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ms.copy(e.boundingBox),Ms.applyMatrix4(e.matrixWorld),this.union(Ms);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)wi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(wi)}else r.boundingBox===null&&r.computeBoundingBox(),Ms.copy(r.boundingBox),Ms.applyMatrix4(e.matrixWorld),this.union(Ms)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),gl.subVectors(this.max,Xo),Es.subVectors(e.a,Xo),Ts.subVectors(e.b,Xo),ws.subVectors(e.c,Xo),Ki.subVectors(Ts,Es),Zi.subVectors(ws,Ts),Ur.subVectors(Es,ws);let t=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-Ur.z,Ur.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,Ur.z,0,-Ur.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-Ur.y,Ur.x,0];return!jc(t,Es,Ts,ws,gl)||(t=[1,0,0,0,1,0,0,0,1],!jc(t,Es,Ts,ws,gl))?!1:(vl.crossVectors(Ki,Zi),t=[vl.x,vl.y,vl.z],jc(t,Es,Ts,ws,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new O,new O,new O,new O,new O,new O,new O,new O],wi=new O,Ms=new qa,Es=new O,Ts=new O,ws=new O,Ki=new O,Zi=new O,Ur=new O,Xo=new O,gl=new O,vl=new O,Ir=new O;function jc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ir.fromArray(n,s);const a=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),u=t.dot(Ir),c=i.dot(Ir);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const SE=new qa,jo=new O,Yc=new O;class Lh{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):SE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const t=jo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(jo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Yc)),this.expandByPoint(jo.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new O,qc=new O,xl=new O,Qi=new O,$c=new O,yl=new O,Kc=new O;class ME{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qc.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(qc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xl),a=Qi.dot(this.direction),l=-Qi.dot(xl),u=Qi.lengthSq(),c=Math.abs(1-o*o);let d,h,p,v;if(c>0)if(d=o*l-a,h=o*a-l,v=s*c,d>=0)if(h>=-v)if(h<=v){const m=1/c;d*=m,h*=m,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(qc).addScaledVector(xl,h),p}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,r,s){$c.subVectors(t,e),yl.subVectors(i,e),Kc.crossVectors($c,yl);let o=this.direction.dot(Kc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const l=a*this.direction.dot(yl.crossVectors(Qi,yl));if(l<0)return null;const u=a*this.direction.dot($c.cross(Qi));if(u<0||l+u>o)return null;const c=-a*Qi.dot(Kc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,d,h,p,v,m,_){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=m,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,v=a*c,m=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+v*u,t[5]=h-m*u,t[9]=-a*l,t[2]=m-h*u,t[6]=v+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,v=u*c,m=u*d;t[0]=h+m*a,t[4]=v*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-v,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,v=u*c,m=u*d;t[0]=h-m*a,t[4]=-o*d,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*c,t[9]=m-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,v=a*c,m=a*d;t[0]=l*c,t[4]=v*u-p,t[8]=h*u+m,t[1]=l*d,t[5]=m*u+h,t[9]=p*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,v=a*l,m=a*u;t[0]=l*c,t[4]=m-h*d,t[8]=v*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+v,t[10]=h-m*d}else if(e.order==="XZY"){const h=o*l,p=o*u,v=a*l,m=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+m,t[5]=o*c,t[9]=p*d-v,t[2]=v*d-p,t[6]=a*c,t[10]=m*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EE,e,TE)}lookAt(e,t,i){const r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ji.crossVectors(i,vn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ji.crossVectors(i,vn)),Ji.normalize(),Sl.crossVectors(vn,Ji),r[0]=Ji.x,r[4]=Sl.x,r[8]=vn.x,r[1]=Ji.y,r[5]=Sl.y,r[9]=vn.y,r[2]=Ji.z,r[6]=Sl.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],v=i[2],m=i[6],_=i[10],f=i[14],g=i[3],x=i[7],M=i[11],S=i[15],E=r[0],A=r[4],P=r[8],y=r[12],w=r[1],H=r[5],W=r[9],I=r[13],F=r[2],B=r[6],Z=r[10],X=r[14],L=r[3],G=r[7],z=r[11],oe=r[15];return s[0]=o*E+a*w+l*F+u*L,s[4]=o*A+a*H+l*B+u*G,s[8]=o*P+a*W+l*Z+u*z,s[12]=o*y+a*I+l*X+u*oe,s[1]=c*E+d*w+h*F+p*L,s[5]=c*A+d*H+h*B+p*G,s[9]=c*P+d*W+h*Z+p*z,s[13]=c*y+d*I+h*X+p*oe,s[2]=v*E+m*w+_*F+f*L,s[6]=v*A+m*H+_*B+f*G,s[10]=v*P+m*W+_*Z+f*z,s[14]=v*y+m*I+_*X+f*oe,s[3]=g*E+x*w+M*F+S*L,s[7]=g*A+x*H+M*B+S*G,s[11]=g*P+x*W+M*Z+S*z,s[15]=g*y+x*I+M*X+S*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],v=e[3],m=e[7],_=e[11],f=e[15];return v*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+m*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+_*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],v=e[12],m=e[13],_=e[14],f=e[15],g=d*_*u-m*h*u+m*l*p-a*_*p-d*l*f+a*h*f,x=v*h*u-c*_*u-v*l*p+o*_*p+c*l*f-o*h*f,M=c*m*u-v*d*u+v*a*p-o*m*p-c*a*f+o*d*f,S=v*d*l-c*m*l-v*a*h+o*m*h+c*a*_-o*d*_,E=t*g+i*x+r*M+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=g*A,e[1]=(m*h*s-d*_*s-m*r*p+i*_*p+d*r*f-i*h*f)*A,e[2]=(a*_*s-m*l*s+m*r*u-i*_*u-a*r*f+i*l*f)*A,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(c*_*s-v*h*s+v*r*p-t*_*p-c*r*f+t*h*f)*A,e[6]=(v*l*s-o*_*s-v*r*u+t*_*u+o*r*f-t*l*f)*A,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*A,e[8]=M*A,e[9]=(v*d*s-c*m*s-v*i*p+t*m*p+c*i*f-t*d*f)*A,e[10]=(o*m*s-v*a*s+v*i*u-t*m*u-o*i*f+t*a*f)*A,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*A,e[12]=S*A,e[13]=(c*m*r-v*d*r+v*i*h-t*m*h-c*i*_+t*d*_)*A,e[14]=(v*a*r-o*m*r-v*i*l+t*m*l+o*i*_-t*a*_)*A,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,v=s*d,m=o*c,_=o*d,f=a*d,g=l*u,x=l*c,M=l*d,S=i.x,E=i.y,A=i.z;return r[0]=(1-(m+f))*S,r[1]=(p+M)*S,r[2]=(v-x)*S,r[3]=0,r[4]=(p-M)*E,r[5]=(1-(h+f))*E,r[6]=(_+g)*E,r[7]=0,r[8]=(v+x)*A,r[9]=(_-g)*A,r[10]=(1-(h+m))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=As.set(r[0],r[1],r[2]).length();const o=As.set(r[4],r[5],r[6]).length(),a=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const u=1/s,c=1/o,d=1/a;return $n.elements[0]*=u,$n.elements[1]*=u,$n.elements[2]*=u,$n.elements[4]*=c,$n.elements[5]*=c,$n.elements[6]*=c,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,t.setFromRotationMatrix($n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),d=(t+e)*l,h=(i+r)*u,p=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const As=new O,$n=new Et,EE=new O(0,0,0),TE=new O(1,1,1),Ji=new O,Sl=new O,vn=new O,Xm=new Et,jm=new fs;class Qu{constructor(e=0,t=0,i=0,r=Qu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jm.setFromEuler(this),this.setFromQuaternion(jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qu.DEFAULT_ORDER="XYZ";class Mv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wE=0;const Ym=new O,Rs=new fs,Ri=new Et,Ml=new O,Yo=new O,AE=new O,RE=new fs,qm=new O(1,0,0),$m=new O(0,1,0),Km=new O(0,0,1),CE={type:"added"},Zm={type:"removed"};class Xt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new O,t=new Qu,i=new fs,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Fe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Mv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(qm,e)}rotateY(e){return this.rotateOnAxis($m,e)}rotateZ(e){return this.rotateOnAxis(Km,e)}translateOnAxis(e,t){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qm,e)}translateY(e){return this.translateOnAxis($m,e)}translateZ(e){return this.translateOnAxis(Km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ml.copy(e):Ml.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Yo,Ml,this.up):Ri.lookAt(Ml,Yo,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),Rs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(CE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Zm)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,AE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,RE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new O(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new O,Ci=new O,Zc=new O,Pi=new O,Cs=new O,Ps=new O,Qm=new O,Qc=new O,Jc=new O,ef=new O;let El=!1;class ti{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kn.subVectors(e,t),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Kn.subVectors(r,t),Ci.subVectors(i,t),Zc.subVectors(e,t);const o=Kn.dot(Kn),a=Kn.dot(Ci),l=Kn.dot(Zc),u=Ci.dot(Ci),c=Ci.dot(Zc),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Pi),Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getUV(e,t,i,r,s,o,a,l){return El===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),El=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Pi),l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l}static isFrontFacing(e,t,i,r){return Kn.subVectors(i,t),Ci.subVectors(e,t),Kn.cross(Ci).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Kn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return El===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),El=!0),ti.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Cs.subVectors(r,i),Ps.subVectors(s,i),Qc.subVectors(e,i);const l=Cs.dot(Qc),u=Ps.dot(Qc);if(l<=0&&u<=0)return t.copy(i);Jc.subVectors(e,r);const c=Cs.dot(Jc),d=Ps.dot(Jc);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Cs,o);ef.subVectors(e,s);const p=Cs.dot(ef),v=Ps.dot(ef);if(v>=0&&p<=v)return t.copy(s);const m=p*u-l*v;if(m<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(i).addScaledVector(Ps,a);const _=c*v-p*d;if(_<=0&&d-c>=0&&p-v>=0)return Qm.subVectors(s,r),a=(d-c)/(d-c+(p-v)),t.copy(r).addScaledVector(Qm,a);const f=1/(_+m+h);return o=m*f,a=h*f,t.copy(i).addScaledVector(Cs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let PE=0;class $a extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=ao,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=cv,this.blendDst=fv,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=pd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zc,this.stencilZFail=zc,this.stencilZPass=zc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function tf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qn.workingColorSpace){return this.r=e,this.g=t,this.b=i,qn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qn.workingColorSpace){if(e=fE(e,1),t=Jt(t,0,1),i=Jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=tf(o,s,e+1/3),this.g=tf(o,s,e),this.b=tf(o,s,e-1/3)}return qn.toWorkingColorSpace(this,r),this}setStyle(e,t=Re){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){const i=Ev[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}copyLinearToSRGB(e){return this.r=Vc(e.r),this.g=Vc(e.g),this.b=Vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return qn.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Jt(Ht.r*255,0,255))*65536+Math.round(Jt(Ht.g*255,0,255))*256+Math.round(Jt(Ht.b*255,0,255))}getHexString(e=Re){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qn.workingColorSpace){qn.fromWorkingColorSpace(Ht.copy(this),t);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=qn.workingColorSpace){return qn.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Re){qn.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,r=Ht.b;return e!==Re?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),Zn.h+=e,Zn.s+=t,Zn.l+=i,this.setHSL(Zn.h,Zn.s,Zn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Tl);const i=Hc(Zn.h,Tl.h,t),r=Hc(Zn.s,Tl.s,t),s=Hc(Zn.l,Tl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new $e;$e.NAMES=Ev;class Tv extends $a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new O,wl=new De;class xi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bm,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_l(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_l(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_l(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_l(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class wv extends xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Av extends xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yi extends xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bE=0;const Ln=new Et,nf=new Xt,bs=new O,xn=new qa,qo=new qa,Rt=new O;class Cr extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vv(e)?Av:wv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return nf.lookAt(e),nf.updateMatrix(),this.applyMatrix4(nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qo.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(xn.min,qo.min),xn.expandByPoint(Rt),Rt.addVectors(xn.max,qo.max),xn.expandByPoint(Rt)):(xn.expandByPoint(qo.min),xn.expandByPoint(qo.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Rt.fromBufferAttribute(a,u),l&&(bs.fromBufferAttribute(e,u),Rt.add(bs)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new O,c[w]=new O;const d=new O,h=new O,p=new O,v=new De,m=new De,_=new De,f=new O,g=new O;function x(w,H,W){d.fromArray(r,w*3),h.fromArray(r,H*3),p.fromArray(r,W*3),v.fromArray(o,w*2),m.fromArray(o,H*2),_.fromArray(o,W*2),h.sub(d),p.sub(d),m.sub(v),_.sub(v);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(f.copy(h).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(I),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(I),u[w].add(f),u[H].add(f),u[W].add(f),c[w].add(g),c[H].add(g),c[W].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,H=M.length;w<H;++w){const W=M[w],I=W.start,F=W.count;for(let B=I,Z=I+F;B<Z;B+=3)x(i[B+0],i[B+1],i[B+2])}const S=new O,E=new O,A=new O,P=new O;function y(w){A.fromArray(s,w*3),P.copy(A);const H=u[w];S.copy(H),S.sub(A.multiplyScalar(A.dot(H))).normalize(),E.crossVectors(P,H);const I=E.dot(c[w])<0?-1:1;l[w*4]=S.x,l[w*4+1]=S.y,l[w*4+2]=S.z,l[w*4+3]=I}for(let w=0,H=M.length;w<H;++w){const W=M[w],I=W.start,F=W.count;for(let B=I,Z=I+F;B<Z;B+=3)y(i[B+0]),y(i[B+1]),y(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,u=new O,c=new O,d=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),m=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,_),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,_),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,v=0;for(let m=0,_=l.length;m<_;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*c;for(let f=0;f<c;f++)h[v++]=u[p++]}return new xi(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jm=new Et,ci=new ME,Al=new Lh,e_=new O,Ls=new O,Ds=new O,Us=new O,rf=new O,Rl=new O,Cl=new De,Pl=new De,bl=new De,t_=new O,n_=new O,i_=new O,Ll=new O,Dl=new O;class mi extends Xt{constructor(e=new Cr,t=new Tv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Rl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(rf.fromBufferAttribute(d,e),o?Rl.addScaledVector(rf,c):Rl.addScaledVector(rf.sub(t),c))}t.add(Rl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),ci.copy(e.ray).recast(e.near),!(Al.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Al,e_)===null||ci.origin.distanceToSquared(e_)>(e.far-e.near)**2))&&(Jm.copy(s).invert(),ci.copy(e.ray).applyMatrix4(Jm),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,v=d.length;p<v;p++){const m=d[p],_=s[m.materialIndex],f=Math.max(m.start,h.start),g=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let x=f,M=g;x<M;x+=3){const S=o.getX(x),E=o.getX(x+1),A=o.getX(x+2);i=Ul(this,_,e,ci,l,u,c,S,E,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=p,_=v;m<_;m+=3){const f=o.getX(m),g=o.getX(m+1),x=o.getX(m+2);i=Ul(this,s,e,ci,l,u,c,f,g,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,v=d.length;p<v;p++){const m=d[p],_=s[m.materialIndex],f=Math.max(m.start,h.start),g=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let x=f,M=g;x<M;x+=3){const S=x,E=x+1,A=x+2;i=Ul(this,_,e,ci,l,u,c,S,E,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=p,_=v;m<_;m+=3){const f=m,g=m+1,x=m+2;i=Ul(this,s,e,ci,l,u,c,f,g,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function LE(n,e,t,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Mr,a),l===null)return null;Dl.copy(a),Dl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Dl);return u<t.near||u>t.far?null:{distance:u,point:Dl.clone(),object:n}}function Ul(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ls),n.getVertexPosition(l,Ds),n.getVertexPosition(u,Us);const c=LE(n,e,t,i,Ls,Ds,Us,Ll);if(c){r&&(Cl.fromBufferAttribute(r,a),Pl.fromBufferAttribute(r,l),bl.fromBufferAttribute(r,u),c.uv=ti.getInterpolation(Ll,Ls,Ds,Us,Cl,Pl,bl,new De)),s&&(Cl.fromBufferAttribute(s,a),Pl.fromBufferAttribute(s,l),bl.fromBufferAttribute(s,u),c.uv1=ti.getInterpolation(Ll,Ls,Ds,Us,Cl,Pl,bl,new De),c.uv2=c.uv1),o&&(t_.fromBufferAttribute(o,a),n_.fromBufferAttribute(o,l),i_.fromBufferAttribute(o,u),c.normal=ti.getInterpolation(Ll,Ls,Ds,Us,t_,n_,i_,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new O,materialIndex:0};ti.getNormal(Ls,Ds,Us,d.normal),c.face=d}return c}class Ka extends Cr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yi(u,3)),this.setAttribute("normal",new yi(c,3)),this.setAttribute("uv",new yi(d,2));function v(m,_,f,g,x,M,S,E,A,P,y){const w=M/A,H=S/P,W=M/2,I=S/2,F=E/2,B=A+1,Z=P+1;let X=0,L=0;const G=new O;for(let z=0;z<Z;z++){const oe=z*H-I;for(let ee=0;ee<B;ee++){const j=ee*w-W;G[m]=j*g,G[_]=oe*x,G[f]=F,u.push(G.x,G.y,G.z),G[m]=0,G[_]=0,G[f]=E>0?1:-1,c.push(G.x,G.y,G.z),d.push(ee/A),d.push(1-z/P),X+=1}}for(let z=0;z<P;z++)for(let oe=0;oe<A;oe++){const ee=h+oe+B*z,j=h+oe+B*(z+1),q=h+(oe+1)+B*(z+1),se=h+(oe+1)+B*z;l.push(ee,j,se),l.push(j,q,se),L+=6}a.addGroup(p,L,y),p+=L,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=To(n[t]);for(const r in i)e[r]=i[r]}return e}function DE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rv(n){return n.getRenderTarget()===null?n.outputColorSpace:Mi}const UE={clone:To,merge:Zt};var IE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ds extends $a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IE,this.fragmentShader=NE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=DE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Cv extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fn extends Cv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xd*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Is=-90,Ns=1;class OE extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Fn(Is,Ns,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Fn(Is,Ns,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Fn(Is,Ns,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Fn(Is,Ns,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Fn(Is,Ns,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new Fn(Is,Ns,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Bi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Pv extends fn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:So,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FE extends cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(da("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Jr?Re:es),this.texture=new Pv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ka(5,5,5),s=new ds({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:gr});s.uniforms.tEquirect.value=t;const o=new mi(r,s),a=t.minFilter;return t.minFilter===Ua&&(t.minFilter=On),new OE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const sf=new O,kE=new O,zE=new Fe;class Br{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sf.subVectors(i,t).cross(kE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(sf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zE.getNormalMatrix(e),r=this.coplanarPoint(sf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Lh,Il=new O;class Dh{constructor(e=new Br,t=new Br,i=new Br,r=new Br,s=new Br,o=new Br){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],h=i[8],p=i[9],v=i[10],m=i[11],_=i[12],f=i[13],g=i[14],x=i[15];return t[0].setComponents(a-r,d-l,m-h,x-_).normalize(),t[1].setComponents(a+r,d+l,m+h,x+_).normalize(),t[2].setComponents(a+s,d+u,m+p,x+f).normalize(),t[3].setComponents(a-s,d-u,m-p,x-f).normalize(),t[4].setComponents(a-o,d-c,m-v,x-g).normalize(),t[5].setComponents(a+o,d+c,m+v,x+g).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Il.x=r.normal.x>0?e.max.x:e.min.x,Il.y=r.normal.y>0?e.max.y:e.min.y,Il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function BE(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,d,h),u.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const h=c.array,p=c.updateRange;n.bindBuffer(d,u),p.count===-1?n.bufferSubData(d,0,h):(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Uh extends Cr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],v=[],m=[],_=[];for(let f=0;f<c;f++){const g=f*h-o;for(let x=0;x<u;x++){const M=x*d-s;v.push(M,-g,0),m.push(0,0,1),_.push(x/a),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const x=g+u*f,M=g+u*(f+1),S=g+1+u*(f+1),E=g+1+u*f;p.push(x,M,E),p.push(M,S,E)}this.setIndex(p),this.setAttribute("position",new yi(v,3)),this.setAttribute("normal",new yi(m,3)),this.setAttribute("uv",new yi(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uh(e.width,e.height,e.widthSegments,e.heightSegments)}}var HE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,WE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YE="vec3 transformed = vec3( position );",qE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$E=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,o1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,a1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,l1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h1="gl_FragColor = linearToOutputTexel( gl_FragColor );",p1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,A1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,b1=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,L1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,O1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F1=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,B1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,V1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,W1=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,X1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Q1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,J1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,eT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,tT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,aT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_T=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ST=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ET=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,TT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,LT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,DT=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UT=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IT=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,GT=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,WT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KT=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ew=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,pw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:HE,alphamap_pars_fragment:GE,alphatest_fragment:VE,alphatest_pars_fragment:WE,aomap_fragment:XE,aomap_pars_fragment:jE,begin_vertex:YE,beginnormal_vertex:qE,bsdfs:$E,iridescence_fragment:KE,bumpmap_pars_fragment:ZE,clipping_planes_fragment:QE,clipping_planes_pars_fragment:JE,clipping_planes_pars_vertex:e1,clipping_planes_vertex:t1,color_fragment:n1,color_pars_fragment:i1,color_pars_vertex:r1,color_vertex:s1,common:o1,cube_uv_reflection_fragment:a1,defaultnormal_vertex:l1,displacementmap_pars_vertex:u1,displacementmap_vertex:c1,emissivemap_fragment:f1,emissivemap_pars_fragment:d1,encodings_fragment:h1,encodings_pars_fragment:p1,envmap_fragment:m1,envmap_common_pars_fragment:_1,envmap_pars_fragment:g1,envmap_pars_vertex:v1,envmap_physical_pars_fragment:b1,envmap_vertex:x1,fog_vertex:y1,fog_pars_vertex:S1,fog_fragment:M1,fog_pars_fragment:E1,gradientmap_pars_fragment:T1,lightmap_fragment:w1,lightmap_pars_fragment:A1,lights_lambert_fragment:R1,lights_lambert_pars_fragment:C1,lights_pars_begin:P1,lights_toon_fragment:L1,lights_toon_pars_fragment:D1,lights_phong_fragment:U1,lights_phong_pars_fragment:I1,lights_physical_fragment:N1,lights_physical_pars_fragment:O1,lights_fragment_begin:F1,lights_fragment_maps:k1,lights_fragment_end:z1,logdepthbuf_fragment:B1,logdepthbuf_pars_fragment:H1,logdepthbuf_pars_vertex:G1,logdepthbuf_vertex:V1,map_fragment:W1,map_pars_fragment:X1,map_particle_fragment:j1,map_particle_pars_fragment:Y1,metalnessmap_fragment:q1,metalnessmap_pars_fragment:$1,morphcolor_vertex:K1,morphnormal_vertex:Z1,morphtarget_pars_vertex:Q1,morphtarget_vertex:J1,normal_fragment_begin:eT,normal_fragment_maps:tT,normal_pars_fragment:nT,normal_pars_vertex:iT,normal_vertex:rT,normalmap_pars_fragment:sT,clearcoat_normal_fragment_begin:oT,clearcoat_normal_fragment_maps:aT,clearcoat_pars_fragment:lT,iridescence_pars_fragment:uT,output_fragment:cT,packing:fT,premultiplied_alpha_fragment:dT,project_vertex:hT,dithering_fragment:pT,dithering_pars_fragment:mT,roughnessmap_fragment:_T,roughnessmap_pars_fragment:gT,shadowmap_pars_fragment:vT,shadowmap_pars_vertex:xT,shadowmap_vertex:yT,shadowmask_pars_fragment:ST,skinbase_vertex:MT,skinning_pars_vertex:ET,skinning_vertex:TT,skinnormal_vertex:wT,specularmap_fragment:AT,specularmap_pars_fragment:RT,tonemapping_fragment:CT,tonemapping_pars_fragment:PT,transmission_fragment:bT,transmission_pars_fragment:LT,uv_pars_fragment:DT,uv_pars_vertex:UT,uv_vertex:IT,worldpos_vertex:NT,background_vert:OT,background_frag:FT,backgroundCube_vert:kT,backgroundCube_frag:zT,cube_vert:BT,cube_frag:HT,depth_vert:GT,depth_frag:VT,distanceRGBA_vert:WT,distanceRGBA_frag:XT,equirect_vert:jT,equirect_frag:YT,linedashed_vert:qT,linedashed_frag:$T,meshbasic_vert:KT,meshbasic_frag:ZT,meshlambert_vert:QT,meshlambert_frag:JT,meshmatcap_vert:ew,meshmatcap_frag:tw,meshnormal_vert:nw,meshnormal_frag:iw,meshphong_vert:rw,meshphong_frag:sw,meshphysical_vert:ow,meshphysical_frag:aw,meshtoon_vert:lw,meshtoon_frag:uw,points_vert:cw,points_frag:fw,shadow_vert:dw,shadow_frag:hw,sprite_vert:pw,sprite_frag:mw},ue={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaTest:{value:0}}},di={basic:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Zt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Zt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Zt([ue.points,ue.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Zt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Zt([ue.common,ue.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Zt([ue.sprite,ue.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:Zt([ue.common,ue.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:Zt([ue.lights,ue.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};di.physical={uniforms:Zt([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Nl={r:0,b:0,g:0};function _w(n,e,t,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function v(_,f){let g=!1,x=f.isScene===!0?f.background:null;switch(x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?m(a,l):x&&x.isColor&&(m(x,1),g=!0),n.xr.getEnvironmentBlendMode()){case"opaque":g=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),g=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),g=!0;break}(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Zu)?(c===void 0&&(c=new mi(new Ka(1,1,1),new ds({name:"BackgroundCubeMaterial",uniforms:To(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Re,(d!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new mi(new Uh(2,2),new ds({name:"BackgroundMaterial",uniforms:To(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=x.colorSpace!==Re,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function m(_,f){_.getRGB(Nl,Rv(n)),i.buffers.color.setClear(Nl.r,Nl.g,Nl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(_,f=1){a.set(_),l=f,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:v}}function gw(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=_(null);let u=l,c=!1;function d(F,B,Z,X,L){let G=!1;if(o){const z=m(X,Z,B);u!==z&&(u=z,p(u.object)),G=f(F,X,Z,L),G&&g(F,X,Z,L)}else{const z=B.wireframe===!0;(u.geometry!==X.id||u.program!==Z.id||u.wireframe!==z)&&(u.geometry=X.id,u.program=Z.id,u.wireframe=z,G=!0)}L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(G||c)&&(c=!1,P(F,B,Z,X),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function v(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function m(F,B,Z){const X=Z.wireframe===!0;let L=a[F.id];L===void 0&&(L={},a[F.id]=L);let G=L[B.id];G===void 0&&(G={},L[B.id]=G);let z=G[X];return z===void 0&&(z=_(h()),G[X]=z),z}function _(F){const B=[],Z=[],X=[];for(let L=0;L<r;L++)B[L]=0,Z[L]=0,X[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:X,object:F,attributes:{},index:null}}function f(F,B,Z,X){const L=u.attributes,G=B.attributes;let z=0;const oe=Z.getAttributes();for(const ee in oe)if(oe[ee].location>=0){const q=L[ee];let se=G[ee];if(se===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),q===void 0||q.attribute!==se||se&&q.data!==se.data)return!0;z++}return u.attributesNum!==z||u.index!==X}function g(F,B,Z,X){const L={},G=B.attributes;let z=0;const oe=Z.getAttributes();for(const ee in oe)if(oe[ee].location>=0){let q=G[ee];q===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(q=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(q=F.instanceColor));const se={};se.attribute=q,q&&q.data&&(se.data=q.data),L[ee]=se,z++}u.attributes=L,u.attributesNum=z,u.index=X}function x(){const F=u.newAttributes;for(let B=0,Z=F.length;B<Z;B++)F[B]=0}function M(F){S(F,0)}function S(F,B){const Z=u.newAttributes,X=u.enabledAttributes,L=u.attributeDivisors;Z[F]=1,X[F]===0&&(n.enableVertexAttribArray(F),X[F]=1),L[F]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,B),L[F]=B)}function E(){const F=u.newAttributes,B=u.enabledAttributes;for(let Z=0,X=B.length;Z<X;Z++)B[Z]!==F[Z]&&(n.disableVertexAttribArray(Z),B[Z]=0)}function A(F,B,Z,X,L,G){i.isWebGL2===!0&&(Z===n.INT||Z===n.UNSIGNED_INT)?n.vertexAttribIPointer(F,B,Z,L,G):n.vertexAttribPointer(F,B,Z,X,L,G)}function P(F,B,Z,X){if(i.isWebGL2===!1&&(F.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const L=X.attributes,G=Z.getAttributes(),z=B.defaultAttributeValues;for(const oe in G){const ee=G[oe];if(ee.location>=0){let j=L[oe];if(j===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),j!==void 0){const q=j.normalized,se=j.itemSize,ae=t.get(j);if(ae===void 0)continue;const D=ae.buffer,Te=ae.type,Ee=ae.bytesPerElement;if(j.isInterleavedBufferAttribute){const le=j.data,Se=le.stride,Ge=j.offset;if(le.isInstancedInterleavedBuffer){for(let xe=0;xe<ee.locationSize;xe++)S(ee.location+xe,le.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<ee.locationSize;xe++)M(ee.location+xe);n.bindBuffer(n.ARRAY_BUFFER,D);for(let xe=0;xe<ee.locationSize;xe++)A(ee.location+xe,se/ee.locationSize,Te,q,Se*Ee,(Ge+se/ee.locationSize*xe)*Ee)}else{if(j.isInstancedBufferAttribute){for(let le=0;le<ee.locationSize;le++)S(ee.location+le,j.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<ee.locationSize;le++)M(ee.location+le);n.bindBuffer(n.ARRAY_BUFFER,D);for(let le=0;le<ee.locationSize;le++)A(ee.location+le,se/ee.locationSize,Te,q,se*Ee,se/ee.locationSize*le*Ee)}}else if(z!==void 0){const q=z[oe];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(ee.location,q);break;case 3:n.vertexAttrib3fv(ee.location,q);break;case 4:n.vertexAttrib4fv(ee.location,q);break;default:n.vertexAttrib1fv(ee.location,q)}}}}E()}function y(){W();for(const F in a){const B=a[F];for(const Z in B){const X=B[Z];for(const L in X)v(X[L].object),delete X[L];delete B[Z]}delete a[F]}}function w(F){if(a[F.id]===void 0)return;const B=a[F.id];for(const Z in B){const X=B[Z];for(const L in X)v(X[L].object),delete X[L];delete B[Z]}delete a[F.id]}function H(F){for(const B in a){const Z=a[B];if(Z[F.id]===void 0)continue;const X=Z[F.id];for(const L in X)v(X[L].object),delete X[L];delete Z[F.id]}}function W(){I(),c=!0,u!==l&&(u=l,p(u.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:I,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:M,disableUnusedAttributes:E}}function vw(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function xw(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,M=o||e.has("OES_texture_float"),S=x&&M,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:_,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:E}}function yw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Br,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,m=d.clipIntersection,_=d.clipShadows,f=n.get(d);if(!r||v===null||v.length===0||s&&!_)s?c(null):u();else{const g=s?0:i,x=g*4;let M=f.clippingState||null;l.value=M,M=c(v,h,x,p);for(let S=0;S!==x;++S)M[S]=t[S];f.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,v){const m=d!==null?d.length:0;let _=null;if(m!==0){if(_=l.value,v!==!0||_===null){const f=p+m*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(_===null||_.length<f)&&(_=new Float32Array(f));for(let x=0,M=p;x!==m;++x,M+=4)o.copy(d[x]).applyMatrix4(g,a),o.normal.toArray(_,M),_[M+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}}function Sw(n){let e=new WeakMap;function t(o,a){return a===wu?o.mapping=So:a===md&&(o.mapping=Mo),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===wu||a===md)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new FE(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Lv extends Cv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zs=4,r_=[.125,.215,.35,.446,.526,.582],Vr=20,of=new Lv,s_=new $e;let af=null;const Hr=(1+Math.sqrt(5))/2,Os=1/Hr,o_=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Hr,Os),new O(0,Hr,-Os),new O(Os,0,Hr),new O(-Os,0,Hr),new O(Hr,Os,0),new O(-Hr,Os,0)];class a_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){af=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(af),e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===So||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),af=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ia,format:ii,colorSpace:Mi,depthBuffer:!1},r=l_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mw(s)),this._blurMaterial=Ew(s,e,t)}return r}_compileMaterial(e){const t=new mi(this._lodPlanes[0],e);this._renderer.compile(t,of)}_sceneToCubeUV(e,t,i,r){const a=new Fn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(s_),c.toneMapping=Bi,c.autoClear=!1;const p=new Tv({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),v=new mi(new Ka,p);let m=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(s_),m=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;Ol(r,g*x,f>2?x:0,x,x),c.setRenderTarget(r),m&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===So||e.mapping===Mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=c_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new mi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ol(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,of)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=o_[(r-1)%o_.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new mi(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vr-1),m=s/v,_=isFinite(s)?1+Math.floor(c*m):Vr;_>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Vr}`);const f=[];let g=0;for(let A=0;A<Vr;++A){const P=A/m,y=Math.exp(-P*P/2);f.push(y),A===0?g+=y:A<_&&(g+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/g;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const M=this._sizeLods[r],S=3*M*(r>x-Zs?r-x+Zs:0),E=4*(this._cubeSize-M);Ol(t,S,E,3*M,2*M),l.setRenderTarget(t),l.render(d,of)}}function Mw(n){const e=[],t=[],i=[];let r=n;const s=n-Zs+1+r_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Zs?l=r_[o-n+Zs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,v=6,m=3,_=2,f=1,g=new Float32Array(m*v*p),x=new Float32Array(_*v*p),M=new Float32Array(f*v*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,P=E>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];g.set(y,m*v*E),x.set(h,_*v*E);const w=[E,E,E,E,E,E];M.set(w,f*v*E)}const S=new Cr;S.setAttribute("position",new xi(g,m)),S.setAttribute("uv",new xi(x,_)),S.setAttribute("faceIndex",new xi(M,f)),e.push(S),r>Zs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function l_(n,e,t){const i=new cs(n,e,t);return i.texture.mapping=Zu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ol(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ew(n,e,t){const i=new Float32Array(Vr),r=new O(0,1,0);return new ds({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function u_(){return new ds({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function c_(){return new ds({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===wu||l===md,c=l===So||l===Mo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new a_(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new a_(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ww(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Aw(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const m=p[v];for(let _=0,f=m.length;_<f;_++)e.update(m[_],n.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,v=d.attributes.position;let m=0;if(p!==null){const g=p.array;m=p.version;for(let x=0,M=g.length;x<M;x+=3){const S=g[x+0],E=g[x+1],A=g[x+2];h.push(S,E,E,A,A,S)}}else{const g=v.array;m=v.version;for(let x=0,M=g.length/3-1;x<M;x+=3){const S=x+0,E=x+1,A=x+2;h.push(S,E,E,A,A,S)}}const _=new(vv(h)?Av:wv)(h,1);_.version=m;const f=s.get(d);f&&e.remove(f),s.set(d,_)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function Rw(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,p){n.drawElements(s,p,a,h*l),t.update(p,s,1)}function d(h,p,v){if(v===0)return;let m,_;if(r)m=n,_="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,p,a,h*l,v),t.update(p,s,v)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function Cw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Pw(n,e){return n[0]-e[0]}function bw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Lw(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Pt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=v!==void 0?v.length:0;let _=s.get(c);if(_===void 0||_.count!==m){let B=function(){I.dispose(),s.delete(c),c.removeEventListener("dispose",B)};var p=B;_!==void 0&&_.texture.dispose();const x=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let y=0;x===!0&&(y=1),M===!0&&(y=2),S===!0&&(y=3);let w=c.attributes.position.count*y,H=1;w>e.maxTextureSize&&(H=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const W=new Float32Array(w*H*4*m),I=new Sv(W,w,H,m);I.type=qr,I.needsUpdate=!0;const F=y*4;for(let Z=0;Z<m;Z++){const X=E[Z],L=A[Z],G=P[Z],z=w*H*4*Z;for(let oe=0;oe<X.count;oe++){const ee=oe*F;x===!0&&(o.fromBufferAttribute(X,oe),W[z+ee+0]=o.x,W[z+ee+1]=o.y,W[z+ee+2]=o.z,W[z+ee+3]=0),M===!0&&(o.fromBufferAttribute(L,oe),W[z+ee+4]=o.x,W[z+ee+5]=o.y,W[z+ee+6]=o.z,W[z+ee+7]=0),S===!0&&(o.fromBufferAttribute(G,oe),W[z+ee+8]=o.x,W[z+ee+9]=o.y,W[z+ee+10]=o.z,W[z+ee+11]=G.itemSize===4?o.w:1)}}_={count:m,texture:I,size:new De(w,H)},s.set(c,_),c.addEventListener("dispose",B)}let f=0;for(let x=0;x<h.length;x++)f+=h[x];const g=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",g),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const v=h===void 0?0:h.length;let m=i[c.id];if(m===void 0||m.length!==v){m=[];for(let M=0;M<v;M++)m[M]=[M,0];i[c.id]=m}for(let M=0;M<v;M++){const S=m[M];S[0]=M,S[1]=h[M]}m.sort(bw);for(let M=0;M<8;M++)M<v&&m[M][1]?(a[M][0]=m[M][0],a[M][1]=m[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Pw);const _=c.morphAttributes.position,f=c.morphAttributes.normal;let g=0;for(let M=0;M<8;M++){const S=a[M],E=S[0],A=S[1];E!==Number.MAX_SAFE_INTEGER&&A?(_&&c.getAttribute("morphTarget"+M)!==_[E]&&c.setAttribute("morphTarget"+M,_[E]),f&&c.getAttribute("morphNormal"+M)!==f[E]&&c.setAttribute("morphNormal"+M,f[E]),r[M]=A,g+=A):(_&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),f&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const x=c.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Dw(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Dv=new fn,Uv=new Sv,Iv=new yE,Nv=new Pv,f_=[],d_=[],h_=new Float32Array(16),p_=new Float32Array(9),m_=new Float32Array(4);function No(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=f_[r];if(s===void 0&&(s=new Float32Array(r),f_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ju(n,e){let t=d_[e];t===void 0&&(t=new Int32Array(e),d_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Uw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Iw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function Nw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function Ow(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function Fw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;m_.set(i),n.uniformMatrix2fv(this.addr,!1,m_),wt(t,i)}}function kw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;p_.set(i),n.uniformMatrix3fv(this.addr,!1,p_),wt(t,i)}}function zw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;h_.set(i),n.uniformMatrix4fv(this.addr,!1,h_),wt(t,i)}}function Bw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Hw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function Gw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function Vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function Ww(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function jw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function Yw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function qw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Dv,r)}function $w(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Iv,r)}function Kw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nv,r)}function Zw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Uv,r)}function Qw(n){switch(n){case 5126:return Uw;case 35664:return Iw;case 35665:return Nw;case 35666:return Ow;case 35674:return Fw;case 35675:return kw;case 35676:return zw;case 5124:case 35670:return Bw;case 35667:case 35671:return Hw;case 35668:case 35672:return Gw;case 35669:case 35673:return Vw;case 5125:return Ww;case 36294:return Xw;case 36295:return jw;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return qw;case 35679:case 36299:case 36307:return $w;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Zw}}function Jw(n,e){n.uniform1fv(this.addr,e)}function eA(n,e){const t=No(e,this.size,2);n.uniform2fv(this.addr,t)}function tA(n,e){const t=No(e,this.size,3);n.uniform3fv(this.addr,t)}function nA(n,e){const t=No(e,this.size,4);n.uniform4fv(this.addr,t)}function iA(n,e){const t=No(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rA(n,e){const t=No(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sA(n,e){const t=No(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function oA(n,e){n.uniform1iv(this.addr,e)}function aA(n,e){n.uniform2iv(this.addr,e)}function lA(n,e){n.uniform3iv(this.addr,e)}function uA(n,e){n.uniform4iv(this.addr,e)}function cA(n,e){n.uniform1uiv(this.addr,e)}function fA(n,e){n.uniform2uiv(this.addr,e)}function dA(n,e){n.uniform3uiv(this.addr,e)}function hA(n,e){n.uniform4uiv(this.addr,e)}function pA(n,e,t){const i=this.cache,r=e.length,s=Ju(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Dv,s[o])}function mA(n,e,t){const i=this.cache,r=e.length,s=Ju(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Iv,s[o])}function _A(n,e,t){const i=this.cache,r=e.length,s=Ju(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nv,s[o])}function gA(n,e,t){const i=this.cache,r=e.length,s=Ju(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Uv,s[o])}function vA(n){switch(n){case 5126:return Jw;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return rA;case 35676:return sA;case 5124:case 35670:return oA;case 35667:case 35671:return aA;case 35668:case 35672:return lA;case 35669:case 35673:return uA;case 5125:return cA;case 36294:return fA;case 36295:return dA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return gA}}class xA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Qw(t.type)}}class yA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=vA(t.type)}}class SA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const lf=/(\w+)(\])?(\[|\.)?/g;function __(n,e){n.seq.push(e),n.map[e.id]=e}function MA(n,e,t){const i=n.name,r=i.length;for(lf.lastIndex=0;;){const s=lf.exec(i),o=lf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){__(t,u===void 0?new xA(a,n,e):new yA(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new SA(a),__(t,d)),t=d}}}class Zl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);MA(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function g_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let EA=0;function TA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function wA(n){switch(n){case Mi:return["Linear","( value )"];case Re:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function v_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+TA(n.getShaderSource(e),o)}else return r}function AA(n,e){const t=wA(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function RA(n,e){let t;switch(e){case BM:t="Linear";break;case HM:t="Reinhard";break;case GM:t="OptimizedCineon";break;case VM:t="ACESFilmic";break;case WM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function CA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ea).join(`
`)}function PA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ea(n){return n!==""}function x_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LA=/^[ \t]*#include +<([\w\d./]+)>/gm;function yd(n){return n.replace(LA,DA)}function DA(n,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return yd(t)}const UA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(n){return n.replace(UA,IA)}function IA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function M_(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===vM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function OA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case So:case Mo:e="ENVMAP_TYPE_CUBE";break;case Zu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Mo:e="ENVMAP_MODE_REFRACTION";break}return e}function kA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dv:e="ENVMAP_BLENDING_MULTIPLY";break;case kM:e="ENVMAP_BLENDING_MIX";break;case zM:e="ENVMAP_BLENDING_ADD";break}return e}function zA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function BA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=NA(t),u=OA(t),c=FA(t),d=kA(t),h=zA(t),p=t.isWebGL2?"":CA(t),v=PA(s),m=r.createProgram();let _,f,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[v].filter(ea).join(`
`),_.length>0&&(_+=`
`),f=[p,v].filter(ea).join(`
`),f.length>0&&(f+=`
`)):(_=[M_(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),f=[p,M_(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?be.tonemapping_pars_fragment:"",t.toneMapping!==Bi?RA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,AA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),o=yd(o),o=x_(o,t),o=y_(o,t),a=yd(a),a=x_(a,t),a=y_(a,t),o=S_(o),a=S_(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",t.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=g+_+o,M=g+f+a,S=g_(r,r.VERTEX_SHADER,x),E=g_(r,r.FRAGMENT_SHADER,M);if(r.attachShader(m,S),r.attachShader(m,E),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const y=r.getProgramInfoLog(m).trim(),w=r.getShaderInfoLog(S).trim(),H=r.getShaderInfoLog(E).trim();let W=!0,I=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,S,E);else{const F=v_(r,S,"vertex"),B=v_(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+F+`
`+B)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(w===""||H==="")&&(I=!1);I&&(this.diagnostics={runnable:W,programLog:y,vertexShader:{log:w,prefix:_},fragmentShader:{log:H,prefix:f}})}r.deleteShader(S),r.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new Zl(r,m)),A};let P;return this.getAttributes=function(){return P===void 0&&(P=bA(r,m)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=EA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=E,this}let HA=0;class GA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new VA(e),t.set(e,i)),i}}class VA{constructor(e){this.id=HA++,this.code=e,this.usedTimes=0}}function WA(n,e,t,i,r,s,o){const a=new Mv,l=new GA,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return y===1?"uv1":y===2?"uv2":y===3?"uv3":"uv"}function _(y,w,H,W,I){const F=W.fog,B=I.geometry,Z=y.isMeshStandardMaterial?W.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||Z),L=X&&X.mapping===Zu?X.image.height:null,G=v[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,oe=z!==void 0?z.length:0;let ee=0;B.morphAttributes.position!==void 0&&(ee=1),B.morphAttributes.normal!==void 0&&(ee=2),B.morphAttributes.color!==void 0&&(ee=3);let j,q,se,ae;if(G){const Xe=di[G];j=Xe.vertexShader,q=Xe.fragmentShader}else j=y.vertexShader,q=y.fragmentShader,l.update(y),se=l.getVertexShaderID(y),ae=l.getFragmentShaderID(y);const D=n.getRenderTarget(),Te=I.isInstancedMesh===!0,Ee=!!y.map,le=!!y.matcap,Se=!!X,Ge=!!y.aoMap,xe=!!y.lightMap,Ce=!!y.bumpMap,at=!!y.normalMap,tt=!!y.displacementMap,mt=!!y.emissiveMap,ct=!!y.metalnessMap,He=!!y.roughnessMap,Ke=y.clearcoat>0,Ot=y.iridescence>0,C=y.sheen>0,T=y.transmission>0,Y=Ke&&!!y.clearcoatMap,te=Ke&&!!y.clearcoatNormalMap,re=Ke&&!!y.clearcoatRoughnessMap,ce=Ot&&!!y.iridescenceMap,b=Ot&&!!y.iridescenceThicknessMap,J=C&&!!y.sheenColorMap,V=C&&!!y.sheenRoughnessMap,fe=!!y.specularMap,me=!!y.specularColorMap,ge=!!y.specularIntensityMap,de=T&&!!y.transmissionMap,_e=T&&!!y.thicknessMap,we=!!y.gradientMap,Le=!!y.alphaMap,ft=y.alphaTest>0,U=!!y.extensions,$=!!B.attributes.uv1,ne=!!B.attributes.uv2,he=!!B.attributes.uv3;return{isWebGL2:c,shaderID:G,shaderName:y.type,vertexShader:j,fragmentShader:q,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:Te,instancingColor:Te&&I.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:D===null?n.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Mi,map:Ee,matcap:le,envMap:Se,envMapMode:Se&&X.mapping,envMapCubeUVHeight:L,aoMap:Ge,lightMap:xe,bumpMap:Ce,normalMap:at,displacementMap:h&&tt,emissiveMap:mt,normalMapObjectSpace:at&&y.normalMapType===uE,normalMapTangentSpace:at&&y.normalMapType===_v,metalnessMap:ct,roughnessMap:He,clearcoat:Ke,clearcoatMap:Y,clearcoatNormalMap:te,clearcoatRoughnessMap:re,iridescence:Ot,iridescenceMap:ce,iridescenceThicknessMap:b,sheen:C,sheenColorMap:J,sheenRoughnessMap:V,specularMap:fe,specularColorMap:me,specularIntensityMap:ge,transmission:T,transmissionMap:de,thicknessMap:_e,gradientMap:we,opaque:y.transparent===!1&&y.blending===ao,alphaMap:Le,alphaTest:ft,combine:y.combine,mapUv:Ee&&m(y.map.channel),aoMapUv:Ge&&m(y.aoMap.channel),lightMapUv:xe&&m(y.lightMap.channel),bumpMapUv:Ce&&m(y.bumpMap.channel),normalMapUv:at&&m(y.normalMap.channel),displacementMapUv:tt&&m(y.displacementMap.channel),emissiveMapUv:mt&&m(y.emissiveMap.channel),metalnessMapUv:ct&&m(y.metalnessMap.channel),roughnessMapUv:He&&m(y.roughnessMap.channel),clearcoatMapUv:Y&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:b&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:J&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:V&&m(y.sheenRoughnessMap.channel),specularMapUv:fe&&m(y.specularMap.channel),specularColorMapUv:me&&m(y.specularColorMap.channel),specularIntensityMapUv:ge&&m(y.specularIntensityMap.channel),transmissionMapUv:de&&m(y.transmissionMap.channel),thicknessMapUv:_e&&m(y.thicknessMap.channel),alphaMapUv:Le&&m(y.alphaMap.channel),vertexTangents:at&&!!B.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:$,vertexUv2s:ne,vertexUv3s:he,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Ee||Le),fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:Bi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Oi,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:U&&y.extensions.derivatives===!0,extensionFragDepth:U&&y.extensions.fragDepth===!0,extensionDrawBuffers:U&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:U&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const H in y.defines)w.push(H),w.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(g(w,y),x(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function g(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function x(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),y.push(a.mask)}function M(y){const w=v[y.type];let H;if(w){const W=di[w];H=UE.clone(W.uniforms)}else H=y.uniforms;return H}function S(y,w){let H;for(let W=0,I=u.length;W<I;W++){const F=u[W];if(F.cacheKey===w){H=F,++H.usedTimes;break}}return H===void 0&&(H=new BA(n,w,y,s),u.push(H)),H}function E(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:M,acquireProgram:S,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:P}}function XA(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function jA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function E_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function T_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,v,m,_){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:m,group:_},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=m,f.group=_),e++,f}function a(d,h,p,v,m,_){const f=o(d,h,p,v,m,_);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,v,m,_){const f=o(d,h,p,v,m,_);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||jA),i.length>1&&i.sort(h||E_),r.length>1&&r.sort(h||E_)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function YA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new T_,n.set(i,[o])):r>=s.length?(o=new T_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new $e};break;case"SpotLight":t={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function $A(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let KA=0;function ZA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function QA(n,e){const t=new qA,i=$A(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new O);const s=new O,o=new Et,a=new Et;function l(c,d){let h=0,p=0,v=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let m=0,_=0,f=0,g=0,x=0,M=0,S=0,E=0,A=0,P=0;c.sort(ZA);const y=d===!0?Math.PI:1;for(let H=0,W=c.length;H<W;H++){const I=c[H],F=I.color,B=I.intensity,Z=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*B*y,p+=F.g*B*y,v+=F.b*B*y;else if(I.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(I.sh.coefficients[L],B);else if(I.isDirectionalLight){const L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity*y),I.castShadow){const G=I.shadow,z=i.get(I);z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,r.directionalShadow[m]=z,r.directionalShadowMap[m]=X,r.directionalShadowMatrix[m]=I.shadow.matrix,M++}r.directional[m]=L,m++}else if(I.isSpotLight){const L=t.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(F).multiplyScalar(B*y),L.distance=Z,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,r.spot[f]=L;const G=I.shadow;if(I.map&&(r.spotLightMap[A]=I.map,A++,G.updateMatrices(I),I.castShadow&&P++),r.spotLightMatrix[f]=G.matrix,I.castShadow){const z=i.get(I);z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,r.spotShadow[f]=z,r.spotShadowMap[f]=X,E++}f++}else if(I.isRectAreaLight){const L=t.get(I);L.color.copy(F).multiplyScalar(B),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),r.rectArea[g]=L,g++}else if(I.isPointLight){const L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity*y),L.distance=I.distance,L.decay=I.decay,I.castShadow){const G=I.shadow,z=i.get(I);z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,r.pointShadow[_]=z,r.pointShadowMap[_]=X,r.pointShadowMatrix[_]=I.shadow.matrix,S++}r.point[_]=L,_++}else if(I.isHemisphereLight){const L=t.get(I);L.skyColor.copy(I.color).multiplyScalar(B*y),L.groundColor.copy(I.groundColor).multiplyScalar(B*y),r.hemi[x]=L,x++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const w=r.hash;(w.directionalLength!==m||w.pointLength!==_||w.spotLength!==f||w.rectAreaLength!==g||w.hemiLength!==x||w.numDirectionalShadows!==M||w.numPointShadows!==S||w.numSpotShadows!==E||w.numSpotMaps!==A)&&(r.directional.length=m,r.spot.length=f,r.rectArea.length=g,r.point.length=_,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=E+A-P,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=P,w.directionalLength=m,w.pointLength=_,w.spotLength=f,w.rectAreaLength=g,w.hemiLength=x,w.numDirectionalShadows=M,w.numPointShadows=S,w.numSpotShadows=E,w.numSpotMaps=A,r.version=KA++)}function u(c,d){let h=0,p=0,v=0,m=0,_=0;const f=d.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const M=c[g];if(M.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),h++}else if(M.isSpotLight){const S=r.spot[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),v++}else if(M.isRectAreaLight){const S=r.rectArea[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const S=r.hemi[_];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(f),_++}}}return{setup:l,setupView:u,state:r}}function w_(n,e){const t=new QA(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function JA(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new w_(n,e),t.set(s,[l])):o>=a.length?(l=new w_(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class eR extends $a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tR extends $a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rR(n,e,t){let i=new Dh;const r=new De,s=new De,o=new Pt,a=new eR({depthPacking:lE}),l=new tR,u={},c=t.maxTextureSize,d={[Mr]:cn,[cn]:Mr,[Oi]:Oi},h=new ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:nR,fragmentShader:iR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Cr;v.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new mi(v,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uv;let f=this.type;this.render=function(S,E,A){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||S.length===0)return;const P=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),H=n.state;H.setBlending(gr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const W=f!==bi&&this.type===bi,I=f===bi&&this.type!==bi;for(let F=0,B=S.length;F<B;F++){const Z=S[F],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const L=X.getFrameExtents();if(r.multiply(L),s.copy(X.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/L.x),r.x=s.x*L.x,X.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/L.y),r.y=s.y*L.y,X.mapSize.y=s.y)),X.map===null||W===!0||I===!0){const z=this.type!==bi?{minFilter:Gt,magFilter:Gt}:{};X.map!==null&&X.map.dispose(),X.map=new cs(r.x,r.y,z),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const G=X.getViewportCount();for(let z=0;z<G;z++){const oe=X.getViewport(z);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),H.viewport(o),X.updateMatrices(Z,z),i=X.getFrustum(),M(E,A,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===bi&&g(X,A),X.needsUpdate=!1}f=this.type,_.needsUpdate=!1,n.setRenderTarget(P,y,w)};function g(S,E){const A=e.update(m);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new cs(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,A,h,m,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,A,p,m,null)}function x(S,E,A,P){let y=null;const w=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)y=w;else if(y=A.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=y.uuid,W=E.uuid;let I=u[H];I===void 0&&(I={},u[H]=I);let F=I[W];F===void 0&&(F=y.clone(),I[W]=F),y=F}if(y.visible=E.visible,y.wireframe=E.wireframe,P===bi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:d[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=n.properties.get(y);H.light=A}return y}function M(S,E,A,P,y){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===bi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const W=e.update(S),I=S.material;if(Array.isArray(I)){const F=W.groups;for(let B=0,Z=F.length;B<Z;B++){const X=F[B],L=I[X.materialIndex];if(L&&L.visible){const G=x(S,L,P,y);n.renderBufferDirect(A,null,W,G,S,X)}}}else if(I.visible){const F=x(S,I,P,y);n.renderBufferDirect(A,null,W,F,S,null)}}const H=S.children;for(let W=0,I=H.length;W<I;W++)M(H[W],E,A,P,y)}}function sR(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const $=new Pt;let ne=null;const he=new Pt(0,0,0,0);return{setMask:function(ve){ne!==ve&&!U&&(n.colorMask(ve,ve,ve,ve),ne=ve)},setLocked:function(ve){U=ve},setClear:function(ve,Xe,je,Ft,qi){qi===!0&&(ve*=Ft,Xe*=Ft,je*=Ft),$.set(ve,Xe,je,Ft),he.equals($)===!1&&(n.clearColor(ve,Xe,je,Ft),he.copy($))},reset:function(){U=!1,ne=null,he.set(-1,0,0,0)}}}function s(){let U=!1,$=null,ne=null,he=null;return{setTest:function(ve){ve?D(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(ve){$!==ve&&!U&&(n.depthMask(ve),$=ve)},setFunc:function(ve){if(ne!==ve){switch(ve){case LM:n.depthFunc(n.NEVER);break;case DM:n.depthFunc(n.ALWAYS);break;case UM:n.depthFunc(n.LESS);break;case pd:n.depthFunc(n.LEQUAL);break;case IM:n.depthFunc(n.EQUAL);break;case NM:n.depthFunc(n.GEQUAL);break;case OM:n.depthFunc(n.GREATER);break;case FM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=ve}},setLocked:function(ve){U=ve},setClear:function(ve){he!==ve&&(n.clearDepth(ve),he=ve)},reset:function(){U=!1,$=null,ne=null,he=null}}}function o(){let U=!1,$=null,ne=null,he=null,ve=null,Xe=null,je=null,Ft=null,qi=null;return{setTest:function(dt){U||(dt?D(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(dt){$!==dt&&!U&&(n.stencilMask(dt),$=dt)},setFunc:function(dt,bn,li){(ne!==dt||he!==bn||ve!==li)&&(n.stencilFunc(dt,bn,li),ne=dt,he=bn,ve=li)},setOp:function(dt,bn,li){(Xe!==dt||je!==bn||Ft!==li)&&(n.stencilOp(dt,bn,li),Xe=dt,je=bn,Ft=li)},setLocked:function(dt){U=dt},setClear:function(dt){qi!==dt&&(n.clearStencil(dt),qi=dt)},reset:function(){U=!1,$=null,ne=null,he=null,ve=null,Xe=null,je=null,Ft=null,qi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},v=new WeakMap,m=[],_=null,f=!1,g=null,x=null,M=null,S=null,E=null,A=null,P=null,y=!1,w=null,H=null,W=null,I=null,F=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,X=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(L)[1]),Z=X>=1):L.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),Z=X>=2);let G=null,z={};const oe=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),j=new Pt().fromArray(oe),q=new Pt().fromArray(ee);function se(U,$,ne,he){const ve=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(U,Xe),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<ne;je++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D($,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D($+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Xe}const ae={};ae[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ae[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),D(n.DEPTH_TEST),l.setFunc(pd),tt(!1),mt(cm),D(n.CULL_FACE),Ce(gr);function D(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function Te(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ee(U,$){return p[U]!==$?(n.bindFramebuffer(U,$),p[U]=$,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=$),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=$)),!0):!1}function le(U,$){let ne=m,he=!1;if(U)if(ne=v.get($),ne===void 0&&(ne=[],v.set($,ne)),U.isWebGLMultipleRenderTargets){const ve=U.texture;if(ne.length!==ve.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,je=ve.length;Xe<je;Xe++)ne[Xe]=n.COLOR_ATTACHMENT0+Xe;ne.length=ve.length,he=!0}}else ne[0]!==n.COLOR_ATTACHMENT0&&(ne[0]=n.COLOR_ATTACHMENT0,he=!0);else ne[0]!==n.BACK&&(ne[0]=n.BACK,he=!0);he&&(t.isWebGL2?n.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Se(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const Ge={[ks]:n.FUNC_ADD,[yM]:n.FUNC_SUBTRACT,[SM]:n.FUNC_REVERSE_SUBTRACT};if(i)Ge[pm]=n.MIN,Ge[mm]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Ge[pm]=U.MIN_EXT,Ge[mm]=U.MAX_EXT)}const xe={[MM]:n.ZERO,[EM]:n.ONE,[TM]:n.SRC_COLOR,[cv]:n.SRC_ALPHA,[bM]:n.SRC_ALPHA_SATURATE,[CM]:n.DST_COLOR,[AM]:n.DST_ALPHA,[wM]:n.ONE_MINUS_SRC_COLOR,[fv]:n.ONE_MINUS_SRC_ALPHA,[PM]:n.ONE_MINUS_DST_COLOR,[RM]:n.ONE_MINUS_DST_ALPHA};function Ce(U,$,ne,he,ve,Xe,je,Ft){if(U===gr){f===!0&&(Te(n.BLEND),f=!1);return}if(f===!1&&(D(n.BLEND),f=!0),U!==xM){if(U!==g||Ft!==y){if((x!==ks||E!==ks)&&(n.blendEquation(n.FUNC_ADD),x=ks,E=ks),Ft)switch(U){case ao:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fm:n.blendFunc(n.ONE,n.ONE);break;case dm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ao:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,S=null,A=null,P=null,g=U,y=Ft}return}ve=ve||$,Xe=Xe||ne,je=je||he,($!==x||ve!==E)&&(n.blendEquationSeparate(Ge[$],Ge[ve]),x=$,E=ve),(ne!==M||he!==S||Xe!==A||je!==P)&&(n.blendFuncSeparate(xe[ne],xe[he],xe[Xe],xe[je]),M=ne,S=he,A=Xe,P=je),g=U,y=!1}function at(U,$){U.side===Oi?Te(n.CULL_FACE):D(n.CULL_FACE);let ne=U.side===cn;$&&(ne=!ne),tt(ne),U.blending===ao&&U.transparent===!1?Ce(gr):Ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const he=U.stencilWrite;u.setTest(he),he&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),He(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?D(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(U){w!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),w=U)}function mt(U){U!==_M?(D(n.CULL_FACE),U!==H&&(U===cm?n.cullFace(n.BACK):U===gM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),H=U}function ct(U){U!==W&&(Z&&n.lineWidth(U),W=U)}function He(U,$,ne){U?(D(n.POLYGON_OFFSET_FILL),(I!==$||F!==ne)&&(n.polygonOffset($,ne),I=$,F=ne)):Te(n.POLYGON_OFFSET_FILL)}function Ke(U){U?D(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function Ot(U){U===void 0&&(U=n.TEXTURE0+B-1),G!==U&&(n.activeTexture(U),G=U)}function C(U,$,ne){ne===void 0&&(G===null?ne=n.TEXTURE0+B-1:ne=G);let he=z[ne];he===void 0&&(he={type:void 0,texture:void 0},z[ne]=he),(he.type!==U||he.texture!==$)&&(G!==ne&&(n.activeTexture(ne),G=ne),n.bindTexture(U,$||ae[U]),he.type=U,he.texture=$)}function T(){const U=z[G];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function b(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(U){j.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),j.copy(U))}function _e(U){q.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function we(U,$){let ne=d.get($);ne===void 0&&(ne=new WeakMap,d.set($,ne));let he=ne.get(U);he===void 0&&(he=n.getUniformBlockIndex($,U.name),ne.set(U,he))}function Le(U,$){const he=d.get($).get(U);c.get($)!==he&&(n.uniformBlockBinding($,he,U.__bindingPointIndex),c.set($,he))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},G=null,z={},p={},v=new WeakMap,m=[],_=null,f=!1,g=null,x=null,M=null,S=null,E=null,A=null,P=null,y=!1,w=null,H=null,W=null,I=null,F=null,j.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:D,disable:Te,bindFramebuffer:Ee,drawBuffers:le,useProgram:Se,setBlending:Ce,setMaterial:at,setFlipSided:tt,setCullFace:mt,setLineWidth:ct,setPolygonOffset:He,setScissorTest:Ke,activeTexture:Ot,bindTexture:C,unbindTexture:T,compressedTexImage2D:Y,compressedTexImage3D:te,texImage2D:me,texImage3D:ge,updateUBOMapping:we,uniformBlockBinding:Le,texStorage2D:V,texStorage3D:fe,texSubImage2D:re,texSubImage3D:ce,compressedTexSubImage2D:b,compressedTexSubImage3D:J,scissor:de,viewport:_e,reset:ft}}function oR(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let m;const _=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return f?new OffscreenCanvas(C,T):Na("canvas")}function x(C,T,Y,te){let re=1;if((C.width>te||C.height>te)&&(re=te/Math.max(C.width,C.height)),re<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ce=T?dE:Math.floor,b=ce(re*C.width),J=ce(re*C.height);m===void 0&&(m=g(b,J));const V=Y?g(b,J):m;return V.width=b,V.height=J,V.getContext("2d").drawImage(C,0,0,b,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+b+"x"+J+")."),V}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return Gm(C.width)&&Gm(C.height)}function S(C){return a?!1:C.wrapS!==ni||C.wrapT!==ni||C.minFilter!==Gt&&C.minFilter!==On}function E(C,T){return C.generateMipmaps&&T&&C.minFilter!==Gt&&C.minFilter!==On}function A(C){n.generateMipmap(C)}function P(C,T,Y,te,re=!1){if(a===!1)return T;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce=T;return T===n.RED&&(Y===n.FLOAT&&(ce=n.R32F),Y===n.HALF_FLOAT&&(ce=n.R16F),Y===n.UNSIGNED_BYTE&&(ce=n.R8)),T===n.RG&&(Y===n.FLOAT&&(ce=n.RG32F),Y===n.HALF_FLOAT&&(ce=n.RG16F),Y===n.UNSIGNED_BYTE&&(ce=n.RG8)),T===n.RGBA&&(Y===n.FLOAT&&(ce=n.RGBA32F),Y===n.HALF_FLOAT&&(ce=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ce=te===Re&&re===!1?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)),(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function y(C,T,Y){return E(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==On?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function w(C){return C===Gt||C===_m||C===Uc?n.NEAREST:n.LINEAR}function H(C){const T=C.target;T.removeEventListener("dispose",H),I(T),T.isVideoTexture&&v.delete(T)}function W(C){const T=C.target;T.removeEventListener("dispose",W),B(T)}function I(C){const T=i.get(C);if(T.__webglInit===void 0)return;const Y=C.source,te=_.get(Y);if(te){const re=te[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(C),Object.keys(te).length===0&&_.delete(Y)}i.remove(C)}function F(C){const T=i.get(C);n.deleteTexture(T.__webglTexture);const Y=C.source,te=_.get(Y);delete te[T.__cacheKey],o.memory.textures--}function B(C){const T=C.texture,Y=i.get(C),te=i.get(T);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)n.deleteFramebuffer(Y.__webglFramebuffer[re]),Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[re]);else{if(n.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let re=0;re<Y.__webglColorRenderbuffer.length;re++)Y.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[re]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,ce=T.length;re<ce;re++){const b=i.get(T[re]);b.__webglTexture&&(n.deleteTexture(b.__webglTexture),o.memory.textures--),i.remove(T[re])}i.remove(T),i.remove(C)}let Z=0;function X(){Z=0}function L(){const C=Z;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Z+=1,C}function G(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function z(C,T){const Y=i.get(C);if(C.isVideoTexture&&Ke(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Y,C,T);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+T)}function oe(C,T){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){Te(Y,C,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+T)}function ee(C,T){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){Te(Y,C,T);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+T)}function j(C,T){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){Ee(Y,C,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+T)}const q={[_d]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[gd]:n.MIRRORED_REPEAT},se={[Gt]:n.NEAREST,[_m]:n.NEAREST_MIPMAP_NEAREST,[Uc]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[XM]:n.LINEAR_MIPMAP_NEAREST,[Ua]:n.LINEAR_MIPMAP_LINEAR};function ae(C,T,Y){if(Y?(n.texParameteri(C,n.TEXTURE_WRAP_S,q[T.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,q[T.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,q[T.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,se[T.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,se[T.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==ni||T.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,w(T.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,w(T.minFilter)),T.minFilter!==Gt&&T.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Gt||T.minFilter!==Uc&&T.minFilter!==Ua||T.type===qr&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Ia&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function D(C,T){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",H));const te=T.source;let re=_.get(te);re===void 0&&(re={},_.set(te,re));const ce=G(T);if(ce!==C.__cacheKey){re[ce]===void 0&&(re[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),re[ce].usedTimes++;const b=re[C.__cacheKey];b!==void 0&&(re[C.__cacheKey].usedTimes--,b.usedTimes===0&&F(T)),C.__cacheKey=ce,C.__webglTexture=re[ce].texture}return Y}function Te(C,T,Y){let te=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=n.TEXTURE_3D);const re=D(C,T),ce=T.source;t.bindTexture(te,C.__webglTexture,n.TEXTURE0+Y);const b=i.get(ce);if(ce.version!==b.__version||re===!0){t.activeTexture(n.TEXTURE0+Y),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const J=S(T)&&M(T.image)===!1;let V=x(T.image,J,!1,c);V=Ot(T,V);const fe=M(V)||a,me=s.convert(T.format,T.colorSpace);let ge=s.convert(T.type),de=P(T.internalFormat,me,ge,T.colorSpace);ae(te,T,fe);let _e;const we=T.mipmaps,Le=a&&T.isVideoTexture!==!0,ft=b.__version===void 0||re===!0,U=y(T,V,fe);if(T.isDepthTexture)de=n.DEPTH_COMPONENT,a?T.type===qr?de=n.DEPTH_COMPONENT32F:T.type===Yr?de=n.DEPTH_COMPONENT24:T.type===lo?de=n.DEPTH24_STENCIL8:de=n.DEPTH_COMPONENT16:T.type===qr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Qr&&de===n.DEPTH_COMPONENT&&T.type!==pv&&T.type!==Yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Yr,ge=s.convert(T.type)),T.format===Eo&&de===n.DEPTH_COMPONENT&&(de=n.DEPTH_STENCIL,T.type!==lo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=lo,ge=s.convert(T.type))),ft&&(Le?t.texStorage2D(n.TEXTURE_2D,1,de,V.width,V.height):t.texImage2D(n.TEXTURE_2D,0,de,V.width,V.height,0,me,ge,null));else if(T.isDataTexture)if(we.length>0&&fe){Le&&ft&&t.texStorage2D(n.TEXTURE_2D,U,de,we[0].width,we[0].height);for(let $=0,ne=we.length;$<ne;$++)_e=we[$],Le?t.texSubImage2D(n.TEXTURE_2D,$,0,0,_e.width,_e.height,me,ge,_e.data):t.texImage2D(n.TEXTURE_2D,$,de,_e.width,_e.height,0,me,ge,_e.data);T.generateMipmaps=!1}else Le?(ft&&t.texStorage2D(n.TEXTURE_2D,U,de,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,V.width,V.height,me,ge,V.data)):t.texImage2D(n.TEXTURE_2D,0,de,V.width,V.height,0,me,ge,V.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Le&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,U,de,we[0].width,we[0].height,V.depth);for(let $=0,ne=we.length;$<ne;$++)_e=we[$],T.format!==ii?me!==null?Le?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,V.depth,me,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,de,_e.width,_e.height,V.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,V.depth,me,ge,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,de,_e.width,_e.height,V.depth,0,me,ge,_e.data)}else{Le&&ft&&t.texStorage2D(n.TEXTURE_2D,U,de,we[0].width,we[0].height);for(let $=0,ne=we.length;$<ne;$++)_e=we[$],T.format!==ii?me!==null?Le?t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,_e.width,_e.height,me,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,$,de,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(n.TEXTURE_2D,$,0,0,_e.width,_e.height,me,ge,_e.data):t.texImage2D(n.TEXTURE_2D,$,de,_e.width,_e.height,0,me,ge,_e.data)}else if(T.isDataArrayTexture)Le?(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,U,de,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,me,ge,V.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,V.width,V.height,V.depth,0,me,ge,V.data);else if(T.isData3DTexture)Le?(ft&&t.texStorage3D(n.TEXTURE_3D,U,de,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,me,ge,V.data)):t.texImage3D(n.TEXTURE_3D,0,de,V.width,V.height,V.depth,0,me,ge,V.data);else if(T.isFramebufferTexture){if(ft)if(Le)t.texStorage2D(n.TEXTURE_2D,U,de,V.width,V.height);else{let $=V.width,ne=V.height;for(let he=0;he<U;he++)t.texImage2D(n.TEXTURE_2D,he,de,$,ne,0,me,ge,null),$>>=1,ne>>=1}}else if(we.length>0&&fe){Le&&ft&&t.texStorage2D(n.TEXTURE_2D,U,de,we[0].width,we[0].height);for(let $=0,ne=we.length;$<ne;$++)_e=we[$],Le?t.texSubImage2D(n.TEXTURE_2D,$,0,0,me,ge,_e):t.texImage2D(n.TEXTURE_2D,$,de,me,ge,_e);T.generateMipmaps=!1}else Le?(ft&&t.texStorage2D(n.TEXTURE_2D,U,de,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,ge,V)):t.texImage2D(n.TEXTURE_2D,0,de,me,ge,V);E(T,fe)&&A(te),b.__version=ce.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Ee(C,T,Y){if(T.image.length!==6)return;const te=D(C,T),re=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Y);const ce=i.get(re);if(re.version!==ce.__version||te===!0){t.activeTexture(n.TEXTURE0+Y),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const b=T.isCompressedTexture||T.image[0].isCompressedTexture,J=T.image[0]&&T.image[0].isDataTexture,V=[];for(let $=0;$<6;$++)!b&&!J?V[$]=x(T.image[$],!1,!0,u):V[$]=J?T.image[$].image:T.image[$],V[$]=Ot(T,V[$]);const fe=V[0],me=M(fe)||a,ge=s.convert(T.format,T.colorSpace),de=s.convert(T.type),_e=P(T.internalFormat,ge,de,T.colorSpace),we=a&&T.isVideoTexture!==!0,Le=ce.__version===void 0||te===!0;let ft=y(T,fe,me);ae(n.TEXTURE_CUBE_MAP,T,me);let U;if(b){we&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ft,_e,fe.width,fe.height);for(let $=0;$<6;$++){U=V[$].mipmaps;for(let ne=0;ne<U.length;ne++){const he=U[ne];T.format!==ii?ge!==null?we?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne,0,0,he.width,he.height,ge,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne,0,0,he.width,he.height,ge,de,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne,_e,he.width,he.height,0,ge,de,he.data)}}}else{U=T.mipmaps,we&&Le&&(U.length>0&&ft++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ft,_e,V[0].width,V[0].height));for(let $=0;$<6;$++)if(J){we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,V[$].width,V[$].height,ge,de,V[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,_e,V[$].width,V[$].height,0,ge,de,V[$].data);for(let ne=0;ne<U.length;ne++){const ve=U[ne].image[$].image;we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne+1,0,0,ve.width,ve.height,ge,de,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne+1,_e,ve.width,ve.height,0,ge,de,ve.data)}}else{we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ge,de,V[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,_e,ge,de,V[$]);for(let ne=0;ne<U.length;ne++){const he=U[ne];we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne+1,0,0,ge,de,he.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne+1,_e,ge,de,he.image[$])}}}E(T,me)&&A(n.TEXTURE_CUBE_MAP),ce.__version=re.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function le(C,T,Y,te,re){const ce=s.convert(Y.format,Y.colorSpace),b=s.convert(Y.type),J=P(Y.internalFormat,ce,b,Y.colorSpace);i.get(T).__hasExternalTextures||(re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,0,J,T.width,T.height,T.depth,0,ce,b,null):t.texImage2D(re,0,J,T.width,T.height,0,ce,b,null)),t.bindFramebuffer(n.FRAMEBUFFER,C),He(T)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,re,i.get(Y).__webglTexture,0,ct(T)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,re,i.get(Y).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(C,T,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let te=n.DEPTH_COMPONENT16;if(Y||He(T)){const re=T.depthTexture;re&&re.isDepthTexture&&(re.type===qr?te=n.DEPTH_COMPONENT32F:re.type===Yr&&(te=n.DEPTH_COMPONENT24));const ce=ct(T);He(T)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,te,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,te,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const te=ct(T);Y&&He(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,T.width,T.height):He(T)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0;re<te.length;re++){const ce=te[re],b=s.convert(ce.format,ce.colorSpace),J=s.convert(ce.type),V=P(ce.internalFormat,b,J,ce.colorSpace),fe=ct(T);Y&&He(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,V,T.width,T.height):He(T)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,V,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,V,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);const te=i.get(T.depthTexture).__webglTexture,re=ct(T);if(T.depthTexture.format===Qr)He(T)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(T.depthTexture.format===Eo)He(T)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function xe(C){const T=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ge(T.__webglFramebuffer,C)}else if(Y){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=n.createRenderbuffer(),Se(T.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),Se(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(C,T,Y){const te=i.get(C);T!==void 0&&le(te.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),Y!==void 0&&xe(C)}function at(C){const T=C.texture,Y=i.get(C),te=i.get(T);C.addEventListener("dispose",W),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=T.version,o.memory.textures++);const re=C.isWebGLCubeRenderTarget===!0,ce=C.isWebGLMultipleRenderTargets===!0,b=M(C)||a;if(re){Y.__webglFramebuffer=[];for(let J=0;J<6;J++)Y.__webglFramebuffer[J]=n.createFramebuffer()}else{if(Y.__webglFramebuffer=n.createFramebuffer(),ce)if(r.drawBuffers){const J=C.texture;for(let V=0,fe=J.length;V<fe;V++){const me=i.get(J[V]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&He(C)===!1){const J=ce?T:[T];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let V=0;V<J.length;V++){const fe=J[V];Y.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[V]);const me=s.convert(fe.format,fe.colorSpace),ge=s.convert(fe.type),de=P(fe.internalFormat,me,ge,fe.colorSpace,C.isXRRenderTarget===!0),_e=ct(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,de,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,Y.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ae(n.TEXTURE_CUBE_MAP,T,b);for(let J=0;J<6;J++)le(Y.__webglFramebuffer[J],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J);E(T,b)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const J=C.texture;for(let V=0,fe=J.length;V<fe;V++){const me=J[V],ge=i.get(me);t.bindTexture(n.TEXTURE_2D,ge.__webglTexture),ae(n.TEXTURE_2D,me,b),le(Y.__webglFramebuffer,C,me,n.COLOR_ATTACHMENT0+V,n.TEXTURE_2D),E(me,b)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let J=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?J=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(J,te.__webglTexture),ae(J,T,b),le(Y.__webglFramebuffer,C,T,n.COLOR_ATTACHMENT0,J),E(T,b)&&A(J),t.unbindTexture()}C.depthBuffer&&xe(C)}function tt(C){const T=M(C)||a,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,re=Y.length;te<re;te++){const ce=Y[te];if(E(ce,T)){const b=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,J=i.get(ce).__webglTexture;t.bindTexture(b,J),A(b),t.unbindTexture()}}}function mt(C){if(a&&C.samples>0&&He(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,te=C.height;let re=n.COLOR_BUFFER_BIT;const ce=[],b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=i.get(C),V=C.isWebGLMultipleRenderTargets===!0;if(V)for(let fe=0;fe<T.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let fe=0;fe<T.length;fe++){ce.push(n.COLOR_ATTACHMENT0+fe),C.depthBuffer&&ce.push(b);const me=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(me===!1&&(C.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),V&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,J.__webglColorRenderbuffer[fe]),me===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[b]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])),V){const ge=i.get(T[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,Y,te,0,0,Y,te,re,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let fe=0;fe<T.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,J.__webglColorRenderbuffer[fe]);const me=i.get(T[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}}function ct(C){return Math.min(d,C.samples)}function He(C){const T=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(C){const T=o.render.frame;v.get(C)!==T&&(v.set(C,T),C.update())}function Ot(C,T){const Y=C.colorSpace,te=C.format,re=C.type;return C.isCompressedTexture===!0||C.format===vd||Y!==Mi&&Y!==es&&(Y===Re?a===!1?e.has("EXT_sRGB")===!0&&te===ii?(C.format=vd,C.minFilter=On,C.generateMipmaps=!1):T=xv.sRGBToLinear(T):(te!==ii||re!==us)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}this.allocateTextureUnit=L,this.resetTextureUnits=X,this.setTexture2D=z,this.setTexture2DArray=oe,this.setTexture3D=ee,this.setTextureCube=j,this.rebindTextures=Ce,this.setupRenderTarget=at,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=He}function aR(n,e,t){const i=t.isWebGL2;function r(s,o=es){let a;if(s===us)return n.UNSIGNED_BYTE;if(s===$M)return n.UNSIGNED_SHORT_4_4_4_4;if(s===KM)return n.UNSIGNED_SHORT_5_5_5_1;if(s===jM)return n.BYTE;if(s===YM)return n.SHORT;if(s===pv)return n.UNSIGNED_SHORT;if(s===qM)return n.INT;if(s===Yr)return n.UNSIGNED_INT;if(s===qr)return n.FLOAT;if(s===Ia)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ZM)return n.ALPHA;if(s===ii)return n.RGBA;if(s===QM)return n.LUMINANCE;if(s===JM)return n.LUMINANCE_ALPHA;if(s===Qr)return n.DEPTH_COMPONENT;if(s===Eo)return n.DEPTH_STENCIL;if(s===vd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===eE)return n.RED;if(s===tE)return n.RED_INTEGER;if(s===nE)return n.RG;if(s===iE)return n.RG_INTEGER;if(s===rE)return n.RGBA_INTEGER;if(s===Ic||s===Nc||s===Oc||s===Fc)if(o===Re)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ic)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ic)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gm||s===vm||s===xm||s===ym)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===gm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ym)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sm||s===Mm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sm)return o===Re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Mm)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Em||s===Tm||s===wm||s===Am||s===Rm||s===Cm||s===Pm||s===bm||s===Lm||s===Dm||s===Um||s===Im||s===Nm||s===Om)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Em)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tm)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wm)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Am)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rm)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Cm)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pm)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bm)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lm)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dm)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Um)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Im)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nm)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Om)return o===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===kc)return o===Re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===oE||s===Fm||s===km||s===zm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===kc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Fm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===km)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lo?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class lR extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fl extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uR={type:"move"};class uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const _=t.getJointPose(m,i),f=this._getHandJoint(u,m);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class cR extends fn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Qr,c!==Qr&&c!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Qr&&(i=Yr),i===void 0&&c===Eo&&(i=lo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1}}class fR extends _s{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,v=null;const m=t.getContextAttributes();let _=null,f=null;const g=[],x=[],M=new Set,S=new Map,E=new Fn;E.layers.enable(1),E.viewport=new Pt;const A=new Fn;A.layers.enable(2),A.viewport=new Pt;const P=[E,A],y=new lR;y.layers.enable(1),y.layers.enable(2);let w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let q=g[j];return q===void 0&&(q=new uf,g[j]=q),q.getTargetRaySpace()},this.getControllerGrip=function(j){let q=g[j];return q===void 0&&(q=new uf,g[j]=q),q.getGripSpace()},this.getHand=function(j){let q=g[j];return q===void 0&&(q=new uf,g[j]=q),q.getHandSpace()};function W(j){const q=x.indexOf(j.inputSource);if(q===-1)return;const se=g[q];se!==void 0&&(se.update(j.inputSource,j.frame,u||o),se.dispatchEvent({type:j.type,data:j.inputSource}))}function I(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",F);for(let j=0;j<g.length;j++){const q=x[j];q!==null&&(x[j]=null,g[j].disconnect(q))}w=null,H=null,e.setRenderTarget(_),p=null,h=null,d=null,r=null,f=null,ee.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",I),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:p}),f=new cs(p.framebufferWidth,p.framebufferHeight,{format:ii,type:us,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,se=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=m.stencil?Eo:Qr,se=m.stencil?lo:Yr);const D={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(D),r.updateRenderState({layers:[h]}),f=new cs(h.textureWidth,h.textureHeight,{format:ii,type:us,depthTexture:new cR(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Te=e.properties.get(f);Te.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(j){for(let q=0;q<j.removed.length;q++){const se=j.removed[q],ae=x.indexOf(se);ae>=0&&(x[ae]=null,g[ae].disconnect(se))}for(let q=0;q<j.added.length;q++){const se=j.added[q];let ae=x.indexOf(se);if(ae===-1){for(let Te=0;Te<g.length;Te++)if(Te>=x.length){x.push(se),ae=Te;break}else if(x[Te]===null){x[Te]=se,ae=Te;break}if(ae===-1)break}const D=g[ae];D&&D.connect(se)}}const B=new O,Z=new O;function X(j,q,se){B.setFromMatrixPosition(q.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);const ae=B.distanceTo(Z),D=q.projectionMatrix.elements,Te=se.projectionMatrix.elements,Ee=D[14]/(D[10]-1),le=D[14]/(D[10]+1),Se=(D[9]+1)/D[5],Ge=(D[9]-1)/D[5],xe=(D[8]-1)/D[0],Ce=(Te[8]+1)/Te[0],at=Ee*xe,tt=Ee*Ce,mt=ae/(-xe+Ce),ct=mt*-xe;q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ct),j.translateZ(mt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const He=Ee+mt,Ke=le+mt,Ot=at-ct,C=tt+(ae-ct),T=Se*le/Ke*He,Y=Ge*le/Ke*He;j.projectionMatrix.makePerspective(Ot,C,T,Y,He,Ke),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function L(j,q){q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;y.near=A.near=E.near=j.near,y.far=A.far=E.far=j.far,(w!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,H=y.far);const q=j.parent,se=y.cameras;L(y,q);for(let ae=0;ae<se.length;ae++)L(se[ae],q);se.length===2?X(y,E,A):y.projectionMatrix.copy(E.projectionMatrix),G(j,y,q)};function G(j,q,se){se===null?j.matrix.copy(q.matrixWorld):(j.matrix.copy(se.matrixWorld),j.matrix.invert(),j.matrix.multiply(q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const ae=j.children;for(let D=0,Te=ae.length;D<Te;D++)ae[D].updateMatrixWorld(!0);j.projectionMatrix.copy(q.projectionMatrix),j.projectionMatrixInverse.copy(q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=xd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.getPlanes=function(){return M};let z=null;function oe(j,q){if(c=q.getViewerPose(u||o),v=q,c!==null){const se=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ae=!1;se.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let D=0;D<se.length;D++){const Te=se[D];let Ee=null;if(p!==null)Ee=p.getViewport(Te);else{const Se=d.getViewSubImage(h,Te);Ee=Se.viewport,D===0&&(e.setRenderTargetTextures(f,Se.colorTexture,h.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(f))}let le=P[D];le===void 0&&(le=new Fn,le.layers.enable(D),le.viewport=new Pt,P[D]=le),le.matrix.fromArray(Te.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Te.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),D===0&&(y.matrix.copy(le.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(le)}}for(let se=0;se<g.length;se++){const ae=x[se],D=g[se];ae!==null&&D!==void 0&&D.update(ae,q,u||o)}if(z&&z(j,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let se=null;for(const ae of M)q.detectedPlanes.has(ae)||(se===null&&(se=[]),se.push(ae));if(se!==null)for(const ae of se)M.delete(ae),S.delete(ae),i.dispatchEvent({type:"planeremoved",data:ae});for(const ae of q.detectedPlanes)if(!M.has(ae))M.add(ae),S.set(ae,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ae});else{const D=S.get(ae);ae.lastChangedTime>D&&(S.set(ae,ae.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ae}))}}v=null}const ee=new bv;ee.setAnimationLoop(oe),this.setAnimationLoop=function(j){z=j},this.dispose=function(){}}}function dR(n,e){function t(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function i(_,f){f.color.getRGB(_.fogColor.value,Rv(n)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function r(_,f,g,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(_,f):f.isMeshToonMaterial?(s(_,f),d(_,f)):f.isMeshPhongMaterial?(s(_,f),c(_,f)):f.isMeshStandardMaterial?(s(_,f),h(_,f),f.isMeshPhysicalMaterial&&p(_,f,M)):f.isMeshMatcapMaterial?(s(_,f),v(_,f)):f.isMeshDepthMaterial?s(_,f):f.isMeshDistanceMaterial?(s(_,f),m(_,f)):f.isMeshNormalMaterial?s(_,f):f.isLineBasicMaterial?(o(_,f),f.isLineDashedMaterial&&a(_,f)):f.isPointsMaterial?l(_,f,g,x):f.isSpriteMaterial?u(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,t(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===cn&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,t(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===cn&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,t(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,t(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(_.envMap.value=g,_.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap){_.lightMap.value=f.lightMap;const x=n.useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,_.lightMapTransform)}f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,_.aoMapTransform))}function o(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform))}function a(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,g,x){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*g,_.scale.value=x*.5,f.map&&(_.map.value=f.map,t(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function u(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function d(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function h(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,_.roughnessMapTransform)),e.get(f).envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function p(_,f,g){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&_.clearcoatNormalScale.value.negate())),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=g.texture,_.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,f){f.matcap&&(_.matcap.value=f.matcap)}function m(_,f){const g=e.get(f).light;_.referencePosition.value.setFromMatrixPosition(g.matrixWorld),_.nearDistance.value=g.shadow.camera.near,_.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hR(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,x){const M=x.program;i.uniformBlockBinding(g,M)}function u(g,x){let M=r[g.id];M===void 0&&(v(g),M=c(g),r[g.id]=M,g.addEventListener("dispose",_));const S=x.program;i.updateUBOMapping(g,S);const E=e.render.frame;s[g.id]!==E&&(h(g),s[g.id]=E)}function c(g){const x=d();g.__bindingPointIndex=x;const M=n.createBuffer(),S=g.__size,E=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],M=g.uniforms,S=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,A=M.length;E<A;E++){const P=M[E];if(p(P,E,S)===!0){const y=P.__offset,w=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let W=0;W<w.length;W++){const I=w[W],F=m(I);typeof I=="number"?(P.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,y+H,P.__data)):I.isMatrix3?(P.__data[0]=I.elements[0],P.__data[1]=I.elements[1],P.__data[2]=I.elements[2],P.__data[3]=I.elements[0],P.__data[4]=I.elements[3],P.__data[5]=I.elements[4],P.__data[6]=I.elements[5],P.__data[7]=I.elements[0],P.__data[8]=I.elements[6],P.__data[9]=I.elements[7],P.__data[10]=I.elements[8],P.__data[11]=I.elements[0]):(I.toArray(P.__data,H),H+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,y,P.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,x,M){const S=g.value;if(M[x]===void 0){if(typeof S=="number")M[x]=S;else{const E=Array.isArray(S)?S:[S],A=[];for(let P=0;P<E.length;P++)A.push(E[P].clone());M[x]=A}return!0}else if(typeof S=="number"){if(M[x]!==S)return M[x]=S,!0}else{const E=Array.isArray(M[x])?M[x]:[M[x]],A=Array.isArray(S)?S:[S];for(let P=0;P<E.length;P++){const y=E[P];if(y.equals(A[P])===!1)return y.copy(A[P]),!0}}return!1}function v(g){const x=g.uniforms;let M=0;const S=16;let E=0;for(let A=0,P=x.length;A<P;A++){const y=x[A],w={boundary:0,storage:0},H=Array.isArray(y.value)?y.value:[y.value];for(let W=0,I=H.length;W<I;W++){const F=H[W],B=m(F);w.boundary+=B.boundary,w.storage+=B.storage}if(y.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=M,A>0){E=M%S;const W=S-E;E!==0&&W-w.boundary<0&&(M+=S-E,y.__offset=M)}M+=w.storage}return E=M%S,E>0&&(M+=S-E),g.__size=M,g.__cache={},this}function m(g){const x={boundary:0,storage:0};return typeof g=="number"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function _(g){const x=g.target;x.removeEventListener("dispose",_);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}function pR(){const n=Na("canvas");return n.style.display="block",n}class Ov{constructor(e={}){const{canvas:t=pR(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let p=null,v=null;const m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Re,this.useLegacyLights=!0,this.toneMapping=Bi,this.toneMappingExposure=1;const f=this;let g=!1,x=0,M=0,S=null,E=-1,A=null;const P=new Pt,y=new Pt;let w=null,H=t.width,W=t.height,I=1,F=null,B=null;const Z=new Pt(0,0,H,W),X=new Pt(0,0,H,W);let L=!1;const G=new Dh;let z=!1,oe=!1,ee=null;const j=new Et,q=new O,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return S===null?I:1}let D=i;function Te(R,k){for(let K=0;K<R.length;K++){const N=R[K],Q=t.getContext(N,k);if(Q!==null)return Q}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bh}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Le,!1),D===null){const k=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&k.shift(),D=Te(k,R),D===null)throw Te(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ee,le,Se,Ge,xe,Ce,at,tt,mt,ct,He,Ke,Ot,C,T,Y,te,re,ce,b,J,V,fe,me;function ge(){Ee=new ww(D),le=new xw(D,Ee,e),Ee.init(le),V=new aR(D,Ee,le),Se=new sR(D,Ee,le),Ge=new Cw(D),xe=new XA,Ce=new oR(D,Ee,Se,xe,le,V,Ge),at=new Sw(f),tt=new Tw(f),mt=new BE(D,le),fe=new gw(D,Ee,mt,le),ct=new Aw(D,mt,Ge,fe),He=new Dw(D,ct,mt,Ge),ce=new Lw(D,le,Ce),Y=new yw(xe),Ke=new WA(f,at,tt,Ee,le,fe,Y),Ot=new dR(f,xe),C=new YA,T=new JA(Ee,le),re=new _w(f,at,tt,Se,He,h,l),te=new rR(f,He,le),me=new hR(D,Ge,le,Se),b=new vw(D,Ee,Ge,le),J=new Rw(D,Ee,Ge,le),Ge.programs=Ke.programs,f.capabilities=le,f.extensions=Ee,f.properties=xe,f.renderLists=C,f.shadowMap=te,f.state=Se,f.info=Ge}ge();const de=new fR(f,D);this.xr=de,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(R){R!==void 0&&(I=R,this.setSize(H,W,!1))},this.getSize=function(R){return R.set(H,W)},this.setSize=function(R,k,K=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,W=k,t.width=Math.floor(R*I),t.height=Math.floor(k*I),K===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(H*I,W*I).floor()},this.setDrawingBufferSize=function(R,k,K){H=R,W=k,I=K,t.width=Math.floor(R*K),t.height=Math.floor(k*K),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(Z)},this.setViewport=function(R,k,K,N){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,k,K,N),Se.viewport(P.copy(Z).multiplyScalar(I).floor())},this.getScissor=function(R){return R.copy(X)},this.setScissor=function(R,k,K,N){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,k,K,N),Se.scissor(y.copy(X).multiplyScalar(I).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(R){Se.setScissorTest(L=R)},this.setOpaqueSort=function(R){F=R},this.setTransparentSort=function(R){B=R},this.getClearColor=function(R){return R.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(R=!0,k=!0,K=!0){let N=0;R&&(N|=D.COLOR_BUFFER_BIT),k&&(N|=D.DEPTH_BUFFER_BIT),K&&(N|=D.STENCIL_BUFFER_BIT),D.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),C.dispose(),T.dispose(),xe.dispose(),at.dispose(),tt.dispose(),He.dispose(),fe.dispose(),me.dispose(),Ke.dispose(),de.dispose(),de.removeEventListener("sessionstart",ve),de.removeEventListener("sessionend",Xe),ee&&(ee.dispose(),ee=null),je.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const R=Ge.autoReset,k=te.enabled,K=te.autoUpdate,N=te.needsUpdate,Q=te.type;ge(),Ge.autoReset=R,te.enabled=k,te.autoUpdate=K,te.needsUpdate=N,te.type=Q}function Le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ft(R){const k=R.target;k.removeEventListener("dispose",ft),U(k)}function U(R){$(R),xe.remove(R)}function $(R){const k=xe.get(R).programs;k!==void 0&&(k.forEach(function(K){Ke.releaseProgram(K)}),R.isShaderMaterial&&Ke.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,K,N,Q,ye){k===null&&(k=se);const Me=Q.isMesh&&Q.matrixWorld.determinant()<0,Ae=zx(R,k,K,N,Q);Se.setMaterial(N,Me);let Pe=K.index,Ue=1;N.wireframe===!0&&(Pe=ct.getWireframeAttribute(K),Ue=2);const Ie=K.drawRange,Ne=K.attributes.position;let We=Ie.start*Ue,$t=(Ie.start+Ie.count)*Ue;ye!==null&&(We=Math.max(We,ye.start*Ue),$t=Math.min($t,(ye.start+ye.count)*Ue)),Pe!==null?(We=Math.max(We,0),$t=Math.min($t,Pe.count)):Ne!=null&&(We=Math.max(We,0),$t=Math.min($t,Ne.count));const jn=$t-We;if(jn<0||jn===1/0)return;fe.setup(Q,N,Ae,K,Pe);let br,_t=b;if(Pe!==null&&(br=mt.get(Pe),_t=J,_t.setIndex(br)),Q.isMesh)N.wireframe===!0?(Se.setLineWidth(N.wireframeLinewidth*ae()),_t.setMode(D.LINES)):_t.setMode(D.TRIANGLES);else if(Q.isLine){let ze=N.linewidth;ze===void 0&&(ze=1),Se.setLineWidth(ze*ae()),Q.isLineSegments?_t.setMode(D.LINES):Q.isLineLoop?_t.setMode(D.LINE_LOOP):_t.setMode(D.LINE_STRIP)}else Q.isPoints?_t.setMode(D.POINTS):Q.isSprite&&_t.setMode(D.TRIANGLES);if(Q.isInstancedMesh)_t.renderInstances(We,jn,Q.count);else if(K.isInstancedBufferGeometry){const ze=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ic=Math.min(K.instanceCount,ze);_t.renderInstances(We,jn,ic)}else _t.render(We,jn)},this.compile=function(R,k){function K(N,Q,ye){N.transparent===!0&&N.side===Oi&&N.forceSinglePass===!1?(N.side=cn,N.needsUpdate=!0,Qa(N,Q,ye),N.side=Mr,N.needsUpdate=!0,Qa(N,Q,ye),N.side=Oi):Qa(N,Q,ye)}v=T.get(R),v.init(),_.push(v),R.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(v.pushLight(N),N.castShadow&&v.pushShadow(N))}),v.setupLights(f.useLegacyLights),R.traverse(function(N){const Q=N.material;if(Q)if(Array.isArray(Q))for(let ye=0;ye<Q.length;ye++){const Me=Q[ye];K(Me,R,N)}else K(Q,R,N)}),_.pop(),v=null};let ne=null;function he(R){ne&&ne(R)}function ve(){je.stop()}function Xe(){je.start()}const je=new bv;je.setAnimationLoop(he),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(R){ne=R,de.setAnimationLoop(R),R===null?je.stop():je.start()},de.addEventListener("sessionstart",ve),de.addEventListener("sessionend",Xe),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(k),k=de.getCamera()),R.isScene===!0&&R.onBeforeRender(f,R,k,S),v=T.get(R,_.length),v.init(),_.push(v),j.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),G.setFromProjectionMatrix(j),oe=this.localClippingEnabled,z=Y.init(this.clippingPlanes,oe),p=C.get(R,m.length),p.init(),m.push(p),Ft(R,k,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(F,B),z===!0&&Y.beginShadows();const K=v.state.shadowsArray;if(te.render(K,R,k),z===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(p,R),v.setupLights(f.useLegacyLights),k.isArrayCamera){const N=k.cameras;for(let Q=0,ye=N.length;Q<ye;Q++){const Me=N[Q];qi(p,R,Me,Me.viewport)}}else qi(p,R,k);S!==null&&(Ce.updateMultisampleRenderTarget(S),Ce.updateRenderTargetMipmap(S)),R.isScene===!0&&R.onAfterRender(f,R,k),fe.resetDefaultState(),E=-1,A=null,_.pop(),_.length>0?v=_[_.length-1]:v=null,m.pop(),m.length>0?p=m[m.length-1]:p=null};function Ft(R,k,K,N){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){N&&q.setFromMatrixPosition(R.matrixWorld).applyMatrix4(j);const Me=He.update(R),Ae=R.material;Ae.visible&&p.push(R,Me,Ae,K,q.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||G.intersectsObject(R))){R.isSkinnedMesh&&R.skeleton.frame!==Ge.render.frame&&(R.skeleton.update(),R.skeleton.frame=Ge.render.frame);const Me=He.update(R),Ae=R.material;if(N&&(Me.boundingSphere===null&&Me.computeBoundingSphere(),q.copy(Me.boundingSphere.center).applyMatrix4(R.matrixWorld).applyMatrix4(j)),Array.isArray(Ae)){const Pe=Me.groups;for(let Ue=0,Ie=Pe.length;Ue<Ie;Ue++){const Ne=Pe[Ue],We=Ae[Ne.materialIndex];We&&We.visible&&p.push(R,Me,We,K,q.z,Ne)}}else Ae.visible&&p.push(R,Me,Ae,K,q.z,null)}}const ye=R.children;for(let Me=0,Ae=ye.length;Me<Ae;Me++)Ft(ye[Me],k,K,N)}function qi(R,k,K,N){const Q=R.opaque,ye=R.transmissive,Me=R.transparent;v.setupLightsView(K),z===!0&&Y.setGlobalState(f.clippingPlanes,K),ye.length>0&&dt(Q,ye,k,K),N&&Se.viewport(P.copy(N)),Q.length>0&&bn(Q,k,K),ye.length>0&&bn(ye,k,K),Me.length>0&&bn(Me,k,K),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function dt(R,k,K,N){if(ee===null){const Ae=le.isWebGL2;ee=new cs(1024,1024,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Ia:us,minFilter:Ua,samples:Ae&&a===!0?4:0})}const Q=f.getRenderTarget();f.setRenderTarget(ee),f.clear();const ye=f.toneMapping;f.toneMapping=Bi,bn(R,K,N),Ce.updateMultisampleRenderTarget(ee),Ce.updateRenderTargetMipmap(ee);let Me=!1;for(let Ae=0,Pe=k.length;Ae<Pe;Ae++){const Ue=k[Ae],Ie=Ue.object,Ne=Ue.geometry,We=Ue.material,$t=Ue.group;if(We.side===Oi&&Ie.layers.test(N.layers)){const jn=We.side;We.side=cn,We.needsUpdate=!0,li(Ie,K,N,Ne,We,$t),We.side=jn,We.needsUpdate=!0,Me=!0}}Me===!0&&(Ce.updateMultisampleRenderTarget(ee),Ce.updateRenderTargetMipmap(ee)),f.setRenderTarget(Q),f.toneMapping=ye}function bn(R,k,K){const N=k.isScene===!0?k.overrideMaterial:null;for(let Q=0,ye=R.length;Q<ye;Q++){const Me=R[Q],Ae=Me.object,Pe=Me.geometry,Ue=N===null?Me.material:N,Ie=Me.group;Ae.layers.test(K.layers)&&li(Ae,k,K,Pe,Ue,Ie)}}function li(R,k,K,N,Q,ye){R.onBeforeRender(f,k,K,N,Q,ye),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(f,k,K,N,R,ye),Q.transparent===!0&&Q.side===Oi&&Q.forceSinglePass===!1?(Q.side=cn,Q.needsUpdate=!0,f.renderBufferDirect(K,k,N,Q,R,ye),Q.side=Mr,Q.needsUpdate=!0,f.renderBufferDirect(K,k,N,Q,R,ye),Q.side=Oi):f.renderBufferDirect(K,k,N,Q,R,ye),R.onAfterRender(f,k,K,N,Q,ye)}function Qa(R,k,K){k.isScene!==!0&&(k=se);const N=xe.get(R),Q=v.state.lights,ye=v.state.shadowsArray,Me=Q.state.version,Ae=Ke.getParameters(R,Q.state,ye,k,K),Pe=Ke.getProgramCacheKey(Ae);let Ue=N.programs;N.environment=R.isMeshStandardMaterial?k.environment:null,N.fog=k.fog,N.envMap=(R.isMeshStandardMaterial?tt:at).get(R.envMap||N.environment),Ue===void 0&&(R.addEventListener("dispose",ft),Ue=new Map,N.programs=Ue);let Ie=Ue.get(Pe);if(Ie!==void 0){if(N.currentProgram===Ie&&N.lightsStateVersion===Me)return Qh(R,Ae),Ie}else Ae.uniforms=Ke.getUniforms(R),R.onBuild(K,Ae,f),R.onBeforeCompile(Ae,f),Ie=Ke.acquireProgram(Ae,Pe),Ue.set(Pe,Ie),N.uniforms=Ae.uniforms;const Ne=N.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ne.clippingPlanes=Y.uniform),Qh(R,Ae),N.needsLights=Hx(R),N.lightsStateVersion=Me,N.needsLights&&(Ne.ambientLightColor.value=Q.state.ambient,Ne.lightProbe.value=Q.state.probe,Ne.directionalLights.value=Q.state.directional,Ne.directionalLightShadows.value=Q.state.directionalShadow,Ne.spotLights.value=Q.state.spot,Ne.spotLightShadows.value=Q.state.spotShadow,Ne.rectAreaLights.value=Q.state.rectArea,Ne.ltc_1.value=Q.state.rectAreaLTC1,Ne.ltc_2.value=Q.state.rectAreaLTC2,Ne.pointLights.value=Q.state.point,Ne.pointLightShadows.value=Q.state.pointShadow,Ne.hemisphereLights.value=Q.state.hemi,Ne.directionalShadowMap.value=Q.state.directionalShadowMap,Ne.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ne.spotShadowMap.value=Q.state.spotShadowMap,Ne.spotLightMatrix.value=Q.state.spotLightMatrix,Ne.spotLightMap.value=Q.state.spotLightMap,Ne.pointShadowMap.value=Q.state.pointShadowMap,Ne.pointShadowMatrix.value=Q.state.pointShadowMatrix);const We=Ie.getUniforms(),$t=Zl.seqWithValue(We.seq,Ne);return N.currentProgram=Ie,N.uniformsList=$t,Ie}function Qh(R,k){const K=xe.get(R);K.outputColorSpace=k.outputColorSpace,K.instancing=k.instancing,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function zx(R,k,K,N,Q){k.isScene!==!0&&(k=se),Ce.resetTextureUnits();const ye=k.fog,Me=N.isMeshStandardMaterial?k.environment:null,Ae=S===null?f.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Mi,Pe=(N.isMeshStandardMaterial?tt:at).get(N.envMap||Me),Ue=N.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ie=!!N.normalMap&&!!K.attributes.tangent,Ne=!!K.morphAttributes.position,We=!!K.morphAttributes.normal,$t=!!K.morphAttributes.color,jn=N.toneMapped?f.toneMapping:Bi,br=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_t=br!==void 0?br.length:0,ze=xe.get(N),ic=v.state.lights;if(z===!0&&(oe===!0||R!==A)){const _n=R===A&&N.id===E;Y.setState(N,R,_n)}let At=!1;N.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ic.state.version||ze.outputColorSpace!==Ae||Q.isInstancedMesh&&ze.instancing===!1||!Q.isInstancedMesh&&ze.instancing===!0||Q.isSkinnedMesh&&ze.skinning===!1||!Q.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Pe||N.fog===!0&&ze.fog!==ye||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Y.numPlanes||ze.numIntersection!==Y.numIntersection)||ze.vertexAlphas!==Ue||ze.vertexTangents!==Ie||ze.morphTargets!==Ne||ze.morphNormals!==We||ze.morphColors!==$t||ze.toneMapping!==jn||le.isWebGL2===!0&&ze.morphTargetsCount!==_t)&&(At=!0):(At=!0,ze.__version=N.version);let Lr=ze.currentProgram;At===!0&&(Lr=Qa(N,k,Q));let Jh=!1,Oo=!1,rc=!1;const Kt=Lr.getUniforms(),Dr=ze.uniforms;if(Se.useProgram(Lr.program)&&(Jh=!0,Oo=!0,rc=!0),N.id!==E&&(E=N.id,Oo=!0),Jh||A!==R){if(Kt.setValue(D,"projectionMatrix",R.projectionMatrix),le.logarithmicDepthBuffer&&Kt.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),A!==R&&(A=R,Oo=!0,rc=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const _n=Kt.map.cameraPosition;_n!==void 0&&_n.setValue(D,q.setFromMatrixPosition(R.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Kt.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||Q.isSkinnedMesh)&&Kt.setValue(D,"viewMatrix",R.matrixWorldInverse)}if(Q.isSkinnedMesh){Kt.setOptional(D,Q,"bindMatrix"),Kt.setOptional(D,Q,"bindMatrixInverse");const _n=Q.skeleton;_n&&(le.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Kt.setValue(D,"boneTexture",_n.boneTexture,Ce),Kt.setValue(D,"boneTextureSize",_n.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const sc=K.morphAttributes;if((sc.position!==void 0||sc.normal!==void 0||sc.color!==void 0&&le.isWebGL2===!0)&&ce.update(Q,K,Lr),(Oo||ze.receiveShadow!==Q.receiveShadow)&&(ze.receiveShadow=Q.receiveShadow,Kt.setValue(D,"receiveShadow",Q.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Dr.envMap.value=Pe,Dr.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Oo&&(Kt.setValue(D,"toneMappingExposure",f.toneMappingExposure),ze.needsLights&&Bx(Dr,rc),ye&&N.fog===!0&&Ot.refreshFogUniforms(Dr,ye),Ot.refreshMaterialUniforms(Dr,N,I,W,ee),Zl.upload(D,ze.uniformsList,Dr,Ce)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Zl.upload(D,ze.uniformsList,Dr,Ce),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Kt.setValue(D,"center",Q.center),Kt.setValue(D,"modelViewMatrix",Q.modelViewMatrix),Kt.setValue(D,"normalMatrix",Q.normalMatrix),Kt.setValue(D,"modelMatrix",Q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const _n=N.uniformsGroups;for(let oc=0,Gx=_n.length;oc<Gx;oc++)if(le.isWebGL2){const ep=_n[oc];me.update(ep,Lr),me.bind(ep,Lr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Lr}function Bx(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Hx(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(R,k,K){xe.get(R.texture).__webglTexture=k,xe.get(R.depthTexture).__webglTexture=K;const N=xe.get(R);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=K===void 0,N.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,k){const K=xe.get(R);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,K=0){S=R,x=k,M=K;let N=!0,Q=null,ye=!1,Me=!1;if(R){const Pe=xe.get(R);Pe.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(D.FRAMEBUFFER,null),N=!1):Pe.__webglFramebuffer===void 0?Ce.setupRenderTarget(R):Pe.__hasExternalTextures&&Ce.rebindTextures(R,xe.get(R.texture).__webglTexture,xe.get(R.depthTexture).__webglTexture);const Ue=R.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Me=!0);const Ie=xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Q=Ie[k],ye=!0):le.isWebGL2&&R.samples>0&&Ce.useMultisampledRTT(R)===!1?Q=xe.get(R).__webglMultisampledFramebuffer:Q=Ie,P.copy(R.viewport),y.copy(R.scissor),w=R.scissorTest}else P.copy(Z).multiplyScalar(I).floor(),y.copy(X).multiplyScalar(I).floor(),w=L;if(Se.bindFramebuffer(D.FRAMEBUFFER,Q)&&le.drawBuffers&&N&&Se.drawBuffers(R,Q),Se.viewport(P),Se.scissor(y),Se.setScissorTest(w),ye){const Pe=xe.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,K)}else if(Me){const Pe=xe.get(R.texture),Ue=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pe.__webglTexture,K||0,Ue)}E=-1},this.readRenderTargetPixels=function(R,k,K,N,Q,ye,Me){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){Se.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const Pe=R.texture,Ue=Pe.format,Ie=Pe.type;if(Ue!==ii&&V.convert(Ue)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ie===Ia&&(Ee.has("EXT_color_buffer_half_float")||le.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ie!==us&&V.convert(Ie)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===qr&&(le.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-N&&K>=0&&K<=R.height-Q&&D.readPixels(k,K,N,Q,V.convert(Ue),V.convert(Ie),ye)}finally{const Pe=S!==null?xe.get(S).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(R,k,K=0){const N=Math.pow(2,-K),Q=Math.floor(k.image.width*N),ye=Math.floor(k.image.height*N);Ce.setTexture2D(k,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,R.x,R.y,Q,ye),Se.unbindTexture()},this.copyTextureToTexture=function(R,k,K,N=0){const Q=k.image.width,ye=k.image.height,Me=V.convert(K.format),Ae=V.convert(K.type);Ce.setTexture2D(K,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,K.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,K.unpackAlignment),k.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,R.x,R.y,Q,ye,Me,Ae,k.image.data):k.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,Me,k.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,N,R.x,R.y,Me,Ae,k.image),N===0&&K.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(R,k,K,N,Q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=R.max.x-R.min.x+1,Me=R.max.y-R.min.y+1,Ae=R.max.z-R.min.z+1,Pe=V.convert(N.format),Ue=V.convert(N.type);let Ie;if(N.isData3DTexture)Ce.setTexture3D(N,0),Ie=D.TEXTURE_3D;else if(N.isDataArrayTexture)Ce.setTexture2DArray(N,0),Ie=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Ne=D.getParameter(D.UNPACK_ROW_LENGTH),We=D.getParameter(D.UNPACK_IMAGE_HEIGHT),$t=D.getParameter(D.UNPACK_SKIP_PIXELS),jn=D.getParameter(D.UNPACK_SKIP_ROWS),br=D.getParameter(D.UNPACK_SKIP_IMAGES),_t=K.isCompressedTexture?K.mipmaps[0]:K.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,R.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,R.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?D.texSubImage3D(Ie,Q,k.x,k.y,k.z,ye,Me,Ae,Pe,Ue,_t.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ie,Q,k.x,k.y,k.z,ye,Me,Ae,Pe,_t.data)):D.texSubImage3D(Ie,Q,k.x,k.y,k.z,ye,Me,Ae,Pe,Ue,_t),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ne),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,We),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$t),D.pixelStorei(D.UNPACK_SKIP_ROWS,jn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,br),Q===0&&N.generateMipmaps&&D.generateMipmap(Ie),Se.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Ce.setTextureCube(R,0):R.isData3DTexture?Ce.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ce.setTexture2DArray(R,0):Ce.setTexture2D(R,0),Se.unbindTexture()},this.resetState=function(){x=0,M=0,S=null,Se.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Re?Jr:mv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jr?Re:Mi}}class mR extends Ov{}mR.prototype.isWebGL1Renderer=!0;class _R extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Au extends Cr{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new O,h=new O,p=[],v=[],m=[],_=[];for(let f=0;f<=i;f++){const g=[],x=f/i;let M=0;f===0&&o===0?M=.5/t:f===i&&l===Math.PI&&(M=-.5/t);for(let S=0;S<=t;S++){const E=S/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+x*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),m.push(h.x,h.y,h.z),_.push(E+M,1-x),g.push(u++)}c.push(g)}for(let f=0;f<i;f++)for(let g=0;g<t;g++){const x=c[f][g+1],M=c[f][g],S=c[f+1][g],E=c[f+1][g+1];(f!==0||o>0)&&p.push(x,M,E),(f!==i-1||l<Math.PI)&&p.push(M,S,E)}this.setIndex(p),this.setAttribute("position",new yi(v,3)),this.setAttribute("normal",new yi(m,3)),this.setAttribute("uv",new yi(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Au(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class A_ extends $a{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_v,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const R_={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class gR{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){const p=u[d],v=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return v}return null}}}const vR=new gR;class Fv{constructor(e){this.manager=e!==void 0?e:vR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class xR extends Fv{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=R_.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Na("img");function l(){c(),R_.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class C_ extends Fv{constructor(e){super(e)}load(e,t,i,r){const s=new fn,o=new xR(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class kv extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const cf=new Et,P_=new O,b_=new O;class yR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dh,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;P_.setFromMatrixPosition(e.matrixWorld),t.position.copy(P_),b_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(b_),t.updateMatrixWorld(),cf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class SR extends yR{constructor(){super(new Lv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class MR extends kv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new SR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ER extends kv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class L_{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);function Di(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function zv(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},wo={duration:.5,overwrite:!1,delay:0},Nh,jt,vt,zn=1e8,qe=1/zn,Sd=Math.PI*2,TR=Sd/4,wR=0,Bv=Math.sqrt,AR=Math.cos,RR=Math.sin,Lt=function(e){return typeof e=="string"},ut=function(e){return typeof e=="function"},Xi=function(e){return typeof e=="number"},Oh=function(e){return typeof e>"u"},Ei=function(e){return typeof e=="object"},dn=function(e){return e!==!1},Fh=function(){return typeof window<"u"},kl=function(e){return ut(e)||Lt(e)},Hv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Yt=Array.isArray,Md=/(?:-?\.?\d|\.)+/gi,Gv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ff=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vv=/[+-]=-?[.\d]+/,Wv=/[^,'"\[\]\s]+/gi,CR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,it,Un,Ed,kh,Rn={},Ru={},Xv,jv=function(e){return(Ru=hs(e,Rn))&&mn},zh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Cu=function(e,t){return!t&&console.warn(e)},Yv=function(e,t){return e&&(Rn[e]=t)&&Ru&&(Ru[e]=t)||Rn},Oa=function(){return 0},PR={suppressEvents:!0,isStart:!0,kill:!1},Ql={suppressEvents:!0,kill:!1},bR={suppressEvents:!0},Bh={},vr=[],Td={},qv,Sn={},df={},D_=30,Jl=[],Hh="",Gh=function(e){var t=e[0],i,r;if(Ei(t)||ut(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Jl.length;r--&&!Jl[r].targetTest(t););i=Jl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new vx(e[r],i)))||e.splice(r,1);return e},ts=function(e){return e._gsap||Gh(Bn(e))[0]._gsap},$v=function(e,t,i){return(i=e[t])&&ut(i)?e[t]():Oh(i)&&e.getAttribute&&e.getAttribute(t)||i},hn=function(e,t){return(e=e.split(",")).forEach(t)||e},ht=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},co=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},LR=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Pu=function(){var e=vr.length,t=vr.slice(0),i,r;for(Td={},vr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Kv=function(e,t,i,r){vr.length&&!jt&&Pu(),e.render(t,i,r||jt&&t<0&&(e._initted||e._startAt)),vr.length&&!jt&&Pu()},Zv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Wv).length<2?t:Lt(e)?e.trim():e},Qv=function(e){return e},Xn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},DR=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},hs=function(e,t){for(var i in t)e[i]=t[i];return e},U_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ei(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},bu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},ha=function(e){var t=e.parent||it,i=e.keyframes?DR(Yt(e.keyframes)):Xn;if(dn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},UR=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Jv=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},ec=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Er=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ns=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},IR=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},wd=function(e,t,i,r){return e._startAt&&(jt?e._startAt.revert(Ql):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},NR=function n(e){return!e||e._ts&&n(e.parent)},I_=function(e){return e._repeat?Ao(e._tTime,e=e.duration()+e._rDelay)*e:0},Ao=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Lu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},tc=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||qe)||0))},nc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ut(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),tc(e),i._dirty||ns(i,e)),e},ex=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=Lu(e.rawTime(),t),(!t._dur||Za(0,t.totalDuration(),i)-t._tTime>qe)&&t.render(i,!0)),ns(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-qe}},pi=function(e,t,i,r){return t.parent&&Er(t),t._start=Ut((Xi(i)?i:i||e!==it?Dn(e,i,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Jv(e,t,"_first","_last",e._sort?"_start":0),Ad(t)||(e._recent=t),r||ex(e,t),e._ts<0&&nc(e,e._tTime),e},tx=function(e,t){return(Rn.ScrollTrigger||zh("scrollTrigger",t))&&Rn.ScrollTrigger.create(t,e)},nx=function(e,t,i,r,s){if(Wh(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&qv!==Mn.frame)return vr.push(e),e._lazy=[s,r],1},OR=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Ad=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},FR=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&OR(e)&&!(!e._initted&&Ad(e))||(e._ts<0||e._dp._ts<0)&&!Ad(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Za(0,e._tDur,t),c=Ao(l,a),e._yoyo&&c&1&&(o=1-o),c!==Ao(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||jt||r||e._zTime===qe||!t&&e._zTime){if(!e._initted&&nx(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?qe:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&wd(e,t,i,!0),e._onUpdate&&!i&&Hn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Er(e,1),!i&&!jt&&(Hn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kR=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ro=function(e,t,i,r){var s=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ut(o*(s+1)+e._rDelay*s):o,a>0&&!r&&nc(e,e._tTime=e._tDur*a),e.parent&&tc(e),i||ns(e.parent,e),e},N_=function(e){return e instanceof sn?ns(e):Ro(e,e._dur)},zR={_start:0,endTime:Oa,totalDuration:Oa},Dn=function n(e,t,i){var r=e.labels,s=e._recent||zR,o=e.duration()>=zn?s.endTime(!1):e._dur,a,l,u;return Lt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Yt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},pa=function(e,t,i){var r=Xi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=dn(l.vars.inherit)&&l.parent;o.immediateRender=dn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new St(t[0],o,t[s+1])},Pr=function(e,t){return e||e===0?t(e):t},Za=function(e,t,i){return i<e?e:i>t?t:i},Wt=function(e,t){return!Lt(e)||!(t=CR.exec(e))?"":t[1]},BR=function(e,t,i){return Pr(i,function(r){return Za(e,t,r)})},Rd=[].slice,ix=function(e,t){return e&&Ei(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ei(e[0]))&&!e.nodeType&&e!==Un},HR=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Lt(r)&&!t||ix(r,1)?(s=i).push.apply(s,Bn(r)):i.push(r)})||i},Bn=function(e,t,i){return vt&&!t&&vt.selector?vt.selector(e):Lt(e)&&!i&&(Ed||!Co())?Rd.call((t||kh).querySelectorAll(e),0):Yt(e)?HR(e,i):ix(e)?Rd.call(e,0):e?[e]:[]},Cd=function(e){return e=Bn(e)[0]||Cu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Bn(t,i.querySelectorAll?i:i===e?Cu("Invalid scope")||kh.createElement("div"):e)}},rx=function(e){return e.sort(function(){return .5-Math.random()})},sx=function(e){if(ut(e))return e;var t=Ei(e)?e:{each:e},i=is(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return Lt(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,v){var m=(v||t).length,_=o[m],f,g,x,M,S,E,A,P,y;if(!_){if(y=t.grid==="auto"?0:(t.grid||[1,zn])[1],!y){for(A=-zn;A<(A=v[y++].getBoundingClientRect().left)&&y<m;);y--}for(_=o[m]=[],f=l?Math.min(y,m)*c-.5:r%y,g=y===zn?0:l?m*d/y-.5:r/y|0,A=0,P=zn,E=0;E<m;E++)x=E%y-f,M=g-(E/y|0),_[E]=S=u?Math.abs(u==="y"?M:x):Bv(x*x+M*M),S>A&&(A=S),S<P&&(P=S);r==="random"&&rx(_),_.max=A-P,_.min=P,_.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(y>m?m-1:u?u==="y"?m/y:y:Math.max(y,m/y))||0)*(r==="edges"?-1:1),_.b=m<0?s-m:s,_.u=Wt(t.amount||t.each)||0,i=i&&m<0?mx(i):i}return m=(_[h]-_.min)/_.max||0,Ut(_.b+(i?i(m):m)*_.v)+_.u}},Pd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ut(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Xi(i)?0:Wt(i))}},ox=function(e,t){var i=Yt(e),r,s;return!i&&Ei(e)&&(r=i=e.radius||zn,e.values?(e=Bn(e.values),(s=!Xi(e[0]))&&(r*=r)):e=Pd(e.increment)),Pr(t,i?ut(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=zn,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Xi(o)?c:c+Wt(o)}:Pd(e))},ax=function(e,t,i,r){return Pr(Yt(e)?!t:i===!0?!!(i=0):!r,function(){return Yt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},GR=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},VR=function(e,t){return function(i){return e(parseFloat(i))+(t||Wt(i))}},WR=function(e,t,i){return ux(e,t,0,1,i)},lx=function(e,t,i){return Pr(i,function(r){return e[~~t(r)]})},XR=function n(e,t,i){var r=t-e;return Yt(e)?lx(e,n(0,e.length),t):Pr(i,function(s){return(r+(s-e)%r)%r+e})},jR=function n(e,t,i){var r=t-e,s=r*2;return Yt(e)?lx(e,n(0,e.length-1),t):Pr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Fa=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Wv:Md),i+=e.substr(t,r-t)+ax(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},ux=function(e,t,i,r,s){var o=t-e,a=r-i;return Pr(s,function(l){return i+((l-e)/o*a||0)})},YR=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Lt(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Yt(e)&&!Yt(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(v){v*=d;var m=Math.min(h,~~v);return c[m](v-m)},i=t}else r||(e=hs(Yt(e)?[]:{},e));if(!c){for(l in t)Vh.call(a,e,l,"get",t[l]);s=function(v){return Yh(v,a)||(o?e.p:e)}}}return Pr(i,s)},O_=function(e,t,i){var r=e.labels,s=zn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Hn=function(e,t,i){var r=e.vars,s=r[t],o=vt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&vr.length&&Pu(),a&&(vt=a),c=l?s.apply(u,l):s.call(u),vt=o,c},ta=function(e){return Er(e),e.scrollTrigger&&e.scrollTrigger.kill(!!jt),e.progress()<1&&Hn(e,"onInterrupt"),e},Js,cx=[],fx=function(e){if(!Fh()){cx.push(e);return}e=!e.name&&e.default||e;var t=e.name,i=ut(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Oa,render:Yh,add:Vh,kill:uC,modifier:lC,rawVars:0},o={targetTest:0,get:0,getSetter:jh,aliases:{},register:0};if(Co(),e!==r){if(Sn[t])return;Xn(r,Xn(bu(e,s),o)),hs(r.prototype,hs(s,bu(e,o))),Sn[r.prop=t]=r,e.targetTest&&(Jl.push(r),Bh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Yv(t,r),e.register&&e.register(mn,r,pn)},Ye=255,na={aqua:[0,Ye,Ye],lime:[0,Ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ye],navy:[0,0,128],white:[Ye,Ye,Ye],olive:[128,128,0],yellow:[Ye,Ye,0],orange:[Ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ye,0,0],pink:[Ye,192,203],cyan:[0,Ye,Ye],transparent:[Ye,Ye,Ye,0]},hf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ye+.5|0},dx=function(e,t,i){var r=e?Xi(e)?[e>>16,e>>8&Ye,e&Ye]:0:na.black,s,o,a,l,u,c,d,h,p,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),na[e])r=na[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ye,r&Ye,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ye,e&Ye]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Md),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=hf(l+1/3,s,o),r[1]=hf(l,s,o),r[2]=hf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Gv),i&&r.length<4&&(r[3]=1),r}else r=e.match(Md)||na.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/Ye,o=r[1]/Ye,a=r[2]/Ye,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},hx=function(e){var t=[],i=[],r=-1;return e.split(xr).forEach(function(s){var o=s.match(Qs)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},F_=function(e,t,i){var r="",s=(e+r).match(xr),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=dx(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=hx(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(xr,"1").split(Qs),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(xr),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},xr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in na)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),qR=/hsl[a]?\(/,px=function(e){var t=e.join(" "),i;if(xr.lastIndex=0,xr.test(t))return i=qR.test(t),e[1]=F_(e[1],i),e[0]=F_(e[0],i,hx(e[1])),!0},ka,Mn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,v=function m(_){var f=n()-r,g=_===!0,x,M,S,E;if(f>e&&(i+=f-t),r+=f,S=r-i,x=S-o,(x>0||g)&&(E=++d.frame,h=S-d.time*1e3,d.time=S=S/1e3,o+=x+(x>=s?4:s-x),M=1),g||(l=u(m)),M)for(p=0;p<a.length;p++)a[p](S,h,E,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){Xv&&(!Ed&&Fh()&&(Un=Ed=window,kh=Un.document||{},Rn.gsap=mn,(Un.gsapVersions||(Un.gsapVersions=[])).push(mn.version),jv(Ru||Un.GreenSockGlobals||!Un.gsap&&Un||{}),c=Un.requestAnimationFrame,cx.forEach(fx)),l&&d.sleep(),u=c||function(_){return setTimeout(_,o-d.time*1e3+1|0)},ka=1,v(2))},sleep:function(){(c?Un.cancelAnimationFrame:clearTimeout)(l),ka=0,u=Oa},lagSmoothing:function(_,f){e=_||1/0,t=Math.min(f||33,e)},fps:function(_){s=1e3/(_||240),o=d.time*1e3+s},add:function(_,f,g){var x=f?function(M,S,E,A){_(M,S,E,A),d.remove(x)}:_;return d.remove(_),a[g?"unshift":"push"](x),Co(),x},remove:function(_,f){~(f=a.indexOf(_))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),Co=function(){return!ka&&Mn.wake()},ke={},$R=/^[\d.\-M][\d.\-,\s]/,KR=/["']/g,ZR=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(KR,"").trim():+u,r=l.substr(a+1).trim();return t},QR=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},JR=function(e){var t=(e+"").split("("),i=ke[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[ZR(t[1])]:QR(e).split(",").map(Zv)):ke._CE&&$R.test(e)?ke._CE("",e):i},mx=function(e){return function(t){return 1-e(1-t)}},_x=function n(e,t){for(var i=e._first,r;i;)i instanceof sn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},is=function(e,t){return e&&(ut(e)?e:ke[e]||JR(e))||t},gs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return hn(e,function(a){ke[a]=Rn[a]=s,ke[o=a.toLowerCase()]=i;for(var l in s)ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ke[a+"."+l]=s[l]}),s},gx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},pf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Sd*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*RR((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:gx(a);return s=Sd/s,l.config=function(u,c){return n(e,u,c)},l},mf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:gx(i);return r.config=function(s){return n(e,s)},r};hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;gs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ke.Linear.easeNone=ke.none=ke.Linear.easeIn;gs("Elastic",pf("in"),pf("out"),pf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};gs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);gs("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});gs("Circ",function(n){return-(Bv(1-n*n)-1)});gs("Sine",function(n){return n===1?1:-AR(n*TR)+1});gs("Back",mf("in"),mf("out"),mf());ke.SteppedEase=ke.steps=Rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-qe;return function(a){return((r*Za(0,o,a)|0)+s)*i}}};wo.ease=ke["quad.out"];hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Hh+=n+","+n+"Params,"});var vx=function(e,t){this.id=wR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$v,this.set=t?t.getSetter:jh},Po=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ro(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),ka||Mn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ro(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Co(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(nc(this,i),!s._dp||s.parent||ex(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&pi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===qe||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Kv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+I_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+I_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ao(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-qe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Lu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-qe?0:this._rts,this.totalTime(Za(-Math.abs(this._delay),this._tDur,r),!0),tc(this),IR(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Co(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qe&&(this._tTime-=qe)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&pi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(dn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=bR);var r=jt;return jt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),jt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,N_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,N_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Dn(this,i),dn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,dn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-qe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-qe,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-qe)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=ut(i)?i:Qv,a=function(){var u=r.then;r.then=null,ut(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){ta(this)},n}();Xn(Po.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qe,_prom:0,_ps:!1,_rts:1});var sn=function(n){zv(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=dn(i.sortChildren),it&&pi(i.parent||it,Di(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&tx(Di(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return pa(0,arguments,this),this},t.from=function(r,s,o){return pa(1,arguments,this),this},t.fromTo=function(r,s,o,a){return pa(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,ha(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new St(r,s,Dn(this,o),1),this},t.call=function(r,s,o){return pi(this,St.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new St(r,o,Dn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,ha(o).immediateRender=dn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,ha(a).immediateRender=dn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ut(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,v,m,_,f,g,x,M,S,E,A;if(this!==it&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,M=this._start,x=this._ts,f=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,_=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(h=Ut(c%_),c===l?(m=this._repeat,h=u):(m=~~(c/_),m&&m===c/_&&(h=u,m--),h>u&&(h=u)),S=Ao(this._tTime,_),!a&&this._tTime&&S!==m&&this._tTime-S*_-this._dur<=0&&(S=m),E&&m&1&&(h=u-h,A=1),m!==S&&!this._lock){var P=E&&S&1,y=P===(E&&m&1);if(m<S&&(P=!P),a=P?0:u,this._lock=1,this.render(a||(A?0:Ut(m*_)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Hn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,y&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;_x(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=kR(this,Ut(a),Ut(h)),g&&(c-=h-(h=g._start))),this._tTime=c,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!m&&(Hn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(v=p._next,(p._act||h>=p._start)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){g=0,v&&(c+=this._zTime=-qe);break}}p=v}else{p=this._last;for(var w=r<0?r:h;p;){if(v=p._prev,(p._act||w<=p._end)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(w-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(w-p._start)*p._ts,s,o||jt&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!f){g=0,v&&(c+=this._zTime=w?-qe:qe);break}}p=v}}if(g&&!s&&(this.pause(),g.render(h>=a?0:-qe)._zTime=h>=a?1:-1,this._ts))return this._start=M,tc(this),this.render(r,s,o);this._onUpdate&&!s&&Hn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Er(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Hn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Xi(s)||(s=Dn(this,s,r)),!(r instanceof Po)){if(Yt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Lt(r))return this.addLabel(r,s);if(ut(r))r=St.delayedCall(0,r);else return this}return this!==r?pi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-zn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof St?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Lt(r)?this.removeLabel(r):ut(r)?this.killTweensOf(r):(ec(this,r),r===this._recent&&(this._recent=this._last),ns(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(Mn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Dn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=St.delayedCall(0,s||Oa,o);return a.data="isPause",this._hasPause=1,pi(this,a,Dn(this,r))},t.removePause=function(r){var s=this._first;for(r=Dn(this,r);s;)s._start===r&&s.data==="isPause"&&Er(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)or!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Bn(r),l=this._first,u=Xi(s),c;l;)l instanceof St?LR(l._targets,a)&&(u?(!or||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Dn(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,v=St.to(o,Xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||qe,onStart:function(){if(o.pause(),!p){var _=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());v._dur!==_&&Ro(v,_,0,1).render(v._time,!0,!0),p=1}c&&c.apply(v,d||[])}},s));return h?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Xn({startAt:{time:Dn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),O_(this,Dn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),O_(this,Dn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+qe)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return ns(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ns(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=zn,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,pi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ro(o,o===it&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(it._ts&&(Kv(it,Lu(r,it)),qv=Mn.frame),Mn.frame>=D_){D_+=wn.autoSleep||120;var s=it._first;if((!s||!s._ts)&&wn.autoSleep&&Mn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Mn.sleep()}}},e}(Po);Xn(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var eC=function(e,t,i,r,s,o,a){var l=new pn(this._pt,e,t,0,1,Tx,null,s),u=0,c=0,d,h,p,v,m,_,f,g;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Fa(r)),o&&(g=[i,r],o(g,e,t),i=g[0],r=g[1]),h=i.match(ff)||[];d=ff.exec(r);)v=d[0],m=r.substring(u,d.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),v!==h[c++]&&(_=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:_,c:v.charAt(1)==="="?co(_,v)-_:parseFloat(v)-_,m:p&&p<4?Math.round:0},u=ff.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Vv.test(r)||f)&&(l.e=0),this._pt=l,l},Vh=function(e,t,i,r,s,o,a,l,u,c){ut(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:ut(d)?u?e[t.indexOf("set")||!ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=ut(d)?u?sC:Mx:Xh,v;if(Lt(r)&&(~r.indexOf("random(")&&(r=Fa(r)),r.charAt(1)==="="&&(v=co(h,r)+(Wt(h)||0),(v||v===0)&&(r=v))),!c||h!==r||bd)return!isNaN(h*r)&&r!==""?(v=new pn(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?aC:Ex,0,p),u&&(v.fp=u),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&zh(t,r),eC.call(this,e,t,h,r,p,l||wn.stringFilter,u))},tC=function(e,t,i,r,s){if(ut(e)&&(e=ma(e,s,t,i,r)),!Ei(e)||e.style&&e.nodeType||Yt(e)||Hv(e))return Lt(e)?ma(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=ma(e[a],s,t,i,r);return o},xx=function(e,t,i,r,s,o){var a,l,u,c;if(Sn[e]&&(a=new Sn[e]).init(s,a.rawVars?t[e]:tC(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new pn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Js))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},or,bd,Wh=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.onUpdateParams,d=r.callbackScope,h=r.runBackwards,p=r.yoyoEase,v=r.keyframes,m=r.autoRevert,_=e._dur,f=e._startAt,g=e._targets,x=e.parent,M=x&&x.data==="nested"?x.vars.targets:g,S=e._overwrite==="auto"&&!Nh,E=e.timeline,A,P,y,w,H,W,I,F,B,Z,X,L,G;if(E&&(!v||!s)&&(s="none"),e._ease=is(s,wo.ease),e._yEase=p?mx(is(p===!0?s:p,wo.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!r.runBackwards,!E||v&&!r.stagger){if(F=g[0]?ts(g[0]).harness:0,L=F&&r[F.prop],A=bu(r,Bh),f&&(f._zTime<0&&f.progress(1),t<0&&h&&a&&!m?f.render(-1,!0):f.revert(h&&_?Ql:PR),f._lazy=0),o){if(Er(e._startAt=St.set(g,Xn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!f&&dn(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:d,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt||!a&&!m)&&e._startAt.revert(Ql),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&_&&!f){if(t&&(a=!1),y=Xn({overwrite:!1,data:"isFromStart",lazy:a&&!f&&dn(l),immediateRender:a,stagger:0,parent:x},A),L&&(y[F.prop]=L),Er(e._startAt=St.set(g,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jt?e._startAt.revert(Ql):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,qe,qe);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&dn(l)||l&&!_,P=0;P<g.length;P++){if(H=g[P],I=H._gsap||Gh(g)[P]._gsap,e._ptLookup[P]=Z={},Td[I.id]&&vr.length&&Pu(),X=M===g?P:M.indexOf(H),F&&(B=new F).init(H,L||A,e,X,M)!==!1&&(e._pt=w=new pn(e._pt,H,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(z){Z[z]=w}),B.priority&&(W=1)),!F||L)for(y in A)Sn[y]&&(B=xx(y,A,e,X,H,M))?B.priority&&(W=1):Z[y]=w=Vh.call(e,H,y,"get",A[y],X,M,0,r.stringFilter);e._op&&e._op[P]&&e.kill(H,e._op[P]),S&&e._pt&&(or=e,it.killTweensOf(H,Z,e.globalTime(t)),G=!e.parent,or=0),e._pt&&l&&(Td[I.id]=1)}W&&wx(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!G,v&&t<=0&&E.render(zn,!0,!0)},nC=function(e,t,i,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,d,h;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return bd=1,e.vars[t]="+=0",Wh(e,a),bd=0,1;l.push(u)}for(h=l.length;h--;)c=l[h],u=c._pt||c,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,c.e&&(c.e=ht(i)+Wt(c.e)),c.b&&(c.b=u.s+Wt(c.b))},iC=function(e,t){var i=e[0]?ts(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=hs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},rC=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Yt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ma=function(e,t,i,r,s){return ut(e)?e.call(t,i,r,s):Lt(e)&&~e.indexOf("random(")?Fa(e):e},yx=Hh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Sx={};hn(yx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Sx[n]=1});var St=function(n){zv(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:ha(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,v=l.keyframes,m=l.defaults,_=l.scrollTrigger,f=l.yoyoEase,g=r.parent||it,x=(Yt(i)||Hv(i)?Xi(i[0]):"length"in r)?[i]:Bn(i),M,S,E,A,P,y,w,H;if(a._targets=x.length?Gh(x):Cu("GSAP target "+i+" not found. https://greensock.com",!wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,v||h||kl(u)||kl(c)){if(r=a.vars,M=a.timeline=new sn({data:"nested",defaults:m||{},targets:g&&g.data==="nested"?g.vars.targets:x}),M.kill(),M.parent=M._dp=Di(a),M._start=0,h||kl(u)||kl(c)){if(A=x.length,w=h&&sx(h),Ei(h))for(P in h)~yx.indexOf(P)&&(H||(H={}),H[P]=h[P]);for(S=0;S<A;S++)E=bu(r,Sx),E.stagger=0,f&&(E.yoyoEase=f),H&&hs(E,H),y=x[S],E.duration=+ma(u,Di(a),S,y,x),E.delay=(+ma(c,Di(a),S,y,x)||0)-a._delay,!h&&A===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),M.to(y,E,w?w(S,y,x):0),M._ease=ke.none;M.duration()?u=c=0:a.timeline=0}else if(v){ha(Xn(M.vars.defaults,{ease:"none"})),M._ease=is(v.ease||r.ease||"none");var W=0,I,F,B;if(Yt(v))v.forEach(function(Z){return M.to(x,Z,">")}),M.duration();else{E={};for(P in v)P==="ease"||P==="easeEach"||rC(P,v[P],E,v.easeEach);for(P in E)for(I=E[P].sort(function(Z,X){return Z.t-X.t}),W=0,S=0;S<I.length;S++)F=I[S],B={ease:F.e,duration:(F.t-(S?I[S-1].t:0))/100*u},B[P]=F.v,M.to(x,B,W),W+=B.duration;M.duration()<u&&M.to({},{duration:u-M.duration()})}}u||a.duration(u=M.duration())}else a.timeline=0;return p===!0&&!Nh&&(or=Di(a),it.killTweensOf(x),or=0),pi(g,Di(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!v&&a._start===Ut(g._time)&&dn(d)&&NR(Di(a))&&g.data!=="nested")&&(a._tTime=-qe,a.render(Math.max(0,-c)||0)),_&&tx(Di(a),_),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-qe&&!c?l:r<qe?0:r,h,p,v,m,_,f,g,x,M;if(!u)FR(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=d,x=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,o);if(h=Ut(d%m),d===l?(v=this._repeat,h=u):(v=~~(d/m),v&&v===d/m&&(h=u,v--),h>u&&(h=u)),f=this._yoyo&&v&1,f&&(M=this._yEase,h=u-h),_=Ao(this._tTime,m),h===a&&!o&&this._initted)return this._tTime=d,this;v!==_&&(x&&this._yEase&&_x(x,f),this.vars.repeatRefresh&&!f&&!this._lock&&(this._lock=o=1,this.render(Ut(m*v),!0).invalidate()._lock=0))}if(!this._initted){if(nx(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=g=(M||this._ease)(h/u),this._from&&(this.ratio=g=1-g),h&&!a&&!s&&!v&&(Hn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(g,p.d),p=p._next;x&&x.render(r<0?r:!h&&f?-qe:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&wd(this,r,s,o),Hn(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!s&&this.parent&&Hn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&wd(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Er(this,1),!s&&!(c&&!a)&&(d||a||f)&&(Hn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){ka||Mn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Wh(this,l),u=this._ease(l/this._dur),nC(this,r,s,o,a,u,l)?this.resetTo(r,s,o,a):(nc(this,0),this.parent||Jv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ta(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,or&&or.vars.overwrite!==!0)._first||ta(this),this.parent&&o!==this.timeline.totalDuration()&&Ro(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Bn(r):a,u=this._ptLookup,c=this._pt,d,h,p,v,m,_,f;if((!s||s==="all")&&UR(a,l))return s==="all"&&(this._pt=0),ta(this);for(d=this._op=this._op||[],s!=="all"&&(Lt(s)&&(m={},hn(s,function(g){return m[g]=1}),s=m),s=iC(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,v=h,p={}):(p=d[f]=d[f]||{},v=s);for(m in v)_=h&&h[m],_&&((!("kill"in _.d)||_.d.kill(m)===!0)&&ec(this,_,"_pt"),delete h[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&ta(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return pa(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return pa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return it.killTweensOf(r,s,o)},e}(Po);Xn(St.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hn("staggerTo,staggerFrom,staggerFromTo",function(n){St[n]=function(){var e=new sn,t=Rd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Xh=function(e,t,i){return e[t]=i},Mx=function(e,t,i){return e[t](i)},sC=function(e,t,i,r){return e[t](r.fp,i)},oC=function(e,t,i){return e.setAttribute(t,i)},jh=function(e,t){return ut(e[t])?Mx:Oh(e[t])&&e.setAttribute?oC:Xh},Ex=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},aC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Tx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Yh=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},lC=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},uC=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?ec(this,t,"_pt"):t.dep||(i=1),t=r;return!i},cC=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},wx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},pn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Ex,this.d=l||this,this.set=u||Xh,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=cC,this.m=i,this.mt=s,this.tween=r},n}();hn(Hh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Bh[n]=1});Rn.TweenMax=Rn.TweenLite=St;Rn.TimelineLite=Rn.TimelineMax=sn;it=new sn({sortChildren:!1,defaults:wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wn.stringFilter=px;var bo=[],eu={},fC=[],k_=0,_f=function(e){return(eu[e]||fC).map(function(t){return t()})},Ld=function(){var e=Date.now(),t=[];e-k_>2&&(_f("matchMediaInit"),bo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Un.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),_f("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),k_=e,_f("matchMedia"))},Ax=function(){function n(t,i){this.selector=i&&Cd(i),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){ut(i)&&(s=r,r=i,i=ut);var o=this,a=function(){var u=vt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Cd(s)),vt=o,d=r.apply(o,arguments),ut(d)&&o._r.push(d),vt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===ut?a(o):i?o[i]=a:a},e.ignore=function(i){var r=vt;vt=null,i(this),vt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof St&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof Po)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var a=bo.indexOf(this);~a&&bo.splice(a,1)}},e.revert=function(i){this.kill(i||{})},n}(),dC=function(){function n(t){this.contexts=[],this.scope=t}var e=n.prototype;return e.add=function(i,r,s){Ei(i)||(i={matches:i});var o=new Ax(0,s||this.scope),a=o.conditions={},l,u,c;this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Un.matchMedia(i[u]),l&&(bo.indexOf(o)<0&&bo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Ld):l.addEventListener("change",Ld)));return c&&r(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Du={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return fx(r)})},timeline:function(e){return new sn(e)},getTweensOf:function(e,t){return it.getTweensOf(e,t)},getProperty:function(e,t,i,r){Lt(e)&&(e=Bn(e)[0]);var s=ts(e||{}).get,o=i?Qv:Zv;return i==="native"&&(i=""),e&&(t?o((Sn[t]&&Sn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Sn[a]&&Sn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Bn(e),e.length>1){var r=e.map(function(c){return mn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Sn[t],a=ts(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Js._pt=0,d.init(e,i?c+i:c,Js,0,[e]),d.render(1,d),Js._pt&&Yh(1,Js)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=mn.to(e,hs((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return it.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=is(e.ease,wo.ease)),U_(wo,e||{})},config:function(e){return U_(wn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Sn[a]&&!Rn[a]&&Cu(t+" effect requires "+a+" plugin.")}),df[t]=function(a,l,u){return i(Bn(a),Xn(l||{},s),u)},o&&(sn.prototype[t]=function(a,l,u){return this.add(df[t](a,Ei(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ke[e]=is(t)},parseEase:function(e,t){return arguments.length?is(e,t):ke},getById:function(e){return it.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new sn(e),r,s;for(i.smoothChildTiming=dn(e.smoothChildTiming),it.remove(i),i._dp=0,i._time=i._tTime=it._time,r=it._first;r;)s=r._next,(t||!(!r._dur&&r instanceof St&&r.vars.onComplete===r._targets[0]))&&pi(i,r,r._start-r._delay),r=s;return pi(it,i,0),i},context:function(e,t){return e?new Ax(e,t):vt},matchMedia:function(e){return new dC(e)},matchMediaRefresh:function(){return bo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Ld()},addEventListener:function(e,t){var i=eu[e]||(eu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=eu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:XR,wrapYoyo:jR,distribute:sx,random:ax,snap:ox,normalize:WR,getUnit:Wt,clamp:BR,splitColor:dx,toArray:Bn,selector:Cd,mapRange:ux,pipe:GR,unitize:VR,interpolate:YR,shuffle:rx},install:jv,effects:df,ticker:Mn,updateRoot:sn.updateRoot,plugins:Sn,globalTimeline:it,core:{PropTween:pn,globals:Yv,Tween:St,Timeline:sn,Animation:Po,getCache:ts,_removeLinkedListItem:ec,reverting:function(){return jt},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return Nh=e}}};hn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Du[n]=St[n]});Mn.add(sn.updateRoot);Js=Du.to({},{duration:0});var hC=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},pC=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=hC(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},gf=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Lt(s)&&(l={},hn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}pC(a,s)}}}},mn=Du.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)jt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},gf("roundProps",Pd),gf("modifiers"),gf("snap",ox))||Du;St.version=sn.version=mn.version="3.11.5";Xv=1;Fh()&&Co();ke.Power0;ke.Power1;ke.Power2;ke.Power3;ke.Power4;ke.Linear;ke.Quad;ke.Cubic;ke.Quart;ke.Quint;ke.Strong;ke.Elastic;ke.Back;ke.SteppedEase;ke.Bounce;ke.Sine;ke.Expo;ke.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var z_,ar,fo,qh,$r,B_,$h,mC=function(){return typeof window<"u"},ji={},Gr=180/Math.PI,ho=Math.PI/180,Fs=Math.atan2,H_=1e8,Kh=/([A-Z])/g,_C=/(left|right|width|margin|padding|x)/i,gC=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Rx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},SC=function(e,t,i){return e.style[t]=i},MC=function(e,t,i){return e.style.setProperty(t,i)},EC=function(e,t,i){return e._gsap[t]=i},TC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},wC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},AC=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},rt="transform",oi=rt+"Origin",RC=function n(e,t){var i=this,r=this.target,s=r.style;if(e in ji){if(this.tfm=this.tfm||{},e!=="transform")e=_i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Ii(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:Ii(r,e);else return _i.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(rt)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(oi,t,"")),e=rt}(s||t)&&this.props.push(e,t,s[e])},Px=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},CC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Kh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=$h(),(!s||!s.isStart)&&!i[rt]&&(Px(i),r.uncache=1)}},bx=function(e,t){var i={target:e,props:[],revert:CC,save:RC};return e._gsap||mn.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},Lx,Ud=function(e,t){var i=ar.createElementNS?ar.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ar.createElement(e);return i.style?i:ar.createElement(e)},Si=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Kh,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Lo(t)||t,1)||""},G_="O,Moz,ms,Ms,Webkit".split(","),Lo=function(e,t,i){var r=t||$r,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(G_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?G_[o]:"")+e},Id=function(){mC()&&window.document&&(z_=window,ar=z_.document,fo=ar.documentElement,$r=Ud("div")||{style:{}},Ud("div"),rt=Lo(rt),oi=rt+"Origin",$r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Lx=!!Lo("perspective"),$h=mn.core.reverting,qh=1)},vf=function n(e){var t=Ud("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(fo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),fo.removeChild(t),this.style.cssText=s,o},V_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Dx=function(e){var t;try{t=e.getBBox()}catch{t=vf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===vf||(t=vf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+V_(e,["x","cx","x1"])||0,y:+V_(e,["y","cy","y1"])||0,width:0,height:0}:t},Ux=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dx(e))},za=function(e,t){if(t){var i=e.style;t in ji&&t!==oi&&(t=rt),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(Kh,"-$1").toLowerCase())):i.removeAttribute(t)}},lr=function(e,t,i,r,s,o){var a=new pn(e._pt,t,i,0,1,o?Cx:Rx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},W_={deg:1,rad:1,turn:1},PC={grid:1,flex:1},Tr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=$r.style,l=_C.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",v,m,_,f;return r===o||!s||W_[r]||W_[o]?s:(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&Ux(e),(p||o==="%")&&(ji[t]||~t.indexOf("adius"))?(v=f?e.getBBox()[l?"width":"height"]:e[c],ht(p?s/v*d:s/100*v)):(a[l?"width":"height"]=d+(h?o:r),m=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===ar||!m.appendChild)&&(m=ar.body),_=m._gsap,_&&p&&_.width&&l&&_.time===Mn.time&&!_.uncache?ht(s/_.width*d):((p||o==="%")&&!PC[Si(m,"display")]&&(a.position=Si(e,"position")),m===e&&(a.position="static"),m.appendChild($r),v=$r[c],m.removeChild($r),a.position="absolute",l&&p&&(_=ts(m),_.time=Mn.time,_.width=m[c]),ht(h?v*s/d:v&&s?d/v*s:0))))},Ii=function(e,t,i,r){var s;return qh||Id(),t in _i&&t!=="transform"&&(t=_i[t],~t.indexOf(",")&&(t=t.split(",")[0])),ji[t]&&t!=="transform"?(s=Ha(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Iu(Si(e,oi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Uu[t]&&Uu[t](e,t,i)||Si(e,t)||$v(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Tr(e,t,s,i)+i:s},bC=function(e,t,i,r){if(!i||i==="none"){var s=Lo(t,e,1),o=s&&Si(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Si(e,"borderTopColor"))}var a=new pn(this._pt,e.style,t,0,1,Tx),l=0,u=0,c,d,h,p,v,m,_,f,g,x,M,S;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(e.style[t]=r,r=Si(e,t)||r,e.style[t]=i),c=[i,r],px(c),i=c[0],r=c[1],h=i.match(Qs)||[],S=r.match(Qs)||[],S.length){for(;d=Qs.exec(r);)_=d[0],g=r.substring(l,d.index),v?v=(v+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(v=1),_!==(m=h[u++]||"")&&(p=parseFloat(m)||0,M=m.substr((p+"").length),_.charAt(1)==="="&&(_=co(p,_)+M),f=parseFloat(_),x=_.substr((f+"").length),l=Qs.lastIndex-x.length,x||(x=x||wn.units[t]||M,l===r.length&&(r+=x,a.e+=x)),M!==x&&(p=Tr(e,t,m,x)||0),a._pt={_next:a._pt,p:g||u===1?g:",",s:p,c:f-p,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Cx:Rx;return Vv.test(r)&&(a.e=0),this._pt=a,a},X_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},LC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=X_[i]||i,t[1]=X_[r]||r,t.join(" ")},DC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],ji[a]&&(l=1,a=a==="transformOrigin"?oi:rt),za(i,a);l&&(za(i,rt),o&&(o.svg&&i.removeAttribute("transform"),Ha(i,1),o.uncache=1,Px(r)))}},Uu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new pn(e._pt,t,i,0,0,DC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ba=[1,0,0,1,0,0],Ix={},Nx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},j_=function(e){var t=Si(e,rt);return Nx(t)?Ba:t.substr(7).match(Gv).map(ht)},Zh=function(e,t){var i=e._gsap||ts(e),r=e.style,s=j_(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ba:s):(s===Ba&&!e.offsetParent&&e!==fo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,fo.appendChild(e)),s=j_(e),l?r.display=l:za(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):fo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nd=function(e,t,i,r,s,o){var a=e._gsap,l=s||Zh(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],v=l[1],m=l[2],_=l[3],f=l[4],g=l[5],x=t.split(" "),M=parseFloat(x[0])||0,S=parseFloat(x[1])||0,E,A,P,y;i?l!==Ba&&(A=p*_-v*m)&&(P=M*(_/A)+S*(-m/A)+(m*g-_*f)/A,y=M*(-v/A)+S*(p/A)-(p*g-v*f)/A,M=P,S=y):(E=Dx(e),M=E.x+(~x[0].indexOf("%")?M/100*E.width:M),S=E.y+(~(x[1]||x[0]).indexOf("%")?S/100*E.height:S)),r||r!==!1&&a.smooth?(f=M-u,g=S-c,a.xOffset=d+(f*p+g*m)-f,a.yOffset=h+(f*v+g*_)-g):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=S,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[oi]="0px 0px",o&&(lr(o,a,"xOrigin",u,M),lr(o,a,"yOrigin",c,S),lr(o,a,"xOffset",d,a.xOffset),lr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+S)},Ha=function(e,t){var i=e._gsap||new vx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Si(e,oi)||"0",c,d,h,p,v,m,_,f,g,x,M,S,E,A,P,y,w,H,W,I,F,B,Z,X,L,G,z,oe,ee,j,q,se;return c=d=h=m=_=f=g=x=M=0,p=v=1,i.svg=!!(e.getCTM&&Ux(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[rt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[rt]!=="none"?l[rt]:"")),r.scale=r.rotate=r.translate="none"),A=Zh(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Nd(e,X||u,!!X||i.originIsAbsolute,i.smooth!==!1,A)),S=i.xOrigin||0,E=i.yOrigin||0,A!==Ba&&(H=A[0],W=A[1],I=A[2],F=A[3],c=B=A[4],d=Z=A[5],A.length===6?(p=Math.sqrt(H*H+W*W),v=Math.sqrt(F*F+I*I),m=H||W?Fs(W,H)*Gr:0,g=I||F?Fs(I,F)*Gr+m:0,g&&(v*=Math.abs(Math.cos(g*ho))),i.svg&&(c-=S-(S*H+E*I),d-=E-(S*W+E*F))):(se=A[6],j=A[7],z=A[8],oe=A[9],ee=A[10],q=A[11],c=A[12],d=A[13],h=A[14],P=Fs(se,ee),_=P*Gr,P&&(y=Math.cos(-P),w=Math.sin(-P),X=B*y+z*w,L=Z*y+oe*w,G=se*y+ee*w,z=B*-w+z*y,oe=Z*-w+oe*y,ee=se*-w+ee*y,q=j*-w+q*y,B=X,Z=L,se=G),P=Fs(-I,ee),f=P*Gr,P&&(y=Math.cos(-P),w=Math.sin(-P),X=H*y-z*w,L=W*y-oe*w,G=I*y-ee*w,q=F*w+q*y,H=X,W=L,I=G),P=Fs(W,H),m=P*Gr,P&&(y=Math.cos(P),w=Math.sin(P),X=H*y+W*w,L=B*y+Z*w,W=W*y-H*w,Z=Z*y-B*w,H=X,B=L),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,f=180-f),p=ht(Math.sqrt(H*H+W*W+I*I)),v=ht(Math.sqrt(Z*Z+se*se)),P=Fs(B,Z),g=Math.abs(P)>2e-4?P*Gr:0,M=q?1/(q<0?-q:q):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Nx(Si(e,rt)),X&&e.setAttribute("transform",X))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(p*=-1,g+=m<=0?180:-180,m+=m<=0?180:-180):(v*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=ht(p),i.scaleY=ht(v),i.rotation=ht(m)+a,i.rotationX=ht(_)+a,i.rotationY=ht(f)+a,i.skewX=g+a,i.skewY=x+a,i.transformPerspective=M+o,(i.zOrigin=parseFloat(u.split(" ")[2])||0)&&(r[oi]=Iu(u)),i.xOffset=i.yOffset=0,i.force3D=wn.force3D,i.renderTransform=i.svg?IC:Lx?Ox:UC,i.uncache=0,i},Iu=function(e){return(e=e.split(" "))[0]+" "+e[1]},xf=function(e,t,i){var r=Wt(t);return ht(parseFloat(t)+parseFloat(Tr(e,"x",i+"px",r)))+r},UC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ox(e,t)},Or="0deg",$o="0px",Fr=") ",Ox=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,v=i.scaleX,m=i.scaleY,_=i.transformPerspective,f=i.force3D,g=i.target,x=i.zOrigin,M="",S=f==="auto"&&e&&e!==1||f===!0;if(x&&(d!==Or||c!==Or)){var E=parseFloat(c)*ho,A=Math.sin(E),P=Math.cos(E),y;E=parseFloat(d)*ho,y=Math.cos(E),o=xf(g,o,A*y*-x),a=xf(g,a,-Math.sin(E)*-x),l=xf(g,l,P*y*-x+x)}_!==$o&&(M+="perspective("+_+Fr),(r||s)&&(M+="translate("+r+"%, "+s+"%) "),(S||o!==$o||a!==$o||l!==$o)&&(M+=l!==$o||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Fr),u!==Or&&(M+="rotate("+u+Fr),c!==Or&&(M+="rotateY("+c+Fr),d!==Or&&(M+="rotateX("+d+Fr),(h!==Or||p!==Or)&&(M+="skew("+h+", "+p+Fr),(v!==1||m!==1)&&(M+="scale("+v+", "+m+Fr),g.style[rt]=M||"translate(0, 0)"},IC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,v=i.xOrigin,m=i.yOrigin,_=i.xOffset,f=i.yOffset,g=i.forceCSS,x=parseFloat(o),M=parseFloat(a),S,E,A,P,y;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ho,u*=ho,S=Math.cos(l)*d,E=Math.sin(l)*d,A=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(c*=ho,y=Math.tan(u-c),y=Math.sqrt(1+y*y),A*=y,P*=y,c&&(y=Math.tan(c),y=Math.sqrt(1+y*y),S*=y,E*=y)),S=ht(S),E=ht(E),A=ht(A),P=ht(P)):(S=d,P=h,E=A=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=Tr(p,"x",o,"px"),M=Tr(p,"y",a,"px")),(v||m||_||f)&&(x=ht(x+v-(v*S+m*A)+_),M=ht(M+m-(v*E+m*P)+f)),(r||s)&&(y=p.getBBox(),x=ht(x+r/100*y.width),M=ht(M+s/100*y.height)),y="matrix("+S+","+E+","+A+","+P+","+x+","+M+")",p.setAttribute("transform",y),g&&(p.style[rt]=y)},NC=function(e,t,i,r,s){var o=360,a=Lt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Gr:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*H_)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*H_)%o-~~(u/o)*o)),e._pt=h=new pn(e._pt,t,i,r,u,vC),h.e=c,h.u="deg",e._props.push(i),h},Y_=function(e,t){for(var i in t)e[i]=t[i];return e},OC=function(e,t,i){var r=Y_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,v;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[rt]=t,a=Ha(i,1),za(i,rt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[rt],o[rt]=t,a=Ha(i,1),o[rt]=u);for(l in ji)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Wt(u),v=Wt(c),d=p!==v?Tr(i,l,u,v):parseFloat(u),h=parseFloat(c),e._pt=new pn(e._pt,a,l,d,h-d,Dd),e._pt.u=v||0,e._props.push(l));Y_(a,r)};hn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Uu[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(v){return Ii(a,v,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(v,m){return p[v]=h[m]=h[m]||h[(m-1)/2|0]}),a.init(l,p,d)}});var Fx={name:"css",register:Id,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,v,m,_,f,g,x,M,S,E,A,P;qh||Id(),this.styles=this.styles||bx(e),P=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(Sn[m]&&xx(m,t,i,r,e,s)))){if(p=typeof c,v=Uu[m],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Fa(c)),v)v(this,e,m,c,i)&&(A=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",xr.lastIndex=0,xr.test(u)||(_=Wt(u),f=Wt(c)),f?_!==f&&(u=Tr(e,m,u,f)+f):_&&(c+=_),this.add(a,"setProperty",u,c,r,s,0,0,m),o.push(m),P.push(m,0,a[m]);else if(p!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],Lt(u)&&~u.indexOf("random(")&&(u=Fa(u)),Wt(u+"")||(u+=wn.units[m]||Wt(Ii(e,m))||""),(u+"").charAt(1)==="="&&(u=Ii(e,m))):u=Ii(e,m),h=parseFloat(u),g=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),g&&(c=c.substr(2)),d=parseFloat(c),m in _i&&(m==="autoAlpha"&&(h===1&&Ii(e,"visibility")==="hidden"&&d&&(h=0),P.push("visibility",0,a.visibility),lr(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=_i[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in ji,x){if(this.styles.save(m),M||(S=e._gsap,S.renderTransform&&!t.parseTransform||Ha(e,t.parseTransform),E=t.smoothOrigin!==!1&&S.smooth,M=this._pt=new pn(this._pt,a,rt,0,1,S.renderTransform,S,0,-1),M.dep=1),m==="scale")this._pt=new pn(this._pt,S,"scaleY",S.scaleY,(g?co(S.scaleY,g+d):d)-S.scaleY||0,Dd),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){P.push(oi,0,a[oi]),c=LC(c),S.svg?Nd(e,c,0,E,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==S.zOrigin&&lr(this,S,"zOrigin",S.zOrigin,f),lr(this,a,m,Iu(u),Iu(c)));continue}else if(m==="svgOrigin"){Nd(e,c,1,E,0,this);continue}else if(m in Ix){NC(this,S,m,h,g?co(h,g+c):c);continue}else if(m==="smoothOrigin"){lr(this,S,"smooth",S.smooth,c);continue}else if(m==="force3D"){S[m]=c;continue}else if(m==="transform"){OC(this,c,e);continue}}else m in a||(m=Lo(m)||m);if(x||(d||d===0)&&(h||h===0)&&!gC.test(c)&&m in a)_=(u+"").substr((h+"").length),d||(d=0),f=Wt(c)||(m in wn.units?wn.units[m]:_),_!==f&&(h=Tr(e,m,u,f)),this._pt=new pn(this._pt,x?S:a,m,h,(g?co(h,g+d):d)-h,!x&&(f==="px"||m==="zIndex")&&t.autoRound!==!1?yC:Dd),this._pt.u=f||0,_!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=xC);else if(m in a)bC.call(this,e,m,u,g?g+c:c);else if(m in e)this.add(e,m,u||e[m],g?g+c:c,r,s);else if(m!=="parseTransform"){zh(m,c);continue}x||(m in a?P.push(m,0,a[m]):P.push(m,1,u||e[m])),o.push(m)}}A&&wx(this)},render:function(e,t){if(t.tween._time||!$h())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ii,aliases:_i,getSetter:function(e,t,i){var r=_i[t];return r&&r.indexOf(",")<0&&(t=r),t in ji&&t!==oi&&(e._gsap.x||Ii(e,"x"))?i&&B_===i?t==="scale"?TC:EC:(B_=i||{})&&(t==="scale"?wC:AC):e.style&&!Oh(e.style[t])?SC:~t.indexOf("-")?MC:jh(e,t)},core:{_removeProperty:za,_getMatrix:Zh}};mn.utils.checkPrefix=Lo;mn.core.getStyleSaver=bx;(function(n,e,t,i){var r=hn(n+","+e+","+t,function(s){ji[s]=1});hn(e,function(s){wn.units[s]="deg",Ix[s]=1}),_i[r[13]]=n+","+e,hn(i,function(s){var o=s.split(":");_i[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){wn.units[n]="px"});mn.registerPlugin(Fx);var kx=mn.registerPlugin(Fx)||mn;kx.core.Tween;const q_={type:"change"},yf={type:"start"},$_={type:"end"};class FC extends _s{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",Ke),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ke),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(q_),i.update(),s=r.NONE},this.update=function(){const b=new O,J=new fs().setFromUnitVectors(e.up,new O(0,1,0)),V=J.clone().invert(),fe=new O,me=new fs,ge=2*Math.PI;return function(){const _e=i.object.position;b.copy(_e).sub(i.target),b.applyQuaternion(J),a.setFromVector3(b),i.autoRotate&&s===r.NONE&&y(A()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let we=i.minAzimuthAngle,Le=i.maxAzimuthAngle;return isFinite(we)&&isFinite(Le)&&(we<-Math.PI?we+=ge:we>Math.PI&&(we-=ge),Le<-Math.PI?Le+=ge:Le>Math.PI&&(Le-=ge),we<=Le?a.theta=Math.max(we,Math.min(Le,a.theta)):a.theta=a.theta>(we+Le)/2?Math.max(we,a.theta):Math.min(Le,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),b.setFromSpherical(a),b.applyQuaternion(V),_e.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||fe.distanceToSquared(i.object.position)>o||8*(1-me.dot(i.object.quaternion))>o?(i.dispatchEvent(q_),fe.copy(i.object.position),me.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",T),i.domElement.removeEventListener("pointerdown",Ce),i.domElement.removeEventListener("pointercancel",tt),i.domElement.removeEventListener("wheel",He),i.domElement.removeEventListener("pointermove",at),i.domElement.removeEventListener("pointerup",tt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ke),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new L_,l=new L_;let u=1;const c=new O;let d=!1;const h=new De,p=new De,v=new De,m=new De,_=new De,f=new De,g=new De,x=new De,M=new De,S=[],E={};function A(){return 2*Math.PI/60/60*i.autoRotateSpeed}function P(){return Math.pow(.95,i.zoomSpeed)}function y(b){l.theta-=b}function w(b){l.phi-=b}const H=function(){const b=new O;return function(V,fe){b.setFromMatrixColumn(fe,0),b.multiplyScalar(-V),c.add(b)}}(),W=function(){const b=new O;return function(V,fe){i.screenSpacePanning===!0?b.setFromMatrixColumn(fe,1):(b.setFromMatrixColumn(fe,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(V),c.add(b)}}(),I=function(){const b=new O;return function(V,fe){const me=i.domElement;if(i.object.isPerspectiveCamera){const ge=i.object.position;b.copy(ge).sub(i.target);let de=b.length();de*=Math.tan(i.object.fov/2*Math.PI/180),H(2*V*de/me.clientHeight,i.object.matrix),W(2*fe*de/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(H(V*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),W(fe*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function F(b){i.object.isPerspectiveCamera?u/=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*b)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(b){i.object.isPerspectiveCamera?u*=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/b)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(b){h.set(b.clientX,b.clientY)}function X(b){g.set(b.clientX,b.clientY)}function L(b){m.set(b.clientX,b.clientY)}function G(b){p.set(b.clientX,b.clientY),v.subVectors(p,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;y(2*Math.PI*v.x/J.clientHeight),w(2*Math.PI*v.y/J.clientHeight),h.copy(p),i.update()}function z(b){x.set(b.clientX,b.clientY),M.subVectors(x,g),M.y>0?F(P()):M.y<0&&B(P()),g.copy(x),i.update()}function oe(b){_.set(b.clientX,b.clientY),f.subVectors(_,m).multiplyScalar(i.panSpeed),I(f.x,f.y),m.copy(_),i.update()}function ee(b){b.deltaY<0?B(P()):b.deltaY>0&&F(P()),i.update()}function j(b){let J=!1;switch(b.code){case i.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?w(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?w(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(-i.keyPanSpeed,0),J=!0;break}J&&(b.preventDefault(),i.update())}function q(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);h.set(b,J)}}function se(){if(S.length===1)m.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);m.set(b,J)}}function ae(){const b=S[0].pageX-S[1].pageX,J=S[0].pageY-S[1].pageY,V=Math.sqrt(b*b+J*J);g.set(0,V)}function D(){i.enableZoom&&ae(),i.enablePan&&se()}function Te(){i.enableZoom&&ae(),i.enableRotate&&q()}function Ee(b){if(S.length==1)p.set(b.pageX,b.pageY);else{const V=ce(b),fe=.5*(b.pageX+V.x),me=.5*(b.pageY+V.y);p.set(fe,me)}v.subVectors(p,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;y(2*Math.PI*v.x/J.clientHeight),w(2*Math.PI*v.y/J.clientHeight),h.copy(p)}function le(b){if(S.length===1)_.set(b.pageX,b.pageY);else{const J=ce(b),V=.5*(b.pageX+J.x),fe=.5*(b.pageY+J.y);_.set(V,fe)}f.subVectors(_,m).multiplyScalar(i.panSpeed),I(f.x,f.y),m.copy(_)}function Se(b){const J=ce(b),V=b.pageX-J.x,fe=b.pageY-J.y,me=Math.sqrt(V*V+fe*fe);x.set(0,me),M.set(0,Math.pow(x.y/g.y,i.zoomSpeed)),F(M.y),g.copy(x)}function Ge(b){i.enableZoom&&Se(b),i.enablePan&&le(b)}function xe(b){i.enableZoom&&Se(b),i.enableRotate&&Ee(b)}function Ce(b){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",at),i.domElement.addEventListener("pointerup",tt)),Y(b),b.pointerType==="touch"?Ot(b):mt(b))}function at(b){i.enabled!==!1&&(b.pointerType==="touch"?C(b):ct(b))}function tt(b){te(b),S.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",at),i.domElement.removeEventListener("pointerup",tt)),i.dispatchEvent($_),s=r.NONE}function mt(b){let J;switch(b.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case xs.DOLLY:if(i.enableZoom===!1)return;X(b),s=r.DOLLY;break;case xs.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;L(b),s=r.PAN}else{if(i.enableRotate===!1)return;Z(b),s=r.ROTATE}break;case xs.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;Z(b),s=r.ROTATE}else{if(i.enablePan===!1)return;L(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(yf)}function ct(b){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;G(b);break;case r.DOLLY:if(i.enableZoom===!1)return;z(b);break;case r.PAN:if(i.enablePan===!1)return;oe(b);break}}function He(b){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(b.preventDefault(),i.dispatchEvent(yf),ee(b),i.dispatchEvent($_))}function Ke(b){i.enabled===!1||i.enablePan===!1||j(b)}function Ot(b){switch(re(b),S.length){case 1:switch(i.touches.ONE){case ys.ROTATE:if(i.enableRotate===!1)return;q(),s=r.TOUCH_ROTATE;break;case ys.PAN:if(i.enablePan===!1)return;se(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ys.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;D(),s=r.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Te(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(yf)}function C(b){switch(re(b),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ee(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;le(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ge(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xe(b),i.update();break;default:s=r.NONE}}function T(b){i.enabled!==!1&&b.preventDefault()}function Y(b){S.push(b)}function te(b){delete E[b.pointerId];for(let J=0;J<S.length;J++)if(S[J].pointerId==b.pointerId){S.splice(J,1);return}}function re(b){let J=E[b.pointerId];J===void 0&&(J=new De,E[b.pointerId]=J),J.set(b.pageX,b.pageY)}function ce(b){const J=b.pointerId===S[0].pointerId?S[1]:S[0];return E[J.pointerId]}i.domElement.addEventListener("contextmenu",T),i.domElement.addEventListener("pointerdown",Ce),i.domElement.addEventListener("pointercancel",tt),i.domElement.addEventListener("wheel",He,{passive:!1}),this.update()}}const kC="/assets/star2-1fd005dd.jpg",zC=()=>{const n=eo.useRef(null),e=eo.useRef(!0);return eo.useEffect(()=>{const t=new _R,i=new Au(3,64,64),r=new C_,s=r.load("../../earth.jpg"),o=new A_({map:s}),a=new mi(i,o);t.add(a);const l=r.load("../../moon.jpg"),u=new A_({map:l}),c=new Au(1,64,64),d=new mi(c,u);t.add(d),a.position.set(0,0,0),d.position.set(10,0,0);const p=new C_().load(kC);p.mapping=wu,p.magFilter=Gt,t.background=p;const v={width:window.innerWidth,height:window.innerHeight},m=new ER(16777215,.02);t.add(m);const _=new MR(16448204,1);_.position.set(3,0,2),t.add(_);const f=new Fn(45,v.width/v.height,.1,100);f.position.set(0,0,20),t.add(f);const g=new Ov({canvas:n.current});g.setSize(v.width,v.height),g.setPixelRatio(window.devicePixelRatio);const x=new FC(f,g.domElement);x.enableDamping=!0,x.enablePan=!1,x.autoRotate=!0,x.autoRotateSpeed=1;const M=document.querySelector(".moon"),S=document.querySelector(".earth");M.addEventListener("click",()=>{a.position.set(10,0,0),d.position.set(0,0,0),e.current=!1}),S.addEventListener("click",()=>{e.current=!0,a.position.set(0,0,0),d.position.set(10,0,0)});const E=()=>{v.width=window.innerWidth,v.height=window.innerHeight,f.aspect=v.width/v.height,f.updateProjectionMatrix(),g.setSize(v.width,v.height)};window.addEventListener("resize",E);const A=kx.timeline({defaults:{duration:1}});A.fromTo(a.scale,{z:0,x:0,y:0},{z:1,x:1,y:1}),A.fromTo("span",{y:"-100%"},{y:"0%"});const P=()=>{if(a.rotation.y+=5e-4,d.rotation.y+=.01,console.log("rotation"),console.log(e.current),e.current){const w=d.rotation.y;d.position.x=Math.cos(w)*10,d.position.z=Math.sin(w)*10}g.render(t,f),x.update(),window.requestAnimationFrame(P)};P()},[]),Ni.jsxs("div",{children:[Ni.jsxs("span",{className:"navbar",children:[Ni.jsx("div",{className:"earth",children:"Earth"}),Ni.jsx("div",{className:"moon",children:"Moon"})]}),Ni.jsx("canvas",{className:"webgl",ref:n})]})};const BC=()=>Ni.jsx("div",{children:Ni.jsx(zC,{})});Sf.createRoot(document.getElementById("root")).render(Ni.jsx(sy.StrictMode,{children:Ni.jsx(BC,{})}));
