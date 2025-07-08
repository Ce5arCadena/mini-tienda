<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET' || !isset($_GET['id'])) {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido', 'data' => [], 'success' => false]);
    exit;
}

include_once "Products.php";

$id = $_GET['id'];
$products = new Products();
$product = $products->getProduct($id);

if ($product) {
    http_response_code(200);
    echo $product;
    exit;
} 

http_response_code(500);
echo json_encode(["errors" => ["No se pudo consultar los productos"], "success" => false, "data" => []]);

?>