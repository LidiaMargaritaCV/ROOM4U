// Menú desplegable
document.getElementById("menuToggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Lógica de favoritos (Placeholder para añadir funcionalidad futura)
document.querySelectorAll(".tarjeta").forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        alert("Ir al inmueble publicado.");
        // Aquí puedes agregar lógica para redirigir a la página del inmueble
    });
});