(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{21:function(e,t,a){},35:function(e,t,a){e.exports=a(65)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),o=a.n(s),i=a(7),c=a(6);var m=function(){return r.a.createElement("span",null," About this page : kkirru made this")},l=a(11),u=a(12),p=a(14),v=a(13),d=a(15),h=(a(21),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}},{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}}]),t}(r.a.Component)),f=a(10),E=a.n(f),y=a(17),b=a(32),g=a.n(b);var _=function(e){var t=e.year,a=e.title,n=e.summary,s=e.poster,o=e.genres;return r.a.createElement(i.b,{to:{pathname:"/movie-detail",state:{fromNavigation:!0,year:t,title:a,summary:n,poster:s,genres:o}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h2",{className:"movie__title"},a),r.a.createElement("h3",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"}," ",o.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"..."))))},j=(a(63),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getmoives=Object(y.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({isLoading:!1}),a.setState({movies:n});case 6:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"}," ",t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"}," Loading... ")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(_,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})})))," ")}},{key:"componentDidMount",value:function(){var e=Object(y.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getmoives();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component));a(64);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/about"},"About"))};var k=function(){return r.a.createElement(i.a,null,r.a.createElement(N,null),r.a.createElement(c.a,{path:"/",exact:!0,component:j}),r.a.createElement(c.a,{path:"/about",component:m}),r.a.createElement(c.a,{path:"/movie-detail",component:h}))};o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0b650460.chunk.js.map