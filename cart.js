console.log('yo');

// Vado a prendere tutti i miei link per aggiungere al carrello ogni item
let cart = document.querySelectorAll('.add_to_cart')
console.log(cart)

// creo un array vuoto dove metto gli item che ricevono il clock "addtocart"
let products = [
    {
        name: "Acer Aspire 3",
        price: 2000.00,
        isInCart: true
    },
    {
        name: "Acer Aspire 3",
        price: 2000.00,
        isInCart: true
    },
    {
        name: "Acer Aspire 3",
        price: 2000.00,
        isInCart: true
    },
    {
        name: "Acer Aspire 3",
        price: 2000.00,
        isInCart: true
    },
    {
        name: "Acer Aspire 3",
        price: 2000.00,
        isInCart: true
    },
    {
        name: "Acer Aspire 3",
        price: 2000.00,
        isInCart: true
    },
    {
        name: "Acer Aspire 3",
        price: 2000.00,
        isInCart: true
    },
    {
        name: "Acer Aspire 3",
        price: 2000.00,
        isInCart: true
    },
];

console.log(products)
// adesso per ogni item vado a prendere l'addeventlistener dell'addtocart
//ogni event listener prenderà il prezzo del prodotto
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumber(products[i]);
        totalPrice(products[i]);
    })
}

//funzione che serve mettere nel localstorage il prezzo di ogni prodotto cliccato
function totalPrice(product) {
    let cartPrice = localStorage.getItem('totalPrice');
    if (cartPrice != null) {
        //Se ho già qualcosa dentro il mio storage vado a sommare
        cartPrice = parseInt(cartPrice);
        localStorage.setItem('totalPrice', cartPrice + product.price);
    } else {
        localStorage.setItem('totalPrice', product.price)
    }
}

function cartNumber(product) {
    //controllo se ho già in conto prodotti nel mio contatore
    let productNumber = localStorage.getItem('cartNumber');
    productNumber = parseInt(productNumber)
    if (productNumber) {
        localStorage.setItem('cartNumber', productNumber + 1);
        document.querySelector('.count_item').textContent = productNumber + 1;

    } else {
        localStorage.setItem('cartNumber',1);
        console.log(document.querySelector('.count_item'))
        document.querySelector('.count_item').textContent = 1;
    }


}

//per poter vedere il contatore giusto anche dopo il reresh della pagina

function onLoad() {
    let trueNumber = localStorage.getItem('cartNumber');
    document.querySelector('.count_item').textContent = trueNumber;
}

onLoad();
    

