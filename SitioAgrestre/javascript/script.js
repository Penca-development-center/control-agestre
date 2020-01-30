window.onload=function(){
	var iconoMenu=document.getElementById("iconoMenu")
	iconoMenu.addEventListener("click",abrirMenu)
	console.log(window)
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
		menu.style.right="0"
		menu.style.top=`${altura}`
	}
	else{
		icono.setAttribute("src","imagenes/menuIcono.png")
		menu.style.display="none"
	}
	x++;
}
function obtenerPropiedad(idElemento,propiedad){
	var elemento=document.getElementById(`${idElemento}`)
	var estilosElemento=window.getComputedStyle(elemento)
	var valorEstilo=estilosElemento.getPropertyValue(`${propiedad}`)
	return valorEstilo
}