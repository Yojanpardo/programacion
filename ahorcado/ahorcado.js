
function iniciar() {

}

function seleccionarPalabra() {
	var palabra=document.getElementById('palabra');
	var insertar=document.getElementById('insertar');
	var tamano=palabra.value.length;
	tamano=Number(tamano);
	var arreglo=[];
	for (var i = 0; i<tamano;i++) {
		arreglo[i]="_";
	}
	insertar.textContent=arreglo;
}