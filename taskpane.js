!function(){"use strict";var t,e,o,n,r={27091:function(t){t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},44944:function(t,e,o){t.exports=o.p+"assets/logo-filled.png"},60806:function(t,e,o){t.exports=o.p+"3d08ceea9837a69c99aa.css"}},a={};function c(t){var e=a[t];if(void 0!==e)return e.exports;var o=a[t]={exports:{}};return r[t](o,o.exports,c),o.exports}c.m=r,c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,{a:e}),e},c.d=function(t,e){for(var o in e)c.o(e,o)&&!c.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;c.g.importScripts&&(t=c.g.location+"");var e=c.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&!t;)t=o[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=t}(),c.b=document.baseURI||self.location.href,function(){async function t(){const t=await async function(){return Word.run((async t=>{const o=await async function(){return Word.run((async t=>{const o=t.document.body.paragraphs;t.load(o),await t.sync();let n=[];for(let r of o.items){const o=r.getTextRanges([" "],!0);t.load(o,"text, font"),await t.sync();for(let r of o.items)if("#FFFF00"===r.font.highlightColor){console.log(r);let o=await e(t,r);const a=r.insertText("{text-marker}","Before");a.font.size=1,a.font.color="white",await t.sync();const c=r.text;let s=o+c.length;n.push({word:c,startIndex:o,endIndex:s});const i=t.document.body.search("{text-marker}",{matchCase:!0,matchWholeWord:!1});t.load(i),await t.sync(),i.items[0].delete(),await t.sync()}}return console.log("Highlighted Words and Indexes:",n),n})).catch((t=>{console.error("Error:",t)}))}();await t.sync();const n=t.document.properties;t.load(n,"title");const r=Office.context.document.url||"Untitled Document",a=document.getElementById("textbox-container").getElementsByClassName("text-box");let c=[];for(let t of a)""!==t.value.trim()&&c.push(t.value.trim());let s={name:r,highlights:c,highlightRemovals:o.map((t=>({start:t.startIndex,end:t.endIndex})))};return console.log(s),s})).catch((t=>{console.error("Error:",t)}))}(),o={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("https://localhost:7201/api/DocumentHighlights/UpsertDocumentHighlights",o).then((t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()})).then((t=>{console.log("Server response:",t)})).catch((t=>{console.error("Error sending data to the server:",t)}))}async function e(t,e){const o=e.insertText("{text-marker}","Before");o.font.size=1,o.font.color="white",await t.sync();const n=t.document.body;t.load(n,"text"),await t.sync();const r=n.text.indexOf("{text-marker}");if(-1===r)return console.error("Text marker not found."),-1;const a=n.search("{text-marker}",{matchCase:!0,matchWholeWord:!1});return t.load(a),await t.sync(),a.items[0].delete(),await t.sync(),r}async function o(){await Word.run((async t=>{t.document.body.font.highlightColor=null,await t.sync()})).catch((t=>{console.error("Error removing highlights:",t)})),function(){const t=document.getElementById("textbox-container");for(;t.firstChild;)t.removeChild(t.firstChild)}();var t=await async function(){const t=await async function(){return Word.run((async t=>{const e=t.document.properties;t.load(e,"title"),await t.sync();const o=encodeURIComponent(e.title||"Untitled Document");try{const t=await fetch(`https://localhost:7201/api/DocumentHighlights/GetDocumentHighlights?name=${o}`);if(!t.ok)throw new Error(`API call failed: ${t.statusText}`);return await t.json()}catch(t){return console.error("Error fetching highlights:",t),null}})).catch((t=>{console.error("Error:",t)}))}();if(t&&t.response&&t.response.highlights){const e=document.getElementById("textbox-container");t.response.highlights.forEach((t=>{const o=document.createElement("input");o.type="text",o.className="text-box",o.value=t,e.appendChild(o),e.appendChild(document.createElement("br"))}))}else console.error("No highlights data found");return t}();await s(),t&&t.response&&await async function(t){return Word.run((async e=>{const o=e.document.body.paragraphs;e.load(o,"text"),await e.sync();let n=0;for(let r of o.items){const o=r.getTextRanges([" "],!0);e.load(o,"text"),await e.sync();for(let r of o.items){const o=r.text.length+1;for(let a of t.highlightRemovals)if(a.start>=n&&a.start<n+o){Math.max(a.start-n,0),Math.min(a.end-n,o);const t=r.getRange(Word.RangeLocation.start).expandTo(r.getRange(Word.RangeLocation.end));console.log(t),t.font.highlightColor="yellow",e.load(t)}n+=o}}await e.sync()})).catch((t=>{console.error("Error reapplying red highlighting from JSON:",t)}))}(t.response)}async function n(){return Word.run((async t=>{const e=document.getElementById("jsonInput").value;let o;try{o=JSON.parse(e)}catch(t){return void console.error("Invalid JSON")}if(Array.isArray(o)){for(const e of o)if("string"==typeof e&&""!==e.trim()){const o=t.document.body.search(e.trim(),{matchCase:!1,matchWholeWord:!1});t.load(o,"text, font"),await t.sync(),o.items.forEach((t=>{t.font.highlightColor="blue"}))}await t.sync()}else console.error("JSON does not contain an array")})).catch((t=>{console.error("Error: "+t),t instanceof OfficeExtension.Error&&console.log("Debug info: "+JSON.stringify(t.debugInfo))}))}async function r(){await Word.run((async t=>{const e=t.document.getSelection();t.load(e,"text"),await t.sync(),e.font.highlightColor="#FF0000",await t.sync(),e.text&&c(e.text),s()})).catch((t=>{console.error("Error:",t)}))}async function a(){await Word.run((async t=>{const e=t.document.getSelection();t.load(e,"text"),await t.sync(),e.font.highlightColor="yellow",await t.sync()})).catch((t=>{console.error("Error:",t)}))}async function c(t){t instanceof Event&&(t=""),console.log("Adding textbox with text: "+t);var e=document.getElementById("textbox-container"),o=document.createElement("div");o.className="textbox-wrapper";var n=document.createElement("input");n.type="text",n.className="text-box",n.value=t;var r=document.createElement("button");r.textContent="-",r.className="remove-textbox",o.appendChild(n),o.appendChild(r),e.appendChild(o),r.addEventListener("click",(function(){!async function(t){console.log("remove");var e=document.getElementById("textbox-container"),o=t.querySelector(".text-box");o&&""!==o.value.trim()&&await async function(t){await Word.run((async e=>{console.log(t);var o=e.document.body.search(t,{matchCase:!1,matchWholeWord:!0});e.load(o,"items"),await e.sync(),o.items.forEach((t=>{console.log(t),t.font.highlightColor=""})),await e.sync()}))}(o.value.trim()),e?.removeChild(t)}(o)}))}async function s(){await Word.run((async t=>{var e=document.getElementsByClassName("text-box"),o=[];for(let t of e)t.value&&o.push(t.value);for(let e of o){var n=t.document.body.search(e,{matchCase:!1,matchWholeWord:!0});t.load(n,"items"),await t.sync();for(let t of n.items)t.font.highlightColor="#FF0000"}await t.sync()}))}Office.onReady((e=>{e.host===Office.HostType.Word&&(console.log("tests"),document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex",document.getElementById("highlightFromJson").onclick=n,document.getElementById("add-textbox").onclick=c,document.getElementById("highlight-text").onclick=s,document.getElementById("highlight-selected-text").onclick=r,document.getElementById("get-marked").onclick=t,document.getElementById("remove-highlight").onclick=a,document.getElementById("initialize").onclick=o)}))}(),t=c(27091),e=c.n(t),o=new URL(c(60806),c.b),n=new URL(c(44944),c.b),e()(o),e()(n)}();
//# sourceMappingURL=taskpane.js.map