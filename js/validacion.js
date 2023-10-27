document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        if (!nombre || !email || !mensaje) {
            alert("Por favor, complete todos los campos.");
        } else {
            // Envío del formulario al servidor o servicio externo de correo
            alert("Formulario enviado con éxito.");
            form.reset();
        }
    });
});

function showDescription(descriptionId) {
    const descriptionPopup = document.getElementById(descriptionId);
    descriptionPopup.style.display = "block";
}

function hideDescription(descriptionId) {
    const descriptionPopup = document.getElementById(descriptionId);
    descriptionPopup.style.display = "none";
}