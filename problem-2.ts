{
    // function of remove duplicates numbers from array and return new array
    const removeDuplicates = (numbers: number[]): number[] => {
        const uniqueNumbers: number[] = [];

        numbers.forEach((num) => {
            if(uniqueNumbers.indexOf(num) === -1){
                uniqueNumbers.push(num)
            }
        });

      return uniqueNumbers;
    }
     
    const numbers = [1, 1, 2, 2, 3, 4, 4, 5];
    console.log(removeDuplicates(numbers));
    // 
}