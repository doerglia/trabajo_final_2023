function validarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !mensaje) {
        alert("Por favor, complete todos los campos.");
    } else {
        // Envío del formulario al servidor o servicio externo de correo
        alert("Formulario enviado con éxito.");
        document.getElementById("contact-form").reset();
    }
}