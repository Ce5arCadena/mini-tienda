<!DOCTYPE html>
<html lang="ES">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    <link rel="stylesheet" href="./src/assets/css/index.css">
</head>
<body>
    <main>
        <?php include_once "./src/components/Navbar.php"; ?>
        <?php include_once "./src/components/FormSave.php"; ?>

        <?php include_once "./src/views/ListProducts.php"; ?>
    </main>

    <script type="module" src="./src/assets/js/AddProduct.js"></script>
    <script type="module" src="./src/assets/js/Navbar.js"></script>
</body>
</html>