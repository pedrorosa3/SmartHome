
let dispensa_sugeridos=[];
let tabela=[];
let dispensa=[];
let carrinho=[];

window.addEventListener("load",principal);

function principal(){

    atualizahoras();
    carregaDispensa();
    carregaDispensaSugeridos();
    produtos=CriarProdutos();
    
    produtos_sugeridos=SugereProdutos(produtos,dispensa);

    
    RandomSugere(produtos_sugeridos);
    
    
    
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
const produto25 = new Produto('Milho Enlatado', '2023-12-15', "../IC_V16.1/images/milho-enlatado.png",1.78);
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



//funçao recebe 
//!!!!!!!!!!!!!!!


function SugereProdutos(produtos,dispensa){
    console.log(dispensa)
    let dispensa_sugeridos=[];
    
    for(let i=0;i<produtos.length;i++){
        
        let flag = false; 

        for(let j=0;j<dispensa.length;j++){
            
            if(produtos[i].nome == dispensa[j][0]){
                flag = true;
            }

            else{
            }
        }
        if(flag == false){
            dispensa_sugeridos.push(produtos[i])
        }
    }

    for(let i=0;i<dispensa_sugeridos.length;i++){
        console.log(dispensa_sugeridos[i]);    
    
    }
    console.log(dispensa_sugeridos);
    return dispensa_sugeridos;
}





function RandomSugere(produtos_sugeridos){
    let tabela_dispensa_sugeridos=[];
    dispensa_sugeridos=[];
    for(let step=0;step<5;step++){
        let numerorandom=Math.floor((Math.random()*produtos_sugeridos.length))
        console.log(numerorandom);
        tabela_dispensa_sugeridos[step]=produtos_sugeridos[numerorandom];
        produtos_sugeridos.splice(numerorandom,1);
        var nome=tabela_dispensa_sugeridos[step].GetNome();
        var data=tabela_dispensa_sugeridos[step].GetValidade();
        var score=numeroAleatorio();
        console.log("linha"+((step+1).toString())+"nome")
        document.getElementById("linha"+((step+1).toString())+"nome").textContent=nome;
        document.getElementById("linha"+((step+1).toString())+"data").textContent=data;
        document.getElementById("linha"+((step+1).toString())+"score").textContent=score;
        for(let i=0;i<produtos.length;i++){
            if(produtos[i].GetNome()==nome){
                
                document.getElementById("linha"+((step+1).toString()+"image")).src=produtos[i].GetSource();
                document.getElementById("linha"+(step+1).toString()+"price").textContent=produtos[i].GetPrice()+"€";
            }
        }
        let dispensa_sugerido_item=[nome,data,score];
        gravaDispensaSugeridoNoHistorico(dispensa_sugerido_item);


    }
}

function numeroAleatorio() {
    var letras = ['A', 'B', 'C', 'D', 'E', 'F'];

  
    var indiceAleatorio = Math.floor(Math.random() * letras.length);

  
    return letras[indiceAleatorio];
    
}


function carregaDispensaSugeridos(){
    dispensa_sugeridos=JSON.parse(localStorage.getItem("dispensa-sugeridos")) || [];
}

function gravaDispensaSugeridoNoHistorico(statusdispensa){
    dispensa_sugeridos.push(statusdispensa);
    gravaHistoricoDispensaSugerido();

}

function gravaHistoricoDispensaSugerido(){
    localStorage.setItem("dispensa-sugeridos", JSON.stringify(dispensa_sugeridos));
}


function gravaCarrinhoNoHistorico(status){
    carrinho.push(status);
    gravaHistoricoCarrinho();
}

function gravaHistoricoCarrinho(){
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

let count1=0;
function AdicionarCarrinho1(){
    count1=count1+1
    document.getElementById("min1").style.display="block";
    let Carrinholista=document.getElementById("lista-carrinho");
    const novo= document.createElement("li");
    novo.textContent=document.getElementById("linha1nome").textContent+"--------x"+count1;
    novo.id="produto1";
    let Tamanholista=document.querySelectorAll("#lista-carrinho > li")
    console.log(Tamanholista.length);
    if(Tamanholista.length==0){
        Carrinholista.appendChild(novo);
    }
    for(let i=0;i<Tamanholista.length;i++){
        console.log(i);
        console.log(document.querySelector("#lista-carrinho").children.id)
        
        
            console.log(document.querySelector("#lista-carrinho").children[i]);
            if(document.querySelector("#lista-carrinho").children[i].id=="produto1"){
                let CarrinhoExiste=document.getElementById("produto1");
                Carrinholista.removeChild(CarrinhoExiste);
                Carrinholista.appendChild(novo);
            }
            else{
                Carrinholista.appendChild(novo);
            }
        
        

    }
    CountPrice();
}
let count2=0;
function AdicionarCarrinho2(){
    count2=count2+1
    document.getElementById("min2").style.display="block";
    let Carrinholista=document.getElementById("lista-carrinho");
    const novo= document.createElement("li");
    novo.textContent=document.getElementById("linha2nome").textContent+"--------x"+count2;
    novo.id="produto2";
    let Tamanholista=document.querySelectorAll("#lista-carrinho > li")
    console.log(Tamanholista.length);
    if(Tamanholista.length==0){
        Carrinholista.appendChild(novo);
    }
    for(let i=0;i<Tamanholista.length;i++){
        console.log(i);
        console.log(document.querySelector("#lista-carrinho").children.id)
        
        
            console.log(document.querySelector("#lista-carrinho").children[i]);
            if(document.querySelector("#lista-carrinho").children[i].id=="produto2"){
                let CarrinhoExiste=document.getElementById("produto2");
                Carrinholista.removeChild(CarrinhoExiste);
                Carrinholista.appendChild(novo);
            }
            else{
                Carrinholista.appendChild(novo);
            }
        
        

    }
    CountPrice();
}

let count3=0;
function AdicionarCarrinho3(){
    count3=count3+1
    document.getElementById("min3").style.display="block";
    let Carrinholista=document.getElementById("lista-carrinho");
    const novo= document.createElement("li");
    novo.textContent=document.getElementById("linha3nome").textContent+"--------x"+count3;
    novo.id="produto3";
    let Tamanholista=document.querySelectorAll("#lista-carrinho > li")
    console.log(Tamanholista.length);
    if(Tamanholista.length==0){
        Carrinholista.appendChild(novo);
    }
    for(let i=0;i<Tamanholista.length;i++){
        console.log(i);
        console.log(document.querySelector("#lista-carrinho").children.id)
        
        
            console.log(document.querySelector("#lista-carrinho").children[i]);
            if(document.querySelector("#lista-carrinho").children[i].id=="produto3"){
                let CarrinhoExiste=document.getElementById("produto3");
                Carrinholista.removeChild(CarrinhoExiste);
                Carrinholista.appendChild(novo);
            }
            else{
                Carrinholista.appendChild(novo);
            }
        
        

    }
    CountPrice();
}

let count4=0;
function AdicionarCarrinho4(){
    count4=count4+1
    document.getElementById("min4").style.display="block";
    let Carrinholista=document.getElementById("lista-carrinho");
    const novo= document.createElement("li");
    novo.textContent=document.getElementById("linha4nome").textContent+"--------x"+count4;
    novo.id="produto4";
    let Tamanholista=document.querySelectorAll("#lista-carrinho > li")
    console.log(Tamanholista.length);
    if(Tamanholista.length==0){
        Carrinholista.appendChild(novo);
    }
    for(let i=0;i<Tamanholista.length;i++){
        console.log(i);
        console.log(document.querySelector("#lista-carrinho").children.id)
        
        
            console.log(document.querySelector("#lista-carrinho").children[i]);
            if(document.querySelector("#lista-carrinho").children[i].id=="produto4"){
                let CarrinhoExiste=document.getElementById("produto4");
                Carrinholista.removeChild(CarrinhoExiste);
                Carrinholista.appendChild(novo);
            }
            else{
                Carrinholista.appendChild(novo);
            }
        
        

    }
    CountPrice();
}

let count5=0;
function AdicionarCarrinho5(){
    count5=count5+1
    document.getElementById("min5").style.display="block";
    let Carrinholista=document.getElementById("lista-carrinho");
    const novo= document.createElement("li");
    novo.textContent=document.getElementById("linha5nome").textContent+"--------x"+count5;
    novo.id="produto5";
    let Tamanholista=document.querySelectorAll("#lista-carrinho > li")
    console.log(Tamanholista.length);
    if(Tamanholista.length==0){
        Carrinholista.appendChild(novo);
    }
    for(let i=0;i<Tamanholista.length;i++){
        console.log(i);
        console.log(document.querySelector("#lista-carrinho").children.id)
        
        
            console.log(document.querySelector("#lista-carrinho").children[i]);
            if(document.querySelector("#lista-carrinho").children[i].id=="produto5"){
                let CarrinhoExiste=document.getElementById("produto5");
                Carrinholista.removeChild(CarrinhoExiste);
                Carrinholista.appendChild(novo);
            }
            else{
                Carrinholista.appendChild(novo);
            }
        
        

    }
    CountPrice();
}

function RetirarCarrinho1(){
    count1=count1-1
    if(count1==0){
        document.getElementById("min1").style.display="none";
        //document.getElementById("produto1").textContent=null;
        //colocar um removeChild
        let Carrinholista=document.getElementById("lista-carrinho");
        let Item=document.getElementById("produto1");
        Carrinholista.removeChild(Item);

    }
    else{
        document.getElementById("produto1").textContent=document.getElementById("linha1nome").textContent+"--------x"+count1;
    }
    CountPrice();
}

function RetirarCarrinho2(){
    count2=count2-1
    if(count2==0){
        document.getElementById("min2").style.display="none";
        let Carrinholista=document.getElementById("lista-carrinho");
        let Item=document.getElementById("produto2");
        Carrinholista.removeChild(Item);
        
    }
    else{
        document.getElementById("produto2").textContent=document.getElementById("linha2nome").textContent+"--------x"+count2;
    }
    CountPrice();
}

function RetirarCarrinho3(){
    count3=count3-1
    if(count3==0){
        document.getElementById("min3").style.display="none";
        let Carrinholista=document.getElementById("lista-carrinho");
        let Item=document.getElementById("produto3");
        Carrinholista.removeChild(Item);
    }
    else{
        document.getElementById("produto3").textContent=document.getElementById("linha3nome").textContent+"--------x"+count3;
    }
    CountPrice();
}

function RetirarCarrinho4(){
    count4=count4-1
    if(count4==0){
        document.getElementById("min4").style.display="none";
        let Carrinholista=document.getElementById("lista-carrinho");
        let Item=document.getElementById("produto4");
        Carrinholista.removeChild(Item);
    }
    else{
        document.getElementById("produto4").textContent=document.getElementById("linha4nome").textContent+"--------x"+count4;
    }
}

function RetirarCarrinho5(){
    count5=count5-1
    if(count5==0){
        document.getElementById("min5").style.display="none";
        let Carrinholista=document.getElementById("lista-carrinho");
        let Item=document.getElementById("produto5");
        Carrinholista.removeChild(Item);
    }
    else{
        document.getElementById("produto5").textContent=document.getElementById("linha5nome").textContent+"--------x"+count5;
    }
    CountPrice();
}

function AplicarAlteracoes(){
    
    let produtoscomprados=[]
    let preco_total=0;
    let Tamanholista=document.querySelectorAll("#lista-carrinho > li");
    
    
    for (let i=0;i<Tamanholista.length;i++){
        
        let id=document.querySelector("#lista-carrinho").children[i].id;
        let id_num=document.querySelector("#lista-carrinho").children[i].id.slice(-1)
        console.log(id);

            
        let words=document.getElementById(id).textContent.slice(0,-10)

        let vality=document.getElementById("linha"+id_num+"data").textContent;
        let scoreNut=document.getElementById("linha"+id_num+"score").textContent;
        let quantity=document.querySelector("#lista-carrinho").children[i].textContent.slice(-1)
        
        let newelement=[words,vality,scoreNut,quantity]
        
            
            
        produtoscomprados.push(newelement)
        
    }
 
    console.log(produtoscomprados)
    for(let i=0;i<produtoscomprados.length;i++){
        
        
        gravaCarrinhoNoHistorico(produtoscomprados[i]);
    }
    //document.getElementById("areyousure").style.display="none";
    window.location.href = "pagamentodisp.html";


}


function CountPrice(){
    var preco_total=0
    let Tamanholista=document.querySelectorAll("#lista-carrinho > li");
    let Carrinholista=document.getElementById("#lista-carrinho");
    //console.log(Tamanholista);
    //for(let i=0;i<Tamanholista.length;i++){
        //if(document.querySelector("#lista-carrinho").children[i].id == "produto1"){
            //METER UM APPEND CHILD CASO O  
        //}
    //}
    
    for (let i=0;i<Tamanholista.length;i++){
        let id=document.querySelector("#lista-carrinho").children[i].id;
        

            
            let words=document.getElementById(id).textContent.slice(0,-10)
            let quantity= document.getElementById(id).textContent.slice(-1)
            console.log(quantity)
            for(let j=0;j<produtos.length;j++){
                if(produtos[j].GetNome()==words){
                    var preco=produtos[j].GetPrice()*parseInt(quantity);
                    preco_total=preco_total+preco;
                    preco_total=Math.round((preco_total+Number.EPSILON)*100)/100;
                }
            }
        
    }
    document.getElementById("preco-carrinho").textContent="Total: "+preco_total+" €";
    //document.getElementById("popup-price").textContent="Tem a certeza que pretende realizar esta compra de "+preco_total+" euros?";
    //document.getElementById("areyousure1").style.display="none";
    //document.getElementById("areyousure2").style.display="none";
    //document.getElementById("areyousure").style.display="block";
}


function ClosePop(){
    document.getElementById('areyousure1').style.display='none';
}

function Verify(){
    let Tamanholista=document.querySelectorAll("#lista-carrinho > li");
    if(Tamanholista.length==0){
        document.getElementById("areyousure1").style.display="block";
    }
    else{
        AplicarAlteracoes();
        window.location.href="pagamentodisp.html";
    }
}