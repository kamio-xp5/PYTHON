function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
  
  
  let array = [1, 2, 3, 4, 5];
  let soma = sumArray(array);
  console.log(soma); // Saída: 15