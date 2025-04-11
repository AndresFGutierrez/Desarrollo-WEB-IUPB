/**
 *  Colocar aquí el equipo y sus integrantes
 * <li> Andres Gutierrez </li>
                <li> Emmanuel Espinal </li>
                <li> Kevin Villada </li>
                <li> Julian Ramirez</li>
                <li> Nicolas Cataño </li>
 */


/**
 *  Manejo de previsualización de imágenes
 */ 
document.getElementById('fotoPaciente').addEventListener('change', function(event) {
    mostrarImagen(event, 'previewPaciente');
});

/**
 * Evento de previsualización de foto del Médico
 */
document.getElementById('fotoDoctor').addEventListener('change', function(event) {
    mostrarImagen(event, 'previewDoctor');
});


/**
 * Carga inicial del Formulario
 */
document.addEventListener("DOMContentLoaded", function () {
    // Ruta de la imagen y el audio dentro de la misma carpeta
    const imagenPaciente   = "./src/img/paciente.jpg";  // Nombre de la imagen en la misma carpeta
    const imagenDoctor     = "./src/img/doctor.jpg";    // Nombre de la imagen en la misma carpeta
    const audioDiagnostico = "./src/mp3/diagnostico.mp3";    // Nombre del audio en la misma carpeta

    // Cargar imagen del paciente automáticamente
    const imgPaciente = document.getElementById("previewPaciente");
    imgPaciente.src = imagenPaciente;
    imgPaciente.alt = "Foto del Paciente";

    //Caragr imagen del doctor
    const imgDoctor = document.getElementById("previewDoctor");
    imgDoctor.src = imagenDoctor
    imgDoctor.alt = "Foto del Doctor"

    // Cargar y reproducir el audio automáticamente
    const audioPlayer = document.getElementById("audioPlayback");
    audioPlayer.src = audioDiagnostico;
    audioPlayer.controls = true; // Muestra los controles de reproducción
});



/**
 * 
 *  Función para mostrar imagen de paciente o doctor
 */
function mostrarImagen(event, previewId) {
    const archivo = event.target.files[0];
    if (archivo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById(previewId).src = e.target.result;
        };
        reader.readAsDataURL(archivo);
    }
}


/** Botón de envío del foormulario */
const boton = document.getElementById("miBoton");

/** 
 *  Acción de envío del formulario al Servidor (simulación)
 */
boton.addEventListener("click", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const nombrePaciente = document.getElementById("nombrePaciente").value.trim();
    const apellidoPaciente = document.getElementById("apellidoPaciente").value.trim();
    const edadPaciente = document.getElementById("edadPaciente").value.trim();
    const generoPaciente = document.getElementById("generoPaciente").value.trim();

    const nombreDoctor = document.getElementById("nombreDoctor").value.trim();
    const apellidoDoctor = document.getElementById("apellidoDoctor").value.trim();
    const especialidad = document.getElementById("especialidad").value.trim();
    const generoDoctor = document.getElementById("generoDoctor").value.trim();

    let datos_ok = true;

    /** 
     * Validar mínimo 2 campos que no estén vacíos.
     */
    if (!nombrePaciente || !apellidoPaciente) {
        datos_ok = false;
    }

    /** Decisión: Utilizar un condicional (lógico)
     *  1.- Si los campos están llenos, simular envío con mensaje exitoso 
     *  2.- Si alguno de los campos no tiene información, enviar aviso de alarma
     */
    if (datos_ok) {
        alert("¡Formulario enviado exitosamente!");
    } else {
        alert("Por favor, completa al menos los campos de Nombre y Apellido.")
    }

});


