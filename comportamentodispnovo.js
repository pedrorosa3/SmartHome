let sala=[];
let escritorio=[];
let cozinha=[];
let quarto=[];
let agendamentos=[];
let geral=[];
let tabela=[];
let dispensa=[];

window.addEventListener("load",principal);


function principal(){
    
    
    //document.getElementById("areyousure").style.display="none";
    atualizahoras();

    carregaDispensa();
    
    
    produtos=CriarProdutos();

    //ProdutosRandom(produtos,tabela);
    //frigorifico=[];

    UpdateStatusIniciaisDispensa();



    
    
}
function UpdateStatusIniciaisDispensa(){
    if(dispensa.length==0){
        console.log("entrei")
        ProdutosRandom(produtos,tabela)
    }
    else if(dispensa.length>15){
        for(let step=0;step<15;step++){
            var nome= dispensa[step][0]
            var data=dispensa[step][1]
            var score=dispensa[step][2]
            document.getElementById("box"+((step+1).toString())+"nome").textContent=nome;
            document.getElementById("box"+((step+1).toString())+"data").textContent=data;
            document.getElementById("box"+((step+1).toString())+"score").textContent=score;
            for(let i=0;i<produtos.length;i++){
                if(produtos[i].GetNome()==nome){
                    document.getElementById("box"+((step+1).toString())+"image").src=produtos[i].GetSource();
                }
            } 
        }
        let num = dispensa.length - 15;
        for(let i=1;i<=num;i++){
            //console.log("entrei")
            //console.log("show"+i.toString())
            document.getElementById("box"+(i+15).toString()).style.display="block";
            //console.log("linha"+(15+i).toString()+"nome")
            //console.log(frigorifico[15][0]);
            document.getElementById("box"+(15+i).toString()+"nome").textContent=dispensa[14+i][0]
            document.getElementById("box"+(15+i).toString()+"data").textContent=dispensa[14+i][1]
            document.getElementById("box"+(15+i).toString()+"score").textContent=dispensa[14+i][2]
            for(let j=0;j<produtos.length;j++){
                if(produtos[j].GetNome()==dispensa[14+i][0]){
                    document.getElementById("box"+((i+15).toString())+"image").src=produtos[j].GetSource();
                }
                
            }

        }

    }
    else{
        for(let step=0;step<15;step++){
           var nome= dispensa[step][0]
           var data=dispensa[step][1]
           var score=dispensa[step][2]
           
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

const produto1 = new Produto('Arroz', '2023-12-31',"../IC_V16.1/images/arroz.png",1.39);
const produto2 = new Produto('Feijão', '2023-10-15',"../IC_V16.1/images/feijao.png",1.69);
const produto3 = new Produto('Massa', '2024-05-20',"../IC_V16.1/images/massa.png",1.09);
const produto4 = new Produto('Açúcar', '2023-11-30',"../IC_V16.1/images/acucar.png",0.67);
const produto5 = new Produto('Óleo de Cozinha', '2024-03-10',"../IC_V16.1/images/oleo-cozinha.png",3.19);
const produto6 = new Produto('Sal', '2023-09-15',"../IC_V16.1/images/sal.png",1.7);
const produto7 = new Produto('Atum Enlatado', '2023-08-25', "../IC_V16.1/images/atum-enlatado.png",2.6);
const produto8 = new Produto('Molho de Tomate', '2024-01-05',"../IC_V16.1/images/molho-tomate.png",1.5);
const produto9 = new Produto('Cereal', '2023-11-01',"../IC_V16.1/images/cereal.png",4.5);
const produto10 = new Produto('Farinha de Trigo', '2023-12-15',"../IC_V16.1/images/farinha.png",1.2);
const produto11 = new Produto('Café', '2024-02-28',"../IC_V16.1/images/cafe.png",4.5);
const produto12 = new Produto('Chá', '2023-10-10', "../IC_V16.1/images/cha.png",2.1);
const produto13 = new Produto('Leite em Pó', '2023-11-20', "../IC_V16.1/images/leite-po.png",2);
const produto14 = new Produto('Aveia', '2024-04-30', "../IC_V16.1/images/aveia.png",1.7);
const produto15 = new Produto('Mel', '2023-09-05',"../IC_V16.1/images/mel.png",2.8);
const produto16 = new Produto('Amendoim', '2023-12-31', "../IC_V16.1/images/amendoim.png",0.7);
const produto17 = new Produto('Bolachas', '2023-10-15',"../IC_V16.1/images/bolachas.png",2.8);
const produto18 = new Produto('Sardinha Enlatada', '2024-05-20', "../IC_V16.1/images/sardinhas.png",3.1);
const produto19 = new Produto('Geleia', '2023-11-30', "../IC_V16.1/images/geleia.png",2.8);
const produto20 = new Produto('Caldo de Galinha', '2024-03-10', "../IC_V16.1/images/caldo-galinha.png",1.45);
const produto21 = new Produto('Lentilhas', '2023-09-15',"../IC_V16.1/images/lentilhas.png",1.89);
const produto22 = new Produto('Farinha de Aveia', '2023-08-25', "../IC_V16.1/images/farinha-aveia.png",2.23);
const produto23 = new Produto('Manteiga de Amendoim', '2024-01-05', "../IC_V16.1/images/manteiga-amendoim.png",2.78);
const produto24 = new Produto('Tomate em Lata', '2023-11-01', "../IC_V16.1/images/tomate-enlatado.png",2.38);
const produto25 = new Produto('Milho Enlatado', '2023-12-15', "../IC_V16.1/images/milho-enlatado.png",1.98);
const produto26 = new Produto('Extrato de Tomate', '2024-02-28', "../IC_V16.1/images/extrato-tomate.png",1.78);
const produto27 = new Produto('Pimenta', '2023-10-10', "../IC_V16.1/images/pimenta.png",0.89);
const produto28 = new Produto('Cebola em Pó', '2023-11-20', "../IC_V16.1/images/cebola.png",1.1);
const produto29 = new Produto('Alho em Pó', '2024-04-30', "../IC_V16.1/images/alho.png",0.9);
const produto30 = new Produto('Vinagre', '2023-09-05', "../IC_V16.1/images/vinagre.png",2.1);


function CriarProdutos(){
    let produtos=[]
    produtos.push(produto1)
    produtos.push(produto2)
    produtos.push(produto3)
    produtos.push(produto4)
    produtos.push(produto5)
    produtos.push(produto6)
    produtos.push(produto7)
    produtos.push(produto8)
    produtos.push(produto9)
    produtos.push(produto10)
    produtos.push(produto11)
    produtos.push(produto12)
    produtos.push(produto13)
    produtos.push(produto14)
    produtos.push(produto15)
    produtos.push(produto16)
    produtos.push(produto17)
    produtos.push(produto18)
    produtos.push(produto19)
    produtos.push(produto20)
    produtos.push(produto21)
    produtos.push(produto22)
    produtos.push(produto23)
    produtos.push(produto24)
    produtos.push(produto25)
    produtos.push(produto26)
    produtos.push(produto27)
    produtos.push(produto28)
    produtos.push(produto29)
    produtos.push(produto30)
   
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
        let dispensa_item=[nome,data,score];
        gravaDispensaNoHistorico(dispensa_item);


    }
    

}


function numeroAleatorio() {
    var letras = ['A', 'B', 'C', 'D', 'E', 'F'];

  
    var indiceAleatorio = Math.floor(Math.random() * letras.length);

  
    return letras[indiceAleatorio];
    
  }

// fazer um javascript à parte para o frigorifico

function carregaDispensa(){
    dispensa=JSON.parse(localStorage.getItem("dispensa")) || [];
}

function gravaDispensaNoHistorico(statusdispensa){
    dispensa.push(statusdispensa);
    gravaHistoricoDispensa();

}

function gravaHistoricoDispensa(){
    localStorage.setItem("dispensa", JSON.stringify(dispensa));
}
