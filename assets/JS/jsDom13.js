const $ = document.querySelector.bind(document);

const inputImg = $('#input__img');

inputImg.addEventListener('change', (e) => {
  let file = e.target.files[0];

  if (!file) return;

  let img = document.createElement('img');
  img.src = URL.createObjectURL(file);

  $('.preview').appendChild(img);
});
