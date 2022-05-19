// Banco de dados dos produtos

const data = [
    {
        id: 1,
        img: "./img/jaqueta.svg",
        nameItem: "Lightweight Jacket",
        description:
            "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 2,
        img: "./img/gorro.svg",
        nameItem: "Black Hat",
        description:
            "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Acessórios"],
    },
    {
        id: 3,
        img: "./img/mascara.svg",
        nameItem: "Mask",
        description:
            "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        value: 40,
        addCart: "Adicionar ao carrinho",
        tag: ["Acessórios"],
    },
    {
        id: 4,
        img: "./img/camiseta_preta.svg",
        nameItem: "T-Shirt",
        description:
            "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 5,
        img: "./img/camiseta_branca.svg",
        nameItem: "Short-Sleeve T-Shirt",
        description:
            "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 6,
        img: "./img/moletom.svg",
        nameItem: "Champion Packable Jacket",
        description:
            "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
];

let itemsAddedToCart = [];

let total = 0;

let quantity = 0;


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

    button.classList.add("add-to-cart-button", "add-to-cart");

    productDescription.appendChild(button);

    button.setAttribute("id", data[i].id);

    button.innerText = data[i].addCart;


    button.addEventListener('click', function () {


        itemsAddedToCart.push(data[i]);

        total += data[i].value;

        quantity++;

        console.log(total);

        console.log(quantity);


        let totalQuantity = document.querySelector(".total-quantity")

        totalQuantity.innerText = quantity;


        let totalPrice = document.querySelector(".total-price");

        totalPrice.innerText = `R$ ${total.toFixed(2)}`;


        let itemAdded = itemsAddedToCart[itemsAddedToCart.length - 1];

        addItemsToCart(itemAdded);

    });

}

function emptyCart() {

    let cartItems = document.querySelector(".cart-items");

    let emptyCart = document.createElement("h3");

    emptyCart.classList.add("empty-cart");

    cartItems.appendChild(emptyCart);

    emptyCart.innerText = "Carrinho vazio";


    let addItems = document.createElement("h4");

    addItems.classList.add("add-items");

    cartItems.appendChild(addItems);

    addItems.innerText = "Adicione itens";

}

function createCart() {

    let contentSecondColumn = document.querySelector(".content-second-column");

    let cart = document.createElement("div");

    cart.classList.add("cart")

    contentSecondColumn.appendChild(cart);


    let CartTitle = document.createElement("h3");

    CartTitle.classList.add("cart-title");

    cart.appendChild(CartTitle);

    CartTitle.innerText = "Carrinho de Compras";


    let cartItems = document.createElement("div");

    cartItems.classList.add("cart-items");

    cart.appendChild(cartItems);



    let cartSummary = document.createElement("div");

    cartSummary.classList.add("cart-summary");

    cart.appendChild(cartSummary);


    let divTotalQuantity = document.createElement("div");

    cartSummary.appendChild(divTotalQuantity);

    divTotalQuantity.classList.add("div-total-quantity");


    let totalQuantityTitle = document.createElement("h3");

    totalQuantityTitle.classList.add("total-quantity-title");

    divTotalQuantity.appendChild(totalQuantityTitle);

    totalQuantityTitle.innerText = "Quantidade:";


    let totalQuantity = document.createElement("h3");

    totalQuantity.classList.add("total-quantity");

    divTotalQuantity.appendChild(totalQuantity);

    totalQuantity.innerText = quantity;



    let divTotalPrice = document.createElement("div");

    cartSummary.appendChild(divTotalPrice);

    divTotalPrice.classList.add("div-total-price");

    
    let totalPriceTitle = document.createElement("h3");

    totalPriceTitle.classList.add("total-price-title");

    divTotalPrice.appendChild(totalPriceTitle);

    totalPriceTitle.innerText = "Total:";


    let totalPrice = document.createElement("h3");

    totalPrice.classList.add("total-price");

    divTotalPrice.appendChild(totalPrice);

    totalPrice.innerText = `R$ ${total.toFixed(2)}`;

}

function addItemsToCart(itemAdded) {


    let cartItems = document.querySelector(".cart-items");

    let productAdded = document.createElement("div");

    productAdded.classList.add("product-added");

    cartItems.appendChild(productAdded);


    let productImage = document.createElement("div");

    productImage.classList.add("fig-box-in-cart")

    productAdded.appendChild(productImage);


    let figure = document.createElement("figure");

    figure.classList.add("figure-in-cart");

    productImage.appendChild(figure);


    let img = document.createElement("img");

    img.classList.add("product-image-in-cart");

    figure.appendChild(img);

    img.setAttribute("src", itemAdded.img);

    img.setAttribute("alt", itemAdded.nameItem);


    let figcaption = document.createElement("figcaption");

    figcaption.classList.add("figcaption");

    figure.appendChild(figcaption);


    let productDescription = document.createElement("div");

    productDescription.classList.add("product-description-in-cart")

    productAdded.appendChild(productDescription);


    let productName = document.createElement("h3");

    productName.classList.add("product-name-in-cart");

    productName.innerText = itemAdded.nameItem;

    productDescription.appendChild(productName);


    let productPrice = document.createElement("h3");

    productPrice.classList.add("product-price-in-cart");

    productPrice.innerText = `R$ ${itemAdded.value.toFixed(2)}`;

    productDescription.appendChild(productPrice);


    let removeProduct = document.createElement("button");

    removeProduct.classList.add("remove-product-in-cart");

    removeProduct.innerText = "Remover produto";

    productDescription.appendChild(removeProduct);

    removeProduct.addEventListener("click", function() {

        quantity--;
        
        total -= itemAdded.value;


        console.log(quantity);

        console.log(total);

        let totalQuantity = document.querySelector(".total-quantity")

        totalQuantity.innerText = quantity;


        let totalPrice = document.querySelector(".total-price");

        totalPrice.innerText = `R$ ${total.toFixed(2)}`;

        productAdded.remove();

    });
}

function general(data, itemsAddedToCart) {

    addProducsToShowcase(data);

    createCart();
    
}

general(data, itemsAddedToCart);

