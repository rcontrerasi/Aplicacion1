function listar() {
    $.get("./listarAlumnos", function (data) {
        crearListado(['ID', 'Nombre', 'Apellido Paterno', 'Apellido Materno', 'Telefono Padre'], data);

    });
}
listar();
$.get("./cmbSexo", function (listaSexo) {
    console.log("Ista Sexo",listaSexo);
    llenarcombo(listaSexo, document.getElementById("cmbSexo"),true);
});

var botonBuscar = document.getElementById("btnBuscarSexo");

botonBuscar.onclick = function () {
    var valorSexo = document.getElementById("cmbSexo").value
    if (valorSexo > 0) {
        $.get("./filtarPorSexo/?value=" + valorSexo, function (data) {
            crearListado(['ID', 'Nombre', 'Apellido Paterno', 'Apellido Materno', 'Telefono Padre'], data);

        });
    } else {
        listar();
    }
}


function llenarcombo(data, control, seleccione) {
    var contenido = "";
    if (seleccione) {
        contenido += "<option value='0'>--Seleccione--</option>";
    } 
    for (var s = 0; s < data.length; s++) {
        contenido += "<option value ='" + data[s].IID + "'>"
        contenido += data[s].NOMBRE;
        contenido += "</option>"
    }
    control.innerHTML = contenido;
}

function crearListado(columnas, data) {
    var contenido = "";
    var props = Object.keys(data[0]);

    contenido += "<table id='tablaAlumno' class='table'>";
    contenido += "<thead>";
    contenido += "<tr>";
    for (var col = 0; col < columnas.length; col++) {
        contenido += "<td>" + columnas[col] +"</td>";
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

    document.getElementById("tAlumno").innerHTML = contenido;
    $("#tablaAlumno").dataTable({
        "searching": false
    })
}
