// Menú desplegable
document.getElementById("menuToggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Oculta el menú
    } else {
        menu.style.display = "block"; // Muestra el menú
    }
});

// Validación y envío del formulario
document.getElementById("publicarForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Validar campos básicos
    const tipoInmueble = document.getElementById("tipoInmueble").value;
    const calle = document.getElementById("calle").value;
    const precio = document.getElementById("precio").value;

    if (!tipoInmueble || !calle || !precio) {
        alert("Por favor, llena todos los campos obligatorios.");
        return;
    }

    // Confirmación de envío
    const confirmacion = confirm("¿Estás seguro que quieres publicar tu inmueble?");
    if (confirmacion) {
        alert("¡Inmueble publicado con éxito!");
        // Aquí podrías agregar lógica para guardar los datos
    } else {
        alert("Publicación cancelada. Revisa tus datos.");
    }
});
