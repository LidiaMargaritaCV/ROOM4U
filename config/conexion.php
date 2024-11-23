<?php
$host = 'localhost';
$user = 'root'; // Usuario por defecto de MySQL
$password = ''; // Contraseña de MySQL (deja vacío si no tienes contraseña)
$dbname = 'room4u'; // Nombre de la base de datos que creaste

// Crear conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die('Error en la conexión: ' . $conn->connect_error);
}
?>