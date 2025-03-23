let baseEntrada = '';
let baseSaida = '';
let valor



function removerSelecao() {
    document.getElementById("bin01").classList.remove("selecionado");
    document.getElementById("dec01").classList.remove("selecionado");
    document.getElementById("octal01").classList.remove("selecionado");
    document.getElementById("hex01").classList.remove("selecionado");

}

function removerSelecaoSaida() {
    document.getElementById("bin02").classList.remove("selecionado2");
    document.getElementById("dec02").classList.remove("selecionado2");
    document.getElementById("octal02").classList.remove("selecionado2");
    document.getElementById("hex02").classList.remove("selecionado2");
}


// Pegar base escolhida no campo esquerdo



document.getElementById("bin01").addEventListener("click", function(event) {
    removerSelecao();
    event.target.classList.add("selecionado");
    baseEntrada = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(baseEntrada);
});

document.getElementById("dec01").addEventListener("click", function(event) {
    removerSelecao();
    event.target.classList.add("selecionado");
    baseEntrada = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(baseEntrada); 
});


document.getElementById("octal01").addEventListener("click", function(event) {
    removerSelecao();
    event.target.classList.add("selecionado");
    baseEntrada = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    console.log(baseEntrada); 
});


document.getElementById("hex01").addEventListener("click", function(event) {
    removerSelecao();
    event.target.classList.add("selecionado");
    baseEntrada = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(baseEntrada); 
});

// Pegar base escolhida no campo direito

document.getElementById("bin02").addEventListener("click", function(event) {
    removerSelecaoSaida();
    event.target.classList.add("selecionado2");
    baseSaida = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(baseSaida ); 
});

document.getElementById("dec02").addEventListener("click", function(event) {
    removerSelecaoSaida();
    event.target.classList.add("selecionado2");
    baseSaida = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(baseSaida); 
});


document.getElementById("octal02").addEventListener("click", function(event) {
    removerSelecaoSaida();
    event.target.classList.add("selecionado2");
    baseSaida = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(baseSaida ); 
});


document.getElementById("hex02").addEventListener("click", function(event) {
    removerSelecaoSaida();
    event.target.classList.add("selecionado2");
    baseSaida = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(baseSaida); 
});



document.querySelector(".input_translate01").addEventListener("keydown", (event) => {
    valor = event.target.value
    console.log(valor);
   

    if (event.key === "Backspace" || event.key === "Delete" || event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Tab") {
        return; 
    }

    if (baseEntrada == 'binario' ) {
        
        if (!/^[01]$/.test(event.key)) {
            event.preventDefault();  
        }
    }
    if (baseEntrada == 'octal') {
        
        if (!/^[01234567]$/.test(event.key)) {
            event.preventDefault();
        }
    }

});




document.getElementById("icon").addEventListener("click", function(event) {
    converterValor(valor)
});

function converterValor(valor){

    let decimal

    if(baseEntrada == 'binario'){
        decimal = parseInt(valor, 2);
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

    div_translate02.innerHTML = `${resultado}`
}
