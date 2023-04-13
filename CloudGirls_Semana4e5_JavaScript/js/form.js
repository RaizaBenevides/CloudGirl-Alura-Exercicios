
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    
    event.preventDefault(); //previne o comportamento padrão do botão que é enviar o formulário e recarregar a página
    
    //extraindo informações do paciente do form:
    var form = document.querySelector("#form-adiciona"); //selecionando o form html no mundo do js
    var paciente = obtemPacienteDoFormulario (form);

    //criando a tr e a td pra cada paciente:
    var pacienteTr = montaTr(paciente);

    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr); //levamos a tr que criamos para a tabela que já existia no html

    form.reset (); //para limpar os campos de preenchimento após apertar o botão
});

function obtemPacienteDoFormulario (form) {
    
    var paciente = { //criando um objeto. Um objeto possui várias propriedades
        nome: form.nome.value, //acessando os valores colocados no formulário 
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr (paciente) {
        
        var pacienteTr = document.createElement ("tr"); //criar uma nova tr na tabela (de acordo com o que preenchemos nos botões)
        pacienteTr.classList.add ("paciente"); //adicionando a classe paciente ao tr criado //no arquivo html vemos que existe essa classe para todas as trs

        /* Maneira mais trabalhosa (sem o montaTd abaixo):
        var nomeTd = document.createElement ("td"); //criando as tds
        nomeTd.classList.add ("info-nome"); //adicionando uma classe a td criada //no arquivo html vemos que existe essa classe para todas as tds
        nomeTd.textContent = paciente.nome; //colocando os valores dentro do td //preenchendo os tds com os valores que trouxemos do form //paciente.nome = acessando o objeto
        */

        //colocando os valores dentro da tabela: //tiramos as variáveis criadas e já colocamos diretamente dentro dos parênteses pra ficar mais enxuto visualmente
        pacienteTr.appendChild (montaTd (paciente.nome, "info-nome")); //colocar como filho //colocando as tds dentro da tr
        pacienteTr.appendChild (montaTd (paciente.peso, "info-peso"));
        pacienteTr.appendChild (montaTd (paciente.altura, "info-altura"));
        pacienteTr.appendChild (montaTd (paciente.gordura, "info-gordura"));
        pacienteTr.appendChild (montaTd (paciente.imc, "info-imc"));

        return pacienteTr;
}

function montaTd (dado, classe) {
    var td = document.createElement ("td");
    td.textContent = dado;
    td.classList.add (classe);

    return td;
}

/*
Objetos:

Utilizamos objetos no Javascript como na maioria das linguagens de programação orientadas , aonde os objetos podemos compará-los com objetos da vida real. Um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.

Para declaramos um objeto, utilizamos a sintaxe com {}, exemplo:
var xicara = {};

Só que de nada nos serve um objeto vazio, então podemos dar características a este objeto através de suas propriedades:
var xicara = {
    cor: "azul",
    peso: 125,
    tipo: "chá"
};

As propriedades de um objeto são separadas por um : do seu valor e utilizamos uma vírgula ao final de cada propriedade para separá-la da próxima. Podemos acessar as propriedades de um objeto Javascript como abaixo:
xicara.cor // azul
xicara.peso // 125
xicara.tipo // chá
xicara.modelo // undefined, este objeto não possui a propriedade modelo

*/