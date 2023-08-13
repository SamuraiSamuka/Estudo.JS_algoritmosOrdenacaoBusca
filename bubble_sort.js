// Bubble sort é um algoritmo de ordenação que compara 2 valores subjacentes e faz sua troca (swap) caso o primeiro seja maior que o segundo.
function bubbleSort(array){
  const { length } = array
  for(let limitador = 1; limitador < length; limitador++){
    for(let i = 0; i < length - limitador; i++) {
      let a = i;
      let b = i+1;
      if(array[a] > array[b]) swap(array, a, b);
    }
  }
  
}

function swap(array, a, b){
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  // [array[a], array[b]] = [array[b], array[a]];  // modo ES2015
}

const array = [8, 7, 6, 5, 4, 3]
console.log("Antes do sort", array);
bubbleSort(array);
console.log("Depois do sort", array);