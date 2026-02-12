

//Variáveis Globais
let sala=[];
let escritorio=[];
let cozinha=[];
let quarto=[];
let agendamentos=[];
let geral=[];
let tabela=[];




window.addEventListener("load",principal);

function principal(){
    

    document.getElementById("areyousure").style.display="none";
    atualizahoras();

    carregaStatus();
    

    airConditioner.updateStatusInicial();
    updateBotao();
    //produtos=CriarProdutos();

    //ProdutosRandom(produtos,tabela);



    
    
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


// Coisa que adicionei do AC

// Objeto para representar o ar condicionado
const airConditioner = {
    power: false, // Desligado
    temperature: 23, // Temperatura inicial de 23°C
    fanSpeed: 2, // Intensidade da ventoinha inicial: 2

    togglePower: function() {
        this.power = !this.power;
        this.updateStatus();
        updateBotao();
    },

    setTemperature: function(value) {
        this.temperature = value;
        this.updateStatus();
    },

    setFanSpeed: function(value) {
        this.fanSpeed = value;
        this.updateStatus();
    },
    updateStatusInicial: function(){
        const statusElement = document.getElementById('status');
        const temperatureElement=document.getElementById('temperature');
        const fanSpeedElement=document.getElementById('fanSpeed');
        const TemperatureSlider=document.getElementById("temperatureSlider");
        const FanSlider=document.getElementById("fanSpeedSlider");
        if(cozinha.length==0){
            console.log("entrei")
            cozinha=[["Cozinha","Desligado","23°C","2*"]]
            this.fanSpeed=2
            this.temperature=23
            TemperatureSlider.value=23
            FanSlider.value=2
            statusElement.textContent=cozinha[0][1]
            temperatureElement.textContent=cozinha[0][2]
            fanSpeedElement.textContent=cozinha[0][3]

        }
        if(cozinha[0][1]=="Ligado"){
            this.power=true;

        }
        else{
            this.power=false;

        }
        this.temperature=parseInt(cozinha[0][2].replace("°C",""))
        this.fanSpeed=parseInt(cozinha[0][3].replace("*",""))
        TemperatureSlider.value=parseInt(cozinha[0][2].replace("°C",""))
        FanSlider.value=parseInt(cozinha[0][3].replace("*",""))
        statusElement.textContent=cozinha[0][1];
        temperatureElement.textContent=cozinha[0][2];
        fanSpeedElement.textContent=cozinha[0][3];
        this.updateStatus()

    },

    updateStatus: function() {
        const statusElement = document.getElementById('status');
        const temperatureElement = document.getElementById('temperature');
        const fanSpeedElement = document.getElementById('fanSpeed');
                
        if(this.power === true){
            statusElement.innerHTML = "Ligado"
            statusElement.classList.remove("desligado");
            statusElement.classList.add("ligado");

        }
        else if (this.power === false){
            statusElement.innerHTML = "Desligado"
            statusElement.classList.remove("ligado");
            statusElement.classList.add("desligado")
        }
        
        temperatureElement.textContent = this.temperature + '°C';
        fanSpeedElement.textContent = this.fanSpeed + '*';
    },

    getFanSpeedLabel: function() {
        if (this.fanSpeed === 1){ 
            return 'Baixa';

        } 
        if (this.fanSpeed === 2){
            return 'Média';

        } 
        if (this.fanSpeed === 3){
            return 'Alta';
        } 
    }

};

// Funções para interagir com o objeto arConditioner a partir dos elementos HTML
function togglePower() {
    airConditioner.togglePower();
}

function setTemperature(value) {
    airConditioner.setTemperature(value);
    }

function setFanSpeed(value) {
    airConditioner.setFanSpeed(value);
    }

// Atualize o status inicial
//airConditioner.updateStatus();

function AplicarAlteracoes(){
    console.log(document.getElementById("status").textContent)
    console.log(document.getElementById("temperature").textContent)
    console.log(document.getElementById("fanSpeed").textContent)
    cozinhastatus=[document.getElementById("titulo-ac").textContent,document.getElementById("status").textContent,document.getElementById("temperature").textContent,document.getElementById("fanSpeed").textContent];
    gravaNoHistorico(cozinhastatus);
    document.getElementById("areyousure").style.display="none";
    window.location.href = "cozinha.html";

}


function carregaStatus(){
    cozinha=JSON.parse(localStorage.getItem("cozinha")) || [];
    sala=JSON.parse(localStorage.getItem("sala")) || [];
    escritorio=JSON.parse(localStorage.getItem("escritorio")) || [];
    quarto=JSON.parse(localStorage.getItem("quarto")) || [];
    agendamentos=JSON.parse(localStorage.getItem("agendamentos")) || [];
    geral=JSON.parse(localStorage.getItem("geral")) || [];
}

function gravaNoHistorico(status){

    
    cozinha=[]
    cozinha.push(status);
    gravaHistoricoCozinha();
   
    

}

function gravaHistoricoCozinha(){
    localStorage.setItem("cozinha", JSON.stringify(cozinha));
}

function gravaHistoricoSala(){
    localStorage.setItem("sala", JSON.stringify(sala));
}

function gravaHistoricoEscritorio(){
    localStorage.setItem("escritorio", JSON.stringify(escritorio));
}

function gravaHistoricoQuarto(){
    localStorage.setItem("quarto", JSON.stringify(quarto));
}

function gravaHistoricoAgendamentos(){
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
}

function gravaHistoricoGeral(){
    localStorage.setItem("geral", JSON.stringify(geral));
}

function updateBotao() {
    const powerButton = document.getElementById('powerButton');

    if (airConditioner.power) {
        powerButton.style.backgroundColor = '#00a3cc';  
        //powerButton.textContent = 'Ligado'; 
    } else {
        powerButton.style.backgroundColor = 'white'; 
        //powerButton.textContent = 'Desligado'; 
    }
    
   
}

