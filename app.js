// Función para agregar el nombre a la lista
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();  // Eliminar espacios en blanco extra

    // Verificar que el nombre no esté vacío
    if (nombre !== "") {
        // Crear un nuevo elemento <li> para el nombre
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = nombre;

        // Agregar el nuevo elemento a la lista
        const listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.appendChild(nuevoAmigo);

        // Limpiar el input
        inputNombre.value = '';
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    const amigos = Array.from(listaAmigos.getElementsByTagName("li")); // Convertir la lista de amigos en un arreglo

    // Verificar si la lista de amigos está vacía
    if (amigos.length === 0) {
        alert("No existen amigos. Por favor ingrese al menos un amigo.");
        return; // Detener la ejecución si no hay amigos
    }

    // Seleccionar un amigo aleatorio de la lista
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)].textContent;

    // Mostrar el resultado en una alerta
    alert(`Tu amigo secreto es: ${amigoSecreto}`);
}

// Enlazar el evento al botón de sorteo desde JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const botonSorteo = document.querySelector(".button-draw");
    botonSorteo.addEventListener("click", sortearAmigo);  // Agregar el event listener para hacer el sorteo
});
