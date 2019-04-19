(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(67)},37:function(e,t,n){},38:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(28),r=n.n(l),c=n(9),i=n(6),s=n(29),u=n(13),m=n(10),d=n(11),f=n(14),h=n(12),v=n(15);var b=function(e){var t=e.children;return o.a.createElement("div",{style:{height:150,clear:"both",paddingTop:50,textAlign:"center"},className:"jumbotron"},t)};n(37);var k=function(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success btn-sm"}),"Save Book",e.children)};function g(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function p(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function E(e){var t=e.size,n=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(38);function B(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}function S(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}function j(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))}function y(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var I=n(8),O=n.n(I),N={getBooks:function(){return O.a.get("/api/books")},getBook:function(e){return O.a.get("/api/books/"+e)},deleteBook:function(e){return O.a.delete("/api/books/"+e)},saveBook:function(e){return O.a.post("/api/books",e)},googleBooks:function(e){return console.log("topic in googleBooks= ",e),O.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&maxResults=20")}},w=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],topic:"",booksIndex:null,displayBooks:[],addedToSave:[],state:""},n.saveBook=function(e){console.log("id in saveBook= ",e);var t=n.state.books.findIndex(function(t){return t.id===e}),a=n.state.books.filter(function(t){return t.id===e});n.state.books.splice(t,1);var o={author:a[0].volumeInfo.authors,description:a[0].volumeInfo.description,image:a[0].volumeInfo.imageLinks.smallThumbnail,link:a[0].volumeInfo.infoLink,title:a[0].volumeInfo.title};N.saveBook(o).then(function(e){alert("Book has been saved!"),n.setState({addedToSave:o})}).catch(function(e){return console.log(e)})},n.loadBooks=function(){N.googleBooks(n.state.topic).then(function(e){console.log("res= ",e),n.setState({books:Object(u.a)(e.data.items),topic:""})}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(s.a)({},a,o))},n.handleFormSubmit=function(e){e.preventDefault(),n.state.topic&&n.loadBooks()},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(g,{fluid:!0},o.a.createElement(p,null,o.a.createElement(E,{size:"md-6"},o.a.createElement(b,null,o.a.createElement("h1",null,"Search Google Books")),o.a.createElement("form",null,o.a.createElement(j,{value:this.state.topic,onChange:this.handleInputChange,name:"topic",placeholder:"Topic Search (required)"}),o.a.createElement(y,{disabled:!this.state.topic,onClick:this.handleFormSubmit},"Search"))),o.a.createElement(E,{size:"md-6 sm-12"},o.a.createElement(b,null,o.a.createElement("h1",null,"Books On My List")),o.a.createElement(c.b,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link"},"View Saved"),this.state.books.length?o.a.createElement(B,null,this.state.books.map(function(t,n){return o.a.createElement(S,{key:t.id},o.a.createElement("strong",null,"Title: ",t.volumeInfo.title,o.a.createElement("br",null),"Author:  ",t.volumeInfo.authors,o.a.createElement("br",null),"Description:  ",t.volumeInfo.description,o.a.createElement("br",null),o.a.createElement("img",{src:t.volumeInfo.imageLinks.smallThumbnail,alt:""}),o.a.createElement("br",null),"InfoLink: ",o.a.createElement("a",{href:t.volumeInfo.infoLink},t.volumeInfo.infoLink)),o.a.createElement(k,{onClick:function(){return e.saveBook(t.id)}}))})):o.a.createElement("h3",null,"No Results to Display"))))}}]),t}(a.Component);var D=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};n(66);var L=function(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-danger btn-sm"}),"Delete Book",e.children)},C=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={booksFromDb:[]},n.deleteBook=function(e){N.deleteBook(e).then(function(e){alert("Book has been deleted!"),n.loadSaved(),n.setState({state:n.state})}).catch(function(e){return console.log(e)}),n.setState({state:n.state})},n.loadSaved=function(){N.getBooks().then(function(e){n.setState({booksFromDb:Object(u.a)(e.data)})}).catch(function(e){return console.log(e)})},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadSaved()}},{key:"render",value:function(){var e=this;return this.loadSaved(),o.a.createElement("div",null,o.a.createElement("h1",null,"Saved Books"),this.state.booksFromDb.length?o.a.createElement(B,null,this.state.booksFromDb.map(function(t,n){return o.a.createElement(S,{key:t._id},o.a.createElement("strong",null,"Title: ",t.title,o.a.createElement("br",null),"Author:   ",t.author,o.a.createElement("br",null),"Description: ",t.description,o.a.createElement("br",null),o.a.createElement("img",{src:t.image,alt:""}),o.a.createElement("br",null),"InfoLink: ",o.a.createElement("a",{href:t.link},t.link)),o.a.createElement(L,{onClick:function(){return e.deleteBook(t._id)}}))})):o.a.createElement("h3",null,"No Results to Display"))}}]),t}(a.Component);var T=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(D,null),o.a.createElement(w,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/saved",component:C}))))};r.a.render(o.a.createElement(T,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.925a01e2.chunk.js.map