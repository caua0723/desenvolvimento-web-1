const cardapio=[{id:"qtdXBurguer",nome:"X-Burguer",preco:18},{id:"qtdPastel",nome:"Pastel",preco:8},{id:"qtdCoxinha",nome:"Coxinha",preco:7},{id:"qtdSuco",nome:"Suco natural",preco:6}];
document.getElementById("btnCalcular").addEventListener("click",calcularPedido);
function calcularPedido(){
const itensEscolhidos=[];
for(let i=0;i<cardapio.length;i++){const quantidade=Number(document.getElementById(cardapio[i].id).value);if(quantidade>0)itensEscolhidos.push({nome:cardapio[i].nome,quantidade,valor:quantidade*cardapio[i].preco});}
const lista=document.getElementById("listaItens");lista.innerHTML="";let subtotal=0;
for(let i=0;i<itensEscolhidos.length;i++){const item=itensEscolhidos[i];lista.innerHTML+="<li>"+item.quantidade+"x "+item.nome+": R$ "+item.valor+"</li>";subtotal+=item.valor;}
const taxa=Number(document.getElementById("taxaEntrega").value);document.getElementById("subtotal").textContent="R$ "+subtotal;document.getElementById("total").textContent="R$ "+(subtotal+taxa);
}