let indice = 0;
function mover(n) {
  mostrarItens(indice += n);
}

function mostrarItens(n) {
  let i;
  let itens = document.getElementsByClassName("item");
  if (n > itens.length - 3) { indice = 0; } // Loop ao alcançar o fim
  if (n < 0) { indice = itens.length - 3; } // Loop ao alcançar o começo
  for (i = 0; i < itens.length; i++) {
    itens[i].style.display = "none"; // Esconde todos os itens
  }
  for (i = indice; i < indice + 3 && i < itens.length; i++) {
    itens[i].style.display = "flex"; // Mostra 3 itens
  }
}