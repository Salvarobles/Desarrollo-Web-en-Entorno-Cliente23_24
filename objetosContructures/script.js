/**
 * @author Salvador Robles Gómez
 * @description un objet que sea usuario tiene nombre, edad, dni, funcion que compruebe que sea validar el dni, 
 * crear el prototipo usuarios y basandose de dos usuarios de sara y carlos.
 * añadir una propiedad, que muestre la informacion del usuario.
 **/ 

const usuario = {
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
        return this._nombre;
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

    validadEdad() {
        const letras=["T", "R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]
        
        const nDni = this._dni.slice(0,8);

        return ((nDni.length === 8) && letras[parseInt(nDni)%23]) === this._dni.slice(-1);
    },

    mostrarInfo(){
        console.log(`Bienvenido, ${this._nombre}, su edad es ${this._edad} y su dni es ${this._dni}`);
    }

}

function UsuarioF (nombre, edad, dni) {
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

let maria = Object.create(usuario);

console.log(maria.__proto__);

let sara = new UsuarioF("sara", 34, "77962939T");