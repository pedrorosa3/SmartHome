window.addEventListener("load",principal);

function principal(){

    atualizahoras();
    defineEventHandlersHTML();

    let agendamentosExistente = localStorage.getItem("agendamentos")

    if (!agendamentosExistente){
        agendamentosExistente = [];
    }

    else{
        agendamentosExistente = JSON.parse(agendamentosExistente);
    }
}

function defineEventHandlersHTML(){

    const botaoSubmeterForm = document.getElementById("botaoSubmeter");

    
    botaoSubmeterForm.addEventListener("click",submissaoForm);
    

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

function submissaoForm(){

    let diasTotais = document.querySelectorAll('input[type="checkbox"][name="dia"]');
    let diasSelecionados = [];
    let horaLigar = document.getElementById("horaLigar");
    let horaDesligar = document.getElementById("horaDesligar");
    let dispositivoSelecionado = document.getElementById("dispositivo").value;
    let nomeAgendamento = localStorage.getItem("novoAgendamento");
    let divisaoSelecionada = document.getElementById("divisaoCasa");

    
    console.log(nomeAgendamento)
    

    diasTotais.forEach(function(dia) {
        if (dia.checked) {
            diasSelecionados.push(dia.value);
        }
    });

    let lista_agenda=[nomeAgendamento,divisaoSelecionada.value,dispositivoSelecionado,diasSelecionados,horaLigar.value,horaDesligar.value,diasSelecionados.length]
    localStorage.setItem("detalhes-agendamento", lista_agenda);
    //VERIFICAR QUE NAO FALTAM ELEMENTOS A SEREM PREENCHIDOS NO FORM:

    if(diasSelecionados.length > 0 && horaLigar.value != "" && horaDesligar.value != ""){

        if(dispositivoSelecionado == "Ar condicionado"){



            //METER HREF PARA UMA PAGINA QUE DEFINE A TEMPERATURA E VELOCIDADE DO A/C. ESTA PAGINA É SEM BOTAO DE LIGAR/DESLIGAR.
            //DEPOIS DISSO DEFINIDO, TRATAR DE QUE APAREÇA NA LISTA DE ROTINAS EXISTENTES O NOME DADO PELO UTILIZADOR, ASSIM COMO O RESTANTE DAS INFOS.
            
            window.location.href = "ac-agendamentos.html";

        }

        if(dispositivoSelecionado == "Estores"){
            window.location.href = "estores-agendamentos.html";
            console.log("Selecionou os estores")
        }

        if(dispositivoSelecionado == "Luzes"){
            window.location.href = "l-agendamentos.html";
            console.log("Selecionou as luzes")
        }

    }

    else{

    }




}