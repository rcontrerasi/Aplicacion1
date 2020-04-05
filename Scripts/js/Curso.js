$.get("./listarCurso", function (data) {
    crearListado(["ID", "Nombre", "Descripción"], data);

});

var btnBuscar = document.getElementById("btnBuscar")
btnBuscar.onclick = function () {
    var nombreCurso = document.getElementById("txtFindNombre").value;
    $.get("./BuscarCursoporNombre/?nombre=" + nombreCurso , function (dataFind) {
        crearListado(["ID", "Nombre", "Descripción"], dataFind);
    })
    
}

var btnLimpiar = document.getElementById("btnLimpiar")
btnLimpiar.onclick = function () {
    $.get("./listarCurso", function (data) {
        crearListado(["ID", "Nombre", "Descripción"], data);

    });
    document.getElementById("txtFindNombre").value="";
} 


function crearListado(columnas, data) {
    var contenido = "";
    var props = Object.keys(data[0]);

    contenido += "<table id='tablaCurso' class='table'>";
    contenido += "<thead>";
    contenido += "<tr>";
    for (var col = 0; col < columnas.length; col++) {
        contenido += "<td>" + columnas[col] + "</td>";
    }
    contenido += "</tr>";
    contenido += "</thead>";
    contenido += "<tbody>";
    for (var d = 0; d < data.length; d++) {
        contenido += "<tr>"
        for (var p = 0; p < props.length; p++) {
            var valorProps = props[p];
            contenido += "<td>" + data[d][valorProps] + "</td>";
        }
        contenido += "</tr>"
    }
    contenido += "</tbody>";
    contenido += "</table>";

    document.getElementById("tCurso").innerHTML = contenido;
    $("#tablaCurso").dataTable({
        "searching": false,
        "infoEmpty": "Mostrando 0 a 0 de 0 Registro(s)",
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "paginate": {
                "first": "Primero",
                "previous": "Anterior",
                "next": "Siguiente",
                "last": "Último"
            }
        }
    })
}

