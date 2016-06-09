var canvas,pincel,boton,cantidad;

function inicio() {
	canvas=document.getElementById('canvas');
	pincel=canvas.getContext("2d");
	boton=document.getElementById("boton");
	cantidad=document.getElementById("cantidad");


	rellenarCirculo(pincel);
	pupila(pincel);
	boton=addEventListener("click",dibujarGrilla,false);
}

function dibujarGrilla() {
	var p=pincel;
	var ancho=300, alto=300;
	var rayas=Number(cantidad.value);
	var desplazamiento=300/rayas;
	var limiteX=ancho/desplazamiento;
	var limiteY=alto/desplazamiento;
	//var x=300;
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
	/* para lineas diagonales;
	for (var i = 0; i <=limiteX; i++) {
		x=x-rayas;
		y=300-x;
		p.beginPath();
		p.moveTo(x,0);
		p.lineTo(300,y);
		p.closePath();
		p.stroke();
		
	}

	x=0;
	for (var i = 0; i <=limiteX; i++) {
		x=x+rayas;
		y=x;
		p.beginPath();
		p.moveTo(x,0);
		p.lineTo(0,y);
		p.closePath();
		p.stroke();
		
	}*/
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