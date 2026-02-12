//vai buscar a array do frigorifico , vê os que estao nbos produtos e nao no frigorifico, recomenda .. Ao clicar no + ele adiciona um <li> na aba carrinho e o - só aparece caso o mais seja clicado.
// O finalizar pagamento faz com que os items adicionados sejam adicionados ao array frigorifico.


let frigorifico_sugeridos=[];
let tabela=[];
let frigorifico=[];
let carrinho=[];
let preco = [];

window.addEventListener("load",principal);

function principal(){

    atualizahoras();
    carregaFrigorifico();
    carregaFrigorificoSugeridos();
    produtos=CriarProdutos();
    
    produtos_sugeridos=SugereProdutos(produtos,frigorifico);

    
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



//funçao recebe 
//!!!!!!!!!!!!!!!


function SugereProdutos(produtos,frigorifico){

    console.log(frigorifico)
    let frigorifico_sugeridos=[];
    
    for(let i=0;i<produtos.length;i++){
        
        let flag = false; 

        for(let j=0;j<frigorifico.length;j++){
            
            if(produtos[i].nome == frigorifico[j][0]){
                flag = true;
            }

            else{
            }
        }
        if(flag == false){
            frigorifico_sugeridos.push(produtos[i])
        }
    }

    for(let i=0;i<frigorifico_sugeridos.length;i++){
        console.log(frigorifico_sugeridos[i]);    
    
    }
    console.log(frigorifico_sugeridos);
    return frigorifico_sugeridos;
}





function RandomSugere(produtos_sugeridos){
    let tabela_frigorifico_sugeridos=[];
    frigorifico_sugeridos=[];
    for(let step=0;step<5;step++){
        let numerorandom=Math.floor((Math.random()*produtos_sugeridos.length))
        console.log(numerorandom);
        tabela_frigorifico_sugeridos[step]=produtos_sugeridos[numerorandom];
        produtos_sugeridos.splice(numerorandom,1);
        var nome=tabela_frigorifico_sugeridos[step].GetNome();
        var data=tabela_frigorifico_sugeridos[step].GetValidade();
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
        let frigorifico_sugerido_item=[nome,data,score];
        gravaFrigorificoSugeridoNoHistorico(frigorifico_sugerido_item);


    }
}

function numeroAleatorio() {
    var letras = ['A', 'B', 'C', 'D', 'E', 'F'];

  
    var indiceAleatorio = Math.floor(Math.random() * letras.length);

  
    return letras[indiceAleatorio];
    
}


function carregaFrigorificoSugeridos(){
    frigorifico_sugeridos=JSON.parse(localStorage.getItem("frigorifico-sugeridos")) || [];
}

function gravaFrigorificoSugeridoNoHistorico(statusfrigorifico){
    frigorifico_sugeridos.push(statusfrigorifico);
    gravaHistoricoFrigorificoSugerido();

}

function gravaHistoricoFrigorificoSugerido(){
    localStorage.setItem("frigorifico-sugeridos", JSON.stringify(frigorifico_sugeridos));
}

function gravaCarrinhoNoHistorico(status){
    carrinho.push(status);
    gravaHistoricoCarrinho();
}

function gravaPrecoNoHistorico(status){
    preco.push(status);
    gravaPrecoCarrinho();
}

function gravaHistoricoCarrinho(){
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function gravaPrecoCarrinho(){
    localStorage.setItem("preco", JSON.stringify(preco));

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
    CountPrice();
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
    let precoSup = document.getElementById("preco-carrinho").textContent;
    gravaPrecoNoHistorico(precoSup);
    //document.getElementById("areyousure").style.display="none";
    window.location.href = "pagamentofrig.html";


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
        window.location.href="pagamentofrig.html";
    }
}