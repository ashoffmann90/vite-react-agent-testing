var A=Object.defineProperty;var E=(i,e,t)=>e in i?A(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var f=(i,e,t)=>(E(i,typeof e!="symbol"?e+"":e,t),t);import{N as m,g as v,p as d,i as g,q as b,m as l,z as c,s as H}from"./index-BfuMbHu1.js";import{H as S}from"./harvest-scheduler-BUE62zSJ.js";import{A as y,c as u}from"./aggregate-base-TAWkHkou.js";class I extends y{constructor(e,t){var s;super(e,t,m),s=this,this.eventsPerMinute=240,this.harvestTimeSeconds=v(this.agentIdentifier,"page_action.harvestTimeSeconds")||v(this.agentIdentifier,"ins.harvestTimeSeconds")||30,this.eventsPerHarvest=this.eventsPerMinute*this.harvestTimeSeconds/60,this.referrerUrl=void 0,this.currentEvents=void 0,this.events=[],this.att=d(this.agentIdentifier).jsAttributes,g&&document.referrer&&(this.referrerUrl=u(document.referrer)),b("api-addPageAction",function(){return s.addPageAction(...arguments)},this.featureName,this.ee),this.waitForFlags(["ins"]).then(n=>{let[a]=n;if(a){const r=new S("ins",{onFinished:function(){return s.onHarvestFinished(...arguments)}},this);r.harvest.on("ins",function(){return s.onHarvestStarted(...arguments)}),r.startTimer(this.harvestTimeSeconds,0)}else this.blocked=!0}),this.drain()}onHarvestStarted(e){const{userAttributes:t,atts:s}=d(this.agentIdentifier);var n={qs:{ua:t,at:s},body:{ins:this.events}};return e.retry&&(this.currentEvents=this.events),this.events=[],n}onHarvestFinished(e){e&&e.sent&&e.retry&&this.currentEvents&&(this.events=this.events.concat(this.currentEvents),this.currentEvents=null)}addPageAction(e,t,s){if(this.events.length>=this.eventsPerHarvest||this.blocked)return;var n,a,r={};g&&window.document.documentElement&&(n=window.document.documentElement.clientWidth,a=window.document.documentElement.clientHeight);var p={timestamp:e+l(this.agentIdentifier).offset,timeSinceLoad:e/1e3,browserWidth:n,browserHeight:a,referrerUrl:this.referrerUrl,currentUrl:u(""+location),pageUrl:u(l(this.agentIdentifier).origin),eventType:"PageAction"};c(p,h),c(d(this.agentIdentifier).jsAttributes,h),s&&typeof s=="object"&&c(s,h),r.actionName=t||"",this.events.push(r);function h(w,o){r[w]=o&&typeof o=="object"?H(o):o}}}f(I,"featureName",m);export{I as Aggregate};