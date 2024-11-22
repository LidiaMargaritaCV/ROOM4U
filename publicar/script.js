document.getElementById("publicarForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recargar la página

    const confirmacion = confirm("¿Estás seguro que quieres publicar tu inmueble?");
    if (confirmacion) {
        alert("Inmueble publicado con éxito");
    } else {
        alert("Publicación cancelada");
    }
});