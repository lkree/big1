!function(e){var t={};function a(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(r,l,function(t){return e[t]}.bind(null,l));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r);const n=({text:e,className:t})=>l.a.createElement("li",{className:t},e);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const s=({header:e})=>{const t=["Корзина","Способ доставки","Подтверждение заказа"];return l.a.createElement("ul",{className:"basket__progress-header",style:{display:"flex","list-style-type":"none"}},(e=>t.map((t,a,r)=>{const s={text:`${t}${r.length-1===a?"":" -> "}`,className:e===t?"basket__progress-header-item--active":"basket__progress-header-item"};return l.a.createElement(n,c({key:a},s))}))(e))},i=({className:e})=>(Object(r.useEffect)(()=>window.deliveryPickup()),l.a.createElement("div",{className:`delivery-pickup ${e}`,"data-delivery-type":"Самовывоз"},l.a.createElement("input",{type:"text",className:"delivery-pickup__input",placeholder:"Введите город"}),l.a.createElement("div",{className:"delivery-pickup__points-list"}))),o=({showPoint:e,deliveryProps:t,onPickAnotherPointClick:a})=>{const{header:r,linkText:n,showModule:c}=t,s=getCookie("deliveryAddress");return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"basket__react-delivery-choose-header"},r),(e=>e&&!c?l.a.createElement("div",{className:"basket__react-delivery-choose-point"},s):"")(e),l.a.createElement("button",{onClick:()=>a({...t,showModule:!c}),className:"basket__react-delivery-choose-pickAnotherPoint"},n))},m=()=>{const[e,t]=Object(r.useState)({header:"",name:"",phone:"",schedule:"",mapLink:""});Object(r.useEffect)(()=>{"pickup"===getCookie("deliveryType")?(()=>{const e=getCookie("deliveryCity"),a=getCookie("deliveryAddress"),r=window.citiesList.filter(({name:t})=>t===e)[0],{mapLink:l=""}=r,n={...r.branches.filter(({name:e})=>e===a)[0]};t({...n,header:"Контактная информация",mapLink:l})})():((e,a)=>{const r=new ShiptorPointsGetter({usersCity:e,fromCity:"_"});r.getUsersCityKladr().then(()=>{r.getDeliveryPoints().then(({result:e})=>{const r=e.filter(e=>e.id===a);try{const[{address:e,phones:a=[],work_schedule:l}]=r;t({header:"Контактная информация",name:e,phone:a[0]?a.reduce((e,t)=>`${e} + /n + ${t}`):"",schedule:l,mapLink:""})}catch({message:e}){console.log(e)}})})})(getCookie("deliveryCity"),+getCookie("selfExportPointId"))},[]);const{header:a,name:n,phone:c,schedule:s,mapLink:i}=e;return l.a.createElement("section",{className:"basket__react-additional-info"},l.a.createElement("header",{className:"basket__react-additional-info__header"},a),l.a.createElement("div",{className:"basket__react-additional-info__body"},l.a.createElement("div",{className:"basket__react-additional-info__left-part"},l.a.createElement("div",{className:"basket__react-additional-info__name"},n),l.a.createElement("div",{className:"basket__react-additional-info__phone"},c),l.a.createElement("div",{className:"basket__react-additional-info__schedule"},s)),l.a.createElement("div",{className:"basket__react-additional-info-right-part"},i?l.a.createElement("iframe",{src:i,width:"100%",height:"360",frameBorder:"0"}):"")))};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const p=({deliveryType:e,...t})=>{const{deliveryProps:{showModule:a}}=t,r=e===getCookie("deliveryType");return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,d({showPoint:r},t)),a?l.a.createElement(i,t):r?l.a.createElement(m,null):"")},u=({className:e})=>(Object(r.useEffect)(()=>window.deliverySelfExport()),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:`delivery-selfExport ${e}`,"data-delivery-type":"Пункт выдачи"},l.a.createElement("div",{className:"delivery-selfExport__wait-screen hidden preloader-mini"},l.a.createElement("div",{className:"preloader-mini__item"},l.a.createElement("div",{className:"preloader-mini__item-tool"}),l.a.createElement("div",{className:"preloader-mini__item-tool"}),l.a.createElement("div",{className:"preloader-mini__item-tool"}),l.a.createElement("div",{className:"preloader-mini__item-tool"}))),l.a.createElement("div",{className:"delivery-selfExport__chosen-city-wrapper"},l.a.createElement("p",{className:"delivery-selfExport__chosen-city-descr"},"Текущий город: "),l.a.createElement("p",{className:"delivery-selfExport__chosen-city"}),l.a.createElement("button",{className:"delivery-selfExport__change-city"},"Выбрать другой город")),l.a.createElement("section",{className:"delivery-selfExport__pickup"},l.a.createElement("header",{className:"delivery-selfExport__pickup-header"},l.a.createElement("p",{className:"delivery-selfExport__pickup-header-text"},"Пункты выдачи"),l.a.createElement("button",{className:"delivery-selfExport__show-map"},"Посмотреть на карте")),l.a.createElement("input",{type:"text",className:"delivery-selfExport__pickup-search-input",placeholder:"Поиск пункта выдачи"}),l.a.createElement("ul",{className:"delivery-selfExport__pickup-list"})),l.a.createElement("section",{className:"delivery-selfExport__cities hidden"},l.a.createElement("input",{type:"text",className:"delivery-selfExport__city-search-input",placeholder:"Поиск города"}),l.a.createElement("ul",{className:"delivery-selfExport__cities-list"})),l.a.createElement("section",{className:"delivery-selfExport__error hidden"},l.a.createElement("p",{className:"delivery-selfExport__error-text"},"К сожалению пункты выдачи не найдены :(",l.a.createElement("br",null),"Попробуйте сменить город")))));function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const y=({deliveryType:e,...t})=>{const{deliveryProps:{showModule:a}}=t,r=e===getCookie("deliveryType");return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,_({showPoint:r},t)),a?l.a.createElement(u,t):r?l.a.createElement(m,null):"")},E=({onTabClick:e,deliveryType:t})=>{const a={pickup:{header:"Офисы обслуживания",point:getCookie("deliveryAddress"),linkText:"Выбрать другое место самовывоза",showModule:!1},selfExport:{header:"Офисы самовывоза",point:getCookie("deliveryAddress"),linkText:"Выбрать другой пункт выдачи",showModule:!1}},[n,c]=Object(r.useState)(a[t]),s="pickup"===t,i={deliveryProps:n,onPickAnotherPointClick:c,deliveryType:t},o=t=>{e(t),c(a[t])};return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",{className:s?"basket__react-tab-active":"",onClick:()=>o("pickup")},"Самовывоз"),l.a.createElement("li",{className:s?"":"basket__react-tab-active",onClick:()=>o("selfExport")},"Доставка")),s?l.a.createElement(p,i):l.a.createElement(y,i))},v=({header:e})=>l.a.createElement("header",null,e),f=({header:e,onTabClick:t,deliveryType:a})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{header:e}),l.a.createElement(v,{header:e}),l.a.createElement("main",null,l.a.createElement(E,{onTabClick:t,deliveryType:a}))),k=({header:e})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{header:e}),l.a.createElement(v,{header:e}),l.a.createElement("main",null,"Final Stage")),h=({text:e,...t})=>l.a.createElement("button",t,e),b=({step:e,onClick:t})=>{return l.a.createElement("div",{className:"basket__react-bottom-nav"},(()=>{const a={2:{text:["Back To Basket","Next"],className:"basket__react-bottom-btn",onClick:[window.basketApi.returnToBasket,t.bind(null,"add")]},3:{text:["Prev","Оформить"],className:"basket__react-bottom-btn",onClick:[t.bind(null,"sub"),e=>e.preventDefault()]}};return new Array(2).fill("").map((t,r)=>{const{text:n,className:c,onClick:s}=a[e];return l.a.createElement(h,{key:r,text:n[r],className:c,onClick:s[r]})})})())},N=({deliveryType:e})=>{return l.a.createElement("div",{className:"basket__react-bottom-info"},(()=>{const t=window.basketApi.getTotalPricesAndItems();return[{text:t.split(":")[0],value:t.split(":")[1]},{text:"Стоимость доставки",value:`${"pickup"===e?0:350} р`}].map(({text:e,value:t},a)=>l.a.createElement("div",{key:a,className:"basket__react-bottom-info-item"},e,": ",l.a.createElement("span",{className:"basket__react-bottom-info-item-mark"},t)))})())},x=()=>l.a.createElement("div",{className:"basket__react-bottom-message"},l.a.createElement("p",{className:"basket__react-bottom-message-text"},"Обращаем Ваше внимание, что окончательная стоимость и состав заказа, если в нём присутствуют товары и/или услуги, участвующие в акции, будут подтверждены после обработки заказа.")),g=({deliveryType:e,...t})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"basket__react-bottom-panel"},l.a.createElement(N,{deliveryType:e}),l.a.createElement(b,t)),l.a.createElement(x,null));var C=a(1);a.n(C).a.render(l.a.createElement(()=>{const e={2:"Способ доставки",3:"Подтверждение заказа"},[t,a]=Object(r.useState)(getCookie("deliveryType")||"pickup"),[n,c]=Object(r.useState)(2),s=2===n?l.a.createElement(f,{header:e[n],onTabClick:e=>a(e),deliveryType:t}):l.a.createElement(k,{header:e[n]});return l.a.createElement(l.a.Fragment,null,s,l.a.createElement(g,{onClick:e=>c(t=>((e,t)=>{const a="add"===e?t+1:t-1;return a<4&&a>1?a:t})(e,t)),step:n,deliveryType:t}))},null),document.querySelector(".basket__stages"))}]);