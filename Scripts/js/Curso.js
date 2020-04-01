$.get("./listarCurso", function (data) {
    crearListado(data);

});

var btnBuscar = document.getElementById("btnBuscar")
btnBuscar.onclick = function () {
    var nombreCurso = document.getElementById("txtFindNombre").value;
    $.get("./BuscarCursoporNombre/?nombre=" + nombreCurso , function (dataFind) {
        crearListado(dataFind);
    })
    
}

var btnLimpiar = document.getElementById("btnLimpiar")
btnLimpiar.onclick = function () {
    $.get("./listarCurso", function (data) {
        crearListado(data);

    });
    document.getElementById("txtFindNombre").value="";
} 

function crearListado(cursos) {
    var contenido = "";
    contenido += "<h2>Cursos</h2>";
    contenido += "<table id='tablaCurso' class='table'>";
    contenido += "<thead>";
    contenido += "<tr>";
    contenido += "<td>ID</td>";
    contenido += "<td>Nombre</td>";
    contenido += "<td>Descripción</td>";
    contenido += "</tr>";
    contenido += "</thead>";
    contenido += "<tbody>";
    for (var c = 0; c < cursos.length; c++) {
        contenido += "<tr>";
        contenido += "<td>" + cursos[c].IIDCURSO + "</td>";
        contenido += "<td>" + cursos[c].NOMBRE + "</td>";
        contenido += "<td>" + cursos[c].DESCRIPCION + "</td>";
        contenido += "</tr>";
    }
    contenido += "</tbody>";
    contenido += "</table>";

    document.getElementById("tCurso").innerHTML = contenido;
    $("#tablaCurso").dataTable({
        "searching": false
    })
}

