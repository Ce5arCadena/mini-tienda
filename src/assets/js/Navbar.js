document.addEventListener('DOMContentLoaded', () => {
    const btnShowModalCreateProduct = document.querySelector('.addProduct');
    const modalCreateProduct = document.querySelector('.container-create-product');

    btnShowModalCreateProduct.addEventListener('click', () => {
        modalCreateProduct.classList.toggle('d-none');
    });
});