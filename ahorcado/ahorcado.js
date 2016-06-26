var tablero,hombre,boton;

function iniciar() {
	boton=document.getElementById('boton')
	var canvas=document.getElementById('canvas');
	tablero=canvas.getContext('2d');
	
	hombre=new Ahorcado();

	//hombre.trazar();
}

var Ahorcado=function () {
	this.maximo=5;
	this.intentos=0;
	this.vivo=true;

	this.dibujar();

}

Ahorcado.prototype.dibujar=function() {
	fondo.imagen=new Image();
	fondo.imagen.src=fondo.imagenURL;
	fondo.imagen.onload=confirmarFondo;

	horca.imagen=new Image();
	horca.imagen.src=horca.imagenURL;
	horca.imagen.onload=confirmarHorca;

	if(this.intentos>0){
	cabeza.imagen=new Image();
	cabeza.imagen.src=cabeza.imagenURL;
	cabeza.imagen.onload=confirmarCabeza;
	
		if(this.intentos>1){
		torso.imagen=new Image();
		torso.imagen.src=torso.imagenURL;
		torso.imagen.onload=confirmarTorso;

			if (this.intentos>2) {
			brazos.imagen=new Image();
			brazos.imagen.src=brazos.imagenURL;
			brazos.imagen.onload=confirmarBrazos;

				if (this.intentos>3) {
				piernas.imagen=new Image();
				piernas.imagen.src=piernas.imagenURL;
				piernas.imagen.onload=confirmarPiernas;
	
					if (this.intentos>4) {
					cabezaMuerta.imagen=new Image();
					cabezaMuerta.imagen.src=cabezaMuerta.imagenURL;
					cabezaMuerta.imagen.onload=confirmarCabezaMuerta;
					}
				}
			}	
		}
	}
}

Ahorcado.prototype.trazar=function(){
	var muerto=document.getElementById('muerto');
	this.intentos++;
	if(this.intentos==this.maximo){
		this.vivo=false;
		muerto.innerText=('Te moristes prro xdXDdXDxdxdXdxdd');
	}
	this.dibujar();
}

var Picture=function(url,ok,x,y){
	this.imagenURL=url;
	this.imagenOk=ok;
	this.posicionX=x;
	this.posicionY=y;
}
var fondo=new Picture("assets/paisaje.jpg",false,0,0);
var cabeza=new Picture("assets/cabeza.png",false,453,125);
var torso=new Picture("assets/torso.png",false,458,160);
var brazos=new Picture("assets/brazos.png",false,451,180);
var horca=new Picture("assets/horca.png",false,373,89);
var piernas=new Picture("assets/piernas.png",false,462,232);
var cabezaMuerta=new Picture("assets/cabeza_muerta.png",false,453,125);

function confirmarFondo() {
	fondo.imagenOk=true;
	dibujarImagen();
}

function confirmarBrazos() {
	brazos.imagenOk=true;
	dibujarImagen();
}
function confirmarTorso() {
	torso.imagenOk=true;
	dibujarImagen();
}
function confirmarCabeza() {
	cabeza.imagenOk=true;
	dibujarImagen();
}
function confirmarHorca() {
	horca.imagenOk=true;
	dibujarImagen();
}
function confirmarPiernas() {
	piernas.imagenOk=true;
	dibujarImagen();
}
function confirmarCabezaMuerta() {
	cabezaMuerta.imagenOk=true;
	dibujarImagen();
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
	palabra.value="";
}

function dibujarImagen() {
	if (fondo.imagenOk) {
		tablero.drawImage(fondo.imagen,fondo.posicionX,fondo.posicionY);
	}
	if (horca.imagenOk) {
		tablero.drawImage(horca.imagen,horca.posicionX,horca.posicionY);
	}
	if (cabeza.imagenOk) {
		tablero.drawImage(cabeza.imagen,cabeza.posicionX,cabeza.posicionY);
	}
	if (torso.imagenOk) {
		tablero.drawImage(torso.imagen,torso.posicionX,torso.posicionY);
	}
	if (brazos.imagenOk) {
		tablero.drawImage(brazos.imagen,brazos.posicionX,brazos.posicionY);
	}
	if (piernas.imagenOk) {
		tablero.drawImage(piernas.imagen,piernas.posicionX,piernas.posicionY);
	}
	if (cabezaMuerta.imagenOk) {
		tablero.drawImage(cabezaMuerta.imagen,cabezaMuerta.posicionX,cabezaMuerta.posicionY);
	}
}
