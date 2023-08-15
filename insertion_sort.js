import ordenacao from "./funcoesUteis.js";

// O algoritmo insertion sort cria um novo array e vai inserindo os itens ordenadamente, um por um
function insertionSort(array) {
  const { length } = array;
  const sortedArray = [array[0]];
  for(let i = 1; i < length; i++) {
    for (let j = 0; j < sortedArray.length; j++) {
      if (array[i] <= sortedArray[j]){
        sortedArray.splice(j, 0, array[i]);
        break;
      }
    }
    if (sortedArray.length != i+1) sortedArray.push(array[i])
  }
  return sortedArray;
}

const array = [8, 7, 9, 1, 5, 4, 2, 3];
const arrayLongo = ordenacao.createInvertedArray(100);

const sortedArray = insertionSort(array);
console.log(sortedArray);