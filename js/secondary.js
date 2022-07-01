// calculo de metabolismo basal LISTO
// crear cuenta de usuario listo
// arrays de objetos con la informacion del usuario ( Usuario, edad, sexo, peso, altura, medida cuello, medida cintura, medida caderas si el sexo es femenino, objetivos, actividad fisica) listo
// calculadora de cuanta agua necesitas por dia LISTO
// calcular nivel de grasa corporal LISTO
// gasto total energetico LISTO
// habilitar el boton cerrar sesion listo
// mostrar historial del usuario listo
// cargar nueva entrada en el historial de usuario listo

// hacer que no se repitan los emails por usuario
// agregar peso a la card de resultado, agregarle la resta por el resultado anterior
// muestre fecha

/* function resultadoHTML(historial) {
    let html = "";
    resultado.innerHTML = "";
    historial.forEach(element => {
        html = `<div class="caja-resultado flex flex-column"> <div> <h3> Tu IMC es de: <strong>${element.indiceCorporal}</strong> % </h3> </div>
    <div> <h3> Tu Metabolismo Basal es de: <strong> ${element.metabolismoBasal}</strong> Kcal </h3> </div>
    <div> <h3> Calorías necesarias por día: <strong> ${element.coheficienteActividad}</strong> Kcal </h3> </div>
    <div> <h3> Tu Indice de grasa corporal es de: <strong>${element.indiceGrasaCorporal}</strong> % </h3> </div>
    <div> <h3> Agua necesaria por dia: <strong>${element.aguaPorDia} lts </strong></h3> </div> </div>
     `;
        resultado.innerHTML += html;
    });;
}  */
   /* fetch("./datos.json")
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach(e => {
            let comentarios = data;
            return comentarios;
        });;
    });  */
  /*   imcFetch = document.getElementById('imcFetch'),
    caldiaFetch = document.getElementById('caldiaFetch'),
    grasaFetch = document.getElementById('grasaFetch'),
    aguaFetch = document.getElementById('aguaFetch'); */

/* function logOut () {
        currentUser = null;
        login = false;
    } */

 /*  divFormularioIngresoEntrada.innerHTML = `<form class="formulario" action="submit" id="formNuevo">
    <h3>Calcular Nuevamente</h3>
    <div class="card " id="" style="width: 25rem">
      <div class="card-body">
        <h5 class="card-title">PESO</h5>
        <input type="number" class="form-control" id="pesoNuevo" value="${historial[posicion].peso}" required>
      </div>
    </div>
    <div class="card " id="" style="width: 25rem;">
      <div class="card-body">
        <h5 class="card-title">ALTURA</h5>
        <input type="number" class="form-control" id="alturaNuevo" value="${historial[posicion].altura}" required>
      </div>
    </div>
    <div class="card " id="" style="width: 25rem;">
      <div class="card-body">
        <h5 class="card-title">EDAD</h5>
        <input type="number" class="form-control" id="edadNuevo" value="${historial[posicion].edad}" required>
      </div>
    </div>
    <div class="card " id="" style="width: 25rem;">
      <div class="card-body">
        <h5 class="card-title">SEXO</h5>
        <select class="form-select" id="sexoNuevo" aria-label="Default select example" value="${historial[posicion].sexo}" required>
          <option value="MUJER">Mujer</option>
          <option value="HOMBRE">Hombre</option>
        </select>
      </div>
    </div>
    <div class="card " id="" style="width: 25rem;">
      <div class="card-body">
        <h5 class="card-title">Nivel de actividad física</h5>
        <select class="form-select" id="actividadNuevo" aria-label="Default select example" value="${historial[posicion].coheficienteActividad}" required>
          <option value="1.2">Sedentario/a (no realizas ninguna acitivdad fisica)</option>
          <option value="1.375">Poca actividad (1 - 3 días por semana)</option>
          <option value="1.55">Actividad moderada (3 - 5 días por semana)</option>
          <option value="1.725">Actividad intensa (6 - 7 días por semana)</option>
          <option value="1.9">Actividad muy intensa (dos veces al día, entrenamientos muy duros)</option>
        </select>
        
      </div>
    </div>
  </form>`; */
// Pide al usuario el ingreso de datos.
/* function ingresoDatos(mensaje) {
    let dato = prompt(mensaje);
    while (dato == "") {
        dato = prompt(mensaje);
    }
    return dato;
} */
/* // usar condicional &&
estadoFisico.length > 0 && resultadoHTML(estadoFisico); */



/* btnCalcular.addEventListener("click", () => {
    cardActividad.classList.add('displayNone')
    const datos = cargaDatos(peso, altura, edad, sexo);
    if (peso.value != '' & altura.value != '' & edad.value != '') {

        estadoFisico.push(datos);
        usuarios[usuarios.length - 1].historial = estadoFisico;
        
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        resultadoHTML(estadoFisico);
        form.reset();
        nextID = usuarios.length +1;
    }

    else {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Para poder calcular tu estado físico debes completar todos los campos'
        })
    }
}) */



  /*   Swal.fire({
        title: 'Login Form',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: 'Sign in',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Please enter login and password`)
          }
          return { login: login, password: password }
        }
      }).then((result) => {
        Swal.fire(`
          Login: ${result.value.login}
          Password: ${result.value.password}
        `.trim())
      })*/
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