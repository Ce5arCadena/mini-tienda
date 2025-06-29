<?php
    class Connection {
        private $conn;
        private $user = "root";
        private $password = "";
        private $host = "localhost";
        private $dbName = "sistemaventas";

        public function __construct() {
            $this->connect();
        }

        private function connect() {
            try {
                $this->conn = new PDO(
                    'mysql:host='.$this->host.';dbname='.$this->dbName, 
                    $this->user, 
                    $this->password,
                    [
                        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                        PDO::ATTR_EMULATE_PREPARES => false 
                    ]
                );
            } catch (PDOException $e) {
                echo $e->getMessage();
                die();
            }
        }

        public function getConnection() {
            return $this->conn;
        }
    }
?>