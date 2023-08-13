// Bubble sort é um algoritmo de ordenação que compara 2 valores subjacentes e faz sua troca (swap) caso o primeiro seja maior que o segundo.
function bubbleSort(array){
  const { length } = array
  console.log("Antes do sort", array);
  for(let limitador = 0; limitador < length; limitador++){
    for(let i = 0; i < length - limitador; i++) {
      let a = i;
      let b = i+1; // Quando j for igual a length - 1, array[j+1] será igual a undefined
      if(array[a] > array[b]) swap(array, a, b); // A comparação valor > undefined sempre retorna false;
    }
  }
  console.log("Depois do sort", array);
}

function swap(array, a, b){
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  // [array[a], array[b]] = [array[b], array[b]];  // modo ES2015
}


const array = [8, 1, 5, 4, 8, 7]
const array2 = [8, 7, 6, 5, 4, 3]

bubbleSort(array2)