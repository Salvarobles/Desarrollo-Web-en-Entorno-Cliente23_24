/**
 * @author Salvador Robles Gómez
 * @description obrtener una variable micuidad la cuidad que tengo ahora mismo
 **/ 

const persona = {
    nombre : "Salvador",
    edad : 33,
    cp : 10000,
    detalles : {
      ciudad : "Granada",
      indeP : 456,
    },
  }

  const {ciudad : miCiudad} = persona.detalles; //destructuring
 
  //nomrbe cp, indeP --> obj datos persona

  const {nombre, cp, detalles:{indeP}} = persona; //destructuring ejercicio 1
  console.log(persona);

  // const datosPersona = {
  //   nombre : nombre,
  //   cp : cp,
  //   indeP : indeP,
  // }

  // console.log(datosPersona);


  //mostrar indeP


  // crear una array con 5 personas y mostrar todos el indeP.

  const personas = [ 
    {
    nombre : "Salvador",
    edad : 33,
    cp : 10000,
    detalles : {
      ciudad : "Granada",
      indeP : 456,
    },
  },{
    nombre : "Pepe",
    edad : 33,
    cp : 10000,
    detalles : {
      ciudad : "Granada",
      indeP : 456,
    },
  },{
    nombre : "Juan",
    edad : 43,
    cp : 234,
    detalles : {
      ciudad : "Huelva",
      indeP : 834,
    },
  },{
    nombre : "Luis",
    edad : 93,
    cp : 34348,
    detalles : {
      ciudad : "Jaen",
      indeP : 839,
    },
  },{
    nombre : "Maria",
    edad : 31,
    cp : 2345,
    detalles : {
      ciudad : "Malaga",
      indeP : 758,
    },
  }
]

for (let persona of personas) {
  console.log(persona.detalles.indeP);
}

const indicesP = personas.map(persona => persona.detalles.indeP);

personas.forEach(persona => console.log(persona.detalles.indeP));

  //media aritmetica del indeP

const mediaAritmetica = indicesP.reduce((acumulador, indice) => acumulador + indice, 0) / indicesP.length;