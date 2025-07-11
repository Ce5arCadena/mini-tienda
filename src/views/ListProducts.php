<?php
include_once "./src/api/products/Products.php";
$products = new Products();
$listProducts = json_decode($products->getProducts());
?>

<section class="products">
    <?php if(empty($listProducts->data)): ?>
        <div class="noProducts">
            <h3>No hay productos</h3>
            <button class="btn btn-create">Crear Producto</button>
        </div>
    <?php else: ?>
        <div class="productsCart">
            <img src="./src/assets/icons/close.svg" alt="Icon Product" class="icon icon-close-cart">
            <div>
                <h3>Carrito</h3>
            </div>

            <div class="itemsCart">
                
            </div>
        </div>
        <div class="productList">
            <?php foreach($listProducts->data as $product): ?>
                <div class="card">
                    <img class="card-img" src="<?php echo $product->image ?>" alt="Goku">
                    <div class="card-body">
                        <h4>Nombre: <?php echo $product->name ?></h4>
                        <h5>Precio: <?php echo $product->price ?></h5>
                        <span>En stock: <?php echo $product->stock ?></span>
                        <button class="btn btnAddProductToCart" data-id="<?php echo $product->id ?>">Agregar🛒</button>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</section>