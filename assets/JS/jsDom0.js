const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tabs__title-items");
const panes = $$(".tabs__content-pane");

const tabActive = $(".tabs__title-items.active");
const line = $(".tabs__title .tabs__title-line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach(
  (tab, index) =>
    (tab.onclick = function () {
      const pane = panes[index]; //lấy nội dung pane ứng với mỗi tab

      $(".tabs__title-items.active").classList.remove("active");
      $(".tabs__content-pane.active").classList.remove("active");

      line.style.left = this.offsetLeft + "px";
      line.style.width = this.offsetWidth + "px";

      this.classList.add("active");
      pane.classList.add("active");
    })
);
