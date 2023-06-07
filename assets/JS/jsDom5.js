const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const getTags = () => JSON.parse(localStorage.getItem("tags")) || [];

const ul = document.querySelector("ul");
const input = document.querySelector("input");

let tags = getTags();

createTag();

function createTag() {
  ul.innerHTML = "";
  tags.forEach((tag, index) => {
    let liTag = `
            <li>${tag}
            <i class="fa-solid fa-xmark" onclick="removeTag(this, '${index}')"></i>
            </li>
            `;
    ul.innerHTML += liTag;
  });

  ul.appendChild(input);
  input.focus();
}

function removeTag(element, index) {
  tags.splice(index, 1);
  localStorage.setItem('tags', JSON.stringify(tags))
  element.parentElement.remove();
  input.focus();
}

function addTag(e) {
  if (e.key == "Enter") {
    let tag = e.target.value.trim();
    if (tag != "" && !tags.includes(tag)) {
      tags.push(tag);
      localStorage.setItem('tags', JSON.stringify(tags))
      createTag();
    }
    e.target.value = "";
  }
}

input.addEventListener("keyup", addTag);

const removeBtn = document.querySelector(".tags__button");
removeBtn.addEventListener("click", () => {
  tags.length = 0;
  localStorage.removeItem('tags');
  createTag();
});
