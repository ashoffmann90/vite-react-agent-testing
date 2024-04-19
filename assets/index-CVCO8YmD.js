var y=Object.defineProperty;var I=(i,t,e)=>t in i?y(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var v=(i,t,e)=>(I(i,typeof t!="symbol"?t+"":t,e),e),w=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var l=(i,t,e)=>(w(i,t,"read from private field"),e?e.call(i):t.get(i)),T=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)};import{g as P,a as H,b as U,n as b}from"./bel-serializer-DGVngbV3.js";import{i as c,V as E,W as S,g as f,q as A,h as F,F as R,p as L,z as O}from"./index-DbYqWX7c.js";import{s as k,H as M}from"./harvest-scheduler-CkwrgQ_O.js";import{c as V,A as x}from"./aggregate-base-ChhHcUTy.js";import{S as z,V as h,b as g,x as G,Q as B,W as D,f as W,a as Y}from"./first-paint-D-s6GiRf.js";import{t as q}from"./time-to-first-byte-l43npgJy.js";const u=new h(g.CUMULATIVE_LAYOUT_SHIFT,i=>i);c&&z(i=>{let{value:t,entries:e}=i;u.roundingMethod(t)!==u.current.value&&u.update({value:t,entries:e})},{reportAllChanges:!0});const m=new h(g.FIRST_INPUT_DELAY);c&&G(i=>{let{value:t,entries:e}=i;E||m.isValid||e.length===0||m.update({value:e[0].startTime,entries:e,attrs:{type:e[0].name,fid:Math.round(t)}})});const C=new h(g.INTERACTION_TO_NEXT_PAINT);c&&B(i=>{let{value:t,entries:e,id:n}=i;C.update({value:t,entries:e,attrs:{metricId:n}})});const p=new h(g.LARGEST_CONTENTFUL_PAINT);c&&D(i=>{var s;let{value:t,entries:e}=i;if(E||p.isValid)return;const n=e[e.length-1];p.update({value:t,entries:e,...e.length>0&&{attrs:{size:n.size,eid:n.id,...!!n.url&&{elUrl:V(n.url)},...!!((s=n.element)!=null&&s.tagName)&&{elTag:n.element.tagName}}}})});const N=new h(g.LONG_TASK);if(c){const i=e=>{e.forEach(n=>{N.update({value:n.duration,entries:[n],attrs:{ltFrame:n.name,ltStart:n.startTime,ltCtr:n.attribution[0].containerType,...n.attribution[0].containerType!=="window"&&{ltCtrSrc:n.attribution[0].containerSrc,ltCtrId:n.attribution[0].containerId,ltCtrName:n.attribution[0].containerName}}})})};let t;try{PerformanceObserver.supportedEntryTypes.includes("longtask")&&(t=new PerformanceObserver(e=>{Promise.resolve().then(()=>{i(e.getEntries())})}),t.observe({type:"longtask",buffered:!0}))}catch{}t&&k(()=>{i(t.takeRecords())})}var d;class K extends x{constructor(e,n){var s;super(e,n,S);T(this,d,e=>{let{name:n,value:s,attrs:a}=e;this.addTiming(n,s,a)});s=this,this.timings=[],this.timingsSent=[],this.curSessEndRecorded=!1,W.subscribe(l(this,d)),Y.subscribe(l(this,d)),m.subscribe(l(this,d)),p.subscribe(l(this,d)),C.subscribe(l(this,d)),q.subscribe(r=>{let{entries:_}=r;this.addTiming("load",Math.round(_[0].loadEventEnd))}),f(this.agentIdentifier,"page_view_timing.long_task")===!0&&N.subscribe(l(this,d)),A("docHidden",r=>this.endCurrentSession(r),this.featureName,this.ee),A("winPagehide",r=>this.recordPageUnload(r),this.featureName,this.ee);const a=f(this.agentIdentifier,"page_view_timing.initialHarvestSeconds")||10,o=f(this.agentIdentifier,"page_view_timing.harvestTimeSeconds")||30;this.ee.on("drain-".concat(this.featureName),()=>{this.scheduler=new M("events",{onFinished:function(){return s.onHarvestFinished(...arguments)},getPayload:function(){return s.prepareHarvest(...arguments)}},this),this.scheduler.startTimer(o,a)}),this.drain()}endCurrentSession(e){this.curSessEndRecorded||(this.addTiming("pageHide",e,null),this.curSessEndRecorded=!0)}recordPageUnload(e){this.addTiming("unload",e,null),this.endCurrentSession(e)}addTiming(e,n,s){s=s||{},Q(s),u.current.value>=0&&(s.cls=u.current.value),this.timings.push({name:e,value:n,attrs:s}),F("pvtAdded",[e,n,s],void 0,R.sessionTrace,this.ee)}onHarvestFinished(e){e.retry&&this.timingsSent.length>0&&(this.timings.unshift(...this.timingsSent),this.timingsSent=[])}appendGlobalCustomAttributes(e){var n=e.attrs||{},s=L(this.agentIdentifier).jsAttributes||{},a=["size","eid","cls","type","fid","elTag","elUrl","net-type","net-etype","net-rtt","net-dlink"];O(s,function(o,r){a.indexOf(o)<0&&(n[o]=r)})}prepareHarvest(e){if(this.timings.length!==0){var n=this.getPayload(this.timings);if(e.retry)for(var s=0;s<this.timings.length;s++)this.timingsSent.push(this.timings[s]);return this.timings=[],{body:{e:n}}}}getPayload(e){for(var n=P(this.agentIdentifier),s="bel.6;",a=0;a<e.length;a++){var o=e[a];s+="e,",s+=n(o.name)+",",s+=H(o.value,b,!1)+",",this.appendGlobalCustomAttributes(o);var r=U(o.attrs,n);r&&r.length>0&&(s+=b(r.length)+";"+r.join(";")),a+1<e.length&&(s+=";")}return s}}d=new WeakMap,v(K,"featureName",S);function Q(i){var t=navigator.connection||navigator.mozConnection||navigator.webkitConnection;t&&(t.type&&(i["net-type"]=t.type),t.effectiveType&&(i["net-etype"]=t.effectiveType),t.rtt&&(i["net-rtt"]=t.rtt),t.downlink&&(i["net-dlink"]=t.downlink))}export{K as Aggregate};