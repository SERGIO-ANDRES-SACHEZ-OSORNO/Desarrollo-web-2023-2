const numeros=[1,5,10,30,50]
const replica=[];
let suma=0;
numeros.forEach((item) => {
    replica.push(item)
    suma+=item
});
console.log("Vector replica  "+  replica);
console.log("La suma del vector es:  "+suma)

/**
 * map es un metodo de javascript donde realiza el cambio de las propiedades
 * a un elemento de un vector. 
 *
 */
//Multiplica cada valor *2 en el vector original
const doble=numeros.map((valor) =>valor*2);

console.log("El arreglo doble es: ", doble)

/**
 * Arreglo de objetos
 */

const estudiantes=[
    {nombre:'Pedro', apellido:'Perez'},
    {nombre:'Pablo', apellido:'Moncada'},
    {nombre:'Andres', apellido:'Montoya'},
    {nombre:'Eduardo', apellido:'Londoño'},
    {nombre:'Erika', apellido:'Mojica'},
    {nombre:'Isidro', apellido:'Perez'},
];

    const nombreCompleto = estudiantes.map((student) =>{
        return `${student.nombre} ${student.apellido}`;
    });

    console.log(nombreCompleto)

    /**
     * filter filtrado  y se pone la condicion para el filtrado
     */

    const numerosFiltrados =numeros.filter((numero)=>numero<20);
    console.log('Los numeros filtrados son: '+ numerosFiltrados);
        const estudiantesFiltrados = estudiantes.filter((stu)=>{
        return stu.apellido ==='Perez';
});
    console.log('Los nombres filtrados son: ' + numerosFiltrados.estudiantesFiltrados);

   


/**
 *  every
 */

    const frutas = ['Banano','Papaya', 'Mango', 'Fresa'];
    const cumple= frutas.every((word)=>word.length > 12);
    console.log(cumple);

    const objetoFrutas = [
        {'nombre': 'Banano', buena:true},
        {'nombre': 'Papaya', buena:false},
        {'nombre': 'Mango', buena:true},
        {'nombre': 'Fresa', buena:true}
    ];

    const objetoFrutas1 = estudiantes.filter((student)=>student.apellido==='Perez');

/**
 * objetos
 */
// Cantidad de proíedades fijas
    const  auto ={
        color:'azul',
        year:1982,
        cantidadpuestas:4,
        marca:'Mazda',
        revisiones:{
            fechaIngreso:'10-enero2020',
            fecahSalida:'20-enero-2020',
            estadoSalida:'Bueno',
            entregadoPor:'juan perez'
            },
            tieneSeguroo:true,
            registradoTransito:true
    };

    let autos= [];
    autos.push(auto);
    console.log(autos.marca);

    /**
     * Construir un array minimo de 2 objetos
     * cada objeto debe tener adentro otro objeto
     * usar como minimo tres metodos de arreglos sobre el arreglo
     */

 
   let   caracteristicas={ 
            colorPuertas:'Café',
            colorVentanas:'Verde Caobo',
            estadoConstruccion:'obra Blanca'
    },
            servicios={
                acueducto:true,
                gas:true,
                alcantarillado:true
    }

    let parqueadero={
        cantidadCarros:4,       
        estadoCarro:'Nuevo',
        caracteristicasCarros:{
            marcaCarro:'Renault',
            coloCarro:'Negro'
        }

    }
    let casa=['cantidad de puertas','cantidad de ventanas','estado de la construccion',caracteristicas, parqueadero]

 
    console.log('El tamaño original del arreglo es  ' + casa.length + ' Items')
    const metodoEvery=  casa.every((item, _)=>item===0);
    const metodoPush = casa.push('cantidad de habitantes')
    console.log('El nuevo tamaño del arreglo es  ' + casa.length + ' Items')
    console.log(metodoEvery)
    console.log(metodoPush)
   
    console.log('La ' + casa[0] + ' de la casa es 1 y su color es ' + casa[3].colorPuertas)
    console.log('El  ' + casa[2] + ' es  ' + casa[3].estadoConstruccion)
    console.log('Tiene Parqueadero para ' + casa[4].cantidadCarros + ' carros y uno de ellos  es de marca ' + casa[4].caracteristicasCarros.marcaCarro + ' y es de color ' + casa[4].caracteristicasCarros.coloCarro);



