// Banco de dados dos produtos

const data = [
    {
        id: 1,
        img: "../img/jaqueta.svg",
        nameItem: "Lightweight Jacket",
        description:
            "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 2,
        img: "../img/gorro.svg",
        nameItem: "Black Hat",
        description:
            "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Acessórios"],
    },
    {
        id: 3,
        img: "../img/mascara.svg",
        nameItem: "Mask",
        description:
            "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        value: 40,
        addCart: "Adicionar ao carrinho",
        tag: ["Acessórios"],
    },
    {
        id: 4,
        img: "../img/camiseta_preta.svg",
        nameItem: "T-Shirt",
        description:
            "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 5,
        img: "../img/camiseta_branca.svg",
        nameItem: "Short-Sleeve T-Shirt",
        description:
            "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 6,
        img: "../img/moletom.svg",
        nameItem: "Champion Packable Jacket",
        description:
            "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
];


function addProducsToShowcase(data) { 

    let contentFirstColumn = document.querySelector(".content-first-column");

    let ulProducts = document.createElement("ul");

    ulProducts.classList.add("products-list");

    contentFirstColumn.appendChild(ulProducts);

    for (let i = 0; i < data.length; i++) {

        let li = document.createElement("li");

        li.classList.add("product-card");

        ulProducts.appendChild(li);

        createProductCard(data, li, i);
    }

}

function createProductCard(data, li, i) {

    let figBox = document.createElement("div");

    figBox.classList.add("fig-box");

    li.appendChild(figBox);


    let figure = document.createElement("figure");

    figure.classList.add("figure");

    figBox.appendChild(figure);


    let img = document.createElement("img");

    img.classList.add("product-image");

    figure.appendChild(img);

    img.setAttribute("src", data[i].img);

    img.setAttribute("alt", data[i].nameItem);


    let figcaption = document.createElement("figcaption");

    figcaption.classList.add("figcaption");

    figure.appendChild(figcaption);


    let productDescription = document.createElement("div");

    productDescription.classList.add("product-description");

    li.appendChild(productDescription);


    let h2 = document.createElement("h2");

    h2.classList.add("product-category");

    productDescription.appendChild(h2);

    h2.innerText = data[i].tag[0];


    let h3 = document.createElement("h3");

    h3.classList.add("product-name");

    productDescription.appendChild(h3);

    h3.innerText = data[i].nameItem;


    let p = document.createElement("p");

    p.classList.add("product-resume");

    productDescription.appendChild(p);

    p.innerText = data[i].description;


    let h4 = document.createElement("h4");

    h4.classList.add("product-price");

    productDescription.appendChild(h4);

    h4.innerText = `R$ ${data[i].value.toFixed(2)}`;


    let button = document.createElement("button");

    button.classList.add("add-to-cart-button");

    button.setAttribute("href", "#");

    productDescription.appendChild(button);



    let a = document.createElement("a");

    a.classList.add("add-to-cart");

    button.appendChild(a);

    a.setAttribute("href", "#");

    a.innerText = data[i].addCart;

}

// console.log(data);

addProducsToShowcase(data);
