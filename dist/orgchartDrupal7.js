!function(){return function e(t,o,r){function n(i,a){if(!o[i]){if(!t[i]){var s="function"==typeof require&&require;if(!a&&s)return s(i,!0);if(l)return l(i,!0);var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}var c=o[i]={exports:{}};t[i][0].call(c.exports,function(e){var o=t[i][1][e];return n(o||e)},c,c.exports,e,t,o,r)}return o[i].exports}for(var l="function"==typeof require&&require,i=0;i<r.length;i++)n(r[i]);return n}}()({1:[function(e,t,o){var r,n;r=this,n=function(e){var t,o,r=window,n=document,l="mousemove",i="mouseup",a="mousedown",s="EventListener",d="add"+s,c="remove"+s,m=[],g=function(e,s){for(e=0;e<m.length;)(s=(s=m[e++]).container||s)[c](a,s.md,0),r[c](i,s.mu,0),r[c](l,s.mm,0);for(m=[].slice.call(n.getElementsByClassName("dragscroll")),e=0;e<m.length;)!function(e,s,c,m,g,f){(f=e.container||e)[d](a,f.md=function(t){e.hasAttribute("nochilddrag")&&n.elementFromPoint(t.pageX,t.pageY)!=f||(m=1,s=t.clientX,c=t.clientY,t.preventDefault())},0),r[d](i,f.mu=function(){m=0},0),r[d](l,f.mm=function(r){m&&((g=e.scroller||e).scrollLeft-=t=-s+(s=r.clientX),g.scrollTop-=o=-c+(c=r.clientY),e==n.body&&((g=n.documentElement).scrollLeft-=t,g.scrollTop-=o))},0)}(m[e++])};"complete"==n.readyState?g():r[d]("load",g,0),e.reset=g},"function"==typeof define&&define.amd?define(["exports"],n):n(void 0!==o?o:r.dragscroll={})},{}],2:[function(e,t,o){const r=e("dragscroll");if(!window.google||!window.google.charts)throw new Error("Orgchart: Must include google script loader: https://www.gstatic.com/charts/loader.js");google.charts.load("current",{packages:["orgchart"]});t.exports=((e,t)=>{let o=null;const n=(e=>"string"==typeof e?document.getElementById(e):("object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)?e:null)(t);if(!n)return void console.error("OrgChart: invalid element or id provided");for(;n.firstChild;)n.removeChild(n.firstChild);n.style.position="relative";const l=document.createElement("div");l.classList.add("dragscroll","orgchart"),n.appendChild(l);const i=document.createElement("div");if(i.classList.add("orgchart-legend","disabled"),n.appendChild(i),!e||0===e.length)return l.classList.add("invalid-data-provided"),void console.error("Orgchart Error: undefined or empty user data provided");const a={};for(const t of e)a[t.EmployeeID]=!0;for(const t of e){const e=t.ManagerID;!e||e in a||(console.error(`Orgchart Error: employee '${t.EmployeeID}' has undefined manager '${e}'`),delete t.ManagerID)}const s=(e,t)=>{!1!==e&&(o=e);const r=t||o;r?(i.innerHTML=(({Name:e="",Role:t="",Email:o="",ImageURL:r="",Link:n=""})=>`${r?`<img src="${r}" alt="${e}">`:""}<div><p><strong>${e}</strong></p><p><em>${t}</em></p>${o?`<p class="orgchart-legend-email"><a href="mailto:${o}">${o}</a></p>`:""}${n?`<a class="orgchart-legend-link" href="${n}" title="${e} Account Page"></a>`:""}</div>`)(r),i.classList.remove("disabled")):i.classList.add("disabled")};new Promise(e=>google.charts.setOnLoadCallback(()=>e())).then(()=>{const t=new google.visualization.arrayToDataTable([[{label:"EmployeeID",type:"string"},{label:"ManagerID",type:"string"},{label:"ToolTip",type:"string"}],...e.map(({EmployeeID:e,ManagerID:t,...o})=>[{v:e,f:(({Name:e="",Role:t=""})=>`<p><strong>${e}</strong></p><p><em>${t}</em></p>`)(o)},t,"Double click to collapse"])]),o=new google.visualization.OrgChart(l);google.visualization.events.addListener(o,"select",()=>{const t=o.getSelection()[0];s(t?e[t.row]:null,!1)}),google.visualization.events.addListener(o,"onmouseover",({row:t})=>{s(!1,e[t])}),google.visualization.events.addListener(o,"onmouseout",()=>{s(!1,null)}),o.draw(t,{allowHtml:!0,selectedNodeClass:"orgchart-node-selected",nodeClass:"orgchart-node",allowCollapse:!0,size:"large"}),r.reset()}).catch(console.error)})},{dragscroll:1}],3:[function(e,t,o){const r=e("./orgchart"),n=window.jQuery;n(()=>{const e=document.getElementById("orgchart-userdata"),t=document.getElementById("orgchart-container");if(e&&t){const o=n(e).children().toArray().map(e=>{const t=n(e),o=t.find(".orgchart-username").first().text(),r={EmployeeID:o,ManagerID:t.find(".field-name-field-manager .field-item").first().text(),Role:t.find(".field-name-field-role .field-item").first().text(),ImageURL:t.find(".field-name-field-image .field-item img").first().attr("src"),Link:`/user/${o}`};return t.find(".form-item.form-type-item > .item-list").each((e,t)=>{const o=n(t),l=e=>{r[e]=o.find("li").first().text().trim()},i=o.prev("label").text();i&&i.length>0&&(/Full\s+Name/i.test(i)?l("Name"):/Title/i.test(i)?l("Role"):/Primary\s+E.?Mail\s+Address/i.test(i)&&l("Email"))}),r});r(o,t)}})},{"./orgchart":2}]},{},[3]);