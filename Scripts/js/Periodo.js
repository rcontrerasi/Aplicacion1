$.get("./listarPeriodos", function (data) {
    crearListado(data);

});

var txtFindNombre = document.getElementById("txtFindNombre")
txtFindNombre.onkeyup = function () {

    var nombreCurso = document.getElementById("txtFindNombre").value;
        $.get("./BuscarPeriodoporNombre/?nombre=" + nombreCurso, function (dataFind) {
        crearListado(dataFind);
 })

}

var btnLimpiar = document.getElementById("btnLimpiar")
    btnLimpiar.onclick = function () {
    
        $.get("./listarPeriodos", function (data) {
        crearListado(data);

    });
    document.getElementById("txtFindNombre").value = "";
} 

function crearListado(periodos) {
    var contenido = "";
    
    contenido += "<table id='tablaPeriodo' class='table'>";
    contenido += "<thead>";
    contenido += "<tr>";
    contenido += "<td>ID</td>";
    contenido += "<td>Nombre</td>";
    contenido += "<td>Fecha Inicio</td>";
    contenido += "<td>Fecha Fin</td>";
    contenido += "</tr>";
    contenido += "</thead>";
    contenido += "<tbody>";
    for (var p = 0; p < periodos.length; p++) {    
        contenido += "<tr>";
        contenido += "<td>" + periodos[p].IIDPERIODO+ "</td>";
        contenido += "<td>" + periodos[p].NOMBRE + "</td>";
        contenido += "<td>" + periodos[p].FECHAINICIO+ "</td>";
        contenido += "<td>" + periodos[p].FECHAFIN + "</td>";
        contenido += "</tr>";
    }
    contenido += "</tbody>";
    contenido += "</table>";
    
    document.getElementById("tPeriodo").innerHTML = contenido;
    $("#tablaPeriodo").dataTable({
        "searching": false
    })
}
