let sala=[];
let escritorio=[];
let cozinha=[];
let quarto=[];
let agendamentos=[];
let geral=[];
let tabela=[];
let frigorifico=[];

window.addEventListener("load",principal);


function principal(){
    
    
    //document.getElementById("areyousure").style.display="none";
    atualizahoras();

    carregaFrigorifico();
    
    
    produtos=CriarProdutos();

    //ProdutosRandom(produtos,tabela);
    //frigorifico=[];
    UpdateStatusIniciaisFrigorifico();



    
    
}
function UpdateStatusIniciaisFrigorifico(){
    if(frigorifico.length==0){
        console.log("entrei")
        ProdutosRandom(produtos,tabela)
    }
    else if(frigorifico.length>15){
        for(let step=0;step<15;step++){
            var nome= frigorifico[step][0]
            var data=frigorifico[step][1]
            var score=frigorifico[step][2]
            document.getElementById("box"+((step+1).toString())+"nome").textContent=nome;
            document.getElementById("box"+((step+1).toString())+"data").textContent=data;
            document.getElementById("box"+((step+1).toString())+"score").textContent=score;
            for(let i=0;i<produtos.length;i++){
                if(produtos[i].GetNome()==nome){
                    document.getElementById("box"+((step+1).toString())+"image").src=produtos[i].GetSource();
                }
            } 
        }
        let num = frigorifico.length - 15;
        for(let i=1;i<=num;i++){
            //console.log("entrei")
            //console.log("show"+i.toString())
            document.getElementById("box"+(i+15).toString()).style.display="block";
            //console.log("linha"+(15+i).toString()+"nome")
            //console.log(frigorifico[15][0]);
            document.getElementById("box"+(15+i).toString()+"nome").textContent=frigorifico[14+i][0]
            document.getElementById("box"+(15+i).toString()+"data").textContent=frigorifico[14+i][1]
            document.getElementById("box"+(15+i).toString()+"score").textContent=frigorifico[14+i][2]
            for(let j=0;j<produtos.length;j++){
                if(produtos[j].GetNome()==frigorifico[14+i][0]){
                    document.getElementById("box"+((i+15).toString())+"image").src=produtos[j].GetSource();
                }
                
            }

        }

    }
    else{
        for(let step=0;step<15;step++){
           var nome= frigorifico[step][0]
           var data=frigorifico[step][1]
           var score=frigorifico[step][2]
           
           document.getElementById("box"+((step+1).toString())+"nome").textContent=nome;
           document.getElementById("box"+((step+1).toString())+"data").textContent=data;
           document.getElementById("box"+((step+1).toString())+"score").textContent=score;
           for(let i=0;i<produtos.length;i++){
                if(produtos[i].GetNome()==nome){
                    document.getElementById("box"+((step+1).toString())+"image").src=produtos[i].GetSource();
                }
           }
           

        }

    }
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

class Produto{
    constructor(nome,validade,source,price){
        this.nome=nome
        this.validade=validade
        this.source=source
        this.price=price
    }
    GetNome(){
        return this.nome;
    }
    GetValidade(){
        return this.validade;
    }
    GetSource(){
        return this.source
    }
    GetPrice(){
        return this.price
    }

}

const Iogurte=new Produto("Iogurte","24-05-2023","../IC_V16.1/images/iogurte.png",2.1)
const Leite=new Produto("Leite","24-06-2024","../IC_V16.1/images/leite.png",2.90)
const Manteiga=new Produto("Manteiga","01-08-2023","../IC_V16.1/images/manteiga.png",0.7)
const Queijo=new Produto("Queijo","29-12-2023","../IC_V16.1/images/queijo.png",1.2)
const Ovos =new Produto("Ovos","24-12-2024","../IC_V16.1/images/ovo.png",1.98)
const Presunto=new Produto("Presunto","01-04-2024","../IC_V16.1/images/presunto.png",1.87)
const Bacon=new Produto("Bacon","02-04-2024","../IC_V16.1/images/bacon.png",2.05)
const Gelatina=new Produto("Gelatina","12-12-2023","../IC_V16.1/images/gelatina.png",1.89)
const Cenoura=new Produto("Cenoura","09-01-2024","../IC_V16.1/images/cenoura.png",0.99)
const Uvas=new Produto("Uvas","08-12-2024","../IC_V16.1/images/uva.png",3.19)
const Morangos=new Produto("Morangos","19-01-2024","../IC_V16.1/images/morango.png",1.19)
const Pepino=new Produto("Pepino","09-01-2024","../IC_V16.1/images/pepino.png",0.8)
const Pimento=new Produto("Pimento","17-04-2024","../IC_V16.1/images/pimento.png",1.7)
const Salsichas=new Produto("Salsichas","09-05-2024","../IC_V16.1/images/salsicha.png",1.78)
const Maionese=new Produto("Maionense","09-06-2024","../IC_V16.1/images/maionese.png",3.69)
const Ketchup =new Produto("Ketchup","09-07-2024","../IC_V16.1/images/ketchup.png",4.1)
const Mostarda=new Produto("Mostarda","09-03-2024","../IC_V16.1/images/mostarda.png",2.56)
const Massa_Pizza=new Produto("Massa pizza","13-02-2024","../IC_V16.1/images/massa_pizza.png",2.1)
const Molho_Tomate=new Produto ("Molho de tomate","23-09-2024","../IC_V16.1/images/polpa_tomate.png",0.89)
const Sumo=new Produto("Sumo","08-04-2024","../IC_V16.1/images/sumo.png",1.5)
const Agua=new Produto ("Agua","09-08-2024","../IC_V16.1/images/agua.png",0.5)
const Fiambre=new Produto("Fiambre","09-10-2025","../IC_V16.1/images/fiambre.png",2.23)
const Alface=new Produto("Alface","10-03-2027","../IC_V16.1/images/alface.png",0.79)
const Pudim=new Produto("Pudim","09-10-2024","../IC_V16.1/images/pudim.png",2.1)

function CriarProdutos(){
    let produtos=[]
    produtos.push(Iogurte)
    produtos.push(Leite)
    produtos.push(Manteiga)
    produtos.push(Queijo)
    produtos.push(Ovos)
    produtos.push(Presunto)
    produtos.push(Bacon)
    produtos.push(Gelatina)
    produtos.push(Cenoura)
    produtos.push(Uvas)
    produtos.push(Morangos)
    produtos.push(Pepino)
    produtos.push(Pimento)
    produtos.push(Salsichas)
    produtos.push(Maionese)
    produtos.push(Ketchup)
    produtos.push(Mostarda)
    produtos.push(Massa_Pizza)
    produtos.push(Molho_Tomate)
    produtos.push(Sumo)
    produtos.push(Agua)
    return produtos
}



function ProdutosRandom(produtos,tabela){
    console.log(produtos);
    let produtos_mid=produtos;
    for(let step=0;step<15;step++){
        let numerorandom=Math.floor((Math.random()*produtos.length))
        
        tabela[step]=produtos_mid[numerorandom];
        produtos_mid.splice(numerorandom,1);
        var nome=tabela[step].GetNome();
        var data=tabela[step].GetValidade();
        var source=tabela[step].GetSource();
        var score=numeroAleatorio();
        
        document.getElementById("box"+((step+1).toString())+"nome").textContent=nome;
        document.getElementById("box"+((step+1).toString())+"data").textContent=data;
        document.getElementById("box"+((step+1).toString())+"score").textContent=score;
        document.getElementById("box"+((step+1).toString())+"image").src=source;
        let frigorifico_item=[nome,data,score];
        gravaFrigorificoNoHistorico(frigorifico_item);


    }
    

}


function numeroAleatorio() {
    var letras = ['A', 'B', 'C', 'D', 'E', 'F'];

  
    var indiceAleatorio = Math.floor(Math.random() * letras.length);

  
    return letras[indiceAleatorio];
    
  }

// fazer um javascript à parte para o frigorifico

function carregaFrigorifico(){
    frigorifico=JSON.parse(localStorage.getItem("frigorifico")) || [];
}

function gravaFrigorificoNoHistorico(statusfrigorifico){
    frigorifico.push(statusfrigorifico);
    gravaHistoricoFrigorifico();

}

function gravaHistoricoFrigorifico(){
    localStorage.setItem("frigorifico", JSON.stringify(frigorifico));
}

