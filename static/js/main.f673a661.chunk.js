(this["webpackJsonpbeer-listing"]=this["webpackJsonpbeer-listing"]||[]).push([[0],[,,,,,,,,,,,function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"c",(function(){return i})),t.d(a,"b",(function(){return o})),t.d(a,"d",(function(){return m}));var n=t(18),l=t.n(n),c=t(27),r="GET_BEERS",i="GET_BEERS_SUCCESS",o="GET_BEERS_FAILED",s=function(e,a){return{type:i,payload:e,category:a}},m=function(e){return function(){var a=Object(c.a)(l.a.mark((function a(t){var n,c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:r}),a.prev=1,a.next=4,fetch(e?"https://api.punkapi.com/v2/beers?food=".concat(e,"&per_page=80"):"https://api.punkapi.com/v2/beers");case 4:return n=a.sent,a.next=7,n.json();case 7:c=a.sent,t(s(c,e)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),t({type:o});case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}()}},,,function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return l}));var n="SET_SELECTED_BEER",l=function(e){return function(a){a({type:n,selectedBeer:e})}}},,,,,,,,,,,function(e,a,t){e.exports=t(51)},,,function(e,a){},,function(e,a,t){e.exports=t(50)},,,,,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(9),r=t(7),i=t(16),o=t(2),s=t(25),m=t.n(s),u=t(11),f=(t(40),function(e){var a=e.text;return l.a.createElement("header",{className:"header"},l.a.createElement("h1",{className:"header__text"},a))}),d=function(e){var a=e.fill;return l.a.createElement(n.Fragment,null,l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:a,viewBox:"0 0 512.005 512.005"},l.a.createElement("path",{d:"M505.749 475.587l-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317C405.333 90.926 314.41.003 202.666.003S0 90.925 0 202.669s90.923 202.667 202.667 202.667c48.213 0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-.001-30.165zM202.667 362.669c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z"})))};d.defaultProps={fill:"#ffffff"};var E=d,g=function(e){var a=e.fill;return l.a.createElement(n.Fragment,null,l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:a,viewBox:"0 0 511.988 511.988"},l.a.createElement("path",{d:"M394.655 202.654H95.988c-17.643 0-32 14.357-32 32v21.333c0 76.117 42.048 145.152 109.717 180.16 5.227 2.688 11.669.661 14.379-4.587 2.688-5.227.661-11.669-4.587-14.379-60.544-31.317-98.176-93.077-98.176-161.195v-21.333c0-5.888 4.779-10.667 10.667-10.667h298.667c5.888 0 10.667 4.779 10.667 10.667v21.333c0 68.117-37.632 129.877-98.197 161.173-5.248 2.709-7.275 9.152-4.587 14.379a10.69 10.69 0 009.493 5.781c1.664 0 3.328-.384 4.885-1.195 67.691-34.987 109.739-104 109.739-180.139v-21.333c0-17.641-14.358-31.998-32-31.998z"}),l.a.createElement("path",{d:"M489.865 422.558c-1.664-3.989-5.547-6.592-9.856-6.592H10.676c-4.309 0-8.192 2.603-9.856 6.592a10.643 10.643 0 002.304 11.627l23.915 23.936c14.123 14.101 32.853 21.867 52.8 21.867h330.965c19.947 0 38.699-7.765 52.843-21.867l23.915-23.936a10.644 10.644 0 002.303-11.627zm-41.322 20.48c-10.069 10.069-23.488 15.616-37.717 15.616H79.839c-14.229 0-27.648-5.547-37.717-15.616l-5.717-5.717H454.26l-5.717 5.717zm42.816-190.016c-28.736-18.475-74.645 1.579-79.787 3.904-5.355 2.453-7.744 8.768-5.291 14.144a10.657 10.657 0 0014.144 5.291c10.283-4.672 43.264-15.744 59.392-5.355 7.275 4.672 10.837 13.739 10.837 27.648 0 42.709-86.144 68.523-119.403 74.88l-7.552 1.493c-5.781 1.131-9.536 6.741-8.405 12.523 1.003 5.077 5.461 8.597 10.453 8.597.683 0 1.365-.064 2.069-.213l7.488-1.472c5.589-1.067 136.683-26.773 136.683-95.808.001-21.461-6.953-36.8-20.628-45.632zM328.372 113.31c17.344-21.675 17.344-55.616 0-77.291a10.634 10.634 0 00-14.997-1.664 10.655 10.655 0 00-1.664 14.997c10.987 13.717 10.987 36.907-.021 50.667-17.365 21.675-17.365 55.616 0 77.291a10.626 10.626 0 008.341 4.011c2.325 0 4.693-.768 6.656-2.347 4.608-3.691 5.355-10.411 1.664-14.997-11.008-13.718-11.008-36.907.021-50.667zm-64.085 0c17.365-21.675 17.365-55.616 0-77.291-3.669-4.608-10.389-5.355-14.997-1.664-4.608 3.691-5.355 10.411-1.664 14.997 11.008 13.717 11.008 36.907-.021 50.667-17.344 21.675-17.344 55.616 0 77.291a10.626 10.626 0 008.341 4.011c2.325 0 4.672-.768 6.656-2.347a10.655 10.655 0 001.664-14.997c-10.987-13.718-10.987-36.907.021-50.667zm-63.915.021c17.344-21.675 17.344-55.616 0-77.291a10.632 10.632 0 00-14.997-1.664c-4.587 3.669-5.333 10.389-1.664 14.976 10.987 13.717 10.987 36.907-.021 50.667-17.365 21.675-17.365 55.616 0 77.291a10.626 10.626 0 008.341 4.011 10.72 10.72 0 006.656-2.325c4.608-3.691 5.355-10.411 1.664-14.997-11.008-13.74-11.008-36.908.021-50.668z"})))};g.defaultProps={fill:"#ffffff"};var p=g,v=function(e){var a=e.fill;return l.a.createElement(n.Fragment,null,l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:a,viewBox:"0 0 128 128"},l.a.createElement("path",{d:"M23.437 4.75C13.133 4.75 4.75 15.769 4.75 29.313c0 10.675 5.2 20.038 12.8 23.324l-1.7 62.818a7.589 7.589 0 1015.173 0l-1.7-62.817c7.6-3.286 12.8-12.649 12.8-23.324.002-13.545-8.381-24.564-18.686-24.564zm3.546 45.038a1.75 1.75 0 00-1.192 1.712l1.735 64.054a4.09 4.09 0 11-8.177 0L21.084 51.5a1.75 1.75 0 00-1.192-1.707C13.037 47.49 8.25 39.07 8.25 29.313 8.25 17.7 15.063 8.25 23.437 8.25s15.188 9.45 15.188 21.063c0 9.757-4.787 18.177-11.642 20.475zM68.327 4.816a4.686 4.686 0 00-5.275 3.157C58.064 22.589 51.982 46.65 51.33 78.278a1.751 1.751 0 00.909 1.571l6.943 3.806-2.029 31.528a7.581 7.581 0 1015.146.486V9.505a4.68 4.68 0 00-3.972-4.689zm.473 110.853a4.086 4.086 0 01-4.081 4.081 4.081 4.081 0 01-4.072-4.343l2.1-32.638a1.749 1.749 0 00-.905-1.647l-6.987-3.831c.753-30.656 6.659-53.97 11.51-68.187a1.25 1.25 0 012.435.4zM121.5 4.75a1.749 1.749 0 00-1.75 1.75v28.69a15.159 15.159 0 01-11.5 14.732 1.749 1.749 0 00-1.325 1.746l1.73 63.88a4.093 4.093 0 11-8.182 0l1.73-63.88a1.749 1.749 0 00-1.325-1.746A15.16 15.16 0 0189.37 35.19V6.5a1.75 1.75 0 00-3.5 0v28.69a18.653 18.653 0 0012.794 17.733l-1.693 62.529a7.592 7.592 0 1015.178 0l-1.693-62.529A18.653 18.653 0 00123.25 35.19V6.5a1.749 1.749 0 00-1.75-1.75z"}),l.a.createElement("path",{d:"M96.09 35.917a1.749 1.749 0 001.75-1.75V6.5a1.75 1.75 0 00-3.5 0v27.667a1.749 1.749 0 001.75 1.75zm8.469 0a1.75 1.75 0 001.75-1.75V6.5a1.75 1.75 0 00-3.5 0v27.667a1.749 1.749 0 001.75 1.75zm8.469 0a1.749 1.749 0 001.75-1.75V6.5a1.75 1.75 0 00-3.5 0v27.667a1.75 1.75 0 001.75 1.75z"})))};v.defaultProps={fill:"#ffffff"};var _=v,b=function(e){var a=e.fill;return l.a.createElement(n.Fragment,null,l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:a,viewBox:"0 0 512.003 512.003"},l.a.createElement("path",{d:"M477.958 262.633a15.004 15.004 0 010-13.263l19.096-39.065c10.632-21.751 2.208-47.676-19.178-59.023l-38.41-20.38a15.005 15.005 0 01-7.796-10.729l-7.512-42.829c-4.183-23.846-26.241-39.87-50.208-36.479l-43.053 6.09a15.004 15.004 0 01-12.613-4.099l-31.251-30.232c-17.401-16.834-44.661-16.835-62.061 0L193.72 42.859a15.01 15.01 0 01-12.613 4.099l-43.053-6.09c-23.975-3.393-46.025 12.633-50.208 36.479l-7.512 42.827a15.008 15.008 0 01-7.795 10.73l-38.41 20.38c-21.386 11.346-29.81 37.273-19.178 59.024l19.095 39.064a15.004 15.004 0 010 13.263L14.95 301.699c-10.632 21.751-2.208 47.676 19.178 59.023l38.41 20.38a15.005 15.005 0 017.796 10.729l7.512 42.829c3.808 21.708 22.422 36.932 43.815 36.93 2.107 0 4.245-.148 6.394-.452l43.053-6.09a15 15 0 0112.613 4.099l31.251 30.232c8.702 8.418 19.864 12.626 31.03 12.625 11.163-.001 22.332-4.209 31.03-12.625l31.252-30.232c3.372-3.261 7.968-4.751 12.613-4.099l43.053 6.09c23.978 3.392 46.025-12.633 50.208-36.479l7.513-42.827a15.008 15.008 0 017.795-10.73l38.41-20.38c21.386-11.346 29.81-37.273 19.178-59.024l-19.096-39.065zm-13.923 72.002l-38.41 20.38c-12.246 6.499-20.645 18.057-23.04 31.713l-7.512 42.828a15.038 15.038 0 01-16.987 12.342l-43.053-6.09c-13.73-1.945-27.316 2.474-37.281 12.113L266.5 478.152a15.04 15.04 0 01-20.997 0l-31.251-30.232c-8.422-8.147-19.432-12.562-30.926-12.562-2.106 0-4.229.148-6.355.449l-43.053 6.09a15.042 15.042 0 01-16.987-12.342l-7.513-42.829c-2.396-13.656-10.794-25.215-23.041-31.712l-38.41-20.38a15.037 15.037 0 01-6.489-19.969L60.574 275.6c6.088-12.456 6.088-26.742 0-39.198l-19.096-39.065a15.037 15.037 0 016.489-19.969l38.41-20.38c12.246-6.499 20.645-18.057 23.04-31.713l7.512-42.828a15.038 15.038 0 0116.987-12.342l43.053 6.09c13.725 1.943 27.316-2.474 37.281-12.113l31.252-30.232a15.04 15.04 0 0120.997 0l31.251 30.232c9.965 9.64 23.554 14.056 37.281 12.113l43.053-6.09a15.04 15.04 0 0116.987 12.342l7.512 42.829c2.396 13.656 10.794 25.215 23.041 31.712l38.41 20.38a15.037 15.037 0 016.489 19.969l-19.096 39.064c-6.088 12.455-6.088 26.743 0 39.198l19.096 39.064a15.039 15.039 0 01-6.488 19.972z"}),l.a.createElement("path",{d:"M363.886 148.116c-5.765-5.766-15.115-5.766-20.881 0l-194.889 194.89c-5.766 5.766-5.766 15.115 0 20.881a14.72 14.72 0 0010.44 4.325c3.778 0 7.558-1.441 10.44-4.325l194.889-194.889c5.768-5.767 5.768-15.115.001-20.882zm-166.945-25c-29.852 0-54.139 24.287-54.139 54.139s24.287 54.139 54.139 54.139 54.139-24.287 54.139-54.139-24.287-54.139-54.139-54.139zm0 78.747c-13.569 0-24.608-11.039-24.608-24.609 0-13.569 11.039-24.608 24.608-24.608s24.609 11.039 24.609 24.608c-.001 13.57-11.04 24.609-24.609 24.609zm118.12 78.747c-29.852 0-54.139 24.287-54.139 54.139s24.287 54.139 54.139 54.139c29.852 0 54.139-24.287 54.139-54.139s-24.287-54.139-54.139-54.139zm0 78.747c-13.569 0-24.609-11.039-24.609-24.608s11.039-24.608 24.609-24.608c13.569 0 24.608 11.039 24.608 24.608s-11.039 24.608-24.608 24.608z"})))};b.defaultProps={fill:"#ffffff"};var h=b,N="search",y="coffee",z="cutlery",w="percentage",B=function(e){var a=e.type,t=e.fill;switch(a){case y:return l.a.createElement(p,{fill:t});case z:return l.a.createElement(_,{fill:t});case w:return l.a.createElement(h,{fill:t});default:case N:return l.a.createElement(E,{fill:t})}};B.defaultProps={type:""};var j=B,k=(t(41),function(){var e=Object(o.f)(),a=function(a){e.push(a)};return l.a.createElement("ul",{className:"subNavigation"},l.a.createElement("li",{onClick:function(e){return a("")},className:"subNavigation__item subNavigation__item--active"},"All"),l.a.createElement("li",{onClick:function(e){return a("pizza")},className:"subNavigation__item"},"Pizza"),l.a.createElement("li",{onClick:function(e){return a("steak")},className:"subNavigation__item"},"Steak"))}),C=(t(43),function(){return l.a.createElement("nav",{className:"navigation"},l.a.createElement("ul",{className:"navigation__container"},l.a.createElement("li",{className:"navigation__category navigation__category--active"},l.a.createElement(j,{type:"coffee"})),l.a.createElement("li",{className:"navigation__category"},l.a.createElement(j,{type:"cutlery"})),l.a.createElement("li",{className:"navigation__category"},l.a.createElement(j,{type:"percentage"})),l.a.createElement("li",{className:"navigation__category"},l.a.createElement(j,{type:"search"}))),l.a.createElement(k,null))}),x=(t(44),function(e){var a=e.children;return l.a.createElement("div",{className:"default"},l.a.createElement("div",{className:"default__headings"},l.a.createElement(f,{text:"Demo App"}),l.a.createElement(C,null)),a)}),O=t(14),M=(t(45),function(e){var a=e.imgUrl,t=a||"https://via.placeholder.com/500?text=Image+Unavailable";return l.a.createElement("img",{className:"image",alt:"",src:t})});M.defaultProps={imgUrl:""};var P=M,V=(t(46),function(e){var a=e.selectBeer,t=e.beerData,n=e.toggle,c=t.name,r=t.image_url,i=r?"product__image--border":"product__image--placeholder",o=r&&!!r.includes("keg")?"product__image--large":"";return l.a.createElement("div",{className:"product"},l.a.createElement("div",{onClick:function(){return a(t),void n()},className:"product__image ".concat(i," ").concat(o)},l.a.createElement(P,{imgUrl:r})),l.a.createElement("p",{className:"product__name"},c))});V.defaultProps={imgUrl:"",beerData:{}};var S=Object(r.b)(null,(function(e){return{selectBeer:function(a){e(Object(O.b)(a))}}}))(V),L=(t(47),function(e){var a=e.isVisible,t=e.hide,r=e.selectedBeer,i=r.image_url,o=i&&!!i.includes("keg")?"modal__image--large":"",s=!!i,m=r&&r.food_pairing&&r.food_pairing.join(", ");return a?Object(c.createPortal)(l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"modal",onClick:function(e){return function(e){"modal"===e.target.className&&t()}(e)},"aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},l.a.createElement("div",{className:"modal__body"},l.a.createElement("button",{type:"button",className:"modal__button modal__button--close","data-dismiss":"modal","aria-label":"Close",onClick:t},"Close"),l.a.createElement("div",{className:"modal__container"},l.a.createElement("h3",{className:"modal__heading"},r.name),l.a.createElement("div",{className:"modal__info-container"},l.a.createElement("p",null,r.tagline),l.a.createElement("p",null,l.a.createElement("span",{className:"modal__bold"},"ABV"),": ",r.abv),l.a.createElement("p",{className:"modal__description"},r.description),l.a.createElement("p",null,l.a.createElement("span",{className:"modal__bold"},"Pairs With"),": ",m)),l.a.createElement("div",{className:"modal__image-container"},s?l.a.createElement("div",{className:"modal__image ".concat(o)},l.a.createElement(P,{imgUrl:i})):l.a.createElement("p",{className:"modal__image--unavailable"},"Image Unavailable")),l.a.createElement("div",{className:"modal__footer"},l.a.createElement("button",{className:"modal__button"},"Add to Cart")))))),document.getElementById("modal-root")):null});L.defaultProps={isVisible:!1};var U=Object(r.b)((function(e){return{selectedBeer:e.buyModal.selectedBeer}}))(L),A=t(29),D=function(){var e=Object(n.useState)(!1),a=Object(A.a)(e,2),t=a[0],l=a[1];return{isVisible:t,toggle:function(){l(!t)}}},F=(t(48),function(e){var a=e.beers,t=D(),n=t.isVisible,c=t.toggle;return l.a.createElement("div",{className:"productGrid"},a.map((function(e){return l.a.createElement(S,{key:e.id,beerData:e,toggle:c})})),l.a.createElement(U,{isVisible:n,hide:c}))});F.defaultProps={beers:[]};var I=F,R=Object(r.b)((function(e){return{loading:e.beers.loading,allBeers:e.beers.allBeers,hasErrors:e.beers.hasErrors}}))((function(e){var a=e.dispatch,t=e.loading,c=e.allBeers,r=e.hasErrors,i=e.pageCategory,o=Object(n.useRef)(null);Object(n.useEffect)((function(){o.current!==i&&(o.current=i,a(Object(u.d)(i)))}),[a,i]);return l.a.createElement("div",{className:"beersListing"},l.a.createElement(x,null,t?l.a.createElement("p",null,"Loading Beers..."):r?l.a.createElement("p",null,"Unable to display Beers."):l.a.createElement(I,{beers:c})))})),T=(t(49),m()()),G=function(){return l.a.createElement(R,{pageCategory:""})},H=function(){return l.a.createElement(R,{pageCategory:"steak"})},J=function(){return l.a.createElement(R,{pageCategory:"pizza"})},W=function(){return l.a.createElement(r.a,{store:T},l.a.createElement(i.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",component:G}),l.a.createElement(o.a,{path:"/pizza",component:J}),l.a.createElement(o.a,{path:"/steak",component:H}))))},q=document.getElementById("root");Object(c.render)(l.a.createElement(W,null),q)},function(e,a,t){"use strict";t.r(a);var n=t(8),l=t(26),c=t(21),r=t(11),i={allBeers:[],loading:!1,category:"",hasErrors:!1},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case r.a:return Object(c.a)({},e,{loading:!0});case r.c:return{allBeers:a.payload,loading:!1,hasErrors:!1,category:a.category};case r.b:return Object(c.a)({},e,{loading:!1,hasErrors:!0});default:return e}},s=t(28),m=t.n(s),u=t(14),f={selectedBeer:{}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u.a:return{selectedBeer:a.selectedBeer};default:return e}},E=Object(n.c)({beers:o,buyModal:d,basket:m.a});a.default=function(e){return Object(n.d)(E,e,Object(n.a)(l.a))}}],[[30,1,2]]]);
//# sourceMappingURL=main.f673a661.chunk.js.map