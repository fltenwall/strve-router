function t(){return-1!==location.hash.indexOf("?")?location.hash.split("#")[1].split("?")[0]:location.hash.split("#")[1]}function o(){const t=window.location.href,o=t.indexOf("#");return`${o>=0?t.slice(0,o):t}`}function e(t,o){for(let e=0;e<o.length;e++){const n=o[e];if(n.path===t)return n.template()}}class n{constructor(t){this.routes=t,this.path=""}routerLink(t){t&&("string"==typeof t?(window.location.href=`${o()}#${t}`,this.path=t):(t.query?window.location.href=`${o()}#${t.path}?${function(t){const o=[];for(let n in t)o.push(`${n}=${e=t[n],e=(e=(e=(e=(e=(e=(e=(e=(e+="").replace(/%/g,"%25")).replace(/\+/g,"%2B")).replace(/ /g,"%20")).replace(/\//g,"%2F")).replace(/\?/g,"%3F")).replace(/&/g,"%26")).replace(/\=/g,"%3D")).replace(/#/g,"%23")}`);var e;return o.join("&")}(t.query)}`:window.location.href=`${o()}#${t.path}`,this.path=t.path))}routerView(){if(this.path)return e(this.path,this.routes);if(location.hash){return e(t(),this.routes)}return e(location.pathname,this.routes)}routerHashUpdate(o,e){window.addEventListener("hashchange",(()=>{this.path=t(),o((()=>{"function"==typeof e&&e()}),"useRouter")}),!1)}go(t){window.history.go(t)}back(){window.history.go(-1)}forward(){window.history.go(1)}param2Obj(){const t=decodeURIComponent(location.href.split("?")[1]).replace(/\+/g," ");if(!t)return{};const o={};return t.split("&").forEach((t=>{const e=t.indexOf("=");if(-1!==e){const n=t.substring(0,e),r=t.substring(e+1,t.length);o[n]=r}})),o}}export{n as default};
