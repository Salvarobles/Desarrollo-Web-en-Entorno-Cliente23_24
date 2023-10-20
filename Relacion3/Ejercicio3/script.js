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
  