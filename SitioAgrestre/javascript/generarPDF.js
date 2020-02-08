function generarPDF(){
	//Metodo con jspdf + html2canvas
	/*
	html2canvas(document.getElementById('tabla')).then(function(canvas) {
        var img = canvas.toDataURL('image/png');
        var doc = new jsPDF();
        doc.addImage(img, 'JPEG', 20, 20);
        doc.save('test.pdf');
    });*/
    //Metodo con solo jspdf
    /*
	var doc=new jsPDF()
	doc.fromHTML($('#tabla').get(0),20,20,{'width':500})
	doc.save('prueba.pdf')*/
}
function createPDF() {
        var tabla = document.getElementById('contenedorTabla').innerHTML;

        var estilos = "<style>";
        estilos += "table {width: 100%;}";
        estilos += "table, th, td {border: solid 1px black; border-collapse: collapse;";
        estilos += "padding: 2px 3px;text-align: center;}";
        estilos += "</style>";

        var ventana = window.open('', '', 'height=700,width=700');
        ventana.document.write('<html><head>');
        ventana.document.write('<title>Especialistas</title>');
        ventana.document.write(estilos);
        ventana.document.write('</head>');
        ventana.document.write('<body>');
        ventana.document.write(tabla);
        ventana.document.write('</body></html>');
        ventana.document.close();
        ventana.print();
}