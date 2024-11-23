const barraBusqueda = document.getElementById("barraBusqueda");
const ventanaFlotante = document.getElementById("ventanaFlotante");
const botonesOpciones = document.querySelectorAll(".opciones button");
const botonesDelegaciones = document.querySelectorAll(".delegaciones button");
const barraPresupuesto = document.getElementById("barraPresupuesto");
const presupuestoMin = document.getElementById("presupuestoMin");
const presupuestoMax = document.getElementById("presupuestoMax");

// Mostrar/ocultar ventana flotante
barraBusqueda.addEventListener("click", () => {
    ventanaFlotante.style.display = (ventanaFlotante.style.display === "block") ? "none" : "block";
});

// Activar selección de botones
botonesOpciones.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });
});

botonesDelegaciones.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });
});

// Sincronizar valores de la barra y los campos
const rangoMin = document.getElementById("rangoMin");
const rangoMax = document.getElementById("rangoMax");
const minValor = document.getElementById("minValor");
const maxValor = document.getElementById("maxValor");

// Actualizar valores de los inputs al mover los sliders
rangoMin.addEventListener("input", () => {
    const minValue = parseInt(rangoMin.value);
    const maxValue = parseInt(rangoMax.value);

    if (minValue >= maxValue) {
        rangoMin.value = maxValue - 500; // Evitar que los valores se crucen
    }
    minValor.value = rangoMin.value;
});

rangoMax.addEventListener("input", () => {
    const minValue = parseInt(rangoMin.value);
    const maxValue = parseInt(rangoMax.value);

    if (maxValue <= minValue) {
        rangoMax.value = minValue + 500; // Evitar que los valores se crucen
    }
    maxValor.value = rangoMax.value;
});

// Actualizar sliders al escribir en los inputs
minValor.addEventListener("input", () => {
    const minValue = parseInt(minValor.value);
    const maxValue = parseInt(maxValor.value);

    if (minValue >= maxValue) {
        minValor.value = maxValue - 500;
    }
    rangoMin.value = minValor.value;
});

maxValor.addEventListener("input", () => {
    const minValue = parseInt(minValor.value);
    const maxValue = parseInt(maxValor.value);

    if (maxValue <= minValue) {
        maxValor.value = minValue + 500;
    }
    rangoMax.value = maxValor.value;
});
