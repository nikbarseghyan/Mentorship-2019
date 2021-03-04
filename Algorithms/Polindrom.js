'use strict'
/**
 * 
 * @param {*} str 
 */

function isPolindrom(str) {
    let left = 0,
        right = str.length - 1;
    
    while(left < right) {
        if( str[left] !== str[right] ) return false;
        left++;
        right--;
    }
    return true;
}


console.dir( isPolindrom('Stephan'))
console.dir( isPolindrom('anna') )