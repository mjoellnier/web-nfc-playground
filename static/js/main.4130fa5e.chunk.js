(this["webpackJsonpweb-nfc-playground"]=this["webpackJsonpweb-nfc-playground"]||[]).push([[0],{12:function(e,t,n){},23:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),o=n.n(c),i=(n(28),n(6)),l=(n(12),n(29),n(9)),u=n(5);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createElement("path",{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}),m=function(e){var t=e.svgRef,n=e.title,r=p(e,["svgRef","title"]);return a.a.createElement("svg",s({viewBox:"0 0 320 512",ref:t},r),n?a.a.createElement("title",null,n):null,d)},f=a.a.forwardRef((function(e,t){return a.a.createElement(m,s({svgRef:t},e))})),g=(n.p,function(e){var t=e.text,n=e.target;return r.createElement(l.b,{to:n,className:"main-menu-button-wrapper"},r.createElement("div",{className:"main-menu-button"},t))}),h=function(){var e=Object(u.e)();return r.createElement("div",{className:"back-button-wrapper",onClick:function(){return e.push("/")}},r.createElement(f,{className:"back-button-chevron"}),r.createElement("p",null,"Home"))},b=function(){var e=r.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=r.useState(!1),o=Object(i.a)(c,2),l=o[0],u=o[1];return r.useEffect((function(){console.log("Checking your NFC capabilities:"),"NDEFReader"in window?(console.log("\u2705 You can read NFC tags!"),a(!0)):console.log("\u274c You can NOT read NFC tags!"),"NDEFWriter"in window?(console.log("\u2705 You can write NFC tags!"),u(!0)):console.log("\u274c You can NOT write read NFC tags!")}),[]),r.createElement("div",{className:"home-wrapper"},r.createElement("div",{id:"nfc-capability-intro"},r.createElement("h1",null,"Your NFC capabilites:"),r.createElement("h3",null,"Reading NFC: ",n?"\u2705":"\u274c"),r.createElement("h3",null,"Writing NFC: ",l?"\u2705":"\u274c")),r.createElement(g,{target:"/simplereading",text:"Simple Reading"}),r.createElement(g,{target:"/simplewriting",text:"Simple Writing"}))},E=n(15),v=n.n(E),y=n(21),w=n(22),N=function(){var e=Object(w.a)(v.a.mark((function e(t){var n,r,a,c,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={id:"pending",original:JSON.stringify(t),recordType:"pending",mediaType:"pending"},r=t.message,a=Object(y.a)(r.records),e.prev=3,a.s();case 5:if((c=a.n()).done){e.next=23;break}o=c.value,console.log("Record type:  "+o.recordType),console.log("MIME type:    "+o.mediaType),console.log("Record id:    "+o.id),n.mediaType=o.mediaType,n.id=o.id,e.t0=o.recordType,e.next="text"===e.t0?15:"url"===e.t0?18:20;break;case 15:return i=new TextDecoder(o.encoding),n.recordType="Text: ".concat(i.decode(o.data)," (").concat(o.lang,")"),e.abrupt("break",21);case 18:return n.recordType="URL: ".concat(o.recordType),e.abrupt("break",21);case 20:n.recordType="Default: ".concat(o.recordType);case 21:e.next=5;break;case 23:e.next=28;break;case 25:e.prev=25,e.t1=e.catch(3),a.e(e.t1);case 28:return e.prev=28,a.f(),e.finish(28);case 31:return e.abrupt("return",n);case 32:case"end":return e.stop()}}),e,null,[[3,25,28,31]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=r.useState("booting up... "),t=Object(i.a)(e,2),n=t[0],a=t[1];return r.useEffect((function(){var e=new NDEFReader;e.scan().then((function(){a("pending..."),e.onerror=function(){a("Cannot read data from the NFC tag. Try another one?")},e.onreading=function(e){console.log("NDEF message read."),N(e).then((function(e){return a(JSON.stringify(e))}))}})).catch((function(e){a("Error! Scan failed to start: ".concat(e,"."))}))}),[]),r.createElement("div",{className:"home-wrapper"},r.createElement(h,null),r.createElement("h2",null,"Scan your NFC token!"),"Result: ",JSON.stringify(n))},k=function(){var e=r.useState("...pending"),t=Object(i.a)(e,2),n=t[0],a=t[1];return r.useEffect((function(){(new NDEFWriter).write("Hello World").then((function(){a("Message written.")})).catch((function(e){a("Write failed :-( try again: ".concat(e,"."))}))}),[]),r.createElement("div",{className:"home-wrapper"},r.createElement(h,null),r.createElement("h2",null,"Scan your NFC token to write to it!"),n)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,null,a.a.createElement(u.a,{path:"/",exact:!0,component:b}),a.a.createElement(u.a,{path:"/simplereading",exact:!0,component:O}),a.a.createElement(u.a,{path:"/simplewriting",exact:!0,component:k}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.4130fa5e.chunk.js.map