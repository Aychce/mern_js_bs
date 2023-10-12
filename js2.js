function sortStringAlphabetically(str) {
    // Convert the string to an array of characters, sort it, and join it back into a string
    const sortedStr = str.split('').sort().join('');
    return sortedStr;
}