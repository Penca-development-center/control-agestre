class DataGrid{
    constructor(){
        this.filaActiva=null;
        this.celdaActiva=null;
    }
    construirDataGrid(seccion,cabecera,cuerpo){
        const ubicacion = document.getElementById(`${seccion}`);
        ubicacion.innerHTML+='<table id="tabla">';
        const tabla=document.getElementById('tabla')
        tabla.innerHTML+='<thead id="cabeceraTabla">';
        tabla.innerHTML+='</thead>';
        tabla.innerHTML+='<tbody id="cuerpoTabla">';
        tabla.innerHTML+='<tbody>';
        ubicacion.innerHTML+='</table>';
        const cabeceraTabla=document.getElementById('cabeceraTabla');
        const cuerpoTabla=document.getElementById('cuerpoTabla');
        cabeceraTabla.innerHTML+='<tr id="filaCabecera">';
        const filaCabecera=document.getElementById('filaCabecera')
        for(let i = 0; i<cabecera.length; i++){
            if(i===0){
                filaCabecera.innerHTML+='<th>Editar</th>'
            }
            filaCabecera.innerHTML+=`<th>${cabecera[i]}</th>`;
            if(i===(cabecera.length-1)){
                filaCabecera.innerHTML+='<th>Eliminar</th>'
            }
        }
        cabeceraTabla.innerHTML+='</tr>';
        for(let j=0;j<cuerpo.length;j++){
            cuerpoTabla.innerHTML+=`<tr id="fila${j}">`;
            const fila=document.getElementById(`fila${j}`);
            for(let k=0;k<cuerpo[j].length;k++){
                if(k===0){
                    fila.innerHTML+='<td><button onclick=dataGrid.editarFila(this); class=btnEliminar>Editar</button></td>';
                }
                fila.innerHTML+=`<td>${cuerpo[j][k]}</td>`;
                if(k===(cuerpo[j].length-1)){
                    fila.innerHTML+='<td><button onclick=dataGrid.eliminarFila(this); class=btnEliminar>Eliminar</button></td>'
                }
            }
            cuerpoTabla.innerHTML+='</tr>';
        }
    }
    limpiarFormulario(){
        $("#nombre").val('');
        $("#apellido").val('');
        $("#edad").val('');
        $("#rfc").val('');
        $("#localidad").val('');
    }
    cambioFilaActiva(fila){
        if(this.filaActiva === null){
            fila.classList.add('filaActiva');
            this.filaActiva=fila;
        }else if(this.filaActiva!==fila){
            this.filaActiva.classList.remove('filaActiva');
            fila.classList.add('filaActiva');
            this.filaActiva=fila;
            this.limpiarFormulario();
            const boton=document.getElementById('btnActualizar');
            boton.innerText='Agregar Fila';
        }
    }
    seleccionarFila(event){
        const celda=event.target;
        const fila=$(celda).parents("tr");
        this.cambioFilaActiva(fila[0]);
    }
    /*seleccionarCelda(event){
       const celda=event.target;
       this.celdaActiva=celda;
    }*/
    agregarFila(){
        if ($("#tabla tbody").length == 0) {
            $("#tabla").append("<tbody></tbody>");
        }
        const nombre = $("#nombre").val();
        const apellido = $("#apellido").val();
        const edad = $("#edad").val();
        const rfc = $("#rfc").val();
        const localidad = $("#localidad").val();
        var fila =
        "<tr>" +
            "<td>" +
                "<button type='button' " +
                "onclick='dataGrid.editarFila(this);' " +
                "class='btnEliminar'>Editar" +
                "</button>" +
            "</td>" +
            "<td>" + nombre + "</td>" +
            "<td>" + apellido + "</td>" +
            "<td>" + edad + "</td>" +
            "<td>" + rfc + "</td>" +
            "<td>" + localidad + "</td>" +
            "<td>" +
                "<button type='button' " +
                "onclick='dataGrid.eliminarFila(this);' " +
                "class='btnEliminar'>Eliminar" +
                "</button>" +
            "</td>" +
        "</tr>";
        return fila;
    }
    /*editarCelda(event){
        if(this.celdaActiva!==null){
            
        }
    }*/
    eliminarFila(event){
        $(event).parents("tr").remove();
    }
    editarFila(event){
        const fila=$(event).parents("tr");
        const filaSeleccionada=fila[0];
        this.cambioFilaActiva(filaSeleccionada);
        const columnas=this.filaActiva.children;
        $("#nombre").val($(columnas[1]).text());
        $("#apellido").val($(columnas[2]).text());
        $("#edad").val($(columnas[3]).text());
        $("#rfc").val($(columnas[4]).text());
        $("#localidad").val($(columnas[5]).text());
        const boton=document.getElementById('btnActualizar');
        boton.innerText='Actualizar';
    }
    actualizarTabla(){
        if($('#btnActualizar').text()==='Actualizar'){
            $(this.filaActiva).after(this.agregarFila());
            $(this.filaActiva).remove();
            const boton=document.getElementById('btnActualizar');
            boton.innerText='Agregar Fila';
        }
        else{
            $('#tabla').append(this.agregarFila());
        }
        this.limpiarFormulario();
    }
}