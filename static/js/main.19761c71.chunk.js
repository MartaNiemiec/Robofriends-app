(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(7),c=t.n(r),i=(t(13),t(1)),s=t(2),l=t(4),u=t(3),h=t(5),d=function(e){var n=e.name,t=e.email,o=e.id;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 "},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x200")}),"    ",a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,t)))},f=function(e){var n=e.robots;return a.a.createElement("div",null,n.map(function(e,t){return a.a.createElement(d,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})}))},m=function(e){e.searchfield;var n=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},g=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}}," ",e.children)},p=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).state={hasError:!1},t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(o.Component),v=(t(15),function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(l.a)(this,Object(u.a)(n).call(this))).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e.setState({robots:n})})}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,o=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return n.length?a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(m,{searchChange:this.onSearchChange}),a.a.createElement(g,null,a.a.createElement(p,null,a.a.createElement(f,{robots:o})))):a.a.createElement("h1",null,"Loading...")}}]),n}(o.Component)),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n.onSuccess&&n.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(17);c.a.render(a.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Robofriends-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/Robofriends-app","/service-worker.js");b?(function(e,n){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):w(n,e)})}}()},8:function(e,n,t){e.exports=t(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.19761c71.chunk.js.map