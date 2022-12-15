(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function P(){}function An(c){return c()}function en(){return Object.create(null)}function M(c){c.forEach(An)}function Cn(c){return typeof c=="function"}function Zn(c,n){return c!=c?n==n:c!==n||c&&typeof c=="object"||typeof c=="function"}function $n(c){return Object.keys(c).length===0}function v(c,n){c.appendChild(n)}function hn(c,n,t){c.insertBefore(n,t||null)}function cn(c){c.parentNode&&c.parentNode.removeChild(c)}function Un(c,n){for(let t=0;t<c.length;t+=1)c[t]&&c[t].d(n)}function i(c){return document.createElement(c)}function y(c){return document.createTextNode(c)}function q(){return y(" ")}function G(c,n,t,o){return c.addEventListener(n,t,o),()=>c.removeEventListener(n,t,o)}function A(c,n,t){t==null?c.removeAttribute(n):c.getAttribute(n)!==t&&c.setAttribute(n,t)}function _n(c){return Array.from(c.childNodes)}function I(c,n){n=""+n,c.wholeText!==n&&(c.data=n)}function T(c,n){c.value=n??""}function Sn(c,n,t,o){t===null?c.style.removeProperty(n):c.style.setProperty(n,t,o?"important":"")}function Yn(c,n,t){c.classList[t?"add":"remove"](n)}let tn;function V(c){tn=c}const F=[],fn=[],x=[],sn=[],Tn=Promise.resolve();let E=!1;function Mn(){E||(E=!0,Tn.then(gn))}function K(c){x.push(c)}const O=new Set;let N=0;function gn(){const c=tn;do{for(;N<F.length;){const n=F[N];N++,V(n),Xn(n.$$)}for(V(null),F.length=0,N=0;fn.length;)fn.pop()();for(let n=0;n<x.length;n+=1){const t=x[n];O.has(t)||(O.add(t),t())}x.length=0}while(F.length);for(;sn.length;)sn.pop()();E=!1,O.clear(),V(c)}function Xn(c){if(c.fragment!==null){c.update(),M(c.before_update);const n=c.dirty;c.dirty=[-1],c.fragment&&c.fragment.p(c.ctx,n),c.after_update.forEach(K)}}const Fn=new Set;function Gn(c,n){c&&c.i&&(Fn.delete(c),c.i(n))}function Vn(c,n,t,o){const{fragment:r,after_update:a}=c.$$;r&&r.m(n,t),o||K(()=>{const m=c.$$.on_mount.map(An).filter(Cn);c.$$.on_destroy?c.$$.on_destroy.push(...m):M(m),c.$$.on_mount=[]}),a.forEach(K)}function Qn(c,n){const t=c.$$;t.fragment!==null&&(M(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function Pn(c,n){c.$$.dirty[0]===-1&&(F.push(c),Mn(),c.$$.dirty.fill(0)),c.$$.dirty[n/31|0]|=1<<n%31}function Jn(c,n,t,o,r,a,m,e=[-1]){const Y=tn;V(c);const f=c.$$={fragment:null,ctx:[],props:a,update:P,not_equal:r,bound:en(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(Y?Y.$$.context:[])),callbacks:en(),dirty:e,skip_bound:!1,root:n.target||Y.$$.root};m&&m(f.root);let s=!1;if(f.ctx=t?t(c,n.props||{},(d,p,...l)=>{const b=l.length?l[0]:p;return f.ctx&&r(f.ctx[d],f.ctx[d]=b)&&(!f.skip_bound&&f.bound[d]&&f.bound[d](b),s&&Pn(c,d)),p}):[],f.update(),s=!0,M(f.before_update),f.fragment=o?o(f.ctx):!1,n.target){if(n.hydrate){const d=_n(n.target);f.fragment&&f.fragment.l(d),d.forEach(cn)}else f.fragment&&f.fragment.c();n.intro&&Gn(c.$$.fragment),Vn(c,n.target,n.anchor,n.customElement),gn()}V(Y)}class Hn{$destroy(){Qn(this,1),this.$destroy=P}$on(n,t){if(!Cn(t))return P;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(t),()=>{const r=o.indexOf(t);r!==-1&&o.splice(r,1)}}$set(n){this.$$set&&!$n(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}function Nn(c=""){return Bn(c).reduce((n,t)=>Math.max(n,t),0)}function Wn(c=""){for(var n=Bn(c).sort((r,a)=>a-r),t=0,o=0;o<Math.min(3,n.length);o++)t+=n[o];return t}function Bn(c){var n=[0];return c.split(`
`).forEach(t=>{t?n[n.length-1]+=parseInt(t):n.push(0)}),n}const xn=Object.freeze(Object.defineProperty({__proto__:null,part1:Nn,part2:Wn},Symbol.toStringTag,{value:"Module"}));function yn(c=""){var n={"A X":4,"B X":1,"C X":7,"A Y":8,"B Y":5,"C Y":2,"A Z":3,"B Z":9,"C Z":6};return c.split(`
`).map(t=>n[t]).reduce((t,o)=>t+o)}function kn(c=""){var n={"A X":3,"B X":1,"C X":2,"A Y":4,"B Y":5,"C Y":6,"A Z":8,"B Z":9,"C Z":7};return c.split(`
`).map(t=>n[t]).reduce((t,o)=>t+o)}const On=Object.freeze(Object.defineProperty({__proto__:null,part1:yn,part2:kn},Symbol.toStringTag,{value:"Module"}));function In(c=""){var n=0;return c.split(`
`).forEach(t=>{t=t.trim();for(var o={},r=t.length/2,a=0;a<r;a++)o[t.charAt(a)]=!0;for(var m=r;m<t.length;m++)if(o[t.charAt(m)]){n+=bn(t,m);return}}),n}function En(c=""){var n,t,o=0;return c.split(`
`).forEach((r,a)=>{r=r.trim();var m=a%3;if(m===0){n={};for(var e of r)n[e]=!0}else if(m===1){t={};for(var e of r)n[e]&&(t[e]=!0)}else for(var e of r)if(t[e]){o+=bn(e,0);return}}),o}function bn(c,n){var t=c.charCodeAt(n);return t>95?t-96:t-38}const Kn=Object.freeze(Object.defineProperty({__proto__:null,part1:In,part2:En},Symbol.toStringTag,{value:"Module"}));function n1(c=""){var n=0;return c.split(`
`).forEach(t=>{var[o,r]=t.split(","),[a,m]=o.split("-").map(f=>parseInt(f)),[e,Y]=r.split("-").map(f=>parseInt(f));a<e&&Y>m||e<a&&m>Y||n++}),n}function c1(c=""){var n=0;return c.split(`
`).forEach(t=>{var[o,r]=t.split(","),[a,m]=o.split("-").map(f=>parseInt(f)),[e,Y]=r.split("-").map(f=>parseInt(f));m<e||a>Y||n++}),n}const t1=Object.freeze(Object.defineProperty({__proto__:null,part1:n1,part2:c1},Symbol.toStringTag,{value:"Module"}));function r1(c=""){var n=[];return c.split(`
`).forEach(t=>{if(t.includes("["))for(var o=1;o<t.length;o+=4){var r=(o-1)/4;n[r]||(n[r]=[]);var a=t.charAt(o);a!==" "&&n[r].unshift(a)}if(t.includes("move")){var m=/move (\d+) from (\d+) to (\d+)/.exec(t);if(!m)return;for(var e=parseInt(m[1]),Y=parseInt(m[2])-1,f=parseInt(m[3])-1,o=0;o<e;o++){var s=n[Y].pop();n[f].push(s)}}}),n.map(t=>t[t.length-1]).join("")}function o1(c=""){var n=[];return c.split(`
`).forEach(t=>{if(t.includes("["))for(var o=1;o<t.length;o+=4){var r=(o-1)/4;n[r]||(n[r]=[]);var a=t.charAt(o);a!==" "&&n[r].unshift(a)}if(t.includes("move")){var m=/move (\d+) from (\d+) to (\d+)/.exec(t);if(!m)return;var e=parseInt(m[1]),Y=parseInt(m[2])-1,f=parseInt(m[3])-1,s=n[Y],d=s.splice(s.length-e);n[f]=n[f].concat(d)}}),n.map(t=>t[t.length-1]).join("")}const m1=Object.freeze(Object.defineProperty({__proto__:null,part1:r1,part2:o1},Symbol.toStringTag,{value:"Module"}));function a1(c=""){return jn(c,4)}function e1(c=""){return jn(c,14)}function jn(c,n){for(var t=0,o=0;o<c.length;o++){if(t++,t===n)return o+1;for(var r=1;r<n-t+1;r++)if(c[o]===c[o+r]){t=0;break}}return-1}const Y1=Object.freeze(Object.defineProperty({__proto__:null,part1:a1,part2:e1},Symbol.toStringTag,{value:"Module"}));function f1(c=""){var n=Ln(c),t=rn(n),o=0;return t.forEach(r=>{r.size<1e5&&(o+=r.size)}),o}function s1(c=""){var n=Ln(c),t=rn(n),o=7e7-n.size,r=3e7-o,a=1/0;return t.forEach(m=>{m.size>r&&m.size<a&&(a=m.size)}),a}function nn(c){this.parent=c,this.children={},this.size=0}function d1(c="a",n="1"){this.name=c,this.size=parseInt(n)}function Ln(c){var n=new nn(null),t=n;return c.split(`
`).forEach(o=>{if(o=o.trim(),/^\$ cd /.test(o)){var r=o.substring(5);r==="/"?t=n:r===".."?t=t.parent:t=t.children[r]}else if(!/^\$ ls/.test(o))if(/^dir /.test(o)){var a=o.substring(4);t.children[a]=t.children[a]||new nn(t)}else if(/^\d+ \S+$/.test(o)){var[m,e]=o.split(" ");t.children[e]=t.children[e]||new d1(e,m)}else console.log("err",o);if(!t)return console.log("err",t,n),""}),n}function rn(c,n=[]){n.push(c);var t=0;for(var o in c.children){var r=c.children[o];r instanceof nn&&rn(r,n),t+=r.size}return c.size=t,n}const l1=Object.freeze(Object.defineProperty({__proto__:null,part1:f1,part2:s1},Symbol.toStringTag,{value:"Module"}));function v1(c=""){var n=[];c.split(`
`).forEach((m,e)=>{n[e]=[],m.split("").forEach(Y=>{var f=parseInt(Y);n[e].push({ht:f,viz:!1})})});var t=(m,e=1)=>{for(var Y=-1,f=0;f<m.length;f++){var s=e>0?m[f]:m[m.length-f-1];s.ht>Y&&(s.viz=!0,Y=s.ht)}};n.forEach(m=>t(m)),n.forEach(m=>t(m,-1));for(var o=0;o<n[0].length;o++){var r=n.map(m=>m[o]);t(r),t(r,-1)}var a=0;return n.forEach(m=>{m.forEach(e=>{e.viz&&a++})}),a}function p1(c=""){var n=[];c.split(`
`).forEach((m,e)=>{n[e]=[],m.split("").forEach(Y=>{var f=parseInt(Y);n[e].push({ht:f,score:1})})});var t=0,o=m=>{for(var e=0;e<m.length;e++){for(var Y=m[e],f=0,s=e-1;s>=0;s--){var d=m[s];if(f++,d.ht>=Y.ht)break}for(var p=0,l=e+1;l<m.length;l++){var b=m[l];if(p++,b.ht>=Y.ht)break}Y.score*=f,Y.score*=p,Y.score>t&&(t=Y.score)}};n.forEach(m=>o(m));for(var r=0;r<n[0].length;r++){var a=n.map(m=>m[r]);o(a)}return t}const A1=Object.freeze(Object.defineProperty({__proto__:null,part1:v1,part2:p1},Symbol.toStringTag,{value:"Module"}));function C1(c=""){var n=[0,0],t=[0,0],o={},r=m=>o[m.join(",")]=!0,a={R:[1,0],L:[-1,0],U:[0,1],D:[0,-1]};return r(t),c.split(`
`).forEach((m,e)=>{for(var[Y,f]=m.trim().split(/\s+/),s=a[Y],d=parseInt(f),p=0;p<d;p++)n[0]+=s[0],n[1]+=s[1],Dn(n,t),r(t)}),Object.keys(o).length}function Dn(c,n){var t=c[0]-n[0],o=c[1]-n[1],r=c[0]>n[0]?1:-1,a=c[1]>n[1]?1:-1;t===0||o===0?(Math.abs(t)>1&&(n[0]+=r),Math.abs(o)>1&&(n[1]+=a)):(Math.abs(t)>1||Math.abs(o)>1)&&(n[0]+=r,n[1]+=a)}function h1(c=""){var n=Array.from(Array(10)).map(a=>[0,0]),t={},o=a=>t[a.join(",")]=!0,r={R:[1,0],L:[-1,0],U:[0,1],D:[0,-1]};return o(n[0]),c.split(`
`).forEach((a,m)=>{for(var[e,Y]=a.trim().split(/\s+/),f=r[e],s=parseInt(Y),d=0;d<s;d++){n[0][0]+=f[0],n[0][1]+=f[1];for(var m=1;m<n.length;m++)Dn(n[m-1],n[m]);o(n[n.length-1])}}),Object.keys(t).length}const g1=Object.freeze(Object.defineProperty({__proto__:null,part1:C1,part2:h1},Symbol.toStringTag,{value:"Module"}));function i1(c=""){var n=0,t={20:!0,60:!0,100:!0,140:!0,180:!0,220:!0},o=(m,e)=>{m in t&&(n+=e*m)},r=1,a=1;return c.split(`
`).forEach(m=>{for(var[e,Y]=m.trim().split(/\s+/),f=e==="addx"?2:1;f-- >0;)o(r,a),r++;e==="addx"&&(a+=parseInt(Y))}),n}function B1(c=""){var n="",t=(a,m)=>{var e=(a-1)%40;e===0&&a>1&&(n+=`
`);var Y=Math.abs(e-m);n+=Y<2?"#":"."},o=1,r=1;return c.split(`
`).forEach(a=>{for(var[m,e]=a.trim().split(/\s+/),Y=m==="addx"?2:1;Y-- >0;)t(o,r),o++;m==="addx"&&(r+=parseInt(e))}),n}const b1=Object.freeze(Object.defineProperty({__proto__:null,part1:i1,part2:B1},Symbol.toStringTag,{value:"Module"}));function j1(){this.items=[],this.op=()=>{},this.div=1,this.next=[0,0],this.count=0}function wn(c){var n=[],t=null;return c.split(`
`).forEach(o=>{var r=o.trim().split(/\s+/);if(r[0]==="Monkey")t=new j1,n.push(t);else if(r[0]==="Starting")t.items=r.slice(2).map(e=>parseInt(e));else if(r[0]==="Operation:"){var a=r.pop(),m=r.pop();t.op=(()=>{if(a==="old"){if(m==="+")return Y=>Y+Y;if(m==="*")return Y=>Y*Y;throw"unhandled"}var e=parseInt(a);if(!isNaN(e)){if(m==="+")return Y=>Y+e;if(m==="*")return Y=>Y*e}throw"unhandled"})()}else r[0]==="Test:"?t.div=parseInt(r.pop()):r[1]==="true:"?t.next[0]=parseInt(r.pop()):r[1]==="false:"&&(t.next[1]=parseInt(r.pop()))}),n}function L1(c=""){for(var n=wn(c),t=0;t<20;t++)n.forEach(o=>{o.items.forEach(r=>{o.count++,r=o.op(r),r=Math.floor(r/3);var a=r%o.div===0?0:1,m=o.next[a];n[m].items.push(r)}),o.items=[]});return n.sort((o,r)=>r.count-o.count),n[0].count*n[1].count}function D1(c=""){for(var n=wn(c),t=n.reduce((r,a)=>r*a.div,1),o=0;o<1e4;o++)n.forEach(r=>{r.items.forEach(a=>{r.count++,a=r.op(a),a=a%t;var m=a%r.div===0?0:1,e=r.next[m];n[e].items.push(a)}),r.items=[]});return n.sort((r,a)=>a.count-r.count),n[0].count*n[1].count}const w1=Object.freeze(Object.defineProperty({__proto__:null,part1:L1,part2:D1},Symbol.toStringTag,{value:"Module"}));function qn(c){var n=[-1,-1],t=[-1,-1],o=[];c.split(`
`).forEach((a,m)=>{var e=a.trim().split("").map((Y,f)=>{var s=Y.charCodeAt(0)-96,d=9999;return Y==="S"&&(n=[f,m],s=1),Y==="E"&&(t=[f,m],s=26),{ht:s,steps:d}});o.push(e)});var r=(a,m)=>a<0||a>=o[0].length||m<0||m>=o.length?null:o[m][a];return{start:n,end:t,getData:r}}function q1(c=""){var{start:n,end:t,getData:o}=qn(c);o(...n).steps=0;for(var r=[n],a=(f,s,d,p)=>{var l=o(f,s);if(l){if(l.ht>d+1||l.steps<=p)return;l.steps=p,r.push([f,s])}};r.length>0;){var[m,e]=r.pop(),Y=o(m,e);a(m-1,e,Y.ht,Y.steps+1),a(m+1,e,Y.ht,Y.steps+1),a(m,e-1,Y.ht,Y.steps+1),a(m,e+1,Y.ht,Y.steps+1)}return o(t[0],t[1]).steps}function R1(c=""){var{end:n,getData:t}=qn(c);t(...n).steps=0;for(var o=[n],r=9999,a=(f,s,d,p)=>{var l=t(f,s);if(l){if(l.ht<d-1||l.steps<=p)return;l.steps=p,o.push([f,s]),l.ht===1&&(r=Math.min(r,l.steps))}};o.length>0;){var[m,e]=o.pop(),Y=t(m,e);a(m-1,e,Y.ht,Y.steps+1),a(m+1,e,Y.ht,Y.steps+1),a(m,e-1,Y.ht,Y.steps+1),a(m,e+1,Y.ht,Y.steps+1)}return r}const z1=Object.freeze(Object.defineProperty({__proto__:null,part1:q1,part2:R1},Symbol.toStringTag,{value:"Module"}));function u1(c=""){var n=c.split(`
`).map(o=>o.trim()).filter(o=>o).map(Rn),t=0;return n.forEach((o,r)=>{if(r%2!==0){var a=Q(n[r-1],o);a<0&&(t+=(r+1)/2)}}),t}function Z1(c=""){c+=`
  [[2]]  
  [[6]] `;var n=c.split(`
`).map(o=>o.trim()).filter(o=>o).map(Rn).sort(Q),t=1;return n.forEach((o,r)=>{if(o.length===1&&o[0].length===1){var a=o[0][0];(a===2||a===6)&&(t*=r+1)}}),t}function Q(c,n){if(typeof c=="number")return typeof n=="number"?c-n:Q([c],n);if(typeof n=="number")return Q(c,[n]);for(var t=Math.min(c.length,n.length),o=0;o<t;o++){var r=Q(c[o],n[o]);if(r!==0)return r}return c.length-n.length}function Rn(c){if(c[0]!=="[")throw["err-1",c].join(" ");for(var n=[],t=[n],o=1;o<c.length-1;o++){var r=c[o];if(r!==","){if(r==="]"){t.pop();continue}var a=t[t.length-1];if(r==="["){var m=[];a.push(m),t.push(m);continue}var e=/^\d+/.exec(c.substring(o));if(!e)throw["err-2",o,c].join(" ");a.push(parseInt(e[0])),o+=e.length-1}}return n}const $1=Object.freeze(Object.defineProperty({__proto__:null,part1:u1,part2:Z1},Symbol.toStringTag,{value:"Module"}));function U1(c=""){for(var n=new zn(c),t=0;t<99999;t++)if(n.sandComesToRestAt(500,0)>n.maxY)return t;throw"err"}function _1(c=""){for(var n=new zn(c),t=0;t<99999;t++)if(n.sandComesToRestAt(500,0)<0)return t;throw"err"}function zn(c){var n=[],t=-99999,m=99999,o=(e,Y)=>{n[e]||(n[e]=[]),n[e][Y]=!0,t=Math.max(t,Y)},r=(e,Y)=>Y>=m?!0:n[e]&&n[e][Y]||!1,a=(e,Y,f,s)=>{for(var d=e===f?0:e<f?1:-1,p=Y===s?0:Y<s?1:-1,l=Math.max(Math.abs(e-f),Math.abs(Y-s)),b=0;b<=l;b++)o(e,Y),e+=d,Y+=p};c.split(`
`).forEach(e=>{var Y;e.split("->").forEach((f,s)=>{var d=f.split(",").map(p=>parseInt(p));Y&&a(...Y,...d),Y=d})}),this.maxY=t;var m=t+2;this.sandComesToRestAt=(e,Y)=>{if(r(e,Y))return Y-1;for(var f=0;f<99999;f++){if(!r(e,Y+1)){Y++;continue}if(!r(e-1,Y+1)){e--,Y++;continue}if(!r(e+1,Y+1)){e++,Y++;continue}return o(e,Y),Y}}}const S1=Object.freeze(Object.defineProperty({__proto__:null,part1:U1,part2:_1},Symbol.toStringTag,{value:"Module"}));function T1(c=""){var n=un(c),t=2e6,o=1/0,r=-1/0;return n.forEach(({sx:a,sy:m,dist:e})=>{var Y=e-Math.abs(m-t);Y<0||(o=Math.min(o,a-Y),r=Math.max(r,a+Y))}),r-o}function M1(c=""){for(var n=un(c),t=4e6,o=0;o<=t;o++)for(var r=0;r<=t;r++){var a=n.some(({sx:m,sy:e,dist:Y})=>{var f=Y-Math.abs(e-o);if(!(f<0)){var s=Math.abs(m-r);if(!(s>f))return r=m+f,!0}});if(!!a&&!(r>t))return 4e6*r+o}return"no hits"}function un(c){return c.trim().split(`
`).map(n=>{var t=/Sensor at x=(.+), y=(.+): closest beacon is at x=(.+), y=(.+)/.exec(n.trim());if(!t)throw"?";var[,o,r,a,m]=t.map(Y=>parseInt(Y)),e=Math.abs(a-o)+Math.abs(m-r);return{sx:o,sy:r,dist:e}})}const X1=Object.freeze(Object.defineProperty({__proto__:null,part1:T1,part2:M1},Symbol.toStringTag,{value:"Module"})),F1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),G1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),V1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Q1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),P1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),J1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),H1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),N1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),W1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),x1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),y1=`5557
6663
3952
4750
2271
6653
4406
4256
6871
6720
6248
4518
4987

3931
8484
8418
7221
6057
7458
7336
8299
5058

7862
4603
4837
5209
1427
3766
4454
3664
9580

6306
4457
5653
4466
5949
7420
2789
3053
2060
4009
1580
5870

2128
5160
6167
2810
7342
7388
3945
2653
4605
8023
3736

40312

8527
4368
1291
1159
2869
10302
8489

3268
4846
4747
8406
4839
4459
6374
3271
3072
1600

2279
2628
4570
1688
2989
6512
5511
5544
1312
6497

32986
21583

5607
1597
7704
6719
7585
6676
1192
5987
7336
2079
7280

4148

6518
7660
2690
6461
7436
4628
5750
5493
4000
7290

3774
5553
2325
6203
10506
7826
11499

6237
6275
7370
6287
6289
3980
2487
2940
3886
5351
5284
5486

2847
4282
1406
2164
4119
2192
2714
3284
3712
4202
1970
4411
4923
1388
5883

18803

1928
6016
6197
1979
4905
7112
1161
6888
1069
5311
6516

1584
5300
12695
10561
7101

6773
3213
1419
7280
6258
3784
7195
4572
1776
3631
5141
5722

35830
12586

24120
7285
21865

8286
2284
9964
6966
8529
1732
7069
7603

2980
1294
1763
1127
3544
1944
2551
4883
2383
4987
5327
2181
5165

1271
3831
6168
1025
4525
1932
5048
1729
5620
3160

4380
7712
1062
6575
6162
4085
4349
3289
7887
5063
5381

2461
15992
18018
11701

5122
4067
5335
1348
5188
2544
5413
5187
2936
5375
5271
5428
5804
3715
5431

9156
4489
1512
7481
4781
2086
8862
10687

7919
6487
1580
2369
1676
1572
2426
4760
2315
2904
6901

7781

4581
4869
2229
6614
10209
10156
8618
9215

4418
5394
4140
11367
6771
10724
1838

4086
3703
13922

6051
3842
4012
4978
2260
2208
2565
2662
2407
3249
1424
6033
2676
5779
1890

6888
5074
2200
1935
5163
4753
1612
5907
2653
5737
2015
1598
1210

6424
3083
3843
3611
5730
6310
1126
5686
2632
6358
3755
3578
6413
4916

3305
1155
11374
7940
9522
8508
7054

16430

7611
1656
5390
2790
5899
3484
7949
3770
1129
6751
7018

1136
6501
1650
5910
6188
6706
4212
4210
6942
2182
4581
1616
1827

6805
4212
5129
6550
6026
5586
1368
5150
5532
2703
7420

4022
1740
4549
5441
4252
6012
4271
6433
3891
4834
1511
2557
2755

5021
4120
5400
1420
1374
1629
6026
5247
7136
4684
2429
4177

1175

7380
37112

6602
6327
5195
1177
1390
5927
3491
6915
1075
6057
1787
6485

2270
3902
3708
9428
8982
6407
7183
5277
4268

3545
10390
13855
12280
5499
11256

4933
4652
2658
3954
6757
4162
3830
4592
4799
4038
5185
2842
1254

7643
7897
10471
1573
6236
3197

9201
12063
10635
6938
8051
9420
2378

19093
23159
1779

2571
1929
2304
1288
3915
1683
1267
2892
6105
5699
2965
5931

6538
4946
6944
2793
5478
5918
4851
2753
5589
3210
3782

2975
8187
4221
5897
4451
4712

1651
3396
4928
1315
5059
2733
5976
5712
5231
5265
3382
6022
3994
4624
1717

5932
4950
6105
4468
2588
5392
5155
3211
4291
2685
1314
1338
6323
1632

56490

35520
3508

4873
1896
3256
6461
2819
4000
6126
2677
1253
3991
1797
1298
2357
4919

6855
1235
2862
4477
1979
1022
3391
2991
5345
4000
5014
3030
5471

11627

10096
2454
12493
4138
4539
12769

7464
9654
6701
8883
5239
8018
1929
6280
3452

4202
4306
1980
4353
1857
1942
5272
3635
3983
4139
6300
5743
2913
3140

17538
9430

4111
8312
5325
1439
5521
8910
2754
1723
3145

5619
2024
6780
3535
5354
4258
1842
6802
4033
4872
4795
5794
1247

3708
6991
24763

1336
1869
3843
5305
5896
2380
4354
8098
7027
1600

9008
4226
5845
4783
2981
13637

18048
34155

2158
2728
4373
2168
5492
4587
6183
5712
1427
3765

17712
28932

8718
3165
8511
6567
2194
4605
4879
8336
7471

1083
4551
3912
7798
5739
4384
5966
4583
7690
3910

1253
3778
3733
5180
3134
3646
2973
5935
5516
2668
4114
4594
5960
3004
3723

19271
6681
9460
3291

69894

8124
9292

1190
6057
8065
2473
1639
2271
1294
7019
3245
7390

2785
4056
5548
1566
2432
5546
3348
4566
3980
6329
2568
5677
5419
4314

5412
11296
2990
12309
12835
8833

5678
6882
9550
1151
5200
6760
5030
7319
7920

2073
6640
13815
4913
12031
3949

18529
23066
24003

4724
2793
7348
1023
5582
5407
7809
2942
5853
5214
1062

4813
4608
6199
6798
1855
5642
5916
1420
1583
2314
4623
5471

4257
4250
5751
6838
6563
2673
1530
4960
3920
7405
1075
4059

3381
4158
4751
2209
6659
4780
1008
2774
6275
2996
4533
5304

3392
1384
5534
2962
2771
3970
4395
2863
6683
1273
6858
2139
6957

5467
4223
6720
6441
2238
1533
5809
4655
2969
4292
6337
3154
3836

2802
1318
4028
4453
5955
6470
5629
3499
1961
5072
2276
3481
4052
6396

7524
1036
8480
3074
5500
6945
5897
6492
7556
5640

7230
14327
7415
6350
4860

1466
7043
3529
12211
12412
11492

3369
4999
1374
6342
2802
2941
3900
5964
3642
2175
5622
5425
5800

2979
3672
5333
4098
3021
1424
1679
5424
1745
4265
1841
2716
5306

11005
5937
12008
4420
5637
10592

9308
3108
13264
8125
13257
11024

9574
7475
5550
12130
4270
3221
5813

4020
4074
2895
2349
2640
2079
1038
8085
7173
5863
5685

2858
4323
2796
5877
7113
2333
7167
8064
4286
1268
1710

5905
4123
5583
6104
2763
5274
4808
1760
6606
6691
5051
1526
4290

5639
5851
5677
1499
3865
3502
1869
5608
2214
3805
3046
5680
2425
4423
2620

10292
24730
25190

7576
8485
6945
10024
3448
2799
8338
7638

1128
6102
2641
4500
4154
1560
2226
4152
6451
1335
2606
2257
4248
1927

1798
9671
5368
8742
1124
5578

1970
3725
2771
3582
2632
6142
2579
2146
2388
2269
4118
6112
1737

4635
2925
4434
6757
10349
12954

13448
6825
10103
1056
5495
11490

7494
8483
8060
2450
5281
6389
4832
4009
8451

34284

1603
5707
4767
5658
4811
4826
5170
5817
3597
5636
2812
4373
2901
1307

1486
13828
9856
11238
8720
2019

6235
3218
2243
3504
1922
2448
5649
5571
5321
5896
5801
3298

16648
2946
7150
15822

4082
6361
7159
7250
3244
4956
2497
3582
5322
6447
5371
2097

3697
6605
5261
1991
6182
5617
2118
7340
5825
2862
1702

4314
4229
2169
6275
3786
1121
6957
1337
1332
4989
1844
2178
5812

15539
2282
15518
9604
5838

27639

3214
4879
3533
2352
7107
5906
8017
5251
5414
5382
3647

2692
33924

3209
2672
5418
1903
3886
4947
1776
1235
1591
1239
5098
3302
6063
2818

13709

7734
7653
4415

1666
8435
4478
1519
6902
1635
7825

6651
1576
4934
3478
3321
2203
6682
4807
7456
3215
1489
2297

7800
3507
2392
7693
6398
8654
1700
6329
6906
4895

6724
13961
9520
9359
13472

6652
14619
8763
9602
16258

1241
4308
2894
4673
1527
6369
5143
3759
1870
5124
3588
6547
2498

1791
7613
3504
2538
3030
5815
2233
5444
2441
1007
3379

3552
4921
4066
3719
5667
4850
1634
3690
1119
4882
2004
5276
3094
4641
2747

12424
6884
14048
14023
1167

14032
10399
15054

36358
1107

1571
2482
4176
4617
1345
2409
4293
2630
5182
5619
2478
1867
5272
4378
3740

7622
8215
3888
6528
4642
5321
4188
3362
4888
7881

10689
9236
8990
5172
3808
12090
4886

13681
18086
7314
2323

7660
4072
5256
7493
9843
4037

25993
4860
1582

6486
2017
3122
1325
4295
4719
2723
5058
3755
3442
5051
5075
4872

4914
10902
15299
8897

1127
4276
1756
5614
1418
5097
1592
1895
7080

2115
2568
1336
3705
3724
1700
1609
1828
2414
4237
2338
6012
3032
2218
2208

8849
8568
6400
8410
4368
8764
1427
4127
4178

30490
4142

2030
5111
5745
8679
1943
8202
1285
7558
4016
1522

5831
3090
4335
1437
4821
2113
5094
5944
4673
2596
3864
5259
1871
1608

2199
1764
5142
6643
7190
4835
6581
1405
1658
3792
2250
6073

3870
2483
3951
4182
5446
2685
1091
3962
1047
1610
1527
3222
1911
5104

5426
4663
6726
3699
3174
3624
5484
5948
1354
1236
5775
7090

3546
3444
1385
4869
2456
4604
4077
3552
7176
6813
6997
2902

1677
13997

5167
5967
8185
2651
3727
4484
6003
5162
4850

5218
6379
4277
1597
7423
1074
8715
8456
7021
2336

8958
8689
4334
1060
9038
3588
9339
8979
3346

2575
6747
7542
2648
5594
3696
8934
1751

6196
6698
6136
2850
8180
4098
2881

5732
25560
17361

2901
1622
6652
5704
1146
7084
7118
3471
1666

2406
6393
2230
3030
4327
7405
2547
5892
7341
1722
1612
3218

6903
8864
7636
5110
8870
1217
2648
3657
5840

5989
16071
2219
11769
8755

1648
2098
2757
8375
8655
4497
7677
8314
3619

5323
5392
6638
7142
3855
7531
8756
5909
2428

5567
9816
10210
9465
9301
6144
10073
9933

16283
11551
16041
2127
3410

6921
6847
6005
2213
6929
3604
3729
2111
2870
5211
2879
3116
4096

4863
2555
6330
5701
4633
5732
5706
3555
4386
6518
4218
6123

13295
12444
4812
3646
3392
4269

4394
3424
4545
3162
5525
5268
4625
6719
3657
5607
3709
6378
1544

54079

11984

6538
6184
5782
3642
7797
6854
4210
3231
5819
3244
8018

1558
17824
9560
16295

1208
5757
5575
4905
4640
4377
1847
3419
4671
3182
6184
2672

8700
7999
6570
3211
4908
1469
5401
4840
2924
2854

2166
17731

1535
2635
3175
2678
1217
4326
3518
1611
6389
7438
2615
3146

5043
5895
1419
1226
2417
2537
1698
5144
5937
2387
4113
3673
1124
5076
3166

3098
4831
5860
2784
3187
5113
2336
2667
5178
3327
6020
5811
5782

7997
5018
2443
7044
7292
3564
10170
8878

5202
4184
2615
1187
3642
3379
3477
5152
1712
2903
2769
3805
1979
4902
1198

5861
1860
8082
2990
5096
6764
3090
5473
2580
1452

4315
6801
1335
2474
3566
3067
5804
4057
5492
2849
6533
4677
2386

18899
5787

8958
1159
11750
2269
5522
4240

3265
2730
5316
6167
4144
1824
2753
2016
1286
1999
6176
4520
1521
2450

7213
13737
13559
1264
10959
4193

13793
2804
2170
3728
6751
3108

3104

10079
8735

6035
8147
6401
6153
4028
9294
6355
8167
3844

6599
6319
4326
8388
1409
2321
7996
3887
6073
2778

2849
5674
1635
2067
8804
7444
4775
1568
6278

6823
7466
1008
6783
6258
6584
8655
8072
3086

6043
12126
11498
1832
10190
1530
2192

1614
2820
9718
4461
10396
3606
2481

6036
7966
6674
3059
7310
1138
1974
5574
2907
7896

9037
3659
4092
6191
1896
1986
5991
2290
5726

4208
5969
3220
3588
8793
2797
7843
5187

8513
10633
2236
6997
5444
1620
1021
10020

7180
4727
8226
7912
5481
7611
8852
8035
3168

37280

1710
5518
3890
2648
3111
5237
3741
5613
7738
3520
4885

17182
11752
23068

6680
4747
4916
6825
1181
6707
1076
2361
3399
4805
1663
3463
4772

35202
20846

10406
11741
16051
1157
7483

2827
3431
3324
1781
5418
3182
4725
1022
5403
6308
5990
3219
1495

6314
3800
4825
5057
4397
4182
8213
8160
7795
1063

13147

42635

7219
2962
4108
2347
4155
8715
1685
6921
2164

15675
3583
12653
14222
3991

2363
7410
2143
1091
6713
1412
1099
2242
7544
4937

15772
10228
1020
10845

3682
4323
11915
10229
11727
5173

3365
4295
5082
13629
4173
5848

4324
1921
6222
3428
6022
2250
1170
5026
5168
1261
6274
6142
1250

2571
8209
2334
4244
4228
10666
9860

5584
4728
3012
5794
2321
5837
1252
5151
4842
3557
1980
2061
2743

3604
1299
4017
6001
6568
3675
8039
7628
5977
6430
6212

16156
22045
25960

11109
26000
8491

6540
6302
6140
1644
4311
1184
2320
2920
1251
2939
5130
2011
2711

1667
3628
9498
1778
8394
9324
5849
10744

3036
2127
5374
5864
2650
4093
2326
2657
4305
3766
4749
2265
5303
5515
1109

1443
4494
14241
15696
6478

5404
1527
9780
9950
5559
8421
1375

16733
10347
14682

2913
3592
3393
7007
2276
2047
1320
7350
7874
7183
3394

25380
25324
16859

7300
3697
4423
4902
3917
4646
2016
4472
6660

6756
5563
2641
6879
5437
1179
4055
2195
2732
1254
3605
4191
1482`,k1=`A Y
B Y
B Z
B Z
A Y
C Y
A Y
C Y
A Y
B X
B Y
B Z
A Y
A Y
C Y
C Y
A Y
C Y
B Y
A Y
A Y
C Y
C X
A Y
B Z
C Y
A Y
C Y
A Y
C Y
A Z
A Y
C Y
B Y
A Y
C Y
B X
B Z
C X
B Z
B X
C Y
B Z
A Y
C Y
B X
A Y
A Z
B Y
C Y
A X
C X
C Y
C Y
A Y
C X
A Y
C X
C Y
C Y
A Y
C Y
A Z
A Y
B Z
A Y
A Y
B X
A Y
B Y
A Y
B X
B Y
C Y
A Y
B X
A Y
C X
B Y
A Y
B Z
C Y
C Y
B Y
B Z
B Z
B Y
B Y
A Y
A Y
A Z
C Y
B X
A Y
B Y
A Y
B X
C Y
A Z
C Y
C Y
A Y
A Y
C Y
C Y
B X
A Y
A Y
B X
A Y
C Y
B Z
A Y
B Z
C Y
C X
C Y
B Z
C Y
A Y
A Y
B Y
C X
A X
B X
A Y
C Y
C Y
A Y
A Y
C Y
C Y
A Z
B X
C Y
B X
A Y
C Y
A Y
A Z
C Y
A Y
A Y
A Y
C Y
B X
C Y
A Y
A X
C Y
A Y
B X
C Y
A Y
A Y
B Y
A Y
A Y
C Y
B Y
B X
A Y
A Y
B X
A Y
C Y
A X
C Y
C Y
A Y
B Z
A Y
A Y
C Y
A Y
A Y
C Y
A Z
B Z
A Y
C Y
B X
B X
A Y
A Y
C Y
A Y
A Y
C Y
B Z
B Z
B Y
B Y
A Y
A Y
A Y
A Y
A Y
C X
A Y
A Y
A Y
B Z
C Y
A Y
B Z
A Y
A Y
A Y
B Z
A Z
C X
B X
B Z
B Y
B Y
C Y
C Y
B Y
A Y
C Y
A Y
A Y
C Y
B X
A Y
A X
A Y
A Y
B Z
C Z
A Y
B X
C Y
C Y
A Y
A Z
A Y
C Y
C Y
C Y
A Y
A Y
C Y
C Y
A Y
A Y
A X
A Y
C Y
B X
B Z
C Y
A Y
A X
A Y
C X
C Y
B Z
B Y
A Y
C X
C Y
C Y
C X
C Y
B X
A Y
A Y
A Y
A Z
C Y
A Y
C Y
A Y
B Y
C X
A Y
A Y
A Y
C Y
B Z
A Y
C X
B Y
A Y
B Z
A Y
C Y
C Y
A Y
B Z
C Y
A Z
C Y
A Y
B X
A Y
A Z
A Z
A Z
C Y
C Y
A Z
B Y
A Z
A Y
C X
C Y
A Y
A Y
B Y
A Y
A Y
A Y
B Y
C Y
A Y
C Y
A Y
C X
A Y
A Z
A Y
A Y
A Y
C Y
A Y
C Y
A Y
A Y
C X
A Y
C Y
B Z
C Y
A Y
B Y
A Z
C Y
B Y
A Y
A Y
A Y
A Y
A Y
B Z
B Z
B Z
A X
A Y
B Z
A Y
A Y
C Y
C Y
B Z
A Y
B X
C Y
A Y
A Y
B Y
C Y
B Z
A Y
A Y
A Y
B X
B Y
C Y
A Y
A Y
B X
A Y
B Z
C X
C X
A Y
C Z
C Y
C Y
A Z
B Z
C Y
A Y
A Y
C Y
C Y
C Y
A Y
A X
B Z
A Y
A Y
B Y
B Y
C Y
B Y
B Y
B Z
C Y
C Y
B Y
A Y
C Y
A Y
A Y
B Y
A Y
A X
A Y
B Y
A Y
B Y
C Y
A Y
B Z
A Y
B Y
A Y
A Y
C X
C Y
C X
A Z
C Z
B Y
B Y
C Y
B Y
A Y
A Y
B Y
C Y
C Y
C Y
A Y
B Z
B X
C Y
C Y
A Z
A Z
A Y
A Y
A Y
B Y
A Y
B Y
A Y
B Z
A Z
B Y
C Y
C Y
C Z
B Z
B Y
B X
A Y
B X
B X
B Y
C Y
B Z
A Y
C Y
A Y
C Z
B Y
A Y
A Y
C Y
B Y
C Y
B Y
B Y
A Y
A Y
A Z
C X
A Y
A Y
C Y
A Y
B Z
A Y
A Y
A Y
C Z
C Y
B Z
C Y
B Z
A Y
B Z
B Y
A Y
B Y
A Y
A Y
A Y
A Y
C Y
C Y
C Z
B Y
C Y
C Y
A Y
A Z
A Y
B Z
A Y
C Y
C Y
A Y
A Y
A Y
B Z
A Z
A Y
A Y
A Y
A Y
A Y
B Z
B Z
A Y
A Y
B Z
A Z
A Z
A Y
B Y
B Y
B Z
A Y
B Z
C Y
B Z
B Y
A Y
A Y
C Y
C Y
C Y
A Y
A Y
C Y
C X
C Y
A Y
B Z
A Y
B X
B Y
B Y
B X
A Y
A Z
C Y
B Z
C Y
A Z
A Y
A Y
A Y
C Y
C X
A Y
C Y
A Y
B Z
C Y
A Y
B Z
A Y
C Y
A Y
C Y
B Y
C Y
B X
A Y
A Z
C Y
A Y
C X
C Y
A Y
C Y
A Y
C Y
A Z
B Y
A Y
B Z
C Y
C Z
A Y
A Y
A Z
A Y
A Y
C Y
B Y
C Z
A Y
B Y
C X
B Z
C Y
C Y
B Z
B Z
A Y
B Y
C Y
B Y
C Y
B Y
A Z
C Y
B Z
A Y
A Y
C Y
A Y
B Z
A Y
A Y
C Y
C Y
A Z
A Y
A X
C Y
B Y
B Y
B Z
B Y
B Y
C Y
A Y
C Y
A Y
A Y
B X
C Y
B X
A Y
A Y
B Y
B Z
C Y
A Y
C Y
A Y
A Y
C Y
B Y
C Y
B Y
B X
C Y
A Y
A Y
B Z
B Y
B Y
A Y
A Y
A Y
A Y
A Y
C Y
A Y
A Y
C Y
A Y
B Y
C Y
A Y
A Y
A Y
C Y
A Y
B Y
B Y
A Z
A Y
C Y
B Y
C Y
A Z
B Z
A X
B Y
B Z
A Y
A Y
C Y
B Y
A Y
B Z
A Z
C Y
C Y
A Y
B X
C Y
A Y
C Y
C Y
B Z
A Y
A Y
A Y
C Y
A Y
C Y
B Y
B Y
B Y
A Z
C X
B X
C Y
A Y
A Y
A Y
A Y
C Y
A Y
B Y
A Y
C Z
C Y
A Z
B Y
A Y
C Z
C X
B Y
C X
A Y
B Z
A X
B Y
B Y
B X
C X
A Z
C Y
B Y
C Y
A Z
C Y
C Y
C Y
A Y
A Y
A Y
C Y
A Y
A Y
C X
B Z
C Y
C Y
B Z
C Y
B Y
B Z
A Y
B X
A Y
C Y
A Y
A Y
A Y
A Y
B Z
C Y
C Y
B Z
B Y
C Y
C Z
C Y
C Y
B Y
A Y
A Y
A Y
A Z
C Y
A Y
A Y
C Y
A Y
A Y
B Y
A Y
A X
A Y
A Z
B Y
C Y
A Y
A Y
C Y
A Y
B Z
B Z
C Y
C Y
A Y
A Y
B Z
B Z
A Y
B Y
C Y
A Y
B Y
C Y
A Y
C Y
B X
A Y
A Y
A Y
A Y
A Y
B X
C Y
C Y
B Y
A Y
C Y
B Y
C Z
C Y
B X
C Y
A Y
C Y
C Y
C Y
C Y
B X
A Y
C Y
A X
A Y
C X
A X
C X
C Y
A X
C Y
C Z
C Y
A Y
A Y
A Z
C Y
C Y
B Z
A Y
C Y
A Y
A Y
B Z
C Z
A Y
A Y
C Y
A Y
A Y
B Y
A X
A Y
B Z
A X
C Y
B X
A Y
A Z
C Y
B Z
B Y
B Y
A X
A Z
B Z
C X
C Y
B X
B Z
C Y
C Y
C Y
A Y
C Y
B X
C Y
A Y
A Y
A X
C Z
B Z
C Z
C Y
B Y
C Y
A Y
A Y
C Y
C Y
B Y
C Y
C Y
C Y
A Y
B X
A Y
B Y
C Y
B X
C Y
C Y
B Y
A Y
B Y
B Y
C Y
A Y
B X
C X
C Y
B X
A Y
A Y
B Z
B Y
A Y
B Y
B Y
A Z
B X
B Z
C Y
B Y
C Y
A Y
A Y
B X
A Y
C X
B Y
B Z
B X
C X
C Y
C X
A Y
C Y
B Y
B Y
A Y
B X
C Y
C Y
B X
B X
C Y
B Z
B Y
A Y
C Y
B X
C Y
A Y
A Z
A Y
A Y
C Y
A Z
A Y
B Z
A Y
B Y
B X
B Z
B Y
C Y
A Y
A Y
C X
B Y
A Y
B Y
A Y
C Y
C Y
A Y
B Y
B Y
B Y
C Y
A Y
B Y
B X
B X
A Y
C Y
C Y
A Y
A Y
A Y
A Z
C Y
A Y
C Y
A Y
B Z
C Y
C X
C Y
A Y
C X
B Z
C X
A Y
B X
A Y
C Z
C X
A X
A Y
C Y
B X
A X
B Y
A Y
A Y
A Y
C X
A Z
B Z
C Y
A Y
C Y
C Y
C X
C Y
B Y
C Y
B Z
B Z
C Y
B Y
A Y
A Y
A Y
B Y
C Y
A Y
A Y
C Y
B Y
B Y
C Y
A X
A Y
A Y
A Z
A Y
B Y
C Y
A Y
A Y
A Y
C Y
A Y
B X
A Y
C Y
A Y
A Y
B Z
B Y
B Z
C Y
A Y
A Z
A Y
A Y
B Y
A Y
C Y
C Y
A Y
B Y
C X
B Z
A Y
C Y
B X
B Y
C Y
B Y
C Z
A Z
A Y
C Y
A Y
C Y
C X
A Y
C Y
B X
C Y
A Y
A Y
C Y
A Z
B X
B Z
A Y
B Z
B Y
A Z
B Y
A Y
C Y
A Y
C Y
C Y
A Y
B Y
C Y
A Y
A Y
B X
A Y
A Y
A Y
C Y
A Z
B Y
B X
A Y
B Y
C Y
A Y
C Y
A Z
B X
A Y
A Y
A Y
A Z
A Y
B Y
B Z
B Z
A Y
A Z
A Y
B X
A Y
A Y
A Y
C Y
A Y
A Y
A Z
C Y
A Y
A Y
B X
B Y
C Y
B X
C Y
A Y
B Y
A Y
C Y
C Y
C Y
C Y
A Y
C Y
C Y
B Y
A Y
C Y
A Y
A Y
B Y
A Y
B Y
C X
A Y
A Y
A Y
C Y
B Z
C Y
A X
A Y
A Z
A Y
B X
C X
A Y
B Y
A Y
A Y
B Y
A Y
C Y
A Y
A Y
B Z
C Y
A Y
A X
B Z
A Y
A Y
A Z
C Y
A Z
C Y
B Y
A Y
C X
B X
A Y
C X
C X
A Y
A Y
A X
A Y
A Y
A Y
B Y
C X
A Y
C Y
C Y
A Y
B Z
A Y
C Y
B Z
A Y
C Y
C Y
B X
B Y
B Z
A Y
C Z
C Y
A Y
C X
A Y
C X
B Z
A Y
B Y
A Y
C Y
B Y
A Y
B Y
B X
A Y
B Y
C Y
A Y
C Y
C Y
A X
C Y
C X
A X
A Y
C Y
C Y
C X
C X
C Y
C Y
C Y
A Z
A Y
B Z
C Y
C Y
A Z
A Y
A Y
C X
A Y
A Y
A Y
C Y
A Y
C Y
A Y
A Y
A Y
C Y
C Y
A Y
B Y
B Y
A Z
B X
B X
B Y
C Y
A Y
A X
A Y
B X
C Y
B X
C X
C Y
A Y
A Y
C Y
A Y
C Y
A Y
B Z
C Y
A Y
B Y
A Y
A Y
A Y
A Y
A Z
C Y
A Y
B Y
C Y
C Y
A Y
C X
A Y
A Y
C Y
C Y
C X
B Y
A Y
A Y
A Y
A Y
C Y
A Y
B X
A Z
A Y
C Y
B X
A Y
C Y
A Y
A Y
A Y
C Y
B Y
A Y
A Y
B Z
C Y
C X
A Y
A Y
C Y
A Y
C X
C Y
C Y
A Y
C Y
C Y
C Y
C X
A Y
A Y
A Y
A Y
C Y
B Y
C Y
A Y
A Z
B Z
A Y
B Y
B Z
C Y
A X
B Y
C Y
A Y
A Y
C Y
A Y
A Y
A Z
B Z
C X
B Y
B Y
C Y
C Y
C Y
A Y
A Y
A Y
A Y
C Z
B Y
B Z
C Y
C Y
A Y
B Y
C Y
A Y
A X
B X
C Y
A Y
C Y
C X
C Y
A Y
A Y
B Y
B X
A Y
C Y
A Z
B X
C Y
B X
A Y
B Z
A Y
A Y
B Y
B Z
B X
A Y
B X
B Z
A Y
C Y
A Y
A Y
A Z
B X
A Y
A Y
B Y
A Y
B Z
B X
C Y
C X
C X
C X
A X
A Y
A Y
A Y
B Y
A Y
A Y
A Y
C Y
B Y
B X
B Y
C Y
A Z
A Y
B Z
A Y
C Y
A Y
A Z
B Z
C Y
B Z
A Y
C Y
B Y
C Y
A Y
C Y
B Z
B Y
B X
C X
A Y
A X
B X
C Y
C Y
A Y
C Y
B Y
A Y
B Z
A Y
B X
A Y
C Y
A Y
C Y
C Y
A Y
A Y
A Y
C X
B Y
B Z
B Y
A Y
A Y
A Z
B X
A Y
A Z
C Y
B Z
B X
A Y
C Y
A Y
B Z
A Y
A Z
B Y
C X
A Y
C Y
C Y
C Y
C Y
A Y
A Y
B Y
A Y
C Y
A Y
B Z
C Y
A Z
C Y
A Y
A Z
C Y
B X
C Y
C Y
A Y
A Y
B Z
B Y
B X
A Y
A Y
B Y
A Y
A Y
B X
B Y
A Y
C Y
A Y
C Y
C Y
B Y
B Y
C Y
A Y
A Z
A Y
A Y
A Y
C Y
C X
B Z
C Y
A Y
A Y
C Y
A Y
A Y
A Z
C X
C Y
A Y
A Y
C Y
C Y
A Y
A Y
C Y
C X
A Y
A Y
B Y
A Z
B Y
A Y
B Z
C Y
C Y
A Y
B Y
A Y
C Y
B Z
A Y
A Y
C X
C Y
C X
A Y
A Y
A Y
B Y
C X
A Y
B X
B Y
C Y
A Y
C Y
A Y
A Y
C Y
A Z
A Y
C X
A Y
A Y
C Y
C Y
C X
A Y
A Y
C Y
B Y
A Y
C Y
A Y
B Z
A Y
C Y
A Y
A Y
A Z
A Y
B Z
A Y
A Y
A Y
A Y
A Y
C Z
C X
A Y
A Z
C Y
C Y
B Z
A Y
B X
A Y
A Y
A Z
B Z
A Y
A Y
C Y
A Y
C Y
B Z
B X
C X
A Y
B Y
C Y
C X
B Y
C Y
A Y
A Y
A Y
A Z
B Y
A Y
C Y
A Y
A Y
A Y
A Y
C Y
C Y
A Y
A Z
C Y
B Y
C Y
C Y
B Y
A Y
C Y
B Z
A Y
A Y
B Z
C Y
B Z
C Y
C Y
B Z
B Y
A Y
C X
C Y
B Y
A Y
A Y
A Y
B Z
A Y
B Y
A Y
C Y
A Y
A Y
C Y
A Z
A Y
C Y
B Y
A Y
B Z
C Y
A Y
A Y
C Y
B Z
B Z
A Y
A Y
A Y
A Y
A Y
C Y
A Y
A Y
A Y
A Y
C Y
A Y
C Y
B X
B Y
A Y
C Z
B Y
C Y
C Y
A Y
C Y
C Y
A Y
A Y
A Y
A Y
B X
B Z
C Y
B X
B Y
B Y
B Z
B X
A Y
A Y
B Y
B X
A Y
A Y
C Y
C X
A Y
B Y
A Y
B Y
B Y
B Y
C Y
A Y
A X
A Y
C Y
B X
B Y
A Y
A X
C Y
C X
A Y
A Y
A Y
B Y
C X
A Z
B Z
A Y
B Z
A Y
A Y
A Y
A Y
B X
A Y
C Z
C Y
C Y
C Y
B Z
A Y
A Y
B Z
B Y
A Z
A Y
A Y
B Z
C Y
A Y
C Y
C Y
C Y
B X
B Y
A Y
A Y
A Y
A Y
B Y
A Y
B Z
B Z
A Y
C Y
C Y
C Y
A Y
C Y
B Y
C Y
A Y
B Y
B Y
B X
C X
A Y
A Y
A Y
B Y
C Y
B Y
C X
B Y
B Y
A Z
C Z
C X
B Y
C Y
B Y
C Y
B Z
A Y
C Y
A Y
B Y
C Y
A Y
A Y
C Z
B X
A Z
C Y
C Y
A Y
B Z
B Y
C X
A Y
B Z
A Y
A Y
A X
A Y
B Y
C Y
B Y
A Y
A Y
B Y
C Y
B Y
A Y
A Y
B Y
C Y
B Y
C Y
B Y
B Y
B X
A Y
A Y
C X
A Y
C Y
B Z
A Y
B Y
A Z
A Y
A Y
B Y
C Y
B Z
A Z
A Y
B Z
C Y
A Y
A Y
A Y
C X
C Y
A Y
C Y
A Y
A Y
B Z
A Y
A Z
C Y
C Y
A X
C X
A Y
B Z
A Y
A Y
B Y
A Y
A Y
B Z
A Y
B Y
B Z
A Y
A Z
A Y
A Z
C Y
B Y
A Y
A Y
B Z
C X
C Y
A Y
A Y
A Y
A Y
A Y
A Z
C Y
B X
A Z
B Y
A Y
A Z
A Y
C X
A Y
A Y
C Z
B Y
C Y
C Y
B Y
C X
A Y
A Y
B Y
A Y
A Y
A Y
B Y
B Y
C Y
A Y
A Y
B Y
B X
A Y
A Y
C Y
B Y
C Y
B Z
A Z
C X
B X
A Y
A Y
A Y
C Z
A Y
C Y
B Y
A Y
B X
A Y
C Y
A Y
B Y
A Y
B X
B Y
A Y
C Y
C Y
A Y
A Y
A Y
A Y
C Y
C Y
A Y
A Y
B Y
C Y
B Z
C Y
C Y
C Z
A Z
B X
C Y
A Y
B Y
B Y
A Y
B X
A Y
B Y
B X
C Y
B X
B Y
B Y
B Z
A Y
A Z
B Z
A X
C Y
B X
C X
A Y
B Z
A Y
A Y
A Z
C X
A Y
B Y
B Y
A Y
A Z
A Y
B X
B X
A Y
B Y
C Y
A Y
B X
B Z
B Z
B Z
C X
A Y
C Y
A Z
B Y
B Y
A Y
B Y
C Y
A Y
A Z
B X
C Y
C Y
A X
C Y
C Y
B Y
B X
C X
A Y
C X
C Y
A Y
B Y
A Y
A Y
B Z
C Y
B X
A X
C Y
B X
C Y
C Y
A Y
C Y
C Y
C X
A Y
A Y
B Y
C Y
C Y
A Y
C Y
A Z
A Y
A Y
B X
A Y
A Y
A Y
A Y
A Y
C Y
B Y
B Y
A Y
A Y
B Y
C Y
B Y
A Y
A Y
B Z
C X
A Y
C Y
B Y
B X
A X
A Y
B Y
B X
B Y
A Y
C Y
A Z
B Y
C Y
C Y
B Z
C Y
C Y
C Y
C Y
C Y
A Y
B Z
C Y
C Y
A Z
A Y
B Z
A Y
B X
C Y
C X
A Y
A Y
B Y
A Z
A Y
C Z
A Y
B Y
A Y
B X
A Y
B Z
C Y
A Y
A Z
A Y
B Y
A Y
B Z
A Y
A Y
A Y
A Y
C X
A Y
B Z
A Y
B Z
B X
A Y
B Y
C Y
B Z
B Z
C Y
B Z
A Z
A Z
B Z
A Y
C Y
C Y
A Y
C Y
B X
C Y
C Y
B Z
A Y
A Y
C Y
B Y
A Y
C Y
C Y
A Y
B Y
A Y
B Y
A Y
A Y
A Y
C Y
B X
B X
C Y
C Y
B X
A Y
C Y
A Y
B Z
A Z
A Y
C Y
A Y
C Y
A Y
C Y
C Y
C Y
A Z
A Y
C Y
B Y
A Y
A Y
C Y
C Y
A Y
B X
B Y
C Y
B Y
B Z
C Y
A Y
C Y
C Y
C Y
A X
A Y
C X
A Z
C Y
C Y
A Y
C Y
A Y
C Y
A Y
A Y
C Y
B Y
A Y
A Y
A Y
C Y
C Z
A Z
A Y
C Y
A Y
A Z
C Y
A Y
C Y
B Y
A Y
B Y
C Y
B Y
A Y
A Z
A Y
B X
C X
C Y
B Z
C Y
C Y
A Y
B X
B Z
A Y
B Z
B X
A Y
A Y
A Y
B X
C Y
C Y
C Y
C Y
B Z
A Y
B Y
B Z
A Y
A Z
A Y
A Y
A Y
B Z
C Y
A Y
A Y
B Y
C Y
C X
A Y
C Y
A Y
A Y
A Y
C Z
A Z
B Y
A Z
B X
B Y
A X
A Y
A Y
C Y
C Y
B X
A Z
C Y
B Y
C X
A Y
A Y
B Y
C Y
C Y
A Y
C X
A Y
A Y
A Y
A Y
C Y
C Y
A Y
C Y
A Z
A Y
C Y
A Y
B X
C Y
C Y
C Y
B X
B Y
A Y
A Y
A Y
C Y
A Y
A Y
B Y
A Y
A Y
C Y
C Y
A Y
C Y
C Y
C Y
C Y
C Y
B Z
C Z
C Y
B X
B Y
C Y
A Y
A Y
A Y
A Y
B Z
A Y
A Z
C X
A X
A Y
A Y
C X
C Y
B Y
A Y
C Z
B Y
B Y
C Z
C Z
A Y
A Y
A Y
C X
B Y
B Z
A Y
A Y
B Y
C X
B Y
A Y
C Y
B Y
A Y`,O1=`jNNBMTNzvTqhQLhQLMQL
VCwnVRCGHHJTdsLtrdhrGdsq
wFJZTbRcnJCbpwpFccZCBfBvPzfpgfgzzWvjSzNP
wDWgDfWNTvwvgFfWfddGldJVprrrVdNlrN
nLnmLSnmMVJvSrHqdV
MsmsbLvtzMjFsCPDsfBwwT
WTqSCqWSWqSgVZqJHpHmHrhMMVrRhBnn
PtLGLGddGGMCpprM
jFvLPPlLjvfjjffsclvPqzzJWTbqNSWZsbSTDzCW
lLSSrfmddlNpnmLdfSPddDdbZQTZgZjbZgjcQZHQPjQgZP
MJMnhzBJVJwvGsMRhRhTsHTjZjHFctbtHZcgZj
vzvBWGJMVGwWGGhGqVBnGzVGDfCDmrqNfrrLSdpSfLSpNmNC
qGWLgfbWhqpLgZbJvTRWJTvMWRslMv
FQwPwNPCVFQQdNcFHNcwwsvslRDRTMDMsVTGJGtRTs
wQHnwnQFPNPdjnnPjhphGqBrfpBBBfZf
mpVpmtPhVtPBLLbQTJpBLZ
vzFMlMzvvRZMTbJQJQbf
srqzvRRqdvzFFrDnvqldFVtwCVCHWNqJHNNcHchCPt
CQJJLZCJLqNMMDDgGLVV
RfRFFszTtzbWTFnRtFrRrWvNHghvBVGgMffvmBVDNgGV
znsjWzstnWjbDnDbTZCpwZcjpjZqQCwSPp
jRrzzrPjLnnpQQDsjj
CTVnTlZWHTcqZBcTTTHqWscQsQDQQDsmmQfvfhwDmv
qlWFWWHTZTlqTFWZHtBVFdlTGdNzRnNngbbSrrSNNzPgPGSz
cWjbcjnssMmRPWbGsWcMbfLBFrZBBLLgZwBrlfLQZtCw
vqpvFHNvhvJzdZQZtlgNNwlrrw
JzqVVVVpzhVJqzhSzJhhDVnFjRRMsPnSRcGMRMjWjWmR
NznNGQgSRQffbbsR
jjjCLwdvLcrhqdblFJsFSPfbDP
qrrvwHqjtLmSSggpBtgn
LGPtFtTfTfTfLrrWTSWGPrrsszbsjZHzgdzSwzbHdsglwl
NhHpVpqNNqbdszRRRb
ccBMJVDNCvvhDNpvNDpnNCVCHFPTmfLTGPMQrfLGmMLWWQQL
dRgRhVLRlncZSSrtLp
WJmwvvvjQvWwFBBvFJPHpwvGWTScGsrZtttGTSsrzTsSZt
FFHJjmjjjPMvfHfwpdRqMppghdRCddDg
NDTRFSnNsVVBDVlM
JjLZWqwjHvfrvmHHvjLWWLlhPlnPlChlQhJQnnzPPBCV
mwHvHmpvwpLmjnvpvLvvNGcTTggRbdTGcbNbTTpS
GGhZQMsmGRfMwfpclgdBlbblBBZgJc
tFvFSTSDnDTTLtcFMbWcBgclJrgd
vzDtzMVtnLTTMTSjSDHtppqhsqqfGjmpPhmsRGPG
MfJtWTTMJfzBbVWPZWQbNnDV
FvlgSHSLvmCvZjgcCQQsPQQsjnbVDNVsdn
HLhclRlHRmHvmLmclLZFSFwRRRpJMtwJwfGGrrtrwfpf
scsswLQcGmQmNHCqvrsHqfff
bdnPSMMMClbBBPCdDDnDVMDWWWvfvWFfFJfNqqNVFqFNfr
bDPTlSTPPbSPjnPSbGmQLCcjLjwzRLcmCG
tFFJjMnFhdcMMJlWtdnlFczBSZGNSjGGbBGZLbZZbLGB
QRgqwwvsLssZnGCz
gqfvvnpfHwRmHTFdFcPdJJmJJc
fccTzVVcfSmdThTTFJPFgg
wLsWfppsjBrnnwjCBZnZqJJQGhBdFJddQhFqdQBG
pZrNCWLwLZLjwwWMftmNzttDcVzVvt
rZnVVjVSMcrwsNbc
dLvQLBLFddvBLzpGmddQCqNswzsMjbhgbblbcwshlb
LLCCWjGBFPmCWdmmPWLdWBpLRZDSPRnHSStRfnZnZTnSSTfJ
ddfnQRbpldRlRLgFglqGCLqsGq
BWBVDZWTBTDPvVTZVDBDNMbhcLLHsFqgvHJsLCJCGcHGsJLH
NPZPDMWZMbZrBVMDDWNmBhMVpSSRpzjjfjpwRnSpwzRzdzjr
bvPSBttgGmZwScwShS
NJspjJLdprzHgjrLzLNrnHQCmmcZQWlcQcNQwlwcQCZC
HdRJsJrdHTbqGMDtgDqT
sNVvSdTstDCtdzdzSCwTzCRhRQjfclMflppjGhffjZcN
rgWlrnLLbqbQMfMphpWjjf
BmrnrFPnnBLlqVwDCtCtVPDTzT
mJMqlVlttQlFVmzFQMQMbQMSSDNwwdSddNddwdDswRDVdR
GGZgcfjrvCCZvgCZqvPHSwRBBsBwswcwBNTDTcSR
GZppfGHGrgGprZhLthFJhFqLWWFhtq
WDHHLtRBHgDnVrWFVFBTdzzZLLjZzjjvddLsvv
JlqmMpCMCGMwbwZddTtCtv
cJJqSplpfSGccJGthFVcVHgFBWBgHgDB
tlFwbWtQFLJhlBFlWPbwmsQndTrrqdnggjqdgnTgTT
GCMBDDCvRpDVpRpHrsgdqTjqgdHcsjHd
MDDvCVGzBGfpzBSNMSRRmwbLWlPmzbPmlJlWbFbJ
fzFzFHBfnvpHFbnzbHfBHZggCGgtZCltDGggdCCVtZVD
sLMNSccQLMSrmLcshLvtCGllPtDdGgtJgmlV
cwLMwwNhQhsWSjqTqHnHbjWTvH
NWlqqhNNnGtNvvWQdrVGBBQdVrwRQr
mppCjppMrDTSgDppCDTMQVRwdBbBQVVbQdQsVB
pgzzTFFFrjHqHnqJFWnh
ncQrhQjqjVQhGsGBbhtsstTp
RllWFLRfZrGlBTbg
vFLLmfNRFSNDfSNjcwqJVrVVzQjc
mmGrgwmGDGcVWVjNNW
nDsqfPCHnpntDssfJPDPjWWhjNTTcjjhTTNcqWcc
DfPCJLpbldRrlrdwmw
dJDNbRhNbJdhqCnrWjhsTWvplg
LMHrttLFcMmcMFLmtGplCggpjjnvTpgnTTFT
czZMzrzVZzHZdNdbDDqDVQNR
sbsJgbsmzdgRgWdg
LLLFBzGMLjzzFtVFwwwCPPRCCqQQTnnCMMCMCC
GllfptwjLjlGFVFjGzpFFNbJDmprrNDsDmDvJhmcvp
SccPbfbncpcfsjbRjMBCTTFGMTCQtJtzFFFJ
vvvdgVhlmlwlgZLgmJhWQCWGGbWtWJhzTJ
NbLNDdbLVmqqmfcsrHcrpPqrcH
HcgDBJSHTCzjjnMNJjrW
VppGMwFwllwwbZZrjvnqmzmnzpqjNv
wZlhtPGPLFVFlGZbVtVTQLLBQRRTSHTSMDCgLs
HPMMnhBHlMnMBPBHJHPWfdnBmjvLZvjTvZTZDgTgTmQmZhZZ
SrzrSScrctrwVzCSCmzQjmLTLvGDvTjGbm
CswstFRNpcwVNRrVVSVwpwpHJnnWWBBHfWHlffWfQMnM
mlFMtqjvMdqjmMCCJZsRQBnszlZz
HcNgcPLcHLwtcfZBTsnsHJBJTzCQ
LGGNhbNtNLDfcgcwfbgthfwFrqqVdFMqMMhMmvShFqmvVv
NbvbBGNvhNhnhpbgpGfBvNgmRjCdPCPCCRCQmmpRdTmTPR
qqFSSqWrtSSccjMdQMHFMBjPMj
SBDSBZZZwGGZNJJg
qTdHSLSFRZRHHZVgpzhbJszchsnsLg
tDvflvrGttDCjlQfmCGvtCftczhbzwJczcJgznNmzJNhwgsp
tQlDCDtrfrtlGrjlQBHFHPVHbBbZqTZdVZBF
MTwvsQJMvvHwVMMJMQNNJRPWWjCllrlWGFlSFCpjgFVSWr
zhcmnRZmqmWjCSFrFqCW
ZbmhZcdZznZfndtwDtMMsRQTTQNRQw
ZhhVqQTvZvVhSmQZcClRCLPCgTGGLbgl
dJWHwndMHswswlGbCmclmLHbbP
dnwwNJnjBjwwdddnjndfWvmvSNZQNrVVmZvZFvvQQv
trlrlrZzsjRjdFhlpwdpnpdp
QqLvvLQmLfQTLbLTfHmqHHLqQgFBdCJBBgggCJdhgJwCggBF
DPDvqLqffqfhSVjVPSPtsj
gsnVdcBcjMMntGMh
RQZLRZlZDRJDCzCjblJSDjQZWWTWPCThMTFGNPTNttGwCFMh
pDlQbSlzpQsjVpjHVfgs
zgqtCtJltdGttJgVGPPJCtJvQFsFFbTFssNDNDsHLbTQbssP
rRcwBnnpcmBqpbLHDspTbFsb
mwRqrqrmWrZnfWmBmnRZlgClgJCJlGJzClGMtG
jlzHllmPnpHlHZBWZJJDWMBNVH
bQrhDbcLgsQrtdVCJWfCCBMMVWrJ
QhGdGcLGwwwtcDzznppPpPwlpnSS
qbpqvWFHbFHHsWwPqPpsVWZTlDcLDddddDrmrcVZDrmT
MCgSSJMCztdmcLzlrlDl
QCRMRSnNtRSqqRjsjLPPvp
ZnZrTfsWWvhVSRmzqqnn
pLGBLBgLCpgGpbdLbgMClJTmmhShSRShqSBDQSRRmQVV
dpJPldgMMbglFdrNWWjHZNccTjZP
CCZCQzwwdmMGDWMmhCMJgpnrnwsTrFNLgnpNgg
jfStHtcjqDPbPtvqvgLNpppnHsrsFgnFNp
fcqqPPPtPSfRVBBRPRPbvQzzhQWGZQVQQZDQMMzGQM
VVlDNDgppgtNltlrJPbjSzPPzjsMsjBBMWMM
LmGRmfmwCqQqbsQBMqJj
cHRcCFfmfmGLJLGFcJLFwfdlhDgptthhHpVrNVdhlvhl
vSSdnBVpscwZcBZB
mLHzqtGtNfGHHFNHMhJMthsbcJtctZTw
GHqHHGzNDNFCfqllCFqVDdPSDQnddvcpPQjdjg
CMWcwGTrvzDWzrDccDCGzTTTplZgSjggjSpSljSjBpSmgmWB
nssRttdsnhsdbFhtVFhNpgwNpBBgHHBBBBZSjNSl
PnVPVPLFtvPvTwwrQq
tlQlqlJCCJWgFrprPjpGVpQzvp
SDbwShHbBZZbhcBdDBDSTrsVpPrzzzHVzNllzGlVNv
BTbbScwRhwZLnLtfJFLFJgWl
VDfPVHfDVMMfHSPSMTVfqgFthFcFrtcdhrhDQdDmdcdt
bWGGHCplWnJNpJCCnlnNwdcwQhmmdmtwddBNcc
HpGCnZGllzlzJWjnCbbnCnRvfvsSTVVSgVLqSsLsLzPPLV
fQqcfqfSDzDWffDZ
NcCLCtPCPMtNBwdthpLhPwzsHrszsZssTsWrDrDVTNNH
twMPBtCpLBCtwMPpJcMBSjjnngqSjQQJbQjjmgmn
vQwVQQVqcJvVJvCpQBCLpdgSFCdjjWWnMSgnSjgjbj
hszPRDTVDWWWRnjWWj
TtDDZsszlPllhPzmPVGssTPpQLcpvpBpZpcfpvrvQvBQLv
sRmGqqzzzgCtRrttCP
cffSwNDddTdfGWtgNCrtGMPP
GGcTwHwHvjqLLjLvlJ
JSdjLJMBdMSrfwwLpWgzWmvDhggzWvfmgD
VsRtVllstHHNllsQsHQRzchcnDmvmvnRvvvcnZ
tGVGCTTTtTFVbsTTNTHsTTqBqBLrBCjqBwqJwqBzLqzw
MhjTJjlSDrplQvFQ
RHttqbNGGmbbLmLmdqbgnFQwrZswQrwDpFpppdwfvQ
gCNmDHHRCLHnWWSCjhWPShPz
BvzpbBwBmsDrmGVgZFDm
TnNRdtlRlCdFFGTLffrrGf
jltNtRCPSlPNtcpwpGzjMBpvbhps
hflJphNDmmbpfnfplbcvLsHVLsrsZsVvCb
FgTFWqTBfFPfFqQqTwHsHccVVLQCZZZCVH
BSSRTGWBgFggBWgBGStTGpzNztmjjzhhzDfNnMjnph
mDDFjjFmVlTZJttffD
hhRvNNCvdNMRLzhSzpptwslNTfNQntsJQZZTlN
WCdMzdMzhMdvRvLhCRLPvjgHmggmbmbblgWcGmcbcG
cScMdhsDhDDdvGzZptzGcnGtpB
NPWjJqrjJWwrSFWRJlrlNWJLtZznLBBzZznLqnpqnpnznV
NWNQwNPjCSQTQhTd
fVVCVccppZMZMMCBzJTNJHWZTWZzNF
QrmmPhDqPhsPRhrlbgRDbbPDJNJTnJzmzzfNNTNHNJNWmnvF
DgbPLbPsQsrbsqLbgllsQQptfwSjwtVLfwdcpCjVwwSp
ZlsmlrZZJcQmhBhlNrsrJRRbRCRggRbzGCRHgRCDGB
fMFvdfVTTdjWTTTfvSjVjpjzcCbFHGPHPDbPHRCFGGRHHG
cdvfSWjfjpdVqSwSvMdLrlrmhqZhhrrLLJQhNr
sWVVmDJsNWNjcSNJZcNcZWWsHTGHTChhHGtHsFFbbsfHhH
nqPRwQRgpQRPQQgMQgQLQqBhvTRtfdfvfCbFtTFFFTtvff
qgrPMLLPpVlbDrVrWD
VcGjcCHcVHPrGnjQDQgDgQDFtdglRtlQ
bWWhfzJhvZWJzNpmRTtsDLDgRTsNddFT
MhJMhJbMmSZbJZwSCtjqcGrrnGjC
FCvpgDsZNsCbvvvpVwcDrjcrmVMwVwHJ
fhfWdPhhhhRQQqzdLSRHRHJjBTTmcrTMrMrwmczcwwTz
qndhdQWndftfhWStfLQQfWgFNsgFpHCtgCNbGZZlZCll
mqTCNhTNmGTLwLNfLrSrgZHDvfPDPv
cjsMQppsFnFslnRQQGMDHGZHSgzHPDZDSf
stWFjcFFsJlQcQtwtbVwCmCthmBTGb
fmsffcqhmqPsnTCnCcQpzjSSNpBWBTQpVSSD
vHbgLRvvvzdgjVVjWg
WltLWvWlqcChrhlf
CtwjffWrdznRtzCwLsmGLlLMsMmMGb
cZFFbgPgJZDchMMPVsmlPGmG
SpNFJBJccNgDcTJJTdbStbnntrCdSrjWnb
qWzgNFqzqHNTBzFNCZCGPpPlHmdPblls
rfSJRJnhhnJDjrfvRStCmpdGsdlDpZZZPbPCmW
cffRvfnnVRjFTWVTLQMFWN
VcHhVrVCQQWhffzcRZznnZFf
dDSCGSsSblwDdmLqvnFZzNZplfpfRZfBnl
tCCwGmSqbqtwsVPjVJWtJHHhQV
fvvTcWzGcCJrJGJvvHMbZTmRQTbpMdQQsR
SgFhVgllLgjLgwlwljFqVFSFdjmBHmZdRMdZpbjpmpjBsHdM
LNqFnlDgVqllwLFLnVSgLFZtCzzzzvCGGccCCDCfvJrv
FczpzmSjVVpSQrzzcRpRcrwqMtJqwtvtLHvQwtLtnJMw
TvbGGbNfGCBBLHtJBHDZDMqD
shgdNTGgvNsflspcPjzVdmppczrV
JHLPLTsSllgSSPPSPLTRTdjCZGZDGGgCdqZtZCZdZt
mhFpnpFwqdGbdFDt
prpWcvnmhmpccBBJMJJlPWLHMDSDWW
GcMcjDbDMMjqHBHVlHvv
rLCrwNJCnwrZNLWQQwzQpRqQPlBRVVBRvvtHqf
zhnrnzdrCwLJCwzwCMGcbdFTscTmgcFlgc
cnwlFrdMsggblgsrMbncwrsWzjGBTjznBzWNzPzTzfjTzf
vvVVHSpQvvRQDJGGLWGfTLTBLQMN
hCmJqVvMSpqqChCJHDZrFsdhrtgFhttZZhts
sfDNqLNpqpzCzLsDqzbCVWRhjTNhShTjHmmjjhStBmvT
wZrlwJwFJGlFMTjhBBZTSTRSbv
wrQrgnPwMsnLbfffVc
hDcwwGWhMMssTcdM
NQmLbNSZHQSHSNpbvfdqfRsZMqssjqdd
LNVtLSSHLSgLNrgwJgJGnBwFMBzD
CRDfCbfjcnRCBVfjVMfMjZpPptplPWtppStpSlBqlq
HdTFLGsdLrzNWtvqPTcpgPZl
JLGmmHrwJGwhjmfMcbDjQC
VShGpPbWjcPCcTLcPN
HqfqDfDFFJDvZRJvqZRRqHZdNcwjllwvQQLQlllccwclCMCT
FddsFmJjjrgGmbSSpS
NRFFLtFtqFLGsdnGbQSs
ljMfMBDlJHgBVHgVflfnwdsSQQbddsSsqnqGfs
PlzDzjljzqRzWzZW
dtzZZbctPzwdlzRwlcdfRgtQJmFmhPSmmSsQQFhsmqSFvm
nDjHnNjjjMnfjNTMWhHQWJSqSSQmhqhm
CDpVCfrjLnnfwtBcpdcbcBZt
sssZSZtDfHbbdtBTCRBzRDFJCBLp
jwWgmWlNQNLlcjWhgQlrQQWrCCJJzFCMVMTzpBMMCVCMTwpT
ggLgrqljLlGvHqttftbP
cSGBFsFcSRZSQGsgBNgVMwMhDQDVfqPjMhwwVq
vnCTLlrpPlHzzjbMfqpbww
rJCnlmClvWvLrTmtTlZcZWSSWPGGdNcFGgcR
lfDDvZZSvLtDtCQZltCqVBWVBCbHJjRdNqWq
pGGhhzMRcqMBqMdVBN
mzgwGrrwhThFGPmGPcFGpwStTfltfDftStDsQRsflDQl
LjnSjLZLBcbBdDqzND
rrfhfMRmpsghfrhGhgQrcPNtZcqNCqdCqPzcNZMM
ZTTgvRpmfffpfgRRhWnVSJJLLWnvJHFlFH
lstcGcttdczzsWVCvQVLCHHnQHWL
rjmJrmfmJMqvQTLvqfGG
JbNrjGjGrMDRJghZggcchhDhzc
tftJQwCgSjpdWHjbRJ
DcwvlZBmGvHjdbczcRpb
sqwDlsBvGNSMQTCNfCTC
DwDrtvMHtBCvcpDcjCMFtBCblJfJGJbZlfzrRlJdbRdZld
sPLPmqhSnLQQSWqlbzRRhfJCJfNJhZ
mVCnWCsQqqLTPWmnDVMFVtHFtMBFpjwM
scChGddJztdNswNsdDsthvmpVmRVcZjmvVvRSMZVSZ
lQLCWgWHCWbFPbbbHqLnLPHHVMpVRgSMmZVSBZBjZVSjRBZp
QrTlTHbPnTsJGtsDdGCr
fMjgFqtFWMhtjcNQSDMmNlCCDMQN
sVHdHdJHwPGPGwwbpJGTbGTvClldmvRSnvlDlLLSlvRnQl
pJbHPHJGVbBswpTcfrBtrhmtrFczzq
SDGSDGVPqqqQPGrTQVTQDrSrJfHJgqhgJqzhJJmWfHpWpzmg
twCdCWMLwbtLLjBddgfcJgRHfRRpfcpRHM
FZdbvFFbVvsWsQsW
rzrRgqGrwgjRVqJCHLzCCWhtDbCC
dTZnNpvBvnJdBpBnsJPvsSCbthLtLbbQShQQLHtSST
BlplPmdlFsslfJmmRfwfwMjw
PPHSrmfHTnmHnHBzRhbFgfbFwzQg
LcsVsGtVLtLqpzwBvgzQRgTTTp
TjLJGTTJWJZZWWZS
tHcshJcJRhLsQscVtccJLRHfvlPjZFSvmvSbvfLFfFFbGZ
drwdTNlwwBTpCdCdwGPrrmjjmjmbSjFPrF
wglnzCDpJtQcztMR
bbMjTbBvgjZNSqldTlVt
wwrcFwsrsnnCQzrCsLnRsQZcNlpJVZHdttZVttSZqJZd
GwLnrsmFCCzqzhvPbPmWmvvfjj
dcnwQdcdrJdSwSFBBqfBfwMqfBfzsh
RgmZpWlCClRlTgBZbhHJJsZjfBHZ
DlNVWgWpgDCCNRDJFcrtQGrrVnrcFPtc
sWSHsdSrHWHsbdsddBsbjmfwffmJDJwcfDQgfvwJDj
ZNGPhRqCCRNGNwSDvmmwwgDhgf
lGlTLTGTSVVFqVTqsFHWntbWBsBsnBHb
QRRgRvDwWDVjmSbDnbTDlDnbqS
rHCPPHrcLFJcllqbTlpq
CldFrNFsgVhhhWgN
qSfMgNqfpmSmlQrRFG
cbBczbtbZTcPWzcrTrmRrLGFTQQFmJ
PBZChtzzcWPcZtBvPjtzBBCfHMMNdDgDpMfVfVpHMqNR
LJPPCHtgtLDfFfvTLwfv
pVGWGGjjjplhpGGVjWnldsvrrMFvfDMTWBdFrfFF
cjlhShjchhjGGmNVjplcQgmTPtHPPJmQgQHgtqgZ`,I1=`8-82,3-96
13-95,99-99
4-92,5-93
16-80,16-80
23-36,6-10
82-98,24-83
48-48,47-48
58-81,58-80
14-14,13-98
46-66,45-46
38-73,37-72
46-99,47-47
15-59,6-56
13-54,12-53
60-61,60-71
4-97,2-97
6-94,6-94
47-48,38-48
10-95,10-95
84-87,86-86
51-88,70-84
3-52,51-53
21-55,21-21
55-84,31-56
18-18,19-75
63-76,64-77
44-94,93-98
9-62,2-4
29-34,28-33
14-97,15-98
10-56,10-56
3-92,4-93
44-92,45-93
7-73,6-72
12-96,12-12
17-83,82-83
8-94,9-97
1-96,2-96
82-93,4-81
45-62,3-62
91-96,3-81
69-87,68-95
43-67,44-55
2-99,87-97
41-47,40-48
84-99,21-84
9-47,8-46
7-86,31-37
44-95,28-99
1-96,6-94
79-79,1-80
44-62,44-62
17-17,16-62
19-80,19-19
31-54,12-53
62-91,90-99
1-99,3-99
28-63,29-63
46-78,61-78
16-24,23-91
25-77,24-24
58-99,57-98
46-86,8-87
44-44,45-77
36-71,51-71
26-79,25-79
4-69,44-53
33-78,95-99
46-67,23-47
16-51,15-50
72-91,28-72
96-98,10-97
4-98,3-98
3-98,8-96
92-96,6-93
62-99,97-99
2-2,1-24
23-25,24-90
14-77,14-78
95-95,3-96
18-78,8-17
34-92,33-91
4-4,4-4
28-59,32-60
30-32,20-31
75-80,6-76
17-78,41-78
9-94,9-94
52-67,51-68
63-97,78-96
85-89,10-86
1-52,51-51
8-74,7-93
58-73,26-74
3-96,96-97
14-30,15-29
13-77,12-76
99-99,7-93
13-94,93-93
3-54,1-54
50-90,50-91
58-58,57-72
17-18,18-91
2-30,6-30
91-92,74-92
32-82,31-83
41-52,42-53
93-96,60-93
53-70,53-70
69-97,69-70
3-54,3-55
41-55,6-56
46-48,47-48
10-42,9-9
75-80,3-76
43-56,44-44
60-61,60-69
31-93,32-92
12-63,13-62
94-95,46-95
68-68,1-69
22-89,18-95
14-32,17-33
10-75,9-76
31-96,31-97
85-85,5-86
22-31,21-30
23-77,3-94
44-44,45-45
86-93,14-93
67-99,67-97
38-95,37-94
19-21,20-24
71-71,11-72
8-47,9-47
45-78,46-46
8-9,7-8
95-97,4-96
25-78,78-79
68-68,68-85
68-78,10-89
6-80,5-6
9-88,8-8
13-92,63-93
97-97,73-98
8-45,8-8
3-93,9-92
93-93,28-94
8-78,9-79
8-95,1-95
39-66,39-65
3-32,2-33
24-36,4-89
36-96,36-96
9-73,9-10
72-87,72-75
11-97,12-96
50-79,78-79
93-93,80-94
35-95,23-94
1-89,89-98
15-97,15-97
67-86,42-86
18-49,17-48
6-93,10-87
35-56,66-77
14-99,14-98
48-62,18-63
37-57,36-38
4-6,5-72
59-93,59-94
25-69,25-70
8-78,77-77
73-73,74-91
23-34,34-63
35-96,91-96
32-71,33-70
60-81,61-78
2-80,80-81
16-85,35-57
29-70,66-67
68-84,55-84
26-66,27-27
29-74,28-80
89-91,49-90
34-35,34-54
13-96,12-96
20-45,19-56
48-97,49-96
68-70,12-69
4-95,94-94
20-84,19-83
32-34,33-96
23-53,24-52
9-11,9-9
29-30,30-63
20-80,20-56
76-95,1-76
2-68,1-67
3-60,59-59
2-22,3-23
78-92,82-91
29-99,39-99
38-46,26-33
42-61,60-60
23-23,24-24
92-96,29-92
8-90,89-89
21-29,16-29
6-75,6-74
9-11,10-38
46-80,18-90
59-65,58-58
9-91,8-90
87-91,88-91
11-95,91-96
38-95,38-97
12-97,8-64
49-54,42-93
90-90,88-91
44-80,43-43
29-88,30-87
91-93,63-92
3-83,2-3
17-94,93-95
8-91,3-7
1-92,1-93
98-99,37-95
31-31,31-63
1-96,1-97
49-94,49-81
19-84,18-85
14-91,91-93
30-41,41-50
22-39,38-44
17-93,5-98
2-79,3-3
63-93,39-93
86-86,59-88
37-47,37-38
6-68,1-68
97-98,84-95
86-88,1-87
17-87,17-81
30-55,32-34
4-4,5-89
6-97,97-99
15-97,14-98
95-96,67-93
14-39,13-40
5-78,77-78
12-48,13-38
67-83,20-88
5-90,4-91
52-74,53-73
11-96,29-96
11-27,12-27
16-47,15-48
91-99,13-90
35-89,36-36
9-12,3-12
19-19,20-78
18-78,17-17
10-42,11-11
16-16,15-86
16-34,20-34
19-99,3-72
32-88,33-89
76-78,21-75
25-65,25-66
8-93,8-94
8-9,8-55
61-67,22-67
10-63,36-62
5-93,5-5
13-88,68-77
9-30,8-30
87-89,24-88
20-51,47-51
57-59,12-58
25-75,16-94
92-95,46-92
31-94,32-95
1-76,3-76
7-59,8-69
26-58,27-57
16-59,15-63
47-49,21-48
25-68,24-88
89-89,48-90
21-72,71-71
66-79,65-78
54-55,54-55
45-88,8-89
38-68,56-67
2-82,37-65
17-73,17-73
74-80,11-81
10-56,1-99
32-72,11-31
7-40,6-65
5-49,48-57
14-15,15-81
61-83,91-96
19-87,20-86
6-67,6-68
49-95,48-48
26-28,27-32
39-62,39-39
1-78,4-78
23-87,35-35
1-1,2-79
9-40,10-40
11-96,3-12
69-72,3-73
70-85,16-70
76-84,42-75
52-53,10-53
3-15,4-14
13-83,12-13
19-76,68-75
25-43,25-43
55-60,55-60
25-52,5-24
1-91,90-90
61-79,60-60
33-39,33-39
5-14,4-4
65-67,66-79
8-9,8-98
3-86,85-85
10-42,9-43
2-25,87-98
4-77,3-3
34-87,34-98
72-77,71-71
78-97,25-78
8-9,8-15
3-97,1-5
65-90,40-66
13-77,51-77
95-97,5-93
21-61,20-60
37-96,35-98
28-96,42-96
13-81,12-80
63-70,40-66
73-93,92-97
30-87,31-88
79-94,80-80
42-56,1-43
16-41,15-42
16-74,16-74
52-59,51-60
77-82,26-76
3-13,9-12
2-77,1-78
4-86,5-86
1-80,2-31
31-95,31-83
38-70,71-81
36-77,1-78
9-86,87-94
9-56,11-56
1-96,1-95
81-88,81-83
11-74,11-75
4-97,6-89
25-78,24-79
12-36,13-37
6-97,20-97
2-91,90-92
64-67,66-90
36-44,36-37
23-23,22-24
36-66,37-61
23-33,29-32
32-97,32-97
30-95,38-95
12-99,34-89
13-98,15-94
11-90,10-91
68-94,67-93
13-93,12-94
11-91,10-12
62-72,56-62
23-70,24-69
93-93,7-94
21-67,66-72
14-44,13-43
57-81,58-82
20-73,72-86
34-34,33-51
14-21,20-22
17-41,17-42
37-64,36-68
22-89,22-97
3-86,3-4
81-91,14-82
47-90,89-91
11-56,5-56
34-80,35-65
18-62,19-61
84-96,23-95
83-87,33-69
83-91,76-91
23-60,22-22
5-7,4-8
21-22,21-94
11-56,12-12
15-81,14-15
5-5,6-69
41-73,41-74
4-22,3-23
10-97,25-91
31-37,30-30
40-69,25-69
49-72,49-50
16-76,75-77
64-95,63-96
33-86,33-86
26-26,25-57
7-91,12-91
19-97,18-96
19-70,18-70
3-98,1-65
9-55,55-96
34-83,51-84
3-6,7-98
23-24,23-25
16-85,16-84
35-97,36-98
4-12,9-12
2-98,1-97
6-79,80-81
4-5,4-25
41-53,40-70
6-94,7-7
1-96,2-95
8-83,7-8
9-31,10-45
21-57,20-58
20-78,19-77
10-10,11-98
11-77,6-78
94-95,93-96
55-84,56-85
31-78,42-78
4-88,92-98
5-74,74-93
1-98,1-99
6-84,18-28
3-90,1-92
20-92,19-19
91-91,90-90
7-99,7-99
11-95,12-52
8-8,7-90
6-70,5-10
26-92,91-93
64-90,65-89
90-92,31-91
6-7,6-99
21-75,10-92
1-95,74-96
59-64,61-61
7-15,4-14
4-97,4-98
60-60,61-90
2-99,6-99
19-84,19-83
3-36,4-35
28-37,27-95
8-9,8-89
41-58,41-69
7-72,4-80
1-20,19-79
16-67,16-66
4-5,5-99
7-20,8-19
5-99,4-98
19-37,18-37
11-33,30-33
51-70,69-69
56-96,50-56
21-79,20-80
78-78,3-79
73-97,72-72
8-80,7-81
17-18,17-88
50-83,36-50
18-20,8-19
25-31,26-30
10-92,9-91
58-98,59-85
5-95,96-96
20-97,19-21
8-97,7-8
4-83,75-84
1-68,1-69
18-38,18-38
89-93,21-90
6-84,7-85
20-90,90-93
80-90,87-91
12-96,6-11
56-77,55-76
26-28,5-62
5-87,6-65
37-39,5-38
5-5,6-56
5-94,5-93
46-63,47-63
7-88,6-87
20-93,37-93
12-97,5-99
37-87,37-87
26-99,17-25
26-70,22-70
68-70,48-69
23-31,24-24
17-32,30-30
18-18,8-19
41-58,37-59
16-61,15-61
4-98,4-4
4-4,4-96
27-61,26-61
21-29,22-24
11-14,10-15
65-99,65-66
12-95,11-11
8-99,9-98
43-58,55-56
50-51,35-69
39-39,40-76
50-52,18-51
3-88,3-89
46-53,46-79
45-88,44-87
23-95,22-24
2-90,3-89
7-7,7-39
1-85,3-49
62-69,45-68
63-94,63-94
1-2,2-53
24-73,25-74
22-69,13-69
1-97,82-98
2-41,41-81
10-96,11-97
56-71,70-72
2-75,2-75
31-49,31-50
21-81,19-81
68-69,15-69
39-39,39-39
30-30,30-31
55-83,55-82
82-83,59-83
49-74,49-49
18-39,17-38
14-80,22-80
10-78,9-10
32-90,11-97
19-73,9-18
65-73,66-73
47-68,49-68
41-71,40-70
20-37,30-37
2-25,24-95
36-84,44-85
64-64,10-65
13-60,12-61
89-89,17-90
35-86,34-94
34-34,33-41
20-44,32-32
1-61,3-97
50-51,50-96
29-30,30-61
2-96,96-99
9-32,3-32
20-29,23-28
18-62,18-76
90-95,43-89
42-80,26-96
43-93,42-81
13-97,14-99
46-90,45-89
1-93,93-94
5-5,6-84
86-89,35-86
25-79,24-80
17-25,18-24
10-79,47-59
7-72,2-6
15-61,15-62
6-28,29-92
52-69,70-70
3-4,3-97
69-88,1-98
13-18,19-32
83-85,18-84
9-29,8-28
55-89,90-90
24-71,30-71
94-96,45-94
3-3,4-84
13-98,12-12
5-95,94-96
4-70,5-69
23-90,22-89
56-62,61-62
39-84,84-84
44-60,45-61
49-58,4-87
16-36,17-37
44-45,44-79
46-61,60-62
4-61,4-34
78-78,77-93
38-93,3-92
67-85,70-72
87-87,5-88
5-30,4-31
56-88,51-57
5-75,72-72
11-64,14-65
34-83,33-35
80-99,27-81
31-82,30-81
62-62,63-63
12-85,16-85
19-43,17-44
41-42,41-81
6-79,7-80
22-84,83-85
19-19,20-20
11-98,97-99
8-76,25-55
53-53,53-71
12-79,12-44
79-85,84-86
33-46,1-76
8-77,7-76
5-69,6-69
37-57,50-58
82-84,6-83
2-98,3-99
33-36,19-82
19-92,18-93
5-5,6-97
1-38,2-37
15-19,15-19
45-77,44-46
2-59,21-60
41-66,38-65
15-48,10-15
8-97,7-99
23-95,95-98
59-60,2-60
29-30,29-30
18-62,24-62
6-97,6-98
5-92,91-91
98-98,13-99
16-80,5-16
1-77,2-67
5-75,5-75
70-70,5-71
30-71,13-90
30-82,74-80
9-10,9-98
9-90,9-9
62-64,61-63
14-51,15-63
68-97,67-69
80-92,2-81
1-97,1-98
5-96,5-96
15-44,33-39
29-84,83-84
6-24,7-91
6-27,7-28
5-97,1-99
68-77,30-76
7-82,63-63
3-71,2-70
6-36,6-6
4-62,3-63
47-98,46-47
34-62,36-61
3-69,1-70
66-96,65-97
21-69,38-46
10-40,37-38
42-96,43-43
19-57,20-48
50-91,78-91
45-67,44-67
7-86,85-87
2-95,94-94
46-46,45-98
33-85,99-99
81-82,77-82
41-43,42-63
7-64,6-63
3-4,3-88
26-97,23-97
1-2,1-93
6-77,6-7
44-49,46-92
46-80,19-79
70-95,22-71
77-95,28-65
1-18,19-73
48-97,30-97
20-44,45-81
15-82,16-81
2-33,3-32
94-95,94-97
23-36,22-29
14-50,13-51
46-50,7-45
74-89,41-75
16-31,30-30
77-99,5-78
1-70,1-70
17-74,17-74
48-49,48-77
29-95,67-68
30-30,29-31
95-98,26-96
1-4,5-95
62-62,33-63
7-85,80-81
34-77,34-83
27-84,28-83
25-45,38-45
4-99,3-4
94-96,14-95
25-99,24-24
14-88,14-89
1-9,8-99
86-92,47-66
36-37,22-54
9-91,10-90
5-61,8-89
14-96,15-15
3-94,49-93
2-19,2-20
62-97,13-99
94-96,5-95
1-75,6-76
17-81,19-82
35-93,59-98
9-42,7-41
3-5,4-98
84-93,3-84
1-64,4-64
13-86,13-86
34-89,33-90
77-79,65-78
57-59,14-58
54-58,53-55
78-86,85-86
47-99,47-99
26-43,24-30
1-63,62-85
87-87,87-88
31-82,30-31
58-84,34-85
44-67,45-68
7-11,8-8
7-69,68-68
4-85,86-86
56-57,57-89
13-92,12-92
1-96,13-26
56-66,56-91
37-37,6-38
74-98,26-75
3-83,82-84
2-97,19-98
90-96,38-96
4-21,5-21
42-95,41-41
28-28,1-35
6-73,5-57
28-90,90-94
3-83,3-82
5-5,6-59
22-23,21-50
35-61,34-61
7-87,7-87
20-93,19-94
9-78,8-78
3-61,2-3
45-61,61-73
19-72,18-73
78-97,77-98
19-91,15-20
36-36,37-67
33-93,54-93
13-63,12-90
3-99,7-97
18-78,14-17
85-99,28-99
48-99,49-98
40-68,12-67
16-51,15-85
94-98,79-95
65-69,50-68
41-42,42-75
7-43,8-44
26-95,26-96
2-99,7-36
49-53,1-99
25-25,25-35
47-83,47-48
49-52,49-49
26-94,13-25
6-72,7-71
16-33,2-28
3-51,3-51
9-66,50-66
37-91,25-98
4-96,3-95
67-73,48-72
22-86,23-86
40-49,45-52
53-68,55-66
38-50,37-49
1-86,5-85
35-62,36-62
7-62,12-86
15-30,14-16
47-65,48-65
3-85,50-84
15-98,14-16
56-66,56-57
29-30,29-51
6-45,5-46
49-93,21-92
11-38,11-37
9-42,18-27
29-38,28-80
7-8,8-91
66-70,65-71
20-91,21-21
22-83,23-82
5-38,6-39
26-28,27-97
5-65,1-85
14-94,15-94
20-97,21-96
95-99,11-78
21-83,22-84
5-91,5-90
39-40,40-86
9-54,8-53
8-99,61-71
29-38,28-50
18-96,19-97
5-80,4-81
7-99,40-54
95-95,4-96
80-89,36-79
2-63,56-69
7-29,42-99
11-23,1-23
13-52,12-51
18-96,19-97
20-68,20-67
3-95,1-95
3-88,2-89
31-32,31-88
8-98,8-98
5-98,4-6
2-2,3-96
27-69,27-69
2-96,1-3
5-87,3-57
20-42,19-43
7-8,8-8
10-60,11-67
16-81,19-81
74-84,73-83
13-93,92-92
68-70,42-69
33-34,33-63
7-70,6-70
13-88,14-87
8-41,40-67
50-85,51-86
27-61,30-61
63-73,72-73
4-53,55-80
3-72,4-71
4-98,3-98
38-64,37-65
42-42,39-41
77-88,87-90
45-86,85-87
4-87,4-87
21-22,21-57
28-92,30-91
4-13,1-77
13-36,35-72
7-8,8-62
8-68,14-78
24-92,4-92
10-50,39-47
4-57,3-56
31-31,5-30
41-41,29-42
65-97,3-96
43-75,74-76
94-94,3-95
28-48,29-47
62-72,6-72
20-97,19-96
46-59,38-58
55-86,56-87
29-56,30-55
2-90,4-89
15-15,9-14
10-92,91-91
63-63,62-64
66-70,8-98
44-92,1-91
2-80,8-42
36-50,37-52
4-54,5-53
5-88,3-88
60-96,61-97
11-24,10-24
81-83,9-82
4-97,3-98
36-76,35-77
34-40,18-43
68-69,24-78
84-86,80-89
39-94,22-79
57-93,72-93
59-78,79-91
7-97,8-98
7-27,6-88
1-6,7-15
13-86,13-14
25-27,3-26
33-75,74-75
68-87,68-69
72-96,72-97
23-36,32-35
97-99,32-77
23-64,64-86
82-84,48-83
1-93,1-93
83-93,14-93
12-97,96-98
3-22,4-59
32-77,31-76
25-92,62-89
18-20,19-33
34-73,65-72
31-82,32-82
3-92,92-97
1-99,1-98
4-98,4-4
13-84,14-83
13-61,62-98
14-15,15-48
29-76,75-77
22-75,23-85
5-5,4-87
7-51,20-80
14-65,2-13
78-85,78-98
7-97,8-97
11-67,6-10
5-72,4-97
96-99,19-97
33-48,6-49
24-24,25-47
25-82,24-81
3-91,7-91
7-72,8-71
10-35,9-11
2-2,2-99
30-41,31-42
10-66,2-66
4-77,1-77
13-13,14-89
79-86,86-91
4-86,3-87
47-92,47-92
18-32,17-33`,E1=`    [H]         [H]         [V]    
    [V]         [V] [J]     [F] [F]
    [S] [L]     [M] [B]     [L] [J]
    [C] [N] [B] [W] [D]     [D] [M]
[G] [L] [M] [S] [S] [C]     [T] [V]
[P] [B] [B] [P] [Q] [S] [L] [H] [B]
[N] [J] [D] [V] [C] [Q] [Q] [M] [P]
[R] [T] [T] [R] [G] [W] [F] [W] [L]
 1   2   3   4   5   6   7   8   9 

move 3 from 3 to 7
move 4 from 1 to 9
move 5 from 6 to 3
move 6 from 9 to 8
move 2 from 9 to 5
move 4 from 3 to 7
move 1 from 3 to 6
move 3 from 5 to 7
move 1 from 2 to 1
move 4 from 7 to 8
move 17 from 8 to 7
move 1 from 6 to 2
move 2 from 6 to 7
move 1 from 8 to 3
move 2 from 4 to 6
move 3 from 9 to 6
move 5 from 6 to 3
move 5 from 2 to 1
move 9 from 3 to 4
move 20 from 7 to 3
move 7 from 5 to 3
move 6 from 3 to 5
move 4 from 1 to 9
move 4 from 5 to 6
move 2 from 1 to 8
move 2 from 7 to 3
move 3 from 6 to 3
move 2 from 5 to 8
move 2 from 9 to 3
move 1 from 9 to 6
move 2 from 2 to 4
move 26 from 3 to 4
move 28 from 4 to 6
move 8 from 6 to 1
move 4 from 8 to 6
move 1 from 9 to 3
move 2 from 3 to 6
move 1 from 3 to 9
move 26 from 6 to 9
move 2 from 7 to 3
move 5 from 1 to 4
move 1 from 1 to 4
move 1 from 6 to 5
move 1 from 2 to 5
move 2 from 3 to 7
move 2 from 5 to 8
move 10 from 4 to 5
move 1 from 6 to 1
move 1 from 8 to 5
move 2 from 7 to 2
move 4 from 4 to 3
move 4 from 7 to 2
move 2 from 1 to 8
move 12 from 9 to 2
move 5 from 2 to 3
move 3 from 3 to 1
move 1 from 1 to 7
move 6 from 3 to 8
move 1 from 5 to 3
move 10 from 9 to 1
move 7 from 8 to 7
move 1 from 3 to 9
move 7 from 7 to 2
move 3 from 2 to 9
move 6 from 2 to 9
move 5 from 9 to 1
move 7 from 2 to 1
move 21 from 1 to 7
move 2 from 1 to 2
move 5 from 2 to 3
move 2 from 4 to 3
move 10 from 5 to 4
move 11 from 4 to 7
move 5 from 3 to 1
move 1 from 4 to 2
move 2 from 8 to 3
move 7 from 9 to 3
move 3 from 9 to 1
move 9 from 7 to 9
move 1 from 3 to 4
move 3 from 9 to 4
move 5 from 9 to 3
move 4 from 3 to 8
move 22 from 7 to 8
move 10 from 3 to 5
move 1 from 9 to 4
move 8 from 1 to 5
move 3 from 4 to 9
move 1 from 3 to 6
move 2 from 1 to 7
move 1 from 4 to 3
move 1 from 4 to 7
move 1 from 2 to 1
move 1 from 6 to 9
move 1 from 3 to 7
move 1 from 1 to 7
move 4 from 9 to 3
move 22 from 8 to 5
move 37 from 5 to 9
move 37 from 9 to 6
move 3 from 7 to 9
move 2 from 8 to 6
move 1 from 9 to 3
move 2 from 5 to 1
move 1 from 2 to 5
move 7 from 6 to 4
move 18 from 6 to 2
move 1 from 3 to 7
move 1 from 5 to 4
move 1 from 8 to 5
move 9 from 2 to 5
move 3 from 4 to 6
move 2 from 2 to 7
move 5 from 2 to 3
move 1 from 8 to 1
move 1 from 9 to 4
move 2 from 7 to 8
move 7 from 3 to 7
move 3 from 1 to 3
move 1 from 9 to 5
move 17 from 6 to 2
move 12 from 7 to 9
move 1 from 4 to 8
move 1 from 8 to 4
move 4 from 5 to 2
move 2 from 8 to 9
move 3 from 4 to 2
move 3 from 3 to 7
move 2 from 4 to 3
move 8 from 9 to 1
move 1 from 4 to 2
move 24 from 2 to 1
move 6 from 5 to 1
move 1 from 7 to 4
move 3 from 2 to 8
move 3 from 3 to 7
move 1 from 4 to 6
move 2 from 8 to 5
move 3 from 9 to 4
move 1 from 5 to 3
move 1 from 3 to 5
move 3 from 9 to 8
move 1 from 5 to 7
move 5 from 7 to 9
move 2 from 8 to 4
move 1 from 3 to 2
move 1 from 7 to 3
move 1 from 8 to 5
move 1 from 2 to 9
move 1 from 6 to 2
move 2 from 9 to 8
move 1 from 3 to 7
move 24 from 1 to 3
move 1 from 7 to 6
move 3 from 5 to 1
move 1 from 4 to 3
move 1 from 8 to 6
move 1 from 6 to 4
move 1 from 5 to 4
move 1 from 8 to 5
move 1 from 5 to 7
move 1 from 2 to 5
move 1 from 6 to 3
move 1 from 4 to 9
move 1 from 5 to 7
move 2 from 9 to 2
move 3 from 4 to 8
move 2 from 4 to 3
move 11 from 1 to 9
move 7 from 9 to 1
move 9 from 1 to 9
move 1 from 3 to 7
move 3 from 7 to 4
move 2 from 2 to 6
move 2 from 4 to 1
move 1 from 6 to 7
move 22 from 3 to 7
move 1 from 3 to 5
move 1 from 5 to 2
move 1 from 6 to 7
move 5 from 1 to 9
move 1 from 8 to 5
move 1 from 2 to 1
move 15 from 9 to 4
move 6 from 9 to 6
move 14 from 4 to 1
move 5 from 6 to 2
move 1 from 5 to 1
move 9 from 1 to 4
move 5 from 1 to 3
move 3 from 2 to 6
move 2 from 8 to 1
move 5 from 1 to 9
move 10 from 7 to 8
move 3 from 3 to 8
move 2 from 8 to 7
move 5 from 4 to 9
move 3 from 3 to 5
move 1 from 6 to 9
move 1 from 3 to 9
move 1 from 3 to 6
move 1 from 3 to 7
move 2 from 6 to 9
move 2 from 4 to 1
move 13 from 9 to 8
move 2 from 1 to 4
move 6 from 4 to 9
move 1 from 6 to 2
move 1 from 2 to 3
move 3 from 5 to 3
move 4 from 3 to 2
move 7 from 9 to 2
move 1 from 6 to 4
move 4 from 2 to 5
move 2 from 2 to 1
move 4 from 5 to 8
move 1 from 4 to 2
move 6 from 2 to 1
move 2 from 2 to 1
move 22 from 8 to 2
move 16 from 7 to 4
move 14 from 2 to 7
move 7 from 8 to 2
move 4 from 7 to 1
move 14 from 2 to 1
move 10 from 7 to 1
move 1 from 7 to 3
move 1 from 3 to 4
move 1 from 2 to 5
move 25 from 1 to 5
move 1 from 5 to 3
move 4 from 4 to 2
move 13 from 4 to 6
move 4 from 2 to 1
move 3 from 6 to 2
move 9 from 1 to 2
move 22 from 5 to 4
move 1 from 2 to 7
move 8 from 1 to 5
move 1 from 4 to 5
move 15 from 4 to 3
move 11 from 2 to 1
move 1 from 7 to 3
move 2 from 5 to 1
move 13 from 3 to 5
move 10 from 6 to 7
move 1 from 3 to 4
move 1 from 3 to 6
move 1 from 3 to 9
move 1 from 9 to 5
move 1 from 6 to 2
move 6 from 4 to 9
move 1 from 3 to 7
move 1 from 5 to 1
move 3 from 5 to 6
move 1 from 4 to 3
move 12 from 5 to 6
move 1 from 2 to 8
move 4 from 1 to 7
move 1 from 3 to 2
move 1 from 2 to 6
move 9 from 6 to 4
move 1 from 8 to 7
move 3 from 1 to 2
move 2 from 2 to 5
move 5 from 4 to 6
move 1 from 4 to 6
move 6 from 7 to 3
move 6 from 5 to 7
move 12 from 7 to 4
move 1 from 2 to 8
move 6 from 9 to 5
move 1 from 8 to 9
move 1 from 3 to 6
move 4 from 4 to 1
move 1 from 7 to 9
move 4 from 4 to 6
move 2 from 9 to 7
move 7 from 5 to 1
move 3 from 1 to 4
move 4 from 3 to 1
move 10 from 6 to 9
move 1 from 3 to 5
move 8 from 4 to 6
move 2 from 5 to 2
move 4 from 7 to 4
move 1 from 5 to 9
move 5 from 4 to 7
move 1 from 4 to 8
move 2 from 2 to 6
move 1 from 5 to 3
move 4 from 9 to 6
move 11 from 6 to 8
move 1 from 1 to 4
move 1 from 4 to 1
move 1 from 3 to 1
move 10 from 1 to 4
move 3 from 9 to 5
move 1 from 9 to 3
move 2 from 7 to 4
move 3 from 9 to 4
move 3 from 5 to 8
move 1 from 3 to 5
move 15 from 8 to 2
move 8 from 1 to 4
move 2 from 1 to 2
move 10 from 2 to 3
move 1 from 5 to 7
move 3 from 7 to 8
move 10 from 3 to 5
move 4 from 4 to 2
move 7 from 4 to 1
move 2 from 7 to 4
move 1 from 8 to 9
move 5 from 1 to 6
move 13 from 6 to 2
move 2 from 1 to 4
move 15 from 4 to 5
move 1 from 9 to 3
move 1 from 3 to 4
move 2 from 8 to 3
move 20 from 2 to 6
move 3 from 2 to 8
move 2 from 3 to 8
move 9 from 5 to 2
move 6 from 5 to 9
move 2 from 4 to 1
move 8 from 5 to 4
move 2 from 8 to 1
move 5 from 9 to 5
move 3 from 5 to 7
move 1 from 8 to 2
move 2 from 4 to 1
move 14 from 6 to 4
move 2 from 1 to 8
move 5 from 6 to 3
move 3 from 1 to 6
move 5 from 3 to 2
move 1 from 9 to 6
move 8 from 6 to 2
move 2 from 7 to 4
move 1 from 1 to 3
move 2 from 5 to 8
move 5 from 4 to 3
move 2 from 5 to 3
move 1 from 7 to 5
move 4 from 4 to 3
move 2 from 4 to 2
move 1 from 3 to 7
move 5 from 3 to 7
move 1 from 7 to 3
move 3 from 3 to 2
move 1 from 5 to 9
move 2 from 7 to 9
move 1 from 9 to 5
move 1 from 5 to 3
move 10 from 4 to 9
move 3 from 3 to 9
move 27 from 2 to 5
move 3 from 8 to 3
move 2 from 2 to 6
move 4 from 9 to 7
move 5 from 3 to 8
move 5 from 7 to 3
move 25 from 5 to 1
move 3 from 9 to 8
move 1 from 3 to 2
move 1 from 5 to 3
move 2 from 7 to 9
move 10 from 8 to 7
move 1 from 2 to 3
move 13 from 1 to 7
move 3 from 9 to 7
move 3 from 3 to 1
move 1 from 5 to 8
move 2 from 8 to 6
move 4 from 6 to 5
move 4 from 5 to 6
move 1 from 4 to 6
move 23 from 7 to 9
move 2 from 6 to 8
move 28 from 9 to 1
move 1 from 8 to 1
move 3 from 7 to 3
move 1 from 9 to 4
move 3 from 3 to 6
move 3 from 3 to 4
move 6 from 6 to 8
move 12 from 1 to 7
move 9 from 1 to 6
move 3 from 6 to 3
move 2 from 4 to 7
move 4 from 8 to 7
move 1 from 8 to 5
move 1 from 8 to 4
move 8 from 1 to 7
move 1 from 3 to 4
move 1 from 8 to 3
move 3 from 7 to 5
move 9 from 1 to 3
move 3 from 6 to 5
move 3 from 1 to 7
move 4 from 4 to 2
move 3 from 1 to 4
move 4 from 2 to 8
move 1 from 6 to 2
move 3 from 5 to 6
move 4 from 8 to 5
move 9 from 7 to 6
move 12 from 7 to 1
move 5 from 7 to 3
move 1 from 9 to 7
move 1 from 2 to 9
move 1 from 9 to 4
move 7 from 6 to 3
move 5 from 6 to 2
move 1 from 7 to 6
move 3 from 6 to 1
move 2 from 4 to 9
move 7 from 5 to 8
move 2 from 9 to 4
move 1 from 5 to 8
move 4 from 4 to 1
move 11 from 1 to 7
move 8 from 3 to 1
move 8 from 8 to 6
move 3 from 3 to 5
move 5 from 6 to 1
move 2 from 1 to 2
move 6 from 2 to 3
move 2 from 6 to 7
move 3 from 5 to 4
move 7 from 3 to 9
move 5 from 9 to 5
move 3 from 4 to 3
move 4 from 5 to 2
move 2 from 9 to 4
move 6 from 1 to 9
move 1 from 6 to 9
move 7 from 7 to 1
move 1 from 7 to 3
move 2 from 4 to 5
move 1 from 9 to 1
move 4 from 2 to 3
move 2 from 5 to 2
move 9 from 3 to 1
move 3 from 2 to 4
move 28 from 1 to 6
move 2 from 1 to 3
move 17 from 6 to 3
move 2 from 9 to 5
move 2 from 6 to 7
move 1 from 5 to 7
move 1 from 9 to 4
move 5 from 6 to 9
move 14 from 3 to 5
move 15 from 5 to 9
move 1 from 4 to 9
move 1 from 5 to 6
move 1 from 4 to 1
move 11 from 3 to 6
move 1 from 1 to 6
move 12 from 6 to 8
move 4 from 9 to 7
move 20 from 9 to 4
move 18 from 4 to 5
move 6 from 5 to 8
move 12 from 8 to 2
move 2 from 2 to 6
move 1 from 5 to 2
move 4 from 4 to 8
move 5 from 5 to 9
move 4 from 3 to 6
move 1 from 3 to 8
move 7 from 7 to 8
move 10 from 2 to 8
move 1 from 6 to 3
move 10 from 6 to 5
move 10 from 5 to 2
move 2 from 7 to 5
move 9 from 2 to 1
move 27 from 8 to 9
move 2 from 2 to 7
move 9 from 1 to 2
move 1 from 5 to 3
move 9 from 2 to 1
move 1 from 8 to 7
move 2 from 1 to 3
move 19 from 9 to 1
move 5 from 5 to 1
move 3 from 9 to 2
move 2 from 3 to 9
move 1 from 3 to 4
move 5 from 7 to 4
move 1 from 7 to 3
move 17 from 1 to 2
move 1 from 5 to 3
move 9 from 9 to 5
move 2 from 1 to 2
move 1 from 4 to 9
move 2 from 4 to 6
move 1 from 4 to 7
move 6 from 1 to 8`,K1="cvtvbvfbvfbfqfrrtnnmqqmcqqpfplfpphchpcpcfppmwwhhscccjwjnnctcjtjgjbgjjdzjjwzwfffnhhgppjmpmgppppzbzbrzznttfqqhtqqbssrjjffgssnqnsqnsqnnmlmmztmtqmqccqscsshrsrtstrrjwrrswwpnnftfwwwzznsstbbbtzzncnbcnbccwtwctwwjgjcjtccblclgcgjgngwgbggpbbbbbgcczzfsfbbwlwwnqwnwbnwnmmbjjnfnqfqfvvgvqqvcvggpnpssptpnpjjvvpdpqpcqpcqqnhhnqncqclcfcfjcjhjdjqddhndnmmvmfmsmdsdwsdswsnsgsmsrmrjjpzzzzcppczcscsgcczqcqnnpzpbbdqqqqsqlslzljzjdjbjdjvvlhvvnbbjtbbqbdqdggzwgghhdssmttjtttmwtmtjjcpjpjptjpjmpptnntgttjpttljjwtjwwrgrvgrvrmvvrvdrdcdmmvvbpbddfbdbppdccjdjvjpjjgzjzdzfddqcqlccbvbqvqvjqjggqrqdrqrhhwggmvgmgvgrvvzwzddlzlbbdpbdbtbhthnthttjwtwffwvvrccnpcnclcgcrrgdrrgzgmzggzhhftfppnwppqhhmddzhdzzzjqjhqqcgqqmjjwppfrprlrjlrjjlhjlhjjnbnlblbzlbbfjjwfjjdcdndvvbllfmlmfmvmnnlcnncsnslsvlsvlsltslslqsqzssslqlssqrrpdpwdppsfpsprpffchhcvcpvvjpjvjmvvrjrqrzqqqlvvzzggcgrcgcmmvnmmchmmswsvwsvwswnwswdwmwzmmqfqrqtrqqwqlqlmqmsmggpzpjjlvllzplzlbzzbhhglhhwwhfwwpwgwrwlwplppfvflftltffccmcrcgrcgghgmmbrbppwvvghvhphhztzpzzwbbtpppcnpccnvcvbccvfvmffmtmbttdqdrrfnrnffsgstttbhhgmmtffhthllsbllsqsllptpwpvpdpsddsgsrrngnpggwbwwppfqfmqfmfvfzzzldltdtvdvtvtbvtgpvtnvcsdbwjrqwrfzdhwfwnmtrltdhsfzwwfpscrlsffchnfszqdddsztwzcbwdwfnljpfdsqgpnjffqfgsprggfwgvfldvzmnrpnzvfscswnzbljtvshzmcztqqwtzdstsqggqqvvlmspjjcmllcmsndwpllrvlrglphcqjgwzntwqffthrfmfgpcvjvclvdrjrpnwtrlshlnwgbbznpflsfmgvbwmnwjpnqhmdnsmwnmblqzjfzfcslhntnjhbrvvlfbffsbhrtvjltqrqszsrpmdghmhsrqlmrjdsgtsgwggdlqptqrvgmwrpcjrnmmmcdpgjzgghqmshhmddfvfrqwnwvwbvzzpmwzmvvgsqlsgvmtczwnbzrtnzjnpjjghdzsmcgvqpdhltvltbfvgsgzhvqjjnpspngqpvqwvtqrczqzwrclqbnplmvlnvcwdbzlrnwbppvdfzmblnqfpfqlngttrrcjzfjnrnmssdrrvbvhtrfzblzsjbqwbttsshmcmfhrfbfqspvcfmqbwjszmvwqnpszcfhtnqtftvtpvcjrcnlmfnvlpjzspcnmvvshpsdfhtbhgjcmjmtpmtcbwnlgtnvlwlggbnzfrrqljmjrwjtzfmgbllmmjtfhrszfrfpftmpzhzdhfwdbdnwqspjbrlglgdwtfzcrdhwgqltvthbnrqfngjgnddqlcpjflqzvbhmlzsvpvlzdvhspmchrjlzfgnlpwdnszqdqpnrchdrswfwnflslcpfmbfrplsmchbgjhhhlzjlvztpdhslrpmmcthhjwfczjtmbmsvzvsqrvzrcnflqldfnhjzlcsfhgrtqtscnbzqjglgjnqbtprrprrdtqqtlqwdqnmgbglvwtrpnpjqdsmvczbnldvmgmtpmmqbwgjbfsqbjvnjhhlrppptlrjsptpvghbgtvwvsrnggznjsbjpnwpdsqmmjjqjdwshqwzvqgpnlhdldwzmvmdnhrnhpscrbnbdtmfqwlmrlszljpjdqgjpgcdwtqzsbqsndjdslrstjwbbfnjvrjlbrphqspltjzpvsgccfrmqhfhjmlslncpgpflhjlrzqsffrtcgsvzpjmlqjznscgjrjhzfjbbchvgjgvfsrpnzdrstdtsltqldfldvfdjqdwsltcbnnvcgvnjpgdjzsbzgfvgvtmghwfmrmblscfdqlsdgcdbgsphfvvvnffcqwlrvnsrjmvvdrjdljlppsfsrmwwvmsqcgtgtfjhqbqvlsnwdwzhncgprbspjzqnbllwcjnqpfzlhscdtvlldffngwttntsbtlctdfbzjgclgbhhjtlffvtgbdsswczlgmwntrrnnbdtflplfbtqcfrhtgjnrltvzqlcvtdthldqrvjdmlntdjzcncrplgmdbqhlrrfdszrnbrllhgpzzgjnqzrjrtjjntqvdphgvjtbtqfjwvlpprrcvmpjcdmntvtqjvjrhngbtmdtflpqmlmmvjjjpdlcvntlvlgstbblwfwjrbcqjgzvjjzflfhdvgnhpnqprcvmhsrpmgfcgjpdbqpmpvlnmzdngzqcqtdsbbqbdhtgpqmqwtcctsvhwmlhpgzgpwwsqngsrwzghfhzbqcpspfhqbllbvpwgwdnghqnvjtfqtwgvnbfbpcffbwwbfqgqnftpqdtwhmrprpgdlnwrcmdndllwbvlrrjvmwlbgfwgbhtmbqhfvhlhlthbrljwnwcgsdgsbbzgnwzmjfgnfjcqhspjwctntznjptsnbpwtfzmrqwjzrmdthfwdvttrcghbjndfmtswhsmdwwwffmgsvshmlhdbwdscjnvrvqnwttlsmfbssnsscftcrpwfbbplbpmvzmttvbgpnjtqqzcfdfwqdphggwbnhfvssmdjvbvtlrcghltthqrqdbvjnbqpzjcggrbnrswhvdcrmgncsmhsmstmcbwgbfwvzqtdrpjbgljdgcncgcdslhftptnvfhgpsjqqmnsjmqhztnfzqqqhccbnqjlhqcwwbfzgpmbvjszswjlhcqshtqdmwmhpgqgzbwbtchrdwgnvfqcgcmngtddpzfgjrrssdmcnbtpbhfvfbdgzmcbjqtdqrnrdchtrcfpmtnvfczdlnjplwccfmzjwwvdsrcjznrcbczdqwshjgvhjpgdgjvtvmdzncrqgffzhcbwstvltqbrzfbnrrvlntjmzctvnqhdcgvvmmbfplzpwgsdzdtvnwnshnwbwqplbctntslczwhblsnzdcsgltvlfvbtvthvlsmzmfgzhpvrvczdhmcpmgqzbdhbcdbstrrtzgrbhhwwghzlgcdtlcjtjdcwdtqpvpwzrwmhczfsdmwjlgtmzvdbwzdnsztvqzhjpfrqzllgvrsbmhvrlzwtfmpzchftrzlmndpwqgcmhdzmjrjvpbnrcmjvzbzlqngmrzcbdwfcwmlnlqsdgbvmvqcsjtwgvtpmqdtdqfrshmlgnjqdwsrpjcfnfpjzlhslsvppmgprqlpcfztcngmqgrvqvpcszzgtbpcrghmgnvgplctgdljhwjgbzmjrdsccdtrwjrrbttzmpvmzlmqdfwdccfzqztdjmcgrcdwghgmmntdwrclshlgnsmhmltwcczncndtglnqvcvbwlvcgqtzpnqnlllchwjwrlhcdlbjlzvhvtjsttqhvhfqbsqjpfcmpsfshgrrwgprjtfnhsjqqntrjfgjjmjbqwdjlcjjdljpppgvqvgrrwvclbmncmqglhbtjcfrbjmhqgmlpzgljntqvrcggmrgtbrftvhrnjbvzstlnzrqcgncnjhdrnqcnwcrstvdsgnwzjzmqsdtwzzjmfgzpslhqclhtjnrlwwfrqgmhsttfdprhgmphzfdfqntwztltnnfqwgdnnbrlgzmtwqsvhbjjqtcgmghnbchdfgfrdtjnvlgtqdgrfwmgnmpslqmqzdgqztnppbc",n5=`$ cd /
$ ls
dir bqc
dir mwmlf
dir ngn
143562 nrwjb
78449 qqvdcclf
dir qrnm
dir smfzmmhc
116085 tvrms
dir vrdrsj
$ cd bqc
$ ls
5693 qqvdcclf
$ cd ..
$ cd mwmlf
$ ls
dir cmfphpc
dir lqqshq
dir mwmlf
dir rlf
dir smfzmmhc
$ cd cmfphpc
$ ls
235620 tprth.gjn
82743 vrdrsj.fbl
$ cd ..
$ cd lqqshq
$ ls
94188 crswqlvd.nsj
dir dttthls
60078 lbsfsspm
dir lqp
74624 nrwjb
247709 tjhcqw.wrq
267693 tvrms
dir zshrcgfn
$ cd dttthls
$ ls
109072 nrwjb
31512 qqvdcclf
$ cd ..
$ cd lqp
$ ls
237917 nrwjb
45489 vrdrsj.ntw
$ cd ..
$ cd zshrcgfn
$ ls
185533 smfzmmhc.zzd
$ cd ..
$ cd ..
$ cd mwmlf
$ ls
dir bbvhpmsj
dir mwmlf
83589 qqvdcclf
$ cd bbvhpmsj
$ ls
232123 hrvlgmjb.wrv
137190 rlf
21785 tghvbj.mfr
25344 vrdrsj.swp
$ cd ..
$ cd mwmlf
$ ls
dir wnn
$ cd wnn
$ ls
dir thd
$ cd thd
$ ls
36125 lgt
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd rlf
$ ls
dir fps
128272 lggpfj.gnr
146745 lrdq.zgm
dir mwmlf
266383 mwmlf.wnp
dir ncrlvggp
dir qpgmrj
$ cd fps
$ ls
dir rqjt
dir wpqvmn
$ cd rqjt
$ ls
175784 pcdtdblc.znj
185424 wmstvdt.lhn
$ cd ..
$ cd wpqvmn
$ ls
141743 ljslzhjl
$ cd ..
$ cd ..
$ cd mwmlf
$ ls
169015 rlf
$ cd ..
$ cd ncrlvggp
$ ls
81450 fqtrpm.mqr
146399 jtbr
dir nnqgqqj
288302 qqvdcclf
$ cd nnqgqqj
$ ls
dir fvbhh
$ cd fvbhh
$ ls
121112 zmn.fjz
$ cd ..
$ cd ..
$ cd ..
$ cd qpgmrj
$ ls
dir hrvlgmjb
dir pbc
$ cd hrvlgmjb
$ ls
7858 czvpvwz
$ cd ..
$ cd pbc
$ ls
150816 tprth.gjn
$ cd ..
$ cd ..
$ cd ..
$ cd smfzmmhc
$ ls
dir jwvw
184385 spbjrlv.spt
dir trpdgl
201578 zzhz
$ cd jwvw
$ ls
47747 nrwjb
$ cd ..
$ cd trpdgl
$ ls
136682 mwmlf
$ cd ..
$ cd ..
$ cd ..
$ cd ngn
$ ls
dir fqbph
282363 lscdth.lbj
dir mwmlf
273281 qbpmcqs
7547 qdffbp
223960 tprth.gjn
$ cd fqbph
$ ls
dir bgtbmzj
dir lzjf
12361 nrwjb
dir pdsdttz
150218 pfvtwr.pbf
dir rlf
158227 sfhsszcq.tzv
183244 smfzmmhc.drh
$ cd bgtbmzj
$ ls
dir gvqhtfg
dir jmvzv
194008 ldpfs.qhr
dir mtztr
11099 nfqmvqcm.ftd
dir szp
153379 zrtsd.jwg
$ cd gvqhtfg
$ ls
dir ntq
dir rlf
62076 rlf.nlc
$ cd ntq
$ ls
dir wdtzhz
$ cd wdtzhz
$ ls
dir tlqcbp
$ cd tlqcbp
$ ls
102930 smfzmmhc
$ cd ..
$ cd ..
$ cd ..
$ cd rlf
$ ls
185079 tjhcqw.wrq
$ cd ..
$ cd ..
$ cd jmvzv
$ ls
dir hfmtzbhf
61556 jzbvmc
dir scjpjp
237487 sgh
dir smfzmmhc
$ cd hfmtzbhf
$ ls
dir ldt
136126 tvrms
$ cd ldt
$ ls
dir smfzmmhc
dir wrhpzrfm
dir zbcfv
$ cd smfzmmhc
$ ls
86537 tjhcqw.wrq
$ cd ..
$ cd wrhpzrfm
$ ls
263122 smfzmmhc.shv
73772 tvrms
$ cd ..
$ cd zbcfv
$ ls
dir vrdrsj
$ cd vrdrsj
$ ls
220800 zwdbh
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd scjpjp
$ ls
38282 rlf
93306 rlf.blz
$ cd ..
$ cd smfzmmhc
$ ls
dir gqms
dir mwmlf
21587 nrwjb
184621 zvq.lvr
$ cd gqms
$ ls
dir frbs
dir rlf
$ cd frbs
$ ls
dir mpdll
82901 zdmnm.wlc
$ cd mpdll
$ ls
dir mgqd
dir mrljj
$ cd mgqd
$ ls
75558 vrdrsj.zwc
$ cd ..
$ cd mrljj
$ ls
dir qmsgj
128171 qqvdcclf
245942 rlf.hgt
dir zzvbt
$ cd qmsgj
$ ls
7382 mwmlf
$ cd ..
$ cd zzvbt
$ ls
285714 zltjmn
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd rlf
$ ls
43731 gttgwfgf.cpd
dir hvtn
112018 jdhb.ssj
195239 rlf.gvd
200476 spsstb
$ cd hvtn
$ ls
dir zzsfgzc
$ cd zzsfgzc
$ ls
116544 vrdrsj
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd mwmlf
$ ls
dir hmpvn
dir shlnfcpz
$ cd hmpvn
$ ls
55892 qqvdcclf
$ cd ..
$ cd shlnfcpz
$ ls
144766 fnrhmbbm.rnp
2622 tjhcqw.wrq
219884 tprth.gjn
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd mtztr
$ ls
dir plngmzl
dir qbwzhr
$ cd plngmzl
$ ls
153434 dhjv.pfn
$ cd ..
$ cd qbwzhr
$ ls
26553 mcb.djg
$ cd ..
$ cd ..
$ cd szp
$ ls
37741 qqvdcclf
dir vrdrsj
$ cd vrdrsj
$ ls
dir hznmsclb
13218 mwmlf.vhs
102602 rggt
228549 rlnf.qrt
$ cd hznmsclb
$ ls
17957 mwmlf.lsv
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd lzjf
$ ls
40821 lfgh.jwg
dir rplfgb
$ cd rplfgb
$ ls
301639 zmrpm.pqn
$ cd ..
$ cd ..
$ cd pdsdttz
$ ls
294779 tprth.gjn
$ cd ..
$ cd rlf
$ ls
37853 qst.zgc
$ cd ..
$ cd ..
$ cd mwmlf
$ ls
dir dqvhgnj
dir fvjtnl
dir jfsgp
230725 tjhcqw.wrq
2872 tvrms
dir zszcsbl
$ cd dqvhgnj
$ ls
214328 bph
138045 tjhcqw.wrq
$ cd ..
$ cd fvjtnl
$ ls
62568 sllvfsf
286839 tjhcqw.wrq
241004 zvqrg.bsg
$ cd ..
$ cd jfsgp
$ ls
116677 tprth.gjn
151347 vtbt
$ cd ..
$ cd zszcsbl
$ ls
97786 hrvlgmjb.wzz
$ cd ..
$ cd ..
$ cd ..
$ cd qrnm
$ ls
70534 nrwjb
292701 qqvdcclf
153174 sjqvgh.nvt
$ cd ..
$ cd smfzmmhc
$ ls
dir gjrqmcjl
63451 hrvlgmjb
dir mwmlf
dir ncgjsjj
246754 nrwjb
dir pvnbj
dir sjqwr
dir vrdrsj
dir vwfnglr
$ cd gjrqmcjl
$ ls
283020 gwcrpgc
36180 ltmzzz
dir tpsr
$ cd tpsr
$ ls
51208 nscwcztf.wlh
121548 smfzmmhc
$ cd ..
$ cd ..
$ cd mwmlf
$ ls
263186 mwmlf.fqd
$ cd ..
$ cd ncgjsjj
$ ls
204801 nrwjb
116293 rdrmctwg.nqc
36548 tjhcqw.wrq
$ cd ..
$ cd pvnbj
$ ls
dir cfmn
dir cnhmcjp
231615 ctllrm
dir czmw
dir drfzgwtz
135330 jsm
dir jtjzwjh
dir nfg
279734 qqvdcclf
220762 tvrms
35964 vrdrsj.jqj
$ cd cfmn
$ ls
300636 frn.ccd
dir qmtc
dir sfvd
$ cd qmtc
$ ls
267669 jwvjslwp.vsp
180586 tvrms
$ cd ..
$ cd sfvd
$ ls
169064 cgzmwg.rgr
dir hsz
270729 qgmmc.sqq
dir qpzbffd
92811 shcpdlm.nwz
dir sstdzdf
dir thrzw
dir wscsr
$ cd hsz
$ ls
301584 qqvdcclf
$ cd ..
$ cd qpzbffd
$ ls
264911 mwmlf.rvg
dir rlf
32109 svhwhw.fdp
155713 tjhcqw.wrq
dir vrdrsj
$ cd rlf
$ ls
32357 tvrms
$ cd ..
$ cd vrdrsj
$ ls
93501 nrwjb
$ cd ..
$ cd ..
$ cd sstdzdf
$ ls
241812 mgrvcbjc.rqb
dir mwmlf
273819 nvrssljz
156873 tvrms
$ cd mwmlf
$ ls
133649 wdfvctwp
$ cd ..
$ cd ..
$ cd thrzw
$ ls
67552 smfzmmhc
$ cd ..
$ cd wscsr
$ ls
132663 dnbvw.zwd
dir ffthd
293463 hrvlgmjb.fwh
dir lhjvfdh
194357 nrwjb
dir smj
56668 tprth.gjn
303099 tvrms
dir vrdrsj
$ cd ffthd
$ ls
84952 nrwjb
192566 rlf
dir slbg
78478 srzz
250044 tprth.gjn
97100 tvrms
$ cd slbg
$ ls
203375 nrwjb
39137 qqvdcclf
$ cd ..
$ cd ..
$ cd lhjvfdh
$ ls
1747 rtphln.pgc
163505 tjhcqw.wrq
76891 tprth.gjn
$ cd ..
$ cd smj
$ ls
6853 hhtdhzgn
158303 pmsflvrn.hnh
$ cd ..
$ cd vrdrsj
$ ls
dir jdlc
263568 vrdrsj
dir vvtl
$ cd jdlc
$ ls
12435 hqggp.lrq
292141 ntbcht.zbw
$ cd ..
$ cd vvtl
$ ls
118913 qqvdcclf
291087 tjhcqw.wrq
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd cnhmcjp
$ ls
263233 tjhcqw.wrq
$ cd ..
$ cd czmw
$ ls
dir gdsgw
dir gfd
3390 mwmlf.zss
$ cd gdsgw
$ ls
298839 dbwsmwnb.svt
170672 tprth.gjn
$ cd ..
$ cd gfd
$ ls
193212 tld
$ cd ..
$ cd ..
$ cd drfzgwtz
$ ls
257122 tprth.gjn
$ cd ..
$ cd jtjzwjh
$ ls
dir jhpp
274740 lnrwrpjj
35217 ptzmfsmr.pwc
67549 qpdj.pfc
$ cd jhpp
$ ls
40279 jgstzhw.cbq
$ cd ..
$ cd ..
$ cd nfg
$ ls
126237 mqfl.flt
$ cd ..
$ cd ..
$ cd sjqwr
$ ls
53423 bngqncqn
dir lblv
178935 nrwjb
188826 tprth.gjn
dir vrdrsj
286449 vrdrsj.svn
$ cd lblv
$ ls
dir bptgd
215281 jjvcgb.nwc
dir rlf
300004 tvrms
$ cd bptgd
$ ls
19667 mwmlf
$ cd ..
$ cd rlf
$ ls
dir mwmlf
263985 rbhz.plr
$ cd mwmlf
$ ls
254206 smfzmmhc
$ cd ..
$ cd ..
$ cd ..
$ cd vrdrsj
$ ls
dir vrdrsj
$ cd vrdrsj
$ ls
250310 hrvlgmjb.bbf
130543 mwmlf.lbq
$ cd ..
$ cd ..
$ cd ..
$ cd vrdrsj
$ ls
dir mwwr
dir rlf
$ cd mwwr
$ ls
dir lhz
$ cd lhz
$ ls
dir ssz
dir vrdrsj
$ cd ssz
$ ls
107472 hcnsgjhj
$ cd ..
$ cd vrdrsj
$ ls
303694 rlf
$ cd ..
$ cd ..
$ cd ..
$ cd rlf
$ ls
299875 nrwjb
$ cd ..
$ cd ..
$ cd vwfnglr
$ ls
dir mtvgvvcr
114118 mzhgbj.zvv
273343 tprth.gjn
28259 wgrp
$ cd mtvgvvcr
$ ls
218927 bvlv.npm
64283 hrf.czg
dir mnmqqqgh
103691 qtb.fnb
dir smfzmmhc
252712 zjlgc.sfg
$ cd mnmqqqgh
$ ls
231583 hrvlgmjb.mtq
$ cd ..
$ cd smfzmmhc
$ ls
dir dzjfd
dir jjslqwn
264128 nrwjb
257359 tvrms
$ cd dzjfd
$ ls
dir smfzmmhc
237116 zzgr
$ cd smfzmmhc
$ ls
230613 qqvdcclf
91615 smfzmmhc
$ cd ..
$ cd ..
$ cd jjslqwn
$ ls
98708 mwmlf.qtq
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd vrdrsj
$ ls
dir bfgbvlcd
131293 fgh.djg
125876 lcwjtdf.sbl
dir pnds
263022 tvrms
$ cd bfgbvlcd
$ ls
276134 vrdrsj
$ cd ..
$ cd pnds
$ ls
dir bffz
dir jwcjpt
dir pvnbz
$ cd bffz
$ ls
194315 dndbj.gww
115061 lspnmhml.fdb
239758 tjhcqw.wrq
124732 wjcbcvfd
$ cd ..
$ cd jwcjpt
$ ls
dir dcmcgc
dir llt
dir rfh
dir scljqqq
127542 tvrms
$ cd dcmcgc
$ ls
dir fhdvgvtz
dir hrvlgmjb
dir rlf
dir smfzmmhc
$ cd fhdvgvtz
$ ls
33684 lcl
dir lrsjg
203352 npvgs.qdw
6985 tvrms
102991 wmnrjw.chn
162852 wrcjmll.rlb
$ cd lrsjg
$ ls
dir jgfpvdc
84338 mwmlf.vdw
147349 nrwjb
dir sblp
dir vrdrsj
$ cd jgfpvdc
$ ls
265563 chlgpdsp.hrv
dir dsc
dir gvrg
dir mwmlf
dir qrqvl
100762 rlf
300872 sjvgwmdg.qhg
164004 tzqmh
300736 zhgmdcl.bfq
$ cd dsc
$ ls
284520 rtt.qps
263890 smfzmmhc
$ cd ..
$ cd gvrg
$ ls
dir hzclphlb
dir vcnlmdp
$ cd hzclphlb
$ ls
295429 mcdjsms.zss
$ cd ..
$ cd vcnlmdp
$ ls
dir wrlhqh
$ cd wrlhqh
$ ls
41526 tmf.ctw
$ cd ..
$ cd ..
$ cd ..
$ cd mwmlf
$ ls
dir cwsrt
dir grqng
$ cd cwsrt
$ ls
dir ztmtjwj
$ cd ztmtjwj
$ ls
17063 svdm
$ cd ..
$ cd ..
$ cd grqng
$ ls
216391 tvrms
$ cd ..
$ cd ..
$ cd qrqvl
$ ls
1835 hrvlgmjb
43155 mwmlf.sng
238089 ngjg.zmc
$ cd ..
$ cd ..
$ cd sblp
$ ls
178768 bgfnqf
$ cd ..
$ cd vrdrsj
$ ls
255854 qrrc.bbc
178991 smfzmmhc
$ cd ..
$ cd ..
$ cd ..
$ cd hrvlgmjb
$ ls
dir fjnp
70585 hrvlgmjb
dir qsrgzrdf
43606 rmjzzgrs
dir vds
dir vrdrsj
35098 wthtcg.wgd
$ cd fjnp
$ ls
19740 qqvdcclf
dir smfzmmhc
$ cd smfzmmhc
$ ls
dir nnbc
$ cd nnbc
$ ls
100360 mwmlf
$ cd ..
$ cd ..
$ cd ..
$ cd qsrgzrdf
$ ls
279143 fgthp.qmg
$ cd ..
$ cd vds
$ ls
247595 gnclhrw.mwt
303125 pcdnbq.zbs
38092 tprth.gjn
dir vrdrsj
$ cd vrdrsj
$ ls
dir tnjg
$ cd tnjg
$ ls
37395 brcbr
$ cd ..
$ cd ..
$ cd ..
$ cd vrdrsj
$ ls
94639 tjhcqw.wrq
$ cd ..
$ cd ..
$ cd rlf
$ ls
dir btqjc
108141 dnplntn.mwr
31100 lmfsgd
263849 lpbdq.vdp
109813 smfzmmhc.wsr
dir vrdrsj
$ cd btqjc
$ ls
31933 nwszgpm.qqr
106249 rjqvhccg
16766 vgzqz
$ cd ..
$ cd vrdrsj
$ ls
dir bfv
dir jtnqr
19593 mwmlf
220657 rggqjp.pnt
$ cd bfv
$ ls
48210 tdgd.ppw
232603 tjhcqw.wrq
$ cd ..
$ cd jtnqr
$ ls
dir bct
202702 grstm.ltj
dir mwmlf
258253 tvrms
$ cd bct
$ ls
131860 fwfzsc.pls
42452 thp
$ cd ..
$ cd mwmlf
$ ls
284648 vdjh.dct
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd smfzmmhc
$ ls
dir fvtlvtlq
108335 jdbdb
dir vrdrsj
$ cd fvtlvtlq
$ ls
237419 ctwllbmc
36570 qqvdcclf
dir rlf
92173 smfzmmhc
$ cd rlf
$ ls
89469 dtg.bvl
88361 mqrr
$ cd ..
$ cd ..
$ cd vrdrsj
$ ls
47472 fftpd
53118 qqvdcclf
$ cd ..
$ cd ..
$ cd ..
$ cd llt
$ ls
98255 hnvqtbcn
$ cd ..
$ cd rfh
$ ls
29828 hgwh.tnl
dir rchll
dir smfzmmhc
$ cd rchll
$ ls
240042 rdj.wrv
$ cd ..
$ cd smfzmmhc
$ ls
45192 clnbddrh.lbq
105827 ndzjnttr
140925 nmnr.lct
dir rlf
238998 tprth.gjn
dir vrdrsj
$ cd rlf
$ ls
115973 mnnr.smj
75630 zld.hzv
$ cd ..
$ cd vrdrsj
$ ls
302512 phmvhpvb.fwh
dir tjrpwhc
$ cd tjrpwhc
$ ls
13802 hrvlgmjb
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd scljqqq
$ ls
228515 hrvlgmjb.nhn
246019 mwmlf
9535 mwmlf.nvm
$ cd ..
$ cd ..
$ cd pvnbz
$ ls
dir hrvlgmjb
279877 mwmlf
dir zdqprndl
278221 zwwtflb
$ cd hrvlgmjb
$ ls
dir vggpr
$ cd vggpr
$ ls
270197 cpzj
$ cd ..
$ cd ..
$ cd zdqprndl
$ ls
197398 tprth.gjn`,c5=`200111110420341122211300354132530435302054046335421000636521353401523010501311544011230232023001001
001123300003121013211234033001540045254316444345422662334204234115552314354114453103330103243221310
311210241230024303554001043402121246540040235623146113624001464225403350221302241333122301333010300
313220143432400213441134141433022322415401210036504124443562330160631024040400414203001430031231101
102330243131202000523053445134061462231462416310524654563503003141265120040414555415314404230001123
120200202004411420101420552340215506005336303136422632601535115644224525250413000311351122114312432
131000242441124343143442220121045533614100253435644222021120410603556025543143515423332101020113330
114143224444504422040534215205260150032661222324274446404136221346205346041403241445104514040000010
102002200303450412051342412504002161302036524736531157713153330320332655026451125443033542000233234
131431114001235145242516443631640262121512724725312722673711275536055600023502620435102352041434220
100103022300350342104646025232006061267534246117426324115333516241440556345546503014122330134234110
340411310240444523565065200110157265743372741756626771113266576633442122512224300160301523121003401
240201122143332301611525622501152344344127622547454544352463117134635174602401105546324313150204443
414213341225525346306044116014716132415253727642747616421775167655431342165260302156044441001402430
002034014035221165414505053736346311675244143325266652563253566241725376335655642126331133232321323
330402222250004614054205216275746641756514464628248366268327256561454575716451051315302005043043021
241310325523404162223621156275536771142277286437244764364685285652716135255655563443556615122523002
311344014133112343140551161676172477647345586344655542854476838575662251732322131650641333150134303
313204020014065654616432571236166325852282227757483642237635463636324211151244145002606455400140550
242504454234154064241534356714334558678643435742457284425845228775656536216646353660240463251544024
443255334255345102515642652771553735236765262276555262874755434768886657534317475132326043545341141
313340315304653501345423666728588363525342822672368587228672235886573526112475765132626025153524034
051420006655236342265366227126326236258647455994767983899246273464688784734316644433154416143243223
200031324665003061355432372247754556734459659693889684996833862637535475837412657575622420201123423
140344241263650027153125427622833863849658679895838493795964539443535868245563657741334465661643134
325512132604225442275223673673888834666934785658479864956336789437524467868365516754264014325413543
440553621345566755743125253764256458436998973335486489596678374739527657443635661463535511401504210
331212462023141647154212388866373888478938966656994748484744753863394658385867472546571363202432335
354035002310276332316743644554745848468838783939846448697573799767883267528526526111474415445422413
030142301526473113737838576485566368943599475757858476784754765585774388874738823132536606531224033
254504314602665477773248247855977456967998845467559696746769558476557596823546357624134532360044201
242350600526564676764543323725453843834588559589768569964469437679894593323787845373562441364020320
540625010437724231755683634453487863548768644997884799678964549755699554727236477762577133463255344
451252216057515152428338248458343557697558676897477687887944987433654375847562753534376314061014453
330122160467147567486255529944583939789489896889995887484468998693995593385623482244246713633134060
041131501662457631348264888773533498694955585885847947894569788989449795468464743435567116201512356
324606644541656247745643375748597955955965484686798665899998748498763784688345223367323275741212105
253622204212432616625848433733353645955874595667977865588774778887986657388938262376614132365303123
543622014122523657388266376638879877876456588569896878858685887595976387348697782688362257654654456
545255666722761683373236733987395568849985966797858596665995456797686936387467436688227173172634650
064136255231373327225334353677686575877587796966576788998686945884958584564464564576445675644323433
120610001513656435686554865596975695686866776898979998777679686667669834697598378628276111531121113
432140443454112343372324773494755866888666959977967888596565657897466584853384872528674213345455064
535024226551243635756643794753864467875586759796976695856766799459788458859468667424672512313064024
400546563413117325322296559436895867555887966677978878955985988687849746378544845333855566561166301
020506651236764225537855784694794599877755775866666677697878866976479559899456962788386432645006305
443434675663246532365545958356475947658757867798988679678788855744848479896384525363632731537735555
113416556757161662457368859354889664596788879987976669776968868957496979477339774437365431336622525
345262651421638862768869569444995688797756856798788977889589865586877745735587448645533333432761556
123343647632543762526285589568479986597999697766988889879766599964485784375749582642478161171765010
520556433274324287585335433455445745976579977886889677898978799788589696343446976736744523426145632
603056316676658283453298956947885864957677787866666697878756865594484788984693888857823533527626435
303020361354762364376856453974577559959955778797776768878555985959857546898685333344326612443105224
655662135371646362474794695795565787796867968989769897797795799668878548649635844554655635214700534
223523063153272732345883664689487767789978958789978667977668776779785579997898454742636172136404463
352266121152314423833664979937564574668875976796697888965889657968646986463675825327884122351664534
400665311234531444872273846753747848557559659789669976868577568946445475467557535273643277351315425
413615133141512333834886383733778585757577567869576857576866765746564896457868377676563257675463313
206441432112417826772776467473886477685669676669989577999985786548574764376485544784536241352404012
122021466657424225744749755455669764648775997976878875975779856494566487964533526673244445572525445
415624362761157787366445748554448574967467678768669699896677564554676734988937772467213124272261663
333643022543552455773476647846755685745848768897775968859876755557696565349775674843755623245036254
221606155374323788248655473936534859467965767789868557789776666648975994868375432332432722611116020
515203142657661616774357284756583896769987748977678986585896756468657373376756753878242443624411230
402451412661646324875352578545454487959549658876989876657885899454479755887954626826273275501422163
126501412076161365287654767883436597888855968948787589685669794958473484344427835731714123406061554
224552366447424162477676784654557565858779568795449467776596567673499374978454253537362765515136455
005035662123724122426544432497494936376566646685865455484874959734758735857644773573344622333033203
250300234333326527442853884889699384538578958586844694669957899638784976368446656657547266416620501
405422462163345612313725585634533598684989695885578689865948867377943579267254334421525743251536251
402560343153676444275836464535434688496585488668868449558989767733766366582433667223231160634422000
131411565232536316472826883676449835849799446975767985944584684759383758884457627761235345625550522
041123505434326774464264753647664555446469856348997446634837449679564772776833635725271315103402503
401201202325145164315332825286666583564788544463678773777568659553555845288588174227715634160635214
233522655455352676323433643466864478337685895578774998934663536649735254244383133377713110561565534
500524110545525161615415254786767656869878538468666856564943337832285622356527756325471553066535253
405033114656065173147163244736245853758355736973364399758844669463378725783664272727244261206042005
133434313305213626263262454344736258274694568999443935846944973867565366331721727573260654114423513
013203345630556661241544626478668283844274868977767759678387342382675332822247514156535246223022412
141002355104611615351775313274284253255342736736463672767763635857872743177444571552464015412003232
050541022141562500116117245131654655427575824666372574376752344486645526276445751140134353210431055
140102303103536606553371524144146558377427827886845358672865278587236165676573726513622165525303155
424104244245243466654353146535251587878487633252627722887726556783436224443345620155325066433041104
002455502042061044335135432655561337382265222373662265643584526631675372325537502226636204141230114
412131552040462064152362671255772676376836668588286577724785583234517635131726330215411342524535142
033134042522352546543601221312462561135754676576235856725851335243555572652341614000021205122040313
112404022155034452521402331144233444256665441631346243557321561272641474421133343226521330314104122
110044335305055025054363436272234521433267445623673675277464262546643767501655002350651455530223430
441333244524122315641522325466376244237111251433724132655534126562615423051522062643222003544200233
321433203450511332565432323502601421276724652356622771641747753221132040625226510330541220304331102
202120344242300320444020526660612335671161125765246653375477124611533650264413533342122552110001210
432044333332350052202541434520632643263167257637246215627745751715525661105133214051312032214021211
130341104443343550111214142266306461312414544732577364464533134502243632345564040004345330200023433
012444223312111223343044662064252322056623222274577747143503036156466665232254352312552233440423334
111203342423121055233555335666152053641254351422044651426162011166030003364314223001254231442232342
112111241131444014044141505223526650511654461416132520260521415306240142233023200144245200332003400
201333024211020154323024121224536333620215416434241143055243546513406655343432221454411202141430331
302201134433120410222233512424240422022146032412300446653266600261032310032100210333040211333040002
202312021141114142554431112520342120400556304244541024562551661211241403030453530144444200321002011`,t5=`U 1
D 2
U 1
L 1
R 1
L 1
D 1
L 2
U 2
L 2
D 2
L 2
D 2
L 1
R 1
D 1
U 1
D 1
R 1
U 2
D 2
R 2
L 2
R 2
D 2
L 2
D 2
R 1
L 2
D 2
R 2
D 1
R 1
L 1
D 1
U 1
L 2
D 2
R 1
L 2
R 1
U 1
R 1
L 1
R 2
D 1
U 1
D 1
R 1
U 2
R 2
D 1
R 2
D 1
U 1
D 1
R 2
U 2
D 1
U 2
D 1
L 1
D 1
U 2
R 1
L 1
R 1
D 2
U 1
D 2
L 1
R 2
U 2
R 1
D 1
R 1
U 1
R 1
U 2
R 2
L 1
U 1
D 2
U 1
D 2
L 2
D 1
U 2
L 1
U 1
D 1
U 1
L 1
D 2
L 2
R 1
D 1
L 2
D 2
R 2
L 1
D 1
L 2
U 2
L 1
R 2
U 1
D 1
L 1
U 2
L 1
D 1
U 3
D 3
L 3
U 2
R 1
U 2
R 1
U 2
L 2
U 3
R 2
L 1
U 1
D 3
R 3
U 1
D 3
L 2
R 1
L 1
U 3
R 3
D 3
U 2
L 3
D 3
U 1
L 1
U 2
D 1
L 3
D 3
R 3
U 1
L 2
R 1
L 3
U 2
D 2
R 3
D 3
L 1
R 2
D 1
L 3
U 1
D 3
U 3
D 1
U 1
R 1
U 2
L 1
D 3
R 3
D 1
U 2
D 2
L 3
D 3
U 1
D 2
R 2
L 1
D 3
L 1
U 2
L 2
D 1
L 3
R 1
L 1
R 3
U 1
L 3
R 2
L 1
D 1
R 3
D 1
R 1
D 1
L 3
D 1
U 2
R 3
D 1
U 1
R 2
U 1
R 3
L 3
U 3
D 2
R 3
L 1
D 2
R 2
L 2
U 1
L 3
R 2
L 2
U 3
L 1
D 1
U 2
R 1
U 3
R 2
D 3
L 3
U 4
D 4
R 3
L 3
R 3
U 2
R 3
L 4
R 2
U 1
R 3
U 3
R 4
U 2
D 3
L 3
D 4
U 3
D 4
U 3
D 2
R 2
D 1
R 4
U 2
D 4
L 3
D 4
U 1
L 2
R 1
L 3
R 1
L 3
U 3
D 3
U 4
L 2
D 4
L 4
U 4
L 3
D 1
R 2
U 4
R 2
L 1
R 3
D 2
L 3
U 2
R 1
U 1
D 3
L 4
D 3
L 3
D 3
U 4
D 3
R 4
L 1
U 2
R 4
D 2
U 3
L 4
R 2
L 1
D 4
U 3
R 2
L 2
R 4
L 4
D 1
L 3
D 4
L 3
U 2
R 2
D 4
R 2
U 2
D 1
U 4
D 2
R 4
D 1
U 1
D 1
R 1
L 1
R 2
U 4
R 4
D 3
R 4
L 1
D 2
U 1
L 3
U 4
R 3
D 4
L 1
D 1
L 4
D 3
R 1
D 4
L 3
R 2
D 3
L 2
D 4
U 2
L 2
D 4
L 2
U 5
R 3
D 2
U 5
R 3
L 3
R 1
D 4
R 1
D 3
U 3
R 2
D 5
U 4
L 1
D 1
R 5
D 5
U 1
L 3
D 2
L 4
U 3
L 2
U 1
R 1
U 2
D 5
L 1
R 4
L 1
U 3
L 5
U 2
L 1
R 1
L 1
R 1
U 5
D 5
R 2
D 4
L 1
R 4
L 3
U 5
L 4
U 3
R 5
D 1
L 3
R 1
U 5
R 2
L 4
U 1
L 2
U 5
L 3
U 1
R 3
D 4
U 1
R 5
L 5
R 1
D 1
R 5
U 1
R 2
L 5
R 2
L 2
R 1
U 5
D 2
L 2
R 4
L 3
U 5
R 2
L 3
R 2
D 1
R 5
L 4
D 2
U 1
R 4
D 3
R 4
D 2
R 2
D 5
L 3
D 1
U 2
L 1
U 5
D 4
U 2
R 5
U 3
D 4
R 2
U 2
R 4
D 6
L 6
D 1
U 2
D 4
R 3
D 6
R 4
L 6
R 4
D 2
U 4
D 3
U 2
L 4
R 6
U 5
R 3
U 1
L 3
D 2
R 5
D 4
U 6
D 4
R 2
U 6
D 6
U 5
R 1
U 4
R 5
L 6
U 2
D 2
R 5
U 3
L 3
U 2
D 4
L 5
R 2
D 5
L 3
U 4
D 3
U 5
L 2
U 3
L 2
U 3
L 3
U 1
L 2
U 1
L 6
D 1
R 4
D 4
L 4
U 4
D 4
R 2
D 1
U 1
R 4
D 2
R 4
L 6
R 5
U 2
R 2
U 1
R 6
L 1
U 6
R 5
D 4
L 2
U 4
R 3
D 5
L 5
D 2
R 6
U 5
R 3
D 1
L 2
D 1
R 4
L 5
U 6
R 4
D 3
U 3
R 1
D 3
U 2
L 1
U 1
R 5
L 4
D 1
R 2
U 1
L 3
R 5
D 5
U 5
L 1
U 2
R 7
D 5
L 7
D 2
R 7
L 2
D 6
U 1
L 5
U 5
D 2
R 4
U 3
L 7
R 5
L 3
D 6
U 2
D 5
L 3
R 4
U 6
D 5
L 5
U 2
D 5
R 4
U 2
L 2
D 5
U 2
R 5
L 4
R 5
U 6
D 3
U 7
L 6
D 4
U 2
R 7
L 5
D 5
R 6
L 1
D 2
L 2
R 2
U 3
R 7
D 1
U 3
R 2
U 3
R 5
U 3
L 7
D 6
L 7
D 5
L 5
R 5
U 2
L 4
U 7
L 2
D 7
U 5
L 4
R 4
L 2
U 5
L 4
D 5
R 7
U 2
L 1
D 6
R 1
U 6
D 1
L 7
U 3
D 2
L 3
U 4
R 4
L 5
U 7
L 1
D 5
L 7
D 1
R 6
L 1
R 5
L 3
U 5
D 2
U 6
D 4
U 1
R 2
D 8
R 8
D 1
R 4
D 6
L 8
R 5
D 5
R 6
D 5
U 1
L 1
D 2
L 4
R 1
D 1
R 7
L 8
U 1
D 8
U 6
L 7
R 4
U 1
L 2
U 1
L 7
D 2
R 8
L 1
U 8
R 8
D 6
U 2
L 8
D 7
U 4
R 8
L 7
U 6
D 6
U 2
L 4
D 3
L 2
D 3
R 7
U 3
L 3
U 3
D 8
L 2
D 3
L 1
R 2
U 8
L 4
D 7
L 8
R 3
L 7
U 2
R 8
D 3
R 7
U 3
L 8
U 5
D 5
U 5
D 8
U 8
D 2
L 4
U 3
D 2
R 6
U 3
R 2
U 4
R 2
L 6
U 7
R 6
L 5
D 6
L 8
U 5
R 3
L 5
U 7
D 7
L 1
U 6
R 7
D 3
R 2
L 7
R 6
D 7
U 4
D 2
L 2
U 3
R 1
U 5
R 6
D 2
R 8
U 7
L 7
U 8
L 4
R 9
U 7
D 6
L 6
R 4
D 9
L 1
D 5
U 2
L 3
R 9
D 2
U 1
R 4
L 8
R 1
L 1
U 4
R 4
U 4
R 3
D 2
U 5
R 8
D 1
U 5
L 4
D 5
U 3
L 1
D 4
L 3
U 8
R 3
L 3
R 9
U 3
D 1
R 4
U 2
L 8
R 7
L 4
R 4
L 7
U 6
L 2
U 9
R 7
D 6
U 5
L 9
U 7
L 5
D 1
U 8
R 4
D 1
L 8
D 8
L 7
R 1
L 7
R 3
U 2
R 5
D 1
U 9
R 1
L 5
U 5
R 6
L 4
D 3
R 9
D 7
R 3
D 2
R 6
U 2
D 5
L 7
U 1
D 8
R 2
D 3
R 3
L 6
R 2
L 7
D 8
R 6
D 6
R 9
U 6
R 9
D 3
R 8
U 7
L 5
D 2
R 5
U 6
R 7
D 7
U 6
L 2
U 6
R 4
D 2
L 9
U 2
L 9
U 9
R 8
D 1
U 9
R 7
U 5
L 3
D 5
U 9
L 2
R 1
U 3
D 4
L 1
R 10
D 9
U 3
R 6
L 1
D 5
U 1
D 10
U 6
L 3
U 7
D 10
L 2
U 10
D 5
R 1
L 1
R 3
L 7
D 4
L 7
D 10
R 8
L 7
U 2
R 6
U 3
L 6
D 4
R 8
D 3
R 8
D 10
L 3
D 5
L 5
R 10
U 6
L 10
R 1
L 7
D 3
U 2
D 6
R 3
D 6
L 4
R 10
U 8
D 4
L 8
U 7
D 3
L 3
D 2
R 8
U 9
L 1
U 8
D 8
R 4
U 9
D 3
R 10
U 3
L 4
R 5
U 3
R 7
D 9
R 4
U 9
D 5
R 8
L 9
U 1
L 8
R 4
D 1
L 4
D 6
U 5
L 4
R 9
U 2
D 7
R 1
L 1
R 7
D 6
L 10
R 10
D 4
R 11
L 8
U 9
L 6
R 4
U 3
L 1
D 7
L 8
D 6
L 3
R 5
U 1
D 9
U 3
D 4
U 11
D 2
U 1
L 4
R 11
L 9
R 6
U 6
L 4
U 11
L 4
R 5
L 10
R 6
U 8
R 8
L 4
D 11
L 11
R 2
U 9
R 6
D 8
U 6
L 1
R 11
L 1
R 1
D 7
L 2
U 11
D 7
L 9
R 7
U 2
R 5
D 10
R 4
D 4
U 2
R 7
U 9
L 10
U 11
L 3
R 10
D 9
L 6
U 10
L 7
R 11
U 5
D 11
R 8
D 1
U 7
R 2
U 8
D 4
R 6
D 4
U 6
R 6
L 7
U 5
R 4
U 5
R 3
L 2
R 5
D 8
L 11
U 2
R 8
L 4
U 11
R 2
D 8
L 3
D 2
R 10
L 2
R 2
L 8
D 8
L 8
R 1
L 1
U 9
D 7
U 6
R 2
L 9
U 11
D 3
R 10
U 5
R 5
L 4
R 10
L 6
U 10
R 2
U 2
L 7
R 10
L 2
U 3
L 9
U 6
L 12
R 8
U 3
R 10
U 12
L 6
U 11
R 2
D 5
R 12
D 10
R 9
L 5
R 9
L 6
R 3
U 4
R 6
U 8
L 3
U 10
R 5
L 3
U 6
R 4
U 10
R 8
D 8
R 3
L 5
U 4
D 9
U 12
D 10
L 10
R 3
D 4
R 2
D 6
L 2
R 3
L 10
U 3
D 6
L 8
R 9
D 4
L 3
U 10
L 11
R 5
U 11
R 11
D 11
L 6
R 5
D 6
R 4
U 9
R 11
D 2
U 9
L 1
R 12
D 8
R 11
D 4
R 3
U 10
D 5
U 9
R 10
L 4
R 9
L 10
D 7
R 8
L 8
R 11
L 3
U 4
D 10
R 2
L 2
U 1
L 12
U 9
R 2
D 7
R 2
L 6
D 8
L 3
U 7
R 6
D 6
L 6
R 5
L 12
D 13
U 9
L 1
R 11
D 4
U 10
D 7
L 8
U 13
L 12
R 3
L 2
D 1
U 4
D 9
R 9
L 12
D 13
U 9
R 8
L 3
U 2
L 1
U 12
D 12
U 5
L 5
U 10
R 3
D 8
R 10
L 9
R 1
U 4
D 12
R 11
U 8
L 9
U 10
R 8
U 13
D 13
U 10
D 5
R 6
U 11
R 4
U 6
L 2
U 13
L 2
U 8
R 13
U 4
D 5
U 3
R 8
U 8
L 6
U 11
R 10
U 8
D 8
L 10
D 9
U 13
R 12
L 10
R 3
U 3
D 10
R 3
D 3
L 6
R 3
U 5
L 3
R 10
D 6
L 10
D 10
R 13
D 1
R 9
L 7
D 12
U 6
R 4
L 1
U 7
L 8
U 7
L 11
U 11
D 1
U 5
R 2
D 1
L 9
U 13
R 10
L 3
R 9
D 10
R 10
U 2
L 4
R 5
L 12
R 7
D 7
R 9
D 6
L 10
D 12
R 10
D 9
L 13
R 13
L 3
U 6
D 8
L 7
R 4
U 7
L 10
D 8
R 12
L 3
R 6
L 14
R 7
L 4
U 8
D 10
L 9
D 10
R 6
L 5
R 8
U 13
L 2
R 13
L 10
D 12
U 4
R 1
D 1
R 10
L 9
R 12
U 10
D 4
L 3
R 7
D 13
L 11
D 3
U 11
D 12
U 4
R 11
D 9
R 3
D 14
U 3
L 10
D 5
L 14
R 13
L 12
D 14
R 2
U 13
D 10
L 13
U 11
R 9
D 4
L 13
U 13
R 5
L 1
R 14
D 4
U 8
D 2
R 2
U 6
D 10
L 1
U 9
R 7
D 2
L 13
R 8
L 12
R 12
U 8
L 14
D 11
R 6
L 5
R 10
U 5
D 12
L 6
U 13
R 3
D 8
U 11
L 7
D 5
R 12
D 8
R 13
L 9
U 4
D 3
L 3
D 15
L 14
U 2
L 10
R 14
U 1
D 11
L 2
R 11
L 12
R 7
L 4
U 15
D 15
R 9
L 9
R 1
D 11
L 1
U 3
R 12
D 7
U 2
D 6
R 1
D 13
R 3
U 10
D 4
L 6
U 8
L 8
D 7
L 6
U 15
D 7
U 1
D 1
L 14
D 3
U 10
L 2
U 14
D 2
L 5
R 3
U 1
D 13
U 13
D 9
L 12
R 5
L 14
U 3
D 11
R 9
U 8
D 5
R 3
L 13
U 2
L 10
D 3
U 2
L 12
D 13
R 14
U 10
D 8
L 8
R 14
L 6
D 14
L 8
R 15
D 10
R 1
L 2
D 6
L 9
R 1
L 4
D 9
U 8
L 1
R 9
L 1
D 5
L 6
U 9
L 6
R 3
U 5
R 12
D 6
R 8
D 3
U 13
D 2
U 2
L 4
U 11
R 4
L 13
U 6
L 12
U 4
D 6
U 11
D 5
U 8
L 10
D 13
L 5
U 15
L 4
R 12
D 1
L 9
U 8
L 4
U 8
D 10
U 12
L 12
D 5
R 10
D 3
U 1
L 6
R 10
L 5
D 8
U 8
D 8
R 6
U 13
D 8
L 16
R 11
L 14
D 15
R 15
L 8
D 1
U 6
D 15
R 9
L 12
D 13
U 9
D 15
L 6
R 9
U 8
D 15
U 7
L 4
R 9
D 2
R 5
U 6
D 14
L 11
D 9
R 2
U 12
L 2
R 15
U 2
L 15
R 9
U 6
L 2
D 4
U 1
L 13
D 5
R 14
D 1
R 13
U 9
R 5
L 4
U 9
D 6
U 7
R 16
D 11
U 8
R 13
D 7
L 12
D 8
U 15
D 11
U 14
L 14
U 10
L 8
R 16
L 3
U 13
D 5
L 2
R 8
L 10
D 6
R 15
D 11
U 3
D 12
R 12
L 15
U 13
L 14
D 2
R 6
L 5
R 2
U 2
D 11
U 14
L 9
R 14
D 17
R 10
D 1
U 11
L 3
U 1
D 17
L 10
R 6
L 14
U 4
D 2
U 17
L 2
R 10
D 14
L 5
U 7
D 7
R 13
U 9
D 9
U 7
D 17
U 15
D 1
L 4
D 11
L 16
U 8
L 6
R 5
L 9
D 14
L 13
D 11
R 3
L 15
D 9
L 10
D 11
L 11
U 2
L 17
D 10
R 13
L 11
U 16
L 8
U 5
D 7
U 11
D 1
L 17
U 12
L 4
R 12
U 4
R 10
L 4
U 11
D 8
L 5
D 6
U 4
D 16
U 6
D 12
L 3
U 3
L 16
R 2
U 14
R 1
L 14
U 11
L 7
D 11
R 2
D 2
L 6
U 10
L 10
D 15
R 12
D 16
L 3
U 15
R 15
D 17
U 17
L 13
R 5
D 12
L 9
R 10
D 4
L 2
D 14
U 8
R 6
U 5
D 1
L 11
R 12
L 17
U 2
L 17
D 2
R 17
L 17
U 3
D 14
U 8
L 14
D 12
R 17
L 18
D 3
U 10
L 7
U 10
R 5
L 15
D 10
L 3
R 12
D 10
U 6
L 17
D 9
U 18
R 7
U 1
D 1
L 9
U 2
L 5
U 9
L 8
U 17
D 17
L 17
D 15
R 13
U 15
D 8
R 13
D 17
L 18
R 5
D 7
R 6
D 1
R 3
L 10
U 10
D 12
L 8
R 11
U 6
R 5
L 9
R 6
U 15
D 4
R 8
U 1
R 18
L 18
U 10
R 17
D 10
R 10
U 16
R 16
U 5
R 7
D 15
U 15
R 2
U 17
L 14
R 1
U 2
L 10
R 17
L 14
U 13
D 1
L 16
D 4
U 9
L 17
U 9
D 9
L 18
D 9
U 5
L 18
U 6
L 5
U 10
L 18
D 13
R 8
L 17
U 9
L 14
D 12
U 2
D 5
U 2
D 17
L 18
R 8
L 7
R 1
D 13
R 11
D 10
R 18
D 2
U 17
D 17
L 4
R 16
D 16
L 2
D 5
R 4
U 9
R 6
D 7
L 13
U 19
R 7
U 17
L 9
U 6
D 1
L 19
U 7
R 6
L 11
R 12
D 6
L 17
R 18
D 17
L 2
D 8
U 15
D 13
L 10
D 10
L 17
D 4
L 12
U 11
L 3
D 6
U 18
R 18
U 16
L 5
D 9
R 17
L 17
D 16
R 12
D 18
U 14
R 1
U 12
R 4
L 6
U 14
R 18
D 6
U 2
D 13
U 15
L 14
R 3
D 7
L 6
D 15
U 17
L 12
D 2
L 12
R 10
L 16
D 15
L 18
U 9
L 7
U 13
R 11
U 9
L 4
U 12
R 14
D 11
R 8
U 4
L 17
R 14
D 15
R 1
U 5
R 3
L 4
R 9
U 1
D 10
R 3
U 16
D 6
L 1
U 15
D 9
U 10
L 11
U 7
L 5
D 19
L 8
U 10
L 19`,r5=`noop
noop
noop
addx 3
addx 20
noop
addx -12
noop
addx 4
noop
noop
noop
addx 1
addx 2
addx 5
addx 16
addx -14
addx -25
addx 30
addx 1
noop
addx 5
noop
addx -38
noop
noop
noop
addx 3
addx 2
noop
noop
noop
addx 5
addx 5
addx 2
addx 13
addx 6
addx -16
addx 2
addx 5
addx -15
addx 16
addx 7
noop
addx -2
addx 2
addx 5
addx -39
addx 4
addx -2
addx 2
addx 7
noop
addx -2
addx 17
addx -10
noop
noop
addx 5
addx -1
addx 6
noop
addx -2
addx 5
addx -8
addx 12
addx 3
addx -2
addx -19
addx -16
addx 2
addx 5
noop
addx 25
addx 7
addx -29
addx 3
addx 4
addx -4
addx 9
noop
addx 2
addx -20
addx 23
addx 1
noop
addx 5
addx -10
addx 14
addx 2
addx -1
addx -38
noop
addx 20
addx -15
noop
addx 7
noop
addx 26
addx -25
addx 2
addx 7
noop
noop
addx 2
addx -5
addx 6
addx 5
addx 2
addx 8
addx -3
noop
addx 3
addx -2
addx -38
addx 13
addx -6
noop
addx 1
addx 5
noop
noop
noop
noop
addx 2
noop
noop
addx 7
addx 3
addx -2
addx 2
addx 5
addx 2
noop
addx 1
addx 5
noop
noop
noop
noop
noop
noop`,o5=`Monkey 0:
  Starting items: 65, 58, 93, 57, 66
  Operation: new = old * 7
  Test: divisible by 19
    If true: throw to monkey 6
    If false: throw to monkey 4

Monkey 1:
  Starting items: 76, 97, 58, 72, 57, 92, 82
  Operation: new = old + 4
  Test: divisible by 3
    If true: throw to monkey 7
    If false: throw to monkey 5

Monkey 2:
  Starting items: 90, 89, 96
  Operation: new = old * 5
  Test: divisible by 13
    If true: throw to monkey 5
    If false: throw to monkey 1

Monkey 3:
  Starting items: 72, 63, 72, 99
  Operation: new = old * old
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 4

Monkey 4:
  Starting items: 65
  Operation: new = old + 1
  Test: divisible by 2
    If true: throw to monkey 6
    If false: throw to monkey 2

Monkey 5:
  Starting items: 97, 71
  Operation: new = old + 8
  Test: divisible by 11
    If true: throw to monkey 7
    If false: throw to monkey 3

Monkey 6:
  Starting items: 83, 68, 88, 55, 87, 67
  Operation: new = old + 2
  Test: divisible by 5
    If true: throw to monkey 2
    If false: throw to monkey 1

Monkey 7:
  Starting items: 64, 81, 50, 96, 82, 53, 62, 92
  Operation: new = old + 5
  Test: divisible by 7
    If true: throw to monkey 3
    If false: throw to monkey 0`,m5=`abcccccccccaaaaaaaaaaccccccccccccaaaaaaaaccaaccccccccccccccccccccccccccccccccccccccccccccaaaaaa
abccccccccccaaaaaaaaaccccccccccccaaaaaaaaaaaacccccccccccaacccacccccccccccccccccccccccccccaaaaaa
abcccccccccccaaaaaaacccccccccccccaaaaaaaaaaaaaacccccccccaaacaacccccccccaaaccccccccccccccccaaaaa
abccccccccccaaaaaaccccccccccccccaaaaaaaaaaaaaaaccccccccccaaaaaccccccccccaaacccccccccccccccccaaa
abccccccccccaaaaaaaccccccccccccaaaaaaaaaaaaaacccccccccccaaaaaacccccccccaaaacccccccccccccccccaac
abaaccaaccccaaccaaaccccccccaaaaaaaaaaaaaaacaaccccccccccaaaaaaaacccccccccaaalcccccccccccccccaaac
abaaaaaacccccccccaaccccccccaaaaaacccaaaacccaaccccccccccaaaaaaaaccccccccalllllllcccccccccccccccc
abaaaaaacccccccaaacccccccccaaaaccccccaaaccccaaaaacccccccccaacccccccaaaakllllllllcccccccaacccccc
abaaaaaacccccccaaaacccccccccaacccccccaaaccccaaaaacccccccccaacccccccaakkklllpllllccccacaaacccccc
abaaaaaaaccccccaaaaccccaaccccccccccccccccccaaaaaaccccccccccccccccccckkkkpppppplllcccaaaaaaacccc
abaaaaaaacaaaccaaaaccaaaaaaccccccccccccccccaaaaaacccccccaaaccccckkkkkkkpppppppplllcddaaaaaacccc
abcaaaacccaacccccccccaaaaaacccccaaaccccccccaaaaaacccccccaaaaccjkkkkkkkpppppuppplmmdddddaaaccccc
abccaaaaaaaaaccccccccaaaaaaccccaaaaaacccccccaaacccccccccaaaajjjkkkkkrpppuuuuupppmmmdddddacccccc
abccccaaaaaaaacccccccaaaaacccccaaaaaacccccccccccccccccccaaacjjjjrrrrrrppuuuuupqqmmmmmddddaccccc
abccccaaaaaaaaacccccccaaaacccccaaaaaaccccccccccccccccccccccjjjrrrrrrrrpuuuxuvvqqqmmmmmddddccccc
abccccaaaaaaaaacccccccccccccccccaaaaaccccaacccaccccccccaaccjjjrrrruuuuuuuxxyvvqqqqqmmmmmdddcccc
abccccaaaaaaaacccccccccaaaccccccaacaaccccaaacaacccaaacaaaccjjjrrrtuuuuuuuxxyvvvqqqqqmmmmdddcccc
abccaaaaaaaacccccccccccaaaaaccccccccccccccaaaaacccaaaaaaaccjjjrrttttxxxxxxyyvvvvvqqqqmmmmdeeccc
abccaaaccaaaccccccccaacaaaaacccccccccccccaaaaaacccaaaaaacccjjjrrtttxxxxxxxyyvvvvvvvqqqmmmeeeccc
abaaaaaaaaaacccaaaccaaaaaaaaaaaccaaaccccaaaaaaaacccaaaaaaaajjjqqrttxxxxxxxyyyyyyvvvqqqnnneeeccc
SbaaaaaaaaccccaaaaccaaaaaaaaaaaaaaaaacccaaaaaaaaccaaaaaaaaacjjjqqtttxxxxEzzyyyyvvvvqqqnnneeeccc
abcaaaaaacccccaaaaccccaaaaaaaccaaaaaaccccccaaccccaaaaaaaaaaciiiqqqtttxxxyyyyyyvvvvrrrnnneeecccc
abcaaaaaacccccaaaacccaaaaaaaaccaaaaaaccccccaaccccaaacaaacccciiiqqqqttxxyyyyyywvvvrrrnnneeeecccc
abcaaaaaaccccccccccccaaaaaaaaacaaaaacccccccccccccccccaaaccccciiiqqtttxxyyyyyywwrrrrnnnneeeccccc
abcaaacaacccccaacccccaaaaaaaaacaaaaacccccccccccccccccaaaccccciiiqqttxxxywwyyywwrrrnnnneeecccccc
abccccccccaaacaaccccccccccacccccccccccccccccccccccccccccccccciiqqqttxxwwwwwwywwrrrnnneeeccccccc
abccaacccccaaaaaccccccccccccccccccccccccccccccccccccccccaacaaiiqqqttwwwwsswwwwwrrrnnfffeccccccc
abaaaaccccccaaaaaacccccccccccccccccccccccccccccaaaccccccaaaaaiiqqqttssssssswwwwrrronfffaccccccc
abaaaaaacccaaaaaaacccccccccccccccccccccccccccaaaaaacccccaaaaaiiqqqssssssssssswrrrooofffaaaacccc
abaaaaaaccaaaaaacccccccccccccccccccccccccccccaaaaaacccccaaaaaiiqqqppssspppssssrrrooofffaaaacccc
abaaaaaaccaacaaacccccccccccccccccccccccccccccaaaaaacccccaaaaaiihpppppppppppossrrooofffaaaaacccc
abaaaaccccccccaacccccccccccccccccccccccccccccaaaaaccccccccaaahhhhppppppppppoooooooofffaaaaccccc
abaaaaccccccccccaacccccccccccccccccaaacccccccaaaaacccccccccccchhhhhhhhhhggpoooooooffffaaaaccccc
abccaacccccccacaaaccccccccccccccccaaaaacccccccccccccccccccccccchhhhhhhhhggggoooooffffaacaaacccc
abccccccccccaaaaacaaccccccccccccccaaaaaccccccccccccccccccccccccchhhhhhhhggggggggggffcaacccccccc
abccccccccccaaaaaaaaccccccccccccccaaaacccaacccccccccccaccccccccccccccaaaaaggggggggfcccccccccccc
abccccccccccccaaaaaccccaacccccccccaaaacaaaaccccccccaaaaccccccccccccccaaaacaaagggggcccccccccaccc
abcccccccccccaaaaacccccaacccccccccaaaaaaaaaccccccccaaaaaaccccccccccccaaaccaaaacccccccccccccaaac
abcccccccccccaacaaccaaaaaaaacccaaaaaaaaaaaccccccccccaaaaccccccccccccccaccccaaacccccccccccccaaaa
abccccccccccccccaaccaaaaaaaaccaaaaaaaaaaaccccccccccaaaaacccccccccccccccccccccacccccccccccccaaaa
abccccccccccccccccccccaaaaacccaaaaaaaaaaaacccccccccaacaacccccccccccccccccccccccccccccccccaaaaaa`,a5=`[[[[8,6]],[8,[7],[6,7,6,2,4]],10,[[1,7,9],7,[7,9]]],[[4,[],[10,5],[5,4,7],5],8,9,[[5,3,3,6,9],[9,5,10],8],[[0,6,9],[8],4,6,8]]]
[[[],3,[[10,6,9,6],[6,8,7],[1,2]],8]]

[[4,[4],[[10,7,2],[1,6,5,7,4],[7,3,3,1,5],[]],1],[[],[[7,6,3]],5,5]]
[[[10]]]

[[[[7,9]],[[0,9]],0,[[2,1,1,2,9],4],[[5]]],[]]
[[8]]

[[9,[[5,4,5,1,10]]],[[[6,9],3,[0,2]],5,6,[3,4,[2,2],10],[10,5,9]],[[[10,3,8],[],[6,9]],4]]
[[[4,[7],[1,1,4,3,8],[3],[]],[[5,10,2,1],9,[2],6,7],4,[],[[10],[6,3,1,7]]],[4,[6],[[6],[6,6]]],[[[0,2,5],[3,5,10,7],[10,7,2,9],[],[0]],[[9,9,8],[]],[10,[2,10,7,7,3],4],[2,7]]]

[[[],2,2,9,[[9],[1,10,5,1]]],[[[],9,5,[8]],10,9,[[1,4,0],[5]]]]
[[5],[3],[],[9,[[7,2,0,9,3],[6,8,6],[]]],[[[6],3],6,[[2,8],8]]]

[[]]
[[[5,4],5]]

[[7,7,5]]
[[[[4,7,3],[6,0],1,6],[6,1,4,5]],[]]

[[[[4,7,0,9,8],10,7,2]],[6,6,9],[[2,10],8,9,1,[1,[0,4]]],[[[2,0,2],[]]]]
[[[[]],[],3],[],[[[],[8]],[[4,7,3,7,10],3,5]],[[9,[10,5,8,9,1]],0],[[[6,7,5,4,10],4,6,0,[8,3,1,2,7]],5,[10,1,5],10,0]]

[[],[[3,8,2]]]
[[8,4],[5],[3]]

[[0,1,5,[[],[6,6,8,0],[0,2,5,9,9],[3,2,7],[5,2]],10],[],[[8,8],[1,3],3,2],[[[4,0],[]],[[4,1,2],[2],6,9,6],1,10,[[7],[0,7],5]],[4]]
[[[],[6,[5,9,6,0,8],2,9,[4,2]],7,[9,6,0,10]]]

[[],[],[],[9,[[1],[6,3,4,9]],10,8]]
[[1,[[2],10,[0,9,3]]]]

[[0,1,4,4],[[7,[6],[2,5,1,3],5],[[8,3,7],[6],[],8],8,1,[9,0,[]]],[[0,[3,9,3,5],[2,0,9,0,7],6]],[[[3,3,1,10,9]],[[0,7,1],8,[10,0],8],[[9,3,5,4],5,[0],5],8,[[3,6,10],0,2,6]]]
[[[8,[1,2,10,9],2,[8,4,4]],[3,[5,5]],4],[[],2,[],6,3],[[10,7],[],7,[8,6,[5],4,3],2]]

[[[[],1,2],[[7,7,7],6,[1,7,1]]],[4,8],[]]
[[3,1,[1,6,[9,9,5],5],[[1,7,0,6],[10,8,10],[3,8],[6,2,7,5]]]]

[[1]]
[[[3],[[9,4,10,10],[8,9,1],[],[0,3,10,5]],[8,[]]],[[[10,6,0],2,1],5,0,[7],[[9]]],[[[],[9,9,3,2,3],5]]]

[[],[7,2],[5,[9,[]],1,[4,6,5],[[9,10,8,3],6]]]
[[[[]],0,[1,8],[5,2,7,2],6],[],[[],[[2,1,3,9],6,9,5,3],2],[[[10],[0],[4,0,3,6,8]],4],[9]]

[[],[],[],[]]
[[],[[3,6],6,[6],[[3,10,4],6],[]]]

[[8,7,10],[3],[9,[],[[5,1,6,10,4]],4,[[9,8,1,1],[0,0,2],1]]]
[[[1,6,[4,5,3,1]]],[[],[[7,0,5,1,9],6,[0,9,4,3]]]]

[[2,2,1,8],[],[[[10,4,10,6],[2,8,3,10,6],[]],1,6],[6,0]]
[[2,3,[8,[2,7]],8],[4,[[6,6,4,2],4,5,[7,5]],8,1,[]],[7]]

[[[],[1,[9,1,9],[8,8,8,5]],3,[4,9,4,[2,6,6]],[]],[[7,[1,9,6]],6,[[10,0,0],[4,7,1],4,9,7]]]
[[[[],8,5,1],3,[[8,2,2],4,[2,1,2,3,7]],10,[2,[5,7,6],3,[9,6,5,0,9],4]],[],[9,3,2,7],[4,[[4,10],[8,3,8]],6,[],9]]

[[[],[[],[5]],4],[[0,[],9,[8,5,3,2,2]],[8]],[[[2,5]],[10,8,[7,8,7,3]],5,[[2,10],3,8,0,[6,9,10]],5],[[0,[7],[]],[[3,9,4,1,6],8],[[4,4,7,2],8],[[3],[],3],7]]
[[[2,0,[7,5]],[1,5,7,6,[]],9,[2,1,[6,0],3,[3]]]]

[[1,3,10,[]],[],[7,[8,4],[[],0,[4,8],6],4,[[4,0],[5,0,8,3],[0,1],8,[2,9,7,6,5]]],[3,5],[9,[[8,3,6,0],[10,0,5],10],[[10,1,4,0],4,8,5],9,[7,[0],[7,9],7,2]]]
[[2,9,0,[[5,8,10,10,5],8,4,[5,6,10]],10],[8,[0,[10],[6],4,[]],[[9,4,0],[],[2,10,3,3,4],[3]],1,10],[[[],0,7,3,3],9,[[5,3,0],5,[4,6,6,7]],[]],[6,[[3,1],10,[0,8],0],8,[4,[],[8,0,7,9]],7],[9,4,[10],[[2,10,7,6]],1]]

[[[],8,9,2,[6,[0,2,10,2],[4,9,7,2,10]]],[9,[[3,4]],5,9]]
[[9],[[],[1,6,[5,9,9,9,0]],6]]

[[5,2,10],[2,[[],7,9,3],0,[7,[]]],[[9,[5,6,5,0],4,0,3],10,1,[]],[8,10,3,9]]
[[[2,[3]],9]]

[[],[6,[3,[],[]],8,[[7,7,8,2],4],0]]
[[[[0,5,7]],[[]],7,[4,[9,0,5],7,3]],[5,[[0,8,10,0],3],[1,4],[10],[]]]

[[1,5],[10,[[9,7,1]],0,[9,[6,3],[7],9,[]]]]
[[5,[2,[4,0,4,7,8],[4]]],[8,[2,9],5],[],[4,2]]

[[7,[[0,0,5,4]],4],[[[2,4]],[1,[3,2,8],[9,1,8,2,2],0,1],2],[[[4,7],3,3,9]]]
[[],[[[8],0,10,[0,4]],2,[9,2]],[10,4],[2,[7],10]]

[[[],10],[[6,7,[8,6,6],2],5,[9,[5,7,9,0],[10,6],7]],[[],[5],10,[[6],6,7,6,[6]]],[[]]]
[[[[],[]],[]],[[[6],[9],[4,0,8,5]],[3],[[8,2,7,7]],[],[3,[5,1],[9],[7,1]]],[[7,[0],[],3],[2]],[[]]]

[7,10,4,6]
[7,10,4,6,9]

[[9]]
[[7,2,6],[[6,9,[]],[5,3,6],[2],[[0,7,1],[0],[2],[9,9,0,8,2],[9,5,7,6,8]]],[[8,6,10,0,8],[9,[3,10],4,[2,4,3,4,4],5]],[],[]]

[[[3,8,[]],1,7],[[4],[10]],[[[2],8,8],[[1,0,6,5],4],6,[4]],[[[],[9,8,7,10,6],2,[1]],[[],9,3,[1,6,5],[]],6,4,9]]
[[8,[2,[3,7,1,0]]],[8,4,[[9,4],[0,3,5,5]]],[8,[[2,10,4],7,5,[9,0,5,0,4]],3,9,[8,8,3,3,0]],[[9,4,[0],4,[6]],[[0,10,0],6,[9,4,10,0]]]]

[]
[[[[0,4,6,7],3],2],[5,[10,[8],[4,9,4],[],5],6,[[0,6],[4,7,7],[],10,[]]]]

[[[3],8,10,[[8],2]],[9,8,10],[[[],[],3,[]],[],[1,9]]]
[[2,0,0,9],[[],[[10,2],[]],[7,[1],4,[2,5,8,1,2],6]],[[8],[[9,3,3,8],2,[5,5,2,9],2],[5,[],6,[2,1,4,10,1],7]],[],[]]

[[[[1],[7,1,9]],[[],0,[0,7]],[6],9,[]],[]]
[[[[2,8,7,3],[4,2],10,[8,4],7]],[],[[7,[3,2]]],[[[8,7],8,10],0,2]]

[[[1,[6,7,0,8]],6],[2],[6,7],[],[[[1,9,2,10],[9],[0,4,3,1],[6,10,2,4],[4,0,10,6]],[6,5],6,[5,10,[1,0,10,1,2],[5,10,5],9],[[3]]]]
[[[[3,9,0,6,3],[]],1,7,4,[[9,8,5],1,6,[]]]]

[[],[[[]],9,[[2,6,2,9,5],9,[6,6]],[[1,0,7],[4,4]]]]
[[1,[[5]],1,0],[2,[[9,9,1,8],2,8,[0,5]],[]],[0,[5,8,4],[[6,2],[3,6,0,8],[4,2,5],[5,10,4,6,6],[5,5,6]],[7,2,10,[]]],[7,[]]]

[[5,[4],[0,[5,3,2],[]],0],[3,[10,2,7,[]]]]
[[],[4,9],[[[2],[0,10,6,1],1,[0],[9,4,8,1,9]],0,[[0],8,9,[1,1,10,10]],7],[[[3,10],10],10,2,[10,3]],[[5]]]

[[4,[],[[0,3,5]],[[]],1],[9,[0,4,7],[3,[5,10,9,2],6,2,6]],[]]
[[[1,4,[10,3,8],[7,7]],[1,[]],[[1,2,5]],9],[],[],[0,6,2,8]]

[[[[5,9,4,1]]],[0,1,[],7],[[[]],[9,[2,5,10],5,1],[[]],[[9],[6,4,0,4,9],1],[8]],[[10,1,7],6,10,7,6]]
[[[8,9,[0,9,2,5]],10]]

[[9,[[4,8,2,0],[0,1,7,7],5,[4,3,0]],6,[1,[3,9],[3,10,10,3,1],6]]]
[[],[5,[[4,0,9,5],1,[2,0,5,6],8,3],1,[[9,3,10,10],[],[10],7]]]

[[[[4,7,4,1],8],1],[[8,0,0,5,[0]],2,[]],[[[5,8,6,10,0],[],7,[],1],[7,[7,8,0,2,5],9,[8,5]],[8,[7,4]]],[10,[9,3,[0,5],[2]]],[[6,3,6],6,[[7,1,10],5,4,[3,5,1,7,10],9],[1,5,[2],[5],[3,7,0]]]]
[[],[[],10],[0,[],5],[2,[8,2,0],[3]]]

[[2,3,[3,6,8],5,2]]
[[],[0,0,[],8,2],[[[],[0]],[[],4,6,0,[8]],5,7,10],[[],[[1,6,3],[6],[6,7,0],4],[],[[1,10,4],2,0]],[[9,[1,0,7,1,7],3],3,9]]

[6,1,3,9,6]
[6,1,3,9]

[[3,10],[8,[[8,4]],0],[],[0]]
[[[[6,6,9,5]],[[4,0,0],[9,8,10,9]],6],[[1,[1,8,7,9],[]],4]]

[[[],4],[[[]],6,1],[[4,1,[8,8,9,3],6,9],1,8,[],3],[[[3,4,6,0]],9,0,0,[]],[[[5],[4,7,9,6]],2]]
[[9],[[[3,2,2,3],0],5,[[6,6,0,9,6],[10,3,3],3],[]]]

[[],[],[],[7]]
[[[4,[5,0,7],[5,5,4,4,2],9,[8,0,0]]]]

[[7,[[0,3]],4],[9]]
[[],[4,[[7,10,4,7,6],[3,8,2,1,6],8,8],2,5],[7]]

[[[4,0],0,7,[0]]]
[[1,[8,[4,2],6,2],0,[],8],[[]]]

[[],[0],[[[7,2,10]],3,[[8],2,[5,2,1,5],1],[8,[9,9],1]],[],[2,[[10,3,8],0,[8,6,0,5,1]],[2,7],[[3,6,7]],[2,[0,7,2,4]]]]
[[],[[],6,7],[3,5,[0]]]

[[10,7,[[9,2,5,10],[],3,[2,3]]],[[[1,0,10],0],[[6,6,2,9,6],[2,3],4,[2,4,5,2]],7,[5,7,8,[10,4,10,4],9],4],[]]
[[[9,9,3,2]]]

[[5,0,9,8,1]]
[[3,5,[[],5,0],7],[7,9,9,[[6,0,4,4],2,[10,3],5,6]],[]]

[[0],[[],[],[1,[7]],[]]]
[[],[[4],[8,[0,1,5,2],[0,9,3]],9],[1,[1,[],4,9],6,[],8],[[2],[[7,3,4,9],10,6,[5,7,10],8],5,1,5]]

[[],[9,[[],3,4],[],3,[1,[8,5,1,9,7],[1,9,3,2],[2],4]],[[1,4,1,[0]],[[6,6,3,6],[2,2,6,9,5],0]],[[3],[]]]
[[],[[[2,8,10,3]],10,[[5,3],4,8,[8]]],[1,1,[[]]],[],[]]

[[],[7,[6,[1,4],9],10,8,[[],6,1,3,8]]]
[[9,0,[[7,0]]],[],[2,9,3],[[[5,8,8,8],9],[6],0,[[1],9,8,[]],2],[[],[5,0,[],8],[[9,4,0,2],9,1,9],3]]

[[[5],[[3,1,7,10,3],8,[],7,[1,7]],5,0]]
[[[2,[3,4,9,8,10],[5,6],[9,10,8],[6]],[1,[10,7,3,7],[8],4],3,9,9],[[2,[5,1,10,8],[1,9,8,9,9],10],6,2,[]]]

[[9,[],[[1,0,4],[7,5],[0]],[2,2,[5,3,10,9],[8,4,6,0,0]],[1,[4,2]]]]
[[[[5,6,4,3,6],4,[3,5,10,7]],1,[8,[7,5,9,10,7],2,5,7],0],[[6,[0],[],[3,3,2]],[[5,2,4,2,3],10,2,4,8]]]

[[[],8],[6],[[[7]],6,[[9,7,5],[5,0,3,3],[2,2,0,8,3],[5,7,8,1,3],[1,6,4]]],[8,[6,4,[],0]]]
[[[[3,3,3],7,10,2,[0,1]],[[2,4,3,2,2],[7,2,4,4],10,[8,1,1]],4],[4,3,[[],5,[1],[0,7]]],[8,6,10,[]],[[5,[7,0,6]],3,10,10],[7,0,[10,4,3,7],3,2]]

[[[7,[0,2],[],3,[5,0,6,9,0]],0],[[[8],[6,8,4,2],[8,6,4,8],4,3]],[[3,2,4],[6,2],10,[[6],3,[2,6,0]],[[7],4,6,[]]],[]]
[[7,1,2,1,[[2,0,8,10,10],[5,6,1],[6],[5]]],[[6,[10,5,10,1,1],6],1],[[[8,1,2,5,8],0],[10,9,[2,4,4,8]],6,[2,[1],0],6]]

[[9,3,8,[1,[1,2,6,8,0],9,0]],[[6,[9],[6,2,1,5],[3,6,0,0]],[[6,0,1]]],[[[3,9,8,8,5],[1,8,3,10,5]]],[1,[[3,4],4,[9,7]]]]
[[0],[[[],7,[8],[7,8,9],3],[[],3,[9,7,7]],[8,[3],0],[1,4],[[8],[]]],[[[6,10,0,1],[4,6,1,5],[6,3,1,4,0]],2,4],[]]

[[[[2,0],[10,1,7,7,7],[8,4],[],[7,4,5]],4,[],1,4],[7],[4,7,9,[3],[[3,4],3,4,[5,6,4,7,10]]],[3,7,8,[2,7,[8,0],4]]]
[[8,7,9],[[[3,7,9,8,8],[5,6,5],1],9,[[0,5],[]],[5]],[[[8,2,7,9,0],1],1,[],[],[[4,2,0,10],[],0,[2]]],[]]

[[[],3,5,[[],[6,10],[7],5]],[[[9,7,0]],[0,4,3],9,[[],0,[5,5,1],10],[8,[]]],[[[3,3,10,3]],0],[[1,[3,3],[],0],[[],8,7,[5,3,6,2],[7,6,9,3,5]],6,2]]
[[[[1,4,6,8]],0,[3,0,[],8]],[1,8],[7,[]],[7,[6,7,4],10,[3,0,[7,3],7,7],1],[5,[8,[2,4],3],[3],1]]

[[[1,0,2],[5]]]
[[[9],[[1,3,9],[4,3,9,2,4],[7,0,1,10,1]],[0]],[3,[[2,7],4,[6,1,5,5,6],10],9,7,[[8,7,8,9],9,[],[0,2,3,4,10],0]],[4,[[6,6,1,9,0],2,0,[2,10,6]],6,0,3],[3,5,9,[]]]

[[0,0,0,[10]],[[[1,7,4,0,5]],7,2]]
[[[[9,10,9,10,7],1],[],1,[[]],4],[8],[3,[7,5,9,[0,0,5,10]],6,10,2],[5,3,4,[[7],7],3]]

[[[[6,2],5,10],0,8,[[10,1,4,4]]],[[[1],5,7]],[[[2,7,9,5,7],4,10],[[8,8,2],[],6,0,[3,8]],[[],[],[],[6,7,8],9]],[[6,4,[6,10],1,[3,2,8]],[],1,[[0,3,9,5,2],[3,2],9,8],1],[]]
[[2,[7,[3,5,6,0],4,1],6,[[7,2,3,10],3]],[],[6]]

[[8,[],[],[10,8,[0,7,8,8,3]],[[7,3,7],[8,8,10,10]]],[8,10,[4],7]]
[[[]]]

[[9,[[3,10]],5,10],[9,1],[5,4]]
[[[]],[6,6,5],[[1]],[6],[]]

[[6,[5,2],9],[6,9],[4,[[4,4],1,[0,2,4],8,1],0,8]]
[[[8]],[[[5,6],2,3,6],[2,9,[7,0,0,7,3]]],[[[],3]]]

[[[],10,[5,[3,3,3,6,0],[7,8,2]]],[],[]]
[[5,[8]]]

[[[4,[],[],[1,6,4,7,9]]],[[9,[1,4,7,10],9,[9,3,1,7]],2],[],[]]
[[[[2,6]],0,10,[1,10,0],[5,[5]]],[4],[4]]

[[10,[],10,2],[],[5]]
[[[]],[6,5,8,10,[[0],[5,9],[8]]],[],[10,[[8,2],7]],[[[],9],6,[[8,8],[1,3,7,3],6,8,[9,3,0,9,8]],[],9]]

[[[[],[7,10],0,5],[0,[]],9],[2,7]]
[[3,[]],[[6,10],[1,[7],[2,0],7,[]],[[6,8],1]]]

[[[],3]]
[[[3,9,6],9,[6,3,[0,8]],[6,8,5,[10,5,9,10]]]]

[[[7,2,10,[]],7,[[],[],[],10]],[0,0,9]]
[[],[[[1,1,8,1],[1],6,8],[[8,3,0],9,[3]],[4,[7],5,[1,2,9,8],[6]]],[8,[[],[7,2,4,6,5],[1,4,6,7]]],[[1,3,2,9],[[0,3,4,0,0],3],3,9],[5,[[5,7],[5,7,3,8,3],[6,0,2,3]],5]]

[[],[[1]],[5],[2,[],[2,[9,7,1,4],[9,4,4,2,4]],3]]
[[3],[],[6,[[10,10,10],2],[3,2],5],[]]

[[],[[9,[10,3],[1,4]]]]
[[5],[[],[[5,6],[],9],[]]]

[[5,5,10]]
[[[[10,9],[2,10,0,8],[4]]]]

[[],[[10,[]],[[8,7,3,9],2,10,7],1,7,[1,0]]]
[[[[6,4,3],0,5,3,9],[],9,[3,[4,4,0,1,9],10],[10,[0,2],[7,7,1,5,9]]],[2,3,3],[[],[2,1,[]],9,9],[[3],[5,9],[2,[10,7,3,4],[2],10]],[]]

[[5],[[],5,8,7],[[[0,0,10,6,5],3,[10,4,8],[]],[[3,5],[2,0,2,7],9],9,[7,9],[1]],[],[[0,5]]]
[[8,[8],3,[[4],8],[5]],[8,4,5,[7,1,[4,7,1,2],4,9]]]

[[2,9,4,[[10,8,10,2,6],[],7,[7,0,6,8,2]]]]
[[5,[],10],[2,[3,6],[],[],[]],[[6]],[9,7,[0]],[]]

[[1,1],[0]]
[[7,[9,10,5],[[5,6,5,6,7]],0,[[1,8,4,10,1]]],[],[[8],[[],9,6],10,9],[[[],10,0,3,10],[[3,3,8,5]]],[[1,6,10,5,[2,0,3,5,0]],[8,[],10,10]]]

[[[8,2,[],[],8],[[9,3],10]],[]]
[[[4,10,9,2],5,2],[[10]],[[1,7],[10,5,2],2,5,4]]

[[[9],4,4,9,[1]],[[7],5]]
[[],[8,6,[],[[0,4],[],[7,4,6],7,7],[]],[[4],[[7,3,6,8],5,1],[8,7,5],[2,7,[3,4,6,2],[],[]],8],[2],[[1,9,[9,8,9,2,7]],3,[],3,[]]]

[[2,[10,2],[[6],10,[10,6,8],[5,8,7,5,6]]],[2,8,9],[]]
[[5,[[4,10,6,10],5,[1,1,10,8],9,[4,1,4,0,3]],9,9]]

[[6,5],[[7,0]],[7,4,7]]
[[[7,[],[2,6],1,4],8,7,9],[[[]]],[[5,4,[2,9,1]],10,2]]

[[[[0,2,4,8]],[[6,10,8,6,1],10,[4],7,7],10,[[6,5],[],3,[8,6],[]],[[]]],[[9,10,7]],[],[7,6,[[]]],[[4,8,[6,5,3,5],9],6,[[7,8],[1,0,8,10,7],[7,3]],[7,2,0,8,[5,7]]]]
[[[[7,3,6],3,[6,1,10,9],7,[5,0,7]],10]]

[[[6,[6],9,[3,1,7,3]],6,[[6,9,6,10,0],[],5,4,3]],[[[10,1,2,4,2]],[2,[],[6],8],[[5,4],[3,4,9],[4],5],0]]
[[[[1,4],[2,5,8]]],[9,[4,0,1],[10,8,[3,9],6,7],[[3],1,[0,1],[3,0]],[[9],1,1,9]],[[9,[3],8],3,3],[]]

[[2,6,[2]],[4,2,9],[],[7,4,[2]]]
[[[[2,8,1,3],[],9,2],8,[],[8,[]]],[[],[[2,9,2,0],9,[],1],5],[8,[[7,7,3,8,3]],8,3],[[[]],[6,2,[6,8,6,1],8],[[0,6],[3,9,2],[8,7,4],9],[2],[6]],[2,8,9,[[5,2,4]],10]]

[[[]],[],[[[],10],[2,9,5],0,[[9,4,3,10,10],[2,0,8,9],[1,6,6],1,[]],[[10]]],[7,6,[[],[5],[2,6,7,10,5],8],[],[[],9,2,5,2]],[[3,3,[6,10,10]],6,8]]
[[1,0,4,[7],[7,9]],[10,[[1],[],2,8,0],0,7]]

[[[],10,6,3],[1,[[5,5,8],4]],[5,4]]
[[[[8],[2,7],[0,3,3,7]],1,[2,[1,5,5,5],[],[2]],1],[[[4,9,8,9],[8,10,4,2,3]],[],3],[[[10,0,6,10,7],6,[8,4,5,3,9],[1,7]],10],[[[9,3],9,[]],8,3,10,[10,10,[5,1,2,7,4]]]]

[[[[]],[[9],[4,1,4,4,0],7,1,3],8,[8,[10,8,6,1,3],[],[7,2],0],[]],[0,5,6],[5,[10,[0,3],4],[6,[5,9,7],[3,8],[4,1],9],3,[]],[5,[],10,[]],[0,9,[],3]]
[[10,3,8],[],[],[0,[6,0],[6],[[],0,[10,0,6,3]]]]

[[[[7,6,6],[7,1,0,9],6,5,[]],[0],[]],[6,0,5,0],[10,[[4,6]],[[3]]],[[],[[0,5,6,10],2,[3]],5]]
[[3,1,[[9],8],[9,10,2]]]

[[[],[4,3],[[],[9,3,6,9,7],10,[0,2]]],[[8,7,10],8]]
[[[3,9,[],[10],0],[2,10,2,0]],[10],[],[0,[3,[2,2]],10,3],[[[3,4,4,7,1],1,9],2,[3,[7,7],[4,4,0]],0,[]]]

[[6,8,[[0,4,0],2],[[3,2,9,2],0,[8,7,0,5,9],[3,8,2,6]]],[7,3,2],[6,[[]],[8,1,[8,4,2,0,7]],[],[[3,4,1,8,0],[7,5],6,[4,9],7]],[5,[4,[],1],[[8],1],6],[]]
[[[7,[]]],[1,10]]

[[0,3,9],[1],[3,0],[4],[[9,[4,8,8],[],8,[]]]]
[[[[0,10],[2,10,7],1,10]],[8,8,2,[6]],[[1],[2,[9,6,9],3,4],3],[5,2,[],[0,4],1],[[2,10,[0,3,6],7],9,[3,[5,7,4,8,3],4,4,0]]]

[[[4,[0,10,9],3,[]],2,0,[5,5,9,[],0],10],[[6,4,[6,2,9,9,2],[9,1,9,6],2]],[],[[],6,6,4,[]],[[],8,[[9,9,7],[2,0,3,8,0]]]]
[[],[4],[[4,[0,9,5,7,3]],3],[[9,[5,1],[6]],5]]

[[6,[[5],2],7,[0,9,[6,3,5,0,6],2],[[4,7,3,8],[9,8,6,5],8,8]],[]]
[[[[4,2,3,10],[],0]],[[[9,0,7,4],[6],3,8,5],[],3,3],[[3,[3],[],[3,5,2,4,1],[7,3,5]],9,4,1],[],[5,6,[1]]]

[[1,[],[6,[7,1]],10,[[1,7,2],8,[9,6,3]]],[4,[[],[8,8,5,5,3],1]],[[[]],6,2,[2],[[],3]]]
[[6,2,[3,6,0,5],[9,[9,8,9,3,10]]],[4,[6,7,8,[],[2]]],[4,[[1,9],[],[7,9,6,10,7],9,8],6,0],[]]

[[[[8]],[9,8,[3,2,6,2,7],[3,6,2,5],8],[[3,6],0]]]
[[[[5,3],1,7],9,3,[9,0,[3,2]],[10,9,[4,9,6,8,8],[],[7,5]]]]

[[4,2,5,6,[1,1,5,[8,2]]],[[0,[3],3],0,0,0],[7,[3,[9,9,5,1],[],3],[]],[4,[[9,8],[6]]]]
[[],[2,0,[[],[8,5,4,7],9,[3,5]],[9,2,[8,4],[7,5,6,7,3]],7]]

[[1],[[10,5],[[],[],[],3],7,4],[[10,[6,4,9,1],6,0,[2,0,0,6]],[5,2,9,[8,1]],[[9,0,2,3]],[],6]]
[[7,[2,[6],1,1,[1,8,1,6]],[],4],[7,[7]]]

[[[[5],10,[10],[],[8,6,4,2]],5],[8,[[5],6,[],[8,4,9]],[10,0]],[[3],[],9],[4,[6,6],[]]]
[[1],[4],[[7,[],[3,9],1],5,[[9,0,8,4],7,[8,6,3],[10,9,4,2],9],10],[[8,7,[2,8,10,9,9],9],5,[]]]

[[[[5,1,5],[8,4,6,5],[9,10,0]],7,4],[[[7,2,8,5],0,[]],[],3,4],[[4,3,[2,6,9,9,6],9,[8,7]],5,10],[1,[],9],[9,[[9,9]],[1,6]]]
[[[[9,5,9,10],[]]],[9],[]]

[[[[3,3,6,0],6],10]]
[[[3,2,[0],0],[],[[6]]],[5]]

[[[2],[]],[1],[[[9],10],5]]
[[8],[10,7],[],[4,6]]

[[[[5],10,[1,8,1,5,1]]],[[],[9,8,8]]]
[[3,1],[],[3,4,[[7,3],5]]]

[[3,10],[[4,7,[1,8,6,10,8],5]]]
[[[10,[8,6,7,6,10],[1]],[[10,4,5,5],[5,5,9,4,1]],5]]

[[[10,8,2]],[],[]]
[[[[0,9,0],[6],[0],6],8],[[10,[0,1]]]]

[[[]],[[[9,9,8],[],[8,10]]]]
[[5,[[0,6,0,2,1],4,9,[6,2]],9,[[4,4,8,0,0]],[[],[5,3,1]]],[8],[[[6,10]],2,6]]

[[[[6,1,5,10],6,[8,7,3]],5,[1,[10,5,7],2],[[7],8,6,8]],[[[10,10,5,4]],3]]
[[],[10,10,[9,[8,2,0,10],9,[7,7]],8,[6,9,[6,8],[5,5,10,5],4]],[5,8,10,[0]],[[[10]],[5,10,5,[0,5,9,10]],3],[]]

[[[[4,1,2,9],[8,5,10,5,7],0],[[0,3,6],10],8]]
[[[3,[2,2],[5],[8,2,0,0,9],4]],[8,7,[[3,8,9,4],10],7]]

[[9,9,[10,[0,5,1,5],[5,9],[7,10,9,10]],8],[1,0],[],[5,3,[5,10],2]]
[[[0,8,8,8]]]

[[5,[[10]]],[[],1,[[9],[10,6,6,0],4],[7,8,6]],[[5,[2]],[],[8,[10],1],10],[[10,[5,5,1],6,0],0]]
[[10,[9,1,[7,5,3],8],[[10],8]],[[6,[6]],[10,0,6,0,2]],[[[],0],[10,9,8,4,[1,6,8,3]]],[9,9,6],[10,[]]]

[[[[6],[1]],4,[[5,10],[0,10],6],[[5,7,10,10],[6,5,0,10],[],[3,9,8,1,0]],4],[],[[0],3,1,0],[6,[[9]],[[5,9],4,[9]]]]
[[[[9,8,6]]]]

[[10,6]]
[[],[4,[[0,3,8,8,1],[0,10,7,7,7],[],[8]],[[],[1,1,10],4],2,[[6,3,1,5]]],[]]

[[[],0,5,8]]
[[3,[10],10,[],7],[[[5],[8,8,6]],[[7,2,0],6],0,6],[[5],[[3,6,1,8,6],8,5],[[],[9,7,0,9,4],0,9],10,5]]

[[],[]]
[[1,0,[[5,4,5,2],0,6,[7,2,8],4],[[2,10],9,3],4],[4],[[4]],[[6,3,[],4],0,4],[4,[]]]

[[[[4],[2,4],6,[]],1],[10,[3,0,4,[2,0,4,3]],[[5,6,0,1,2]],[[3],0,[]],[[6,10]]],[4],[],[2,2]]
[[[3,[4,1,4,2],[1,3],[6,6]],[[10],9,[2,0,1]]],[3,9,[3,[5,9,5],7,[1,10,9],8],10],[[3,[7,9,1,10,4],[5,8],[9,10,8,7,1],5],9,2,[[3,7,0],10,[],[7,6,2,5,1],[]],[]]]

[[[[2,9],[]]],[[10,[2,10],[],[7,1,2],9]]]
[[5,9,6,[0,[2,9,6],[2,2,1]]],[1,[[8,4],[9,1],[7,1,10,5,4],[9,4]],9,6],[4]]

[[[0,[10,3,10,0],5,4,1],[],8,1,10],[[],[[7],[8,3,7,8],[3,9,2,0],9,[9,5,7,4,1]]],[],[0,10,[0,[9,5,0,5],[7,9,7,10,9],0,[]]],[]]
[[1,1,7,0],[10,7],[[1,0,[8],5],6]]

[[[8,4,[5,5,2],3]]]
[[0,7,[6,[],[10,5]],5],[3],[9,8,[],[[2],[1],9,[3,6]],[[]]],[0]]

[[[6],[[2,6,10],[8,3,10,1,10]],2],[[[8,2,8,10,3],5]]]
[[[[]],8,[[8,4],[],[],[4,4,1,0,10],[1,5,2,4,6]],3,[0,[8,0,2]]]]

[[8,3,[4,[]],[[3,5,5,7,8],[2],1]],[]]
[[[[6,5,1,3],0,6]],[7,9,[],0]]

[[4,0,[[8,0,10,7],10,1,[10,1,8,10],[]],4,10],[7,1],[8],[7,[[4,0,7,1]],[7],[]],[]]
[[8,[[10,8,4,7,10]],[[10,2]],[5],[[1,5,2,6]]],[[[4,4,3,4,4],6],9,[6],[0,[9,6,5,1],[9],[8,5,0],[0]]],[8,5,[8,[2,6,0,3,4],7,4],8,[6,[4,0,10],[]]],[[[8],[0,2,8,0]],[6,[1]],[],1],[]]

[[2],[[[8]],6],[2,[[7],10,0,[8,7]],9,[9]],[]]
[[2,[[4,9],4,[],9]],[[1,[8,7,3],0,2],2],[[],5,2],[0,10]]

[[4,7,0,[],[0,[0],[3,2,10,1],[0,4,4]]],[7,5,[[0,4,6]],[[2,9,1,4,0],9,[8,10,5,7]]],[6,[5,9,[8,0]],[5],[]]]
[[[6,[4,1,6,0,2],10,[2,5,3]],[5],9]]

[[8,[2],[]],[1,10,3],[10,[[1,8,6,7],9,6,0,5],[3,10,0]],[[[1,9]],5],[10]]
[[[[],[6,6,4,6,2],10,[7,5,8]],[[3,8,7,3],2,9],0],[2,1,[9,[7,7,3]],[9,8],[[3,9],[8,10],[7,10,6],0,[]]],[0,2,5],[[[3,6,6,10,3],[],[3,6,5,0],[]],[9,[4,6,8,5,9]],[[8],[1,1,8,1],7,4,[2,10]],8],[10,[6,[],[]]]]

[[[3],[],8,[[3,9,9]]]]
[[[[3,0,3],9,[3],2,10],6],[[],[0,7,8,8,[5]],9,[8]]]

[[1,3,[[5],[3,7,1],7,[10,8,5,10,6]]],[[10,5,4],7,[0,[4,8,1,4,5],[5,0,5,4,8],5,8]],[6],[7],[[[7,6]],9,[0,[9,10,10],9],2,9]]
[[5,10],[6,5,[]],[2,2,1,[],5]]

[[[9,[3,7,5,0,10],[2,4,8],[8,9,5]],[],2],[10,8],[[[10,6,4,9],[5,5,3,0,10],[8,10,3,7,5],[8,4,3,5]]]]
[[[1]],[[],6,[1,[4,3,6,8,8],7,[3,3,4,9],[9,8,1,3]],[[7,8],0,1]],[5,[8],8],[[[0],4,[1],[7,0,7,8,8],7],[6,5,[5,0]],10,[[7],[6],9]],[3,10,[2],[[8,2,4]],0]]

[[[3,9],5,3,7],[2,2,4],[[[7,1],3,4],[]],[[[8,1,10,9,10],7,[7,10,3,8],1,3]],[[10]]]
[[[0]],[]]

[[[]],[[4,8,[8,0,7,3]],5,3,1],[5,8,[8,[2,7,9,3,2],[5,0,1,4,7],5],8,[[9],3,[9],[8,2,5,3],[5,8,4]]],[9,1,1,[7],[]],[6,[2,[1,3]],[3,4,[8,6],0,2]]]
[[[2,7,2],[]],[6,3,[8]],[4]]

[[],[[2],[[5,8,1,9,6],[],7],4],[],[[6,9,[7],2,1],[8]]]
[[[3,7,[],6,3],[6],5,3]]

[[3,8,[[3,4,1,2,3]],[0,[1],[7,3,8,10,9]],[[2,10,7]]],[[[0,3,8,9],[0,6,8],8,1,2],7,[9,0,7,[9,5,0]],[[]],[[5,3,6]]]]
[[10,[]],[2,[4],[]],[[[0],[0,6,5],[7,4,3,2,3]]],[]]

[[4,[[8],[5,10,9,6,5]],9,5],[2],[2,10,5,[]],[[[0,10,8,1],3,6],8,8,[[5,10,9,6,10],[4,10,9,9],4,10]],[2,[4,[9]],8,1,[7,7,1,[]]]]
[[[8,5,0,[10,6,5],[0,6,1,0]],[[1,1,3],[6,6,3,7,5],9,10,[8]],[[3,3],7,[5,0],4,[9,3,9]]],[[4],[[6,6,0],7,5,3]],[],[3,[0,[10,8,10],[3,0],8],[3,3]],[[[10]],[[7,6],[2,7,10,0,5],6,0],[[9,3,10,2],8,[5,8,1]],10]]

[[[],6,9,[2,[10,4,6,9,1]]],[[[8,6,4,5],1,[5,5,3,7,8],[]]],[[[5,5,10,7]],[[2,4],0,[2,2],10,[]],[[1],[0],[1,1,7,3,8],[4,10,0,0]]]]
[[7,5,[[],10,[],6,[4,1,1,1]],[8,4,[4,0,9,0]],[]]]

[[[[4,0],[]]]]
[[[6],7],[[6],3],[6,[[2,6,10,7,8],1,2,10,4],[[1],6,5,6]],[]]

[[8,[2],[4]],[],[]]
[[[[6,8,10,8,5]],9],[]]

[[[]],[],[[[8,3,5,4,4],[9,5,4],[2],[9,4,3],[3,7,3,9]]],[4,[3,[]],0,[[10,9,0],2,8,[1],[]]]]
[[],[7,[]]]

[[],[1,[2,5,[]],4,10,2],[0,8,5,[[10,9],1],[[],3,[3,6,0,7,2],0,[2]]],[[[7,2,9,2],[],[3],8,[]],10,[8,0,[6]],[10]],[5,[[9,10],2,[9]],3,[9,[4,9,5,9,7]]]]
[[[[2],[5,1,3,2,10]],[7,[3,7,4,2,7],[9,2,6,8],1],[[8,4,3],[8,8,5],5,6,6]],[]]

[[6],[7,[[0]],[3,7,[7,5,8,0,9]]],[],[7,[3]],[0,0]]
[[0,0],[[9,0],[[10,7],[2,5,8,8],6],[[9,5,3,3,9],[7,4],8,6,2]]]

[[[],[3],1],[[[0,4,0,8,0],3,[5,1,9,5]],8,8,6]]
[[2,1,5]]

[[],[[8,[6,1,0,9],6],9,3,1]]
[[],[4]]

[[[[3,5,4,10,4],10,[2,3],9],8,[4,[2,4,3,10,6]],5]]
[[0,8,[]],[10],[8,[2,[9,6,9,9],[10,9]],8,[1,0,2],7],[[8,5,[1,2],[7,7,5,1],[1,5,6,6,0]],8,[],[0,[9],1,[3],[8,4]]],[[6],9,8,5,[0,3,[8,10,4,9]]]]

[[[1,[5,2,4,0],[3,8,7,3],[6,4],[]]],[],[],[7,8]]
[[[[7,4],7,[5,8,2,4,9],8,[8,7,10,7]]],[[5,[],8,[0,9,4,5,8]],[[5,1,8],10,[],7,8],0,[],1],[[[0,3,3],[]],2]]

[[],[[7,[7,10,3,8,8],[],6]],[3,[[2,0,8,2],[],2],[[4,7,2,7,10],5,[0,6]],10,[[],[8,0,8,9,0],[0,1,10,8,1],3,9]],[[[3,3,0,6]],[[10,1,0,5,8],7,3]],[0,[4,[1,1,0,10,10],5,1],[[1,4,8,2],8,[6,9,1],8],1]]
[[10,10],[6,6,[5,[],6,[4,4,9,9]],4],[],[7]]

[[],[[[8,5,2,0]],7,4],[[8,[7]],1],[],[0,0,[1,[0,6,10],[4],[],1],[4],3]]
[[[[],[10,1],9,[2,6]],[[],9],[3,[7,0,10,3,8],[0,6]],3],[1,[[3,7,6,5]]],[[]],[[],[10,2,0,[8,3]]]]

[[[0]],[4,7,[[3,8,4],9],[[8,1,5],[1,1,7,6,2]]],[],[]]
[[[5,0],[3],[1],[]],[[[5,1],6,7,0,10]],[[[6,0,1],0,[]],[9],[],[[9]],[9,[6,0,4,1]]],[]]

[[10],[],[3]]
[[[[5,2,0,3],5,[],[7,1,5,7]]]]

[[[5,10,[3,4,5,4],8,0]],[[4],[[3,9,2,8,0],6,6]],[[],7,5,[0,0,[],[10]]]]
[[2,3,5,[[9,5],6],0],[[[4,5,7,6,5],[6,1,9],8,[6,6,6],8],[7],8,5],[0,[6,[0,9,3,5],[9,1,9],3,7],[]],[[[1,6,0,5,0],[1,2,5,6,8],0,8],7]]

[[[],9],[]]
[[8],[[[]],[],[3,3,[10,7,9,0,6],0],9],[],[[[5,10,5,8,10],[5,1,8,10,8]],6,0,[3],[[]]]]

[[7,[]]]
[[[],9,[[0,9,1],[6],9,[8,4,10,4,7],[6]]],[3,[2,[0,5],7,9],2],[[[9],7,[1,7],9]]]`,e5=`495,144 -> 499,144
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
504,141 -> 508,141
498,135 -> 502,135
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
485,147 -> 490,147
483,153 -> 488,153
479,151 -> 484,151
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
510,141 -> 514,141
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
476,153 -> 481,153
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
515,165 -> 520,165
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
508,165 -> 513,165
494,155 -> 499,155
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
487,30 -> 487,31 -> 499,31 -> 499,30
497,129 -> 502,129
473,155 -> 478,155
517,123 -> 522,123
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
489,149 -> 494,149
507,126 -> 512,126
489,144 -> 493,144
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
486,151 -> 491,151
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
521,126 -> 526,126
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
487,155 -> 492,155
513,120 -> 518,120
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
482,149 -> 487,149
500,158 -> 500,159 -> 513,159
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
505,168 -> 510,168
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
509,117 -> 514,117
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
503,123 -> 508,123
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
510,123 -> 515,123
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
513,144 -> 517,144
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
501,138 -> 505,138
507,144 -> 511,144
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
492,141 -> 496,141
495,138 -> 499,138
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
498,141 -> 502,141
501,155 -> 506,155
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
497,153 -> 502,153
504,129 -> 509,129
518,129 -> 523,129
480,155 -> 485,155
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
525,129 -> 530,129
504,135 -> 508,135
487,30 -> 487,31 -> 499,31 -> 499,30
487,30 -> 487,31 -> 499,31 -> 499,30
493,151 -> 498,151
514,126 -> 519,126
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
507,138 -> 511,138
495,37 -> 506,37
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
500,126 -> 505,126
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
519,168 -> 524,168
511,162 -> 516,162
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
506,120 -> 511,120
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
501,132 -> 505,132
511,129 -> 516,129
494,80 -> 507,80
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
501,144 -> 505,144
490,153 -> 495,153
512,168 -> 517,168
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
500,158 -> 500,159 -> 513,159`,Y5=`Sensor at x=3907621, y=2895218: closest beacon is at x=3790542, y=2949630
Sensor at x=1701067, y=3075142: closest beacon is at x=2275951, y=3717327
Sensor at x=3532369, y=884718: closest beacon is at x=2733699, y=2000000
Sensor at x=2362427, y=41763: closest beacon is at x=2999439, y=-958188
Sensor at x=398408, y=3688691: closest beacon is at x=2275951, y=3717327
Sensor at x=1727615, y=1744968: closest beacon is at x=2733699, y=2000000
Sensor at x=2778183, y=3611924: closest beacon is at x=2275951, y=3717327
Sensor at x=2452818, y=2533012: closest beacon is at x=2733699, y=2000000
Sensor at x=88162, y=2057063: closest beacon is at x=-109096, y=390805
Sensor at x=2985370, y=2315046: closest beacon is at x=2733699, y=2000000
Sensor at x=2758780, y=3000106: closest beacon is at x=3279264, y=2775610
Sensor at x=3501114, y=3193710: closest beacon is at x=3790542, y=2949630
Sensor at x=313171, y=1016326: closest beacon is at x=-109096, y=390805
Sensor at x=3997998, y=3576392: closest beacon is at x=3691556, y=3980872
Sensor at x=84142, y=102550: closest beacon is at x=-109096, y=390805
Sensor at x=3768533, y=3985372: closest beacon is at x=3691556, y=3980872
Sensor at x=2999744, y=3998031: closest beacon is at x=3691556, y=3980872
Sensor at x=3380504, y=2720962: closest beacon is at x=3279264, y=2775610
Sensor at x=3357940, y=3730208: closest beacon is at x=3691556, y=3980872
Sensor at x=1242851, y=838744: closest beacon is at x=-109096, y=390805
Sensor at x=3991401, y=2367688: closest beacon is at x=3790542, y=2949630
Sensor at x=3292286, y=2624894: closest beacon is at x=3279264, y=2775610
Sensor at x=2194423, y=3990859: closest beacon is at x=2275951, y=3717327`,f5="",s5="",d5="",l5="",v5="",p5="",A5="",C5="",h5="",g5="";var dn=Object.assign({"./solutions/solution-01.js":xn,"./solutions/solution-02.js":On,"./solutions/solution-03.js":Kn,"./solutions/solution-04.js":t1,"./solutions/solution-05.js":m1,"./solutions/solution-06.js":Y1,"./solutions/solution-07.js":l1,"./solutions/solution-08.js":A1,"./solutions/solution-09.js":g1,"./solutions/solution-10.js":b1,"./solutions/solution-11.js":w1,"./solutions/solution-12.js":z1,"./solutions/solution-13.js":$1,"./solutions/solution-14.js":S1,"./solutions/solution-15.js":X1,"./solutions/solution-16.js":F1,"./solutions/solution-17.js":G1,"./solutions/solution-18.js":V1,"./solutions/solution-19.js":Q1,"./solutions/solution-20.js":P1,"./solutions/solution-21.js":J1,"./solutions/solution-22.js":H1,"./solutions/solution-23.js":N1,"./solutions/solution-24.js":W1,"./solutions/solution-25.js":x1}),ln=Object.assign({"./inputs/input-01.txt":y1,"./inputs/input-02.txt":k1,"./inputs/input-03.txt":O1,"./inputs/input-04.txt":I1,"./inputs/input-05.txt":E1,"./inputs/input-06.txt":K1,"./inputs/input-07.txt":n5,"./inputs/input-08.txt":c5,"./inputs/input-09.txt":t5,"./inputs/input-10.txt":r5,"./inputs/input-11.txt":o5,"./inputs/input-12.txt":m5,"./inputs/input-13.txt":a5,"./inputs/input-14.txt":e5,"./inputs/input-15.txt":Y5,"./inputs/input-16.txt":f5,"./inputs/input-17.txt":s5,"./inputs/input-18.txt":d5,"./inputs/input-19.txt":l5,"./inputs/input-20.txt":v5,"./inputs/input-21.txt":p5,"./inputs/input-22.txt":A5,"./inputs/input-23.txt":C5,"./inputs/input-24.txt":h5,"./inputs/input-25.txt":g5});function i5(c,n,t){this.day=c||"0",this.input=n||"",this.part1=t.part1||null,this.part2=t.part2||null}function B5(){var c={},n={};Object.keys(ln).forEach(r=>{var a=/input-(..)/.exec(r)[1];c[a]=ln[r]||""}),Object.keys(dn).forEach(r=>{var a=/solution-(..)/.exec(r)[1];n[a]=dn[r]||null});var t={},o=Object.keys(c).sort();return o.forEach(r=>{t[r]=new i5(r,c[r],n[r])}),t}function vn(c,n,t){const o=c.slice();return o[18]=n[t],o}function pn(c){let n,t=c[18]+"",o,r,a;function m(){return c[8](c[18])}return{c(){n=i("span"),o=y(t),A(n,"class","button svelte-1cclp05"),Yn(n,"current",c[18]===c[2])},m(e,Y){hn(e,n,Y),v(n,o),r||(a=[G(n,"keydown",j5),G(n,"click",m)],r=!0)},p(e,Y){c=e,Y&2&&t!==(t=c[18]+"")&&I(o,t),Y&6&&Yn(n,"current",c[18]===c[2])},d(e){e&&cn(n),r=!1,M(a)}}}function b5(c){let n,t,o,r,a,m,e,Y,f,s,d,p,l,b,L,U,J,u,_,H,C,R,$,B,w,X,Z,on,z,k,mn,S=c[1],j=[];for(let h=0;h<S.length;h+=1)j[h]=pn(vn(c,S,h));return{c(){n=i("div"),t=i("h2"),t.textContent="Advent 2022",o=q(),r=i("div"),a=i("div"),a.innerHTML='<h4 class="svelte-1cclp05">Days:</h4>',m=q(),e=i("div");for(let h=0;h<j.length;h+=1)j[h].c();Y=q(),f=i("div"),s=i("h4"),s.textContent="Output 1:",d=q(),p=i("div"),l=y(c[5]),b=q(),L=i("textarea"),J=q(),u=i("div"),_=i("h4"),_.textContent="Output 2:",H=q(),C=i("div"),R=y(c[6]),$=q(),B=i("textarea"),X=q(),Z=i("div"),Z.innerHTML='<h4 class="svelte-1cclp05">Input:</h4>',on=q(),z=i("textarea"),A(a,"class","label svelte-1cclp05"),A(e,"class","day-list"),A(s,"class","svelte-1cclp05"),A(p,"class","time svelte-1cclp05"),A(f,"class","label svelte-1cclp05"),A(L,"name","output1"),A(L,"id","output1"),A(L,"rows",U=W(c[3])),A(L,"class","svelte-1cclp05"),A(_,"class","svelte-1cclp05"),A(C,"class","time svelte-1cclp05"),A(u,"class","label svelte-1cclp05"),A(B,"name","output2"),A(B,"id","output2"),A(B,"rows",w=W(c[4])),A(B,"class","svelte-1cclp05"),A(Z,"class","label svelte-1cclp05"),Sn(Z,"align-self","flex-start"),A(z,"name","input"),A(z,"id","input"),A(z,"rows","14"),A(z,"class","svelte-1cclp05"),A(r,"class","layout svelte-1cclp05"),A(n,"class","outer svelte-1cclp05")},m(h,D){hn(h,n,D),v(n,t),v(n,o),v(n,r),v(r,a),v(r,m),v(r,e);for(let g=0;g<j.length;g+=1)j[g].m(e,null);v(r,Y),v(r,f),v(f,s),v(f,d),v(f,p),v(p,l),v(r,b),v(r,L),T(L,c[3]),v(r,J),v(r,u),v(u,_),v(u,H),v(u,C),v(C,R),v(r,$),v(r,B),T(B,c[4]),v(r,X),v(r,Z),v(r,on),v(r,z),T(z,c[0]),k||(mn=[G(L,"input",c[9]),G(B,"input",c[10]),G(z,"input",c[11])],k=!0)},p(h,[D]){if(D&134){S=h[1];let g;for(g=0;g<S.length;g+=1){const an=vn(h,S,g);j[g]?j[g].p(an,D):(j[g]=pn(an),j[g].c(),j[g].m(e,null))}for(;g<j.length;g+=1)j[g].d(1);j.length=S.length}D&32&&I(l,h[5]),D&8&&U!==(U=W(h[3]))&&A(L,"rows",U),D&8&&T(L,h[3]),D&64&&I(R,h[6]),D&16&&w!==(w=W(h[4]))&&A(B,"rows",w),D&16&&T(B,h[4]),D&1&&T(z,h[0])},i:P,o:P,d(h){h&&cn(n),Un(j,h),k=!1,M(mn)}}}function W(c){var n=String(c||"").split(`
`).length;return Math.min(n,Math.max(n,1,10))}const j5=()=>{};function L5(c,n,t){var o=[],r="xx",a="",m="",e="",Y="1ms",f="1ms",s=B5(),d=()=>Object.keys(s).filter(C=>!!s[C].part1).sort();o=d();function p(C=1){if(!l[C]){var R=s[r]||{},$=C===1?R.part1:R.part2;!$||(l[C]=!0,setTimeout(()=>{var B=performance.now(),w="(error)";try{w=$(e)}catch(Z){w=String(Z);var X=/:(\d+:\d+)\)/.exec(Z.stack||"");X&&(w=`(${X[1]}) ${w}`)}U(C,w,performance.now()-B),l[C]=!1}))}}var l=[!1,!1,!1];function b(C=""){C&&t(2,r=C),t(0,e=s[C].input)}function L(C){p(1),p(2)}function U(C,R,$){var B=`(${Math.round($)}ms)`;C===1&&t(3,a=R),C===1&&t(5,Y=B),C===2&&t(4,m=R),C===2&&t(6,f=B)}setTimeout(()=>{b(o[o.length-1]),L()},100);const J=C=>b(C);function u(){a=this.value,t(3,a)}function _(){m=this.value,t(4,m)}function H(){e=this.value,t(0,e)}return c.$$.update=()=>{c.$$.dirty&1&&L()},[e,o,r,a,m,Y,f,b,J,u,_,H]}class D5 extends Hn{constructor(n){super(),Jn(this,n,L5,b5,Zn,{})}}new D5({target:document.querySelector(".app")});
