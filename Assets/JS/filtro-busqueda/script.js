document.addEventListener("DOMContentLoaded", () => {
    // Selecciona elementos
    const barraBusqueda = document.querySelector(".barra-busqueda");
    const searchModal = document.querySelector(".search-modal");
    const closeModalButton = document.querySelector(".close");
    const rangeInput = document.querySelector('input[type="range"]');
    const minPriceInput = document.getElementById("min-price");
    const maxPriceInput = document.getElementById("max-price");
    const searchSubmit = document.querySelector(".search-submit");

    // Mostrar el modal al hacer clic en la barra de búsqueda
    barraBusqueda.addEventListener("click", () => {
        searchModal.classList.add("active");
    });

    // Cerrar el modal al hacer clic en el botón de cerrar
    closeModalButton.addEventListener("click", () => {
        searchModal.classList.remove("active");
    });

    // Cerrar el modal si se hace clic fuera del contenido
    searchModal.addEventListener("click", (event) => {
        if (event.target === searchModal) {
            searchModal.classList.remove("active");
        }
    });

    // Actualizar campos de precio según el rango
    rangeInput.addEventListener("input", (event) => {
        const value = event.target.value;
        minPriceInput.value = value - 1000; // Ajusta según tu lógica
        maxPriceInput.value = value + 1000;
    });

    // Buscar inmuebles (simulación)
    searchSubmit.addEventListener("click", () => {
        alert("Realizando búsqueda con los filtros seleccionados...");
        searchModal.classList.remove("active");
    });
});