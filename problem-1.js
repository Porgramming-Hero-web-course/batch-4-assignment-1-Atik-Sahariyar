{
    // sum of array
    var sumArray = function (numbers) {
        return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
    };
    console.log(sumArray([1, 3, 4, 6]));
    //
}
