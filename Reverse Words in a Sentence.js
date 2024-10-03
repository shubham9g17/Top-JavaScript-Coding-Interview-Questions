/**
 * Reverses the order of words in a given sentence.
 * @param {string} sentence - The sentence to reverse.
 * @returns {string} - The sentence with words in reversed order.
 */
function reverseWords(sentence) {
    // Step 1: Split the sentence into an array of words
    const wordsArray = sentence.split(' ');
    // Step 2: Reverse the array of words
    const reversedArray = wordsArray.reverse();
    // Step 3: Join the reversed array back into a string
    const reversedSentence = reversedArray.join(' ');
    return reversedSentence;
}

// Example usage:
const inputSentence = "Hello World from JavaScript";
const reversed = reverseWords(inputSentence);
console.log(reversed); // Output: "JavaScript from World Hello"
