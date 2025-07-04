<?php
    include_once __DIR__."/../../db/Connection.php";
    class Products {
        private $table = "products";
        private $conn;

        public function __construct() {
            $connection = new Connection();
            $this->conn = $connection->getConnection();
        }

        public function getProducts() {
            try {
                $query = "SELECT * FROM ".$this->table;
                $queryPrepare = $this->conn->prepare($query);
                $queryPrepare->execute();
                $products = $queryPrepare->fetchAll();
                if ($products) {
                    return json_encode(["data" => $products]);
                }
                
                return json_encode(["message" => "No hay productos para mostrar", "success" => true, "data" => []]);
            } catch (PDOException $e) {
                print "Error al consultar los productos" . $e->getMessage();
                return json_encode(["errors" => ["No se pudo consultar los productos"]]);
            }
        }

        public function saveProduct($product) {
            try {
                $query = "INSERT INTO ". $this->table . " (name, price, stock, image) values (:name, :price, :stock, :image)";
                $prepareQuery = $this->conn->prepare($query);

                $prepareQuery->execute([
                    ':name' => $product['name'],
                    ':price' => $product['price'],
                    ':stock' => $product['stock'],
                    ':image' => $product['image']
                ]);

                return json_encode(['errors' => [], 'message' => 'El producto fue guardado.', 'success' => true, "data" => $product]);
            } catch (PDOException $e) {
                print "Error al consultar los productos" . $e->getMessage();
                return json_encode(["errors" => ["No se pudo guardar el producto"], "success" => false]);
            }
        }
    }
