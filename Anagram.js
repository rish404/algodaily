// Test if the given string Is An Anagram

function isAnagram (str1, str2){

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    
    console.log(str1,str2)
    
    if (str1 == str2) {
    return true;
    } else return false;
}

console.log(isAnagram('Mary', 'Army'))