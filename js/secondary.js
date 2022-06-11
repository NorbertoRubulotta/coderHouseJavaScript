// calculo de metabolismo basal LISTO

// calculadora de cuanta agua necesitas por dia LISTO
// calcular nivel de grasa corporal LISTO
// gasto total energetico LISTO

// Pide al usuario el ingreso de datos.
/* function ingresoDatos(mensaje) {
    let dato = prompt(mensaje);
    while (dato == "") {
        dato = prompt(mensaje);
    }
    return dato;
} */

/* // Asigna true si el sexo es marcado como femenino y false si es masculino.
function valorSexo() {
    let sexo = ingresoDatos("Ingresa tu sexo biologico hombre o mujer \n -Ingresa M para mujer. \n -Ingresa H para hombre");
    return sexo.toUpperCase();
} */
/* let peso;
let altura;
let edad;
let sexo;
let indiceCorporal;
let metabolismoBasal;
let indiceGrasaCorporal;
let aguaPorDia; */

/* peso = parseFloat(ingresoDatos("Ingresa tu peso en KG"));
altura = parseInt(ingresoDatos("Ingresa tu altura en cm"));
edad = parseInt(ingresoDatos("Ingresa tu edad"));
sexo = valorSexo(); */
/* let cuello = parseFloat(ingresoDatos("Ingresa tu el tamaño del contorno de tu cuello en cm"));
let cintura = parseFloat(ingresoDatos("Ingresa tu el tamaño del contorno de tu cintura en cm (toma como referencia el ombligo")); */
/* alert(` IMC: ${indiceCorporal} %\n Metabolismo basal: ${metabolismoBasal} Kcal\n Indice de grasa corporal ${indiceGrasaCorporal} %\n Cantidad de agua diaria: ${aguaPorDia} Lts `); */

/* const inputEmail = document.querySelector("#email"),
    inputPass = document.querySelector("#pass");
inputNombre = document.querySelector("#Nombre");
let usuarios = [];

class Usuario {
    constructor(email, pass, nombre, id) {
        this.email = email;
        this.pass = pass;
        this.nombre = nombre;
        this.id = id;
    }
}

function crearUsuario(email, pass, id) {
    email = email.value;
    pass = pass.value;
    nombre = nombre.value;
    id = id.value;
    return new Usuario(email, pass, nombre, id);
}

btnCrearUsuario.addEventListener("click", () => {

    const usuario = crearUsuario(email, pass, id);

    if (email.value != '' & pass.value != '' & nombre.value != '') {

        usuarios.push(usuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios))
    }
    else {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Para poder crear un usuario debes completar todos los campos'
        })
    }
})
    btnNuevoUsuario.addEventListener("click", () => {
    console.log("lalala")}) */