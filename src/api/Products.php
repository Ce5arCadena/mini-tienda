<?php
    include_once "./src/db/Connection.php";
    class Products{
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
                
                return json_encode(["error" => "No se pudo consultar los productos"]);
            } catch (PDOException $e) {
                print "Error al consultar los productos" . $e->getMessage();
                return json_encode(["error" => "No se pudo consultar los productos"]);
            }
        }
    }
