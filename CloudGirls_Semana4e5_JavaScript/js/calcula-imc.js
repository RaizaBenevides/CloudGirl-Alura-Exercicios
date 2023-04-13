var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //seleciona todos os pacientes (array)

for (var i = 0; i < pacientes.length; i++) { //paciente.length é o tamnaho da lista //percorrendo a lista
    
    var paciente = pacientes[i]; //acessando cada posição do array
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso (peso); //true ou false
    var alturaEhvalida = validaAltura (altura);

    if (!pesoEhValido) { // ! = negação (se o peso não é válido) //se a variável pesoEhValido for false, entra nesse if
        console.log("Peso inválido");
        var pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        //paciente.style.color = "red"; //forma de mudar a cor da fonte sem ser pelo arquivo css
        //paciente.style.backgroundColor = "red"; //forma de mudar a cor do fundo sem ser pelo arquivo css
        paciente.classList.add("paciente-invalido"); //criando classe no js, para mudarmos a cor pelo arquivo css
    }

    if (!alturaEhvalida) {
        console.log("Altura inválida");
        var alturaEhvalida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido"); //criando classe no js, para mudarmos a cor no arquivo css
    }

    if (pesoEhValido && alturaEhvalida) {
        var imc = calculaImc (peso,altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

//colocamos o código do formulário em um arquivo separado chamado form.js

function validaPeso (peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura (altura) {
    if (altura >=0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc (peso,altura) {
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2); //imc com 2 casas decimais //toFixed = limita o número de casas decimais;
}

/*
titulo.addEventListener("click", mostraMensagem); //escutador de eventos //quando clica, executa a função //titulo é a variável "aparecida nutricionista"

function mostraMensagem() {
    console.log("Olá, eu fui clicado!");
}

Outra forma seria com função anônima:

titulo.addEventListener("click", function(){
    console.log("Olha só, posso chamar atravez de uma função anônima!");
})
*/

/*
Quando selecionamos um elemento com as funções de querySelector, elas nos devolvem um objeto que 
tem algumas propriedades especiais, que falam sobre as características do HTML selecionado. 
Uma dessas propriedades é a .classList, que como o nome indica nos mostras classes que aquele HTML tem.

Quando queremos manipular as classes de um elemento, devemos acessar sua propriedade .classList, 
e se queremos adicionar uma classe, iremos utilizar a função .add()

A função responsável por adicionar uma classe é a função .add(), que recebe como parâmetro o nome da 
classe que queremos adicionar! Só devemos lembrar de chamar esta função depois de acessarmos a propriedade 
.classList, que contêm as classes do HTML selecionado.

A função responsável por criar elementos no Javascript é a createElement().Com ela passamos o nome da tag 
que queremos criar e ela nos retorna um objeto HTML que pode ser alterado com as propriedades do Javascript, 
como a .textContent e a .classList.

Associamos uma função ao evento click. Toda vez que o elemento for clicado, em nosso caso, um botão, a 
função será chamada. A vantagem do addEventListener é que podemos executar mais de uma função para o mesmo 
evento. Ex:
    botao.addEventListener('click', botaoHandler);
    botao.addEventListener('click', outroHandler);
A primeira função adicionada à fila será executada e a segunda em seguida. No entanto, quando 
desejamos executar apenas uma única função por evento, podemos escrever o código da seguinte forma usando 
um event shortcut:
    botao.onclick = botaoHandler;
Para cada evento existente no JavaScript, há a propriedade on + nomeDoEvent. No caso, temos onclick para 
o evento click, onmouseover para o evento mouseover e assim por diante. Nesse caso, a função que desejamos 
executar é atribuída direto na propriedade. No entanto, essa forma tem uma limitação, como estamos guardando 
a função em uma propriedade, se adicionarmos outra função, essa sobrescreverá a anterior:
    botao.onclick = botaoHandler;
    botao.onclick = outroHandler; // substitui botaoHandler
Sendo assim, a boa prática é trabalhar com addEventListener() mesmo que você só queira adicionar um única 
função para ser executada quando o evento ocorrer. Porque mais tarde, se outro desenvolvedor quiser 
adicionar mais uma função para também ser chamada quando aquele evento ocorrer, não há risco de substituir 
a função existente pela adicionada.
*/

