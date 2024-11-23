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
barraPresupuesto.addEventListener("input", () => {
    presupuestoMin.value = barraPresupuesto.value;
});

presupuestoMin.addEventListener("input", () => {
    barraPresupuesto.value = presupuestoMin.value;
});

presupuestoMax.addEventListener("input", () => {
    if (parseInt(presupuestoMax.value) < parseInt(presupuestoMin.value)) {
        alert("El valor máximo no puede ser menor al mínimo.");
        presupuestoMax.value = presupuestoMin.value;
    }
});