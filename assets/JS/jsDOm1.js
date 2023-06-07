const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const filter = $("#filter");
const products = $(".list__products");
const listItems = [];

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  const results = await res.json();

  products.innerHTML = "";

  results.forEach((product) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'list__products-items');
    listItems.push(div);

    div.innerHTML = `
                <img src="${product.image}" alt="">
                <div class="list__products-detail">
                    <h4>${product.title.slice(0, 30)}</h4>
                    <p>$${product.price}</p>
                </div>
            `;

    products.appendChild(div);
  });
}

getData();