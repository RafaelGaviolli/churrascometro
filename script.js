// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos= document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    

    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  
    let totalCerveja = cervejaPP(duracao) * adultos;
   
    let totalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    
    resultado.innerHTML =  `<p>${totalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalBebidas/2000)} Pet's 2l de Bebidas</p>`
    
}

function carnePP(duracao){
    if(duracao >=6){
        return 650;
    } else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >=6){
        return 2000;
    } else{
        return  1200;
    }
}

function bebidaPP(duracao){
    if(duracao >=6){
        return 1500;
    } else{
        return  1000;
    }
}


