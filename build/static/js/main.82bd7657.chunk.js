(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e){e.exports=[{id:1,name:"image1",image:"./images/image1.png",wasClicked:!1,location:"image1"},{id:2,name:"image2",image:"./images/image2.png",wasClicked:!1,location:"image2"},{id:3,name:"image3",image:"./images/image3.png",wasClicked:!1,location:"image3"},{id:4,name:"image4",image:"./images/image4.png",wasClicked:!1,location:"image4"},{id:5,name:"image5",image:"./images/image5.png",wasClicked:!1,location:"image5"},{id:6,name:"image6",image:"./images/image6.png",wasClicked:!1,location:"image6"},{id:7,name:"image7",image:"./images/image7.png",wasClicked:!1,location:"image7"},{id:8,name:"image8",image:"./images/image8.png",wasClicked:!1,location:"image8"},{id:9,name:"image9",image:"./images/image9.png",wasClicked:!1,location:"image9"},{id:10,name:"image10",image:"./images/image10.png",wasClicked:!1,location:"image10"},{id:11,name:"image11",image:"./images/image11.png",wasClicked:!1,location:"image11"},{id:12,name:"image12",image:"./images/image12.png",wasClicked:!1,location:"image12"}]},25:function(e,a,t){e.exports=t(40)},30:function(e,a,t){},31:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(19),l=t.n(c),m=(t(30),t(5)),r=t(6),s=t(8),o=t(7),g=t(9),d=(t(31),t(12)),u=t(20),p=t.n(u),v=function(e){function a(e){return Object(m.a)(this,a),Object(s.a)(this,Object(o.a)(a).call(this,e))}return Object(g.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector(".sidenav");p.a.Sidenav.init(e,{edge:"left",inDuration:250})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("ul",{className:"sidenav",id:"mobile-links"},i.a.createElement(d.b,{to:"/",className:"brand-logo"},i.a.createElement("i",{className:"material-icons"},"blur_circular"),"Home")),i.a.createElement("nav",{className:"nav-wrapper indigo"},i.a.createElement("div",{className:"container"},i.a.createElement("a",{href:"/",className:"brand-logo center hide-on-large-only"},"Clicky"),i.a.createElement("a",{href:"/",className:"brand-logo hide-on-med-and-down"},i.a.createElement("i",{className:"material-icons"},"blur_circular"),"Clicky"),i.a.createElement("a",{href:"#!",className:"sidenav-trigger","data-target":"mobile-links"},i.a.createElement("i",{className:"material-icons"},"menu")),i.a.createElement("ul",{className:"right hide-on-med-and-down"},i.a.createElement("li",null,i.a.createElement(d.b,{to:"/"},"Dashboard"))))))}}]),a}(i.a.Component),h=t(24),k=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(s.a)(this,Object(o.a)(a).call(this,e))).clickArticle=function(e){t.props.wasClicked&&console.log("Already clicked: ".concat(t.props.id)),t.props.clickImage(t.props.id)},t.handleMouseOver=function(e){console.log(e.target,e.pageX),e.currentTarget.className="material-icons red"},t.handleMouseOut=function(e){console.log(e.target,e.pageX),e.currentTarget.className=t.favsClasses},t.favsClasses="material-icons",e.saved&&(t.favsClasses+=" red"),t}return Object(g.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props.image;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{onClick:this.clickArticle.bind(this),className:"materialboxed responsive-img",src:e,alt:""})))}}]),a}(i.a.Component),b=t(23),f=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(s.a)(this,Object(o.a)(a).call(this,e))).loadImages=function(){var e=Object(h.a)(b);t.setState({articles:e})},t.clickImage=function(e){console.log("clicked: ".concat(e));var a=t.state.articles.map(function(a){return a.id===e&&(a.wasClicked=!0),a});t.setState({articles:a})},t.state={articles:[]},t}return Object(g.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.loadImages()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"row"},this.state.articles.map(function(a,t){return i.a.createElement("div",{key:a.id,className:"col s12 m4 l3"},i.a.createElement(k,{clickImage:e.clickImage.bind(a.id),id:a.id,wasClicked:a.wasClicked,image:a.image}))}))}}]),a}(i.a.Component),E=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m12 l12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("span",{className:"flow-text card-title"},"Dashboard - Welcome ",this.props.name),i.a.createElement("p",null,"Click image to guess"),i.a.createElement("p",null,"try not to guess the same one twice"))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m12 l12"},i.a.createElement(f,null))))}}]),a}(i.a.Component),w=t(10),C=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(s.a)(this,Object(o.a)(a).call(this,e))).state={name:"Paul",email:"paul.linck@gmail.com"},t}return Object(g.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(d.a,null,i.a.createElement("div",{className:"container"},i.a.createElement(v,null),i.a.createElement(w.a,{exact:!0,path:"/",render:function(){return i.a.createElement(E,e.state)}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.82bd7657.chunk.js.map