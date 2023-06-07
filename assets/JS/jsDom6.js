const $ = document.querySelector.bind(document);

const box = $('.box');

const eKey = $('.box__detail-card.key p:last-child');
const eLocation = $('.box__detail-card.location p:last-child');
const eWhich = $('.box__detail-card.which p:last-child');
const eCode = $('.box__detail-card.code p:last-child');

document.addEventListener('keydown', (e) => {
  let keyName = e.key === 32 ? 'Space' : e.key;

  $('.box__result').innerText = e.which;

  eKey.innerText = keyName;
  eLocation.innerText = e.location;
  eWhich.innerText = e.which;
  eCode.innerText = e.code;

  $('.alert').classList.add('hide');
  box.classList.remove('hide');
});