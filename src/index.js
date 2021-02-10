module.exports = function toReadable(number) {
    let hundreds = Math.floor(number / 100);
    let tens = Math.floor((number - hundreds * 100) / 10);
    let ones = number - hundreds * 100 - tens * 10;

    if (number === 0) {
        return "zero";
    }

    if (tens === 1) {
        tens = 0;
        ones = number - hundreds * 100;
    }

    const onesArray = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tensArray = [
        "",
        "",
        "twenty ",
        "thirty ",
        "forty ",
        "fifty ",
        "sixty ",
        "seventy ",
        "eighty ",
        "ninety ",
    ];

    let hundredsArray = hundreds ? onesArray[hundreds] + " hundred " : "";

    return (hundredsArray + tensArray[tens] + onesArray[ones]).trim();
};
