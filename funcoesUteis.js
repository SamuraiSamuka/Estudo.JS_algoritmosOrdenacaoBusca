export function createNonSortedArray(size) {
  const array = [];
  for(let i = size; i > 0; i--) {
    array.push(i)
  }
  return array
}

export function swap(array, a, b){
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

const ordenacao = { swap, createNonSortedArray };
export default ordenacao;