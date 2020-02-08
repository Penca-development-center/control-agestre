/*var dataGrid=new DataGrid();*/
window.onload=function(){
	var iconoMenu=document.getElementById("iconoMenu")
	iconoMenu.addEventListener("click",abrirMenu)
	$('#archivo').change(function(e){
		var reader = new window.FileReader()
		console.log(reader)
		console.log(new Uint8Array())
		reader.readAsArrayBuffer(e.target.files[0])
		reader.onload=function(e){
			var data=new window.Uint8Array(reader.result)
			var libro=XLSX.read(data,{type:'array'})
			var contenidoHTML = XLSX.write(libro,{type:'string',bookType:'html'})
			$('#contenedorTabla')[0].innerHTML=contenidoHTML
		}
	})
	var cabecera=['Nombre','Apellido','Edad','RFC','Localidad'];
	var cuerpo=new Array(3);
	cuerpo[0]=new this.Array(cabecera.length);
	cuerpo[0][0]="Carlos";
	cuerpo[0][1]="Mendoza";
	cuerpo[0][2]=15;
	cuerpo[0][3]="X";
	cuerpo[0][4]="Estado Mexico";
	cuerpo[1]=new this.Array(cabecera.length);
	cuerpo[1][0]="Eric";
	cuerpo[1][1]="Tellez";
	cuerpo[1][2]=17;
	cuerpo[1][3]="X";
	cuerpo[1][4]="Hidalgo";
	cuerpo[2]=new this.Array(cabecera.length);
	cuerpo[2][0]="Eduardo";
	cuerpo[2][1]="Aguirre";
	cuerpo[2][2]=20;
	cuerpo[2][3]="X";
	cuerpo[2][4]="Guanajuato";
	dataGrid.construirDataGrid('prueba',cabecera,cuerpo)
	const tabla=document.getElementById('tabla');
	const filas=tabla.children
	for (let i = 0; i < filas.length; i++) {
		const fila = filas[i];
		fila.addEventListener("click",dataGrid.seleccionarFila.bind(dataGrid));
		/*fila.addEventListener("dblclick",dataGrid.seleccionarCelda.bind(dataGrid));
		fila.addEventListener("keydown",dataGrid.editarCelda.bind(dataGrid))*/
	}
}
var x=0;
function abrirMenu(){
	var menu=document.getElementById("barraNav")
	var icono=document.getElementById("iconoMenu")
	var altura=obtenerPropiedad("header","height")
	if ((x%2)===0) {
		icono.setAttribute("src","imagenes/cerrar.png")
		menu.style.display="flex"
		menu.style.flexdirection="column"
		menu.style.position="absolute"
		menu.style.top=`${altura}`;
		menu.style.right="0";
	}
	else{
		icono.setAttribute("src","imagenes/menuIcono.png")
		menu.style.display='none';
	}
	x++;
}
function obtenerPropiedad(idElemento,propiedad){
	var elemento=document.getElementById(`${idElemento}`)
	var estilosElemento=window.getComputedStyle(elemento)
	var valorEstilo=estilosElemento.getPropertyValue(`${propiedad}`)
	return valorEstilo
}