{
    // 
    var removeDuplicates = function (numbers) {
        var uniqueNumbers = [];
        numbers.forEach(function (num) {
            if (uniqueNumbers.indexOf(num) === -1) {
                uniqueNumbers.push(num);
            }
        });
        return uniqueNumbers;
    };
    var numbers = [1, 2, 2, 3, 4, 4, 5];
    console.log(removeDuplicates(numbers));
    // 
}
