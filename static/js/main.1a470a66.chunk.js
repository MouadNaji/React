(this["webpackJsonpreact-projekt"]=this["webpackJsonpreact-projekt"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),l=(n(12),n(2));n(13);function i(e){return console.log(e),o.a.createElement("header",null,"HEADER:",o.a.createElement(m,{name:e.name}))}function m(e){return o.a.createElement("h1",null,e.name,"\xb4s Profile")}function s(e){return o.a.createElement("p",{className:"footer"},e.name,"'s Footer")}var u=n(1),p=n.n(u);function f(e){var t=Object(a.useState)(0),n=Object(l.a)(t,2),c=n[0],r=n[1],i=e.likes+c;return o.a.createElement("div",{className:"posts"},o.a.createElement("h2",null,e.author),o.a.createElement("h2",null,e.message),o.a.createElement("h3",null,i," likes"),o.a.createElement(p.a,{color:"primary",onClick:function(){r(c+1)}},"Like post"),o.a.createElement(d,null),o.a.createElement("ol",null,e.comments.map((function(e){return o.a.createElement(E,{key:e._id,author:e.author,comment:e.comment})}))))}function d(){return o.a.createElement("p",null,"CommentForm")}function E(e){return o.a.createElement("div",null,o.a.createElement("li",null,e.author," said: ",e.comment))}function h(){return o.a.createElement("p",null)}var k=n(3);n(20);function v(e){return o.a.createElement("div",{className:"feed"},o.a.createElement(k.SwipeableList,null,o.a.createElement(k.SwipeableListItem,{swipeLeft:{content:o.a.createElement("div",null,"React Component"),action:function(){return console.info("swipe action triggered")}},swipeRight:{content:o.a.createElement("div",null,"Eksempel p\xe5"),action:function(){return console.info("swipe action triggered")}}},o.a.createElement("div",{className:"eksempel"},"Mouad Naji"))),o.a.createElement(h,null),e.posts.map((function(e){return o.a.createElement(f,{key:e._id,likes:e.likes,comments:e.comments,message:e.message,author:e.Author})})))}var g=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("https://movies-cb29.restdb.io/rest/posts?fetchchildren=true",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"5d9108cc1ce70f637985514f","cache-control":"no-cache"}}).then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement(i,{name:"Mouad"}),o.a.createElement(p.a,{onClick:function(){c(n.concat({message:"im having a decent day today",Author:"Peter",_id:"",likes:"",comments:""}))}},"Add post"),o.a.createElement(v,{posts:n}),o.a.createElement(s,{name:"Mouad"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){e.exports=n(21)}},[[7,1,2]]]);
//# sourceMappingURL=main.1a470a66.chunk.js.map