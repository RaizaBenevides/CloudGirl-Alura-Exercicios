var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 

            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});

/*
var expressao = new RegExp(this.value, "i");
Expressão regular RegExp = para filtrar, buscar letra por letra na tabela. 
Case sensitive = é sensível às letras maiúsculas. 
Case insensitive = Não é sensível às letras maiúsculas, ou seja, busca por uma palavra independente se têm maíuscula ou não. Esse último caso é epresentado por "i"
O primeiro parâmetro de uma regex é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque).

if (!expressao.test(nome)) {
Testar se no meu nome vai ter pelo menos um pedaço que tem na minha expressão
*/