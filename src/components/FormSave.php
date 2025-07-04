<div class="container-create-product d-none">
    <form class="form-create">
        <div class="container-close-product"> 
            <img src="./src/assets/icons/close.svg" alt="Icon Product" class="icon icon-close">
        </div>
        <div class="field">
            <label>Nombre Producto</label>
            <input 
                type="text" 
                placeholder="Manzana, Arroz..." 
                name="name" 
                class="form-field"
                autocomplete="off"
            >
            <span class="nameError"></span>
        </div>
        <div class="field">
            <label>Precio</label>
            <input 
                type="text" 
                placeholder="2000" 
                name="price" 
                class="form-field"
                autocomplete="off"
            >
            <span class="priceError"></span>
        </div>
        <div class="field">
            <label>Imagen</label>
            <input 
                type="file" 
                placeholder="Nombre del producto..." 
                name="image" 
                class="form-field"
            >
            <span class="imageError"></span>
        </div>
        <div class="field">
            <button class="btn btn-save-product">Guardar</button>
        </div>
    </form>
</div>