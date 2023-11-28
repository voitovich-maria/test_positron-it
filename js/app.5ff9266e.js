(function(){"use strict";var t={4308:function(t,e,r){var s=r(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("header",{staticClass:"header"},[e("div",{staticClass:"header__top container"}),e("div",{staticClass:"header__bottom container"},[e("HeaderCart")],1)]),e("CartPage")],1)},a=[],n=function(){var t=this,e=t._self._c;return e("a",{staticClass:"header-cart",attrs:{href:"","aria-label":"Корзина"}},[e("svg",{attrs:{width:"32",height:"32",fill:"none"}},[e("use",{attrs:{"xlink:href":r(7795)+"#cart-icon"}})]),e("div",{staticClass:"header-cart__info"},[e("span",{staticClass:"header-cart__title"},[t._v(" Ваша корзина ")]),e("span",{staticClass:"header-cart__count",attrs:{"aria-label":"Количество товаров"}},[t._v(" "+t._s(t.formattedTotalCount)+" ")]),e("span",{staticClass:"header-cart__price",attrs:{"aria-label":"Стоимость товаров"}},[t._v(" "+t._s(t.formattedTotalPrice)+" ")])])])},c=[],o=r(3822);function l(t){return new Intl.NumberFormat("ru",{style:"currency",currency:"RUB",maximumFractionDigits:0}).format(t)}function u(t,e){const r=[2,0,1,1,1,2];return e[t%100>4&&t%100<20?2:r[t%10<5?t%10:5]]}var d={name:"HeaderCart",computed:{...(0,o.Se)({totalCount:"cartTotalCount",totalPrice:"cartTotalPrice"}),formattedTotalCount(){return`${this.totalCount} ${u(this.totalCount,["товар","товара","товаров"])}`},formattedTotalPrice(){return l(this.totalPrice)}}},p=d,_=r(1001),m=(0,_.Z)(p,n,c,!1,null,null,null),f=m.exports,C=function(){var t=this,e=t._self._c;return e("main",{staticClass:"content container"},[e("BreadCrumbs",{staticClass:"content__breadcrumbs"}),e("section",{staticClass:"content__cart cart"},[e("form",{staticClass:"cart__form",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.order.apply(null,arguments)}}},[e("div",{staticClass:"cart__left"},[e("div",{staticClass:"cart__info"},[e("h1",{staticClass:"cart__title"},[t._v(" Ваша корзина ")]),e("span",{staticClass:"cart__count",attrs:{"aria-label":"Количество"}},[t._v(" "+t._s(t.formattedTotalCount)+" ")]),e("button",{staticClass:"cart__clear-btn",attrs:{type:"button"},on:{click:t.deleteAllProducts}},[t._v(" Очистить корзину ")])]),e("ul",{staticClass:"cart__list"},t._l(t.products,(function(t){return e("CartItem",{key:t.id,staticClass:"cart__item",attrs:{item:t}})})),1),e("div",{staticClass:"cart__checkbox checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.needInstall,expression:"needInstall"}],staticClass:"checkbox__input",attrs:{type:"checkbox",name:"installation"},domProps:{checked:Array.isArray(t.needInstall)?t._i(t.needInstall,null)>-1:t.needInstall},on:{change:function(e){var r=t.needInstall,s=e.target,i=!!s.checked;if(Array.isArray(r)){var a=null,n=t._i(r,a);s.checked?n<0&&(t.needInstall=r.concat([a])):n>-1&&(t.needInstall=r.slice(0,n).concat(r.slice(n+1)))}else t.needInstall=i}}}),e("svg",{staticClass:"checkbox__img",attrs:{width:"30",height:"30",fill:"none"}},[e("use",{attrs:{"xlink:href":r(7795)+"#tools-icon"}})]),t._m(0)])]),e("div",{staticClass:"cart__right total"},[e("h2",{staticClass:"total__title"},[t._v(" Итого ")]),e("ul",{staticClass:"total__list"},[e("li",{staticClass:"total__item"},[e("span",{staticClass:"total__label"},[t._v(" Сумма заказа ")]),e("span",{staticClass:"total__spec"},[t._v(" "+t._s(t.formattedTotalPrice)+" ")])]),e("li",{staticClass:"total__item"},[e("span",{staticClass:"total__label"},[t._v(" Количество ")]),e("span",{staticClass:"total__spec"},[t._v(" "+t._s(t.totalCount)+" шт ")])]),e("li",{staticClass:"total__item"},[e("span",{staticClass:"total__label"},[t._v(" Установка ")]),e("span",{staticClass:"total__spec"},[t._v(" "+t._s(t.needInstall?"Да":"Нет")+" ")])]),e("li",{staticClass:"total__item"},[e("span",{staticClass:"total__label"},[t._v(" Стоимость товаров ")]),e("span",{staticClass:"total__spec"},[t._v(" "+t._s(t.formattedTotalPrice)+" ")])])]),e("button",{staticClass:"content__btn total__btn",attrs:{type:"submit"}},[t._v(" Оформить заказ ")]),e("button",{staticClass:"content__btn content__btn_light total__btn",attrs:{type:"submit"}},[t._v(" Купить в 1 клик ")])])])]),e("ViewedProducts",{staticClass:"content__swiper"})],1)},h=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"checkbox__info"},[e("h3",{staticClass:"checkbox__title"},[t._v(" Установка ")]),e("p",{staticClass:"checkbox__descr"},[t._v(" Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров. ")])])}],v=r(1076),P=function(){var t=this;t._self._c;return t._m(0)},b=[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"breadcrumbs",attrs:{"aria-label":"Навигация"}},[e("li",{staticClass:"breadcrumbs__item"},[e("a",{staticClass:"breadcrumbs__link",attrs:{href:""}},[t._v(" Главная ")])]),e("li",{staticClass:"breadcrumbs__item"},[e("a",{staticClass:"breadcrumbs__link",attrs:{href:""}},[t._v(" Корзина ")])])])}],g={name:"BreadCrumbs"},x=g,w=(0,_.Z)(x,P,b,!1,null,null,null),y=w.exports,k=function(){var t=this,e=t._self._c;return e("li",{staticClass:"product"},[e("img",{staticClass:"product__img",attrs:{src:t.item.product.img,alt:t.item.product.title}}),e("div",{staticClass:"product__info"},[e("h3",{staticClass:"product__title"},[t._v(" "+t._s(t.item.product.title)+" ")]),e("p",{staticClass:"product__specs"},[t._v(" "+t._s(t.item.product.specs)+" ")]),e("span",{staticClass:"product__code"},[t._v(" Артикул: "+t._s(t.item.product.code)+" ")])]),e("div",{staticClass:"product__counter"},[e("button",{staticClass:"product__minus-btn",attrs:{type:"button","aria-label":"Убрать один товар"},on:{click:function(e){t.count>1?t.count.set(t.count--):t.deleteProduct(t.item.id)}}},[e("svg",{attrs:{width:"10",height:"2",fill:"none"}},[e("use",{attrs:{"xlink:href":r(7795)+"#minus-icon"}})])]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.count,expression:"count",modifiers:{number:!0}}],staticClass:"product__count-input",attrs:{type:"text",name:"count"},domProps:{value:t.count},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.handleEnter.apply(null,arguments))},input:function(e){e.target.composing||(t.count=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("button",{staticClass:"product__plus-btn",attrs:{type:"button","aria-label":"Добавить один товар"},on:{click:function(e){return t.count.set(t.count++)}}},[e("svg",{attrs:{width:"10",height:"10",fill:"none"}},[e("use",{attrs:{"xlink:href":r(7795)+"#plus-icon"}})])]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.item.count>1,expression:"item.count > 1"}],staticClass:"product__price-for-one"},[t._v(" "+t._s(t.formattedPriceForOne)+"/шт. ")])]),e("b",{staticClass:"product__price"},[t._v(" "+t._s(t.formattedPrice)+" ")]),e("button",{staticClass:"product__del-btn",attrs:{type:"button","aria-label":"Удалить товар"},on:{click:function(e){return e.preventDefault(),t.deleteProduct(t.item.id)}}},[e("svg",{attrs:{width:"14",height:"14",fill:"none"}},[e("use",{attrs:{"xlink:href":r(7795)+"#close-icon"}})])])])},I=[],E={name:"CartItem",props:["item"],computed:{count:{get(){return this.item.count},set(t){this.$store.commit("updateCartProductCount",{id:this.item.id,count:parseInt(t,10)||0})}},formattedPriceForOne(){return l(this.item.product.price)},formattedPrice(){return l(this.item.count*this.item.product.price)}},methods:{...(0,o.OI)({deleteProduct:"deleteCartProduct"}),handleEnter(t){"Enter"===t.key&&t.preventDefault()}}},T=E,H=(0,_.Z)(T,k,I,!1,null,null,null),G=H.exports,A=function(){var t=this,e=t._self._c;return e("section",{staticClass:"swiper"},[e("h2",{staticClass:"swiper__title"},[t._v(" Просмотренные товары ")]),e("div",{ref:"swiper",staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(t){return e("ViewedItem",{key:t.id,staticClass:"swiper-slide",attrs:{item:t}})})),1),t._m(0)])])},O=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"swiper__btns-wrapper"},[e("div",{staticClass:"swiper-button-prev"}),e("div",{staticClass:"swiper-pagination"}),e("div",{staticClass:"swiper-button-next"})])}],$=r(5993),D=r(1008),N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"slide"},[e("img",{staticClass:"slide__img",attrs:{src:t.item.product.img,alt:t.item.product.title}}),e("h3",{staticClass:"slide__title"},[t._v(" "+t._s(t.item.product.name)+" ")]),e("p",{staticClass:"slide__descr"},[t._v(" "+t._s(t.item.product.descr)+" ")]),e("span",{staticClass:"slide__price"},[t._v(" "+t._s(t.formattedPriceRange)+" ")]),e("span",{staticClass:"slide__price-euro"},[t._v(" "+t._s(t.formattedPriceRangeEuro)+" ")]),e("button",{staticClass:"content__btn",attrs:{type:"button"}},[t._v(" Подробнее ")])])},B=[];function Z(t){return new Intl.NumberFormat("de",{style:"currency",currency:"EUR",minimumFractionDigits:2}).format(t)}var S={name:"ViewedItem",props:["item"],computed:{formattedPriceRange(){return`\n        ${l(this.item.product.minPrice)} – ${l(this.item.product.maxPrice)}\n      `},formattedPriceRangeEuro(){return`\n        ${Z(this.item.product.minPriceEuro)} – ${Z(this.item.product.maxPriceEuro)}\n      `}}},j=S,X=(0,_.Z)(j,N,B,!1,null,null,null),F=X.exports,V={name:"ViewedProducts",components:{ViewedItem:F},computed:{...(0,o.Se)({products:"viewedDetailProducts"})},mounted(){new $.Z(this.$refs.swiper,{modules:[D.W_,D.tl],pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},a11y:{prevSlideMessage:"Предыдущий слайд",nextSlideMessage:"Следующий слайд"},slidesPerView:4,spaceBetween:20})}},R=V,K=(0,_.Z)(R,A,O,!1,null,null,null),M=K.exports,U={name:"CartPage",components:{BreadCrumbs:y,CartItem:G,ViewedProducts:M},computed:{...(0,o.Se)({products:"cartDetailProducts",totalCount:"cartTotalCount",totalPrice:"cartTotalPrice"}),formattedTotalCount(){return`${this.totalCount} ${u(this.totalCount,["товар","товара","товаров"])}`},formattedTotalPrice(){return l(this.totalPrice)},needInstall:{get(){return this.$store.state.needInstall},set(t){this.$store.commit("changeNeedInstall",t)}}},methods:{...(0,o.OI)({deleteAllProducts:"deleteAllCartProducts",changeNeedInstall:"changeNeedInstall"}),order(){(0,v.Z)({method:"post",url:"https://jsonplaceholder.typicode.com/posts",params:{userAccessKey:this.$store.state.userAccessKey},data:{cartProducts:this.$store.state.cartProducts,needInstall:this.$store.state.needInstall,userAccessKey:this.$store.state.userAccessKey},headers:{"Content-type":"application/json; charset=UTF-8"}}).then((t=>{console.log(t.data)})).catch((t=>{console.log(t)}))}}},q=U,W=(0,_.Z)(q,C,h,!1,null,null,null),z=W.exports,J={name:"App",components:{HeaderCart:f,CartPage:z}},L=J,Q=(0,_.Z)(L,i,a,!1,null,null,null),Y=Q.exports,tt=[{id:1,name:"BXC",code:"G2H1065",title:"Вытяжное устройство BXC",descr:"Вытяжное устройство для механической системы вентиляции",specs:"12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия",price:12644,minPrice:6848,maxPrice:56584,minPriceEuro:77.6,maxPriceEuro:643.86,img:"img/BXC.png"},{id:2,name:"G2H",code:"G2H1065",title:"Вытяжное устройство G2H",descr:"Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",specs:"12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия",price:12644,minPrice:6848,maxPrice:56584,minPriceEuro:77.6,maxPriceEuro:643.86,img:"img/G2H.png"},{id:3,name:"GHN",code:"G2H1065",title:"Вытяжное устройство GHN",descr:"Вытяжное устройство с датчиком присутствия",specs:"12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия",price:12644,minPrice:6848,maxPrice:56584,minPriceEuro:77.6,maxPriceEuro:643.86,img:"img/GHN.png"},{id:4,name:"TDA",code:"G2H1065",title:"Вытяжное устройство TDA",descr:"Вытяжное устройство с датчиком присутствия",specs:"12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия",price:12644,minPrice:6848,maxPrice:56584,minPriceEuro:77.6,maxPriceEuro:643.86,img:"img/TDA.png"},{id:5,name:"BXC",code:"G2H1065",title:"Вытяжное устройство BXC",descr:"Вытяжное устройство для механической системы вентиляции",specs:"12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия",price:12644,minPrice:6848,maxPrice:56584,minPriceEuro:77.6,maxPriceEuro:643.86,img:"img/BXC.png"},{id:6,name:"G2H",code:"G2H1065",title:"Вытяжное устройство G2H",descr:"Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",specs:"12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия",price:12644,minPrice:6848,maxPrice:56584,minPriceEuro:77.6,maxPriceEuro:643.86,img:"img/G2H.png"},{id:7,name:"GHN",code:"G2H1065",title:"Вытяжное устройство GHN",descr:"Вытяжное устройство с датчиком присутствия",specs:"12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия",price:12644,minPrice:6848,maxPrice:56584,minPriceEuro:77.6,maxPriceEuro:643.86,img:"img/GHN.png"},{id:8,name:"TDA",code:"G2H1065",title:"Вытяжное устройство TDA",descr:"Вытяжное устройство с датчиком присутствия",specs:"12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия",price:12644,minPrice:6848,maxPrice:56584,minPriceEuro:77.6,maxPriceEuro:643.86,img:"img/TDA.png"},{id:9,name:"BXC",code:"G2H1065",title:"Вытяжное устройство BXC",descr:"Вытяжное устройство для механической системы вентиляции",specs:"12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия",price:12644,minPrice:6848,maxPrice:56584,minPriceEuro:77.6,maxPriceEuro:643.86,img:"img/BXC.png"}];s.ZP.use(o.ZP);var et=new o.ZP.Store({state:{cartProducts:[{id:2,count:1},{id:1,count:2},{id:3,count:1}],needInstall:!1,viewedProducts:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9}],userAccessKey:"qwerty"},mutations:{updateCartProductCount(t,{id:e,count:r}){const s=t.cartProducts.find((t=>t.id===e));s&&(s.count=r)},deleteCartProduct(t,e){t.cartProducts=t.cartProducts.filter((t=>t.id!==e))},deleteAllCartProducts(t){t.cartProducts=[]},changeNeedInstall(t,e){t.needInstall=e}},getters:{cartDetailProducts(t){return t.cartProducts.map((t=>({...t,product:tt.find((e=>e.id===t.id))})))},cartTotalCount(t){return t.cartProducts.reduce(((t,e)=>e.count+t),0)},cartTotalPrice(t,e){return e.cartDetailProducts.reduce(((t,e)=>e.product.price*e.count+t),0)},viewedDetailProducts(t){return t.viewedProducts.map((t=>({...t,product:tt.find((e=>e.id===t.id))})))}}});s.ZP.config.productionTip=!1,new s.ZP({store:et,render:t=>t(Y)}).$mount("#app")},7795:function(t,e,r){t.exports=r.p+"img/sprite.4bab6f0e.svg"}},e={};function r(s){var i=e[s];if(void 0!==i)return i.exports;var a=e[s]={exports:{}};return t[s].call(a.exports,a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,s,i,a){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],a=t[u][2];for(var c=!0,o=0;o<s.length;o++)(!1&a||n>=a)&&Object.keys(r.O).every((function(t){return r.O[t](s[o])}))?s.splice(o--,1):(c=!1,a<n&&(n=a));if(c){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,i,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/test_positron-it/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,a,n=s[0],c=s[1],o=s[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(o)var u=o(r)}for(e&&e(s);l<n.length;l++)a=n[l],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(u)},s=self["webpackChunktest_positron_it"]=self["webpackChunktest_positron_it"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(4308)}));s=r.O(s)})();
//# sourceMappingURL=app.5ff9266e.js.map