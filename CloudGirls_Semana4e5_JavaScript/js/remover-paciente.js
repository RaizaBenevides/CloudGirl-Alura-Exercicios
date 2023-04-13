var pacientes = document.querySelectorAll (".paciente");

var tabela = document.querySelector("table");

/*
tabela.addEventListener ("dblclick", function (event){
    var alvoEvento = event.target; //o alvo é uma td, mas queremos eliminar a tr toda dessa td (remover o pai do alvo)
    var paiDoAlvo = alvoEvento.parentNode; //TR = paciente = remover
    paiDoAlvo.remove();
})

// OU, para simplificar:
tabela.addEventListener ("dblclick", function (event){
    event.target.parentNode.remove();
})
*/

tabela.addEventListener ("dblclick", function (event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout (function(){
        event.target.parentNode.remove();
    }, 500); //500 milessegundos (tempo que colocamos de transição lá no css) //espera esse tempo para remover a tr
})


