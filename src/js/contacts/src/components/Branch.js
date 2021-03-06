import React from "react";

export const Branch = ({street, schedule, photos, name, onClick, city, ...rest}) => {
  const onBranchClick = (evt) => {
    const {target} = evt;
    const $body = $(target).next();
    let sameEl;

    if (evt.target.classList.contains('contacts__branch-header--open')) sameEl = true;
    $('.contacts__branch-body-wrapper').each(function() {
      $(this).prev().removeClass('contacts__branch-header--open');
      $(this).parent().removeClass('contacts__branch--open');
      $(this).slideUp();
    });

    if (sameEl) return;

    fancyboxInit(evt);
    $body.slideDown();
    target.classList.add('contacts__branch-header--open');
    target.parentElement.classList.add('contacts__branch--open');
  };
  const renderPhotos = (photos) => photos.map(src => (
    <a className={'fancybox contacts__branch-photo-wrapper'} rel={'gallery1'} href={src}>
      <img src={src} className={'contacts__branch-photo'}/>
    </a>
  ));
  const fancyboxInit = (evt) => {
    evt.preventDefault();

    $(".fancybox").fancybox({
      openEffect	: 'none',
      closeEffect	: 'none'
    });
  };

  return (
    <li className={'contacts__branch'}>
      <header className={'contacts__branch-header'} onClick={onBranchClick}>{name}</header>
      <div className="contacts__branch-body-wrapper">
        <div className="contacts__branch-body">
          <div className={'contacts__branch-info'}>
            <div className={'contacts__branch-street'}>{street}</div>
            <div className={'contacts__branch-schedule'}>{schedule}</div>
            <button
              onClick={onClick}
              className={'contacts__branch-accept'}
              value={name}
              data-city={city}
              {...rest}>Выбрать</button>
          </div>
          <div className={'contacts__branch-photos'}>{renderPhotos(photos)}</div>
        </div>
      </div>
    </li>
  )
};