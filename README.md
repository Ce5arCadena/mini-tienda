# Sistema de Ventas 💼

Este proyecto es un sistema de ventas básico desarrollado con **PHP**, **MySQL** y **JavaScript**.

## 🧰 Tecnologías Utilizadas

- **PHP**: Para la lógica del servidor y manejo de solicitudes.
- **MySQL**: Base de datos relacional para almacenar la información de productos.
- **JavaScript**: Para mejorar la interacción en la interfaz web.

## ⚙️ Requisitos para Ejecutar el Proyecto

1. Servidor web con soporte PHP (por ejemplo, XAMPP, WAMP o LAMP).
2. MySQL instalado y en funcionamiento.
3. Navegador web actualizado.

## 🗄️ Configuración de la Base de Datos

Antes de ejecutar el sistema, debes crear la base de datos y tabla necesarias:

### 1. Crear la base de datos

CREATE DATABASE sistemaventas;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL,
  image VARCHAR(255)
);
