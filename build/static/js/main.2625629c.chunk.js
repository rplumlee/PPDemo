(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{77:function(e,t,a){e.exports=a(89)},82:function(e,t,a){},87:function(e,t,a){e.exports=a.p+"static/media/parallax.3e6de7d1.jpg"},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),o=(a(82),a(16)),l=a(51),m=a(13),s=a(10);function d(e){var t=e.id,a=e.itemName,n=e.itemDescription,i=e.imgUrl,c=e.setSelected,o=e.gf,l=e.v,m=e.featured,d=(e.sectionId,e.theme);return r.a.createElement(s.c.li,{className:"card ".concat(d),onClick:function(){c(t)},layoutId:"cardlist",key:"card-".concat(t)},r.a.createElement("div",{className:"card-content-container"},r.a.createElement(s.c.div,{className:"card-content",layoutId:"card-container-".concat(t)},r.a.createElement(s.c.div,{className:"card-image-container",layoutId:"card-image-container-".concat(t)},r.a.createElement("img",{className:"card-image",src:i,alt:""})),r.a.createElement(s.c.div,{className:"title-container",layoutId:"title-container-".concat(t)},r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("span",{className:"category"},n)),r.a.createElement("div",{className:"tags"},o?r.a.createElement("span",{className:"gluten-free"},"GF"):"",l?r.a.createElement("span",{className:"vegan"},"V"):"",m?r.a.createElement("span",{className:"featured"},"Featured"):"")))))}function u(e){var t=e.items,a=e.setSelected,n=e.selectedId,i=e.sectionId;return r.a.createElement("ul",{className:"card-list"},t.map((function(e,t){return e.section===i&&r.a.createElement(d,Object.assign({key:"".concat(i,"-").concat(t)},e,{setSelected:a,selectedId:n,sectionId:i,layout:!0}))})))}var p=a(26),f=a(131),g=a(61),E=a.n(g),h=a(62),v=a.n(h),y=a(126),b=a(132),N=a(133),w=a(125),j=a(129),k=a(134),C=a(130);function I(e){var t=e.items,a=e.id,n=e.setSelected,i=e.sections,c=e.handleEditItem,l=e.handleDeleteItem,d=r.a.useState(t.find((function(e){return e.id===a}))),u=Object(o.a)(d,2),g=u[0],h=u[1],I=function(e){var t=e.target,a=t.value,n=t.name;h(Object(m.a)({},g,Object(p.a)({},n,a)))},O=function(e){h(Object(m.a)({},g,Object(p.a)({},e.target.name,e.target.checked)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.15}},transition:{duration:.2,delay:.15},style:{pointerEvents:"auto"},className:"overlay"},r.a.createElement("a",{onClick:function(){return n(null)}})),r.a.createElement("div",{className:"card-content-container open"},r.a.createElement(s.c.div,{className:"card-content",layoutId:"card-container-".concat(a)},r.a.createElement(s.c.div,{className:"card-image-container",layoutId:"card-image-container-".concat(a)},r.a.createElement("img",{className:"card-image",src:g.imgUrl,alt:""})),r.a.createElement(s.c.div,{className:"title-container",layoutId:"title-container-".concat(a)}),r.a.createElement(s.c.div,{className:"content-container",animate:!0},r.a.createElement("div",{className:"title-inputs"},r.a.createElement(f.a,{value:g.itemName,name:"itemName",label:"Name",variant:"standard",onChange:I}),r.a.createElement(f.a,{value:g.itemPrice?g.itemPrice:"",name:"itemPrice",onChange:I,label:"Price",variant:"standard"})),r.a.createElement(f.a,{value:g.itemDescription,name:"itemDescription",multiline:!0,rows:4,onChange:I,label:"Description",variant:"standard"}),r.a.createElement("div",{className:"title-inputs"},r.a.createElement("div",{className:"title-inputs column wide"},r.a.createElement(w.a,{className:"sections-select"},r.a.createElement(b.a,{id:"demo-simple-select-label"},"Menu Section"),r.a.createElement(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:i.length>0?g.section:"",onChange:I,name:"section",variant:"standard"},i.map((function(e,t){return r.a.createElement(N.a,{value:e.id,key:e.id},e.name)})))),r.a.createElement(f.a,{value:g.imgUrl,name:"imgUrl",onChange:I,label:"Image Url",variant:"standard"})),r.a.createElement("div",{className:"title-inputs column"},r.a.createElement(k.a,{control:r.a.createElement(C.a,{checked:g.gf,onChange:O,name:"gf",color:"primary"}),label:"Gluten free"}),r.a.createElement(k.a,{control:r.a.createElement(C.a,{checked:g.v,onChange:O,name:"v",color:"primary"}),label:"Vegan"}),r.a.createElement(k.a,{control:r.a.createElement(C.a,{checked:g.featured,onChange:O,name:"featured",color:"primary"}),label:"Featured"}))),r.a.createElement("div",{className:"card-buttons"},r.a.createElement(y.a,{variant:"extended",color:"primary",onClick:function(){c(g),n(null)}},r.a.createElement("span",null,"Confirm",r.a.createElement("span",{className:"hidden-sm"}," edits"))),r.a.createElement("div",null,r.a.createElement("a",{onClick:function(){n(null)}},r.a.createElement(E.a,null),r.a.createElement("span",null,"Cancel")),r.a.createElement("a",{onClick:function(){l(g),n(null)}},r.a.createElement(v.a,null),r.a.createElement("span",null,"Delete"))))))))}var O=a(65),S=a.n(O),D=a(66),x=a.n(D),P=a(63),U=a.n(P),z=a(64),q=a.n(z),F=function(e){var t=e.handleIncrementSection,a=e.handleDecrementSection,r=e.handleUpdateSectionName,i=e.section,c=n.useState(!1),l=Object(o.a)(c,2),d=l[0],u=l[1],g=n.useState(i),E=Object(o.a)(g,2),h=E[0],v=E[1];return n.createElement(s.c.h2,{className:"section-header",layoutId:"cardList",key:"section-".concat(i.id)},d?n.createElement(f.a,{value:h.name,name:"name",onChange:function(e){var t=e.target,a=t.value,n=t.name;v(Object(m.a)({},h,Object(p.a)({},n,a)))},variant:"standard"}):i.name,n.createElement("div",{className:"section-actions"},d?n.createElement(y.a,{color:"primary",size:"small",onClick:function(){r(h),u(!1)}},n.createElement(x.a,null)):n.createElement("span",null,n.createElement(y.a,{color:"primary",size:"small",onClick:function(){t(i)}},n.createElement(U.a,null)),n.createElement(y.a,{color:"primary",size:"small",onClick:function(){a(i)}},n.createElement(q.a,null)),n.createElement(y.a,{color:"primary",size:"small",onClick:function(){u(!0)}},n.createElement(S.a,null)))),!d&&n.createElement(s.c.span,{className:"section-underline"}))},L=a(67),A=a(50),B=a.n(A),G={hidden:{opacity:0,y:50,color:"#ffffff"},shown:{opacity:1,y:0,color:"#ffffff",transition:{duration:.5,when:"beforeChildren",staggerChildren:.2}}},T={display:"flex",alignItems:"center",justifyContent:"center",minHeight:550},W=function(){return r.a.createElement(L.Parallax,{blur:0,bgImage:a(87),bgImageAlt:"the cat",strength:400},r.a.createElement("div",{style:T},r.a.createElement("div",{className:"headerBG"}),r.a.createElement(s.c.div,{variants:G,initial:"hidden",animate:"shown",className:"headerTitle"},r.a.createElement(s.c.h1,{className:"title",variants:G},"Welcome to your menu"),r.a.createElement(s.c.h6,{className:"title",variants:G},"Click on an existing menu section or item to edit it."),r.a.createElement(s.c.div,{variants:G},r.a.createElement(y.a,{variant:"extended",color:"primary"},r.a.createElement(B.a,null),r.a.createElement("span",null,"Add menu item")),r.a.createElement(y.a,{variant:"extended",color:"primary"},r.a.createElement(B.a,null),r.a.createElement("span",null,"Add menu section"))))))},_=a(127),J=a(128),M=[{name:"Appetizers",order:1,id:1},{name:"Entrees",order:2,id:2},{name:"Desserts",order:3,id:3}],R=[{itemName:"Pizza",section:2,itemPrice:25.95,itemDescription:"adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://i.pinimg.com/474x/81/24/2d/81242d0c48bd9a6b1cf660ce3a79f01f--national-cheese-pizza-day-italian-dinners.jpg",id:1,gf:!0,v:!0,featured:!1},{itemName:"Burger",section:2,itemPrice:15.95,itemDescription:" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://www.aspicyperspective.com/wp-content/uploads/2019/05/spicy-cowboy-bacon-burgers-recipe-31-256x256.jpg",id:2,gf:!0,v:!0,featured:!0},{itemName:"Fries",section:1,itemPrice:9.99,itemDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://s.hdnux.com/photos/44/75/06/9687479/3/rawImage.jpg",id:3,gf:!0,v:!1,featured:!1},{itemName:"Sweet Potatoe Fries",section:1,itemPrice:11.95,itemDescription:"Lorem ipsum dolor sit amet, c aliqua.",imgUrl:"https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/the-perfect-sweet-potato-fries.jpg",id:4,gf:!0,v:!1,featured:!1},{itemName:"Soup",section:1,itemPrice:15.95,itemDescription:"Lorem ipsum dolor sit amet, consectetueiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://www.aspicyperspective.com/wp-content/uploads/2018/01/Skinny-Creamy-Chicken-Broccoli-Soup-100-256x256.jpg",id:5,gf:!1,v:!0,featured:!0},{itemName:"Panini",section:2,itemPrice:15.95,itemDescription:"Lorem ipsum dolor sit amet,  ut labore et dolore magna aliqua.",imgUrl:"https://photos.bigoven.com/recipe/hero/pepporoni-panini-sandwich.jpg?h=300&w=300",id:6,gf:!0,v:!1,featured:!1},{itemName:"Cake",section:3,itemPrice:15.95,itemDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://saraleedesserts.com/wp-content/uploads/2017/10/Nutella-Filled-Pound-Cake-256x256.jpg",id:7,gf:!0,v:!0,featured:!0},{itemName:"Pasta",section:2,itemPrice:15.95,itemDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://ohsheglows.com/gs_images/2020/05/IMG_5643-256x256.jpg",id:8,gf:!1,v:!1,featured:!1}],V=(a(88),Object(_.a)({palette:{primary:{light:"#60D7A4",main:"#3cc68a",dark:"#029b59",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}})),H=function(e,t){switch(t.type){case"add":var a=e.sort((function(e,t){return e.id-t.id})),n=a[a.length-1].id+1,r=Object(m.a)({},t.item,{id:n});return[].concat(Object(l.a)(e),[r]);case"remove":return e.filter((function(e){return e.id!==t.item.id}));case"update":return e.map((function(e){return e.id===t.item.id?t.item:e}));default:return e}},$=function(e,t){switch(t.type){case"add":var a=e[e.length-1]?e[e.length-1].id+1:1,n=Object(m.a)({},t.section,{id:a}),r=e.map((function(e){return e.order=e.order>=t.section.order?e.order+1:e.order,e}));return(r=[].concat(Object(l.a)(r),[n])).sort((function(e,t){return e.order-t.order}));case"remove":return e.map((function(e){return e.order=e.order>=t.section.order?e.order-1:e.order,e})).filter((function(e){return e.id!==t.section.id}));case"updateName":return e.map((function(e){return t.section.id===e.id?t.section:e}));case"increment":return t.section.order===e.length?e:e.map((function(e){return e.order===t.section.order?Object(m.a)({},e,{order:e.order+1}):e.order===t.section.order+1?Object(m.a)({},e,{order:e.order-1}):e}));case"decrement":return 1===t.section.order?e:e.map((function(e){return e.order===t.section.order?Object(m.a)({},e,{order:e.order-1}):e.order===t.section.order-1?Object(m.a)({},e,{order:e.order+1}):e}));default:return e}};var K=function(){var e=r.a.useReducer(H,R),t=Object(o.a)(e,2),a=t[0],n=t[1],i=r.a.useState(!1),c=Object(o.a)(i,2),l=c[0],m=c[1],d=r.a.useReducer($,M),p=Object(o.a)(d,2),f=p[0],g=p[1],E=r.a.useState(null),h=Object(o.a)(E,2),v=h[0],y=h[1],b=function(e){m(null!==e),y(e)};return r.a.createElement("div",{className:"App"},r.a.createElement(J.a,{theme:V},r.a.createElement(W,null),r.a.createElement(s.c.div,{className:"grid-container",animate:"shown",initial:"hidden",variants:{hidden:{opacity:0,scale:.2},shown:{opacity:1,scale:1,transition:{duration:.3,when:"beforeChildren",staggerChildren:.15}}}},r.a.createElement(s.b,{type:"crossfade"},r.a.createElement(s.a,null,v&&l&&r.a.createElement(I,{key:"item",sections:f,items:a,id:v,setSelected:b,handleEditItem:function(e){n({type:"update",item:e})},handleDeleteItem:function(e){setTimeout((function(){n({type:"remove",item:e})}),500)}})),function(e){return f.sort((function(e,t){return e.order-t.order})).map((function(t,a){return r.a.createElement("div",{key:"section-block-".concat(t.id)},r.a.createElement(F,{section:t,handleIncrementSection:function(e){g({type:"increment",section:e})},handleDecrementSection:function(e){g({type:"decrement",section:e})},handleUpdateSectionName:function(e){g({type:"updateName",section:e})}}),r.a.createElement(u,{items:e,setSelected:b,selectedId:v,sectionId:t.id}))}))}(a)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.2625629c.chunk.js.map