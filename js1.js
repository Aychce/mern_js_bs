function reverseNumber() {
    // Convert the number to a string
    const numStr = num.toString();

    // Reverse the string and convert it back to a number
    const reversedNum = parseFloat(numStr.split('').reverse().join(''));
    return reversedNum;
}