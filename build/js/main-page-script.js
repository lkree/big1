'use strict';

//Объект для хранения чеков соответствия URL
window.hrefChecker = {
  //Проверка на соответствие ссылки заданным параметрам
  laximoBreadcrumbs: function() {
    const brands = ['isuzu', 'kia', 'mercedes', 'daf', 'man', 'volvo', 'hyundai', 'iveco', 'renault', 'scania', 'toyota', 'bmw', 'mitsubishi', 'skoda', 'volkswagen', 'ford', 'nissan', 'audi', 'mazda', 'chevrolet', 'opel'];
    let brandHref;
    try {
      brandHref = href[4].split('?')[0]
    } catch {
      brandHref = href[4];
    }
      if (href[3] === 'original-catalog') return brands.includes(brandHref) && !href[5];
      if (
          href[3] === 'original-catalog' && 
          href[4].slice(0,9) === 'car-parts' 
          && href[5] === undefined
      ) {
          return true;
      } else if (
          href[3] === 'original-catalog' && 
          href[4].slice(0, 11) === 'truck-parts' && 
          href[5] === undefined
      ) {
          return true;
      }

      return false;
  },
  laximoScrolling: function() {
      if (
          href[3] === 'original-catalog' && 
          href[4].slice(0,9) === 'car-parts' 
          && href[5] === undefined
      ) {
          return true;
      } else if (
          href[3] === 'original-catalog' && 
          href[4].slice(0, 11) === 'truck-parts' && 
          href[5] === undefined
      ) {
          return true;
      }

      return false;
  },
  mainPage: function() {
      return href[2].slice(0, 7) === 'big1.ru' && !href[3] || href[2].slice(0, 7) === 'big1.ru' && href[3].slice(0,1) === '?';
  },
  laximoMainPage: function() {
      return href[3].slice(0,6) === 'laximo' && href[4] === undefined;
  },
  tecdcocBreadCrumbs: function() {
      if (href[3] === 'car_base' && href[4] !== undefined)
          if (href[4].slice(0,11) === 'truck-parts') {
              return true;
          } else if (href[4].slice(0,9) === 'car-parts') {
              return true;
          }
      return false;
  },
  autoChooser: function() {
      if (href[3] === 'fast-auto-chooser' && href[4] !== undefined) {
          if (href[4].slice(0,5) === 'truck' || href[4].slice(0,3) === 'car') {
              return true;
          }
      }
      return false;
  },
  bigService: function() {
      return href[3].slice(0,15) === 'vin_query_parts';
  },
  tecDocLinksProfileCreator: function() {
      return href[3].slice(0, 5) === 'autos' && href[4] === undefined;
  },
  vinAutoInfoGetter: function() {
    return href[3].slice(0, 9) === 'any_autos';
  },
  // laximoCatalogs: function() {
  //     const getParams = new URL(document.location).searchParams;
  //     return href[3] === 'laximo' && href[4] !== undefined && href[5] !== undefined && href[6] !== undefined && getParams.get('vin') !== null;
  // },
  registrationForm: function() {
      return href[3].slice(0,9) === 'customers' && href[4] === undefined;
  }
};;'use strict';

const href = window.location.href.split('/');

/**
 * @return {void}
 * предотвращает включение каталога в топ товары (чистит количество пунктов для
 *   листания) topGoodiesCleaner
 */
// if (hrefChecker.mainPage()) {
//   (function() {
//     document.addEventListener('DOMContentLoaded', function() {
//       let firstItem = document.querySelectorAll('.b-prod-carousel .slick-list .slick-track .slick-slide'),
//         secondItem = document.querySelectorAll('.b-prod-carousel .slick-dots li');
//
//       if(firstItem.length > 26) {
//         for(let i = 26; i < firstItem.length; ++i) {
//           firstItem[i].remove();
//         }
//
//         for(let i = 8; i < secondItem.length; ++i) {
//           secondItem[i].remove();
//         }
//       }
//     });
//   })();
//   /**
//    * @return {void}
//    * tabIndexRemover remove tabs from slider btns & mainPage->brands->li
//    */
//   // try {
//   //   (function() {
//   //     let btns = document.querySelectorAll('.slick-dots li button'),
//   //       lis = document.querySelectorAll('.b-yel-cat-list li');
//   //
//   //     for(const btn of btns) {
//   //       btn.setAttribute('tabindex', -1);
//   //     }
//   //
//   //     for(const li of lis) {
//   //       li.children[1].setAttribute('tabindex', -1);
//   //     }
//   //   })();
//   // } catch(e) {
//   //   console.log(e.message);
//   // };
//
// //     document.addEventListener('DOMContentLoaded', function() {
// //         let els = document.querySelectorAll('.b-price');
//
// //         for(let i=0;i<els.length;++i) {
// //             let f = els[i].textContent.split('.'),
// //                 s = f[0].split(''),
// //             t = s.slice(-3);
// //             s = s.slice(0,-3);
// //             t.unshift(' ');
// //             s = s.join('');
// //             t = t.join('');
// //             s = s.concat(t);
// //             f[0] = s;
// //             els[i].textContent = f.join('.');
// //         };
// //     });
// }

/**
 * @return void
 * удаляет непонятные пустые элементы списка в ТекДоке (только на главной
 *   странице) tecDocUlCleaner
 */
// if(hrefChecker.mainPage()) {
//   document.addEventListener("DOMContentLoaded", function() {
//     try {
//       document.querySelector('.b-subpd .b-list-subpd li:last-of-type').remove();
//     } catch(e) {
//       console.log(e.message)
//     }
//   });
// };


//Добавляет ссылку на "статьи" в хедере сайта
(function() {
  let ul = document.querySelector('.b-tsd-nav-list'),
      li = document.createElement('li'),
      a = document.createElement('a');

  a.href = '/articles.html';
  a.textContent = 'АвтоБлог';

  ul.appendChild(li).appendChild(a);
})();


//Добавляет промежуточные путь до "оригинальных каталогов" (хлебные крошки)
// (работает только там, где уже сгенерированы хлебные крошки)
function breadCrumbsLaximo() {
  let ul = document.querySelector('.path'),
    li = ul.childNodes[0].cloneNode(true);

  li.childNodes[0].childNodes[0].textContent = 'Оригинальные каталоги';
  li.childNodes[0].title = 'Оригинальные каталоги';
  li.childNodes[0].href = '/laximo';
  ul.insertBefore(li, ul.childNodes[1]);

  ul.childNodes[1].childNodes[0].childNodes[1].setAttribute('content', '1');
  ul.childNodes[2].childNodes[1].setAttribute('content', '2');
};


if(hrefChecker.laximoBreadcrumbs()) {
  try {
    breadCrumbsLaximo();
    breadCrumbsLaximo = null;
  } catch(e) {
    console.log(e.message)
  }
};

function breadCrumbsTecDoc() {
  let ul = document.querySelector('.path'),
    li = ul.childNodes[0].cloneNode(true);

  li.childNodes[0].childNodes[0].textContent = 'Каталог неоригинальных запчастей';
  li.childNodes[0].title = 'Каталог неоригинальных запчастей';
  li.childNodes[0].href = '/car_base.html';
  ul.insertBefore(li, ul.childNodes[1]);

  ul.childNodes[1].childNodes[0].childNodes[1].setAttribute('content', '1');
  ul.childNodes[2].childNodes[1].setAttribute('content', '2');
}

if(hrefChecker.tecdcocBreadCrumbs()) {
  breadCrumbsTecDoc();
  breadCrumbsTecDoc = null;
}

function breadCrumbsAutoChooser() {
  let ul = document.querySelector('.path'),
    li = ul.childNodes[0].cloneNode(true);

  li.childNodes[0].childNodes[0].textContent = 'Быстрый подбор автомобиля';
  li.childNodes[0].title = 'Быстрый подбор автомобиля';
  li.childNodes[0].href = '/fast-auto-chooser';
  ul.insertBefore(li, ul.childNodes[1]);

  ul.childNodes[1].childNodes[0].childNodes[1].setAttribute('content', '1');
  ul.childNodes[2].childNodes[1].setAttribute('content', '2');
};

if(hrefChecker.autoChooser()) {
  breadCrumbsAutoChooser();
  breadCrumbsAutoChooser = null;
};
//Заменяет ссылку в каталогах (по умолчанию неправильная стоит)
// (function() {
//   let ul = document.querySelector('.b-bsd-cat .b-bsd-cat-popup .b-list').children;
//
//   for(let i = 0; i < ul.length; ++i) {
//     if(ul[i].children[0].textContent === 'Масла и Автохимия') {
//       ul[i].children[0].href = '/catalogs/vse-katalogi-masla-i-avtohimiya.html';
//     }
//   }
// })();

(function() { //menu
  if (innerWidth > 768) return;

  const ul = $('.header-wrapper .b-tsd-nav-list');

  ul.prepend(
    `<li>
      <a href="/laximo">Каталоги оригинальных запчастей</a>
      <ul>
        <li><a href="/original-catalog/truck-parts">Грузовой</a></li>
        <li><a href="/original-catalog/car-parts">Легковой</a></li>
        <li><a href="/laximo">Общий</a></li>
      </ul>
    </li>
    <li>
      <a href="/car_base.html">Каталоги неоригинальных запчастей</a>
      <ul>
        <li><a href="/car_base/truck-parts">Грузовой</a></li>
        <li><a href="/car_base/car-parts">Легковой</a></li>
        <li><a href="/car_base.html">Общий</a></li>
      </ul>
    </li>
    <li>
      <a href="/fast-auto-chooser/">Подобрать свой автомобиль</a>
      <ul>
        <li><a href="/fast-auto-chooser/truck">Грузовой</a></li>
        <li><a href="/fast-auto-chooser/car">Легковой</a></li>
        <li><a href="/fast-auto-chooser/">Общий</a></li>
      </ul>
    </li>
    <li>
      <a href="/catalog/to.html">Каталог ТО</a>
    </li>`);
})();

//mobileCatalogsReplacer()
// (function() {
//   let n = 1,
//       catalogs = document.querySelector('.b-bsd-cat-popup .b-list').children,
//       mobileMenu = document.querySelector('.b-tsd-nav .b-tsd-nav-list');
//
//   if (window.innerWidth <= 768) {
//     n = 0;
//     let asd = mobileMenu.children[0],
//         index = 0,
//         ind = null;
//
//     for (let i = catalogs.length; i > 0; --i) {
//       ind = catalogs[index].cloneNode(true);
//       mobileMenu.insertBefore(ind, asd);
//       ++index;
//       n = 0;
//     }
//   };
//
//   window.addEventListener('resize', (e) => {
//     if (window.outerWidth > 768 && n === 0) {
//       n = 1;
//
//       for (let i = 0; i < catalogs.length; ++i) {
//         mobileMenu.children[0].remove();
//       }
//     };
//
//     if (window.outerWidth <= 768 && n !== 0) {
//       n = 0;
//
//       let asd = mobileMenu.children[0],
//           index = 0,
//           ind = null;
//
//       for (let i = catalogs.length; i > 0; --i) {
//         ind = catalogs[index].cloneNode(true);
//         mobileMenu.insertBefore(ind, asd);
//         ++index;
//       }
//     }
//   });
// })();


if(hrefChecker.laximoMainPage() || hrefChecker.laximoScrolling()) {
  (function() { //scrollLaximo
    function scrolling() {
      let scrollingHeight = document.body.offsetTop;
      $('html,body').animate({scrollTop: scrollingHeight}, 500);
    }

    const listWithElementsToScroll = document.querySelector('.lx-sbm-list');

    listWithElementsToScroll.addEventListener('click', (evt) => {
      const target = evt.target.localName === 'li' || evt.target.localName === 'em' || evt.target.localName === 'img';
    if(target) {
      scrolling();
    }
  })
  })();
}

// if (hrefChecker.bigService()) {
//   (function() { //bigServiceFormEditor
//     const vinInput = document.querySelector('#vin_query_part_code');
//     vinInput.value = '98PTT47MSEB100567';
//     vinInput
//       .parentNode
//       .parentNode
//       .parentNode
//       .style.display = 'none';
//   })()
// };

// if(hrefChecker.laximoCatalogs()) {
//   function tggActivate() {
//     function tggl(evt) {
//       evt.preventDefault();
//     };
//     let l = $('#js-lx-common-catalog li');
//     for(let i = 0; i < l.length; ++i) {
//       l[i].addEventListener('click', tggl);
//     }
//     ;
//   };
//   setInterval(tggActivate, 5000);
// };
/**
 * @return {void}
 * makes header sticky
 * 900+ resolutions
 */
// (function() {
//   let currentScroll = window.scrollY,
//       n = 0;
//
//   function onScrollingPage(evt) {
//     const scrollingPanel = $('.b-bot-side'),
//           headerMenu = $('.fast-menu-tabs__ul-first-level'),
//           leftMenuTab = $('.fast-menu-tabs__ul-first-level .fast-menu-tabs__li-first-level:first-of-type'),
//           rightMenuTab = $('.fast-menu-tabs__ul-first-level .fast-menu-tabs__li-first-level:last-of-type');
//
//     const showMenu = () => {
//       scrollingPanel.css({
//         'position': 'fixed',
//         'padding': '6px 15px 11px',
//         'top': '40px',
//         'left': '50%',
//         'transform': 'translateX(-50%)',
//         'width': '100%',
//         'z-index' : '2',
//       });
//
//       headerMenu.css({
//         'position': 'fixed',
//         'left': '50%',
//         'transform': 'translateX(-50%)',
//         'top': '0',
//         'max-width': '1200px',
//         'z-index' : '2',
//       });
//
//       // leftMenuTab.css('border-left', '1px solid gray');
//       // rightMenuTab.css('border-right', '1px solid gray');
//
//       n = 1;
//     };
//     const hideMenu = () => {
//       // leftMenuTab.css('border-left', 'none');
//       // rightMenuTab.css('border-right', 'none');
//
//       headerMenu.css({
//         'max-width': 'unset',
//         'position': 'relative',
//         'top': '0',
//         'z-index' : 'unset',
//       });
//       scrollingPanel.css({
//         'padding': '6px 0 11px',
//         'position': 'relative',
//         'top': '0',
//         'z-index' : 'unset',
//       });
//
//       n = 0;
//     };
//     // const showMobileMenu = () => {
//     //   $('.b-bot-side').css({
//     //     'position': 'fixed',
//     //     'padding': '6px 15px 11px',
//     //     'top': '40px',
//     //     'left': '50%',
//     //     'transform': 'translateX(-50%)'
//     //   });
//     //
//     //   $('.fast-menu-tabs__ul-first-level').css({
//     //     'position': 'fixed',
//     //     'top': '0px',
//     //     'left': '50%',
//     //     'transform': 'translateX(-50%)'
//     //   });
//     //
//     //   $('.b-item-vin, .big-service').addClass('hidden');
//     //
//     //   n = 1;
//     // };
//     // const hideMobileMenu = () => {
//     //   $('.b-item-vin, .big-service').removeClass('hidden');
//     //
//     //   $('.b-bot-side, .fast-menu-tabs__ul-first-level').css({
//     //     'position': 'relative',
//     //     'top': '0'
//     //   });
//     //
//     //   $('.b-bot-side').css('padding', '6px 0 11px');
//     //
//     //   n = 0;
//     // };
//
//     if (currentScroll < window.scrollY) {
//       currentScroll = window.scrollY;
//       if (n > 0) {
//         hideMenu();
//         // hideMobileMenu();
//       }
//       return;
//     }
//
//     currentScroll = window.scrollY;
//
//       if (window.scrollY >= 146 && n === 0 && window.outerWidth >= 900) {
//         showMenu();
//       }
//
//       // if (window.scrollY >= 324 && n === 0 && window.outerWidth <= 900) {
//       //   showMobileMenu();
//       // }
//       //
//       // if (window.scrollY <= 324 && window.outerWidth <= 900) {
//       //   hideMobileMenu();
//       // }
//
//       if (window.scrollY <= 146 && window.outerWidth >= 900) {
//         hideMenu();
//       }
//   }
//
//   document.addEventListener('scroll', onScrollingPage);
// })();

document.addEventListener('DOMContentLoaded', function() {
  if(hrefChecker.mainPage()) {
    (function() {
      const goodies = document.querySelectorAll('.slick-list .b-item');

      for(const goodie of goodies) {
        let oldPrice = goodie.children[1].children[1],
          newPrice = oldPrice.cloneNode(true),
          temp;

        temp = parseInt(newPrice.textContent);
        temp = Math.ceil(temp * 1.07);
        temp = temp.toLocaleString();

        newPrice.textContent = `${temp}.0 p`;

        newPrice.style.textDecoration = 'red line-through';


        oldPrice.textContent = `${parseInt(oldPrice.textContent).toLocaleString()}.0 p`;

        goodie.children[1].insertBefore(newPrice, oldPrice);
      }
    })();
  }
  ;
});

(function() {
  function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  const isCookieAgreement = getCookie('cookiePolicyAccept');

  if(!isCookieAgreement) {
    setTimeout(function() {
      const closeBtn = document.querySelector('.cookiesAgreement-module-close'),
        cookieModule = document.querySelector('.cookiesAgreement-module');

      function onCloseCookieClick(evt) {
        const date = new Date(new Date().getTime() + 60 * 1000 * 60 * 24 * 365);

        document.cookie = `cookiePolicyAccept=1; expires=${date.toUTCString()}; secure`;

        cookieModule.classList.toggle('hidden');
      }

      cookieModule.classList.toggle('hidden');

      closeBtn.addEventListener('click', onCloseCookieClick);
    }, 7000);
  }
})();
/**
 * @return {void}
 * placeHolderChanger depends on resolution
 */
// (function() {
//   const $select = $('#search_type'),
//         $searchPanel = $('#oem');
//   $searchPanel.attr({'placeholder' : 'Общий поиск'});
//
//   const onSelectChange = () => {
//     switch(true) {
//       case $select.val() === 'common':
//         $searchPanel.attr({'placeholder' : 'Общий поиск'});
//         return;
//       default:
//         $searchPanel.attr({'placeholder' : 'Поиск по артикулу'});
//     }
//   };
//   const onSelectClick = (evt) => {
//     if (!evt.originalEvent) return;
//     if (evt.originalEvent.target === $select[0] || $select.hasClass('search-type-toggler--active')) $select.toggleClass('search-type-toggler--active');
//   };
//   $select.on('change', onSelectChange);
//   $(document).on('click', onSelectClick);
// })();

/**
 * @return {{void}}
 * keyIconRemover
 */
// (function() {
//   const iconWrapper = document.querySelector('.b-tsd-user .b-userbox');
//
//   iconWrapper.children[0].classList.contains('b-link-perscab') ? iconWrapper.style.background = 'none' : undefined;
// })();

/**
 * @return {number}
 */
(function() { //metrika onChatClick
  document.addEventListener('load', (evt) => {
    const jsChat = document.querySelectorAll('jdiv')[1];

    jsChat.addEventListener('click', (evt) => {
      ym(49968697, 'reachGoal', 'onChatClick');
    return true;
    });
  });
})();

/**
 * @return {{void}}
 * changes button 'Подбор по Вин' in header for mobiles
 * changes text and link
 */
// (function() {
//   if(window.outerWidth <= 480 && !hrefChecker.mainPage()) {
//     const btn = document.querySelector('.b-btn-vin');
//
//     btn.textContent = 'Вернуться назад';
//     btn.href = document.referrer;
//   }
// })();

//(function(){document.querySelector('.fast-menu-tabs__ul-first-level').classList.remove('hidden')}());

const liFirstLevel = document.querySelectorAll('.fast-menu-tabs__li-first-level'),
  liSecondLevel = document.querySelectorAll('.fast-menu-tabs__li-second-level'),
  liThirdLevel = document.querySelectorAll('.fast-menu-tabs__li-third-level'),
  allLi = document.querySelectorAll('.fast-menu-tabs__ul-first-level li');

/**
 *
 * @param InsideUls
 * @param evt
 */
function liSwitcher(InsideUls, evt) {
  evt.stopPropagation();

  /**
   * onClickLocationAssigner -> makes div redirect
   * get link from a children li
   * @return {void}
   */
  (function() {
    if(!evt.target.children[0] || !(evt.target.children[0].localName === 'a')) {
      return;
    }

    const moveTo = evt.target.children[0].href;
    document.location.assign(moveTo);
  })();

  const allInsideUls = document.querySelectorAll(InsideUls),
    currentInsideUl = evt.currentTarget.querySelector(InsideUls);
  let currentSecondUlStatus;

  if(currentInsideUl == null) {
    currentSecondUlStatus = false;
  } else {
    currentSecondUlStatus = currentInsideUl.classList.contains('hidden');
  }

  Array.from(allInsideUls)
    .forEach(el => el.classList.add('hidden'));


  if(currentSecondUlStatus) {
    currentInsideUl.classList.remove('hidden');
  }
}

/**
 * @param elements {array}
 * @param callback {function}
 * @param param for callback
 */
function eventListenerAdder(elements, callback, param) {
  for(const li of elements) {
    li.addEventListener('click', evt => param ? callback(param, evt) : evt[callback]());
  }
}

eventListenerAdder(liFirstLevel, liSwitcher, '.fast-menu-tabs__ul-second-level');
eventListenerAdder(liSecondLevel, liSwitcher, '.fast-menu-tabs__ul-third-level');
eventListenerAdder(liThirdLevel, 'stopPropagation');

/**
 * @return {void}
 * adds hidden from all fast-menu-tabs li
 */
function closeAllActiveLi() {
  const allLi = document.querySelectorAll('.fast-menu-tabs__ul-first-level ul');

  Array.from(allLi)
    .forEach(el => el.classList.add('hidden'));
}

document.addEventListener('click', closeAllActiveLi);
document.addEventListener('keydown', (evt) => {
  if(evt.keyCode !== 27) {
  return;
}

closeAllActiveLi();
});

/**
 * controls a slider with translateX, has variate work with resolutions
 * breakpoints at 1000+ / 800+ / 600+ / 450+ / < 450
 * works with jquery (3.4.1 current)
 * @constructor {HTML element} prevBtn, {HTML element} nextBtn, {HTML element}
 *   slider, {integer} minStatus, {integer} maxStatus
 * @param stateX toggles from 'enable' to 'begin' || 'end' // begin or offs
 *   touch prev event && end offs touch next event
 */
if (hrefChecker.mainPage()) {
  (function() {
    class sliderController {
      constructor(prevBtn, nextBtn, slider, minStatus, slidesCount, initialAutoMoving = false, scrollAmountAuto = false) {
        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;
        this.slider = slider;
        this.maxStatus = this.setMaxStatus(slidesCount);
        this.minStatus = minStatus;
        this.currentStatus = this.minStatus;
        this.stateX = 'enable';
        this.slidesCount = slidesCount;
        this.initialAutoMoving = initialAutoMoving;
        this.autoMoveControllerId;
        this.timerActive;
        this.autoMoveId;
        this.scrollAmountAuto = scrollAmountAuto;
      }
      init() {
        this.nextBtn.on('click', (evt) => {
          this.activate('next', false, false);
        });

        this.prevBtn.on('click', (evt) => {
          this.activate('prev', false, false);
        });

        $(window).on('resize', (evt) => {
          const slidesCount = this.slider[0].children.length;
          this.maxStatus = this.setMaxStatus(slidesCount);
          this.btnsController();
        });

        $(document).on('DOMContentLoaded', (evt) => {
          this.btnsController();
        });

        this.slider.on('touchstart', (evt) => {
          this.touchMover(evt, this.slider);
        });

        this.initialAutoMoving ? this.autoMoveController() : undefined;
      };
      setMaxStatus(slidesCount) {
        const currentResolution = window.innerWidth;

        switch(true) {
          case (currentResolution > 1000):
            return -(100 / slidesCount * (slidesCount - 5)).toFixed(2);
          case (currentResolution > 800):
            return -(100 / slidesCount * (slidesCount - 4)).toFixed(2);
          case (currentResolution > 600):
            return -(100 / slidesCount * (slidesCount - 3)).toFixed(2);
          case (currentResolution > 450):
            return -(100 / slidesCount * (slidesCount - 2)).toFixed(2);
          default:
            return -(100 / slidesCount * (slidesCount - 1)).toFixed(2);
        }
      };
      getMaxStatus(maxValue) {
        return this.maxStatus;
      };
      getScrollAmount() {
        const currentResolution = window.innerWidth;

        switch(true) {
          case (currentResolution > 1000):
            return 5;
          case (currentResolution > 800):
            return 4;
          case (currentResolution > 600):
            return 3;
          case (currentResolution > 450):
            return 2;
          default:
            return 1;
        }
      };
      btnSwitcher(button, operationType) {
        if(operationType === 'on') {
          button.removeClass('b-yel-cat__slider-btn--deactive');
          button.removeAttr('disabled');
          return;
        }

        button.addClass('b-yel-cat__slider-btn--deactive');
        button.attr('disabled', '');
      };
      btnsController() {
        this.btnSwitcher(this.prevBtn, 'on');
        this.btnSwitcher(this.nextBtn, 'on');
        this.stateX = 'enable';

        if(this.currentStatus >= this.minStatus) {
          this.btnSwitcher(this.prevBtn, 'off');
          this.stateX = 'begin';
        }
        if(this.currentStatus <= this.maxStatus) {
          this.btnSwitcher(this.nextBtn, 'off');
          this.stateX = 'end';
        }
      };
      sliderMove() {
        this.slider.css('transform', `translateX(${this.currentStatus}%)`);
      };
      setCurrentStatus(value) {
        this.currentStatus = value;
      };
      rollCountHandler(direction, maxRoll = false) {
        if (maxRoll) {
          return direction === 'prev' ? this.minStatus : this.maxStatus;
        }

        if (direction === 'next') {
          return this.currentStatus <= this.maxStatus ? this.currentStatus : (this.currentStatus - (Math.round((100 / this.slidesCount) * 100) / 100));
        }

        return this.currentStatus >= this.minStatus ? this.currentStatus : (this.currentStatus + (Math.round((100 / this.slidesCount) * 100) / 100));
      };
      activate(direction, sliderMaxRoll = false, autoInitial = true) {
        if (this.scrollAmountAuto) {
          this.scrollAmount = this.getScrollAmount();
        }

        const scrollAmount = autoInitial ?
          1 : this.scrollAmount ?
          this.scrollAmount : 1;

        for(let i = 0; i < scrollAmount; ++i) {
          const rollCount = this.rollCountHandler(direction, sliderMaxRoll);

          this.autoMoveController(autoInitial);
          this.setCurrentStatus(rollCount);
          this.sliderMove();
          this.btnsController();
        }
      };
      touchMover(evt, element) {
        let touchStartTime = evt.originalEvent.timeStamp,
          touchStartX = evt.originalEvent.touches[0].clientX,
          touchEndTime,
          touchEndX,
          oneTouchTime = 0.8;

        const onTouchEnd = (event) => {
          element.off('touchend', onTouchEnd);

          touchEndX = event.originalEvent.changedTouches[0].clientX;
          touchEndTime = event.originalEvent.timeStamp;

          const touchSize = touchStartX - touchEndX,
            touchTime = ((touchEndTime - touchStartTime) / 1000).toFixed(2);

          if(touchSize > 0) {
            if(this.stateX === 'end') return;

            touchTime > oneTouchTime ?
              this.activate('next', true, false) : this.activate('next', false, false);
            return;
          }

          if(this.stateX === 'begin') return;

          touchTime > oneTouchTime ?
            this.activate('prev',true, false) : this.activate('prev',false, false);
          return;
        }

        element.on('touchend', onTouchEnd);
      };
      autoMoveController(autoWork = true) {
        if (!autoWork) {
          this.autoMoveControllerId = clearTimeout(this.autoMoveControllerId);
          this.timerActive = false;
          this.autoMove(true);
          return;
        }

        if (this.timerActive || this.autoMoveControllerId) {
          return;
        }

        this.timerActive = true;
        const delay = 17000;

        this.autoMoveControllerId = setTimeout(() => this.autoMove(false), delay);
      };
      autoMove(switchOff = true) {
        if (switchOff) {
          this.autoMoveId = clearInterval(this.autoMoveId);
          this.autoMoveController(true);
          return;
        }

        if (this.autoMoveId) {
          return;
        }

        const movingDelay = 3000;
        const sliderMoving = () => {
          if (this.currentStatus <= this.maxStatus) {
            this.activate('prev', true);
            return;
          }

          this.activate('next', false);
        }

        this.autoMoveId = setInterval(sliderMoving,movingDelay);
      };
    };

    const truckSlider = new sliderController($('#b-yel-cat__slider-btn--prev-truck'), $('#b-yel-cat__slider-btn--next-truck'), $('#main-slider-truck'), 0, $('#main-slider-truck')[0].children.length, true, true),
      carSlider = new sliderController($('#b-yel-cat__slider-btn--prev-car'), $('#b-yel-cat__slider-btn--next-car'), $('#main-slider-car'), 0, $('#main-slider-car')[0].children.length, true, true);

    truckSlider.init();
    carSlider.init();
  })()
};

// if (hrefChecker.laximoBreadcrumbs()) {
//   (function() {
//     $(document).on('DOMContentLoaded', (evt) => {
//       const params = window.location.href.split('?')[1];
//
//     if ((new URLSearchParams(params).get('type')) === 'car') {
//       $('.car-type-toggler__checkbox').click();
//     }
//     });
//   })();
// }
/* (function() { //button form-request handler
  if (innerWidth < 450) {
    $('.request-parts').remove();
  }

  $('.push_button').on('click', (evt) => {
    $('.request-parts').animate({'right': '-1500px'}, 1000);

    $('.request-parts__form-wrapper').animate({'right': '0px', 'top': '30vh'}, 1000);
  });

  $('.request-parts__form-close').on('click', (evt) => {
    $('.request-parts').animate({'right': '-70px', 'top': '50vh'}, 1000);

    $('.request-parts__form-wrapper').animate({'right': '-100500px'}, 1000);
  });
})(); */

(function() {
  $('.main-popup-reg__close').on('click', function() {
    $('.b-popup-enter').hide();
  });
})(); // close reg form (mini-form)
(function() {
  const $openButton = $('.mobile-menu'),
        $closeButton = $('.b-tsd-tb__close');

  const popupController = () => {
    const $menu = $('.b-tsd-tb');
    if ($menu.css('display') === 'none') {
      $menu.slideDown(500);
      $menu.css({'display' : 'flex'});
      return;
    }

    $menu.slideUp(500);
  };
  $openButton.on('click', popupController);
  $closeButton.on('click', popupController)
})(); // header menu controller (popup open / close)
// (function() {
//   const onDomContentLoaded = () => {
//     const $enterLink = $('.b-enter-link');
//
//     if (!$enterLink[0]) {
//       const $loginButtons = [$('.b-bsd-tb__b-tsd-user'), $('.b-bsd-tb__header-registration-button')];
//
//       $loginButtons.forEach((el) => el.remove());
//     };
//
//     $(document).off('DOMContentLoaded', onDomContentLoaded);
//   };
//
//   $(document).on('DOMContentLoaded', onDomContentLoaded);
// })(); // login / registration buttons (in header search menu) controller
(function() {
  let contactsLink = '';
   $('.b-tsd-nav-list > li a').each(function() {
    if ($(this).text() === 'Контакты') contactsLink = $(this).attr('href');
  });
   if (contactsLink) $('.fast-menu-tabs__li-first-level:last-of-type a').attr('href', contactsLink);
})(); // changes link kontakty in self-made menu