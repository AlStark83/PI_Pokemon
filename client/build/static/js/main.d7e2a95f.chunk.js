(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){e.exports={title:"Form_title__C1Vlq",formContainer:"Form_formContainer__29Z-5",button:"Form_button__2g_MZ",inputAndLabel:"Form_inputAndLabel__3nKYE",containerButton:"Form_containerButton__BCmyU"}},16:function(e,t,n){e.exports={mainContainer:"Detail_mainContainer__34iB5",detailsContainer:"Detail_detailsContainer__2L84k",col:"Detail_col__1pl_t",pokemonImg:"Detail_pokemonImg__1w7B5",pokemonDetails:"Detail_pokemonDetails__21qdr",firstItem:"Detail_firstItem__2-rOA",pokemonName:"Detail_pokemonName__1D06b",button:"Detail_button__9AlgX",types:"Detail_types__2iijy"}},18:function(e,t,n){e.exports={grid:"Home_grid__2z5yF",pokedexImg:"Home_pokedexImg__1x7TD",item:"Home_item__191O-",button:"Home_button__2m3ei",filters:"Home_filters__2_A3v",buttonsAndSearch:"Home_buttonsAndSearch__2Yf4e"}},32:function(e,t,n){e.exports={pokemonCard:"Card_pokemonCard__WkfM2",pokemonImage:"Card_pokemonImage__1vd0C",name:"Card_name__17Jff"}},35:function(e,t,n){e.exports={landing:"Landing_landing__3CyAs",button:"Landing_button__282Li"}},40:function(e,t,n){e.exports={paginado:"Paginado_paginado__M2Dwq",button:"Paginado_button__1vlvJ"}},41:function(e,t,n){e.exports={button:"SearchBar_button__2HqXO"}},42:function(e,t,n){e.exports={loader:"Loader_loader__3yTIL"}},50:function(e,t,n){},51:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(26),s=n.n(r),o=(n(50),n(51),n(6)),i=n(8),l=n(35),d=n.n(l),j=n(0);function u(){return Object(j.jsxs)("div",{className:d.a.landing,children:[Object(j.jsx)("img",{src:"https://fontmeme.com/permalink/230128/d791fc1496ece52131cfa65e9dc9bf5c.png",alt:"anadir-bordes",border:"0"}),Object(j.jsx)("h1",{children:"Go to Catch'em All"}),Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{className:d.a.button,children:"Enter"})})]})}var b=n(11),p=n(7),m=n(15),h=n(20),O=n(66);function x(){return function(){var e=Object(h.a)(Object(m.a)().mark((function e(t){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/pokemons");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_POKEMONS",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var f=n(32),g=n.n(f);function v(e){var t=e.id,n=e.name,a=e.img,c=e.types;return Object(j.jsxs)("div",{className:g.a.pokemonCard,children:[Object(j.jsx)(i.b,{to:"/pokemons/".concat(t),children:Object(j.jsx)("img",{className:g.a.pokemonImage,src:a,alt:"not found"})}),Object(j.jsx)("p",{children:t}),Object(j.jsx)("h5",{children:c.map((function(e){return e.name+" "}))}),Object(j.jsx)("h3",{className:g.a.name,children:n})]},t)}var _=n(40),k=n.n(_);function y(e){for(var t=e.pokemonsPerPage,n=e.allPokemons,a=e.paginado,c=[],r=0;r<Math.ceil(n/t);r++)c.push(r+1);return Object(j.jsx)("nav",{children:Object(j.jsx)("div",{className:"paginado",children:c&&c.map((function(e){return Object(j.jsx)("button",{className:k.a.button,onClick:function(){return a(e)},children:e},e)}))})})}var N=n(41),C=n.n(N);function P(){var e=Object(p.b)(),t=Object(a.useState)(""),n=Object(b.a)(t,2),c=n[0],r=n[1];function s(t){t.preventDefault(),e(function(e){return function(){var t=Object(h.a)(Object(m.a)().mark((function t(n){var a;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("/pokemons?name="+e);case 3:return a=t.sent,t.abrupt("return",n({type:"GET_NAME_POKEMON",payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0+"error en action getNamePokemons");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(c))}return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){return function(e){e.preventDefault(),r(e.target.value),console.log(c)}(e)}}),Object(j.jsx)("button",{className:C.a.button,type:"submit",onClick:function(e){return s(e)},children:"Search"})]})}var w=n(18),E=n.n(w),A=n(42),D=n.n(A),F=function(){return Object(j.jsx)("div",{className:D.a.loader,children:Object(j.jsx)("img",{src:"https://fontmeme.com/permalink/230202/cb6bd3df64d17f66b0021c1654cc80e6.png",alt:"Cargando..."})})};function S(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.pokemons})),n=(Object(p.c)((function(e){return e.types})),Object(a.useState)("")),c=Object(b.a)(n,2),r=(c[0],c[1]),s=Object(a.useState)(1),o=Object(b.a)(s,2),l=o[0],d=o[1],u=Object(a.useState)(12),m=Object(b.a)(u,2),h=m[0],O=(m[1],l*h),f=O-h,g=t.slice(f,O);Object(a.useEffect)((function(){e(x())}),[e]);function _(t){var n;e((n=t.target.value,console.log(n),{type:"FILTER_BY_TYPE",payload:n}))}function k(t){var n;e((n=t.target.value,console.log(n),{type:"FILTER_BY_CREATED",payload:n}))}return Object(j.jsx)("div",{children:t.length?Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:E.a.pokedexImg,src:"https://fontmeme.com/permalink/230202/46eddc01dfe4ad5ceeaf1f75fb46d068.png",alt:"Pokedex"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:E.a.buttonsAndSearch,children:[Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{className:E.a.button,onClick:function(t){!function(t){t.preventDefault(),e(x())}(t)},children:"Reload All Pokemons"})}),Object(j.jsx)(i.b,{to:"/create",children:Object(j.jsx)("button",{className:E.a.button,children:"Create Pokemon"})}),Object(j.jsx)("div",{children:Object(j.jsx)(P,{})})]}),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:E.a.filters,children:[Object(j.jsx)("label",{htmlFor:"SortByName",children:"Sort by name:"}),Object(j.jsxs)("select",{name:"SortByName",onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_NAME",payload:t.target.value}),d(1),r("Ordenado ".concat(t.target.value))}(t)},children:[Object(j.jsx)("option",{value:"asc",children:"Ascending Order"}),Object(j.jsx)("option",{value:"desc",children:"Descending Order"})]}),Object(j.jsx)("label",{htmlFor:"SortByAttack",children:"Sort by attack:"}),Object(j.jsxs)("select",{name:"SortByAttack",onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_ATTACK",payload:t.target.value}),d(1),r("Ordenado ".concat(t.target.value))}(t)},children:[Object(j.jsx)("option",{value:"asc",children:"Ascending Order"}),Object(j.jsx)("option",{value:"desc",children:"Descending Order"})]}),Object(j.jsx)("label",{htmlFor:"FilterType",children:"Filter by type"}),Object(j.jsxs)("select",{onChange:function(e){return _(e)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"normal",children:"Normal"}),Object(j.jsx)("option",{value:"flying",children:"Flying"}),Object(j.jsx)("option",{value:"fighting",children:"Fighting"}),Object(j.jsx)("option",{value:"poison",children:"Poison"}),Object(j.jsx)("option",{value:"ground",children:"Ground"}),Object(j.jsx)("option",{value:"rock",children:"Rock"}),Object(j.jsx)("option",{value:"bug",children:"Bug"}),Object(j.jsx)("option",{value:"ghost",children:"Ghost"}),Object(j.jsx)("option",{value:"steel",children:"Steel"}),Object(j.jsx)("option",{value:"fire",children:"Fire"}),Object(j.jsx)("option",{value:"water",children:"Water"}),Object(j.jsx)("option",{value:"grass",children:"Grass"}),Object(j.jsx)("option",{value:"electric",children:"Electric"}),Object(j.jsx)("option",{value:"psychic",children:"Psychic"}),Object(j.jsx)("option",{value:"ice",children:"Ice"}),Object(j.jsx)("option",{value:"dragon",children:"Dragon"}),Object(j.jsx)("option",{value:"dark",children:"Dark"}),Object(j.jsx)("option",{value:"fairy",children:"Fairy"}),Object(j.jsx)("option",{value:"unknown",children:"Unknown"}),Object(j.jsx)("option",{value:"shadow",children:"Shadow"})]}),Object(j.jsx)("label",{htmlFor:"FilterByCreated",children:"Filter by created:"}),Object(j.jsxs)("select",{name:"FilterByCreated",onChange:function(e){return k(e)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"created",children:"Created"}),Object(j.jsx)("option",{value:"api",children:"Existents"})]})]})}),Object(j.jsx)("div",{className:E.a.grid,children:g&&g.map((function(e){return Object(j.jsx)("li",{className:E.a.item,children:Object(j.jsx)(v,{img:e.img,id:e.id,name:e.name,types:e.types})},e.id)}))})]}),Object(j.jsx)(y,{pokemonsPerPage:h,allPokemons:t.length,paginado:function(e){d(e)}})]}):Object(j.jsx)(F,{})})}var T=n(37),B=n(24),L=n(4),I=n(14),q=n.n(I),R=function(e){var t={},n=/^[0-9]+$/;return e.name&&"  "!==e.name&&/^[a-zA-Z]+$/.test(e.name)||(t.name="Name is required to be letters and without spaces"),e.img&&/^(ftp|http|https):\/\/[^ "]+$/.test(e.img)||(t.img="Image is required and URL type"),(!e.hp||e.hp<0||e.hp>255||!n.test(e.hp))&&(t.hp="Health Points is required and valid between 1 - 255"),(!e.attack||e.attack<0||e.attack>190||!n.test(e.attack))&&(t.attack="Attack is required and valid between 1 - 190"),(!e.defense||e.defense<0||e.defense>250||!n.test(e.defense))&&(t.defense="Defense is required and valid between 1 - 250"),(!e.speed||e.speed<0||e.speed>250||!n.test(e.speed))&&(t.speed="Speed is required and valid between 1 - 250"),(!e.height||e.height<0||e.height>35||!n.test(e.height))&&(t.height="Height is required and valid between 1 - 35 m"),(!e.weight||e.weight<0||e.weight>1e3||!n.test(e.weight))&&(t.weight="Weight is required and valid between  1 - 1000 kg"),t};function M(){var e=Object(p.b)(),t=Object(o.f)(),n=Object(p.c)((function(e){return e.allpokemons})),c=Object(p.c)((function(e){return e.types})),r=Object(a.useState)({name:"",hp:"",attack:"",defense:"",speed:"",height:"",weight:"",img:"",types:[]}),s=Object(b.a)(r,2),l=s[0],d=s[1],u=Object(a.useState)({name:"",hp:"",attack:"",defense:"",speed:"",height:"",weight:"",img:"",types:[]}),x=Object(b.a)(u,2),f=x[0],g=x[1],v=function(e){g(Object(L.a)(Object(L.a)({},f),{},Object(B.a)({},e.target.name,e.target.value))),d(R(Object(L.a)(Object(L.a)({},f),{},Object(B.a)({},e.target.name,e.target.value)),n)),console.log(f)},_=function(n){var a;n.preventDefault(),console.log(f),e((a=f,function(){var e=Object(h.a)(Object(m.a)().mark((function e(t){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/pokemons",a);case 2:return n=e.sent,console.log(n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),alert("Pokemon Created Succesfully!!!"),g({name:"",hp:"",attack:"",defense:"",speed:"",height:"",weight:"",img:"",types:[]}),t.push("/home")};return Object(a.useEffect)((function(){e(function(){var e=Object(h.a)(Object(m.a)().mark((function e(t){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/types",{});case 2:return n=e.sent,e.abrupt("return",t({type:"GET_TYPES",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(j.jsxs)("div",{className:"principalContainer",children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("img",{src:"https://fontmeme.com/permalink/230202/d8c12ed95f7b3c9c9b83256f5c843e28.png",alt:""})}),Object(j.jsxs)("div",{className:"formContainer",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){return _(e)},children:[Object(j.jsxs)("div",{className:q.a.inputAndLabel,children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(j.jsx)("input",{type:"text",value:f.name,name:"name",required:!0,onChange:function(e){return v(e)}}),l.name&&Object(j.jsx)("p",{className:"error",children:l.name})]}),Object(j.jsxs)("div",{className:q.a.inputAndLabel,children:[Object(j.jsx)("label",{htmlFor:"hp",children:"Health Points:"}),Object(j.jsx)("input",{type:"number",min:"1",max:"255",placeholder:"1 - 255",value:f.hp,name:"hp",required:!0,onChange:function(e){return v(e)}}),l.hp&&Object(j.jsx)("p",{className:"error",children:l.hp})]}),Object(j.jsxs)("div",{className:q.a.inputAndLabel,children:[Object(j.jsx)("label",{htmlFor:"attack",children:"Attack: "}),Object(j.jsx)("input",{type:"number",min:"1",max:"190",placeholder:"1 - 190",value:f.attack,name:"attack",required:!0,onChange:function(e){return v(e)}}),l.attack&&Object(j.jsx)("p",{className:"error",children:l.attack})]}),Object(j.jsxs)("div",{className:q.a.inputAndLabel,children:[Object(j.jsx)("label",{htmlFor:"defense",children:"Defense: "}),Object(j.jsx)("input",{type:"number",min:"1",max:"250",placeholder:"1 - 250",value:f.defense,name:"defense",required:!0,onChange:function(e){return v(e)}}),l.defense&&Object(j.jsx)("p",{className:"error",children:l.defense})]}),Object(j.jsxs)("div",{className:q.a.inputAndLabel,children:[Object(j.jsx)("label",{htmlFor:"speed",children:"Speed: "}),Object(j.jsx)("input",{type:"number",min:"1",max:"200",placeholder:"1 - 200",value:f.speed,name:"speed",required:!0,onChange:function(e){return v(e)}}),l.speed&&Object(j.jsx)("p",{className:"error",children:l.speed})]}),Object(j.jsxs)("div",{className:q.a.inputAndLabel,children:[Object(j.jsx)("label",{htmlFor:"height",children:"Height: "}),Object(j.jsx)("input",{type:"number",value:f.height,name:"height",min:"1",max:"35",placeholder:"1 - 35",required:!0,onChange:function(e){return v(e)}}),l.height&&Object(j.jsx)("p",{className:"error",children:l.height})]}),Object(j.jsxs)("div",{className:q.a.inputAndLabel,children:[Object(j.jsx)("label",{htmlFor:"weight",children:"Weight: "}),Object(j.jsx)("input",{type:"number",min:"1",max:"1000",placeholder:"1 - 1000",value:f.weight,name:"weight",required:!0,onChange:function(e){return v(e)}}),l.weight&&Object(j.jsx)("p",{className:"error",children:l.weight})]}),Object(j.jsxs)("div",{className:q.a.inputAndLabel,children:[Object(j.jsx)("label",{htmlFor:"img",children:"Image: "}),Object(j.jsx)("input",{type:"text",value:f.img,name:"img",required:!0,onChange:function(e){return v(e)}})]}),Object(j.jsxs)("div",{className:q.a.inputAndLabel,children:[Object(j.jsx)("label",{htmlFor:"types",children:"Choose 1 or 2 types"}),Object(j.jsx)("select",{name:"types",onChange:function(e){!function(e){f.types.includes(e.target.value)||(g(Object(L.a)(Object(L.a)({},f),{},{types:[].concat(Object(T.a)(f.types),[e.target.value])})),d(R(Object(L.a)(Object(L.a)({},f),{},{types:[].concat(Object(T.a)(f.types),[e.target.value])}))))}(e)},children:null===c||void 0===c?void 0:c.map((function(e){return Object(j.jsx)("option",{value:e,children:e})}))}),Object(j.jsx)("div",{name:"listaParaDisplayNone",children:Object(j.jsx)("li",{children:f.types.map((function(e){return e+", "}))})}),l.types&&Object(j.jsx)("p",{className:"error",children:l.types})]},"types"),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:q.a.containerButton,type:"submit",disabled:!f.name||!f.types.length>0||l.name||l.life||l.attack||l.defense||l.speed||l.height||l.weight||l.img||l.types,children:"SUBMIT"})})]})}),f.types.map((function(e){return Object(j.jsxs)("div",{className:"divTypes",children:[Object(j.jsx)("p",{children:e}),Object(j.jsx)("button",{className:"botonx",onClick:function(){return function(e){g(Object(L.a)(Object(L.a)({},f),{},{types:f.types.filter((function(t){return t!==e}))}))}(e)},children:"x"})]})})),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"http://pa1.narvii.com/7551/8b482f70f7857bdae3eb6d6f36ba5f44e6e377ccr1-500-270_00.gif",alt:"pokemon incubated"})})]}),Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{className:q.a.button,children:"Back to Home"})})})]})}var H=n(16),Y=n.n(H);function G(e){console.log(e);var t=Object(p.b)();Object(a.useEffect)((function(){var n;t((n=e.match.params.id,function(){var e=Object(h.a)(Object(m.a)().mark((function e(t){var a;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/pokemons/".concat(n));case 3:return a=e.sent,console.log(a.data),e.abrupt("return",t({type:"GET_DETAILS",payload:a.data}));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}),[]);var n=Object(p.c)((function(e){return e.detail}));return console.log(n),Object(j.jsxs)("div",{children:[n.name?Object(j.jsxs)("div",{className:Y.a.mainContainer,children:[Object(j.jsx)("h1",{children:"Pokemon Stats & Details"}),Object(j.jsxs)("div",{className:Y.a.detailsContainer,children:[Object(j.jsxs)("div",{className:Y.a.col,children:[Object(j.jsx)("h1",{className:Y.a.pokemonName,children:Object(j.jsx)("strong",{children:n.name})}),Object(j.jsx)("img",{className:Y.a.pokemonImg,src:n.img,alt:n.name})]}),Object(j.jsx)("div",{className:Y.a.col,children:Object(j.jsxs)("div",{className:Y.a.pokemonDetails,children:[Object(j.jsxs)("p",{children:["Healt Point: ",n.hp]}),Object(j.jsxs)("p",{children:["Attack: ",n.attack]}),Object(j.jsxs)("p",{children:["Defense: ",n.defense]}),Object(j.jsxs)("p",{children:["Speed: ",n.speed]}),Object(j.jsxs)("p",{children:["Height: ",n.height]}),Object(j.jsxs)("p",{children:["Weight: ",n.weight]}),Object(j.jsxs)("p",{className:Y.a.types,children:["Types: ",n.types.map((function(e){return e.name+" "}))]})]})})]})]}):Object(j.jsx)(F,{}),Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{className:Y.a.button,children:"Back to Pokedex"})})]})}O.a.defaults.baseURL="http://localhost:3001";var K=function(){return Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(j.jsx)(o.a,{path:"/home",component:S}),Object(j.jsx)(o.a,{path:"/create",component:M}),Object(j.jsx)(o.a,{path:"/pokemons/:id",component:G}),Object(j.jsx)(o.a,{path:"/loader",component:F})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},U=n(30),J=n(43),Z=n(44),$={pokemons:[],allPokemons:[],pokemonsFilter:[],types:[],detail:{}};var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POKEMONS":case"GET_NAME_POKEMON":return Object(L.a)(Object(L.a)({},e),{},{pokemons:t.payload,allPokemons:t.payload});case"FILTER_BY_TYPE":var n=e.allPokemons,a="all"===t.payload?n:n.filter((function(e){return e.types.map((function(e){return e.name}))[0]===t.payload||e.types.map((function(e){return e.name}))[1]===t.payload}));return Object(L.a)(Object(L.a)({},e),{},{pokemons:a});case"POST_POKEMON":return Object(L.a)({},e);case"FILTER_BY_CREATED":var c="created"===t.payload?e.allPokemons.filter((function(e){return!0===e.createdInDb})):e.allPokemons.filter((function(e){return!e.createdInDb}));return Object(L.a)(Object(L.a)({},e),{},{pokemons:"all"===t.payload?e.allPokemons:c});case"ORDER_BY_NAME":var r="asc"===t.payload?e.allPokemons.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})):e.allPokemons.sort((function(e,t){return e.name>t.name?-1:t.name>e.name?1:0}));return Object(L.a)(Object(L.a)({},e),{},{allPokemons:r});case"GET_TYPES":return Object(L.a)(Object(L.a)({},e),{},{types:t.payload});case"ORDER_BY_ATTACK":var s="asc"===t.payload?e.allPokemons.sort((function(e,t){return e.attack>t.attack?1:t.attack>e.attack?-1:0})):e.allPokemons.sort((function(e,t){return e.attack>t.attack?-1:t.attack>e.attack?1:0}));return Object(L.a)(Object(L.a)({},e),{},{allPokemons:s});case"GET_DETAILS":return console.log(t.payload),Object(L.a)(Object(L.a)({},e),{},{detail:Object(L.a)({},t.payload)});default:return e}},X=Object(U.createStore)(z,Object(J.composeWithDevTools)(Object(U.applyMiddleware)(Z.a)));s.a.render(Object(j.jsx)(p.a,{store:X,children:Object(j.jsx)(i.a,{children:Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(K,{})})})}),document.getElementById("root")),W()}},[[65,1,2]]]);
//# sourceMappingURL=main.d7e2a95f.chunk.js.map