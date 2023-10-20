/**
 * @author Salvador Robles Gómez
 * @description variables -- infociudad, los detalles de la persona sacarlo
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

  const {detalles : infoCiudad} = persona; 

  console.log(infoCiudad);

  //obrtener una variable micuidad la cuidad que tengo ahora mismo