"use strict";window.hrefChecker={laximoBreadcrumbs:function(){let e;try{e=href[4].split("?")[0]}catch(t){e=href[4]}return"original-catalog"===href[3]?["isuzu","kia","mercedes","daf","man","volvo","hyundai","iveco","renault","scania","toyota","bmw","mitsubishi","skoda","volkswagen","ford","nissan","audi","mazda","chevrolet","opel"].includes(e)&&!href[5]:!("original-catalog"!==href[3]||"car-parts"!==href[4].slice(0,9)||void 0!==href[5])||!("original-catalog"!==href[3]||"truck-parts"!==href[4].slice(0,11)||void 0!==href[5])},laximoScrolling:function(){return"original-catalog"===href[3]&&"car-parts"===href[4].slice(0,9)&&void 0===href[5]||!("original-catalog"!==href[3]||"truck-parts"!==href[4].slice(0,11)||void 0!==href[5])},mainPage:function(){return"big1.ru"===href[2].slice(0,7)&&!href[3]||"big1.ru"===href[2].slice(0,7)&&"?"===href[3].slice(0,1)},laximoMainPage:function(){return"laximo"===href[3].slice(0,6)&&void 0===href[4]},tecdcocBreadCrumbs:function(){if("car_base"===href[3]&&void 0!==href[4]){if("truck-parts"===href[4].slice(0,11))return!0;if("car-parts"===href[4].slice(0,9))return!0}return!1},autoChooser:function(){return!("fast-auto-chooser"!==href[3]||void 0===href[4]||"truck"!==href[4].slice(0,5)&&"car"!==href[4].slice(0,3))},bigService:function(){return"vin_query_parts"===href[3].slice(0,15)},tecDocLinksProfileCreator:function(){return"autos"===href[3].slice(0,5)&&void 0===href[4]},vinAutoInfoGetter:function(){return"any_autos"===href[3].slice(0,9)},registrationForm:function(){return"customers"===href[3].slice(0,9)&&void 0===href[4]}};const href=window.location.href.split("/"),getCookie=e=>{const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},saveCookie=(e,t)=>{const i={path:"/",secure:!0,"max-age":new Date(Date.now()+864e7)};let o=encodeURIComponent(e)+"="+encodeURIComponent(t);for(const e in i){o+="; "+e;const t=i[e];!0!==t&&(o+="="+t)}document.cookie=o};function breadCrumbsLaximo(){let e=document.querySelector(".path"),t=e.childNodes[0].cloneNode(!0);t.childNodes[0].childNodes[0].textContent="Оригинальные каталоги",t.childNodes[0].title="Оригинальные каталоги",t.childNodes[0].href="/laximo",e.insertBefore(t,e.childNodes[1]),e.childNodes[1].childNodes[0].childNodes[1].setAttribute("content","1"),e.childNodes[2].childNodes[1].setAttribute("content","2")}if(function(){let e=document.querySelector(".b-tsd-nav-list"),t=document.createElement("li"),i=document.createElement("a");i.href="/articles.html",i.textContent="АвтоБлог",e.appendChild(t).appendChild(i)}(),hrefChecker.laximoBreadcrumbs())try{breadCrumbsLaximo(),breadCrumbsLaximo=null}catch(e){console.log(e.message)}function breadCrumbsTecDoc(){let e=document.querySelector(".path"),t=e.childNodes[0].cloneNode(!0);t.childNodes[0].childNodes[0].textContent="Каталог неоригинальных запчастей",t.childNodes[0].title="Каталог неоригинальных запчастей",t.childNodes[0].href="/car_base.html",e.insertBefore(t,e.childNodes[1]),e.childNodes[1].childNodes[0].childNodes[1].setAttribute("content","1"),e.childNodes[2].childNodes[1].setAttribute("content","2")}function breadCrumbsAutoChooser(){let e=document.querySelector(".path"),t=e.childNodes[0].cloneNode(!0);t.childNodes[0].childNodes[0].textContent="Быстрый подбор автомобиля",t.childNodes[0].title="Быстрый подбор автомобиля",t.childNodes[0].href="/fast-auto-chooser",e.insertBefore(t,e.childNodes[1]),e.childNodes[1].childNodes[0].childNodes[1].setAttribute("content","1"),e.childNodes[2].childNodes[1].setAttribute("content","2")}hrefChecker.tecdcocBreadCrumbs()&&(breadCrumbsTecDoc(),breadCrumbsTecDoc=null),hrefChecker.autoChooser()&&(breadCrumbsAutoChooser(),breadCrumbsAutoChooser=null),function(){if(!(768<innerWidth)){$(".header-wrapper .b-tsd-nav-list").prepend('<li>\n      <a href="/laximo">Каталоги оригинальных запчастей</a>\n      <ul>\n        <li><a href="/original-catalog/truck-parts">Грузовой</a></li>\n        <li><a href="/original-catalog/car-parts">Легковой</a></li>\n        <li><a href="/laximo">Общий</a></li>\n      </ul>\n    </li>\n    <li>\n      <a href="/car_base.html">Каталоги неоригинальных запчастей</a>\n      <ul>\n        <li><a href="/car_base/truck-parts">Грузовой</a></li>\n        <li><a href="/car_base/car-parts">Легковой</a></li>\n        <li><a href="/car_base.html">Общий</a></li>\n      </ul>\n    </li>\n    <li>\n      <a href="/fast-auto-chooser/">Подобрать свой автомобиль</a>\n      <ul>\n        <li><a href="/fast-auto-chooser/truck">Грузовой</a></li>\n        <li><a href="/fast-auto-chooser/car">Легковой</a></li>\n        <li><a href="/fast-auto-chooser/">Общий</a></li>\n      </ul>\n    </li>\n    <li>\n      <a href="/catalog/to.html">Каталог ТО</a>\n    </li>')}}(),(hrefChecker.laximoMainPage()||hrefChecker.laximoScrolling())&&function(){document.querySelector(".lx-sbm-list").addEventListener("click",e=>{("li"===e.target.localName||"em"===e.target.localName||"img"===e.target.localName)&&function(){let e=document.body.offsetTop;$("html,body").animate({scrollTop:e},500)}()})}(),document.addEventListener("DOMContentLoaded",function(){hrefChecker.mainPage()&&function(){const e=document.querySelectorAll(".slick-list .b-item");for(const t of e){let e,i=t.children[1].children[1],o=i.cloneNode(!0);e=parseInt(o.textContent),e=(e=Math.ceil(1.07*e)).toLocaleString(),o.textContent=`${e}.0 p`,o.style.textDecoration="red line-through",i.textContent=`${parseInt(i.textContent).toLocaleString()}.0 p`,t.children[1].insertBefore(o,i)}}()}),getCookie("cookiePolicyAccept")||setTimeout(function(){const e=document.querySelector(".cookiesAgreement-module-close"),t=document.querySelector(".cookiesAgreement-module");t.classList.toggle("hidden"),e.addEventListener("click",function(){const e=new Date((new Date).getTime()+31536e6);document.cookie=`cookiePolicyAccept=1; expires=${e.toUTCString()}; secure`,t.classList.toggle("hidden")})},7e3),document.addEventListener("load",()=>{document.querySelectorAll("jdiv")[1].addEventListener("click",()=>(ym(49968697,"reachGoal","onChatClick"),!0))});const liFirstLevel=document.querySelectorAll(".fast-menu-tabs__li-first-level"),liSecondLevel=document.querySelectorAll(".fast-menu-tabs__li-second-level"),liThirdLevel=document.querySelectorAll(".fast-menu-tabs__li-third-level"),allLi=document.querySelectorAll(".fast-menu-tabs__ul-first-level li");function liSwitcher(e,t){t.stopPropagation(),function(){if(t.target.children[0]&&"a"===t.target.children[0].localName){const e=t.target.children[0].href;document.location.assign(e)}}();const i=document.querySelectorAll(e),o=t.currentTarget.querySelector(e);let r;r=null!=o&&o.classList.contains("hidden"),Array.from(i).forEach(e=>e.classList.add("hidden")),r&&o.classList.remove("hidden")}function eventListenerAdder(e,t,i){for(const o of e)o.addEventListener("click",e=>i?t(i,e):e[t]())}function closeAllActiveLi(){const e=document.querySelectorAll(".fast-menu-tabs__ul-first-level ul");Array.from(e).forEach(e=>e.classList.add("hidden"))}eventListenerAdder(liFirstLevel,liSwitcher,".fast-menu-tabs__ul-second-level"),eventListenerAdder(liSecondLevel,liSwitcher,".fast-menu-tabs__ul-third-level"),eventListenerAdder(liThirdLevel,"stopPropagation"),document.addEventListener("click",closeAllActiveLi),document.addEventListener("keydown",e=>{27!==e.keyCode||closeAllActiveLi()}),hrefChecker.mainPage()&&function(){class e{constructor(e,t,i,o,r,n=!1,s=!1){this.prevBtn=e,this.nextBtn=t,this.slider=i,this.maxStatus=this.setMaxStatus(r),this.minStatus=o,this.currentStatus=this.minStatus,this.stateX="enable",this.slidesCount=r,this.initialAutoMoving=n,this.autoMoveControllerId,this.timerActive,this.autoMoveId,this.scrollAmountAuto=s}init(){this.nextBtn.on("click",()=>{this.activate("next",!1,!1)}),this.prevBtn.on("click",()=>{this.activate("prev",!1,!1)}),$(window).on("resize",()=>{const e=this.slider[0].children.length;this.maxStatus=this.setMaxStatus(e),this.btnsController()}),$(document).on("DOMContentLoaded",()=>{this.btnsController()}),this.slider.on("touchstart",e=>{this.touchMover(e,this.slider)}),this.initialAutoMoving&&this.autoMoveController()}setMaxStatus(e){const t=window.innerWidth;switch(!0){case 1e3<t:return-(100/e*(e-5)).toFixed(2);case 800<t:return-(100/e*(e-4)).toFixed(2);case 600<t:return-(100/e*(e-3)).toFixed(2);case 450<t:return-(100/e*(e-2)).toFixed(2);default:return-(100/e*(e-1)).toFixed(2)}}getMaxStatus(e){return this.maxStatus}getScrollAmount(){const e=window.innerWidth;switch(!0){case 1e3<e:return 5;case 800<e:return 4;case 600<e:return 3;case 450<e:return 2;default:return 1}}btnSwitcher(e,t){return"on"===t?(e.removeClass("b-yel-cat__slider-btn--deactive"),void e.removeAttr("disabled")):(e.addClass("b-yel-cat__slider-btn--deactive"),void e.attr("disabled",""))}btnsController(){this.btnSwitcher(this.prevBtn,"on"),this.btnSwitcher(this.nextBtn,"on"),this.stateX="enable",this.currentStatus>=this.minStatus&&(this.btnSwitcher(this.prevBtn,"off"),this.stateX="begin"),this.currentStatus<=this.maxStatus&&(this.btnSwitcher(this.nextBtn,"off"),this.stateX="end")}sliderMove(){this.slider.css("transform",`translateX(${this.currentStatus}%)`)}setCurrentStatus(e){this.currentStatus=e}rollCountHandler(e,t=!1){var i=Math.round;return t?"prev"===e?this.minStatus:this.maxStatus:"next"===e?this.currentStatus<=this.maxStatus?this.currentStatus:this.currentStatus-i(100/this.slidesCount*100)/100:this.currentStatus>=this.minStatus?this.currentStatus:this.currentStatus+i(100/this.slidesCount*100)/100}activate(e,t=!1,i=!0){this.scrollAmountAuto&&(this.scrollAmount=this.getScrollAmount());const o=i?1:this.scrollAmount?this.scrollAmount:1;for(let r=0;r<o;++r){const o=this.rollCountHandler(e,t);this.autoMoveController(i),this.setCurrentStatus(o),this.sliderMove(),this.btnsController()}}touchMover(e,t){let i,o,r=e.originalEvent.timeStamp,n=e.originalEvent.touches[0].clientX;const s=e=>{t.off("touchend",s),o=e.originalEvent.changedTouches[0].clientX,i=e.originalEvent.timeStamp;const l=n-o,c=((i-r)/1e3).toFixed(2);return 0<l?"end"===this.stateX?void 0:void(c>.8?this.activate("next",!0,!1):this.activate("next",!1,!1)):void("begin"!==this.stateX&&(c>.8?this.activate("prev",!0,!1):this.activate("prev",!1,!1)))};t.on("touchend",s)}autoMoveController(e=!0){if(!e)return this.autoMoveControllerId=clearTimeout(this.autoMoveControllerId),this.timerActive=!1,void this.autoMove(!0);this.timerActive||this.autoMoveControllerId||(this.timerActive=!0,this.autoMoveControllerId=setTimeout(()=>this.autoMove(!1),17e3))}autoMove(e=!0){if(e)return this.autoMoveId=clearInterval(this.autoMoveId),void this.autoMoveController(!0);this.autoMoveId||(this.autoMoveId=setInterval(()=>this.currentStatus<=this.maxStatus?void this.activate("prev",!0):void this.activate("next",!1),3e3))}}const t=new e($("#b-yel-cat__slider-btn--prev-truck"),$("#b-yel-cat__slider-btn--next-truck"),$("#main-slider-truck"),0,$("#main-slider-truck")[0].children.length,!0,!0),i=new e($("#b-yel-cat__slider-btn--prev-car"),$("#b-yel-cat__slider-btn--next-car"),$("#main-slider-car"),0,$("#main-slider-car")[0].children.length,!0,!0);t.init(),i.init()}(),$(".main-popup-reg__close").on("click",function(){$(".b-popup-enter").hide()}),function(){const e=$(".mobile-menu"),t=$(".b-tsd-tb__close"),i=()=>{const e=$(".b-tsd-tb");return"none"===e.css("display")?(e.slideDown(500),void e.css({display:"flex"})):void e.slideUp(500)};e.on("click",i),t.on("click",i)}(),function(){let e="";$(".b-tsd-nav-list > li a").each(function(){"Контакты"===$(this).text()&&(e=$(this).attr("href"))}),e&&$(".fast-menu-tabs__li-first-level:last-of-type a").attr("href",e)}(),window.userCityHandler=((e,{cityName:t,cityId:i}={})=>{const o=document.querySelector("a.b-tsd-city-link");try{const r=()=>(r.setTextCityName=((e="")=>(e=e||getCookie("deliveryAddress")||YMaps.location.city,o.textContent=e,r)),r.setCookieCityId=((e="28")=>(saveCookie("region_id",e),r)),r);r().setTextCityName(t).setCookieCityId(i)}catch({message:e}){console.log(e)}}),userCityHandler();