let inputResultado = document.getElementById("visor");

window.addEventListener("load", function () {
    eventoDeEntrada();
})

function funcEntradaNum() {
  
    if (isNaN(inputResultado.value)) {
        inputResultado.value = event.target.textContent;
  
    } else {
        
        if (inputResultado.value === 0) {
            inputResultado.value = event.target.textContent;
        } else {
            inputResultado.value += event.target.textContent;
        }
    }
}

function eventoDeEntrada() {
    
    document.getElementById("button0").addEventListener("click", funcEntradaNum);
    document.getElementById("button1").addEventListener("click", funcEntradaNum);
    document.getElementById("button2").addEventListener("click", funcEntradaNum);
    document.getElementById("button3").addEventListener("click", funcEntradaNum);
    document.getElementById("button4").addEventListener("click", funcEntradaNum);
    document.getElementById("button5").addEventListener("click", funcEntradaNum);
    document.getElementById("button6").addEventListener("click", funcEntradaNum);
    document.getElementById("button7").addEventListener("click", funcEntradaNum);
    document.getElementById("button8").addEventListener("click", funcEntradaNum);
    document.getElementById("button9").addEventListener("click", funcEntradaNum);
    
    document.getElementById("buttonPonto").addEventListener("click", funcPonto);
    document.getElementById("buttonMaisOuMenos").addEventListener("click", funcNeg);
    
    document.getElementById("buttonSoma").addEventListener("click", funcSoma);
    document.getElementById("buttonSubtrair").addEventListener("click", funcSubtracao);
    document.getElementById("buttonMultiplicar").addEventListener("click", funcMultiplicacao);
    document.getElementById("buttonDividir").addEventListener("click", funcDivisao);
    
    document.getElementById("buttonCE").addEventListener("click", funcLimparEntrada);
    document.getElementById("buttonC").addEventListener("click", funcLimparTudo);  
    
    document.getElementById("buttonOk").addEventListener("click", funcIgual);

}

let calculo = {
    num1: 0,
    num2: 0,
    op: null
}

function funcSoma(){
    num1 = parseFloat(inputResultado.value);
    op=1;
    inputResultado.value = "";
}
function funcSubtracao(){
    num1 = parseFloat(inputResultado.value);
    op=2;
    inputResultado.value = "";
}
function funcMultiplicacao(){
    num1 = parseFloat(inputResultado.value);
    op=3;
    inputResultado.value = "";
}
function funcDivisao(){
    num1 = parseFloat(inputResultado.value);
    op=4;
    inputResultado.value = "";
}

function funcPonto(){
    if(inputResultado.value === "" || isNaN(inputResultado.value)){
        inputResultado.value = "0.";
    }else if(!inputResultado.value.includes(".")){
        inputResultado.value = inputResultado.value + ".";
    }
}

function funcNeg(){
    if(inputResultado.value < 0){
        positivo = 2*inputResultado.value ;
        inputResultado.value = inputResultado.value - positivo;
    }else if(inputResultado.value > 0){
        inputResultado.value = "-"+inputResultado.value;
    }
}
function funcLimparTudo(){
    inputResultado.value = "";
    op = null;
    num1 = 0;
    num2 = 0;
}
function funcLimparEntrada(){
    inputResultado.value = num1;
    calculo.op = 0;
}

function funcIgual(){
    if (op == 1){
        num2 = parseFloat(inputResultado.value);
        resultado = num1 + num2;
        inputResultado.value = resultado;
        op=null;
    }
    if (op == 2){
            num2 = parseFloat(inputResultado.value);

        resultado = num1 - num2;
        inputResultado.value = resultado;
        op=null;

    }
    if (op == 3){
            num2 = parseFloat(inputResultado.value);

        resultado = num1 * num2;
        inputResultado.value = resultado;
        op=null;

    }
    if (op == 4){
            num2 = parseFloat(inputResultado.value);

        resultado = num1 / num2;
        inputResultado.value = resultado;
        op=null;

    }
}