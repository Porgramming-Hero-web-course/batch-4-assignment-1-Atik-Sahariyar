{
  // sum of array

  const sumArray = (numbers: number[]) : number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  };

  console.log(sumArray([1, 3, 4, 6]));

  //
}
