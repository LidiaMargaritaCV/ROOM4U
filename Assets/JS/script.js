const barraBusqueda = document.getElementById("barraBusqueda");
const ventanaFlotante = document.getElementById("ventanaFlotante");
const botonesOpciones = document.querySelectorAll(".opciones button");
const botonesDelegaciones = document.querySelectorAll(".delegaciones button");
const barraPresupuesto = document.getElementById("barraPresupuesto");
const presupuestoMin = document.getElementById("presupuestoMin");
const presupuestoMax = document.getElementById("presupuestoMax");

// Mostrar/ocultar ventana flotante
barraBusqueda.addEventListener("click", () => {
    ventanaFlotante.classList.toggle("oculto");
    ventanaFlotante.style.display = ventanaFlotante.style.display === "none" ? "block" : "none";
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

// Sincronizar barra y presupuesto
barraPresupuesto.addEventListener("input", () => {
    presupuestoMin.value = barraPresupuesto.value;
});

presupuestoMin.addEventListener("input", () => {
    barraPresupuesto.value = presupuestoMin.value;
});