/**
 * @author Salvador Robles Gómez
 * @description Escribe una función llamada multiplicarMatrizPorEscalar que tome una matriz matriz y
 * un número escalar . La función debe multiplicar cada elemento de la matriz por el escalar y
 * devolver una nueva matriz con los resultados.
 **/

let matriz = [1, 2, 3, 4, 5];

function multiplicarMatrizporEscalar (matriz, escalar) {
    let nuevaMatriz = [];

    for (let i of matriz) {
        nuevaMatriz.push(matriz[i] * escalar);
    }
    return nuevaMatriz;
}

console.log(multiplicarMatrizporEscalar(matriz, 2));