import ordenacao from "./funcoesUteis.js";

// Algoritmo que busca o menor valor em um array e move ele para o início
function selectionSort(array){
  const { length } = array
  console.log("inicio    -> ", array)
  for(let i = 0; i < length - 1; i++) {
    let menor = i;
    for(let atual = i; atual < length; atual++) {
      if (array[atual] < array[menor]) menor = atual;
    }
    if (menor != i) ordenacao.swap(array, menor, i);
    console.log("passo ", i + 1, " -> ", array)
  }
}

const array = [8, 2, 7, 10, 6, 5];

selectionSort(array);