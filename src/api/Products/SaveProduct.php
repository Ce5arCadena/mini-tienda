<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

$errors = [];

$name = $_POST['name'] ?? '';
$price = $_POST['price'] ?? '';
$image = $_FILES['image'] ?? '';

// var_dump($_POST);

if (empty($name)) {
    array_push($errors, 'El nombre es requerido.');
}

if (empty($price)) {
    array_push($errors, 'El precio es requerido.');
}

if (!$image || $image['error'] !== 0) {
    array_push($errors, 'La imagen es requerida.');
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['errors' => $errors, 'message' => 'No se pudo guardar el producto.']);
    exit;
}

$imageDir = __DIR__ .'/../../images/';
if (!is_dir($imageDir)) {
    mkdir($imageDir, 077, true);
}

$filename = uniqid() . '_' . basename($image['name']);
$destinationPath = $imageDir . $filename;

// var_dump($destinationPath, $image);
if (!move_uploaded_file($image['tmp_name'], $destinationPath)) {
    http_response_code(500);
    echo json_encode(['errors' => ['No se pudo guardar la imagen'], 'message' => 'No se pudo guardar la imagen.']);
    exit;
}

// Guardar el producto
include_once 'Products.php';

$urlImage = './src/images/'.$filename;
$productSave = ['name' => $name, 'price' => $price, 'stock' => 20, 'image' => $urlImage];

$products = new Products();
$responseSaveProduct = $products->saveProduct($productSave);

http_response_code(200);
echo $responseSaveProduct;
exit;