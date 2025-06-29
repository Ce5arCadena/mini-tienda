<?php
include_once "./src/api/Products.php";
$products = new Products();
$listProducts = json_decode($products->getProducts());
?>

<section class="products">
    <?php if(empty($listProducts)): ?>
        <div class="noProducts">
            <h3>No hay productos</h3>
            <button class="btn btn-create">Crear Producto</button>
        </div>
    <?php else: ?>
        <div class="productList">
            <?php foreach($listProducts->data as $product): ?>
                <div class="card">
                    <img class="card-img" src="./src/images/goku.jpg" alt="Goku">
                    <div class="card-body">
                        <h4>Nombre: <?php echo $product->name ?></h4>
                        <h5>Precio: <?php echo $product->price ?></h5>
                        <span>En stock: <?php echo $product->stock ?></span>
                        <button class="btn">Agregar🛒</button>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</section>