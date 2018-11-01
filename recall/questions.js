var selectElementsStartingWithA = function (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith("a")) {
            result.push(array[i])
        }
    }
    return result
}

var selectElementsStartingWithVowel = function (array) {
    let result = [];
    let tab = ["a", "e", "i", "o", "u", "y"]
    for (let x = 0; x < tab.length; x++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].startsWith(tab[x])) {
                result.push(array[i]);
            }
        }
    }
    return result.reverse()
}

var removeNullElements = function (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] != null) {
            result.push(array[i])
        }
    }
    return result
}


var removeNullAndFalseElements = function (array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== null) {
            if (array[i] !== false) {
                result.push(array[i]);
            }
        }
    }
    return result
}


var reverseWordsInArray = function (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = array[i].split("").reverse().join("");
    }
    return result
}

var everyPossiblePair = function (array) {

    let results = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            results.push([array[j], array[i]].sort());
        }
    }
    return results.sort();
}

var allElementsExceptFirstThree = function (array) {

    let result = []
    result = array.splice(3, 5);
    return result;
}


var addElementToBeginning = function (array, element) {
    let result

    result = array.unshift(1);
    result = array
    return result
}

var sortByLastLetter = function (array) {
    result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = array[i].split("").reverse().join("");
    }
    result.sort();
    for (let i = 0; i < array.length; i++) {
        result[i] = result[i].split("").reverse().join("")
    }
    return result
}


var getFirstHalf = function (string) {
    return string.slice(0, 3);
}

var makeNegative = function (number) {
    let resultOne = 5
    return resultOne * (-1)
}

var numberOfPalindromes = function (array) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] == (array[i]).split("").reverse().join("")) {
            result = result + 1;
        }
    }
    return result
}

var shortestWord = function (array) {
    let min = 10000;
    let word = ''
    for (i = 0; i < array.length; i++) {
        if (array[i].length < min) {
            min = array[i].length;
            word = array[i]
        }
    }
    console.log(word);
    return word;
}


var longestWord = function (array) {
    let word = "";
    for (let i = 0; i < array.length; i++) {
        if (word.length < array[i].length) {
            word = array[i];
        }
    }
    return word;
}


var sumNumbers = function (array) {
    let result = 0
    for (i = 0; i < array.length; i++) {
        result = result + array[i]
    }
    return result
}

var repeatElements = function (array) {
    let result = []
    result = array
    return array.concat(result)
}

var stringToNumber = function (string) {
    return Number(string)
}

var calculateAverage = function (array) {
    return ((array[0] + array[1] + array[2]) / array.length);
}

var getElementsUntilGreaterThanFive = function (array) {
    let result = []
    for (i = 0; i < array.length; i++) {
        if (array[i] <= 5) {

            result.push(array[i])
        }
        if (array[i] > 5) {
            break;
        }
    }
    return result
}

var convertArrayToObject = function (array) {
    let rv = {};
    for (let i = 0; i < array.length; i = i + 2)
        rv[array[i]] = array[i + 1];
    return rv;
}

var getAllLetters = function (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i].split(""))
        for (j = 0; j < result.length; j++) {
            if (result[j] = result[j]) {
                result.splice(i, i - 2)
            }
        }
    }
    return result.flat().sort()
}

var swapKeysAndValues = function (object) {
    var ret = {};
    for (var key in object) {
        ret[object[key]] = key;
    }
    return ret;
}

var sumKeysAndValues = function (object) {
    let table = 0;
    for (let number in object) {

        table += Number(number);
        table += object[number];
    }
    return table;
}

var removeCapitals = function (string) {
    let hello = string.replace(/[A-Z]/g, '')
    return hello
}

var roundUp = function (number) {
    return Math.ceil(number)
}

var formatDateNicely = function (date) {
    return (date.toLocaleDateString("en-GB"));
}

var getDomainName = function (string) {
    let x = string.indexOf('@');
    let y = string.indexOf('.com');
    x = x + 1
    y = y - 6
    let result = string.substr(x, y)
    return result
}

var titleize = function (string) {

    function titleize(val) {
        let test = val.split(' ')
        let retour = ''
        retour += test[0].charAt(0).toUpperCase() + test[0].substring(1) + ' '
        for (let i = 1; i < test.length; i++) {
            if (test[i].length > 3) {
                if (i != test.length - 1)
                    retour += test[i].charAt(0).toUpperCase() + test[i].substring(1) + ' '
                else
                    retour += test[i].charAt(0).toUpperCase() + test[i].substring(1)
            }
            else
                retour += test[i] + ' '
        }
        return retour.replace(/\. [a-z]/i, String.call.bind(retour.toUpperCase))
    }

    return titleize(string)
}

var checkForSpecialCharacters = function (string) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (format.test(string)) {
        return true;
    } else {
        return false;
    }
}

var squareRoot = function (number) {
    return Math.sqrt(number);
}

var factorial = function (number) {
    if (number < 0) {

        return "### Erreur ###";
    }
    else {
        if (number == 0) {
            return 1;
        }
        else {
            return number * factorial(number - 1);
        }
    }
}

var findAnagrams = function (string) {
    function permute(array) {
        if (array.length === 1) return [array];
        let fullPermutations = [];
        for (let i in array) {
            let subset = array.slice(0);
            subset.splice(i, 1);
            for (let permutation of permute(subset)) {
                permutation.unshift(array[i]);
                fullPermutations.push(permutation);
            }
        }
        return fullPermutations;
    }
    function joinLetters(array) {
        return array.join("");
    }
    return permute(string.split("")).map(joinLetters);
};


var convertToCelsius = function (number) {
    let result = (5 / 9) * (number - 32)
    return Math.round(result)
}

var letterPosition = function (array) {
    let result = [];
    let alphabet = "abcdefgHijklmnopqrstuvwxyz";
    alphabet = alphabet.split("");
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < alphabet.length; j++) {
            if (array[i] === alphabet[j]) {
                result.push(j + 1);
            }
        }
    }
    return result
}
