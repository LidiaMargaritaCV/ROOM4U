// Menú desplegable
document.getElementById("menuToggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Subir fotos
const btnSubirFotos = document.getElementById("btnSubirFotos");
btnSubirFotos.addEventListener("click", function () {
    alert("Aquí podrás agregar tus imágenes");
});

// Validar y enviar formulario
document.getElementById("publicarForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("¿Estás seguro de publicar tu inmueble?");
});