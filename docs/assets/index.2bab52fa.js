(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=c(r);fetch(r.href,a)}})();function cn(){}function Fn(t){return t()}function Zn(){return Object.create(null)}function I(t){t.forEach(Fn)}function Pn(t){return typeof t=="function"}function p1(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function h1(t){return Object.keys(t).length===0}function q(t,n){t.appendChild(n)}function Rn(t,n,c){t.insertBefore(n,c||null)}function pn(t){t.parentNode&&t.parentNode.removeChild(t)}function b1(t,n){for(let c=0;c<t.length;c+=1)t[c]&&t[c].d(n)}function $(t){return document.createElement(t)}function vn(t){return document.createTextNode(t)}function P(){return vn(" ")}function N(t,n,c,o){return t.addEventListener(n,c,o),()=>t.removeEventListener(n,c,o)}function C(t,n,c){c==null?t.removeAttribute(n):t.getAttribute(n)!==c&&t.setAttribute(n,c)}function g1(t){return Array.from(t.childNodes)}function wn(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function nn(t,n){t.value=n??""}function w1(t,n,c,o){c===null?t.style.removeProperty(n):t.style.setProperty(n,c,o?"important":"")}function W(t,n,c){t.classList[c?"add":"remove"](n)}let zn;function sn(t){zn=t}const on=[],$n=[],fn=[],_n=[],L1=Promise.resolve();let Ln=!1;function j1(){Ln||(Ln=!0,L1.then(Gn))}function jn(t){fn.push(t)}const bn=new Set;let ln=0;function Gn(){const t=zn;do{for(;ln<on.length;){const n=on[ln];ln++,sn(n),Y1(n.$$)}for(sn(null),on.length=0,ln=0;$n.length;)$n.pop()();for(let n=0;n<fn.length;n+=1){const c=fn[n];bn.has(c)||(bn.add(c),c())}fn.length=0}while(on.length);for(;_n.length;)_n.pop()();Ln=!1,bn.clear(),sn(t)}function Y1(t){if(t.fragment!==null){t.update(),I(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(jn)}}const R1=new Set;function z1(t,n){t&&t.i&&(R1.delete(t),t.i(n))}function q1(t,n,c,o){const{fragment:r,after_update:a}=t.$$;r&&r.m(n,c),o||jn(()=>{const s=t.$$.on_mount.map(Fn).filter(Pn);t.$$.on_destroy?t.$$.on_destroy.push(...s):I(s),t.$$.on_mount=[]}),a.forEach(jn)}function i1(t,n){const c=t.$$;c.fragment!==null&&(I(c.on_destroy),c.fragment&&c.fragment.d(n),c.on_destroy=c.fragment=null,c.ctx=[])}function A1(t,n){t.$$.dirty[0]===-1&&(on.push(t),j1(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function C1(t,n,c,o,r,a,s,v=[-1]){const d=zn;sn(t);const l=t.$$={fragment:null,ctx:[],props:a,update:cn,not_equal:r,bound:Zn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:Zn(),dirty:v,skip_bound:!1,root:n.target||d.$$.root};s&&s(l.root);let e=!1;if(l.ctx=c?c(t,n.props||{},(m,f,...p)=>{const h=p.length?p[0]:f;return l.ctx&&r(l.ctx[m],l.ctx[m]=h)&&(!l.skip_bound&&l.bound[m]&&l.bound[m](h),e&&A1(t,m)),f}):[],l.update(),e=!0,I(l.before_update),l.fragment=o?o(l.ctx):!1,n.target){if(n.hydrate){const m=g1(n.target);l.fragment&&l.fragment.l(m),m.forEach(pn)}else l.fragment&&l.fragment.c();n.intro&&z1(t.$$.fragment),q1(t,n.target,n.anchor,n.customElement),Gn()}sn(d)}class u1{$destroy(){i1(this,1),this.$destroy=cn}$on(n,c){if(!Pn(c))return cn;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(c),()=>{const r=o.indexOf(c);r!==-1&&o.splice(r,1)}}$set(n){this.$$set&&!h1(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}var B1=[24e3,70509,45e3,208567];function D1(t=""){return Jn(t).reduce((n,c)=>Math.max(n,c),0)}function Z1(t=""){for(var n=Jn(t).sort((r,a)=>a-r),c=0,o=0;o<Math.min(3,n.length);o++)c+=n[o];return c}function Jn(t){var n=[0];return t.split(`
`).forEach(c=>{c?n[n.length-1]+=parseInt(c):n.push(0)}),n}const $1=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:B1,part1:D1,part2:Z1},Symbol.toStringTag,{value:"Module"}));var _1=[15,13565,12,12424];function U1(t=""){var n={"A X":4,"B X":1,"C X":7,"A Y":8,"B Y":5,"C Y":2,"A Z":3,"B Z":9,"C Z":6};return t.split(`
`).map(c=>n[c]).reduce((c,o)=>c+o)}function y1(t=""){var n={"A X":3,"B X":1,"C X":2,"A Y":4,"B Y":5,"C Y":6,"A Z":8,"B Z":9,"C Z":7};return t.split(`
`).map(c=>n[c]).reduce((c,o)=>c+o)}const S1=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:_1,part1:U1,part2:y1},Symbol.toStringTag,{value:"Module"}));var M1=[157,8493,70,2552];function T1(t=""){var n=0;return t.split(`
`).forEach(c=>{c=c.trim();for(var o={},r=c.length/2,a=0;a<r;a++)o[c.charAt(a)]=!0;for(var s=r;s<c.length;s++)if(o[c.charAt(s)]){n+=Hn(c,s);return}}),n}function x1(t=""){var n,c,o=0;return t.split(`
`).forEach((r,a)=>{r=r.trim();var s=a%3;if(s===0){n={};for(var v of r)n[v]=!0}else if(s===1){c={};for(var v of r)n[v]&&(c[v]=!0)}else for(var v of r)if(c[v]){o+=Hn(v,0);return}}),o}function Hn(t,n){var c=t.charCodeAt(n);return c>95?c-96:c-38}const V1=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:M1,part1:T1,part2:x1},Symbol.toStringTag,{value:"Module"}));var X1=[2,580,4,895];function F1(t=""){var n=0;return t.split(`
`).forEach(c=>{var[o,r]=c.split(","),[a,s]=o.split("-").map(l=>parseInt(l)),[v,d]=r.split("-").map(l=>parseInt(l));a<v&&d>s||v<a&&s>d||n++}),n}function P1(t=""){var n=0;return t.split(`
`).forEach(c=>{var[o,r]=c.split(","),[a,s]=o.split("-").map(l=>parseInt(l)),[v,d]=r.split("-").map(l=>parseInt(l));s<v||a>d||n++}),n}const G1=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:X1,part1:F1,part2:P1},Symbol.toStringTag,{value:"Module"}));var J1=["CMZ","HBTMTBSDC","MCD","PQTJRSHWS"];function H1(t=""){var n=[];return t.split(`
`).forEach(c=>{if(c.includes("["))for(var o=1;o<c.length;o+=4){var r=(o-1)/4;n[r]||(n[r]=[]);var a=c.charAt(o);a!==" "&&n[r].unshift(a)}if(c.includes("move")){var s=/move (\d+) from (\d+) to (\d+)/.exec(c);if(!s)return;for(var v=parseInt(s[1]),d=parseInt(s[2])-1,l=parseInt(s[3])-1,o=0;o<v;o++){var e=n[d].pop();n[l].push(e)}}}),n.map(c=>c[c.length-1]).join("")}function Q1(t=""){var n=[];return t.split(`
`).forEach(c=>{if(c.includes("["))for(var o=1;o<c.length;o+=4){var r=(o-1)/4;n[r]||(n[r]=[]);var a=c.charAt(o);a!==" "&&n[r].unshift(a)}if(c.includes("move")){var s=/move (\d+) from (\d+) to (\d+)/.exec(c);if(!s)return;var v=parseInt(s[1]),d=parseInt(s[2])-1,l=parseInt(s[3])-1,e=n[d],m=e.splice(e.length-v);n[l]=n[l].concat(m)}}),n.map(c=>c[c.length-1]).join("")}const N1=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:J1,part1:H1,part2:Q1},Symbol.toStringTag,{value:"Module"}));var W1=[7,1093,19,3534];function E1(t=""){return Qn(t,4)}function k1(t=""){return Qn(t,14)}function Qn(t,n){for(var c=0,o=0;o<t.length;o++){if(c++,c===n)return o+1;for(var r=1;r<n-c+1;r++)if(t[o]===t[o+r]){c=0;break}}return-1}const I1=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:W1,part1:E1,part2:k1},Symbol.toStringTag,{value:"Module"}));var O1=[95437,1325919,24933642,2050735];function K1(t=""){var n=Nn(t),c=qn(n),o=0;return c.forEach(r=>{r.size<1e5&&(o+=r.size)}),o}function n2(t=""){var n=Nn(t),c=qn(n),o=7e7-n.size,r=3e7-o,a=1/0;return c.forEach(s=>{s.size>r&&s.size<a&&(a=s.size)}),a}function Yn(t){this.parent=t,this.children={},this.size=0}function c2(t="a",n="1"){this.name=t,this.size=parseInt(n)}function Nn(t){var n=new Yn(null),c=n;return t.split(`
`).forEach(o=>{if(o=o.trim(),/^\$ cd /.test(o)){var r=o.substring(5);r==="/"?c=n:r===".."?c=c.parent:c=c.children[r]}else if(!/^\$ ls/.test(o))if(/^dir /.test(o)){var a=o.substring(4);c.children[a]=c.children[a]||new Yn(c)}else if(/^\d+ \S+$/.test(o)){var[s,v]=o.split(" ");c.children[v]=c.children[v]||new c2(v,s)}else console.log("err",o);if(!c)return console.log("err",c,n),""}),n}function qn(t,n=[]){n.push(t);var c=0;for(var o in t.children){var r=t.children[o];r instanceof Yn&&qn(r,n),c+=r.size}return t.size=c,n}const t2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:O1,part1:K1,part2:n2},Symbol.toStringTag,{value:"Module"}));var r2=[21,1733,8,284648];function o2(t=""){var n=[];t.split(`
`).forEach((s,v)=>{n[v]=[],s.split("").forEach(d=>{var l=parseInt(d);n[v].push({ht:l,viz:!1})})});var c=(s,v=1)=>{for(var d=-1,l=0;l<s.length;l++){var e=v>0?s[l]:s[s.length-l-1];e.ht>d&&(e.viz=!0,d=e.ht)}};n.forEach(s=>c(s)),n.forEach(s=>c(s,-1));for(var o=0;o<n[0].length;o++){var r=n.map(s=>s[o]);c(r),c(r,-1)}var a=0;return n.forEach(s=>{s.forEach(v=>{v.viz&&a++})}),a}function v2(t=""){var n=[];t.split(`
`).forEach((s,v)=>{n[v]=[],s.split("").forEach(d=>{var l=parseInt(d);n[v].push({ht:l,score:1})})});var c=0,o=s=>{for(var v=0;v<s.length;v++){for(var d=s[v],l=0,e=v-1;e>=0;e--){var m=s[e];if(l++,m.ht>=d.ht)break}for(var f=0,p=v+1;p<s.length;p++){var h=s[p];if(f++,h.ht>=d.ht)break}d.score*=l,d.score*=f,d.score>c&&(c=d.score)}};n.forEach(s=>o(s));for(var r=0;r<n[0].length;r++){var a=n.map(s=>s[r]);o(a)}return c}const s2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:r2,part1:o2,part2:v2},Symbol.toStringTag,{value:"Module"}));var a2=[13,6563,1,2653];function d2(t=""){var n=[0,0],c=[0,0],o={},r=s=>o[s.join(",")]=!0,a={R:[1,0],L:[-1,0],U:[0,1],D:[0,-1]};return r(c),t.split(`
`).forEach((s,v)=>{for(var[d,l]=s.trim().split(/\s+/),e=a[d],m=parseInt(l),f=0;f<m;f++)n[0]+=e[0],n[1]+=e[1],Wn(n,c),r(c)}),Object.keys(o).length}function Wn(t,n){var c=t[0]-n[0],o=t[1]-n[1],r=t[0]>n[0]?1:-1,a=t[1]>n[1]?1:-1;c===0||o===0?(Math.abs(c)>1&&(n[0]+=r),Math.abs(o)>1&&(n[1]+=a)):(Math.abs(c)>1||Math.abs(o)>1)&&(n[0]+=r,n[1]+=a)}function l2(t=""){var n=Array.from(Array(10)).map(a=>[0,0]),c={},o=a=>c[a.join(",")]=!0,r={R:[1,0],L:[-1,0],U:[0,1],D:[0,-1]};return o(n[0]),t.split(`
`).forEach((a,s)=>{for(var[v,d]=a.trim().split(/\s+/),l=r[v],e=parseInt(d),m=0;m<e;m++){n[0][0]+=l[0],n[0][1]+=l[1];for(var s=1;s<n.length;s++)Wn(n[s-1],n[s]);o(n[n.length-1])}}),Object.keys(c).length}const e2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:a2,part1:d2,part2:l2},Symbol.toStringTag,{value:"Module"}));var m2=[13140,15880,`##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......####
#######.......#######.......#######.....`,`###..#.....##..####.#..#..##..####..##..
#..#.#....#..#.#....#.#..#..#....#.#..#.
#..#.#....#....###..##...#..#...#..#....
###..#....#.##.#....#.#..####..#...#.##.
#....#....#..#.#....#.#..#..#.#....#..#.
#....####..###.#....#..#.#..#.####..###.`];function f2(t=""){var n=0,c={20:!0,60:!0,100:!0,140:!0,180:!0,220:!0},o=(s,v)=>{s in c&&(n+=v*s)},r=1,a=1;return t.split(`
`).forEach(s=>{for(var[v,d]=s.trim().split(/\s+/),l=v==="addx"?2:1;l-- >0;)o(r,a),r++;v==="addx"&&(a+=parseInt(d))}),n}function p2(t=""){var n="",c=(a,s)=>{var v=(a-1)%40;v===0&&a>1&&(n+=`
`);var d=Math.abs(v-s);n+=d<2?"#":"."},o=1,r=1;return t.split(`
`).forEach(a=>{for(var[s,v]=a.trim().split(/\s+/),d=s==="addx"?2:1;d-- >0;)c(o,r),o++;s==="addx"&&(r+=parseInt(v))}),n}const h2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:m2,part1:f2,part2:p2},Symbol.toStringTag,{value:"Module"}));var b2=[10605,61503,2713310158,14081365540];function g2(){this.items=[],this.op=()=>{},this.div=1,this.next=[0,0],this.count=0}function En(t){var n=[],c=null;return t.split(`
`).forEach(o=>{var r=o.trim().split(/\s+/);if(r[0]==="Monkey")c=new g2,n.push(c);else if(r[0]==="Starting")c.items=r.slice(2).map(v=>parseInt(v));else if(r[0]==="Operation:"){var a=r.pop(),s=r.pop();c.op=(()=>{if(a==="old"){if(s==="+")return d=>d+d;if(s==="*")return d=>d*d;throw"unhandled"}var v=parseInt(a);if(!isNaN(v)){if(s==="+")return d=>d+v;if(s==="*")return d=>d*v}throw"unhandled"})()}else r[0]==="Test:"?c.div=parseInt(r.pop()):r[1]==="true:"?c.next[0]=parseInt(r.pop()):r[1]==="false:"&&(c.next[1]=parseInt(r.pop()))}),n}function w2(t=""){for(var n=En(t),c=0;c<20;c++)n.forEach(o=>{o.items.forEach(r=>{o.count++,r=o.op(r),r=Math.floor(r/3);var a=r%o.div===0?0:1,s=o.next[a];n[s].items.push(r)}),o.items=[]});return n.sort((o,r)=>r.count-o.count),n[0].count*n[1].count}function L2(t=""){for(var n=En(t),c=n.reduce((r,a)=>r*a.div,1),o=0;o<1e4;o++)n.forEach(r=>{r.items.forEach(a=>{r.count++,a=r.op(a),a=a%c;var s=a%r.div===0?0:1,v=r.next[s];n[v].items.push(a)}),r.items=[]});return n.sort((r,a)=>a.count-r.count),n[0].count*n[1].count}const j2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:b2,part1:w2,part2:L2},Symbol.toStringTag,{value:"Module"}));var Y2=[31,420,29,414];function kn(t){var n=[-1,-1],c=[-1,-1],o=[];t.split(`
`).forEach((a,s)=>{var v=a.trim().split("").map((d,l)=>{var e=d.charCodeAt(0)-96,m=9999;return d==="S"&&(n=[l,s],e=1),d==="E"&&(c=[l,s],e=26),{ht:e,steps:m}});o.push(v)});var r=(a,s)=>a<0||a>=o[0].length||s<0||s>=o.length?null:o[s][a];return{start:n,end:c,getData:r}}function R2(t=""){var{start:n,end:c,getData:o}=kn(t);o(...n).steps=0;for(var r=[n],a=(l,e,m,f)=>{var p=o(l,e);if(p){if(p.ht>m+1||p.steps<=f)return;p.steps=f,r.push([l,e])}};r.length>0;){var[s,v]=r.pop(),d=o(s,v);a(s-1,v,d.ht,d.steps+1),a(s+1,v,d.ht,d.steps+1),a(s,v-1,d.ht,d.steps+1),a(s,v+1,d.ht,d.steps+1)}return o(c[0],c[1]).steps}function z2(t=""){var{end:n,getData:c}=kn(t);c(...n).steps=0;for(var o=[n],r=9999,a=(l,e,m,f)=>{var p=c(l,e);if(p){if(p.ht<m-1||p.steps<=f)return;p.steps=f,o.push([l,e]),p.ht===1&&(r=Math.min(r,p.steps))}};o.length>0;){var[s,v]=o.pop(),d=c(s,v);a(s-1,v,d.ht,d.steps+1),a(s+1,v,d.ht,d.steps+1),a(s,v-1,d.ht,d.steps+1),a(s,v+1,d.ht,d.steps+1)}return r}const q2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:Y2,part1:R2,part2:z2},Symbol.toStringTag,{value:"Module"}));var i2=[13,6395,140,24921];function A2(t=""){var n=t.split(`
`).map(o=>o.trim()).filter(o=>o).map(In),c=0;return n.forEach((o,r)=>{if(r%2!==0){var a=an(n[r-1],o);a<0&&(c+=(r+1)/2)}}),c}function C2(t=""){t+=`
  [[2]]  
  [[6]] `;var n=t.split(`
`).map(o=>o.trim()).filter(o=>o).map(In).sort(an),c=1;return n.forEach((o,r)=>{if(o.length===1&&o[0].length===1){var a=o[0][0];(a===2||a===6)&&(c*=r+1)}}),c}function an(t,n){if(typeof t=="number")return typeof n=="number"?t-n:an([t],n);if(typeof n=="number")return an(t,[n]);for(var c=Math.min(t.length,n.length),o=0;o<c;o++){var r=an(t[o],n[o]);if(r!==0)return r}return t.length-n.length}function In(t){if(t[0]!=="[")throw["err-1",t].join(" ");for(var n=[],c=[n],o=1;o<t.length-1;o++){var r=t[o];if(r!==","){if(r==="]"){c.pop();continue}var a=c[c.length-1];if(r==="["){var s=[];a.push(s),c.push(s);continue}var v=/^\d+/.exec(t.substring(o));if(!v)throw["err-2",o,t].join(" ");a.push(parseInt(v[0])),o+=v.length-1}}return n}const u2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:i2,part1:A2,part2:C2},Symbol.toStringTag,{value:"Module"}));var B2=[24,638,93,31722];function D2(t=""){for(var n=new On(t),c=0;c<99999;c++)if(n.sandComesToRestAt(500,0)>n.maxY)return c;throw"err"}function Z2(t=""){for(var n=new On(t),c=0;c<99999;c++)if(n.sandComesToRestAt(500,0)<0)return c;throw"err"}function On(t){var n=[],c=-99999,s=99999,o=(v,d)=>{n[v]||(n[v]=[]),n[v][d]=!0,c=Math.max(c,d)},r=(v,d)=>d>=s?!0:n[v]&&n[v][d]||!1,a=(v,d,l,e)=>{for(var m=v===l?0:v<l?1:-1,f=d===e?0:d<e?1:-1,p=Math.max(Math.abs(v-l),Math.abs(d-e)),h=0;h<=p;h++)o(v,d),v+=m,d+=f};t.split(`
`).forEach(v=>{var d;v.split("->").forEach((l,e)=>{var m=l.split(",").map(f=>parseInt(f));d&&a(...d,...m),d=m})}),this.maxY=c;var s=c+2;this.sandComesToRestAt=(v,d)=>{if(r(v,d))return d-1;for(var l=0;l<99999;l++){if(!r(v,d+1)){d++;continue}if(!r(v-1,d+1)){v--,d++;continue}if(!r(v+1,d+1)){v++,d++;continue}return o(v,d),d}}}const $2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:B2,part1:D2,part2:Z2},Symbol.toStringTag,{value:"Module"}));var _2=[26,6124805,56000011,0xb6b4fbfa17a];function Kn(t){return t.trim().split(`
`).map(n=>{var c=/Sensor at x=(.+), y=(.+): closest beacon is at x=(.+), y=(.+)/.exec(n.trim());if(!c)throw"?";var[,o,r,a,s]=c.map(d=>parseInt(d)),v=Math.abs(a-o)+Math.abs(s-r);return{sx:o,sy:r,dist:v}})}function U2(t=""){var n=Kn(t),c=n.every(s=>s.sx<1e3),o=c?10:2e6,r=1/0,a=-1/0;return n.forEach(({sx:s,sy:v,dist:d})=>{var l=d-Math.abs(v-o);l<0||(r=Math.min(r,s-l),a=Math.max(a,s+l))}),a-r}function y2(t=""){var n=Kn(t),c=(g,w)=>Math.abs(g.sx-w.sx)+Math.abs(g.sy-w.sy),o=g=>{for(var w of n)if(w!==g){for(var L of n)if(!(L===g||L===w)&&c(w,L)-w.dist-L.dist===2)return[w,L]}return[null,null]},[r,a]=o(null),[s,v]=o(r);if(!s)return"no hits :(";var d=(g,w)=>{var L=w-g,j=g+w;return{u:j,v:L}},l=(g,w)=>{var L=(g-w)/2,j=(g+w)/2;return{x:L,y:j}},e=[r,a,s,v],m=1/0,f=1/0;e.forEach(g=>{var w=d(g.sx,g.sy);m=Math.min(m,w.u+g.dist),f=Math.min(f,w.v+g.dist)});var{x:p,y:h}=l(m+1,f+1);return 4e6*p+h}const S2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:_2,part1:U2,part2:y2},Symbol.toStringTag,{value:"Module"}));var M2=[1651,1737,1707,2216];function n1(t){var n={},c={},o={};t.trim().split(`
`).forEach(a=>{var s=/Valve (.+) has flow rate=(.+); tunnels? leads? to valves? (.+)/.exec(a.trim());if(!s)throw`?? ${a}`;var[,v,d,l]=s;n[v]=parseInt(d),c[v]=l.split(",").map(e=>e.trim()),o[v]={}});var r=(a,s,v)=>{var d=o[a][s]||999;d<=v||(o[a][s]=v,c[s].forEach(l=>r(a,l,v+1)))};return Object.keys(n).forEach(a=>r(a,a,0)),{rates:n,distances:o}}function T2(t=""){var{rates:n,distances:c}=n1(t),o=Object.keys(n).filter(v=>n[v]>0),r=Array(30).fill(0).map(v=>[]),a=(v,d,l,e)=>{r[v].push({t:v,tot:d,loc:l,done:e})},s=0;return a(0,0,"AA",""),r.forEach(v=>{for(v.length>500&&(v.sort((f,p)=>p.tot-f.tot),v.length=500);v.length>0;){var{t:d,tot:l,loc:e,done:m}=v.pop();o.forEach(f=>{if(!m.includes(f)){var p=d+c[e][f]+1;if(!(p>=30)){var h=n[f]*(30-p),g=l+h;g>s&&(s=g),a(p,g,f,m+","+f)}}})}}),s}function x2(t=""){var{rates:n,distances:c}=n1(t),o=Object.keys(n).filter(v=>n[v]>0),r=Array(30).fill(0).map(v=>[]),a=(v,d,l,e,m,f)=>{var p=Math.min(v,d);r[p].push({t1:v,t2:d,tot:l,loc1:e,loc2:m,done:f})},s=0;return a(4,4,0,"AA","AA",""),r.forEach(v=>{for(v.length>1e3&&(v.sort((j,D)=>D.tot-j.tot),v.length=1e3);v.length>0;){var{t1:d,t2:l,tot:e,loc1:m,loc2:f,done:p}=v.pop(),[h,g]=d<l?[d,l]:[l,d],[w,L]=d<l?[m,f]:[f,m];o.forEach(j=>{if(!p.includes(j)){var D=h+c[w][j]+1;if(!(D>=30)){var B=n[j]*(30-D),y=e+B,S=p+","+j;y>s&&(s=y),a(g,D,y,L,j,S)}}})}}),s}const V2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:M2,part1:T2,part2:x2},Symbol.toStringTag,{value:"Module"}));var X2=[3068,3048,1514285714288,1504093567249],Un=[["1111"],["010","111","010"],["111","100","100"],["1","1","1","1"],["11","11"]].map(t=>t.map(n=>parseInt(n,2)<<2));function F2(t){for(var n=0;n<t.length;n++){var c=t.length-1-n,o=t[c].toString(2).padStart(7,"#");o=o.split("").map(r=>r==="1"?"#":".").reverse().join(""),console.log("|"+o+"|     "+c)}console.log("                     ")}function c1(t){var n=t.trim().split("").map(l=>l==="<"?-1:1),c=[],o=0,r=0,a=l=>l>>1,s=l=>l<<1,v=(l,e,m)=>e.every((f,p)=>(f&l[m+p])===0),d=2**6;this.rows=c,this.debug=()=>F2(c),this.dropRock=()=>{for(var l=Un[r++%Un.length].slice();c[c.length-1]===0;)c.pop();for(var e=c.length+3;c.length<e+l.length;)c.push(0);for(var m=!0;m;){var f=n[o++%n.length],p=l.every(g=>f<1?(g&1)===0:(g&d)===0);if(p){var h=l.map(f<0?a:s);v(c,h,e)&&(l=h)}m=e>0&&v(c,l,e-1),m&&e--}for(l.forEach((g,w)=>{c[e+w]|=g});c[c.length-1]===0;)c.pop()}}function P2(t=""){for(var n=new c1(t),c=0;c<2022;c++)n.dropRock();return n.rows.length}function G2(t=""){var n=new c1(t),c=[0],o=[""],r=0,a=0;n:for(var s=1;s<3e3;s++){n.dropRock();var e=n.rows.length,v=n.rows.slice(-30).join(",");c[s]=e,o[s]=v;for(var d=50;d<s/2;d++)if(o[d]===v){r=d,a=s-d;break n}}if(r===0)throw"?";var l=1e12;l-=r;var e=c[r],m=Math.floor(l/a),f=c[r+a]-c[r];return e+=f*m,l%=a,e+=c[r+l]-c[r],e}const J2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:X2,part1:P2,part2:G2},Symbol.toStringTag,{value:"Module"}));var H2=[64,4300,58,2490];function t1(t){var n={},c=(v,d,l)=>v|d<<8|l<<16,o=(v,d,l)=>n[c(v,d,l)]||0,r=(v,d,l,e)=>n[c(v,d,l)]=e,a=t.trim().split(`
`).map(v=>{var[d,l,e]=v.trim().split(",").map(m=>parseInt(m));return[d,l,e]}),s=v=>a.forEach(d=>v(...d));return{get:o,set:r,iter:s}}function Q2(t=""){var{get:n,set:c,iter:o}=t1(t);o((a,s,v)=>c(a,s,v,1));var r=0;return o((a,s,v)=>{n(a-1,s,v)===0&&r++,n(a+1,s,v)===0&&r++,n(a,s-1,v)===0&&r++,n(a,s+1,v)===0&&r++,n(a,s,v-1)===0&&r++,n(a,s,v+1)===0&&r++}),r}function N2(t=""){var{get:n,set:c,iter:o}=t1(t);o((f,p,h)=>c(f,p,h,1));var r=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];o((...f)=>{for(var p=0;p<3;p++)f[p]<r[p]&&(r[p]=f[p]),f[p]>a[p]&&(a[p]=f[p])});var s=[],v=(...f)=>{for(var p=0;p<3;p++)if(f[p]<r[p]-1||f[p]>a[p]+1)return;n(...f)===0&&s.push(f)};for(s.push([r[0]-1,r[1],r[2]]);s.length>0;){var[d,l,e]=s.pop();c(d,l,e,2),v(d+1,l,e),v(d-1,l,e),v(d,l+1,e),v(d,l-1,e),v(d,l,e+1),v(d,l,e-1)}var m=0;return o((f,p,h)=>{n(f-1,p,h)===2&&m++,n(f+1,p,h)===2&&m++,n(f,p-1,h)===2&&m++,n(f,p+1,h)===2&&m++,n(f,p,h-1)===2&&m++,n(f,p,h+1)===2&&m++}),m}const W2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:H2,part1:Q2,part2:N2},Symbol.toStringTag,{value:"Module"}));var E2=[33,1675,62*56,6840],dn={ore:0,clay:1,obsidian:2,geode:3};function r1(t){var n=[];return t.trim().split(`
`).forEach(c=>{var o=c.trim().split("Each"),[,r]=/^Blueprint (\d+):/.exec(o.shift())||[],a=Array(4).fill(0).map(s=>Array(4).fill(0));o.forEach(s=>{var[,v,d]=/^(.+) robot costs (.+)\.$/.exec(s.trim())||[],l=a[dn[v]];d.split("and").forEach(e=>{var[,m,f]=/^(\d+) (.+)$/.exec(e.trim())||[];l[dn[f]]=parseInt(m)})}),n.push({num:parseInt(r),costs:a})}),n}function k2(t=""){var n=r1(t);return n.reduce((c,o)=>{var r=o1(o,24);return c+o.num*r},0)}function I2(t=""){var n=r1(t);return n.length=Math.min(3,n.length),n.reduce((c,o)=>{var r=o1(o,32);return c*r},1)}var yn=t=>t?{have:t.have.slice(),robots:t.robots.slice()}:{have:Array(4).fill(0),robots:Array(4).fill(0)},o1=(t,n=10)=>{var c=0,o=[-3,-1,5,1e3],r=Array(n+2).fill(0).map(e=>[]),a=yn();a.robots[dn.ore]=1,r[1].push(a);for(var s=1;s<=n;s++){var v=r[s],d=n+1-s,l=1e3;v.length>l&&(v.forEach(e=>{e.score=o.reduce((m,f,p)=>{var h=e.have[p]+d*e.robots[p];return m+f*h})}),v.sort((e,m)=>m.score-e.score),v.length=l),v.forEach(e=>{var m=e.have[dn.geode];m+=d*e.robots[dn.geode],m>c&&(c=m),s!==n&&t.costs.forEach((f,p)=>{var h=f.reduce((L,j,D)=>{var B=e.have[D];if(B>=j)return L;var y=e.robots[D];if(y===0)return 1/0;var S=Math.ceil((j-B)/y);return Math.max(L,S)},0),g=s+h+1;if(!(g>n)){var w=yn(e);w.have.forEach((L,j)=>{if(w.have[j]+=(h+1)*w.robots[j],w.have[j]-=f[j],w.have[j]<0)throw"??"+j}),w.robots[p]++,r[g].push(w)}})})}return c};const O2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:E2,part1:k2,part2:I2},Symbol.toStringTag,{value:"Module"}));var K2=[3,13522,1623178306,0xf90785a221e];function n3(t,n){this.ix=n,this.num=t,this.l=null,this.r=null}var v1=t=>{var n=t.map((c,o)=>new n3(c,o));return n.forEach((c,o)=>{c.l=n[(o-1+t.length)%t.length],c.r=n[(o+1)%t.length]}),n},c3=t=>{t.l.r=t.r,t.r.l=t.l},t3=(t,n)=>{t.r=n.r,t.l=n,n.r.l=t,n.r=t},s1=(t,n)=>{var c=n.length-1;n.forEach((o,r)=>{if(o=o%c,Math.abs(o)>c/2&&(o+=o>0?-c:c),o!==0){var a=Math.abs(o),s=t[r];c3(s);var v=s;if(o>0)for(;a-- >0;)v=v.r;else for(;a-- >-1;)v=v.l;t3(s,v)}})};function r3(t=""){var n=t.trim().split(`
`).map(s=>parseInt(s)),c=v1(n);s1(c,n);for(var o=0,r=c.reduce((s,v)=>v.num===0?v:s,null),a=1;a<=3e3;a++)r=r.r,a%1e3===0&&(o+=r.num);return o}function o3(t=""){for(var n=811589153,c=t.trim().split(`
`).map(v=>n*parseInt(v)),o=v1(c),r=0;r<10;r++)s1(o,c);for(var a=0,s=o.reduce((v,d)=>d.num===0?d:v,null),r=1;r<=3e3;r++)s=s.r,r%1e3===0&&(a+=s.num);return a}const v3=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:K2,part1:r3,part2:o3},Symbol.toStringTag,{value:"Module"}));var s3=[152,81075092088442,301,3349136384441];function a1(t){var n={},c=[];return t.trim().split(`
`).map(o=>{var[,r,a]=/^(.+): (.+)$/.exec(o);if(/^\d/.test(a))n[r]=parseInt(a);else{var[s,v,d]=a.trim().split(/\s+/),l=e=>{throw e};v==="+"&&(l=(e,m)=>e+m),v==="-"&&(l=(e,m)=>e-m),v==="*"&&(l=(e,m)=>e*m),v==="/"&&(l=(e,m)=>e/m),c.push({mon:r,a:s,b:d,fn:l})}}),{known:n,todo:c}}function d1(t,n){for(;n.length>0;){var c=n.length;if(n=n.filter(o=>{var{mon:r,a,b:s,fn:v}=o;if(!(a in t)||!(s in t))return!0;t[r]=v(t[a],t[s])}),n.length===c)break}}function a3(t=""){var{known:n,todo:c}=a1(t);return d1(n,c),n.root}function d3(t=""){var{known:n,todo:c}=a1(t);c.forEach(p=>{p.mon==="root"&&(p.fn=(h,g)=>h-g)});for(var o=p=>{var h=Object.assign({},n);return h.humn=p,d1(h,c.slice()),h.root},r=1,a=o(r),s=a<0?p=>p>0:p=>p<0,v=10,d=0;d<100;d++){var l=o(v);if(s(l))break;r*=10,v*=10}for(var e=0;e<100;e++){var m=Math.floor((r+v)/2),f=o(m);if(f===0)return m;s(f)?v=m:r=m}return["??",r,v].join(", ")}const l3=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:s3,part1:a3,part2:d3},Symbol.toStringTag,{value:"Module"}));var e3=[6032,133174,5031,15410];function l1(t){var n=[],c=[];return t.trimEnd().split(`
`).map(o=>{if(o=o.trimEnd(),o!=="")if(/^\d/.test(o))for(;o.length>0;)if(/^\d/.test(o)){var[,r]=/^(\d+)/.exec(o);c.push(parseInt(r)),o=o.substring(r.length)}else c.push(o[0]),o=o.substring(1);else n.push(o.split(""))}),{board:n,path:c}}function m3(t=""){for(var{board:n,path:c}=l1(t),o=(l,e)=>n[e]&&n[e][l]||" ",r=(l,e,m,f)=>(l+=m===0?f:m===2?-f:0,e+=m===1?f:m===3?-f:0,[l,e]),a=0,s=0,v=0;o(a,s)===" ";)a++;var d=new e1(n);return c.forEach(l=>{if(typeof l!="number"){v=(v+(l==="R"?1:3))%4;return}for(var e=l,m=0;m<e;m++){var[f,p]=r(a,s,v,1),h=o(f,p);if(h==="#")break;if(h===" "){for([f,p]=r(f,p,v,-1);o(f,p)!==" ";)[f,p]=r(f,p,v,-1);if([f,p]=r(f,p,v,1),o(f,p)==="#")break}[a,s]=[f,p],d.addPos(a,s,v)}}),1e3*(s+1)+4*(a+1)+v}function f3(t=""){for(var{board:n,path:c}=l1(t),o=(Y,b)=>n[b]&&n[b][Y]||" ",r=(Y,b,z,R)=>(Y+=z===0?R:z===2?-R:0,b+=z===1?R:z===3?-R:0,[Y,b]),a=(Y,b,z,R)=>([Y,b]=r(Y,b,z,R),o(Y,b)),s=n.reduce((Y,b)=>{var z=b.join("").trim().length;return Math.min(Y,z)},1/0),v=0,d=0;o(v,d)===" ";)v++;for(var l=[],e={},m=[],f=(Y,b,z)=>{var R={x:Y,y:b,edgeDir:z,connection:null},A=[Y,b,z].join(",");e[A]=R,l.push(R)},p=(Y,b,z)=>{var R=[Y,b,z].join(",");return R in e?e[R]:null},h=(Y,b,z,R)=>{for(var A=0;A<s;A++)f(Y,b,R),[Y,b]=r(Y,b,z,1)},g=v,w=d,L=0,j=3,D=0;D<14;D++){h(g,w,L,j);var B=a(g,w,L,s);if(B===" ")[g,w]=r(g,w,L,s-1),L=(L+1)%4,j=(j+1)%4,m.push("o");else{[g,w]=r(g,w,L,s);var y=(L+3)%4,S=a(g,w,y,1);S!==" "?(L=(L+3)%4,j=(j+3)%4,[g,w]=r(g,w,L,1),m.push("i")):m.push("-")}}var x=Y=>(Y+l.length)%l.length,G=Y=>(Y+m.length)%m.length;m.forEach((Y,b)=>{if(Y==="i")for(var z=s*(b+1),R=0;R<10;R++){for(var A=R*s;A<(R+1)*s;A++){var Z=x(z+A),U=x(z-A-1),E=l[Z],X=l[U];E.connection=X,X.connection=E}var O=m[G(b+R+1)],J=m[G(b-R-1)];if(O==="o"&&J==="o")break}});var M=v,T=d,i=0,_=new e1(n);return c.forEach(Y=>{if(typeof Y!="number"){i=(i+(Y==="R"?1:3))%4;return}for(var b=Y,z=0;z<b;z++){_.addPos(M,T,i);var R=p(M,T,i);if(R){if(!R.connection)throw["PC",R.x,R.y];var A=R.connection,Z=o(A.x,A.y);if(Z==="#")break;[M,T]=[A.x,A.y],i=(A.edgeDir+2)%4}else{var U=a(M,T,i,1);if(U==="#")break;[M,T]=r(M,T,i,1)}}_.addPos(M,T,4)}),1e3*(T+1)+4*(M+1)+i}function e1(t){var n=t.map(c=>c.map(o=>o));this.addPos=(c,o,r)=>{n[o]&&(n[o][c]=">v<^@"[r])},this.log=()=>{console.log(n.reduce((c,o)=>c+o.join("")+`
`,"")),console.log("===========================")}}const p3=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:e3,part1:m3,part2:f3},Symbol.toStringTag,{value:"Module"}));var h3=[110,3877,20,982];function b3(t=""){for(var{iter:n,elfLocs:c}=m1(t),o=0;o<10;o++)n();var r=c.reduce((l,e)=>Math.min(l,e.x),1/0),a=c.reduce((l,e)=>Math.min(l,e.y),1/0),s=c.reduce((l,e)=>Math.max(l,e.x),-1/0),v=c.reduce((l,e)=>Math.max(l,e.y),-1/0),d=(s+1-r)*(v+1-a);return d-c.length}function g3(t=""){for(var{iter:n}=m1(t),c=1;c<5e3;c++){var o=n();if(o===0)return c}return"? "+c}function gn(){var t={},n=(r,a)=>r*1e3+a,c=(r,a)=>t[n(r,a)],o=(r,a,s)=>t[n(a,s)]=r;return{get:c,set:o}}function m1(t=""){var n=[];t.trimEnd().split(`
`).map((v,d)=>{v.trim().split("").forEach((l,e)=>{l==="#"&&n.push({x:e,y:d})})});var c=[{dir:[0,-1],checks:[-1,-1,0,-1,1,-1]},{dir:[0,1],checks:[-1,1,0,1,1,1]},{dir:[-1,0],checks:[-1,-1,-1,0,-1,1]},{dir:[1,0],checks:[1,-1,1,0,1,1]}],o=(v,d,l)=>{for(var e=0,m=d-1;m<d+2;m++)for(var f=l-1;f<l+2;f++)v.get(m,f)&&e++;if(e<2)return-1;var p=-1;return c.some((h,g)=>{for(var w=0;w<h.checks.length;w+=2){var L=d+h.checks[w],j=l+h.checks[w+1];if(v.get(L,j))return}return p=g,!0}),p},r=gn(),a=gn();n.forEach(({x:v,y:d})=>r.set(1,v,d));var s=()=>{var v=gn();n.forEach(({x:l,y:e})=>{var m=o(r,l,e);if(a.set(m,l,e),!(m<0)){var f=c[m].dir,[p,h]=[l+f[0],e+f[1]],g=v.get(p,h)||0;v.set(g+1,p,h)}});var d=0;return n.forEach(l=>{var{x:e,y:m}=l,f=a.get(e,m);if(!(f<0)){var p=c[f].dir,[h,g]=[e+p[0],m+p[1]],w=v.get(h,g);w>1||(r.set(0,e,m),r.set(1,h,g),l.x=h,l.y=g,d++)}}),c.push(c.shift()),d};return{iter:s,elfLocs:n}}const w3=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:h3,part1:b3,part2:g3},Symbol.toStringTag,{value:"Module"}));var L3=[18,277,54,877];function en(){var t={},n=(r,a=0,s=0)=>r+1e3*a+1e6*s,c=(r,a,s)=>t[n(r,a,s)],o=(r,a,s,v)=>t[n(a,s,v)]=r;return{get:c,set:o}}function j3(t=""){var{start:n,end:c,search:o}=f1(t);return o(0,n.x,n.y,c.x,c.y)}function Y3(t=""){var{start:n,end:c,search:o}=f1(t),r=o(0,n.x,n.y,c.x,c.y),a=o(r,c.x,c.y,n.x,n.y),s=o(a,n.x,n.y,c.x,c.y);return s}function f1(t=""){var n=t.trim().split(`
`).map(m=>m.trim()),c=n.length,o=n[0].length,r={x:n[0].indexOf("."),y:0},a={x:n[c-1].indexOf("."),y:c-1},s=en(),v=en(),d=en();n.forEach((m,f)=>{var p="<>^v";m.split("").forEach((h,g)=>{if(h!=="#"&&d.set(1,g,f),p.includes(h)){var w=[-1,1,0,0][p.indexOf(h)],L=[0,0,-1,1][p.indexOf(h)];if(w!==0)for(var j=o-2,D=0;D<j;D++){var B=g+D*w;B=1+(B-1+j)%j,s.set(1,B,f,D)}else for(var y=c-2,S=0;S<y;S++){var x=f+S*L;x=1+(x-1+y)%y,v.set(1,g,x,S)}}})});var l=(m,f)=>{if(f===m.length-1)return m.pop();var p=m[f];return m[f]=m.pop(),p},e=(m,f,p,h,g)=>{var w=en(),L=1/0,j=[],D=(i,_,Y)=>{w.set(1,i,_,Y);var b=Y+Math.abs(h-i)+Math.abs(g-_);b>L||j.push({x:i,y:_,t:Y,h:b})};D(f,p,m);for(var B=(i,_,Y)=>{if(!w.get(i,_,Y)&&!!d.get(i,_)){if(i===h&&_===g){L=Math.min(L,Y);return}s.get(i,_,Y%(o-2))||v.get(i,_,Y%(c-2))||D(i,_,Y)}},y=0;j.length>0&&!(y++>1e5);){for(var S=0,x=0;x<Math.min(j.length,50);x++)j[x].h>=j[S].h||(S=x);var{x:G,y:M,t:T}=l(j,S);B(G+1,M,T+1),B(G-1,M,T+1),B(G,M+1,T+1),B(G,M-1,T+1),B(G,M,T+1),j.length>1e3&&(j.sort((i,_)=>i.h-_.h),j.length=800)}return L};return{start:r,end:a,search:e}}const R3=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:L3,part1:j3,part2:Y3},Symbol.toStringTag,{value:"Module"}));var z3=["2=-1=0","2-0=11=-0-2-1==1=-22","\u2605","\u2605"];function q3(){return"\u2605"}function i3(t=""){var n=(r="")=>r.split("").reduce((a,s,v)=>{var d=r.length-1-v,l="=-012".indexOf(s)-2;return a+l*5**d},0),c=(r=0)=>{for(var a=r,s=0,v=Math.ceil(Math.log(r)/Math.log(5))+1,d=Array(v).fill(0);a!==0&&s++<1e3;)for(var l=v;l>=0;l--)for(var e=d[l]||0,m=-2;m<3;m++){var f=(e-m)*5**l;Math.abs(a+f)<Math.abs(a)&&(a+=f,e=d[l]=m)}return d.reverse().reduce((p,h)=>h===0&&p===""?"":p+"=-012"[h+2],"")},o=t.trim().split(`
`).map(r=>n(r)).reduce((r,a)=>r+a,0);return c(o)}const A3=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:z3,part2:q3,part1:i3},Symbol.toStringTag,{value:"Module"})),C3=`5557
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
1482`,u3=`A Y
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
A Y`,B3=`jNNBMTNzvTqhQLhQLMQL
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
cjlhShjchhjGGmNVjplcQgmTPtHPPJmQgQHgtqgZ`,D3=`8-82,3-96
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
18-32,17-33`,Z3=`    [H]         [H]         [V]    
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
move 6 from 1 to 8`,$3="cvtvbvfbvfbfqfrrtnnmqqmcqqpfplfpphchpcpcfppmwwhhscccjwjnnctcjtjgjbgjjdzjjwzwfffnhhgppjmpmgppppzbzbrzznttfqqhtqqbssrjjffgssnqnsqnsqnnmlmmztmtqmqccqscsshrsrtstrrjwrrswwpnnftfwwwzznsstbbbtzzncnbcnbccwtwctwwjgjcjtccblclgcgjgngwgbggpbbbbbgcczzfsfbbwlwwnqwnwbnwnmmbjjnfnqfqfvvgvqqvcvggpnpssptpnpjjvvpdpqpcqpcqqnhhnqncqclcfcfjcjhjdjqddhndnmmvmfmsmdsdwsdswsnsgsmsrmrjjpzzzzcppczcscsgcczqcqnnpzpbbdqqqqsqlslzljzjdjbjdjvvlhvvnbbjtbbqbdqdggzwgghhdssmttjtttmwtmtjjcpjpjptjpjmpptnntgttjpttljjwtjwwrgrvgrvrmvvrvdrdcdmmvvbpbddfbdbppdccjdjvjpjjgzjzdzfddqcqlccbvbqvqvjqjggqrqdrqrhhwggmvgmgvgrvvzwzddlzlbbdpbdbtbhthnthttjwtwffwvvrccnpcnclcgcrrgdrrgzgmzggzhhftfppnwppqhhmddzhdzzzjqjhqqcgqqmjjwppfrprlrjlrjjlhjlhjjnbnlblbzlbbfjjwfjjdcdndvvbllfmlmfmvmnnlcnncsnslsvlsvlsltslslqsqzssslqlssqrrpdpwdppsfpsprpffchhcvcpvvjpjvjmvvrjrqrzqqqlvvzzggcgrcgcmmvnmmchmmswsvwsvwswnwswdwmwzmmqfqrqtrqqwqlqlmqmsmggpzpjjlvllzplzlbzzbhhglhhwwhfwwpwgwrwlwplppfvflftltffccmcrcgrcgghgmmbrbppwvvghvhphhztzpzzwbbtpppcnpccnvcvbccvfvmffmtmbttdqdrrfnrnffsgstttbhhgmmtffhthllsbllsqsllptpwpvpdpsddsgsrrngnpggwbwwppfqfmqfmfvfzzzldltdtvdvtvtbvtgpvtnvcsdbwjrqwrfzdhwfwnmtrltdhsfzwwfpscrlsffchnfszqdddsztwzcbwdwfnljpfdsqgpnjffqfgsprggfwgvfldvzmnrpnzvfscswnzbljtvshzmcztqqwtzdstsqggqqvvlmspjjcmllcmsndwpllrvlrglphcqjgwzntwqffthrfmfgpcvjvclvdrjrpnwtrlshlnwgbbznpflsfmgvbwmnwjpnqhmdnsmwnmblqzjfzfcslhntnjhbrvvlfbffsbhrtvjltqrqszsrpmdghmhsrqlmrjdsgtsgwggdlqptqrvgmwrpcjrnmmmcdpgjzgghqmshhmddfvfrqwnwvwbvzzpmwzmvvgsqlsgvmtczwnbzrtnzjnpjjghdzsmcgvqpdhltvltbfvgsgzhvqjjnpspngqpvqwvtqrczqzwrclqbnplmvlnvcwdbzlrnwbppvdfzmblnqfpfqlngttrrcjzfjnrnmssdrrvbvhtrfzblzsjbqwbttsshmcmfhrfbfqspvcfmqbwjszmvwqnpszcfhtnqtftvtpvcjrcnlmfnvlpjzspcnmvvshpsdfhtbhgjcmjmtpmtcbwnlgtnvlwlggbnzfrrqljmjrwjtzfmgbllmmjtfhrszfrfpftmpzhzdhfwdbdnwqspjbrlglgdwtfzcrdhwgqltvthbnrqfngjgnddqlcpjflqzvbhmlzsvpvlzdvhspmchrjlzfgnlpwdnszqdqpnrchdrswfwnflslcpfmbfrplsmchbgjhhhlzjlvztpdhslrpmmcthhjwfczjtmbmsvzvsqrvzrcnflqldfnhjzlcsfhgrtqtscnbzqjglgjnqbtprrprrdtqqtlqwdqnmgbglvwtrpnpjqdsmvczbnldvmgmtpmmqbwgjbfsqbjvnjhhlrppptlrjsptpvghbgtvwvsrnggznjsbjpnwpdsqmmjjqjdwshqwzvqgpnlhdldwzmvmdnhrnhpscrbnbdtmfqwlmrlszljpjdqgjpgcdwtqzsbqsndjdslrstjwbbfnjvrjlbrphqspltjzpvsgccfrmqhfhjmlslncpgpflhjlrzqsffrtcgsvzpjmlqjznscgjrjhzfjbbchvgjgvfsrpnzdrstdtsltqldfldvfdjqdwsltcbnnvcgvnjpgdjzsbzgfvgvtmghwfmrmblscfdqlsdgcdbgsphfvvvnffcqwlrvnsrjmvvdrjdljlppsfsrmwwvmsqcgtgtfjhqbqvlsnwdwzhncgprbspjzqnbllwcjnqpfzlhscdtvlldffngwttntsbtlctdfbzjgclgbhhjtlffvtgbdsswczlgmwntrrnnbdtflplfbtqcfrhtgjnrltvzqlcvtdthldqrvjdmlntdjzcncrplgmdbqhlrrfdszrnbrllhgpzzgjnqzrjrtjjntqvdphgvjtbtqfjwvlpprrcvmpjcdmntvtqjvjrhngbtmdtflpqmlmmvjjjpdlcvntlvlgstbblwfwjrbcqjgzvjjzflfhdvgnhpnqprcvmhsrpmgfcgjpdbqpmpvlnmzdngzqcqtdsbbqbdhtgpqmqwtcctsvhwmlhpgzgpwwsqngsrwzghfhzbqcpspfhqbllbvpwgwdnghqnvjtfqtwgvnbfbpcffbwwbfqgqnftpqdtwhmrprpgdlnwrcmdndllwbvlrrjvmwlbgfwgbhtmbqhfvhlhlthbrljwnwcgsdgsbbzgnwzmjfgnfjcqhspjwctntznjptsnbpwtfzmrqwjzrmdthfwdvttrcghbjndfmtswhsmdwwwffmgsvshmlhdbwdscjnvrvqnwttlsmfbssnsscftcrpwfbbplbpmvzmttvbgpnjtqqzcfdfwqdphggwbnhfvssmdjvbvtlrcghltthqrqdbvjnbqpzjcggrbnrswhvdcrmgncsmhsmstmcbwgbfwvzqtdrpjbgljdgcncgcdslhftptnvfhgpsjqqmnsjmqhztnfzqqqhccbnqjlhqcwwbfzgpmbvjszswjlhcqshtqdmwmhpgqgzbwbtchrdwgnvfqcgcmngtddpzfgjrrssdmcnbtpbhfvfbdgzmcbjqtdqrnrdchtrcfpmtnvfczdlnjplwccfmzjwwvdsrcjznrcbczdqwshjgvhjpgdgjvtvmdzncrqgffzhcbwstvltqbrzfbnrrvlntjmzctvnqhdcgvvmmbfplzpwgsdzdtvnwnshnwbwqplbctntslczwhblsnzdcsgltvlfvbtvthvlsmzmfgzhpvrvczdhmcpmgqzbdhbcdbstrrtzgrbhhwwghzlgcdtlcjtjdcwdtqpvpwzrwmhczfsdmwjlgtmzvdbwzdnsztvqzhjpfrqzllgvrsbmhvrlzwtfmpzchftrzlmndpwqgcmhdzmjrjvpbnrcmjvzbzlqngmrzcbdwfcwmlnlqsdgbvmvqcsjtwgvtpmqdtdqfrshmlgnjqdwsrpjcfnfpjzlhslsvppmgprqlpcfztcngmqgrvqvpcszzgtbpcrghmgnvgplctgdljhwjgbzmjrdsccdtrwjrrbttzmpvmzlmqdfwdccfzqztdjmcgrcdwghgmmntdwrclshlgnsmhmltwcczncndtglnqvcvbwlvcgqtzpnqnlllchwjwrlhcdlbjlzvhvtjsttqhvhfqbsqjpfcmpsfshgrrwgprjtfnhsjqqntrjfgjjmjbqwdjlcjjdljpppgvqvgrrwvclbmncmqglhbtjcfrbjmhqgmlpzgljntqvrcggmrgtbrftvhrnjbvzstlnzrqcgncnjhdrnqcnwcrstvdsgnwzjzmqsdtwzzjmfgzpslhqclhtjnrlwwfrqgmhsttfdprhgmphzfdfqntwztltnnfqwgdnnbrlgzmtwqsvhbjjqtcgmghnbchdfgfrdtjnvlgtqdgrfwmgnmpslqmqzdgqztnppbc",_3=`$ cd /
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
197398 tprth.gjn`,U3=`200111110420341122211300354132530435302054046335421000636521353401523010501311544011230232023001001
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
202312021141114142554431112520342120400556304244541024562551661211241403030453530144444200321002011`,y3=`U 1
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
L 19`,S3=`noop
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
noop`,M3=`Monkey 0:
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
    If false: throw to monkey 0`,T3=`abcccccccccaaaaaaaaaaccccccccccccaaaaaaaaccaaccccccccccccccccccccccccccccccccccccccccccccaaaaaa
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
abccccccccccccccccccccaaaaacccaaaaaaaaaaaacccccccccaacaacccccccccccccccccccccccccccccccccaaaaaa`,x3=`[[[[8,6]],[8,[7],[6,7,6,2,4]],10,[[1,7,9],7,[7,9]]],[[4,[],[10,5],[5,4,7],5],8,9,[[5,3,3,6,9],[9,5,10],8],[[0,6,9],[8],4,6,8]]]
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
[[[],9,[[0,9,1],[6],9,[8,4,10,4,7],[6]]],[3,[2,[0,5],7,9],2],[[[9],7,[1,7],9]]]`,V3=`495,144 -> 499,144
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
500,158 -> 500,159 -> 513,159`,X3=`Sensor at x=3907621, y=2895218: closest beacon is at x=3790542, y=2949630
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
Sensor at x=2194423, y=3990859: closest beacon is at x=2275951, y=3717327`,F3=`Valve EJ has flow rate=25; tunnel leads to valve MC
Valve WC has flow rate=0; tunnels lead to valves OW, RU
Valve NP has flow rate=0; tunnels lead to valves VR, KL
Valve AA has flow rate=0; tunnels lead to valves QT, AP, EZ, AK, XV
Valve VO has flow rate=6; tunnels lead to valves KM, RF, HS, LJ, IA
Valve CB has flow rate=0; tunnels lead to valves UI, UP
Valve TE has flow rate=18; tunnel leads to valve JT
Valve CZ has flow rate=0; tunnels lead to valves UP, OW
Valve LJ has flow rate=0; tunnels lead to valves DV, VO
Valve UP has flow rate=7; tunnels lead to valves SK, CB, CZ
Valve FP has flow rate=0; tunnels lead to valves OW, RE
Valve KM has flow rate=0; tunnels lead to valves SE, VO
Valve DV has flow rate=0; tunnels lead to valves LJ, UM
Valve FL has flow rate=0; tunnels lead to valves AH, TS
Valve VR has flow rate=24; tunnels lead to valves DM, TF, NP
Valve IA has flow rate=0; tunnels lead to valves VS, VO
Valve RF has flow rate=0; tunnels lead to valves VO, JF
Valve RT has flow rate=0; tunnels lead to valves UM, SE
Valve RU has flow rate=0; tunnels lead to valves AR, WC
Valve SE has flow rate=4; tunnels lead to valves GU, KM, CX, RT
Valve MC has flow rate=0; tunnels lead to valves EJ, AR
Valve TF has flow rate=0; tunnels lead to valves AH, VR
Valve CX has flow rate=0; tunnels lead to valves SE, TO
Valve GL has flow rate=11; tunnels lead to valves UY, KL, CY
Valve GU has flow rate=0; tunnels lead to valves SE, EZ
Valve VS has flow rate=0; tunnels lead to valves XN, IA
Valve EZ has flow rate=0; tunnels lead to valves AA, GU
Valve GK has flow rate=0; tunnels lead to valves FI, HZ
Valve JT has flow rate=0; tunnels lead to valves TE, XN
Valve DM has flow rate=0; tunnels lead to valves VR, HZ
Valve AR has flow rate=16; tunnels lead to valves UI, RU, MC
Valve XN has flow rate=9; tunnels lead to valves XP, JT, VS, GT, CY
Valve CY has flow rate=0; tunnels lead to valves XN, GL
Valve QT has flow rate=0; tunnels lead to valves UM, AA
Valve KL has flow rate=0; tunnels lead to valves GL, NP
Valve SK has flow rate=0; tunnels lead to valves XV, UP
Valve OW has flow rate=12; tunnels lead to valves CZ, WC, FP
Valve AK has flow rate=0; tunnels lead to valves AA, HS
Valve XV has flow rate=0; tunnels lead to valves AA, SK
Valve GT has flow rate=0; tunnels lead to valves XN, UM
Valve FI has flow rate=0; tunnels lead to valves JF, GK
Valve UY has flow rate=0; tunnels lead to valves JF, GL
Valve UM has flow rate=5; tunnels lead to valves DV, GT, RT, QT
Valve IQ has flow rate=0; tunnels lead to valves HZ, AH
Valve JF has flow rate=10; tunnels lead to valves RF, FI, UY, RE, TS
Valve TS has flow rate=0; tunnels lead to valves JF, FL
Valve AH has flow rate=23; tunnels lead to valves IQ, FL, TF
Valve HS has flow rate=0; tunnels lead to valves AK, VO
Valve HZ has flow rate=20; tunnels lead to valves IQ, DM, GK
Valve TO has flow rate=15; tunnel leads to valve CX
Valve XP has flow rate=0; tunnels lead to valves AP, XN
Valve AP has flow rate=0; tunnels lead to valves XP, AA
Valve RE has flow rate=0; tunnels lead to valves JF, FP
Valve UI has flow rate=0; tunnels lead to valves AR, CB`,P3=">>>><<<><<<>><<>>>><>>><<<>><<<>><<<<>>>><>>><<>><<<>>>><<<<>>><<><>>><<<<>>>><>><<><<<><<<><<>><><><<<<>>><<<<><<>>>><<>>>><>><<<<>><<<>><<<<>>><<<>>>><<>>><>><>>><>><<>>>><<><><<<>>><<><><<<<>><<<>>><<<<>>>><<><<>>><<<>>><<<><<<<>>>><<<>><><<<>>><<<>>><<<<><<<>>>><<>>><>>><<<<>>>><>><<<<>><<<>>>><<>><>>>><<<>>><<>><<<>>>><>>>><><<>>>><<<>><<>><<>>>><<<>>><<>>><<<<>>><<<<>>>><<<<>>>><>><<<>>><<>><>>><>>><<>>><>>><<<>>><<<<>><<><<<><>>>><<<><>>>><<<<>>><<<<>><><<<<>>><<><<<<>>><<<<>><>><>>><<<><<<<>>>><><><<<>><<<<>><<<>><<<><<<<>>>><<<<>>><<<>>><>><<<<><<<>><<<>><>><<<<><><>>><<>>>><>>><>>><<<<>><<>><<>><<<>><<><<<<>><><<<<>><<>>>><<>>>><>>><<<>><<<<>><<<>>>><<<<>><<<<>>><<>>>><>>><<<<>>><<<<><<><<<><<<<>><<<>><<<><<<>>><<<<>><<<>>><><<>>><>>>><<<<>>>><<<>>><<>><><>>><<<><<>><>><<>>>><<<<><<>><<<<><<>>><<<<>><<<>>><<<>>>><>><<><<<><>><<<>>>><<<<>>><><<<<><<><<<>><<<<>><<<>><>>><<><<><<>>>><<>>>><<>>>><><<>>>><<<<>>><<<>>><<<>>><<<<>>><<<>><<<<><><><<<>><<<<>>>><<<<>>>><<<>>><<>>>><>>>><<<<>><<<><<<>>>><><><<><<<>>><<>>>><>>><>>><<>><>>>><<<>><><<<><<<<>>><<<<><><><>>><>><>>>><>>>><<<<>><<<>>><<<>>>><<<>><<>>>><<<><<<<>><<><<<>>>><<<<>>><><>>><>>>><<<<>><<><<<>>><<>>><<>><<><<>><>>><<<>><<<<>><>>><<><<>><<<<>><<<>><>>>><<<>>><<>><<><>>><<<<>>>><<<<>><<<>>>><><<>><<>>><><<<<>>>><<<<>><>>>><<<>>><<<>>>><<<<>><<><<<<>><><<>>><<<<>>>><<<<>>><<><<<>>><<<<>>><<<<><<<<>>>><<>>>><<>>><<>><<<<><<<>><<<>>>><<<<>>><<<<><>>>><<<<>>>><<<><<<>>>><<>>><<<<>>><<<<><<<>><<<<><>>><>>><<<<>>><>><<>>>><<<>><<><<<>>>><<<>>>><<<>>><<<<>>>><<>>><<<><<<<>>><<<>><<<<><><>><<>>>><<>><<><<>>>><<<>>>><<<<><>><>>><<>>><><<<>>>><<>><<><<<<>>>><<<>>><<<<>>>><<<>><<<<><<<<>><<><>>><>><<>>>><<<<>>>><<<>>><><<><<><>>>><<>>>><<<><>>><<<>><<<<>>><><<<><<>>>><><<>>><<<<>><<>>><<>>>><<<<>>>><<>>><><>>>><<<<>>><<<<>>><<<<>>>><<<>><>>><<<<><<<>><<<<>>><>><<>><<<<><<<><<>>><>>><<<>><<<>>><<>><<><>><<<>>>><>>><<<<>><<>>>><<<>>><<><<<>>>><<<><<<>>>><<<<>>><>>><>><<<>>>><<<<>>><<<>>>><<>><<<<>>>><>><>>><<<>>>><>>>><<>><<<><><<>>><<<>>>><>>>><>>><<><<<<>>>><<<>>>><<<>>><<<<>>><>>>><<<>>>><<<><<<>><<<<><<<><<<<><<<>>>><>><>><<<>><<<><<<><><<<>>><<>>>><<<<>>>><<>>>><>><<<>>><<><<<<><<<<>>>><<>>><<<><>>><>>><<<>>><>><<<<><<<<>>>><<>>>><>><<<<><><><<><<>>>><<>><>><>>>><<>>>><<<<>>>><>><>>><<<>>><<>><<<>>><><<<><<<>><<><<>>>><>>>><<>>>><><<<>>>><<<>>>><<<>>><<>>>><<>>>><<<>>><<<<>>>><<<<>><>>>><<>>><<<>>><<>>>><<<<>><<<>><<><>>>><<<>>><<>>>><<<<>>>><<>><<<>>><>><>><>>><><<>><<<>><<><<>>><>>>><<><>>><<<<><<<<>><>><<<<>>><<<>>>><>><<<>>><<<<>>>><<<>>>><<>><<><<<>>><><>><>><>>>><><<<>>><<>>>><<<<>><><<>>>><<<>>><<>><<<>><<<><<>><<>>><<>>><>><<>>>><<><<<<><<<<>>><<<<>>>><<>>><<>><<<><<<><<<>>><<<<>><>>><<>>><<>>>><<>>>><<>>>><<<>><><<<<><>><<><<<>><<<<>>>><<<<>>>><<<><<<>><<<>>><>><>>>><<<<>>><<<>>><>>>><<<>>>><>><<<><<><<<>>>><<<>>><>>><<<>>><<<><<>>>><<<>><<><<>><<<><<<<>>><<<>><<>>><<<<>><>>>><<>>><<><<<<>><><<>>>><<<><<>><<>><<>>><<<<>>>><<<<>>><<<><<<<>>><<<>>><>>><<>><<<<><>>><<<<>><<<<>>><<><<<<>>><<<>>><<<<>><<<<>>>><><><<>>>><>><<<><><<<<>>><><<<<>>>><><><<<>>><>><<<<><>><<<<>>>><<>>>><<<>>><>>><>>><><>>>><<>><<<>>>><<<>>>><<<>>>><<<<>>>><<<><>><<<<>>>><<><<<<><<<>>>><<><>>>><<><<<>>>><><<<><<>><<<<>><<>><>><<<>><<<>>><>>>><>>>><<><<<>><<<>>>><<<<><<<>>><>><<>>><<>>><<<>>><<>>><>><<>>><<<<><<>><<<<>><<<>><>>>><>><><<<>><<<>><>>><<<<><<<>><<>><<<<>>>><<<<>>><>>><<<>>>><<<>>>><<<>><<<>>>><<<>><<<>><<<<>>><><<>><<<<>><>><<>><<<>><<<>>><<<<>>>><<<><<<<>>>><>>><<<<>>><<>>>><<<<>>><>>>><<<>><>>>><<><<>>><>>>><<>>>><<<>><<<><<<<>>><<<>>><<<>>>><<><>>>><<<>>>><<<<>>>><>>><<<><>><<>>>><<<<>>><>>><<<<>>><<<<>><<<<>><<<>><<>>><<<>>>><><<>>><>>>><<>>><<<<><<><<>>>><<<<>><<<<>>>><<<>><<><<>><<<<>>>><>><<<<>><<<>>><>>>><<<>>>><<><<<<><<<>><<<>>><<<<>>><<<>>><<<>>>><<<>>><><<<>>><>><<<>>><<>>><><<<>>>><<<<>>>><<<><<<<>>><<><<<>>><<<<>><<<>><>>>><<<>><<><<<<>>>><>><<<<>><<<>>><<>>><<<>>><<<>>><<<<>>><<<<><>>><>><><<<<>><<<>>><<<<><<<>>><<>><>><<>>>><<>>>><>>>><<><<>><>>>><<><<<<><<<<>>><>><<>>>><<<<>>><>>><<<<><<>><<><<<>>>><<>>>><<>>>><<<<><<>><>><><<<>><<<<>>><<<><<<>><>><<<>><><>>>><><<<>>><<<<><<<<>>><<<>>>><>>><<>>><<>>>><>>>><><<<<>>>><<<>>>><<<>><<>>><<><<<>>>><<<>>><<<><><>><<<>>><<<>>>><<>><<<<>><><<<<>><<<>><<<<><<>>>><<>>><<>><<>>>><<>>><<>>><<<<>>>><>>><<>>><<<>>><>>>><<<><<<<>><<><<<<>><<<>><<<>>><<<<>><>><<>><<<>>>><<>>><<<>><<>>>><<<<>><<>>>><<<>>><<<<><<<>>>><<<>>><<<>><<><>>>><<<<><<<<>>><<<<>>>><>>><><>>>><<<>>><<<<>>>><>>>><<<>>>><<><<<<>>><<>><<<<>><<<><<><<<>><<<>>><<<>>><<>>>><<<<>>><<>>><<>><><<<<>>><<<<>>>><><<><>><<<>>>><<<><<>>><<>>>><<<>>><>>>><>><>>><<<><>><<<<>>><>>><>><>><<<<>>><<>>><>>>><<<>><<>>><<<>><<<>><<<<><<>>>><>>><>><<<<>>>><><<<><<><<>>><<><<<>>>><<>><<>>><<<>>>><<>>>><<><<>>><>>>><<>><<<>><><>><<<>>>><<>><>><<>>>><<<<>>>><<<<>>>><<<><<>><<<<>>><<<<>>><<<<>>><<<<>><<<<>>><<<>><<>>><<<<>>><<>>>><<<>><>><>>><>>>><>><<<<><><<>>>><>>><<<>>>><<<>>>><<>>><<<<>><>>><<<<>>>><><<<<><<>><>>>><>>><<>>>><><<><<<<>><<<><><<<<>><<>>>><<<<>><>><<>><<>><<><<<>>><><>>><<<>>>><<<<><>>>><><>>>><<<<>>><<>><<>><<<<>>>><<>>>><<<<>>>><><<<><<>>><<<<>>>><<>>>><>>>><<<<>><<<>><<>>><<<<>>>><<<<>>>><<<<>><<<<><>>>><>>><<<<><<<<>>>><<<><<<<><<>>><>>>><<<>>><<<<>>><<>>>><<>>><<<<><<<<>>>><>>>><<<>><<<<>><>>>><>>><<<<>>>><>>>><<>>><<<>>>><>><<<<>>><<>>><<><<<><<<<>><<<<>><<><<<<><<<>>><<>>>><<<><<<<>>><<>><<<<>>>><>><<>>><<<<>>>><<<>>>><><>>><>>><<<<><>><<>>>><>>>><<>>>><<<<><>>>><<<>>>><<<<>>>><>><<<<><<<<>><<<>><<>>><<><<>>><<>><>>>><><<<>>>><<<<><<<>><<<<><<><>>><<>>>><<><<<<>><><<<>>><<<<>>><<<<><<<<>><>>>><<><<<>>><<>><<<<>>>><>>>><>>>><>><<<<><<<>>>><<<>><<<>>>><>>>><<<<>>>><<<>>>><<><<><<>><<><<<>>><<<<>><>>><<><<<<>><<<<>>>><<<<>>><<>>>><>><<<<>><><<<<>><<>><<<<>>>><<>>>><<<<>><>>><<<>><<><>>><<>><<<><<<<>>><>>>><<>><<>>><<>><<><<>>><<<<><<>>>><<>>>><<>><>>>><<>><>><>><<<<>>>><>>>><<<>>>><<<<>>>><<><<>>><><<>>><>>><><<<>><<<<>>><<<><<<<>>>><<<>>>><><>>><<<><<<>>><<<<><<<<>>><<>><<>><><<>>><<<><<<<>><>><<><<<>>><<>>><<>>>><>><>>><<<>><>>>><<<<><<<<>>>><><>>><>><><<<>>>><<<<>><<>><><>>><<<><<><<>>>><<<>>><>>>><<<<>>>><>><<<<><>>>><>>>><<<>>><<><<>>>><<>>><<<>>><<<>>><><<<>><<<<>>>><<>>>><<<<>>><<<>>><<<<><<>><>>>><>>>><<><<<<>><<<<>>><<<<>>><>>><><<>><<<><<<><<<>><<>>>><>><>>><><<<><<><>>>><<<<><<<>>>><><<><>>><<<<>>><<<>><<<<>>><<>>>><>>><>><<>><<<<>><<><<>><>>>><<>>><<<>><><<>>>><<>>><<>><<>><<<>>><<<>>>><<<<><<<<>>><<<>><>>><<<>><<<>>><<<>>>><<<<>><<<<>>><<><<<<>>><><<>>>><<<><<<<>>><<<<>>><<<>>>><<><<<<>>>><>>><<><<<<>>><>>>><<<<>>><><<<>>><>>><<>>>><<<>>><<<<>><<<<>><<>>><<<<>><>>>><<<<>>>><<<<>>><>><<>>>><<<<>>>><<<<>><<<>>><<<>>><>>><>>>><>><><>><<><<><><<>><>>><<<><<<>><<<>><<<>>><>><<>>>><<>><<<>>>><><<<><<>><<<<><<<><<>>>><>><<><<>><<>>><<<><>>><<<>>>><<<<>><<>>>><<<>>>><><>>><><<<<><<>>><>><<<><<<>>>><><>>>><>>>><<<<>>><><<<>><<<>>><<>>><<<><<<<>><<>>>><<<>>>><<>><<><<<>>>><<>>><<<>><><<><<<<>>><><>>>><<>><><<<<>>>><>>>><<<<><<>>>><<>>>><<<<><>><<<>>>><<<<><<<<>>><<<>><<<<><<<>>><>>>><<<<>>><<<>>><<>>><<>><<<><<<>>><<<>>>><<<><<<<>>><<<>><>>>><>><<<<>>>><><<<>><<>>>><<<<>>><><>><<>><>>><<<>>><>>>><<<<><><<<<>><<>>>><<<<>>><<><<<<>>><<<>>>><<<<><>>><>><><<>><<<><>>><<<><><<>><<<>><<<<><<<>>>><><><<<<><<<>>>><>>>><<>>><<>>><<<>><<>>><<<><<>>>><><<><><>>><<<>><<<<><<<><<>><<><<<>>>><<>>>><<><>>>><<>>><<<<><<<<><<<<>><<<<>>>><<><<<><>>><<<<>>><<<>><<<<>>>><<<>>>><<<>><<><><><><<><<<<><<<>><<<>><<<>><>><<<<>><<>>><<><<>>><<<><<<<>><<<>>>><<>>>><>>><<><>><<<<>>><>><<<>>><<<><<>>>><<<<>>><<<<>>><<<<>>><>>><>>><>><<>>>><<<><<<><<<>><<<>><<<>><<<>>><>>><<>>><<<<><>>><<<<><<<>>><<<>>>><<<<>>><<>><>>><>>><>><<<<>>><<<<><><<<><<>><<<>>>><<<>>><<><>>><<>><>>><<<>>>><<<>>>><<<><>>>><<><<><<<<>>><<<<><<><<>>>><<<>><<<<>>>><<<<>>>><><<<<>><<>>><<<<>>>><<>>><<<>>><>>><>>>><<<>><><<>>><<<>>><<><<<><<<<><<<<><>><<>>><<<<>>>><<<><<><<<<>>>><<<>><<<<><<>><<<><<<>><<<>>>><<<<>>><<<>><<<<><<<>>><<<<>><<>>>><<<>><<><<<<><<<>><>>><>>><<>>>><<<<><<<><<<<>><<<<>>>><><>>><<>>>><<>>><>><<>>><<<>>>><<<>><>>><<>><<><<<>>><<<><<<>>>><<>>>><<<<>>><<>>>><<<>>>><<><>>><<>>><<>>><<<>>><><<><<<<>><<>><><<<>>>><<<>>><<<><><<<<><<<<><<>>>><>>><>>><<<>>><<>>><<<<>>>><<<><<><<<<><<<><<<<>>><>>>><>>>><<<>>><<<<>>>><<<>><<>><<>>><<>><><<>>><<<>>><<>><<<<>><<<>>><<>><<<<>><>><><>>><><<<<>>>><<>>>><<<>><><<<<>><<<<><<<>><<<<>><><<<><<>><<<>>>><>><<<>>><><<<<>><<>><<>>>><<>><<<<>><<<<>><<>><<<<><<<<>>><<<><<<<>>>><<><>><<<<><>>><<<<><<><<<<>><>><<><<<>>>><<<<>>>><<<<><<>>>><<<<><<<><<>><>><<<>>>><>><<>>><<<<><<>>><<><<<<>><<><<<>><>><<<>>>><<<<><<<<>><>><<<>><<<>>><<>>><<<<>>><<>>><<<<><<<<>><<<<>>><<<>><><<<><>><<<<><<<<>><<<<><<<>>>><<><<><>>><<<<>><<<<>>>><>>><>><<>><<>><<<<>><>>>><<<<>>>><<<>>>><<>><><<<<>>><<<<>>>><<<>>><<><>>><<<<>>>><<<<>>>><<><>>>><<<<><<<><<<<>>><<<<><<<>>>><<<<>><<<>>><<<>>>><<><<><>>>><>>>><<<<>><>><<>>><<<><><<>>><<<>><<>>><<<><<<>>><<>>><<>>>><<<><>>>><><<<>>><>><<<>><<><<<>>><>>><<<<>>>><<<>>><>>><<>><<<>>><>><<>><>>>><<<<><<<>>>><><<<<><<<<><<<<><<>>>><<>>>><<>><<<<>><<<>>><<><<<>>>><<<<>>>><<<>>>><<<><<<>>>><<>>>><<<<>><>><<>>>><>>>><<<>><<<>><>>>><<<>>><>><>>>><>><<<<>><<>>><>><<>>><<<<>><><<<>><<<<>>><>>>><<<<>>><<<><<<>><<><<>>>><>>><<<><<>><<<><<>>>><><<<<>><<<>>><<>>><>>>><>>><>>>><<<><>><<<>>>><>>><<<>>><<><<>><<<<><<><>><<<>>><<<>>><<<>>>><<<><<<<>>><<<<><<<><<<>>>><<>>><>>>><<<>><<>>>><<><<<<><<<<>><<>>><<><<>><<><>>>><>><<<<>>><<<<>>>><<<><<<<>>>><>>>><<<><<>><<>>><<<<>><<>><<>>>><>>><>>><<>><>>><<>><<<<>>><><<>>><<<<>><<<>>><<<>><><<<<>><<<<>>><<<>><<<>>><>>>><<<>>>><<>>><>><>><<<<>>>><<<>>>><<>><<<<>>><<<<>>><><>><<><>>>><<<<>><<>>><>>>><<<><<<<>>>><>>><<<<>>>><<><<<<>>><<<<>>><<<<>>>><><<>><<>><<<>><<><<<>>>><<<>>>><<>><<<<>><>><<<>>>><<<<><<<>>>><<<>>><<<<>>>><<>>>><<<><<<<>>>><><>><<>>><<<<><><<>>>><<<>>>><<<><<<<>><<<<>>><<<><<<>><<><<<>>>><<>>><>><>><<>>>><><<><<<<>>><<>>>><<<<>>><<<<><><<<><<<>>><<><<>>>><<<>>><<<>><<>>>><<<<>>>><>><<>>><<>>>><<<><<>>>><<<>>>><<<<>>>><<<<><<<<><<<><<<<>>>><<>>><<>>><<>><<><<>>><<<>>>><>><<<><<>>>><<>><<><<<>>>><>><>>>><<>>>><><>><<<<><<<<>>><<<><<>><<>>><<<<>>>><>>>><<><<<>>><<<>>>><<>>><<>><<>",G3=`19,8,6
5,10,4
4,11,15
1,13,11
3,15,10
6,12,5
16,6,5
4,5,9
10,17,6
19,14,8
13,17,15
13,10,3
17,14,15
18,9,6
15,18,10
8,8,18
13,17,5
5,4,12
9,20,12
12,5,4
16,15,12
20,6,9
18,10,15
13,2,12
3,8,13
4,11,6
12,7,2
7,2,13
14,12,18
8,15,10
15,5,15
18,13,12
16,17,15
13,6,18
15,12,4
17,13,17
3,12,6
6,20,9
3,8,11
16,4,10
18,12,14
18,5,12
15,5,16
18,15,9
15,8,4
6,8,16
17,5,9
7,7,4
11,3,7
8,14,5
6,5,16
7,15,5
5,17,11
6,5,9
20,11,9
15,13,17
17,11,16
11,10,20
4,11,10
4,8,15
6,15,6
18,8,9
4,12,18
11,14,18
11,12,19
5,16,16
19,8,13
10,18,8
6,14,17
11,7,19
15,7,18
11,9,1
14,3,10
17,15,13
7,16,15
15,14,3
18,7,14
10,7,17
9,10,3
2,15,13
11,15,3
3,13,17
20,12,9
2,10,12
7,13,18
3,13,16
16,16,14
8,15,15
18,14,6
15,6,15
4,5,12
4,14,16
17,7,15
8,12,2
15,8,19
12,18,14
8,3,12
4,7,12
17,5,8
4,12,4
14,4,4
15,19,6
14,6,4
3,7,14
11,16,18
5,15,15
18,14,8
12,17,15
6,20,10
8,19,15
7,3,15
11,11,19
2,11,13
15,16,17
13,6,16
2,12,6
17,13,14
12,19,15
2,10,11
10,3,16
15,15,5
3,10,12
4,12,5
16,8,15
8,18,8
6,16,8
5,17,12
20,10,13
16,14,15
10,20,10
4,10,10
1,9,8
16,5,14
4,12,6
16,12,16
3,10,11
8,7,17
2,9,9
7,19,10
13,6,17
13,14,3
13,18,9
6,14,18
16,6,7
8,16,15
18,6,9
15,15,17
4,13,14
9,17,17
9,2,9
5,3,9
17,12,6
4,7,17
3,5,9
14,10,19
16,17,8
6,4,9
11,13,4
16,7,12
16,13,3
6,5,15
10,13,2
3,13,5
15,13,3
15,7,17
9,18,5
6,13,4
17,18,9
9,16,18
4,8,14
9,13,3
2,8,10
9,15,3
18,13,6
8,2,15
14,4,16
12,4,8
16,12,4
19,16,10
7,12,3
6,9,4
4,14,13
17,10,17
4,11,5
2,8,13
19,11,12
18,9,14
4,4,9
8,8,17
10,2,10
2,10,9
16,11,18
10,14,5
18,5,15
17,9,7
15,13,18
10,12,3
14,12,19
6,8,5
15,1,11
12,9,19
12,19,8
5,4,14
5,10,18
6,3,9
3,11,10
2,13,14
18,10,8
18,6,14
7,9,4
4,11,16
11,17,10
6,19,9
7,11,2
13,9,3
2,9,12
8,5,3
12,3,14
11,13,19
12,9,1
7,14,17
3,5,7
18,12,11
9,6,19
18,11,5
10,13,18
5,12,15
7,9,18
6,4,7
6,18,8
9,11,20
14,4,15
19,9,12
11,3,16
16,13,13
14,5,5
7,3,10
8,5,4
9,17,4
13,17,7
5,13,6
2,15,12
12,13,3
5,10,5
17,14,12
14,18,14
4,9,5
3,4,10
16,6,4
6,14,16
19,12,9
13,17,17
19,11,6
9,5,16
5,11,17
15,16,5
13,5,15
5,4,11
17,13,5
14,14,18
4,15,7
11,18,7
10,17,3
15,4,14
13,19,7
8,13,2
10,19,11
7,14,15
2,14,12
4,7,15
4,15,8
6,4,11
12,14,2
3,13,10
15,5,14
11,4,11
10,11,3
9,17,15
12,16,4
8,19,13
9,14,16
14,4,5
9,3,7
5,12,16
13,18,15
19,14,12
9,5,3
12,7,18
6,14,3
9,5,17
3,12,11
1,10,10
11,15,18
3,8,10
11,19,15
8,4,16
4,6,9
11,15,4
17,15,15
14,7,17
17,7,7
19,10,13
8,11,18
9,11,4
14,17,6
10,4,15
5,16,6
9,5,4
18,8,14
16,7,6
16,11,6
5,5,13
3,14,14
18,8,8
18,14,5
7,17,8
16,11,16
13,16,5
6,9,17
9,13,18
4,18,9
12,17,17
17,6,13
14,13,19
11,20,13
7,5,13
14,11,3
7,18,5
6,16,5
16,4,11
15,9,16
1,7,12
13,7,17
14,3,13
16,4,13
2,10,14
11,16,17
3,8,14
11,13,18
11,10,19
7,6,14
14,19,14
13,5,4
18,10,5
12,19,12
14,5,8
17,6,14
16,7,4
13,15,4
15,11,2
4,11,4
10,5,4
3,13,12
2,11,8
8,2,11
7,5,7
15,19,9
10,9,2
13,17,4
15,4,12
15,14,7
7,9,3
7,19,11
13,4,15
3,13,7
3,8,8
17,9,16
12,16,6
18,8,12
5,7,15
15,12,18
7,11,18
13,3,15
6,5,6
10,2,9
2,13,6
10,21,12
6,9,19
12,4,18
14,1,10
9,14,2
15,8,18
18,6,11
16,3,10
13,3,6
17,14,6
19,7,8
3,13,15
17,6,15
10,19,6
15,12,3
7,9,19
15,2,11
8,16,4
12,12,19
7,15,17
9,16,15
8,15,18
16,16,15
14,18,9
11,4,12
15,8,5
6,15,18
16,5,10
15,11,4
7,18,14
8,12,18
7,18,6
15,14,4
16,9,16
6,7,14
2,12,8
12,18,13
9,17,6
7,3,16
4,12,7
1,9,10
7,7,18
2,12,14
5,14,16
8,6,18
17,11,13
6,4,10
14,9,16
14,2,10
14,20,12
19,5,11
16,6,8
14,8,19
17,14,11
7,8,18
14,14,16
13,4,14
17,6,8
8,15,4
5,7,12
8,5,7
18,9,16
12,14,3
18,11,13
11,4,5
5,9,17
7,15,18
16,10,4
14,17,16
15,18,11
18,8,6
18,14,14
4,5,15
10,6,2
18,14,15
14,3,14
11,2,9
17,4,13
18,11,14
19,13,7
19,9,7
3,14,15
2,15,9
6,4,8
8,18,6
16,13,5
6,11,2
4,11,17
3,14,11
18,7,9
10,3,15
14,19,7
4,14,10
11,17,4
13,18,11
12,3,8
6,6,5
15,14,12
17,7,6
15,7,15
11,2,16
16,8,7
5,16,13
10,10,3
2,12,5
10,6,18
13,16,4
14,15,17
3,6,10
4,12,9
18,9,8
16,4,6
15,16,7
7,16,5
15,4,13
9,15,18
10,6,17
11,4,18
20,9,7
12,11,19
16,16,17
10,4,16
13,11,16
12,4,14
1,7,10
11,3,5
4,16,14
12,15,18
3,12,9
16,7,17
18,12,8
12,11,20
10,15,3
13,7,16
18,6,8
16,17,11
7,5,15
9,4,14
10,5,5
5,8,17
15,9,18
6,18,10
6,13,16
16,6,13
13,2,9
11,13,2
2,7,9
8,19,12
9,19,13
12,19,14
14,17,15
8,9,2
13,2,14
9,19,9
8,13,3
11,6,19
10,14,19
10,16,16
15,3,14
8,5,16
5,16,11
2,11,12
15,5,4
14,3,5
8,6,3
12,4,17
19,9,13
16,13,16
10,11,1
7,5,5
6,7,7
8,6,13
7,19,13
5,11,3
13,6,3
15,8,17
20,7,10
18,7,5
5,17,13
7,4,6
17,16,12
4,15,9
19,13,11
8,7,19
2,7,10
2,8,11
6,5,5
11,2,15
6,10,18
9,2,8
6,4,15
13,5,5
12,19,13
16,5,6
15,17,8
4,7,13
12,3,15
19,14,13
16,15,13
12,6,3
19,7,9
10,18,14
15,11,3
8,17,10
13,7,2
17,11,10
11,9,19
12,13,19
13,18,13
10,14,1
18,10,14
4,8,16
19,10,6
9,18,7
11,19,6
10,1,9
11,16,4
18,11,15
3,14,8
11,7,4
9,17,14
5,13,15
4,10,15
18,6,13
4,5,6
2,12,13
17,4,8
10,7,2
15,16,6
8,16,18
15,15,14
16,5,16
7,6,5
11,3,17
17,6,6
9,10,2
16,7,13
1,12,10
14,18,11
8,17,17
10,19,14
4,6,8
3,6,9
17,6,9
11,8,3
15,10,2
9,4,13
13,11,19
14,18,12
13,13,19
13,4,13
10,18,15
4,12,17
12,15,3
9,8,2
6,4,16
10,5,19
6,15,16
5,5,9
6,10,17
14,18,10
12,14,18
2,11,10
11,16,6
12,8,2
8,6,5
3,8,7
3,12,14
19,11,14
16,8,16
12,20,9
9,12,3
10,8,3
2,11,14
7,7,16
14,18,16
5,4,7
9,14,17
12,19,11
9,18,12
8,5,5
6,18,9
13,2,8
2,12,12
10,5,17
3,9,12
16,6,15
12,2,9
14,14,19
11,18,16
17,16,13
2,7,7
7,9,1
6,7,5
16,4,12
18,15,12
8,13,18
16,16,5
9,14,18
17,3,9
11,11,1
18,12,7
3,14,12
6,12,17
12,1,11
14,4,9
13,20,12
16,8,3
7,18,10
13,11,3
2,8,14
13,18,8
1,14,10
19,15,10
16,3,11
17,17,14
13,8,18
18,12,13
10,9,18
4,5,13
9,19,10
13,18,5
8,6,19
9,14,3
5,16,7
8,14,3
15,14,6
4,10,5
12,2,10
8,19,11
20,12,10
14,15,4
19,14,9
14,7,19
12,3,9
14,10,18
10,10,18
14,7,3
10,8,4
19,11,10
14,16,16
9,7,18
8,9,20
12,3,6
10,1,10
9,9,1
13,5,19
7,15,14
10,18,5
4,10,16
9,6,3
11,4,4
5,5,10
13,5,17
8,12,3
17,4,12
10,9,19
15,7,3
2,7,13
5,17,9
7,5,18
3,16,8
17,18,10
14,6,16
15,15,6
16,5,17
17,15,6
14,1,12
9,4,6
6,11,18
9,4,4
12,8,1
4,6,6
12,17,4
13,13,3
5,15,16
10,7,19
7,6,6
4,15,5
7,12,1
14,3,15
17,13,3
19,6,11
14,17,13
5,13,4
7,18,12
4,14,7
6,10,16
18,16,14
2,12,9
11,12,2
6,6,16
15,3,8
10,5,3
2,16,11
12,4,12
8,14,4
1,8,9
19,14,7
4,13,9
11,5,15
14,6,18
5,15,12
1,12,9
5,12,17
13,9,18
5,6,8
7,11,3
2,8,9
7,4,10
8,1,11
16,12,5
11,6,5
2,13,9
10,19,10
14,19,8
8,10,2
11,2,14
9,12,17
13,4,7
3,10,14
18,14,16
5,6,14
16,9,3
11,1,8
7,15,16
15,7,4
16,5,7
13,19,10
12,13,18
2,9,13
11,9,3
17,16,14
3,14,10
6,4,13
13,19,12
3,13,14
9,13,19
17,8,6
10,2,6
5,7,5
13,12,4
7,12,5
12,3,13
14,9,4
3,7,7
5,4,9
15,2,9
5,4,13
18,15,7
10,13,19
3,14,6
8,4,17
9,5,5
16,6,6
9,14,5
18,12,10
8,13,19
3,12,10
3,15,9
18,13,9
8,4,5
19,9,6
18,13,15
2,13,10
18,13,14
3,10,13
8,2,9
5,3,8
16,15,15
17,5,12
6,14,7
12,3,5
4,15,13
10,11,19
19,13,6
12,18,15
15,17,11
18,13,8
11,2,11
11,17,13
7,5,11
16,12,2
2,8,16
12,16,18
11,13,20
5,11,18
3,10,17
16,9,17
10,10,19
2,7,14
4,15,15
14,19,10
18,15,8
10,4,14
7,18,11
11,7,3
8,19,8
5,16,8
16,3,13
8,2,10
16,15,10
13,19,6
15,16,13
8,3,11
19,15,11
7,16,4
2,11,11
10,17,7
18,14,11
18,16,10
18,16,11
6,14,6
8,18,15
13,17,16
10,14,17
20,10,12
15,8,16
13,18,12
16,16,11
9,16,6
10,4,4
14,18,5
12,11,2
11,14,19
5,14,5
15,12,17
14,6,6
9,1,9
17,5,7
17,12,8
4,5,11
17,15,8
18,13,7
17,5,6
9,1,10
16,4,14
8,3,15
18,6,10
2,12,11
2,16,10
17,14,5
9,17,7
4,6,10
10,1,8
4,8,2
14,18,15
8,18,7
10,2,11
15,15,13
5,15,14
17,15,12
7,14,16
17,4,11
15,11,16
13,5,6
7,18,8
5,10,13
2,11,9
4,10,4
4,6,11
19,8,8
8,10,3
7,10,2
9,15,16
11,1,9
8,14,17
12,5,7
16,17,7
17,17,8
5,14,15
5,4,8
17,16,10
6,16,7
10,20,12
19,8,9
17,9,4
18,11,8
5,16,9
12,16,17
16,15,8
13,4,16
8,14,18
3,17,12
18,10,13
10,2,14
17,7,16
10,6,4
16,5,11
18,8,16
15,18,15
6,17,5
18,15,11
13,3,13
7,6,4
4,9,4
12,19,10
4,6,15
5,3,11
4,13,6
12,16,3
6,8,4
15,12,16
17,7,14
15,8,12
17,13,6
11,19,11
4,16,11
15,6,6
13,2,7
16,18,10
4,8,11
13,7,18
4,6,7
7,2,11
17,10,15
4,13,5
14,9,18
10,6,3
13,14,17
14,2,8
14,18,13
20,8,8
16,12,3
7,3,11
11,15,2
16,15,6
8,4,8
10,9,1
2,14,13
8,2,8
7,6,15
19,7,10
13,16,16
4,9,16
12,2,11
15,6,8
14,19,11
15,7,19
7,18,13
5,13,17
17,10,7
10,16,18
10,7,4
9,12,4
16,10,3
16,5,5
18,13,5
6,5,13
8,3,8
13,18,10
16,15,9
7,3,12
5,15,18
6,17,16
14,5,4
17,6,10
6,11,3
3,7,11
9,12,20
12,2,8
11,16,16
8,12,19
3,15,8
5,5,7
17,16,8
14,12,2
15,5,5
19,12,8
18,9,13
4,13,17
16,14,5
15,5,9
9,3,15
16,12,17
10,17,4
4,17,11
7,2,6
8,20,13
6,17,14
16,10,5
4,15,10
2,14,11
4,16,6
19,9,10
12,15,16
19,11,11
6,10,2
5,15,5
11,2,13
10,12,17
6,8,17
12,3,10
13,5,16
3,15,5
14,19,9
15,17,15
17,15,14
9,18,15
3,11,14
14,9,2
9,17,16
6,13,3
4,11,11
19,8,11
13,2,11
7,8,16
4,14,14
9,18,9
7,6,3
14,3,9
4,10,6
6,17,6
8,16,17
7,2,14
16,3,9
2,15,10
17,8,11
1,10,11
11,7,1
9,11,17
12,3,12
11,8,18
10,2,7
2,9,8
2,13,7
6,7,18
10,13,3
9,18,13
3,16,12
16,6,9
9,16,16
4,11,8
11,14,16
11,1,12
17,3,11
8,2,6
7,14,18
6,18,12
8,8,3
3,6,14
2,9,11
14,9,17
8,2,7
14,3,7
15,14,17
7,18,7
19,7,13
14,8,18
7,4,11
14,10,2
3,7,10
3,4,8
17,7,13
5,12,13
16,6,3
6,2,10
15,12,19
18,15,14
15,17,7
15,10,16
14,17,4
10,7,18
15,3,12
17,10,11
12,18,9
10,16,4
13,15,17
11,16,19
3,6,12
10,5,16
15,6,4
13,8,3
3,11,5
15,6,16
9,9,20
11,5,12
16,16,9
5,15,11
3,9,15
7,17,16
11,9,17
18,8,13
18,7,7
12,19,9
4,8,6
17,13,16
13,7,3
6,4,5
17,13,18
13,9,2
11,18,6
18,8,10
6,11,19
3,10,15
17,14,7
3,12,8
11,8,2
6,15,4
1,8,12
11,17,16
17,3,12
5,16,12
15,17,16
14,13,2
6,3,11
17,13,15
1,12,11
3,8,15
12,2,12
12,18,5
14,8,2
11,8,5
3,7,12
2,11,6
2,11,15
17,6,7
15,14,11
6,3,15
16,14,16
2,8,8
17,8,12
12,4,5
15,6,5
8,17,7
10,4,5
4,8,4
14,12,4
4,5,8
19,10,10
14,5,17
7,5,17
16,5,13
10,19,12
4,10,13
7,13,17
4,7,8
12,4,15
16,16,7
7,12,4
4,8,7
9,19,12
3,15,11
13,16,15
9,3,6
5,14,11
8,17,13
17,12,5
15,16,14
18,12,17
8,7,16
16,16,6
8,10,18
12,8,19
15,15,16
17,13,13
17,9,18
12,18,7
12,14,16
7,17,11
6,12,4
19,15,14
16,18,9
10,17,16
3,6,11
18,10,12
12,6,4
10,5,6
15,17,4
17,6,11
17,10,13
14,17,5
9,12,2
12,18,4
14,15,6
16,4,7
5,7,7
5,11,2
5,19,12
12,10,19
15,5,7
10,4,17
12,2,13
11,2,6
18,7,11
12,7,4
13,10,19
3,12,4
14,15,5
3,10,7
5,15,17
5,8,4
19,8,14
10,19,15
12,4,16
18,12,9
8,7,3
14,14,4
3,7,8
7,15,4
9,11,3
18,12,6
19,12,10
4,16,8
17,8,15
12,18,6
9,6,2
7,4,16
6,12,19
17,7,5
7,3,9
15,14,5
6,8,3
7,4,7
3,8,9
18,8,15
16,13,9
16,16,8
8,1,9
10,3,7
12,6,17
9,19,7
9,16,3
5,7,6
6,5,8
3,9,14
14,5,7
7,3,8
16,19,14
6,3,13
18,16,9
6,18,13
17,12,15
12,10,2
16,10,14
3,15,14
10,14,18
15,9,3
10,19,9
9,17,5
13,11,18
12,9,18
16,4,9
9,20,10
16,12,6
9,9,2
7,9,20
8,18,11
12,1,12
6,17,13
3,10,8
15,3,9
15,10,3
7,14,4
3,7,6
3,17,9
3,6,8
7,17,6
7,13,3
8,12,17
7,17,7
11,19,8
12,17,14
7,8,17
18,5,8
17,14,16
5,6,5
5,16,14
14,13,17
17,9,17
13,17,14
19,8,7
13,15,6
11,4,17
15,18,12
6,6,15
12,13,2
10,17,5
19,7,14
17,9,6
14,19,12
8,6,2
5,13,16
14,17,14
15,13,5
14,13,18
5,12,5
11,14,3
17,5,11
18,8,7
12,15,4
16,15,5
17,8,7
1,13,10
9,14,4
4,9,11
13,5,8
6,16,6
13,15,5
10,8,19
19,13,8
2,14,6
11,4,6
4,15,6
6,4,12
17,17,10
17,10,16
18,12,12
14,7,20
4,12,16
15,9,5
5,4,6
7,14,3
9,3,10
9,3,9
12,5,18
11,13,3
2,11,7
19,15,9
3,12,12
12,8,20
5,7,17
8,1,12
18,7,8
7,9,16
8,17,5
19,13,13
7,17,14
17,13,7
16,5,12
13,4,9
4,13,16
3,6,7
6,15,5
2,6,12
7,17,10
6,18,7
15,9,2
17,10,8
16,18,12
12,4,6
17,7,4
8,4,9
6,4,14
11,2,12
19,6,14
3,16,11
11,18,5
8,9,18
7,5,4
4,8,17
6,4,6
8,2,12
16,9,18
6,15,7
8,16,5
9,19,14
17,4,10
19,12,14
6,5,4
6,7,3
4,7,9
9,16,17
7,4,8
6,7,6
11,2,7
7,8,3
17,10,10
14,16,15
4,5,16
19,13,12
6,3,6
6,16,16
14,11,4
16,3,15
5,10,17
14,3,12
18,10,7
15,10,19
11,19,12
2,13,8
6,7,17
17,15,7
6,17,11
17,11,4
17,16,7
21,12,10
10,3,10
12,3,4
19,14,10
9,11,16
11,5,4
9,7,2
10,3,6
7,4,15
5,11,5
10,20,13
15,17,14
8,9,17
8,10,19
13,4,6
11,15,17
7,17,5
18,17,10
4,8,18
5,9,3
13,3,12
6,5,7
3,6,6
18,9,9
18,7,12
12,11,17
13,12,3
18,16,8
13,4,11
6,8,14
8,8,4
10,19,13
2,10,13
19,10,12
11,6,18
19,6,7
9,18,6
10,16,17
8,17,3
6,6,4
4,9,13
2,8,6
4,14,9
16,2,11
17,6,17
3,9,7
11,17,9
2,12,10
12,6,2
12,18,11
16,13,15
19,16,12
9,3,14
9,7,3
17,5,10
6,10,19
15,16,12
6,11,1
15,17,13
2,7,12
18,14,7
10,15,2
6,9,3
12,5,15
19,13,9
5,9,4
17,13,4
15,9,6
19,11,8
6,10,4
5,13,8
12,11,3
8,17,14
10,17,15
5,4,10
9,4,16
13,3,7
16,9,4
15,17,6
7,12,18
3,7,13
20,11,7
12,4,4
9,4,17
5,6,9
5,5,6
5,16,17
5,2,11
16,11,14
3,13,6
6,3,14
14,15,18
4,5,10
7,3,7
11,5,16
3,10,16
15,19,13
16,6,14
11,1,11
19,10,11
20,12,13
8,7,2
11,17,5
5,3,12
13,7,19
18,14,13
17,17,11
18,5,9
3,13,9
16,3,8
16,19,10
3,8,6
14,15,12
2,12,15
17,15,11
4,14,6
4,6,14
7,6,17
15,7,5
17,12,4
11,7,18
16,14,17
13,12,17
7,4,5
13,4,10
10,14,3
11,6,3
8,11,20
17,10,4
11,17,7
5,16,10
9,7,17
12,7,19
19,8,12
8,20,8
14,17,8
12,1,8
13,12,2
17,17,12
15,13,4
8,11,3
8,19,7
14,13,16
15,5,12
4,8,12
16,4,8
18,11,16
16,9,5
9,16,2
13,10,4
5,6,6
8,9,19
15,18,8
3,9,6
6,9,18
16,7,7
13,1,11
15,18,7
12,12,18
9,7,4
18,6,6
10,18,12
5,15,6
5,10,2
2,7,11
6,18,14
19,15,8
7,16,17
7,5,6
3,14,7
6,18,6
18,5,11
16,6,12
7,14,2
3,13,11
15,13,2
15,4,8
17,7,12
3,9,8
16,11,2
13,3,16
10,15,4
1,10,12
11,17,8
10,11,2
18,10,6
20,9,12
10,14,16
12,14,4
18,14,12
13,13,1
14,2,7
16,16,13
6,9,5
10,17,12
9,10,19
9,12,19
11,5,18
5,18,8
9,9,18
13,3,5
8,17,16
14,6,3
11,1,10
15,19,8
10,4,3
12,20,10
6,3,8
15,10,18
11,12,3
11,5,6
15,4,4
7,10,18
14,6,7
14,19,15
6,15,9
5,9,6
2,9,7
10,1,7
6,12,16
9,18,14
12,6,5
19,11,5
18,4,12
20,11,11
16,5,8
17,8,5
9,2,12
14,16,14
4,7,4
4,14,5
11,18,18
7,17,17
6,6,6
7,2,9
18,16,12
15,19,12
4,10,3
6,14,9
11,0,12
13,4,5
5,6,16
10,12,19
17,10,14
8,15,3
5,3,10
11,9,4
17,8,13
2,15,11
18,16,13
15,18,13
15,2,8
17,14,13
11,19,9
10,2,15
5,18,13
9,11,19
6,16,17
16,7,3
13,6,4
7,4,4
15,17,12
14,6,17
5,11,4
17,14,14
9,8,18
7,18,9
10,18,16
17,10,6
6,13,14
18,13,13
14,10,4
16,17,12
18,4,9
10,12,18
13,14,16
5,3,13
4,17,13
5,15,4
15,12,5
15,10,6
4,7,14
2,9,10
3,7,9
14,9,15
13,18,4
6,6,12
15,18,6
18,9,10
11,11,20
17,7,8
5,17,7
8,3,5
3,9,16
16,14,13
6,7,2
11,18,14
6,17,15
17,6,5
9,10,18
16,18,15
12,17,7
15,10,5
17,18,11
7,17,15
14,10,3
7,12,2
15,16,11
3,5,8
11,14,4
17,11,9
13,8,2
11,18,9
18,15,10
10,3,13
13,18,6
7,6,18
5,7,4
17,8,9
4,9,18
9,8,20
13,9,19
5,6,17
11,20,11
17,17,13
15,5,17
5,5,14
1,12,13
7,10,4
9,3,11
4,9,7
5,3,14
8,6,6
17,7,10
19,12,13
4,9,9
2,13,11
11,4,7
5,11,16
4,4,8
14,9,3
15,5,6
9,4,7
13,11,20
18,7,10
3,12,15
15,4,9
17,8,16
14,7,4
2,6,11
2,13,13
20,10,14
3,11,12
3,9,11
6,12,18
20,11,10
1,11,10
6,15,11
11,4,3
14,14,17
11,19,7
3,12,7
2,10,10
9,2,14
6,7,4
17,6,12
19,9,9
11,20,7
8,5,8
8,1,10
2,12,7
7,13,4
13,5,7
15,9,14
15,19,10
5,14,17
10,9,20
15,18,14
4,8,3
10,11,4
20,10,11
8,5,13
3,14,9
17,15,16
11,5,5
2,10,7
9,19,6
1,11,11
16,15,11
18,7,13
7,16,3
14,17,9
5,8,16
9,11,1
10,11,20
5,5,8
7,20,14
13,2,13
14,4,14
3,10,4
9,1,13
13,9,4
11,18,15
16,17,10
12,10,1
6,3,5
3,9,13
11,2,10
6,5,17
17,16,6
13,14,19
13,14,15
8,18,16
17,5,15
10,11,18
18,10,9
12,9,3
15,4,15
4,11,3
8,16,7
5,7,14
14,18,8
18,5,10
8,14,19
10,5,18
4,13,12
10,17,17
14,2,11
3,9,5
5,8,15
16,7,5
8,4,7
6,6,17
14,16,4
18,12,15
9,18,10
19,10,7
15,4,7
7,4,17
10,2,12
19,11,15
9,10,20
19,7,11
9,15,17
11,19,14
10,19,7
10,18,6
6,12,6
2,16,12
16,7,9
18,7,15
14,16,7
6,17,7
15,3,15
18,12,16
7,2,12
7,7,3
5,12,19
13,1,14
9,19,11
9,6,4
4,11,7
16,14,3
14,6,14
8,18,12
20,11,13
16,8,4
6,6,14
17,7,11
13,14,18
10,3,17
15,19,14
12,18,3
12,5,19
13,16,3
18,6,12
18,10,17
15,3,11
9,3,13
10,15,19
7,13,6
19,11,13
12,18,8
5,10,3
9,17,10
16,13,4
11,20,6
16,9,15
15,14,15
14,11,2
12,7,17
13,11,2
17,10,18
7,3,13
13,8,6
9,11,2
19,11,16
6,3,10
13,15,13
7,16,6
12,16,19
16,8,5
20,12,14
9,19,16
4,4,12
16,8,17
9,7,19
16,18,14
5,13,18
5,2,10
17,11,5
17,9,3
6,15,17
7,10,19
8,18,13
13,17,8
8,6,17
13,5,3
4,6,13
13,12,1
15,16,15
17,12,14
11,4,16
14,3,11
5,5,16
6,17,9
8,7,5
10,18,13
12,17,9
8,20,12
8,7,4
7,11,1
12,17,16
2,8,7
14,17,10
4,17,9
13,19,13
16,16,16
5,8,18
10,19,8
17,9,15
14,16,18
9,3,8
16,6,16
7,10,17
5,14,12
6,16,12
11,17,15
12,14,19
4,4,11
12,7,3
9,7,16
15,19,15
13,11,17
16,7,14
16,11,4
13,18,14
3,11,13
7,16,18
3,15,7
14,4,7
8,18,14
15,8,3
10,10,20
5,18,11
19,6,10
13,14,1
18,9,15
12,12,4
6,11,4
16,8,8
14,6,5
16,7,15
12,12,17
1,11,12
8,15,5
3,10,10
7,19,12
15,19,11
20,11,12
17,11,17
18,10,16
14,8,4
10,12,2
15,17,9
11,18,13
16,15,14
16,18,7
14,16,5
6,14,5
5,12,6
6,18,11
17,15,10
12,3,7
6,15,3
13,13,2
12,5,6
16,18,8
20,10,10
4,7,5
9,3,5
16,11,17
7,19,7
4,15,14
3,9,9
7,4,13
20,7,8
3,8,5
10,16,5
9,2,5
14,10,6
11,3,8
18,14,10
3,11,7
3,10,6
9,15,2
17,9,5
12,15,17
11,14,2
13,7,14
16,3,12
8,18,10
12,5,16
11,4,13
4,16,9
4,17,10
11,18,8
10,4,9
5,14,4
3,13,13
17,16,5
4,14,4
7,20,9
6,10,3
18,13,16
7,5,16
8,3,10
7,6,13
10,14,2
4,6,12
17,8,14
10,7,15
12,12,2
7,8,1
15,11,6
13,4,17
9,6,16
3,12,13
5,19,14
9,17,13
12,5,3
15,3,6
9,8,1
4,5,14
16,18,13
12,15,19
10,10,2
9,5,19
11,11,2
5,5,12
14,13,3
13,6,19
14,20,8
5,9,2
4,15,16
13,18,7
13,12,20
16,12,18
13,16,14
6,10,6
6,19,10
8,5,15
5,7,10
7,13,2
12,4,9
13,16,17
9,11,18
7,9,17
17,14,8
17,13,8
15,16,4
2,9,14
9,2,11
6,16,15
3,16,9
11,4,15
5,13,5
5,6,13
15,15,7
6,15,12
10,8,1
20,10,9
10,10,21
14,5,16
9,12,1
5,14,18
4,14,11
13,11,4
4,15,11
8,11,19
14,3,8
17,12,17
15,6,17
4,7,6
16,5,9
1,10,9
3,7,15
19,10,15
8,2,14
16,9,6
5,10,15
12,8,4
19,10,14
13,10,1
13,7,4
5,14,13
7,11,17
13,5,18
9,16,13
19,8,10
4,18,11
12,20,12
9,2,16
16,16,12
18,11,6
8,9,3
9,6,18
11,15,5
12,9,2
9,19,8
13,16,7
10,12,1
7,16,16
7,4,9
3,12,16
13,8,19
9,8,3
14,12,3
11,3,14
15,6,12
15,4,5
10,3,5
14,14,3
10,20,7
16,7,16
6,13,19
10,8,2
14,2,13
4,8,5
8,13,17
13,13,4
16,12,7
7,15,3
19,11,9
5,17,14
8,15,19
11,16,15
5,5,15
18,8,5
15,17,5
13,6,6
10,17,14
8,4,13
11,10,18
16,10,6
5,9,16
6,15,15
10,4,6
3,13,8
3,15,12
7,10,3
18,13,10
5,9,5
8,4,14
12,4,11
12,17,13
19,9,8
15,10,4
13,10,2
7,16,12
18,5,14
13,19,9
9,18,11
20,14,11
13,7,5
20,12,12
15,9,4
10,3,11
12,1,13
8,3,16
11,12,18
17,5,5
6,3,12
10,18,10
9,1,12
19,7,7
9,18,16
2,10,15
8,17,15
6,16,13
18,11,9
7,6,9
15,4,6
5,7,3
3,14,13
10,16,7
6,12,3
11,7,2
12,6,18
3,10,9
8,6,4
11,6,17
7,19,6
8,4,15
19,13,10
9,16,19
17,16,11
20,9,9
16,6,10
14,4,6
5,12,3
7,13,19
2,14,9
7,16,8
19,14,6
18,14,9
8,14,2
18,11,10
11,18,10
5,7,16
2,15,8
17,3,10
3,6,13
12,17,18
8,8,1
7,6,16
16,12,15
13,5,13
5,9,18
2,9,15
8,16,16
8,4,6
5,8,8
7,3,14
12,12,3
17,5,16
4,8,8
17,8,17
4,14,18
5,16,15
8,3,9
13,5,11
19,15,13
4,16,7
9,14,19
9,20,11
6,2,12
17,11,15
6,17,8
14,4,13
15,2,10
13,8,1
4,10,9
15,16,8
3,11,8
18,15,13
5,18,12
15,5,13
5,10,7
2,13,12
4,15,12
12,17,8
1,10,7
12,2,14
14,7,5
17,4,14
10,3,12
19,12,7
15,9,17
11,6,4
13,2,15
13,9,16
13,6,14
5,12,4
6,14,4
15,5,8
10,20,11
9,9,3
14,6,15
4,3,10
2,14,10
7,17,4
9,13,2
4,6,5
18,12,5
10,1,13
4,10,17
5,5,17
15,3,10
11,19,13
15,15,11
10,18,11
8,8,19
5,10,16
10,14,20
5,15,13
6,2,9
7,2,10
5,17,5
3,11,15
10,16,19
6,18,5
9,2,7
16,8,13
12,8,18
17,15,9
14,19,13
9,15,12
4,4,10
5,4,5
8,1,14
9,9,19
4,16,16
9,4,3
10,5,15
12,3,11
15,16,9
4,4,13
12,17,10
19,6,8
15,2,12
12,10,20
11,13,17
11,20,8
9,4,11
12,18,12
17,11,7
11,17,6
6,9,16
8,15,6
14,17,12
1,9,11
14,8,17
11,3,18
4,8,10
7,4,14
4,12,15
9,1,11
4,16,12
14,7,16
13,3,11
7,8,19
3,15,15
14,8,3
2,7,8
8,3,7
2,12,16
11,6,2
4,16,13
4,16,10
6,19,14
5,13,14
4,14,12
7,16,7
4,13,13
9,4,5
6,12,15
16,13,17
16,14,14
13,17,12
14,16,17
12,13,4
16,15,7
10,2,16
10,4,18
15,15,3
20,12,8
15,11,18
10,21,10
4,10,19
7,11,4
7,17,13
10,1,12
11,17,17
14,4,12
14,11,18
6,13,17
5,18,6
15,20,10
6,6,11
14,11,19
4,7,16
15,16,10
14,15,15
6,5,10
19,5,8
5,7,9
9,6,17
7,5,14
16,15,4
15,5,3
19,10,9
4,7,10
12,14,5
6,8,18
11,3,10
15,7,6
17,9,8
20,13,10
13,1,8
3,11,6
5,14,7
9,5,15
12,5,17
8,1,13
9,16,8
14,2,12
7,15,15
11,4,14
5,3,7
11,18,12
14,16,13
17,11,3
4,4,6
7,11,5
2,14,8
8,2,16
19,6,12
7,5,3
11,5,2
9,13,1
11,21,11
11,16,3
6,8,2
13,10,17
10,12,5
4,12,8
12,6,7
5,15,7
11,3,6
10,1,11
18,4,10
14,18,7
12,3,17
16,15,17
3,11,11
15,4,10
17,4,15
9,20,9
4,13,8
20,9,8
19,10,8
20,9,15
14,15,14
4,9,8
13,14,2
14,14,2
14,11,16
10,15,17
1,13,12
8,10,20
15,8,2
9,7,20
3,5,11
15,11,17
17,4,9
11,17,11
6,7,8
3,11,4
13,15,18
19,7,12
8,18,9
9,5,18
17,11,6
5,14,6
8,16,3
7,5,8
8,13,4
16,7,18
17,14,9
17,15,17
5,5,4
17,8,10
11,5,8
10,19,16
12,13,20
15,15,4
12,11,1
3,11,16
9,8,17
14,3,16
6,12,2
6,5,14
18,10,3
5,17,10
13,15,3
11,5,3
15,7,7
20,14,10
19,14,14
13,3,14
8,15,17
6,18,15
19,11,7
9,19,15
15,18,9
6,8,8
7,15,2
18,17,7
4,13,10
12,8,17
19,13,14
2,6,10
19,12,11
13,3,4
17,14,10
10,18,9
6,1,11
12,5,14
15,14,16
11,8,1
10,7,3
9,3,12
5,6,10
17,14,4
11,3,11
12,1,10
13,9,17
18,17,14
1,8,13
14,16,3
6,19,8
8,19,10
13,10,18
13,17,13
3,7,5
8,7,18
12,16,16
6,17,17
4,11,18
8,6,16
3,11,9
11,16,5
12,11,18
19,7,15
7,6,7
6,4,4
6,2,13
20,13,11
12,11,0
14,17,3
13,17,6
18,4,11
20,8,10
14,20,10
13,3,9
4,13,4
19,12,12
12,19,5
3,5,10
3,15,13
11,3,15
3,11,17
16,15,16
13,5,10
6,8,15
11,4,10
2,14,7
7,9,2
20,10,8
8,2,13
2,14,14
10,2,13
13,15,16
14,7,18
5,7,11
10,7,20
7,16,10
7,7,17
10,18,7
9,4,15
10,13,1
1,7,11
12,17,5
18,9,11
12,5,5
11,1,13
4,10,14
15,12,2
11,6,16
15,2,13
14,11,1
8,8,20
16,4,15
6,11,20
16,14,4
9,10,1
17,9,13
20,12,11
11,8,20
5,18,10
5,17,6
10,16,3
12,8,3
11,9,2
17,13,9
6,19,12
14,2,9
5,2,12
6,11,17
4,13,11
8,14,16
11,16,14
12,2,7
9,20,8
12,16,5
6,6,18
18,10,10
12,12,1
14,5,6
14,11,20
13,14,4
7,19,8
15,11,5
6,16,9
16,14,7
8,3,13
10,18,17
18,13,11
10,6,5
15,14,14
19,15,12
0,11,12
7,2,8
10,13,20
12,19,6
13,19,15
9,8,19
3,12,5
8,4,3
11,2,8
12,17,6
18,17,8
16,17,13
18,7,6
13,14,6
3,9,4
5,10,9
17,5,14
8,17,6
13,5,2
6,17,10
12,18,10
6,13,15
2,6,14
15,10,17
15,9,20
10,15,18
7,13,20
1,14,11
9,2,13
19,9,14
12,13,1
13,15,1
5,9,14
19,12,15
12,15,5
11,20,10
16,8,6
9,6,6
1,8,11
18,11,7
8,3,14
14,14,15
14,18,6
14,1,11
10,6,19
10,20,8
17,17,15
7,10,16
19,13,15
1,9,13
13,3,10
7,15,6
4,7,7
13,2,10
6,19,11
13,17,10
9,16,4
11,11,18
18,11,12
0,9,12
6,13,6
15,16,16
8,15,2
9,2,10
4,14,15
3,9,10
4,9,6
15,17,10
17,8,4
16,9,19
11,3,4
16,17,14
14,17,11
21,11,11
7,8,2
1,10,8
2,10,8
11,9,20
14,15,3
5,11,19
8,13,5
8,3,6
10,4,13
11,8,19
20,12,7
2,8,15
12,9,20
15,17,17
6,19,6
11,10,2
14,17,7
8,17,12
18,11,17
12,10,18
8,4,10
8,5,17
9,18,4
13,20,13
3,5,12
1,12,12
18,5,7
5,6,15
5,5,11
8,14,14
11,11,3
16,11,3
11,19,4
17,11,14
18,15,5
4,10,8
19,9,11
2,5,11
6,10,5
11,5,17
4,10,7
4,6,16
2,6,8
14,6,2
11,15,16
17,12,9
5,2,7
12,7,6
11,14,17
4,9,14
15,3,13
8,16,14
13,16,18
17,7,9
10,15,5
7,11,19
10,16,15
5,4,15
5,18,9
10,5,7
14,7,2
6,9,20
13,8,20
8,1,8
10,6,15
5,13,3
10,0,12
10,3,18
8,19,14
18,11,11
9,14,1
5,10,14
10,10,0
6,5,12
8,11,5
18,5,13
16,8,18
16,10,17
11,20,9
4,13,15
9,6,15
14,20,13
2,9,6
14,15,16
7,2,7
5,17,8
4,4,7
20,9,11
4,9,15
5,13,13
12,19,7
9,3,16
6,12,14
16,17,5
8,5,14
16,10,19
15,5,11
15,8,15
7,8,5
14,6,9
5,8,3
15,6,18
8,3,4
4,9,17
10,18,4
20,13,13
2,15,14
16,17,6
16,6,11
6,6,7
14,3,6
18,15,6
17,10,12
10,20,14
5,15,8
9,17,3
17,11,8
5,11,6
10,14,6
7,13,5
14,20,11
11,20,12
5,16,5
12,1,9
12,15,2`,J3=`Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 11 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 2: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 12 clay. Each geode robot costs 4 ore and 19 obsidian.
Blueprint 3: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 10 clay. Each geode robot costs 3 ore and 14 obsidian.
Blueprint 4: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 15 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 5: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 10 clay. Each geode robot costs 2 ore and 14 obsidian.
Blueprint 6: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 17 clay. Each geode robot costs 3 ore and 19 obsidian.
Blueprint 7: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 13 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 8: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 3 ore and 13 obsidian.
Blueprint 9: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 13 clay. Each geode robot costs 3 ore and 12 obsidian.
Blueprint 10: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 10 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 11: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 14 obsidian.
Blueprint 12: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 20 clay. Each geode robot costs 2 ore and 19 obsidian.
Blueprint 13: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 4 ore and 20 obsidian.
Blueprint 14: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 15 clay. Each geode robot costs 3 ore and 16 obsidian.
Blueprint 15: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 2 ore and 11 obsidian.
Blueprint 16: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 4 ore and 8 obsidian.
Blueprint 17: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 11 clay. Each geode robot costs 3 ore and 8 obsidian.
Blueprint 18: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 7 clay. Each geode robot costs 4 ore and 20 obsidian.
Blueprint 19: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 3 ore and 8 obsidian.
Blueprint 20: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 16 clay. Each geode robot costs 2 ore and 9 obsidian.
Blueprint 21: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 3 ore and 7 obsidian.
Blueprint 22: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 13 clay. Each geode robot costs 2 ore and 20 obsidian.
Blueprint 23: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 6 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 24: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 10 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 25: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 2 ore and 8 obsidian.
Blueprint 26: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 11 clay. Each geode robot costs 2 ore and 8 obsidian.
Blueprint 27: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 4 ore and 14 obsidian.
Blueprint 28: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 19 clay. Each geode robot costs 3 ore and 13 obsidian.
Blueprint 29: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 3 ore and 14 obsidian.
Blueprint 30: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 15 clay. Each geode robot costs 2 ore and 13 obsidian.`,H3=`-3883
-1293
1605
9076
653
-3831
1661
-2344
-469
2706
-511
-6909
7039
7403
-7542
1928
8732
-1987
-5274
5199
914
-9733
-7242
9359
-5527
1689
4014
-3884
-3778
-2474
3778
4428
-2968
-5076
6816
-1660
-5668
2108
2568
-7621
6784
-1554
-4669
-8236
1552
-2953
6029
-2425
-2299
2395
4523
3233
1892
3428
5353
9264
-8739
3234
2598
-556
2790
6840
2926
-8570
2509
6782
4780
803
8509
-2601
8058
-5302
-9715
5848
3139
3153
-9727
-3530
-6346
-4649
1089
3761
7346
-5517
-2798
6764
-7881
9870
-6611
4705
-5778
-6832
2537
-778
-7788
3624
-4239
956
7807
-5736
4523
9171
3970
-5215
-1132
2430
8391
-9831
-535
8100
803
7422
1951
3658
2598
-7619
-3652
1193
7666
-738
-8918
-9917
-8676
4977
-9623
97
-5358
902
-8758
8194
-9615
2094
-3810
6420
-3322
8891
-9871
3369
8270
910
-1518
-7317
-9501
4330
-5062
1347
9085
8489
5578
3078
3352
-6689
-4381
4983
-2986
7892
672
-8775
3303
2589
9444
2343
-7589
-1473
-7651
-91
4437
-9044
-4262
6448
3499
5966
7608
-3839
-8765
-440
4196
8265
950
-6814
-8768
5348
-2335
-6856
2347
5910
-7392
-6179
-4994
938
-8328
-5205
3643
1934
5843
311
8422
6150
-3733
-3750
7295
8801
-7818
-9752
5183
-2854
-2921
-2039
-5387
-5232
-3740
-2766
8079
-5225
7315
-7484
-787
9645
627
7289
-4490
-3881
-5076
6166
5439
8709
8714
-5682
-4156
-5653
-5590
-6629
-1428
-6263
-8317
-6470
3677
-3454
-7789
-7873
9444
8156
50
4587
-2068
6221
-969
-4803
-5266
1576
-307
-3807
-8934
-6623
4335
-7091
7814
8398
4121
153
5578
-3195
4298
7755
4159
5758
8509
2505
-6084
1811
-7198
5794
-9551
-6577
5839
9587
3128
-175
-1714
-8028
5596
-8669
7851
-1659
9628
7340
-5032
-6176
-3788
777
6983
6905
-787
9882
-3953
-2069
1830
7225
-1151
4049
-4750
-3361
445
-9667
-7234
7467
2919
8959
-6492
2281
-2480
-9886
-8575
-2991
9645
-9044
4046
3596
1163
-809
-1834
-6328
3150
-1722
-163
-7834
6764
-4391
2271
-9796
6810
5189
8735
-6065
-9164
6870
448
2934
-3689
-7326
7894
-8556
8295
5502
6983
9417
9213
-9618
-8765
-6940
3121
8419
-8818
8543
9966
-637
2752
4059
6254
9779
7056
-698
-5205
8047
2281
-5921
4239
-2354
-4625
7832
9348
4713
1340
7559
-5507
416
9415
-8522
-4272
-2134
-4301
-5677
2014
672
687
309
-1802
2610
-6470
-8401
-1072
-6078
-1086
-5263
-7166
5728
7159
1853
6101
-4582
-2954
3217
-5359
-9332
4236
-183
-5188
-121
1497
-5652
-7897
-4228
818
-5381
-9242
-4170
-2779
-389
6615
-9551
-1944
-497
-5652
9659
-5740
1697
-1889
3795
-5201
510
2594
5603
356
7339
-2929
6236
-8270
-9893
2905
-1202
2243
-4386
7677
3596
7875
8462
2513
9815
-4360
-4206
-3260
2862
-2246
-4845
-6736
-296
-5336
-5520
-5139
-1762
1901
-8908
-928
9336
-7005
821
218
-3591
71
-5809
-2120
-6859
-4184
-1784
-4902
-7135
7321
-7729
8154
6732
5098
-3083
-5714
2243
-6367
1255
-6052
331
4463
-1271
1235
-5714
-8816
4908
5869
-8120
-602
9764
-5730
2666
-5580
8834
6393
-6834
-285
478
9337
-6729
-6460
-4625
-4381
-3404
680
7485
4059
381
-2982
-1004
9417
-4166
-8271
5782
8841
863
-2607
215
9693
48
4088
6816
4169
6577
6920
-1557
6393
9566
8832
-3089
8732
6769
3216
-6328
-9760
1663
-1717
6580
1403
-8598
-606
4485
-2315
8714
-7203
-3743
-5274
-5354
-4979
-7900
9978
-6610
-3635
3557
-6577
-9225
-4451
-2849
-378
7942
7614
-7284
7710
-7748
-8017
4236
-5140
-986
-2866
-6550
-5943
2424
5792
3951
8783
-3682
5746
2554
-4314
-9826
-9698
5797
5222
-9526
8068
2586
-1190
538
-5602
-9887
-2815
2790
5348
7611
6897
2761
5238
8273
702
3945
-8647
-7578
-6195
9632
-6400
-6846
7309
5672
-7898
5993
-8994
6274
-2953
-9133
5189
-4093
-1945
-3553
-1042
-588
80
-4135
-8377
-8128
577
-7250
-4569
-718
2463
3788
214
1497
-2275
4238
-5178
2417
-4151
7825
-6504
5297
-9473
-3518
6451
5582
3488
1125
-1757
-9779
-952
-6113
-9190
-5599
-6874
-6221
-6881
-3352
3830
-3898
-2854
-7808
-4381
-753
4504
8345
4945
-2503
5356
543
5603
-5430
-6784
-5232
-1758
-6408
8882
-2875
-5968
7118
-8731
9653
-3831
3192
-6934
9754
-2470
-4162
7554
-2690
8000
1524
-4908
-7093
8445
9297
-3518
4935
-9733
-1110
-3617
-173
9010
3421
-2106
-642
-9566
7355
1949
47
6010
-8182
4843
-1220
-6714
9225
1303
5021
9353
-9554
528
-2278
175
-7229
-6956
-6248
-6017
5961
3855
-4245
-6812
-9010
2240
-2555
4711
7907
7793
5913
7779
-7429
-873
6806
1762
-8852
-369
-4371
-6066
-7865
-8916
6062
1221
2253
2804
-3831
-7533
2695
-9432
-389
-2480
-3041
-6041
-3631
8377
6162
-8375
-679
-7162
2328
-5941
-2439
5518
-6127
-5605
7699
-5274
-8266
-7894
-5520
-2814
-4045
4409
-8804
-154
4248
-3772
9706
-3882
-3715
-7276
-6207
8753
9226
-9628
-7720
3034
2508
8882
9376
1296
2344
5846
-6819
4543
-5287
3378
-1792
9441
-6397
-1199
3067
5144
-5814
1773
6344
805
5271
5214
-8492
9004
-8118
-5940
8807
1667
-8329
2093
4452
6492
3855
-3309
-874
-1702
3968
6756
6255
7846
-6255
-7235
6628
9802
-1907
3066
-1474
1499
9639
-3224
7283
474
8255
-6978
-2169
-998
-6768
2244
-805
5281
153
2706
262
-5708
-8487
161
-3124
-2052
6645
-7333
-4138
545
-2624
5356
-857
-6083
-1838
3652
-1314
-640
6970
1136
653
7210
4622
-7977
-9621
-632
-2692
-531
6094
7710
6608
-6949
7999
2267
1580
-8934
-8687
-1967
-4560
-8118
-408
2933
6515
-1728
-6327
-4157
5681
7090
7583
-2191
-267
-4671
5846
-4520
-3215
-852
-1591
-2183
2144
-1541
-1243
-9706
7334
-2757
8801
24
2704
4249
1535
7322
4887
-7396
2689
246
-7082
-5926
5322
692
-843
6451
3046
-317
6598
3328
4658
-4043
9425
9312
7887
-8236
-9509
-505
3351
7985
2025
2407
3525
-2746
-1996
7147
1611
-924
-3304
-4866
-7696
-5590
5371
-1099
6635
9655
9439
-621
-9816
-2838
7346
4387
-7207
-390
-4780
3591
-5765
-1162
-3428
-7286
-2218
-4780
-7759
9424
6870
6209
-4239
-2779
9769
-7364
-3954
1751
2089
3688
-5631
2782
2793
-398
-3322
-5387
5949
9610
-6778
-1878
6804
-9340
3603
3491
7129
-6832
6674
4114
5483
-643
-9682
7181
-7865
-6665
-1010
6658
7084
9004
-8797
7108
6208
5449
9779
-8669
-8337
-6912
-3715
4073
-5019
3454
480
-422
-3267
-5670
4732
-5206
9213
4073
-5243
1967
-5085
5745
-3976
-1951
9172
536
-7687
-4638
852
-1992
7303
2448
4694
-6215
-6504
-9729
7954
-5415
878
846
-6747
-9812
8037
-263
1445
5960
-4563
-4137
8364
3308
867
9938
-6799
-2480
5531
-1886
-2706
-4475
8218
7649
9125
9875
-3379
-7910
756
5711
2621
7330
9799
6877
8430
-7950
-8058
-118
-4563
-9180
533
7017
-3839
7882
-5808
4424
780
-9760
8560
4121
4339
5563
1870
-4381
8272
-5215
5130
-8328
3189
6930
8207
-4083
6889
2473
-1210
-2797
5864
-7547
8201
9406
-9660
-5696
-4924
7862
7585
-8795
-8449
-6222
5365
1516
1438
-9387
-2397
-375
1597
-4437
9632
-5206
-5546
-9489
3624
-2120
-8778
-3443
8083
-9618
-3037
3339
-8574
4141
-3138
-843
-1951
1836
-9316
8387
-1699
-2625
6127
-3529
6449
4608
4448
7339
159
5625
6892
-1402
-8617
4744
-3053
3439
-3405
1806
8863
-7160
7599
5128
2689
3421
-8439
9616
7200
-5778
-9088
-5774
1627
-8669
-2599
-4509
-3707
-4548
-3207
-6563
2729
-4424
4188
-7952
-1853
117
-5528
-2087
-5553
-3417
5916
9737
3286
3407
1924
-3008
3054
-7210
7947
-769
199
-1562
-345
-7553
-7650
-4093
-3621
-8294
-4262
-2094
8685
-3260
-392
3267
-7229
-6466
-1612
-9682
2514
9570
-3639
5966
-4825
-2899
2849
-1558
336
-4868
-6865
5176
218
-571
1095
4065
-4844
5725
3110
-1687
5387
9725
4619
-6610
-9133
2754
-8770
-2583
1441
7702
-5034
-7900
-4615
-4846
-3766
4842
6062
7694
3197
-4511
7470
-5652
-173
5432
8778
2644
301
4363
-3086
8888
-5590
-5177
-6359
-8346
7115
-9758
-2743
3383
438
8799
-1687
7244
-9886
-6934
-5177
-5358
-4515
-6658
375
-3352
-1390
8237
-5387
5087
-2902
-9080
-5073
772
3106
-3141
3198
4437
-3550
-4780
7649
-6420
-6624
-3246
-2336
3906
3465
-8654
5212
-7761
-6888
-6063
7273
-3515
2278
912
-5574
2440
-9447
2714
5659
-4145
8555
8656
-6032
900
6372
1625
-8686
-8074
-3661
-8128
-6039
-7215
-2114
-7889
-6951
6539
5848
-3730
-2583
3151
4956
-8575
9578
1892
-4630
1175
-5710
3518
973
71
2723
-8437
-468
5132
-1845
-8477
375
-3015
-4716
427
-5974
4636
-7448
-5015
-9393
4365
3436
3703
7158
3369
932
5652
1375
-6863
772
2282
-2827
2490
9752
1853
705
7169
476
5685
-4737
5673
5953
-6119
5016
5422
1111
-5213
3881
-7300
1286
7292
-6100
4160
-4203
-6911
-2711
8894
-9817
4583
-676
8623
-648
-8271
6672
2884
4761
-9098
6033
6140
9147
5507
-3786
-5519
-9362
-8243
-3877
-8618
4267
811
91
6538
3994
7960
765
5979
938
-5243
2175
-9635
-5102
-3315
-1906
-1317
-2577
-5986
-5374
6943
8198
8709
6094
8498
1382
638
6317
-8575
4516
-8441
-3717
6472
5153
9496
6460
-8147
-6279
9036
8615
-5046
7143
-2467
347
7625
-1653
3941
9113
-6635
6022
8771
-3378
5639
4396
4931
-1322
4653
-8337
5692
-6472
8846
8223
-4934
4476
-2690
8550
6255
-3096
-824
8227
5561
2410
-2583
3120
5944
5515
1272
-8522
8078
-7190
9529
8609
-4391
8764
975
-4770
-3030
4821
-1064
-781
-506
1023
-8687
-7049
3133
-2728
1129
422
6775
-1497
-3530
-4625
-5955
5404
9212
-4991
3533
-4391
687
-1746
6397
8658
-8080
5163
7309
-6126
2579
-3097
-7227
-9150
8064
5636
2322
2313
-5588
2749
8222
3307
6083
-3324
-6785
-805
7469
2228
-5621
-7539
-4208
6938
-9982
-665
-2126
3384
8373
-9830
6406
6274
-2290
-3810
-3120
950
8492
-320
8338
-9808
4211
6529
4437
40
-1568
7860
4885
4653
1704
439
-5004
-4214
3058
-9321
3553
5996
-8116
-2592
9588
-2825
6594
5328
8065
-6546
-7858
-535
-6835
8686
907
-7406
-9229
-8262
-700
-3224
6602
-7915
-9892
-7543
-7909
-9108
-9549
7874
-6035
9234
-2514
1819
9690
4351
-7239
-5992
547
4530
8479
-2134
5978
-127
9085
-4745
-7493
-1757
-8940
-6119
4189
-2788
-4973
5028
-5939
2578
4001
9172
6303
2891
-2669
-4324
-19
9376
1893
-4606
-1007
8919
-5656
5979
5229
6910
-2473
3197
9885
6663
961
6705
-1987
636
-5274
-8674
7677
-7779
4119
-8342
-9623
1135
4796
-6278
-4249
2129
-7051
-4017
-3454
8836
4784
4363
-3033
3734
-4421
3570
-3532
4297
5094
-6661
-4870
-5893
-5595
9829
-6399
2736
-483
-5937
5661
2094
-5689
6437
-3980
2272
4232
4202
-2437
-5858
-171
2627
-2801
7801
5561
-6634
9690
5978
2391
3785
8891
2243
-9776
5353
-5664
6217
-1762
6764
-3447
-4436
-807
-5158
-4991
4442
2156
8584
7842
-2467
-183
-493
1185
9784
-317
2619
1394
8969
6519
8144
-8879
5554
-8150
-5168
-91
-7174
3754
1443
-9040
9510
7540
-6470
-89
2607
4079
-6165
6883
-4212
3300
-2039
1033
-1433
5862
9421
-7630
8103
-7222
8768
5753
7371
-6178
-8556
2105
-3097
-2403
9027
-8813
-9279
6315
1175
-3398
-503
9875
-8665
-9476
-506
438
9349
-4549
9408
-9024
-5376
-8293
6610
4149
352
1542
7701
-3941
-3988
-7075
8987
2170
-6327
-3374
-6645
-8896
-2375
-588
-2205
-1411
-5723
8143
-8559
-7898
-9058
7289
-1992
-4582
-2243
2083
7346
-3244
-1980
4293
2068
2006
-5819
-9032
2649
-9308
-3843
2675
4129
-7910
218
-6280
3512
-6856
-6069
-3234
8647
-2090
9409
4890
-7227
9276
-1618
-263
1527
-2452
5502
-3558
-3144
-7300
-3608
-7533
1202
-267
8273
-9199
2339
-896
5902
-4729
-8282
3959
-2899
-7668
1534
3121
2916
-3256
3153
9312
1989
-3263
5079
-3254
-4464
-1850
-1813
-4914
7550
3066
-1785
8857
5322
3582
-5113
2660
97
-6425
-5673
-398
1099
-7368
-4329
6401
4915
-6176
9895
5216
-8760
-3296
2391
4478
674
7550
-6062
336
-8288
4670
-5595
5941
6079
-7858
-3117
2340
-5098
8839
-2305
3576
-8792
-9818
3821
-5926
6340
-2353
-9221
-8642
7814
4087
-8343
8809
8094
-7961
-5335
1236
-4724
-9808
8220
2094
-3263
1672
-9952
-9143
6066
3133
5963
990
-8940
-7910
-9133
-2867
8577
-1906
7985
9751
5035
7331
2213
6367
-9447
-6154
-7893
-6689
582
2278
-7373
9408
9287
5796
-4075
1736
2330
-6289
-4135
8037
-2354
-6292
-3224
-5561
-8089
9745
-3223
6397
-5289
-4723
6083
-125
9305
-5974
5711
6518
-7647
-4548
8355
5901
581
5358
-8144
-5319
-3690
3788
-5048
-6635
-2072
2612
3535
-2599
-4771
4020
-5415
820
3644
-3918
336
-7910
5479
7232
-4280
4654
3192
7183
5813
-6141
-7542
9952
-9457
7846
9798
7905
-446
-6853
-5943
8878
-8619
-4564
8776
-9906
-1357
1391
8718
7666
-3037
9972
-5580
4134
-1771
-5690
2872
-1021
220
-5696
7823
-2628
-1295
-5765
-8794
6617
-3033
2319
276
4894
7803
5436
-2746
9191
2609
8430
1185
-796
349
2159
7198
3308
-1965
-407
-2275
9491
-2729
4280
5334
-8669
-3928
-2326
3285
-2804
-9232
-280
311
7794
-8947
3640
-2094
9795
242
3166
-3008
-3398
7796
-1427
188
8839
9109
-1195
-3084
-7842
-5596
4139
-8144
-4626
-440
3491
8911
-7763
8462
8079
-8956
-397
9901
-8006
2962
-6263
2528
7680
6889
-8266
4097
5500
232
-7763
-9521
-874
6078
-5327
-5893
6517
8877
-3100
8332
4873
-5900
3378
-4008
-6221
-8762
2063
-3585
-1206
-8978
-5699
5686
2083
-6431
-7495
9212
-7219
2226
-5939
6148
-3888
-1780
-3840
2031
9570
4169
2026
-2596
5796
-6183
3175
2116
1934
7245
-5283
-6577
2988
-3183
6806
-612
4653
-6845
1095
7472
-7678
-5575
-6720
5596
-9974
-5076
-7005
-9067
4513
7223
7770
-3288
5104
7364
3044
7485
-1677
1924
3081
883
-4543
296
-5955
-9906
3447
-7213
6388
4634
7287
-8654
8844
-9317
-3012
-6304
-3267
9608
-8670
3952
2150
2669
6520
-8618
-148
9973
-7979
4210
3060
2548
4980
7127
6064
-7390
-3160
-978
-1188
-5146
-5360
-2610
-2560
-6439
2270
7282
-6192
3633
9436
-8624
-6735
3076
-3933
7070
9219
3959
6793
5014
3139
-3309
5381
7089
-1039
9716
-7691
4634
-7722
-3309
-3198
5177
-5877
7369
-8022
8715
3757
8378
-8377
-3260
1547
6964
9637
7608
5238
-8288
475
1085
7360
181
6367
-8286
2460
3319
3912
-2875
372
-5026
4225
-4751
7609
4726
-3920
7618
8157
-4088
3203
7245
-2270
4313
-1612
-1709
7614
-5755
4054
5088
-1328
-9257
-6359
-8918
9649
5857
-2607
-5768
-392
9014
-9360
-9313
-4288
-2672
2339
5905
852
6773
6235
4742
8858
-8930
-6371
-3324
9172
3540
8508
2021
2677
-6679
4339
-9165
-422
-1484
5142
9704
8497
-1182
1337
1964
-6272
-968
-1225
-2514
-9562
7063
-5873
6078
-389
-8556
-1551
7771
-3461
7159
-9501
-1950
-3705
8257
7677
506
-3223
-1560
5997
3050
-7842
-2624
-7388
5578
-8804
9736
6217
-3637
-1818
-2491
7814
9130
-5912
994
-9976
-7126
7999
-1333
3145
-9473
-6872
-469
5176
-7070
-8606
8782
5791
-5034
5242
-3599
7408
8355
-6418
4552
1426
2547
6611
2514
-4352
9930
-320
9154
-896
-6978
-9067
1047
-8732
372
7299
3951
-7900
-4861
4034
8096
8944
-5167
8592
-8089
-8906
-7545
9028
5199
-6934
611
-6408
9287
-773
-3740
7807
-3533
-2322
-7924
-2794
-1608
-1517
-5501
-496
692
-3120
2920
-1784
-4482
-8829
-4424
-4136
-3931
-9298
-108
-1475
8380
-8388
-1262
-3291
7559
-9001
-9085
-8731
-9229
7778
7056
5080
7677
-7865
5009
2004
-2573
-743
-5380
-8978
-4384
-7458
-7482
-559
1910
-3528
-4015
3746
7777
-9676
8799
-1274
3238
-7392
-3988
-4374
-2094
8219
536
7054
1310
-3898
-5595
-7834
6796
6029
6013
-1944
-7651
-6254
-509
8659
7936
-7213
5154
-7913
-9314
-1306
4417
4339
1616
5195
-2299
5430
-3035
4482
5681
-7724
-1216
8535
2355
6109
3462
-3973
739
4779
-6447
-998
6233
-2336
4927
1982
7339
4357
4437
9546
3412
-7067
242
5593
5189
-7407
-8429
-8958
242
6794
3326
388
-302
1606
-2855
4906
-7884
2528
-2374
103
7896
-4825
-5048
-7006
9960
-787
-2177
-4479
1433
-9507
419
8901
-2328
-6195
7259
7184
-2471
-4662
8373
-5289
-9658
9168
5680
-7499
-7720
87
-708
-9280
7322
8058
-1416
8332
-7365
-9332
-256
5328
3573
-5663
5297
8445
1917
6515
-1077
772
-1784
-928
-1463
-6772
8479
2068
5939
6483
-7449
-3779
-7487
-3765
975
9836
7681
821
6798
7666
-8365
8456
8248
5858
-3239
-485
-1131
-588
-1858
-5749
2228
4681
-4908
-4865
7755
3166
-3770
8809
6754
-8322
6761
-1151
-8022
-4317
-2284
-798
-5961
-6302
2774
-5501
6720
-4145
-2067
-8793
272
6243
7143
9455
-4592
2439
5791
-4043
8052
-4083
4653
8923
6377
672
4982
-2328
-1184
-5622
-9778
-5063
2430
-6185
-6570
-699
-9892
-588
5708
570
-7449
9955
-8422
-5084
283
7084
2108
445
-1208
-9730
7599
-4490
2621
-8978
-8669
-7305
-2094
2430
4204
-2056
6978
-2515
7778
-5655
5841
3712
4165
2395
3478
8995
-6685
7687
8331
-3676
-3835
-6104
8941
-247
-493
6793
-8797
-2754
8327
-991
-1595
-5558
-4511
-7093
-8574
-1509
3939
-6327
-9577
-1249
1143
1875
6386
-3873
900
-2706
8154
-6728
7027
7315
504
-8949
-8775
7297
2644
-4007
-407
-2672
-857
6346
8111
5796
-2843
-9265
-1838
-2019
4166
-4212
-1626
4671
4251
698
-4693
1535
-2408
-5243
-6645
-9075
6768
8136
6948
7138
-5501
8387
5446
2219
-6546
6348
7350
6248
8967
8835
5487
2103
-4900
-1790
390
-5974
-1545
9838
8419
8172
2011
4142
5951
8038
-6817
4515
4550
5122
-108
-5590
-7173
4044
-5609
6884
6186
-4391
-9360
-2449
-4036
-6585
-5020
7043
-4569
-3565
6566
8867
-125
772
-2583
-5977
9109
-5940
5094
2899
5960
-9489
6474
-5245
-8022
-4563
3488
-4478
-6745
4622
301
-7065
7972
-2538
6401
6023
9305
2962
6777
-6340
5908
5648
-3978
6263
401
5012
5362
6401
3912
8503
-3116
-9225
-2471
6630
6470
7090
-4322
9732
2182
-4381
9004
3757
-7469
3067
-5289
6436
-5911
-8765
772
-118
-3983
-3927
-1560
2793
-9353
-4426
9028
-4910
-6472
4857
5168
3300
-5415
6066
6943
8636
4850
-9212
-4203
9624
-3609
-8777
178
-5531
5238
-626
-1240
-91
-5793
-8554
-8647
8207
3239
1373
9338
-2328
128
-6179
7159
-9606
5144
2682
7905
66
-924
-6316
1934
-4050
-7506
-9088
2780
-7626
6360
3757
-9010
-7858
-6234
7540
-469
-2469
-556
5587
2212
1945
-588
-5796
-4043
2555
4965
7244
6045
-4973
6905
-5736
-8859
-3819
1610
-9871
-8518
-3075
6062
5976
9615
-50
-8233
-6856
3311
1817
1337
-3975
-215
-6364
-2799
8776
7120
-3991
9769
-4002
8150
764
3001
513
-2100
-5747
3795
7494
-8369
1846
3222
-8925
7354
-4528
-4240
7391
-2356
7264
5673
6617
6610
-3765
-3021
1538
-9745
5821
5401
2043
9445
9347
-998
4220
9767
-2814
7836
-9468
7330
8896
-7079
-9384
7677
-974
-8441
805
-9017
4357
7391
-8002
8379
-967
7482
1991
8799
-6065
-1762
-2316
2716
-6091
-5008
-3012
9073
8345
-9779
1892
-8933
6259
3970
-8570
9598
2555
1025
8142
-7279
-4563
-6835
-4667
7304
-6543
-8885
964
-7743
-8355
-8642
9301
4226
-4064
-6748
4667
6663
-7603
4839
-6647
4584
9561
-9518
8668
7141
9766
-4314
8065
8867
-5285
-1541
50
4268
-3605
6976
8503
-4407
-9472
-8463
5755
9831
1827
-2651
1851
-8867
-1780
950
-5919
2182
1255
-4174
5852
9929
-2693
882
-9760
-8978
-3657
1575
4617
5578
8157
-3089
-4045
5791
-2875
9976
4670
-2070
-5599
8275
7900
-5046
3470
2500
162
3080
-969
2982
7658
932
5242
-973
-4381
-1186
-4739
-6458
-3417
5606
2779
-7367
-1417
1725
406
-4136
6679
5951
-5527
1806
-2690
8336
-4146
-7790
-4298
8173
7371
5328
6840
7714
4523
2246
-2894
2330
-2669
-875
-8371
2436
2083
2388
-4987
-7744
2384
-9598
3633
8809
-3888
4344
8515
-6257
-1458
-912
4037
821
3457
-5627
9598
5926
487
5855
6544
-3349
-7732
9270
-9826
-5337
2920
-3636
-3086
-8088
-9614
-1321
6256
-9282
-3541
9510
8020
-6472
-693
-6735
-1178
-2885
7411
-1086
3457
-1702
-9040
4068
-3515
7350
9113
7152
5331
-1431
289
9804
7882
9119
6406
-1246
-1968
9690
-8355
3363
-2503
-3288
1762
7299
9161
4552
-4137
7159
4691
1346
-9947
3352
1701
-9967
-4485
-4027
4037
-8894
8953
-5399
-2037
-7863
6131
-1813
5698
5019
-3792
-6348
240
-7401
839
-6487
-888
9826
-5109
3216
-8246
9598
72
5223
-4527
529
-696
-7963
5
-3480
-4563
-4900
4500
7918
-3763
-6674
9679
1171
5857
-7169
1255
994
-5074
7283
1141
6521
-5914
9031
-3933
8308
1286
372
-8689
5021
7920
-3162
1689
-1529
-3565
6084
-2854
8239
-1208
3367
-6538
3080
4332
-8246
-401
-9379
-7499
3331
6431
8145
3092
-7729
1885
-3635
-767
8258
-2878
-6934
466
569
-5765
8281
-904
-8943
9447
-3790
-922
-9926
-6645
-9045
-1474
2020
-1740
-6846
-3244
-8134
5192
8917
1843
-1762
5839
-9468
6979
6308
949
-8145
-1826
6690
-2563
4515
8504
6645
9016
3828
-4318
4553
-7646
5606
-4262
-8916
7729
4725
-2690
7558
9490
-1388
-5590
4670
-9893
7348
727
-493
2598
42
-5665
4339
-5677
6044
6084
7494
2093
6733
-7284
353
8698
2007
-7614
-7448
-6972
-261
-4450
7039
-7863
28
2228
3672
4365
2439
-5510
6420
8489
382
-2177
-2165
5275
6993
8047
2054
-9397
-3473
7924
8497
4540
-3676
-8212
-3574
-9232
-8204
-268
3535
7349
-5396
5516
9690
-3415
6690
-814
5939
-1209
-374
-5939
-770
3363
1546
2025
-5653
7874
-2315
-6255
2236
-6610
-8113
-7054
2735
-6949
5737
5151
9353
-2378
-3779
-3973
-8958
-4866
-9851
-4549
4458
6938
-7109
7739
3580
-5069
3047
-9888
9735
-7686
-4689
-7162
1314
-8043
-5564
3190
-2336
1030
221
3104
8529
-2920
43
-9514
3800
5447
7567
-4560
2213
-1416
3643
5794
1438
9165
6229
-2108
7282
8574
8570
-2181
-8441
-9758
4673
336
-1906
-7408
9815
3855
-4415
7626
533
-8536
-617
8227
3233
8473
-2693
-1310
5452
9431
-531
-8323
-4770
-3647
-8270
-6920
-4007
2598
3761
-1540
-6154
3426
3351
3941
-8994
2133
9823
-2847
6226
-267
4807
-219
5329
1949
218
-7107
4206
-2322
9036
6277
3440
2236
7256
931
-4644
4417
2390
-3296
8965
-3867
-8898
-2921
4879
7384
8835
8809
-9954
-729
-3263
-1276
-9812
-1789
4500
1331
3210
217
-2480
-4243
5977
3671
6754
7259
1605
-3263
-8639
9027
2599
8413
6346
-4879
-6769
8560
1292
-4865
-4621
7059
5805
-3976
-7482
-9829
-3465
-5734
5737
-8377
1099
-9967
-4395
-3162
-1127
-4813
-6516
-9651
-1327
-7109
6437
6518
-5174
-5649
-4674
6465
6404
-8520
-5462
1753
9273
-5770
3226
67
-7229
-8803
-4145
-7722
8884
-6459
358
3825
735
-8266
3964
2619
-7070
753
4139
7828
-5851
-4051
3434
8505
-5076
-5233
5199
-6932
9138
8839
-6718
6949
-3474
9708
-1353
-4813
-1814
8058
9875
-6926
-6314
7059
-6769
1627
-2429
-5531
7757
5447
-8638
2218
7646
-5007
-5881
-3150
-2235
-7881
798
-874
-6248
-4988
749
8824
-7273
6675
-9578
-261
8222
9473
-3304
4225
-4595
3476
-1906
-5048
8911
-9285
4807
8237
1943
8891
-2100
-3698
-1363
-7061
4686
-6604
-2539
1804
-3515
-5210
9774
-1951
4771
7618
-7624
4857
-1056
-924
1987
-9697
2238
627
2173
-4968
2224
-2089
759
-3837
-6408
8929
1286
7761
5397
2277
2908
9085
-1505
-8654
9798
9047
-2310
-9005
4965
-6949
5697
-8748
-9240
-1595
132
-8305
1480
6033
-9851
-446
4890
8428
-3115
9471
1209
8219
4648
-4280
-59
7408
4945
1563
6372
3210
4463
2660
7464
3225
-4358
9573
6467
-4455
-1663
1555
-5839
7922
8394
-1946
-893
-5622
-6074
-4813
6309
-4162
1442
7512
-7229
4185
-6331
9947
-2819
-2610
-231
6522
1798
-1133
7576
-6369
-559
-8859
4833
6186
2531
4528
5240
-4877
4580
4310
-325
6397
-8760
3464
-4578
2213
8799
-6062
5531
-5501
-9607
4857
-3609
5015
-4206
-5777
5322
6451
-4111
4085
3757
-1187
-9183
8608
-5943
4145
-4735
7842
-9342
4335
-511
-4606
-3858
-2284
-6813
1207
8225
2660
-9851
7261
2514
6798
7236
-5465
2481
-897
-4135
-3272
-8522
-9808
9852
9870
-9768
-225
-3779
-2806
-1897
3073
-654
9058
-5201
298
-7391
-3838
-968
8154
2738
-9301
-6732
-216
3352
-3349
-9188
465
1240
-5435
-8599
-5903
9534
-1414
5393
9396
-573
-2107
-7568
3748
6352
-4846
-805
5587
2440
-3243
649
-3663
8627
1319
2094
3582
9922
-8867
1272
4282
4049
6109
8105
4396
-2151
-3295
-612
2156
-3352
3239
3716
-6729
5071
7860
-8575
6465
-2077
2910
-2708
2180
2599
-4424
7694
-5633
7639
-5634
4509
-3041
-1696
682
5036
-873
4404
5659
-6359
-6893
663
-6177
5395
6948
-1250
6977
5908
309
-2972
-5201
3215
745
5009
5858
-9796
-5267
7694
-2552
-7207
-6803
5388
-4329
-7889
-45
-4016
2411
-6989
-5166
334
9079
4705
3870
-5075
438
9522
-1853
-4527
3068
6465
9612
-129
1257
2102
3530
-6352
-4401
-5075
4232
-3291
-8999
-3629
7371
6793
-5007
8056
8692
6010
-3263
-4152
-469
7377
798
3646
-4145
-1659
-9353
-6817
-8633
3208
-3840
-3099
-2896
-2951
-5494
7819
9259
7308
-6630
-8717
4482
-2601
-6323
4844
2492
9455
1659
-2094
4020
9681
-2520
-9733
2591
-2177
-493
-1895
7612
-4877
-1452
3761
-7489
-6714
4556
6648
9212
4757
-5949
-2555
7246
663
-9265
9421
2884
-6412
-3547
-8918
8662
-8983
-3033
1351
4455
-3167
3121
5606
-4425
6675
24
-5749
-961
-6811
-1144
-8256
-4829
-6
1849
7570
-1389
4811
3737
-6679
-4348
-729
1269
-2785
9997
7208
-5738
4629
840
-1676
-4548
1191
-8243
-4967
1058
-5673
-3083
-5936
8553
8328
7188
1633
6512
7282
-5231
-9871
-9133
-3459
8356
-8859
-8328
-1668
-6432
-5369
-5981
-531
3573
-3224
3106
-6321
9443
3384
-3462
-5665
7476
9140
6384
7623
3964
-7410
2925
-7293
-5350
6225
9852
7642
-3843
2104
-375
-9284
4671
2328
-7820
4908
2407
1567
5781
-1727
-5392
-6729
-6215
-729
124
-8201
-4571
-263
5949
5945
-9918
-5911
-3667
-968
-4694
6341
-6808
-1517
3377
-3260
2011
9423
1266
-2181
2038
-5172
-339
-5086
4332
-2282
6437
3756
-7619
-4553
-2768
-7603
-2480
4619
4965
7112
-8497
3303
1848
2548
9157
-2924
-8233
6029
5949
8801
-4375
2372
883
-5754
7846
2790
3746
1538
-1680
6584
272
-6017
7172
-2903
7611
3990
919
2158
-8434
7614
8491
6066
-7909
-3396
-1044
-484
2083
-2706
833
-3001
3192
8851
798
-5152
-3081
8073
-5012
-8971
8731
496
-5519
-780
1187
-8494
-9409
-8351
-5586
6388
-7609
3270
1851
0
-5364
-775
3067
2598
-2336
-2107
-9641
1917
-3120
3082
-7279
-1889
-8013
2344
6658
-2434
8799
-3698
6594
-4693
4037
-9462
7890
1153
2186
-5215
9303
-8102
-2854
-7888
-722
-4578
9707
-4804
6848
-9186
-8765
2496
-3366
7754
-6252
6826
-2795
7828
8047
-89
4104
6274
-2411
-2666
1443
6127
6217
-5013
6475
-4649
-1266
8261
-8897
7964
4726
7084
2859
-3831
1107
-5928
5997
7039
4601
5846
7340
3557
7893
3825
-8994
3653
-6596
659
-2935
9510
6951
47
-9391
-5658
-50
4744
-4739
-9590
-4879
-3885
9504
-3194
-8859
-4203
-8765
-7882
8115
2477
-8412
975
5130
7095
428
6102
-6978
8755
-734
2218
9552
-1123
-6121
-3144
2382
7239
-1135
-1483
-9967
-5651
7058
7855
-5907
6919
-8375
-844
4068
7835
-3454
1441
-9250
9293
2870
-5474
-211
-7213
6131
-1551
9378
-1334
-4358
-8875
3224
-7070
9624
-4364
6397
7920
2528
-8294
7540
9746
-8536
-5109
-9642
-1264
1268
2596
2621
282
-1358
-4527
-8511
-760
-1420
7714
-9489
5708
1433
-9927
-2497
-3792
-6504
8835
1610
4500
-1551
-183
-5474
-2270
9379
-7317
-8596
-5889
-9136
8547
2913
8002
-9887
5053
476
-8987
3531
7637
-6505
-9454
1023
-1260
-7150
-766
361
-1905
-9884
8097
-3854
159
2738
-3753
-7174
-8337
8038
6263
438
-131
-796
5781
-2218
3467
7871
1440
-9841
-8969
3182
220
2074
9929
7435
-952
-8089
4861
457
-7763
6205
1071
6242
620
-4075
5154
-9123
-5926
-1483
-6879
-6431
-2797
2919
431
-7858
-3976
-9308
8079
-2243
-9083
-2094
1702
-9730
-9238
-9428
-8026
-682
8144
-2840
-1501
-5450
-3550
46
-8734
-8320
6983
-8786
9922
7860
-4453
6896
-9758
-4423
-8145
-174
7882
-1490
-9776
2941
-3603
-4880
-3141
-1208
8435
-7486
5474
5262
3734
-307
9027
8832
-6215
466
5178
6066
-5008
9353
8186
7846
6347
-3404
8489
-6348
-1290
-5621
3966
5198
-6548
8154
6228
6548
-2666
4505
-4364
-9384
-7398
103
-4307
20
9246
-6176
8476
-2624
1342
-2356
-8376
9444
-8264
-3132
7871
6663
-1060
6457
9418
5199
1524
-9321
8587
749
-2200
8111
-7913
-6546
-2640
-1133
2916
-9572
-9299
-2335
-766
4044
-2315
-6637
-3859
9225
-6325
-5006
-5673
1071
8822
3198
-3635
-8786
-9472
-1001
4277
4954
39
8021
-3649
372
4429
1761
-2283
-1358
4310
5216
2538
1108
1559
1804
9831
-7210
5934
4761
2660
260
1032
2902
-5888
2613
-6627
86
1568
-5232
-6369
-3969
4448
7671
-1680
-6835
-770
6445
-3304
2440
6905
5430
8156
4978
-5449
1611
7159
-1677
-6579
-7820
8078
-3459
-6969
7049
749
1513
6943
9608
-2168
598
-1514
-8218
2484
6186
9875
3455
7924
-402
6788
-2073
833
253
5452
-781
-5889
-6684
-4973
-8483
-8930
-7489
-3532
7951
-101
3374
1478
-786
1374
8543
-4067
-7970
3319
-621
-6874
-2590
187
-174
-1897
-2986
2735
6425
-6242
-7208
7786
9973
-2597
-2177
4513
-7042
-776
-9559
2383
4830
-4825
-7083
3153
-5520
522
6942
-8100
-5225
9017
-2847
-3485
7559
-7508
6291
-5020
-8994
5926
-6658
-5102
4733
150
-4519
-4386
4614
4997
9225
-9337
3203
-4644
5154
7974
-7392
-7750
-2056
1204
-7988
2876
-5851
-805
3279
3770
509
4523
-9676
-6899
9047
-6062
3642
5385
-1028
9401
-1944
2901
-2663
-3228
9735
3591
9050
7112
152
8555
-5622
8505
5233
-3627
9085
3471
5942
-4932
8681
3261
9623
5515
-1779
5746
216
-7913
-2949
-5500
-4515
7777
8817
1725
7605
4850
-428
-952
753
2579
-5710
2578
-6082
5488
-4548
4280
-3554
-2039
8958
1591
-2378
6645
3532
-3647
3587
557
1095
4743
6217
9344
9690
-4597
-9285
-2307
-3547
-7135
5000
7786
-3307
-183
-1269
2152
2318
-4365
6672
6372
1557
-8266
7107
-9199
6796
4760
3294
83
-217
-8816
5103
-1663
2083
5470
-1277
-2953
-5981
5673
-1535
-7428
9231
-7791
-3508
801
-378
7056
-3883
-2137
-9501
-994
-8887
-8765
-9948
-9469
2063
-2814
-5900
8799
4500
-8352
7846
-9639
8198
1828
6067
-7881
-2308
6347
-2843
8838
5905
3352
5639
2372
73
-8790
7882
5269
4201
1885
470
8668
304
4278`,Q3=`tsnz: 2
hrfv: smns - nfng
wfhj: 2
rlqf: 3
pngc: vdvn + qtgs
hmtl: 3
jdtd: 8
vgvd: 2
gmnw: tlgd - ddzn
bnpd: gwfw + gscj
fpjq: 3
vdlz: ldbn + snzt
vbbn: 8
qhln: 14
zlsh: 1
fbqb: lldv + tmjt
bgzv: 2
hgsl: 2
ffrl: hbqz + hntc
bzvc: vqgz - smth
vnbc: nwwm + jgjc
humn: 2906
gpsg: fqvb * mgjd
gqrv: llwb + dmmt
nrdl: 5
tnsc: ttvc * mdwt
hhfl: zhhl + flmf
rgzn: glpv + sgjf
bvsz: 2
cfsn: 2
pthd: tnmf * zdfh
pnfz: wqhs * rhhz
vrjs: 4
cdsv: jbtg + flbv
gzgv: mgcv + tjbj
cntt: hspg * cdjb
cngl: qvct * rwnf
zlvt: dwgs / vdrj
zjhr: 2
snpf: bsdr * plqn
qvwm: 3
sjqr: 6
dclg: 4
pzqq: htbt + fwzw
lpll: 15
tgvz: 16
ldtb: wsnp - tbfp
tjcf: wvcr / pjzb
sjgr: 3
hthb: 3
dnhg: mnvs / wcvd
cdfp: jvqz * vlmb
djfl: jdvn * pqcz
mhvw: zrqd + vvdm
zmsf: jqtt * jwbg
hswt: 1
thgv: 2
vnmq: lgrn + ggst
zhmr: 1
tvbh: nwmr + wshw
vdcv: mvsl + mcsn
nmbj: 3
mrfp: 2
wdwr: cffj - fhgj
bpzt: 7
ltgr: 2
qqhj: 12
tljh: tvvh * qwll
bnbt: mgwn * mqmn
vppf: hflt * pqmd
dqlr: zzsr * lzqb
ctdm: 2
vqgz: dzfv / qhtn
wlnq: 4
lzqb: cblv - tqhf
dmgs: frjn * jvsb
rsvc: 2
llqh: 4
mlzq: 12
nnvb: 4
bwnd: qvld / rdgg
gmlr: dvgd * mjgc
lzvh: 9
jqrj: 5
mcdw: 5
jhwl: swvn * tvgn
dgvr: ggbb * hftm
rvps: pjgq * rcfj
vnsz: 2
ptdp: dhhj * grcr
bcdw: 13
thrn: 5
ljwm: 5
hwff: 8
zmgm: 2
mqcr: tmvb * vjdl
bbll: gnfq * qjgn
dvgd: 12
dwnn: dprq * qllt
gbtm: 3
stcg: 7
hfjr: jwqz * tpdj
jzph: 2
gjvw: 9
tzqc: vmvt + plns
lpvd: 6
ncwt: 3
fpjv: vvvg + rdvm
cppz: 3
cvpm: sbjl + lwzj
gmjj: 19
lvzp: jfbp * vhbj
wrjd: bdsq * fpjq
dsgb: wrln * cfvz
cpzd: jbgs + tsnz
bjhw: qhlz * jlzr
mzgv: vjwj + ddzj
njzd: nqwh / lsqj
szqn: scld + gpmd
grcf: 6
dwhs: phpv * pqrf
rsqm: 2
phph: 2
gsch: 8
prmq: fcdn * vrjs
qfpf: sffn / dbqv
pqvp: 2
nzdw: dflp * cwvd
wvjf: ggzg - rnqm
cndj: pngc * sctr
sncp: ccvd + gnpg
fpgb: tnsc + tpqn
zrqd: ccvj + ztlj
fvvn: 2
wlgd: 5
nwgv: jjcs * tfjv
lwwz: 3
tmsh: gqrv + rdtl
djcm: 1
qqhl: 3
rvbc: 5
grrv: nlrq + npfl
ppsl: twlj + lwrl
zjsj: fjlr + dqlr
zpwd: tsdd + tbpn
mpln: mvjg * vrgj
fjbr: hrcd * rgrb
mzvz: qppg * fdsf
gfng: 2
gszj: dfjb + llfc
zvpd: mzwb + rvps
dmbf: znzh / jvpl
pwlc: dmgs - ltbw
jjzd: lvlg / vmdq
dbvq: jjzd - prtp
hflt: 2
pmff: 2
dhmt: 5
shbm: 2
dhnm: 11
lppn: 4
zrtm: bzzm * pvmw
glnt: 5
gwfw: lzzq + bbrz
zbqv: jvlw * gvjd
sgdh: jtbg / wtdm
prpb: 3
tndt: 5
qhct: pjsw + mmwv
qnzc: 3
gngd: gjtv + pwtd
thht: 4
bcjl: 5
rhcc: 2
zsjp: vshj + wqdv
tctm: vnbp * rpnz
mlpv: hwbs - wmsj
twvh: 3
jggt: tcdm * blch
pgbf: djwl * jnvb
tbfp: 3
gzwf: 4
mrfl: bgct + ljhn
jqpc: zhfv + zjcf
zprb: hfjr + szcz
flmf: thht * fbdc
znjr: 2
rwwm: 3
fpmz: zrpz + frzn
cdmz: 4
qvlv: gfwh + ggzj
jmlr: 12
rfsb: jtsf * dhdp
tfjv: 3
ndvn: hdgm * tnsp
lclw: bbtg + qqdg
tfdg: brln + jwlm
jzhs: 3
prtw: 3
qwlr: 4
sczz: wzls * gwmt
smth: bnpd * phdc
gwmt: 5
mlqw: hvtz + gcmd
fchm: humn - fspz
lvdd: 2
lmmj: wssz * jzhs
llmf: jvnn * sjlh
fnsp: 16
wmrp: rsvc * rqws
spjr: 5
pqmd: 3
sgdg: 3
cdjn: zlvt - dsqj
nvwv: 4
bbrm: hzlt * fnsp
dncm: 2
gvbm: 9
bptj: mtzt + fmbq
qbqz: jrmb + mqcr
lgwd: sdhf * smsc
nhch: lzjb + zqcj
frjn: jdgz / bnhz
jpth: 4
jdhj: 9
chgb: jrvr * zqnz
ncqp: cczj + djwg
ngwj: 2
tgts: hqsf * llpp
htbt: 9
tlgd: nvlb * hjnq
phdc: pgwd * qsrl
qrfq: 12
ddqj: 2
nrmz: jzwc * nltb
rvch: nslv + mlzq
qgnm: 5
rvcc: 3
bggd: 1
rgvf: 3
pvmw: 2
ggbb: 2
rsvr: 7
srjw: ptbj + mdlj
llfc: 16
ncwb: 18
zlzc: 2
wlpf: 2
vqbr: tgtm + rlrm
vjlc: dzft - cjbr
mvcc: 18
fqgf: 3
mgcw: 2
gvqs: 20
cqrb: jlzj * ldgf
mgjd: 3
fsrh: 3
fqhq: 2
mjjv: 9
tjwd: fpgb + jggt
vqtr: 5
mwtq: 2
wcvd: 3
rzsf: vhrd + dplg
szfn: 4
ltsz: 2
lsqj: 2
bfpt: 13
btvz: 5
mcpq: gfng * sbng
qhtn: 2
lbhp: 2
dbqv: 2
swvn: 2
phpv: rgzn * bvdc
mwjg: 1
srmj: 3
srch: nqsr + bnqv
nfds: 2
hsdn: lzwq + gmjg
cjbr: 2
rmzm: 3
hgsb: bsjl - zlsh
sfpd: 2
qdgf: hznr * lvdd
fmfj: mqww + bmwh
nhtm: pqhz / tjlc
fhhd: 4
cjdg: 2
hnbg: 5
rrvd: jqmj + hvfn
hdbp: 4
jcwt: nqrp - msth
lzwq: zbjp + bqbr
nfhl: 2
flbl: qmwt + btvz
fpgp: 3
jtqj: 5
mdlj: ccfh + gwrw
sflj: nbvb * gjmv
lfms: fcvp + rpgm
tfln: tvbr * mchw
pstz: scbt * cclm
pvpl: vfjc / qgng
nqcl: pqvp + wjdd
jcrg: 7
ftzt: lpqf * plmd
zqmj: 2
ldgf: 3
zrns: zjsj / ldtb
ztlj: 15
ppmn: 8
btdm: qsbn * zzml
lmmh: 13
gcqv: 3
dbcq: lhrr * jmwz
tcqc: 2
drmd: 11
mdcn: ppfr + vbbp
mwtw: 2
hhnv: 2
gfmw: 2
htrv: qfmt * gqzc
pzvn: 3
ldgc: lhfj * sqtg
wmsj: 1
zlrf: ndhv * pgbf
cvbm: sdrq * wmnf
szcz: 2
svht: nlsq * lnzg
hzgt: 5
pmqf: 4
bjsm: lmdl + lghh
wcvv: grft + zcnw
prvf: 13
rmmb: 5
hwlv: 5
fnlp: dtjn * zvll
pzms: 4
ncct: hqjm + ncrp
lpfw: znjg + mglg
plbl: hhhz * wczz
nfng: grgr / rtrc
vmvt: wrlq + cntt
jrtw: 7
zjcf: fjhz + tcdt
ldgq: 16
tnzz: 2
cmpz: mrmj - pdmd
lqts: hqsr / tcvf
mgfw: gdgw - ddtw
pfzv: ppsl * jpmm
cghd: 5
wgcs: 3
sgnh: 4
qbzt: mprm - pgrt
nwcj: 3
zcpn: smjh * npbh
zbfr: jcwt * fsfs
dcfv: zsng + fmfp
zczb: mvlb + zrtm
ltsj: 9
fhpr: bcsr + chvj
fhcp: 17
srll: 4
sqzv: 5
rnbp: jpwc * dgbd
jtfc: 4
ppsh: sfng * bsjn
nrdf: 2
fdhh: 3
qlpz: 4
gvwj: dqgj * vmtv
plqn: 19
tvdn: 2
bnnf: 4
bsdr: 2
qbqh: 5
brdh: zvjz + wmzb
hjcd: qfwq + mbtr
mrwd: 4
nqsr: rllf * wrnm
zvrl: rcwl * rcbn
vjwj: clqz / twvh
brct: 3
zjjw: sjgr * fbzw
gmrr: qsqq * nnvb
twnv: 3
cvfh: tzjw * vjlc
jmbw: pmff * rhqs
bbfr: 4
fcgn: sgvz + plbl
gnfq: 3
hnph: wvfg + vrfj
njgc: 2
pmwl: 2
ztfs: 2
cbwd: lppj * gsch
zgpt: jtzc / vbbn
vsjb: 2
ptqm: 3
lfzg: 2
phft: grnz * hswd
vczf: 2
tmjt: 2
psbz: 9
sgvz: 5
trhm: dqcj * szvj
zfnq: cbzv * rvch
wjvh: vvml * fdhh
jdqd: tldf + bnnj
qwtr: ppmn * sqbc
zdfm: 10
fmbq: 4
bpwg: 2
cqmb: 1
zpwc: sgdh * lmmh
rjcw: 5
wfnh: 9
btqz: qrhp * lqts
rczr: 3
llsf: 2
wllz: 2
hswd: nrdl * tnzz
pswf: 5
jpwc: gqpp * twbm
fjzt: slqb * jrvd
pvww: 5
qmnt: rbdl * fnhf
qwvg: zpwc + zqdh
gdgw: whgc + btwc
vmzb: 2
csvj: 19
ggqb: 1
zscp: 6
mrdj: nrhc + jjmt
gnpg: 20
gjmv: vbdm / lppn
gcmd: sdfb * hczv
czwt: 3
wfpd: 2
lrnc: mhmb * vtgw
hmvv: 11
qsbn: 5
nvds: pzpg + dbvq
wbzd: 3
sppw: rpcz * gtqq
wmzb: pftp + ndlz
wldr: cmpz * nsjv
pzlq: fjzt + tjwd
vdhd: phrp * djln
sgjs: vzsp - fjbr
lzpg: qwtz * nrmz
bbtg: zcwj + wzmd
svzm: 14
vtbj: vblq + rvgc
hzdb: 3
scld: 2
mghq: 2
hzvd: vqcr + tcpw
qtwm: 20
zjhn: 11
rtnc: 9
tfsg: gfmw * dcvl
scnw: 2
mrhl: cltl + ggpz
fcbf: tmsh / qzhh
mlfn: bdnf * hmtl
rcmz: 4
zpqp: 2
chls: 2
rzns: 2
frbh: mgfw / dncm
vsmn: 2
plmd: 3
bnwg: hnhd * hnbg
jdvn: 5
whjg: vpdp + cpzd
wntf: bccq + ttmp
zbgs: 3
nfts: 16
tdfs: 9
tjsl: 2
mwpz: tlrn + wddr
tbpn: 4
vhrd: prtw * gpsg
rgnc: 6
grcs: qmwl / vspg
tsdd: jrjp + phqn
mbtr: 4
whnf: 20
hrgz: qnhp + sjqr
zhdz: fwss * mlfb
lhcc: 5
thrw: hwff * dstj
tnwd: llzt / hcrf
qsgl: 2
sjfm: 9
ddzn: 7
zdcc: 2
prtp: 5
rpvv: 2
lfvv: 11
pcjn: 3
dzfv: qrvj + zrns
qsqq: 4
twlb: 19
grsp: lpfw + cbwd
qfmt: 2
plhh: wqcg * gtwn
tnmf: 4
fmfp: 3
hrbj: 6
jwlm: 17
gmjg: snwr - zsdn
jpqg: 2
djlr: 5
lgpq: qhcd * rvbc
qsll: swjw * mwsf
glcq: lmnn / tccp
cqzp: cnvf * vbbs
hvfn: tmlp * nrsb
nslv: 5
cgqr: 3
jnff: 2
ccvd: 9
sgqs: 2
vnlt: 2
nrhc: zbfr + rmqc
hwtr: 3
vlfc: 7
rqwp: 1
wjdd: vnsz * sbrr
gsps: wntf + svzm
jllb: 2
zzsr: hgsl * tsvp
ggzg: jrtw * ptss
bccq: 1
fngd: 14
gtqt: 19
hpbd: 6
gtgj: 2
nwhf: nhdw * pmwl
dpwb: 2
nhrp: mfjw * gbfl
hlpm: vrsh + zdhc
wnfb: lfnh + hwbq
drtf: 3
gtzf: 2
tmvb: dznp * nfjf
twbw: 3
fcdn: 4
mrjl: 4
zhhh: 4
htsg: tpfw / lmmj
sffn: hbcj * sncp
dddl: 2
mzdz: tvbh + tmcr
nbvb: rtnc + wdmc
vsdp: lwwz * mgcw
cbzl: gbdb + fdrz
pgwd: 3
qzjs: 3
lqcf: grrv * zfbp
dqln: rvjn * wblv
qdgn: pdsm * fnlp
qppg: 2
ccfh: gmrr - fddz
hmzw: wlqg + qnwr
tgtm: fsqw * rzns
vvhb: 2
jbtg: mvvj + nvds
qpqz: fvwz + gqnt
vpjl: 6
ddts: fcbf * wwrg
jcwm: vldd / qsgl
msjf: vdcv - ngtp
pdmg: 9
ncmd: 3
nhfn: 4
zsdn: rlmd / jzzf
mvdv: tgts + gzdv
gfdp: pmjz / rsgc
jgbd: 3
fqpd: 2
bpnc: 2
zsrw: glwz + qtjv
zmvq: zqmh * rpth
tbls: 2
wmhn: 20
bbdw: tzsc + mjlg
jhmb: 7
zgnm: ctbb * bqzs
nsdq: 5
rhqs: 3
gmqd: 11
twmp: 18
dgbj: 1
nlcw: hmmj + ssfg
zgbn: 4
vtvb: crdf + jczt
mvls: zjhr * qznl
bjhz: 2
lgsh: 2
hwrm: nzdw * jfvl
ppqg: cjpb * gdrr
cfsp: wrjd * sljm
pgvc: jwsg * bdbt
ppnn: 4
hntc: gszj * bwqc
mglg: rhbl * rrwd
gwzg: vpph * mwhb
ndhc: 2
qzpj: 2
qfwq: 3
sjqv: twqw + nccc
bcjn: hnnt * pdwr
rfnq: 2
fvld: hvvc * fqpg
lncn: wscd + vmbv
sdww: rgnc + pzrl
vqbp: 3
psmc: 2
lvlg: nnff + csdd
hnrm: wjvh - frbh
cwzf: 2
lhmg: 16
jgjc: gtgs + wgjd
dfjb: dfrz + mtts
tgmh: gmlr - fvmq
hcrj: hmvv * sbpf
wshw: 2
jwll: hssq - zgbn
wrln: 2
wcws: 2
jffs: tndt * rwzq
jdlb: nsbp * rbjd
rwzn: 2
fwzw: 2
mthn: 3
ftrj: qsll / vvhb
ttfq: 8
tnjj: qmfq * dsrb
vdnr: 6
vsdz: 3
zqvn: 5
bsss: 4
fcts: tcqc * bmpt
dzdd: 5
gjjw: 3
brqs: cgqr + mqnz
dglf: 16
rpjc: 2
nwgg: 2
hphf: 8
dshg: 2
bmgg: jbns * ssrr
jrmb: hphf * hcrq
ghsg: 3
mwgd: 3
wdmp: gcgw + sdww
tldf: hcvc + hfrb
fjhz: qhdg + lgpq
nhzs: ssbn - pfqg
dznp: stpm + mzvs
bllq: 2
gdvt: qhct * zjqf
wqcj: 3
wgjd: spjr * vrjj
lvnh: 2
bnff: 11
gvbg: zwnm + vppf
ztnw: 5
qzrc: zpnw + wtgt
qprg: 2
ttvc: dcfv - cfhv
mtbg: 8
mccf: 2
wvfg: vgvd + hbqv
fzdr: tcfc / htrv
jnsz: 3
njnn: 3
wtgt: dtdw * cfqn
qwll: 6
lnzg: fqgf * hzdb
vltd: zbsc * bbfr
zcwj: lztj * vlsw
rrzl: 13
lbhc: nbzg * gmqd
qvgv: zfnq / zcsm
cbzv: 2
vpph: 2
ctjz: fsjv - fztr
rdsh: 2
qfgs: 4
pqsc: 3
djwg: ldgc + wptw
ssdc: 5
pqwg: wpql * vptr
bhqh: qgsh + gtpb
bchq: lpqp * fwpp
nrdn: 3
tpdl: gcqv * gngd
pgrt: 2
sfvc: 5
fdrz: 4
dsqj: hhhl + wnfb
ggzj: qfpf + pthd
cltl: 11
tcfc: pfzv - bmgg
rvqd: 1
zhll: hbnn * rfsq
ljmw: 5
wzfq: twrv + rddp
vzsp: hczw * chls
bstt: 5
cbgz: jllb * zpzf
szjv: 3
qlrl: 1
fbmd: 2
fqsm: 5
fglf: 2
vbqf: 5
sctr: 2
wrhn: 6
lgjv: ffrl / tjsl
cgdm: 7
hgsh: sjpv * jhmb
cpsb: 2
rjhr: cwzf * pwgs
ccvj: zsjp * jcgs
lpqp: zqvn * bwvr
jrvr: 2
pvjs: 3
gbpr: lttb + vpjl
jwqz: 3
jlfd: vvnn + sfpn
lgrn: tjjh - rmmb
lqqs: lzzf + bttm
smns: smlb + brpt
bqlh: 3
bzzm: 11
pqcl: 7
lljz: qqhl * qvwm
mvjf: 2
zpff: wlgd * pqjz
zvll: qmlh / cjdc
rbhw: 7
tmcr: qhqq + gwzg
jwrj: 3
qgng: mwmv * wfhj
jqmj: hprb * tfsg
tjlc: 2
dwvq: 3
dtwl: pmqf + sqms
hmmj: wzfq + vdnr
wmnp: fbfl * bnrl
zrgc: 3
jvsb: jjpg + hzvf
rcnf: cmcj * ddqj
qhqq: wlnn + rvmv
cjpb: 2
prqf: 14
vwzf: vbqf + ldgq
dqcj: gsvt + vphq
fvsv: 2
ftfh: ncwb * lpll
shlq: 6
tmlp: 5
ffcl: 5
fmng: pmpj + grtv
hmbd: rgbg - gqrt
qlvl: fbqb + tnmv
gjwh: mdcn * fhzg
gggc: 4
zrsw: 5
hnnt: chtc * stfd
zqmh: stcg * mwpz
lhvs: 2
vjss: lfvv * dqdg
wmnf: lclw + srjw
zmtj: njnn + jdsz
nlsq: 3
cclm: jcwm + zhmr
vtgw: 2
bfvp: 3
wshl: 2
bnlq: 5
zsnp: 3
hhtr: tgds * bzvc
jmwz: 19
rhbl: 3
bjrz: 9
vgqd: rbsn - pqsc
zsdd: trzs * ggvj
ljbs: 2
hnrl: prvf + mqll
wqcg: 11
sfpn: tcdl * cfsn
wzdw: vsdp + ttdf
bsjl: 8
gscj: 14
hjnq: 17
sfng: 11
tpjd: npjd + qwtr
wjwq: tvpb * hjcd
dwhf: hwlv * zznc
mqww: 5
cscs: 19
gnth: gmfd + prfn
qvld: tjrt + fsrp
wmpf: lfms * ncbz
mfzt: 2
bwvr: 5
rvzz: zwjt + plhh
cvnn: vltd + qtwm
fhfv: qnnn + bslh
lmdl: 4
mdqz: 16
tdbz: 3
hrvz: 2
fcvp: nwhn + sczr
nzmz: 7
thwd: vcqv * fhcp
tvvh: 14
fwfg: vnlt * rczr
cqcj: pwvr + jsqd
lrfs: tdhd * nchn
nrrs: gmjh + qvlv
wssz: 4
mmwv: hcnn * nnhl
dfrz: bcjl * gvlr
czlz: vprh + gqgz
mfjw: 3
wdjs: fvvn * nhzs
hljw: scnw * mdlw
bdnf: vdgg + hpdd
hvwt: mfmh + vvdp
vqfz: 1
qmwl: qrjg * qbph
pqjz: 5
fzmh: rnpg * srll
nccc: jhwl * zqmj
rnqm: 4
mdwt: 3
phvm: gtdp * hcqp
tjjh: qcqp * ffbs
hfjm: 3
chbf: nhgv + nrms
ncbz: 5
ddvr: 1
mhmb: dwmw * dcjm
nsvg: 15
ddtw: brdh * llhf
mwmv: 3
rvmv: 2
qqdb: 3
clgq: zrsw + dwzs
vbdm: vtvb * jdtd
jqtt: cdsv + rpcb
zjqf: gtqt + rnbp
bbrz: 14
mcgj: bjrj + tcld
tzgg: 13
frzn: 1
lqmh: 3
gtqq: fhfs - twmp
jdsz: 4
vspg: 4
mbnq: 3
wrmc: 2
grcn: 3
pwjt: 1
dhdp: 7
czjv: 3
szsv: pqzt * hcsb
mprm: wdrz + ljjn
wblq: llmf / nnhg
lqsz: blrl - jwzt
hrjs: 4
gsvt: 6
tfgc: 3
fsrf: 2
cfrh: gffs * bnlq
ptbj: cdhg + fjnh
zbsc: 5
llbt: 7
qwjc: 4
msdb: ctzw * lbhp
dcjm: 2
jbgs: mfbb * fwht
dnjz: 9
hcpm: 7
dwgs: tgbf + zdsl
twrv: vzcp + gvbm
nrvn: rzhc + vmrd
gpzm: hlpm * dnjz
lzrf: jwll * jnhs
chzq: 6
nbzg: lwtg / qzpj
cczj: dgjd / qwlr
hrcd: 19
lmnn: rssw * whjg
vvdp: 6
dgbd: 2
hnhd: 5
rltv: 2
ngcg: bsmt * qshb
fzdn: nwhf * fqpd
rdgg: 2
dtdw: 2
mjgc: 3
bdbt: mqjm + hcmm
rwgg: 11
cdcv: qvbd * jqmw
zzsc: zqvv + dglf
lzjb: 3
crrb: lbhc + gpzm
nqrp: wdmp * btzf
wwmt: ngcg - hjln
hcmm: scjr * wdwr
dstm: qhln + drlw
nltb: 3
qcqp: wrmc * rnhn
gcdn: htcl + hcbz
rczp: mmrp + rsvv
fjlr: fchm * njsj
zcnw: 9
twds: 2
dflp: 2
bccv: 6
pdwr: 2
dwzs: bsgl * fgjv
hfrg: 4
gbfl: 2
mtzt: 3
qmfq: wjbl * wlpf
dhvn: bdvh * ccps
llbs: 2
jwsg: 6
jlwz: 7
hzlt: 4
qwtq: ppld / twbw
gqzc: 3
qvbd: 5
wgsj: tpjd + pptt
rpcb: gqsf + rtsw
jqdf: dbzd / rpvv
vdjz: ljwm * njgc
pgdm: mrjl + wgcs
npwg: 3
zgvw: pvpl - vjss
npbh: pbzh * sgmz
fzjd: zrcm + qncj
tjrt: mccf * cdjn
jbns: csvj * shbm
mcvf: vwzf + ncqs
hpdd: ccwd / hhnv
wpql: psvd + pzlq
rsvv: hhfl + mwhm
ttrq: 2
dbnp: lvzp * thrn
dzwz: 3
pqcz: 5
dprq: rwnw * bftj
ljhn: 5
llpp: djlr + jzph
dhhj: 10
gtwn: cfrh + rvjs
jndn: 2
llgd: ltsz * msdb
frnp: tljh + zsrw
dbgc: 2
smjh: wpbt - szqn
qmlh: ljbs * bwch
dphb: mwtq * gqtb
lggw: wdlb + zvrl
qznl: 5
fnhf: 4
vmrd: 10
lztj: 2
pzpg: 8
rnpw: lzqq / nlwz
pvln: 5
mbsc: wmgn * hsgr
lpwg: 2
vwtd: svht * dbfq
bmpt: 4
fpmd: pvjs * sjtt
vtlz: dtwl * zmgm
nvlb: 2
gwrw: ndcf + ljsr
wvcr: ssdc * wvbg
rjzt: 14
vzrv: 2
gtpb: wldr + qwvg
zccz: 2
hwwb: 5
sbvw: 7
sbrr: 4
zntf: 2
cdsl: 2
tcvf: 4
fdgq: dgwj * htfd
ltbv: psmc * grcn
mblw: wptb + wshl
cqrp: cnsb + rgqr
nlrq: 9
ptss: 5
zqvv: 3
fdfj: bptj * mngq
gcgw: 2
mjlg: glcq * cjqm
pjzb: 5
bnrl: jnff * hmzw
mvwb: 5
dlbj: srch + vnmq
wmgn: 3
qjgp: rhcc + pdmg
zsrq: lptf / bqzn
vshj: 3
zdhc: 12
swnn: 4
msnd: 6
nhdw: zntf * nlcw
wzls: bqlz + vtbj
qnnn: vlcb * vjgg
nsbp: jcrg + qrfq
hwbs: mjqt + hrsl
cjqm: 7
prdz: zrfj + dsln
pzzl: czlc * nmgj
twhf: 6
mgwn: tvdn + chgb
ggst: 1
dgwj: pvln * ccdj
qwbj: 5
cwvd: 13
mcsn: rjhr + ndtn
frbg: rjhc + mdzl
bhcz: 2
jcsf: 8
zwjt: mlfn + hhtr
dqgj: 3
dhpp: zjhn * nvwv
rcwl: 2
mqjm: 4
pcnn: 9
vfch: 2
nnhl: vdjz + tdfs
sprb: zjjw + djdj
nwhd: 4
jjcs: 3
ctjb: 4
zbbq: fsrf * nsvg
vmvh: phph + ppsh
mgzp: nmbj * mrfl
dfsn: 4
cffj: szfn * nhfn
ddzj: 1
btzf: vwtd + wqnw
fsjv: 8
lrhm: 4
crhb: bpbc * vhwj
ldrv: 2
pqwq: prnb * ghsg
llrf: 12
tlzg: 14
qnml: qwbj * rltv
ctbb: 9
hrnb: lvnh * tgmh
hvtz: mzbj * gzwf
hbqv: mjjv + lmfl
ggpz: 12
bmch: 2
sdjz: mspf * rswd
wjbl: 3
mjqt: nrvn + pzzl
tmjg: dbgb + chzq
rfsq: ldtw * dpwb
zhfv: rsvr * hfrg
fddz: 2
grcr: pcvz + jfrl
vmtv: ctjz + mblw
zznc: 5
dsln: 1
hprb: 2
lrqp: fngd * cdcv
cnvf: jtfc + nfvc
nffp: 2
znmj: 2
cwlb: 3
zmbn: 2
nqwh: bllq * ppqg
bwcm: dhzq + dgbj
rgqr: 20
qqdg: znjr + bcjn
jbpr: 7
whcz: jtcl + zscp
hfgs: lnjr * nrdn
ssqt: hwts * pbwn
nhrv: wlqp + bwsm
cfhv: 3
psgr: 1
qvqf: thgv + dhnm
vlsw: 5
lldv: 5
rcmn: 2
tcdm: 19
rzmq: 1
dprw: 5
nhgv: 4
tccp: 2
tnmv: mrwd * mzvz
mdzl: 7
vdzl: 5
fbdc: 2
dwvd: 2
bpbc: plzd * lggw
wmmz: 1
qwdp: zfbv * gmjj
gqrt: jbpr * msjf
wrsc: 3
phml: hwtr * dwvq
crfq: smdq * fczq
vgwz: sgdg * lqcf
pbwn: 5
jzwc: dvbw / mvjf
mzbj: 8
crdf: fvvp * pgdm
wlqg: 1
jnhs: 3
bsww: 1
qjgn: 3
fspz: sppn + gccm
fsfs: 2
scdb: cgdj + psjm
dbzd: gfbl * bbdw
wvmd: tzdh * dmwv
mlcf: 3
dlqv: 16
wptb: 5
cpgj: zbbq + sprb
tcld: jqrj * mfzt
bhsg: ltbv + jpnj
sbpf: pwpf / qnzc
wtdm: 2
ztgr: qqzh * cpgj
nsdh: 4
glpv: gqzl + qdgn
scqh: 5
rzhc: jdhj + dhtm
mzvb: 8
dhtm: nfts * gtgj
mptr: whwc / chmm
pjsw: zcgf * zngt
qwtz: qrzb * cqzp
cjdc: 2
tjlr: 8
wlnn: phvm / qmmc
ccww: 9
dhgn: 2
zhhl: vzbp * fsph
lptf: dgdm + jqdf
hjlw: brcj + lhcc
vqcr: 4
jrlh: 2
pczh: frnp - cndj
mmsr: 1
jvpl: 3
jvqz: pbnq + jnml
rllf: 2
cfvz: dbgc * twsc
mfmh: 7
zcjg: 2
stfd: 5
hczv: 2
mrmj: prnv * bqrg
gqsf: drmd * brct
gbsp: hdbp * fndn
ddwj: 4
zdfh: 6
zmjf: dchs + fdfj
qhvc: 5
wqnw: sgjs / flbl
gmnd: pwbw * fpgp
nlwz: 6
nhzn: 12
bhhw: gjvw * pcjn
fcjr: 2
fztr: 2
rlrm: dqhs * phml
tzsc: whcz * fmvb
rssw: 2
clqz: cqmb + whnf
scjr: 3
tgbf: wwmt * ltgr
jgnt: vqrz + hcfh
mtts: mvjq + bdzr
hqls: 10
qhlz: 13
gqgz: 5
cbmh: hgsh * mgzp
hczw: cqpc - ztgr
jtsf: 2
sppn: rcnf + rrvd
csfd: bhrh * mbnd
tfgn: hrnb * zdfm
sgjf: fhhd * zsrq
svdl: 2
ppfr: dfsn * bhsg
zrff: dstm + bbrm
tzdh: 3
ppld: nszn * szjv
bdhg: nhrv / rfnq
npjd: brqs * scqh
flnz: gcpr * qlpz
wqtd: 3
zbct: hljw * jnsz
jvnn: 3
srws: 2
qrmh: tfln - sflj
dqtn: 5
mnjg: wmhn * dcbt
rdvm: hgrl * fbmd
grtv: wvmd + qbzt
gwgb: bsrv / mghq
sjtt: 13
hgrl: 5
bdzr: mnqb + gsps
twsc: zccz * ffsp
spmz: sczz - zgpt
mqmn: pcpq + lgwd
pdsm: 2
qgsh: vmvh - bsss
vptr: 2
tvgn: 3
qqzh: wbzd * hthb
ffnm: zbrc / rsqm
gqtb: cvpm + schq
hcrf: 2
hhhl: ncmd + mptr
rpgm: 1
fqpg: 2
lwrl: sbsn * cmwj
plzd: 3
nwzz: 4
ncqs: zpqp * cmch
mvjq: 20
bslh: ndvn + qvhw
thsh: lhrv - czwt
zbjp: gwgb / mwsp
wblv: 3
nbfp: 2
phqn: twnv * jpqg
lmfl: hqls + mvls
dgjd: dgrd + crhb
mbgh: nrhz * vlfc
dqhs: 5
rgrb: 11
nrhz: llbt + ztfs
qrvm: 7
zrfj: hrjs + wcws
wztc: wjjg + bvsw
bttz: 2
vzcp: 1
pwgs: pwlc * vdzl
lpqf: zljz + lrnc
vvnn: 3
jjbn: 4
ngtp: glml * nfds
llhf: 2
stpm: 6
wnst: 3
pwvr: 1
flbv: vgwv - ttfq
mvsl: spmz + whlr
rblr: 5
twbm: 3
smvw: 15
njsj: 4
vvdm: qwdp * prqf
rths: pqlz * shnl
fndn: 2
qvtz: 3
btwc: gbpr * dmbf
thqw: 2
hgph: 13
ljsr: 10
vphq: 7
hcnn: crrb + hzvd
rcjm: 2
ffss: pcgs * bscg
jpnj: wfnh + njzd
zzml: 2
sbng: dlqv + smvw
mfqg: 5
nszn: zlrf + dqzg
sqbc: 4
pzrl: 3
mnzd: 5
sdhf: 2
jcmp: cjgg * wnst
qlzn: thwd - mvcc
dlmg: frbg + zsdd
mjbj: 15
mnqb: 14
vvml: htsg + tpdl
mwsp: 2
dzsr: rths * dprw
dtbh: qttw * dszc
ctqm: 4
dnqs: 17
gbdb: 3
qvhw: bjbh * gvwj
bwqc: 4
jgdn: nqcl + dhmt
nrmd: tjcw * cdsl
zzjv: rbhw * mgwv
rrpz: 7
zvjz: zcjg * mvzs
tlrn: zmsf * jfzs
ztrc: 1
pcvz: 2
hftm: bdhg - phpz
hspg: 3
jczt: 3
zngt: gmnd + bnwg
ncrp: ztnw * tmjg
vhwj: 3
ldbn: ddfp + rwjv
gzrp: 3
jlzr: 2
jfvl: 2
mrvr: bhcz * ffcl
zqdh: flwb + jnbr
tcpw: jffs - hwrm
gfbl: 2
fccf: 3
flwb: 2
dthl: 7
gccm: llgd * zpwd
wdrz: sqlt + cdrg
hcqp: 17
lwtg: zmbn * cqcj
nnff: mwgd + rczp
ptzv: qmsn + rlqf
rpth: ddts * gzgv
ljjn: 7
ttdf: 1
szdc: czlz * nrdf
hbmm: dzsr / zrgc
lbzj: 4
hbnn: 3
qhtt: qqpp * pgmh
gvlr: 7
pjgq: qvtz * hbtr
bdvh: wdjs - zhdz
jzzf: 7
wzmd: 13
jlwd: mrvr + gdmv
pptt: dlbj * gggc
gzrs: 2
hsmj: zczb * rcjm
csfb: cngl + rrpz
hcbz: lqqs + cbgz
brsf: lssl + tzgg
vsjn: lphc * nvhj
dchs: jcmp + qdgf
vrjj: 2
bjbh: csfd - nrlg
drnl: jznt / snjp
jfbp: 2
bqrq: czjv * bpzt
mmgl: wjtj * sgnh
grgr: mwhz * dtbh
bbwz: 6
dwmw: 4
cfhp: 4
djwl: 3
twlj: mrdj / ngwj
srnd: glnt * jgnt
lmgj: tzqc + nrmd
jznt: gnth * jndn
czhj: hrfv * bccv
ssbn: qswz / whrf
mzwb: dlmg + vqbr
wqmn: sdjz + rdjh
cfqn: 5
wrlq: lrhm * tmvq
root: dbcq + zmvq
dszc: 17
gzdv: 2
mrgs: 3
zqnz: zlzc * wlnq
plns: 4
gqpp: 13
fwwb: 3
rvct: wzdw + psgr
fjnh: 5
dcbt: 5
twqw: 17
whlr: wrwt * mlqw
tgds: zjdj * sdqn
lzzq: 5
spbb: 1
bvsw: wrgd * mbsc
rwnw: 2
rpnz: bstt * fvbg
jwzt: rjzt * rlmj
hqsr: gnbd * hnrl
fbfl: mvsn * mcdw
chvj: 5
cfwm: hsdn / bpwg
blch: 3
vjdl: mzgv - qlrl
gblf: dddl + sjfm
bnhz: bpnc + qgnm
chtc: 3
sbjl: 3
tpfw: bchq + fhfv
sgmz: 2
gcdw: 2
zfbv: 2
rmqc: wblq * bjcd
ldtw: pcnn + mrfp
bqlz: 3
qvvs: mdqz + tjcf
rwnf: 10
vggv: 3
gjtv: pjvd + zmjf
zpzf: 4
qrjg: 17
pmjz: drnl - dsmw
bsjn: 5
fdvc: 2
czlc: 5
ddfp: 4
npfl: 2
ndlz: vzrv * zspz
pjhg: 3
tnrg: 1
vlmb: 2
wdlb: 1
pgmh: tfgn + lmgj
cqds: 2
grdf: fmng + njjs
trzs: 3
fhzg: 2
wvbg: ptzv + mnzd
pwbw: 3
tpqn: qqhj + hjlw
jnbr: dntw + zsnp
vqrz: qwjc * zhhh
smdq: 3
fwht: vhzm + zcld
qzhh: 2
wcrq: 5
zbzt: mvdv * qvsg
bbqm: 13
phpz: cqqw + ffnm
swjw: 2
djjq: hfgs + tzmw
qhcd: 5
dzft: vsjn - cqrp
qsrl: 2
sqms: bfvp + rnjb
rdtl: prpb * nfwg
hpct: zcvd * hwwb
pjvd: rfqt * sjqz
zsng: twhf + vqfz
grft: 8
dlvl: nwzz + gbsp
cjgg: rvcc * bhjf
tzjw: rsgn - lncn
zspz: dzrg + vdpb
cqqw: ljmw * hrgz
nvhj: fvfz * bttz
nrms: 2
srwt: 5
mfbb: 2
vqth: mlcf + nzmz
hwts: 17
gcpr: tnrg + crfq
ffll: 5
wblz: 2
jqmw: 5
wrgd: 7
qhdg: fglf * qvvs
cgdj: 10
rvgc: qdrw + msnd
hsbs: lhvs * lhtz
qnhp: ftzt + nwgg
blws: fzjd / rvct
frbf: dlvl / rcmn
gtdp: 3
tnsp: 2
hwbq: 18
ccdj: cbzl + dclg
ndtn: ntcc + ptdp
jfrl: rqwp + dlbp
dmwr: ffll * tnwd
hzvf: qgrh + fmfj
zwrj: 2
mbnd: nhzn - bggd
ffbs: 3
vrsh: cghd * fwlh
pfcj: 3
jvlw: qfgs * pfcj
vpdp: 15
fcvl: 4
dqzg: 11
szvj: 2
nsjv: 3
qgrh: 1
rbjd: 4
bjcd: 3
spdg: jtzs + fzmh
dsrb: 2
brcj: 14
tcmb: 12
zrpz: 11
wqdv: scgt * qbqh
ldjc: 3
qgcr: 7
pwtd: rzmq + lljz
whwc: wjwq + fcts
schq: rwgg * zdcc
vmdq: 2
vtnj: 1
wscf: bnff * wqtd
wsnp: 9
zrcm: qslc * qndn
bsgl: 2
gpmd: mzdz * vnzf
gvjd: 2
mngq: hfsz + wmmz
hssq: mvwb * jlwz
bwsm: dhvn + mhvw
vdgg: szdc * pszf
htlp: dhpp / stdr
wrwt: mrhl * rqhj
mchw: 4
qrzb: btdm + bqrq
scgt: 2
bhjf: 3
wqtw: fhpr + gfdp
rvjn: 2
dzrg: fflf + qzjs
ggvj: 3
gtgs: 5
snjp: 2
sqlt: 8
pszf: 3
whrf: 2
phrp: 2
cdhg: 12
dvbw: zrff * gtzf
lssl: 16
djln: qprb - ncwt
pfqg: ftfh + hbmm
mwhm: 11
jjpg: nwgv * lqmh
cdrg: 10
bmwh: 4
cbrw: 4
dmwv: qgcr + rngp
jfzt: 3
bqrg: zbzt / thqw
twtl: dzdd * scdb
jrjp: 8
zjwp: 16
chmm: 2
lpms: dwvd * bcmf
gprr: zbqv + hzgt
znjg: wmrp * ldrv
qmsn: 5
phlv: wscf + bpjm
rwjv: 3
pqzt: lpvd + djcm
sgrd: cqrb - zvpd
ggsl: zprb * pzvn
vjcd: gdvt * sznf
dhzq: gqwl * vjlh
wlqp: ldfw / hfjm
bcsr: 2
zgzb: 8
jnvb: 5
fshw: mlhp / hdmg
slmh: hswt + jgdn
hqsf: 5
zpnw: jfzt * drtf
qshb: lgjv - wmnp
qvct: 3
tqhf: 3
vrgj: 3
njjs: hgph + wmpf
cqpc: rvzz / dggd
qslc: npwg + ctcj
rswd: 13
slqb: 3
vfjc: fzdr + nrrs
vcqv: 5
ccwd: rwzn * bwcm
llwb: hlnd * ptrt
bdsq: 3
ndhv: 2
rhhz: 12
qmmc: 3
hjvb: 4
tcdj: 17
vzbp: 3
tpdj: qqlw - ztrc
lngh: 2
dplg: 8
bwch: dwwh + qjvs
ssrr: 10
ngtq: 6
bhrh: 3
pqlz: wbnj * wzwd
rnjb: 4
sdqn: 4
dtjn: chbf + ggqb
wqnv: 3
drlw: wcvv + jmlr
gqnt: qhcz * tctm
jdgz: nwcj * szsv
zhzw: 2
zwgp: 2
bvdc: 3
rtrc: 3
jwbg: hsmj - vdlz
szqq: vggv * cwlb
ntpp: mlpv * bvht
hcsb: 2
fwpp: fqsm * mzvj
vbbs: 4
dglt: mwtw + jjbn
dmmt: thsh * wrsc
bpjm: grcf * rwwm
wjjg: fzdn + gjwh
qqlw: nsdh + fcvl
fwss: wllz * swnn
ztht: vsmn * bfpt
mtrq: ffss / qhvc
vblq: 6
shnl: 2
sdrq: 3
gwbj: 7
vnbp: 2
jtzc: fpjv * tnjj
wpbt: sgrd + twtl
wdmc: flnz * sfpd
vdvn: ddvr + rjbf
stdr: 2
sjtc: 2
tvpb: 2
jnzv: 5
prnv: 3
zdsl: hgsb * mcvf
rlmd: vqth + hnrm
hdgm: dnhg - fdgq
ctzw: bsww + wrhn
dqdg: bcdw * rblr
wqhs: njhj + llrf
zcvd: 3
whlf: 4
fwlh: 5
zfbp: 3
nwhn: 6
rgbg: qrmh - dwhs
dbfq: rcmz + pstz
rcfj: 3
scbt: 2
prnb: 9
zjdj: ggsl / nnth
qjvs: cvlt / zbgs
gdrr: 11
hcrq: 4
pbzh: 4
cdjb: bmch + pqwq
nfvc: 2
wczz: 2
fsph: 5
bscg: 5
lppj: blws + tgvz
tsvp: lzrf / qqdb
fdsf: cfsp + srws
mlfb: sgqs * vnbc
whgc: cqds * bhqh
lhrv: rdsh * nsdq
mlhp: sjqv * ftcp
njhj: qjgp + hpbd
gcdm: 2
rjbf: zjwp * rjcw
nrsb: 5
brln: fcjr * ptqm
dlbp: 5
dvzd: brsf * gcdm
jnml: 11
vjlh: 12
dntw: cjbj * dshg
bfjm: nffp * snpf
smqn: 4
rnpg: wnvp + mtbg
pftp: hsbs + vgwz
znzh: mcpq * dqln
mzvs: 1
lwzj: 4
cjbj: pwzr + sfvc
zgnh: 3
pcgs: vnct + wdnq
bftj: 5
mqll: 1
tmvq: 4
pwpf: gvqs + jlvr
bvht: 3
sjpv: 3
pqrf: 3
psjm: jnzv * pvww
pqhz: lzpg / tbls
bsrv: ttrq * pqwg
cmch: fvsv * tcdj
jmls: 3
rcbn: mbnq + jnhd
gdmv: cvnn - pqcl
bqzn: 6
rjhc: 4
mtpq: 2
cvlt: hcrj + cfhp
vdpb: grzf + djfl
lnjr: lrfs / jmls
bqzs: mjbj + qrvm
vmbv: zpff + vtlz
vlcb: jpth + fsrh
wddr: zcpn * czhj
ffpr: 3
qllt: 4
cnsb: 1
zwnm: ssqt + prmq
qbph: 4
hcvc: nhrp * bbll
qtgs: dnqs * cdmz
zljz: 1
vprh: 8
snzt: 2
jtbg: zhzw * qvqf
ccps: 2
jlvr: 1
brpt: wgsj + grdf
bgct: 2
sljm: 5
wdnq: vgqd * rpjc
nmgj: dglt + ppnn
qqpp: 2
hfsz: jwrj * vmzb
nwwm: fqhq * pzqq
cpcf: 2
nchn: 4
jtzs: lmvz * mtrq
qttw: 3
llzt: gvbg * twds
mgcv: dhgn * gmnw
fmcd: 12
qncj: svdl * ffnp
hqjm: znmj * ffpr
bqbr: 8
ndcf: 1
wzwd: 3
sjlh: qpqz * lfzg
pdmd: qzrc + clvv
ssfg: mtpq + hjvb
tcdt: 4
sjqz: 5
gnbd: 2
blrl: rrzl * jlfd
lfhq: srwt * plwr
hmzh: 7
rbdl: 13
fhgj: 2
snwr: vjcd * bnbt
ttmp: pwjt + mzvb
nfwg: 3
lnhj: vdhd + fshw
qprb: vvzv * sqzv
pwzr: 2
rsgc: cbrw + wqcj
jtcl: ddwj + wqnv
qrhp: qnml - szsn
gffs: 5
cmwj: pgvc + wvjf
jrvd: tfdg * fwwb
glwz: sppw * zwgp
lphc: 4
tdhd: frbf + mrgs
mzsw: spbb + hrbj
prfn: jmbw * ltsj
fvmq: 10
fgjv: 4
wjtj: 7
hfrb: nwhd + gjzd
ztgg: qhtt / nfhl
szsn: 3
vvvg: 6
fvdc: rvqd + bbwz
zqcj: 5
rvjs: 18
wnvp: qlzn * qprg
hbcj: 2
clvv: 3
lttb: 1
gqwl: cjdg * tjlr
gjzd: 9
hvvc: lbzj * fdvc
nnth: 3
dstj: 17
tvbr: phft - cvfh
lzzf: cpsb * slmh
tbgt: 5
dggd: 3
mnmz: 10
rtsw: nzpv - vczf
gvnr: hrvz + vqtr
flzm: shlq * ngtq
ffnp: 11
cblv: ccww * lgsh
hdmg: 3
mvsn: 2
hcfh: dzwz * zwrj
qrvj: zgnm + rzsf
hjln: bjhz * grsp
lfnh: wqtw + cdfp
nrlg: cpcf * wcrq
htfd: 5
ftcp: 3
rdjh: hnph + tlzg
rngp: 4
pmpj: lfhq + srnd
tjbj: lngh + pswf
ffhz: 7
fvvp: fvld + mmsr
dcvl: gzrs + srzh
qndn: 2
vhzm: gvnr * dqtn
gmjh: dbnp + zmtj
dwwh: 14
fbzw: 7
mdlw: 4
smsc: rnpw * pjhg
qbtg: dphb * bgzv
mwhz: 3
ltbw: tbgt * hvwt
fczq: 4
bcmf: 3
fsrp: dmwr + qbqz
zcgf: clgq * nhch
sqtg: pzms + ffhz
qtjv: cbmh + wqmn
llvf: mzsw * tfgc
qnwr: szqq + gbtm
bnqv: fccf * tdbz
rsgn: pnfz - bfjm
mvzs: vtnj + flzm
dgrd: jlwd * fvdc
fqvb: 5
qvsg: 2
lzvr: 4
grnz: rmzm * wztc
srzh: 5
jlzj: cvbm + jdlb
hzfw: gcdw * rfsb
ldfw: jgbd * ztgg
fhfs: dvzd + srmj
wptw: fpmd + mmgl
qdrw: 1
wscd: nbfp * bbqm
mmrp: 4
jpmm: 2
rqhj: 2
lhrr: pczh + cfwm
fvfz: 8
mgwv: 3
nnhg: 2
mwsf: phlv - fbzp
dgdm: csfb * zzsc
zcld: lpwg * ctqm
zcsm: 2
vbbp: bvsz + qwtq
bsmt: 2
htcl: zvcw + zbct
msth: cppz * fcgn
ptrt: 2
hhhz: zzjv + mpln
gqzl: mbgh + thrw
tjcw: gwbj * ctjb
bttm: 1
jqqz: 8
vgwv: mthn * tcmb
nzpv: dwhf + fpmz
fflf: jrlh * prdz
glml: mnjg + ntpp
vdrj: 3
hbqz: zgvw * llvf
pbnq: zgnh * lzvr
grzf: wblz + bjrz
hlnd: 4
ctcj: 14
rnhn: 3
rpcz: 2
pcpq: dwnn * ncqp
mwhb: smqn + jqqz
lghh: 3
ntcc: vqbp * hcpm
nfjf: 3
bjrj: llsf * qwmp
qhcz: 2
mzvj: hzfw / llqh
jfzs: ncct * lqsz
fdsq: hmzh * lnhj
rqws: bjsm + dsgb
fvwz: 3
gmfd: mfqg * djjq
qwmp: 8
rrwd: 5
vjgg: gblf * bnnf
smlb: qbtg * sjtc
jjmt: qlvl + lrqp
vrfj: bjhw * vsdz
qmwt: 2
fmvb: wfpd * grcs
fbzp: vsjb * cgdm
mvvj: hpct * cgvg
lhfj: 3
lmvz: 3
csdd: twlb + jcsf
ffsp: 3
rwzq: sbvw + trhm
wwrg: btqz - fwfg
vnzf: 3
sdfb: 3
vvzv: 5
lzqq: nhtm + hmbd
mspf: 13
qswz: bwnd + spdg
mvjg: 4
wrnm: 3
qmqj: vfch * jqpc
tzmw: 1
dbgb: 1
lhtz: 14
rlmj: 3
mnvs: dgvr + fdsq
rfqt: 15
rbsn: lzvh + mwjg
tcdl: 5
zbrc: qmqj + htlp
vldd: fmcd * llbs
sczr: mnmz * whlf
gfwh: jdqd + bhhw
mqnz: 8
mvlb: 1
wbnj: 3
psvd: gprr * qvgv
cgvg: 2
vhbj: 4
djdj: 2
nwmr: zgzb + lhmg
hznr: cscs * ndhc
hsgr: 17
jnhd: 8
hrsl: 9
fsqw: ctdm * ftrj
jcgs: 4
rddp: mcgj + jtqj
sbsn: 3
jsqd: lpms * rgvf
bnnj: zhll + gcdn
zvcw: 10
vnct: dthl + qmnt
dsmw: ztht + bqlh
sznf: 2
fvbg: 2
plwr: 5
cmcj: psbz * gzrp
hbtr: ldjc * gjjw`,N3=`                                                  .#..#......#...................................................#..#............#...................#
                                                  ....#.........#.........##...............##..............#............#.##......#............#......
                                                  .............#................#.##....##.........#..#.............#...#............#................
                                                  ...........#...........#...#...........................#.#...#.#.#...#...........#................#.
                                                  ..#..................................#...............#....#...........#.#...#......#................
                                                  ......#.................#...................#.......#...............#........#......................
                                                  ...........##..............................##.......##.......#..##..........#..........#......#..#..
                                                  ..........#....#.#..........#..........#......#.#............................................#......
                                                  ........#......................#...................#....#....#........#.#...........................
                                                  .........................#....#....#.#...................#.........#.........#.........#............
                                                  .........................##.......#...#.........#.......#.....##.....#..#......#..................#.
                                                  ..........##....#.........#.##.........................#.....#...#.#......................#.........
                                                  ......#.....#............#.......#..#.....#....#.....#..........#.....#.............#..#....#....#..
                                                  #.................................#..................#.....#..#........#.................#..........
                                                  #................#....##..........................#.....#.....................#......#........#....#
                                                  .................#....##.#.#.....#...........#...#....#...#......#........#.................##......
                                                  ...................#...........................#..........#........#..#...........#.................
                                                  .#.................#....................#........#.................#....#.#..............#.........#
                                                  ..#.................#.....#...#.............#...............................#................#.#....
                                                  ......#.#........#.#......................................#..............#........#.........#.......
                                                  ...#.#.##..................#......##......#.......#.#..........................#....................
                                                  ..............#....#........####..........................#...............#............#............
                                                  ..#.............#.....###....................#....................#....#........#...................
                                                  .................#........#.#..#........................................#..............#.#..........
                                                  ....#...................................................#...#...##...#..#...........................
                                                  .......#...#...................#..............#.........#...#....#......#...............#...........
                                                  .............#...........#.#........................#...#...#.....................#.......#....#....
                                                  #............#...#..#........#...................#...........#......#..#.#.........................#
                                                  ...#...............#..#..#.............#.................#....#....#.........#.................#....
                                                  ......#...........##.#...#..#.................................##.#.#..................#..#..........
                                                  ....#........#.........#................................#.............#.....#....#..................
                                                  ......................#..........#.....#.....#.#...........#........................#............###
                                                  #...#..................#....#......#...#........................#..............#........#..#.......#
                                                  ...#............#.............#..##.#.#..#..#.#.........#.............#....#...........#.....#......
                                                  .................##......#.....................#...#....##................#..#.......#....#.........
                                                  ....#..#.........................................#....................................#...#.........
                                                  #....#...................##................#..........#..#........#..#..............#...............
                                                  .................................#..#.............#.................#...#...................#.....#.
                                                  ..#................................#.........#................#..#......................#...........
                                                  ..#..#.............##..........#......................#..............#....#...#.....#....#.....#...#
                                                  ...........##....................##..#......#...........#..............................#..#........#
                                                  ............................#.....................#.................................................
                                                  ....#..........#.#........#...................#........#.....###....................................
                                                  ...#......#..#......#..........#......#....#..............#..........................#..............
                                                  #...............#..............................#..........#......................#..................
                                                  .#...........#..............#..#.........#.......#..........#..............#........................
                                                  .................#...................#........#..#................#.......#........#................
                                                  ..............#.....##.................#...........#...#.....................#.....#....##..........
                                                  .........................#.#................#......#....#............##.......................#.....
                                                  ..#....#....................#..#...#.....#..#...........................#....##..##.......#.....#.#.
                                                  .#.....................#.....#......#.#...#....#.#
                                                  ........#...........#.........#.....#....#........
                                                  ....#...................#....#...#.......#........
                                                  ................##.#........#..#..........#..#....
                                                  ..#...............##...#......#.............#.....
                                                  .#...................#.....#.................#....
                                                  ....#.....................#.....#.....#...........
                                                  #................#...............#.##..#.#........
                                                  ..#...#....#...................................#..
                                                  ................#...............#.................
                                                  .#......................#.....#.#....#............
                                                  .......#..........#..................#..#..#..#..#
                                                  ###..###......#.#..........................#..#...
                                                  .........#.........................##.............
                                                  ..##.........#.............#......................
                                                  ...#..............#....#.#....#........#....##....
                                                  ...........................#....##.........#.#....
                                                  .............#.................#...#.#............
                                                  .............#..#....#..........................#.
                                                  .#.......#................#..##.............#....#
                                                  #..#.......#.................#........#...........
                                                  ....#...........#..............##.#....#..........
                                                  .#.................#.......#...##..........#....#.
                                                  ..................................................
                                                  ..................#.#......#......#.....#.........
                                                  .........#.....#................................#.
                                                  ..#............##.................................
                                                  ......#...#................##.......#.............
                                                  .......#...##..#..#.................#....#..#.....
                                                  ..............##..#..............#................
                                                  .....................#......#...#.................
                                                  ......................#..#.......#.....#.##.......
                                                  ..#................#...................#..........
                                                  .....##..............................#..##..#.....
                                                  .............#..#.......................#.........
                                                  ........#..................................#..#...
                                                  .....#.#........#.#................##.............
                                                  .....#.........................#..#...............
                                                  .#..#...............................#.............
                                                  .........................#.#......................
                                                  .#...............#...#.##...#................#....
                                                  .#.#..........#........#..#...............#.......
                                                  .........###..............#.......................
                                                  .....#...................#..............#.........
                                                  ..#....#.................#................#.....#.
                                                  ......#......#.............#..........#......#.###
                                                  ...................#..............#...#...........
                                                  ..................................................
                                                  #........#.....##.........................#.......
                                                  ..#....#.......#................................#.
..##.................#....................##................#.....#.#.#........#.............#...#..
................#.........#................#........##..............................................
.......................#.##.................#.........#...........#.##...........................#..
.......#.....#.............#..#....#..................................#......#..#............#.....#
............................#.........................##......#............###..###.......#.........
....#......#...........................................#.#................................#...#.....
....#..........#........#..........#.........#........................##...#..............#.....#...
#.............##.....##..........#....###...#..........#..........#........#..............#...#.....
......#...............#......#.........#.....#.#....#......#................#........#......#.......
........................#.#...........#....#..#.........#............#.#....#.....................#.
.......................................#.....#..#...........#.........#...............#...#.........
.................#........#.........#...##...#.....#..........#.....#...............................
.......#........#..#..#..#......#........#.#........#.#...#........#.........#........##.#..........
...#..#..#.......##.............................#....#.#......#.....................................
.......#.#................................#.........#....#.....#....#.....#................#........
.....#..............##..#........#.........#..................#..........#....#.....................
............#.....#.................#........##...#.................#.#...........#.................
..............#.............##...........#...#.....#.#..........#..........................#........
#....##.....................#........##....#..................#.....................................
#.............................#..#..............#...................#............#..................
.....#....#.#........#.........................#...#................#.#....................#..#.....
....................#.............#..........#....#........#...#...#................................
.........................#...##...#.#...............#........#............#.........#.#..##.........
...#........#.##.........#.....#...#..............#.......#..#...#..........#...#.......#........#..
...#........#...##............#........#.............................##........##.........#.#....#..
.....##.#......#..#.............................................#..#........###.#....#..............
.................#...#.....#......#.............#.....#....................#.............#..........
.....#.......................#.#....##..........#..#......#....................#....#........#.....#
....#....................................#..............#...........#............#..#........#.#....
................#.....#....##.....#...#..#....#.......##............#.##.#.......................#..
.#...................................#.#..................#...#........#......#.....................
...........#.................#........#..#......#..................###...........##..#..............
.....................#.........#.#.......#..................................#....##.........#.......
..................#......#.....#.......#..........#............#..#...#.........#...#.......#.......
................#.................#..#.............................#..#........#....#..#............
.........................#.........................##............#..........##........#.............
...............##.......#........#.........................#.#......#.#.........#...................
...#........#......#...................#.##........#.#...............##.#...........................
.....#.#.........#.........#.#....#...........#.#.............#................#.#......#......#....
#.............#.....#.....###...........................#......................................#....
.#..#........#......#......#..#....#......#.#................#..#.#.........#..............#......#.
....#......#.......................#...#....#.............#......##.........................#...#...
.........#............#...#...#..........#.#.........#............................##....#.........#.
...........................#...........#.......#..#....................#..................#.....##..
......#....#.#.##.....#..#..........##.....#....#.........#......#......#..........#..#.....#.#.....
.........#.........................#....#.........................#..........#.#..............#.#...
................#................#..#...............................................................
..........#.........#..................#......................##..#..#........#...............#.....
.....#........#..#.........#...............................#...#.........................#..........
....#..#......#...#.......#..#.#.#.............#.........##..#.........#...................#.....##.
.....#.................#..........................
#..#.........#....#...................#...........
..#......#....#......#............................
..#...............................#...............
....#.#...#.........................#.#.........#.
#..............##...#..#.#.........#........#.....
..............#.......................###.........
#.#...#..............#...........#...........#.#..
..............................#...................
........................#.#...#....#..............
.......#...........................#..#...........
...................#......#.....#....#.#.........#
............##........................##.#.......#
.....#................#..............##...........
..............#........#...###................#...
..#....................#.......................#..
#..#.#......#......#.........#............#.......
......................#......#....................
....#....#..#....#............#....#..............
....##...........#.......##......#......#..#..#...
.#..........##...................................#
..................#..#...........................#
...............#............................#.....
...#.......#................#.#...#........#.....#
.......##......#...#...........#...........#......
..........................#......#..#.............
.........#.......#..........#.....................
.#.............#...........#....#.................
.....#....#................#..........#...........
...#.....................#.....#..................
.......#.............#.....#.#.........#..........
...#...........#..#.................#..........##.
....##.......................#.........#...#......
............#........#.........#.......##.#..#....
..............#...........................#....###
....#........#.#....#......#.#..#.........#.......
....#....................#.........#.........#....
.........................................##.......
........#....#..#.#..#.........#...#.........#....
.............................#..#...##........#...
...#.......#.......#...............#..............
......................................#......#....
.....#..................#.........................
#.....#.....#..#..................................
..#.....#..#...#................#.....#..........#
.....................#............#...............
.......#...................................#.....#
............#.#..#..#...#.........#...............
..##..........#...#..#........#..............#....
....#.....#..............................#........

23L18L48R15R47R38R29L34L19L43R3L35R3L49L30L34R17L42L18L20R2L44R50L42R26L8L20L30R42L2L8R15R46L12R15R38L10R43L2R42R11R43R47L27R49L28R2R14L26L13L21R36R20R28R40L49L4R34R35R34L43L50L2L48R31R39R6L26R37R1R28L43L23R46L5R15L41R11R23L36R40L47L33R37L25R36L22L12L42R26L44L41R45R13R38L4R29L15L2L6L23R21L1L19L22R28R43R19L43R7R10R19L1L40R45L49L45R37R7R9R40R41L13R29R13R24R47R30L17R50L6L13L40L5L24L46R30L42R36L33L50R46R15L50L6R4R33R6L41L32R25L43L20L45R47R40R41L31L19R44R33R2R46L2L26R25R3L11L36L34R4R48L13L17L49L49R45L35R21L27R8R41L25L13R45L32R35R44R33R39R36L10R19R49R1R23L49L22L12R33R20R13R20R26R27L17L25R48L1L40L15L43R45R6R47R48L46R48R7L33L50R14R14R31R32R21R34L15L34L19R14L14L41R37R14L50R32L11R4L41L22L20L34R49R32R6L2L8L20L37R2L18R15L3R16L42L15L43L38R4R39R35L50R36L31R12L50R22L25R12R15L37L42R26L23R6L22R37R8L40R29L44L46R36L32L17L16L31R27R46L49R19R12L25L33R28L16L2R20R37L40L13R27R31R23L23L12R18L44R49R3R50R27R31R3R31R21R20R37L7L47R33R13L20L45L25L14R47R32L50L33R6L30L38L40R34R8R13R48L10R22L2L5R43R31L9R25R34L9R38R46R44L24R16L24L35L49R9L3R16L15R18L39L6R23R7L38L17R34R25R35R28R1L30L48L13R21R27L22L17R40R27L9R27L4R7R20R14R39L13L2R31L1R31L44L31L35L7L49R21R14L20L33R43L41R16R19L9L40L27L48R49R44R2R12R16L10R26L40L45R32R19R10R24R36R41R5L8R41R30L27L22L20L47R30L26R17R37R16L3R19L13R37L26R16R33R46R25L41L25L2L27R7L49R29L42L1R47R27L33L20R26L36L15R41L27R17R27R42L15L14R30R1L25R15R2R16L1L2L5R29L13R30L11L26L26L39R41L50R32R25L8R1R10R6L8L45L36R28L26R40R31R46L28R36R39L19L41L23R12R25R48R11L10R6R5R23R47R34L34L8R12R48L48R27R40L45R28L8L11R45L34R39R4R41L4R37L15L23R28R1L34R41R46R11L46L29L33R49R14L22R14R32L45L23L1R35R2R12R43L2R8L13L22R27R31L36R4L1R13R38L40L40R36L33L21L39R39R33R17L31R31R32R27L36L4R46L23L37R12L16R37L1R35R16L49L15L39L37R48L32R30R15L38R42R46R42L10R47R18R27L14L48R16R42L15L29L15L1L25L28R28L5L11R42R35L22L7R21L2R49R26L43L32L14L11R33R19R21R17L50L28R37L20R15L18L11R20R14L4L32L29R44R22L42R39L2L39R33L34L5L18R25R11L3R17R35R38R30L17L6L24R13L30R20R30R28L5L31L50L46L3R32R28L43L20L23R32L43R33R50L31R29R48L12L28L11R25R14L15L25R5R1R20L44R25R31R20R29L9L37L7R12L33L44L28R36R50L19L24L9L29R5R45R20L21R22L41L25R24R27L38R29L2R23R34L3R34R11L35L26R34L27R27L14R28R19R28L47L5R30L17R44L5R49R17R48R49L15R48R4R44L9L3R28R4L6L40R24L46L34R40R26L29R4R38R20R43R47R36R19R17R45L34R19R11L4R41L23L50R34L45L15L38R38R18R4L15L26L15R49R22R14L33R37R22L20L19L23L9L40R30R42L44R22L41L20L26R32R29R40L48L18L43L48R46R24R25L15R37L32R22L22R17R27L28L28R15L38L36L20R7R35R38L42L22R24L27L2R39R9R1L6R15R12R7R50R26R20L41R44R27R42R40L50R12L50L37R46R45L7R27R45R5R5L37R34L24R25L1L5L35R20R29L11L45L1L1L18L43L38L50L1L18R48L18L24L9L1R28R8R6R46L9R18R4R33R49R28R35L18R45R27L46R10L41R20L25R49R49R50L25R30R20R45L47R41L39L50L39L5R36R46L28R42L45R11R2R3L18R15L43R48L35R21L20R49R47L33L31R10R7L20L30L35R25L16L49L41R44R49L31R10R40R17R30L16L17R17R13R46L32R46R34R46L23R40L38L13L20R46R27L38L48L2L26L32R30L29L15L41R19R13R46L28R6R23L26L40R24R40R4L7L21R40L5R34R31L6L12R19R42R29R31L19R8L15L30R10L42R33R6R20L48L26R19L24L34R4R47R26R31L44R47L14L9R41R41R38L7L38L30L37L13R23L44L15R48R33R18L49L20L26L39L8L24R50L19L33R27L27R23R24L36R12L22R23L34L49R2L14R45R38R23R46R18L40L39L20L24R46L34L15L1L44R28L20R23R18L19R27L15L1R34R35R1L26R47R12R26R7L18R36L16R48R37L18R18R29L16L21R24L45R27L15L32L48R38L6R48L44L29L2R47R50L13L32R40R48L9L46L1L50R8L3L13L13R30L10L36L8L13L33R13R14R36L16L24L38L7R1L22L48L36L22L39R44R24L44R21R20R17R1L17L19R50L45R6R6L13L12R25R2R37L43L46L34R1L26R9R17L25R2L5R31R20R33L44L3L43R12R40L32L7L4L39R38R18L7L14L21R21R15L30L50R6L6L37R5R24L39R19L27L28L47R20R31L15R31L23R1L2L43R39R36R18R30R21R3R34L35R35R25R38L40R27R20R47R23R45L20R3R41L17L40L3R14R37R22R48L47L40L43R1R33L6L43L28R17L48L28R32R24R39R22L31R30L18L36L13L12R24R16L20L26R47L20L6R25R28R43L32R47R12R49R32R10L24R15L50L39L41L16R25R40R28R31L9L50L37R24L15R7L26L22R49R33R50R38L46L17R29R29L21L35R20L50R7R26R36R29L47R44R25R29L1L41L50L25R30L1L22L12R6L7L32L33L19L34L31R5R25R28L12R5R35L34R41R50L8R20R28L3R48L7R10R26R16R17R38R35R31L7L48L50R37L46L31L36L46R45L50R18L46L39L26L48R38L11L37R50L48R43R17L31L41R38L31R19R11R41L46L12L14L45R24R33R23L25L16R7R24R39L21R18L31R33L49R4L33L32L3R29L37L40R4L33L16L9R7R30R34L37R13R8L50L4R49R50L17L50L2R11L32L34L21R6L49L16R46R27R25R14R35L46R21R5R43R16R28R43L4L24L26L2R26R15R41L2R37L33L6R37L39R29L43R34R14L28L14R50L48R21R32L4L7L47R26R34R16R47R19L11R19R40L24R47L8L13R47R10R43L23L10L34L1R27R15L32L40L18L40L45R41L50L28R9L9L41R19R6L26R45R5R49R21R45L21L48R5R43L25L44L15L4R46R45R35L8R21R33R10L7L5R22R12R10L28R43L49L33R28R12L3L24L21L28R7L1L42L12L50R26L28L19L3R39R10R27L17R16L12R36L22L40L38L30R16R10L2R39R18L20L24R11R14R8R37R45R16R33L29R2R27L8R22R15R21L26L14R40R27L50L30R24L31L9L9R31R49L21R42L19L19L5R24L34R47R6R25R21R15R24R43R25L4R14R9L5L42L15L40R18R33L47R37R22L38R1R35R41R39L34L46L27L2R18L42R13L49R46L49L15R39R13L24R36L29L5R18R44R36R37L6R48R39L27R11R16R35L48R47R44L42R29R12L30R20L50R17L11L32R27L11L49L43L9R18R2R33L15R5R24R28R45R41R10L43R46L44L36L21R4R27L8R7R13L46R25L43L4R44R28R38L27L11R45L25R17L13R26L4L33L20R39R25L16R28R36L10L14R13L46L25L22R44R20R5L11L32L10L32R1L20R5R15L34L23R24R2R25L36R39R15L10L26L13L42L21L8L22L9L25R9R3R40R50R15R29L10L27L13L20R32R5R4L2R11L25L29L22L5L6R22R49R18L24L45L40R4L3L41L12L8R5L29L26R22L40R20L7L6L18R39R24R22L9L41L32L30L21L15R10R32R31L31R8L5R3R5R41R48R16L35R37L33R9R27R25L4L15L34L18L45R22L22L32R31L32R41L10R41R45R34R36R20L46L40L37L22L21R8R23R50R32L40R24R43L47L36L46L19R1L23R48L25L8R5R21L13R27R28L14R12R49L31L22L19R8R41L14R3R45L49L15L3L6L48R9L14L11R44L31R35L25L47R6R29R35R49L16L38L7L2R8R50R50L22L30L38R38L3R28L14L3R12L50L18L5L6L17L35L16L36R28R5R17R29R27R20R20L23L38R44L28R6R29R5R28R1R34R2R33L49L42L11R11R17L27L25R49R48L9L19R10R1R33R27L35L35R45R13L23R14R14R50L39L10R34L33R39L42R7R16L43L38L19R8R12R37L20L2R16L32L30R24R38L45L24L19R43L19R25L41R46R48R49L36R40L12L13L29R38L27L24R45R6L20R12R7R29`,W3=`.#.....####..##.#.#.####.####.##....#...###...##...#.#..###.##.....#.#
.##..##.#.#...####....#.###....##..######...#..#...#..####...#...#.###
#...#.###...#...###.##.....##.#.#....#..###..#.##..........#....###.##
##..#...###..####.#.#.###..###...##.#....##....###.#.##.##.#.###.###.#
##.#..#..###.#.#.####.#..#.#.####..###.#.#.#.##.#...#.#..#..#####..##.
...####..#.#.####.#.#.##.###.#.#.#.##...#..#.####..#.#.#.##.......###.
..###.#.###...##.######......#.##........#.##......#....#...##.#.##..#
#....###..##.#####..##.#######....##.#..##.##..#..##..##.###.......#.#
#.#....###.#..#...####...##.##.#....#.#.#.#...##..##........#.#.###.##
..#....##....####...##.#.##..###.##.#..##...##.##.##..##..#.#.###...##
##.##.#..###.#.##..#....###...####....#.#.#.####.##.##.#....##...#.###
##.####...#....#....#.#.#.#...#...#...####.###..#.#..##.##..##.#.#....
##...#####...#.#....##....##..#.........#.#..#######.#.##.#.....#.....
##....#..#....##.##..########.#...#....#..###...#....#.#.#..#.##.....#
..##..#....##..#.#..###...#..###.#.##..##....#..#.##...####.##.##...#.
#...##..##.###..##....#.##..##.#.......####.#.#.#.###..#.#...#..###.##
.##..##.#.##.#.#.#####.#.#.#...#..##..##.##.##..#.##...#####.##..##.##
.##..###.#..###.#...##.###......##..#.###..#########....##.##.#..##.#.
.##.#.##.#.#..#.....##.###.#..##......#.##...#....###.##..##.#....#..#
#..#..##...#.#....###..#..####.#..##.######.#..#.#....##.##.#.#.###..#
#......#.##..#..##.#.#..##..#...###.#.####..##..##.#..#.##.#..##..#..#
#..#.###....#..#.......#####.##.#..####.#.##...##..##.####.####.....##
#.#..#...###.##...####.###..#.######.##.##..#.###.#..#.#.#######......
.####.#..........####.#.#.#....#...#...#..#..#...#.###.#..##..###..#..
.###.#...####.#.#.#.#..###.#..####..##.####.###..#...#...##..#.#.###..
##....#.#....##..####..##.#.#.##...#.#.#...#.#.#.#....##.....###..##..
......#.#..###..##.#.#..#.##.####...####..####......#.##.#.#..##......
#...########.##.##..##.#..###.##.#.#..#...##.#.#..###.##.#..#..#.##.##
##..#.##.###.##...##.##....#.#.#..#...##.####..#.#####.####.###.#..#.#
##.#.#....###.#......#..##..####...###.......##.....#...#...###..####.
###..#####.#.#....##......##..#...#......#.##.####.#.####..###.#.#.###
#.#..#.###.#....#.##....###.###.#.##..##.#..####..###...#...#..####...
#....##.#.#...#..#...#########.###.#.....#..#..#..#.###...#.##...###.#
##...#....#.###.#####...##.##..#..#.##.##..###.#..#..######.#.#.##.##.
...#..##.#..####....##..#..###.#.######.###.#########..#..#.##...#..#.
###.##..#.#..###.#.......##.##.##.#####....#####.##.##.##..####..####.
.#####..#.#.#...##..#.#...#######.......###..#.####.#..##.######.#.#..
#.#..#######....##.#.#..#.#..###.#.#...##.#...#..#....#.####..#..#....
##..#.#...#..#######......#..#.#...#########.#.#..#...#.#####...###.#.
.######.##..#.#..##.........###..####.....##...#..#..#...##.##.######.
#####.#####.#..#.###..###..#...#.##.#.##.###.#.#.###.#####...#.##..#..
#...#.#...##......####.#..#.##..#..####....#.#.#...#.#.....##....#...#
####.###...##...#..#..###....#.##..#.#.##...###...#.#.#.....#.##..#.##
.#.###.#.##.#.##.#..#....#..#.####.#.#.......#..#..#..#.#.#..#..#..#.#
..#......#.#.###.#######.#...###########.##.##.##..##.##.....#.#..##..
##..#.#.#..###...#...#######..##.#.#.##.##..#.#..##.....###..#.##.###.
#...###....#.#....#####.####..#..#.#.#...###....#.#.#.##...####..#...#
##.####.#...####.##.##.#...#..#..##...#.##..#.#.#...#.#...#..#####.##.
###.#.#..#..###..##.#.#....#..#...##.#..##.#.##...##.#....##.#.#..##..
..#....##..####..#..######.##..####.#...##.#.##.###..#..##..##.##....#
##.###.##..#.....##.#.##....##.###.#.##..##.#...#...#.#..#..#.#.##....
.#..##.....###....#....###..###..#..#.#..#..####.#..###.#.##...##....#
#.#..#..#..#..####.####.....######....#...##.#..###.#...#.#.#.#.###...
##..#..##.#.#.##.......#.####.#.#.##.#.#.#..#.####.#.#.#####......#.#.
##.#.#...##....#..##..#......######.#..#.#.###.......##.#.##.#...#####
##..##########..#..#.....##...####.##.#.##..#.......######.#.##...#.#.
#.##.#.########.##..##.##..#.#.#...#.#..##..#...#..##.#.#####.#.#.###.
.###.#....###..######.##.########.########...##.#.#####.###.##..#.#...
....#.#.##.##..#####..#####.#.#.#...####.#.#..#....#.#.##...#..#.#.###
.#####......#.##.#######.#.#.#.##.#.#####..##..##.....###.##.###..#..#
#...#..#.#####.#.#...#..#..####.#..####..###.#...#.#.....####.##.#####
#..##......##...##.#..##.....#.##..#..##.##.#.#.#.......##.##..#.####.
#######..###.##.##.###.##..#.##..#...#.###....#.###...#...##...#..#..#
..######...##.#.#..#####.#.#######.###.....##.#.###.......##.#####..##
.#..#####.......#........#...#..###.######...####.#..##...###.##.....#
..##......#..#.####..##...#..###..##.....#..#...#..#.##.##....#.###...
#..####.##.#..###.##.##.#...##....#.##.#.###.##....####...#.....##.#..
..####...###.##.#..#....###...#.....######.####...##.##.#...#...####..
..#...#.#..###.#......##...##...#.....###.####.....##.#.#..###.#.#.###
..######..##...#..###.#....#..####.##..#...##.##..###.######.#..#.##.#`,E3=`#.########################################################################################################################
#<<<^<^^>v<<^<^><><v<^<<.v^><<<v>><^v<vv>v<vv>^>>^^^^.>>^vv<^<<>^.vv.<>>v>v^>^<><.vv^v.^<^v>^vv<^vv<<>v<<>><<<v^^>v><<<^>#
#>^^v><.<>>v.v.^>v^..>^<vv>v^><v^<<>v>>.^v^vv^^>.^><^>>^>vv>>v^>vvvv^v^vv<<^<^>^>^v<v^>><><v^^^<v.^v<>^.>v><vv.^<^^^^<>>>#
#<<.><>v<>.v^<^^v<^^>.^.>>v.^^^v>^^^.<><.^.<>>^<>.v><^^^>^>^^^^><vv^.v^<<^v>v^^^<<<^<..^vv><.^v<vv^>>vv>v.><v^>>^<v^>>vv>#
#.><^v.>^v>>vv><^>.>>>>>^.>>.>^v>v^>v^^>v^^..>^.^<^.v<>v<<<^^^.vvv>>.<>^vvv>>.^<^v^>^<^<vv>^>^.<>^<<>v.<<<.^<>^>.<v.vvv^>#
#>><v<>.v><<^^vvv<<<^>^v^v><^>^<>>v.<.<>^<>vv>vv>^.v><<<^<v^vvv.<<<><^<^<^.^^vv>^v^^v<>>vv^<^.^v^v<v^>^.>.v>v^^<v<^<>^>v>#
#>>><v<.>>v^<.^vvvv<v<^<<v>>v>vv.^><v^.>>vv><<.<^.^v>^^><>^<^v<vvvvv<<<<^^>..>>>v^^>.vv<>.^^^.<v>v^>>^>^^>v^v^^<.>>^^<.<>#
#<<v>>v<>^><^v<>^>vvv..v.^.<^.v.vv^.<.v<>v>^<^v^<^>><.<>v^v>^<<^<v^^<v^<v^.<v><<<>^^<><>.v><^^^<<^<v>><vv<^<^.^<<^.^<<v>>#
#>>>^^>v^>^>>v><<>^<v><>>^>.<v<<>v<>^<>^v.<<^.^^^^>^.v>v><v^>vv^^^.>v^<v^^v<<^.vv^>vvv>^>>v<.^^vv<<v.v..^v.^vvv.<.>^<^v>>#
#><^vv^>>v.<^<v^^><v^>^><<<v^>v><v^^>><vv^><.>>^vv>><vv<^v^v^>^>>.vvvvvv<>>>.>^<vv^<vv<<<^^v^>.v><^.<<^<>^^>.^v><^^vv.^>>#
#>..<<v<<>>.<^v<<.>v^<..^<^^v^>.><.<v>>v><<>^>>v<vvv>>v<v>.vvvv<.<<<^<^v>^<v^>>v.^v^<^v..^..<^<><>^<<>^>^<<^^.>^^<v<>v<><#
#<v^v>v<^^<v>>vv^v<..^>v>>>.>^^<>>>^..>>>^<<^<^<>^<v>>^>>><^v^v^<.^<<<^v^.^^^<v>>><^^<>>><..vv.^.^<<v^v.>>^v^^><>><.v^>v>#
#.<^^<v>v.<v<^.^v^<.v^vvv^vv^<..v<.>>>v<<>>vv>>^.>^.v>vv>.v^<<v^>>v.<^^<^<<>^^.^^>^>>^<^<<^^vv^^.<.><^.>^^<>v<.^v<>v><v<.#
#>^.v^^><^<.>^v>v><>>>..>.v>vvv<<vv^.>v>.>v.<^vv.^>^vvv>.>v^v>>.>^^<<>>.^.>>>^>v<>v>v^^<>^<^.^><.vv^^<<.^v>>.>>>.^>^^^^^<#
#..^>vv><^^.>>^^.<<<v..<<>^.<.<^^.v<<<^<<>><>v>v<^^^.<><^<<>v^^<^v^>^v>v<<^<<v<><<>.><..<^vv^<.><>^^><<.>>^.^v><>v^<^v>^>#
#><<>v>.>^<<v>>>>>^>v..<vv<^<v>>^<<^v<v<<<<.v^>v.v<^>>>v.^><^><>.<>.^v><><<v>^^^^.<<.>^>><>.<<.<^<.^>..^>^.^>^v^v.<.^v>><#
#><><^v.<<<<>>v<<<<^v<<^^<><<.>^^.^.^.<>vv<<<v>^<><^^<^>^>^^.v<^>>vv^v.>^.<<><vv>>.>.<><^<.<<>.v>.^>>>^<<>.<v>^^v^v^<>.<<#
#<^>^v^>v^v.<^^>.^>^<<>.<.<<vvv>v>v^v^vvv>v^v^v<^^^<^>>v.^v.^>v><.^^^<>^>^^vv.v>>>^v<<>>^<^.v^>>>><v>v><^<.^v^v^^.<<>><^<#
#>^>v.><v<^<><>><v<^^<^><<<<^v>^<v^>v<<>^>>.><v<v<^^>^<><><^<.<.<><v^^.^>>v^v^.>><vvvv^v^vv><<^<<^>.v>>>vv>v^v^^<v^^>^>><#
#<<v^^>vv^^v.<<v<v<^><^v.>.<^v^>^^>^<^^v>>v<^^vv<>^v^.^v<>.<^^>^^v><>^^v.><.v^^>.<<.v^<v<^<>^<^><v^>.>^v>v<v<.>v<.<v.>.<<#
#>^<<v^vv..vv^v><>>>^>v.>v^..^>^vv>^^>v^v<>.><v<<<<^><>v^.v^>.>^vv>vv>.>^<<.v<^^v^<<>^^^>^.<.v>^><.<^<^>>><.<<^^^>^<^<v<>#
#<^><v<v><<<>v>>vv.>^<v>><>v>^.v^<v><<^<>>^<^^.<v<<vv>^v.v.<vv<^<<^>v>v.<<<v^><^^>.>>v>.<^vv.^v>^^^<><<^<>>><v^v>>>v<^>v>#
#>>>^.v><<<>^v<.<.^><v>><>.<.<>v^v>>>^<^^vvv.vv<v<^^^>><^v>>>v>v<>v<v<vv^.^>v<>^>>>^<<v<vv^>><.v<^v<v^<.<>v>^>^><.>v<>.><#
#<^<v>v.vv>vv^v<.>>.v.^..>^v<.v><>^<.^^<v><^.v^<v^vv^^v^<>>^<^><v.vvv^>.^v>><<>><<<>.<v^<^.<vv^.v<><v^v^>^v^>v<<v^>vv>^v>#
#<><.v.^v>>><^.<.^<<v>^^><<^>>.^^.v>vv^^.v>^<<^^<<<^>>^>^>v..^v><>v<vv<<v^v<>>><v>^v<><.>v>v>v^^.^>>vv^v.vv<>v^<><^^><vv<#
#<<v<v>^><^v^<^<v>><.v<.>^vv^>^<v^v>v<.vvv<v<^^>^^^^v^<<v^>v<v^vv>.^vv>v^.>>.^<.>>v<..^v.>^<<v<vvv^<..^<<>^^>v<<><^^><>>>#
########################################################################################################################.#`,k3=`1-0-0020
1=0---1=1=201
10=02-0=1
1-12-=111201-1212
110=-222=0201=
10--2=20
2=12=-02222021=02-
1-1-1=-1
2=2=2--00-2121=02-1
201-1-210-
1212-11=
2=---10
2=1-02200001211
1===1-2==2-1
10=--=-=00
22-0=
2==0-1022=02
11221=-==-1-20-0
100
10-=22===1=00=0
2=0
1=1=0101=20
2--0=02-11021-
1222011-2--2=
22
20==00=122
2=1-010
20-=222-=2-1002-2
2=
122==01==12202-=
120202
2112=2-0202-12-02
1-=
11=
1101-1==2--
1=0=00=2=0-=02
1021--
1=02-=201122-=12-1
1==0=200=02=2=-2=22
1=21=10211-2222
21-0
1==21=
12=-220002-1=-21=2
1100-=-
1201=02=-111=00-0=
10=-=0122100==1--2
21=-12
10=21-0-2-200022
2102=-2--=1-2=2-1
1=1211101
2002=02--===
1200-
11--20-=-
10-20-0
1=2=
20100-22-0
12==-1
22=0011
2-200222=1121
201-2-=2==00-
1=-=0=--0===2
21=----2==020
1=1-20-=1=-02-2--2=
21
1=202110111=000
2-22-002=
10=1-001
1-002-221000=02
2==---1-0
1012=0--=00--10
1-2=21-2
1=1
11-
1-10--122-12
20
1==
2010=-2-2==2=--
1=11=
10-=
1=-=2--2-110=100
100==--01==
1-1-20=--1-2-0212
20-1001002-
2=1-
1==-2-0-102=-
1-1
12-1-0=2=-22--=10
10=21-02--=-=22
110210-12210--1-=-
1==1--2=21
1-0200=2-2-
22==-00=-
1-=2=-20-202=20111
2=0=-1=
1=-212=1=2
10-220=02
100-
1==02=0021
10=-1222-
1-212==
12-012=
1-0-102-1=-=-01=1-=1
1-
11211
2-0
1=0=
1=0=111000--=12=1
1-1-011==0102-
2==02202=2-=2
11---01-=--=2-02
1==0120-01=0-=0
1=-=2=1-=0=0==212=
212211110=
1=20101-==1`,I3=`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`,O3=`A Y
B X
C Z`,K3=`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,n4=`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,c4=`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,t4="mjqjpqmgbljsphdztnvjfqwrcgsmlb",r4=`$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`,o4=`30373
25512
65332
33549
35390`,v4=`R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`,s4=`addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`,a4=`Monkey 0:
  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3

Monkey 1:
  Starting items: 54, 65, 75, 74
  Operation: new = old + 6
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0

Monkey 2:
  Starting items: 79, 60, 97
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3

Monkey 3:
  Starting items: 74
  Operation: new = old + 3
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 1`,d4=`Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`,l4=`[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`,e4=`498,4 -> 498,6 -> 496,6
503,4 -> 502,4 -> 502,9 -> 494,9`,m4=`Sensor at x=2, y=18: closest beacon is at x=-2, y=15
Sensor at x=9, y=16: closest beacon is at x=10, y=16
Sensor at x=13, y=2: closest beacon is at x=15, y=3
Sensor at x=12, y=14: closest beacon is at x=10, y=16
Sensor at x=10, y=20: closest beacon is at x=10, y=16
Sensor at x=14, y=17: closest beacon is at x=10, y=16
Sensor at x=8, y=7: closest beacon is at x=2, y=10
Sensor at x=2, y=0: closest beacon is at x=2, y=10
Sensor at x=0, y=11: closest beacon is at x=2, y=10
Sensor at x=20, y=14: closest beacon is at x=25, y=17
Sensor at x=17, y=20: closest beacon is at x=21, y=22
Sensor at x=16, y=7: closest beacon is at x=15, y=3
Sensor at x=14, y=3: closest beacon is at x=15, y=3
Sensor at x=20, y=1: closest beacon is at x=15, y=3`,f4=`Valve AA has flow rate=0; tunnels lead to valves DD, II, BB
Valve BB has flow rate=13; tunnels lead to valves CC, AA
Valve CC has flow rate=2; tunnels lead to valves DD, BB
Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE
Valve EE has flow rate=3; tunnels lead to valves FF, DD
Valve FF has flow rate=0; tunnels lead to valves EE, GG
Valve GG has flow rate=0; tunnels lead to valves FF, HH
Valve HH has flow rate=22; tunnel leads to valve GG
Valve II has flow rate=0; tunnels lead to valves AA, JJ
Valve JJ has flow rate=21; tunnel leads to valve II`,p4=">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>",h4=`2,2,2
1,2,2
3,2,2
2,1,2
2,3,2
2,2,1
2,2,3
2,2,4
2,2,6
1,2,5
3,2,5
2,1,5
2,3,5`,b4=`Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 2 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.`,g4=`1
2
-3
3
-2
0
4`,w4=`root: pppw + sjmn
dbpl: 5
cczh: sllz + lgvd
zczc: 2
ptdq: humn - dvpt
dvpt: 3
lfqf: 4
humn: 5
ljgn: 2
sjmn: drzm * dbpl
sllz: 4
pppw: cczh / lfqf
lgvd: ljgn * ptdq
drzm: hmdt - zczc
hmdt: 32`,L4=`        ...#
        .#..
        #...
        ....
...#.......#
........#...
..#....#....
..........#.
        ...#....
        .....#..
        .#......
        ......#.

10R5L5R10L4R5L5`,j4=`....#..
..###.#
#...#.#
.#...##
#.###..
##.#.##
.#..#..`,Y4=`#.######
#>>.<^<#
#.<..<<#
#>v.><>#
#<^v^^>#
######.#`,R4=`1=-0-2
12111
2=0=
21
2=01
111
20012
112
1=-1=
1-12
12
1=
122`;var Sn=Object.assign({"./day01/solution-01.js":$1,"./day02/solution-02.js":S1,"./day03/solution-03.js":V1,"./day04/solution-04.js":G1,"./day05/solution-05.js":N1,"./day06/solution-06.js":I1,"./day07/solution-07.js":t2,"./day08/solution-08.js":s2,"./day09/solution-09.js":e2,"./day10/solution-10.js":h2,"./day11/solution-11.js":j2,"./day12/solution-12.js":q2,"./day13/solution-13.js":u2,"./day14/solution-14.js":$2,"./day15/solution-15.js":S2,"./day16/solution-16.js":V2,"./day17/solution-17.js":J2,"./day18/solution-18.js":W2,"./day19/solution-19.js":O2,"./day20/solution-20.js":v3,"./day21/solution-21.js":l3,"./day22/solution-22.js":p3,"./day23/solution-23.js":w3,"./day24/solution-24.js":R3,"./day25/solution-25.js":A3}),Mn=Object.assign({"./day01/input-01.txt":C3,"./day02/input-02.txt":u3,"./day03/input-03.txt":B3,"./day04/input-04.txt":D3,"./day05/input-05.txt":Z3,"./day06/input-06.txt":$3,"./day07/input-07.txt":_3,"./day08/input-08.txt":U3,"./day09/input-09.txt":y3,"./day10/input-10.txt":S3,"./day11/input-11.txt":M3,"./day12/input-12.txt":T3,"./day13/input-13.txt":x3,"./day14/input-14.txt":V3,"./day15/input-15.txt":X3,"./day16/input-16.txt":F3,"./day17/input-17.txt":P3,"./day18/input-18.txt":G3,"./day19/input-19.txt":J3,"./day20/input-20.txt":H3,"./day21/input-21.txt":Q3,"./day22/input-22.txt":N3,"./day23/input-23.txt":W3,"./day24/input-24.txt":E3,"./day25/input-25.txt":k3}),Tn=Object.assign({"./day01/test-input-01.txt":I3,"./day02/test-input-02.txt":O3,"./day03/test-input-03.txt":K3,"./day04/test-input-04.txt":n4,"./day05/test-input-05.txt":c4,"./day06/test-input-06.txt":t4,"./day07/test-input-07.txt":r4,"./day08/test-input-08.txt":o4,"./day09/test-input-09.txt":v4,"./day10/test-input-10.txt":s4,"./day11/test-input-11.txt":a4,"./day12/test-input-12.txt":d4,"./day13/test-input-13.txt":l4,"./day14/test-input-14.txt":e4,"./day15/test-input-15.txt":m4,"./day16/test-input-16.txt":f4,"./day17/test-input-17.txt":p4,"./day18/test-input-18.txt":h4,"./day19/test-input-19.txt":b4,"./day20/test-input-20.txt":g4,"./day21/test-input-21.txt":w4,"./day22/test-input-22.txt":L4,"./day23/test-input-23.txt":j4,"./day24/test-input-24.txt":Y4,"./day25/test-input-25.txt":R4});function z4(t,n,c,o){this.day=t||"0",this.input=n||"",this.testInput=c||"",this.part1=o.part1||null,this.part2=o.part2||null,this.knownAnswers=(o.knownAnswers||[]).map(r=>String(r))}function q4(){var t={},n={},c={};Object.keys(Tn).forEach(a=>{var s=/input-(\d+)/.exec(a)[1];t[s]=Tn[a]||""}),Object.keys(Mn).forEach(a=>{var s=/input-(\d+)/.exec(a)[1];n[s]=Mn[a]||""}),Object.keys(Sn).forEach(a=>{var s=/solution-(\d+)/.exec(a)[1];c[s]=Sn[a]||null});var o={},r=Object.keys(n).sort();return r.forEach(a=>{var s=n[a],v=t[a],d=c[a];o[a]=new z4(a,s,v,d)}),o}function xn(t,n,c){const o=t.slice();return o[27]=n[c],o}function Vn(t){let n,c=t[27]+"",o,r,a;function s(){return t[11](t[27])}return{c(){n=$("span"),o=vn(c),C(n,"class","button svelte-1njwvcq"),W(n,"current",t[27]===t[2])},m(v,d){Rn(v,n,d),q(n,o),r||(a=[N(n,"keydown",A4),N(n,"click",s)],r=!0)},p(v,d){t=v,d&2&&c!==(c=t[27]+"")&&wn(o,c),d&6&&W(n,"current",t[27]===t[2])},d(v){v&&pn(n),r=!1,I(a)}}}function Xn(t){let n,c,o;return{c(){n=$("span"),n.textContent="run all",C(n,"class","button run-all-button svelte-1njwvcq")},m(r,a){Rn(r,n,a),c||(o=[N(n,"keydown",C4),N(n,"click",t[8])],c=!0)},p:cn,d(r){r&&pn(n),c=!1,I(o)}}}function i4(t){let n,c,o,r,a,s,v,d,l,e,m,f,p,h=t[6][0]+"",g,w,L,j,D,B,y,S,x,G=t[6][1]+"",M,T,i,_,Y,b,z,R,A,Z,U,E,X,O,J,tn,An,Cn,rn,un,k,hn,Bn,K=t[1],H=[];for(let u=0;u<K.length;u+=1)H[u]=Vn(xn(t,K,u));let Q=t[1].length===25&&Xn(t);return{c(){n=$("div"),c=$("h2"),c.textContent="Advent 2022",o=P(),r=$("div"),a=$("div"),a.innerHTML='<h4 class="svelte-1njwvcq">Days:</h4>',s=P(),v=$("div");for(let u=0;u<H.length;u+=1)H[u].c();d=P(),Q&&Q.c(),l=P(),e=$("div"),m=$("h4"),m.textContent="Output 1:",f=P(),p=$("div"),g=vn(h),w=P(),L=$("textarea"),D=P(),B=$("div"),y=$("h4"),y.textContent="Output 2:",S=P(),x=$("div"),M=vn(G),T=P(),i=$("textarea"),Y=P(),b=$("div"),z=$("h4"),z.textContent="Input:",R=P(),A=$("br"),Z=P(),U=$("span"),U.textContent="Real",E=P(),X=$("span"),X.textContent="Test",O=P(),J=$("textarea"),tn=P(),An=$("div"),Cn=P(),rn=$("div"),un=vn(`Catch errors
      `),k=$("span"),k.textContent="x",C(a,"class","label svelte-1njwvcq"),C(v,"class","day-list"),C(m,"class","svelte-1njwvcq"),C(p,"class","time svelte-1njwvcq"),C(e,"class","label svelte-1njwvcq"),C(L,"name","output1"),C(L,"id","output1"),C(L,"rows",j=mn(t[5][0])),C(L,"class","svelte-1njwvcq"),W(L,"known-good",t[7][0]),C(y,"class","svelte-1njwvcq"),C(x,"class","time svelte-1njwvcq"),C(B,"class","label svelte-1njwvcq"),C(i,"name","output2"),C(i,"id","output2"),C(i,"rows",_=mn(t[5][1])),C(i,"class","svelte-1njwvcq"),W(i,"known-good",t[7][1]),C(z,"class","svelte-1njwvcq"),C(U,"class","button input-toggle svelte-1njwvcq"),W(U,"current",!t[3]),C(X,"class","button input-toggle svelte-1njwvcq"),W(X,"current",t[3]),C(b,"class","label svelte-1njwvcq"),w1(b,"align-self","flex-start"),C(J,"name","input"),C(J,"id","input"),C(J,"rows","14"),C(J,"class","svelte-1njwvcq"),C(k,"class","button input-toggle catch-button svelte-1njwvcq"),W(k,"current",t[4]),C(rn,"class","catch-area svelte-1njwvcq"),C(r,"class","layout svelte-1njwvcq"),C(n,"class","outer svelte-1njwvcq")},m(u,V){Rn(u,n,V),q(n,c),q(n,o),q(n,r),q(r,a),q(r,s),q(r,v);for(let F=0;F<H.length;F+=1)H[F].m(v,null);q(v,d),Q&&Q.m(v,null),q(r,l),q(r,e),q(e,m),q(e,f),q(e,p),q(p,g),q(r,w),q(r,L),nn(L,t[5][0]),q(r,D),q(r,B),q(B,y),q(B,S),q(B,x),q(x,M),q(r,T),q(r,i),nn(i,t[5][1]),q(r,Y),q(r,b),q(b,z),q(b,R),q(b,A),q(b,Z),q(b,U),q(b,E),q(b,X),q(r,O),q(r,J),nn(J,t[0]),q(r,tn),q(r,An),q(r,Cn),q(r,rn),q(rn,un),q(rn,k),hn||(Bn=[N(L,"input",t[12]),N(i,"input",t[13]),N(U,"keydown",u4),N(U,"click",t[14]),N(X,"keydown",B4),N(X,"click",t[15]),N(J,"input",t[16]),N(k,"keydown",D4),N(k,"click",t[17])],hn=!0)},p(u,[V]){if(V&518){K=u[1];let F;for(F=0;F<K.length;F+=1){const Dn=xn(u,K,F);H[F]?H[F].p(Dn,V):(H[F]=Vn(Dn),H[F].c(),H[F].m(v,d))}for(;F<H.length;F+=1)H[F].d(1);H.length=K.length}u[1].length===25?Q?Q.p(u,V):(Q=Xn(u),Q.c(),Q.m(v,null)):Q&&(Q.d(1),Q=null),V&64&&h!==(h=u[6][0]+"")&&wn(g,h),V&32&&j!==(j=mn(u[5][0]))&&C(L,"rows",j),V&32&&nn(L,u[5][0]),V&128&&W(L,"known-good",u[7][0]),V&64&&G!==(G=u[6][1]+"")&&wn(M,G),V&32&&_!==(_=mn(u[5][1]))&&C(i,"rows",_),V&32&&nn(i,u[5][1]),V&128&&W(i,"known-good",u[7][1]),V&8&&W(U,"current",!u[3]),V&8&&W(X,"current",u[3]),V&1&&nn(J,u[0]),V&16&&W(k,"current",u[4])},i:cn,o:cn,d(u){u&&pn(n),b1(H,u),Q&&Q.d(),hn=!1,I(Bn)}}}function mn(t){var n=String(t||"").split(`
`).length;return Math.min(n,Math.max(n,1,10))}const A4=()=>{},C4=()=>{},u4=()=>{},B4=()=>{},D4=()=>{};function Z4(t,n,c){var o=b=>new Promise(z=>setTimeout(z,b)),r=[],a="xx",s="",v=!1,d=!0,l=["",""],e=["",""],m=[!1,!1],f=q4(),p=()=>Object.keys(f).filter(b=>!!f[b].part1).sort();r=p();var h=!1;async function g(){if(!h){h=!0,c(5,l=["",""]),c(6,e=["",""]),await o(5);var[b,z]=await w(a,1,s);L(1,b,z,a),await o(5);var[R,A]=await w(a,2,s);L(2,R,A,a),h=!1}}async function w(b="",z=1,R=""){var A=performance.now(),Z=(f[b]||{})["part"+z];if(!Z)return["",0];if(d)try{return[Z(R),performance.now()-A]}catch(X){var U=String(X),E=/:(\d+:\d+)\)/.exec(X.stack||"");return E&&(U=`(${E[1]}) ${U}`),[U,performance.now()-A]}else return[Z(R),performance.now()-A]}function L(b=1,z="",R=0,A=""){c(5,l[b-1]=z,l),c(6,e[b-1]=`(${Math.round(R)}ms)`,e),c(5,l),c(6,e),A&&(c(7,m[b-1]=D(A,b,z),m),c(7,m))}async function j(){if(!h){h=!0;var b=["",""],z=[0,0],R=[!0,!0];r.forEach(async A=>{var tn;for(var Z=1;Z<=2;Z++){if(!(A in f))throw"";var U=f[A]||{},E=v?U.testInput:U.input,[X,O]=await w(A,Z,E),J=D(A,Z,X);R[tn=Z-1]&&(R[tn]=J),b[Z-1]+=J?"\u2605":"\u30FC",z[Z-1]+=O,L(Z,b[Z-1],z[Z-1]),await o(5)}}),c(7,m=R),h=!1}}function D(b="",z=1,R=""){var A=f[b].knownAnswers||[],Z=z===1?0:2;v||Z++;var U=String(A[Z]||"");return!!(U&&U===String(R))}function B(b=""){b&&c(2,a=b);var z=f[a];c(0,s=v?z.testInput:z.input),g()}function y(b=""){b&&g()}function S(b){c(3,v=!!b),B()}setTimeout(()=>{B(r[r.length-1]),g()},100);const x=b=>B(b);function G(){l[0]=this.value,c(5,l)}function M(){l[1]=this.value,c(5,l)}const T=()=>S(!1),i=()=>S(!0);function _(){s=this.value,c(0,s)}const Y=()=>{c(4,d=!d)};return t.$$.update=()=>{t.$$.dirty&1&&y(s)},[s,r,a,v,d,l,e,m,j,B,S,x,G,M,T,i,_,Y]}class $4 extends u1{constructor(n){super(),C1(this,n,Z4,i4,p1,{})}}new $4({target:document.querySelector(".app")});
