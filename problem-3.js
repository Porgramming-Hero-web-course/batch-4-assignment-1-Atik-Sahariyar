{
    // function for that counts the occurrences of a word in a sentence, ingore case:
    var countWordOccurrences = function (sentence, word) {
        var _a;
        var lowerCaseSentence = sentence.toLocaleLowerCase();
        var lowerCaseWord = word.toLocaleLowerCase();
        var wordsArray = lowerCaseSentence.split(" ");
        var count = (_a = wordsArray.filter(function (w) { return w === lowerCaseWord; })) === null || _a === void 0 ? void 0 : _a.length;
        return count;
    };
    console.log(countWordOccurrences("I love Typescript and I learn typescript", "typescript"));
}
