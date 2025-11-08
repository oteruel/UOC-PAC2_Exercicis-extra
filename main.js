class Llibre {
  constructor(titol, autor, disponible) {
	this.titol = titol; 
   	this.autor = autor; 
    this.disponible = disponible; 
	} 
  
  prestar() {
  	if (this.disponible === true) {
    	this.disponible = false;
      console.log(`El llibre ${this.titol} ha estat prestat`);
    } else {
      console.log(`El llibre ${this.titol} ja NO està disponible`);
    }
  }
  tornarLlibre() {
  	this.disponible = true;
    console.log(`El llibre ${this.titol} SÍ que està disponible`);
  }  
  
	get informacioBreu() {
		return `Títol: ${this.titol}, Autor: ${this.autor}, Estat: ${this.disponible}.`;
		}  
  
  set canviarAutor(nouNom) {
  	this.autor = nouNom;
  }
  
  static reglesBibliotecaries() {
  	return `La biblioteca permet un màxim de 3 llibres per usuari.`;
  }
}

const llibre1 = new Llibre("Cien años de soledad","Gabriel García Márquez", true);
const llibre2 = new Llibre("1984","George Orwell",false);

const llistatLlibres = [llibre1, llibre2];

console.log(typeof llibre1);
console.log(typeof llibre2);

console.log(llibre1.hasOwnProperty("autor"));
console.log(llibre2.hasOwnProperty("autor"));

llibre1.prestar();
llibre1.prestar();
llibre1.tornarLlibre();
console.log(llibre1.informacioBreu);


llibre2.prestar();
llibre2.prestar();
llibre2.tornarLlibre();
console.log(llibre2.informacioBreu); //Reviso autor orginal
llibre2.canviarAutor = 'Nou Autor Inventat';
console.log(llibre2.informacioBreu); //Revios si ha canviat a Nou Autor Inventat

console.log(Llibre.reglesBibliotecaries());

const llistatLlibresJSON = JSON.stringify(llistatLlibres);
console.log(llistatLlibresJSON);

const llistatLlibresRecuperat = JSON.parse(llistatLlibresJSON);
console.log(llistatLlibresRecuperat);
console.log(typeof llistatLlibresJSON); //Hauria de ser string
console.log(typeof llistatLlibresRecuperat); //Hauria de ser object

//Comprovar que manté les propietats
llistatLlibresRecuperat.forEach((llibre) => {
	console.log(`${llibre.titol}, ${llibre.autor},${llibre.disponible}`);
});


