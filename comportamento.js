window.addEventListener("load",principal);

function principal(){

    atualizahoras();
    let paginaToda = document.body;
    paginaToda.addEventListener("click",fecharSidebar);
    
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