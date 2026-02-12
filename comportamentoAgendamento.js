let botoesApagar;

window.addEventListener("load",principal);

function principal(){

    atualizahoras();
    let paginaToda = document.body;
    paginaToda.addEventListener("click",fecharSidebar);    
    defineEventHandlersHTML();
    mostrarAgendamentos();

}

function defineEventHandlersHTML(){

    const botaoAdd = document.getElementById("botaoAdicionar");

    document.getElementById('botaoAdicionar').addEventListener('click', function() {
        document.getElementById('modal-agendamento').style.display = 'block';
    });
    
    document.getElementsByClassName('close')[0].addEventListener('click', function() {
        document.getElementById('modal-agendamento').style.display = 'none';
    });

    document.getElementById('confirmarNome').addEventListener('click', function() {
        const nomeAgendamento = document.getElementById('nomeAgendamentoInput').value;
    
        if (nomeAgendamento) {
            localStorage.setItem("novoAgendamento", nomeAgendamento);
            document.getElementById('modal-agendamento').style.display = 'none';
            window.location.href = "AdicionarAgendamento.html";
        } else {
            alert("Nome do agendamento não fornecido!");
        }
    });

}




function atualizahoras(){
    let data = new Date();
    var tempo = document.getElementById("horas");
    let horas = data.getHours();
    let minutos = data.getMinutes();
    if(minutos<10){
        minutos = "0" + minutos;
    }
        
    tempo.innerHTML = horas +":"+minutos;
    setTimeout("atualizahoras()",1000)
}

function toggleSidebar(event) {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('expanded');

    let estaExpandida = sidebar.classList.contains('expanded');
    if (estaExpandida) {
        event.preventDefault()
    }

  }

function fecharSidebar(event){

    let sidebar = document.getElementById("sidebar");
    if (sidebar != null){
        let estaExpandida = sidebar.classList.contains("expanded");
        
        if (estaExpandida && !sidebar.contains(event.target)){
            sidebar.classList.remove("expanded")
        }
    
    }
}

function botaoAdicionar(){
    window.location.href = "AdicionarAgendamento.html";
}

function submissaoForm(){

    console.log("submeti o form")
}

function mostrarAgendamentos(){

    const agendamentosSalvos = localStorage.getItem("agendamentos");
    const listaAgendamentos = document.querySelector('.lista-agendamentos');
    let btnEditar = document.getElementById("btnEditarAgendamento");

        if (agendamentosSalvos) {
            const agendamentos = JSON.parse(agendamentosSalvos);
            listaAgendamentos.innerHTML = '';
    
            agendamentos.forEach(function(agendamento,index) {

                const novoItem = document.createElement('li');
                let variavelSup = agendamentos[index];
                let variavelSup2 = String(variavelSup).split(",");
                novoItem.textContent = variavelSup2[0];
    
                const btnDetalhes = document.createElement('button');
                btnDetalhes.textContent = 'Detalhes';
                btnDetalhes.classList.add('btn-editar');
                btnDetalhes.onclick = function() {

                    console.log(index)
                    detalhesAgendamento(index); 

                    btnEditar.onclick = function() {
                        
                        let nomeAgendamentoEditarSuporte = agendamentos[index][0].split(",");
                        let nomeAgendamentoEditar = nomeAgendamentoEditarSuporte[0];
                        localStorage.setItem("novoAgendamento", nomeAgendamentoEditar);
                        let agendamentosEditar = localStorage.getItem("agendamentos");
                        agendamentosEditar = JSON.parse(agendamentosEditar);
                        agendamentosEditar.splice(index,1);

                        let listaNovosAgendamentos = agendamentosEditar;
                        //localStorage.setItem("agendamentos", JSON.stringify(agendamentosEditar2));

                        localStorage.setItem("agendamentos", JSON.stringify(listaNovosAgendamentos))

                        window.location.href = "AdicionarAgendamento.html";
                        

                    }
                    
                };
    
                const btnApagar = document.createElement('button');
                btnApagar.textContent = 'Apagar';
                btnApagar.classList.add('btn-apagar');
                btnApagar.onclick = function() {
                    document.getElementById('areyousure').style.display='block'

                    document.getElementById('btnsim').onclick = function() {
                        
                        apagarAgendamento(index);
                        document.getElementById('areyousure').style.display = 'none';
                    };
                
                    document.getElementById('btnnao').onclick = function() {
                        document.getElementById('areyousure').style.display = 'none';
                    };
                };
    
                novoItem.appendChild(btnDetalhes);
                novoItem.appendChild(btnApagar);
                listaAgendamentos.appendChild(novoItem);
            });
        } else {
            listaAgendamentos.innerHTML = '';
        }

}

function apagarAgendamento(indice){

    let agendamentosGuardados = localStorage.getItem("agendamentos");
    if (agendamentosGuardados) {
        let agendamentos = JSON.parse(agendamentosGuardados);
        agendamentos.splice(indice, 1);

        localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

        mostrarAgendamentos();
    }
}

function detalhesAgendamento(indice){
    let agendamentoSelecionadoString = localStorage.getItem("agendamentos");
    let agendamentoSelecionadoLista = JSON.parse(agendamentoSelecionadoString);
    let agendamentoSelecionadoLista2 = agendamentoSelecionadoLista[indice][0]
    let agendamentoSelecionadoLista3 = agendamentoSelecionadoLista2.split(',');

    let caixaInfoAgendamento = document.getElementById("caixaDetalhesAgendamento");
    let detalhesAgendamentoCaixa = document.getElementById("detalhes-agendamento");

    detalhesAgendamentoCaixa.innerHTML = ""

    let descricoes = ["Titulo", "Divisão", "Equipamento", "Dias da semana", "Hora de ligar", "Hora de desligar"];

    let supVariable = 3 + parseInt(agendamentoSelecionadoLista3[agendamentoSelecionadoLista3.length -1]);

    console.log(supVariable);

    agendamentoSelecionadoLista3.forEach((info,index) => {


        if (index === 0) {
            tituloAgendamento.textContent = info;
        } 
        
        else {
        let novoParagrafo = document.createElement('p');
        
        if(String(descricoes[index])== "Dias da semana"){
            console.log("Boas")
            let elementosParaJuntar = agendamentoSelecionadoLista3.slice(3, supVariable);
            let textoJunto = elementosParaJuntar.join(", ");
            console.log(textoJunto);
            novoParagrafo.textContent = String(descricoes[index]) + " : " + textoJunto;
            detalhesAgendamentoCaixa.appendChild(novoParagrafo);
            agendamentoSelecionadoLista3.splice(3, supVariable - 4);
            agendamentoSelecionadoLista3.pop();
        }

        else{
            novoParagrafo.textContent = String(descricoes[index]) + " : " + String(info) ;
            detalhesAgendamentoCaixa.appendChild(novoParagrafo);
        }

        
        }
    });

    caixaInfoAgendamento.style.display = 'block';

    let botaoFecharCaixa = document.getElementById("botaoClose");
    botaoFecharCaixa.onclick = function() {
        caixaInfoAgendamento.style.display = 'none';
      };



    console.log(agendamentoSelecionadoLista3);

    



}