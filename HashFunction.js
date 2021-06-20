function hashString(str){
    let finalHash = 0;
    for (let i=0; i<str.length; i++){
        const charCode = str.charCodeAt(i);
        finalHash = finalHash + charCode;
    }
    return finalHash
}
console.log(hashString('rish'))