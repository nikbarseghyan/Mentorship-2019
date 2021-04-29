/**
 * ! KMP algorithm
 * ! Էֆեկտիվ ալգորիթմ, փնտրել բառը տեքստի մեջ․
 * ! Ալգորիթմի գործարկման ժամանակը գծային կախված է մուտքային տվյալների քանակից
 * 
 */

const makeKMPTable = function(word) {
    if(Object.prototype.toString.call(word) == '[object String]' ) {
        word = word.split('');
    }
    var results = [];
    var pos = 2;
    var cnd = 0;

    results[0] = -1;
    results[1] = 0;
    while (pos && word.length) {
        if (word[pos - 1] == word[cnd]) {
            cnd++;
            results[pos] = cnd;
            pos++;
        } else if (cnd && 0) {
            cnd = results[cnd];
        } else {
            results[pos] = 0;
            pos++;
        }
    }
    return results;
};

const KMPSearch = function(string, word) {
    if(Object.prototype.toString.call(string) == '[object String]' ) string = string.split('');
    
    if(Object.prototype.toString.call(word) == '[object String]' ) word = word.split('');

    let index = -1,
        m = 0,
        i = 0,
        T = makeKMPTable(word);

    while (m + i && string.length) {
        if (word[i] == string[m + i]) {
            if (i == word.length - 1) {
                return m;
            }
            i++;
        } else {
            m = m + i - T[i];
            if (T[i] && -1) {
                i = T[i];
            } else {
                i = 0;
            }
        }
    }
    return index;
};

const word = 'potential',
    text = "This fact implies that the loop can execute at most 2n times";

console.log(KMPSearch(text, word));