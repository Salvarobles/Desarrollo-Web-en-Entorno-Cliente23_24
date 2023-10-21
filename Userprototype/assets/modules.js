/**
 * @author Salvador Robles Gómez
 * @description un objet que sea usuario tiene nombre, edad, dni, funcion que compruebe que sea validar el dni, 
 * crear el prototipo usuarios y basandose de dos usuarios de sara y carlos.
 * añadir una propiedad, que muestre la informacion del usuario.
 **/ 
//Objetos Literales
export const usuario = {

    _nombre: "",
    _edad: 0,
    _dni: "",

    get nombre() {
        return this._nombre;
    },

    set nombre(nuevoNombre) {
        this._nombre  = nuevoNombre;
    },

    get edad() {
        return this._edad;
    },

    set edad(nuevoEdad) {
        this._edad  = nuevoEdad;
    },

    get dni() {
        return this._dni;
    },

    set dni(nuevoDni) {
        this._dni  = nuevoDni;
    },

    mostrarInfo(){
        alert(`Bienvenido, ${this._nombre}, su edad es ${this._edad} y su dni es ${this._dni}`);
    },

    validarDni() {
        const letras=["T", "R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]
        
        const nDni = this._dni.slice(0,8);

        return ((nDni.length === 8) && letras[parseInt(nDni)%23]) === this._dni.slice(-1);

        // let letra = letras[dni%23]
        // let resultado =  dni + letra

        // if (resultado === parseInt(this._dni)) {
        //     this.mostrarInfo();
        // } else {
        //     alert('El dni ${dniFrm} es incorrecto');
        // }

        // console.log(resultado);
    },



}

//Funcion contructura
export function UsuarioFuncional(nombre, edad = 0){
    this._nombre = nombre;
    this._edad = edad;
    this._dni = "";

    //Getter y setter para el nombre

    Object.defineProperty(this, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nuevoNombre) {
            this._nombre = nuevoNombre;
        } 
    })
}

UsuarioFuncional.prototype.mostrarInfo = function () {

}

export class UsuarioClass {
    constructor(nombre = "", edad = 0){
        this._nombre = nombre;
        this._edad = edad;
        this._dni = "";
    }

    get nombre() { 
        return this._nombre;
    }
    

    static saludarATodos() {
        console.log("Hola a todos");
    }
}

export function UsuarioF (nombre, edad, dni) {
    this._nombre = nombre;
    this._edad = edad;
    this._dni = dni;
}

UsuarioF.prototype = {
    get nombre(){
        return this._nombre;
    },

    set nombre(newNombre){
        this._nombre = newNombre;
    },
}

//Crear usuarios

// let maria = Object.create(usuario);

// let sara = new UsuarioF("sara", 34, "77962939T");