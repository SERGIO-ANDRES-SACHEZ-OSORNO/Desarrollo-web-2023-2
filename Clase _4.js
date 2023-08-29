class Animal{
    constructor(especie, color, sonido, habitat){
        this.especie=especie;
        this.color=color;
        this.sonido=sonido;
        this.habitat=habitat;
    }
   moverse(tipoMovimiento){
    console.log(`Mi moviemiento es :  ${tipoMovimiento}`);
   }

   determinarEspecie(){
    return this.especie;
   }
   sonidoCaracteristico(){
    return this.sonido;
   }
   dondeSeEncuentra(){
    return this.habitat
   }


}
class Perro extends Animal {
    
    constructor(raza, color, sonido) {
        //this.raza=raza;
       // this.color=color;
        //this.sonido=sonido;
        super(raza,  color, sonido, 'casa');
    }
    ladrar(){
        return this.sonido;
        
    }

    sentarse(){
        console.log('Me he sentado');
    }
}

const labrador = new Perro('Labrador','Blanco','Woof');
labrador.sentarse();
//labrador.ladrar();
console.log(labrador.sonidoCaracteristico());
console.log( 'El '+ labrador.especie  +  ' hace ' + labrador.sonidoCaracteristico());

class musica{
    constructor(info){
        this.fechaLanzamiento = info.fechaLanzamiento;
        this.artista= info.artista;
        this.genero= info.genero;
        this.titulo= info.titulo;
    }

    reproducir(){
        console.log(`Se está reproduciendo ${this.titulo} del artista ${this.artista}`);

    }

    pausar(){
        console.log(`Se ha pausado ${this.titulo} del artista ${this.artista}`);
    }
}

const informacion = {
    fechaLanzamiento:1989,
    artista:'Madona',
    genero:'pop',
    titulo : 'Like a virgin',

}

const Pop = new musica(informacion);
Pop.reproducir();
Pop.pausar();

const PopUno= new musica({
    fechaLanzamiento:1989,
    artista:'Queen',
    genero:'Rock',
    titulo : 'Another one bites the dust ',
} );

PopUno.reproducir();


/**
 * Crear una clase padre
 * crear una clase que herede de la clase padre
 * ambas deben tener como minimo dos metodos 
 * deben recibir objetos (Clases)
 * los objetos recibidos deben tener otro objeto como propiedad
 * mostrar resultados 
 * Fecha de entrega  
 */

const datosAbuelo = {   
    nombreAbuelo:'Alberto de Jesus',
    apellidoPaternoAbuelo:'Pineda',
    apellidoMaternoAbuelo:'Monsalve',
    edadAbuelo:78,
    estadoCivilabueloo:'Soltero',
}
const datosAbuela = {   
    nombreAbuela:'Maria del socorro',
    apellidoPaternoAbuela:'Jimenez',
    apellidoMaternoAbuela:'Atheortua',
    edadAbuela:75,
    estadoCivilabuelaa:'Casada',
}

class arbolGenialogico{
    constructor(Abuelo,Abuela){
        this.nombreAbuelo=Abuelo.nombreAbuelo;
        this.apellidoPaternoAbuelo=Abuelo.apellidoPaternoAbuelo;
        this.apellidoMaternoAbuelo=Abuelo.apellidoMaternoAbuelo;
        this.edadAbuelo=Abuelo.edadAbuelo;
        this.nombreAbuela=Abuela.nombreAbuela;
        this.apellidoPaternoAbuela=Abuela.apellidoPaternoAbuela;
        this.apellidoMaternoAbuela=Abuela.apellidoMaternoAbuela;
        this.edadAbuela=Abuela.edadAbuela;
        this.estadoCivilabueloo=Abuelo.estadoCivilabueloo;
        this.estadoCivilabuelaa=Abuela.estadoCivilabuelaa;  
    }   
    estadoCivilabuelo(){
        console.log(`El Estado Civil del abuelo es:  ${this.estadoCivilabueloo}`);
        //console.log(`Se ha pausado ${this.titulo} del artista ${this.artista}`);
   }

    estadoCivilabuela(){
        console.log(`El Estado Civil de la abuela es:  ${this.estadoCivilabuelaa}`);
    }
}
console.log();
console.log();
const abueloss= new arbolGenialogico(datosAbuelo,datosAbuela);
console.log(abueloss.estadoCivilabuela());
console.log(abueloss.estadoCivilabuelo());

class Hijos extends arbolGenialogico {
    constructor(nombreHijo,catidadNietosAbuelo, cantidadNietosAbuela){
        this.nombreHijo = nombreHijo;
        this.catidadNietosAbuelo = catidadNietosAbuelo;
        this.cantidadNietosAbuela = cantidadNietosAbuela;
        
    }
    nietosAbuelo(){
        return 'La cantidad de nietos del Abuelo es de: ' + this.cantidadNietosAbuelo
    }
    nietosAbuela(){
        return 'La cantidad de nietos de la Abuela es de: ' + this.cantidadNietosAbuela
    }
}

const Hijo1 = new Hijos('Sofia',2,1);
console.log(Hijo1.apellidoPaternoAbuela);
console.log(Hijo1.cantidadNietosAbuela());


//const hijo1 = new Hijos (datosAbuela,datosAbuelo)
//const abuelos = new arbolGenialogico(datosAbuelo, datosAbuela);
//console.log(abuelos);
