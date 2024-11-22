// Validación del formulario
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validación simple para el correo
    if (!validateEmail(email)) {
        document.getElementById("error-message").textContent = "Por favor, ingresa un correo válido.";
        return;
    }

    // Validación simple para contraseña vacía
    if (password.trim() === "") {
        document.getElementById("error-message").textContent = "Por favor, ingresa tu contraseña.";
        return;
    }

    // Redirección si es exitoso
    alert("Inicio de sesión exitoso.");
    window.location.href = "../index.html"; // Redirigir a la página principal
});

// Validación de formato de correo
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Enlace para "Olvidé mi contraseña"
document.getElementById("forgot-password").addEventListener("click", function () {
    alert("Función de recuperación de contraseña en desarrollo.");
    // O redirige si ya tienes la página:
    // window.location.href = "../recuperar/index.html";
});

// Enlace para "Regístrate"
document.getElementById("register-link").addEventListener("click", function () {
    window.location.href = "../registro/index.html"; // Redirige a la página de registro
});

// Función para mostrar/ocultar contraseña
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password")});
    