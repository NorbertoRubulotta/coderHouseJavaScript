const form = document.getElementById('form');
formNuevo = document.getElementById('formNuevo');
const inputPeso = document.querySelector("#peso"),
    inputAltura = document.querySelector("#altura"),
    inputEdad = document.querySelector("#edad"),
    inputSexo = document.querySelector('#sexo'),
    inputActividad = document.querySelector('#actividad'),
    btnCalcular = document.querySelector("#btnCalcular"),
    btnLogin = document.querySelector("#btnLogin"),
    btnCrearUsuario = document.getElementById('btnCrearUsuario'),
    btnNuevoUsuario = document.querySelector("#btnNuevoUsuario"),
    resultado = document.querySelector("#resultado"),
    textoInformativo = document.querySelector("#textoInformativo"),
    inputEmail = document.querySelector("#email"),
    inputPass = document.querySelector("#pass"),
    inputNombre = document.querySelector("#Nombre"),
    cardPeso = document.getElementById('cardPeso'),
    cardAltura = document.getElementById('cardAltura'),
    cardEdad = document.getElementById('cardEdad'),
    cardSexo = document.getElementById('cardSexo'),
    cardActividad = document.getElementById('cardActividad'),
    nextPeso = document.getElementById('nextPeso'),
    nextAltura = document.getElementById('nextAltura'),
    nextEdad = document.getElementById('nextEdad'),
    nextSexo = document.getElementById('nextSexo'),
    divLoginUsuario = document.getElementById('divLoginUsuario'),
    divLogoutUsuario = document.getElementById('divLogoutUsuario'),
    logemail = document.getElementById('logemail'),
    logpass = document.getElementById('logpass'),
    btnIngresar = document.getElementById('btnIngresar'),
    saludoUsuario = document.getElementById('saludoUsuario');
btnlogout = document.getElementById('btnLogout'),
    btnCalcularNuevo = document.getElementById('btnCalcularNuevo'),
    divMain = document.getElementById('divMain'),
    divFormularioIngresoEntrada = document.getElementById('divFormularioIngresoEntrada');
pesoNuevo = document.getElementById('pesoNuevo'),
    alturaNuevo = document.getElementById('alturaNuevo'),
    edadNuevo = document.getElementById('edadNuevo'),
    sexoNuevo = document.getElementById('sexoNuevo'),
    actividadNuevo = document.getElementById('actividadNuevo');

let login = false;

let estadoFisico = JSON.parse(localStorage.getItem("historial")) || [];
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let nextID = usuarios.length + 1;
let currentUser;

fetch("./datos.json")
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach(e => {
            textoInformativo.innerHTML = `<p>${e.imc} ${e.caldia} ${e.grasa} ${e.agua}</p>`;
        });;
    });

let url = './datos.json';
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        imcFetch.innerHTML = `<span>${data[i].imc} </span>`;
        caldiaFetch.innerHTML = `<span>${data[i].caldia} </span>`;
        grasaFetch.innerHTML = `<span>${data[i].grasa} </span>`;
        aguaFetch.innerHTML = `<span>${data[i].agua} </span>`;

    }
}

// constructor de usuarios
class Usuario {
    constructor(email, pass, nombre, id, historial) {
        this.email = email;
        this.pass = pass;
        this.nombre = nombre;
        this.id = id;
        this.historial = historial;
    }
}
// crea usuario nuevo
function crearUser(email, pass, nombre, id) {
    email = email.value;
    pass = pass.value;
    nombre = nombre.value;
    id = nextID;
    historial = [];
    return new Usuario(email, pass, nombre, id, historial);
}

// chequea si hay un usario logueado
function checkLogin(login) {

    if (login == true) {

        divMain.classList.add("displayNone");
        btnCerrarSesion.classList.remove("displayNone");

    }
    else {
        btnlogout.classList.remove("displayNone");
    }
}

// Calcula el Indice de masa corporal.
function calculaIMC(kg, cm) {
    let alt = (cm / 100);
    let imc = kg / (Math.pow(alt, 2));
    return imc;
}

// Calcula taza de metabolismo basal
function calculaMetabolismoBasal(sexo, peso, altura, edad) {
    let tazaMetabolismo;
    if (sexo === "HOMBRE") {
        tazaMetabolismo = (66 + (13.7 * peso) + (5 * altura) - (6.8 * edad));
        return tazaMetabolismo;
    } else {
        tazaMetabolismo = (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * edad));
        return tazaMetabolismo;
    }
}

// Calcula gasto total energetico.
function CalculaGastoTotalEnergetico(tazaMetabolismo, coheficienteActividad) {
    let gte = tazaMetabolismo * coheficienteActividad;
    return gte;
}

// Calcula el agua necesaria por dia
function calculaAguaNecesaria(peso) {
    let aguaPorDia = (peso * 0.33) / 10;
    return aguaPorDia;
}

// calcula grasa corporal
function calcularGrasaCorporal(indiceCorporal, edad, sexo) {
    let grasaCorporal;
    if (sexo === "HOMBRE") {
        grasaCorporal = (1.2 * indiceCorporal) + (0.23 * edad) - 10.8 - 5.4;
    } else {
        grasaCorporal = (1.2 * indiceCorporal) + (0.23 * edad) - 5.4;
    }
    return grasaCorporal.toFixed(2);
}

// agrega resultados al html
function resultadoHTML(estadoFisico) {

    let html = "";
    resultado.innerHTML = "";
    estadoFisico.forEach(element => {

        html = `<div class="caja-resultado flex flex-column">  <h3> Tu IMC es de: <strong>${element.indiceCorporal}</strong> % </h3> 
    <div> <h3> Tu Metabolismo Basal es de: <strong> ${element.metabolismoBasal}</strong> Kcal </h3> </div>
    <div> <h3> Calorías necesarias por día: <strong> ${element.coheficienteActividad}</strong> Kcal </h3>  </div>
    <div> <h3> Tu Indice de grasa corporal es de: <strong>${element.indiceGrasaCorporal}</strong> % </h3>  </div>
    <div> <h3> Agua necesaria por dia: <strong>${element.aguaPorDia} lts </strong></h3> </div>
     `;
        resultado.innerHTML += html;
    });;
}

function nuevaEntradaHTML(historial) {
    let posicion = (historial.length - 1);
    formNuevo.classList.remove('displayNone');
    btnCalcularNuevo.classList.remove('displayNone');


};;



// carga los datos de los inputs de un usario nuevo
function cargaDatos(peso, altura, edad, sexo) {
    peso = inputPeso.value;
    altura = inputAltura.value;
    edad = inputEdad.value;
    sexo = inputSexo.value;
    indiceCorporal = calculaIMC(peso, altura).toFixed(2);
    metabolismoBasal = parseInt(calculaMetabolismoBasal(sexo, peso, altura, edad));
    coheficienteActividad = parseInt(CalculaGastoTotalEnergetico(metabolismoBasal, inputActividad.value));
    indiceGrasaCorporal = calcularGrasaCorporal(indiceCorporal, edad, sexo);
    aguaPorDia = calculaAguaNecesaria(peso).toFixed(1);
    return new FisicoUsuario(peso, altura, edad, sexo, indiceCorporal, metabolismoBasal, coheficienteActividad, indiceGrasaCorporal, aguaPorDia);
}

// carga los datos de los inputs de un usario 
function cargaDatosNuevo(peso, altura, edad, sexo) {
    peso = pesoNuevo.value;
    altura = alturaNuevo.value;
    edad = edadNuevo.value;
    sexo = sexoNuevo.value;
    indiceCorporal = calculaIMC(peso, altura).toFixed(2);
    metabolismoBasal = parseInt(calculaMetabolismoBasal(sexo, peso, altura, edad));
    coheficienteActividad = parseInt(CalculaGastoTotalEnergetico(metabolismoBasal, actividadNuevo.value));
    indiceGrasaCorporal = calcularGrasaCorporal(indiceCorporal, edad, sexo);
    aguaPorDia = calculaAguaNecesaria(peso).toFixed(1);
    return new FisicoUsuario(peso, altura, edad, sexo, indiceCorporal, metabolismoBasal, coheficienteActividad, indiceGrasaCorporal, aguaPorDia);
}

//constructor usuarios
class FisicoUsuario {
    constructor(peso, altura, edad, sexo, indiceCorporal, metabolismoBasal, coheficienteActividad, indiceGrasaCorporal, aguaPorDia) {
        this.peso = peso;
        this.altura = altura;
        this.edad = edad;
        this.sexo = sexo;
        this.indiceCorporal = indiceCorporal;
        this.metabolismoBasal = metabolismoBasal;
        this.coheficienteActividad = coheficienteActividad;
        this.indiceGrasaCorporal = indiceGrasaCorporal;
        this.aguaPorDia = aguaPorDia;
    }
}




btnNuevoUsuario.addEventListener("click", () => {
    crearUsuario.classList.remove('displayNone');
    loginUsuario.classList.add('displayNone');
})

btnLogin.addEventListener("click", () => {
    loginUsuario.classList.remove('displayNone');
    crearUsuario.classList.add('displayNone');
})

btnIngresar.addEventListener('click', () => {
    usuarios.find(usuarios => {

        if (usuarios.email === logemail.value & usuarios.pass === logpass.value) {
            currentUser = usuarios.id;
            login = true;
            console.log("usuario encontrado:", usuarios.pass);
            loginUsuario.classList.add('displayNone');
            checkLogin(login);
            saludoUsuario.innerHTML = `Hola, ${usuarios.nombre}`;
            resultadoHTML(usuarios.historial);
            nuevaEntradaHTML(usuarios.historial);
            btnCalcularNuevo.classList.remove('displayNone');
            textoInformativo.classList.remove('displayNone');
        } else {
            console.log('Usuario o contraseña incorrectos');

        }
    })
    if (login === false) {
        Swal.fire({
            icon: 'error',
            title: `No se pudo iniciar sesión`,
            text: 'Usuario o contraseña incorrectos'
        });
    };
});

btnCrearUsuario.addEventListener("click", () => {

    const usuario = crearUser(email, pass, nombre);
    if (email.value != '' & pass.value != '' & nombre.value != '') {

        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        currentUser = usuario.id;
        crearUsuario.classList.add('displayNone');

        Swal.fire({
            icon: 'success',
            title: `Felicitaciones ${nombre.value} Usuario creado correctamente`,
            text: 'Ahora vamos a tomar tus datos para calcular tu estado fisico'
        });
        cardPeso.classList.remove('displayNone')
        nextPeso.addEventListener("click", () => {
            cardPeso.classList.add('displayNone');
            cardAltura.classList.remove('displayNone')
        })
        nextAltura.addEventListener("click", () => {
            cardAltura.classList.add('displayNone');
            cardEdad.classList.remove('displayNone')
        })
        nextEdad.addEventListener("click", () => {
            cardEdad.classList.add('displayNone');
            cardSexo.classList.remove('displayNone')
        })
        nextSexo.addEventListener("click", () => {
            cardSexo.classList.add('displayNone');
            cardActividad.classList.remove('displayNone')
        })

    }
    else {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Para poder crear un usuario debes completar todos los campos'
        })
    }
})

btnCalcular.addEventListener("click", () => {
    cardActividad.classList.add('displayNone')
    const datos = cargaDatos(peso, altura, edad, sexo);
    if (peso.value != '' & altura.value != '' & edad.value != '') {

        estadoFisico.push(datos);
        usuarios[currentUser - 1].historial.push(datos);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        resultadoHTML(estadoFisico);
        estadoFisico = [];
        form.reset();
        login = true;
        checkLogin(login);
        saludoUsuario.innerHTML = `Hola, ${usuarios[currentUser - 1].nombre}`;
        nuevaEntradaHTML(usuarios[currentUser - 1].historial);
        textoInformativo.classList.remove('displayNone');

    }

    else {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Para poder calcular tu estado físico debes completar todos los campos'
        })
    }
})


btnCerrarSesion.addEventListener("click", () => {
    location.reload();
})


btnCalcularNuevo.addEventListener("click", () => {
    const datosNuevos = cargaDatosNuevo(peso, altura, edad, sexo);
    if (pesoNuevo.value != '' & alturaNuevo.value != '' & edadNuevo.value != '') {

        estadoFisico.unshift(datosNuevos);
        usuarios[currentUser - 1].historial.unshift(datosNuevos);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        resultadoHTML(usuarios[currentUser - 1].historial);
        form.reset();
    }

    else {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Para poder calcular tu estado físico debes completar todos los campos'
        })
    }

})