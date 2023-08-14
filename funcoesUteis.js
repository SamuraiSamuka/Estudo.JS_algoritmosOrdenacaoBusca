export function createInvertedArray(size) {
  const array = [];
  for(let i = size; i > 0; i--) {
    array.push(i)
  }
  return array
}

function createRandomArray(size) {
  
}

export function swap(array, a, b){
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

const ordenacao = { swap, createInvertedArray };
export default ordenacao;