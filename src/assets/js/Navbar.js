document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelector('.navbar-cart');
    const productsCart = document.querySelector('.productsCart');
    const cartQuantity = document.querySelector('.productsQuantity');
    const iconCloseCart = document.querySelector('.icon-close-cart');
    const btnShowModalCreateProduct = document.querySelector('.addProduct');
    const modalCreateProduct = document.querySelector('.container-create-product');

    const dataStorage = JSON.parse(localStorage.getItem('products')) || [];
    if (dataStorage.length > 0 ) {
        cartQuantity.textContent = dataStorage.length;
    };

    btnShowModalCreateProduct.addEventListener('click', () => {
        modalCreateProduct.classList.toggle('d-none');
    });

    iconCloseCart.addEventListener('click', () => {
        productsCart.style.display = 'none';
        const itemsCart = document.querySelectorAll('.itemCart');
        if (itemsCart.length > 0) {
            itemsCart.forEach(item => item.remove());
        };
    });

    cart.addEventListener('click', () => {
        // console.log('cliccck');
        const productsStorage = JSON.parse(localStorage.getItem('products')) || [];
        console.log(productsStorage);
        if (productsStorage.length <= 0) return;
        
        productsCart.style.display = "flex";

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
        divButtons.classList.add('d-flex');

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

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add('btn');

        // TODO:Agregar boton de eliminar producto del carrito. Seria ir al localstorage y borrarlo de ahí, para actualizar el aside
        deleteButton.addEventListener('click', () => {
            removeItemProductToStorage(id, div);
        });

        divButtons.appendChild(substractButton);
        div.appendChild(divButtons);
        div.appendChild(deleteButton);

        return div;
    };

    const removeItemProductToStorage = (id, div) => {
        console.log(id, div);
        if (!id || !div) return;

        const productsStorage = JSON.parse(localStorage.getItem('products'));
        const existProductInStorage = productsStorage.find(product => product.id === id);
        console.log(productsStorage, existProductInStorage);
        if (!existProductInStorage) return;

        const newProducts = productsStorage.filter(product => product.id !== id);
        localStorage.setItem('products', JSON.stringify(newProducts));
        div.remove();

        const quantityCart = Number(cartQuantity.textContent);
        cartQuantity.textContent = quantityCart - 1;
    };
});