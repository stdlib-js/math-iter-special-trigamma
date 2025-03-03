// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,v,"e-0$1"),r.alternate&&(n=s.call(n,y,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,c,f,l,s,p,v,y,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,v=n.width,y=n.padRight,d=void 0,(d=v-p.length)<0?p:p=y?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(N(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function x(r){var e,t;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var F,I=Object.prototype,T=I.toString,k=I.__defineGetter__,V=I.__defineSetter__,P=I.__lookupGetter__,G=I.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var L=F;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&M.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=B()?function(r){var e,t,n;if(null==r)return R.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return R.call(r)}return n=R.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString;var J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nr="object"==typeof tr?tr:null,or="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!H(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(or)return or;if(rr)return rr;if(er)return er;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=ir.document&&ir.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;$(cr,"REGEXP",fr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var e,t,n,o;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return sr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}$(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(sr));var vr="function"==typeof C||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?pr(r).toLowerCase():e};function yr(r){return"function"===vr(r)}function dr(r){return"number"==typeof r}var gr=Number,br=gr.prototype.toString;var wr=B();function hr(r){return"object"==typeof r&&(r instanceof gr||(wr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function mr(r){return dr(r)||hr(r)}$(mr,"isPrimitive",dr),$(mr,"isObject",hr);var jr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var Ar,_r=Object,Er=Object.getPrototypeOf;Ar=yr(Object.getPrototypeOf)?Er:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Or=Ar;var Sr=Object.prototype;function Nr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!lr(r)}(r)&&(e=function(r){return null==r?null:(r=_r(r),Or(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&yr(e.constructor)&&"[object Function]"===z(e.constructor)&&Z(e,"isPrototypeOf")&&yr(e.isPrototypeOf)&&(e===Sr||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function Ur(r,e,t){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!yr(u.next))throw new TypeError(x("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!yr(e))throw new TypeError(x("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=function(r,e){return Nr(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(x("invalid argument. Options argument must be an object. Value: `%s`.",e))}(n,t),i))throw i;return $(o={},"next",(function(){var t;if(a)return{done:!0};if((t=r.next()).done)return a=!0,t;return{value:dr(t.value)?e(t.value):n.invalid,done:!1}})),$(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),jr&&yr(r[jr])&&$(o,jr,(function(){return Ur(r[jr](),e,n)})),o}var xr=Math.floor;function Fr(r){return r!=r}var Ir=Number.POSITIVE_INFINITY,Tr=gr.NEGATIVE_INFINITY;function kr(r){return r===Ir||r===Tr}var Vr="function"==typeof Uint32Array;var Pr="function"==typeof Uint32Array?Uint32Array:null;var Gr,Lr="function"==typeof Uint32Array?Uint32Array:void 0;Gr=function(){var r,e,t;if("function"!=typeof Pr)return!1;try{e=new Pr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Vr&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var $r=Gr,Cr="function"==typeof Float64Array;var Hr="function"==typeof Float64Array?Float64Array:null;var Wr,Br="function"==typeof Float64Array?Float64Array:void 0;Wr=function(){var r,e,t;if("function"!=typeof Hr)return!1;try{e=new Hr([1,3.14,-3.14,NaN]),t=e,r=(Cr&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Rr=Wr,Mr="function"==typeof Uint8Array;var Zr="function"==typeof Uint8Array?Uint8Array:null;var Xr,Yr="function"==typeof Uint8Array?Uint8Array:void 0;Xr=function(){var r,e,t;if("function"!=typeof Zr)return!1;try{e=new Zr(e=[1,3.14,-3.14,256,257]),t=e,r=(Mr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var zr=Xr,qr="function"==typeof Uint16Array;var Dr="function"==typeof Uint16Array?Uint16Array:null;var Jr,Kr="function"==typeof Uint16Array?Uint16Array:void 0;Jr=function(){var r,e,t;if("function"!=typeof Dr)return!1;try{e=new Dr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(qr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};var Qr,re={uint16:Jr,uint8:zr};(Qr=new re.uint16(1))[0]=4660;var ee=52===new re.uint8(Qr.buffer)[0],te=!0===ee?1:0,ne=new Rr(1),oe=new $r(ne.buffer);function ie(r){return ne[0]=r,oe[te]}function ae(r,e){var t,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*n-r*e))}var ue=-.16666666666666632,ce=.00833333333332249,fe=-.0001984126982985795,le=27557313707070068e-22,se=-2.5050760253406863e-8,pe=1.58969099521155e-10;function ve(r,e){var t,n,o;return t=ce+(o=r*r)*(fe+o*le)+o*(o*o)*(se+o*pe),n=o*r,0===e?r+n*(ue+o*t):r-(o*(.5*e-n*t)-e-n*ue)}var ye,de,ge=2147483647,be=2146435072,we=1048575,he=!0===ee?0:1,me=new Rr(1),je=new $r(me.buffer);!0===ee?(ye=1,de=0):(ye=0,de=1);var Ae={HIGH:ye,LOW:de},_e=new Rr(1),Ee=new $r(_e.buffer),Oe=Ae.HIGH,Se=Ae.LOW;function Ne(r,e){return Ee[Oe]=r,Ee[Se]=e,_e[0]}var Ue,xe,Fe=1023,Ie=1023,Te=-1023,ke=-1074,Ve=2147483648;!0===ee?(Ue=1,xe=0):(Ue=0,xe=1);var Pe={HIGH:Ue,LOW:xe},Ge=new Rr(1),Le=new $r(Ge.buffer),$e=Pe.HIGH,Ce=Pe.LOW;function He(r,e,t,n){return Ge[0]=r,e[n]=Le[$e],e[n+t]=Le[Ce],e}function We(r){return He(r,[0,0],1,0)}$(We,"assign",He);var Be=[0,0];function Re(r,e){var t,n;return We.assign(r,Be,1,0),t=Be[0],t&=ge,n=ie(e),Ne(t|=n&=Ve,Be[1])}var Me=22250738585072014e-324;function Ze(r){return Math.abs(r)}var Xe=4503599627370496;function Ye(r,e,t,n){return Fr(r)||kr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&Ze(r)<Me?(e[n]=r*Xe,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return Ye(r,[0,0],1,0)}),"assign",Ye);var ze=2220446049250313e-31,qe=2148532223,De=[0,0],Je=[0,0];function Ke(r,e){var t,n;return 0===e||0===r||Fr(r)||kr(r)?r:(Ye(r,De,1,0),r=De[0],e+=De[1],e+=function(r){var e=ie(r);return(e=(e&be)>>>20)-Fe|0}(r),e<ke?Re(0,r):e>Ie?r<0?Tr:Ir:(e<=Te?(e+=52,n=ze):n=1,We.assign(r,Je,1,0),t=Je[0],t&=qe,n*Ne(t|=e+Fe<<20,Je[1])))}function Qe(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var rt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],et=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],tt=16777216,nt=5.960464477539063e-8,ot=Qe(20),it=Qe(20),at=Qe(20),ut=Qe(20);function ct(r,e,t,n,o,i,a,u,c){var f,l,s,p,v,y,d,g,b;for(p=i,b=n[t],g=t,v=0;g>0;v++)l=nt*b|0,ut[v]=b-tt*l|0,b=n[g-1]+l,g-=1;if(b=Ke(b,o),b-=8*xr(.125*b),b-=d=0|b,s=0,o>0?(d+=v=ut[t-1]>>24-o,ut[t-1]-=v<<24-o,s=ut[t-1]>>23-o):0===o?s=ut[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,v=0;v<t;v++)g=ut[v],0===f?0!==g&&(f=1,ut[v]=16777216-g):ut[v]=16777215-g;if(o>0)switch(o){case 1:ut[t-1]&=8388607;break;case 2:ut[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=Ke(1,o)))}if(0===b){for(g=0,v=t-1;v>=i;v--)g|=ut[v];if(0===g){for(y=1;0===ut[i-y];y++);for(v=t+1;v<=t+y;v++){for(c[u+v]=rt[a+v],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(v-g)];n[v]=l}return ct(r,e,t+=y,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===ut[t];)t-=1,o-=24;else(b=Ke(b,-o))>=tt?(l=nt*b|0,ut[t]=b-tt*l|0,o+=24,ut[t+=1]=l):ut[t]=0|b;for(l=Ke(1,o),v=t;v>=0;v--)n[v]=l*ut[v],l*=nt;for(v=t;v>=0;v--){for(l=0,y=0;y<=p&&y<=t-v;y++)l+=et[y]*n[v+y];at[t-v]=l}for(l=0,v=t;v>=0;v--)l+=at[v];for(e[0]=0===s?l:-l,l=at[0]-l,v=1;v<=t;v++)l+=at[v];return e[1]=0===s?l:-l,7&d}function ft(r,e,t,n){var o,i,a,u,c,f,l;for(4,(i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)ot[c]=f<0?0:rt[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*ot[a+(c-f)];it[c]=o}return 4,ct(r,e,4,it,u,4,i,a,ot)}var lt=Math.round,st=.6366197723675814,pt=1.5707963267341256,vt=6077100506506192e-26,yt=6077100506303966e-26,dt=20222662487959506e-37,gt=20222662487111665e-37,bt=84784276603689e-45,wt=2047;function ht(r,e,t){var n,o,i,a,u;return i=r-(n=lt(r*st))*pt,a=n*vt,u=e>>20|0,t[0]=i-a,u-(ie(t[0])>>20&wt)>16&&(a=n*dt-((o=i)-(i=o-(a=n*yt))-a),t[0]=i-a,u-(ie(t[0])>>20&wt)>49&&(a=n*bt-((o=i)-(i=o-(a=n*gt))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var mt=0,jt=16777216,At=1.5707963267341256,_t=6077100506506192e-26,Et=2*_t,Ot=3*_t,St=4*_t,Nt=598523,Ut=1072243195,xt=1073928572,Ft=1074752122,It=1074977148,Tt=1075183036,kt=1075388923,Vt=1075594811,Pt=1094263291,Gt=[0,0,0],Lt=[0,0];function $t(r,e){var t,n,o,i,a,u,c;if((o=ie(r)&ge|0)<=Ut)return e[0]=r,e[1]=0,0;if(o<=Ft)return(o&we)===Nt?ht(r,o,e):o<=xt?r>0?(c=r-At,e[0]=c-_t,e[1]=c-e[0]-_t,1):(c=r+At,e[0]=c+_t,e[1]=c-e[0]+_t,-1):r>0?(c=r-2*At,e[0]=c-Et,e[1]=c-e[0]-Et,2):(c=r+2*At,e[0]=c+Et,e[1]=c-e[0]+Et,-2);if(o<=Vt)return o<=Tt?o===It?ht(r,o,e):r>0?(c=r-3*At,e[0]=c-Ot,e[1]=c-e[0]-Ot,3):(c=r+3*At,e[0]=c+Ot,e[1]=c-e[0]+Ot,-3):o===kt?ht(r,o,e):r>0?(c=r-4*At,e[0]=c-St,e[1]=c-e[0]-St,4):(c=r+4*At,e[0]=c+St,e[1]=c-e[0]+St,-4);if(o<Pt)return ht(r,o,e);if(o>=be)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return me[0]=r,je[he]}(r),c=Ne(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Gt[a]=0|c,c=(c-Gt[a])*jt;for(Gt[2]=c,i=3;Gt[i-1]===mt;)i-=1;return u=ft(Gt,Lt,n,i),r<0?(e[0]=-Lt[0],e[1]=-Lt[1],-u):(e[0]=Lt[0],e[1]=Lt[1],u)}var Ct=[0,0],Ht=2147483647,Wt=1072243195,Bt=1044381696,Rt=2146435072;function Mt(r){var e;if(e=ie(r),(e&=Ht)<=Wt)return e<Bt?1:ae(r,0);if(e>=Rt)return NaN;switch(3&$t(r,Ct)){case 0:return ae(Ct[0],Ct[1]);case 1:return-ve(Ct[0],Ct[1]);case 2:return-ae(Ct[0],Ct[1]);default:return ve(Ct[0],Ct[1])}}var Zt=1072243195,Xt=1045430272,Yt=[0,0];function zt(r){var e;if(e=ie(r),(e&=ge)<=Zt)return e<Xt?r:ve(r,0);if(e>=be)return NaN;switch(3&$t(r,Yt)){case 0:return ve(Yt[0],Yt[1]);case 1:return ae(Yt[0],Yt[1]);case 2:return-ve(Yt[0],Yt[1]);default:return-ae(Yt[0],Yt[1])}}var qt=3.141592653589793;var Dt=9.869604401089358;var Jt=3.5584373474121094;function Kt(r){var e,t;return e=0,r<=0?xr(r)===r?NaN:(t=function(r){var e,t;return Fr(r)||kr(r)?NaN:0===(e=Ze(t=r%2))||1===e?Re(0,t):e<.25?zt(qt*t):e<.75?Re(Mt(qt*(e=.5-e)),t):e<1.25?(t=Re(1,t)-t,zt(qt*t)):e<1.75?-Re(Mt(qt*(e-=1.5)),t):(t-=Re(2,t),zt(qt*t))}(r),-Kt(1-r)+Dt/(t*t)):(r<1&&(e=1/(r*r),r+=1),e+=r<=2?(2+function(r){var e,t;return 0===r?-.9999999999999991:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(2.4787778117864288+r*(2.0771415170245513+r*(.8588778991623601+r*(.20499222604410033+r*(.027210314034819473+.001576484902087695*r)))))-.4042133494563989)-5.746577466976647)-7.94125711970499)-4.712373111208652)-.9999999999999991,t=1+r*(4.712373111208634+r*(9.586191186553398+r*(11.094006726982938+r*(8.090754247493278+r*(3.877058901598914+r*(1.2275867870191448+r*(.249092040606385+r*(.02957504139006556+r*(.0015764849020049815+16126405034405948e-31*r)))))))))):(e=.001576484902087695+(r=1/r)*(.027210314034819473+r*(.20499222604410033+r*(.8588778991623601+r*(2.0771415170245513+r*(2.4787778117864288+r*(r*(r*(r*(-.9999999999999991*r-4.712373111208652)-7.94125711970499)-5.746577466976647)-.4042133494563989)))))),t=16126405034405948e-31+r*(.0015764849020049815+r*(.02957504139006556+r*(.249092040606385+r*(1.2275867870191448+r*(3.877058901598914+r*(8.090754247493278+r*(11.094006726982938+r*(9.586191186553398+r*(4.712373111208634+1*r)))))))))),e/t)}(r))/(r*r):r<=4?(Jt+function(r){var e,t;return 0===r?-2.5584373473990794:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(r*(.5154120525543513+r*(.1953783487860643+r*(.03347612826241743+r*(.0023736652059422065+0*r))))-.01914390334056497)-4.466544539286106)-14.797912276547878)-24.925643150482347)-23.9195022162768)-12.283020824054201)-2.5584373473990794,t=1+r*(4.800985584544199+r*(9.992207278431701+r*(11.889614616763133+r*(8.966132566838091+r*(4.4725413614962415+r*(1.4860098202819654+r*(.31957073576676426+r*(.040735834578768094+r*(.0023736652059327163+r*(23955488790352614e-32+-29474924474061867e-34*r))))))))))):(e=0+(r=1/r)*(.0023736652059422065+r*(.03347612826241743+r*(.1953783487860643+r*(.5154120525543513+r*(r*(r*(r*(r*(r*(-2.5584373473990794*r-12.283020824054201)-23.9195022162768)-24.925643150482347)-14.797912276547878)-4.466544539286106)-.01914390334056497))))),t=r*(23955488790352614e-32+r*(.0023736652059327163+r*(.040735834578768094+r*(.31957073576676426+r*(1.4860098202819654+r*(4.4725413614962415+r*(8.966132566838091+r*(11.889614616763133+r*(9.992207278431701+r*(4.800985584544199+1*r))))))))))-29474924474061867e-34),e/t)}(r))/(r*r):r<=8?(1+function(r){var e,t;return 0===r?16662611269702147e-33:((r<0?-r:r)<=1?(e=16662611269702147e-33+r*(.4999999999999977+r*(6.402709450190538+r*(41.38333741550006+r*(166.8033418545628+r*(453.39964786925367+r*(851.153712317697+r*(1097.7065756728507+r*(938.4312324784553+r*(487.26800160465194+119.95344524233573*r))))))))),t=1+r*(12.472085567047449+r*(78.60931297532986+r*(307.47024605031834+r*(805.1406861011516+r*(1439.1201976029215+r*(1735.6105285756048+r*(1348.3250071285634+r*(607.2259858605709+r*(119.95231785727705+.00014016591835503607*r)))))))))):(e=119.95344524233573+(r=1/r)*(487.26800160465194+r*(938.4312324784553+r*(1097.7065756728507+r*(851.153712317697+r*(453.39964786925367+r*(166.8033418545628+r*(41.38333741550006+r*(6.402709450190538+r*(.4999999999999977+16662611269702147e-33*r))))))))),t=.00014016591835503607+r*(119.95231785727705+r*(607.2259858605709+r*(1348.3250071285634+r*(1735.6105285756048+r*(1439.1201976029215+r*(805.1406861011516+r*(307.47024605031834+r*(78.60931297532986+r*(12.472085567047449+1*r)))))))))),e/t)}(1/r))/r:r<=16?(1+function(r){var e,t;return 0===r?-1.848283152741466e-20:((r<0?-r:r)<=1?(e=r*(.5+r*(3.0253386524731334+r*(13.599592751745737+r*(35.31322242830879+r*(67.16394245507142+r*(83.5767733658514+r*(71.07349121223571+r*(35.86215156147256+8.721522316399835*r))))))))-1.848283152741466e-20,t=1+r*(5.717343971612935+r*(25.29340417962044+r*(62.26197679674682+r*(113.955048909239+r*(130.80713832893898+r*(102.42314690233765+r*(44.04247728052452+r*(8.89898032477904+-.029662733687204*r))))))))):(e=8.721522316399835+(r=1/r)*(35.86215156147256+r*(71.07349121223571+r*(83.5767733658514+r*(67.16394245507142+r*(35.31322242830879+r*(13.599592751745737+r*(3.0253386524731334+r*(.5+-1.848283152741466e-20*r)))))))),t=r*(8.89898032477904+r*(44.04247728052452+r*(102.42314690233765+r*(130.80713832893898+r*(113.955048909239+r*(62.26197679674682+r*(25.29340417962044+r*(5.717343971612935+1*r))))))))-.029662733687204),e/t)}(1/r))/r:(1+function(r){var e,t;return 0===r?0:((r<0?-r:r)<=1?(e=0+r*(.5+r*(.34562566988545623+r*(9.628954993608422+r*(3.5936085382439025+r*(49.45959911843888+r*(7.775192373218939+r*(74.4536074488178+r*(2.7520934039706906+r*(23.92923597114717+0*r))))))))),t=1+r*(.3579180064375791+r*(19.138603985070986+r*(.8743490814641436+r*(98.65160974348555+r*(r*(154.31686021625373+r*(r*(60.167913667426475+r*(2.537956362006499*r-13.341484462225642))-40.2026880424379))-16.10519728333829)))))):(e=0+(r=1/r)*(23.92923597114717+r*(2.7520934039706906+r*(74.4536074488178+r*(7.775192373218939+r*(49.45959911843888+r*(3.5936085382439025+r*(9.628954993608422+r*(.34562566988545623+r*(.5+0*r))))))))),t=2.537956362006499+r*(r*(60.167913667426475+r*(r*(154.31686021625373+r*(r*(98.65160974348555+r*(.8743490814641436+r*(19.138603985070986+r*(.3579180064375791+1*r))))-16.10519728333829))-40.2026880424379))-13.341484462225642)),e/t)}(1/r))/r,e)}function Qt(r){return Ur(r,Kt)}export{Qt as default};
//# sourceMappingURL=mod.js.map
