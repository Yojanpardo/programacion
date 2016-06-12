var tablero;
var fondo={
	fondoURL:"fondo.png",
	fondoOk: false
};
var tifis={
	x:0,
	y:0,
	frenteURL: "diana-frente.png",
	frenteOk: true,
	atrasURL: "diana-atras.png",
	atrasOk: false,
	derURL: "diana-der.png",
	derOk: false,
	izqURL: "diana-izq.png",
	izqOk: false,


};
var enemigo={
	x:400,
	y:400,
	enemigoURL: "liz.png",
	enemigoOk: false
}
var teclas={
	arriba: 38,
	abajo: 40,
	izquierda: 37,
	derecha: 39
}
function inicio() {
	var canvas=document.getElementById('canvas');
	tablero = canvas.getContext("2d");
	fondo.imagen = new Image();
	fondo.imagen.src=fondo.fondoURL;
	fondo.imagen.onload=confirmarfondo;

	tifis.frente=new Image();
	tifis.frente.src=tifis.frenteURL;
	tifis.frente.onload=teclado;
	
	tifis.atras=new Image();
	tifis.atras.src=tifis.atrasURL;
	tifis.atras.onload=teclado;
	
	tifis.der=new Image();
	tifis.der.src=tifis.derURL;
	tifis.der.onload=teclado;
	
	tifis.izq=new Image();
	tifis.izq.src=tifis.izqURL;
	tifis.izq.onload=teclado;

	enemigo.enemigoImg=new Image();
	enemigo.enemigoImg.src=enemigo.enemigoURL;
	enemigo.enemigoImg.onload=confirmarEnemigo;

	document.addEventListener("keydown",teclado,false);
}
function teclado(datos) {
	if (datos.keyCode==38) {
		tifis.y-=10;
		tifis.atrasOk=true;
		tifis.izqOk=false;
		tifis.derOk=false;
		tifis.frenteOk=false;
	}
	if (datos.keyCode==40) {
		tifis.y+=10;
		tifis.frenteOk=true;
		tifis.atrasOk=false;
		tifis.izqOk=false;
		tifis.derOk=false;
	}
	if (datos.keyCode==37) {
		tifis.x-=10;
		tifis.izqOk=true;
		tifis.atrasOk=false;
		tifis.derOk=false;
		tifis.frenteOk=false;
	}
	if (datos.keyCode==39) {
		tifis.x+=10;
		tifis.derOk=true;
		tifis.atrasOk=false;
		tifis.izqOk=false;
		tifis.frenteOk=false;
	}
	dibujar();
}
function confirmarEnemigo() {
	enemigo.enemigoOk=true;
	dibujar();
}
function confirmarfondo() {
	fondo.fondoOk=true;
	dibujar();
}
/*function confirmarFrente() {
	tifis.frenteOk=true;
	dibujar();
}
function confirmarAtras() {
	tifis.atrasOk=true;
	dibujar();
}
function confirmarDer() {
	tifis.derOk=true;
	dibujar();
}
function confirmarIzq() {
	tifis.izqOk=true;
	dibujar();
}
*/
function dibujar() {
	if (fondo.fondoOk==true) {
		tablero.drawImage(fondo.imagen,0,0);
	}
	if (tifis.frenteOk==true) {
		tablero.drawImage(tifis.frente,tifis.x,tifis.y);
	}
	if (enemigo.enemigoOk==true) {
		tablero.drawImage(enemigo.enemigoImg,enemigo.x,enemigo.y);
	}
	if (tifis.atrasOk==true) {
		tablero.drawImage(tifis.atras,tifis.x,tifis.y);
	}
	if (tifis.derOk==true) {
		tablero.drawImage(tifis.der,tifis.x,tifis.y);
	}
	if (tifis.izqOk==true) {
		tablero.drawImage(tifis.izq,tifis.x,tifis.y);
	}
}