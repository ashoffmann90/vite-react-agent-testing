var J=Object.defineProperty;var Y=(h,n,t)=>n in h?J(h,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[n]=t;var a=(h,n,t)=>(Y(h,typeof n!="symbol"?n+"":n,t),t),V=(h,n,t)=>{if(!n.has(h))throw TypeError("Cannot "+t)};var T=(h,n,t)=>{if(n.has(h))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(h):n.set(h,t)};var g=(h,n,t)=>(V(h,n,"access private method"),t);import{F as I,B as W,a8 as X,x as K,E as v,p as P,g as Q,h as p,S,q as u}from"./index-DYkS4CO9.js";import{H as Z}from"./harvest-scheduler-Dl2riBtO.js";import{s as H}from"./invoke-DVkn7oSR.js";import{t as $}from"./time-to-first-byte-D3ljdkzf.js";import{c as E,A as tt}from"./aggregate-base-f-EEGmdR.js";import{g as x,n as c,a as f,b as k}from"./bel-serializer--WAs5lVW.js";import{n as D}from"./nav-timing-DZL8I-f8.js";import{f as et,a as it}from"./first-paint-5kt2QkY_.js";const M="api",F=I.softNav,C={INITIAL_PAGE_LOAD:"",ROUTE_CHANGE:1,UNSPECIFIED:2},B={INTERACTION:1,AJAX:2,CUSTOM_END:3,CUSTOM_TRACER:4},l={IP:"in progress",FIN:"finished",CAN:"cancelled"};let st=0;class z{constructor(n){a(this,"belType");a(this,"children",[]);a(this,"start",W());a(this,"end");a(this,"callbackEnd",0);a(this,"callbackDuration",0);a(this,"nodeId",++st);if(!n)throw new Error("Interaction is missing core attributes");this.agentIdentifier=n}addChild(n){this.children.push(n)}serialize(){}}class nt extends z{constructor(n,t){super(n),this.belType=B.AJAX,this.method=t.method,this.status=t.status,this.domain=t.domain,this.path=t.path,this.txSize=t.requestSize,this.rxSize=t.responseSize,this.requestedWith=t.type==="fetch"?1:"",this.spanId=t.spanId,this.traceId=t.traceId,this.spanTimestamp=t.spanTimestamp,this.gql=t.gql,this.start=t.startTime,this.end=t.endTime}serialize(n){const t=x(this.agentIdentifier),e=[],i=[c(this.belType),0,c(this.start-n),c(this.end-this.start),c(this.callbackEnd),c(this.callbackDuration),t(this.method),c(this.status),t(this.domain),t(this.path),c(this.txSize),c(this.rxSize),this.requestedWith,t(this.nodeId),f(this.spanId,t,!0)+f(this.traceId,t,!0)+f(this.spanTimestamp,c)];let s=[];return typeof this.gql=="object"&&(s=k(this.gql,t)),this.children.forEach(o=>s.push(o.serialize())),i[1]=c(s.length),e.push(i),s.length&&e.push(s.join(";")),e.join(";")}}var O,_,A,w,N,U;class L extends z{constructor(t,e,i,s){super(t);T(this,A);T(this,N);a(this,"id",X());a(this,"initialPageURL",K);a(this,"oldURL",""+((O=v)==null?void 0:O.location));a(this,"newURL",""+((_=v)==null?void 0:_.location));a(this,"customName");a(this,"customAttributes",{});a(this,"customDataByApi",{});a(this,"queueTime");a(this,"appTime");a(this,"newRoute");a(this,"status",l.IP);a(this,"domTimestamp",0);a(this,"historyTimestamp",0);a(this,"createdByApi",!1);a(this,"keepOpenUntilEndApi",!1);a(this,"onDone",[]);a(this,"cancellationTimer");this.belType=B.INTERACTION,this.trigger=e,this.start=i,this.oldRoute=s,this.eventSubscription=new Map([["finished",[]],["cancelled",[]]]),this.forceSave=this.forceIgnore=!1,this.trigger===M&&(this.createdByApi=!0)}updateDom(t){this.domTimestamp=t||performance.now()}updateHistory(t,e){var i;this.newURL=e||""+((i=v)==null?void 0:i.location),this.historyTimestamp=t||performance.now()}seenHistoryAndDomChange(){return this.historyTimestamp>0&&this.domTimestamp>this.historyTimestamp}on(t,e){if(!this.eventSubscription.has(t))throw new Error("Cannot subscribe to non pre-defined events.");if(typeof e!="function")throw new Error("Must supply function as callback.");this.eventSubscription.get(t).push(e)}done(t){return this.keepOpenUntilEndApi&&t===void 0?!1:(this.onDone.forEach(e=>e(this.customDataByApi)),this.forceIgnore?g(this,N,U).call(this):this.seenHistoryAndDomChange()?g(this,A,w).call(this,t):this.forceSave?g(this,A,w).call(this,t||performance.now()):g(this,N,U).call(this),!0)}isActiveDuring(t){return this.status===l.IP?this.start<=t:this.status===l.FIN&&this.start<=t&&this.end>=t}get firstPaint(){}get firstContentfulPaint(){}get navTiming(){}serialize(t){const e=x(this.agentIdentifier),i=[];let s;this.trigger==="initialPageLoad"?s=C.INITIAL_PAGE_LOAD:this.newURL!==this.oldURL?s=C.ROUTE_CHANGE:s=C.UNSPECIFIED;const o=[c(this.belType),0,c(Math.floor(this.start-t)),c(Math.floor(this.end-this.start)),c(this.callbackEnd),c(this.callbackDuration),e(this.trigger),e(E(this.initialPageURL,!0)),e(E(this.oldURL,!0)),e(E(this.newURL,!0)),e(this.customName),s,f(this.queueTime,c,!0)+f(this.appTime,c,!0)+f(this.oldRoute,e,!0)+f(this.newRoute,e,!0)+e(this.id),e(this.nodeId),f(this.firstPaint,c,!0)+f(this.firstContentfulPaint,c)],r=k(this.customAttributes||{},e);return P(this.agentIdentifier).atts&&r.push("a,"+e(P(this.agentIdentifier).atts)),this.children.forEach(d=>r.push(d.serialize(t||this.start))),o[1]=c(r.length),i.push(o),r.length&&i.push(r.join(";")),this.navTiming?i.push(this.navTiming):i.push(""),i.join(";")}}A=new WeakSet,w=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;if(this.status!==l.IP)return;clearTimeout(this.cancellationTimer),this.end=Math.max(this.domTimestamp,this.historyTimestamp,t),this.customAttributes={...P(this.agentIdentifier).jsAttributes,...this.customAttributes},this.status=l.FIN,this.eventSubscription.get("finished").forEach(i=>i())},N=new WeakSet,U=function(){if(this.status!==l.IP)return;clearTimeout(this.cancellationTimer),this.status=l.CAN,this.eventSubscription.get("cancelled").forEach(e=>e())};class rt extends L{constructor(n){super(n,"initialPageLoad",0,null);const t=P(n);this.queueTime=t.queueTime,this.appTime=t.applicationTime}get firstPaint(){return et.current.value}get firstContentfulPaint(){return it.current.value}get navTiming(){if(!D.length)return;let n=",",t="b",e=0;return D.slice(1,21).forEach(i=>{i!==void 0?(t+=n+c(i-e),n=",",e=i):(t+=n+"!",n="")}),t}}var b,q,y,j,R,G;class at extends tt{constructor(t,e,i){let{domObserver:s}=i;super(t,e,F);T(this,b);T(this,y);T(this,R);const o=Q(t,"soft_navigations.harvestTimeSeconds")||10;this.interactionsToHarvest=[],this.interactionsAwaitingRetry=[],this.domObserver=s,this.scheduler=new Z("events",{onFinished:this.onHarvestFinished.bind(this),retryDelay:o,onUnload:()=>{var r;return(r=this.interactionInProgress)==null?void 0:r.done()}},{agentIdentifier:t,ee:this.ee}),this.scheduler.harvest.on("events",this.onHarvestStarted.bind(this)),this.initialPageLoadInteraction=new rt(t),$.subscribe(r=>{let{entries:d}=r;const m=d[0].loadEventEnd;this.initialPageLoadInteraction.forceSave=!0,this.initialPageLoadInteraction.done(m),this.interactionsToHarvest.push(this.initialPageLoadInteraction),this.initialPageLoadInteraction=null,p(S,["SoftNav/Interaction/InitialPageLoad/Duration/Ms",Math.round(m)],void 0,I.metrics,this.ee)}),this.latestRouteSetByApi=null,this.interactionInProgress=null,this.blocked=!1,this.waitForFlags(["spa"]).then(r=>{let[d]=r;d?this.scheduler.startTimer(o,0):this.blocked=!0}),u("newUIEvent",r=>this.startUIInteraction(r.type,r.timeStamp,r.target),this.featureName,this.ee),u("newURL",(r,d)=>{var m;return(m=this.interactionInProgress)==null?void 0:m.updateHistory(r,d)},this.featureName,this.ee),u("newDom",r=>{var d,m;(d=this.interactionInProgress)==null||d.updateDom(r),(m=this.interactionInProgress)!=null&&m.seenHistoryAndDomChange()&&this.interactionInProgress.done()},this.featureName,this.ee),g(this,R,G).call(this),u("ajax",g(this,b,q).bind(this),this.featureName,this.ee),u("jserror",g(this,y,j).bind(this),this.featureName,this.ee),this.drain()}onHarvestStarted(t){if(this.interactionsToHarvest.length===0||this.blocked)return;let e=0;const i=[];for(const o of this.interactionsToHarvest)i.push(o.serialize(e)),e||(e=Math.floor(o.start));const s="bel.7;".concat(i.join(";"));return t.retry&&this.interactionsAwaitingRetry.push(...this.interactionsToHarvest),this.interactionsToHarvest=[],{body:{e:s}}}onHarvestFinished(t){t.sent&&t.retry&&this.interactionsAwaitingRetry.length>0&&(this.interactionsToHarvest=[...this.interactionsAwaitingRetry,...this.interactionsToHarvest],this.interactionsAwaitingRetry=[])}startUIInteraction(t,e,i){var s,o;if(!((s=this.interactionInProgress)!=null&&s.createdByApi)&&((o=this.interactionInProgress)==null?void 0:o.done())!==!1){if(this.interactionInProgress=new L(this.agentIdentifier,t,e,this.latestRouteSetByApi),t==="click"){const r=ot(i);r&&(this.interactionInProgress.customAttributes.actionText=r)}this.interactionInProgress.cancellationTimer=setTimeout(()=>{this.interactionInProgress.done(),p(S,["SoftNav/Interaction/TimeOut"],void 0,I.metrics,this.ee)},3e4),this.setClosureHandlers()}}setClosureHandlers(){this.interactionInProgress.on("finished",()=>{const t=this.interactionInProgress;this.interactionsToHarvest.push(this.interactionInProgress),this.interactionInProgress=null,this.domObserver.disconnect(),p(S,["SoftNav/Interaction/".concat(t.newURL!==t.oldURL?"RouteChange":"Custom","/Duration/Ms"),Math.round(t.end-t.start)],void 0,I.metrics,this.ee)}),this.interactionInProgress.on("cancelled",()=>{this.interactionInProgress=null,this.domObserver.disconnect()})}getInteractionFor(t){var i,s;if((i=this.interactionInProgress)!=null&&i.isActiveDuring(t))return this.interactionInProgress;let e;for(let o=this.interactionsToHarvest.length-1;o>=0;o--){const r=this.interactionsToHarvest[o];if(r.isActiveDuring(t)){if(r.trigger!=="initialPageLoad")return r;e=r}}if(e)return e;if((s=this.initialPageLoadInteraction)!=null&&s.isActiveDuring(t))return this.initialPageLoadInteraction}}b=new WeakSet,q=function(t){const e=this.getInteractionFor(t.startTime);e?e.status===l.FIN?i(this.agentIdentifier,t,e):(e.on("finished",()=>i(this.agentIdentifier,t,e)),e.on("cancelled",()=>p("returnAjax",[t],void 0,I.ajax,this.ee))):p("returnAjax",[t],void 0,I.ajax,this.ee);function i(s,o,r){const d=new nt(s,o);r.addChild(d)}},y=new WeakSet,j=function(t,e){const i=this.getInteractionFor(e);i&&(t.browserInteractionId=i.id,i.status===l.FIN?(t._softNavFinished=!0,t._softNavAttributes=i.customAttributes):(i.on("finished",H(()=>p("softNavFlush",[i.id,!0,i.customAttributes],void 0,I.jserrors,this.ee))),i.on("cancelled",H(()=>p("softNavFlush",[i.id,!1,void 0],void 0,I.jserrors,this.ee)))))},R=new WeakSet,G=function(){const t="api-ixn-",e=this;u(t+"get",function(i){let{waitForEnd:s}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.associatedInteraction=e.getInteractionFor(i),this.associatedInteraction||(this.associatedInteraction=e.interactionInProgress=new L(e.agentIdentifier,M,i,e.latestRouteSetByApi),e.setClosureHandlers()),s===!0&&(this.associatedInteraction.keepOpenUntilEndApi=!0)},e.featureName,e.ee),u(t+"end",function(i){this.associatedInteraction.done(i)},e.featureName,e.ee),u(t+"save",function(){this.associatedInteraction.forceSave=!0},e.featureName,e.ee),u(t+"ignore",function(){this.associatedInteraction.forceIgnore=!0},e.featureName,e.ee),u(t+"getContext",function(i,s){typeof s=="function"&&setTimeout(()=>s(this.associatedInteraction.customDataByApi),0)},e.featureName,e.ee),u(t+"onEnd",function(i,s){typeof s=="function"&&this.associatedInteraction.onDone.push(s)},e.featureName,e.ee),u(t+"actionText",function(i,s){s&&(this.associatedInteraction.customAttributes.actionText=s)},e.featureName,e.ee),u(t+"setName",function(i,s,o){s&&(this.associatedInteraction.customName=s),o&&(this.associatedInteraction.trigger=o)},e.featureName,e.ee),u(t+"setAttribute",function(i,s,o){this.associatedInteraction.customAttributes[s]=o},e.featureName,e.ee),u(t+"routeName",function(i,s){e.latestRouteSetByApi=s,e.interactionInProgress&&(e.interactionInProgress.newRoute=s)},e.featureName,e.ee)},a(at,"featureName",F);function ot(h){const n=h.tagName.toLowerCase();if(["a","button","input"].includes(n))return h.title||h.value||h.innerText}export{at as Aggregate};