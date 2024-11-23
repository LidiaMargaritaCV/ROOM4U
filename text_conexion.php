<?php
// Incluir la conexión
require_once 'config/conexion.php';

// Consulta simple para verificar la conexión
$sql = "SHOW TABLES";
$result = $conn->query($sql);

if ($result) {
    echo "Conexión exitosa. Tablas en la base de datos:<br>";

    // Mostrar las tablas
    while ($row = $result->fetch_array()) {
        echo $row[0] . "<br>";
    }
} else {
    echo "Error en la consulta: " . $conn->error;
}

$conn->close();
?>