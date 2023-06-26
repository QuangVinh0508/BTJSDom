const fb = document.querySelector(".counter.face h2");
const ytb = document.querySelector(".counter.youtube h2");
const tiktok = document.querySelector(".counter.tiktok h2");

function counterUp(e, to) {
  let speed = 300;
  let from = 0;
  let step = to / speed;
  const counter = setInterval(function () {
    from += step;
    if (from > to) {
      clearInterval(counter);
      e.innerText = to;
    } else {
      e.innerText = Math.ceil(from);
    }
  }, 1);
}

counterUp(fb, 3300);
counterUp(ytb, 1000);
counterUp(tiktok, 9900);
