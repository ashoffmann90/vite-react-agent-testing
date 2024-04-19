var V=Object.defineProperty;var Z=(t,r,a)=>r in t?V(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;var O=(t,r,a)=>(Z(t,typeof r!="symbol"?r+"":r,a),a);import{u as R,n as K,q as F,m as W,p as U,s as S,h as x,F as g,S as E,v as $}from"./index-DbYqWX7c.js";import{g as ee,n as p,a as b,b as te}from"./bel-serializer-DGVngbV3.js";import{H as re}from"./harvest-scheduler-CkwrgQ_O.js";import{s as se,a as ne}from"./deny-list-CM38xUZk.js";import{A as ae}from"./aggregate-base-ChhHcUTy.js";function ie(t){return(t==null?void 0:t.constructor)==={}.constructor}function oe(){let{body:t,query:r}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(!t&&!r))try{const a=ue(C(t));if(a)return a;const o=H(de(r));if(o)return o}catch{}}function H(t){if(typeof t!="object"||!t.query||typeof t.query!="string")return;const r=t.query.trim().match(/^(query|mutation|subscription)\s?(\w*)/),a=r==null?void 0:r[1];return a?{operationName:t.operationName||(r==null?void 0:r[2])||"Anonymous",operationType:a,operationFramework:"GraphQL"}:void 0}function ue(t){if(!t)return;Array.isArray(t)||(t=[t]);const r=[],a=[];for(let o of t){const v=H(o);v&&(r.push(v.operationName),a.push(v.operationType))}if(a.length)return{operationName:r.join(","),operationType:a.join(","),operationFramework:"GraphQL"}}function C(t){let r;if(!t||typeof t!="string"&&typeof t!="object"||(typeof t=="string"?r=JSON.parse(t):r=t,!ie(r)&&!Array.isArray(r)))return;let a=!1;if(Array.isArray(r)?a=r.some(o=>w(o)):a=w(r),!!a)return r}function de(t){if(!t||typeof t!="string")return;const r=new URLSearchParams(t);return C(Object.fromEntries(r))}function w(t){return!(typeof t!="object"||!t.query||typeof t.query!="string")}class fe extends ae{constructor(r,a){super(r,a,R);const o=K(r),v=o.ajax.enabled!==!1;if(F("xhr",q,this.featureName,this.ee),!v){this.drain();return}const D=W(r).denyList;se(D);let f=[],m={},j=[];const h=this.ee,z=o.ajax.harvestTimeSeconds||10,T=o.ajax.maxPayloadSize||1e6;this.storeXhr=q,this.prepareHarvest=B,this.getStoredEvents=function(){return{ajaxEvents:f,spaAjaxEvents:m}},h.on("interactionDone",(e,n)=>{m[e.id]&&(n||m[e.id].forEach(function(s){f.push(s)}),delete m[e.id])}),F("returnAjax",e=>f.push(e),this.featureName,this.ee);const X=new re("events",{onFinished:Y,getPayload:B},this);h.on("drain-".concat(this.featureName),()=>{X.startTimer(z)}),this.drain();const P=U(r).errorBeacon,L=o.proxy.beacon;function q(e,n,s,i,d){var _,G,Q,M;n.time=s;var u;e.cat?u=S([e.status,e.cat]):u=S([e.status,e.host,e.pathname]);const l=ne(e),A=(_=o.feature_flags)==null?void 0:_.includes("ajax_metrics_deny_list");if((l||!A)&&a.store("xhr",u,e,n),!v)return;if(!l){e.hostname===P||L&&e.hostname===L?(x(E,["Ajax/Events/Excluded/Agent"],void 0,g.metrics,h),A&&x(E,["Ajax/Metrics/Excluded/Agent"],void 0,g.metrics,h)):(x(E,["Ajax/Events/Excluded/App"],void 0,g.metrics,h),A&&x(E,["Ajax/Metrics/Excluded/App"],void 0,g.metrics,h));return}x("bstXhrAgg",["xhr",u,e,n],void 0,g.sessionTrace,h);var y=this,c={method:e.method,status:e.status,domain:e.host,path:e.pathname,requestSize:n.txSize,responseSize:n.rxSize,type:d,startTime:s,endTime:i,callbackDuration:n.cbTime};if(y.dt&&(c.spanId=y.dt.spanId,c.traceId=y.dt.traceId,c.spanTimestamp=y.dt.timestamp),c.gql=e.gql=oe({body:this.body,query:(G=this==null?void 0:this.parsedOrigin)==null?void 0:G.search}),c.gql&&x(E,["Ajax/Events/GraphQL/Bytes-Added",S(c.gql).length],void 0,g.metrics,h),!!((M=(Q=$(r))==null?void 0:Q.features)!=null&&M[g.softNav]))x("ajax",[c],void 0,g.softNav,h);else if(this.spaNode){const N=this.spaNode.interaction.id;m[N]=m[N]||[],m[N].push(c)}else f.push(c)}function B(e){if(e=e||{},f.length===0)return null;for(var n=I(f,e.maxPayloadSize||T),s=[],i=0;i<n.length;i++)s.push({body:{e:n[i]}});return e.retry&&(j=f.slice()),f=[],s}function I(e,n,s){s=s||1;for(var i=[],d=e.length/s,u=k(e,d),l=!1,A=0;A<u.length;A++){var y=u[A];if(y.tooBig(n)){if(y.events.length!==1){l=!0;break}}else i.push(y.payload)}return l?I(e,n,++s):i}function Y(e){e.retry&&j.length>0&&(f.unshift(...j),j=[])}function k(e,n){n=n||e.length;for(var s=[],i=0,d=e.length;i<d;i+=n)s.push(new J(e.slice(i,i+n)));return s}function J(e){this.addString=ee(r),this.events=e,this.payload="bel.7;";for(var n=0;n<e.length;n++){var s=e[n],i=[p(s.startTime),p(s.endTime-s.startTime),p(0),p(0),this.addString(s.method),p(s.status),this.addString(s.domain),this.addString(s.path),p(s.requestSize),p(s.responseSize),s.type==="fetch"?1:"",this.addString(0),b(s.spanId,this.addString,!0)+b(s.traceId,this.addString,!0)+b(s.spanTimestamp,p,!1)],d="2,",u=te({...U(r).jsAttributes||{},...s.gql||{}},this.addString);i.unshift(p(u.length)),d+=i.join(","),u&&u.length>0&&(d+=";"+u.join(";")),n+1<e.length&&(d+=";"),this.payload+=d}this.tooBig=function(l){return l=l||T,this.payload.length*2>l}}}}O(fe,"featureName",R);export{fe as Aggregate};