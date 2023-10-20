/**
 * @author Salvador Robles Gómez
 * @description Define una función llamada encontrarMaxMin que tome un array de números arr y devuelva un
 * objeto con las propiedades max y min , que contengan el valor máximo y mínimo del array,respectivamente.
 */

function encontrarMaxMin(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return { max, min };
}

const encontrarMaxMin2 = (arr) => ({
    max: Math.max(...arr),
    min: Math.min(...arr)
});

console.log(encontrarMaxMin2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

