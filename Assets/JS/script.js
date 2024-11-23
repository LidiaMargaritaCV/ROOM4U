const barraBusqueda = document.getElementById("barraBusqueda");
const filtroContenedor = document.getElementById("filtroContenedor");
const botonesFiltro = document.querySelectorAll(".boton-filtro");
const rangoMin = document.getElementById("rangoMin");
const rangoMax = document.getElementById("rangoMax");
const minValor = document.getElementById("minValor");
const maxValor = document.getElementById("maxValor");

barraBusqueda.addEventListener("click", () => {
    filtroContenedor.classList.toggle("oculto");
});

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        boton.classList.toggle("activo");
    });
});

rangoMin.addEventListener("input", () => {
    minValor.value = rangoMin.value;
});

rangoMax.addEventListener("input", () => {
    maxValor.value = rangoMax.value;
});

minValor.addEventListener("input", () => {
    rangoMin.value = minValor.value;
});

maxValor.addEventListener("input", () => {
    rangoMax.value = maxValor.value;
});