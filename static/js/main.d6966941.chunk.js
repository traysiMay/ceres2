(this.webpackJsonpceres=this.webpackJsonpceres||[]).push([[0],{149:function(a,t,e){"use strict";e.r(t);var i=e(10),n=e(0),r=e.n(n),o=e(21),s=e.n(o),c=(e(92),e(32)),x=e(12),m=e(40),l=e(4),p=e(5),k=e(22),d=e.n(k),h=e(74),u=e(75);function y(){var a=Object(l.a)(["\n  width: 500px;\n  margin: 2rem;\n  border: 3px black solid;\n  box-shadow: 14px 14px #584848;\n  max-width: 80%;\n  animation: "," 5s linear infinite;\n"]);return y=function(){return a},a}function f(){var a=Object(l.a)(["\n0% {\n  box-shadow: 14px 14px #584848;\n}\n50% {\n  box-shadow: 14px 14px #FFFFFF;\n}\n100% {\n  box-shadow: 14px 14px #584848;\n}\n"]);return f=function(){return a},a}function E(){var a=Object(l.a)(["\n  font-family: Arial;\n  font-size: 5rem;\n  letter-spacing: 5px;\n  text-align: center;\n"]);return E=function(){return a},a}var b=p.a.div(E()),v=Object(p.b)(f()),A=p.a.div(y(),v),D=Object(i.c)((function(a){var t=a.view;return{loading:t.loading,previews:t.previews}}))((function(a){var t=a.history,e=a.loading,i=a.previews,o=Object(n.useState)(!1),s=Object(m.a)(o,2),c=s[0],x=s[1];return Object(n.useEffect)((function(){if(c){var a=1e4*Math.random();setTimeout((function(){x(!1)}),a)}}),[c]),e?r.a.createElement("div",null,r.a.createElement(d.a,{options:{loop:!0,autoplay:!0,animationData:u}})):r.a.createElement("div",null,r.a.createElement("div",{style:{maxWidth:"500px",margin:"auto"}},r.a.createElement(d.a,{isStopped:c,options:{loop:!1,autoplay:!0,animationData:h},eventListeners:[{eventName:"complete",callback:function(){return x(!0)}}]})),r.a.createElement("div",{style:{display:window.innerWidth>768?"flex":"block"}},i.map((function(a){return r.a.createElement(A,{key:a.title},r.a.createElement("img",{style:{display:"block",margin:"auto",width:"100%"},src:a.url,onClick:function(){return t.push("/place/".concat(a.folder))}}),r.a.createElement(b,null,a.folder))}))))})),g=function(){return r.a.createElement("div",null,"what the shit are you looking for?")},B=e(23),G=e(79),w=e.n(G),V=e(39),O=e(30),F=e.n(O),S="https://traysimay.github.io/chimp-cms";function _(){var a=Object(l.a)(["\n  font-family: Euclid;\n  font-size: 1rem;\n  margin: 0.5rem 0;\n"]);return _=function(){return a},a}function j(){var a=Object(l.a)(["\n  font-family: Arial;\n  font-size: 2rem;\n"]);return j=function(){return a},a}function T(){var a=Object(l.a)(["\n  font-weight: 600;\n  margin: 1.7rem 1.2rem;\n"]);return T=function(){return a},a}var P=p.a.div(T()),N=p.a.div(j()),C=p.a.div(_()),I=function(a){var t,e=a.description,i=a.id,o=a.orientation,s=a.title,c=a.url,x=Object(n.useState)(!1),l=Object(m.a)(x,2),p=l[0],k=l[1];return r.a.createElement(w.a,{loader:function(){return r.a.createElement("div",null,"FUCK")},height:window.innerHeight/2,offset:100},r.a.createElement("div",null,!p&&r.a.createElement(d.a,{height:400,width:400,options:{loop:!0,autoplay:!0,animationData:V}}),r.a.createElement("img",(t={alt:"forg",style:{display:p?"block":"none",maxWidth:"500px",transform:"portrait"===o?"rotate(90deg)":""},src:c},Object(B.a)(t,"src","".concat(S,"/imgs/").concat(i,".png")),Object(B.a)(t,"width","100%"),Object(B.a)(t,"onLoad",(function(a){k(!0)})),Object(B.a)(t,"onError",(function(){return k(!0)})),t)),r.a.createElement(P,null,r.a.createElement(N,null,s),r.a.createElement(C,null,e))))};function L(){var a=Object(l.a)(["\n  font-family: Arial;\n  font-size: 6rem;\n  margin: 1rem 5.1% 0.2rem;\n"]);return L=function(){return a},a}var R=p.a.div(L()),H={position:"fixed",left:0,top:0,bottom:0,right:0,backgroundColor:"rgba(0,0,0,.8)",color:"#FFF",fontSize:"40px"},z=function(a){var t=a.children,e=a.onClick;return Object(o.createPortal)(r.a.createElement("div",{style:H,onClick:e},t),document.getElementById("modal_root"))};function M(){var a=Object(l.a)(["\n  display: block;\n  max-width: 500px;\n  @media only screen and (min-width: 768px) {\n    /* margin: 1rem 3rem; */\n  }\n"]);return M=function(){return a},a}function J(){var a=Object(l.a)(["\n  @media only screen and (min-width: 768px) {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\n    margin: 1rem -3rem 0rem 4rem;\n    /* flex-direction: row;\n    display: flex;\n    flex-wrap: wrap;\n    overflow: none; */\n  }\n"]);return J=function(){return a},a}var W=p.a.div(J()),U=p.a.div(M()),X=Object(i.c)((function(a){return{photos:a.view.photos}}))((function(a){var t=a.history,e=a.match,i=a.photos,n=e.params.place;return document.getElementsByTagName("body")[0].style.overflow="",document.getElementsByTagName("body")[0].style.height="",r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(x.a,{path:"".concat(e.url,"/view/:pic"),render:function(a){var e=a.match,n=i.filter((function(a){return a.id===parseInt(e.params.pic)}))[0];return document.getElementsByTagName("body")[0].style.overflow="hidden",document.getElementsByTagName("body")[0].style.height="100%",r.a.createElement(z,{onClick:function(){t.goBack()}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},r.a.createElement(d.a,{height:400,width:400,options:{loop:!0,autoplay:!0,animationData:V}}),n&&r.a.createElement("img",{width:"landscape"===n.orientation?"100%":"",height:"portrait"===n.orientation?"100%":"",src:n.url,style:{transform:"portrait"===n.orientation?"rotate(90deg)":""},onLoad:function(a){},onError:function(){return console.log("img error")}})))}}),r.a.createElement(R,null,n),r.a.createElement(W,null,i.filter((function(a){return a.folder===n})).map((function(a){return r.a.createElement(U,{key:a.url,to:"".concat(e.url,"/chicken/").concat(a.id),onClick:function(){t.push("".concat(e.url,"/view/").concat(a.id))}},r.a.createElement(I,{id:a.id,url:a.url,title:a.title,description:a.description,orientation:a.orientation}))}))))})),K=r.a.createElement("div",null,r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/",component:D}),r.a.createElement(x.a,{path:"/place/:place",component:X}),r.a.createElement(x.a,{component:g}))),q=function(a){var t=a.history;return r.a.createElement(c.a,{history:t,basename:"https://eyes.klevecz.net"},K)},Q=e(9),Y=e(17),Z=e(72),$=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return a+1;case"DECREMENT":return a-1;default:return a}},aa=e(56),ta=e(13),ea={view:!1,loading:!0,topic:"NOLA",photos:[],previews:[]},ia=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ea,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW":return Object(ta.a)({},a,{view:!0});case"HIDE":return Object(ta.a)({},a,{view:!1});case"SEED":return Object(ta.a)({},a,{photos:Object(aa.a)(t.photos),previews:Object(aa.a)(t.previews)});case"FETCHING_DATA":return Object(ta.a)({},a,{loading:!0});case"FETCHED_DATA":return Object(ta.a)({},a,{loading:!1});case"CHANGE_TOPIC":return Object(ta.a)({},a,{topic:t.topic});default:return a}},na=function(a){return Object(Y.c)({count:$,view:ia,router:Object(c.b)(a)})},ra=e(81),oa=Object(Q.a)();var sa=function(a){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.d;return Object(Y.e)(na(oa),a,t(Object(Y.a)(ra.a,Object(Z.a)(oa))))}();sa.dispatch((function(a){var t,e,i,n;return F.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a({type:"FETCHING_DATA"}),r.next=3,F.a.awrap(fetch("".concat(S,"/").concat("data/frog.json")));case 3:return t=r.sent,r.next=6,F.a.awrap(t.json());case 6:e=r.sent,i=e.previews,n=e.photos,a({type:"SEED",previews:i,photos:n}),a({type:"FETCHED_DATA"});case 10:case"end":return r.stop()}}))}));s.a.render(r.a.createElement(i.a,{store:sa},r.a.createElement(q,{history:oa})),document.getElementById("root"))},39:function(a){a.exports=JSON.parse('{"v":"5.4.1","fr":15,"ip":0,"op":30,"w":500,"h":500,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[1.973,7.801,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":0,"s":[181,181,100],"e":[180,180,100]},{"t":29}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[101.117,101.117],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":2,"s":[12],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":17,"s":[100],"e":[25]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":29,"s":[25],"e":[30]},{"t":30}],"ix":5},"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":8},"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1.973,7.801],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":30,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[17.883,51.883,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":0,"s":[100,100,100],"e":[100,100,100]},{"t":29}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[263.766,263.766],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30,"ix":5},"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":8},"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.883,51.883],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":30,"st":0,"bm":0}],"markers":[]}')},74:function(a){a.exports=JSON.parse('{"v":"5.5.2","fr":29.9700012207031,"ip":0,"op":7.00000028511585,"w":1080,"h":1080,"nm":"eye","ddd":1,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"iris_cent","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.17],"y":[1.001]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[97.859]},{"t":3.85375015696646,"s":[0.93]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[542.813,493.843,0],"ix":2},"a":{"a":0,"k":[12.976,13.721,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-7.44],[7.029,0],[0,7.44],[-7.028,0]],"o":[[0,7.44],[-7.028,0],[0,-7.44],[7.029,0]],"v":[[12.727,0],[-0.001,13.471],[-12.727,0],[-0.001,-13.471]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0,0,0,1]},{"t":2.00000008146167,"s":[1,0,0,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.976,13.721],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":8.00000032584668,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"iris_mid","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.075],"y":[1.057]},"t":0,"s":[100]},{"t":4.00000016292334,"s":[0.93]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[542.59,493.944,0],"ix":2},"a":{"a":0,"k":[49.429,49.564,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-13.947],[13.873,0],[0,13.948],[-13.874,0]],"o":[[0,13.948],[-13.874,0],[0,-13.947],[13.873,0]],"v":[[25.12,0],[0,25.254],[-25.12,0],[0,-25.254]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0,0,0,1]},{"t":2.00000008146167,"s":[1,0,1,1]}],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9.724,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[49.43,49.564],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":8.00000032584668,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"iris_outer","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.338],"y":[1.769]},"o":{"x":[0.333],"y":[0.138]},"t":-0.97,"s":[100]},{"t":4.03000016414526,"s":[6.516]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[542.59,495.97,0],"ix":2},"a":{"a":0,"k":[112.093,115.334,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-32.371],[30.58,0],[0,32.371],[-30.581,0]],"o":[[0,32.371],[-30.581,0],[0,-32.371],[30.58,0]],"v":[[55.37,0],[0,58.612],[-55.37,0],[0,-58.612]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0,0,0,1]},{"t":1.00000004073083,"s":[1,0,0,1]}],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":22.689,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[112.093,115.335],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":8.00000032584668,"st":0,"bm":0},{"ddd":1,"ind":4,"ty":4,"nm":"lashes_top","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"rx":{"a":0,"k":0,"ix":8},"ry":{"a":0,"k":0,"ix":9},"rz":{"a":0,"k":0,"ix":10},"or":{"a":0,"k":[0,0,0],"ix":7},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[559.908,280.159,0],"to":[0,41.5,0],"ti":[0,-41.5,0]},{"t":5.00000020365417,"s":[559.908,529.159,0]}],"ix":2},"a":{"a":0,"k":[391.658,156.909,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,100,100]},{"t":5.00000020365417,"s":[100,-63.093,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.495,-2.931],[-2.079,4.788],[-2.294,4.622],[-5.231,8.749],[-12.315,16.076],[-14.23,14.605],[-7.746,6.817],[-4.096,3.238],[-4.504,2.925],[2.075,-4.79],[2.293,-4.623],[5.233,-8.749],[12.346,-16.054],[14.238,-14.599],[7.742,-6.821],[4.092,-3.241]],"o":[[1.677,-5.098],[2.079,-4.787],[4.598,-9.237],[10.445,-17.515],[12.337,-16.06],[7.107,-7.308],[3.878,-3.405],[4.094,-3.238],[-1.668,5.105],[-2.076,4.79],[-4.594,9.239],[-10.454,17.508],[-12.366,16.036],[-7.11,7.307],[-3.876,3.406],[-4.09,3.24]],"v":[[-74.048,96.339],[-68.309,81.594],[-61.742,67.484],[-46.976,40.521],[-12.684,-9.748],[27.036,-55.847],[49.298,-77.049],[61.256,-87.015],[74.048,-96.339],[68.328,-81.579],[61.773,-67.459],[47.012,-40.493],[12.683,9.75],[-27.072,55.818],[-49.329,77.026],[-61.276,87]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[709.018,214.952],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.546,-3.73],[-0.749,4.937],[-0.997,4.829],[-2.74,9.338],[-7.624,17.75],[-9.84,16.793],[-5.651,8.081],[-3.082,3.929],[-3.556,3.726],[0.745,-4.938],[0.996,-4.83],[2.743,-9.337],[7.658,-17.734],[9.85,-16.788],[5.646,-8.083],[3.079,-3.932]],"o":[[0.281,-5.138],[0.747,-4.937],[2.007,-9.654],[5.456,-18.684],[7.648,-17.739],[4.911,-8.4],[2.831,-4.038],[3.083,-3.93],[-0.272,5.143],[-0.744,4.939],[-2.002,9.656],[-5.465,18.68],[-7.682,17.725],[-4.914,8.4],[-2.829,4.039],[-3.079,3.931]],"v":[[-45.917,106.42],[-44.25,91.36],[-41.625,76.714],[-34.482,48.237],[-14.689,-6.338],[11.393,-58.201],[27.214,-82.932],[36.083,-94.884],[45.917,-106.42],[44.273,-91.351],[41.661,-76.698],[34.524,-48.219],[14.688,6.337],[-11.435,58.182],[-27.25,82.916],[-36.104,94.875]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[521.545,159.61],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.619,-5.41],[1.426,5.32],[1.18,5.327],[1.501,10.68],[0.663,21.427],[-1.75,21.498],[-1.678,10.773],[-1.136,5.395],[-1.63,5.41],[-1.43,-5.32],[-1.186,-5.327],[-1.497,-10.679],[-0.625,-21.428],[1.762,-21.499],[1.675,-10.773],[1.13,-5.395]],"o":[[-1.934,-5.305],[-1.445,-5.319],[-2.306,-10.656],[-3.021,-21.357],[-0.635,-21.428],[0.868,-10.749],[0.871,-5.387],[1.115,-5.394],[1.946,5.304],[1.451,5.319],[2.309,10.656],[3.012,21.358],[0.598,21.429],[-0.87,10.749],[-0.865,5.387],[-1.11,5.394]],"v":[[3.8,128.568],[-1.106,112.627],[-4.965,96.656],[-10.637,64.653],[-15.972,0.471],[-14.464,-63.914],[-10.678,-96.196],[-7.748,-112.367],[-3.763,-128.568],[1.168,-112.628],[5.043,-96.657],[10.719,-64.654],[16.009,-0.471],[14.455,63.916],[10.675,96.197],[7.761,112.367]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[336.777,128.819],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.153,-4.594],[2.693,3.511],[2.44,3.607],[4.122,7.501],[6.063,15.834],[3.806,16.694],[1.158,8.629],[0.318,4.414],[-0.164,4.597],[-2.699,-3.508],[-2.442,-3.607],[-4.12,-7.503],[-6.028,-15.848],[-3.796,-16.698],[-1.163,-8.628],[-0.322,-4.413]],"o":[[-3.169,-3.329],[-2.695,-3.509],[-4.869,-7.218],[-8.268,-14.995],[-6.037,-15.845],[-1.913,-8.343],[-0.575,-4.317],[-0.318,-4.415],[3.179,3.325],[2.698,3.509],[4.874,7.216],[8.259,14.998],[6.002,15.857],[1.909,8.344],[0.576,4.316],[0.322,4.412]],"v":[[36.199,95.076],[27.53,84.769],[19.835,74.092],[6.372,52.004],[-14.946,5.692],[-29.864,-43.056],[-34.492,-68.507],[-35.832,-81.605],[-36.188,-95.076],[-27.496,-84.779],[-19.788,-74.105],[-6.319,-52.019],[14.956,-5.691],[29.832,43.072],[34.466,68.522],[35.82,81.614]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[158.524,180.678],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.271,-3.302],[2.7,1.462],[2.483,1.626],[4.32,3.742],[6.779,8.894],[4.854,10.352],[1.792,5.656],[0.673,2.998],[0.262,3.309],[-2.703,-1.459],[-2.484,-1.625],[-4.319,-3.743],[-6.748,-8.917],[-4.846,-10.358],[-1.796,-5.653],[-0.676,-2.995]],"o":[[-3.105,-1.155],[-2.7,-1.462],[-4.957,-3.259],[-8.659,-7.468],[-6.756,-8.91],[-2.435,-5.17],[-0.892,-2.832],[-0.673,-2.997],[3.113,1.148],[2.703,1.459],[4.961,3.256],[8.65,7.475],[6.727,8.933],[2.433,5.172],[0.893,2.831],[0.677,2.994]],"v":[[40.515,53.48],[31.915,49.474],[24.147,44.837],[10.253,34.319],[-12.752,9.66],[-30.298,-19.133],[-36.657,-35.359],[-39.006,-44.102],[-40.515,-53.48],[-31.896,-49.488],[-24.116,-44.86],[-10.216,-34.347],[12.751,-9.66],[30.262,19.161],[36.626,35.383],[38.986,44.117]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[40.765,260.088],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":8.00000032584668,"st":0,"bm":0},{"ddd":1,"ind":5,"ty":4,"nm":"lashes_bottom","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"rx":{"a":0,"k":0,"ix":8},"ry":{"a":0,"k":0,"ix":9},"rz":{"a":0,"k":0,"ix":10},"or":{"a":0,"k":[0,0,0],"ix":7},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[524.222,689.092,0],"to":[0,-16.667,0],"ti":[0,16.667,0]},{"t":6.00000024438501,"s":[524.222,589.092,0]}],"ix":2},"a":{"a":0,"k":[305.474,123.957,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,100,100]},{"t":6.00000024438501,"s":[100,39.373,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.502,3.119],[-2.131,-2.017],[-1.898,-2.115],[-3.095,-4.524],[-4.17,-9.893],[-2.082,-10.764],[-0.352,-5.67],[0.067,-2.937],[0.512,-3.122],[2.137,2.016],[1.899,2.114],[3.093,4.525],[4.137,9.905],[2.073,10.77],[0.357,5.669],[-0.063,2.936]],"o":[[2.573,1.833],[2.134,2.017],[3.786,4.236],[6.21,9.038],[4.145,9.901],[1.049,5.38],[0.171,2.837],[-0.066,2.936],[-2.583,-1.829],[-2.136,-2.014],[-3.79,-4.233],[-6.202,-9.042],[-4.114,-9.915],[-1.047,-5.38],[-0.172,-2.836],[0.061,-2.934]],"v":[[-24.862,-59.423],[-17.921,-53.598],[-11.88,-47.398],[-1.582,-34.25],[13.824,-5.785],[23.307,25.155],[25.428,41.722],[25.587,50.382],[24.836,59.423],[17.872,53.607],[11.82,47.413],[1.516,34.268],[-13.85,5.787],[-23.294,-25.171],[-25.421,-41.735],[-25.591,-50.39]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[585.044,83.441],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.776,3.537],[-1.982,-2.798],[-1.735,-2.864],[-2.738,-5.925],[-3.361,-12.416],[-1.175,-13.003],[0.134,-6.695],[0.32,-3.416],[0.787,-3.541],[1.986,2.797],[1.738,2.864],[2.736,5.926],[3.326,12.425],[1.165,13.006],[-0.129,6.693],[-0.316,3.415]],"o":[[2.442,2.674],[1.982,2.798],[3.461,5.731],[5.497,11.843],[3.336,12.424],[0.595,6.5],[-0.072,3.348],[-0.322,3.415],[-2.453,-2.672],[-1.986,-2.797],[-3.465,-5.729],[-5.488,-11.847],[-3.303,-12.433],[-0.593,-6.499],[0.071,-3.349],[0.316,-3.415]],"v":[[-20.007,-74.548],[-13.493,-66.307],[-7.923,-57.812],[1.351,-40.321],[14.467,-3.885],[21.382,34.215],[22.095,54.001],[21.509,64.146],[19.967,74.548],[13.431,66.311],[7.846,57.82],[-1.434,40.332],[-14.506,3.884],[-21.379,-34.228],[-22.1,-54.011],[-21.525,-64.153]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[414.887,127.739],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.34,3.769],[-0.474,-4.253],[-0.224,-4.211],[0.301,-8.292],[2.761,-16.211],[4.992,-15.827],[3.232,-7.787],[1.875,-3.848],[2.351,-3.768],[0.479,4.254],[0.225,4.211],[-0.304,8.291],[-2.796,16.206],[-5.002,15.825],[-3.227,7.788],[-1.871,3.85]],"o":[[0.944,4.334],[0.475,4.254],[0.435,8.418],[-0.581,16.586],[-2.786,16.207],[-2.487,7.915],[-1.621,3.893],[-1.874,3.849],[-0.954,-4.336],[-0.479,-4.254],[-0.441,-8.419],[0.591,-16.585],[2.82,-16.201],[2.489,-7.915],[1.62,-3.893],[1.87,-3.849]],"v":[[16.769,-97.237],[18.773,-84.378],[19.815,-71.681],[19.992,-46.621],[14.803,2.544],[3.288,50.621],[-5.269,74.178],[-10.51,85.79],[-16.724,97.237],[-18.751,84.371],[-19.805,71.674],[-19.989,46.613],[-14.757,-2.547],[-3.2,-50.616],[5.35,-74.173],[10.578,-85.788]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[244.14,150.427],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.574,3.044],[-0.178,-3.807],[0.067,-3.74],[0.866,-7.275],[3.842,-13.964],[6.023,-13.359],[3.731,-6.48],[2.118,-3.169],[2.584,-3.04],[0.183,3.808],[-0.066,3.739],[-0.869,7.274],[-3.876,13.954],[-6.033,13.355],[-3.726,6.48],[-2.114,3.171]],"o":[[0.638,3.935],[0.179,3.808],[-0.145,7.473],[-1.71,14.554],[-3.867,13.956],[-3.003,6.682],[-1.871,3.238],[-2.119,3.17],[-0.647,-3.937],[-0.183,-3.808],[0.14,-7.476],[1.72,-14.551],[3.901,-13.948],[3.005,-6.681],[1.869,-3.24],[2.114,-3.17]],"v":[[23.246,-83.732],[24.349,-72.154],[24.51,-60.835],[22.97,-38.719],[14.469,4.009],[-0.217,45.023],[-10.297,64.771],[-16.279,74.383],[-23.212,83.732],[-24.337,72.147],[-24.511,60.828],[-22.977,38.708],[-14.435,-4.008],[0.293,-45.01],[10.367,-64.759],[16.335,-74.376]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[120.98,104.509],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.659,1.413],[0.147,-2.772],[0.371,-2.652],[1.409,-4.939],[4.745,-8.838],[6.736,-7.761],[4.024,-3.525],[2.243,-1.638],[2.667,-1.408],[-0.143,2.774],[-0.369,2.651],[-1.412,4.938],[-4.776,8.821],[-6.744,7.757],[-4.02,3.527],[-2.24,1.639]],"o":[[0.273,2.999],[-0.146,2.771],[-0.751,5.294],[-2.799,9.891],[-4.769,8.825],[-3.36,3.885],[-2.017,1.76],[-2.243,1.639],[-0.282,-3.004],[0.142,-2.774],[0.747,-5.299],[2.808,-9.886],[4.799,-8.81],[3.363,-3.883],[2.016,-1.761],[2.238,-1.641]],"v":[[28.635,-52.94],[28.714,-44.344],[27.932,-36.213],[24.67,-20.873],[13.197,7.134],[-3.923,32.088],[-14.981,43.213],[-21.37,48.311],[-28.626,52.94],[-28.725,44.333],[-27.956,36.197],[-24.699,20.852],[-13.188,-7.134],[3.969,-32.068],[15.022,-43.196],[21.399,-48.3]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[29.158,53.19],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":8.00000032584668,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"eye_white","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[535.298,497.56,0],"ix":2},"a":{"a":0,"k":[368.957,244.41,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,100,100]},{"t":5.00000020365417,"s":[100,2.098,100]}],"ix":6}},"ao":0,"ef":[{"ty":34,"nm":"Puppet","np":6,"mn":"ADBE FreePin3","ix":1,"en":1,"ef":[{"ty":7,"nm":"Puppet Engine","mn":"ADBE FreePin3 Puppet Engine","ix":1,"v":{"a":0,"k":2,"ix":1}},{"ty":0,"nm":"Mesh Rotation Refinement","mn":"ADBE FreePin3 Auto Rotate Pins","ix":2,"v":{"a":0,"k":20,"ix":2}},{"ty":7,"nm":"On Transparent","mn":"ADBE FreePin3 On Transparent","ix":3,"v":{"a":0,"k":0,"ix":3}},{"ty":29.9700012207031,"nm":"arap","np":3,"mn":"ADBE FreePin3 ARAP Group","ix":4,"en":1,"ef":[{"ty":6,"nm":"Auto-traced Shapes","mn":"ADBE FreePin3 Outlines","ix":1,"v":0},{"ty":1,"nm":"Mesh","np":1,"mn":"ADBE FreePin3 Mesh Group","ix":2,"en":1,"ef":[]}]}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-336.006,203.116],[0,0],[0,0]],"o":[[0,0],[0,0],[-336.006,-203.116],[0,0]],"v":[[-325.742,-1.921],[325.742,-1.921],[325.742,1.92],[-325.742,1.92]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.905],"y":[-0.128]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[17.286]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[223.153]},{"t":15.0000006109625,"s":[199.145]}],"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[368.957,244.41],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":8.00000032584668,"st":0,"bm":0}],"markers":[]}')},75:function(a){a.exports=JSON.parse('{"v":"5.5.2","fr":29.9700012207031,"ip":0,"op":50.0000020365418,"w":1080,"h":1080,"nm":"Comp 1","ddd":0,"assets":[],"fonts":{"list":[{"fName":"TimesNewRomanPS-BoldItalicMT","fFamily":"Times New Roman","fStyle":"Bold Italic","ascent":68.1860961914063}]},"layers":[{"ddd":0,"ind":1,"ty":5,"nm":"HELLO","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[151,664,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[301.475,544.444,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":8,"s":[311.733,1378.4,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":24,"s":[311.733,-551.368,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":45,"s":[351.536,1210.471,100]},{"t":49.0000019958109,"s":[301.475,544.444,100]}],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"s":72,"f":"TimesNewRomanPS-BoldItalicMT","t":"HELLO","j":0,"tr":0,"lh":86.4,"ls":0,"fc":[0,0,0]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":51.0000020772726,"st":0,"bm":0}],"markers":[],"chars":[{"ch":"H","size":72,"style":"Bold Italic","w":77.78,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-1.53,1.286],[-2.995,0],[0,0],[0,0],[0,0],[-0.863,-0.684],[0,-1.334],[0.716,-2.441],[0,0],[1.448,-1.221],[3.125,0],[0,0],[0,0],[0,0],[0.993,0.732],[0,1.172],[-0.814,2.702],[0,0],[0,0],[0,0],[1.481,-1.221],[3.125,0],[0,0],[0,0],[0,0],[1.139,0.847],[0,1.205],[-0.814,2.767],[0,0],[-1.66,1.367],[-3.223,0],[0,0],[0,0],[0,0],[-0.879,-0.684],[0,-1.302],[0.716,-2.539],[0,0],[0,0]],"o":[[1.27,-4.199],[1.53,-1.286],[0,0],[0,0],[0,0],[3.255,0.228],[0.862,0.684],[0,1.4],[0,0],[-1.237,4.265],[-1.449,1.221],[0,0],[0,0],[0,0],[-2.93,-0.065],[-0.993,-0.732],[0,-1.302],[0,0],[0,0],[0,0],[-1.237,4.265],[-1.482,1.221],[0,0],[0,0],[0,0],[-2.995,-0.065],[-0.879,-0.618],[0,-1.204],[0,0],[1.172,-4.036],[1.66,-1.367],[0,0],[0,0],[0,0],[3.352,0.228],[0.879,0.684],[0,1.335],[0,0],[0,0],[0,0]],"v":[[35.303,-54.248],[39.502,-62.476],[46.289,-64.404],[47.021,-66.211],[14.648,-66.211],[14.111,-64.404],[20.288,-63.037],[21.582,-60.01],[20.508,-54.248],[8.203,-11.865],[4.175,-3.638],[-2.686,-1.807],[-3.223,0],[28.613,0],[29.102,-1.807],[23.218,-3.003],[21.729,-5.859],[22.949,-11.865],[28.613,-31.592],[52.734,-31.592],[47.021,-11.865],[42.944,-3.638],[36.035,-1.807],[35.303,0],[67.578,0],[68.066,-1.807],[61.865,-3.174],[60.547,-5.908],[61.768,-11.865],[74.072,-54.248],[78.32,-62.354],[85.645,-64.404],[86.182,-66.211],[53.271,-66.211],[52.734,-64.404],[59.082,-63.037],[60.4,-60.059],[59.326,-54.248],[53.955,-35.742],[29.736,-35.742]],"c":true},"ix":2},"nm":"H","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"H","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"Times New Roman"},{"ch":"E","size":72,"style":"Bold Italic","w":66.7,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-2.263,-0.96],[-1.367,-2.083],[-0.13,-3.255],[0,0],[0,0],[0,0],[0,0],[-0.879,-0.667],[0,-1.237],[0.684,-2.376],[0,0],[1.53,-1.253],[3.32,0],[0,0],[0,0],[0,0],[0,0],[4.915,-2.36],[5.566,0],[1.041,0.652],[0,0.749],[-0.554,1.953],[0,0],[0,0],[-1.107,-0.325],[-1.058,-1.139],[0,-1.79],[0.293,-1.725],[0,0],[0,0],[0,0],[2.718,-1.563],[5.924,0],[0,0],[0,0]],"o":[[5.078,0],[2.262,0.961],[0.879,1.335],[0,0],[0,0],[0,0],[0,0],[3.125,0.228],[0.879,0.668],[0,1.367],[0,0],[-1.237,4.265],[-1.53,1.254],[0,0],[0,0],[0,0],[0,0],[-3.906,4.785],[-4.916,2.361],[-2.898,0],[-0.716,-0.455],[0,-0.944],[0,0],[0,0],[3.483,0],[1.692,0.488],[1.057,1.14],[0,1.074],[0,0],[0,0],[0,0],[-1.888,3.972],[-2.718,1.563],[0,0],[0,0],[0,0]],"v":[[43.994,-62.549],[55.005,-61.108],[60.449,-56.543],[61.963,-49.658],[63.721,-49.658],[67.969,-66.211],[15.186,-66.211],[14.648,-64.404],[20.654,-63.062],[21.973,-60.205],[20.947,-54.59],[8.496,-11.963],[4.346,-3.687],[-2.93,-1.807],[-3.516,0],[53.125,0],[60.01,-18.164],[58.008,-18.164],[44.775,-7.446],[29.053,-3.906],[23.145,-4.883],[22.07,-6.689],[22.9,-11.035],[29.248,-33.252],[33.057,-33.252],[39.941,-32.764],[44.067,-30.322],[45.654,-25.928],[45.215,-21.729],[46.924,-21.729],[54.346,-47.51],[52.539,-47.51],[45.63,-39.209],[32.666,-36.865],[30.42,-36.865],[37.793,-62.549]],"c":true},"ix":2},"nm":"E","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"E","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"Times New Roman"},{"ch":"L","size":72,"style":"Bold Italic","w":61.08,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[5.029,-2.473],[5.403,0],[0.732,0.57],[0,0.652],[-1.433,4.948],[0,0],[-1.514,1.302],[-3.06,0.066],[0,0],[0,0],[0,0],[-0.977,-0.781],[0,-1.302],[0.684,-2.344],[0,0],[1.448,-1.221],[3.157,0],[0,0],[0,0]],"o":[[0,0],[-3.484,4.916],[-5.029,2.474],[-1.628,0],[-0.732,-0.569],[0,-1.074],[0,0],[1.172,-4.004],[1.514,-1.302],[0,0],[0,0],[0,0],[2.864,0.13],[0.977,0.781],[0,1.335],[0,0],[-1.237,4.265],[-1.449,1.221],[0,0],[0,0],[0,0]],"v":[[56.982,-18.555],[54.932,-18.555],[42.163,-7.471],[26.514,-3.76],[22.974,-4.614],[21.875,-6.445],[24.023,-15.479],[35.254,-54.395],[39.282,-62.354],[46.143,-64.404],[46.68,-66.211],[14.893,-66.211],[14.355,-64.404],[20.117,-63.037],[21.582,-59.912],[20.557,-54.395],[8.252,-11.865],[4.224,-3.638],[-2.686,-1.807],[-3.223,0],[49.658,0]],"c":true},"ix":2},"nm":"L","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"L","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"Times New Roman"},{"ch":"O","size":72,"style":"Bold Italic","w":72.22,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.948,2.766],[-5.241,8.285],[0,8.236],[2.002,3.613],[3.596,2.019],[4.004,0],[7.014,-4.411],[4.134,-7.34],[0,-7.227],[-1.644,-3.776],[-3.288,-2.18],[-5.339,0]],"o":[[6.543,-3.711],[5.241,-8.284],[0,-3.678],[-2.002,-3.613],[-3.597,-2.018],[-6.836,0],[-7.015,4.411],[-4.134,7.341],[0,3.581],[1.643,3.777],[3.288,2.18],[7.161,0]],"v":[[46.289,-2.588],[63.965,-20.581],[71.826,-45.361],[68.823,-56.299],[60.425,-64.746],[49.023,-67.773],[28.247,-61.157],[11.523,-43.53],[5.322,-21.68],[7.788,-10.645],[15.186,-1.709],[28.125,1.563]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-1.677,-2.002],[0,-4.459],[3.141,-9.131],[4.98,-4.72],[3.58,0],[1.725,2.035],[0,3.972],[-1.775,6.966],[-2.019,4.053],[-1.953,2.181],[-1.807,0.928],[-2.572,0]],"o":[[1.676,2.002],[0,7.129],[-3.142,9.131],[-2.507,2.377],[-2.702,0],[-1.726,-2.034],[0,-4.655],[1.774,-6.966],[2.018,-4.053],[1.953,-2.18],[1.807,-0.928],[2.473,0]],"v":[[53.638,-60.767],[56.152,-51.074],[51.44,-26.685],[39.258,-5.908],[30.127,-2.344],[23.486,-5.396],[20.898,-14.404],[23.56,-31.836],[29.248,-48.364],[35.205,-57.715],[40.845,-62.378],[47.412,-63.77]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"O","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"Times New Roman"}]}')},83:function(a,t,e){a.exports=e(149)},92:function(a,t,e){}},[[83,1,2]]]);
//# sourceMappingURL=main.d6966941.chunk.js.map