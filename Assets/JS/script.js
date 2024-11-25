// Este código busca el cuadro donde haces clic para abrir la ventana de buscar inmueble.
const barraBusqueda = document.getElementById("barraBusqueda");
// Este busca la ventana que aparece cuando haces clic en la barra de búsqueda.
const ventanaFlotante = document.getElementById("ventanaFlotante");
// Aquí seleccionamos todos los botones donde escoges si buscas "Casa", "Cuarto" o "Departamento".
const botonesOpciones = document.querySelectorAll(".opciones button");
// Aquí seleccionamos todos los botones donde eliges las delegaciones (como "Xochimilco" o "Tláhuac").
const botonesDelegaciones = document.querySelectorAll(".delegaciones button");
// Buscamos los controles deslizantes y las cajitas donde escribes los números del rango mínimo y máximo.
const rangoMin = document.getElementById("rangoMin");
const rangoMax = document.getElementById("rangoMax");
const minValor = document.getElementById("minValor");
const maxValor = document.getElementById("maxValor");

// 1. *Abrir y cerrar la ventanita de buscar inmueble.*
barraBusqueda.addEventListener("click", () => {
    // Si la ventana está abierta ("block"), la escondemos ("none").
    // Si está escondida, la mostramos.
    ventanaFlotante.style.display = (ventanaFlotante.style.display === "block") ? "none" : "block";
});

// 2. *Cuando haces clic en los botones de "Casa", "Cuarto", o "Departamento".*
botonesOpciones.forEach(button => {
    button.addEventListener("click", () => {
        // Cambiamos el estilo del botón cuando lo seleccionas (se marca o desmarca).
        button.classList.toggle("active");
    });
});

// 3. *Cuando haces clic en los botones de las delegaciones (como "Xochimilco").*
botonesDelegaciones.forEach(button => {
    button.addEventListener("click", () => {
        // Igual que arriba, marcamos o desmarcamos los botones cuando haces clic.
        button.classList.toggle("active");
    });
});

// 4. *Actualizar el fondo de la barra deslizante para mostrar el rango seleccionado.*
const actualizarFondoBarra = () => {
    // Tomamos los valores de los controles deslizantes (mínimo y máximo).
    const min = parseInt(rangoMin.value); // Valor mínimo.
    const max = parseInt(rangoMax.value); // Valor máximo.
    // Calculamos cuánto del rango representa el valor mínimo (en porcentaje).
    const porcentajeMin = (min / 100000) * 100;
    // Calculamos cuánto del rango representa el valor máximo (en porcentaje).
    const porcentajeMax = (max / 100000) * 100;

    // Cambiamos el color de la barra para que la parte seleccionada sea amarilla y el resto gris.
    rangoMin.style.background = 'linear-gradient(to right, #ddd ${porcentajeMin}%, #FFD700 ${porcentajeMin}%, #FFD700 ${porcentajeMax}%, #ddd ${porcentajeMax}%)';
};

// 5. *Cuando mueves el control del rango mínimo.*
rangoMin.addEventListener("input", () => {
    const minValue = parseInt(rangoMin.value); // Valor actual del mínimo.
    const maxValue = parseInt(rangoMax.value); // Valor actual del máximo.

    // Si el valor mínimo llega al máximo, lo ajustamos para que no se crucen.
    if (minValue >= maxValue) {
        rangoMin.value = maxValue - 500; // El mínimo no puede pasar el máximo.
    }
    minValor.value = rangoMin.value; // Actualizamos la cajita con el número mínimo.
    actualizarFondoBarra(); // Cambiamos el color de la barra.
});

// 6. *Cuando mueves el control del rango máximo.*
rangoMax.addEventListener("input", () => {
    const minValue = parseInt(rangoMin.value); // Valor actual del mínimo.
    const maxValue = parseInt(rangoMax.value); // Valor actual del máximo.

    // Si el máximo se mueve al mínimo o lo pasa, lo ajustamos.
    if (maxValue <= minValue) {
        rangoMax.value = minValue + 500; // El máximo no puede ser menor que el mínimo.
    }
    maxValor.value = rangoMax.value; // Actualizamos la cajita con el número máximo.
    actualizarFondoBarra(); // Cambiamos el color de la barra.
});

// 7. *Cuando escribes manualmente en la cajita del valor mínimo.*
minValor.addEventListener("input", () => {
    const minValue = parseInt(minValor.value); // Valor escrito en la cajita del mínimo.
    const maxValue = parseInt(maxValor.value); // Valor actual del máximo.

    // Si el valor mínimo se pasa del máximo, lo corregimos.
    if (minValue >= maxValue) {
        minValor.value = maxValue - 500; // Ajustamos para que no pase del máximo.
    }
    rangoMin.value = minValor.value; // Cambiamos el valor del control deslizante.
    actualizarFondoBarra(); // Cambiamos el color de la barra.
});

// 8. *Cuando escribes manualmente en la cajita del valor máximo.*
maxValor.addEventListener("input", () => {
    const minValue = parseInt(minValor.value); // Valor actual del mínimo.
    const maxValue = parseInt(maxValor.value); // Valor escrito en la cajita del máximo.

    // Si el máximo es menor que el mínimo, lo corregimos.
    if (maxValue <= minValue) {
        maxValor.value = minValue + 500; // Ajustamos para que el máximo sea mayor.
    }
    rangoMax.value = maxValor.value; // Cambiamos el valor del control deslizante.
    actualizarFondoBarra(); // Cambiamos el color de la barra.
});

// 9. *Al cargar la página, establecemos el fondo inicial de la barra.*
actualizarFondoBarra();