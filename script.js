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

function removerBase() {
    valor = ''
}

// Pegar base escolhida no campo esquerdo



document.getElementById("bin01").addEventListener("click", function(event) {
    document.querySelector(".input_translate01").value = "";
    div_translate02.innerHTML = '';
    removerSelecao();
    event.target.classList.add("selecionado");
    baseEntrada = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(baseEntrada);
});

document.getElementById("dec01").addEventListener("click", function(event) {
    document.querySelector(".input_translate01").value = "";
    div_translate02.innerHTML = '';
    removerSelecao();
    event.target.classList.add("selecionado");
    baseEntrada = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(baseEntrada); 
});


document.getElementById("octal01").addEventListener("click", function(event) {
    document.querySelector(".input_translate01").value = "";
    div_translate02.innerHTML = '';
    event.target.classList.add("selecionado");
    baseEntrada = event.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    console.log(baseEntrada); 
});


document.getElementById("hex01").addEventListener("click", function(event) {

    document.querySelector(".input_translate01").value = "";
    div_translate02.innerHTML = '';
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



document.querySelector(".input_translate01").addEventListener("input", (event) => {
    valor = event.target.value
    console.log(valor);
    
});




document.getElementById("icon").addEventListener("click", function(event) {
    
    converterValor(valor)
    
});

document.getElementById("iconDown").addEventListener("click", function(event) {
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

function validarEntrada(event) {
    if (baseEntrada === 'binario') {
        return SomenteNumeroBinario(event);
    } else if (baseEntrada === 'decimal') {
        return SomenteNumeroDecimal(event);
    } else if (baseEntrada === 'octal') {
        return SomenteNumeroOctal(event);
    } else if (baseEntrada === 'hexadecimal') {
        return SomenteNumeroHexadecimal(event);
    }
    return false; 
}

function SomenteNumeroBinario(event){
    var tecla=(window.event)?event.keyCode:e.which;
    if((tecla==48) || (tecla==49)) return true;
    else {
        return false
    }
}

function SomenteNumeroDecimal(event) {
    var tecla = event.which || event.keyCode;
    if ((tecla >= 48 && tecla <= 57)) {
        return true;
    } else {
        return false;
    }

}

function SomenteNumeroOctal(event) {
    var tecla = event.which || event.keyCode;
    if (tecla >= 48 && tecla <= 55) { // 0 a 7
        return true;
    } else {
        return false;
    }
}


function SomenteNumeroHexadecimal(event) {
    var tecla = event.which || event.keyCode;
    if ((tecla >= 48 && tecla <= 57) || (tecla >= 65 && tecla <= 70) || (tecla >= 97 && tecla <= 102)) {
        return true;
    } else {
        return false;
    }

}