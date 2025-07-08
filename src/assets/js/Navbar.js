document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelector('.navbar-cart');
    const btnShowModalCreateProduct = document.querySelector('.addProduct');
    const modalCreateProduct = document.querySelector('.container-create-product');

    btnShowModalCreateProduct.addEventListener('click', () => {
        modalCreateProduct.classList.toggle('d-none');
    });

    cart.addEventListener('click', () => {
        console.log('cliccck');
        const productsStorage = JSON.parse(localStorage.getItem('products')) || [];
        console.log(productsStorage);
        if (productsStorage.length <= 0) return;

        const productsCart = document.querySelector('.productsCart');
        productsCart.style.display = "flex";
        // productsCart.style.flexDirection = "column";

        // Se arma el contenedor de cada producto para el carrito: img, nombre, precio y botones de + y -
        productsStorage.forEach(product => {
            const node = formatNodo(product.id, product.image, product.name, product.price);
            productsCart.appendChild(node);
        });
    });

    const formatNodo = (id, urlImg, name, price) => {
        const div = document.createElement('div');
        div.classList.add('itemCart');
        div.dataset.id = id;
    
        // Imagen
        const img = document.createElement('img');
        img.setAttribute('src', urlImg);
        img.setAttribute('alt', name);

        div.appendChild(img);

        // nombre
        const h4 = document.createElement('h4');
        h4.textContent = name;

        div.appendChild(h4)

        // precio
        const span = document.createElement('span');
        span.textContent = price;

        // cantidad
        const divQuantity = document.createElement('div');
        const spanQuantityName = document.createElement('span');
        spanQuantityName.textContent = 'Cantidad';

        const spanQuantityNumber = document.createElement('p');
        spanQuantityNumber.classList.add('quantityCart');
        spanQuantityNumber.dataset.idProduct = id;
        spanQuantityNumber.textContent = '1';

        divQuantity.appendChild(spanQuantityName);
        divQuantity.appendChild(spanQuantityNumber);

        div.appendChild(span);
        div.appendChild(divQuantity);

        // contenedor para botones
        const divButtons = document.createElement('div');

        // botones de agregar más o menos cantidad
        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.classList.add('btn');
        addButton.addEventListener('click', () => {
            const newQuantity = document.querySelector(`.quantityCart[data-id-product="${id}"]`);
            if (!newQuantity || Number(newQuantity.textContent) < 0) return;

            // console.log(newQuantity.textContent);
            newQuantity.textContent = Number(newQuantity.textContent) + 1;
        });

        divButtons.appendChild(addButton);

        const substractButton = document.createElement('button');
        substractButton.textContent = '-';
        substractButton.classList.add('btn');
        substractButton.addEventListener('click', () => {
            const newQuantity = document.querySelector(`.quantityCart[data-id-product="${id}"]`);
            if (!newQuantity || Number(newQuantity.textContent) <= 1) return;

            // console.log(newQuantity.textContent);
            newQuantity.textContent = Number(newQuantity.textContent) - 1;
        });

        divButtons.appendChild(substractButton);
        div.appendChild(divButtons);
        return div;
    };
});