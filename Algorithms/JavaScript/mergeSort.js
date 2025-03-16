function merge(arr1, arr2) {
  // Settando i e j (os indices das arrays) como 0
  let i = 0;
  let j = 0;

  // Criando um vetor vazio
  let results = [];

  // Laço while, em que enquanto o e indice da array for menor que seu tamanho (pra ambas arrays), ele vai ficar no loop
  while(i < arr1.length && j < arr2.length) {

    // Se o valor do elemento da array 2 no indice j for maior que o da array 1, adiciona o elemento i da array1 no results
    if (arr2[j] > arr1[i]) {
    results.push(arr1[i]);
    
    // Adiciona um valor ao i, pra que ele va de 1 em 1 nos indices
    i++;  

    // Caso contrário, adiciona o elemento j da array2 ao results
   } else {
    results.push(arr2[j])

    // Adiciona um valor ao j, pra que ele va de 1 em 1 nos indices
    j++
   }

   // ----- DESSE JEITO, VAI ADICIONAR A RESULTS APENAS OS MENORES ELEMENTOS PRIMEIRO -----
  }

  // Esses ultimos whiles servem pra caso uma das duas arrays termine antes, ai ela adiciona o ultimo elemento 
  while(i < arr1.length) {
   results.push(arr1[i]);
   i++;
  }

  while(j < arr2.length) {
   results.push(arr2[j]);
   j++;
  }
  
  return results
 }


 function mergeSort(arr) {
  // Se o tamanho da array for menor ou igual a 1, ele vai retornar a propria array, ou seja, ele 'para'
  if (arr.length <= 1)
  return arr;

  // Enquanto ele nao for <= a 1, vai dividir a arrayem 2, em left e right
  // CADA RECURSÃO VAI TER SEU PROPRIO LEFT E RIGHT, ENTAO ELE VAI RESOLVENDO EM FORMA DE STACK ATÉ QUE O FINAL ESTEJA ORDENADO
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
 }

 console.log(merge([9, 1, 5, 4], [6, 6, 1, 9]))