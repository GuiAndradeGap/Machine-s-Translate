let baseEntrada = 'binario';
let baseSaida = 'decimal';
let valor


// Pegar base escolhida no campo esquerdo

document.getElementById("bin01").addEventListener("click", function(event) {
    baseEntrada = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(baseEntrada); 
});

document.getElementById("dec01").addEventListener("click", function(event) {
    baseEntrada = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    console.log(baseEntrada); 
});


document.getElementById("octal01").addEventListener("click", function(event) {
    baseEntrada = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    console.log(baseEntrada); 
});


document.getElementById("hex01").addEventListener("click", function(event) {
    baseEntrada = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    console.log(baseEntrada); 
});

// Pegar base escolhida no campo direito

document.getElementById("bin02").addEventListener("click", function(event) {
    baseSaida = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    console.log(baseSaida ); 
});

document.getElementById("dec02").addEventListener("click", function(event) {
    baseSaida = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    console.log(baseSaida); 
});


document.getElementById("octal02").addEventListener("click", function(event) {
    baseSaida = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    console.log(baseSaida ); 
});


document.getElementById("hex02").addEventListener("click", function(event) {
    baseSaida = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    console.log(baseSaida); 
});



document.querySelector(".input_translate01").addEventListener("change", (event) => {
    valor = event.target.value
    console.log(valor);
});

document.getElementById("icon").addEventListener("click", function(event) {
    converterValor(valor)
});

function converterValor(valor){

    let decimal

    if(baseEntrada == 'binario'){
        decimal = parseInt(valor, 2);
         bin01.style.color = "red";
    }
    else if(baseEntrada == 'decimal'){
        decimal = parseInt(valor, 10);
    }
    else if(baseEntrada == 'octal'){
        decimal = parseInt(valor, 8);
    }
    else {
        decimal = parseInt(valor, 16);
    }

    let resultado;

    if(baseSaida == 'binario'){
        resultado = decimal.toString(2);
    }
    else if(baseSaida == 'decimal'){
        resultado = decimal
    }
    else if(baseSaida  == 'octal'){
        resultado = decimal.toString(8);
    }
    else {
        resultado = decimal.toString(16);
    }

    console.log(resultado);

    div_translate02.innerHTML = `O resultado é: ${resultado}`
}
