document.addEventListener("DOMContentLoaded", () => {
    const barraBusqueda = document.getElementById("barraBusqueda");
    const searchModal = document.getElementById("searchModal");
    const closeModal = document.getElementById("closeModal");

    // Abrir modal
    barraBusqueda.addEventListener("click", () => {
        searchModal.classList.add("active");
    });

    // Cerrar modal
    closeModal.addEventListener("click", () => {
        searchModal.classList.remove("active");
    });

    // Cerrar modal al hacer clic fuera
    searchModal.addEventListener("click", (event) => {
        if (event.target === searchModal) {
            searchModal.classList.remove("active");
        }
    });
});