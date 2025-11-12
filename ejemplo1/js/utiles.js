function obtenerAlumnos() {
    fetch("http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=instituto&table=alumnos")
        .then(response => response.json())
                .then(data => {
            alumnos = data;
            mostrarAlumnos();
        });
}

function mostrarAlumnos() {
    let contenedor = document.getElementById("alumnos");
    contenedor.innerHTML = "";

    alumnos.forEach(alumno => {
        let table = document.createElement("table");
        table.className = "tabla-alumnos";
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = alumno.id;
        tr.appendChild(td);
        td.innerHTML = alumno.nombre;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = alumno.apellidos;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = alumno.nota;
        tr.appendChild(td);
        table.appendChild(tr);
        contenedor.appendChild(table);
    });
}

