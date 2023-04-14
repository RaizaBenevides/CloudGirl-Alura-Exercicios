var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function() {
        
        var erroAjax = document.querySelector("#erro-ajax");
        
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });
    
    xhr.send();
    });

/*
O objeto XMLHttpRequest é quem é responsável por fazer requisições HTTP assíncronas com Javascript. Apesar de ter o XML no nome hoje em dia este objeto pode trafegar diversos outros tipos de dados além do XML, este nome só se manteve devido a um legado histórico.
E para instanciar um novo Objeto XMLHttpRequest devemos utilizar a sintaxe com a palavrinha new :
    var xhr = new XMLHttpRequest();

XHR é uma abreviação para "XMLHttpRequest", que é uma interface fornecida pelos navegadores web que permite fazer solicitações HTTP (por exemplo, obter dados de uma API) de uma página da web sem precisar recarregar a página completa.
Através do objeto XMLHttpRequest, é possível enviar solicitações HTTP para um servidor web e receber respostas em diferentes formatos, como texto, JSON ou XML. Essa funcionalidade é frequentemente usada em aplicações web para carregar dados dinamicamente, sem precisar recarregar a página inteira.
O XHR foi originalmente projetado para trabalhar com dados no formato XML, mas agora é comumente usado para trabalhar com outros formatos também. O nome "XMLHttpRequest" foi mantido por razões históricas, mas o objeto agora é usado principalmente para trabalhar com dados em JSON.

Dado que criamos o objeto abaixo:
    var xhr = new XMLHttpRequest();
Qual dos seguintes códigos configura a nossa requisição para ser do tipo POST e para o endereço www.xyz.com.br/compras ?
Dado que temos um XMLHttpRequest, precisamos configurar nossa requisição para dizer para qual servidor queremos enviá-la e também qual método HTTP devemos usar.
Fazemos isto através do método .open() , passando o método e a url :
    xhr.open("POST","www.xyz.com.br/compras");

Sobre o XMLHttpRequest:
É necessário configurar a requisição com o método .open(), com o método HTTP e o endereço do servidor para qual a requisição será feita
A requisição só é enviada após o método .send().
*/