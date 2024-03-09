export const toCapitalizeFirstLetter = (string: string): string => {
    const splittedWords: string[] = string.split(' ');
    let refinedSentence: string = '';
    splittedWords.forEach((word, index) => {
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

        // Append the capitalized word to the refined sentence
        // If it's not the first word, add a space before appending
        if (index !== 0) {
            refinedSentence += ' ';
        }
        refinedSentence += capitalizedWord;
    });
    return refinedSentence;
}

export const toCapitalizeFirstLetterInSentence = (sentence: string): string => {
    if (!sentence) return '';
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
}