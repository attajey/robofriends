(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(4),a=n.n(r),i=(n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))}),o=(n(15),n(5)),h=n(6),l=n(9),b=n(8),d=n(0),j=function(e){var t=e.name,n=e.email,c=e.id;return Object(d.jsxs)("div",{className:"tc bg-light-green dib f8 br4 pa1 ma2 grow bw2 shadow-5 w-30",children:[Object(d.jsx)("img",{alt:"Robo",src:"https://robohash.org/".concat(c,"?300x300")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,n){return Object(d.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},f=function(e){e.searchfield;var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},O=(n(17),n(7)),g=n.n(O),x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(d.jsx)("h1",{className:"tc",children:" LOADING "}):Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(d.jsx)("div",{style:{zIndex:"100"},children:Object(d.jsx)(g.a,{children:Object(d.jsx)(f,{searchChange:this.onSearchChange})})}),Object(d.jsx)("div",{style:{zIndex:"-1",margin:"100px"},children:Object(d.jsx)(u,{robots:t})})]})}}]),n}(c.Component);a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),i()}},[[23,1,2]]]);
//# sourceMappingURL=main.db675f9d.chunk.js.map