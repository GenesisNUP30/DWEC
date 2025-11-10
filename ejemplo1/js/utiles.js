function obtenerAlumnos() {
    fetch("php/listaralumnos.php")
        .then(response => response.json())
        .then(data => {
            