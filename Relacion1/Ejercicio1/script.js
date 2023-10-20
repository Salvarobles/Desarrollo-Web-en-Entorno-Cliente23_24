/**
 * @author Salvador Robles Gómez
 * @description Escribe una funcion para sumar arrays que se le pasa por parámetro dos 
 *              arrays del mismo tamaño, y me devuelva una arrays que sume cada elemento de las arrays.
 **/ 


// alert (` Escribe una funcion para sumar arrays que se le pasa por parámetro dos arrays del mismo tamaño, y me devuelva una arrays que sume cada elemento de las arrays.
// ` )

/**
 * @param array arr1
 * @param array arr2
 * @returns num[]
 */

const arr1 = new Array(1,2,3);
const arr2 = new Array(1,2,3);

//Arrow function con map

const sumarArray3 = (arr1, arr2) => arr1.map((valor, indice) => valor + arr2[indice]);


console.log(sumarArray3(arr1, arr2));

function sumarArray (arr1, arr2) {

    if(arr1.length !== arr2.length) {
        throw new Error('Los arrays deben de tener la misma longitud')
    }

    const sumaArray = new Array()


    for (let i = 0; i < arr1.length; i++) {
        sumaArray.push(arr1[i] + arr2[i]);
    }

    // for (indice in arr1) {
    //     sumaArray.push(arr1[indice] + arr2[indice]);
    // }


    return sumaArray
}


//Otra manera mas compleja

function sumarArray2(arr1, arr2) {

    for (const [i1,v1] of arr1.entries()) {
        for (const [i2,v2] of arr2.entries()) {
            if (i1 === i2) {
                sumarArray.push(v1 + v2)
            }
    }
    }
    return sumarArray;
}



// const letras = ['a', 'b', 'c']

// const misLetras = new Arrays(4,5,6)

