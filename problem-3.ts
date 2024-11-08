{
    // function for that counts the occurrences of a word in a sentence, ingore case:
    const countWordOccurrences = (sentence: string, word: string): number => {
        const lowerCaseSentence = sentence.toLocaleLowerCase();
        const lowerCaseWord = word.toLocaleLowerCase();

        const wordsArray = lowerCaseSentence.split(" ");

        const count = wordsArray.filter(w => w === lowerCaseWord)?.length;

        return count;
    }

    console.log(countWordOccurrences("I love Typescript and I learn typescript", "typescript"))
}