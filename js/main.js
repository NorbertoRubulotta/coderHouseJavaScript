
// cantidad de calorias a cosumir diariamente segun objetivo.
// sistema de turnos para nutricionista
// crear cuenta de usuario
// arrays de objetos con la informacion del usuario ( Usuario, edad, sexo, peso, altura, medida cuello, medida cintura, medida caderas si el sexo es femenino, objetivos, actividad fisica)
const form = document.getElementById('form');

const inputPeso = document.querySelector("#peso"),
    inputAltura = document.querySelector("#altura"),
    inputEdad = document.querySelector("#edad"),
    inputSexo = document.querySelector('#sexo'),
    inputActividad = document.querySelector('#actividad'),
    btnCalcular = document.querySelector("#btnCalcular"),
 resultado = document.querySelector("#resultado");
let estadoFisico = JSON.parse(localStorage.getItem("historial")) || [];


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
    html = `<div class="caja-resultado flex flex-column"> <h3> Tu IMC es de: <strong>${element.indiceCorporal} </strong> %</h3>
     <h3> Tu Metabolismo Basal es de: <strong> ${element.metabolismoBasal}</strong> Kcal </h3>
     <h3> Calorías necesarias por día: <strong> ${element.coheficienteActividad}</strong> Kcal </h3>
     <h3> Tu Indice de grasa corporal es de: <strong>${element.indiceGrasaCorporal}</strong> % </h3>
     <h3> Agua necesaria por dia: <strong>${element.aguaPorDia} lts </strong></h3>
     </div>`;
    resultado.innerHTML += html;
});
}

// carga los datos de los inputs en variables
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
// usar condicional &&
estadoFisico.length > 0 && resultadoHTML(estadoFisico);

btnCalcular.addEventListener("click", () => {
   
    const datos = cargaDatos(peso, altura, edad, sexo);
    if (peso.value != ''  & altura.value != '' & edad.value != ''){
   
    estadoFisico.push(datos);
    resultadoHTML(estadoFisico);
    localStorage.setItem("historial", JSON.stringify(estadoFisico))}
    else{ Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Para poder calcular tu estado físico debes completar todos los campos'
      })}
})


