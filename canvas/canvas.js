var canvas,pincel,boton,cantidad;

function inicio() {
	canvas=document.getElementById('canvas');
	pincel=canvas.getContext("2d");
	boton1=document.getElementById("boton1");
	boton2=document.getElementById("boton2");
	cantidad=document.getElementById("cantidad");


	rellenarCirculo(pincel);
	pupila(pincel);
	//boton1=addEventListener("click",dibujarGrilla,false);
	//boton2=addEventListener("click",dibujarGrillaDiagonal,false);
}

function dibujarGrilla() {
	var p=pincel;
	var ancho=300, alto=300;
	var rayas=Number(cantidad.value);
	var desplazamiento=300/rayas;
	var limiteX=ancho/desplazamiento;
	var limiteY=alto/desplazamiento;
	p.strokeStyle="#1E824C";

	for (var i=0; i<limiteX; i++){
		p.beginPath();
		p.moveTo(i*desplazamiento,0);
		p.lineTo(i*desplazamiento,ancho);
		p.closePath();
		p.stroke();
	}
		for (var i=0; i<limiteX; i++){
		p.beginPath();
		p.moveTo(0,i*desplazamiento);
		p.lineTo(alto,i*desplazamiento);
		p.closePath();
		p.stroke();
	}
}

function dibujarGrillaDiagonal() {
	var p=pincel;
	var lado=300;
	var usuario=Number(cantidad.value);
	var linea=(lado*2)/usuario;
	var distancia=0;
	for (var i=0;i<=usuario;i++){
		p.beginPath();
		p.moveTo(distancia,0);
		p.lineTo(0,distancia);
		p.strokeStyle="red";
		p.stroke();
		p.closePath();
		p.beginPath();
		p.moveTo(0,lado);
		p.lineTo(distancia,300);
		p.strokeStyle="green";
		p.stroke();
		p.closePath();
		distancia=distancia+linea;
		lado=lado-linea;
	}
}

function rellenarCirculo(r) {
	var perimetro=480;


	for (var i = 0; i <= perimetro; i++) {
		var relleno=i*0.25;
		pincel.beginPath();
		pincel.strokeStyle="#00F";
		pincel.arc(150, 150, relleno, (Math.PI*2) , false);
		pincel.closePath();
		pincel.stroke();

	}


}

function pupila(o) {
	var perimetro=240;


	for (var i = 0; i <= perimetro; i++) {
		var relleno=i*0.25;
		pincel.beginPath();
		pincel.strokeStyle="#000";
		pincel.arc(150, 150, relleno, (Math.PI*2) , false);
		pincel.closePath();
		pincel.stroke();

	}

	
}