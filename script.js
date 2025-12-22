const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('nav');
if(menuToggle){
  menuToggle.onclick=()=>nav.classList.toggle('active');
}

let carrinho=[];

function adicionar(nome,valor){
  carrinho.push({nome,valor});
  alert("Passeio adicionado!");
  localStorage.setItem("carrinho",JSON.stringify(carrinho));
}

function carregarCarrinho(){
  carrinho=JSON.parse(localStorage.getItem("carrinho"))||[];
  const lista=document.getElementById("lista");
  let total=0;
  lista.innerHTML="";
  carrinho.forEach(i=>{
    total+=i.valor;
    lista.innerHTML+=`<li>${i.nome} - R$ ${i.valor}</li>`;
  });
  document.getElementById("total").innerText=total;
}

function finalizar(){
  const nome=document.getElementById("nome").value;
  const tel=document.getElementById("tel").value;
  let msg=`Reserva Thunder:%0ACliente: ${nome}%0ATelefone: ${tel}%0A`;
  carrinho.forEach(i=>msg+=`${i.nome} - R$${i.valor}%0A`);
  window.open(`https://wa.me/5599999999999?text=${msg}`);
}
