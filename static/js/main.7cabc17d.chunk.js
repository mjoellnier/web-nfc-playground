(this["webpackJsonpweb-nfc-playground"]=this["webpackJsonpweb-nfc-playground"]||[]).push([[0],{14:function(e,n,t){},19:function(e,n,t){e.exports=t(31)},24:function(e,n,t){},25:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(16),c=t.n(r),i=(t(24),t(8)),l=(t(14),t(25),t(9)),s=function(e){var n=e.text,t=e.target;return a.createElement(l.b,{to:t,className:"main-menu-button-wrapper"},a.createElement("div",{className:"main-menu-button"},n))},u=function(){var e=a.useState(!1),n=Object(i.a)(e,2),t=n[0],o=n[1],r=a.useState(!1),c=Object(i.a)(r,2),l=c[0],u=c[1];return a.useEffect((function(){console.log("Checking your NFC capabilities:"),"NDEFReader"in window?(console.log("\u2705 You can read NFC tags!"),o(!0)):console.log("\u274c You can NOT read NFC tags!"),"NDEFWriter"in window?(console.log("\u2705 You can write NFC tags!"),u(!0)):console.log("\u274c You can NOT write read NFC tags!")}),[]),a.createElement("div",{className:"home-wrapper"},a.createElement("div",{id:"nfc-capability-intro"},a.createElement("h1",null,"Your NFC capabilites:"),a.createElement("h3",null,"Reading NFC: ",t?"\u2705":"\u274c"),a.createElement("h3",null,"Writing NFC: ",l?"\u2705":"\u274c")),a.createElement(s,{target:"/simplereading",text:"Simple Reading"}))},m=function(){var e=a.useState("...pending"),n=Object(i.a)(e,2),t=n[0],o=n[1];return a.useEffect((function(){var e=new NDEFReader;e.scan().then((function(){alert("Scan started successfully."),e.onerror=function(){o("Cannot read data from the NFC tag. Try another one?")},e.onreading=function(e){console.log("NDEF message read."),o(e)}})).catch((function(e){alert("Error! Scan failed to start: ".concat(e,"."))}))}),[]),a.createElement("div",{className:"home-wrapper"},a.createElement("h2",null,"Scan your NFC token!"),"Result: ",JSON.stringify(t))},d=t(5);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,null,o.a.createElement(d.a,{path:"/",exact:!0,component:u}),o.a.createElement(d.a,{path:"/simplereading",exact:!0,component:m}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.7cabc17d.chunk.js.map