var S=Object.defineProperty;var m=(s,e,t)=>e in s?S(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var a=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t),d=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var l=(s,e,t)=>(d(s,e,"read from private field"),t?t.call(s):e.get(s)),h=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},f=(s,e,t,i)=>(d(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t);var u=(s,e,t)=>(d(s,e,"access private method"),t);import{i as x,a1 as p}from"./index-DzSGQKjV.js";var n,r,o,y;class w{constructor(){h(this,o);h(this,n,new WeakSet);h(this,r,[]);a(this,"invalidStylesheetsDetected",!1);a(this,"failedToFix",0)}evaluate(){let e=0;if(x){for(let t=0;t<Object.keys(document.styleSheets).length;t++)if(!l(this,n).has(document.styleSheets[t])){l(this,n).add(document.styleSheets[t]);try{const i=document.styleSheets[t].cssRules}catch{if(!document.styleSheets[t].href)return;e++,l(this,r).push(u(this,o,y).call(this,document.styleSheets[t]))}}}return e&&(this.invalidStylesheetsDetected=!0),e}async fix(){await Promise.all(l(this,r)),f(this,r,[]);const e=this.failedToFix;return this.failedToFix=0,e}}n=new WeakMap,r=new WeakMap,o=new WeakSet,y=async function(e){if(e!=null&&e.href)try{const t=await p.FETCH.bind(window)(e.href);if(!t.ok){this.failedToFix++;return}const i=await t.text();try{const c=new CSSStyleSheet;await c.replace(i),Object.defineProperty(e,"cssRules",{get(){return c.cssRules}}),Object.defineProperty(e,"rules",{get(){return c.rules}})}catch{Object.defineProperty(e,"cssText",{get(){return i}}),this.failedToFix++}}catch{this.failedToFix++}};const v=new w;export{v as s};