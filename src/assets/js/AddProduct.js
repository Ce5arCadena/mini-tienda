document.addEventListener('DOMContentLoaded', () => {
    const productListContainer = document.querySelector('.productList');
    const btnCloseModalCreateProduct = document.querySelector('.icon-close');
    const modalCreateProduct = document.querySelector('.container-create-product');

    const form = document.querySelector('.form-create');

    btnCloseModalCreateProduct.addEventListener('click', () => {
        modalCreateProduct.classList.toggle('d-none');
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dataForm = new FormData(form);
        const nameProduct = dataForm.get('name');
        const priceProduct = dataForm.get('price');
        const imageProduct = dataForm.get('image');

        const nameProductError = document.querySelector('.nameError');
        const priceProductError = document.querySelector('.priceError');
        const imageProductError = document.querySelector('.imageError');

        if (!nameProduct) {
            nameProductError.textContent = "El nombre es requerido";
        };

        if (!priceProduct) {
            priceProductError.textContent = "El precio es requerido";
        }

        if (imageProduct.size < 1) {
            imageProductError.textContent = "La imagen es requerida";
        }

        if (!nameProduct || !priceProduct || imageProduct.size < 1) return;

        const { data, success } = await saveProduct(dataForm);
        console.log(data);
        if (success) {            
            // Creación de la card para un nuevo producto
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.classList.add('card-img');
            img.setAttribute('src', data.image);
            img.setAttribute("alt", data.image);
            card.append(img);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const h4 = document.createElement('h4');
            h4.textContent = `Nombre ${data.name}`;
            const h5 = document.createElement('h5');
            h5.textContent = `Precio ${data.price}`;
            const span = document.createElement('span');
            span.textContent = `En stock: ${data.stock}`;
            const button = document.createElement('button');
            button.classList.add('btn');
            button.textContent = "Agregar🛒";
            cardBody.append(h4);
            cardBody.append(h5);
            cardBody.append(span);
            cardBody.append(button);
            card.append(cardBody);

            // Inserción en la lista principal
            productListContainer.append(card);
            modalCreateProduct.classList.add('d-none');
        };
    });

    const saveProduct = async (body) => {
        try {
            const response = await fetch(
                './src/api/Products/SaveProduct.php',
                {
                    method: 'POST',
                    body
                }
            );

            return await response.json();
        } catch (error) {
            console.log(error);
        };
    };
});