function obtenerAlumnos() {
    fetch("http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=instituto&table=alumnos")
        .then(response => response.json())

